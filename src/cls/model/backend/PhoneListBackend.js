const axios = require('axios');

export default class PhoneListBackend {
  constructor() {
    this.phones = [];
    this.loadPhones();
  }

  get baseURL() { //only getter. it used as baseURL without ()
    return 'http://127.0.0.1:8000/api/v1/';
  }

  _getPhoneIndex(phoneId) {
    return this.phones.findIndex( (phone) => phone.surname === phoneId); 
  }

  getPhone(userId) {
    for (var x = 0; x < this.phones.length; x++)
    {
      if (this.phones[x].surname == userId)
      {
        return this.phones[x];
      }
    }
  }

  _getNumberIndex(phone, numberId) {
    return phone.findIndex( (number) => number.id === numberId); 
  }
  
  getNumber(userObj, numberId) {
    const phone = this.getPhone(userObj.id).numbers;
    console.log(phone);
    console.log(numberId);
    const numberIndex = this._getNumberIndex(phone, numberId);
    console.log(numberIndex);
    return phone[numberIndex].number_text;
  }

  async loadPhones() {
    const result = await axios.get(this.baseURL + 'phone/');
    this.phones = result.data;
    console.log(this.phones);
  }

  loadUserPhone(phoneId) {
    const numberIndex = this._getPhoneIndex(phoneId);
    return this.phones[numberIndex];
  }

  async addNumber(userObj, number) {
    await axios.post(this.baseURL + 'number/', {"phone": this.getPhone(userObj.id).id, "number_text": number} );
    this.loadPhones();
  }

  async editNumber(userObj, numberId, number) {
    await axios.patch(this.baseURL + 'number/' + numberId + '/', {"number_text": number} );
    this.loadPhones();
  }

  async deleteNumber(userObj, numberId) {
    await axios.delete(this.baseURL + 'number/' + numberId + '/');
    this.loadPhones();
  }
}
