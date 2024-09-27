import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddNewStudentComponent } from '../add-new-student/add-new-student.component';
import { ShowAllStudentsComponent } from '../show-all-students/show-all-students.component';

const routes: Routes = [
  {path:'add-new-student', component:AddNewStudentComponent},
  {path:'show-all-students', component:ShowAllStudentsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class RegistrationModule { }
