import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { StoriesModule } from './stories/stories.module';
import { StoriesService } from './stories.service';
import { TasksService } from './tasks.service';
import { LandingModule } from './landing/landing.module';
import { LandingComponent } from './landing/landing/landing.component';
import { LayoutComponent } from './layout/layout.component';
import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, LayoutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    StoriesModule,
    LandingModule,
    TaskModule,
  ],
  providers: [StoriesService, TasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
