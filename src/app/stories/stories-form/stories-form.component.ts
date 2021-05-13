import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Story } from '../story';
import { StoriesService } from '../../stories.service';

@Component({
  selector: 'app-stories-form',
  templateUrl: './stories-form.component.html',
  styleUrls: ['./stories-form.component.css'],
})
export class StoriesFormComponent implements OnInit {
  story: Story;
  id: string;

  constructor(
    private service: StoriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.story = new Story();
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
  }

  onSubmit() {
    if (this.id) {
      this.service.update(this.story).subscribe((response) => {
        this.router.navigate(['/stories/stories-list']);
      });
    } else {
      this.service.save(this.story).subscribe((response) => {
        this.router.navigate(['/stories/stories-list']);
      });
    }
  }

  voltarParaListagem() {
    this.router.navigate(['/stories/stories-list']);
  }
}
