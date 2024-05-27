var  mybutton = document.querySelector("button");
mybutton.addEventListener("click", function(event) {


var element = document.getElementsByTagName("div");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

// Let us stop the propagation of events

event.stopPropagation();
  });
  addEventListener("click", function(event) {
    var color = document.getElementById("chooseColor").value;
    var size = document.getElementById("chooseSize").value;
    var dot = document.createElement("div");
    dot.className = "dot";
    if (event.target.tagName !== "BUTTON" && event.target.tagName !== "SELECT" && event.target.tagName !== "OPTION" && event.target.tagName !== "LABEL") {
    if(size=="26px") { 
    dot.style.left = (event.pageX - 13) + "px";
    dot.style.top = (event.pageY - 13) + "px";
    dot.style.backgroundColor = color;
    dot.style.width = size;
    dot.style.height = size;
    document.body.appendChild(dot);
    }
    else if(size=="20px") { 
      dot.style.left = (event.pageX - 10) + "px";
      dot.style.top = (event.pageY - 10) + "px";
      dot.style.backgroundColor = color;
      dot.style.width = size;
      dot.style.height = size;
      document.body.appendChild(dot);
      }
      else if(size=="10px") { 
        dot.style.left = (event.pageX - 5) + "px";
        dot.style.top = (event.pageY - 5) + "px";
        dot.style.backgroundColor = color;
        dot.style.width = size;
        dot.style.height = size;
        document.body.appendChild(dot);
        }
        else if(size=="8px") { 
          dot.style.left = (event.pageX - 4) + "px";
          dot.style.top = (event.pageY - 4) + "px";
          dot.style.backgroundColor = color;
          dot.style.width = size;
          dot.style.height = size;
          document.body.appendChild(dot);
          }
        }
  });
