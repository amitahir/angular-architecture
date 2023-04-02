import { Injectable } from '@angular/core';
import { UtilService } from '../util/util.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private _util: UtilService, private _router: Router) {}

  saveToken(token: string): void {
    localStorage.setItem('$clk-token', token);
  }

  getToken(){
    return localStorage.getItem('$clk-token');
  }

  removeToken(){
    localStorage.removeItem('$clk-token');
  }

  setLocalObject(key: string, value: any){
    localStorage.setItem(key, this._util.encrypt(JSON.stringify(value)));
  }
}
