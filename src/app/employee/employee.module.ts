import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DataTablesModule } from 'angular-datatables';

import { EmployeeService } from "./employee.service";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    EmployeeListComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule

  ],
  exports: [],
  providers: [EmployeeService]
})
export class EmployeeModule {}
