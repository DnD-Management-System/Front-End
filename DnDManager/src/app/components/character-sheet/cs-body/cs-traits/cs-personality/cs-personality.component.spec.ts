import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsPersonalityComponent } from './cs-personality.component';

describe('CsPersonalityComponent', () => {
  let component: CsPersonalityComponent;
  let fixture: ComponentFixture<CsPersonalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsPersonalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsPersonalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
