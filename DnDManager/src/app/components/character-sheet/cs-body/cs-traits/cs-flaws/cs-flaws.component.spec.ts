import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFlawsComponent } from './cs-flaws.component';

describe('CsFlawsComponent', () => {
  let component: CsFlawsComponent;
  let fixture: ComponentFixture<CsFlawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsFlawsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsFlawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
