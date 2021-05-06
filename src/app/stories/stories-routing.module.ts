import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoriesFormComponent } from './stories-form/stories-form.component';

const routes: Routes = [
  { path: 'stories-form', component: StoriesFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoriesRoutingModule {}
