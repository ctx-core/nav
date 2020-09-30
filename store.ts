import { Writable, writable } from '@ctx-core/store'
import { _b, assign } from '@ctx-core/object'
import { not } from '@ctx-core/function'
export type $type__opened__nav = boolean
export interface type__opened__nav extends Writable<$type__opened__nav> {
	toggle__nav:()=>void
	open__nav:()=>void
	close__nav:()=>void
}
export const b__opened__nav = _b<type__opened__nav>('__opened__nav', ()=>{
	const __opened__nav = writable(false) as type__opened__nav
	return assign(__opened__nav, {
		open__nav,
		close__nav,
		toggle__nav,
	})
	function toggle__nav() {
		__opened__nav.update(not)
	}
	function open__nav() {
		__opened__nav.set(true)
	}
	function close__nav() {
		__opened__nav.set(false)
	}
})
export const __opened__nav = b__opened__nav()
export const {
	open__nav,
	close__nav,
	toggle__nav,
} = __opened__nav
