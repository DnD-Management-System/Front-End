import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAbilitiesComponent } from './edit-abilities.component';

describe('EditAbilitiesComponent', () => {
  let component: EditAbilitiesComponent;
  let fixture: ComponentFixture<EditAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAbilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
