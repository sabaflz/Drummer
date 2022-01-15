$("body").on("click", function(event) {
  let clickedButton = event.target.classList[0];
  playSound(clickedButton);
  addPlayAnimation(clickedButton);
});

$("body").keydown(function(event) {
  let clickedButton = event.key;
  playSound(clickedButton);
  addPlayAnimation(clickedButton);
});

function playSound(key) {

  let fileName = "";
  switch (key) {
    case "a":
      fileName = "tom1";
      break;
    case "s":
      fileName = "tom2";
      break;
    case "d":
      fileName = "tom3";
      break;
    case "f":
      fileName = "tom4";
      break;
    case "g":
      fileName = "crash";
      break;
    case "h":
      fileName = "kick";
      break;
    case "j":
      fileName = "snare";
      break;
    default: {
      console.log("The " + key + " was clicked!");
      return;
    }
  }


  let audio = new Audio("sounds/" + fileName + ".mp3");
  audio.play();

}

function addPlayAnimation(key){
  $("." + key).addClass("pressed");
  setTimeout(function(){
    $("." + key).removeClass("pressed");
  }, 100);
}
