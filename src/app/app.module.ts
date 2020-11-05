import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from "./app.component";
import { appRouting } from './app.routing';

import { EmployeeModule } from "./employee/employee.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    appRouting,
    EmployeeModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true,
    })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
