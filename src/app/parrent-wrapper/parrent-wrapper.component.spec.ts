import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrentWrapperComponent } from './parrent-wrapper.component';

describe('ParrentWrapperComponent', () => {
  let component: ParrentWrapperComponent;
  let fixture: ComponentFixture<ParrentWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParrentWrapperComponent]
    });
    fixture = TestBed.createComponent(ParrentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
