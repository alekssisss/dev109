// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upPart(pHeight, pColorEven, pColorOdd, pSymbol);
    downPart(pHeight, pColorEven, pColorOdd, pSymbol);
    
    }
    
    function upPart(pHeight, pColorEven, pColorOdd, pSymbol){
    var rLine ="";
    for (i=0;i<=pHeight;i++){
    rLine +="<p>";

    //Create each line on the Rhombus
    for(j=0;j<i*2;j++){
    
    //Is the position even or odd so we change the color
    if (j%2)
    //even
    rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
    else
    //odd
    rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
    
    }
    rLine +="</p>";
    //console.log(rLine);
    
    }
    
    document.getElementById("upPart").innerHTML = rLine;
    }
    
    function downPart(pHeight, pColorEven, pColorOdd, pSymbol){
    var rLine ="";
    for (i=pHeight;i>=0;i--){
    rLine +="<p>";
    //Create each line on the Rhombus
    for(j=0;j<i*2;j++){
    
    //Is the position even or odd so we change the color
    if (j%2)
    //even
    rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
    else
    //odd
    rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
    
    }
    rLine +="</p>";
    // console.log(rLine);
    
    }
    
    document.getElementById("downPart").innerHTML = rLine;
    }
    
