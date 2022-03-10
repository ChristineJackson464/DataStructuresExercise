// 1a. Create a const variable named jedi and set the value of the variable to an empty array
       /* Notes: 
        This is an empty array
          let cryptids = [];
       */
const jedi = [];

// 1b. Using index add "Luke" to the jedi array (Should be the first and only item in the array)
        /* Notes: 
        Adding an item to an array with index
          cryptids [cryptids.length] = "Chupacabra";
          console.log(cryptids);
        */
jedi [jedi.length] = "Luke" ;
console.log(jedi);
/* OR
jedi[0] = "Luke" ;
*/

// 1c. Using the Push method add "Obi-Wan Kenobi" to the jedi array
        /* Notes: 
        Push (Adds an item to the end of an array)
          tmnt.push("Master Splinter");
          console.log(tmnt);
        */
jedi.push("Obi-Wan Kenobi") ;
console.log(jedi);

// 1d. Using the Unshift method add "Yoda" the jedi array
        /* Notes:
        Unshift (Adds a new array item to the beginning of an array. Also, Unshift shifts all items in the array to the right)
          tmnt.unshift("Casey Jones");
          console.log(tmnt);
        */
jedi.unshift("Yoda") ;
console.log(jedi);

// 1e. Using index on the jedi array display "Luke" (You will need a console log for this)
      /* Notes:
      Index
        console.log("Jersey Devil"[1]); //e
        console.log(cryptids[1]); //Loch Ness Monster
      */
console.log(jedi[1]); //Luke

// 1f. Using another array method remove "Obi-Wan Kenobi" from the end of the jedi array
      /* Notes:
      Pop (Returns the value of the item at the end of an array. Also, Pop removes the items at the end of an array)
        const splinter = tmnt.pop();
        console.log(tmnt);
        console.log(splinter);
      */
const UNK = jedi.pop();
console.log(jedi);

// 1g. Finally, using another method remove "Yoda" from the beginning of the jedi array and display the final value of the array (HINT: It should just be "Luke". Also, you will need a console log for this.)
      /* Notes:
      Slice (returns a specified section of a string array)
      Example of Slice on an array
          console.log(allLOTR.slice(3, 6));
      */
console.log(jedi.slice(1));
/* OR
jedi.shift();
*/


// 2a. Create a const variable named sithLords and set the value of the variable to the following array items "Darth Vader", "Darth Sidious", and "Darth Maul"
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];

// 2b. Create another const variable named imperialOfficers and set the value of the variable to the following array items "Grand Moff Tarkin" and "Orson Krennic".
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];

// 2c. Using the concat method join the two arrays into one and set the value to a new const variable called starWarsVillains. Also, display the value of the new starWarsVillains variable (Also, make sure the sithLords are first in the new array. Also, you will need a console log for this.)
      /* Notes:
      Concat (Concatenates two arrays into one array.)
        const theHobbit =["An Unexpected Journey", "The Desolation of Smaug", "The Battle of the Five Armies"]
        const lotr =["The Fellowship of the Ring", "The Two Towers", "The Return of the King"];

        const allLOTR = theHobbit.concat(lotr);
        console.log(allLOTR);
      */
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

// 2d. Using the slice method on the starWarsVillains array display an array that contains "Darth Vader" and "Darth Sidious" in the terminal/console (You will need a console log for this)
      /* Notes
      Slice (returns a specified section of a string array)
      Example of Slice on an array
        console.log(allLOTR.slice(3, 6));
      If a second number is not included, then slice will return the item at the starting index as well as all items that follow.
        console.log(allLOTR.slice(3));
      */
console.log(starWarsVillains.slice(0,2));

// 3a. Create a const variable called droids and set the value to an object with the following key value pairs (astromech: "R2-D2"), (protocol: "C-3PO"), and (assassin: "IG-88")
      /* Notes:
      OBJECTS (An Object (AKA Object Literal) is a Data Structure that can store multiple values. Objects store data/values in Properties (AKA Key Value Pairs))
      Syntax Example for an Object
        { key: value }
      Object Example 2
        const userInfo = {
          username: `mom2MB464`,
          first: `Christine`,
          last: `Jackson`,
          age: 57,
          loggedIn: true
        };
      */
const droids = {
    astromech: "R2-D2", 
    protocol: "C-3PO",
    assassin: "IG-88",
};

// 3b. Display "R2-D2" from the droids variable/object in terminal/console using square brackets "[]" (You will need a console log for this)
      /* Notes
      ACCESSING VALUES IN AN OBJECT (To access a value in an object the key that is paired with that value must be used/referenced)
      Using a Dot .   NOTE: Dot syntax is the more commonly used way to access a value in an object
        (variable name.value);
        console.log(userInfo.first); // Christine
      */
// !console.log(droids.astromech); // R2-D2
//! NEEDED to use brackets
console.log(droids["astromech"]);


// 3c. Display "C-3PO" from the droids variable/object in terminal/console using dot "." (You will need a console log for this)
console.log(droids.protocol); // C-3PO

// 3d. In the droids variable/object change the "IG-88" value to "IG-11"
      /* Notes:
      MODIFYING
      Example using Square Brackets
        theRock[`bestMovie`] = `Tooth Fairy`;
        console.log(theRock[`bestMovie`]); // Tooth Fairy
        console.log(theRock);
      */
droids["assassin"] = "IG-11";
console.log(droids["assassin"]);
//or
//droids.assassin = "IG-11";

// BONUS

// B-4. Using indexes display the "V" from "Darth Vader" from the starWarsVillains array (You will need a console log for this)
      /* Notes
      Index
        console.log("Jersey Devil"[1]); //e
        console.log(cryptids[1]); //Loch Ness Monster
      */
// console.log(starWarsVillains);
console.log("Darth Vader"[6]);
// OR
console.log(starWarsVillians[0,6]);

// B-5. Using only negative numbers display "Darth Sidious" from the sithLords array using Slice (You will need a console log for this)
      /* Notes
      Slice (returns a specified section of a string array)
      Example of Slice on an array
        console.log(allLOTR.slice(3, 6));
      If a second number is not included, then slice will return the item at the starting index as well as all items that follow.
        console.log(allLOTR.slice(3));
      */
console.log(sithLords.slice(-2,-1));
// OR
console.log(starWarsVillians.slice(-4, -3));

// B-6a. Create a const variable named starWarsMovies and set the value to an array of three objects (AKA An array with three items in it and each item is a separate object). Use the following keys and values for each object in the array: 1st OBJECT (episodeOne: "The Phantom Menace", episodeTwo: "Attack of the Clones", and episodeThree: "Revenge of the Sith"). 2nd OBJECT (episodeFour: "A New Hope", episodeFive: "The Empire Strikes Back", and episodeSix: "Return of the Jedi"). 3rd OBJECT (episodeSeven: "The Force Awakens", episodeEight: "The Last Jedi", and  episodeNine: "The Rise of Skywalker"). I would suggest using some copy and paste on this one.
    /* Notes
    Mix of Array and Object Nesting
    Example of an Object nested inside an Array
        const findingMovies = [
          {
            title: `Finding Nemo`,
            yearReleased: 2003
          },
          {
            title: `Finding Dory`,
            yearReleased: 2016
          }
        ];
    */
const starWarsMovies = [
  {
    episodeOne: "The Phantom Menace", 
    episodeTwo: "Attack of the Clones", 
    episodeThree: "Revenge of the Sith"
  },
  { 
    episodeFour: "A New Hope", 
    episodeFive: "The Empire Strikes Back",
    episodeSix: "Return of the Jedi"
  },
  { 
    episodeSeven: "The Force Awakens", 
    episodeEight: "The Last Jedi",
    episodeNine: "The Rise of Skywalker"
  }
]
console.log(starWarsMovies);

// B-6b. Using an array method add the following string values ("Solo" and "Rogue One") as items in the starWarsMovies array between the 1st and 2nd objects (AKA Items) in the starWarsMovies array.
//! DID NOT COMPLETE
//! ANSWER per Class Review
starWarsMovies.splice(1,0,"Solo", "Rogue One");

