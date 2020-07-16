import { Component, OnInit, Input } from '@angular/core';
import { PhotoServiceService } from '../services/photo-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PhotoModel } from '../model/photo-model';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  photoModelArray: Array<PhotoModel>;
  photoModel: PhotoModel = new PhotoModel();
  constructor(private photoService: PhotoServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  postPhoto(): void{
    if (confirm('Do you want to add this photo?')){
      this.photoService.postPhoto(this.photoModel).subscribe(() => {
        alert('Photo added successfully');
        console.log(this.photoModel);
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      });
    }
  }
  goToPhotos(): void{
    // this.router.navigate(['/photo']);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
