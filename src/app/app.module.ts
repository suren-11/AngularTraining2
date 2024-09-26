import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InBaseComponent } from './in-base/in-base.component';
import { ExBaseComponent } from './ex-base/ex-base.component';

@NgModule({
  declarations: [
    AppComponent,
    InBaseComponent,
    ExBaseComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
