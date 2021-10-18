import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsProficienciesComponent } from './cs-proficiencies.component';

describe('CsProficienciesComponent', () => {
  let component: CsProficienciesComponent;
  let fixture: ComponentFixture<CsProficienciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsProficienciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsProficienciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
