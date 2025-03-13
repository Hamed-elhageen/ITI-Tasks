import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowchildComponent } from './showchild.component';

describe('ShowchildComponent', () => {
  let component: ShowchildComponent;
  let fixture: ComponentFixture<ShowchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
