
let projectname = process.argv[3];//获取变量
var glob = require("glob");

if (!projectname && process.env.NODE_ENV !=='development') {
    console.log('请输入要启动或者打包模块');
    process.exit();//退出执行
}

function getEntry() {
    var entries = {};
    if (process.env.NODE_ENV == "production") {
      entries = {
        index: {
          // page的入口
          entry: "src/" + projectname + "/main.js",
          // 模板来源
          template: "public/index.html",
          // 在 dist/index.html 的输出
          filename: "index.html",
          title: projectname,
          chunks: ["chunk-vendors", "chunk-common", "index"]
        }
      };
    } else {
      var items = glob.sync("./src/*/*.js");
      for (var i in items) {
        var filepath = items[i];
        var fileList = filepath.split("/");
        var fileName = fileList[fileList.length - 2];
        entries[fileName] = {
          entry: `src/${fileName}/main.js`,
          // 模板来源
          template: `public/index.html`,
          // 在 dist/index.html 的输出
          filename: `${fileName}.html`,
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ["chunk-vendors", "chunk-common", fileName]
        };
      }
    }
    return entries;
  }
  

module.exports = {
    productionSourceMap: false, // 生产禁止显示源代码
    outputDir: "dist/" + projectname,
    pages: getEntry()
}