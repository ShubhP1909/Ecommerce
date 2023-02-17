import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetelectronicsComponent } from './getelectronics.component';

describe('GetelectronicsComponent', () => {
  let component: GetelectronicsComponent;
  let fixture: ComponentFixture<GetelectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetelectronicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetelectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
