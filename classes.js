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

// PET

class Pet {
  constructor(petName, ownerName, species, breed) {
    (this.name = petName),
      (this.own = ownerName),
      (this.species = species),
      (this.breed = breed);
  }

  SameOwner(owner) {
    if (this.own === owner.own) {
      return true;
    } else {
      return false;
    }
  }
}

const infoPet1 = new Pet("Nero", "Carlo", "dog", "labrador");
console.log(infoPet1);
const infoPet2 = new Pet("Milo", "Ludovica", "dog", "beagle");
console.log(infoPet2);
const infoPet3 = new Pet("Oliver", "Leonardo", "dog", "rottweiler");
console.log(infoPet3);
const infoPet4 = new Pet("lilly", "Ludovica", "dog", "border collie");
console.log(infoPet4.SameOwner(infoPet2));
