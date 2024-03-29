import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './content/pages/about/about.component';
import { ClientDetailComponent } from './content/pages/clients/client-detail/client-detail.component';
import { ClientsDetailComponent } from './content/pages/clients/clients-detail/clients-detail.component';
import { ClientsComponent } from './content/pages/clients/clients.component';
import { ContactComponent } from './content/pages/contact/contact.component';
import { HomeComponent } from './content/pages/home/home.component';
import { PrivacyPolicyComponent } from './content/pages/privacy-policy/privacy-policy.component';
import { SayhelloComponent } from './content/pages/sayhello/sayhello.component';
import { OtherServiceComponent } from './content/pages/services/other-service/other-service.component';
import { ServicesDetailsComponent } from './content/pages/services/services-details/services-details.component';
import { ServicesComponent } from './content/pages/services/services.component';
import { TestimonialsComponent } from './content/pages/testimonials/testimonials.component';
import { NotfoundComponent } from './content/shared/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent  },
  { path: 'review', component: TestimonialsComponent },
  {path: 'clients' ,component:ClientsComponent },
  { path: 'clients/:id', component: ClientDetailComponent  },
  { path: 'client/:id', component: ClientsDetailComponent  },
  { path: 'say-hello', component: SayhelloComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'services/:id', component: ServicesDetailsComponent },
  { path: 'service/:id', component: OtherServiceComponent },

  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', useHash: true, initialNavigation: 'enabledBlocking', onSameUrlNavigation:'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
