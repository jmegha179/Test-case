import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreateMock, providerListMock } from './mock';
import { catchError, map } from 'rxjs/operators';
@Injectable({providedIn: 'root'})
export class ToDoService {
    constructor(
        private http: HttpClient,
    ) { }


    /**
     * Used to get provider list.
     */
    getProviderList(): Observable<any[]> {
        return of(new CreateMock(providerListMock).mock).pipe(
            map(res => res.data)
        );

    }
}