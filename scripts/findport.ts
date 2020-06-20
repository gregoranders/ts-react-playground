import * as protfinderSync from 'portfinder-sync';
import { baseport } from '../package.json';

console.log(protfinderSync.getPort(baseport));
