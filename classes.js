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
    (this.petName = petName),
      (this.ownerName = ownerName),
      (this.species = species),
      (this.breed = breed);
  }

  SameOwner(owner) {
    if (this.own === owner.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

//DOM
const labelNameAnimal = document.getElementById("nameAnimal");
const ownerName = document.getElementById("nameOwner");
const species = document.getElementById("species");
const breed = document.getElementById("breed");
const button = document.querySelector(".add");

const result = document.querySelector(".containerResult");

let pets = [];



const containerResult = () => {
  result.innerHTML = "";
  pets.forEach((pet) => {
    const li = document.createElement("li");
    li.innerText = `Nome: ${pet.petName}, proprietario: ${pet.ownerName}`;
    result.appendChild(li);
  });
};

button.addEventListener("click", () => {
  let newPet = new Pet(
    labelNameAnimal.value,
    ownerName.value,
    species.value,
    breed.value
  );
  pets.push(newPet);
  containerResult();
  labelNameAnimal.value = "";
  ownerName.value = "";
  species.value = "";
  breed.value = "";
});
