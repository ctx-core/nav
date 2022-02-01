import { assign, B, be_ } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
export const nav_opened$_:B<nav_opened$_T> = be_('nav_opened$', ()=>{
	const nav_opened$ = atom$(false)
	return assign(nav_opened$, {
		open_nav,
		close_nav,
		toggle_nav,
	}) as nav_opened$_T
	function toggle_nav() {
		nav_opened$.$ = !nav_opened$.$
	}
	function open_nav() {
		nav_opened$.$ = true
	}
	function close_nav() {
		nav_opened$.$ = false
	}
})
export interface nav_opened$_T extends WritableAtom$<boolean> {
	toggle_nav:()=>void
	open_nav:()=>void
	close_nav:()=>void
}
