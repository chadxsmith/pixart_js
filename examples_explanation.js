
// // "this" Changes by Call Context
// ------------------------------------------------------------------------------------------------------------------
var xwing = {
    pilot: null,                   // pilot is set to null

    setPilot: function(pilot) {    //this function acceptes one argument
        this.pilot = pilot;       //this.pilot refers to the context of which it's set, which is xwing
        this.update();           //update is called to run the function below
    },

    update: function() {
        console.log('This X-Wing has changed!');
    }
};

xwing.setPilot("Luke Skywalker");   //"xwing.setPilot" mean xwing is pointing at the function "setPilot", and when it's called
// >> "This X-Wing has changed!"    //(i.e. () ) it passes the one parameter, "Lkue Skylwalker", into "setPilot"

console.log(xwing.pilot);           //logs objects (xwing) parameter (pilot), which is "Luke Skywalker"
// >> "Luke Skywalker"


// // Function Invocation Pattern
// ------------------------------------------------------------------------------------------------------------------


function goBoom() {
    console.log(this);
}

goBoom();
// this === window

// This is the same as:
window.goBoom();                     //"window" represents the global scope of the browser. goBoom() returns the
                                    // 
