
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}


const dog=new Animal('abc',4);
console.log(dog.name);
console.log(dog.describe());