// TODO: for now, only give abilities tags

var Ability = function(name, key, tags) {
    this.name = name;
    this.key = key;
    this.tags = tags;
}

var Champion = function(name) {
    this.name = name;
    this.id = this.name.toLowerCase().replace(/[^a-z]/gi, '');
    this.releaseDate = new Date(0);
    this.abilities = [];
    this.searchString = this.name;
}

// TODO: does JS support function overloading??
Champion.prototype.addAbility = function(name, key, tags) {
    var ability = new Ability(name, key, tags);
    this.abilities.push(ability);

    // TODO: it's inefficient to rebuild this string *every time* we add a new ability
    this.updateSearchString();
}

// TODO: use the new searchString variable to run the autocomplete!
Champion.prototype.updateSearchString = function() {
    this.searchString = this.name.toLowerCase();


    for(var i = 0; i < this.abilities.length; i++) {
	this.searchString = this.searchString + ' ' + this.abilities[i].name.toLowerCase();
	this.searchString = this.searchString + ' ' + this.abilities[i].key.toLowerCase();

	for(var j = 0; j < this.abilities[i].tags.length; j++) {
	    this.searchString = this.searchString + ' ' + this.abilities[i].tags[j].toLowerCase();
	}
    }
}


