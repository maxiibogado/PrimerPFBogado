import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { ToolbarModule } from './toolbar/toolbar.module';
import { NavbarModule } from './abm-alumnos/abm-alumnos.module';
import { TitleSizeDirective } from './title-size.directive';
import { AlumnosRegistradosModule } from './alumnos-registrados/alumnos-registrados.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleSizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    NavbarModule,
    AlumnosRegistradosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
