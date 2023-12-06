import { writable, readable, get } from "svelte/store";
import type { Writable } from "svelte/store";

export const lastSelectedUser: Writable<String> = writable("")