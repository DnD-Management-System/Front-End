import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellLevelContentComponent } from './spell-level-content.component';

describe('SpellLevelContentComponent', () => {
  let component: SpellLevelContentComponent;
  let fixture: ComponentFixture<SpellLevelContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellLevelContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellLevelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
