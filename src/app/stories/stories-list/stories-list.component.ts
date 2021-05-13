import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoriesService } from 'src/app/stories.service';
import { Story } from '../story';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.css'],
})
export class StoriesListComponent implements OnInit {
  stories: Story[] = [];
  storySelected: Story;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service: StoriesService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .getStories()
      .subscribe((response) => (this.stories = response));
  }

  novoCadastro() {
    this.router.navigate(['/stories/stories-form']);
  }

  preparaDelecao(story: Story) {
    this.storySelected = story;
  }

  deletarStory() {
    this.service.deletar(this.storySelected).subscribe(
      (response) => {
        this.mensagemSucesso = 'Cliente deletado com sucesso!';
        this.ngOnInit();
      },
      (erro) => (this.mensagemErro = 'Ocorreu um erro ao deletar o cliente.')
    );
  }
}
