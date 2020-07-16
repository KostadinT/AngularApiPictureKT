/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhotoServiceService } from './photo-service.service';

describe('Service: PhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoServiceService]
    });
  });

  it('should ...', inject([PhotoServiceService], (service: PhotoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
