/*
 * @Author       : HR-OA-KTS 黄强 670604@ky-tech.com.cn
 * @Date         : 2023-11-07 16:47:26
 * @Description  : 
 */

import hrButton from './src/hr-button'

hrButton.install = function (Vue) {
  Vue.component(hrButton.name, hrButton);
};

export default hrButton;