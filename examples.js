var favoriteCookie = "Snickerdoodle";

var takeFromJar = function takeFromJar () {
  var who = "Adam took the cookie from the jar!":
  console.log("Who took the cooke from the cookie jar?", who)
}

who;


//class version : this Changes by Call Context

var xwing = {
    pilot: null,

    setPilot: function(pilot) {
        this.pilot = pilot;
        this.update();
    },

    update: function() {
        console.log('This X-Wing has changed!');
    }
};

xwing.setPilot("Luke Skywalker");
// >> "This X-Wing has changed!"

console.log(xwing.pilot);
// >> "Luke Skywalker"


----------------------------------

//tweaked version :this Changes by Call Context

var ywing = {
    pilot: "fadsfadds",

    setPilot: function(pilot) {
        xwing.pilot = pilot;
        this.update();
    },

    update: function() {
        console.log('This X-Wing has changed!');
    }
};

ywing.setPilot("Luke Skywalker");
// >> "This X-Wing has changed!"

console.log(ywing.pilot);
// >> "Will return fadsfadds"



----------------------------------

//class version : Method Invocation Pattern

var deathstar = {

  function goBoom() {
      console.log(this);
  }
};

deathstar.goBoom();
// Will return deathstar

----------------------------------


//tweaked version : Method Invocation Pattern

var tieFighter  = {

  goBoom : function() {
      console.log(this);
  }
  ,
  name: "Tie Figther"
};

tieFighter.goBoom();
// Will return > tieFighter.goBoom();
// { goBoom: [Function], name: 'Tie Figther' }


----------------------------------

// when we call a function in the global name space, the "this" keyword is going to point to the global name space

function goBoom() {
    console.log(this);
}

goBoom();
// this === window

// This is the same as:
window.goBoom();


//functions call be called on any objects  if we have:
// a) point to the function (deatherstar.goBoom)
// b) object to
