import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterhebergementComponent } from './ajouterhebergement.component';

describe('AjouterhebergementComponent', () => {
  let component: AjouterhebergementComponent;
  let fixture: ComponentFixture<AjouterhebergementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterhebergementComponent]
    });
    fixture = TestBed.createComponent(AjouterhebergementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
