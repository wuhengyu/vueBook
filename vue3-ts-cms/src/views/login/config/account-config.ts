// 编写好规则
export const rules = {
  // key需和 v-module绑定的键
  name: [
    {
      required: true,
      message: '用户名是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{4,10}$/, // 通过正则类验证表单
      message: '用户名必须是4~10个字母或者数字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{3,}$/,
      message: '用户名必须是3位以上的字母或者数字~',
      trigger: 'blur'
    }
  ],
  phoneNumber: [
    {
      required: true,
      message: '手机号是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11,11}$/,
      message: '手机号必须是11位的数字~',
      trigger: 'blur'
    }
  ],
  phoneCode: [
    {
      required: true,
      message: '验证码是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6,6}$/,
      message: '验证码必须是6位的字母或者数字~',
      trigger: 'blur'
    }
  ]
}
