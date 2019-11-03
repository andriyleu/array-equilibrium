import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayEquilibriumService {

  constructor() { }

  calculateIndexEquilibrium(array: []) {
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

  calculateMultipleIndexes(array) {
    let sum = array.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    const indexes = [];

    for (let i = 0; i < array.length; i++) {
      sum -= array[i];

      if (leftSum === sum)  {
        indexes.push(i);
      }

      leftSum += array[i];
    }

    if (indexes.length) {
      return indexes;
    }

    return -1;
  }

}
