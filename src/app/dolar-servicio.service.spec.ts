import { TestBed } from '@angular/core/testing';

import { DolarServicioService } from './dolar-servicio.service';

describe('DolarServicioService', () => {
  let service: DolarServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DolarServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
