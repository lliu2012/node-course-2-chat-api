// [
//   {
//     id: '/#oiu034',
//     name: ''
//   }
// ];

//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = { id, name, room };
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    //return user that was removed
    var user = this.users.filter(user => user.id === id);

    if (user.length > 0) {
      this.users = this.users.filter(user => user.id !== id);
    }

    return user[0];
  }

  getUser(id) {
    var user = this.users.filter(user => user.id === id);

    return user[0];
  }

  getUserList(room) {
    var users = this.users.filter(user => user.room === room);
    var namesArray = users.map(user => user.name);

    return namesArray;
  }
}

module.exports = { Users };

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     // console.log(name, age);
//   }

//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }

// var me = new Person('Andrew', 25);
// var description = me.getUserDescription();
// console.log(description);
