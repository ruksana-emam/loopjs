class Bank {
  // property
  accountDetails = {
    1000: {
      accno: 1000,
      userName: "userOne",
      password: "password1",
      balance: 5000,
    },
    1001: {
      accno: 1001,
      userName: "userTwo",
      password: "password2",
      balance: 7000,
    },
    1002: {
      accno: 1002,
      userName: "userThree",
      password: "password3",
      balance: 8000,
    },
    1003: {
      accno: 1003,
      userName: "userFour",
      password: "password4",
      balance: 6000,
    },
    1004: {
      accno: 1004,
      userName: "userFive",
      password: "password5",
      balance: 9000,
    },
  };

  // Validate account no : (check account no is there)
  validate(accno) {
    if (accno in this.accountDetails) {
      console.log("accno is present ");
    } else {
      console.log("accno is not present");
    }
  }
  // authenticate account (acccno, username & password)
  authenticate(accno, userName, password) {
    if (accno in this.accountDetails) {
      this.account = this.accountDetails[accno];
      if (this.account.userName == userName && this.account.password)
        console.log("Authenticated");
      else {
        console.log("invalid acc no");
      }
    }
  }
  // balance enquiry (accno)
enquiry(accno){
    if(accno in this.accountDetails){
        console.log(this.accountDetails[accno].balance)
    }
    else{
        console.log("account number not found")
    }
}
}
//instance
let obj = new Bank();
obj.validate(1002);
obj.authenticate(1002,"userThree","password3")
obj.enquiry(1002)
