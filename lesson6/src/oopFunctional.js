
// functional inheritance
// function Machine() {
//     this.isEnabled = false;

//     this.enable = function() {
//         this.isEnabled = true;
//     };

//     this.disable = function() {
//         this.isEnabled = false;
//     };
// }


// function CoffeeMachine() {
//     Machine.apply(this);

//     this.waterAmount = 0;

//     this.setWaterAmount = function(amount) {
//         this.waterAmount = amount;
//     };
// }

// var coffeeMachine = new CoffeeMachine();
// coffeeMachine.enable();
// console.log(coffeeMachine.isEnabled);

// private public fields
// function Machine() {
//     this.isEnabled = false;

//     this.enable = function() {
//         this.isEnabled = true;
//     };

//     this.disable = function() {
//         this.isEnabled = false;
//     };
// }


// function CoffeeMachine() {
//     Machine.apply(this);

//     this._waterAmount = 0;

//     function privateClearWaterAmount() { // private method
//         this._waterAmount = 0;
//     }

//     this.publicClearWaterAmount = function() {
//         privateClearWaterAmount.apply(this);
//     }

//     this.setWaterAmount = function(amount) {
//         this._waterAmount = amount;
//     };
// }

// var coffeeMachine = new CoffeeMachine();
// // coffeeMachine.privateClearWaterAmount();
// coffeeMachine.publicClearWaterAmount();
// console.log(coffeeMachine._waterAmount);

// methods overriding . POLYMORPHISM!
// function Machine() {
//     this.isEnabled = false;

//     this.enable = function() {
//         this.isEnabled = true;
//     };

//     this.disable = function() {
//         this.isEnabled = false;
//     };

//     this.powerOff = function() {
//         this.isEnabled = false;
//     }
// }


// function CoffeeMachine() {
//     Machine.apply(this);

//     this.waterAmount = 0;

//     this.setWaterAmount = function(amount) {
//         this.waterAmount = amount;
//     };

//     var parentPowerOff = this.powerOff;
//     this.powerOff = function() {
//         parentPowerOff.apply(this);
//         this.waterAmount = 0;
//     }
// }

// var coffeeMachine = new CoffeeMachine();
// coffeeMachine.enable();
// coffeeMachine.setWaterAmount(100);
// console.log(coffeeMachine);
// coffeeMachine.powerOff();
// console.log(coffeeMachine);

// overriding example 2
function Machine() {
    var self = this;

    this.isEnabled = false;

    this.enable = function() {
        this.isEnabled = true;
    };

    this.disable = function() {
        this.isEnabled = false;
    };

    this.powerOff = function() {
        self.isEnabled = false;
    }
}


function CoffeeMachine() {
    Machine.apply(this);

    this.waterAmount = 0;

    this.setWaterAmount = function(amount) {
        this.waterAmount = amount;
    };

    var parentPowerOff = this.powerOff;
    this.powerOff = function() {
        parentPowerOff();
        this.waterAmount = 0;
    }
}

var coffeeMachine = new CoffeeMachine();
coffeeMachine.enable();
coffeeMachine.setWaterAmount(100);
console.log(coffeeMachine);
coffeeMachine.powerOff();
console.log(coffeeMachine);