import { PhotoModel } from './../model/photo-model';
import { Component, OnInit, Input } from '@angular/core';
import {PhotoServiceService} from '../services/photo-service.service';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  public selectedPhoto;
  isEdit = true;
  @Input() photoModel: PhotoModel = new PhotoModel(-1, -1, '', '', '');
  constructor(private photoService: PhotoServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    const id = parseInt( params.get('id'), 10);
    this.selectedPhoto = id;
    this.photoService.getPhoto(id).subscribe(photo =>
      this.photoModel = photo);
  });
  }

  putPhoto(): void{
    if (confirm('Are you sure you want to make changes?'))
    {
    this.photoService.putPhoto(this.photoModel).subscribe(photo => {
      this.photoModel = photo;
      alert('Photo updated');
    });
    }
  }
  deletePhoto(): void{
    if (confirm('Are you sure you want to delete this photo?'))
    {
    this.photoService.deletePhoto(this.photoModel.id).subscribe(photo => {
      alert('Photo deleted');
      this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    });
    }
  }
  goToPhotos(): void{
    // this.router.navigate(['/photo']);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
