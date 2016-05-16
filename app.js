console.log($('img[usemap]'));
$('img[usemap]').maphilight()


  console.log('working');




  var game = {
    player1: 'black',
    player2: 'white',
  }

attackerRoll = [];
defenderRoll = [];
compareRoll = [];

//compareRoll.push(Number(arr.splice(arr.indexOf(Math.max(...arr),1)).join())) //1. finds max of the array 2. joins and turns it into a string 3. turns it back into a number 4.pushes it to compareRoll array

var max = function() {
  //  for (var i = 0; i < attackerRoll.length; i++) {
  //    if (attackerRoll[0] >= attackerRoll[1] && attackerRoll[0] > attackerRoll[2] || attackerRoll[0] >= attackerRoll[2] && attackerRoll[0] > attackerRoll[1]){
  //      compareRoll.push($die1);
  //    }
  //    else if (attackerRoll[1] >= attackerRoll[0] && attackerRoll[1]>attackerRoll[2] || attackerRoll[1] >= attackerRoll[2] && attackerRoll[1] > attackerRoll[0]){
  //      compareRoll.push($die2);
  //    }
  //    else {
  //      compareRoll.push($die3);
  //    }
  //  }
compareRoll.push(Number(attackerRoll.splice(attackerRoll.indexOf(Math.max(...attackerRoll)),1).join()))//1. finds max of the array 2. joins and turns it into a string 3. turns it back into a number 4.pushes it to compareRoll array
console.log('max num',compareRoll)
}



  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  var $die1 = randomNum(1, 6);
  var $die2 = randomNum(1, 6);
  var $die3 = randomNum(1, 6);
  var $die4 = randomNum(1, 6);
  var $die5 = randomNum(1, 6);

  var $butt = $('#butt')

  var $dice = $('#dice')

  $butt.on('click', function(){
  $dice.html("Attacker: " + $die1 + ",  " + $die2 + ",  " + $die3 + " " + " Defender: " + $die4 + ", " + $die5);
  attackerRoll.push($die1,$die2,$die3);
  defenderRoll.push($die4,$die5)
  console.log(attackerRoll);
  console.log(defenderRoll);
  max();
  max();
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
