import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellSheetComponent } from './spell-sheet.component';

describe('SpellSheetComponent', () => {
  let component: SpellSheetComponent;
  let fixture: ComponentFixture<SpellSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
