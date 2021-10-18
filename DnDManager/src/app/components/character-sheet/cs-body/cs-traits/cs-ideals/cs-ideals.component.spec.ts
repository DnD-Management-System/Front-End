import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsIdealsComponent } from './cs-ideals.component';

describe('CsIdealsComponent', () => {
  let component: CsIdealsComponent;
  let fixture: ComponentFixture<CsIdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsIdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsIdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
