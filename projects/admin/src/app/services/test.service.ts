import { Injectable, Inject } from '@angular/core';

import { APPCONFIG, LocalStorage } from '../appconfig.service';
import { Config } from '../appconfig';
// var window: Window;

// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(@Inject(APPCONFIG) private appConfig: Config,
    @Inject(LocalStorage) private localStorage: any) { }

  getEndPoint() {
    return this.appConfig.apiEndpoint;
  }

  getLocalStorage() {
    return this.localStorage;
  }
}
