import request from '/@/utils/request';

/**
 * 用户接口
 * @method getUserList 获取用户列表
 * @method allMenu 获取菜单接口，平铺
 * @method saveOrUpdateMenu 更新保存菜单
 */
export function useUserApi() {
	return {
		signIn: (data) => {
			return request({
				url: '/user/login',
				method: 'POST',
				data,
			});
		},
		logout: () => {
			return request({
				url: '/user/logout',
				method: 'POST',
				data: {}
			});
		},
		getList: (data) => {
			return request({
				url: '/user/list',
				method: 'POST',
				data,
			});
		},
		saveOrUpdate(data) {
			return request({
				url: '/user/saveOrUpdate',
				method: 'POST',
				data
			})
		},
		deleted(data) {
			return request({
				url: '/user/deleted',
				method: 'POST',
				data
			})
		},
		getMenuByToken() {
			return request({
				url: '/user/getMenuByToken',
				method: 'POST',
				data: {}
			})
		},
		getUserInfoByToken() {
			return request({
				url: '/user/getUserInfoByToken',
				method: 'POST',
				data: {}
			})
		},
		userRegister: (data) => {
			return request({
				url: '/user/userRegister',
				method: 'POST',
				data,
			});
		},
		resetPassword: (data) => {
			return request({
				url: '/user/resetPassword',
				method: 'POST',
				data,
			});
		},
	};
}
