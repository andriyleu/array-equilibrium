import { TestBed } from '@angular/core/testing';

import { ArrayEquilibriumService } from './array-equilibrium.service';

describe('ArrayEquilibriumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrayEquilibriumService = TestBed.get(ArrayEquilibriumService);
    expect(service).toBeTruthy();
  });
});
