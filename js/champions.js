// TODO: include scaling ratios in abilities--how? (I think 2 is superior to 1)
//          1. have separate fields for each type of scaling all defaulted to 0.0?
//          2. have each abilities have an array of "scaling" type objects that has an enum-based key and a value
// TODO: include champion "innate" ability
// TODO: include general champion tags (e.g. 'ad carry', 'support, 'tank', etc)

// TODO: declare all champions as literals and then iterate through them all to generate their search strings


var allChampions = [];

var newChamp = new Champion("Alistar", new Date(2009, 2, 21));
newChamp.tags = ['support', 'tank', 'melee', 'pusher'];
newChamp.addAbility("Trample", 'I', ['innate', 'spell triggered', 'collision detection', 'magic damage', 'ap scaling']);
newChamp.addAbility("Pulverize", 'Q', ['knockup', 'melee', 'stun', 'aoe', 'ap scaling', 'magic damage']);
newChamp.addAbility("Headbutt", 'W', ['targeted', 'knockback', 'ap scaling', 'melee', 'magic damage']);
newChamp.addAbility("Triumphant Roar", 'E', ['heal', 'ap scaling']);
newChamp.addAbility("Unbreakable Will", 'R', ['clense', 'ad buff', 'damage reduction', 'ultimate']);
allChampions.push(newChamp);

var newChamp = new Champion("Annie", new Date(2009, 2, 21));
newChamp.tags = ['mage', 'ap carry', 'ranged'];
newChamp.addAbility("Pyromania", 'I', ['innate', 'spell triggered', 'counter', 'stun']);
newChamp.addAbility("Disintigrate", 'Q', ['targeted',  'ap scaling', 'magic damage']);
newChamp.addAbility("Incinerate", 'W', ['cone', 'ap scaling', 'melee', 'magic damage']);
newChamp.addAbility("Molten Shield", 'E', ['shield', 'armor buff', 'mr buff', 'ap scaling', 'self']);
newChamp.addAbility("Summon Tibbers", 'R', ['summon', 'targeted', 'aoe', 'magic damage', 'ultimate']);
allChampions.push(newChamp);

var newChamp = new Champion("Ashe", new Date(2009, 2, 21));
newChamp.tags = ['ad carry', 'ranged dps', 'ranged'];
newChamp.addAbility("Focus", 'I', ['innate', 'critical strike chance', 'autoattack']);
newChamp.addAbility("Frost Shot", 'Q', ['toggle', 'autoattack effect', 'slow']);
newChamp.addAbility("Volley", 'W', ['cone', 'slow', 'ad scaling',  'physical damage']);
newChamp.addAbility("Hawkshot", 'E', ['passive', 'gold per kill', 'reveal']);
newChamp.addAbility("Enchanted Crystal Arrow", 'R', ['skillshot', 'stun', 'aoe', 'slow', 'allChampions only', 'magic damage', 'ultimate', 'global', 'long range']);
allChampions.push(newChamp);

var newChamp = new Champion("Fiddlesticks", new Date(2009, 2, 21));
newChamp.tags = ['mage', 'jungle', 'ranged'];
newChamp.addAbility("Dread", 'I', ['innate', 'aoe', 'mr debuff']);
newChamp.addAbility("Terrify", 'Q', ['fear', 'targeted']);
newChamp.addAbility("Drain", 'W', ['channel', 'drain', 'ap scaling']);
newChamp.addAbility("Dark Wind", 'E', [ 'damage', 'ap scaling', 'bounce', 'silence']);
newChamp.addAbility("Crowstorm", 'R', ['blink', 'aoe', 'channel']);
allChampions.push(newChamp);

var newChamp = new Champion("Jax", new Date(2009, 2, 21));
newChamp.tags = ['fighter', 'melee', 'hybrid', 'melee dps'];
newChamp.addAbility("Relentless Assault", 'I', ['innate', 'autoattack', 'attack speed buff']);
newChamp.addAbility("Leap Strike", 'Q', ['jump',  'ap scaling', 'ad scaling', 'physical damage']);
newChamp.addAbility("Empower", 'W', ['autoattack buff', 'ap scaling']);
newChamp.addAbility("Counter Strike", 'E', ['dodge', 'stun', 'ad scaling', 'physical damage']);
newChamp.addAbility("Grandmaster's Might", 'R', ['passive', 'autoattack buff', 'magic damage', 'ap scaling', 'ad scaling', 'bonus ad', 'bonus ap']);
allChampions.push(newChamp);

var newChamp = new Champion("Kayle", new Date(2009, 2, 21));
newChamp.tags = ['fighter', 'support', 'hybrid'];
newChamp.addAbility("Holy Fervor", 'I', ['innate', 'autoattack effect', 'armor debuff', 'mr debuff', 'stacks']);
newChamp.addAbility("Reckoning", 'Q', ['targeted', 'magic damage', 'ap scaling', 'ad scaling', 'slow', 'damage amplification']);
newChamp.addAbility("Divine Blessing", 'W', ['heal', 'targeted', 'move speed buff', 'ap scaling']);
newChamp.addAbility("Righteous Fury", 'E', ['attack range increase', 'splash damage', 'magic damage', 'ad scaling']);
newChamp.addAbility("Intervention", 'R', ['ultimate', 'targeted',  'damage imune']);
allChampions.push(newChamp);

var newChamp = new Champion("Master Yi", new Date(2009, 2, 21));
newChamp.tags = ['melee dps', 'melee', 'ad carry'];
newChamp.addAbility("Strike Twice", 'I', ['innate', 'counter', 'autoattack']);
newChamp.addAbility("Alpha Strike", 'Q', ['targeted', 'multiple targets', 'magic damage', 'ap scaling', 'jump']);
newChamp.addAbility("Meditate", 'W', ['heal', 'channel', 'armor buff', 'ap scaling', 'mr buff']);
newChamp.addAbility("Wuju Style", 'E', ['passive', 'ad bonus']);
// TODO: stun and/or root immune too?
newChamp.addAbility("Highlander", 'R', ['ultimate', 'move speed buff', 'attack speed buff', 'slow immune']);
allChampions.push(newChamp);

var newChamp = new Champion("Morgana", new Date(2009, 2, 21));
newChamp.tags = ['mage', 'support', 'ranged'];
newChamp.addAbility("Soul Siphon", 'I', ['innate', 'spell vamp']);
newChamp.addAbility("Dark Binding", 'Q', ['skillshot', 'magic damage', 'ap scaling', 'root']);
newChamp.addAbility("Tormented Soil", 'W', ['aoe', 'magic damage', 'damage over time', 'ap scaling', 'mr debuff']);
newChamp.addAbility("Black Shield", 'E', ['magic shield', 'debuff immune', 'ap scaling']);
// TODO: aoe or some kind of "multiple targets"??
newChamp.addAbility("Soul Shackles", 'R', ['ultimate', 'slow', 'stun', 'magic damage', 'aoe', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Nunu", new Date(2009, 2, 21));
newChamp.tags = ['jungler', 'melee', 'fighter'];
newChamp.addAbility("Visionary", 'I', ['innate', 'autoattack', 'counter', 'free spell']);
newChamp.addAbility("Consume", 'Q', ['targeted', 'true damae', 'ap scaling', 'heal', 'minions only', 'melee']);
newChamp.addAbility("Blood Boil", 'W', ['allies only', 'targeted', 'attack speed buff', 'move speed buff']);
newChamp.addAbility("Ice Blast", 'E', ['magic damage', 'slow', 'ap scaling', 'targeted']);
newChamp.addAbility("Absolute Zero", 'R', ['ultimate', 'slow', 'magic damage', 'aoe', 'ap scaling', 'move speed debuff', 'attack speed debuff']);
allChampions.push(newChamp);

newChamp = new Champion("Ryze", new Date(2009, 2, 21));
newChamp.tags = ['mage', 'ap carry', 'ranged', 'burst'];
newChamp.addAbility("Arcane Mastery", 'I', ['innate', 'casting', 'cdr']);
newChamp.addAbility("Overload", 'Q', ['targeted', 'ap scaling', 'mana scaling']);
newChamp.addAbility("Rune Prison", 'W', ['root', 'targeted', 'ap scaling', 'mana scaling']);
newChamp.addAbility("Spell Flux", 'E', ['targeted', 'bounce', 'ap scaling', 'mr debuff']);
newChamp.addAbility("Desperate Power", 'R', ['spell vamp', 'AOE']);
allChampions.push(newChamp);

var newChamp = new Champion("Sion", new Date(2009, 2, 21));
newChamp.tags = ['fighter', 'melee'];
newChamp.addAbility("Feel No Pain", 'I', ['innate', 'physical damage reduction', 'autoattack', 'level scaling']);
newChamp.addAbility("Cryptic Gaze", 'Q', ['stun', 'targeted', 'ap scaling']);
newChamp.addAbility("Death's Caress", 'W', ['shield', 'aoe', 'ap scaling']);
newChamp.addAbility("Enrage", 'E', ['AD buff', 'permanent hp gain']);
newChamp.addAbility("Cannibalism", 'R', ['attack speed buff', 'lifesteal', 'aura', 'heal']);
allChampions.push(newChamp);

var newChamp = new Champion("Sivir", new Date(2009, 2, 21));
newChamp.tags = ['ad carry', 'ranged', 'ranged dps', 'pusher'];
newChamp.addAbility("Fleet of Feet", 'I', ['innate', 'move speed buff', 'autoattack', 'champion']);
newChamp.addAbility("Boomerang Blade", 'Q', ['skillshot',  'passthrough', 'ad scaling', 'ap scaling', 'physical damage']);
newChamp.addAbility("Riccochet", 'W', ['bounce', 'physical damage', 'autoattack effect']);
newChamp.addAbility("Spell Shield", 'E', ['block debuff']);
newChamp.addAbility("On The Hunt", 'R', ['ultimate', 'attack speed buff', 'move speed buff', 'aura']);
allChampions.push(newChamp);

var newChamp = new Champion("Soraka", new Date(2009, 2, 21));
newChamp.tags = ['support', 'ranged'];
newChamp.addAbility("Consecration", 'I', ['innate', 'aura', 'mr buff']);
newChamp.addAbility("Starcall", 'Q', [ 'aoe', 'ap scaling', 'magic damage', 'mr debuff']);
newChamp.addAbility("Astral Blessing", 'W', ['targeted', 'allies only', 'heal', 'armor buff', 'ap scaling']);
newChamp.addAbility("Infuse", 'E', ['silence', 'restore mana', 'ap scaling', 'magic damage']);
newChamp.addAbility("Wish", 'R', ['ultimate', 'heal', 'global', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Teemo", new Date(2009, 2, 21));
newChamp.tags = ['ranged', 'yordle'];
newChamp.addAbility("Camouflage", 'I', ['innate', 'invisible', 'inaction', 'attack speed buff']);
newChamp.addAbility("Blinding Dart", 'Q', [ 'blind', 'ap scaling', 'magic damage']);
newChamp.addAbility("Move Quick", 'W', ['passive', 'move speed buff']);
newChamp.addAbility("Toxic Shot", 'E', ['passive', 'damage over time', 'ap scaling', 'magic damage', 'autoattack effect']);
newChamp.addAbility("Noxious Trap", 'R', ['ultimate', 'mushroom', 'placement', 'ap scaling', 'trap', 'magic damage', 'damage over time', 'slow', 'reveal', 'melee']);
allChampions.push(newChamp);

var newChamp = new Champion("Tristana", new Date(2009, 2, 21));
newChamp.tags = ['ad carry', 'ranged dps', 'ranged', 'yordle'];
newChamp.addAbility("Draw a Bead", 'I', ['innate', 'autoattack', 'attack range', 'level scaling']);
newChamp.addAbility("Rapid Fire", 'Q', ['active', 'attack speed buff']);
newChamp.addAbility("Rocket Jump", 'W', ['targeted', 'magic damage', 'ap scaling', 'slow', 'aoe', 'jump']);
newChamp.addAbility("Explosive Shot", 'E', ['passive', 'splash damage', 'autoattack effect', 'ap scaling', 'magic damage', 'targeted', 'enemies only', 'damage over time', 'hp regen debuff']);
newChamp.addAbility("Buster Shot", 'R', ['ultimate', 'targeted', 'enemies only', 'ap scaling', 'magic damage', 'knockback']);
allChampions.push(newChamp);

var newChamp = new Champion("Twisted Fate", new Date(2009, 2, 21));
newChamp.tags = ['assassin', 'ranged'];
newChamp.addAbility("Loaded Dice", 'I', ['innate', 'gold', 'kill', 'inactive while dead', 'team']);
newChamp.addAbility("Wild Cards", 'Q', [ 'cone', 'ap scaling', 'magic damage', 'passthrough', 'skillshot']);
newChamp.addAbility("Pick a Card", 'W', ['targeted', 'autoattack effect', 'stun', 'slow', 'ap scaling', 'restore mana', 'aoe', 'ad scaling', 'magic damage']);
newChamp.addAbility("Stacked Deck", 'E', ['passive', 'attack speed buff', 'cdr', 'ap scaling', 'magic damage', 'autoattack effect']);
newChamp.addAbility("Destiny//Gate", 'R', ['ultimate', 'reveal', 'teleport', 'long range', 'channel']);
allChampions.push(newChamp);

var newChamp = new Champion("Warwick", new Date(2009, 2, 21));
newChamp.tags = ['jungler', 'fighter', 'melee'];
newChamp.addAbility("Eternal Thirst", 'I', ['innate', 'autoattack', 'heal', 'stacks']);
newChamp.addAbility("Hungering Strike", 'Q', ['melee', 'magic damage', 'ap scaling', 'heal', 'targeted']);
newChamp.addAbility("Hunters Call", 'W', ['aoe', 'allies only', 'attack speed buff']);
newChamp.addAbility("Blood Scent", 'E', ['reveal', 'aoe', 'move speed buff', 'toggle']);
newChamp.addAbility("Infinite Duress", 'R', ['ultimate', 'jump', 'suppress', 'magic damage', 'lifesteal', 'ad scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Singed", new Date(2004, 4, 18));
newChamp.tags = ['melee', 'fighter', 'tank'];
newChamp.addAbility("Empowered Bulwark", 'I', ['innate', 'mana', 'bonus hp']);
newChamp.addAbility("Poison Trail", 'Q', ['damage over time', 'aoe', 'trail', 'magic damage', 'ap scaling']);
newChamp.addAbility("Mega Adhesive", 'W', ['aoe',  'slow']);
newChamp.addAbility("Fling", 'E', ['targeted', 'toss', 'stun', 'magic damage', 'ap scaling', 'melee']);
newChamp.addAbility("Insanity Potion", 'R', ['ultimate', 'ap buff', 'armor buff', 'mr buff', 'hp regen buff', 'move speed buff', 'mana regen buff', 'cc reduction']);
allChampions.push(newChamp);

var newChamp = new Champion("Zilean", new Date(2009, 4, 18));
newChamp.tags = ['suport', 'mage', 'ranged'];
newChamp.addAbility("Heightened Learning", 'I', ['innate', 'experience', 'inactive while dead', 'team']);
newChamp.addAbility("Time Bomb", 'Q', ['targeted', 'aoe', 'delayed', 'magic damage', 'ap scaling', 'triggered']);
newChamp.addAbility("Rewind", 'W', ['active', 'cdr']);
newChamp.addAbility("Time Warp", 'E', ['targeted', 'slow', 'move speed buff']);
newChamp.addAbility("Chrono Shift", 'R', ['ultimate', 'targeted', 'resurrection', 'ap scaling', 'hp regain']);
allChampions.push(newChamp);

var newChamp = new Champion("Evelynn", new Date(2009, 5, 1));
newChamp.tags = ['assassin', 'melee'];
newChamp.addAbility("Determined Killer", 'I', ['innate', 'damage reduction', 'enemy minions']);
newChamp.addAbility("Hate Spike", 'Q', ['targeted', 'magic damage', 'ap scaling', 'melee']);
newChamp.addAbility("Shadow Walk", 'W', ['invisible', 'autoattack effect', 'slow']);
newChamp.addAbility("Ragave", 'E', ['targeted', 'armor debuff', 'mr debuff', 'magic damage', 'ap scaling']);
newChamp.addAbility("Malice and Spite", 'R', ['ultimate', 'hp regain', 'move speed buff', 'attack speed buff']);
allChampions.push(newChamp);

var newChamp = new Champion("Tryndamere", new Date(2009, 5, 1));
newChamp.tags = ['fighter', 'melee dps', 'melee', 'ad carry', 'no mana', 'rage'];
newChamp.addAbility("Battle Fury", 'I', ['innate', 'fury', 'critical strike chance']);
newChamp.addAbility("Bloodlust", 'Q', ['ad bonus', 'heal', 'fury']);
newChamp.addAbility("Mocking shout", 'W', ['ad debuff', 'slow', 'aoe']);
newChamp.addAbility("Spinning Slash", 'E', ['dash', 'ad scaling', 'ap scaling', 'physical damage']);
newChamp.addAbility("Undying Rage", 'R', ['ultimate', 'damage immune', 'fury']);
allChampions.push(newChamp);

var newChamp = new Champion("Twitch", new Date(2009, 5, 1));
newChamp.tags = ['ranged', 'ranged dps'];
newChamp.addAbility("Deadly Venom", 'I', ['innate', 'true damage', 'stacks', 'damage over time', 'autoattack effect']);
newChamp.addAbility("Ambush", 'Q', ['invisible', 'attack speed buff']);
newChamp.addAbility("Debilitating Posion", 'W', ['slow', 'aoe']);
newChamp.addAbility("Expunge", 'E', ['aoe', 'magic damage', 'ap scaling']);
newChamp.addAbility("Spray and Pray", 'R', ['ultimate', 'attack range buff', 'attack speed buff', 'ad buff', 'passthrough']);
allChampions.push(newChamp);

var newChamp = new Champion("Karthus", new Date(2009, 6, 12));
newChamp.tags = ['mage', 'ap carry'];
newChamp.addAbility("Death Defied", 'I', ['innate', 'ghost', 'free spell', 'upon dying']);
newChamp.addAbility("Lay Waste", 'Q', ['trap', 'splash damage', 'magic damage', 'ap scaling']);
newChamp.addAbility("Wall of Pain", 'W', ['slow', 'aoe', 'armor debuff', 'mr debuff']);
newChamp.addAbility("Defile", 'E', ['aoe', 'mana regain', 'magic damage', 'ap scaling']);
newChamp.addAbility("Requiem", 'R', ['ultimate', 'global', 'channel', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Amumu", new Date(2009, 6, 26));
newChamp.tags = ['tank', 'melee'];
newChamp.addAbility("Cursed Touch", 'I', ['innate', 'autoattack effect', 'mr debuff']);
newChamp.addAbility("Bandage Toss", 'Q', ['skillshot', 'pull', 'magic damage', 'ap scaling', 'stun']);
newChamp.addAbility("Despair", 'W', ['aoe', 'magic damage', 'percent max health', 'ap scaling', 'melee']);
newChamp.addAbility("Tantrum", 'E', ['physical damage reduction', 'aoe', 'magic damage', 'ap scaling', 'melee']);
newChamp.addAbility("Curse of the Sad Mummy", 'R', ['ultimate', 'aoe', 'root', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Cho'Gath", new Date(2009, 6, 26));
newChamp.tags = ['fighter', 'mage', 'melee', 'tank'];
newChamp.addAbility("Carnivore", 'I', ['innate', 'kill', 'heal', 'restore mana', 'level scaling']);
newChamp.addAbility("Rupture", 'Q', ['knockup', 'slow', 'aoe',  'magic damage', 'ap scaling', 'delayed']);
newChamp.addAbility("Feral Scream", 'W', ['cone', 'silence', 'magic damage', 'ap scaling', 'melee']);
newChamp.addAbility("Vorpal Spikes", 'E', ['autoattack effect', 'splash damage', 'magic damage', 'ap scaling', 'toggle']);
newChamp.addAbility("Feast", 'R', ['ultimate', 'true damage', 'ap scaling', 'targeted', 'melee', 'hp gain', 'stacks']);
allChampions.push(newChamp);

var newChamp = new Champion("Anivia", new Date(2009, 7, 10));
newChamp.tags = ['mage', 'ranged'];
newChamp.addAbility("Rebirth", 'I', ['innate', 'transform', 'upon dying', 'mr', 'armor', 'resurrection']);
newChamp.addAbility("Flash Frost", 'Q', ['skillshot', 'stun', 'aoe', 'chilled', 'magic damage', 'ap scaling', 'triggered']);
newChamp.addAbility("Crystalize", 'W', ['terrain']);
newChamp.addAbility("Frostbite", 'E', ['tageted', 'chilled', 'magic damage', 'ap scaling']);
newChamp.addAbility("Glacial Storm", 'R', ['ultimate', 'aoe', 'chilled', 'slow', 'attack speed debuff', 'toggle']);
allChampions.push(newChamp);

var newChamp = new Champion("Rammus", new Date(2009, 7, 10));
newChamp.tags = ['melee', 'tank'];
newChamp.addAbility("Spike Shell", 'I', ['innate', 'armor', 'bonus ad', 'armor scaling']);
newChamp.addAbility("Powerball", 'Q', ['move speed buff', 'slow', 'knockback', 'aoe', 'magic damage', 'ap scaling']);
newChamp.addAbility("Defensive Ball Curl", 'W', ['shield', 'armor buff', 'mr buff', 'return damage', 'magic damage', 'armor scaling']);
newChamp.addAbility("Puncturing Taunt", 'E', ['taunt', 'targeted']);
newChamp.addAbility("Tremores", 'R', ['ultimate', 'aoe', 'slow', 'magic damage', 'structures', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Veigar", new Date(2009, 7, 24));
newChamp.tags = ['mage', 'ap carry', 'ranged', 'burst', 'yordle'];
newChamp.addAbility("Equilibrium", 'I', ['innate', 'mana regen', 'missing mana']);
newChamp.addAbility("Baleful Strike", 'Q', ['targeted', 'permanent ap gain', 'magic damage', 'ap scaling']);
newChamp.addAbility("Dark Matter", 'W', ['aoe', 'magic damage', 'ap scaling', 'delayed']);
newChamp.addAbility("Event Horizon", 'E', ['stun', 'aoe']);
newChamp.addAbility("Primordial Burst", 'R', ['ultimate', 'targeted', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Kassadin", new Date(2009, 8, 7));
newChamp.tags = ['assassin', 'melee', 'anti-mage', 'mage'];
newChamp.addAbility("Void Stone", 'I', ['innate', 'magic damage reduction', 'attack speed buff']);
newChamp.addAbility("Null Sphere", 'Q', ['targeted', 'silence', 'magic damage', 'ap scaling']);
newChamp.addAbility("Nether Blade", 'W', ['toggle', 'mana regain', 'magic damage', 'ap scaling', 'auto attack effect']);
newChamp.addAbility("Force Pulse", 'E', ['slow', 'cone', 'magic damage', 'ap scaling']);
newChamp.addAbility("Riftwalk", 'R', ['ultimate', 'blink', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Gangplank", new Date(2009, 8, 19));
newChamp.tags = ['fighter', 'melee', 'pirate'];
newChamp.addAbility("Grog Soaked Blade", 'I', ['innate', 'autoattack effect', 'slow', 'magic damage', 'damage over time', 'stacks', 'level scaling']);
newChamp.addAbility("Parrrley", 'Q', ['targeted', 'physical damage', 'ad scaling', 'bonus gold', 'on hit effects']);
newChamp.addAbility("Remove Scurvey", 'W', ['clense', 'heal', 'remove cc', 'ap scaling']);
newChamp.addAbility("Raise Moral", 'E', ['move speed buff', 'ad buff', 'aoe']);
newChamp.addAbility("Cannon Barrage", 'R', ['ultimate', 'global', 'slow', 'magic damage', 'ap scaling', 'aoe']);
allChampions.push(newChamp);

var newChamp = new Champion("Taric", new Date(2009, 8, 19));
newChamp.tags = ['support', 'melee'];
newChamp.addAbility("Gemcraft", 'I', ['innate', 'autoattack effect', 'restore mana']);
newChamp.addAbility("Imbue", 'Q', ['heal, targeted', 'ap scaling', 'autoattack']);
newChamp.addAbility("Shatter", 'W', ['aura', 'armor', 'aoe', 'magic damage', 'ap scaling', 'armor reduction']);
newChamp.addAbility("Dazzle", 'E', ['stun', 'targeted', 'magic damage', 'ap scaling']);
newChamp.addAbility("Radiance", 'R', ['ultimate', 'ad buff', 'ap buff', 'aura', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Blitzcrank", new Date(2009, 9, 2));
newChamp.tags = ['fighter', 'melee', 'robot'];
newChamp.addAbility("Mana Barrier", 'I', ['innate', 'shield', 'low hp', 'mana scaling']);
newChamp.addAbility("Rocket Grab", 'Q', ['hook', 'stun', 'magic damage', 'ap scaling', 'skillshot']);
newChamp.addAbility("Overdrive", 'W', ['move speed buff', 'attack speed buff']);
newChamp.addAbility("Power Fist", 'E', ['autoattack effect', 'knockup', 'ad buff']);
newChamp.addAbility("Static Field", 'R', ['ultimate', 'silence', 'aoe', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Dr. Mundo", new Date(2009, 9, 2));
newChamp.tags = ['fighter', 'melee'];
newChamp.addAbility("Adrenaline Rush", 'I', ['innate', 'bonus hp regen', 'max hp scaling']);
newChamp.addAbility("Infected Cleaver", 'Q', ['skillshot', 'slow', 'magic damage', 'hp cost', 'missing hp scaling']);
newChamp.addAbility("Burning Agony", 'W', ['cc reduction', 'aoe', 'magic damage', 'ap scaling', 'hp cost']);
newChamp.addAbility("Masochism", 'E', ['ad buff', 'missing hp scaling']);
newChamp.addAbility("Sadism", 'R', ['ultimate', 'hp regen buff', 'move speed buff', 'hp cost']);
allChampions.push(newChamp);

var newChamp = new Champion("Janna", new Date(2009, 9, 2));
newChamp.tags = ['suppoer', 'mage', 'ranged'];
newChamp.addAbility("Tailwind", 'I', ['innate', 'move speed buff', 'team', 'inactive while dead']);
newChamp.addAbility("Howling Gale", 'Q', ['knockup', 'skillshot', 'delayed', 'triggered', 'magic damage', 'ap scaling', 'collision detection']);
newChamp.addAbility("Zephyr", 'W', ['targeted', 'slow', 'move speed buff', 'magic damage', 'ap scaling']);
newChamp.addAbility("Eye of the Storm", 'E', ['shield', 'structures', 'targeted', 'ad buff', 'ap scaling']);
newChamp.addAbility("Monsoon", 'R', ['ultimate', 'knockback', 'channel', 'heal', 'aoe', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Malphite", new Date(2009, 9, 2));
newChamp.tags = ['fighter', 'melee'];
newChamp.addAbility("Granite Shield", 'I', ['innate', 'shield', 'out of combat', 'max hp scaling']);
newChamp.addAbility("Seismic Shard", 'Q', ['targeted', 'slow', 'move speed buff', 'magic damage', 'ap scaling']);
newChamp.addAbility("Brutal Strikes", 'W', ['autoattack effect', 'splash damage', 'ad buff', 'armor buff']);
newChamp.addAbility("Ground Slam", 'E', ['aoe', 'magic damage', 'attack speed debuff', 'armor scaling']);
newChamp.addAbility("Unstoppable Forge", 'R', ['ultimate', 'skillshot', 'knockup', 'stun', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Corki", new Date(2009, 9, 19));
newChamp.tags = ['ad carry', 'ranged', 'ranged dps'];
newChamp.addAbility("Hextech Shrapnel Shells", 'I', ['innate', 'autoattack effect', 'true damage', 'ad scaling']);
newChamp.addAbility("Phosphorus Bomb", 'Q', ['skillshot', 'reveal', 'aoe', 'magic damamge', 'ap scaling']);
newChamp.addAbility("Valkyrie", 'W', ['jump', 'aoe', 'magic damage', 'ap scaling']);
newChamp.addAbility("Gatling Gun", 'E', ['armor reduction', 'physical damage', 'ad scaling']);
newChamp.addAbility("Missile Barrage", 'R', ['ultimate', 'skillshot', 'aoe', 'splash damage', 'magic damage', 'ad scaling', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Katarina", new Date(2009, 9, 19));
newChamp.tags = ['assassin', 'melee', 'hybrid', 'no mana'];
newChamp.addAbility("Voracity", 'I', ['innate', 'kill', 'assist', 'cdr', 'bonus gold']);
newChamp.addAbility("Bouncing Blade", 'Q', ['targeted', 'bounce', 'magic damage', 'ad scaling', 'ap scaling']);
newChamp.addAbility("Killer Instincts", 'W', ['autoattack buff', 'ability buff', 'healing reduction', 'damage reduction']);
newChamp.addAbility("Shunpo", 'E', ['targeted', 'blink', 'magic damage', 'ap scaling']);
newChamp.addAbility("Death Lotus", 'R', ['ultimate', 'channel', 'multiple targets', 'ap scaling', 'ad scaling', 'magic damage']);
allChampions.push(newChamp);

var newChamp = new Champion("Nasus", new Date(2009, 10, 1));
newChamp.tags = ['fighter', 'tank', 'pusher', 'melee'];
newChamp.addAbility("Soul Eater", 'I', ['innate', 'lifesteal', 'level scaling']);
newChamp.addAbility("Siphoning Strike", 'Q', ['autoattack effect', 'permanent gain', 'physical damage', 'ad scaling']);
newChamp.addAbility("Wither", 'W', ['slow', 'attack speed debuff', 'targeted']);
newChamp.addAbility("Spirit Fire", 'E', ['aoe', 'damage over time', 'armor reduction', 'magic damage', 'ap scaling']);
newChamp.addAbility("Fury of the Sands", 'R', ['ultimate', 'hp buff', 'drain', 'aoe', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Heimerdinger", new Date(2009, 10, 10));
newChamp.tags = ['mage', 'yordle', 'pusher', 'ap carry', 'ranged'];
newChamp.addAbility("Techmaturgical Repair Bots", 'I', ['innate', 'aura', 'hp regen buff', 'structures']);
newChamp.addAbility("H-28G Evolution Turret", 'Q', ['placement', 'armor debuff', 'mr debuff', 'splash damage', 'magic damage', 'ap scaling']);
newChamp.addAbility("Hextech Microrockets", 'W', ['auto-targeted', 'magic damamge', 'ap scaling']);
newChamp.addAbility("CH-1 Concussion Grenade", 'E', ['skillshot', 'aoe', 'blind', 'stun', 'structures', 'magic damage', 'ap scaling']);
newChamp.addAbility("UPGRADE!!!", 'R', ['ultimate', 'cdr', 'ability buff']);
allChampions.push(newChamp);

var newChamp = new Champion("Shaco", new Date(2009, 10, 10));
newChamp.tags = ['assassin', 'melee', 'melee dps'];
newChamp.addAbility("Backstab", 'I', ['innate', 'autoattack buff', 'behind', 'ability buff']);
newChamp.addAbility("Deceive", 'Q', ['blink', 'invisible', 'autoattack effect', 'ad scaling']);
newChamp.addAbility("Jack in the Box", 'W', ['placement', 'trap', 'fear', 'magic damage', 'ap scaling']);
newChamp.addAbility("Two-Shiv Poison", 'E', ['slow', 'autoattack effect', 'targeted', 'magic damage', 'ap scaling', 'ad scaling']);
newChamp.addAbility("Hallucinate", 'R', ['ultimate', 'invisible', 'summon', 'magic damamge', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Udyr", new Date(2009, 12, 2));
newChamp.tags = ['jungler', 'fighter', 'melee'];
newChamp.addAbility("Monkey's Agility", 'I', ['innate', 'attack speed buff', 'stacks', 'spell triggered']);
newChamp.addAbility("Tiger Stance", 'Q', ['autoattack effect', 'attack speed buff', 'damage over time', 'magic damage', 'ad scaling']);
newChamp.addAbility("Turtle Stance", 'W', ['autoattack effect', 'shield', 'lifesteal', 'restore mana', 'ap scaling']);
newChamp.addAbility("Bear Stance", 'E', ['autoattack effect', 'move speed buff', 'stun']);
newChamp.addAbility("Phoenix Stance", 'R', ['aoe', 'autoattack effect', 'ap buff', 'ad buff', 'magic damage', 'ap scaling']);

var newChamp = new Champion("Nidalee", new Date(2009, 12, 9));
newChamp.tags = ['pusher', 'support'];
newChamp.addAbility("Prowl", 'I', ['innate', 'move speed buff']);
newChamp.addAbility("Javelin Toss", 'Q', ['skillshot', 'magic damage', 'ap scaling']);
newChamp.addAbility("Takedown", 'Q', ['autoattack buff', 'pysical damage', 'ad scaling', 'missing hp scaling']);
newChamp.addAbility("Bushwhack", 'W', ['trap', 'placement', 'magic damage', 'reveal', 'armor debuff', 'mr debuff', 'ap scaling']);
newChamp.addAbility("Pounce", 'W', ['jump', 'aoe', 'magic damage', 'ap scaling']);
newChamp.addAbility("Primal Surge", 'E', ['heal', 'attack speed buff', 'ap scaling']);
newChamp.addAbility("Swipe", 'E', ['cone', 'magic damage', 'ap scaling']);
newChamp.addAbility("Aspect of the cougar", 'R', ['ultimate', 'transform', 'bonus armor', 'bonus mr', 'bonus move speed']);
allChampions.push(newChamp);

var newChamp = new Champion("Poppy", new Date(2010, 1, 13));
newChamp.tags = ['assassin', 'melee', 'fighter', 'yordle'];
newChamp.addAbility("Valiant Fighter", 'I', ['innate', 'damage reduction', 'structures']);
newChamp.addAbility("Devastating Blow", 'Q', ['autoattack buff', 'max hp scaling', 'magic damage', 'ap scaling']);
newChamp.addAbility("Paragon of Demacia", 'W', ['passive', 'armor buff', 'ad buff', 'stacks', 'move speed buff']);
newChamp.addAbility("Heroic Charge", 'E', ['tackle', 'terrain', 'stun', 'magic damage', 'targeted', 'ap scaling', 'charge']);
newChamp.addAbility("Diplomatic Immunity", 'R', ['ultimate', 'targeted', 'damage amplification', 'damage immune', 'cc imune', 'debuff immune', 'tower']);
allChampions.push(newChamp);

var newChamp = new Champion("Gragas", new Date(2010, 2, 2));
newChamp.tags = ['fighter', 'melee'];
newChamp.addAbility("Happy Hour", 'I', ['innate', 'spell triggered', 'heal', 'mac hp scaling']);
newChamp.addAbility("Barrel Roll", 'Q', ['skillshot', 'triggered', 'attack speed debuff', 'magic damage', 'ap scaling']);
newChamp.addAbility("Drunken Rage", 'W', ['channel', 'restore mana', 'ad buff', 'damage reduction']);
newChamp.addAbility("Body Slam", 'E', ['skillshot', 'charge', 'aoe', 'magic damage', 'ap scaling', 'ad scaling', 'slow']);
newChamp.addAbility("Explosive Cask", 'R', ['ultimate', 'targeted', 'knockback', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Pantheon", new Date(2010, 2, 2));
newChamp.tags = ['figher', 'melee', 'melee dps'];
newChamp.addAbility("Aegis Protection", 'I', ['innate', 'counter', 'autoattack', 'block']);
newChamp.addAbility("Speak Shot", 'Q', ['targeted', 'physical damage', 'ad scaling']);
newChamp.addAbility("Aegis of Zeonia", 'W', ['jump', 'stun', 'targeted', 'magic damage', 'ap scaling']);
newChamp.addAbility("Heartseeker Strike", 'E', ['cone', 'channel', 'passive', 'critical strike change', 'physical damage', 'ad scaling']);
newChamp.addAbility("Grand Skyfall", 'R', ['ultimate', 'channel', 'long range', 'teleport', 'aoe', 'magic damage', 'slow', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Mordekaiser", new Date(2010, 2, 24));
newChamp.tags = ['fighter', 'melee', 'mage', 'pusher', 'no mana'];
newChamp.addAbility("Iron Man", 'I', ['innate', 'shield', 'spell damage scaling', 'level scaling', 'decay over time']);
newChamp.addAbility("Mace of Spades", 'Q', ['autoattack buff', 'multiple targets', 'magic damage', 'ap scaling', 'ad scaling']);
newChamp.addAbility("Creeping Death", 'W', ['shield', 'aoe', 'mr buff', 'armor buff', 'damage over time', 'ap scaling']);
newChamp.addAbility("Siphon of Destruction", 'E', ['cone', 'magic damage', 'ap scaling']);
newChamp.addAbility("Children of the Grave", 'R', ['ultimate', 'targeted', 'drain', 'ghost', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Ezreal", new Date(2010, 3, 16));
newChamp.tags = ['ranged'];
newChamp.addAbility("Rising spell Force", 'I', ['innate', 'ad buff', 'stacks', 'spell triggered']);
newChamp.addAbility("Mystic Shot", 'Q', ['skillshot', 'on hit effects', 'cdr', 'physical damage', 'ad scaling', 'ap scaling']);
newChamp.addAbility("Essence Flux", 'W', ['skillshot', 'passthrough', 'attack speed debuff', 'attack speed buff', 'magic damage', 'ap scaling']);
newChamp.addAbility("Arcane Shift", 'E', ['blink', 'magic damage', 'ap scaling']);
newChamp.addAbility("Trueshot Barrage", 'R', ['ultimate', 'channel', 'passthrough', 'long range', 'global', 'magic damage', 'ad scaling', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Shen", new Date(2010, 3, 24));
newChamp.tags = ['tank', 'support', 'ninja', 'melee', 'energy', 'no mana'];
newChamp.addAbility("Ki Strike", 'I', ['innate', 'autoattack buff', 'magic damage', 'level scaling', 'autoattack']);
newChamp.addAbility("Vorpal Blade", 'Q', ['targeted', 'life-tap', 'heal', 'magic damage', 'ap scaling', 'mark']);
newChamp.addAbility("Feint", 'W', ['shield', 'ap scaling']);
newChamp.addAbility("Shadow Dash", 'E', ['dash', 'taunt', 'restore energy']);
newChamp.addAbility("Stand United", 'R', ['ultimate', 'teleport', 'channel', 'shield', 'global', 'targeted']);
allChampions.push(newChamp);

var newChamp = new Champion("Kennen", new Date(2010, 4, 8));
newChamp.tags = ['mage', 'ranged', 'ninja', 'energy'];
newChamp.addAbility("Mark of the Storm", 'I', ['innate', 'mark', 'stun', 'spell triggered', 'energy']);
newChamp.addAbility("Thundering Shuriken", 'Q', ['skillshot', 'magic damage', 'ap scaling']);
newChamp.addAbility("Electrical Surge", 'W', ['passive', 'ad scaling', 'multiple targets', 'magic damage', 'ap scaling']);
newChamp.addAbility("Lightning Rush", 'E', ['move speed buff', 'transform', 'collision detection', 'energy', 'magic damage', 'armor buff', 'mr buff', 'ap scaling']);
newChamp.addAbility("Slicing Maelstrom", 'R', ['ultimate', 'aoe', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Garen", new Date(2010, 4, 27));
newChamp.tags = ['tank', 'fighter', 'melee', 'no mana'];
newChamp.addAbility("Perseverance", 'I', ['innate', 'heal', 'max hp scaling', 'takes no damage']);
newChamp.addAbility("Decisive Strike", 'Q', ['move speed buff', 'autoattack buff', 'physical damage', 'ad scaling', 'silence']);
newChamp.addAbility("Courage", 'W', ['passive', 'permanent armor increas', 'permanent mr increase', 'shield', 'kill']);
newChamp.addAbility("Judgement", 'E', ['spin', 'remove slow', 'aoe', 'physical damage', 'damage over time', 'ad scaling']);
newChamp.addAbility("Damacian Justice", 'R', ['ultimate', 'targeted', 'magic damage', 'missing hp scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Akali", new Date(2010, 5, 11));
newChamp.tags = ['assasin', 'melee', 'ninja', 'energy', 'no mana', 'melee dps'];
newChamp.addAbility("Twin Disciplines", 'I', ['innate', 'autoattack bonus', 'bonus magic damage', 'ap scaling', 'structures', 'towers', 'spell vamp', 'ad scaling']);
newChamp.addAbility("Mark of the Assasin", 'Q', ['targeted', 'mark', 'autoattack triggered', 'magic damage', 'restore energy', 'ap scaling']);
newChamp.addAbility("Twilight Shroud", 'W', ['invisible', 'aoe', 'armor buff', 'mr buff', 'slow']);
newChamp.addAbility("Crescent Slash", 'E', ['aoe', 'physical damage', 'ad scaling', 'ap scaling']);
newChamp.addAbility("Shadow Dance", 'R', ['ultimate', 'targeted', 'blink', 'kill', 'assist', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Malzahar", new Date(2010, 6, 1));
newChamp.tags = ['mage', 'ranged'];
newChamp.addAbility("Summon Voidling", 'I', ['innate', 'summon', 'spell trigger', 'ad scaling', 'level scaling']);
newChamp.addAbility("Call of the Void", 'Q', ['aoe', 'silence', 'delay', 'maigic damage', 'ap scaling']);
newChamp.addAbility("Null Zone", 'W', ['aoe', 'magic damage', 'ap scaling', 'max hp']);
newChamp.addAbility("Malific Vision", 'E', ['damage over time', 'restore mana', 'magic damage', 'ap scaling']);
newChamp.addAbility("Nether Grasp", 'R', ['ultimate', 'channel', 'suppress', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Olaf", new Date(2010, 6, 9));
newChamp.tags = ['melee', 'melee dps', 'fighter'];
newChamp.addAbility("Berseker Rage", 'I', ['innate', 'missing hp missing', 'attack speed bonus']);
newChamp.addAbility("Undertow", 'Q', ['skillshot', 'passthrough', 'slow', 'physical damage', 'ad scaling']);
newChamp.addAbility("Vicious Strikes", 'W', ['ad buff', 'life steal', 'spell vamp', 'autoattack buff', 'missing hp scaling']);
newChamp.addAbility("Reckless Swing", 'E', ['true damage', 'autoattack buff']);
newChamp.addAbility("Ragnarok", 'R', ['ultimate', 'passive', 'armor penetration bonus', 'remove cc', 'disable immune', 'reduce damage']);
allChampions.push(newChamp);

var newChamp = new Champion("Kog'Maw", new Date(2010, 6, 24));
newChamp.tags = ['ad carry', 'ranged', 'ranged dps'];
newChamp.addAbility("Icathian Surprise", 'I', ['innate', 'move speed buff', 'true damage', 'aoe', 'after death']);
newChamp.addAbility("Caustic Spittle", 'Q', ['passive', 'attack speed bonus', 'targeted', 'armor debuff', 'mr debuff', 'magic damage', 'ap scaling']);
newChamp.addAbility("Bio-Arcane Barrage", 'W', ['autoattack buff', 'attack range', 'autoattack effect', 'magic damage', 'max hp scaling', 'ap scaling']);
newChamp.addAbility("Void Oooze", 'E', ['skillshot', 'slow', 'aoe'. 'passthrough']);
newChamp.addAbility("Living Artillery", 'R', ['ultimate', 'skillshot', 'aoe', 'delay', 'ad scaling', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Xin Zhao", new Date(2010, 7, 13));
newChamp.tags = ['fighter', 'melee', 'melee dps'];
newChamp.addAbility("Tireless Warrior", 'I', ['innate', 'lifesteal', 'autoattack effect', 'level scaling']);
newChamp.addAbility("Three Talon Strike", 'Q', ['autoattack buff', 'knockup', 'physical damage', 'ad scaling']);
newChamp.addAbility("Battle Cry", 'W', ['passive', 'attack speed bonus', 'cdr', 'autoattack effect']);
newChamp.addAbility("Audacious Charge", 'E', ['targeted', 'slow', 'aoe', 'jump', 'magic damage', 'ap scaling']);
newChamp.addAbility("Crescent Sweep", 'R', ['ultimate', 'aoe', 'multiple targets', 'current hp scaling', 'armor buff', 'mr buff']);
allChampions.push(newChamp);

var newChamp = new Champion("Vladimir", new Date(2010, 7, 27));
newChamp.tags = ['mage', 'fighter', 'ranged', 'sustain'];
newChamp.addAbility("Crimson Pact", 'I', ['innate', 'bonus hp', 'bonus ap', 'ap scaling', 'hp scaling']);
newChamp.addAbility("Transfusion", 'Q', ['drain', 'targeted', 'no cost', 'magic damage', 'ap scaling']);
newChamp.addAbility("Sanguine Pool", 'W', ['transform', 'untargetable', 'aoe', 'slow', 'heal', 'magic damage', 'hp scaling']);
newChamp.addAbility("Tides of Blood", 'E', ['aoe', 'stacks', 'spell buff', 'magic damage', 'ap scaling']);
newChamp.addAbility("Hemoplague", 'R', ['ultimate', 'aoe', 'increased damage', 'delayed', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Gallio", new Date(2010, 8, 10));
newChamp.tags = ['tank', 'melee', 'support'];
newChamp.addAbility("Runic Skin", 'I', ['innate', 'bonus ap', 'mr scaling']);
newChamp.addAbility("Resolute Smite", 'Q', ['skillshot', 'aoe', 'slow', 'magic damage', 'ap scaling']);
newChamp.addAbility("Bulwark", 'W', ['shield', 'targeted', 'armor buff', 'mr buff', 'heal', 'ap scaling']);
newChamp.addAbility("Righteous Gust", 'E', ['skillshot', 'passthrough', 'aoe', 'move speed buff', 'magic damage', 'ap scaling']);
newChamp.addAbility("Idol of Durand", 'R', ['ultimate', 'channel', 'taunt', 'aoe', 'reduced damage', 'magic damage', 'ap scaling']);
allChampions.push(newChamp);

var newChamp = new Champion("Urgot", new Date(2010, 8, 24));
newChamp.tags = ['fighter', 'ranged', 'ranged dps'];
newChamp.addAbility("Zaun-Touched Bolt Augmenter", 'I', ['innate', 'autoattack effect', 'spell bonus', 'reduce damage dealt']);
newChamp.addAbility("Acid Hunter", 'Q', ['skillshot', 'physical damage', 'ad scaling']);
newChamp.addAbility("Terror Capacitor", 'W', ['shield', 'spell buff', 'slow', 'ap scaling']);
newChamp.addAbility("Noxian Corrosive Charge", 'E', ['skillshot', 'aoe', 'damage over time', 'physical damage', 'ad scaling']);
newChamp.addAbility("Hyper-Kinetic Position Reverser", 'R', ['ultimate', 'targeted', 'suppress', 'channel', 'teleport', 'slow', 'armor buff', 'mr buff']);
allChampions.push(newChamp);

var newChamp = new Champion("Miss fortune", new Date(2010, 9, 8));
newChamp.tags = ['ranged', 'ranged dps', 'pirate', 'ad carry'];
newChamp.addAbility("Strut", 'I', ['innate', 'move speed buff', 'taes no damage']);
newChamp.addAbility("Double Up", 'Q', ['targeted', 'bounce', 'pysical damage', 'on hit effects', 'physical damage', 'ad scaling']);
newChamp.addAbility("Impure Shots", 'W', ['passive', 'stacks', 'attack speed buff', 'lower healing', 'lower hp regen', 'magic damage', 'ap scaling']);
newChamp.addAbility("Make it Rain", 'E', ['aoe', 'delay', 'slow', 'magic damage', 'ap scaling']);
newChamp.addAbility("Bullet Time", 'R', ['ultimate', 'channel', 'cone', 'magic damage', 'ad scaling', 'ap scaling']);
allChampions.push(newChamp);








/* new champ tamplate

var newChamp = new Champion("", new Date(, , ));
newChamp.tags = [''];
newChamp.addAbility("", 'I', ['innate', '']);
newChamp.addAbility("", 'Q', ['']);
newChamp.addAbility("", 'W', ['']);
newChamp.addAbility("", 'E', ['']);
newChamp.addAbility("", 'R', ['ultimate', '']);
allChampions.push(newChamp);

*/

