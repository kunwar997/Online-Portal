import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';
import {EventBus} from '../services/event.bus';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  preserveWhitespaces: false
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userNameControl = new FormControl(null, [Validators.required, Validators.email]);
  passwordControl = new FormControl(null, [Validators.required, Validators.min(5)]);

  loading = false;

  constructor(private toast: ToastrService, private api: ApiService, private router: Router, private bus: EventBus) {
    this.loginForm = new FormGroup({
      username: this.userNameControl,
      password: this.passwordControl
    });
  }

  ngOnInit() {
  }

  login() {
    this.loading = true;

    this.api.login(this.userNameControl.value, this.passwordControl.value)
      .subscribe(res => {
          this.bus.broadcast('LOGIN_SUCCESS', res.user);
          localStorage.setItem('USER_NAME', res.user.first_name + ' ' + res.user.last_name);
          localStorage.setItem('TOKEN', res.token);


          this.toast.success('User Logged In Successfully');


          this.router.navigate(['']);
        },
        err => {
          console.log('Error', err);
          this.toast.error('Log In Error');

        });
  }

}
