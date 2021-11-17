<script lang="ts">
import type { nav_Ctx } from '../nav_Ctx.js'
import { nav_opened$_b } from '../nav_opened$_b.js'
export let ctx:nav_Ctx
const nav_opened$ = nav_opened$_b(ctx)
const { close_nav } = nav_opened$
let nav:HTMLElement
function onclick_nav(event) {
	const { target } = event
	if (target !== nav) {
		close_nav()
	}
}
</script>

<nav
	bind:this={nav}
	class="Nav_Content {$$props.class||''}"
	class:nav_opened={$nav_opened$}
	on:click={onclick_nav}
><slot></slot></nav>
