import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  loading = true;
  services: any[] =[];
  bannerImage: any[] = [];
  serviceImage='https://digitalbondmena.com/services/';
  constructor(private _ServicesService:ServicesService,
    private _BannerService:BannerService
    ) { }

  ngOnInit(): void {
    this.showServices();
    this.showBanner()
  }
  showBanner(){
    this._BannerService.getBanner().subscribe(
      (resposne) => {
        this.bannerImage = resposne.bannerImages
      }
    )
  }
  showServices(){
    this._ServicesService.getServices().subscribe(
      (response) => {
        this.services = response.services
        this.loading = false
      }
    )
  }
}
