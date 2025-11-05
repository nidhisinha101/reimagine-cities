//initializing variables 
let canvas_width = 900;
let canvas_height = 700;

class Pic{
  constructor (name,img1, img2, w, h, xpos, ypos, description){
    //resize the images to be the desired size 
    this.name = name;
    this.img1 = img1;
    this.img2 = img2;
    this.img1.resize(w,h);
    this.img2.resize(w,h);
    this.width = img1.width;
    this.height = img1.height;
    this.x = xpos;
    this.y = ypos;
    this.description = description;
  }
  
  //checking if the mouse is hovering over the image 
  isMouseOver(){
    return mouseX >= this.x && 
           mouseX <= this.x + this.width &&
           mouseY >= this.y && 
           mouseY <= this.y + this.height;
  }
  
  //switch between the two images when the mouse hovers 
  display(){
    if(this.isMouseOver()){
      image(this.img2, this.x, this.y);
    } else {
      image(this.img1, this.x, this.y);
    }
  }
}

//preload the images 
function preload(){
  //Header
  font = loadFont('/img/Switzer-Black.otf');
  header = loadImage('/img/header.png')
  //Tooltip font 
  font2 = loadFont('/img/Switzer-Regular.otf');
  //1: Housing
  p1 = loadImage('/img/headlights1.png');
  p2 = loadImage('/img/budget1.png'); 
  //2: Afterschool
  p3 = loadImage('/img/headlights2.png');
  p4 = loadImage('/img/budget2.png'); 
  //3: Free lunch
  p5 = loadImage('/img/headlights3.png');
  p6 = loadImage('/img/budget3.png');
  //4: Gun violence prevention
  p7 = loadImage('/img/headlights4.png');
  p8 = loadImage('/img/budget4.png'); 
  //5: Transit
  p9 = loadImage('/img/headlights5.png');
  p10 = loadImage('/img/budget5.png'); 
  //6: People's clinic
  p11 = loadImage('/img/headlights6.png');
  p12 = loadImage('/img/budget6.png'); 
  //7: Small business
  p13 = loadImage('/img/headlights7.png');
  p14 = loadImage('/img/budget7.png'); 
  //8: Crisis response
  p15 = loadImage('/img/headlights8.png');
  p16 = loadImage('/img/budget8.png'); 
  //9: Park
  p17 = loadImage('/img/headlights9.png');
  p18 = loadImage('/img/budget9.png'); 
  //10: Community events
  p19 = loadImage('/img/headlights10.png');
  p20 = loadImage('/img/budget10.png'); 
  //11: Community garden
  p21 = loadImage('/img/headlights11.png');
  p22 = loadImage('/img/budget11.png'); 
  //12: Library
  p23 = loadImage('/img/headlights12.png');
  p24 = loadImage('/img/budget12.png'); 
}

//create the canvas and intialize the constructor objects 
function setup() {
  let canvas = createCanvas(900, 700);
  canvas.parent('animation-container');
  // Center canvas in parent container
  let containerWidth = select('#animation-container').width;
  let xOffset = (containerWidth - width) / 2;
  canvas.position(xOffset, 0, 'relative');
  pics = []; //array for all pic objects 
  selectedPic = null;
  //create all of the pic objects and push into an array
  //1
  pics.push(new Pic("Affordable Housing", p1, p2, 360, 150, 540,550, "For 10% of OPD’s overtime budget for one fiscal year, we could put a roof over the heads of hundreds of families."));
  //2
  pics.push(new Pic("Public Arts Programs", p3, p4, 180, 150, 360, 550, "For 5% of OPD’s overtime budget for one fiscal year, we could provide free life-changing arts programs for youth. "));
  //3
  pics.push(new Pic("Free Lunch", p5, p6, 60, 90, 480, 460, "For 1% of OPD’s overtime budget for one fiscal year, we could provide free food to hundreds of children living in food deserts."));
 //4
  pics.push(new Pic("Gun Violence Prevention", p7, p8, 240, 450, 660, 100, "For 20% of OPD’s overtime budget for one fiscal year, we could implement a public-health centered approach to addressing gun violence, focusing on prevention at the root source rather than reduction."));
  //5
  pics.push(new Pic("Accessible Public Transit", p9, p10, 180,300, 180,100, "For 10% of OPD’s overtime budget for one fiscal year, we could improve public transit infrastructure to allow residents to accessibly and reliably move around the city."));
  //6
  pics.push(new Pic("People's Clinics", p11, p12, 180,300,180,400, "For 10% of OPD’s overtime budget for one fiscal year, we could fund clinics that provide essential physical and mental wellness services to community members that do not have access to healthcare."));
  //7
  pics.push(new Pic("Support Small Businesses", p13, p14, 180, 360, 480, 100, "For 12% of OPD’s overtime budget for one fiscal year, we could invest in small businesses to boost the local economy, reduce income inequality, and create more jobs."));
  //8
  pics.push(new Pic("Crisis Response Program", p15, p16, 120, 90, 540, 460, "For 2% of OPD’s overtime budget for one fiscal year, we could create a non-police crisis responder program that sends trained professionals to provide the appropriate support to people experiencing mental health crises."));
  //9
  pics.push(new Pic("Park Renovation", p17, p18, 120, 180, 360,100, "For 4% of OPD’s overtime budget for one fiscal year, we could maintain our gorgeous public parks, providing essential third spaces for people to gather and play."));
  //10
  pics.push(new Pic("Community Events", p19, p20, 120, 270, 360, 280, "For 6% of OPD’s overtime budget for one fiscal year, we could have community events centered around getting to know our neighbors in joyful settings."));
 //11 
  pics.push(new Pic("Community Garden", p21, p22, 180,150, 0, 100, "For 5% of OPD’s overtime budget for one fiscal year, we could establish a community garden where people can come together to grow fruits and vegetables."));
  //12
  pics.push(new Pic("Library", p23, p24, 180, 450, 0,250, "For 15% of OPD’s overtime budget for one fiscal year, we could renovate the library that provides critical resources such as books, WiFi, and tutoring, free of cost to residents."));
}

// shows tooltip if mouse is clicked 
function mousePressed() {
    // check if the close button has been clicked on an open tooltip
  if (selectedPic !== null) {
    let tooltipWidth = 350;
    let tooltipHeight = 200;
    let tooltipX = (900 - tooltipWidth) / 2;
    let tooltipY = (canvas_height - tooltipHeight) / 2;
    
    let closeSize = 25;
    let closeX = tooltipX + tooltipWidth - closeSize - 10;
    let closeY = tooltipY + 10;
    
    let distToClose = dist(mouseX, mouseY, closeX + closeSize/2, closeY + closeSize/2);
    if (distToClose < closeSize/2) {
      selectedPic = null;
      return;
    }
    
    // remove tooltip if user clicks outside of the tooltip
    if (isClickOutsideTooltip(mouseX, mouseY)) {
      selectedPic = null;
      return;
    }
    return;
  }

  // check if a pic has been selected 
  for (let pic of pics) {
    if (pic.isMouseOver()) {
      selectedPic = pic;
      return;
    }
  }
}

// check if click is outside the tooltip area
function isClickOutsideTooltip(mx, my) {
  let tooltipWidth = 350;
  let tooltipHeight = 200;
  let tooltipX = (900 - tooltipWidth) / 2;
  let tooltipY = (canvas_height - tooltipHeight) / 2;
  
  return mx < tooltipX || mx > tooltipX + tooltipWidth ||
         my < tooltipY || my > tooltipY + tooltipHeight;
}

// display the tooltip
function displayTooltip(pic) {
  // Semi-transparent overlay
  fill(0, 0, 0, 180);
  rect(0, 0, 900, canvas_height);
  
  // Tooltip dimensions
  let tooltipWidth = 350;
  let tooltipHeight = 200;
  let tooltipX = (900 - tooltipWidth) / 2;
  let tooltipY = (700 - tooltipHeight) / 2;
  let padding = 20;
  
  // Tooltip background
  fill("rgb(187,239,239)");
  stroke(100);
  strokeWeight(2);
  rect(tooltipX, tooltipY, tooltipWidth, tooltipHeight, 10);
  
  // Close button
  let closeSize = 25;
  let closeX = tooltipX + tooltipWidth - closeSize - 10;
  let closeY = tooltipY + 10;
  fill(220);
  noStroke();
  circle(closeX + closeSize/2, closeY + closeSize/2, closeSize);
  fill(100);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("×", closeX + closeSize/2, closeY + closeSize/2 - 2);
  
  // Display title
  fill(0);
  textAlign(LEFT, TOP);
  textSize(20);
  textStyle(BOLD);
  textFont(font);
  text(pic.name, tooltipX + padding, tooltipY + padding);
  
  // Display description
  textSize(14);
  textStyle(NORMAL);
  textFont(font2);
  text(pic.description, tooltipX + padding, tooltipY + padding + 35, tooltipWidth - padding * 2);
}

// make everything show up
function draw() {
  // Display header 
  header.resize(900,100);
  image(header,0,0);
  
  // Update and display all images
  for (let pic of pics) {
    pic.display();
  }
  
  // If a pic is selected, display the tooltip
  if (selectedPic !== null) {
    displayTooltip(selectedPic);
  }
}


