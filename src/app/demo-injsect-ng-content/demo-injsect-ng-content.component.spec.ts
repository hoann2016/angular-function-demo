import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInjsectNgContentComponent } from './demo-injsect-ng-content.component';

describe('DemoInjsectNgContentComponent', () => {
  let component: DemoInjsectNgContentComponent;
  let fixture: ComponentFixture<DemoInjsectNgContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoInjsectNgContentComponent]
    });
    fixture = TestBed.createComponent(DemoInjsectNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
