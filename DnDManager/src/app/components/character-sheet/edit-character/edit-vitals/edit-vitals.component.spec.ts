import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVitalsComponent } from './edit-vitals.component';

describe('EditVitalsComponent', () => {
  let component: EditVitalsComponent;
  let fixture: ComponentFixture<EditVitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
