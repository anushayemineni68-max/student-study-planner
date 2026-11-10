function updateProgress() {
    let tasks = document.querySelectorAll("#taskList li");

    let total = tasks.length;
    let completed = document.querySelectorAll(
        "#taskList li.completed"
    ).length;

    let pending = total - completed;

    document.getElementById("totalTasks").textContent = total;
    document.getElementById("completedTasks").textContent = completed;
    document.getElementById("pendingTasks").textContent = pending;

    let percentage = total === 0 ? 0 :
        Math.round((completed / total) * 100);

    document.getElementById("progressBar").style.width =
        percentage + "%";

    document.getElementById("progressText").textContent =
        percentage + "% Completed";
}

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a study task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    li.style.background = "white";
    li.style.padding = "12px";
    li.style.margin = "10px auto";
    li.style.width = "350px";
    li.style.borderRadius = "8px";

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";

    completeBtn.onclick = function() {
        li.classList.toggle("completed");
        li.style.textDecoration =
            li.classList.contains("completed") ? "line-through" : "none";
        li.style.color =
            li.classList.contains("completed") ? "green" : "black";

        updateProgress();
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.background = "red";

    deleteBtn.onclick = function() {
        li.remove();
        updateProgress();
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
    updateProgress();
}

updateProgress();
function addExam() {
    let subject = document.getElementById("subjectInput").value.trim();
    let date = document.getElementById("examDate").value;

    if (subject === "" || date === "") {
        alert("Please enter subject and exam date!");
        return;
    }

    let selectedDate = new Date(date + "T00:00:00");
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        alert("Please select a future exam date!");
        return;
    }

    let li = document.createElement("li");

    li.textContent = subject + " - " + date;

    li.style.background = "white";
    li.style.padding = "15px";
    li.style.margin = "10px auto";
    li.style.width = "350px";
    li.style.borderRadius = "8px";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.background = "red";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("examList").appendChild(li);

    document.getElementById("subjectInput").value = "";
    document.getElementById("examDate").value = "";

    alert("Exam added successfully!");
}