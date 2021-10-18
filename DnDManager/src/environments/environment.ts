// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  getAllCharacters: 'http://localhost:8000/character/getAllByUser',
  selectCampaign: 'http://localhost:8000/campaign/selectCampaign',
  createCharacter: 'http://localhost:8000/charactrer/createCharacter',
  selectCharacter: 'http://localhost:8000/character/selectCharacter',
  characterSheet: 'http://localhost:8000/character/sheet/',
  createItem: 'http://localhost:8000/item/create',
  login: 'http://localhost:8000/index/signIn'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
