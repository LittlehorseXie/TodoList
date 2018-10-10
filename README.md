# 搭建环境-Mac

nw.js 下载页面 https://github.com/nwjs/nw.js

https://nwjs.io/blog/v0.33.4/ 选择sdk build

下载好了之后解压文件，进入解压后的文件夹，再将nw.app文件复制到Appalication文件夹，操作如下：
```shell
cd nwjs-v0.20.3-osx-x64
cp -r ./nwjs.app /Applications/
```

打开`bash_profile`文件
```shell
vi ~/.bash_profile
```

在后面添加
```shell
alias nw="/Applications/nwjs.app/Contents/MacOS/nwjs" 
```

保存后运行
```shell
source ~/.bash_profile
```

命令行输出nw 测试是否打开了nwjs.

## 本地运行项目

nw .