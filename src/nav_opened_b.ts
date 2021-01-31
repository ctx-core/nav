import { _b, assign } from '@ctx-core/object'
import { not } from '@ctx-core/function'
import { Writable, writable } from '@ctx-core/store'
export const nav_opened_b = _b('nav_opened', ()=>{
	const nav_opened = writable(false)
	return assign(nav_opened, {
		open_nav,
		close_nav,
		toggle_nav,
	}) as nav_opened_type
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
export type $nav_opened_type = boolean
export interface nav_opened_type extends Writable<$nav_opened_type> {
	toggle_nav:()=>void
	open_nav:()=>void
	close_nav:()=>void
}
export {
	nav_opened_b as b__opened__nav,
}
