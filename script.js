const unorderedList = document.querySelector("ul");
const input = document.querySelector("#item");
const button = document.querySelector("button");

function clickButton (event) {
    // event.preventDefault();
    button.addEventListener("click", () => {
        const currentValue = input.value;
        input.value = "";

        const list = document.createElement("li");
        const span = document.createElement("span");
        const newButton = document.createElement("button");

        unorderedList.appendChild(span);
        unorderedList.appendChild(newButton)

        span.textContent = currentValue;
        newButton.textContent = "Delete";
        unorderedList.appendChild(list);

        newButton.addEventListener("click", () => {
            list.remove();
            span.remove();
            newButton.remove();
        })

        input.focus();
    });
}

clickButton();


