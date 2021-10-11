import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsInventoryComponent } from './cs-inventory.component';

describe('CsInventoryComponent', () => {
  let component: CsInventoryComponent;
  let fixture: ComponentFixture<CsInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
