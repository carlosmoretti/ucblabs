import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensconfiguracaoComponent } from './itensconfiguracao.component';

describe('ItensconfiguracaoComponent', () => {
  let component: ItensconfiguracaoComponent;
  let fixture: ComponentFixture<ItensconfiguracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensconfiguracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensconfiguracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
