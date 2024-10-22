import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatehebergementComponent } from './updatehebergement.component';

describe('UpdatehebergementComponent', () => {
  let component: UpdatehebergementComponent;
  let fixture: ComponentFixture<UpdatehebergementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatehebergementComponent]
    });
    fixture = TestBed.createComponent(UpdatehebergementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
