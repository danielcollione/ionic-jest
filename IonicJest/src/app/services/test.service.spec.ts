import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    ).configureTestingModule({
      providers: [TestService],
    });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
