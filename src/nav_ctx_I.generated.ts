import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { nav_opened_T } from './nav_opened_b'
import { nav_opened_b } from './nav_opened_b'
export interface nav_ctx_I {
	nav_opened?:nav_opened_T
	nav_b_h?:nav_b_h_T
}
export interface nav_b_h_T {
	get nav_opened():nav_opened_T
}
export function nav_b_h_b(ctx:nav_ctx_I):B<nav_ctx_I, 'nav_b_h'> {
	return _b('nav_b_h', ()=>{
		return {
			get nav_opened() { return nav_opened_b(ctx) }
		}
	})
}