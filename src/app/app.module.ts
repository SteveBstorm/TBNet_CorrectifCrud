import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './components/liste/liste.component';
import { AjoutComponent } from './components/ajout/ajout.component';
import { DetailComponent } from './components/detail/detail.component';
import { MajComponent } from './components/maj/maj.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    AjoutComponent,
    DetailComponent,
    MajComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
