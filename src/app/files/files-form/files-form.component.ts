import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { StoriesService } from '../../stories.service';

@Component({
  selector: 'app-files-form',
  templateUrl: './files-form.component.html',
  styleUrls: ['./files-form.component.css'],
})
export class FilesFormComponent implements OnInit {
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service: StoriesService, private router: Router) {}

  ngOnInit(): void {}

  gerarPokerPlanning() {
    this.service.gerarPokerPlanning().subscribe(
      (response) => {
        this.router.navigate([
          'http://localhost:8080/task?exportPlanningPoker=true',
        ]);
      },
      (erro) => (this.mensagemErro = 'Ocorreu um erro ao gerar arquivo.')
    );
  }

  gerarJiraImporter() {
    this.service.gerarJiraImporter().subscribe(
      (response) => {
        this.router.navigate([
          'http://localhost:8080/task?exportJiraImporter=true',
        ]);
      },
      (erro) => (this.mensagemErro = 'Ocorreu um erro ao gerar arquivo.')
    );
  }
}
