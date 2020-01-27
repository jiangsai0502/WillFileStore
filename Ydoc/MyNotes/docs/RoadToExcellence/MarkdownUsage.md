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