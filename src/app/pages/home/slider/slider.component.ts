import { Component } from '@angular/core';
import { Slider } from 'src/app/interfaces/slider.interface';
import { SliderService } from 'src/app/services/slider/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  sliders : Slider[] = [];
  constructor ( private _ss : SliderService) {
    this._ss.getSlider().subscribe(
      (resp:Slider[]) => {
        this.sliders = resp;
      }
    );
  }
}
