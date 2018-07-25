import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
	{ path: 'about', component: AboutComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '', component: LandingPageComponent },
	{ path: '**', component: NotFoundComponent } //404
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class MyAppRoutingModule { }
