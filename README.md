# About
LoL Search is a simple web app for filtering League of Legends champions based on keywords.


# TODO (in no particular order)
* make the Ability class more robust to include ranges, cooldowns, costs, scaling ratios, etc
* split abilities that have passives and actives into separate objects. This would make search results more clear and allow users to search on "passive doesn't take effect while the active is on cooldown" (should probably come up with a shorter term, though)
* make the Champion class more robust to include the champion's starting and per-level stats
X give champions tags (e.g. 'tank', 'support', 'pusher', etc)
* improve the filtering engine
    * search champion tags!
    X update the matching and/or highlighting logic to efficiently dehighlight abilities that no longer match the current querystring
    * create dictionary for translating common terms
        * think about relationship between "aura" and "aoe" abilites and whether it makes sense to treat them the same 
        * all stats should have a unified taxonomy: hp, ma, ad, ap, ac, mr, ls, ch, hpr, mar, rp, and so on
        * decide on a term for jump/leap/dash/roll/charge (jax, graves, vayne, shen, pantheon, sejuani, shyvanna(ult), corki, etc)
    X allow users to specify multiple tags in a comma-separated list
    X use multiple matching functionality to give matches a "relevance" score
    X sort results based on their match score
    X allow sorting on other attributes like name, release date, starting attributes
    * if someone searches "buff" do *not* match "debuff" -- solution: use a different tag than "debuff" and translate "debuff"->[NEW_TERM] in dictionary
* ENTER ALL THE CHAMPIONS
* develop a better UI and visual style
    * show more info on abilities, namely range and scaling ratios
    * show ability tags (only for matched ability??)
    * show champion tags
    * indicator of the currently highlighted champion (see keybindings)
    * include condensed shortlist of matching champion names to the right of the search box? (like a thumbnail of the search results)
* implement vim-style keybindings
    * / to focus search box
    * Escape to interact with the list
    * ? to display help (keybindings and search keywords/formats)
    * j to select the next lower champion
    * k to select the previous champion
    * n to jump down 5 champions (scale based on window size?)
    * p to jump up 5 champions (scale based on window size?)
    * Space to show more detailed info on the champion(??)
    * gg to jump to the top of the list
    * G to jump to the end of the list
    * :[number] to jump to matching champion N
    * x to clear the search
* consider loading minimal data in JS with the page and serving complete champ/ability specs via ajax during the search?


Testing some github issues