class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.name = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  AgeDiff(user) {
    if (this.age > user.age) {
      return `${this.name} è più grande di ${user.name}`;
    } else if (this.age < user.age) {
      return `${this.name} è più giovane di ${user.name}`;
    } else {
      return `hanno la stessa età`;
    }
  }
}

const utente = new User("Sabatino", "Borrelli", 27, "Napoli");
const utente2 = new User("Stefano", "Miceli", 32, "Roma"); // Città ed età messi a caso
console.log(utente.AgeDiff(utente2));
console.log(utente2.AgeDiff(utente));
