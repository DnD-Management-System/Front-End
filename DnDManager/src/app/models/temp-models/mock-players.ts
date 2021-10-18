import { Character } from "./Character";
import { Vitals } from "./player-subobjects/Vitals";
import { Action } from "./player-subobjects/Action";
import { Feature } from "./player-subobjects/Feature";
import { Money } from "./player-subobjects/Money";
import { Proficiency } from "./player-subobjects/Proficiency";
import { Ability } from "./player-subobjects/Ability";
import { Skill } from "./player-subobjects/Skill";
import { Traits } from "./player-subobjects/Traits";
import { Spell } from "./Spell";
import { Item } from "./Item";
import { PersonalityTrait } from "./player-subobjects/trait-subobjects/PersonalityTrait";
import { Bond } from "./player-subobjects/trait-subobjects/Bond";
import { Flaw } from "./player-subobjects/trait-subobjects/Flaw";

  //************** START OF DUMMY PLAYER DATA *************************

  let vitals:Vitals = new Vitals(
    0,
    "Fighter",
    1,
    "Charlotte",
    "Half-Orc",
    "CG",
    14,
    "+0",
    3,
    4,
    20,
    30,
    100,
    "20 ft",
    0,
    0
  );

  let actions:Action[] = [
    new Action("longsword", "+0", "1d8", "slashing"),
    new Action("Hand Crossbow", "+0", "1d6", "piercing")
  ];

  let features:Feature[] = [
    new Feature('Sneak Attack', 'Too long to put here as dummy data tbh, but in prod this would have the description'),
    new Feature('Misty Step', 'A cool teleport action that everyone always forgets about')
  ];

  let money:Money[] = [
    new Money('cp', 75),
    new Money('sp', 77),
    new Money('ep', 0),
    new Money('gp', 12),
    new Money('pp', 6)
  ];

  let proficiencies:Proficiency[] = [
    new Proficiency('common'),
    new Proficiency('longsword')
  ];

  let abilities:Ability[] = [
    new Ability('strength', 10, '+0'),
    new Ability('dexterity', 10, '+0'),
    new Ability('constitution', 10, '+0'),
    new Ability('intelligence', 10, '+0'),
    new Ability('wisdom', 10, '+0'),
    new Ability('charisma', 10, '+0')
  ];

  let skills:Skill[] = [
    new Skill('athletics', '+0', false, 'strength'),
    new Skill('acrobatics', '+0', false, 'dexterity'),
    new Skill('sleight of hand', '+0', false, 'dexterity'),
    new Skill('stealth', '+0', false, 'dexterity'),
    new Skill('arcana', '+0', false, 'intelligence'),
    new Skill('history', '+0', false, 'intelligence'),
    new Skill('investigation', '+0', false, 'intelligence'),
    new Skill('nature', '+0', false, 'intelligence'),
    new Skill('religion', '+0', false, 'intelligence'),
    new Skill('stealth', '+0', false, 'intelligence'),
    new Skill('animal handling', '+0', false, 'wisdom'),
    new Skill('insight', '+0', false, 'wisdom'),
    new Skill('medicine', '+0', false, 'wisdom'),
    new Skill('perception', '+0', false, 'wisdom'),
    new Skill('survival', '+0', false, 'wisdom'),
    new Skill('deception', '+0', false, 'charisma'),
    new Skill('intimidation', '+0', false, 'charisma'),
    new Skill('performance', '+0', false, 'charisma'),
    new Skill('persuasion', '+0', false, 'charisma')
  ];

  let traits:Traits = new Traits([
    new PersonalityTrait('Trait 1'),
    new PersonalityTrait('Trait 2')
  ], [
    new Bond('Bond 1')
  ], [

  ], [
    new Flaw('Flaw 1'),
    new Flaw('Flaw 2'),
    new Flaw('Flaw 3')
  ]);

  let spells:Spell[] = [
    new Spell("Acid Splash", 0, "1 Action", "60 ft", "V, S", "Instantaneous", "Conjuration", "DEX", "Acid", "You hurl a bubble of acid. Choose one or two creatures you can see within range. If you choose two, they must be within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. \n\n This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."),
    new Spell("Chill Touch", 0, "1 Action", "120 ft", "V, S", "1 Round", "Necromancy", "Ranged", "Necrotic", "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. \n\n If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. \n\n This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."),
    new Spell("Alarm", 1, "1 Minute (R)", "30 ft", "V, S, M (a tiny bell and a piece of fine silver wire)", "8 Hours", "Abjuration", "None", "Detection", "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible. \n\n A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. \n\n An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.")
  ];

  let inventory:Item[] = [
    new Item(0, "Longsword", "15 gp", "3 lb", "A long one-handed sword, popular among adventurers across the multiverse.", 0),
    new Item(0, "Bedroll", "1 gp", "7 lb", "A padded mat for sleeping. It's not comfortable, but you don't have a lot of options outside of towns.", 0)
  ];

  let player:Character = new Character("Test Character", vitals, actions, features, money, abilities, skills, traits, spells, inventory, proficiencies, 'The Curse of Strahd');
  //**************************END OF PLAYER DUMMY DATA****************************************************

export const MOCKPLAYERS: Character[] = [
  player
]

