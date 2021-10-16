import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFeatureDetailsComponent } from './cs-feature-details.component';

describe('CsFeatureDetailsComponent', () => {
  let component: CsFeatureDetailsComponent;
  let fixture: ComponentFixture<CsFeatureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsFeatureDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsFeatureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
