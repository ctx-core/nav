import { not } from '@ctx-core/function'
import { be_, assign, B } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { nav_Ctx } from './nav_Ctx'
const key = 'nav_opened$'
export const nav_opened$_b:B<nav_Ctx, typeof key> = be_(key, ()=>{
	const nav_opened = writable$(false)
	return assign(nav_opened, {
		open_nav,
		close_nav,
		toggle_nav,
	}) as nav_opened$_T
	function toggle_nav() {
		nav_opened.update(not)
	}
	function open_nav() {
		nav_opened.set(true)
	}
	function close_nav() {
		nav_opened.set(false)
	}
})
export type nav_opened_T = boolean
export interface nav_opened$_T extends Writable$<nav_opened_T> {
	toggle_nav:()=>void
	open_nav:()=>void
	close_nav:()=>void
}
export {
	nav_opened$_b as b__opened__nav,
}
