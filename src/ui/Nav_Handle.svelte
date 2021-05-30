<script>
import FA_bars_solid from '@ctx-core/fontawesome/ui/FA-bars-solid.svelte'
import { nav_opened$_b } from '../nav_opened$_b'
export let ctx
const nav_opened$ = nav_opened$_b(ctx)
const { toggle_nav } = nav_opened$
function onclick_window(event) {
	nav_opened$.update(nav_opened => false)
}
</script>

<svelte:window on:click="{onclick_window}"></svelte:window>

<a
	href="."
	class="nav-handle Nav_Handle {$$props.class||''}"
	on:click|preventDefault|stopPropagation="{toggle_nav}"
>
	<slot>
		<FA_bars_solid></FA_bars_solid>
	</slot>
</a>
