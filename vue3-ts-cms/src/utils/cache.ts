// 本地缓存工具类，对 window.localStorage 的封装
class LocalCache {
  /**
   * 设置缓存
   * @param key 缓存键
   * @param value 缓存值
   */
  setCache(key: string, value: any) {
    // 调用 window.localStorage.setItem(key, JSON.stringify(value)) 将键值对存储到本地缓存中。
    // JSON.stringify() 方法用于将一个 JavaScript 对象或值转换为 JSON 字符串。
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * 获取缓存
   * @param key 缓存键
   * @returns 缓存值
   */
  getCache(key: string) {
    const value = window.localStorage.getItem(key);
    if (value) {
      // 如果数据存在，则使用 JSON.parse(value) 将字符串转换回原始数据类型并返回；否则返回 undefined。
      // JSON.parse() 方法用于将一个 JSON 字符串转换为 JavaScript 对象或值。
      return JSON.parse(value);
    }
  }

  /**
   * 删除缓存
   * @param key 缓存键
   */
  deleteCache(key: string) {
    window.localStorage.removeItem(key);
  }

  /**
   * 清除所有缓存
   */
  clearCache() {
    window.localStorage.clear();
  }
}

// 导出 LocalCache 类的实例，方便在其他地方使用
export default new LocalCache();

