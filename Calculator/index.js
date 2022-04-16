let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    // console.log('clicked');
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        //if exists something to be erased it will, otherwise not, in order to avoid errors
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
