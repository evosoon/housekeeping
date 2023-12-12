"use strict";
function Arraysort(arr, property, sort, isTime = false) {
  if (isTime) {
    if (sort) {
      return arr.slice().sort((a, b) => Date.parse(a[property]) - Date.parse(b[property]));
    } else {
      return arr.slice().sort((a, b) => Date.parse(b[property]) - Date.parse(a[property]));
    }
  } else {
    if (sort) {
      return arr.slice().sort((a, b) => b[property] - a[property]);
    } else {
      return arr.slice().sort((a, b) => a[property] - b[property]);
    }
  }
}
exports.Arraysort = Arraysort;
