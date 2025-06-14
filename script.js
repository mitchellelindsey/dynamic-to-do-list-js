document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Task input field
    const taskList = document.getElementById('task-list');     // Unordered list to display tasks

    // Load tasks from Local Storage when the page loads
    loadTasks();

    // Event listener for Add Task button
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    });

    // Allow adding tasks by pressing Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
            } else {
                alert('Please enter a task.');
            }
        }
    });

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Function to save tasks to Local Storage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a task to the list (with optional Local Storage update)
    function addTask(taskText, save = true) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Remove task on click
        removeButton.onclick = function () {
            taskList.removeChild(li);
            removeFromStorage(taskText);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Save to Local Storage if needed
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            saveTasks(storedTasks);
        }
    }

    // Function to remove a task from Local Storage
    function removeFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        saveTasks(storedTasks);
    }
});

