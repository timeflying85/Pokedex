import { TestBed } from '@angular/core/testing';

import { ResolverResolver } from './search.resolver';

describe('ResolverResolver', () => {
  let resolver: ResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
