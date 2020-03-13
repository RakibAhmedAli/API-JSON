
// Simple server data load & Show data in the site Dynamically
// Get Data from Server

<ul id="users-container">
 
</ul>
<script>


    fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (json => displayUser(json))

    function displayUser(users){

        const userNames = users.map(user => user.username);             //Using Map
        const ul = document.getElementById("users-container");

        for(let i = 0; i < userNames.length; i++){
            const username = userNames[i];
            const li = document.createElement("li");
            li.innerText = username;
            ul.appendChild(li);
        }
        
    }

</script>