    var myBtn = document.getElementById("btn");
   
    myBtn.addEventListener("click", function () {
            var myText = document.getElementById("txt").value;
            var node = document.createElement("li");
            node.innerHTML = myText + " " + "<button id='btnn'> Remove </button>" + "<button onclick = 'myFunction()' class='btnn2'>V</button>";
            document.getElementById("cpl").appendChild(node);
        
            /*var textNode = document.createTextNode(myText);
            node.appendChild(textNode);
            document.getElementById("cpl").append(node);

            var nodeBtn = document.createElement("button");
            nodeBtn.innerHTML = 'Xoa <button class="btn">X</button>';
            document.getElementById("cpl").appendChild(nodeBtn);*/
            node.addEventListener('click', function () {
                this.parentNode.removeChild(this);
            });
         })
         function myFunction(){
             alert("Chuyển xuống Not Completed Thành Công");
             var myText2 = document.getElementById("txt").value;
             var node2 = document.createElement("li");
             node2.innerHTML = myText2 + " " + "<button id='btnn'> Remove </button>" + "<button onclick = 'myFunction2()' class='btnn2'>V</button>";
             document.getElementById("ncpl").appendChild(node2);

             node2.addEventListener('click', function () {
                this.parentNode.removeChild(this);
            });
         }
         function myFunction2 (){
             alert("Chuyển lên Completed Thành Công")
            var myText3 = document.getElementById("txt").value;
            var node3 = document.createElement("li");
            node3.innerHTML = myText3 + " " + "<button id='btnn'> Remove </button>" + "<button onclick = 'myFunction()' class='btnn2'>V</button>";
            document.getElementById("cpl").appendChild(node3);

            node3.addEventListener('click', function () {
                this.parentNode.removeChild(this);
        })
    }
