const Tools = {
    // 导出文件
    exportJson(name, data) {
        // 如果data是对象，它会被隐式地转换成JSON字符串
        var blob = new Blob([data]); //  创建 blob 对象
        // 生成下载链接
        var link = document.createElement("a");
        // 构建下载链接元素
        link.href = URL.createObjectURL(blob); //  创建一个 URL 对象并传给 a 的 href
        link.download = name; //  设置下载的默认文件名
        link.click(); 
    }
}
export default Tools;