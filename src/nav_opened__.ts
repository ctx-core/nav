import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
export const nav_opened__ = be_<nav_opened__T>('nav_opened__', ()=>{
	const nav_opened_ = atom_(false)
	return assign(nav_opened_, {
		open_nav,
		close_nav,
		toggle_nav,
	}) as nav_opened__T
	function toggle_nav() {
		nav_opened_.$ = !nav_opened_.$
	}
	function open_nav() {
		nav_opened_.$ = true
	}
	function close_nav() {
		nav_opened_.$ = false
	}
})
export interface nav_opened__T extends WritableAtom_<boolean> {
	toggle_nav:()=>void
	open_nav:()=>void
	close_nav:()=>void
}
export { nav_opened__ as nav_opened$_ }
