"use strict";

/**
 * Represents a task object.
 * @typedef {Object} Task
 * @property {number} id  - The unique id of the object.
 * @property {string} description  - Task description.
 * @property {number} price - Task price.
 */
class Task {
  constructor(description, price) {
    this.id = new Date().getTime();
    this.description = description;
    this.price = price;
  }
}

let tasksArray = [];
const taskListItems = document.querySelector(".task-list__items");
const taskListTotal = document.querySelector(".task-list__total");

document
  .querySelector(".container--main")
  .addEventListener("click", handleDocumentClickEvents);

function handleDocumentClickEvents(e) {
  const objectId = e.target.id;
  const taskId = e.target.dataset.taskId;
  const taskDescriptionInput = document.querySelector(".task__description");
  const taskPrice = Number(document.querySelector(".task__price").value);

  if (objectId === "task-add") {
    const taskDescription = taskDescriptionInput.value.trim();
    if (taskDescription) {
      addTask(taskDescription, taskPrice);
      taskDescriptionInput.value = ""; // Clear input after adding the task
    }
  } else if (objectId === "send-invoice") {
    sendInvoice();
  } else if (taskId) {
    removeTask(Number(taskId));
  }
}

function addTask(taskDescription, taskPrice) {
  const hasObject = tasksArray.some(
    (task) => task.description === taskDescription
  );
  if (!hasObject) {
    tasksArray.push(new Task(taskDescription, taskPrice));
    updateUI();
  }
}

function updateUI() {
  let totalAmount = 0;
  let taskListItemHTML = "";

  taskListItems.innerHTML = ""; // Clear existing task list items

  tasksArray.forEach((task) => {
    totalAmount += task.price;
    taskListItemHTML += `<div class="task-list__item">
      <div class="task-list__title">
        <p class="task-list__description">${task.description}</p>
        <a class="task-list__remove-link" href="#" data-task-id="${task.id}">Remove</a>
      </div>
      <p class="task-list__price">$${task.price}</p>
    </div>`;
  });

  taskListItems.innerHTML = taskListItemHTML;
  taskListTotal.innerText = `$${totalAmount}`;
}

function sendInvoice() {
  tasksArray.length = 0; // Clear the tasks array
  updateUI();
}

function removeTask(taskId) {
  tasksArray = tasksArray.filter((task) => task.id !== taskId);
  updateUI();
}
