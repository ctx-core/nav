import { Writable } from 'svelte/store';
export declare type $type__opened__nav = boolean;
export interface type__opened__nav extends Writable<$type__opened__nav> {
    toggle__nav: () => void;
    open__nav: () => void;
    close__nav: () => void;
}
export declare const b__opened__nav: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__opened__nav;
export declare const __opened__nav: type__opened__nav;
export declare const open__nav: () => void, close__nav: () => void, toggle__nav: () => void;
