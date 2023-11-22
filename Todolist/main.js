// タスクを追加する関数
function addTask() {
  //  デフォルトのイベント処理をキャンセルする
  event.preventDefault();
  //  id属性が”taskInput”の要素を取得する
  var taskInput = document.getElementById("taskInput");
  // タスクの一覧を表示するul要素を取得する
  var taskList = document.getElementById("taskList");
  // 新しく追加されるタスクを表示する
  var newTask = document.createElement("li");

  // タスクが未入力の場合はエラーメッセージを表示して終了する
  if (taskInput.value === "") {
    alert("タスクを入力してください");
    return;
  }

  newTask.innerText = taskInput.value;

  //新しく作成されたli要素の子要素としてDoneボタンを追加
  var doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  // Doneボタンを押した際にremoveTaskを呼び出す
  doneButton.addEventListener("click", removeTask);
  newTask.appendChild(doneButton);

  newTask.addEventListener("click", toggleTask);
  taskList.appendChild(newTask);
  taskInput.value = "";
}

// タスクを削除する関数
function removeTask() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}

// タスクを完了する関数
function toggleTask() {
  this.classList.toggle("completed");
}
