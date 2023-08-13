var Cakes = 0;
var TotalCakes = 0;
var Cpc = 1;
var CakesPerSec = 0;
var ClickerCPS = 1;
var OvenCPS = 2;
var BankCPS = 5;
var CakeStoreCPS = 10;
var FactoryCPS = 15;
var FarmCPS = 20;
var ConsoleCPS = 40;
var WebsiteCPS = 50;
var AdCPS = 70;
var AppCPS = 100;
var CakegameCPS = 130;
var HackerCPS = 150;
var Clickers = 0;
var ClickerCost = 100;
var Ovens = 0;
var OvenCost = 250;
var Banks = 0;
var BankCost = 1000;
var CakeStores = 0;
var CakeStoreCost = 2500;
var Factorys = 0;
var FactoryCost = 5750;
var Farms = 0;
var FarmCost = 10000;
var Consoles = 0;
var ConsoleCost = 40000;
var Websites = 0;
var WebsiteCost = 50750;
var Ads = 0;
var AdCost = 100000;
var Apps = 0;
var AppCost = 200000;
var Cakegames = 0;
var CakegameCost = 500000;
var Hackers = 0;
var HackerCost = 1000000;
var Upgrades = 0;
var Ascends = 0;
var AscendCost = 100000000;

const imageUrls = [
  "images/1.png",
  "images/2.png",
  "images/3.png"
]
const imgElement = document.getElementById("Cake");

const randomIndex = Math.floor(Math.random() * imageUrls.length);

imgElement.src = imageUrls[randomIndex];

function CookieClicked(Amount) {
    Cakes += Amount;
    TotalCakes += Amount;
    UpdateCakes();
};

function buyClicker(items, cost) {
    if (Cakes >= window[cost]) {
        window[items]++;
        Cakes -= window[cost];
        window[cost] = Math.round(window[cost] * 1.8);
        swal({

            title: "Upgrade",
            text: "Bought",
            icon: "info",
            button: "Great!",
          });
          if(window[items] == Hackers) {
            ClickerCost *= 10;
            OvenCost *= 10;
            BankCost *= 10;
            CakeStoreCost *= 10;
            FactoryCost *= 10;
            FarmCost *= 10;
            ConsoleCost *= 10;
            WebsiteCost *= 10;
            AdCost *= 10;
            AppCost *= 10;
            CakegameCost *= 10;
            HackerCost *= 10;
           }} else {
            swal({

                title: "Upgrade",
                text: "Not Enough Cakes!",
                icon: "info",
                button: "Ok",
              });
          }
        }
       
      
       
      
    UpdateCakes();


var CookiegenTimer = setInterval(function() {
  Cakegen();   
  }, 1000);
  var Cakeclickertimer = setInterval(function() {
  UpdateCakes();
  }, 1); 

function UpdateCakes() {
  CakesPerSec = Clickers * ClickerCPS + Ovens * OvenCPS + Banks * BankCPS + CakeStores * CakeStoreCPS + Factorys * FactoryCPS + Farms * FarmCPS + Consoles * ConsoleCPS + Websites * WebsiteCPS + Ads * AdCPS + Apps * AppCPS + Cakegames * CakegameCPS + Hackers * HackerCPS;
  Upgrades = Clickers + Ovens + Banks + CakeStores + Factorys + Farms + Consoles + Websites + Ads + Apps + Cakegames + Hackers;
  document.getElementById("ClickerCost").innerHTML = ClickerCost + "$";
  document.getElementById("NumberUp").innerHTML = Upgrades;
  document.getElementById("CakePerSec").innerHTML = CakesPerSec + " Cakes Per Second";
  document.getElementById("CakeAmount").innerHTML = Math.round(Cakes) + " Cakes";
  document.getElementById("ClickerNum").innerHTML = Clickers;
  document.getElementById("OvenCost").innerHTML = OvenCost + "$";
  document.getElementById("OvenNum").innerHTML = Ovens; 
  document.getElementById("BankCost").innerHTML = BankCost + "$";
  document.getElementById("BankNum").innerHTML = Banks;
  document.getElementById("CakeStoreCost").innerHTML = CakeStoreCost + "$";
  document.getElementById("CakeStoreNum").innerHTML = CakeStores;
  document.getElementById("FactoryCost").innerHTML = FactoryCost + "$";
  document.getElementById("FactoryNum").innerHTML = Factorys;
  document.getElementById("FarmCost").innerHTML = FarmCost + "$";
  document.getElementById("FarmNum").innerHTML = Farms;
  document.getElementById("ConsoleCost").innerHTML = ConsoleCost + "$";
  document.getElementById("ConsoleNum").innerHTML = Consoles;
  document.getElementById("WebsiteCost").innerHTML = WebsiteCost + "$";
  document.getElementById("WebsiteNum").innerHTML = Websites;
  document.getElementById("AdCost").innerHTML = AdCost + "$";
  document.getElementById("AdNum").innerHTML = Ads;
  document.getElementById("AppCost").innerHTML = AppCost + "$";
  document.getElementById("AppNum").innerHTML = Apps;
  document.getElementById("CakegameCost").innerHTML =  CakegameCost + "$";
  document.getElementById("CakegameNum").innerHTML = Cakegames;
  document.getElementById("HackerCost").innerHTML = HackerCost + "$";
  document.getElementById("HackerNum").innerHTML = Hackers;
  document.getElementById("AscendNum").innerHTML = Ascends;
  document.getElementById("AscendCost").innerHTML = AscendCost + "$";
  document.title = Math.round(Cakes) + " Cakes - Cake Clicker";

}

function Cakegen() {
  Cakes += Clickers * ClickerCPS;
  Cakes += Ovens * OvenCPS;
  Cakes += Banks * BankCPS;
  Cakes += CakeStores * CakeStoreCPS;
  Cakes += Factorys * FactoryCPS;
  Cakes += Farms * FarmCPS;
  Cakes += Consoles * ConsoleCPS;
  Cakes += Websites * WebsiteCPS;
  Cakes += Ads * AdCPS;
  Cakes += Apps * AppCPS;
  Cakes += Cakegames * CakegameCPS;
  Cakes += Hackers * HackerCPS;
  UpdateCakes();
}

function SaveGame() {
  var GameSave = {
    Cakes: Cakes,
    ClickerCPS: ClickerCPS,
    OvenCPS: OvenCPS,
    BankCPS: BankCPS,
    CookieStoreCPS: CakeStoreCPS,
    FactoryCPS: FactoryCPS,
    FarmCPS: FarmCPS,
    ConsoleCPS: ConsoleCPS,
    WebsiteCPS: WebsiteCPS,
    AdCPS: AdCPS,
    AppCPS: AppCPS,
    CakegameCPS: CakegameCPS,
    HackerCPS: HackerCPS,
    Clickers: Clickers,
    Ovens: Ovens,
    Banks: Banks,
    CakeStores: CakeStores,
    Factorys: Factorys,
    Farms: Farms,
    Consoles: Consoles,
    Websites: Websites,
    Ads: Ads,
    Apps: Apps,
    Cakegames: Cakegames,
    Hackers: Hackers,
    ClickerCost: ClickerCost,
    OvenCost: OvenCost,
    BankCost: BankCost,
    CakeStoreCost: CakeStoreCost,
    FactoryCost: FactoryCost,
    FarmCost: FarmCost,
    ConsoleCost: ConsoleCost,
    WebsiteCost: WebsiteCost,
    AdCost: AdCost,
    AppCost: AppCost,
    CakegameCost: CakegameCost,
    HackerCost: HackerCost,
    Ascends: Ascends,
    AscendCost: AscendCost,
    Cpc: Cpc,
    TotalCakes: TotalCakes
  };
  localStorage.setItem("GameSave", JSON.stringify(GameSave));
}

var Savegame = setInterval(function() {
  SaveGame();
 }, 10000);
 

function LoadVar(Name, SavedGame) {
  if (typeof SavedGame[Name] !== "undefined") {
    window[Name] = SavedGame[Name];
  }
}

function LoadGame() {
    var SavedGame = JSON.parse(localStorage.getItem("GameSave"));
    LoadVar("Cakes", SavedGame);
    LoadVar("ClickerCPS", SavedGame);
    LoadVar("OvenCPS", SavedGame);
    LoadVar("BankCPS", SavedGame);
    LoadVar("CakeStoreCPS", SavedGame);
    LoadVar("FactoryCPS", SavedGame);
    LoadVar("FarmCPS", SavedGame);
    LoadVar("ConsoleCPS", SavedGame);
    LoadVar("WebsiteCPS", SavedGame);
    LoadVar("AdCPS", SavedGame);
    LoadVar("AppCPS", SavedGame);
    LoadVar("CakegameCPS", SavedGame);
    LoadVar("HackerCPS", SavedGame);
    LoadVar("Clickers", SavedGame);
    LoadVar("Ovens", SavedGame);
    LoadVar("Banks", SavedGame);
    LoadVar("CakeStores", SavedGame);
    LoadVar("Factorys", SavedGame);
    LoadVar("Farms", SavedGame);
    LoadVar("Consoles", SavedGame);
    LoadVar("Websites", SavedGame);
    LoadVar("Ads", SavedGame);
    LoadVar("Apps", SavedGame);
    LoadVar("Cakegames", SavedGame);
    LoadVar("Hackers", SavedGame);
    LoadVar("ClickerCost", SavedGame);
    LoadVar("OvenCost", SavedGame);
    LoadVar("BankCost", SavedGame);
    LoadVar("CakeStoreCost", SavedGame);
    LoadVar("FactoryCost", SavedGame);
    LoadVar("FarmCost", SavedGame);
    LoadVar("ConsoleCost", SavedGame);
    LoadVar("WebsiteCost", SavedGame);
    LoadVar("AdCost", SavedGame);
    LoadVar("AppCost", SavedGame);
    LoadVar("CakegameCost", SavedGame);
    LoadVar("HackerCost", SavedGame);
    LoadVar("Ascends", SavedGame);
    LoadVar("AscendCost", SavedGame);
    LoadVar("Cpc", SavedGame);
    LoadVar("TotalCakes", SavedGame);
  }



window.onload = function() {
  LoadGame();
}
function showLoadingScreen() {
  document.getElementById("loading-screen").style.display = "flex";
}

function hideLoadingScreen() {
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("game-content").style.display = "block";
}

window.addEventListener("load", function() {
  showLoadingScreen();
  setTimeout(function() {
    UpdateCakes();

     hideLoadingScreen();
  },2000);
});
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey) {
    if (event.key === 's') {
      event.preventDefault();
      SaveGame();
      swal({

          title: "Game",
          text: "Saved Game Manually.",
          icon: "info",
          button: "I know",
        });
    } else if (event.key === 'r') {
      event.preventDefault();
      ResetGame();
    }
  }
});
function ResetGame() {
  const confirmed = confirm("Are you sure you want to reset the game?");
  if(confirmed) {
  Cakes = 0;
  CakesPerSec = 0;
  ClickerCPS = 1;
  OvenCPS = 2;
  BankCPS = 5;
  CakeStoreCPS = 10;
  FactoryCPS = 15;
  FarmCPS = 20;
  ConsoleCPS = 40;
  WebsiteCPS = 50;
  AdCPS = 70;
  AppCPS = 100;
  CakegameCPS = 130;
  HackerCPS = 150;
  Clickers = 0;
  ClickerCost = 50;
  Ovens = 0;
  OvenCost = 100;
  Banks = 0;
  BankCost = 500;
  CakeStores = 0;
  CakeStoreCost = 1000;
  Factorys = 0;
  FactoryCost = 1750;
  Farms = 0;
  FarmCost = 2000;
  Consoles = 0;
  ConsoleCost = 4000;
  Websites = 0;
  WebsiteCost = 5750;
  Ads = 0;
  AdCost = 10000;
  Apps = 0;
  AppCost = 20000;
  Cakegames = 0;
  CakegameCost = 50000;
  Hackers = 0;
  HackerCost = 100000;
  Upgrades = 0;
  Ascends = 0;

localStorage.clear();
location.reload();
  }
}
function ascend() {
  if (Cakes >= AscendCost) {
  const confirmAscend = confirm("Do you want to ascend?");

  if (confirmAscend) {
    Cakes = 0;
  CakesPerSec = 0;
  Clickers = 0;
  ClickerCost = 50;
  Ovens = 0;
  OvenCost = 100;
  Banks = 0;
  BankCost = 500;
  CakeStores = 0;
  CakeStoreCost = 1000;
  Factorys = 0;
  FactoryCost = 1750;
  Farms = 0;
  FarmCost = 2000;
  Consoles = 0;
  ConsoleCost = 4000;
  Websites = 0;
  WebsiteCost = 5750;
  Ads = 0;
  AdCost = 10000;
  Apps = 0;
  AppCost = 20000;
  Cakegames = 0;
  CakegameCost = 50000;
  Hackers = 0;
  HackerCost = 100000;
  Upgrades = 0;
    ClickerCPS *= 1.5;
    OvenCPS *= 1.5;
    BankCPS *= 1.5;
    CakeStoreCPS *= 1.5;
    FactoryCPS *= 1.5;
    FarmCPS *= 1.5;
    ConsoleCPS *= 1.5;
    WebsiteCPS *= 1.5;
    AdCPS *= 1.5;
    AppCPS *= 1.5;
    CakegameCPS *= 1.5;
    HackerCPS *= 1.5;
    Ascends++;
    Cpc++;
    AscendCost *= 2;
    SaveGame();
    

    console.log("Game reset and CPS variables increased!");
  } else {
    console.log("Ascend cancelled.");
  }
 } else {
  swal({

      title: "Game",
      text: "Not Enough Cakes!",
      icon: "info",
      button: "Ahh!",
    });
 }
}