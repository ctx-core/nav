import type { nav_Ctx } from './nav_Ctx';
import type { nav_opened$_T } from './nav_opened$_b';
export interface nav_ctx_I {
    nav_opened$?: nav_opened$_T;
    nav_b_h?: nav_b_h_T;
}
export interface nav_b_h_T {
    get nav_opened$(): nav_opened$_T;
}
export declare function nav_b_h_b(ctx: nav_Ctx): nav_b_h_T;
