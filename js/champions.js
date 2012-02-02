// TODO: include scaling ratios in abilities
// TODO: include champion passive


var allChampions = [];

var newChamp = new Champion("Alistar");
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Pulverize", 'Q', ['knockup', 'melee', 'stun', 'aoe', 'ap scaling', 'magic damage']);
newChamp.addAbility("Headbutt", 'W', ['targeted', 'knockback', 'ap scaling', 'melee', 'magic damage']);
newChamp.addAbility("Triumphant Roar", 'E', ['heal', 'ap scaling', 'ranged']);
newChamp.addAbility("Unbreakable Will", 'R', ['clense', 'ad buff', 'damage reduction', 'ultimate']);
allChampions.push(newChamp);

var newChamp = new Champion("Annie");
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Disintigrate", 'Q', ['targeted', 'ranged', 'ap scaling', 'magic damage']);
newChamp.addAbility("Incinerate", 'W', ['cone', 'ap scaling', 'melee', 'magic damage']);
newChamp.addAbility("Molten Shield", 'E', ['shield', 'armor buff', 'mr buff', 'ap scaling', 'self']);
newChamp.addAbility("Summon Tibbers", 'R', ['summon', 'targeted', 'aoe', 'magic damage', 'ultimate']);
allChampions.push(newChamp);

var newChamp = new Champion("Ashe");
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Frost Shot", 'Q', ['toggle', 'autoattack effect', 'frost', 'ranged']);
newChamp.addAbility("Volley", 'W', ['cone', 'slow', 'frost', 'ad scaling', 'ranged', 'physical damage']);
newChamp.addAbility("Hawkshot", 'E', ['passive', 'gold per kill', 'reveal', 'ranged']);
newChamp.addAbility("Enchanted Crystal Arrow", 'R', ['skillshot', 'long range', 'stun', 'aoe', 'slow', 'allChampions only', 'frost', 'ranged', 'magic damage', 'ultimate', 'global', 'long range']);
allChampions.push(newChamp);

var newChamp = new Champion("Fiddlesticks");
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Terrify", 'Q', ['fear', 'targeted', 'ranged']);
newChamp.addAbility("Drain", 'W', ['channel', 'drain', 'ap scaling']);
newChamp.addAbility("Dark Wind", 'E', ['ranged', 'damage', 'ap scaling', 'bounce', 'silence']);
newChamp.addAbility("Crowstorm", 'R', ['flash', 'aoe', 'channel']);
allChampions.push(newChamp);

var newChamp = new Champion("Jax");
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Leap Strike", 'Q', ['jump', 'ranged', 'ap scaling', 'ad scaling', 'physical damage']);
newChamp.addAbility("Empower", 'W', ['autoattack buff', 'ap scaling']);
newChamp.addAbility("Counter Strike", 'E', ['dodge', 'stun', 'ad scaling', 'physical damage']);
newChamp.addAbility("Grandmaster's Might", 'R', ['passive', 'autoattack buff', 'magic damage', 'ap scaling', 'ad scaling', 'bonus ad', 'bonus ap']);
allChampions.push(newChamp);

var newChamp = new Champion("Kayle");
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Reckoning", 'Q', ['targeted', 'magic damage', 'ap scaling', 'ad scaling', 'slow', 'damage amplification', 'ranged']);
newChamp.addAbility("Divine Blessing", 'W', ['heal', 'targeted', 'move speed buff', 'ap scaling', 'ranged']);
newChamp.addAbility("Righteous Fury", 'E', ['attack range increase', 'splash damage', 'magic damage', 'ad scaling']);
newChamp.addAbility("Intervention", 'R', ['ultimate', 'targeted', 'ranged', 'damage imune']);
allChampions.push(newChamp);

var newChamp = new Champion("Master Yi");
newChamp.releaseDate = new Date(2009, 2, 21);
// TODO: how to tag "can hit multiple tagets but player only clicks once and it's not an "aoe" damage"??
newChamp.addAbility("Alpha Strike", 'Q', ['targeted', 'magic damage', 'ap scaling', 'jump', 'ranged']);
newChamp.addAbility("Meditate", 'W', ['heal', 'channel', 'armor buff', 'ap scaling', 'mr buff']);
newChamp.addAbility("Wuju Style", 'E', ['passive', 'ad bonus']);
// TODO: stun and/or root immune too?
newChamp.addAbility("Highlander", 'R', ['ultimate', 'move speed buff', 'attack speed buff', 'slow immune']);
allChampions.push(newChamp);

var newChamp = new Champion("Morgana");
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Dark Binding", 'Q', ['skillshot', 'magic damage', 'ap scaling', 'root']);
newChamp.addAbility("Tormented Soil", 'W', ['aoe', 'magic damage', 'damage over time', 'ap scaling', 'mr debuff']);
newChamp.addAbility("Black Shield", 'E', ['magic shield', 'disable immune', 'ap scaling']);
// TODO: aoe or some kind of "multiple targets"??
newChamp.addAbility("Soul Shackles", 'R', ['ultimate', 'slow', 'stun', 'magic damage', 'aoe', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Nunu");
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Consume", 'Q', ['targeted', 'true damae', 'ap scaling', 'heal', 'minions only', 'melee']);
newChamp.addAbility("Blood Boil", 'W', ['allies only', 'targeted', 'attack speed buff', 'move speed buff']);
newChamp.addAbility("Ice Blast", 'E', ['magic damage', 'slow', 'ap scaling', 'targeted', 'frost']);
newChamp.addAbility("Absolute Zero", 'R', ['ultimate', 'slow', 'magic damage', 'aoe', 'ap scaling', 'move speed debuff', 'attack speed debuff']);
allChampions.push(newChamp);

newChamp = new Champion("Ryze");
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Overload", 'Q', ['targeted', 'ap scaling', 'mana scaling']);
newChamp.addAbility("Rune Prison", 'W', ['root', 'targeted', 'ap scaling', 'mana scaling']);
newChamp.addAbility("Spell Flux", 'E', ['targeted', 'bounce', 'ap scaling', 'mr debuff']);
newChamp.addAbility("Desperate Power", 'R', ['spell vamp', 'AOE']);
allChampions.push(newChamp);

var newChamp = new Champion("Sion");
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Cryptic Gaze", 'Q', ['stun', 'targeted', 'ap scaling']);
newChamp.addAbility("Death's Caress", 'W', ['shield', 'aoe', 'ap scaling']);
newChamp.addAbility("Enrage", 'E', ['AD buff', 'permanent hp gain']);
newChamp.addAbility("Cannibalism", 'R', ['attack speed buff', 'life steal', 'aura', 'heal']);
allChampions.push(newChamp);

var newChamp = new Champion("Sivir");
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Boomerang Blade", 'Q', ['skillshot', 'ranged', 'passthrough', 'ad scaling', 'ap scaling', 'physical damage']);
newChamp.addAbility("Riccochet", 'W', ['bounce', 'physical damage', 'autoattack effect']);
newChamp.addAbility("Spell Shield", 'E', ['block debuff']);
newChamp.addAbility("On The Hunt", 'R', ['ultimate', 'attack speed buff', 'move speed buff', 'aura']);
allChampions.push(newChamp);

var newChamp = new Champion("Soraka");
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Starcall", 'Q', ['ranged', 'aoe', 'ap scaling', 'magic damage', 'mr debuff']);
newChamp.addAbility("Astral Blessing", 'W', ['targeted', 'allies only', 'heal', 'armor buff', 'ap scaling', 'ranged']);
newChamp.addAbility("Infuse", 'E', ['silence', 'restore mana', 'ap scaling', 'magic damage']);
newChamp.addAbility("Wish", 'R', ['ultimate', 'heal', 'global', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Teemo");
// TODO: include "yordle" in Teemo's tags
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Blinding Dart", 'Q', ['ranged', 'blind', 'ap scaling', 'magic damage']);
newChamp.addAbility("Move Quick", 'W', ['passive', 'move speed buff']);
newChamp.addAbility("Toxic Shot", 'E', ['passive', 'damage over time', 'ap scaling', 'magic damage', 'autoattack effect']);
newChamp.addAbility("Noxious Trap", 'R', ['ultimate', 'mushroom', 'placement', 'ap scaling', 'trap', 'magic damage', 'damage over time', 'slow', 'reveal', 'melee']);
allChampions.push(newChamp);

var newChamp = new Champion("Tristana");
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Rapid Fire", 'Q', ['active', 'attack speed buff']);
newChamp.addAbility("Rocket Jump", 'W', ['targeted', 'magic damage', 'ap scaling', 'slow', 'aoe', 'jump']);
newChamp.addAbility("Explosive Shot", 'E', ['passive', 'splash damage', 'autoattack effect', 'ap scaling', 'magic damage', 'targeted', 'enemies only', 'damage over time', 'hp regen debuff']);
newChamp.addAbility("Buster Shot", 'R', ['ultimate', 'targeted', 'enemies only', 'ap scaling', 'magic damage', 'knockback']);
allChampions.push(newChamp);

var newChamp = new Champion("Twisted Fate");
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Wild Cards", 'Q', ['ranged', 'cone', 'ap scaling', 'magic damage', 'passthrough', 'skillshot']);
newChamp.addAbility("Pick a Card", 'W', ['targeted', 'autoattack effect', 'stun', 'slow', 'ap scaling', 'restore mana', 'aoe', 'ad scaling', 'magic damage']);
newChamp.addAbility("Stacked Deck", 'E', ['passive', 'attack speed buff', 'cdr', 'ap scaling', 'magic damage', 'autoattack effect']);
newChamp.addAbility("Destiny//Gate", 'R', ['ultimate', 'reveal', 'teleport', 'global', 'channel']);
allChampions.push(newChamp);

var newChamp = new Champion("Warwick");
newChamp.releaseDate = new Date(2009, 2, 21);
newChamp.addAbility("Hungering Strike", 'Q', ['melee', 'magic damage', 'ap scaling', 'heal', 'targeted']);
newChamp.addAbility("Hunters Call", 'W', ['aoe', 'allies only', 'attack speed buff']);
newChamp.addAbility("Blood Scent", 'E', ['reveal', 'aoe', 'move speed buff', 'toggle']);
newChamp.addAbility("Infinite Duress", 'R', ['ultimate', 'jump', 'suppress', 'magic damage', 'life steal', 'ad scaling', 'ranged']);
allChampions.push(newChamp);

var newChamp = new Champion("Singed");
newChamp.releaseDate = new Date(2004, 4, 18);
newChamp.addAbility("Poison Trail", 'Q', ['damage over time', 'aoe', 'trail', 'magic damage', 'ap scaling']);
newChamp.addAbility("Mega Adhesive", 'W', ['aoe', 'ranged', 'slow']);
newChamp.addAbility("Fling", 'E', ['targeted', 'toss', 'stun', 'magic damage', 'ap scaling', 'melee']);
newChamp.addAbility("Insanity Potion", 'R', ['ultimate', 'ap buff', 'armor buff', 'mr buff', 'hp regen buff', 'move speed buff', 'mana regen buff', 'cc reduction']);
allChampions.push(newChamp);

var newChamp = new Champion("Zilean");
newChamp.releaseDate = new Date(2009, 4, 18);
newChamp.addAbility("Time Bomb", 'Q', ['targeted', 'aoe', 'delayed', 'magic damage', 'ap scaling', 'ranged']);
newChamp.addAbility("Rewind", 'W', ['active', 'cdr']);
newChamp.addAbility("Time Warp", 'E', ['targeted', 'slow', 'move speed buff']);
newChamp.addAbility("Chrono Shift", 'R', ['ultimate', 'targeted', 'resurrection', 'ap scaling', 'hp regain', 'ranged']);
allChampions.push(newChamp);

var newChamp = new Champion("Evelynn");
newChamp.releaseDate = new Date(2009, 5, 1);
newChamp.addAbility("Hate Spike", 'Q', ['targeted', 'magic damage', 'ap scaling', 'melee']);
newChamp.addAbility("Shadow Walk", 'W', ['invisible', 'autoattack effect', 'slow']);
newChamp.addAbility("Ragave", 'E', ['targeted', 'armor debuff', 'mr debuff', 'magic damage', 'ap scaling', 'ranged']);
newChamp.addAbility("Malice and Spite", 'R', ['ultimate', 'hp regain', 'move speed buff', 'attack speed buff']);
allChampions.push(newChamp);

var newChamp = new Champion("Tryndamere");
newChamp.releaseDate = new Date(2009, 5, 1);
newChamp.addAbility("Bloodlust", 'Q', ['ad bonus', 'heal', 'fury']);
newChamp.addAbility("Mocking shout", 'W', ['ad debuff', 'slow', 'aoe', 'ranged']);
newChamp.addAbility("Spinning Slash", 'E', ['dash', 'ad scaling', 'ap scaling', 'physical damage']);
newChamp.addAbility("Undying Rage", 'R', ['ultimate', 'damage immune', 'fury']);
allChampions.push(newChamp);

var newChamp = new Champion("Twitch");
newChamp.releaseDate = new Date(2009, 5, 1);
newChamp.addAbility("Ambush", 'Q', ['invisible', 'attack speed buff']);
newChamp.addAbility("Debilitating Posion", 'W', ['slow', 'aoe']);
newChamp.addAbility("Expunge", 'E', ['aoe', 'magic damage', 'ap scaling']);
newChamp.addAbility("Spray and Pray", 'R', ['ultimate', 'attack range buff', 'attack speed buff', 'ad buff', 'passthrough']);
allChampions.push(newChamp);

var newChamp = new Champion("Karthus");
newChamp.releaseDate = new Date(2009, 6, 12);
newChamp.addAbility("Lay Waste", 'Q', ['trap', 'splash damage', 'magic damage', 'ap scaling', 'ranged']);
newChamp.addAbility("Wall of Pain", 'W', ['slow', 'aoe', 'armor debuff', 'mr debuff', 'ranged']);
newChamp.addAbility("Defile", 'E', ['aoe', 'mana regain', 'magic damage', 'ap scaling', 'ranged']);
newChamp.addAbility("Requiem", 'R', ['ultimate', 'global', 'channel', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Amumu");
newChamp.releaseDate = new Date(2009, 6, 26);
newChamp.addAbility("Bandage Toss", 'Q', ['skillshot', 'pull', 'magic damage', 'ap scaling', 'stun', 'ranged']);
newChamp.addAbility("Despair", 'W', ['aoe', 'magic damage', 'percent max health', 'ap scaling', 'melee']);
newChamp.addAbility("Tantrum", 'E', ['ad reduction', 'aoe', 'magic damage', 'ap scaling', 'melee']);
newChamp.addAbility("Curse of the Sad Mummy", 'R', ['ultimate', 'aoe', 'root', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Cho'Gath");
newChamp.releaseDate = new Date(2009, 6, 26);
newChamp.addAbility("Rupture", 'Q', ['knockup', 'slow', 'aoe', 'ranged', 'magic damage', 'ap scaling']);
newChamp.addAbility("Feral Scream", 'W', ['cone', 'silence', 'magic damage', 'ap scaling', 'melee']);
newChamp.addAbility("Vorpal Spikes", 'E', ['autoattack effect', 'splash damage', 'magic damage', 'ap scaling']);
newChamp.addAbility("Feast", 'R', ['ultimate', 'true damage', 'ap scaling', 'targeted', 'melee', 'hp gain', 'stacks']);
allChampions.push(newChamp);






/* new champ tamplate

var newChamp = new Champion("");
newChamp.releaseDate = new Date(, , );
newChamp.addAbility("", 'Q', ['']);
newChamp.addAbility("", 'W', ['']);
newChamp.addAbility("", 'E', ['']);
newChamp.addAbility("", 'R', ['ultimate']);
allChampions.push(newChamp);

*/

