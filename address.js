"use strict";
// display methoed 
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [
      // new Contact("Snoopy", "snoopy@cooldog.com", "111-222-3333", "my dog"),
      // new Contact("Porkchop", "porkchop@doug.com", "333-555-9999", "a cool friend")
    ];
  }
  
  add(info) {
    this.contacts.push(info);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
  // print() {
  //   for (let i = 0; i < this.contacts.length; i++) {
  //     console.log(`Index: ${i}, Name: ${this.contacts[i].name}, Email: ${this.contacts[i].email}, Phone: ${this.contacts[i].phone}, Relation: ${this.contacts[i].relation}`);
  //   }
  display() {
    document.querySelector(".contact_list").innerHTML = "";
    let count = 0;
    for (let contact of this.contacts) {
    const newContact = document.createElement("div");
    // const trashImage = document.createElement("img");
      newContact.setAttribute("index",count);
      newContact.classList.add("new_contacts");
      newContact.innerHTML = `
      <p>Name:${contact.name}</p> 
      <p>Email:${contact.email}</p>
      <p>Phone:${contact.phone}</p>
      <p>Relation:${contact.relation}</p>
      <i class="far fa-trash-alt"></i>`;
      document.querySelector(".contact_list").append(newContact);
      count++;
    }
    console.log(book);
  }
}

const book = new AddressBook();

const form = document.querySelector("form").addEventListener("submit", addContact);
function addContact(a) {
  a.preventDefault();
  let inputElements = document.querySelectorAll("input");
  const info = new Contact (
  inputElements[0].value,
  inputElements[1].value,
  inputElements[2].value,
  inputElements[3].value
  );
  book.add(info);
  for (let input of inputElements) {
    input.value = "";
    
  }
  book.display();
}
console.log(book);
// book.display();
// document.querySelector("i").addEventListener("click", deleteContact);
// function deleteContact(){
//   if(event.targert === "IMG"){

//   }
// }



















// main.addEventListener("submit", function (event) {
//   if (event.target.classList.contains("add_btn")) {
//     let input = document.querySelectorAll("input")
//     const info = {
//       name:input[0].value,
//       email:input[1].value,
//       phone:input[2].value,
//       relation:input[3].value
//     };
//     add(info);
//     // book.display();
//   }

// });
// console.log(book);


// while (true) {
//   let choice = prompt("Add, Delete, Print, or Quit?");
//   if (choice === "Quit") {
//     console.log("Goodbye.");
//     break;
//   } else if (choice === "Print") {
//     book.print();
//   } else if (choice === "Delete") {
//     let deleteChoice = prompt("Delete by index or by name?");
//     if (deleteChoice === "Name") {
//       book.deleteByName(prompt("Enter a name."));
//     } else if (deleteChoice === "Index") {
//       book.deleteAt(prompt("Index to delete?"));
//     }
//   } else if (choice === "Add") {
//     book.add(new Contact(
//       prompt("Enter a name."),
//       prompt("Enter an email."),
//       prompt("Enter a phone number."),
//       prompt("Enter a relation.")
//     ));
//   }
// }


//create a function
// add event listiner to a button
// 
