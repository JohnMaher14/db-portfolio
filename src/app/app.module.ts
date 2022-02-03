import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/pages/home/home.component';
import { HeaderComponent } from './content/shared/header/header.component';
import { FooterComponent } from './content/shared/footer/footer.component';
import { ToNavbarComponent } from './content/shared/to-navbar/to-navbar.component';
import { CarouselModule  } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestimonialsComponent } from './content/pages/testimonials/testimonials.component';
import { LoaderComponent } from './content/shared/loader/loader.component';
import { ClientsComponent } from './content/pages/clients/clients.component';
import { ContactComponent } from './content/pages/contact/contact.component';
import { BondersComponent } from './content/pages/bonders/bonders.component';
import { NotfoundComponent } from './content/shared/notfound/notfound.component';
import { AboutComponent } from './content/pages/about/about.component';
import { ServicesComponent } from './content/pages/services/services.component';
import { ServicesDetailsComponent } from './content/pages/services/services-details/services-details.component';
import { PortfolioComponent } from './content/pages/portfolio/portfolio.component';
import { SayhelloComponent } from './content/pages/sayhello/sayhello.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ToNavbarComponent,
    TestimonialsComponent,
    LoaderComponent,
    ClientsComponent,
    ContactComponent,
    BondersComponent,
    NotfoundComponent,
    AboutComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    PortfolioComponent,
    SayhelloComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
