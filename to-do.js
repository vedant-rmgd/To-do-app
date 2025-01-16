let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("#list-container");
let li = document.querySelector("ul li");

let taskCompleted = true;

const clearText = () => {
    input.value = "";
};

const addTask = () => {
    let inputTxt = input.value;
    if(inputTxt === ""){
        alert("please enter a task");
        return;
    };
    
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerText = inputTxt;
    li.prepend(span);

    let i = document.createElement("i");
    i.setAttribute("class" , "fa-solid fa-xmark");
    li.append(i);
    i.addEventListener("click" , () => {
        li.remove();
        updateTaskCount();
    });
    ul.prepend(li);

    //adding unchecked image in front of task lists.
    let unchecked = document.createElement("img");
    unchecked.src = "./images/unchecked.png";
    unchecked.setAttribute("id", "img1")
    li.prepend(unchecked);
    
    //adding checked img aftert completing a task
    let checked = document.createElement("img");
    unchecked.addEventListener("click" , () => {
        if(taskCompleted === true){
            taskCompleted = false;
            checked.src = "./images/checked.png";
            checked.setAttribute("id","img2");
            li.classList.add("checked");
            span.setAttribute("id","checked");
            li.prepend(checked);
        } else {
            taskCompleted = true;
            checked.remove("checked");
            li.classList.remove("checked");
            span.removeAttribute("id");
        };
        updateTaskCount();
    });
    clearText();
    updateTaskCount();
};
function updateTaskCount() {
    const totalTask = document.querySelectorAll("li").length;
    const completedTask = document.querySelectorAll("li.checked").length;
    
    const taskCount = document.querySelector("#taskCount");
    taskCount.innerText = `complected : ${completedTask}/${totalTask}`;
};

btn.addEventListener("click" , () => {
    addTask();
});
