setDate(Date());

        var input = document.getElementById("dateInput");
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("myBtn").click();
            }
        });
        var date = new Date();


        function readnumber() {
            var input = document.getElementById("fileinput").value;
            readTextFile(input + ".txt");
            var enteredDate = new Date("1996-08-21");
            enteredDate.setDate(enteredDate.getDate() + Number(input));
            setDate(enteredDate);
            document.getElementById("header").innerHTML = "Day " + input;
        }

        function readTextFile(file) {
            var text1 = "file : " + file
            document.getElementById("fileContent").innerHTML = "text";
            fetch(file).then(res => {if (res.ok) return res.text(); else text1 = "Could not find file " + file;})
                .then(text => {document.getElementById("fileName").innerHTML = text1;document.getElementById("fileContent").innerHTML = text || "File is empty";})
                .catch((e) => console.error(e));
        }

        function setDate(d1) {
            var date = new Date(d1);
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();

            if (month < 10) month = "0" + month;
            if (day < 10) day = "0" + day;

            var today = year + "-" + month + "-" + day;
            document.getElementById("dateInput").value = today;
        }


        function calculateDay() {
            var inputDate = document.getElementById("dateInput").value;
            var targetDate = new Date("1996-08-21");
            var enteredDate = new Date(inputDate || Date());
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];

            var daysDifference = Math.floor((enteredDate - targetDate) / (1000 * 60 * 60 * 24));

            document.getElementById("result").innerHTML = "The day difference between 21 August 1996 and " + enteredDate.getDate() + " " + monthNames[enteredDate.getMonth()]
                + " " + enteredDate.getFullYear() + " is: " + daysDifference + " days.";

            document.getElementById("fileinput").value = daysDifference;
            document.getElementById("header").innerHTML = "Day " + daysDifference;
            readTextFile(daysDifference + ".txt");
        }