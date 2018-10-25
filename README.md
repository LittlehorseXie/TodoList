## 1. 搭建环境-Mac

1. 下载skd版nw.js（方便调试） [v0.33.4下载链接](https://nwjs.io/blog/v0.33.4/)

2. 下载好了之后解压文件，进入解压后的文件夹，再将nw.app文件复制到Appalication文件夹，操作如下：
```shell
cd nwjs-sdk-v0.33.4-osx-x64
cp -r ./nwjs.app /Applications/
```

3. 打开`bash_profile`文件
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

4. 命令行输出nw 测试是否打开了nwjs.

## 2. 本地运行项目

nw .

## 3. 本地调试
```
npm run dev
```

## 4. 目录结构

```
|-- app
|    |-- assets
|    |-- pages
|    |-- utils
|    |-- index.js
|-- build
|-- .babelrc
|-- index.html
|-- package.json
```

## 5. 打包

### == windows系统 ==

1. 打zip包, 保证压缩包下直接为package.json和index.html. 例如helloworld.zip
2. 重命名helloworld.zip为helloworld.nw
3. 移动helloworld.nw到nw.exe所在的文件夹内
4. 在命令行中执行copy /b nw.exe+TodoList.nw app.exe
5. 双击运行app.exe

### == mac系统 ==



