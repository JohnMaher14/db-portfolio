import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './content/pages/about/about.component';
import { BondersComponent } from './content/pages/bonders/bonders.component';
import { ClientDetailComponent } from './content/pages/clients/client-detail/client-detail.component';
import { ClientsComponent } from './content/pages/clients/clients.component';
import { ContactComponent } from './content/pages/contact/contact.component';
import { HomeComponent } from './content/pages/home/home.component';
import { PortfolioComponent } from './content/pages/portfolio/portfolio.component';
import { SayhelloComponent } from './content/pages/sayhello/sayhello.component';
import { ServicesDetailsComponent } from './content/pages/services/services-details/services-details.component';
import { ServicesComponent } from './content/pages/services/services.component';
import { TestimonialsComponent } from './content/pages/testimonials/testimonials.component';
import { NotfoundComponent } from './content/shared/notfound/notfound.component';
import { ThankyouContactComponent } from './content/thankyou/thankyou-contact/thankyou-contact.component';
import { ThankyouReviewComponent } from './content/thankyou/thankyou-review/thankyou-review.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent  },
  { path: 'review', component: TestimonialsComponent },
  {path: 'clients' ,component:ClientsComponent },
  { path: 'clients/:id', component: ClientDetailComponent  },
  { path: 'bonders', component: BondersComponent },
  { path: 'say-hello', component: SayhelloComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'thankyou-contact', component: ThankyouContactComponent },
  { path: 'thankyou-review', component: ThankyouReviewComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'services/:id', component: ServicesDetailsComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:'top' , useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
