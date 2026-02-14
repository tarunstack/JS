"use strict";

let tasks = [];//created tasks array to store task object

let currentId = 1;
// increment id variable defined
//in addTask Task structure: id, tle, status  
// Implemented addTask with auto-increment id. 
const addTask = (title) => {
    const newTask = {
        id: currentId++,//this is auto increment the id
        title: title,
        status:  "pending" // this will be default status


    };

    tasks.push(newTask);
    console.log(`Task "${title}" added successfully.\n`);
};

//below is implementing getAllTasks() using console.table() using Arrrow function
const getAllTasks = () => {
    console.log("All Tasks:");
    console.log(tasks);
};
// below implementing completeTask(id)
// also using find() and arrow function

const completeTask = (id) => {
  const task = tasks.find(task => task.id === id); // using find()

  if (!task) {
    console.log("Task not found.\n");
    return;
  }

  task.status = "completed";
  console.log(`Task with ID ${id} marked as completed.\n`);
};

//using deleteTask(id) and filter below
const deleteTask = (id) => {

  const taskExists = tasks.find(task => task.id === id); // using find()

  if (!taskExists) {
    console.log("Task not found.\n");
    return;
  }

  tasks = tasks.filter(task => task.id !== id); // using filter()
  console.log(`Task with ID ${id} deleted successfully.\n`);
};

// below we are using map() to create a formatted view
const getFormattedTasks = () => {
  const formatted = tasks.map(task => ({
    ID: task.id,
    Title: task.title.toUpperCase(),
    Status: task.status
  }));

  console.log("Formatted Tasks (Using map()):");
  console.table(formatted);
};

// below is testing section output checking of above code

addTask("Learn JavaScript");
addTask("Practice Array Methods");
addTask("Build MERN Project");

getAllTasks();

completeTask(2);

getAllTasks();

deleteTask(1);

getAllTasks();

getFormattedTasks();
