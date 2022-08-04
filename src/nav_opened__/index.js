import { atom_ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
export const nav_opened__ = be_('nav_opened__', ctx=>{
	const nav_opened_ = atom_(false)
	return assign(nav_opened_, {
		open_nav: ()=>nav_opened__open(ctx),
		close_nav: ()=>nav_opened__close(ctx),
		toggle_nav: ()=>nav_opened__toggle(ctx),
	})
})
export function nav_opened__toggle(ctx) {
	nav_opened__(ctx).$ = !nav_opened__(ctx).$
}
export function nav_opened__open(ctx) {
	nav_opened__(ctx).$ = true
}
function nav_opened__close(ctx) {
	nav_opened__(ctx).$ = false
}
export { nav_opened__ as nav_opened$_ }
