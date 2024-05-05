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
              <div class="desc">{{ desc }}</div>
              <el-button style="width: 100px;height: 30px;margin: 20px;">新增记录</el-button>
            </el-container>
          </el-header>

          <el-main style="margin: 0;padding: 0;">
            <div class="content">
              <el-table :data="stus">
                <el-table-column label="姓名" prop="name">
                </el-table-column>
                <el-table-column label="年龄" prop="age">
                </el-table-column>
                <el-table-column label="性别" prop="sex">
                </el-table-column>
                <el-table-column label="日期" prop="date">
                </el-table-column>
              </el-table>
            </div>
          </el-main>

        </el-container>
      </el-container>
  </el-container>
</template>

<script lang="ts">
// 定义Vue组件的主要方法
import {
  defineComponent
} from 'vue';

// 组件的选项（如名称、属性、方法等），并返回一个Vue组件构造器
// defineComponent() 函数接收一个对象参数，该对象包含组件选项，如 data、methods、computed、watch、components、directives 等。
// 返回的构造器可以用于创建组件实例。
// export default用于导出单个主要的模块输出，这使得其他文件可以方便地导入和使用这个组件
// 当你使用TypeScript时，defineComponent会提供更好的类型检查
// 返回的组件实例具有一个合成的构造函数，这对于手动渲染函数、TSX（TypeScript的JSX扩展）以及IDE工具支持是必要的
export default defineComponent({
  // 组件的名称，主要用于开发工具中的识别和调试
  name: 'HelloWorld',
  // 组件接受的外部属性。在这里，组件有一个名为msg的属性，其类型为字符串。这意味着你可以向HelloWorld组件传递一个字符串值，该值将在组件内部使用
  // 父组件可以通过<hello-world msg="Hello, Vue!" />将消息传递给HelloWorld组件
  // 不使用defineComponent，缺少类型支持和最佳实践的遵循。
  // props: {
  //   msg: String,
  // },

  data() {
    return{
      desc:"七年级1班学生统计",
      stus:[
       {
        name:"小王",
        age:14,
        sex:'男',
        date:"2020年8月15日"
       },
       {
        name:"小张",
        age:20,
        sex:'男',
        date:"2024年10月11日"
       },
       {
        name:"小秋",
        age:16,
        sex:'女',
        date:"2002年2月5日"
       }
      ]
    }
  },
  methods:{
    selectFunc(index:number){
      let strs = ["七", "八", "九"]
      let rank = strs[Math.floor((index-1)/3)]
      this.desc = `${rank}年级${((index-1)%3)+1}班学生统计`
    }
  }
});
</script>
<style scoped>
.desc {
  font-size: 25px;
  line-height:80px;
  color: white;
  width: 800px;
}
.subHeader{
  background-color: cornflowerblue;
}
.content{
  height:410px;
}
</style>