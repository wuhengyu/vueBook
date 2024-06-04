<template>
    <el-scrollbar always>
    <div class="content-container">
        <el-container class="content-row">
            <el-button type="primary" @click="addCategory">添加分类</el-button>
        </el-container>
        <div>
        <el-table
        :data="categoryList"
        tooltip-effect="dark"
        style="width: 100%">
            <el-table-column
            label="分类ID"
            width="300"
            prop="id">
            </el-table-column>
            <el-table-column
            label="分类名称"
            width="400"
            prop="name">
            </el-table-column>
            <el-table-column
            label="分类负责人"
            width="400"
            prop="manager">
            </el-table-column>
            <el-table-column
            label="操作"
            width="400"
            prop="time">
                <template #default="scope">
                    <el-button size="small" type="danger" @click="deleteCategory(scope.$index)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    </div>
</el-scrollbar>
</template>

<script>
import { ElMessage, ElMessageBox } from 'element-plus'

export default {
    data() {
        return {
            categoryList:[
                {
                    id:1231,
                    name:"男装",
                    manager:"管理员用户01"
                },{
                    id:1131,
                    name:"男鞋",
                    manager:"管理员用户01"
                },{
                    id:1031,
                    name:"帽子",
                    manager:"管理员用户01"
                }
            ]
        }
    },
    methods: {
        deleteCategory(index) {
            this.categoryList.splice(index,1)
        },
        addCategory() {
        ElMessageBox.prompt('请输入email', '消息框标题', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern:
            /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            inputErrorMessage: '无效的email',
        })
            .then(({ value }) => {
            ElMessage({
                type: 'success',
                message: `你的email是:${value}`,
                })
            })
            .catch(() => {
            ElMessage({
                type: 'info',
                message: '输入取消',
                })
            })
        }
    }
}
</script>