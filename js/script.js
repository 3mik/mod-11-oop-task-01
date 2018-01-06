function Phone(brand, price, color, isAvailable) {    
    this.isAvailable = isAvailable || false;
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function(){
    console.log(`This phone brand is ${this.brand}, color is ${this.color} and the price is ${this.price}.`);
}

Phone.prototype.changePrice = function(value){
    if (typeof value === "number") {
        this.price = value;
        console.log(`New price for ${this.brand} is ${this.price} now.`);
    } else console.log("The value must be a number");
}

Phone.prototype.checkAvailability = function(){
    if (this.isAvailable) {
        console.log(`The phone ${this.brand} is available for sale`);
    } else console.log(`The phone ${this.brand} is not available for sale now`);
}

Phone.prototype.setAvailability = function(value){
    if (typeof value === "boolean") {
        this.isAvailable = value;
    } else console.log("The value must be 'true' or 'false'");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
iPhone6S.printInfo();
iPhone6S.checkAvailability();
console.log("-------------------------------------");
var samsungGalaxyS7 = new Phone("Samsung", 2300, "white", true);
samsungGalaxyS7.printInfo();
samsungGalaxyS7.checkAvailability();
console.log("-------------------------------------");
var onePlus5 = new Phone("OnePlus", 2299, "black");
onePlus5.printInfo();
onePlus5.checkAvailability();
console.log("-------------------------------------");
console.log("... setting availability to 'true' for One Plus 5");
onePlus5.setAvailability(true);
console.log("... checking availability");
onePlus5.checkAvailability();
console.log("... setting new price for One Plus 5");
onePlus5.changePrice(1800);
console.log("-------------------------------------");
console.log("... try to pass parameter to 'setAvailibity' other type than 'boolean'");
onePlus5.setAvailability("false");
console.log("... try to pass parameter to 'changePrice' other type than 'number'");
onePlus5.changePrice('abc');








