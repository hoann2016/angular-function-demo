import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { InjectedComponent } from './injected/injected.component';
import { DemoInjsectNgContentComponent } from './demo-injsect-ng-content/demo-injsect-ng-content.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NgContentComponent,
    InjectedComponent,
    DemoInjsectNgContentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
