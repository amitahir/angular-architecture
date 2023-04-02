import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { StorageService } from 'src/app/core/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _storageService: StorageService,
    private _router: Router
    ){  

  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email : ['', Validators.required, Validators.email],
      password : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    })
  }

  // get f(): { [key: string]: AbstractControl } {
  //   return this.loginForm.controls;
  // }

  onSubmit(loginForm: FormGroup): void {
    // this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this._authService.login(loginForm.value);
    // console.log(JSON.stringify(this.form.value, null, 2));
  }

  me(){
    this._authService.CurrentUser();
  }

  
  // onReset(): void {
  //   this.submitted = false;
  //   this.form.reset();
  // }
}
