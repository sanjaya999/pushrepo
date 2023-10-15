//obj = { a: 1, b: 2, c: 3, 4: 4, x: 5 };
//console.table(obj) creats table
//console.warn();send warning
//console.info(); simialr to warn
//console.assert();givess boolean
//console.time();tells how much time you took between 2 code writing
//console.time("forloop")
//for (let i = 0; i < 10; i++) {
//    console.log(232)
//}
//
//console.timeEnd("forloop");


//alert("hello this is alert"); gives pop up ih browser

//alert("entet the password"); always take string.
//let p = prompt("here"); it takes input from user
//document.write(p); it writes in doc website





//let p = prompt("enter your name");
//let write = confirm("do u wantto write");
//if (write) {
//    document.write(p);
//} else {
//    document.write("compulsory to 
//function fun() {
//    let cand = prompt("tell me your age");
//    cand = Number.parseInt(cand);
//    if (cand < 0) {
//        console.error("please enter valid age")
//        
//    }
//
//     if (cand < 21) {
//        alert("you cannot drive");
//    } else {
//        alert("you can drive");
//    }
//}
//
//fun();
//
//let see = confirm("do you want to see the promt again?")
//if (confirm == true) {
//    fun();
//
//} else {
//    alert("thank you");



//}





//
//let arr = ['snake', 'water', 'gun'];
//alert("you are playing snake water and gun game,")
//let round = 1;
//let userGuesses = 0;
//let computerGuesses = 0;
//while (round <= 3) {
//    let userInput = prompt("enter your guess");
//    let computerInput = arr[Math.floor(Math.random() * 3)];
//    if ((userInput == 'snake' && computerInput == 'water') || (userInput == 'gun' && computerInput == 'snake') || (userInput == 'water' && computerInput == 'gun')) {
//        userGuesses++;
//    } else {
//        computerGuesses++;
//    }
//    round++;
//}
//
//if (computerGuesses > userGuesses) {
//    alert("Ohh no You lose the computer scores more than you");
//} else {
//    alert("yeh thats my boy tu hi jeetega pata hi tha mujhe");
//}