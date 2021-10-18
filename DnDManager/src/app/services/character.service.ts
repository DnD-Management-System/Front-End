import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Character } from "../models/temp-models/Character";
import { environment } from "../../environments/environment";
import { Item } from "../models/temp-models/Item";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient:HttpClient) { }

  getAllCharacters() {
    return this.httpClient.get(environment.getAllCharacters);
  }

  chooseCampaign(campaign:string) {
    return this.httpClient.post(environment.selectCampaign, {name: campaign});
  }

  generateCharacter(name:string) {
    return this.httpClient.post(environment.createCharacter, {name: name});
  }

  selectCharacter(name:string) {
    return this.httpClient.post(environment.selectCharacter, {name: name});
  }

  getCharacterSheet() {
    return this.httpClient.get(environment.characterSheet) as Observable<Character>;
  }

  updateCharacterSheet(character:Character) {
    return this.httpClient.post(environment.characterSheet, JSON.stringify(character));
  }

  createItem(item:Item) {
    return this.httpClient.post(environment.createItem, JSON.stringify(item));
  }

  login(username:string, password:string) {
    return this.httpClient.post(environment.login, {username: username, password:password});
  }
}
