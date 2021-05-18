import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../../stories.service';

@Component({
  selector: 'app-files-form',
  templateUrl: './files-form.component.html',
  styleUrls: ['./files-form.component.css'],
})
export class FilesFormComponent implements OnInit {
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service: StoriesService) {}

  ngOnInit(): void {}

  gerarPokerPlanning() {
    this.service.gerarPokerPlanning().subscribe(
      (response) => {
        this.mensagemSucesso = `Arquivo gerado no caminho: ${response.data.path}`;
        setTimeout(() => (this.mensagemSucesso = null), 2000);
        this.ngOnInit();
      },
      (erro) => (this.mensagemErro = 'Ocorreu um erro ao gerar arquivo.')
    );
  }

  gerarJiraImporter() {
    this.service.gerarJiraImporter().subscribe(
      (response) => {
        this.mensagemSucesso = `Arquivo gerado no caminho: ${response.data.path}`;
        setTimeout(() => (this.mensagemSucesso = null), 2000);
        this.ngOnInit();
      },
      (erro) => (this.mensagemErro = 'Ocorreu um erro ao gerar arquivo.')
    );
  }
}
