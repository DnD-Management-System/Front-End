import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsBodyComponent } from './cs-body.component';

describe('CsBodyComponent', () => {
  let component: CsBodyComponent;
  let fixture: ComponentFixture<CsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
