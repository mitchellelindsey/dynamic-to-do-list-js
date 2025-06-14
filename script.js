// Run the script only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Task input field
    const taskList = document.getElementById('task-list');     // Unordered list to display tasks

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add click event to remove button
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to list item, then append list item to list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on pressing Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

