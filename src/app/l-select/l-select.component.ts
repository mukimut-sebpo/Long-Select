import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-l-select',
  templateUrl: './l-select.component.html',
  styleUrls: ['./l-select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting:forwardRef(() => LSelectComponent), multi: true
  }]
})
export class LSelectComponent implements OnInit, ControlValueAccessor {
  @Input() list!: any[];
  @Input() displayKey!: string;
  @Input() idKey!: string;

  inputValue!: string;
  takingInput = true;
  displayList!: any[];

  //configs
  delay = 750;
  displayItems = 10;

  constructor() { }
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.displayList = this.list.slice(0, 10);
    console.log(this.displayList)
  }

  inputChanged() {
    if(!this.takingInput || !this.inputValue) {
      return;
    }
    this.takingInput = false
    setTimeout(() => {
      this.displayList = this.list.filter(e => e[this.displayKey].includes(this.inputValue));
      console.log(this.displayList);
      this.takingInput = true;
    }, this.delay);

  }

}
