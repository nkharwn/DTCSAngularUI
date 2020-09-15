import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endpoints } from '../constants/endpoints';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService: HttpService) { }

  getPatientData(): Observable<any> {
    const patientDataUrl = `${environment.patientRegistrationApiUrl}${Endpoints.patient}`;
    return this.httpService.get(patientDataUrl);
  }

  postPatientData(patientData: any): Observable<any> {
    const patientDataUrl = `${environment.patientRegistrationApiUrl}${Endpoints.patient}`;
    return this.httpService.post(patientDataUrl, patientData);
  }
  getStateData(): Observable<any> {
    const stateDataUrl = `${environment.patientRegistrationApiUrl}${Endpoints.state}`;
    return this.httpService.get(stateDataUrl);
  }

  getCityData(stateId: number): Observable<any> {
    const cityDataUrl = `${environment.patientRegistrationApiUrl}${Endpoints.city}/${stateId}`;
    return this.httpService.get(cityDataUrl);
  }



}
