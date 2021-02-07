import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private location: Location) {   }

  stories = {};
  data: any;
  active: number = 2;


  id = '';
  username = '';


  // tslint:disable-next-line: typedef
  nextStory(value: boolean, user: string  , id: string ){
    console.log(user)
    if (value === true){
      this.location.replaceState(`/stories/${user}/${id}`);
      this.username = user;
    }else{
      this.location.replaceState(`/stories/${this.username}/${value}`);
    }
  }

ngOnInit(): void {

   this.id = this.activatedRoute.snapshot.paramMap.get('id');
   this.username = this.activatedRoute.snapshot.paramMap.get('username');

   this.http.get('http://localhost:5000/instagram-clone-ad247/europe-west1/api/stories')
  .subscribe(data => {
    this.data = data;

    this.stories = this.data;
    console.log(this.stories)
  });


  }
}
