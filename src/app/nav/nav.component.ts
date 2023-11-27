import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private router: Router) {}
  ishome=true

  redirectToHome() {
    this.ishome=true;
    this.router.navigate(['/Home']); 
  }
}
