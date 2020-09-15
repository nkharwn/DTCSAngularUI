import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { HttpService } from './http.service';
import { of } from 'rxjs';
import { PatientData } from './mockData/patientData';
import { StateData } from './mockData/stateData';
import { CityData } from './mockData/cityData';




describe('DataService', () => {
  let dataService:DataService;
  let httpervice:HttpService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [DataService,HttpService]
  }));
  beforeEach(() => {
    dataService=TestBed.get(DataService);
    httpervice=TestBed.get(HttpService);
  })
 

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  it('should return patient Data', done => {
    spyOn(dataService,'getPatientData').and.returnValue(of(PatientData))
    dataService.getPatientData().subscribe(response=>{
      expect(response).toEqual(PatientData);
      done();
    });
  });

  it('should return state Data', done => {
    spyOn(dataService,'getStateData').and.returnValue(of(StateData))
    dataService.getStateData().subscribe(response=>{
      expect(response).toEqual(StateData);
      done();
    });
  });

  it('should return city data based on state ID', done => {
    spyOn(dataService,'getCityData').and.returnValue(of(CityData))
    dataService.getCityData(2).subscribe(response=>{
      expect(response).toEqual(CityData);
      done();
    });
  });

  it('should resgister pateint data', done => {
    spyOn(dataService,'postPatientData').and.returnValue(of({"statusCode":200}))
    let patientDetail=PatientData[0];
    patientDetail.name="Alen"
    dataService.postPatientData(patientDetail).subscribe(response=>{
      expect(response).toEqual({"statusCode":200});
      done();
    });
  });

  it('should not resgister duplicate pateint data', done => {
    spyOn(dataService,'postPatientData').and.returnValue(of({"statusCode":422}))
    let patientDetail=PatientData[0];
    dataService.postPatientData(patientDetail).subscribe(response=>{
      expect(response).toEqual({"statusCode":422});
      done();
    });
  });
  it('should not alloow special carecter in name and surname of pateint data', done => {
    spyOn(dataService,'postPatientData').and.returnValue(of({"statusCode":400}))
    let patientDetail=PatientData[0];
    patientDetail.name="Alen$"
    patientDetail.name="s@olly"

    dataService.postPatientData(patientDetail).subscribe(response=>{
      expect(response).toEqual({"statusCode":400});
      done();
    });
  });


});
