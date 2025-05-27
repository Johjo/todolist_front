import {piqure} from 'piqure';

const memory = new Map();

const {provide, inject} = piqure(memory)

export {inject, provide};
