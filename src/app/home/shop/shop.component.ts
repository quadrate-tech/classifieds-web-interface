import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  constructor() {}
  ranges: Array<string>;
  categories: Array<object>;
  ids: Array<number>;
  page: number;
  isUser: boolean;
  ngOnInit(): void {
    //should set isUser from the service
    this.isUser = false;
    document.getElementById('');
    this.page = 1;
    this.ids = [1, 2, 3, 4, 5, 6]; //should call api with current page number
    this.ranges = ['10$', '10$-100$', '100$-500$', '500$', 'All'];
    this.categories = [
      { name: 'DRY', number: 200 },
      { name: 'DRY', number: 200 },
      { name: 'DRY', number: 200 },
      { name: 'DRY', number: 200 },
      { name: 'DRY', number: 200 },
      { name: 'DRY', number: 200 },
    ];
  }
  ngAfterViewInit() {
    window.onload = function () {
      // Initialize Sliders
      var sliderSections = document.getElementsByClassName('range-slider');
      for (var x = 0; x < sliderSections.length; x++) {
        var sliders = sliderSections[x].getElementsByTagName('input');
        for (var y = 0; y < sliders.length; y++) {
          if (sliders[y].type === 'range') {
            sliders[y].addEventListener('input', function () {
              var parent = document.getElementById('slider');
              var slides = parent.getElementsByTagName('input');
              var slide1 = parseFloat(slides[0].value);
              var slide2 = parseFloat(slides[1].value);
              // Neither slider will clip the other, so make sure we determine which is larger
              if (slide1 > slide2) {
                var tmp = slide2;
                slide2 = slide1;
                slide1 = tmp;
              }
              console.log('asasas');
              var displayElement = parent.getElementsByClassName(
                'rangeValues'
              )[0];
              displayElement.innerHTML = slide1 + ' - ' + slide2;
              console.log(displayElement.innerHTML);
            });
            var event = new Event('input', {
              bubbles: true,
              cancelable: true,
            });
            // Manually trigger event first time to display values
            sliders[y].dispatchEvent(event);
          }
        }
      }
    };
  }
  getVals() {
    // Get slider values
  }
}
