import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Config } from '@models/Config';
import { DinnerRegion } from '@models/DinnerRegion';
import { ReservationInfo } from '@models/Reservation';
import { UserInfo } from '@models/UserInfo';
import { Store } from '@ngrx/store';
import { selectCoreConfig } from '@store/core/core.selectors';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ReservationFormValidator } from 'src/app/validators/ReservationFormValidator';

@Component({
    selector: 'app-reservation-form',
    templateUrl: './reservation-form.component.html',
    styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {

    public dinnerRegions: DinnerRegion[] = [];

    public isEdit = false;
    public preEdit = false;
    public reservationId: number;
    public reservationInfo: ReservationInfo;
    public userInfo: UserInfo;

    public reservationForm!: FormGroup;
    public canSubmit = false;

    public coreConfig$: Observable<Config> = new Observable<Config>();

    constructor(
        private store: Store,
        private formBuilder: FormBuilder,
        public ref: DynamicDialogRef,
        public ddConfig: DynamicDialogConfig,
        private reservationFormValidator: ReservationFormValidator) {
        this.isEdit = this.ddConfig?.data?.isEdit as boolean;
        this.preEdit = this.ddConfig?.data?.preEdit as boolean;
        this.reservationId = this.ddConfig?.data?.reservationInfo as number;
        this.reservationInfo = this.ddConfig?.data?.reservationInfo as ReservationInfo;
        this.userInfo = this.ddConfig?.data?.userInfo as UserInfo;
    }

    ngOnInit(): void {
        this.coreConfig$ = this.store.select(selectCoreConfig).pipe(tap((config: Config) => {
            this.dinnerRegions = config.restaurant.regions;
            const currentDinnerRegion = this.dinnerRegions.find((dinnerRegion: DinnerRegion) => dinnerRegion.id === this.reservationInfo?.dinnerRegionId);
            this.reservationForm = this.formBuilder.group({
                reservationInfoForm: this.formBuilder.group({
                    date: [this.reservationInfo?.date ? new Date(this.reservationInfo?.date) : null, [Validators.required]],
                    hour: [this.reservationInfo?.date ? new Date(this.reservationInfo?.date).getHours() : '18', [Validators.required]],
                    minutes: [this.reservationInfo?.date ? new Date(this.reservationInfo?.date).getMinutes() : '00', [Validators.required]],
                    dinnerRegion: [currentDinnerRegion || null, [Validators.required]],
                    pax: [this.reservationInfo?.pax || null, [Validators.required]],
                    childrens: [this.reservationInfo?.childrens || null, [Validators.required]]
                }),
                userInfoForm: this.formBuilder.group({
                    name: [{ value: this.userInfo?.name, disabled: this.isEdit }, [Validators.required]],
                    email: [{ value: this.userInfo?.email, disabled: this.isEdit }, [Validators.required, Validators.email]],
                    phone: [{ value: this.userInfo?.phone, disabled: this.isEdit }, [Validators.required]],
                })
            });

            this.reservationForm.addValidators([
                this.reservationFormValidator.validateChildrensAllowedByDinnerRegion(this.dinnerRegions),
                this.reservationFormValidator.maxPaxExceedByDinnerRegion(this.dinnerRegions)
            ]
            );
        }));
    }

    public submit = (): void => {
        if (this.reservationForm.valid) {

            const { dinnerRegion, date, hour, minutes, pax, childrens } = this.reservationForm.get('reservationInfoForm')?.value;
            const { name, email, phone } = this.reservationForm.get('userInfoForm')?.value;

            const reservationFormatedDate = new Date(date);
            reservationFormatedDate.setHours(hour, minutes);
            let reservationData = {
                reservationInfoForm: {
                    date: reservationFormatedDate,
                    dinnerRegionId: dinnerRegion.id,
                    pax,
                    childrens
                },
                userInfoForm: {
                    name, email, phone
                }
            };

            if (this.preEdit) {
                reservationData = { ...this.reservationInfo, ...reservationData };
            }
            return this.ref.close({ reservationInfoForm: reservationData.reservationInfoForm, userInfoForm: reservationData.userInfoForm });
        }
    };

    public reservationFormHasSameValues = (): void => {

        if (!this.isEdit) { this.canSubmit = true; return; }

        const { dinnerRegion, date, pax, childrens } = this.reservationForm.get('reservationInfoForm')?.value;
        const { name, email, phone } = this.reservationForm.get('userInfoForm')?.value;

        const formValues = {
            date,
            pax,
            dinnerRegionId: dinnerRegion.id,
            childrens,
            name,
            email,
            phone
        } as any;


        const formValuesKeys = Object.keys(formValues);
        const initialValues = {
            date: this.reservationInfo?.date,
            pax: this.reservationInfo?.pax,
            dinnerRegionId: this.reservationInfo?.dinnerRegionId,
            childrens: this.reservationInfo?.childrens,
            name: this.userInfo?.name,
            email: this.userInfo?.email,
            phone: this.userInfo?.phone
        } as any;

        const initialValuesKeys = Object.keys(initialValues);

        for (const key of formValuesKeys) {
            if (!initialValuesKeys.includes(key) || formValues[key] !== initialValues[key]) {
                this.canSubmit = true;
                return;
            }
        }
        this.canSubmit = false;
    };
}
