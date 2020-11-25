import { Writable } from '@ctx-core/store';
export declare const nav_opened_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type | undefined) => nav_opened_type;
export declare type $nav_opened_type = boolean;
export interface nav_opened_type extends Writable<$nav_opened_type> {
    toggle_nav: () => void;
    open_nav: () => void;
    close_nav: () => void;
}
export { nav_opened_b as b__opened__nav, };
