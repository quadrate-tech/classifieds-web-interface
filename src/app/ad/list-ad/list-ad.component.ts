import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { Ad } from 'src/app/models/ad';
import { ActivatedRoute } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-list-ad',
  templateUrl: './list-ad.component.html',
  styleUrls: ['./list-ad.component.css'],
})
export class ListAdComponent implements OnInit {
  ad: Ad;
  @Input('adId') id: number;
  @Input('isUser') isUser: boolean;

  constructor(
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private elRef: ElementRef
  ) {
    this.ad = new Ad();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //should get data from api with id in the path
    this.ad.name = 'Apple Watch Series 4GPS';
    this.ad.price = 120;
    this.ad.ad_posted_by = 'Nada Abdelmaboud';
    this.ad.images = [
      'https://i.ibb.co/1nb7YWR/Pngtree-black-suit-1267605.png',
    ];
  }
  ngAfterViewInit() {}
}
