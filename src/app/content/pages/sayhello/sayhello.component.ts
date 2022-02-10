import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';
import { SayhelloService } from 'src/app/services/sayhello.service';

@Component({
  selector: 'app-sayhello',
  templateUrl: './sayhello.component.html',
  styleUrls: ['./sayhello.component.scss']
})
export class SayhelloComponent implements OnInit {
  loading = true ;
  banners: any[] = []
  constructor(private _BannerService:BannerService) { }
  showSayHello(){
    this._BannerService.getBanner().subscribe(
      (response) => {
        this.banners = response.bannerImages;
        this.loading = false
      }
    )
  }
  ngOnInit(): void {
    this.showSayHello()
  }

}
