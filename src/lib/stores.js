// Stores module for direct Vite use
import { writable } from 'svelte/store';

export const page = writable({
  url: new URL(window.location.href),
  params: {},
  route: { id: null },
  status: 200,
  error: null,
  data: {}
});
