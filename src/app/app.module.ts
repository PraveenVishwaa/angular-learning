import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertcomponentComponent } from './alertcomponent/alertcomponent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { custominterseptor } from './custominterseptor'

@NgModule({
  declarations: [
    AppComponent,
    AlertcomponentComponent,
    PageNotFoundComponent,
    CustomdirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:custominterseptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
