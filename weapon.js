//DESERT EAGLE BLIN!

class Weapon {
    constructor(name, category, nationality="Russian") {
        this.name = name;
        this.category = category;
        this.nationality = nationality
        this.shoot = (state="Normal") => {
            if (state == "Normal"){
                console.log("PEW! PEW! BLYAAAT!");
            }
            else if (state == "Headshot") { 
                console.log("BANG! HEADSHOT CYKAA!")
            }
        };
    }
}

const AK47 = new Weapon("AK-47","Assault Rifles","SOVIET")

console.log(AK47.name)
console.log(AK47.category)
console.log(AK47.nationality)
AK47.shoot()
AK47.shoot("Headshot")