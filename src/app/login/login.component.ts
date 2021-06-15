import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string;
  password: string;
  answer: string;
  question: string;
  cadastrando: boolean;
  successMessage: string;
  errors: String[];

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    const user: User = new User();

    user.email = this.username;
    user.password = this.password;
    console.log(user);
    this.authService.handleLogin(user).subscribe(
      (response) => {
        const access_token = JSON.stringify(response);
        localStorage.setItem('token', access_token);
        this.router.navigate(['/squad']);
      },
      (errorResponse) => {
        this.errors = ['Usuário e/ou senha incorretos'];
      }
    );
  }

  preparaCadastrar(event) {
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro() {
    this.cadastrando = false;
  }

  create() {
    const user: User = new User();

    user.email = this.username;
    user.password = this.password;
    user.answer = this.answer;
    user.question = this.question;

    this.authService.save(user).subscribe(
      (response) => {
        this.successMessage = 'Cadastro efetuado com sucesso! Efetue o login';
        this.cadastrando = false;
        this.username = '';
        this.password = '';
        this.answer = '';
        this.question = '';
        this.errors = [];
      },
      (errorResponse) => {
        this.successMessage = null;
        this.errors = errorResponse.error.errors;
      }
    );
  }
}
