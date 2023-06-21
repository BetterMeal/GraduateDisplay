let StuList = ["1", "2"];

// 以num为序号获取学生姓名，并展示对应的照片
// 这个是BingAI给我的改进版 我觉得很妙
const SwitchStu = () => {
  let Name = StuList[Num];
  document.getElementById("StuName").innerHTML = Name;
  document.getElementById("StuImg").src = `/img/6/${Name}.jpg`;
};

let Num = 0;
const Len = StuList.length;
let Name = StuList[0];
SwitchStu();

//切换到下个学生，不能超过总学生数
const NextStu = () => {
  Num = Num + 1;
  if (Num < Len) {
    SwitchStu();
  } else {
    Num = Num - 1;
  }
};

//切换到前一个学生，不能小于0
const PastStu = () => {
  Num = Num - 1;
  if (Num >= 0) {
    SwitchStu();
  } else {
    Num = Num + 1;
  }
};

//根据输入的序号选定学生，必须在范围内，且不为空
const SelStu = () => {
  Num = parseInt(prompt("请输入学生ID"));
  if (Num >= 0 && Num < Len && Num !== NaN) {
    SwitchStu();
  } else {
    Num = 0;
    alert("无效值!");
  }
};
