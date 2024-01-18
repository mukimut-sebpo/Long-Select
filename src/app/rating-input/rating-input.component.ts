import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingInputComponent),
      multi: true
    }
  ]
})
export class RatingInputComponent implements ControlValueAccessor {
  stars: boolean[];
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {
    this.stars = Array(5).fill(false);
    this.stars[0] = true;
  }
  

  writeValue(rating: number): void {
    if(rating > 5) {
      rating = 5
    } else if(rating < 1) {
      rating = 1;
    }
    this.rate(rating)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  get value(): number {
    return this.stars.reduce((total, starred) => {
      return total + (starred ? 1 : 0);
    }, 0);
  }

  starClicked(i: number) {
    if(!this.stars[i] || i == 0) {
      i++;
    }
    this.rate(i);
  }

  rate(rating: number) {
    this.stars = this.stars.map((_, i) => rating > i);
    this.onChange(rating);
    this.onTouched()
  }

  

}
