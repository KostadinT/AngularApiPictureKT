import { Component, OnInit, Input } from '@angular/core';
import { PhotoModel } from '../model/photo-model';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css']
})
export class DisplayPhotoComponent implements OnInit {

  @Input() singlePhoto: PhotoModel;

  constructor() { }

  ngOnInit(): void {
  }

}
