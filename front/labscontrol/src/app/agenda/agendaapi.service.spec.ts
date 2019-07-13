import { TestBed } from '@angular/core/testing';

import { AgendaapiService } from './agendaapi.service';

describe('AgendaapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgendaapiService = TestBed.get(AgendaapiService);
    expect(service).toBeTruthy();
  });
});
