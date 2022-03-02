import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BannerImage } from 'src/app/classes/banner-image';
import { Service } from 'src/app/classes/service';
import { BannerService } from 'src/app/services/banner.service';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  loading = true;
  services: Service[] =[];
  bannerImage: BannerImage[] = [];
  serviceImage='https://digitalbondmena.com/services/';
  constructor(private _ServicesService:ServicesService,
    private _BannerService:BannerService,    private _Title:Title
    ) { 
      _Title.setTitle('Digital Bond | Services')

   }

  ngOnInit(): void {
    this.showServices();
    this.showBanner()
  }
  showBanner(){
    this.loading = true

    this._BannerService.getBanner().subscribe(
      (resposne) => {
        this.bannerImage = resposne.bannerImages
        this.loading = false

      }
    )
  }
  showServices(){
    this.loading = true
    this._ServicesService.getServices().subscribe(
      (response) => {
        this.services = response.services
        this.loading = false
      }
    )
  }
}
