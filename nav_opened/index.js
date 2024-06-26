/// <reference types="ctx-core" />
import { id_be_sig_triple_ } from 'ctx-core/rmemo'
/** @typedef {be_sig_triple_T} */
/** @typedef {ctx_T} */
export const [
	nav_opened$_,
	nav_opened_,
	nav_opened__set,
] = /** @type {be_sig_triple_T<boolean>} */
	id_be_sig_triple_(
		'nav_opened',
		()=>false)
export { nav_opened$_ as nav_opened__ }
/**
 * @param {ctx_T}ctx
 */
export function nav_opened__toggle(ctx) {
	nav_opened__set(ctx, !nav_opened_(ctx))
}
/**
 * @param {ctx_T}ctx
 */
export function nav_opened__open(ctx) {
	nav_opened__set(ctx, true)
}
/**
 * @param {ctx_T}ctx
 */
export function nav_opened__close(ctx) {
	nav_opened__set(ctx, false)
}
