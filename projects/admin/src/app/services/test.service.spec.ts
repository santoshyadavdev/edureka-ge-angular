import { TestBed } from '@angular/core/testing';
import { Config } from '../appconfig';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(TestService);
    const config : Config =  {
      apiEndpoint : 'abc.com',
      title : 'test'
    };
    let locaStorage : any = {};
    service = new TestService(config,locaStorage);
  });

  it('should have apiEndoint value', () => {
    // expect(service).toBeTruthy();
    expect(service.getEndPoint()).toEqual('abc.com');
  });


  it('should have localstorage object', () => {
    // expect(service).toBeTruthy();
    expect(service.getLocalStorage()).toEqual({})
  });
});
