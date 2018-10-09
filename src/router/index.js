import Vue from 'vue'
import Router from 'vue-router'


//登陆页
import Login from "@/views/Login/Login"

//layout
import Layout from "@/views/Layindex/Layout"
//首页
import Index from '@/components/Index'
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
            path: '/login',
            name: '登陆',
            component: Login
        }, {
            path: '/',
            redirect: '/index/pic', //重定向到默认首页
        }, {
            path: '/index',
            name: '',
            component: Layout,
            redirect: '/index/pic',
            children: [
                { path: 'pic', component: Index, name: '首页' },
                { path: 'personalInfo', component: PersonalInfo, name: '个人信息' }
            ]
        },
        {
            path: '/user',
            name: '用户管理',
            component: Layout,
            redirect: '/user/UserList',
            children: [
                { path: 'UserList', component: UserList, name: '用户管理' }
            ]
        },
        {
            path: '/userInfo/:id',
            name: '用户详情页',
            component: Layout,
            component: Template
        },
        {
            path: '/psd',
            name: '密码管理',
            component: Layout,
            redirect: '/psd/psd',
            children: [
                { path: 'psd', component: Template, name: '密码管理' }
            ]

        },
        {
            path: '/salary',
            name: '工资管理',
            component: Layout,
            redirect: '/salary/salary',
            children: [
                { path: 'salary', component: Template, name: '工资管理' }
            ]
        },
        {
            path: '/attendence',
            name: '考勤管理',
            component: Layout,
            redirect: '/attendence/attendence',
            children: [
                { path: 'attendence', component: Template, name: '考勤管理' }
            ]
        },
        {
            path: '/perform',
            name: '绩效管理',
            component: Layout,
            redirect: '/perform/perform',
            children: [
                { path: 'perform', component: Template, name: '绩效管理' }
            ]
        },
        {
            path: '/admin',
            name: '系统管理',
            component: Layout,
            redirect: '/admin/admin',
            children: [
                { path: 'admin', component: Template, name: '系统管理' }
            ]
        },
        {
            path: '/feedback',
            name: '意见反馈',
            component: Layout,
            redirect: '/feedback/feedback',
            children: [
                { path: 'feedback', component: Suggest, name: '意见反馈' }
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})