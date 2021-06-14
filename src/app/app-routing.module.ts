import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing/landing.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'squad', component: LandingComponent },
  {
    path: 'app',
    component: LayoutComponent,
    children: [{ path: 'home', component: HomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
