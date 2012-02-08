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
    this.searchString = this.searchString.replace(/[a-zA-Z0-9]+/g, '');
}

Champion.prototype.getSearchMatchScore = function(searchTerms) {
    var score = 0.0;

    if(typeof searchTerms === 'string') {
        searchTerms = [searchTerms];
    }

    if(!(typeof searchTerms === 'array')) {
        return score;
    }

    // TODO: iterate through searchTerms and check against various attributes of this instance
    // Assuming that searchTerms is just letters and numbers
    var term = '';
    var tag = '';
    var ability = null;
    var matchIndex = -1;
    for(var r in searchTerms) {
        term = searchTerms[r];

        /* TODO: decide how to score natching champion names
            Just return a high score right here? If the champion's
            name matches then the user probably isn't searching for
            anything else.
        if(this.name.toLowerCase().indexOf(term) > -1) {
            score += 0.5;
        }
        */

        // TODO: why not score a champion tag the same as an ability tag
        for(var t in this.tags) {
            tag = this.tags[t];

            if(tag.indexOf(term) > -1) {
                score += 0.5;
            }
        }

        for(var a in this.abilities) {
            ability = this.abilities[a];

            for(var t in ability.tags) {
                tag = ability.tags[t];

                // A perfect match is worth more than a partial match
                matchIndex = tag.indexOf(term);
                if(matchIndex === 0 && tag.length == term.length) {
                    score += 1.0;
                } else if(matchIndex > 0) {
                    score += 0.5;
                }
            }
        }
    }

    return score;
}

var AbilityMatch = function(champion, matchedAbilities) {
    this.champion = champion;
    this.matchedAbilities = matchedAbilities;
}
