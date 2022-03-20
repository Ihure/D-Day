import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Setting } from '../constants';

import { environment } from '../../../environments/environment';

@Injectable()
export class SettingsService {
  _config: any;

  constructor() {
    this._config = environment;
  }

  get(key: string, defaultVal?: any): any {
    if (this._config) {
      if (!this._config[key]) {
        if (defaultVal != null) {
          return defaultVal;
        }
      }
      return this._config[key];
    }
  }
}
