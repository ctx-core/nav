import type { Ctx } from 'ctx-core/be'
import type { be_sig_triple_T } from 'ctx-core/rmemo'
export declare const [
	nav_opened$_,
	nav_opened_,
	nav_opened__set,
]:be_sig_triple_T<boolean>
export { nav_opened$_ as nav_opened__ }
export declare function nav_opened__toggle(ctx:Ctx):void
export declare function nav_opened__open(ctx:Ctx):void
export declare function nav_opened__close(ctx:Ctx):void
