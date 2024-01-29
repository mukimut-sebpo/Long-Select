import { Component } from '@angular/core';
type optionsType = {option: String, id: number}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterOptionList: optionsType[];  
  selectedValue = 'Nothing is selected';
  optionList: optionsType[];
  simpleList: string[];
  switchValue = false;
  stars = 6;
  selectedId: number = 1;
  
  constructor() {
    this.masterOptionList = [];
    this.simpleList = [];
    for(let i = 1; i <= 100; i++) {
      this.masterOptionList.push({option: 'Selection' + i, id: i});
      this.simpleList.push('Selection' + i)
    }
    this.optionList = this.masterOptionList.slice(0, 10);
  }

  search(searchText: string) {
    this.optionList = this.masterOptionList.filter(e => e.option.includes(searchText));
  }

}
