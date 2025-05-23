import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBinddingComponent } from './data-bindding.component';

describe('DataBinddingComponent', () => {
  let component: DataBinddingComponent;
  let fixture: ComponentFixture<DataBinddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBinddingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBinddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
