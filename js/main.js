import { createRandomAdverts } from './random-adverts.js';
// import { addCard, activateMap, deactivateMap } from './map.js';
import { addPoints } from './map.js';
import './form.js';

const randomAdverts = createRandomAdverts(10);

addPoints(randomAdverts);
