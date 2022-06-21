import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveExpComponent } from './resolve-exp.component';

describe('ResolveExpComponent', () => {
  let component: ResolveExpComponent;
  let fixture: ComponentFixture<ResolveExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolveExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolveExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
