# jiangsai0502的建站记录

## YDoc系统
### 1.环境搭建

> 详细请参照[帮助文档](https://hellosean1025.github.io/ydoc/documents/index.html)   

简易教程如下
* 安装node.js：brew install node
* 安装ydoc：npm install -g ydoc
* 创建YDoc目录：mkdir ~/Documents/MyYDoc && cd ~/Documents/MyYDoc
* 安装rc版本：npm install ydoc@rc
    > 在当前目录生成一个 'node_modules' 目录和package-lock.json文件
* 创建站点目录：mkdir AgileDoc && cd AgileDoc
* 初始化：ydoc init
    > 在当前目录生成一个 'docs' 目录，用于存放文档(markdown)文件
* 构建：ydoc build
    > 使用 'docs' 目录中的文件进行文档站的构建，构建成功后会在当前目录生成一个 '_site' 目录，打开 '_site' 目录中的 index.html 文件即可访问构建的文档站首页
* 启动服务：ydoc serve
    > 启动一个服务，默认是http://127.0.0.1:9999。修改docs目录下的文档，可以实时在http://127.0.0.1:9999看到变化
* 安装插件
    > 插件网址：https://hellosean1025.github.io/ydoc/plugin/index.html  
    > 安装点击图片放大功能的插件：npm i ydoc-plugin-img-view  
    > 在 'docs' 和 '_site' 同级目录下创建ydoc.js文件  
    > ```json
    > {
    >   "plugins": ["img-view"]
    > }
    > ```
* 发布到jiangsai0502.github.io
    * 只需将'_site' 目录的内容统统上传到https://github.com/jiangsai0502/jiangsai0502.github.io即可

### 2.系统目录结构

一个基本的 ydoc 目录结构如下:

```markdown
├── docs/
    ├── index.jsx
    ├── NAV.md
    ├── book-1/
        ├── index.md
        └── SUMMARY.md
    └── book-2/
        ├── index.md
        ├── SUMMARY.md
```

| 文件 | 描述 |
| -------- | ----------- |
| `index.jsx` | [首页](pages-index.md) (**必需**) |
| `NAV.md` | [导航](nav.md)) (**必需**) |
| `book/index.md` | [文档页首页](pages-book.md#页面)] (**必需**) |
| `book/SUMMARY.md` | [文档目录](pages-book.md#目录)，SUMMARY.md 引用的所有 markdown 文件将会被转换成 html 文件 (__可选__) |

> 所有的目录名称都必须是英文，包括各个文件名，想要在网页上显示中文名，要配置每个目录中的SUMMARY.md
> 注：`NAV.md` 和 `SUMMARY.md` 文件名大写

### 3.顶端导航
在 NAV.md 文件中可配置网站的顶端导航标题、logo、菜单列表信息，简单示例如下：

```markdown
# YDoc
![logo](ydoc/images/logo.png)

* [文档](/documents/index.md)
* [文档规范](/style-guide/index.md)
* [插件](/plugins/index.md)
```

上面的 markdown 内容可生成如下导航信息：

```markdown
标题：YDoc
Logo：ydoc/images/logo.png
导航：文档 文档规范 插件
```

### 4.首页

执行 init 命令后生产 `docs` 目录中的 `index.jsx` 就是首页的文档文件，在这个文件中我们可以通过简单的配置来完善首页信息：

* banner 网站标语栏

| 属性 | 描述 |
| ---- | ----------- |
| `name` | 标语标题 |
| `desc` | 标语描述信息 |
| `btns` | 按钮组，可设置多个按钮 |
| `caption` | 说明信息，例如“当前版本信息” |
| `btns[n].name` | 按钮名称 |
| `btns[n].href` | 按钮链接 |
| `btns[n].primary` | 是否为主按钮 |

* features 特性

| 属性 | 描述 |
| ---- | ----------- |
| `features[n].name` | 特性名称 |
| `features[n].desc` | 特性描述 |

* footer 底部信息

| 属性 | 描述 |
| ---- | ----------- |
| `copyRight` | 版权信息 |
| `copyRight.name` | 版权主体名称 |
| `copyRight.href` | 版权主体链接 |
| `links` | 友情链接 |
| `links.xxx` | 链接组标题 |
| `links.xxx[n]` | 链接项 |
| `links.xxx[n].name` | 链接项名称 |
| `links.xxx[n].href` | 链接项名称 |


### 5.文档页

YDoc 借鉴了 Gitbook 中 `"书"` 的概念：

- YDoc 的每个导航项都是不同的 `"书"`
- 每本 `"书"` 都是由目录和页面组成
- YDoc 文档站就是由若干本书及其他页面组成的网站

使用 SUMMARY.md 文件生成一本书的目录，SUMMARY 文件包含了一本书的所有章节信息，具体的文档页面是若干 markdown 文件

SUMMARY.md 由一组链接列表组成，将一个列表嵌套到父章节将创建子章节，简单示例如下：

```markdown
# 目录

### 章节 1

* [快速开始](start.md)
  * [安装](installation.md)
* [项目设置](setting.md)
  * [配置文件](config.md)
```

* 锚点
    > 目录中的章节可以使用锚点指向文件的特定部分。

```markdown
# 目录

### 章节 2

* [API](api.md)
  * [a](api.md#anchor1)
  * [b](api.md#anchor2)
```

* 章节
    > 目录可以分为多个部分，如下所示：

```markdown
# 目录

### 章节 1

* [快速开始](start.md)
  * [安装](installation.md)
* [项目设置](setting.md)
  * [配置文件](config.md)

### 章节 2

* [API](api.md)
  * [a](api.md#a)
  * [b](api.md#b)

```

# Markdown基本语法
-----
### 1.标题
使用`#`，可表示1-6级标题。
> \# 一级标题   
> \## 二级标题   
> \### 三级标题   
> \#### 四级标题   
> \##### 五级标题   
> \###### 六级标题    

效果：
> # 一级标题   
> ## 二级标题   
> ### 三级标题   
> #### 四级标题   
> ##### 五级标题   
> ###### 六级标题

### 2.段落
段落的前后要有空行。若想在段内强制换行的方式是使用**两个以上**空格加上回车（引用中换行省略回车）

### 3.反斜杠`\`
相当于**反转义**作用。使符号成为普通符号。

### 4.符号'`'：起到标记作用

*示例* 
> \`ctrl+a\`

效果：
>`ctrl+a` 

### 5.字体
*示例*  
> \*斜体\*    
> \*\*粗体\*\*
> \*\*\*粗体\*\*\*

*效果*  
> *斜体*  
> **加粗**  
> ***斜体加粗***  

### 6.引用
*示例*
> \> 区块引用  
> \>> 嵌套引用 

*效果*
> 区块引用  
>> 嵌套引用

### 7.分割线
*示例*  
> \-\-\-  
> \*\*\*  

*效果*
> ---
> ***

### 8.代码块
**单行代码：** 代码两边分别用一个反引号包起来   
> \`代码内容\`   

**多行代码：** 代码两边分别用三个反引号包起来，且两边的反引号单独占一行   
> \`\`\`   
>   代码块   
> \`\`\`

### 9.列表
**无序列表**  
*示例*
> \-（+\*） 第一项  
> \-（+\*） 第二项  

*效果*
> * 第一项
> * 第二项

**有序列表**  
*示例*
> 1. 第一项  
> 2. 第二项  

*效果*  
> 1. 第一项  
> 2. 第二项  

**列表嵌套：** 缩进3个空格  
*示例*
> ```markdown
> * 第一项  
>    * 第一项第一层  
> 1. 第一项
>    1. 第一项第一层 
> ```
*效果*
> * 第一项  
>    * 第一项第一层  
> 1. 第一项
>    1. 第一项第一层 


### 10.超链接
*示例*  
> \[链接名\]\(http://baidu.com "链接title"\)。  
> 
> 链接title可加可不加  

*效果*  
> [百度](http://baidu.com)

### 11.图片
*语法*
> ```markdown
> ![图片名](图片地址 "图片title")
> title可加可不加
> 注意：只能用线上图片，不能用网络图片，所以可以使用企业云盘的图床https://ecloud.baidu.com/openapi/tuchuang，会自动生成一个永久图片链接
> ```
*示例*
> ```markdown
> ![图片](http://bj.bcebos.com/ibox-thumbnail98/f6833abe678aa85f4976d60fd9a660b0?authorization=bce-auth-v1%2Ffbe74140929444858491fbf2b6bc0935%2F2020-01-06T10%3A07%3A05Z%2F1800%2F%2F59ba33c58680aafca3776d4982ee97cb89b6a00f92de355a6a817809923ee987)
> ```
*效果如下*  
> ![图片](http://bj.bcebos.com/ibox-thumbnail98/f6833abe678aa85f4976d60fd9a660b0?authorization=bce-auth-v1%2Ffbe74140929444858491fbf2b6bc0935%2F2020-01-06T10%3A07%3A05Z%2F1800%2F%2F59ba33c58680aafca3776d4982ee97cb89b6a00f92de355a6a817809923ee987)

### 12.表格
*示例*
```markdown
| 左对齐 |  居中  | 右对齐 |
| :---- | :---: | ----: |
| aaaa | bbbbbb | ccccc |
| a    | b      | c     |
```
效果如下：

| 左对齐 |  居中  | 右对齐 |
| :---- | :---: | ----: |
| aaaa | bbbbbb | ccccc |
| a    | b      | c     |

### 13.音频
*语法*
<audio src="https://blog.niostack.com/成都.mp3" controls="controls">
</audio>

### 14.视频
视频存放在agroup上
*语法1*（用的是这个）
<video src="http://agroup.baidu.com/api/static/9f/79e29728d957869f814edd1594e93ce2e5912b?filename=%E6%9D%8E%E6%A6%AE%E6%B5%A9+Ronghao+Li%E3%80%8A%E9%BA%BB%E9%9B%80+Sparrow%E3%80%8B.mp4" controls="controls" width="640" height="320">
</video>

*语法2*
<video>
<iframe src="http://player.youku.com/embed/XMzMxMjE0MjY4NA==" controls="controls" height=300 width=450 allowfullscreen>
</video>

