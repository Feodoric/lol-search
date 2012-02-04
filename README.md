# About
LoL Search is a simple web app for filtering League of Legends champions based on keywords.


# TODO (in no particular order)
* give champions tags (e.g. 'tank', 'support', 'pusher', etc)
* include each champion's "Innate" ability
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
* make the Ability class more robust to include ranges, cooldowns, costs, scaling ratios, etc
* make the Champion class more robust to include the champion's starting and per-level stats
* improve the filtering engine
    * create dictionary for translating common terms
    * explode the querystring for matching against multiple parts of the querystring rather than treating it as atomic
    * use multiple matching functionality to give matches a score
    * sort results based on their match score
