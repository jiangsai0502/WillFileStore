# 搭建Python环境

## Anaconda
### 搭建环境
* 官网下载后默认安装即可  
* 搜索anaconda3，得知安装路径是/opt/anaconda3
* 在环境变量中添加anaconda3的路径
    > ```
    > open ~/.bash_profile
    > 在最后插入一行：export PATH="/opt/anaconda3/bin:$PATH"
    > source ~/.bash_profile
    > ```
* 在oh-my-zsh中添加anaconda3的路径
    > ```
    > open ~/.zshrc
    > 在第三行插入一行：export PATH="/opt/anaconda3/bin:$PATH"
    > source ~/.zshrc
    > ```
* 给conda挂代理  
    > ```
    > open ~/.condarc
    > 最后插入几行
    > proxy_servers:
    >   http: http://127.0.0.1:1087
    >   https: https://127.0.0.1:1087
    > ```

### 基础用法

* 查看当前系统下的虚拟环境  
    
> `conda info --envs`
    
* 激活base虚拟环境(base是默认创建的)  
    
    > `source activate base`
* 退出虚拟环境  
    
    > `conda deactivate`
* 创建名为jspython2 的python2.7的虚拟环境  
    
    > `conda create -n jspython2 python=2.7`
* 创建名为jspython3 的python3.7的虚拟环境  
    
    > `conda create -n jspython3 python=3.7`
* 虚拟环境的安装路径
    
    > /Users/jiangsai02/opt/anaconda3/envs
* 激活虚拟环境 jspython3  
    
    > `source activate jspython3`
* 切换虚拟环境 jspython3 到flask_py3  
    > `conda deactivate`  
    > `source activate flask_py3`
* 删除虚拟环境 jspython3  
    
    > `conda env remove -n jspython3`
* 为当前的虚拟环境 flask_py3 安装flask包  
    
    > `conda install flask`
* 虚拟环境下包的安装路径
    
    > /Users/jiangsai02/opt/anaconda3/envs/flask_py3/lib/python3.7/site-packages/flask
* 为当前的虚拟环境 flask_py3 更新flask包  
    
    > `conda update flask`
* 为当前的虚拟环境 flask_py3 卸载flask包  
    
    > `conda remove flask`
* 查看当前的虚拟环境 flask_py3 的所有安装包  
    
    > `conda list`

## VSCode配置
1. 左侧最下方“Extensions”，安装以下插件
    > Python - 代码分析，高亮，规范化  
    > Bracket Pair Colorizer - 括号颜色  
    > Anaconda Extension Pack - 代码提示增强
    > Python Extension Pack(Don Jayamanne) - 代码补全

2. 查看Python版本路径
    > ```
    > which python
    >    /Users/jiangsai02/opt/anaconda3/bin/python
    > which python3
    >    /Users/jiangsai02/opt/anaconda3/bin/python3
    > ```

3. 配置VS Code中用户配置
    > code - preference - settings，点击右上角的open settings(UI)，输入
    > ```
    > {
    >     "python.pythonPath": "/Users/jiangsai02/opt/anaconda3/envs/jspython3/bin/python",
    >     "workbench.startupEditor": "newUntitledFile",
    >     "terminal.integrated.inheritEnv": false,
    >     "editor.minimap.enabled": false,
    >     "editor.suggestSelection": "first",
    >     "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    >     "python.jediEnabled": false,
    >     "terminal.integrated.shell.osx": "/bin/zsh",
    >     "editor.renderControlCharacters": true,
    >     "editor.renderWhitespace": "all",
    > }
    > ```
    > 注：每次更换版本都要改python.pythonPath

4. 验证Python程序的运行环境
    > import platform  
    > print("platform = ",platform.python_version())
    
## MySql 安装

1. 安装mysql数据库：

   [下载链接](https://downloads.mysql.com/archives/community/)

   [安装步骤](https://www.jianshu.com/p/833f388da8e3)

2. 查看mysql进程是否存在

   `ps aux | grep mysql`

3. 测试数据库

   1. mysql 默认安装在 /usr/local/mysql，该目录下有对应的bin、lib、doc等目录

      `cd /usr/local/mysql && ls`

   2. 在bin目录下，执行 ./mysql -u root -p ，输入安装时设置的初始化密码，即可看到mysql版本信息和mysql命令行界面

      `cd bin && ./mysql -u root -p `

4. 配置环境变量

   `open ~/.bash_profile`

   文件最后新起一行，插入下面两行代码

   `export PATH=$PATH:/usr/local/mysql/bin`

   export PATH=$PATH:/usr/local/mysql/support-files`

5. 操作数据库（命令行）

   1. 启动MySQL服务

      `sudo mysql.server start`

   2. 停止MySQL服务

      `sudo mysql.server stop`

   3. 重启MySQL服务 

      `sudo mysql.server restart`

   4. 查看MySQL服务状态 

      `sudo mysql.server status`

   5. 进入MySQL

      `mysql -u root -p`

   6. 退出MySQL

      `exit`

   > 错误： ERROR! MySQL server PID file could not be found!  [参考方案](https://blog.51cto.com/dahui09/1841627)
   >
   > 1. 重启 sql：系统偏好设置 - MySQL

   



