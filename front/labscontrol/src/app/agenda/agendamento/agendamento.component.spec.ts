import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoComponent } from './agendamento.component';

describe('AgendamentoComponent', () => {
  let component: AgendamentoComponent;
  let fixture: ComponentFixture<AgendamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
