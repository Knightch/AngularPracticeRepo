import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Obj: user;
  constructor(private srvLogin: AuthServiceService, private router: Router, public activatedRoute: ActivatedRoute, private cookieService: CookieService) {
    this.Obj = new user();
  }

  ngOnInit(): void {
  }

}
