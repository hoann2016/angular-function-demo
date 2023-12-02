import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoInjsectNgContentComponent } from './demo-injsect-ng-content/demo-injsect-ng-content.component';
import { WrapperNgTemplateComponent } from './wrapper-ng-template/wrapper-ng-template.component';
import { ParrentWrapperComponent } from './parrent-wrapper/parrent-wrapper.component';

const routes: Routes = [
  { path: 'inject-content', component: DemoInjsectNgContentComponent },
  { path: 'condition-content', component: ParrentWrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
