import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppSettings {
    API_URL = "http://localhost:26142/api/";

    getApiUrl(endpoint) {
        return `${this.API_URL}/${endpoint}`;
    }
}