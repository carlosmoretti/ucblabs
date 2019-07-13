import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentodetailComponent } from './agendamentodetail.component';

describe('AgendamentodetailComponent', () => {
  let component: AgendamentodetailComponent;
  let fixture: ComponentFixture<AgendamentodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendamentodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
