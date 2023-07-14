import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { yResolver } from './y.resolver';

describe('yResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => yResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
