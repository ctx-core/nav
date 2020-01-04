import { Writable } from 'svelte/store';
export interface Writable__opened__nav extends Writable<boolean> {
    toggle__nav: () => void;
    open__nav: () => void;
    close__nav: () => void;
}
export declare const b__opened__nav: (ctx?: any, opts?: any) => Writable__opened__nav;
export declare const __opened__nav: Writable__opened__nav;
export declare const open__nav: () => void, close__nav: () => void, toggle__nav: () => void;
