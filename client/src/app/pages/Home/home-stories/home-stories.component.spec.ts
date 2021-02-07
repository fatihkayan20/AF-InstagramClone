import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStoriesComponent } from './home-stories.component';

describe('HomeStoriesComponent', () => {
  let component: HomeStoriesComponent;
  let fixture: ComponentFixture<HomeStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
