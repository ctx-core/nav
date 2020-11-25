<script>
import { __opened__nav, open_nav, close_nav } from './store'
let nav
function __click__nav(event) {
	const { target } = event
	if (target !== nav) {
		close_nav()
	}
}
</script>

<nav
	bind:this={nav}
	class="Content__Nav {$$props.class||''}"
	class:opened__nav="{$__opened__nav}"
	on:click="{__click__nav}"
><slot></slot></nav>
