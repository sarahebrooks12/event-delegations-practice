// Practice: These are a few of my favorite things
// Build two fieldsets and input fields that will allow you to enter the name of a favorite thing of yours, and a location where you might purchase it (Target, Amazon, Best Buy, etc...)

// Add a button beneath the fieldsets labeled "Save to Wishlist".

// When the button is clicked, display the data in the following format in the DOM.

// I can purchase {thing} at {location}
// const container = document.querySelector("#lists")

// document.querySelector("#wish-list-btn").addEventListener("click", function (){
//     console.log("The wish list button")
//     const wishList = document.querySelector("#favorite-thing")
//     const shopList = document.querySelector("#shop")
//     const wishInput = wishList.value
//     const shopInput= shopList.value
// container.innerHTML += `
// <section>
//     <p>I can purchase ${wishInput} at ${shopInput}</p>
// </section>
// `
// })
//CHALLENGES
// Challenge
// When you click the button and the new favorite thing is added to the DOM, clear out the value of both input fields. Then set the focus to the firsrt input field.

// Challenge
// When you click the button check if both input fields have a value that is not empty string (""). If it is that, then you did not type anything into that input field.

// If either input field is blank, do not add anything to the DOM and alert the user that they need to enter in all information.
//
//
//
//
//
//
//
// Practice: SPA Navigation Bar
// When the user clicks on any given link, they should see an h1 element with an appropriate heading and some lorem ipsum text. For example, when the user clicks on the "Home" link, they should see a heading that says "Home" and some dummy text.

document.querySelector("#home-page").addEventListener("click", function () {
  //print the heading and build the form
  let pageContentContainer = document.querySelector("#jsContainer");
  pageContentContainer.innerHTML = `<h1>Home</h1>`;
  pageContentContainer.innerHTML += buildPageInfo();
});
document.querySelector("#about-page").addEventListener("click", function () {
  //print the heading and build the form
  let pageContentContainer = document.querySelector("#jsContainer");
  pageContentContainer.innerHTML = `<h1>About Me</h1>`;
  pageContentContainer.innerHTML += buildPageInfo();
});
document.querySelector("#project-page").addEventListener("click", function () {
  //print the heading and build the form
  let pageContentContainer = document.querySelector("#jsContainer");
  pageContentContainer.innerHTML = `<h1>My Projects</h1>`;
  pageContentContainer.innerHTML += buildPageInfo();
});

// All content should be rendered and removed dynamically with JavaScript
// You should only have one HTML document.

// In the "Contact Me" section, the user should see a form with two inputs: one for the user's name and one for their message. They should also see a button that says "Send".

document.querySelector("#contact-page").addEventListener("click", function () {
  //print the heading and build the form
  let pageContentContainer = document.querySelector("#jsContainer");
  pageContentContainer.innerHTML = `
  <h1>Contact Me</h1>
    <input type="text" id="name-info" placeholder="Name"><br>
    <textarea type="entry" id="message-entry" placeholder="Message"></textarea><br>
    <button id="contact-btn">Send</button>`;
  pageContentContainer.innerHTML += buildPageInfo();
});

// When the user clicks the "Send" button, the message inputs should clear and they should see a confirmation message below the form that says "Your message has been sent"
document.querySelector("body").addEventListener("click", function () {
    if (event.target.id==="contact-btn") {
let messageValue = document.querySelector("#message-entry")
let nameValue = document.querySelector("#name-info")
document.querySelector("#jsContainer").innerHTML += buildContactInfo(nameValue, messageValue)
    }
})

// if(event.target.id === "new-task-button"){
//     console.log("You clicked submit")
//     const taskValue = document.querySelector("#new-task-input").value
//     console.log(taskValue)
//     //print the task value to the DOM
//     document.querySelector("#page-content").innerHTML += buildSingleTask (taskValue)
// }