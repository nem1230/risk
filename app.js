// $('img[usemap]').maphilight()

var game = {
  player1: {
    $player1Turn_Armies: $('#play1armies'),
    army_count: 6,
    $player1_score: $('#playhead1'),
    $player1_scoring: 0
  },

  player2: {
    $player2Turn_Armies: $('#play2armies'),
    army_count: 6,
    $player2_score: $('#playhead2'),
    $player2_scoring: 0
  },
  switchTurns_Arr: [],
  randomNum: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  $roll: $('#butt'),
  $dice: $('#dice'),
  max: function() {
    game.compareRoll.push(Number(game.attackerRoll.splice(game.attackerRoll.indexOf(Math.max(...game.attackerRoll)), 1).join())) //1. finds max of the array 2. joins and turns it into a string 3. turns it back into a number 4.pushes it to compareRoll array
    console.log('max num', game.compareRoll)
  },
  $player1_score: $('#playhead1'),
  $player2_score: $('#playhead2'),
  attackerRoll: [],
  compareRoll: [],
  $continents: {
    $australia: $('.australia'),
    $asia: $('.asia'),
    $europe: $('.europe'),
    $africa: $('.africa'),
    $southAmerica: $('.southAmerica'),
    $northAmerica: $('.northAmerica')
  },
  $territories: $('.terrriy_dis'),
  $territories_Obj_div: {
    $$indonesia: $('#indonesia_icon'),
    $$newGuinea: $('#newGuinea_icon'),
    $$westernAus: $('#westernAus_icon'),
    $$easternAus: $('#easternAus_icon'),
    $$siam: $('#siam_icon'),
    $$india: $('#india_icon'),
    $$china: $('#china_icon'),
    $$middleEast: $('#middleEast_icon'),
    $$afghanistan: $('#afghanistan_icon'),
    $$ural: $('#ural_icon'),
    $$siberia: $('#siberia_icon'),
    $$yakutsk: $('#yakutsk_icon'),
    $$irkutsk: $('#irkutsk_icon'),
    $$mongolia: $('#mongolia_icon'),
    $$japan: $('#japan_icon'),
    $$kamchatka: $('#kamchatka_icon'),
    $$ukraine: $('#ukraine_icon'),
    $$scandanavia: $('#scandanavia_icon'),
    $$iceland: $('#iceland_icon'),
    $$greatBritain: $('#greatBritain_icon'),
    $$northernEurope: $('#northernEurope_icon'),
    $$westernEurope: $('#westernEurope_icon'),
    $$southernEurope: $('#southernEurope_icon'),
    $$northAfrica: $('#northAfrica_icon'),
    $$egypt: $('#egypt_icon'),
    $$eastAfrica: $('#eastAfrica_icon'),
    $$congo: $('#congo_icon'),
    $$southAfrica: $('#southAfrica_icon'),
    $$madagascar: $('#madagascar_icon'),
    $$argentina: $('#argentina_icon'),
    $$peru: $('#peru_icon'),
    $$brazil: $('#brazil_icon'),
    $$venezuela: $('#venezuela_icon'),
    $$centralAmerica: $('#centralAmerica_icon'),
    $$easternUnitedStates: $('#easternUnitedStates_icon'),
    $$westernUnitedStates: $("#westernUnitedStates_icon"),
    $$alberta: $("#alberta_icon"),
    $$ontario: $('#ontario_icon'),
    $$quebec: $('#quebec_icon'),
    $$greenland: $('#greenland_icon'),
    $$northwestTerritory: $('#northwestTerritory_icon'),
    $$alaska: $('#alaska_icon'),
  },
  $displays: $('.display'),
  $start_game: $('#start_game'),
  $territories_Arr: [],
  $player1Territories: [],
  $player2Territories: [],
  $player1Turn_Armies: $('#play1armies'),
  $player2Turn_Armies: $('#play2armies'),
  attackObj: {
    attacker: "none",
    defender: "none"
  },
  $die1: 0,
  $die2: 0,
  $die3: 0,
  $die4: 0,
  $die5: 0,
  switchTurn: true
}
var currentPlayer = game.player1
function switchTurns() {
  if (currentPlayer == game.player1) {
    currentPlayer = game.player2
  } else {
    currentPlayer = game.player1
  }
}

function shuffle(array) {
  var m = array.length,
    t, i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
}


function start_num() {
  // $('.display').append(territory_num);
  $('div[data-country]').find('.count').html(1)

  $('.countries').on('click', function() {
    //territory_num ++;
    // console.log($(this));
    // console.log($(this)[0].dataset.territory);
    // var country = $(this)[0].dataset.territory
    var country = $(this).data('territory');
    console.log('data', $(this).data('territory'))
    var territory_num = $('div[data-country=' + country + ']').attr('data-country-num')
    territory_num = Number(territory_num) + 1
    $('div[data-country=' + country + ']').attr('data-country-num', territory_num)
    $('div[data-country=' + country + ']').find('.count').html(territory_num)

    // if the div is included in the player 1 territories array then  perform playercount -- and display it in the html
    // $('.display').append(territory_num);

  })
}


game.$start_game.on('click', function() {
  for (territory in game.$territories_Obj_div) {
    game.$territories_Arr.push(game.$territories_Obj_div[territory]);
    console.log('territories array', game.$territories_Arr);
  }
  console.log('array exists')
  shuffle(game.$territories_Arr);
  console.log('array shuffled');
  game.$player1Territories = game.$territories_Arr.slice(0, 21);
  console.log('player1', game.$player1Territories)
  game.$player2Territories = game.$territories_Arr.slice(21, 43);
  console.log('player2', game.$player2Territories);

  for (var i = 0; i < game.$player1Territories.length; i++) {
    game.$player1Territories[i].css('color', 'white');
    game.$player1Territories[i].attr('data-player', 1)
  }
  for (var i = 0; i < game.$player2Territories.length; i++) {
    game.$player2Territories[i].css('color', 'orange');
    game.$player2Territories[i].attr('data-player', 2)

  }
  // game.$player1Turn_Armies.append("<strong> 50</strong>");
  // game.$player2Turn_Armies.append("<strong> 50</strong>");
  // var count= 50
  //  game.$player1Turn_Armies.html('Player 1 Armies: ' + count);
  //  game.$player2Turn_Armies.html("Player 2 Armies: " + count);
  country_armies();
  game.$start_game.hide();
  start_num();
})


// var   player1count= 30;
// var   player2count= 30;
function country_armies() {
  //  player1count= 30;
  //  player2count= 30;
  game.player1.$player1Turn_Armies.html('Player 1 Armies: ' + game.player1.army_count);
  game.player2.$player2Turn_Armies.html('Player 2 Armies: ' + game.player2.army_count);

  function decreaseArmies() {
    currentPlayer.army_count--;
    if (currentPlayer == game.player1) {
      game.player1.$player1Turn_Armies.html('Player 1 Armies: ' + game.player1.army_count);
    } else {
      game.player2.$player2Turn_Armies.html('Player 2 Armies: ' + game.player2.army_count);
    }
    if (game.player1.army_count == 0 && game.player2.army_count == 0) {
      $('.countries').off('click');

      gamePlay1();
    } else {
      switchTurns();
    }
  }
  $('.countries').on('click', decreaseArmies);
}


// console.log('game.$territories_Obj_div',game.$territories_Obj_div)


function $dieReset() {
   game.$die1 = game.randomNum(1,6)
   game.$die2 = game.randomNum(1,6)
   game.$die3 = game.randomNum(1,6)
   game.$die4 = game.randomNum(1,6)
   game.$die5 = game.randomNum(1,6)
}


game.$roll.on('click', rollHandler)

function rollHandler() {
  $dieReset();
  game.$dice.html("Attacker: " + game.$die1 + ",  " + game.$die2 + ",  " + game.$die3 + " " + " Defender: " + game.$die4 + ", " + game.$die5);
  game.attackerRoll.push(game.$die1, game.$die2, game.$die3);
  if (game.$die4 > game.$die5) {
    game.compareRoll.push(game.$die4, game.$die5)
  } else {
    game.compareRoll.push(game.$die5, game.$die4)
  }
  console.log(game.attackerRoll);
  game.max();
  game.max();

  if (game.compareRoll[0] >= game.compareRoll[2] && game.compareRoll[1] >= game.compareRoll[3]) {
    console.log('-2 to the attacker')
    alert('Defense Wins!! Subtracting 2 armies from the attacker. If you have more than 1 army then Roll again!! If not, choose another territory')
    updateCountries(2,0);
    game.compareRoll= [],
    $dieReset();

  } else if (game.compareRoll[0] >= game.compareRoll[2] && game.compareRoll[1] < game.compareRoll[3]) {
    console.log('-1 to the attacker and -1 to the defender')
    alert('It is a Tie!! -1 to the attacker and -1 to the defender. If you have more than 1 army then Roll again!! If not, choose another territory')
    updateCountries(1,1);
    game.compareRoll= [],
    $dieReset();


  } else if (game.compareRoll[2] > game.compareRoll[0] && game.compareRoll[3] > game.compareRoll[1]) {
    console.log('-2 to the defender')
    alert('Attack Wins!! Subtracting 2 armies from the defender. If you have more than 1 army then Roll again!! If not, choose another territory')
    updateCountries(0,2);
    game.compareRoll= [],
    $dieReset();


  } else {
    console.log('-1 to the defender and 1 to attacker')
    alert('It is a Tie!! -1 to the attacker and -1 to the defender. If you have more than 1 army then Roll again!! If not, choose another territory')
    updateCountries(1,1);
    game.compareRoll= [],
    $dieReset();

  }
}

function gamePlay1(player) {
  if (game.player1.army_count == 0 && game.player2.army_count == 0) {
    alert('It is Player 1s turn: Please select a white territory to attack from that contains at least 2 armies. Then select an orange territory to attack. It is your turn until you no longer have any territories that contain 2 or more armies');
  }
  $('.countries').on('click', function() {
    var country = $(this).data('territory');
    if (game.attackObj.attacker == "none") {
      game.attackObj.attacker = country
      alert('you are attacking from ' + game.attackObj.attacker)
    } else if (game.attackObj.defender == "none") {
      game.attackObj.defender = country
      alert('you are attacking ' + game.attackObj.defender + " .........Roll the dice!!!")
    } else {
      game.attackObj = {
        attacker: "none",
        defender: "none"
      }
      console.log(game.attackObj)
    }
  })
}

function updateCountries(reduceAttacker, reduceDefender){
  var attacker_num = $('div[data-country=' + game.attackObj.attacker + ']').attr('data-country-num')
  attacker_num = Number(attacker_num) - reduceAttacker
  var defender_num = $('div[data-country=' + game.attackObj.defender + ']').attr('data-country-num')
  defender_num = Number(defender_num) - reduceDefender
  $('div[data-country=' + game.attackObj.attacker + ']').attr('data-country-num', attacker_num)
  $('div[data-country=' + game.attackObj.attacker + ']').find('.count').html(attacker_num)
  $('div[data-country=' + game.attackObj.defender + ']').attr('data-country-num', defender_num)
  $('div[data-country=' + game.attackObj.defender + ']').find('.count').html(defender_num)
  // var reset_numAttack =  function (){
  //   if (attacker_num == 0 || attacker_num == -1)  {
  //   attacker_num = 1;
  //   }
  //   else {
  //   console.log('score')
  //   }
  // }
  // var reset_numDefense = function () {
  //   if (defender_num == 0 || defender_num == -1) {
  //   defender_num = 1
  //   }
  //   else {
  //   console.log('score')
  //   }
  // }
  if ($('div[data-country=' + game.attackObj.attacker + ']').css('color') == ("rgb(255, 255, 255)") && (attacker_num == 0 || attacker_num == -1)){

    $('div[data-country=' + game.attackObj.attacker + ']').css('color', 'orange');
    // reset_numAttack();
    console.log('reset_numAttack()');
    console.log('change attacker from white to orange')
    game.player2.$player2_scoring ++;
    game.player2.$player2_score.html('Player 2 Territories ' + game.player2.$player2_scoring);

  }

  else if ($('div[data-country=' + game.attackObj.attacker + ']').css('color') == ("rgb(255, 165, 0)") && (attacker_num == 0 || attacker_num == -1)){
   $('div[data-country=' + game.attackObj.attacker + ']').css('color', 'white');
    //  reset_numAttack()
     console.log('reset_numAttack()');
     console.log('change attacker from orange to white')
     game.player1.$player1_scoring ++;
     game.$player1_score.html('Player 1 Territories: ' + game.player1.$player1_scoring)

  }
  else if ($('div[data-country=' + game.attackObj.defender + ']').css('color') == ("rgb(255, 255, 255)") && (defender_num == 0 || defender_num == -1)) {
   $('div[data-country=' + game.attackObj.defender + ']').css('color', 'orange');
    //  reset_numDefense()
     console.log('reset_numDefense');
     console.log(game.attackObj)
     console.log('change defender from white to orange')
     game.player2.$player2_scoring ++;
     game.player2.$player2_score.html('Player 2 Territories ' + game.player2.$player2_scoring);

 }
  else if ($('div[data-country=' + game.attackObj.defender + ']').css('color') == ("rgb(255, 165, 0)") && (defender_num == 0 || defender_num == -1)) {
     $('div[data-country=' + game.attackObj.defender + ']').css('color', 'white');
    //  reset_numDefense()
    console.log('reset_numDefense');
     console.log('change defender from orange to white')
     game.player1.$player1_scoring ++;
     game.$player1_score.html('Player 1 Territories: ' + game.player1.$player1_scoring)

  }
  else {

  }
switchTurns2();
getWinner();
}

function switchTurns2() {

  if (game.switchTurn == false) {
    return false;
  }
 var switchable = true;


  $('.game_text').each(function(i, el){
    console.log("testing each loop")

     if (((Number($(el).attr('data-country-num'))) > 1) && ($(el).css('color') == ("rgb(255, 255, 255)"))) {
       console.log('checking white');
       switchable = false;
       return false;
     }

   })
  if (switchable){
    console.log('player 2 turn');
    alert('Its player 2s Turn Now');
    game.switchTurn = false;

  }
}

function getWinner() {

  var get = true;

  $('.game_text').each(function(i, el){
    console.log("testing each loop")

     if (((Number($(el).attr('data-country-num'))) > 1) && ($(el).css('color') == ("rgb(255, 165, 0)"))) {
       console.log('checking white');
       get = false;
       return false;
     }

   })
  if (get){
    console.log('game over');
    if (game.player1.$player1_scoring > game.player2.$player2_scoring) {
    alert('Game Over! Player 1 has gained ' + game.player1.$player1_scoring + ' territories to Player 2s ' + game.player2.$player2_scoring)
  }
    else {
    alert('Game Over! Player 2 has gained ' + game.player2.$player2_scoring + ' territories to Player 1s ' + game.player1.$player1_scoring);
  }
}
}
