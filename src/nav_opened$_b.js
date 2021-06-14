import { not } from '@ctx-core/function';
import { be_, assign } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'nav_opened$';
export const nav_opened$_b = be_(key, () => {
    const nav_opened = writable$(false);
    return assign(nav_opened, {
        open_nav,
        close_nav,
        toggle_nav,
    });
    function toggle_nav() {
        nav_opened.update(not);
    }
    function open_nav() {
        nav_opened.set(true);
    }
    function close_nav() {
        nav_opened.set(false);
    }
});
export { nav_opened$_b as b__opened__nav, };
//# sourceMappingURL=src/nav_opened$_b.js.map