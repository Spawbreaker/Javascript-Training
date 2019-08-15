function externalFunction() {
  document.getElementById("demo").innerHTML =
    "We changed the HTML with an EXTERNAL FILE?! Sorcery. Burn the witch!";
}

var BearState = 0;

function bearToggle() {
  BearState++;
  BearState %= 2;

  document.getElementById("bearImg").src =
    "../img/bear" + (BearState + 1) + ".jpg";
}

var NextFont = "cursive";
var PrevFont = "serif";

function cssChange() {
  document.getElementById("demo").style.fontFamily = NextFont;
  NextFont = PrevFont;
  PrevFont = document.getElementById("demo").style.fontFamily;
}

// Bear visibility = Bearsibility
var isBearHidden = false;
function toggleBearsibility() {
  isBearHidden = !isBearHidden;
  if (isBearHidden) {
    document.getElementById("bearImg").style.display = "none";
    document.getElementById("bearHideBtn").innerHTML =
      "Woah! Where did the bear go?";
  } else {
    document.getElementById("bearImg").style.display = "inline";
    document.getElementById("bearHideBtn").innerHTML =
      "The bear is scary... again";
    document.getElement;
  }
}
