import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendentesReadComponent } from './atendentes-read.component';

describe('AtendentesReadComponent', () => {
  let component: AtendentesReadComponent;
  let fixture: ComponentFixture<AtendentesReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtendentesReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtendentesReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
