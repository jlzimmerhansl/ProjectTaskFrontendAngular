import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Story } from '../story';
import { StoriesService } from '../../stories.service';
import { Task } from '../../task/task';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrls: ['./stories-detail.component.css'],
})
export class StoriesDetailComponent implements OnInit {
  story: Story;
  id: string;
  task: Task;
  issues: string[];
  label: string[];
  primary: string[];
  issueType: string;
  priority: string;
  labels: string;
  storyJira: string;
  tasks: Task[] = [];
  mensagemSucesso: string;
  mensagemErro: string;
  taskSelected: Task;
  mensagemSucessoTask: string;
  mensagemErroTask: string;

  constructor(
    private service: StoriesService,
    private serviceTask: TasksService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.story = new Story();
    this.task = new Task();
    this.issues = ['Sub-Task', 'Sub-Development', 'Sub-Test'];
    this.label = ['component_suthub', 'integracao_suthub'];
    this.primary = ['high', 'medium', 'low'];
    this.storyJira = this.story.storyNumber;
  }

  ngOnInit(): void {
    let params: Params = this.activatedRoute.params;

    if (params && params.value && params.value.id) {
      this.id = params.value.id;
      this.service.getStorieById(this.id).subscribe(
        (response) => (this.story = response),
        (errorResponse) => (this.story = new Story())
      );
    }

    this.serviceTask
      .getTasks()
      .subscribe((response) => (this.tasks = response));

    console.log(this.tasks);
  }

  onSubmit() {
    this.task = {
      id: '',
      issueType: '',
      description: '',
      summary: '',
      hours: 0,
      issueId: 0,
      jiraKey: this.story.storyNumber,
      epicLink: '',
      complexityPoints: '',
      priority: '',
      components: '',
      fixVersions: '',
      labels: '',
      dueDate: '',
      team: '',
      originalEstimate: 0,
    };

    this.serviceTask.save(this.task).subscribe(
      (response) => {
        this.mensagemSucesso = 'Task cadastrada com sucesso!';
        setTimeout(() => (this.mensagemSucesso = null), 2000);
        this.ngOnInit();
      },
      (erro) => (this.mensagemErro = 'Ocorreu um erro ao cadastrara task.')
    );
  }

  preparaDelecao(task: Task) {
    this.taskSelected = task;
  }

  deletarTask() {
    this.serviceTask.deletar(this.taskSelected).subscribe(
      (response) => {
        this.mensagemSucessoTask = 'Task deletado com sucesso!';
        setTimeout(() => (this.mensagemSucessoTask = null), 2000);
        this.ngOnInit();
      },
      (erro) =>
        (this.mensagemErroTask = 'Ocorreu um erro ao deletar o história.')
    );
  }
}
