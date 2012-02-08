var Ability = function(name, key, tags) {
    this.name = name;
    // TODO: put this regular expression in a variable
    this.id = this.name.toLowerCase().replace(/[^a-z]/gi, '');
    this.key = key;
    this.tags = tags;
};

var Champion = function(name, releaseDate) {
    this.name = name;
    // TODO: put this regular expression in a variable
    this.id = this.name.toLowerCase().replace(/[^a-z]/gi, '');
    this.releaseDate = new Date(0);
    this.abilities = [];
    this.searchString = this.name;
    this.tags = [];

    if(typeof releaseDate === 'date') {
        this.releaseDate = releaseDate;
    }
};

Champion.prototype.addAbility = function(name, key, tags) {
    var ability = new Ability(name, key, tags);
    this.abilities.push(ability);
};

Champion.prototype.updateSearchString = function() {
    this.searchString = this.name;
    this.searchString = this.searchString + ' ' + this.tags.join(' ');

    for(var a in this.abilities) {
        // TODO: continue to include ability name in the search string?
        this.searchString = this.searchString + ' ' + this.abilities[a].name;
        this.searchString = this.searchString + ' ' + this.abilities[a].tags.join(' ');
    }

    this.searchString = this.searchString.toLowerCase();
    // TODO: put this regular expression in a variable somewhere
    this.searchString = this.searchString.replace(/[^a-zA-Z0-9]+/g, '');
};

Champion.prototype.getSearchMatchScore = function(searchTerms) {
    var score = 0.0;

    if(typeof searchTerms === 'String') {
        searchTerms = [searchTerms];
    }

    if(searchTerms.length === undefined || searchTerms.length == 0) {
        return score;
    }

    var term = '';
    var tag = '';

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

        // TODO: figure out the UI for searching by champion tags
        for(var t in this.tags) {
            tag = this.tags[t];

            if(tag.indexOf(term) > -1) {
                score += 1.0;
            }
        }

        var ability = null;
        var matchIndex = -1;

        for(var a in this.abilities) {
            ability = this.abilities[a];

            for(var t in ability.tags) {
                tag = ability.tags[t];

                // A exact match is worth more than a partial match
                matchIndex = tag.indexOf(term);
                if(matchIndex === 0 && tag.length == term.length) {
                    score += 1.5;
                } else if(matchIndex === 0) {
                    score += 1.0;
                } else if(matchIndex > 0) {
                    score += 0.5;
                }
            }
        }
    }

    return score;
};

Champion.prototype.getMatchingAbilities = function(searchTerms) {
    var matchingAbilities = new Array();

    if(typeof searchTerms === 'String') {
        searchTerms = [searchTerms];
    }

    if(searchTerms.length === undefined || searchTerms.length == 0) {
        return score;
    }

    var term = '';
    var tag = '';

    for(var r in searchTerms) {
        term = searchTerms[r];

        var ability = null;
        var matchIndex = -1;

        for(var a in this.abilities) {
            ability = this.abilities[a];

            for(var t in ability.tags) {
                tag = ability.tags[t];

                // If any of an ability's tags match, then move onto the next ability
                if(tag.indexOf(term) != -1) {
                    matchingAbilities.push(ability);
                    break;
                }
            }
        }
    }

    // TODO: ensure that matchingAbilities contains no duplicates
    return matchingAbilities;
};

// STATIC FUNCTION for sending to Array.sort()
Champion.prototype.sortByName = function(leftChamp, rightChamp) {
    return leftChamp.name.localeCompare(rightChampe.name);
};

// STATIC FUNCTION for sending to Array.sort()
Champion.prototype.sortByReleaseDate = function(leftChamp, rightChamp) {
    return leftChamp.releaseDate.getTime() - rightChamp.releaseDate.getTime();
};



var ChampionMatch = function(champion, searchScore, matchedAbilities) {
    this.champion = champion;
    this.searchScore = searchScore;
    this.matchedAbilities = matchedAbilities;
};

// STATIC FUNCTION for sending to Array.sort()
ChampionMatch.prototype.compareMatches = function(leftMatch, rightMatch) {
    if(leftMatch.searchScore === rightMatch.searchScore) {
        return leftMatch.champion.name.localeCompare(rightMatch.champion.name);
    }

    return rightMatch.searchScore - leftMatch.searchScore;
};
