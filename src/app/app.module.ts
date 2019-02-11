import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule, MatProgressSpinnerModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KpiComponentComponent } from './kpi-component/kpi-component.component';

@NgModule({
  declarations: [
    AppComponent,
    KpiComponentComponent
  ],
  exports:[
    MatCardModule,

    MatProgressSpinnerModule
  ],
  imports: [
    MatCardModule,
    MatProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
