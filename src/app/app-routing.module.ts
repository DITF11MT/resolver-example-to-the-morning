import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PhotosResolver } from './photos.resolver';
import { ResolveExpComponent } from './resolve-exp/resolve-exp.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    resolve: { photos: PhotosResolver }
  },
  {
    path: 'resolve-experience',
    component: ResolveExpComponent,
    resolve: { photos: PhotosResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
