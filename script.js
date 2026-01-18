const unorderedList = document.querySelector("ul");
const input = document.querySelector("#item");
const button = document.querySelector("button");

function createList (event) {
    event.preventDefault();

    const currentValue = input.value;
    input.value = "";

    const list = document.createElement("li");
    const span = document.createElement("span");
    const newButton = document.createElement("button");

    list.appendChild(span);
    span.textContent = currentValue;
    list.appendChild(newButton)
    newButton.textContent = "Delete";
    unorderedList.appendChild(list);

    newButton.addEventListener("click", () => {
        list.remove();
        span.remove();
        newButton.remove();
    })

    input.focus();
}

button.addEventListener("click", createList);



