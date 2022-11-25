import characters from "../pages/TroikaCharacters.json";
import spells from "../pages/TroikaSpells.json";

console.log("hello")

function roll(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function getRandomSpell() {
  let spellNames = Object.keys(spells);
  return spellNames[roll(spellNames.length)];
}

function createCharacter() {
  let d66 = roll(6).toString() + roll(6);
  let character = characters[d66];
  let skills = Object.keys(character.skills);
  for (let skill of skills) {
    if (/Spell - Random \d*/.test(skill)) {
      let value = character.skills[skill];
      delete character.skills[skill];
      character.skills[`Spell - ${getRandomSpell()}`] = value;
    }
  }

  let skill = roll(3) + 3;
  let luck = roll(6) + 6;
  let stamina = roll(6) + roll(6) + 12;

  return {
    character: character,
    skill: skill,
    luck: luck,
    stamina: stamina,
  };
}

export default createCharacter;