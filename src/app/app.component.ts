import { Component } from '@angular/core';
type optionsType = {option: String, id: number}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  selectedValue = 'Nothing is selected';
  optionList: optionsType[];
  simpleList: string[];
  switchValue = false;
  stars = 6;
  
  constructor() {
    this.optionList = [];
    this.simpleList = [];
    for(let i = 1; i <= 100; i++) {
      this.optionList.push({option: 'Selection' + i, id: i});
      this.simpleList.push('Selection' + i)
    }
  }

  valueChanged() {console.log('Value is now ' + this.switchValue);
  }

}
