<script>
import { nav_opened_b } from '../src'
export let ctx
const nav_opened = nav_opened_b(ctx)
const { close_nav } = nav_opened
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
