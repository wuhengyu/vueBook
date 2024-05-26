<template>
  <el-container>
    <el-header height="80px" style="background-color: gray;">
      <div class="header">教务系统学生管理</div>
    </el-header>
      <el-container>
          <el-aside width="200px">
          <el-menu class="aside" @select="selectFunc" default-active="1" :unique-opened="true" mode="vertical">
            <el-sub-menu index="1">
              <!-- 允许自定义子菜单标题的内容与样式 -->
              <template #title>
                <div>
                  七年级
                </div>
              </template>
              <el-menu-item index="1">1班</el-menu-item>
              <el-menu-item index="2">2班</el-menu-item>
              <el-menu-item index="3">3班</el-menu-item>
              <el-menu-item index="4">4班</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="2">
              <!-- 允许自定义子菜单标题的内容与样式 -->
              <template #title>
                <div>
                  八年级
                </div>
              </template>
              <el-menu-item index="5">1班</el-menu-item>
              <el-menu-item index="6">2班</el-menu-item>
              <el-menu-item index="7">3班</el-menu-item>
              <el-menu-item index="8">4班</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="3">
              <!-- 允许自定义子菜单标题的内容与样式 -->
              <template #title>
                <div>
                  九年级
                </div>
              </template>
              <el-menu-item index="9">1班</el-menu-item>
              <el-menu-item index="10">2班</el-menu-item>
              <el-menu-item index="11">3班</el-menu-item>
              <el-menu-item index="12">4班</el-menu-item>
            </el-sub-menu>

          </el-menu>
          </el-aside>
        <el-container>

          <el-header height="80px" style="padding: 0;margin: 0;">
            <el-container class="subHeader">
              <!-- <div class="desc-wrapper"> -->
                <div class="desc">{{ desc }}</div>
              <!-- </div> -->
              <!-- 设置按钮父容器的样式，使其内部内容居右 -->
            <div class="button-container">
              <el-button style="width: 100px;height: 30px;margin: 20px;">新增记录</el-button>
            </div>
            </el-container>
          </el-header>

          <!-- 显示列表数据 -->
          <el-main style="margin: 0;padding: 0;">
            <div class="content">
              <!-- stripe斑马条纹、border竖直方向的边框 -->
              <!-- <el-table :data="tableData" stripe border :row-class-name="tableRowClassName" style="width: 100%"> -->
              <el-table :data="tableData" border :row-class-name="tableRowClassName" style="width: 100%">
                <el-table-column label="姓名" prop="name" width="180" type="selection">
                </el-table-column>
                <el-table-column label="年龄" prop="age">
                </el-table-column>
                <el-table-column label="性别" prop="sex">
                </el-table-column>
                <el-table-column label="日期" prop="date">
                </el-table-column>
                <el-table-column label="地址" prop="address">
                </el-table-column>
                <!-- fixed="right"固定在表格的右边缘，即使在滚动时也不会移动 -->
                <el-table-column fixed="right" label="操作" width="120">
                  <!-- el-table 和 el-table-column 组件自带作用域插槽，允许你通过 v-slot 访问每一行的数据 -->
                  <!-- el-table-column 提供了作用域插槽，因此可以通过 v-slot 获取 scope 这个上下文对象，以访问当前行的数据 -->
                    <!-- <template #default> -->
                    <template v-slot:default="scope">
                    <el-button link type="primary" size="small" @click="handleClick(scope.row)">
                      Detail
                    </el-button>
                    <el-button link type="primary" size="small" @click="handleEdit(scope.row)">Edit</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-main>

        </el-container>
      </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


interface User {
  date: string
  name: string
  address: string
  age:number
  sex:string
}

export default defineComponent({
  name: 'HelloWorld',
  data() {
    return{
      desc:"七年级1班学生统计",
      tableData:[
       {
        name:"小王",
        age:14,
        sex:'男',
        date:"2016-05-03",
        address:"湖南长沙1"
       },
       {
        name:"小张",
        age:20,
        sex:'男',
        date:"2024年10月11日",
        address:"湖南长沙2"
       },
       {
        name:"小秋",
        age:16,
        sex:'女',
        date:"2002年2月5日",
        address:"湖南长沙3"
       },
       {
        name:"小李",
        age:17,
        sex:'女',
        date:"2004年2月5日",
        address:"湖南长沙4"
       }
      ]
    }
  },
  methods: {
    selectFunc(index:number){
      let strs = ["七", "八", "九"]
      let rank = strs[Math.floor((index-1)/3)]
      this.desc = `${rank}年级${((index-1)%3)+1}班学生统计`
    },
    handleClick(row: User) {
      // console.log('Detail:', row);
      alert(`Detail:\nName: ${row.name}\nAge: ${row.age}\nSex: ${row.sex}\nDate: ${row.date}\nAddress: ${row.address}`);
    },
    handleEdit(row: User) {
      // console.log('Detail:', row);
      alert(`Edit:\nName: ${row.name}\nAge: ${row.age}\nSex: ${row.sex}\nDate: ${row.date}\nAddress: ${row.address}`);
    },
    tableRowClassName({rowIndex }: {rowIndex: number }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
  },
})
</script>

<style>
.desc {
  font-size: 25px;
  line-height: 80px;
  color: white;
  width: 100%;
  text-align: center;
}

/* flex居中 */
/* .desc-wrapper {
  display: flex;
  flex-grow: 1;
  justify-content: center; 
  align-items: center;
} */
.subHeader {
  background-color: rgb(42, 107, 228);
}
.content {
  height: 410px;
}

.button-container {
  display: flex;  /* 使用flex布局 */
  justify-content: flex-end;  /* 内容居右 */
  flex-grow: 1;  /* 占用剩余空间 */
}

.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>