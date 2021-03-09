var name_of_the_scentence_array = [];
function submit(){
    var display_student_array = [];
    
``
    for (var j = 1; j<=4; j++)
    {
        var name_of_the_Student = document.getElementById("name_of_the_student_" +j).value;
        console.log(name_of_the_Student);
        name_of_the_scentence_array.push(name_of_the_Student);
    }

console.log(name_of_the_scentence_array);
var length_of_name_of_scentence_array = name_of_the_scentence_array.length;
console.log(length_of_name_of_scentence_array);

for (var k = 0; k < length_of_name_of_scentence_array; k++)
{
    display_para_array.push("<h4> "+ name_of_the_scentence_array[k] + "</h4>");
    console.log(display_para_array);
}
console.log (display_para_array);
document.getElementById("display_name_with_commas").innerHTML = display_para_array

var remove_commas = display_para_array.join ("");
console.log(remove_commas);
document.getElementById("display_name_with_commas").innerHTML = remove_commas;
document.getElementById("submit_button").style.display= "none";
document.getElementById("sort_button").style.display= "inline-block";


}

function sorting()
{
    name_of_the_scentence_array.sort();
    console.log(name_of_the_scentence_array);

    var display_para_array_sorting = [];

    var length_of_name_of_scentence_array = name_of_the_scentence_array.length;
    for (var k = 0; k <length_of_name_of_scentence_array; k++)
    {
        display_para_array_sorting.push("<h4>NAME - " + name_of_the_para_array[k]+ "</h4>");
        console.log(display_para_array_sorting);
         
    }

    var remove_commas = display_para_array_sorting.join("");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}

