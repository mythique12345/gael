import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvtCompComponent } from './evt-comp.component';

describe('EvtCompComponent', () => {
  let component: EvtCompComponent;
  let fixture: ComponentFixture<EvtCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvtCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvtCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
