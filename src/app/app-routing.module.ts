import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageRegistrationComponent } from './pages/page-registration/page-registration.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';

const routes: Routes = [
  { path: 'login', component: PageLoginComponent },
  { path: 'registration', component: PageRegistrationComponent },
  {
    path: '',
    component: PageDashboardComponent,
    children: [{ path: 'statistique', component: PageStatistiqueComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
