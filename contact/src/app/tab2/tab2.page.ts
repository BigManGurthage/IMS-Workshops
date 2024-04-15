import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  count: number = 0;
  username: string = '';

  constructor(private router: Router) {}

  login() {
    this.router.navigateByUrl(`/account/${this.username}`); // Use backticks for string interpolation
  }
  
}
