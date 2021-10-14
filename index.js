(() => {
  // src/index.js
  if (window.self === window.top) {
    if (!("keyboard" in navigator)) {
      alert("Your browser does not support the Keyboard Lock API.");
    }
  }
  var animalCodes = [
    "1F435",
    "1F412",
    "1F98D",
    "1F9A7",
    "1F436",
    "1F415",
    "1F9AE",
    "1F415-200D-1F9BA",
    "1F429",
    "1F43A",
    "1F98A",
    "1F99D",
    "1F431",
    "1F408",
    "1F408-200D-2B1B",
    "1F981",
    "1F42F",
    "1F405",
    "1F406",
    "1F434",
    "1F40E",
    "1F984",
    "1F993",
    "1F98C",
    "1F9AC",
    "1F42E",
    "1F402",
    "1F403",
    "1F404",
    "1F437",
    "1F416",
    "1F417",
    "1F43D",
    "1F40F",
    "1F411",
    "1F410",
    "1F42A",
    "1F42B",
    "1F999",
    "1F992",
    "1F418",
    "1F9A3",
    "1F98F",
    "1F99B",
    "1F42D",
    "1F401",
    "1F400",
    "1F439",
    "1F430",
    "1F407",
    "1F43F",
    "1F9AB",
    "1F994",
    "1F987",
    "1F43B",
    "1F43B-200D-2744-FE0F",
    "1F428",
    "1F43C",
    "1F9A5",
    "1F9A6",
    "1F9A8",
    "1F998",
    "1F9A1",
    "1F43E",
    "1F983",
    "1F414",
    "1F413",
    "1F423",
    "1F424",
    "1F425",
    "1F426",
    "1F427",
    "1F54A",
    "1F985",
    "1F986",
    "1F9A2",
    "1F989",
    "1F9A4",
    "1FAB6",
    "1F9A9",
    "1F99A",
    "1F99C",
    "1F438",
    "1F40A",
    "1F422",
    "1F98E",
    "1F40D",
    "1F432",
    "1F409",
    "1F995",
    "1F996",
    "1F433",
    "1F40B",
    "1F42C",
    "1F9AD",
    "1F41F",
    "1F420",
    "1F421",
    "1F988",
    "1F419",
    "1F41A",
    "1F40C",
    "1F98B",
    "1F41B",
    "1F41C",
    "1F41D",
    "1FAB2",
    "1F41E",
    "1F997",
    "1FAB3",
    "1F577",
    "1F578",
    "1F982",
    "1F99F",
    "1FAB0",
    "1FAB1",
    "1F9A0",
    "1F490",
    "1F338",
    "1F4AE",
    "1F3F5",
    "1F339",
    "1F940",
    "1F33A",
    "1F33B",
    "1F33C",
    "1F337",
    "1F331",
    "1FAB4",
    "1F332",
    "1F333",
    "1F334",
    "1F335",
    "1F33E",
    "1F33F",
    "2618",
    "1F340",
    "1F341",
    "1F342",
    "1F343"
  ];
  function getRandomEmojiUrl(codes) {
    const emojiCode = codes[Math.floor(Math.random() * codes.length)];
    const cdnUrl = `https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@13.1.0/color/svg/${emojiCode}.svg`;
    return cdnUrl;
  }
  var fullscreenButton = document.querySelector("#fullscreen-button");
  var keyboardButton = document.querySelector("#keyboard-button");
  var div = document.querySelector("div");
  var ENTER_FULLSCREEN = "Enter full screen";
  var LEAVE_FULLSCREEN = "Leave full screen";
  var ACTIVATE_KEYBOARD_LOCK = "Activate keyboard lock";
  var DEACTIVATE_KEYBOARD_LOCK = "Dectivate keyboard lock";
  var lock = false;
  fullscreenButton.addEventListener("click", async () => {
    if (window.self !== window.top) {
      window.open(location.href, "", "noopener,noreferrer");
      return;
    }
    try {
      if (!document.fullscreen) {
        await document.documentElement.requestFullscreen();
        fullscreenButton.textContent = LEAVE_FULLSCREEN;
        return;
      }
      await document.exitFullscreen();
      fullscreenButton.textContent = ENTER_FULLSCREEN;
    } catch (err) {
      fullscreenButton.textContent = ENTER_FULLSCREEN;
      alert(`${err.name}: ${err.message}`);
    }
  });
  keyboardButton.addEventListener("click", async () => {
    try {
      if (!lock) {
        await navigator.keyboard.lock();
        lock = true;
        console.log("Activating lock");
        keyboardButton.textContent = DEACTIVATE_KEYBOARD_LOCK;
        return;
      }
      navigator.keyboard.unlock();
      keyboardButton.textContent = ACTIVATE_KEYBOARD_LOCK;
      lock = false;
      console.log("Deactivating lock");
    } catch (err) {
      lock = false;
      console.log("Deactivating lock");
      keyboardButton.textContent = ACTIVATE_KEYBOARD_LOCK;
      alert(`${err.name}: ${err.message}`);
    }
  });
  document.addEventListener("fullscreenchange", () => {
    keyboardButton.textContent = ACTIVATE_KEYBOARD_LOCK;
    lock = false;
    if (document.fullscreenElement) {
      fullscreenButton.textContent = LEAVE_FULLSCREEN;
      return;
    }
    fullscreenButton.textContent = ENTER_FULLSCREEN;
  });
  document.addEventListener("keydown", (event) => {
    const randomEmojiUrl = getRandomEmojiUrl(animalCodes);
    console.log(`keydown: key-${event.key}`);
    const emojiTag = document.querySelector(".emoji-image");
    emojiTag.src = randomEmojiUrl;
  });
})();
