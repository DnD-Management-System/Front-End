import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsStatsComponent } from './cs-stats.component';

describe('CsStatsComponent', () => {
  let component: CsStatsComponent;
  let fixture: ComponentFixture<CsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
