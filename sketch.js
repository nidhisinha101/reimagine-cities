//canvas size
let canvas_width = 900;
let canvas_height = 700;

//pics 
let p1, p2, p3, p4, pp5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, h;

//tooltip descriptions 
let b1 = `For 10% of OPD’s overtime budget for one fiscal year ($3,400,000), we could put a roof over the heads of hundreds of families.

Oakland’s Homelessness Pilot Program received a $1 million renewal this past fiscal year, providing rental assistance and social services to residents to prevent homelessness. $1 million could support 125 families, or build 1 unit of affordable housing in Oakland. [5] Creating more affordable housing addresses one of the biggest root causes of violent crime, by facilitating stability and spaces for healing. [6] Additionally, investing in housing upfront can result in an average cost savings of $31.5K on emergency services over 2 years and $23K on shelter programs per year. [7] `;
let b2 = `For 5% of OPD’s overtime budget for one fiscal year ($1,700,000), we could provide free life-changing arts programs for youth. 

The arts have taken one of the biggest hits from the passage of Oakland’s recent budget, with the most crucial public arts program role being eliminated to reduce the deficit. Oakland Ballet, another program affected by the budget cuts, currently provides free dance education for 8000 Oakland students. [8] Engaging in art builds empathy, communication, and better emotional processing for kids, making better humans for our communities. [9] Afterschool and summer programs such as dance are proven to decrease juvenile violent crime arrests and vandalism and weapons crime. [10]`;
let b3 = `For 1% of OPD’s overtime budget for one fiscal year ($340,000), we could provide free food to hundreds of children living in food deserts. 

Oakland recently reduced the funding allocation for their free summer food program, providing nutritious food to families in food deserts. [11] Their total annual budget is less than 1% of OPD’s overtime budget. If we gave this program even a full 1% of the overtime budget, we would be able to feed hundreds more children even more food during the summer months. `;
let b4 = `For 20% of OPD’s overtime budget for one fiscal year ($6,800,000), we could implement a public-health centered approach to addressing gun violence.

Treating gun violence as a public health crisis means recognizing the cycle of harm that violence perpetuates in communities and addressing the root causes to interrupt the transmission of such violence. [12] Community violence intervention programs target the highest risk individuals to prevent violence through cost-effective, evidence-based strategies. [13] Cure Violence (CV) is one such model following public health strategies such as detecting and intervening violence before it starts, changing individual behaviors and social norms, and treatment. CV has managed to reduce shootings and killings at a rate as high as 73% in certain cities, with multiple cities experiencing no shootings for over a year. A model like this saves $18 for every $1 invested, with sustained results for the communities it serves. [14]`;
let b5 = `For 10% of OPD’s overtime budget for one fiscal year ($3,400,000), we could improve public transit infrastructure to allow residents to accessibly move around the city. 

Public transit in the Bay Area has faced an ever increasing deficit since the start of the COVID-19 pandemic, leading to decreased services, increased fares, and entire routes being cut. [15] Oakland’s bus system, AC Transit, has become notoriously disorganized over the past 30 years, failing to serve the low-income communities that need it the most. [16] Extended transportation infrastructure increases access to medical care, food, services, employment, and social connections. This accessibility is especially important to bridge the gap for people with disabilities, the elderly, and lower-income residents. Reliable access to public transit  boosts people’s quality of life, thereby contributing to the overall community's wellbeing. [17] `;
let b6 = `For 10% of OPD’s overtime budget for one fiscal year ($3,400,000), we could fund clinics that provide essential physical and mental wellness services to community members that do not have access to healthcare. 

Community health clinics provide vital services such as primary care, diabetes screenings, COVID tests, and wound care. [18] Beyond treating physical symptoms, these mobile clinics also serve as healing spaces for people suffering from mental health issues and addiction. [19] Health care is one of the most crucial parts of the social safety net that prevents violent crime and reduces recidivism. [20] Studies show that mobile community clinics in the South have actually annually saved $36 for every $1 invested compared to ER visits. [21] `;
let b7 = `For 12% of OPD’s overtime budget for one fiscal year ($4,080,000), we could invest in small businesses to boost the local economy.

As part of their COVID response, Oakland provided over $4 million in direct financial support to its small businesses. [22] When small businesses are strengthened, poverty rates lower, more jobs are created, and the community feels stronger for it. Communities with more local businesses have shown to have stronger social ties and higher levels of civic engagement, and even improved public health outcomes. [23]`;
let b8 = `For 2% of OPD’s overtime budget for one fiscal year ($680,000), we could create a non-police crisis responder program that sends trained professionals to provide the appropriate support to people experiencing mental health crises. 

People with untreated mental illness are 16 times more likely to be killed by police than others. [24] Non-police crisis response programs can provide actual social services (EMTs, mental health clinicians, community mediators), rather than place vulnerable people in potentially lethal interactions with armed police. [25] While many such programs exist across the U.S., the CAHOOTS program in Eugene, Oregon stands out as longest running non-police responder program taking only 2% of the city’s police department’s annual budgets. They lasted for 15 years before being scaled down in the summer of 2025 due to budget cuts. [26] `;
let b9 = `For 4% of OPD’s overtime budget for one fiscal year ($1,360,000), we could create and maintain more green spaces for people to socialize and play. 

Public parks make our neighborhoods safer and stronger. When the historic East Falls section of Philadelphia was redeveloped in the 1990s to include multiple green spaces, residents were able to gather and build stronger social ties with each other, thereby increasing the neighborhood’s overall safety.  Studies have also shown that time spent in nature reduces aggression and relieves mental fatigue, which means that more urban parks can improve the mental health of entire communities. In Macon, Georgia, the community came together to redesign a public park, adding a new playground, grills, and more to suit their neighborhood’s specific needs. This collaboration led to local crime rates dropping by over 50 percent. [27]`;
let b10 = `For 6% of OPD’s overtime budget for one fiscal year ($2,040,000), we could have community events centered around getting to know our neighbors in joyful settings.

Arts and cultural events give communities their sense of identity and pride. Events such as night markets, cultural festivals, and community centers bring diverse groups together and foster a sense of mutual belonging and trust. [28]  San Francisco has recently invested $2 million into deploying a variety of artistic, musical, and cultural events in partnership with community groups in effort to revitalize its neighborhoods. [29] These positive opportunities to socialize, sing, and dance make communities more vibrant and resilient, and most importantly - more fun! 
`;
let b11 = `For 5% of OPD’s overtime budget for one fiscal year ($1,700,000), we could establish a community garden where people can grow fruits and vegetables.

Community gardens provide regular access to fresh healthy food while also improving social connectivity amongst neighbors, thereby reducing rates of violent crime and gun violence. Well maintained green spaces can reduce rates of property theft and violent crime, while neglected lots can actually increase crime. [30] San Francisco recently identified that funding their main community garden SF GROW Center would only cost about $2.5 million over 10 years. [31] `;
let b12 = `For 15% of OPD’s overtime budget for one fiscal year ($5,100,000), we could renovate the Oakland Public Library. 

Libraries are more than a hub for books - they make communities safer by providing a variety of accessible resources. Reading programs, as one example, help reduce economic inequality and improve literacy, two key factors in reducing recidivism in prison populations. [32] Libraries can even play a role in gun violence prevention by fostering prosocial behaviors. [33] Not only that, for every $1 invested into libraries, up to $10 are returned. [32] For the equivalence of 4.8 days of OPD overtime, Oakland Public Library (OPL) could fulfill their entire annual budget for digital resources such as ebooks, audiobooks, and movies. [34]`;

//constructor class for the images making up the canvas
class Pic{
  constructor (name,img1, img2,xpos, ypos, description){
    this.name = name;
    this.img1 = img1;
    this.img2 = img2;
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

//create the canvas and intialize the constructor objects 
async function setup() {
  canvas = createCanvas(900, 700);
  canvas.parent('animation-container');
  //loading the fonts
  font = await loadFont('img/Switzer-Medium.otf');
  font2 = await loadFont('img/Switzer-Regular.otf');
  pics = []; //array for all pic objects 
  selectedPic = null;
  //load all images
  p1 = await loadImage('/img/headlights1.png');
  console.log("image loaded");
  p2 = await loadImage('/img/budget1.png'); 
  console.log("image loaded");
  p3 = await loadImage('/img/headlights2.png');
  console.log("image loaded");
  p4 = await loadImage('/img/budget2.png'); 
  console.log("image loaded");
  pp5 = await loadImage('/img/headlights3.png');
  console.log("image loaded");
  p6 = await loadImage('/img/budget3.png');
  console.log("image loaded");
  p7 = await loadImage('/img/headlights4.png');
  console.log("image loaded");
  p8 = await loadImage('/img/budget4.png'); 
  console.log("image loaded");
  p9 = await loadImage('/img/headlights5.png');
  console.log("image loaded");
  p10 = await loadImage('/img/budget5.png'); 
  console.log("image loaded");
  p11 = await loadImage('/img/headlights6.png');
  console.log("image loaded");
  p12 = await loadImage('/img/budget6.png'); 
  console.log("image loaded");
  p13 = await loadImage('/img/headlights7.png');
  console.log("image loaded");
  p14 = await loadImage('/img/budget7.png'); 
  console.log("image loaded");
  p15 = await loadImage('/img/headlights8.png');  
  console.log("image loaded");
  p16 = await loadImage('/img/budget8.png'); 
  console.log("image loaded");
  p17 = await loadImage('/img/headlights9.png');
  console.log("image loaded");
  p18 = await loadImage('/img/budget9.png'); 
  console.log("image loaded");
  p19 = await loadImage('/img/headlights10.png');
  console.log("image loaded");
  p20 = await loadImage('/img/budget10.png'); 
  console.log("image loaded");
  p21 = await loadImage('/img/headlights11.png');
  console.log("image loaded");
  p22 = await loadImage('/img/budget11.png'); 
  console.log("image loaded");
  p23 = await loadImage('/img/headlights12.png');
  console.log("image loaded");
  p24 = await loadImage('/img/budget12.png');
  console.log("image loaded");
  h = await loadImage('/img/header.png');
  console.log("image loaded");
  
  //resize all images for the viz
  p1.resize(360,150);
  p2.resize(360,150);
  p3.resize(180,150);
  p4.resize(180,150);
  pp5.resize(60,90);
  p6.resize(60,90);
  p7.resize(240,450);
  p8.resize(240,450);
  p9.resize(180,300);
  p10.resize(180,300);
  p11.resize(180,300);
  p12.resize(180,300);
  p13.resize(180,360);
  p14.resize(180,360);
  p15.resize(120,90);
  p16.resize(120,90);
  p17.resize(120,180);
  p18.resize(120,180);
  p19.resize(120,270);
  p20.resize(120,270);
  p21.resize(180, 150);
  p22.resize(180, 150);
  p23.resize(180, 450);
  p24.resize(180, 450);
  h.resize(900,100);

  //create all of the pic objects and push into an array
  //1
  pics.push(new Pic("Affordable Housing", p1, p2, 540,550, b1));
  //2
  pics.push(new Pic("Public Arts Programs", p3, p4, 360, 550, b2));
  //3
  pics.push(new Pic("Free Lunch", pp5, p6, 480, 460, b3));
  //4
  pics.push(new Pic("Gun Violence Prevention", p7, p8, 660, 100, b4));
  //5
  pics.push(new Pic("Accessible Public Transit", p9, p10, 180,100, b5));
  //6
  pics.push(new Pic("People's Clinics", p11, p12, 180,400, b6));
  //7
  pics.push(new Pic("Small Businesses Support", p13, p14, 480, 100, b7));
  //8
  pics.push(new Pic("Crisis Response Program", p15, p16, 540, 460, b8));
  //9
  pics.push(new Pic("Green Spaces", p17, p18, 360,100, b9));
  //10
  pics.push(new Pic("Community Events", p19, p20, 360, 280, b10));
 //11 
  pics.push(new Pic("Community Gardens", p21, p22, 0, 100, b11));
  //12
  pics.push(new Pic("Library Renovation", p23, p24, 0,250, b12));
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
  // semi-transparent overlay
  fill(0, 0, 0, 180);
  rect(0, 0, 900, canvas_height);
  
  // Tooltip dimensions
  let tooltipWidth = 400;
  let tooltipHeight = 425;
  let tooltipX = (900 - tooltipWidth) / 2;
  let tooltipY = (700 - tooltipHeight) / 2;
  let padding = 20;
  
  // Tooltip background
  fill("rgba(179, 214, 255, 1)");
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
  image(h,0,0);
  console.log("header displayed");
  
  // Update and display all images
  for (let pic of pics) {
    pic.display();
    console.log("image displayed");
  }
  
  // If a pic is selected, display the tooltip
  if (selectedPic !== null) {
    displayTooltip(selectedPic);
  }
}
