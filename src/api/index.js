export default {
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: false,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    //本地环境
    pro: 'http://192.168.0.111:8090/api/',
    dev: 'http://192.168.0.111:8090/api/',
    //测试环境
    // pro: 'http://52.81.24.111:8072/api/',
    // dev: 'http://52.81.24.111:8072/api/',
  }
}
