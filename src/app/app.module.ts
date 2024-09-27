import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InBaseComponent } from './in-base/in-base.component';
import { ExBaseComponent } from './ex-base/ex-base.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { ShowAllStudentsComponent } from './show-all-students/show-all-students.component';

@NgModule({
  declarations: [
    AppComponent,
    InBaseComponent,
    ExBaseComponent,
    LoginComponent,
    AddNewStudentComponent,
    ShowAllStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
