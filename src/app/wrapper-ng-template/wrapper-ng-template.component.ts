import { Component, ContentChild } from '@angular/core';
import { ZippyContentDirective } from './ZippyContentDirective';
@Component({
  selector: 'app-wrapper-ng-template',
  templateUrl: './wrapper-ng-template.component.html',
  styleUrls: ['./wrapper-ng-template.component.scss'],
})
export class WrapperNgTemplateComponent {
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
  expanded = false;
  contentId = 'some id';
}
