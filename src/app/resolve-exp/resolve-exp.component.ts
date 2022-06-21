import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../app.component';

@Component({
  selector: 'app-resolve-exp',
  templateUrl: './resolve-exp.component.html',
  styleUrls: ['./resolve-exp.component.css']
})
export class ResolveExpComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((res: any) => {
      console.log('Reached The Component After The Resolver');
      this.photos = res.photos;
    })
  }

}
