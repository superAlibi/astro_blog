/**
 * 主题切换脚本
 * 支持系统偏好检测和手动切换
 */

type Theme = 'light' | 'dark' | 'system';

const THEME_STORAGE_KEY = 'theme-preference';
const THEME_ATTRIBUTE = 'data-theme';

/**
 * 获取系统主题偏好
 */
function getSystemTheme(): 'light' | 'dark' {
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
}

/**
 * 获取存储的主题偏好
 */
function getStoredTheme(): Theme | null {
	try {
		return localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
	} catch {
		return null;
	}
}

/**
 * 设置主题
 */
function setTheme(theme: Theme) {
	const root = document.documentElement;
	
	// 保存到 localStorage
	try {
		localStorage.setItem(THEME_STORAGE_KEY, theme);
	} catch {
		// 忽略存储错误
	}

	// 应用主题
	if (theme === 'system') {
		const systemTheme = getSystemTheme();
		root.setAttribute(THEME_ATTRIBUTE, systemTheme);
		root.classList.remove('light', 'dark');
		root.classList.add(systemTheme);
	} else {
		root.setAttribute(THEME_ATTRIBUTE, theme);
		root.classList.remove('light', 'dark', 'system');
		root.classList.add(theme);
	}

	// 触发自定义事件，通知其他组件
	window.dispatchEvent(
		new CustomEvent('themechange', { detail: { theme } })
	);
}

/**
 * 初始化主题
 */
function initTheme() {
	const storedTheme = getStoredTheme();
	const theme = storedTheme || 'system';
	setTheme(theme);
}

/**
 * 监听系统主题变化
 */
function watchSystemTheme() {
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	
	const handleChange = () => {
		const storedTheme = getStoredTheme();
		if (storedTheme === 'system' || !storedTheme) {
			setTheme('system');
		}
	};

	// 使用 addEventListener 而不是 addListener（已废弃）
	if (mediaQuery.addEventListener) {
		mediaQuery.addEventListener('change', handleChange);
	} else {
		// 兼容旧浏览器
		mediaQuery.addListener(handleChange);
	}
}

// 导出供外部使用的函数
export function getTheme(): Theme {
	return (getStoredTheme() || 'system') as Theme;
}

export function setThemePreference(theme: Theme) {
	setTheme(theme);
}

// 页面加载时初始化
if (typeof document !== 'undefined') {
	// 立即执行，避免闪烁
	initTheme();
	
	// DOM 加载完成后监听系统主题变化
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', watchSystemTheme);
	} else {
		watchSystemTheme();
	}
}
