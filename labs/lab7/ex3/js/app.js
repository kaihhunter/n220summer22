<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script>
        function onsubmitclick() {
            if (document.getElementById("username").value == "Username" && document.getElementById("password").value == "Password") {
                document.getElementById("result").innerHTML = "Success";
            } else {
                document.getElementById("result").innerHTML = "Wrong Information";
            }

        }
    </script>
</head>

<body>
    <input type="text" id="username" placeholder="username">
    <input type="password" id="password" placeholder="password">
    <input type="button" name="button" value="submit" onclick="onsubmitclick()">

    <div id="result"> </div>
</body>

</html>