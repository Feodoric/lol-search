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

Champion.prototype.addAbility = function(name, key, tags) {
    var ability = new Ability(name, key, tags);
    this.abilities.push(ability);
}

Champion.prototype.updateSearchString = function() {
    this.searchString = this.name;
    this.searchString = this.searchString + ' ' + this.tags.join(' ');

    for(var a in this.abilities) {
        // TODO: continue to include ability name in the search string?
        this.searchString = this.searchString + ' ' + this.abilities[a].name;
        this.searchString = this.searchString + ' ' + this.abilities[a].tags.join(' ');
    }

    this.searchString = this.searchString.toLowerCase();
}

var AbilityMatch = function(champion, matchedAbilities) {
    this.champion = champion;
    this.matchedAbilities = matchedAbilities;
}
