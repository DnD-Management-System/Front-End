import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsBondsComponent } from './cs-bonds.component';

describe('CsBondsComponent', () => {
  let component: CsBondsComponent;
  let fixture: ComponentFixture<CsBondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsBondsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsBondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
