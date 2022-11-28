import createCharacter from "./generateTroika.js";

let { character, skill, luck, stamina } = createCharacter();

export function Name() {
  return (
    <h1>
      {character.id} {character.name}
    </h1>
  );
}

export function Stats() {
  return (
    <div class="flex justify-around my-4">
      <div class="statBlock" slot="stamina">
        <h3 class="text-3xl">Stamina</h3>
        <span class="text-4xl font-bold">{stamina}</span>
      </div>
      <div class="statBlock" slot="luck">
        <h3 class="text-3xl">Luck</h3>
        <span class="text-4xl font-bold">{luck}</span>
      </div>
      <div class="statBlock" slot="skill">
        <h3 class="text-3xl">Skill</h3>
        <span class="text-4xl font-bold">{skill}</span>
      </div>
    </div>
  );
}

export function Description() {
  return <p>{character.description}</p>;
}

export function PossessionsList() {
  return (
    <ul class="list-disc pl-8">
      {character.possessions.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

export function SkillsList() {
  return (
    <ul class="list-disc pl-8">
      {Object.entries(character.skills).map(([key, value]) => {
        return (
          <li>
            {key}: {value}
          </li>
        );
      })}
    </ul>
  );
}

export function Special() {
  if (character.special)
    return (
      <div>
        <h3 class="py-1">Special</h3>
        <p>{character.special}</p>
      </div>
    );
}
