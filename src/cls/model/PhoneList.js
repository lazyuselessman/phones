import PhoneNumber from "./PhoneNumber.js";

export default class PhoneList {
  constructor() {
    this.phones = [];
  }

  addPhone(phoneObj) {
    const phone = new PhoneNumber(phoneObj);
    this.phones.push(phone);
    return phone;
  }

  addNumber(userEmail, number) {
    this.phones.find((phone) => phone.email === userEmail).addNumber(number);
  }

  editNumber(userEmail, numberId, number) {
    this.phones.find((phone) => phone.email === userEmail).editNumber(numberId, number);
  }

  deleteNumber(userEmail, number) {
    this.phones.find((phone) => phone.email === userEmail).deleteNumber(number);
  }
}
