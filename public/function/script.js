const inputText = document.getElementById('task');
const addTask = document.getElementById('addTask');
const removePara = document.querySelector('.para')
const msg = document.querySelector('.errorMsg')


document.getElementById('button').addEventListener("click", (e) => {
    e.preventDefault();
    if (inputText.value === '') {
        msg.classList.add('error');
        msg.innerHTML = "Please add a Task"
        setTimeout(() => msg.remove(), 3000);
    } else {
        let newTask = document.createElement('li');
        newTask.appendChild(document.createTextNode(`${inputText.value}`));
        addTask.appendChild(newTask);
        inputText.value = '';
        removePara.remove();
        let deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.addEventListener("click", function () {
            newTask.remove()
        });
        deleteButton.innerHTML = "-"
        newTask.appendChild(deleteButton)
    }
});
