import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
import { PatientDetail } from '../models/patientDetails';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  patientDetail: PatientDetail = new PatientDetail();
  stateData: any = [];
  cityData: any = [];
  patientData: any = [];
  maxDate: string;
  minDate: string;

  constructor(private dataService: DataService, private datePipe: DatePipe) { }

  ngOnInit() {
    var date = new Date();
    this.maxDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    this.minDate = this.datePipe.transform(date.setFullYear(date.getFullYear() - 100), 'yyyy-MM-dd');
    this.getPatientData();
    this.getStateData();
    this.setPatientDetail();
  }

  setPatientDetail() {
    this.patientDetail = new PatientDetail();
    this.patientDetail.stateId = -1;
    this.patientDetail.cityId = -1;
    this.patientDetail.gender = "-1";
  }

  getPatientData() {
    this.dataService.getPatientData().subscribe(response => {
      this.patientData = response;
    }, err => {
      alert("Error accored while fetching patients Data")
    });

  }

  getStateData() {
    this.dataService.getStateData().subscribe(response => {
      this.stateData = response;
    }, err => {
      alert("Error accored while fetching states Data")
    });

  }

  getCityData(stateid: number) {
    this.dataService.getCityData(stateid).subscribe(response => {
      this.patientDetail.cityId=-1;
      this.cityData = response;
    }, err => {
      alert("Error accored while fetching states Data")
    });

  }

  registerPatient() {
    debugger;
    this.dataService.postPatientData(this.patientDetail).subscribe(response => {
      this.stateData = response;
      this.getPatientData();
      this.setPatientDetail();
      this.getStateData();
      this.cityData=[];
    }, err => {
      if(err['status']===422)
      alert("Duplicate Record not allowed");
      else
      alert("Error accored while posting patient Data")
      this.getPatientData();
    });

  }
  onKeyPress(event: any) {
    return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123);
  }
}
