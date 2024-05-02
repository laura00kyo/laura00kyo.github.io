
let hasUserClicked = false

let circleX = 300
let circleY = 400


let riverSound;
let metalSound;
function preload() {
  riverSound = loadSound("assets/river.wav")
  metalSound = loadSound("assets/metal.wav")
}



function setup() {

  createCanvas(windowWidth, windowHeight);

  textSize(48);

  textAlign(CENTER)
  riverSound.setVolume(0.2)

}


function draw() {

  background('hotpink');
  circle(circleX,circleY,50);

  if (hasUserClicked == false) {


    text('hi, please click to start! (please)', width / 2, height / 2)


  } else {

    if (riverSound.isPlaying() == false) {

      riverSound.play()
    }
    let calculatedVolumeriver = map(

      

      mouseX, //thechanging number
      0, //min expected number
      300, //max expected number
      1,  //max output number
      0  //min output number
    )
    
    // volume needs a number between 0 - 1
    riverSound.setVolume(0)







    if (metalSound.isPlaying() == false) {

      metalSound.play()
    }

    let distanceToCircle = dist(
      mouseX, mouseY,
      circleX, circleY,

    )

   
    let calculatedVolumeMetal = map(

      distanceToCircle, //thechanging number
      0, //min expected number
      100, //max expected number
      1,  //max output number
      0  //min output number
    )

    calculatedVolumeMetal = constrain(
      calculatedVolumeMetal, 0, 1, 
    )



    // volume needs a number between 0 - 1
    metalSound.setVolume(calculatedVolumeMetal)

  }

}

function mouseClicked() {

  hasUserClicked = true;



}