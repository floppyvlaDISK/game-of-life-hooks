export default class NumberRange {
  constructor(min, max) {
    this._min = min;
    this._max = max;
  }

  contains(aNumber) {
    return this._min <= aNumber && aNumber <= this._max;
  }
}