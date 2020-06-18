Hooks.once('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({id:"alien",name:"ALIEN RPG"},true);
  dice3d.addDicePreset({
    type:"d6",
    labels:[
      'systems/worldbuilding/icons/dice-faces/d6-1A.png',
	  'systems/worldbuilding/icons/dice-faces/d6-1A.png'  
    ],
    system:"alien"
  });

  dice3d.addColorset({
    name: 'alien',
    description: 'Alien Black',
    category: 'Colors',
    foreground: "#FFFFFF",
    background: "#000000",
    outline: 'none',
    texture: 'none'
  },"force");
});
  
  