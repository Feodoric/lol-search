var Ability = function(name, key, tags) {
    this.name = name;
    this.id = this.name.toLowerCase().replace(/[^a-z]/gi, '');
    this.key = key;
    this.tags = tags;
}

var Champion = function(name, releaseDate) {
    this.name = name;
    this.id = this.name.toLowerCase().replace(/[^a-z]/gi, '');
    this.releaseDate = new Date(0);
    this.abilities = [];
    this.searchString = this.name;
    this.tags = [];

    if(typeof releaseDate === 'date') {
        this.releaseDate = releaseDate;
    }
}

// TODO: does JS support function overloading??
Champion.prototype.addAbility = function(name, key, tags) {
    var ability = new Ability(name, key, tags);
    this.abilities.push(ability);

    // TODO: it's inefficient to rebuild this string *every time* we add a new ability
    this.updateSearchString();
}

Champion.prototype.updateSearchString = function() {
    this.searchString = this.name.toLowerCase();


    for(var i = 0; i < this.abilities.length; i++) {
        this.searchString = this.searchString + ' ' + this.abilities[i].name.toLowerCase();

        for(var j = 0; j < this.abilities[i].tags.length; j++) {
            this.searchString = this.searchString + ' ' + this.abilities[i].tags[j].toLowerCase();
        }
    }
}

var AbilityMatch = function(champion, matchedAbilities) {
    this.champion = champion;
    this.matchedAbilities = matchedAbilities;
}
