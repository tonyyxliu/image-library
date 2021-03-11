/* -------------------------
 * !!! Router config文件 !!!
 * -------------------------
 * Usage: 明确网站路由规则（URL -> component）
 * 引入路由懒加载技术，否则会报错：Object are not valid as a React child (found:[object Promise]),if you meant to render a collection
 * （注意：路由懒加载必须配合Suspense一起使用）
 */ 

import react, { lazy } from 'react';


let Config = [ {
    name: "home page",
    path: "/",
    exact: true,
    component: lazy( () => import("../App") ),
}, {
    name: "主页面",
    path: "/image-library",
    exact: true,
    component: lazy( () => import("../pages/Index/index") ),
}, {
    name: "根据宽高访问图片界面",
    path: "/image-library/:width/:height?",       // Version Difference for optional router notation
    exact: true,
    component: lazy( () => import("../pages/GetImage/index") )
} ];

export default Config;