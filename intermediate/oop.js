// what is oop
// object
// is JS -> Fully Object Oriented -> No
// class, constructor, new, this


// template & blueprint of an object
class Student {

    // automatically call on creating an object
    constructor(first_name, last_name, mobile, batch_code, tech) {
        // current object
        this.name =  first_name + " " + last_name;
        this.mobile = mobile;
        this.tech = tech;
    }

    updateMobile(mobile) {
       this.mobile =  mobile;
    }

    addTech(tech) {
        this.tech.push(tech);   
    }
}

// Object Creating
const shadab = new Student("Shadab", "Ansari", "197917893791", "TP_RP_06", ["HTML", "CSS", "JS"]);
const sheela = new Student("Sheela", "Mishra", "197917893791", "TP_RP_06", ["HTML", "CSS", "JS"]);
const sheela = new Student("Sheela", "Mishra", "197917893791", "TP_RP_06", ["HTML", "CSS", "JS"]);

shadab.addTech("ReactJS")

console.log(shadab);