console.log($('img[usemap]'));
// $('img[usemap]').maphilight()


  console.log('working');



  var game = {
    this: console.log('this', this),

    player1: {
      $player1Turn_Armies: $('#play1armies'),
      army_count: 5
    },

    player2: {
      $player2Turn_Armies: $('#play2armies'),
      army_count: 5
    },
    randomNum: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    $roll: $('#butt'),
    $dice: $('#dice'),
    max: function() {
    game.compareRoll.push(Number(game.attackerRoll.splice(game.attackerRoll.indexOf(Math.max(...game.attackerRoll)),1).join()))//1. finds max of the array 2. joins and turns it into a string 3. turns it back into a number 4.pushes it to compareRoll array
    console.log('max num', game.compareRoll)
    },
    attackerRoll: [],
    compareRoll: [],
    $continents: {  $australia: $('.australia'),
      $asia: $('.asia'),
      $europe: $('.europe'),
      $africa: $('.africa'),
      $southAmerica: $('.southAmerica'),
      $northAmerica: $('.northAmerica')
    },
    $territories: $('.terrriy_dis'), //fisher yates
    // $territories_Obj_imageMap: { $indonesia: $('.indonesia').first(),
    //     $newGuinea: $('.newGuinea').first(),
    //     $westernAus: $('.westernAus').first(),
    //     $easternAus: $('.easternAus').first(),
    //     $siam: $('.siam').first(),
    //     $india: $('.india').first(),
    //     $china: $('.china').first(),
    //     $middleEast: $('.middleEast').first(),
    //     $afghanistan: $('.afghanistan').first(),
    //     $ural: $('.ural').first(),
    //     $siberia: $('.siberia').first(),
    //     $yakutsk: $('.yakutsk').first(),
    //     $irkutsk: $('.irkutsk').first(),
    //     $mongolia: $('.mongolia').first(),
    //     $japan: $('.japan').first(),
    //     $kamchatka: $('.kamchatka').first(),
    //     $ukraine: $('.ukraine').first(),
    //     $scandanavia: $('.scandanavia').first(),
    //     $iceland: $('.iceland').first(),
    //     $greatBritain: $('.greatBritain').first(),
    //     $northernEurope: $('.northernEurope').first(),
    //     $westernEurope: $('.westernEurope').first(),
    //     $southernEurope: $('.southernEurope').first(),
    //     $northAfrica: $('.northAfrica').first(),
    //     $egypt: $('.egypt').first(),
    //     $eastAfrica: $('.eastAfrica').first(),
    //     $congo: $('.congo').first(),
    //     $southAfrica: $('.southAfrica').first(),
    //     $madagascar: $('.madagascar').first(),
    //     $argentina: $('.argentina').first(),
    //     $peru: $('.peru').first(),
    //     $brazil: $('.brazil').first(),
    //     $venezuela: $('.venezuela').first(),
    //     $centralAmerica: $('.centralAmerica').first(),
    //     $easternUnitedStates: $('.easternUnitedStates').first(),
    //     $westernUnitedStates: $('.westernUnitedStates').first(),
    //     $alberta: $('.alberta').first(),
    //     $ontario: $('.ontario').first(),
    //     $quebec: $('.quebec').first(),
    //     $greenland: $('.greenland').first(),
    //     $northwestTerritory: $('.northwestTerritory').first(),
    //     $alaska: $('.alaska').first()
    //     },
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
      // $territories_Arr: [this.territories_Obj.$indonesia,$newGuinea,$westernAus,$easternAus,
      //   $siam,$india,$china,$middleEast,$afghanistan,$ural,$siberia,$yakutsk,$irkutsk,$mongolia,$japan,$kamchatka,
      //   $ukraine,$scandanavia,$iceland,$greatBritain,$northernEurope,$westernEurope,$southernEurope,
      //   $northAfrica,$egypt,$eastAfrica,$madagascar,$argentina,$peru,$brazil,$venezuela,
      //   $centralAmerica,$easternUnitedStates,$westernUnitedStates,$alberta,$ontario,$quebec,$greenland,$northwestTerritory,$alaska],
      $displays: $('.display'),
      $start_game: $('#start_game'),
      $territories_Arr: [],
      $player1Territories: [],
      $player2Territories: [],
      $player1Turn_Armies: $('#play1armies'),
      $player2Turn_Armies: $('#play2armies'),
      attackObj: {attacker: "none",defender: "none"}
  }
  var currentPlayer = game.player1
  function switchTurns() {
    if(currentPlayer== game.player1){
      currentPlayer = game.player2
    }
    else {
      currentPlayer = game.player1
    }
  }

  function shuffle(array) {
   var m = array.length, t, i;

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

$('.countries').on('click', function(){
  //territory_num ++;
  // console.log($(this));
  // console.log($(this)[0].dataset.territory);
  // var country = $(this)[0].dataset.territory
  var country = $(this).data('territory');
  console.log('data', $(this).data('territory'))
  var territory_num = $('div[data-country=' + country +']').attr('data-country-num')
  territory_num = Number(territory_num) + 1
  $('div[data-country=' + country +']').attr('data-country-num', territory_num)
  $('div[data-country=' + country +']').find('.count').html(territory_num)

       // if the div is included in the player 1 territories array then  perform playercount -- and display it in the html
  // $('.display').append(territory_num);

})
  }


  game.$start_game.on('click',function(){
    for (territory in game.$territories_Obj_div){
      game.$territories_Arr.push(game.$territories_Obj_div[territory]);
      console.log('territories array', game.$territories_Arr);
    }
    console.log('array exists')
    shuffle(game.$territories_Arr);
    console.log('array shuffled');
    game.$player1Territories= game.$territories_Arr.slice(0,21);
    console.log('player1', game.$player1Territories)
    game.$player2Territories= game.$territories_Arr.slice(21,43);
    console.log('player2', game.$player2Territories);

    for (var i = 0; i < game.$player1Territories.length; i++) {
        game.$player1Territories[i].css('color', 'white');
    }
    for (var i =0; i<  game.$player2Territories.length; i++){
        game.$player2Territories[i].css('color', 'orange');
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
   function something(){
    currentPlayer.army_count --;
     if (currentPlayer == game.player1) {
     game.player1.$player1Turn_Armies.html('Player 1 Armies: ' + game.player1.army_count);
   }
     else {
     game.player2.$player2Turn_Armies.html('Player 2 Armies: ' + game.player2.army_count);
   }
    if (game.player1.army_count == 0 && game.player2.army_count == 0) {
       $('.countries').off('click');

        gamePlay();
    }
      else {
        switchTurns();
    }
 }
$('.countries').on('click', something);
}


// $('#play1Turn').hide()
// function stop_count() {
//   if (player1count === 0 && player2count === 0){
//      $('#play1Turn').show
// }
// }





  // $territories_Obj: { $indonesia: $('.indonesia'),
  //     $newGuinea: $('.newGuinea'),
  //     $westernAus: $('.westernAus'),
  //     $easternAus: $('.easternAus'),
  //     $siam: $('.siam'),
  //     $india: $('.india'),
  //     $china: $('.china'),
  //     $middleEast: $('.middleEast'),
  //     $afghanistan: $('.afghanistan'),
  //     $ural: $('.ural'),
  //     $siberia: $('.siberia'),
  //     $yakutsk: $('.yakutsk'),
  //     $irkutsk: $('.irkutsk'),
  //     $mongolia: $('.mongolia'),
  //     $japan: $('.japan'),
  //     $kamchatka: $('.kamchatka'),
  //     $ukraine: $('.ukraine'),
  //     $scandanavia: $('.scandanavia'),
  //     $iceland: $('.iceland'),
  //     $greatBritain: $('.greatBritain'),
  //     $northernEurope: $('.northernEurope'),
  //     $westernEurope: $('.westernEurope'),
  //     $southernEurope: $('.southernEurope'),
  //     $northAfrica: $('.northAfrica'),
  //     $egypt: $('.egypt'),
  //     $eastAfrica: $('.eastAfrica'),
  //     $congo: $('.congo'),
  //     $southAfrica: $('.southAfrica'),
  //     $madagascar: $('.madagascar'),
  //     $argentina: $('.argentina'),
  //     $peru: $('.peru'),
  //     $brazil: $('.brazil'),
  //     $venezuela: $('.venezuela'),
  //     $centralAmerica: $('.centralAmerica'),
  //     $easternUnitedStates: $('.easternUnitedStates'),
  //     $westernUnitedStates: $('.westernUnitedStates'),
  //     $alberta: $('.alberta'),
  //     $ontario: $('.ontario'),
  //     $quebec: $('.quebec'),
  //     $greenland: $('.greenland'),
  //     $northwestTerritory: $('.northwestTerritory'),
  //     $alaska: $('.alaska')
  //   }

  // console.log('game.$territories_Obj_div',game.$territories_Obj_div)
  var $die1 = game.randomNum(1, 6);
  var $die2 = game.randomNum(1, 6);
  var $die3 = game.randomNum(1, 6);
  var $die4 = game.randomNum(1, 6);
  var $die5 = game.randomNum(1, 6);



  game.$roll.on('click', function(){

  game.$dice.html("Attacker: " + $die1 + ",  " + $die2 + ",  " + $die3 + " " + " Defender: " + $die4 + ", " + $die5);
  game.attackerRoll.push($die1,$die2,$die3);
  if ($die4 > $die5) {
  game.compareRoll.push($die4,$die5)
}
  else {
  game.compareRoll.push($die5,$die4)
  }
  console.log(game.attackerRoll);
  game.max();
  game.max();

  if (game.compareRoll[0] >= game.compareRoll[2] && game.compareRoll[1] >= game.compareRoll[3]) {
      console.log('-2 to the attacker')
      alert('Player 2 Wins!! Click on the attacker country to subtract 2 armies')
      $('div[data-country]').find('.count')

      $('.countries').on('click', function(){
        //territory_num ++;
        // console.log($(this));
        // console.log($(this)[0].dataset.territory);
        // var country = $(this)[0].dataset.territory
        var country = $(this).data('territory');
        console.log('data', $(this).data('territory'))
        var territory_num = $('div[data-country=' + country +']').attr('data-country-num')
        territory_num = Number(territory_num) - 2
        $('div[data-country=' + country +']').attr('data-country-num', territory_num)
        $('div[data-country=' + country +']').find('.count').html(territory_num)
          $('.countries').off('click')
})


      // var country = game.attackObj.attacker.data('territory');
      // console.log('data', game.attackObj.attacker.data('territory'))
      // var territory_num = $('div[data-country=' + country +']').attr('data-country-num')
      // territory_num = Number(territory_num) - 2
      // $('div[data-country=' + country +']').attr('data-country-num', territory_num)
      // $('div[data-country=' + country +']').find('.count').html(territory_num)

  }
  else if (game.compareRoll[0] >= game.compareRoll[2] && game.compareRoll[1] < game.compareRoll[3]) {
      console.log('-1 to the attacker and -1 to the defender')
      alert('')
      $('div[data-country]').find('.count')

      $('.countries').on('click', function(){
        //territory_num ++;
        // console.log($(this));
        // console.log($(this)[0].dataset.territory);
        // var country = $(this)[0].dataset.territory
        var country = $(this).data('territory');
        console.log('data', $(this).data('territory'))
        var territory_num = $('div[data-country=' + country +']').attr('data-country-num')
        territory_num = Number(territory_num) - 1
        $('div[data-country=' + country +']').attr('data-country-num', territory_num)
        $('div[data-country=' + country +']').find('.count').html(territory_num)
        var double_click= {clicked1: "",
                       clicked2: ""}
        if (double_click.clicked1 == "true"){
              console.log('clicked1 is filled')
            double_click.clicked2 = "true"
        }
        else if (double_click.clicked1 == "") {
              console.log('setting clicked1 to true');
            double_click.clicked1 = "true"
        }
        else {
           $('.countries').off('click')
         }
       })

      // var  country= game.attackObj.attacker.data('territory');
      // var territory_num = $('div[data-country=' + country +']').attr('data-country-num')
      // territory_num = Number(territory_num) - 2;
      // $('div[data-country=' + country +']').attr('data-country-num', territory_num)
      // $('div[data-country=' + country +']').find('.count').html(territory_num)

  }
  else if (game.compareRoll[2] > game.compareRoll[0] && game.compareRoll[3] > game.compareRoll[1]) {
      console.log('-2 to the defender')
      alert('Player 1 Wins!! Click once on the defender country to subtract 2 armies')
      $('div[data-country]').find('.count')

      $('.countries').on('click', function(){
        //territory_num ++;
        // console.log($(this));
        // console.log($(this)[0].dataset.territory);
        // var country = $(this)[0].dataset.territory
        var country = $(this).data('territory');
        console.log('data', $(this).data('territory'))
        var territory_num = $('div[data-country=' + country +']').attr('data-country-num')
        territory_num = Number(territory_num) - 2
        $('div[data-country=' + country +']').attr('data-country-num', territory_num)
        $('div[data-country=' + country +']').find('.count').html(territory_num)
          $('.countries').off('click')
      })

      // var   country= game.attackObj.attacker.data('data-territory');
      // var territory_num = $('div[data-country=' + country +']').attr('data-country-num')
      // territory_num = Number(territory_num) - 2;
      // $('div[data-country=' + country +']').attr('data-country-num', territory_num)
      // $('div[data-country=' + country +']').find('.count').html(territory_num)

  }
  else {
      console.log('-1 to the defender and 1 to attacker')
      alert('')
      $('div[data-country]').find('.count')

      $('.countries').on('click', function(){
        //territory_num ++;
        // console.log($(this));
        // console.log($(this)[0].dataset.territory);
        // var country = $(this)[0].dataset.territory
        var country = $(this).data('territory');
        console.log('data', $(this).data('territory'))
        var territory_num = $('div[data-country=' + country +']').attr('data-country-num')
        territory_num = Number(territory_num) - 1
        $('div[data-country=' + country +']').attr('data-country-num', territory_num)
        $('div[data-country=' + country +']').find('.count').html(territory_num)
        var double_click= {clicked1: "",
                       clicked2: ""}
        if (double_click.clicked1 == "true"){
              console.log('clicked1 is filled')
            double_click.clicked2 = "true"
        }
        else if (double_click.clicked1 == "") {
              console.log('setting clicked1 to true');
            double_click.clicked1 = "true"
        }
        else {
           $('.countries').off('click')
         }
       })

      // var    country= game.attackObj.attacker.data('territory');
      // var territory_num = $('div[data-country=' + country +']').attr('data-country-num')
      // territory_num = Number(territory_num) - 2;
      // $('div[data-country=' + country +']').attr('data-country-num', territory_num)
      // $('div[data-country=' + country +']').find('.count').html(territory_num)

  }
})


// function placeArmies(){
//
// }


function gamePlay() {
    if (game.player1.army_count == 0 && game.player2.army_count == 0) {
    alert('It is Player 1s turn: Please select a white territory to attack from that contains at least 3 armies then select a territory to attack');
  }
  $('.countries').on('click', function(){
    var country = $(this).data('territory');
    if (game.attackObj.attacker == "none") {
       game.attackObj.attacker = country
       alert('you are attacking from ' + game.attackObj.attacker)
    }
    else if (game.attackObj.defender == "none") {
      game.attackObj.defender = country
       alert('you are attacking ' + game.attackObj.defender + " .........Roll the dice!!!")
    }
    else {
      attackObj = {attacker: "none",
                   defender: "none"}
       console.log(attackObj)
    }
})
}
    // var territory_num = $('div[data-country=' + country +']').attr('data-country-num')
    // territory_num = Number(territory_num) + 1
    // $('div[data-country=' + country +']').attr('data-country-num', territory_num)
    // $('div[data-country=' + country +']').find('.count').html(territory_num)
    //
    //
    //   $('div[data-country]').find('.count').html(1)



  // var count = 0;
	// $('.territory').on('click', function(){
	// 	var territory = $(this).data('territory')
	// 	var $country = $('.country[data-country=' + territory +']')
	// 	count ++;
	// 	$country.html(count)
