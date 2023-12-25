/// <reference types="ctx-core" />
import { be_sig_triple_ } from 'ctx-core/rmemo'
/** @typedef {be_sig_triple_T} */
/** @typedef {Ctx} */
export const [
	nav_opened$_,
	nav_opened_,
	nav_opened__set,
] = /** @type {be_sig_triple_T<boolean>} */
	be_sig_triple_(()=>
		false,
	{ id: 'nav_opened' })
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
export function nav_opened__close(ctx) {
	nav_opened__set(ctx, false)
}
