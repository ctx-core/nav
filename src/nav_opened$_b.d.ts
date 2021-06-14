import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { nav_Ctx } from './nav_Ctx';
declare const key = "nav_opened$";
export declare const nav_opened$_b: B<nav_Ctx, typeof key>;
export declare type nav_opened_T = boolean;
export interface nav_opened$_T extends Writable$<nav_opened_T> {
    toggle_nav: () => void;
    open_nav: () => void;
    close_nav: () => void;
}
export { nav_opened$_b as b__opened__nav, };
