console.log($('img[usemap]'));
$('img[usemap]').maphilight()


  console.log('working');




  var game = {
    player1: 'black',
    player2: 'white',
    randomNum: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    $roll: $('#butt'),
    $dice: $('#dice'),
    max: function() {
    compareRoll.push(Number(attackerRoll.splice(attackerRoll.indexOf(Math.max(...attackerRoll)),1).join()))//1. finds max of the array 2. joins and turns it into a string 3. turns it back into a number 4.pushes it to compareRoll array
    console.log('max num',compareRoll)
    },

  }

attackerRoll = [];
compareRoll = [];

  var $die1 = game.randomNum(1, 6);
  var $die2 = game.randomNum(1, 6);
  var $die3 = game.randomNum(1, 6);
  var $die4 = game.randomNum(1, 6);
  var $die5 = game.randomNum(1, 6);

  game.$roll.on('click', function(){
  game.$dice.html("Attacker: " + $die1 + ",  " + $die2 + ",  " + $die3 + " " + " Defender: " + $die4 + ", " + $die5);
  attackerRoll.push($die1,$die2,$die3);
  compareRoll.push($die4,$die5)
  console.log(attackerRoll);
  game.max();
  game.max();
  if (compareRoll[0] >= compareRoll[2] && compareRoll[1] >= compareRoll[3]) {
      console.log('-2 to the attacker');
  }
  else if (compareRoll[0] >= compareRoll[2] && compareRoll[1] < compareRoll[3]) {
    console.log('-1 to the attacker and -1 to the defender')
  }
  else if (compareRoll[2] > compareRoll[0] && compareRoll[3] < compareRoll[1]) {
    console.log('-1 to the defender and -1 to the attacker')
  }
  else {
    console.log('-2 to the defender')
  }
  })

  var $continents = {
    $australia: $('.australia'),
    $asia: $('.asia'),
    $europe: $('.europe'),
    $africa: $('.africa'),
    $southAmerica: $('.southAmerica'),
    $northAmerica: $('.northAmerica')
  }


  var territories = {
    $indonesia: $('.indonesia'),
    newGuinea: $('.newGuinea'),
    westernAus: $('.westernAus'),
    easternAus: $('.easternAus'),
    siam: $('.siam'),
    india: $('.india'),
    china: $('.china'),
    middleEast: $('.middleEast'),
    afghanistan: $('.afghanistan'),
    ural: $('.ural'),
    siberia: $('.siberia'),
    yakutsk: $('.yakutsk'),
    irkutsk: $('.irkutsk'),
    mongolia: $('.mongolia'),
    japan: $('.japan'),
    kamchatka: $('.kamchatka'),
    ukraine: $('.ukraine'),
    scandanavia: $('.scandanavia'),
    iceland: $('.iceland'),
    greatBritain: $('.greatBritain'),
    northernEurope: $('.northernEurope'),
    westernEurope: $('.westernEurope'),
    southernEurope: $('.southernEurope'),
    northAfrica: $('.northAfrica'),
    egypt: $('.egypt'),
    eastAfrica: $('.eastAfrica'),
    congo: $('.congo'),
    southAfrica: $('.southAfrica'),
    madagascar: $('.madagascar'),
    argentina: $('.argentina'),
    peru: $('.peru'),
    brazil: $('.brazil'),
    venezuela: $('.venezuela'),
    centralAmerica: $('.centralAmerica'),
    easternUnitedStates: $('.easternUnitedStates'),
    westernUnitedStates: $('.westernUnitedStates'),
    alberta: $('.alberta'),
    ontario: $('.ontario'),
    quebec: $('.quebec'),
    greenland: $('.greenland'),
    northwestTerritory: $('.northwestTerritory'),
    alaska: $('.alaska')
  }

  function switchTurns() {
    currentPlayer = game.player1;
    if (currentPlayer = gam.player){
      currentPlayer = game.player2;
    }
  }
