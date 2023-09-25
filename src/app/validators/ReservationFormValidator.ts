import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { DinnerRegion } from '@models/DinnerRegion';

@Injectable({ providedIn: 'root' })
export class ReservationFormValidator {
    public validateChildrensAllowedByDinnerRegion(regions: DinnerRegion[]): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {

            if (!regions.length) { return null; }

            const dinnerRegionControl = control.get('reservationInfoForm.dinnerRegion');
            const childrensControl = control.get('reservationInfoForm.childrens');

            if (!dinnerRegionControl || !childrensControl) {
                return null;
            }

            const dinnerRegionValue = dinnerRegionControl.value;
            const childrensValue = childrensControl.value;

            if (!dinnerRegionValue || !childrensValue) {
                return null;
            }

            const selectedRegion = regions.filter((region: DinnerRegion) => region.id === dinnerRegionValue.id)[0];
            if (childrensValue > 0 && !selectedRegion.acceptChildren) {
                return { childrensNotAllowedInDinnerRegion: true };
            }

            return null;
        };
    }
    public maxPaxExceedByDinnerRegion(regions: DinnerRegion[]): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {

            if (!regions.length) { return null; }

            const dinnerRegionControl = control.get('reservationInfoForm.dinnerRegion');
            const childrensControl = control.get('reservationInfoForm.childrens');
            const paxControl = control.get('reservationInfoForm.pax');

            if (!dinnerRegionControl || !paxControl) {
                return null;
            }

            const dinnerRegionValue = dinnerRegionControl.value;
            const paxControlValue = paxControl.value;

            if (!paxControlValue || !dinnerRegionValue) {
                return null;
            }
            const childrensValue = childrensControl?.value;
            const maxPax = childrensValue ? Number(paxControlValue) + Number(childrensValue) : Number(paxControlValue);
            const selectedRegion = regions.filter((region: DinnerRegion) => region.id === dinnerRegionValue.id)[0];
            const isExceeded = maxPax > selectedRegion.maxPax;

            if (isExceeded) {
                return { maxPaxExceeded: true };
            }

            return null;
        };
    }
}
