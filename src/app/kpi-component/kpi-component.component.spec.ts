import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiComponentComponent } from './kpi-component.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

describe('KpiComponentComponent', () => {
  let component: KpiComponentComponent;
  let fixture: ComponentFixture<KpiComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiComponentComponent ],
      imports: [
        MatCardModule,
        MatProgressSpinnerModule,
        BrowserModule,
        AppRoutingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
