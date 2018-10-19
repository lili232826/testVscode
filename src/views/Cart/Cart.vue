<template>
    <div class="container"> 
        <app-header></app-header>
        <div class="cart-wrap clear">
            <div class="top-bar clear">
                <div class="left-f cart-filter-bar"><strong>全部商品</strong><span style="margin-left:8px;color:#f40;">5</span></div> 
                <div class="right-f">已选商品（不喊运费）<span style="color:#f40;margin-right:6px">0.00</span><el-button type="info" size="mini" disabled="">结算</el-button></div>
            </div>
            <div class="bar-wrap">
                <div class="th th-chk"><el-checkbox v-model="checked">全选</el-checkbox></div>
                <div class="th th-item">商品信息</div>
                <div class="th th-info"></div>
                <div class="th th-price">单价</div>
                <div class="th th-amount">数量</div>
                <div class="th th-sum">金额</div>
                <div class="th th-op">操作</div>
            </div>
            <div class="shop-wrap">
                <div class="shop-list ">
                    <div class="shop-bar">
                        <el-checkbox ></el-checkbox>
                        <i></i>
                        店铺：<span>蒙沛旗舰店</span>
                    </div>
                    <div class="product-list">
                        <div class=" list clear">
                            <div class="td td-chk"><el-checkbox v-model="checked"></el-checkbox></div>
                            <div class="td td-item">
                                <div class="item-pic">
                                    <a href=""><img src="../../../static/images/shop_product/product_1.jpg" alt=""></a>
                                </div>
                                <div class="item-info">
                                    <div class="item-basic-info">
                                        袜子女中筒纯棉堆堆袜韩版学院风日系黑色长袜女秋冬百搭韩国潮款
                                    </div>
                                    <div class="item-other-info" style="margin-top:30px;">
                                        <i class="el-icon-goods fa-2x" style="color:#f40"></i>
                                        <i class="el-icon-view fa-2x" style="color:#f40"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="td td-info">
                                <div class="item-props">
                                    <div>颜色分类：【3双装-纯色款】酒红+玫红+姜黄</div>
                                    <div>尺码：均码（34-40）收藏宝贝加购物车享受快速发货</div>
                                </div>
                            </div>
                            <div class="td td-price">
                                <div class="item-price">
                                    <div class="old-price"><strong>￥49.90</strong></div>
                                    <div class="new-price"><strong>￥18.90</strong></div>
                                </div>
                            </div>
                            <div class="td td-amount">
                                <div class="item-amount">
                                    <div>
                                        <el-button-group>
                                        <el-button style="pdidng:7px 6px;width:20px;display:inline-block;float:left" size="mini">-</el-button>
                                        <div style="width:38px;display:inline-block;padding:0;float:left"><el-input v-model="input" size="mini">1</el-input></div>
                                        <el-button style="pdidng:7px 6px;width:20px;display:inline-block;float:left" size="mini">+</el-button>
                                        </el-button-group>
                                    </div>
                                </div>
                            </div>
                            <div class="td td-sum">
                                <div class="item-sum">
                                    <strong>￥18.90</strong>
                                </div>
                            </div>
                            <div class="td td-op">
                                <div class="item-op">
                                    <a href="">移入收藏夹</a>
                                    <a href="">删除</a>
                                </div>
                            </div>
                        </div>
                        <div class=" list clear">
                            <div class="td td-chk"><el-checkbox v-model="checked"></el-checkbox></div>
                            <div class="td td-item">
                                <div class="item-pic">
                                    <a href=""><img src="../../../static/images/shop_product/product_1.jpg" alt=""></a>
                                </div>
                                <div class="item-info">
                                    <div class="item-basic-info">
                                        袜子女中筒纯棉堆堆袜韩版学院风日系黑色长袜女秋冬百搭韩国潮款
                                    </div>
                                    <div class="item-other-info" style="margin-top:30px;">
                                        <i class="el-icon-goods fa-2x" style="color:#f40"></i>
                                        <i class="el-icon-view fa-2x" style="color:#f40"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="td td-info">
                                <div class="item-props">
                                    <div>颜色分类：【3双装-纯色款】酒红+玫红+姜黄</div>
                                    <div>尺码：均码（34-40）收藏宝贝加购物车享受快速发货</div>
                                </div>
                            </div>
                            <div class="td td-price">
                                <div class="item-price">
                                    <div class="old-price"><strong>￥49.90</strong></div>
                                    <div class="new-price"><strong>￥18.90</strong></div>
                                </div>
                            </div>
                            <div class="td td-amount">
                                <div class="item-amount">
                                    <div>
                                        <el-button-group>
                                        <el-button style="pdidng:7px 6px;width:20px;display:inline-block;float:left" size="mini">-</el-button>
                                        <div style="width:38px;display:inline-block;padding:0;float:left"><el-input v-model="input" size="mini">1</el-input></div>
                                        <el-button style="pdidng:7px 6px;width:20px;display:inline-block;float:left" size="mini">+</el-button>
                                        </el-button-group>
                                    </div>
                                </div>
                            </div>
                            <div class="td td-sum">
                                <div class="item-sum">
                                    <strong>￥18.90</strong>
                                </div>
                            </div>
                            <div class="td td-op">
                                <div class="item-op">
                                    <a href="">移入收藏夹</a>
                                    <a href="">删除</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bar-bottom">
                <div class="select-all">
                    <el-checkbox v-model="checked">全选</el-checkbox>
                </div>
                <div class="operations">
                    <el-button type="danger" icon="el-icon-delete" circle size="mini" style="margin-left:16px;"></el-button>
                </div>
                <div class="float-bar-right">
                    <div>已选择商品<strong>0</strong>件</div>
                    <div style="margin-left:24px;">合计(不含运费):<strong>0.00</strong>元</div>
                    <el-button style="margin-left:10px;" type="info" disabled="">结算</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Cookies from 'js-cookie';
import AppHeader from "@/components/common/AppHeader"
export default {
    name:"cart",
    components:{
       AppHeader 
    } ,
    data(){
        return{
            listDate:[],
            checked:false,
            input:8
        }
    },
    computed:{
       
    },
    mounted(){
        this.getList()
    },
    methods:{
        getList(){
            var Vue=this;
            this.axios.get("/api/shop",{
                params:{
                    "userId":100
                },
                headers:{
                    "token":"6666"
                }
            }).then((res)=>{
                Vue.listDate=res.data.data.data;
                //console.log(res.data.data.data)
            }).catch((error)=>{
                //console.log(error)
            })
        }
    }
    
}
</script>
<style scoped lang="scss">
@import "../../assets/style/mixin.scss";
.clear:after {
    content: '';
    display: block;
    clear: both;
}
.cart-wrap{
    width: 990px;
    margin:20px auto;
    .left-f{
        float: left
    };
    .right-f{
        float: right
    };
    .top-bar{
        width: 100%;
    }
    .top-bar{
        padding:10px 0px;
        font-size: 12px;
        border-bottom:2px solid #e6e6e6;
        strong{
            color:#f40;
            font-size: 16px;
        }
    }
    .bar-wrap,.shop-wrap{
        .th,.td{
            float: left;
            overflow: hidden;
            font-size: 12px;
        }
        .th-chk,.td-chk{
            width: 80px;
        }
        .th-item,.td-item{
            width: 302px;
            padding-left: 91px;
            box-sizing: border-box
        }
        .th-info,.td-info{
            width: 172px;
        }
        .th-price,.td-price{
            width: 120px;
        }
        .th-amount,.td-amount{
            width: 120px;
        }
        .th-sum,.td-sum{
            width: 105px;
        }
        .th-op,.td-op{
            width:64px;
        }
    }
    .bar-wrap{
        height: 50px;
        label{
            padding-left:10px;
        }
        .th{
            line-height: 50px;
            height: 50px;
        }
    }
    .shop-wrap{
        .shop-list{
            margin-bottom:15px;
        }
        .shop-bar{
            height: 38px;
            padding-left:10px;
            font-size: 12px;
            line-height: 38px;
        }
        .product-list{
            border: 1px solid #ccc;
            div.list{
                padding:20px;
                background: #fcfcfc;
                 border-bottom: 1px solid #e7e7e7;
            }
        }
        .td-chk{
            width: 45px;
        }
        .td-item{
            padding-left: 0px;
            .item-pic{
                width: 80px;
                height: 80px;
                border: 1px solid #eee;
                float: left;
                overflow: hidden;
                a{
                    display: table-cell;
                    width: 80px;
                    height: 80px;
                    vertical-align: middle;
                }
                img{
                    width: 80px;
                    height: 80px;
                    vertical-align: middle 
                }
            }
            .item-info{
                margin-left:90px;
                padding-right: 25px;
            }
        }
        .td-price{
            .old-price{
                color: #9c9c9c;
                text-decoration: line-through;
                font-family: Verdana,Tahoma
            }
        }
        .td-info{
            padding-right:20px;
            .item-props{
                color: #9c9c9c;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: 0 5px 0 15px;
            }
        }
        .td-amount{
            
        }
        .td-sum{
            .item-sum{
                color: #f40;
                font-weight: bold
            }
        }
        
    }
    .bar-bottom{
        height: 40px;
        line-height: 40px;
        background: #e5e5e5;
        font-size: 12px;
        padding-left:10px;
        strong{
            color: #f40;
            margin: 6px;
        }
        .select-all,.operations{
            float: left;
        }
        .float-bar-right{
            float: right;
            div{
                float: left;
            }
        }
    }
}

</style>


