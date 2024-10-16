var selectedRow = null;

document.getElementById("studentForm").addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["Rno"] = document.getElementById("Rno").value;
    formData["name"] = document.getElementById("name").value;
    formData["degree"] = document.getElementById("degree").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    
    newRow.insertCell(0).innerHTML = data.Rno;
    newRow.insertCell(1).innerHTML = data.name;
    newRow.insertCell(2).innerHTML = data.degree;
    newRow.insertCell(3).innerHTML = data.city;

    // Add action buttons
    var cell5 = newRow.insertCell(4);
    
    
cell5.innerHTML = "<button onclick='onEdit(this)'>Edit</button> <button onclick='onDelete(this)'>Delete</button>";
cell5.style.webkitTextFillColor = "#f0f0f0";

}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Rno").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("degree").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Rno;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.degree;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm("Do you want to delete this record?")) {
        var row = td.parentElement.parentElement;
        document.getElementById("storelist").getElementsByTagName('tbody')[0].deleteRow(row.rowIndex - 1);
    }
    resetForm();
}

function resetForm() {
    document.getElementById("Rno").value = "";
    document.getElementById("name").value = "";
    document.getElementById("degree").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}
