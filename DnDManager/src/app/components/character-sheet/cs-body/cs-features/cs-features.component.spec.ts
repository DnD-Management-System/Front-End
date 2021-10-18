import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFeaturesComponent } from './cs-features.component';

describe('CsFeaturesComponent', () => {
  let component: CsFeaturesComponent;
  let fixture: ComponentFixture<CsFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
