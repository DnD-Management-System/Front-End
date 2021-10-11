import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTraitsComponent } from './cs-traits.component';

describe('CsTraitsComponent', () => {
  let component: CsTraitsComponent;
  let fixture: ComponentFixture<CsTraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsTraitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
