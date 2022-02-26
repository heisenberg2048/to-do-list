const newtask = document.querySelector("#newtask");
const addbutton = document.querySelector("#addbutton");
const toappend = document.querySelector("#toappend");


addbutton.addEventListener('click', function (event) {

    event.preventDefault();
    console.log(newtask.value);

    const newrow = document.createElement('div');
    newrow.classList.add("row", "container");

    const taskcheckbox = document.createElement('input');
    taskcheckbox.type = 'checkbox';
    taskcheckbox.name = 'taskcheckbox';
    taskcheckbox.classList.add('taskcheckbox');


    const task = document.createElement('label');
    task.for = 'taskcheckbox';
    task.innerText = newtask.value;
    task.classList.add('task');

    const deletebutton = document.createElement('button');
    deletebutton.innerText = "delete";



    const checktask = document.createElement('div');
    checktask.append(taskcheckbox);
    checktask.append(task);
    checktask.append(deletebutton);

    newrow.append(checktask);


    toappend.append(newrow);

    newtask.value = "";

    deletebutton.addEventListener('click', function () {
        newrow.remove();
    });

});
