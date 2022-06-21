import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: AppService, private activeRoute: ActivatedRoute) { }
  title = 'resolver-example-to-the-morning';
  photos: Photo[] = [];

  displayedColumns: string[] = ['albumId', 'id', 'title', 'url','thumbnailUrl'];
  dataSource: Photo[] = [];

  ngOnInit() {
    this.activeRoute.data.subscribe((res: any)=>{
      console.log('Reaching App Component');
      this.dataSource = res.photos;
    })
  }
}


export interface Photo {
  albumId: number,
  id: number,
  title: string,
  url: string
  thumbnailUrl: string
}