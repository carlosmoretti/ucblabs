import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioComponent } from './laboratorio.component';

describe('LaboratorioComponent', () => {
  let component: LaboratorioComponent;
  let fixture: ComponentFixture<LaboratorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
