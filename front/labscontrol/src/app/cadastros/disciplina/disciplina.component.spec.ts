import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaComponent } from './disciplina.component';

describe('DisciplinaComponent', () => {
  let component: DisciplinaComponent;
  let fixture: ComponentFixture<DisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
