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
  randomFont = Math.floor(Math.random() * 7);

  switch (environment){
    case "mountain":
      textColor = "#6B6C6B";
      intro = "High on the slopes of a great ";
    break;

    case "mountain range":
      textColor = "gray";
      intro = "In a beautiful valley of a great ";
    break;

    case "desert":
      textColor = "#DA870E";
      intro = "Deep in the depths of a great ";
    break;

    case "tundra":
      textColor = "#696F77";
      intro = "Deep in the icy expanse of a great ";
    break;

    case "glacier":
      textColor = "#279F9A";
      intro = "Near the towering ice wall of a great ";
    break;

    case "tropical island":
      textColor = "#09641A";
      intro = "Near the beautiful shoreline of a great ";
    break;

    case "savannah":
      textColor = "#DA870E";
      intro = "Deeo in the depths of a great ";
    break;

    case "canyon":
      textColor = "#953D04";
      intro = "Deep in the depths of a great ";
    break;

    case "ocean":
      textColor = "#126E97";
      intro = "By the mighty shores of a great ";
    break;

    case "lake":
      textColor = "#174DA7";
      intro = "By the mighty shores of a great ";
    break;

    case "river":
      textColor = "#126E97";
      intro = "By the mighty shores of a great ";
    break;

    case "bay":
      textColor = "#174DA7";
      intro = "By the mighty shores of a great ";
    break;

    case "cave system":
      textColor = "#28312A";
      intro = "Deep in the depths of a great ";
    break;

    default:
      textColor = "#033E0E";
      intro = "Deep in the depths of a great ";
  }

  document.getElementById('prompt_part_1').innerHTML = intro + environment + ", you encounter " + occurrence + ". ";
  document.getElementById('prompt_part_2').innerHTML = "On the ground nearby lies " + item + ".";
  document.getElementById("prompt").style.fontFamily = fontOptions[randomFont];
  document.getElementById("prompt").style.color = textColor;
  document.getElementById("button").style.backgroundColor = textColor;

  environment = environment.replace(/\s/g, '-');
  document.getElementById("page").style.backgroundImage = "linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(images/" + environment + ".jpg)";
}
