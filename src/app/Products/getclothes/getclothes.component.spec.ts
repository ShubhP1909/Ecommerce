import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetclothesComponent } from './getclothes.component';

describe('GetclothesComponent', () => {
  let component: GetclothesComponent;
  let fixture: ComponentFixture<GetclothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetclothesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
