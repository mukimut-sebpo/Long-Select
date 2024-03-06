import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
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
  listDisplay = 'none';
  selectedId: any;
  @Input() list!: any[];
  @Input() displayKey!: string;
  @Input() idKey!: string;
  onChange = (id: any) => {};
  onTouched = () => {};
  visibleListLength = 10;

  @Output() typing = new EventEmitter<string>();

  inputValue!: string;
  takingInput = true;
  displayList!: any[];

  constructor() { }

  writeValue(id: any): void {
    if(!id) {
      return;
    }
    this.selectedId = id;
    const selectedItem = this.list.find(e => e[this.idKey] === id);
    
    this.inputValue = selectedItem[this.displayKey];
    this.onChange(id);
    this.onTouched();
    this.removeListBox()
  }

  registerOnChange(fn: (id: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  get value(): any {
    return this.selectedId;
  }

  ngOnInit(): void {
    this.displayList = this.list.slice(0, this.visibleListLength);
  }

  ngOnChanges() {
    this.displayList = this.list.slice(0, this.visibleListLength);
  }

  inputChanged() {
    this.displayList = this.list.filter(e => (e[this.displayKey] as string).includes(this.inputValue));
    this.typing.emit(this.inputValue);
  }

  onFocus() {this.listDisplay = 'block';}
  blurred() {
    setTimeout(() => this.removeListBox(), 125);
  }
  
  removeListBox() {
    this.listDisplay = 'none';
  }
}
