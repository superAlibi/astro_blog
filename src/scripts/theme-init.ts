/**
 * 主题初始化脚本（内联执行，避免闪烁）
 * 必须在 <head> 中立即执行
 */

(function() {
	const THEME_STORAGE_KEY = 'theme-preference';
	const THEME_ATTRIBUTE = 'data-theme';

	function getSystemTheme(): 'light' | 'dark' {
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	}

	function getStoredTheme(): string | null {
		try {
			return localStorage.getItem(THEME_STORAGE_KEY);
		} catch {
			return null;
		}
	}

	function setTheme(theme: string) {
		const root = document.documentElement;
		
		if (theme === 'system') {
			const systemTheme = getSystemTheme();
			root.setAttribute(THEME_ATTRIBUTE, systemTheme);
			root.style.colorScheme = systemTheme;
		} else {
			root.setAttribute(THEME_ATTRIBUTE, theme);
			root.style.colorScheme = theme;
		}
	}

	// 立即执行，避免闪烁
	const storedTheme = getStoredTheme();
	const theme = storedTheme || 'system';
	setTheme(theme);
})();
