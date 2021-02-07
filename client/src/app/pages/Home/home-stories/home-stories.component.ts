import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-stories',
  templateUrl: './home-stories.component.html',
  styleUrls: ['./home-stories.component.scss']
})
export class HomeStoriesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  stories = [];
  data: any;



ngOnInit(): void {
    this.http.get('http://localhost:5000/instagram-clone-ad247/europe-west1/api/stories')
    .subscribe(data => {
      this.data = data;

      this.stories = this.data;

      console.log(this.stories)
    });

  }


}
