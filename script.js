noActivity = 4;
totalWeight = 100;
ERR = document.getElementById("ERR");


//code to add  no.,activity and weight  to table when add activity button clicked
function addActivity() {
    let rowCount=document.getElementsByTagName("tr").length
    let activityValue=document.getElementById("activity").value

    //validating activity field
    if(activityValue==""){
        showError("Activity name is rejected❌")
        return
    }

    let weightValue=document.getElementById("weight").value

    //validating weight field
    if(weightValue=="" || weightValue>100 ||weightValue<1){
        showError("Weight is rejected❌")
        return
    }

    let table=document.getElementById("theTable")
    
    let newRow=table.insertRow(-1)

    let c1=newRow.insertCell(0).innerHTML=rowCount
    let c2=newRow.insertCell(1).innerHTML=activityValue
    let c3=newRow.insertCell(2).innerHTML=weightValue
    let c4=newRow.insertCell(3).innerHTML=""


    //making fields blank after adding activity
    document.getElementById("activity").value=""
    document.getElementById("weight").value=""
}

 
function deleteActivity() {
  window.alert("deleteActivity");
}

function addGrade() {
  window.alert("addGrade");
}  



//function to show error
function showError(message){
    let error=document.getElementById("ERR")
    error.append(message)
    setTimeout(()=>{
      error.innerHTML="Error Message: "
    },1000)
}