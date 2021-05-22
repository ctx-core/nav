import { Writable$ } from '@ctx-core/store';
export interface nav_opened_Ctx {
    nav_opened?: nav_opened_T;
}
export declare const nav_opened_b: import("@ctx-core/object").Be<nav_opened_Ctx, "nav_opened", nav_opened_T>;
export declare type $nav_opened_T = boolean;
export interface nav_opened_T extends Writable$<$nav_opened_T> {
    toggle_nav: () => void;
    open_nav: () => void;
    close_nav: () => void;
}
export { nav_opened_b as b__opened__nav, };
