import { emojiCodes } from "./emojiCodes";
let emojiCode = "";
const cdnUrl = `https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@13.1.0/color/svg/${emojiCode}.svg`;

export function getRandomEmojiUrl() {
  emojiCodes = emojiCodes[Math.floor(Math.random() * emojiCodes.length)];
  return cdnUrl;
}
