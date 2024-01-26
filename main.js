const environmentTable = ["forest", "jungle", "mountain", "mountain range",
"desert", "swamp", "marshland", "tundra", "glacier", "tropical island",
"grassland", "savannah", "canyon", "ocean", "lake", "river", "bay",
"cave system"];

const occurrencesTable = ["a field of reversed gravity",
"a place where time runs in reverse", "a portal leading to another plane",
"a twisted tree leaking foul-smelling sap", "a cloud of small flashing lights",
"a thick, swirling patch of fog", "a pure black orb hanging in space",
"a spiral of rainbow light", "a tornado fixed to one spot",
"a lightning bolt frozen at the point of impact",
"a campfire burning with purple flames", "a crack in reality",
"a pile of red bones taller than you are",
"tendrils of a thick red substance extending from a fixed point",
"a humming sword hanging suspended in midair"];

const itemsTable = ["a silver mirror", "a pouch of diamonds",
"a knotted walking stick", "a rusted fork", "a pile of ashes",
"a huge bronze bell with a crack running through it", "a wheel of cheese",
"a perfectly frosted cake", "a candle that burns with an eternal flame",
"a skull made of gold", "a telescope with three eyepieces",
"a feather that glows with soft red light", "a giant glass eyeball",
"an iron cauldron", "a single sock", "a screwdriver", "a clockwork beetle",
"a large conch shell", "an arrow without an arrowhead",
"a blanket woven from the finest silk, perfectly folded"];

const fontOptions = ["Papyrus", "Herculanum", "Party LET", "Luminari",
"Trattatello", "fantasy", "Chalkduster"];

function getRandomPhrases(){
  environment = environmentTable[Math.floor(Math.random() * 18)];
  occurrence = occurrencesTable[Math.floor(Math.random() * 15)];
  item = itemsTable[Math.floor(Math.random() * 20)];
  randomColor = Math.floor(Math.random()*16777215).toString(16);
  randomFont = Math.floor(Math.random() * 7);

  switch (environment){
    case "mountain":
      gradientColor = "gray";
      intro = "High on the slopes of a great ";
    break;

    case "mountain range":
      gradientColor = "gray";
      intro = "In a beautiful valley of a great ";
    break;

    case "desert":
      gradientColor = "yellow";
      intro = "Deep in the depths of a great ";
    break;

    case "tundra":
      gradientColor = "white";
      intro = "Deep in the icy expanse of a great ";
    break;

    case "glacier":
      gradientColor = "#aad4e5";
      intro = "Near the towering ice wall of a great ";
    break;

    case "tropical island":
      gradientColor = "yellow";
      intro = "Near the beautiful shoreline of a great ";
    break;

    case "savannah":
      gradientColor = "orange";
      intro = "Deeo in the depths of a great ";
    break;

    case "canyon":
      gradientColor = "orange";
      intro = "Deep in the depths of a great ";
    break;

    case "ocean":
      gradientColor = "blue";
      intro = "By the mighty shores of a great ";
    break;

    case "lake":
      gradientColor = "blue";
      intro = "By the mighty shores of a great ";
    break;

    case "river":
      gradientColor = "blue";
      intro = "By the mighty shores of a great ";
    break;

    case "bay":
      gradientColor = "blue";
      intro = "By the mighty shores of a great ";
    break;

    case "cave system":
      gradientColor = "gray";
      intro = "Deep in the depths of a great ";
    break;

    default:
      gradientColor = "green";
      intro = "Deep in the depths of a great ";
  }

  document.getElementById('prompt_part_1').innerHTML = intro + environment + ", you encounter " + occurrence + ". ";
  document.getElementById('prompt_part_2').innerHTML = "On the ground nearby lies " + item + ".";
  document.getElementById("prompt").style.fontFamily = fontOptions[randomFont];
  document.getElementById("prompt").style.color = "#" + randomColor;
  document.getElementById("button").style.backgroundColor = gradientColor;

  var root = document.querySelector(':root');
  var rootStyles = getComputedStyle(root);
  root.style.setProperty('--grad', gradientColor);
}
