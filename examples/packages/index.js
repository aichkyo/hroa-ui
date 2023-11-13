/*
 * @Author       : HR-OA-KTS 黄强 670604@ky-tech.com.cn
 * @Date         : 2023-11-07 16:54:33
 * @Description  : 
 */
// 引入组件
import hrButton from "./hr-button";

// 存储组件列表
const components = [
  hrButton,
];

// 定义install方法，接受vue作为参数
const install = function (Vue) {

  // 判断是否安装过了
  if (install.installed) return;

  // 遍历注册全局组件
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

// 判断是否直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  hrButton,
};