import { Writable } from '@ctx-core/store';
export declare const nav_opened_b: import("@ctx-core/object").Be<nav_opened_type, object>;
export declare type $nav_opened_type = boolean;
export interface nav_opened_type extends Writable<$nav_opened_type> {
    toggle_nav: () => void;
    open_nav: () => void;
    close_nav: () => void;
}
export { nav_opened_b as b__opened__nav, };
