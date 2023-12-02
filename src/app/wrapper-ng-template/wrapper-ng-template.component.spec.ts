import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperNgTemplateComponent } from './wrapper-ng-template.component';

describe('WrapperNgTemplateComponent', () => {
  let component: WrapperNgTemplateComponent;
  let fixture: ComponentFixture<WrapperNgTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperNgTemplateComponent]
    });
    fixture = TestBed.createComponent(WrapperNgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
