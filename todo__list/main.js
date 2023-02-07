const input = document.querySelector('.form');
const tasks = document.querySelector('.tasks');

input.addEventListener('submit', addTasks);

//ADD TASKS
function addTasks(e) {
    e.preventDefault();
    let value = document.querySelector("#task").value;

    if (value) {
        let li = document.createElement("li");
        li.className = "task";
        li.innerHTML = `<span class="done">${value}</span><i class="fa-solid fa-xmark remove"></i>`
        tasks.appendChild(li);

        document.querySelector("#task").value = "";
    }
}

// REMOVE TASKS

tasks.addEventListener('click', removeTasks);

function removeTasks(e) {
    // console.log(e.target);
    let removeTarget = e.target;
    if (removeTarget.classList.contains("remove")) {
        // console.log(removeTarget);
        removeTarget.parentElement.remove();
    } else if (removeTarget.classList.contains("done")) {
        removeTarget.parentElement.style.backgroundColor = "lightblue";
        removeTarget.style.color = "#ffffff";
        removeTarget.style.textDecoration = "line-through";
    }
}