import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Story } from '../story';
import { User } from '../../login/user';
import { StoriesService } from '../../stories.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-stories-form',
  templateUrl: './stories-form.component.html',
  styleUrls: ['./stories-form.component.css'],
})
export class StoriesFormComponent implements OnInit {
  story: Story;
  id: string;
  user: User;
  userAuthenticated: string;

  constructor(
    private service: StoriesService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.story = new Story();
    this.user = new User();
  }

  ngOnInit(): void {
    this.userAuthenticated = this.authService.getAuthenticatedUser();

    let params: Params = this.activatedRoute.params;

    if (params && params.value && params.value.id) {
      this.id = params.value.id;
      this.service.getStorieById(this.id).subscribe(
        (response) => (this.story = response),
        (errorResponse) => (this.story = new Story())
      );
    }

    this.authService.getUserById(this.userAuthenticated).subscribe(
      (response) => (this.user = response),
      (errorResponse) => (this.user = new User())
    );

    console.log(this.user);
  }

  onSubmit() {
    if (this.id) {
      this.service.update(this.story).subscribe((response) => {
        this.router.navigate(['/stories/stories-list']);
      });
    } else {
      this.story = {
        storyNumber: this.story.storyNumber,
        title: this.story.title,
        user: this.user,
      };

      this.service.save(this.story).subscribe((response) => {
        this.router.navigate(['/stories/stories-list']);
      });
    }
  }

  voltarParaListagem() {
    this.router.navigate(['/stories/stories-list']);
  }
}
