import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProducsComponent } from './category-producs.component';

describe('CategoryProducsComponent', () => {
  let component: CategoryProducsComponent;
  let fixture: ComponentFixture<CategoryProducsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryProducsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryProducsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
