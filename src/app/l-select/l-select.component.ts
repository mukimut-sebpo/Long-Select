import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, forwardRef } from '@angular/core';
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
optionClicked(index: number) {
  console.log(index);
  
}
  listDisplay = 'none';
  @Input() list!: any[];
  @Input() displayKey!: string;
  @Input() idKey!: string;

  @Output() typing = new EventEmitter<string>();

  inputValue!: string;
  takingInput = true;
  displayList!: any[];

  
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
  }

  ngOnChanges() {
    this.displayList = this.list.slice(0, 10);
  }

  inputChanged() {
    this.displayList = this.list.filter(e => e[this.displayKey].includes(this.inputValue));
    this.typing.emit(this.inputValue);
  }

  onFocus() {this.listDisplay = 'block';}
  blurred() {
    // this.listDisplay = 'none';
  }
}
