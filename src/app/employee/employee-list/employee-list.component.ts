import { EmployeeService } from "./../employee.service";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';


import Employee from "../../models/Employee";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent {
  employees: Employee[] = [
     {id:1,employeeNameAr:"AHMED",employeeNameEn:"Ahmed",isManager:true,joinDate: Date.now()},
     {id:2,employeeNameAr:"AHMED2",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:3,employeeNameAr:"AHMED3",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:4,employeeNameAr:"AHMED4",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:5,employeeNameAr:"AHMED5",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:6,employeeNameAr:"AHMED6",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:7,employeeNameAr:"AHMED7",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:8,employeeNameAr:"AHMED8",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:9,employeeNameAr:"AHMED9",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:10,employeeNameAr:"AHMED10",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:11,employeeNameAr:"AHMED11",employeeNameEn:"Ahmed2",isManager:true,joinDate: Date.now()}



  ];
  isLoading: boolean = false;

  constructor(
    private employee_service: EmployeeService,
    private toast: ToastrService,
  ) {}

  ngOnInit() {
    // const refrence = this.employee_service.getEmployees();
    // refrence.subscribe((response: any) => {
    //   this.employees = response;
    //   this.isLoading = false;
    //   console.log("emplyees", this.employees);
    // });
    console.log("emplyees", this.employees);
  }

  getname() {
    console.log("getname");
  }

  handleDelete(id) {
    const confirmed = confirm('Are You Sure You Wanna Delete This Item?');
    confirmed &&
    this.employee_service.deleteEmployee(id)
    .subscribe(response => {
      this.employees = this.employees.filter(employee => employee.id != id);
      this.toast.success('Employee Was Deleted');
    });
  }
}
