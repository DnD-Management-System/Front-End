import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsAbilityCardComponent } from './cs-ability-card.component';

describe('AbilityCardComponent', () => {
  let component: CsAbilityCardComponent;
  let fixture: ComponentFixture<CsAbilityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsAbilityCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsAbilityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
