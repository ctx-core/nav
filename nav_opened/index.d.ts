import type { be_atom_triple_T } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
export declare const [
	nav_opened$_,
	nav_opened_,
	nav_opened__set,
]:be_atom_triple_T<boolean>
export { nav_opened$_ as nav_opened__ }
export declare function nav_opened__toggle(ctx:Ctx):void
export declare function nav_opened__open(ctx:Ctx):void
export declare function nav_opened__close(ctx:Ctx):void
