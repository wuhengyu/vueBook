<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-scrollbar always>
        <div class="content-container">
        <div>
            <el-container class="content-row">
                <div class="input-tip">
                    商品名称:
                </div>
                <div class="input-field">
                    <el-input v-model="queryParams.name"></el-input>
                </div>
                <div class="input-tip">
                    商品编号:
                </div>
                <div class="input-field">
                    <el-input v-model="queryParams.id"></el-input>
                </div>
                <div class="input-tip">
                    商品分类:
                </div>
                <div class="input-field">
                    <el-select v-model="queryParams.category" placeholder="请选择分类" size="default" style="width: 120px" clearable>
                        <el-option v-for="item in categorys" :key="item.value" :label="item.label" :value="item.label">
                        <!-- <el-option v-for="item in categorys" :key="item" :label="item" :value="item"> -->
                        </el-option>
                    </el-select>
                </div>
            </el-container>
            <el-container class="content-row">
                <div class="input-tip">
                    是否上架:
                </div>
                <div class="input-field">
                    <el-select v-model="sellModeString" placeholder="请选择分类" size="default" style="width: 120px">
                        <el-option key="0" label="否" :value="0"></el-option>
                        <el-option key="1" label="是" :value="1"></el-option>
                        <el-option key="2" label="全部" :value="2"></el-option>
                    </el-select>
                </div>
                <div class="input-tip">
                    是否过期:
                </div>
                <div class="input-field">
                    <el-select v-model="expModeString" placeholder="请选择分类" size="default" style="width: 120px">
                        <el-option key="0" label="否" :value="0"></el-option>
                        <el-option key="1" label="是" :value="1"></el-option>
                        <el-option key="2" label="全部" :value="2"></el-option>
                    </el-select>
                </div>
            </el-container>
        </div>
        <!-- button -->
        <div class="content-row">
            <el-container>
                <el-button type="primary" @click="requestData">查询商品</el-button>
                <el-button type="primary" @click="clear">全部商品</el-button>
                <el-button type="success" @click="addGood">新增商品</el-button>
            </el-container>
        </div>
        <!-- list -->
        <div>
            <el-table
            :data="goodsData"
            tooltip-effect="dark"
            stripe
            border
            style="width: 100%">
            <el-table-column type="selection" width="55" />
                <el-table-column
                label="商品"
                header-align="center"
                align="center"
                width="200px">
                    <template #default="scope">
                        <div style="text-align:center"><el-image :src="scope.row.img" style="width: 50px; height: 50px"/></div>
                        <div style="text-align:center">{{scope.row.name}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                label="价格"
                width="150px"
                sortable 
                align="center"
                header-align="center"
                prop="price">
                </el-table-column>
                <el-table-column
                label="销量"
                width="150px"
                align="center"
                sortable 
                header-align="center"
                prop="sellCount">
                </el-table-column>
                <el-table-column
                label="库存"
                sortable 
                align="center"
                width="150px"
                header-align="center"
                prop="count">
                </el-table-column>
                <el-table-column
                label="退款数量"
                sortable 
                align="center"
                header-align="center"
                width="150px"
                prop="back">
                </el-table-column>
                <el-table-column
                label="退款金额"
                sortable 
                align="center"
                header-align="center"
                width="150px"
                prop="backPrice">
                </el-table-column>
                <el-table-column
                label="操作"
                header-align="center"
                width="200px"
                align="center"
                prop="name">
                    <template #default="scope">
                        <el-button @click="operate(scope.row)" :type="scope.row.state ? 'danger':'success'">{{scope.row.state ? '下架':'上架'}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                label="管理员"
                align="center"
                header-align="center"
                width="100"
                prop="owner">
                </el-table-column>
                <el-table-column
                label="更新时间"
                align="center"
                header-align="center"
                width="250"
                prop="time">
                </el-table-column>
            </el-table>
        </div>
    </div>
</el-scrollbar>
</template>

<script>
import Mock from '../../mock/Mock'
export default {

    data() {
        return {
            goodsData:[],
            // 模拟分类数据
            // categorys:[
            //     "全部",
            //     "男装",
            //     "女装"
            // ],
            categorys:[
                {
                    label:"全部",
                    value:"all"
                },
                {
                    label:"男装",
                    value:"man"
                },
                {
                    label:"女装",
                    value:"woman"
                }
            ],
            queryParams:{
                name:"",
                id:"",
                category:"",
                sellMode:2, //0 否 1是 2全部
                expMode:2,
            }
        }
    },
    computed: {
        sellModeString: {
            get() {
                if (this.queryParams.sellMode == 2) {
                    return '全部'
                }
                return this.queryParams.sellMode == 0 ? '否' : '是'
            },
            // val 是用户从下拉框选择的值（0、1或2），set 方法将这个值赋给 queryParams.sellMode，从而实现了数据模型的更新
            set(val) {
                this.queryParams.sellMode = val
            }
        },
        expModeString: {
            get() {
                if (this.queryParams.expMode == 2) {
                    return '全部'
                }
                return this.queryParams.expMode == 0 ? '否' : '是'
            },
            set(val) {
                this.queryParams.expMode = val
            }
            
        }
    },
    // 组件挂载时获取数据
    mounted () {
        this.goodsData = Mock.getGoods(this.$route.params.type);
    },
    // 路由更新时刷新数据
    beforeRouteUpdate (to) {
        this.goodsData = Mock.getGoods(to.params.type);
    },
    methods: {
        // 获取数据的方法
        requestData() {
            this.$message({
                type:'success',
                message:'筛选请求参数：' + JSON.stringify(this.queryParams)
            })
            this.goodsData = Mock.getGoods(this.$route.params.type);
        },
        // 进行上架下架操作
        operate(item) {
            // 切换布尔值
            item.state = !item.state;
        },
        // 清空筛选项
        clear() {
            this.queryParams = {
                name:"",
                id:"",
                categorys:"",
                sellMode:2, 
                expMode:2,
            }
            this.goodsData = Mock.getGoods(this.$route.params.type);
        },
        // 新增商品
        addGood() {
            this.$router.push({name:'AddGood',params:{type:this.$route.params.type}})
        }
    }
}
</script>