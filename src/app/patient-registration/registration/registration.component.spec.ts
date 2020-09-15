import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http'
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { DatePipe } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { HttpService } from '../../shared/service/http.service';
import { DataService } from '../../shared/service/data.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  let dataService:DataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports:[FormsModule,HttpClientModule,HttpClientTestingModule],
      providers:[DataService,DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    dataService=TestBed.get(DataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title Patient Registration', () => {
    fixture.detectChanges();
    const title:DebugElement =fixture.debugElement.query(By.css('#title'));
    expect(title.nativeElement.innerText).toBe('Patient Registration');
  });
});
