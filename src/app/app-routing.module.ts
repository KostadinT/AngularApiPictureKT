import { AddPhotoComponent } from './add-photo/add-photo.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: PhotoListComponent},
  {path: 'photo', component: PhotoListComponent},
  {path: 'photo/:id', component: PhotoComponent},
  {path: 'add-photo', component: AddPhotoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PhotoComponent, PhotoListComponent];
