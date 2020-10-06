import { InjectionToken } from '@angular/core';
import { Config } from './appconfig';
import { environment } from '../environments/environment';

export const APPCONFIG = new InjectionToken<Config>('configuration service');


export const CONFIGVALUES : Config = {
  apiEndpoint: environment.apiEndpoint,
  title : environment.title
}

export const LocalStorage = new InjectionToken<any>('localstorage',
  {
    factory : ()=> localStorage,
    providedIn : 'root'
  }
)

export const WindowService = new InjectionToken<any>('window',
  {
    factory : ()=> window,
    providedIn : 'root'
  }
)

