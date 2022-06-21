import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Photo } from './app.component';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosResolver implements Resolve<any> {
  // Great Article: https://www.bacancytechnology.com/blog/angular-resolver
  // it explains why you don't need the subscribe here at the resolver
  constructor(private appService: AppService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.appService.getPhotos().pipe(map(value=>{
      console.log('Reached Here at the resolver');
      return value;
    }))
  }
}
