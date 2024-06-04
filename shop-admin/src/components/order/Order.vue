<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-scrollbar always>
    <div class="content-container">
        <!-- input -->
        <div>
            <el-container class="content-row">
                <div class="input-tip">
                    商品名称:
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.good"></el-input>
                </div>
                <div class="input-tip">
                    收货人:
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.consignee"></el-input>
                </div>
                <div class="input-tip">
                    支付时间:
                </div>
                <div class="input-field">
                    <el-date-picker
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    v-model="queryParam.payTime">
                    </el-date-picker>
                </div>
            </el-container>
            <el-container class="content-row">
                <div class="input-tip">
                    用户名称:
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.name"></el-input>
                </div>
                <div class="input-tip">
                    手机号:
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.phone"></el-input>
                </div>
                <div class="input-tip">
                    发货时间:
                </div>
                <div class="input-field">
                    <el-date-picker
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    v-model="queryParam.sendTime">
                    </el-date-picker>
                </div>                
            </el-container>
        </div>
        <div class="content-row">
            <el-container>
                <el-button type="primary" @click="requestData">筛选</el-button>
                <el-button type="danger" @click="clear">清空筛选</el-button>
                <el-button type="primary" @click="exportData">导出</el-button>
                <el-button type="primary" @click="dispatchGoods">批量发货</el-button>
                <el-button type="primary" @click="exportDispatchGoods">下载批量发货样单</el-button>
            </el-container>
        </div>
        <!-- list -->
        <div>
            <el-tabs type="card" @tab-click="handleClick">
                <el-tab-pane label="全部"></el-tab-pane>
                <el-tab-pane label="未支付"></el-tab-pane>
                <el-tab-pane label="已支付"></el-tab-pane>
                <el-tab-pane label="待发货"></el-tab-pane>
                <el-tab-pane label="已发货"></el-tab-pane>
                <el-tab-pane label="支付超时"></el-tab-pane>
            </el-tabs>
            <!-- tooltip-effect="dark"：设置行内提示框的样式为dark。
            stripe：设置表格为斑马纹样式。
            @selection-change="handleSelectionChange"：监听表格选中项的变化事件，当选中项发生变化时调用handleSelectionChange方法。
            border：设置表格显示边框。 -->
            <el-table
            ref="multipleTable"
            :data="orderList"
            tooltip-effect="dark"
            style="width: 100%"
            stripe
            border
            @selection-change="handleSelectionChange">
            <!-- type="selection"表示这一列是复选框类型的选择列，用于勾选表格中的行。 -->
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                label="商品"
                width="200"
                prop="name">
                </el-table-column>
                <el-table-column
                label="总价/数量"
                width="100"
                prop="price">
                </el-table-column>
                <el-table-column
                label="买家信息"
                width="100"
                prop="buyer">
                </el-table-column>
                <el-table-column
                label="交易时间"
                width="200"
                prop="time">
                </el-table-column>
                <el-table-column
                label="分销信息"
                width="100"
                >
                <!-- v-slot 有对应的简写 # -->
                <!-- <template>用于定义一个插槽（slot）的内容。#default是具名插槽的语法，表示这是组件（这里是el-table-column）的默认插槽。 -->
                    <!-- 当组件需要自定义内容时，可以使用插槽将内容插入到组件的特定位置。 -->
                    <!-- 在这里，我们自定义了表格单元格（cell）的内容，而不是使用组件默认提供的样式或内容 -->
                    <!-- scope参数是Vue的插槽 prop，它提供了一种方式来访问父组件传递给插槽的数据。 -->
                    <template #default="scope">
                        <el-tag size="large" :type="scope.row.role ? 'primary' : 'info'">{{ scope.row.role ? '经理' : '分销员' }}</el-tag>          
                    </template>
                </el-table-column>
                <el-table-column
                label="状态"
                width="100">
                    <template #default="scope">
                        <el-tag size="large" :type="scope.row.state ? 'success' : 'danger'">{{ scope.row.state ? '已完成' : '未完成' }}</el-tag>          
                    </template>               
                </el-table-column>
                <el-table-column
                label="操作"
                width="200">
                    <template #default="scope">
                        <el-button size="small" type="danger" @click="deleteItem(scope.$index)">删除</el-button>
                        <el-button size="small" type="primary" @click="callUser(scope.row.phone)">联系客户</el-button>            
                    </template>     
                </el-table-column>
                <el-table-column
                label="支付方式"
                width="150">
                    <template #default="scope">
                        <el-tag size="large" type="primary">{{ scope.row.payType ? '微信' : '支付宝' }}</el-tag>          
                    </template>
                </el-table-column>
                <el-table-column
                label="来源"
                width="350"
                prop="source">
                </el-table-column>
            </el-table>
        </div>
    </div>
</el-scrollbar>
</template>

<script>
import Mock from '../../mock/Mock'
import Tools from '../../tools/Tools'
export default {
    data() {
        return {
            // 订单列表数据
            orderList:[],
            // 筛选订单的参数
            queryParam:{
                good:"",
                consignee:"",
                phone:"",
                name:"",
                payTime:"",
                sendTime:""
            },
            // 当前选中的订单对象
            multipleSelection:[]
        }
    },
    // 生命周期钩子在Vue组件被挂载到DOM后立即调用。也就是说，当组件初次渲染时，mounted 会被执行
    // mounted负责初次加载时的数据获取
    // this 指向当前组件实例，所以我们可以使用 this.orderList 来访问和修改组件的数据
    mounted () {
        // 0是普通订单 1是秒杀订单
        this.orderList = Mock.getOrder(this.$route.params.type);
    },
    // 路由更新时刷新数据
    // 导航守卫，它在当前组件即将被复用但参数发生变化时调用
    // 在不离开当前组件的情况下改变路由参数（如通过链接改变type），Vue会尝试复用当前组件并更新其数据以反映新的路由状态，这时 beforeRouteUpdate 被触发
    // 当路由参数变化时，组件能展示与新参数对应的新订单列表，而无需重新加载整个组件
    // 处理因路由参数变化导致的动态数据更新
    beforeRouteUpdate (to) {
        // 接收的参数包括 to、from 和 next。
        // 这里的 to 参数代表即将进入的目标路由对象，from 是当前导航将要离开的路由，next 是一个必须调用的函数，用于告诉Vue Router是否可以继续进行导航
        // 使用 to.params.type 来获取即将进入的路由的参数，而不是使用 this，因为此时我们关注的是路由的变化，而非组件实例的状态
        this.orderList = Mock.getOrder(to.params.type);
    },
    methods : {
        // 模拟请求数据
        requestData() {
            // $message 是 Element UI 或其他类似 UI 库提供的组件，用于显示全局提示信息
            this.$message({
                type:'success',
                // JSON 格式字符串化
                message:'筛选请求参数：' + JSON.stringify(this.queryParam)
            })
            // 返回的是一个模拟的订单列表
            this.orderList = Mock.getOrder(this.$route.params.type);
        },
        // 切换Tab 刷新数据
        handleClick(tab) {
            this.$message({
                type:'success',
                // tab包含了被点击tab的相关信息。其中tab.props.label就是用来获取被点击tab的标签名称或者说标题
                message:'切换tab刷新数据：' + tab.props.label
            })
            // 返回的是一个模拟的订单列表
            this.orderList = Mock.getOrder(this.$route.params.type);
        },
        // 清空筛选项
        clear() {
            this.queryParam = {
                good:"",
                consignee:"",
                phone:"",
                name:"",
                payTime:"",
                sendTime:""
            }
            this.orderList = Mock.getOrder(this.$route.params.type);
        },
        // 导出订单
        exportData() {
            Tools.exportJson('订单.json', JSON.stringify(this.orderList));
        },
        // 导出选中的发货单
        exportDispatchGoods() {
            Tools.exportJson('发货单.json', JSON.stringify(this.multipleSelection));
        },
        // 处理多选
        // val 参数在 handleSelectionChange 方法中代表当前被选中的表格行的数据，它是一个数组，包含所有选中的行。
        // 这是 Element UI 的 el-table 组件中 @selection-change 事件默认传递的参数。
        // @selection-change 事件：当表格的选中状态发生变化时会触发这个事件。事件会传递一个参数 val，它是一个数组，包含当前选中的所有行的数据。
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        // 进行发货
        dispatchGoods() {
            this.$message({
                type:'success',
                message:'发货商品：' + JSON.stringify(this.multipleSelection)
            })
        },
        // 删除订单
        deleteItem(item) {
            // splice() 是 JavaScript 中数组对象的一个方法，它允许你在数组中添加、删除或替换元素。
            // item参数是一个整数，指定修改开始的位置。如果为负数，将从数组末尾开始计数。
            // deleteCount: 可选，一个整数，表示要删除的元素个数。
            // item1, ..., itemX: 可选，要在指定位置插入的元素。
            this.orderList.splice(item, 1)
        },
        // 联系用户
        callUser(item) {
            console.log(item)
            this.$message({
                type:'success',
                message:'联系客户：' + item
            })
        }
    }
}
</script>
