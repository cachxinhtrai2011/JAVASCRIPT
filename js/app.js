var myBtn = document.getElementById("button");
    
myBtn.addEventListener("click", thisFunction);

function thisFunction () {
            var myText = document.getElementById("Text").value;
            var node = document.createElement("li");
            let notCompleteList = document.getElementById("notComplete");
            let completeList = document.getElementById("Complete");
            let isComplete = false;

            let btnRemove = document.createElement("button")
            btnRemove.className = "btn-Remove button"
            btnRemove.append("Remove")
            let btnMove = document.createElement("button")
            btnMove.className = "btn-Move button"
            btnMove.append("Move")
            
            node.append(myText + ' ')
            node.append(btnRemove)
            node.append(' ')
            node.append(btnMove);
            notCompleteList.appendChild(node);


            btnRemove = node.children[0];
            btnRemove.addEventListener('click', function (event) {
                node.remove()
            });
            
            btnMove = node.children[1];
            btnMove.addEventListener('click', function (event) {
                if(isComplete){
                  notCompleteList.append(node);
                }
                  else{
                  completeList.append(node);
                  }
                  isComplete = !isComplete;
            });
         }
        