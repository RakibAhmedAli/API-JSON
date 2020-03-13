<body>
    <h1>JSON</h1>
    <h2>JavaScript Object Notation</h2>
    <ul id="users-container">
    </ul>

    <input id="title" type="text" placeholder="title will go here"> <br>

    <input id="bodyContent" type="text" placeholder="body wii go here"> <br>

    <button id="submit"> Submit </button>

    <script>
      
        document.getElementById("submit").addEventListener("click", function(){
            const title = document.getElementById('title').value;
            const bodyContent = document.getElementById('bodyContent').value;
            const post = {title:title, body:bodyContent };
            nowPostToServer(post);
        })

        function nowPostToServer(postInfo){
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(postInfo),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        }

    </script>
</body>