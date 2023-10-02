let inputText = document.querySelector('#task');
let button = document.querySelector('#button');
let msg = document.querySelector('.errorMsg');
let task = document.querySelector('#addTask');
const removePara = document.querySelector('.para');


button.addEventListener("click", function (e) {
    e.preventDefault();
    if (inputText.value === '') {
        msg.classList.add('error');
        msg.innerHTML = "Please enter a Task!"
        setTimeout(function(){
            msg.remove();
        }, 1000)
    } else {
        let newTask = document.createElement('li');
        newTask.appendChild(document.createTextNode(`${inputText.value}`));
        task.appendChild(newTask);
        inputText.value = '';
        removePara.remove();
        let deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.addEventListener("click", function () {
            newTask.remove();
        })
        deleteButton.innerHTML = "-";
        newTask.appendChild(deleteButton);
    }

});