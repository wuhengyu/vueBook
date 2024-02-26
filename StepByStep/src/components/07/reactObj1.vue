<template>
  <div>
    响应式的本质就是对变量进行监听
  </div>
</template>

<!-- <script>
  let a = 1;
  let b = 2;
  let sum = a + b;
  console.log(sum);
  a = 3;
  b = 4;
  // sum值并不会响应式的更新
  console.log(sum);
</script> -->

<script>
export default {
  setup () {
// 数据对象
let a = {
            value:1
        };
        let b = {
            value:2
        };
        // 定义触发器，用来刷新数据
        let trigger = null;
        // 数据变量的处理器，当数据发生变化时，调用触发器刷新
        let handleA = {
          // 当调用`.set(target, key, value)`方法时，会将target对象中key对应的值更新为value，并检查是否存在触发器函数。
          // 如果存在，则执行触发器函数以响应数据变化。
            set(target, key, value) {
                target[key] = value
                if (trigger) {
                    trigger()
                }
                return true; // 返回真值
            }
        }
        let handleB = {
          // target：这是被代理的目标对象，即当对代理对象执行赋值操作时，实际影响到的对象
          // key：这个参数代表了目标对象上正在尝试设置（或修改）的属性名
          // value：这是你试图赋予目标对象指定键的新值
            set(target, key, value) {
                target[key] = value
                if (trigger) {
                    trigger()
                }
                return true; // 返回真值
            }
        }
        // 进行对象的代理包装
        let pa = new Proxy(a, handleA)
        let pb = new Proxy(b, handleB)
        let sum = 0;
        // 实现触发器逻辑
        trigger = () => {
            sum = pa.value + pb.value;
        };
        trigger();
        console.log(sum);
        pa.value = 3;
        pb.value = 4;
        console.log(sum);
      }}
</script>

<style lang="scss" scoped>
</style>