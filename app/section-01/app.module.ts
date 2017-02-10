import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// This decorator describes the class that follows it
@NgModule({
  imports:      [ BrowserModule, FormsModule ], // What stuff do I need?
  declarations: [ AppComponent ],  // What's in my app module?
  bootstrap:    [ AppComponent ]   // Where do I start?
})
export class AppModule { }
