import { InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';
import { Config } from './appconfig';

export const APPCONFIG = new InjectionToken<Config>('configuration service');


export const CONFIGVALUES: Config = {
  apiEndpoint: environment.apiEndpoint,
  title : environment.title
};

export const LocalStorage = new InjectionToken<any>('localstorage',
  {
    factory : () => localStorage,
    providedIn : 'root'
  }
);

export const WindowService = new InjectionToken<any>('window',
  {
    factory : () => window,
    providedIn : 'root'
  }
);

