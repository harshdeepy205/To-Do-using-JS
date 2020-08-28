var arr1 = new Array();

function addItem() {
    var lists = document.getElementById("listItems");
    var inputdata = document.getElementById("inputdata").value;
    var li = document.createElement("li");

    if (inputdata === "") {
        alert("Enter the Text First");
    } else {
        if (arr1.includes(inputdata)) {
            alert("News are already there");
        } else {
            li.setAttribute("id", inputdata);
            li.classList.add("li-item");

            li.appendChild(getFirstChild(inputdata));
            li.appendChild(getSecondChild(inputdata));
            lists.appendChild(li);

            arr1.push(inputdata);
        }
    }
    document.getElementById("inputdata").value = "";
}

function getFirstChild(text) {
    let elem = document.createElement("div");
    elem.appendChild(document.createTextNode("👉" + " " + text));
    return elem;
}

function getSecondChild(parentId) {
    let elem = document.createElement("div");
    elem.appendChild(document.createTextNode("❌"));
    elem.onclick = function () {
        parentElement = document.getElementById(parentId);
        parentElement.remove();
    };
    return elem;
}