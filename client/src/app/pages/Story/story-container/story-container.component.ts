import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-story-container',
  templateUrl: './story-container.component.html',
  styleUrls: ['./story-container.component.scss']
})
export class StoryContainerComponent implements OnInit {

  @Input() user;
  @Output()  nextStory = new EventEmitter();

  slide = 0;
  imagesLength: any;

  nextClick(id){
    if (this.slide < this.imagesLength - 1) {
      this.slide += 1;
      this.nextStory.emit(id);
    } else {
      this.nextStory.emit(true);
    }
  }

  constructor() { }
  ngOnInit(): void {
    this.imagesLength = this.user.value.length;
  }

}
