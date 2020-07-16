import { PhotoModel } from './../model/photo-model';
import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from '../services/photo-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  data: Array<PhotoModel>;
  photoModel: PhotoModel;
  title = 'Photo Gallery';
  constructor(private photoService: PhotoServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.getDataFromApi();
    this.photoService.getData().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
  addPhoto(): void{
    this.router.navigate(['/add-photo']);
  }
  onSelect(selectedPhoto): void{
    // this.router.navigate(['/photo', dd.id]);
    // // this.router.navigate([dd.id],{relativeTo: this.activatedRoute});
     this.photoModel = selectedPhoto;
     if ( this.activatedRoute.toString() !== 'Route(url:\'\', path:\'\')' ){
    this.router.navigate([this.photoModel.id], {relativeTo: this.activatedRoute});
  }
    else{
    this.router.navigate(['/photo', selectedPhoto.id]); }
  }
}
