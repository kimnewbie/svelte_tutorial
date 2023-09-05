import { redirect } from "@sveltejs/kit"

/**
 * hooks.server.js 로 옮겨갔다.
 * 
    if (!access && event.route.id?.startsWith("/(app)")) {
        throw redirect(302, "/login");
    }
 */
export const load = async () => {
    // throw redirect(302, "/login");
}