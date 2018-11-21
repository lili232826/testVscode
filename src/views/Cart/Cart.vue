<template>
    <div class="container"> 
        <app-header></app-header>
        <div class="cart-wrap clear" ref="cartWrap">
            <div class="top-bar clear">
                <div class="left-f cart-filter-bar"><strong>全部商品</strong><span style="margin-left:8px;color:#f40;">{{listAllNum}}</span></div> 
                <div class="right-f">已选商品（不喊运费）<span ref="" style="color:#f40;margin-right:6px">{{sumCount}}</span><el-button type="info" size="mini" v-bind:disabled="!isActive" v-bind:class="{ active: isActive }">结算</el-button></div>
            </div>
            <div class="bar-wrap">
                <div class="th th-chk"><el-checkbox v-model="checked" @change="handleCheckedAll">全选</el-checkbox></div>
                <div class="th th-item">商品信息</div>
                <div class="th th-info"></div>
                <div class="th th-price">单价</div>
                <div class="th th-amount">数量</div>
                <div class="th th-sum">金额</div>
                <div class="th th-op">操作</div>
            </div>
            <div class="shop-wrap">
                <div class="shop-list" v-for="(shop,index) in listDate" :key="index">
                    <div class="shop-bar">
                        <el-checkbox  v-model="checkAll[index]" @change="handleCheckShop(checkAll[index],index)"></el-checkbox>
                        <i></i>
                        店铺：<span>{{shop.name}}</span>
                    </div>
                    <div class="product-list" >
                        <el-checkbox-group v-model="checkedList[index]" @change="handleCheckedList(checkedList[index],index)">
                            <div class="list clear" v-for="(item ,ind) in shop.product" :key="ind" @click="initP(item.price)">
                                <div class="td td-chk">
                                    <!-- <el-checkbox v-model="checked"></el-checkbox> -->
                                    
                                        <el-checkbox :label="item.id" :key="item.id"></el-checkbox>
                                    
                                </div>
                                <div class="td td-item">
                                    <div class="item-pic">
                                        <a href=""><img v-bind:src="'../../../static/images/shop_product/'+item.img" alt=""></a>
                                    </div>
                                    <div class="item-info">
                                        <div class="item-basic-info">
                                            {{item.info}}
                                        </div>
                                        <div class="item-other-info" style="margin-top:30px;">
                                            <i class="el-icon-goods fa-2x" style="color:#f40"></i>
                                            <i class="el-icon-view fa-2x" style="color:#f40"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="td td-info">
                                    <div class="item-props">
                                        <div>颜色分类：{{item.props.color}}</div>
                                        <div>尺码：{{item.props.size}}</div>
                                    </div>
                                </div>
                                <div class="td td-price">
                                    <div class="item-price">
                                        <div class="old-price"><strong>{{item.price.old}}</strong></div>
                                        <div class="new-price"><strong>{{item.price.new}}</strong></div>
                                    </div>
                                </div>
                                <div class="td td-amount">
                                    <div class="item-amount">
                                        <div>
                                            <el-input-number size="mini" v-model="inputNum[index][ind]" :min="1" :max="10" label="描述文字" @change="handleChangeNum(inputNum[index][ind],index,ind)"></el-input-number>
                                        </div>
                                    </div>
                                </div>
                                <div class="td td-sum">
                                    <div class="item-sum">
                                        <strong>{{item.price.new}}</strong>
                                    </div>
                                </div>
                                <div class="td td-op">
                                    <div class="item-op">
                                        <a href="">移入收藏夹</a>
                                        <a href="">删除</a>
                                    </div>
                                </div>
                            </div>
                        </el-checkbox-group>
                    </div>
                </div>
            </div>
            <div class="bar-bottom" v-bind:class="{fixedBottom: isFixed }">
                <div class="select-all">
                    <el-checkbox v-model="checked">全选</el-checkbox>
                </div>
                <div class="operations">
                    <el-button type="danger" icon="el-icon-delete" circle size="mini" style="margin-left:16px;"></el-button>
                </div>
                <div class="float-bar-right">
                    <div>已选择商品<strong>{{checkedNum}}</strong>件</div>
                    <div style="margin-left:24px;">合计(不含运费):<strong>{{sumCount}}</strong>元</div>
                    <el-button ref="countBtn" style="margin-left:10px;" type="info" v-bind:disabled="!isActive" v-bind:class="{ active: isActive }">结算</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Cookies from 'js-cookie';
import AppHeader from "@/components/common/AppHeader";
const city=[100,101,102,103,1011]
export default {
    name:"cart",
    components:{
       AppHeader 
    } ,
    data(){
        return{
            listDate:[],
            checkAll:[],
            isIndeterminate: true,
            checked:false,
            inputNum:[],
            isFixed:true,
            cartWrapH:0,
            listAllNum:0,
            checkedNum:0,
            checkedList:[],
            sumCount:0,
            isActive:false
        }
    },
    computed:{
       
    },
    created(){
        
    },
    beforeMount(){
        this.getList();
    },
    mounted(){
        this.fixedBar();
    },
    ready(){
        
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
                for(var i=0;i<Vue.listDate.length;i++){
                    Vue.listAllNum+=Vue.listDate[i]["product"].length;
                    // 初始化默认选中状态,此时为空
                    let checkArr = []
                    this.checkedList.push(checkArr);
                    //；用Vue.set，支持响应式
                    Vue.$set(this.checkAll,i,false)
                    //this.checkAll.push(false)
                    //this.inputNum[i]=[];
                    Vue.$set(this.inputNum,i,[]);
                    for(var j=0;j<Vue.listDate[i]["product"].length;j++){
                        Vue.$set(this.inputNum[i],j,1);
                    }
                }
                
                Vue.$nextTick(function () {
                     // => '更新完成'
                    let cartWrap=Vue.$refs.cartWrap;
                    this.cartWrapH=cartWrap.offsetHeight;
                })
                //console.log(res.data.data.data)
            }).catch((error)=>{
                console.log(error)
            })
        },
        fixedBar(){
            var Vue=this;
            let screenH=document.body.clientHeight||document.documentElement.clientheight;
            window.addEventListener("scroll", function(e){
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                let cartWrapH =Vue.cartWrapH;
                //console.log(scrollTop+screenH,cartWrapH)
                if(cartWrapH>scrollTop+screenH){
                    Vue.isFixed=true;
                }else{
                    Vue.isFixed=false;
                }
                //console.log(cartWrap)
                
            })
        },
        handleCheckedList(listed,index){
           // this.checkAll:[false],false,false]
           //this.checkedList:[[100,102],[111,112]]
            if(listed.length==this.listDate[index]['product'].length){
                this.$set(this.checkAll,index,true)
                //this.checkAll[index]=true;
            }else{
                 this.$set(this.checkAll,index,false)
                 //this.checkAll[index]=false;
            }
            var count=0;
            for(var n=0;n<this.checkAll.length;n++){  
                if(this.checkAll[n]){
                    count++;
                }         
            }
            if(count==this.checkAll.length){
                this.checked=true;
            }else{
                this.checked=false;
            }
            console.log(count,this.checkAll,"pppp")
            this.countSum()
        },
        handleCheckShop(value,index){
            let idArr=[];
            for(var i=0;i<this.listDate[index]["product"].length;i++){
                idArr.push(this.listDate[index]["product"][i]["id"])
            };
            //console.log(idArr)
            if(value){
                this.$set(this.checkedList,index,idArr);

            }else{
                this.$set(this.checkedList,index,[])
            }
            var count=0;
            for(var n=0;n<this.checkAll.length;n++){  
                if(this.checkAll[n]){
                    count++;
                }         
            }
            if(count==this.checkAll.length){
                this.checked=true;
            }else{
                this.checked=false;
            }
            this.countSum()
        },
        handleCheckedAll(value){
            if(value){
                for(var j=0;j<this.listDate.length;j++){
                    this.$set(this.checkAll,j,true);//店铺的选择
                    var idArr=[];
                    for(var i=0;i<this.listDate[j]["product"].length;i++){
                        idArr.push(this.listDate[j]["product"][i]["id"])
                    };
                    this.$set(this.checkedList,j,idArr)//设置每个商品的；
                }
                
            }else{
                for(var j=0;j<this.listDate.length;j++){
                    this.$set(this.checkAll,j,false);//店铺的选择        
                    this.$set(this.checkedList,j,[])
                }
            }
            this.countSum();
            this.findIdPrice(100,this.listDate)
        },
        handleChangeNum(value,index,ind){
           this.$set(this.inputNum[index],ind,value);//修改数量；
           this.countSum();
        },
        countSum(){
            var num=0,priceCount=0;
            for(var i=0;i<this.checkedList.length;i++){
                for(var j=0;j<this.checkedList[i].length;j++){
                    var id=this.checkedList[i][j];
                    var resObj=this.findIdPrice(id,this.listDate),
                    price=resObj['price'],index=resObj['index'].split("-"),
                    count=this.inputNum[index[0]][index[1]];
                    priceCount+=price*count;
                }
                num+=this.checkedList[i].length;
                
            }
            this.checkedNum=num;
            this.isActive= num>0 ? true :false;
            var btn=this.$refs.countBtn;
            console.log(btn,"btn")
            this.sumCount=priceCount.toFixed(2);

            console.log(price,count,"kkk")
        },
        findIdPrice(id,listDate){
            var obj={};
            for(var i=0;i<listDate.length;i++){
                var productList=listDate[i]['product'];
                for(var j=0;j<productList.length;j++){
                    if(id==productList[j]['id']){
                        obj['price']=productList[j]['price']['new'].substring(1);
                        obj['index']=i+'-'+j;
                    }
                }
            }
            return obj;
        },
        initP(p){
            console.log(p,"pppp")
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
        width: 980px;
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
        &.fixedBottom{
            position: fixed;
            bottom: 0px;
            z-index:9999;
        }
    }
}
.active{
    background:#f40;
}
</style>


