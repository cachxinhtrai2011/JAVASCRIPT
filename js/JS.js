var myBtn = document.getElementById("Button");
    
myBtn.addEventListener("click", thisFunction);

function thisFunction () {
            var myText = document.getElementById("Text").value;
            var node = document.createElement("li");
            let notCompleteList = document.getElementById("notComplete");
            let completeList = document.getElementById("Complete");
            let isComplete = false;
            node.append(myText)
            node.append(<button>Remove</button>)
            node.append(<button>Move</button>);
            notCompleteList.appendChild(node);


            let btnRemove = node.children[1];
            btnRemove.addEventListener('click', function (event) {
                node.remove();
            });

            let btnMove = node.children[2];
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
        