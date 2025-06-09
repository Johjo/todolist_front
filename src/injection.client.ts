import {piqureWrapper} from 'piqure';



const {provide, inject} = piqureWrapper((typeof window !== 'undefined') ? window : global, 'piqure');

export {inject, provide};
