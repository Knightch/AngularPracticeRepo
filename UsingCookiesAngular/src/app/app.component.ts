import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'UsingCookiesAngular';
  cookie_name = '';
  all_cookies: any = '';

  constructor(private cookieService: CookieService) { }

  setCookie() {
    this.cookieService.set('name', 'Aman Pandey');
  }

  deleteCookie() {
    this.cookieService.delete('name');
  }

  deleteAll() {
    this.cookieService.deleteAll();
  }

  ngOnInit(): void {
    this.cookie_name = this.cookieService.get('name');
    this.all_cookies = this.cookieService.getAll();
  }
}
