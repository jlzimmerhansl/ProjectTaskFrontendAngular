import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Task } from '../task';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  task: Task;
  id: string;
  issues: string[];
  label: string[];
  primary: string[];
  issueType: string;
  priority: string;
  labels: string;

  constructor(
    private service: TasksService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.task = new Task();
    this.issues = ['Sub-Task', 'Sub-Development', 'Sub-Test'];
    this.label = ['component_suthub', 'integracao_suthub'];
    this.primary = ['high', 'medium', 'low'];
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service.update(this.task).subscribe((response) => {
      window.history.back();
    });
  }
}
