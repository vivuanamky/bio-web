var titles = [
  "@",
  "@V",
  "@VV",
  "@VVN",
  "@VVNK",
  "@VVNKO",
  "@VVNKOT",
  "@VVNKOT?",
  "@VVNKOT",
  "@VVNKO",
  "@VVNK",
  "@VVN",
  "@VV",
  "@V",
];

function changeTitle() {
  var index = 0;

  setInterval(function () {
    document.title = titles[index];
    index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
