
 var row =1;
var entry  = document.getElementById("entry")

entry. addEventListener("click", displayData);

 function displayData(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var income = document.getElementById("income").value;
    var expance = document.getElementById("expance").value;
    var balance = document.getElementById("balance").value;

    // check condition in all box
    if(name == "" || phone == "" || date == "" || income == "" || expance == "" || balance == ""){
        alert("Please fill all the fields");
        return;
    } 

    var display = document.getElementById("display");
    var newRow = display.insertRow(row);    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);   
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);   
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    cell1.innerHTML = name;
    cell2.innerHTML = phone;
    cell3.innerHTML = date; 
    cell4.innerHTML = income;
    cell5.innerHTML = expance;
    cell6.innerHTML = balance;
row++;
 }