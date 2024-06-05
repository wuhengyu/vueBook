<template>
    <el-scrollbar always>
    <div class="content-container">
        <el-container class="content-row">
            <el-button type="primary" @click="addCategory">添加分类</el-button>
            <el-button type="danger" @click="deleteMultipleCategories">批量删除</el-button>
        </el-container>
        <div>
        <el-table
        ref="multipleTable"
        :data="categoryList"
        tooltip-effect="dark"
        stripe
        border
        @selection-change="handleSelectionChange"
        style="width: 100%">
            <el-table-column type="selection" width="55" />
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
import { markRaw } from 'vue'
import { Delete } from '@element-plus/icons-vue'

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
            ],
            multipleSelection: [],
        }
    },
    methods: {
        deleteCategory(index) {
            // splice() 是 JavaScript 中数组对象的一个方法，它允许你在数组中添加、删除或替换元素。
            // index参数是一个整数，指定修改开始的位置。如果为负数，将从数组末尾开始计数。
            // deleteCount: 可选，一个整数，表示要删除的元素个数。
            // item1, ..., itemX: 可选，要在指定位置插入的元素。
            this.categoryList.splice(index,1)
        },
        addCategory() {
            ElMessageBox.prompt('请输入email', '输入邮件', {
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
        },
        // 将handleSelectionChange绑定到<el-table>的@selection-change事件
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        deleteMultipleCategories() {
            if (this.multipleSelection.length === 0) {
            ElMessage.warning({
                message: '请至少选择一个分类'
            });
            return;
        }
            ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '删除确认', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                icon: markRaw(Delete),
            })
            .then(() => {
                // 通过map方法遍历multipleSelection数组（已选中的多条记录），提取每条记录的id属性，并组成一个新的数组selectIds
                // 用于创建一个新数组，新数组中的元素是通过调用提供的函数在原数组中的每个元素上执行处理后得到的。map()函数接受一个回调函数作为参数
                // 箭头函数item => item.id就是作为map的回调函数，它从每个item中提取id属性，生成一个只包含id的新数组selectIds。
                const selectIds = this.multipleSelection.map(item => item.id);
                // 保留不包含在selectIds数组中的记录,判断其id是否在selectIds数组中，如果不在则保留该category
                // category：这是filter函数为每次迭代提供的当前元素。在这里，它代表this.categoryList中的一个对象。
                // filter函数会保留那些其id不在selectIds数组中的category对象，创建并赋值给this.categoryList的新数组，从而移除了与multipleSelection中元素id匹配的所有项
                // category对应于回调函数的第一个参数element，即数组中的每个元素,index (可选): 当前元素的索引。array (可选): 调用filter的数组。
                this.categoryList = this.categoryList.filter(category => !selectIds.includes(category.id));
                // 调用clearSelection方法，清除表格的选中状态。这样，选中的记录将不再影响后续的操作
                this.multipleTable.clearSelection(); 
                ElMessage({
                type: 'success',
                message: '删除成功!',
                })
            })
            .catch(() => {
                ElMessage({
                type: 'info',
                message: '取消删除',
                })
            })
        }
    }
}
</script>