import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from '../../login/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  userAuthenticated: string;
  user: User;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userAuthenticated = this.authService.getAuthenticatedUser();

    this.findUser();
  }

  findUser() {
    this.authService.getUserById(this.userAuthenticated).subscribe(
      (response) => (this.user = response),
      (errorResponse) => (this.user = new User())
    );

    console.log(this.userAuthenticated);

    console.log(this.user);
    console.log('this.user');
  }

  logout() {
    this.authService.signOut();
    this.router.navigate(['']);
  }
}
