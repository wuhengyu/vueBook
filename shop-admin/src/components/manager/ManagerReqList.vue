<!-- 店长申请审批列表 -->
<template>
    <el-scrollbar always>
    <div class="content-container">
        <div>
            <el-container class="content-row">
                <div class="input-tip">
                    用户状态:
                </div>
                <div class="input-field">
                    <el-input v-model="queryParams.state"></el-input>
                </div>
                <div class="input-tip">
                    用户信息:
                </div>
                <div class="input-field">
                    <el-input v-model="queryParams.info"></el-input>
                </div>
            </el-container>
            <el-container class="content-row">
                <el-button type="primary" @click="search">搜索</el-button>
                <el-button type="primary" @click="clear">清空搜索条件</el-button>
            </el-container>
        </div>
        <div>
            <el-table
            :data="managerList"
            tooltip-effect="dark"
            style="width: 100%">
                <el-table-column
                label="用户信息"
                width="500"
                prop="people">
                </el-table-column>
                <el-table-column
                label="状态"
                width="200">
                    <template #default="scope">
                          <el-tag :type="scope.row.state ? 'success' : 'warning'">{{scope.row.state ? '通过' : '待审核'}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                label="更新时间"
                width="300"
                prop="time">
                </el-table-column>
                <el-table-column
                label="添加时间"
                width="300"
                prop="reqTime">
                </el-table-column>  
                <el-table-column
                label="操作"
                width="200"
                prop="reqTime">
                    <template #default='scope'>
                        <el-button size="small" @click='click(scope.row)' :type="scope.row.state ? 'danger' : 'success'">{{scope.row.state ? '下线' : '通过'}}</el-button>
                    </template>
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
            queryParams: {
                state:"",
                info:""
            },
            managerList:[]
        }
    },
    mounted() {
        this.managerList = Mock.getManagerReqList();
    },
    methods: {
        search() {
            this.$message({
                type:'success',
                message:'请求参数：' + JSON.stringify(this.queryParams)
            });
            this.managerList = Mock.getManagerReqList();
        },
        clear() {
            this.queryParams = {
                state:"",
                info:""
            };
            this.managerList = Mock.getManagerReqList();
        },
        // 接收当前行数据item作为参数，然后简单地切换item.state的布尔值，即如果当前状态为真，则设为假，反之亦然
        // item是一个变量，它代表了在表格(el-table)中每一行的数据对象。当用户点击某一行的操作按钮时，Vue会将该行对应的row数据作为参数传递给事件处理器函数
        click(item) {
            item.state = !item.state;
        }     
    }
}
</script>