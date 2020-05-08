const boyHero=["Vindicate","Ironside","Torpedo","Bionic","Dynamo","Mr. Miraculous","Tornado","Metal Man","Jawbreaker","Barrage","Amplify","Bonfire","Monsoon","Urchin","Firefly","Rubble","Blaze","Hurricane","Slingshot","Storm Surge","Impenetrable","Quicksand","Night Watch","Mastermind","Captain Freedom","Cannonade","Bulletproof","Turbine","Kraken","Granite","Glazier","MechaMan","Fortitude","Cast Iron","Fireball","Polar Bear","Turbulence","Mako","Captain Victory","Flying Falcon","Blackback","Tradewind","Manta Ray","The Rooster","Megalodon","Steamroller","Apex","Leviathan","Onyx","Shadowman","Exodus","Eagle Eye","Laser Sight","Titan","Vigilance","Volcanic Ash","Jackhammer","Bullseye","Tarantula","Shockwave","Barracuda","Night Howler","Chromium"]
const girlHero=["Ember","Twilight","Tsunami","Miss Mantis","Wildfire","Radiance","Wondrous","Starlight","Black Magnolia","Ivory Wing","Coral","Waterfall","Tempest","Lotus","Velvet","Scorch","Luminosity","Windstorm","Solar Flare","Atomic Blonde","Nebula","Hollyshock","Foxfire","Tapestry","Sapphire","Silver Shadow","Horizon","Black Mamba","Poppy","Orchid","Amethyst","Belladonna","Prism","Cashmere","Porcelain","Quartz","Echo","Iridescence","Iris","Solstice","Dragonfly","Jade","Cascade","Solar Eclipse","Lilac","Opaque","Mystify","Vague","Shooting Star","Piranha","Tigress","Bumblebee","Stiletto","Dark Pearl","Vertigo","Highlight","Licorice","Gemstone","Venus","Alexandrite","Tanzanite","Topaz","Blackberry"]
const marvelHero=[,"Spider-Man","Captain America","Thor","Iron Man","The Hulk","Doctor Strange","Daredevil","Wolverine","Black Panther","Storm","Nick Fury","Professor X","Luke Cage","Silver Surfer","Thing","Rogue","Black Widow","Elektra","Ant-Man","Jessica Jones","Wasp","Deadpool","Star Lord","Punisher","Cyclops","Mr. Fantastic","Gambit","Iceman","Human Torch","Nightcrawler","Colossus","Bucky Barnes","Jean Grey","Emma Frost","Black Bolt","She-Hulk","Invisible Woman","Hawkeye","Kitty Pryde","Beast","Sentry","Namor","Morph","Mimic","Nova","Rocket Raccoon","Groot","Gamora"]
const text= document.querySelector("h2");

function randomBoy(){
var random= Math.floor(Math.random()*63);
console.log(boyHero[random]);
text.textContent=boyHero[random];
text.style.color="lightblue";
}

function randomGirl(){
    var random= Math.floor(Math.random()*63);
    console.log(girlHero[random]);
    text.textContent=girlHero[random];
    text.style.color="pink";
   }
   
   
   function randomMarvel(){
    var random= Math.floor(Math.random()*48);
    console.log(marvelHero[random]);
    text.textContent=marvelHero[random];
    text.style.color="#ec971f";
   }

   function copyFuncion(){
     /* Get the text field */
  var copyText = document.getElementById("randomText");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
