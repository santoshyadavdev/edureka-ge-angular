import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoginService } from './service/login.service';

@Component({
  selector: 'ge-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    // if (this.loginForm.get('userName').value === 'Admin' &&
    //   this.loginForm.get('password').value === 'Admin') {
    //   // redirect to product
    //   this.router.navigate(['/product']);
    // }
    if (this.loginService.login(this.loginForm.get('userName').value, this.loginForm.get('password').value)) {
      // this.router.navigate(['/product']);
      this.route.queryParamMap.subscribe((res) => {
        const returnUrl = res.has('returnUrl') ? res.get('returnUrl') : 'product';
        this.router.navigate([returnUrl]);
      });
      // returnUrl$ = this.route.queryParamMap.pipe(
      //   map((res) => (res.get('returnUrl')))
      // );
    }
  }

}
