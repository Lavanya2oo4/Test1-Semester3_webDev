noActivity = 4;
totalWeight = 100;
ERR = document.getElementById("ERR");


//code to add  no.,activity and weight  to table when add activity button clicked
function addActivity() {
    let rowCount = document.getElementsByTagName("tr").length
    let activityValue = document.getElementById("activity").value

    //validating activity field
    if (activityValue == "") {
        showError("Activity name is rejected❌")
        return
    }

    let weightValue = document.getElementById("weight").value


    //validating weight field
    if (weightValue == "" || weightValue > 100 || weightValue < 1) {
        showError("Weight is rejected❌")
        return
    }

    let table = document.getElementById("theTable")

    let newRow = table.insertRow(-1)
    newRow.id = rowCount

    let c1 = newRow.insertCell(0).innerHTML = rowCount
    let c2 = newRow.insertCell(1).innerHTML = activityValue
    let c3 = newRow.insertCell(2).innerHTML = weightValue
    let c4 = newRow.insertCell(3).innerHTML = ""

    //making fields blank after adding data
    document.getElementById("activity").value = ""
    document.getElementById("weight").value = ""
}


function deleteActivityFromEnd() {
    let table = document.getElementById("theTable")
    let rowCount = document.getElementsByTagName("tr").length


    if (rowCount <= 1) {
        showError("No More activities to Delete❌")
        return
    }
    table.deleteRow(-1)
}
function deleteActivityFromStart() {
    let table = document.getElementById("theTable")
    let rowCount = document.getElementsByTagName("tr").length


    if (rowCount <= 1) {
        showError("No More activities to Delete❌")
        return
    }
    table.deleteRow(1)
}
function deleteActivitySelected() {
    let rowCount = document.getElementsByTagName("tr").length
    if (rowCount <= 1) {
        showError("No More activities to Delete❌")
        return
    }
    let selActivity = document.getElementById("activityNo").value

    if (selActivity > rowCount || selActivity <= 1) {
        showError("Activity does not exist❌")
        return
    }
    else {
        let element = document.getElementById(selActivity)
        if(element==null){
            showError("Activity does not exist❌")
            return
        }

        element.remove()
    }
}

function UpdateActivity(){
    let selActivity = document.getElementById("activityNo").value
    let element = document.getElementById(selActivity)
    if(element==null){
        showError("Activity does not exist❌")
        return
    }
    let activity=document.getElementById("activity").value
    let weight=document.getElementById("weight").value
    let grade=document.getElementById("grade").value

    let row=document.getElementById(selActivity)
    row.innerHTML=`<td >${selActivity}</td> <td>${activity}</td>
    <td>${weight}</td> <td class="grade">${grade}</td>`

    
}


//adding grade to given activity number
function addGrade() {
    let rowCount = document.getElementsByTagName("tr").length

    let grade = document.getElementById("grade").value
    let activityNo = document.getElementById("activityNo").value

    //validating grade
    if (grade == "" || grade > 100 || grade < 0) {
        showError("Grade is Rejected")
        return
    }
    //validating activityNo
    if (activityNo > rowCount || activityNo <= 0) {
        showError("Activity No is rejected")

        return
    }
    let row = document.getElementById(activityNo).getElementsByTagName("td")[3]
    row.innerHTML = grade

    //making fields blank after adding data
    document.getElementById("activity").value = ""
    document.getElementById("weight").value = ""
}






//function to show error
function showError(message) {
    let error = document.getElementById("ERR")
    error.append(message)
    setTimeout(() => {
        error.innerHTML = "Error Message: "
    }, 1000)
}