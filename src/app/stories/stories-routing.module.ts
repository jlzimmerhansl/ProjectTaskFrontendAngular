import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoriesFormComponent } from './stories-form/stories-form.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {
    path: 'stories',
    component: LayoutComponent,
    children: [
      { path: 'stories-form', component: StoriesFormComponent },
      { path: '', redirectTo: '/stories/lista', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoriesRoutingModule {}
