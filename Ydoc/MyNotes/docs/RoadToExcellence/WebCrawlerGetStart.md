# 爬虫入门
### BeautifulSoup 学习
1. conda list 查看当前环境，没安装beautifulsoup4，requests

> ```
> source activate jspython3
> pip install beautifulsoup4
> pip install requests
> ```

2. 第一个BeautifulSoup示例

> ```
> import requests
> from bs4 import BeautifulSoup
> 
> html_doc = """
> <html><head><title>The Dormouse's story</title></head>
> <body>
> <p class="title"><b>The Dormouse's story</b><b>Another story</b></p>
> <p class="story">Once upon a time there were three little sisters; and their names were
> <a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
> <a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
> <a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
> and they lived at the bottom of a well.</p>
> <p class="story">...</p>
> """
> 
> soup = BeautifulSoup(html_doc, "html.parser")
> # 把HTML源码用解释器html.parser格式化一下
> ```

* HTML以标签对开始，标签对结束
* BeautifulSoup将HTML转成标签树，标签树的每个节点都是Python的对象
* BeautifulSoup基本元素
    1. Tag：即标签，最基本的信息组织单元，分别用<>和</>标明开头和结尾
    2. Comment：即标签内字符串的注释部分，一种特殊的Comment类型
    3. Name：获取标签的名字，\<p>...\</p>的名字是'p'。
        * 用法：\<tag>.name
    4. Attributes：获取标签的属性，字典的形式组织。
        * 用法：\<tag>.attrs
    5. NavigableString：获取标签内非属性字符串，<>...</>中的字符串。
        * 用法：\<tag>.string
* 常用方法
    * .find()
        * soup.find('a')
            * 获取源码中第一个\<a>...\</a>标签内容对象
        * soup.find('a', id='next')
            * 获取源码中第一个有属性为id，值为next的\<a>对象，比如\<a id="next">...\</a>。
        * 注1：属性id、src、name都可以这么用，唯独class这个属性因为是Python关键字，不能直接使用，要用 class_ 进行代替，如soup.find('a', class_ = 'next')
        * 注2：find返回的结果，依然可以继续使用find()或者find_all()方法
    * .find_all()
        * soup.find_all('a')
            * 获取源码中所有的\<a>...\</a>标签内容对象
        * soup.find_all('a', id='next')
            * 获取源码中所有包含属性为id，值为next的\<a>对象，比如\<a id="next">...\</a>。
        * 注1：find_all返回的结果，依然可以继续使用find()或者find_all()方法
        * 注2：find_all返回的结果很大时，可以用limit参数限制返回结果的数量，适用于测试时soup.find('a', class_ = 'next', limit = 2)
    *  .string
        *  获取标签的文本字符串

> ```
> print('soup.prettify() = ',soup.prettify())
> print('soup.title = ',soup.title)
> print('soup.title.name = ',soup.title.name)
> print('soup.title.string = ',soup.title.string)
> print('soup.title.text = ',soup.title.text)
> print('soup.title.parent.name = ',soup.title.parent.name)
> print('soup.p = ',soup.p)
> print('soup.p["class"] = ',soup.p["class"])
> print('soup.a = ',soup.a)
> print('soup.a.string = ',soup.a.string)
> print('soup.a.attrs = ',soup.a.attrs)
> print('soup.a.attrs["href"] = ',soup.a.attrs['href'])
> print('soup.find_all("a") = ',soup.find_all('a'))
> print('soup.find(id="link3") = ',soup.find(id='link3'))
> ```
> 运行结果
> ```
> soup.title =  <title>The Dormouse's story</title>
> # 即soup中的title标签的全部内容
> # 全部内容包含标签，属性，文本，及子孙节点的标签，属性，文本
> 
> soup.title.name =  title
> # 即soup中的title标签的名字
> 
> soup.title.string =  The Dormouse's story
> # 即soup中的title标签的文本字符串
> 
> soup.title.parent.name =  head
> # 即soup中的title标签的父节点的名字
> 
> soup.p =  <p class="title"><b>The Dormouse's story</b><b>Another story</b></p>
> # 即soup中的第一个p标签的全部内容
> # 全部内容包含标签，属性，文本，及子孙节点的标签，属性，文本
> 
> soup.p["class"] =  ['title']
> # 即soup中的第一个p标签的'class'属性的内容
> 
> soup.a =  <a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>
> # 即soup中的第一个a标签的全部内容
> # 全部内容包含标签，属性，文本，及子孙节点的标签，属性，文本
> 
> soup.a.string =  Elsie
> # 即soup中的第一个a标签的文本
> 
> > soup.a.text =  Elsie
> # 即soup中的第一个a标签的文本，与soup.a.string一样
> 
> soup.a.attrs =  {'href': 'http://example.com/elsie', 'class': ['sister'], 'id': 'link1'}
> # 即soup中的第一个a标签的字典
> 
> soup.a.attrs["href"] =  http://example.com/elsie
> # 即soup中的第一个a标签的字典中key为"href"的值
> 
> soup.find_all("a") =  [<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>, <a class="sister" > href="http://example.com/lacie" id="link2">Lacie</a>, <a class="sister" href="http://example.com/tillie" > id="link3">Tillie</a>]
> # 即soup中的所有a标签的全部内容的列表
> # 全部内容包含标签，属性，文本，及子孙节点的标签，属性，文本
> 
> soup.find(id="link3") =  <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>
> # 即soup中id="link3"所在标签的全部内容
> # 全部内容包含标签，属性，文本，及子孙节点的标签，属性，文本
> ```

* 下行遍历：从当前节点向子孙节点遍历
    * .contents：获取全部儿子节点的全部内容的列表（全部内容包含标签，属性，文本，及子孙节点的标签，属性，文本）
    * .children：获取儿子节点的迭代类型，用于遍历
    * .descendants：获取子孙节点的迭代类型，用于遍历
        * 注：.contents和.children只获得当前节点的下一层节点的信息，而.descendants可获得当前节点后续的所有节点的信息

> ```
> print('soup.body = ',soup.body)
> print('soup.body.contents = ',soup.body.contents)
> 
> num = 1
> print('soup.body.children = ')
> for child in soup.body.children:
>     print("第" + str(num) + "个儿子：" , child)
>     num += 1
> 
> num = 1
> print('soup.body.descendants = ')
> for descendant in soup.body.descendants:
>     print("第" + str(num) + "个子孙：" , descendant)
>     num += 1
> ```
> 运行结果
> ```
> soup.body =  
> <body>
> <p class="title"><b>The Dormouse's story</b><b>Another story</b></p>
> <p class="story">Once upon a time there were three little sisters; and their names were
> <a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
> <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a> and
> <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>;
> and they lived at the bottom of a well.</p>
> <p class="story">...</p>
> </body>
> # 获取整个<body>……</body>的全部内容
> # 全部内容包含标签，属性，文本，及子孙节点的标签，属性，文本
> 
> soup.body.contents =  
> ['\n', <p class="title"><b>The Dormouse's story</b><b>Another story</b></p>, '\n', <p class="story">Once upon a > time there were three little sisters; and their names were
> <a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
> <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a> and
> <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>;
> and they lived at the bottom of a well.</p>, '\n', <p class="story">...</p>, '\n']
> # 获取<body>标签的全部儿子节点的全部内容的列表
> # 儿子节点的全部内容包含标签，属性，文本，及子孙节点的标签，属性，文本
> 
> soup.body.children = 
> 第1个儿子： 
> 第2个儿子： <p class="title"><b>The Dormouse's story</b></p>
> 第3个儿子： 
> 第4个儿子： <p class="story">Once upon a time there were three little sisters; and their names were
> <a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
> <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a> and
> <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>;
> and they lived at the bottom of a well.</p>
> 第5个儿子： 
> 第6个儿子： <p class="story">...</p>
> 第7个儿子： 
> # 获取<body>标签的全部儿子节点的内容
> # 儿子节点的全部内容包含标签，属性，文本，及子孙节点的标签，属性，文本
> 
> soup.body.descendants = 
> 第1个子孙： 
> 第2个子孙： <p class="title"><b>The Dormouse's story</b><b>Another story</b></p>
> 第3个子孙： <b>The Dormouse's story</b>
> 第4个子孙： The Dormouse's story
> 第5个子孙： <b>Another story</b>
> 第6个子孙： Another story
> 第7个子孙： 
> 第8个子孙： <p class="story">Once upon a time there were three little sisters; and their names were
> <a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
> <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a> and
> <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>;
> and they lived at the bottom of a well.</p>
> 第9个子孙： Once upon a time there were three little sisters; and their names were
> 第10个子孙： <a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>
> 第11个子孙： Elsie
> 第12个子孙： ,
> 第13个子孙： <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>
> 第14个子孙： Lacie
> 第15个子孙：  and
> 第16个子孙： <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>
> 第17个子孙： Tillie
> 第18个子孙： ;
> and they lived at the bottom of a well.
> 第19个子孙： 
> 第20个子孙： <p class="story">...</p>
> 第21个子孙： ...
> 第22个子孙：  
> # 获取<body>标签的全部子孙节点，首先获取第1个儿子节点的全部内容，然后进入第1个儿子节点获取第一个孙子节点，直到没有下级节点后，获取同级的孙子节点及其下级节点，同级遍历结束后返回上级节点
> # 子孙节点的全部内容包含标签，属性，文本，及子孙节点的标签，属性，文本
> ```

* 上行遍历：从当前节点向父祖节点遍历
    * .parent：获取当前节点的**父节点**标签的全部内容（全部内容包含标签，属性，文本，及子孙节点的标签，属性，文本）
    * .parents：获取当前节点的**父祖节点**标签的全部内容的迭代类型
    * 目前不知用处

> ```
> for parent in soup.a.parents:
>     if parent is None:
>         print('soup.a.parent = ',parent)
>     else:
>         print('soup.a.parent.name = ',parent.name)
> ```
> 运行结果
> ```
> soup.a.parent.name =  p
> soup.a.parent.name =  body
> soup.a.parent.name =  html
> soup.a.parent.name =  [document]
> ```


* 平行遍历：同一父节点下的子节点遍历
    * .next_sibling：获取同一父节点下的下一个兄弟节点标签
    * .previous_sibling：获取同一父节点下的上一个兄弟节点标签
    * .next_siblings：迭代类型，获取同一父节点下的所有后续兄弟节点标签
    * .previous_siblings：迭代类型，获取同一父节点下的所有前续兄弟节点标签
    * 目前不知用处

> ```
> for sibling in soup.a.next_siblings:
>     print('soup.a.next_sibling = ',sibling)
> 运行结果
> soup.a.next_sibling =  ,
> soup.a.next_sibling =  <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>
> soup.a.next_sibling =   and
> soup.a.next_sibling =  <a class="sister" href="http://example.com/tillie" id="link3">Tillie<b>Another > story</b></a>
> soup.a.next_sibling =  ;
> and they lived at the bottom of a well.
> ```


### 爬虫之BeautifulSoup解析豆瓣即将上映的电影信息

> **目的**：获取[豆瓣电影](https://movie.douban.com/cinema/later/chengdu/)页面电影列表的名字、详情链接、上映时间、影片类型、地区、关注者数量
>
> [原教程](https://www.jianshu.com/p/c64fe2a20bc9)

#### 思路

##### 1. 分析网页

> 这一步非常重要，直接影响了我们能不能提取到我们想要的内容。

![](https://raw.githubusercontent.com/jiangsai0502/PicBedRepo/master/img/20200116103822.png)

* 找到网页中的第一个电影的名字，**鼠标指向该名字**，点击右键，选择"检查"，页面上会打开"开发者工具"窗口，焦点会定位到电影名字
* 当鼠标划到图片中的\<ul>...\</ul>标签的时候，"复仇者联盟"的详细信息被选中了。
* 当鼠标划到下一个\<div class="item mod odd">...\</div>的时候，下一个影片"战犬瑞克斯"的所有信息被选中了。
* 当鼠标划到图片上方的\<div id="showing-soon" class="tab-bd">的时候，整个网页中我们需要采集的影片信息都被选中了。

***这几个动作说明***
> 1.我们需要的内容全都在\<div id="showing-soon" class="tab-bd">...\</div>里面。  
> 2.每个影片的信息，都在一个\<div class="item mod odd">...\</div>或者\<div class="item mod">...\</div>里面。画面左边的影片没有odd属性，右边的有odd属性(这好像对于我们采集信息没啥用)。

##### 2. 制订提取策略

1. 先找到囊括了所有的影片的最大的div
2. 再从最大的div里找到每一个影片的div
3. 最后从每个影片的div里面解析出来我们需要的名字、链接等等信息

![](https://raw.githubusercontent.com/jiangsai0502/PicBedRepo/master/img/20200116124725.png)

从上图得知目标位置

|电影属性|源码中的位置|
| --- | --- |
|电影名|在第 2 个\<a>标签里面|
|链接|在第 1 个和第 2 个\<a>标签的 href 属性里面|
|上映日期|在第 1 个\<li>标签里面|
|类型|在第 2 个\<li>标签里面|
|地区|在第 3 个\<li>标签里面|
|关注者数量|在第 4 个\<li>标签里面|

##### 3. 获取目标内容方式

1. 电影名：先获取所有的\<a>标签，再取第二个\<a>标签的 text
2. 链接：利用上一步获取的所有标签，取第二个\<a>标签的href属性
3. 其他信息：先获取所有的\<li>标签，再依次取出里面的text的值就是我们所需要的目标，上映日期，类型，地区等等

#### 源码及分析

```python
import requests
from bs4 import BeautifulSoup

def GetSoup(url):
    fake_headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36'
    }
    response = requests.get(url, headers=fake_headers)
    html = response.content.decode('utf-8')
    soup = BeautifulSoup(html, 'html.parser')
    return soup

def GetBigData(soup):
    all_movies = soup.find('div', id="showing-soon")
    bigData = []
    for each_movie in all_movies.find_all('div', class_="item", limit = 2):
        data = Data()
        # 先获取所有的<a>标签
        all_a_tag = each_movie.find_all('a')
        # 再取第二个<a>标签的 text，即电影名
        data.movie_name = all_a_tag[1].text
        # 再取第二个<a>标签的 'href'属性，即电影链接
        data.moive_href = all_a_tag[1]['href']

        # 先获取所有的<li>标签
        all_li_tag = each_movie.find_all('li')
        # 再取第二个<li>标签的 text，即日期
        data.movie_date = all_li_tag[0].text
        data.movie_type = all_li_tag[1].text
        data.movie_area = all_li_tag[2].text
        data.movie_lovers = all_li_tag[3].text
        #print(f'名字：{data.movie_name}\n 链接：{data.moive_href}\n 日期：{data.movie_date}\n 类型：{data.movie_type}\n 地区：{data.movie_area}\n 关注者：{data.movie_lovers}\n')
        bigData.append(data)
    return bigData

def PrintBigData(bigData):
    for data in bigData:
        print(f'名字：{data.movie_name}\n 链接：{data.moive_href}\n 日期：{data.movie_date}\n 类型：{data.movie_type}\n 地区：{data.movie_area}\n 关注者：{data.movie_lovers}\n')

if __name__ == "__main__":
    url = "https://movie.douban.com/cinema/later/chengdu/"
    soup = GetSoup(url)
    bigData = GetBigData(soup)
    PrintBigData(bigData)
```

> 1. 伪装成浏览器的header
>
>    ```python
>    fake_headers = {
>        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36'
>    }
>    ```
>
> 2. 先找到囊括了所有的影片的最大的div
>
>    ```python
>    all_movies = soup.find('div', id="showing-soon")
>    print(all_movies)
>    ```
>
> 3. 再从最大的div里找到每一个影片的div
>
>    ```python
>    for each_movie in all_movies.find_all('div', class_="item", limit = 2):
>        print("电影信息：\n",each_movie)
>        # 先获取所有的<a>标签
>        all_a_tag = each_movie.find_all('a')
>        # 再取第二个<a>标签的 text，即电影名
>        movie_name = all_a_tag[1].text
>        # 再取第二个<a>标签的 'href'属性，即电影链接
>        moive_href = all_a_tag[1]['href']
>    
>        # 先获取所有的<li>标签
>        all_li_tag = each_movie.find_all('li')
>        # 再取第二个<li>标签的 text，即日期
>        movie_date = all_li_tag[0].text
>        movie_type = all_li_tag[1].text
>        movie_area = all_li_tag[2].text
>        movie_lovers = all_li_tag[3].text
>    ```
>
>    > 1. 源码中 class 的值有 "item mod odd" 和 "item mod"，tag的 class 属性是多值属性，可以分别搜索tag中的每个CSS类名，如class_="item",class_="mod",class_=["item","mod"]



```python
import requests
from bs4 import BeautifulSoup
import csv

# 空类的作用是存数据
class Data():
    pass

def GetSoup(url):
    fake_headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36'
    }
    response = requests.get(url, headers=fake_headers)
    html = response.content.decode('utf-8')
    soup = BeautifulSoup(html, 'html.parser')
    return soup

def GetBigData(soup):
    all_movies = soup.find('div', id="showing-soon")
    bigData = []
    for each_movie in all_movies.find_all('div', class_="item", limit = 2):
        data = Data()
        # 先获取所有的<a>标签
        all_a_tag = each_movie.find_all('a')
        # 再取第二个<a>标签的 text，即电影名
        data.movie_name = all_a_tag[1].text
        # 再取第二个<a>标签的 'href'属性，即电影链接
        data.moive_href = all_a_tag[1]['href']

        # 先获取所有的<li>标签
        all_li_tag = each_movie.find_all('li')
        # 再取第二个<li>标签的 text，即日期
        data.movie_date = all_li_tag[0].text
        data.movie_type = all_li_tag[1].text
        data.movie_area = all_li_tag[2].text
        data.movie_lovers = all_li_tag[3].text
        bigData.append(data)
    return bigData

def PrintBigData(bigData):
    for data in bigData:
        print(f'名字：{data.movie_name}\n 链接：{data.moive_href}\n 日期：{data.movie_date}\n 类型：{data.movie_type}\n 地区：{data.movie_area}\n 关注者：{data.movie_lovers}\n')

def WriteToTxt(bigData):
    with open('/Users/jiangsai02/Documents/Temp/WebCrawler.txt', 'w') as OpenTxt:
        for data in bigData:
            for each_key,each_value in data.__dict__.items():
                OpenTxt.write(f'{each_key}":"{each_value}\n')
            OpenTxt.write('\n')

def WriteToHtml(bigData):
    html_begin = ("""
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>豆瓣电影即将上映影片信息</title>
                    <link href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
                </head>
                <body>
                <h2 class="text-center">豆瓣电影即将上映影片信息</h2>
                <table class="table table-striped table-hover mx-auto text-center">
                    <thead>
                        <tr>
                            <th>影片名</th>
                            <th>上映日期</th>
                            <th>影片类型</th>
                            <th>地区</th>
                            <th>关注者数量</th>
                        </tr>
                    </thead>
                    <tbody>
                """)
    html_end = ("""
                    </tbody>
                </table>
                </body>
                </html>
                """)
    def each_movie_info(data):
        movie_info = (f"""
                        <tr>
                            <td><a href="{data.moive_href}">{data.movie_name}</a></td>
                            <td>{data.movie_date}</td>
                            <td>{data.movie_type}</td>
                            <td>{data.movie_area}</td>
                            <td>{data.movie_lovers}</td>
                        </tr>
                    """)
        return movie_info
    with open('/Users/jiangsai02/Documents/Temp/WebCrawler.html', 'w') as OpenHtml:
        OpenHtml.write(html_begin)
        for data in bigData:
            html_movie_info = each_movie_info(data)
            OpenHtml.write(html_movie_info)
        OpenHtml.write(html_end)

def WriteToCSV(bigData):
    # Windows默认编码是gbk，如果用utf-8，excel打开可能会乱码
    # newline='' 是为了让writer自动添加的换行符和文件的不重复，防止出现跳行的情况
    with open('/Users/jiangsai02/Documents/Temp/WebCrawler.csv', 'w', encoding="gbk", newline='') as OpenCSV:
        CSVwriter = csv.writer(OpenCSV)
        CSVwriter.writerow(["影片名", "链接", "上映日期", "影片类型", "地区", "关注者"])
        for data in bigData:
            CSVwriter.writerow([data.movie_name, data.moive_href, data.movie_date, data.movie_type, data.movie_area, data.movie_lovers])

if __name__ == "__main__":
    url = "https://movie.douban.com/cinema/later/chengdu/"
    soup = GetSoup(url)
    bigData = GetBigData(soup)
    PrintBigData(bigData)
    WriteToTxt(bigdata)
    WriteToHtml(bigdata)
    WriteToCSV(bigData)
```

> 1. GetSoup(url)：网页转换成 BeautifulSoup 对象
>
>    > 这是个通用方法，以后直接用即可
>
> 2. GetBigData(soup)：从 BeautifulSoup 对象中获取目的数据
>
>    > 这是整个程序的关键，具体分析可往上翻分析策略
>
> 3. PrintBigData(bigData)：打印目的数据，判断是否遗漏
>
> 4. WriteToTxt(bigdata)：写入txt
>
> 5. WriteToHtml(bigdata)：写入html
>
>    > html 的拼接可以借鉴
>
> 6. WriteToCSV(bigData)：写入csv

### 爬虫之读写

```python
import requests
from bs4 import BeautifulSoup

# 伪装成浏览器的header
url = "https://python123.io/ws/demo.html"
# 请求参数里面把伪装的header加上
fake_headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36'
}

response = requests.get(url, headers=fake_headers)
html = response.content.decode('utf-8')
soup = BeautifulSoup(html, 'html.parser')
print(soup)
```
#### 1.写操作，写入时覆盖原文

```python
# 自动关闭文件
with open('/Users/jiangsai02/Documents/Temp/WebCrawler.html', 'w') as OpenHtml:
    OpenHtml.write(response.content.decode('utf-8'))
```
#### 2.读操作

```
# 自动关闭文件
with open('/Users/jiangsai02/Documents/Temp/WebCrawler.html', 'r', encoding="utf-8") as OpenHtml:
    Html = OpenHtml.read()
```





