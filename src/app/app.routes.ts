import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroComponent } from './hero/hero.component';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'hero',
        component: HeroComponent,
      },
      {
        path: 'content',
        component: ContentComponent,
      },
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
];
