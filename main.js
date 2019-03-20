//MORNING CHALLENGE: create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers
// randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino
// (who actually got his name from a Wu-Tang name generator).

//Create a Wu-Tang name generator
// function generator(){
//   //when this function runs what do we want to happen
//   //We want the combination of two names to merge
//   //Need two arrays with names in them
//   const firstName = ["kenda", "Raey", "Oraka"];
//   const lastName = ["Wacky", "Goofy", "Silly"];
//   // const fullName = firstName[Math.floor(Math.random() * firstName.length)] +" "+lastName[Math.floor(Math.random() * lastName.length)];
// }

//present the user with 5 survey questions
//Based on those answers generate their name



let first = ["Sagat","Ryu","Dhalsim","Akuma","Zangief", "Bison","Vega"]
let last=["Snorlax", "Mewtwo","Slowpoke", "Jynx","Geodude","Face", "Grizzly"]
document.getElementById("submit").addEventListener("click",nameSelector)

function nameSelector(e){
  e.preventDefault()

  let t = document.querySelectorAll(".true:checked").length
  let mixedUp = '+'
  if(t === 0){
    mixedUp = first[0] + last[1];
  }else if(t === 1){
    mixedUp =first[2] + last[3];
  }else if(t === 2){
    mixedUp = first[4] + last[5];
  }else if(t ===3){
    mixedUp = first[6] + last[6];
  }else if(t === 4){
    mixedUp = first[4] + last[5];
  }else{
    mixedUp = first[5] + last[4];
  }


  let combo = document.getElementById("results").innerHTML = ("Your name is now " + mixedUp)
}

//   document.getElementById("form").innerHTML = "";
//   let rand= Math.round(Math.random()* first.length)
//   let randLast = Math.round(Math.random()* last.length)
//   // console.log(first[0] + last[0])
// let combo = document.getElementById("results").innerHTML = ("Your name is now: "+first[rand]+ " "+last[randLast])
// });
//
// // let combo2 = document.getElementById("results").innerHTML = ("Your name is now: "+first[rand]+ " "+last[randLast])
// if(qOne === true && qTwo === true && qThree === true && qFour === true && qFive === true){}

// console.log(combo)
  // }console.log(first[0]+" "+last[0]);


// //1 if, 4 else if's, and 1 else
// function compare(){
//   document.querySelector('.true')
// }
