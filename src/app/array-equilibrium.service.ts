import { Injectable } from "@angular/core";

export interface EquilibriumResult {
  date: string;
  resultWas: string;
  time: string;
  arrayWas: string;
}

@Injectable({
  providedIn: "root"
})
export class ArrayEquilibriumService {
  readonly EXAMPLE_ARRAY = [-7, 1, 5, 2, -4, 3, 0];
  private storedResults = [];

  constructor() {}

  calculate(array: any, getAll: boolean) {

    const d = new Date();

    const t0 = performance.now();

    const result = getAll ?
        this.calculateMultipleIndexes(array) : this.calculateIndexEquilibrium (array);

    const t1 = performance.now();

    // Store info
    this.storedResults.push({
      date: d.toString(),
      resultWas: result.toString(),
      time: (t1 - t0).toString(),
      arrayWas: array.toString()
    } as EquilibriumResult);

    this.storedResults = this.storedResults.slice(0);

    console.log(this.storedResults[this.storedResults.length -1]);
  }

  private calculateIndexEquilibrium(array: []) {

    // If length < 3 there is no index
    if (array.length < 3) {
      return -1;
    }

    // Get sum of the whole array
    let sum = array.reduce((a, b) => a + b, 0);
    let leftSum = 0;

    for (let i = 0; i < array.length; i++) {
      // Update right
      sum -= array[i];

      // Is equilibrium index?
      if (leftSum === sum) {
        return i;
      }

      // Update left
      leftSum += array[i];
    }

    return -1;
  }

  private calculateMultipleIndexes(array) {
    let sum = array.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    const indexes = [];

    for (let i = 0; i < array.length; i++) {
      sum -= array[i];

      if (leftSum === sum) {
        indexes.push(i);
      }

      leftSum += array[i];
    }

    if (indexes.length) {
      return indexes;
    }

    return -1;
  }

  getStoredResults() {
    return this.storedResults;
  }

  getLastResult() {
    return this.storedResults[this.storedResults.length - 1];
  }
}
