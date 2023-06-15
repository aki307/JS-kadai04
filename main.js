let NewTaskQuestion = prompt("タスクを入力してください");
let TaskNumber = 0;
let TaskList = [];
let TaskGenre = [];

function NewTaskList(tasknumber, taskname, taskGenre) {
  let Newtasknumber = tasknumber;
  let Newtaskname = taskname;
  let Newtaskgenre = taskGenre;
  TaskList[Newtasknumber] = Newtaskname;
  TaskGenre[Newtasknumber] = Newtaskgenre;
  console.log('====================\n現在持っているタスク一覧\n====================');
  for (let i = 0; i < TaskList.length; i++) {
    console.log(i + ':[内容]' + TaskList[i] + '、[ジャンル]' + TaskGenre[i]);
  }
}

while (NewTaskQuestion !== null) {
  let NewtaskGenre = prompt("ジャンルを入力してください");
  NewTaskList(TaskNumber, NewTaskQuestion, NewtaskGenre);
  TaskNumber += 1;
  NewTaskQuestion = prompt("タスクを入力してください");
}
