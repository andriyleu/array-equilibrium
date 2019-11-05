import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ArrayEquilibriumService } from '../array-equilibrium.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  readonly COMMA_CHRACTER = ',';
  readonly INPUT_MIN_WIDTH = 8;
  arrayForm;
  input;
  currentArray = [];
  constructor(private formBuilder: FormBuilder, private equilibriumProvider: ArrayEquilibriumService) {
    this.arrayForm = this.formBuilder.group({
      arrayValue: ''
    });
   }

  ngOnInit() {
    document.getElementById('arrayValue').addEventListener('keydown', (event) => {

      const eventTarget = event.target as HTMLInputElement;
      if (eventTarget.value.length) {
        return;
      }

      const key = event.key;
      if (key === 'Backspace' || key === 'Delete') {
          this.currentArray.pop();
      }
    });
  }

  onInputChange(inputValue) {
    if (inputValue.slice(-1) === this.COMMA_CHRACTER) {

      this.arrayForm.reset();
      this.currentArray.push(+(inputValue.slice(0,  inputValue.length - 1)));

      this.resetFormWidth();

      return;
    }

    this.setFormWidth(inputValue);
  }

  calculateIndex() {
    if (this.currentArray.length === 0) {
      return;
    }
    this.equilibriumProvider.calculate(this.currentArray, false);
  }

  calculateMultipleIndexes() {
    if (this.currentArray.length === 0) {
      return;
    }
    this.equilibriumProvider.calculate(this.currentArray, true);
  }

  hasResult() {
    return this.equilibriumProvider.getStoredResults().length !== 0;
  }

  setExampleArray() {
    this.currentArray = this.equilibriumProvider.EXAMPLE_ARRAY.slice(0);
  }

  clearArray() {
    this.currentArray = [];
  }

  resetFormWidth() {
    document.getElementById('arrayForm').style.minWidth = this.INPUT_MIN_WIDTH + 'px';
    document.getElementById('arrayValue').style.minWidth = this.INPUT_MIN_WIDTH + 'px';
  }

  setFormWidth(inputValue) {
    document.getElementById('arrayForm').style.minWidth = this.INPUT_MIN_WIDTH * inputValue.length + 'px';
    document.getElementById('arrayValue').style.minWidth = this.INPUT_MIN_WIDTH * inputValue.length + 'px';
  }

}
