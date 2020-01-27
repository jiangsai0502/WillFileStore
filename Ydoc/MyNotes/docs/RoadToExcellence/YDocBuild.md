# YDoc系统搭建
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
