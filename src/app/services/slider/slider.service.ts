import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slider } from 'src/app/interfaces/slider.interface';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor( private http: HttpClient) { }

  getSlider() : Observable<Slider[]> {
    return this.http.get<Slider[]>('./assets/json/slider.json');
  }
}
