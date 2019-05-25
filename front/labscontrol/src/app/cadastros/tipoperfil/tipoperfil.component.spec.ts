import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoperfilComponent } from './tipoperfil.component';

describe('TipoperfilComponent', () => {
  let component: TipoperfilComponent;
  let fixture: ComponentFixture<TipoperfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoperfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
