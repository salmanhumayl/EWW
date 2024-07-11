import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 title:"EWW" | undefined;
 
  customOptionHomeSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 1 // Show only one slide on all screen sizes
      }
    },
    nav: true
  };

  optionsSecondSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 7 // Show only one slide on all screen sizes
      },      
    },
    nav: true
  };

  optionsThreeSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1200,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 3 // Show only one slide on all screen sizes
      },      
    },
    nav: true
  };

  ngOnInit(): void {
  
  
   
  
  
}
}
