"use strict";

document.addEventListener("click", function (e) {
  const id = e.target.id;
  const taskDescription = document.querySelector(".task__description").value;
  const taskPrice = document.querySelector(".task__price").value;

  if (id === "task-add") {
    addTask(taskDescription, taskPrice);
  } else if (id === "send-invoice") {
    sendInvoice();
  } else {
    return null;
  }
});

/**
 * Add a task to the task list.
 * @param {string} description
 * @param {string} price
 */
function addTask(description, price) {
  //   console.log(description, price);
  const taskListItemsEl = document.querySelector(".task-list__items");
  const taskListItemHTML = `<div class="task-list__item">
            <div class="task-list__title">
                <p class="task-list__description">${description}</p>
                <a class="task-list__remove-link" href="#">Remove</a>
            </div>
            <p class="task-list__price">$${price}</p>
        </div>`;
  taskListItemsEl.innerHTML += taskListItemHTML;
}

function sendInvoice() {
  return 0;
}
