import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MyAppRoutingModule } from './my-app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsService } from './projects.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    MyAppRoutingModule,
	ToastModule.forRoot()
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
