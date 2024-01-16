noActivity = 4;
totalWeight = 100;
ERR = document.getElementById("ERR");


//code to add  no.,activity and weight  to table when add activity button clicked
function addActivity() {
    let rowCount=document.getElementsByTagName("tr").length
    let table=document.getElementById("theTable")
    
    let newRow=table.insertRow(-1)

    let c1=newRow.insertCell(0).innerHTML=rowCount
    let c2=newRow.insertCell(1).innerHTML=document.getElementById("activity").value
    let c3=newRow.insertCell(2).innerHTML=document.getElementById("weight").value
}

 
function deleteActivity() {
  window.alert("deleteActivity");
}

function addGrade() {
  window.alert("addGrade");
}  