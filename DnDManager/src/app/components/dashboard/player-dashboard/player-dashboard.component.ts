import { Component, OnInit } from '@angular/core';
import { Vitals } from "../../../models/temp-models/player-subobjects/Vitals";
import { Action } from "../../../models/temp-models/player-subobjects/Action";
import { Feature } from "../../../models/temp-models/player-subobjects/Feature";
import { Money } from "../../../models/temp-models/player-subobjects/Money";
import { Proficiency } from "../../../models/temp-models/player-subobjects/Proficiency";
import { Ability } from "../../../models/temp-models/player-subobjects/Ability";
import { Skill } from "../../../models/temp-models/player-subobjects/Skill";
import { Traits } from "../../../models/temp-models/player-subobjects/Traits";
import { Spell } from "../../../models/temp-models/Spell";
import { Item } from "../../../models/temp-models/Item";
import { Player } from "../../../models/temp-models/Player";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.css']
})
export class PlayerDashboardComponent implements OnInit {

  players:Player[] = []
  displayedColumns: string[] = ['name', 'campaign'];
  dataSource = new MatTableDataSource<Player>();

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.players[0] = this.getDummyPlayer();
    this.players[1] = this.getDummyPlayer();
    this.dataSource.data = this.players;
  }

  tableClick(row:Player) {
    this.router.navigate(['character'], {state: {player : row}});
  }

  getDummyPlayer() : Player {
    //************** START OF DUMMY PLAYER DATA *************************

    let vitals:Vitals = new Vitals(
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
      new Skill('athletics', 10, '+0', false, 'strength'),
      new Skill('acrobatics', 10, '+0', false, 'dexterity'),
      new Skill('sleight of hand', 10, '+0', false, 'dexterity'),
      new Skill('stealth', 10, '+0', false, 'dexterity'),
      new Skill('arcana', 10, '+0', false, 'intelligence'),
      new Skill('history', 10, '+0', false, 'intelligence'),
      new Skill('investigation', 10, '+0', false, 'intelligence'),
      new Skill('nature', 10, '+0', false, 'intelligence'),
      new Skill('religion', 10, '+0', false, 'intelligence'),
      new Skill('stealth', 10, '+0', false, 'intelligence'),
      new Skill('animal handling', 10, '+0', false, 'wisdom'),
      new Skill('insight', 10, '+0', false, 'wisdom'),
      new Skill('medicine', 10, '+0', false, 'wisdom'),
      new Skill('perception', 10, '+0', false, 'wisdom'),
      new Skill('survival', 10, '+0', false, 'wisdom'),
      new Skill('deception', 10, '+0', false, 'charisma'),
      new Skill('intimidation', 10, '+0', false, 'charisma'),
      new Skill('performance', 10, '+0', false, 'charisma'),
      new Skill('persuasion', 10, '+0', false, 'charisma')
    ];

    let traits:Traits = new Traits([
      'Trait 1',
      'Trait 2'
    ], [
      'Bond 1'
    ], [

    ], [
      'Flaw 1',
      'Flaw 2',
      'Flaw 3'
    ]);

    let spells:Spell[] = [
      new Spell("Acid Splash", 0, "1 Action", "60 ft", "V, S", "Instantaneous", "Conjuration", "DEX", "Acid", "You hurl a bubble of acid. Choose one or two creatures you can see within range. If you choose two, they must be within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. \n\n This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."),
      new Spell("Chill Touch", 0, "1 Action", "120 ft", "V, S", "1 Round", "Necromancy", "Ranged", "Necrotic", "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. \n\n If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. \n\n This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."),
      new Spell("Alarm", 1, "1 Minute (R)", "30 ft", "V, S, M (a tiny bell and a piece of fine silver wire)", "8 Hours", "Abjuration", "None", "Detection", "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible. \n\n A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. \n\n An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.")
    ];

    let inventory:Item[] = [
      new Item("Longsword", "15 gp", "3 lb", "A long one-handed sword, popular among adventurers across the multiverse."),
      new Item("Bedroll", "1 gp", "7 lb", "A padded mat for sleeping. It's not comfortable, but you don't have a lot of options outside of towns.")
    ];

    return new Player("Test Player", vitals, actions, features, money, abilities, skills, traits, spells, inventory, proficiencies, 'The Curse of Strahd');
    //**************************END OF PLAYER DUMMY DATA****************************************************
  }

}
