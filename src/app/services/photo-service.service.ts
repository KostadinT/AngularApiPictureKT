import { PhotoModel } from './../model/photo-model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {
readonly url = 'http://jsonplaceholder.typicode.com/photos';
photoModel: PhotoModel;
constructor(private http: HttpClient) { }

// getData():Observable<any>{
//   return this.http.get<any>(this.url);
// }

getData(): Observable<PhotoModel[]> {
  return this.http.get<PhotoModel[]>(this.url).pipe(map(x => x.slice(0, 50)));
}

getPhoto(photoModelId: number): Observable<PhotoModel>{
  return this.http.get<PhotoModel>(`${this.url}/${photoModelId}`);
}

postPhoto(photoModel: PhotoModel): Observable<PhotoModel>{
  return this.http.post<PhotoModel>(this.url, photoModel);
}

putPhoto(photoModel: PhotoModel): Observable<PhotoModel>{
  // return this.http.put<PhotoModel>(this.url+'/'+photoModel.id.toString(), photoModel);
  return this.http.put<PhotoModel>(`${this.url}/${photoModel.id}`, photoModel);
}

deletePhoto(photoModelId: number): Observable<PhotoModel>{
  // return this.http.delete<PhotoModel>(this.url.concat('/').concat(photoModelId.toString()));
  return this.http.delete<PhotoModel>(`${this.url}/${photoModelId}`);
}


}
