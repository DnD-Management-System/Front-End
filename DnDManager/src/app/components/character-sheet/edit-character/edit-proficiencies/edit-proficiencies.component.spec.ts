import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProficienciesComponent } from './edit-proficiencies.component';

describe('EditProficienciesComponent', () => {
  let component: EditProficienciesComponent;
  let fixture: ComponentFixture<EditProficienciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProficienciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProficienciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
