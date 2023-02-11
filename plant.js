function hamMenu() {
  var icon = document.getElementById("myMenu");

  if (icon.style.display === "none") {
    console.log("çalıştı")
    icon.style.display = "block";
  } else {
    icon.style.display = "none";
  }
}

function tarihSaat() {
  var date = new Date().toLocaleString("tr-TR");
  document.querySelector(".saat").innerHTML = date;
}

setInterval(tarihSaat, 1000);

function loginHide() {
  var change = document.getElementById("myLogin");
  if (change.style.display === "none") {
    change.style.display = "block";
  } else {
    change.style.display = "none";
  }
}
