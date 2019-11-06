import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeoCodingService {

    constructor(private httpService: HttpClient) {
    }

    public getGeolocation(address) {
        console.log(address);
        console.log("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyAH8Wazn0jTIM6YVe6ZYxrZhsu5CKkgDt8")
        return this.httpService.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyAH8Wazn0jTIM6YVe6ZYxrZhsu5CKkgDt8")
    }
}