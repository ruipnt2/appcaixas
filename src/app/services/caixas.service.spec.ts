import { TestBed, inject } from '@angular/core/testing';

import { CaixasService } from './caixas.service';

describe('CaixasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaixasService]
    });
  });

  it('should be created', inject([CaixasService], (service: CaixasService) => {
    expect(service).toBeTruthy();
  }));
});
