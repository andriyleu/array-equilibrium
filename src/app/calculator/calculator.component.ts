import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  arrayForm;
  input;
  currentArray = [];

  constructor(private formBuilder: FormBuilder) {
    this.arrayForm = this.formBuilder.group({
      arrayValue: ''
    });
   }

  ngOnInit() {
  }

  onInputChange(oo) {
    this.currentArray.push(oo);
    this.arrayForm.reset();
  }

}
