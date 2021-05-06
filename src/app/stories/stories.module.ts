import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesFormComponent } from './stories-form/stories-form.component';

@NgModule({
  declarations: [StoriesFormComponent],
  imports: [CommonModule, StoriesRoutingModule, FormsModule],
  exports: [StoriesFormComponent],
})
export class StoriesModule {}
