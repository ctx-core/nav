import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
export const [
	nav_opened$_,
	nav_opened_,
	nav_opened__set,
] = be_atom_triple_('nav_opened', ctx=>{
	return atom_(false)
})
export { nav_opened$_ as nav_opened__ }
/**
 * @param {Ctx}ctx
 */
export function nav_opened__toggle(ctx) {
	nav_opened__set(ctx, !nav_opened_(ctx))
}
/**
 * @param {Ctx}ctx
 */
export function nav_opened__open(ctx) {
	nav_opened__set(ctx, true)
}
/**
 * @param {Ctx}ctx
 */
function nav_opened__close(ctx) {
	nav_opened__set(ctx, false)
}
