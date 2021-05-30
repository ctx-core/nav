<script>
import { nav_opened$_b } from '../nav_opened$_b'
export let ctx
const nav_opened$ = nav_opened$_b(ctx)
const { close_nav } = nav_opened$
</script>

<div class="Nav_Header header">
	<slot name="close">
		<a href="." class="close" on:click|preventDefault="{close_nav}">
			<slot name="in__close">×</slot>
		</a>
	</slot>
	<slot></slot>
</div>

<style>
	.Nav_Header a {
		text-decoration: none;
	}
</style>
