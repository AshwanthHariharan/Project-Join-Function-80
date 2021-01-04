function get_paragraph_1(){
 var inputs = [];
 for(var i=1 ; i <=6; i++)
 {
     inputs.push(document.getElementById("para1_input_box_"+i).value);
 }
 console.log(inputs);
 document.getElementById("first_paragraph").innerHTML = inputs.join(". ");
}

function get_paragraph_2(){
    var inputs = [];
    for(var i=1 ; i <=6; i++)
    {
        inputs.push(document.getElementById("para2_input_box_"+i).value);
    }
    console.log(inputs);
    document.getElementById("second_paragraph").innerHTML = inputs.join(". ");
   }