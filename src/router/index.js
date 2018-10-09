import Vue from 'vue'
import Router from 'vue-router'

//首页
import Index from "@/components/Index"
// 用户管理
import UserList from '@/components/UserList'
//登陆人的信息
import PersonalInfo from '@/components/PersonalInfo'

//意见反馈

import Suggest from "@/components/Suggest"
import Template from '@/components/template'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/index', //重定向到默认首页
        }, {
            path: '/index',
            name: '首页',
            component: Index,
            children: [
                { path: 'personalInfo', component: PersonalInfo, name: '个人信息' }
            ]
        },
        {
            path: '/user',
            name: '用户管理',
            component: UserList,
        },
        {
            path: '/userInfo/:id',
            name: '用户详情页',
            component: Template
        },
        {
            path: '/psd',
            name: '密码管理',
            component: Template
        },
        {
            path: '/salary',
            name: '工资管理',
            component: Template
        },
        {
            path: '/attendence',
            name: '考勤管理',
            component: Template
        },
        {
            path: '/perform',
            name: '绩效管理',
            component: Template
        },
        {
            path: '/admin',
            name: '系统管理',
            component: Template
        },
        {
            path: '/feedback',
            name: '意见反馈',
            component: Suggest
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})