import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '@models/UserInfo';
import { getApiUrl } from './api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class UsersService {

    USERS_API_ENDOPOINT = '/users';

    constructor(private http: HttpClient) {
    }

    public getAllUsers(): Observable<UserInfo[]> {
        return this.http.get<UserInfo[]>(getApiUrl(this.USERS_API_ENDOPOINT));
    }

    public getUser(id: number): Observable<UserInfo> {
        return this.http.get<UserInfo>(getApiUrl(`${this.USERS_API_ENDOPOINT}/${id}`));
    }

    public createUser(name: string, email: string, phone: string): Observable<UserInfo> {
        return this.http.post<UserInfo>(getApiUrl(`${this.USERS_API_ENDOPOINT}`), { name, email, phone }).pipe(
            map(({ id }: { id: number }) => ({ id, name, email, phone }))
        );
    }

    public updateUser(user: UserInfo): Observable<UserInfo> {
        return this.http.put<UserInfo>(getApiUrl(`${this.USERS_API_ENDOPOINT}/${user.id}`), {
            id: user.id, name: user.name, email: user.email, phone: user.phone
        }).pipe(map(() => ({ ...user })));
    }

    public deleteUser(id: number): Observable<boolean> {
        return this.http.delete<boolean>(getApiUrl(`${this.USERS_API_ENDOPOINT}/${id}`)).pipe(map(() => true));
    }

}
