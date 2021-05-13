import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../landing';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  team: Team;

  constructor(private service: TasksService, private router: Router) {
    this.team = new Team();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service.saveTeam(this.team).subscribe((response) => {
      this.router.navigate(['/stories/stories-list']);
    });
  }
}
