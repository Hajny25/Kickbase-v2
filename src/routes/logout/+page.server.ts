import { redirect } from '@sveltejs/kit'
import type { Actions } from '@sveltejs/kit'

export const actions: Actions = {
    default({ cookies }) {
        cookies.delete('kkstrauth')
        throw redirect(302, 'login');
    }
}