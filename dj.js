(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "basicBot";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
          command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Bacon!!!");
            }
          }
        };

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "Fialbot",
      language: "czech",
      chatLink: "https://rawgit.com/basicBot/source/master/lang/cs.json",
      scriptLink: "https://rawgit.com/basicBot/source/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 1, // 1-200
      startupVolume: 25, // 0-100
      startupEmoji: true, // true or false
      autowoot: false,
      autoskip: false,
      smartSkip: false,
      cmdDeletion: true,
      maximumAfk: 120,
      afkRemoval: false,
      maximumDc: 5,
      bouncerPlus: false,
      blacklistEnabled: false,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: false,
      maximumCycletime: 10,
      voteSkip: false,
      voteSkipLimit: 10,
      historySkip: false,
      timeGuard: true,
      maximumSongLength: 10,
      autodisable: false,
      commandCooldown: 15,
      usercommandsEnabled: true,
      skipPosition: 1,
      skipReasons: [
      ["pica", "Prostě jsi píča"],
      ["kokot", "Prostě jsi kokot"]
      ],
      afkpositionCheck: 15,
      afkRankCheck: "ambassador",
      motdEnabled: false,
      motdInterval: 5,
      motd: "Víte, že https://jajbozemuj.sweb.cz/plugdj.html je nejlepší Plug.DJ místnost (no Kappa)",
      filterChat: false,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: null,
      themeLink: null,
      fbLink: null,
      youtubeLink: null,
      website: null,
      intervalMessages: ["Deska je venku celkem pěkně, asi budu sedět doma a hrát na kompu. :smile:", "Zatím neexistuje list příkazů, ale až bude existovat, bude na adrese https://jajbozemuj.sweb.cz/prikazy.html !"],
      messageInterval: 3,
      songstats: false,
      commandLiteral: "!",
      blacklists: {
            pica: "https://rawgit.com/basicBot/custom/master/blacklists/NSFWlist.json",
            kokot: "https://rawgit.com/basicBot/custom/master/blacklists/OPlist.json"
      }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/basicBot/source/master/basicBot.js", extend);

}).call(this);
