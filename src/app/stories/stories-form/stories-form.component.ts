import { Component, OnInit } from '@angular/core';
import { Story } from '../story';
import { StoriesService } from '../../stories.service';

@Component({
  selector: 'app-stories-form',
  templateUrl: './stories-form.component.html',
  styleUrls: ['./stories-form.component.css'],
})
export class StoriesFormComponent implements OnInit {
  story: Story;

  constructor(private service: StoriesService) {
    this.story = new Story();
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('cliquei');
  }
}
