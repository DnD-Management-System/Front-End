import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsActionsComponent } from './cs-actions.component';

describe('CsActionsComponent', () => {
  let component: CsActionsComponent;
  let fixture: ComponentFixture<CsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
