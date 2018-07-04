import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {VideosComponent} from './videos/videos.component';
import {EmailsComponent} from './emails/emails.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard/videos'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      {
        path: 'videos',
        component: VideosComponent
      },
      {
        path: 'emails',
        component: EmailsComponent
      }
    ]
  },

  {
    path: '**',
    component: NotFoundComponent
  }

];
