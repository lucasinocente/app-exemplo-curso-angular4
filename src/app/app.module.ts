import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component';
import { InlineComponent } from './inline/inline.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    InlineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
