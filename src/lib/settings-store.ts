import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const SETTINGS_STORE_KEY = 'NICK_TODOS_SETTINGS';

type Settings = {
	apiUrl: string;
	apiToken: string;
};

let storedSettings: Settings = {
	apiUrl: '',
	apiToken: ''
};

if (browser) {
	try {
		const storedSettingsString = localStorage.getItem(SETTINGS_STORE_KEY);

		if (storedSettingsString) {
			storedSettings = JSON.parse(storedSettingsString);
		}
	} catch (_e) {
		// noop
	}
}

export const settingsStore = writable<Settings>(storedSettings);

if (browser) {
	settingsStore.subscribe((newSettings) => {
		localStorage.setItem(SETTINGS_STORE_KEY, JSON.stringify(newSettings));
	});
}
