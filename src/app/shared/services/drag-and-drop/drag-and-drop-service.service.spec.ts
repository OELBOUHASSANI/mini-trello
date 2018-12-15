import { TestBed } from '@angular/core/testing';

import { DragAndDropServiceService } from './drag-and-drop-service.service';

describe('DragAndDropServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragAndDropServiceService = TestBed.get(DragAndDropServiceService);
    expect(service).toBeTruthy();
  });
});
