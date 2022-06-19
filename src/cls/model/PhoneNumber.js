export default class PhoneNumber {
  constructor(postObj) {
    this.id = Math.round(Math.random() * 1000000).toString();
    this.numbers = [];
    this.email = postObj.email;
    this.surname = postObj.surname;
  }
  
  _getNumberIndex(numberId) {
    return this.numbers.findIndex( (number) => number.id === numberId); 
  }

  getNumber(numberId) {
    const numberIndex = this._getNumberIndex(numberId);
    return this.numbers[numberIndex].number;
  }

  addNumber(number) {
    this.numbers.push({number: number, id: (this.numbers.length + 1).toString()});
  }

  editNumber(numberId, number) {
    const numberIndex = this._getNumberIndex(numberId);
    this.numbers[numberIndex].number = number;
  }

  deleteNumber(numberId) {
    this.numbers.splice(this._getNumberIndex(numberId), 1);
  }
}
