import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventBus} from '../services/event.bus';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string | null;

  constructor(private router: Router, private bus: EventBus) {
  }

  ngOnInit() {

    this.username = localStorage.getItem('USER_NAME');

    this.bus.listen('LOGIN_SUCCESS')
      .subscribe(data => {
        this.username = data.first_name + ' ' + data.last_name;
      });

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
