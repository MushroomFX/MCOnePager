function splitClass(className, speed) {
    //speed = characters per second
    var elems = document.getElementsByClassName(className);
    for (i = 0; i < elems.length; i++) {
      if (elems[i].tagName == "DIV") {
        var elem = elems[i].innerHTML;
        var temp = "";
        for (j = 0; j < elem.length; j++) {
          var anmState = j * speed;
          temp += `<fakediv class="${className}" style="-webkit-animation-delay: ${anmState}s">${elem[j]}</fakediv>`;
        }
        console.log(temp);
        elems[i].innerHTML = temp;
      }
    }
    return;
  }
  
  splitClass("wave_txt", 0.1);
  
  //tab Selection
  window.addEventListener("wheel", function (event) {
    if (event.deltaY < 0) {
      move(true);
    } else if (event.deltaY > 0) {
      move(false);
    }
  });
  pos = 0;
  
  function move(direction) {
    if (direction == true && pos > 1) {
      pos -= 1;
    } else if (
      direction == false &&
      pos < document.getElementsByClassName("subClass").length
    ) {
      pos += 1;
    }
    var subClass = document.getElementsByClassName("subClass");
    subClass[pos - 1].classList.add("activesubClass");
    subClass[pos].classList.remove("activesubClass");
    console.log(direction, pos);
  }
  