import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { be__return_T, Ctx } from '@ctx-core/object'
export declare const nav_opened__:be__return_T<nav_opened__T>
export declare function nav_opened__toggle(ctx:Ctx):void
export declare function nav_opened__open(ctx:Ctx):void
export declare function nav_opened__close(ctx:Ctx):void
export interface nav_opened__T extends WritableAtom_<boolean> {
	toggle_nav:()=>void;
	open_nav:()=>void;
	close_nav:()=>void;
}
export { nav_opened__ as nav_opened$_ }
