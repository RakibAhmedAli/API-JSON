 // Try to clear concept about JSON stringify & parse
// Start

        const user = {
            id: 245, 
            name:"Masud",
            friends: ["Masuk", "Mizan", "Manik"],
            friendsAge: [12, 13, 15]
        };                                      //normal js object

        const userJson = JSON.stringify(user);  //Normal to JSON object

        console.log(userJson);


        const userFromJSON = JSON.parse(userJson);  //JSON object to normal object
        console.log(userFromJSON);


// End