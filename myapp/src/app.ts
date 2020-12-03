declare var window: Window & { __POWERED_BY_QIANKUN__: any, __POWERED_BY_QIANKUN_PARENT__: any };

window.__POWERED_BY_QIANKUN_PARENT__ = true;

export const qiankun = {
	// 应用加载之前
	async bootstrap(props: any) {
		console.log('app1 bootstrap', props);
	},
	// 应用 render 之前触发
	async mount(props: any) {
		if (window.__POWERED_BY_QIANKUN__) {
			localStorage.setItem('qiankunUnioApp', true);
		} else {
			localStorage.setItem('qiankunUnioApp', false);
		}
		console.log('app1 mount', props);
	},
	// 应用卸载之后触发
	async unmount(props: any) {
		console.log('app1 unmount', props);
	}
};

