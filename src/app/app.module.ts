import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { InjectedComponent } from './injected/injected.component';
import { DemoInjsectNgContentComponent } from './demo-injsect-ng-content/demo-injsect-ng-content.component';
import { HeaderComponent } from './header/header.component';
import { WrapperNgTemplateComponent } from './wrapper-ng-template/wrapper-ng-template.component';
import { ParrentWrapperComponent } from './parrent-wrapper/parrent-wrapper.component';
import { ZippyContentDirective } from './wrapper-ng-template/ZippyContentDirective';

@NgModule({
  declarations: [
    AppComponent,
    NgContentComponent,
    InjectedComponent,
    DemoInjsectNgContentComponent,
    HeaderComponent,
    WrapperNgTemplateComponent,
    ParrentWrapperComponent,
    ZippyContentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
