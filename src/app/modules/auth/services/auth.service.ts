import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http/http.service';
import { LoginPayload, RegisterPayload} from '../Interfaces/auth.interface';
import { Observable} from 'rxjs';
import { StorageService } from '../../../core/storage/storage.service';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/core/error/error.service';
import { ApiMethod, AuthEndPoints } from 'src/app/core/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // $activeUser: Observable<boolean>;
  
  constructor(
    private _http: HttpService,
    private _storage: StorageService,
    private _router: Router,
    private _error: ErrorService
  ) { }

  CheckServer(): void {
    this._http.requestCall(AuthEndPoints.CHECK_SERVER, ApiMethod.GET)?.subscribe((res) => {
      return res;
    },(error) => {
      console.log(error)
    })
  }

  login(loginPayload: LoginPayload): void{
    this._http.requestCall(AuthEndPoints.LOGIN, ApiMethod.POST, loginPayload)?.subscribe((res: any) => {
      this._storage.saveToken(res);
      this._error.userNotification(200, 'Sucess');
      this._router.navigateByUrl('/home');
    }, (error) => {
      console.log(error);
    })
  }

  CurrentUser(): void{
    this._http.requestCall(AuthEndPoints.CURRENT_USER, ApiMethod.GET)?.subscribe((res: any) => {
      this._storage.setLocalObject('$clk-user',res);
      console.log(res);
      this._router.navigateByUrl('/home');
    }, (error) => {
      console.log(error);
    })
  }

  registerUser(registerPayload: RegisterPayload): void {
    this._http.requestCall(AuthEndPoints.REGISTER, ApiMethod.POST, registerPayload)?.subscribe((res: any) => {

    }, (error)=>{
      console.log(error);
    })
  }

}
