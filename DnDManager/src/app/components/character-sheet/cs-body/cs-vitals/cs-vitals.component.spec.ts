import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsVitalsComponent } from './cs-vitals.component';

describe('CsVitalsComponent', () => {
  let component: CsVitalsComponent;
  let fixture: ComponentFixture<CsVitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsVitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
