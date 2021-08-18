console.log("script.js");

// DRAGGABLE TITLE

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos1 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// BACKGROUND COLOR

function changeBackColor() {
  document.getElementById("artboard").style.backgroundColor =
    document.getElementById("ColorPicker2").value;
}

// TITLE

function place() {
  const title = document.getElementById("input").value;
  document.getElementById("mydivheader").innerHTML = title;
}

// CHANGE TITLE TEXT COLOR

function changeColor() {
  document.getElementById("mydivheader").style.color =
    document.getElementById("ColorPicker1").value;
}

// FONT SIZE

// get slider value
document
  .querySelector("input")
  .addEventListener(
    "input",
    (e) =>
      (document.querySelector("mydivheader").style.fontSize =
        e.target.value + "rem")
  );
$("input").on("input", (e) =>
  $("#mydivheader").css("font-size", $(e.target).val() + "rem")
);

// SAVE ARTBOARD AS FILE

// UPLOAD IMAGE

$(function () {
  $(":file").change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = imageIsLoaded;
      reader.readAsDataURL(this.files[0]);
    }
  });
});

function imageIsLoaded(e) {
  $("#myImg").attr("src", e.target.result);
}

// ARTBOARD DIMESIONS

function toggleColor() {
  var myButtonClasses = document.getElementById("artboard").classList;

  if (myButtonClasses.contains("portrait")) {
    myButtonClasses.remove("portrait");
  } else {
    myButtonClasses.add("portrait");
  }

  if (myButtonClasses.contains("landscape")) {
    myButtonClasses.remove("landscape");
  } else {
    myButtonClasses.add("landscape");
  }
}
