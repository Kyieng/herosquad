class Squad {
    constructor(name, maxSize, cause) {
      this.name = name;
      this.maxSize = maxSize;
      this.cause = cause;
      this.heroes = [];
    }
  
    addHero(hero) {
      if (this.heroes.length < this.maxSize) {
        this.heroes.push(hero);
        return true;
      }
      return false;
    }
  }
  
  module.exports = Squad;