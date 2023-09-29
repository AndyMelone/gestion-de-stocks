import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageRegistrationComponent } from './pages/page-registration/page-registration.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageRegistrationComponent,
    PageDashboardComponent,
    PageStatistiqueComponent,
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
