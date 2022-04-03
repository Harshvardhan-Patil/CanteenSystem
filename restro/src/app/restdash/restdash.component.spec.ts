import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestdashComponent } from './restdash.component';

describe('RestdashComponent', () => {
  let component: RestdashComponent;
  let fixture: ComponentFixture<RestdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
