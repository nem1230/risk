console.log($('img[usemap]'));
// $('img[usemap]').maphilight()


  console.log('working');



  var game = {
    this: console.log('this', this),
    player1: 'black',
    player2: 'white',
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
      $player2Territories: []
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



  game.$start_game.on('click',function(){
    for (territory in game.$territories_Obj_div){
      game.$territories_Arr.push(game.$territories_Obj_div[territory]);
      console.log('territories array', game.$territories_Arr);
    }
    console.log('array exists')
    shuffle(game.$territories_Arr);
    console.log('array shuffled');
    game.$player1Territories= game.$territories_Arr.slice(0,22);
    console.log('player1', game.$player1Territories)
    game.$player2Territories= game.$territories_Arr.slice(22,43);
    console.log('player2', game.$player2Territories);

    for (var i = 0; i < game.$player1Territories.length; i++) {
        game.$player1Territories[i].css('color', 'white');
    }
    for (var i =0; i<  game.$player2Territories.length; i++){
        game.$player2Territories[i].css('color', 'orange');
    }
})






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
  game.compareRoll.push($die4,$die5)
  console.log(game.attackerRoll);
  game.max();
  game.max();
  if (game.compareRoll[0] >= game.compareRoll[2] && game.compareRoll[1] >= game.compareRoll[3]) {
      console.log('-2 to the attacker');
  }
  else if (game.compareRoll[0] >= game.compareRoll[2] && game.compareRoll[1] < game.compareRoll[3]) {
      console.log('-1 to the attacker and -1 to the defender')
  }
  else if (game.compareRoll[2] > game.compareRoll[0] && game.compareRoll[3] < game.compareRoll[1]) {
      console.log('-1 to the defender and -1 to the attacker')
  }
  else {
      console.log('-2 to the defender')
  }
  })


  function switchTurns() {
    currentPlayer = game.player1;
    if (currentPlayer = gam.player){
      currentPlayer = game.player2;
    }
  }
