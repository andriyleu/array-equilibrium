import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ArrayEquilibriumService {
  readonly EXAMPLE_ARRAY = [1, 2, 3, 4];
  private storedResults = [];

  constructor() {}

  calculate(array: [], getAll: boolean) {

    const d = new Date();

    const t0 = performance.now();

    const result = getAll ?
        this.calculateMultipleIndexes(array) : this.calculateIndexEquilibrium (array);

    const t1 = performance.now();

    // Store info
    this.storedResults.push({
      date: d,
      resultWas: result,
      time: t1 - t0,
      arrayWas: array
    });
  }

  private calculateIndexEquilibrium(array: []) {
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
}
