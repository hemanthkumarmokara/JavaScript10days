const fs = require('fs');
const command = process.argv[2];
const input = process.argv[3];

// Utility: Load tasks
function loadTasks() {
  try {
    const data = fs.readFileSync('tasks.json', 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

// Utility: Save tasks
function saveTasks(tasks) {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks));
}

if (command === 'add') {
  const tasks = loadTasks();
  tasks.push(input);
  saveTasks(tasks);
  console.log(`✅ Task added: "${input}"`);
}

else if (command === 'list') {
  const tasks = loadTasks();
  console.log("📝 Your Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

else if (command === 'remove') {
  const tasks = loadTasks();
  const index = parseInt(input) - 1;
  if (index >= 0 && index < tasks.length) {
    const removed = tasks.splice(index, 1);
    saveTasks(tasks);
    console.log(`❌ Removed: "${removed[0]}"`);
  } else {
    console.log("⚠️ Invalid task number");
  }
}

else {
  console.log("❓ Unknown command. Use: add | list | remove");
}

