import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryContainerComponent } from './story-container.component';

describe('StoryContainerComponent', () => {
  let component: StoryContainerComponent;
  let fixture: ComponentFixture<StoryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
