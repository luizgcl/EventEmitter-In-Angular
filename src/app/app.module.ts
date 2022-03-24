import { EventService } from './events/service/event.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimayComponent } from './primay-component/primay-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module,
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
