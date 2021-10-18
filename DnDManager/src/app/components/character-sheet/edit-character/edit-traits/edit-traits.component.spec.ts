import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTraitsComponent } from './edit-traits.component';

describe('EditTraitsComponent', () => {
  let component: EditTraitsComponent;
  let fixture: ComponentFixture<EditTraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTraitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
