// Gets the reference to the heading
//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

// document.querySelector('img').onclick = function() {
//     alert("A chungus has poked me.");
// };

// Save a reference to the h1
let myHeader = document.querySelector("h1");

// Save a reference to the button
let myButton = document.querySelector("button");

// saves a reference to the body
let myBody = document.getElementById("body");

// saves a reference to the howdy element
let myHowdy = document.getElementById("howdy");

// saves it as a variable
let originalBody = myBody.innerHTML;
// saves the bum friend html
let bumFriendBody =
  "<p>Great... You poked Dark Bum, now he left. So you're stuck with bum friend.</p><p>Bum friend is pretty dumb all he wants to do all day is steal your coins. Now he's going to take your coins when you're not looking.</p><p>Bum friend doesn't really ask for much:</p> \
<ul> \
<li>Coins</li> \
<li>Pennies</li> \
<li>Dimes</li> \
<li>Quarters</li> \
<li>Blood of a virgin</li> \
</ul> <p> \
To learn more about this dumbass, visit \
<a target=\"_blank\" href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\">this site</a \
> \
and rethink your life choices. \
</p>";

// Saves a reference to the img
let myImg = document.querySelector("img");

myImg.onclick = function () {
  // gets the string attribute in src, null if empty
  let mySrc = myImg.getAttribute("src");

  // checks if the attribute points to dark bum
  if (mySrc === "images/dark-bum.png") {
    // if dark bum change to bum firend

    //change header
    myHeader.innerHTML = "Oh, it's bum friend...";

    // change the body elements
    myBody.innerHTML = bumFriendBody;

    // change the img
    myImg.setAttribute("src", "images/bum-friend.png");
  } else {
    // if bum friend change to dark bum

    //change header
    myHeader.innerHTML = "All hail Dark Bum";

    // change the body elements
    myBody.innerHTML = originalBody;

    // change the img
    myImg.setAttribute("src", "images/dark-bum.png");
  }
};

function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  //myHeading.textContent = "Mozilla is cool, " + myName;
}

myButton.onclick = function () {
  setUserName();
};

if (localStorage.getItem("name")) {
  let storedName = localStorage.getItem("name");
  myHowdy.innerHTML = "Howdy there, " + storedName + ".";
}
