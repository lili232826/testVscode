import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

/**
 * Vuex全局状态管理
 * @param options {Array} 用于渲染tabs的数组
 */
const store = new Vuex.Store({
    state: {
        options: [],
        activeIndex: '/user',
        userInfo: {},
        token: '',
        msgNum: 40,
        testFnObj: {
            "id": 10,
            "name": "张三"
        },
        test: 88,
        arrList: [1, 2, 4, 5, 8, 9, 11]
    },
    mutations: { //同步函数
        // 添加tabs
        add_tabs(state, data) {
            this.state.options.push(data);
        },
        // 删除tabs
        delete_tabs(state, route) {
            let index = 0;
            for (let option of state.options) {
                if (option.route === route) {
                    break;
                }
                index++;
            }
            this.state.options.splice(index, 1);
        },
        // 设置当前激活的tab
        set_active_index(state, index) {
            this.state.activeIndex = index;
        },
        // 设置详情信息
        save_detail_info(state, info) {
            this.state.userInfo = info;
        },
        testFn(state) {
            state.msgNum = 200;
        },
        setMsgNum(state, n) {
            state.msgNum = n;
            console.log("jjj")
        }
    },
    getters: {
        arrFilter(state) {
            return state.arrList.filter(item => item % 2 !== 0)
        },
        userInfo(state) {
            return state.token;
        }
    },
    actions: {
        setCount({ commit }, data) {
            commit('setMsgNum', data.count)
        }
    }

});

export default store;