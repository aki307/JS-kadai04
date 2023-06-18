let newTaskQuestion = prompt("タスクを入力してください");
const taskLists = [];

function makeNewTaskList(taskname, taskGenre) {
  const newTaskName = taskname;
  const newTaskGenre = taskGenre;
  const newTask = {
    name: newTaskName,
    genre: newTaskGenre
  };
  taskLists.unshift(newTask);
  console.log('====================\n現在持っているタスク一覧\n====================');
  taskLists.forEach(function(element, index, array) {
    console.log(index + ':[内容]' + element.name + '、[ジャンル]' + element.genre);
  });
}

while (newTaskQuestion !== null) {
  let newtaskGenre = prompt("ジャンルを入力してください");
  makeNewTaskList(newTaskQuestion, newtaskGenre);
  newTaskQuestion = prompt("タスクを入力してください");
}
