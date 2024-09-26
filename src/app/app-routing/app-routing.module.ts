import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InBaseComponent } from '../in-base/in-base.component';
import { ExBaseComponent } from '../ex-base/ex-base.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: 'login', component: ExBaseComponent, children: [{ path: '', component: LoginComponent }] },
  { path: 'reg', component: InBaseComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
