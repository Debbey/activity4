var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}



function readFormData() {
    var formData = {};
    formData["itemName"] = document.getElementById("itemName").value;
    formData["Quantity"] = document.getElementById("Quantity").value;
    formData["Price"] = document.getElementById("Price").value;
    formData["Total"] = document.getElementById("Total").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("itemList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.itemName;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.Quantity;
    cell1 = newRow.insertCell(2);
    cell1.innerHTML = data.Price;
    cell1 = newRow.insertCell(3);
    cell1.innerHTML = data.Total;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button class="buttons" onclick="onEdit(this)">Edit</button>
                        <button class="button" onclick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("itemName").value = "";
    document.getElementById("Quantity").value = "";
    document.getElementById("Price").value = "";
    
    selectedRow = null;
}




function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("itemName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Quantity").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Total").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.itemName;
    selectedRow.cells[1].innerHTML = formData.Quantity;
    selectedRow.cells[2].innerHTML = formData.Price;
    selectedRow.cells[3].innerHTML = formData.Total;
}

function calculate(){

    var num1 = Number(document.getElementById("Quantity").value);
    var num2 = Number(document.getElementById("Price").value);
    var order = num1 * num2;
    document.getElementById("Total"). value = String(order);

}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("itemList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("itemName").value == "") {
        isValid = false;
        document.getElementById("itemNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("itemNameValidationError").classList.contains("hide"))
            document.getElementById("itemNameValidationError").classList.add("hide");
    }
    return isValid;
}