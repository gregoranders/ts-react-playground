import { getPort } from 'portfinder-sync';
import { baseport } from './package.json';

console.log(getPort(baseport));
