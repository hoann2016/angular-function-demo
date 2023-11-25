import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoInjsectNgContentComponent } from './demo-injsect-ng-content/demo-injsect-ng-content.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'inject-content', component: DemoInjsectNgContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
