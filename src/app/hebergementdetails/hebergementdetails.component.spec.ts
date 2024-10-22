import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebergementdetailsComponent } from './hebergementdetails.component';

describe('HebergementdetailsComponent', () => {
  let component: HebergementdetailsComponent;
  let fixture: ComponentFixture<HebergementdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HebergementdetailsComponent]
    });
    fixture = TestBed.createComponent(HebergementdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
