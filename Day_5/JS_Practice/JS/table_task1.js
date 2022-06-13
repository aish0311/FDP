function drawtable()
{
    var row=parseInt(prompt("enter  row"));
    var column=parseInt(prompt("enter  column"));

    var a= "<h1>Row:" + row + "</h1>";
    a += "<h1> Column:" + column + "</h1>";
    a+= "<table border='2'>";
   

    //console.log(typeof(row));
    //console.log(typeof(column));

    for(var i=1;i<=row;i++)
    {
        a+= "<tr>";
        
        for(var j=1;j<=column;j++)
        {
            if(( i + j ) % 2 == 0 ){
                if(i%2==1){
                    a+= "<td bgcolor='black'>row:" + i + ";column:" + j + "</td>";
                }
               
            }
            else{
                a+= "<td bgcolor='red'>row:" + i + ";column:" + j + "</td>" ;
            } 

        a+= "</tr>"; 
        }
        
        a+= "</table>";
        document.writeln(a);
        document.getElementById('printtable').innerHTML=a;
    }
}
  

    //document.getElementById("row_span").innerHTML=row;
    //document.getElementById("column_span").innerHTML=column;
    //document.write(row);
    //document.write(column);


