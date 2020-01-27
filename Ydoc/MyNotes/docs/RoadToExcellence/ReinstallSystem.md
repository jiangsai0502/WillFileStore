# 重装系统
* Finder顶端显示完整路径  
    `defaults write com.apple.finder _FXShowPosixPathInTitle -bool YES`
* 启动台图标数量
    ```
    defaults write com.apple.dock springboard-rows -int 7
    defaults write com.apple.dock springboard-columns -int 11
    defaults write com.apple.dock ResetLaunchPad -bool true;killall Dock
    ```
* sougou
* 微信
* Chrome
* istat menus
* itsycal
* Paste（官网下载helper）
* sublime
* Snagit
* snipaste
* bettertouchtool
* PDF expert
* office
* go2shell（官网下载）
* 百度云盘
* Mweb
* Picgo
* Permute
* Parallels Desktop
* stretchly
* QQ
* 欧路
* ScreenFlow
* xcode
* Axure
* Appcleaner
* brew
* youtube-dl  
`brew install youtube-dl`
* you-get  
`brew install you-get`
* stretchly  
    `brew cask install stretchly`
* mpv  
    `brew cask install mpv`
    * 创建配置文件：~/.config/mpv/input.conf
    ```
AXIS_UP  add volume 2
AXIS_DOWN  add volume -2
AXIS_LEFT  seek -2 exact
AXIS_RIGHT seek 2 exact
LEFT  seek -2 exact
RIGHT  seek 2 exact
UP  add volume 2
DOWN  add volume -2
    ```
* iterm2  
    `brew cask install iterm2`
    * 打开iterm2配置页  
        `open -a Go2Shell --args config`
    * 安装Oh my zsh  
        `sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
    * 安装PowerLine
    ```
    sudo easy_install pip
    pip install powerline-status --user
    ```
    * 安装PowerFonts字体
    ```
    mkdir ~/Documents/Temp
    git clone https://github.com/powerline/fonts.git --depth=1
    ./fonts/install.sh
    ```
    设置字体：iTerm2 -> Preferences -> Profiles -> Text，在Font区域选中Change Font，然后找到Meslo LG字体，有L、M、S可选
        
    ![](https://raw.githubusercontent.com/jiangsai0502/PicBedRepo/master/20200112165201.png)
        
    * 安装配色方案1
    ```
    cd ~/Documents/Temp
    git clone https://github.com/altercation/solarized/ --config http.proxy='http://127.0.0.1:1087'
    cd solarized/iterm2-colors-solarized/
    open solarized/iterm2-colors-solarized/
    ```
    设置配色：iTerm2 -> Preferences -> Profiles -> Colors -> Color Presets
        
    ![](https://raw.githubusercontent.com/jiangsai0502/PicBedRepo/master/20200112182935.png)
        
    * 修改主题
    ```
    cd ~/Documents/Temp
    git clone https://github.com/fcamblor/oh-my-zsh-agnoster-fcamblor.git --config http.proxy='http://127.0.0.1:1087'
    ./oh-my-zsh-agnoster-fcamblor/install
    open ~/.zshrc
    搜索'ZSH_THEME'，修改为ZSH_THEME="agnoster"
    ----或者使用自己的主题----
    https://github.com/jiangsai0502/WillFileStore
    1.把主题文件WillTheme.zsh-theme放入/Users/sai/.oh-my-zsh/themes
    2.open ~/.zshrc
    3.修改ZSH_THEME="WillTheme"
    ```
    * 安装高亮插件
    ```
    brew install zsh-syntax-highlighting
    open ~/.zshrc
    最后插入一行：source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
    source ~/.zshrc
    ```
    * 自动提示与命令补全
    ```
    cd ~/.oh-my-zsh/custom/plugins/
    git clone https://github.com/zsh-users/zsh-autosuggestions  --config http.proxy='http://127.0.0.1:1087'
    open ~/.zshrc
    搜索'plugins'，修改为plugins=(zsh-autosuggestions git)
    ```


### you-get用法
* 分析视频可供下载的全部格式：-i参数
`you-get -i 'https://www.youtube.com/watch?v=jNQXAC9IVRw'`
* 直接下载默认格式：
`you-get 'https://www.youtube.com/watch?v=jNQXAC9IVRw'`
* 自定义下载格式：
`you-get --itag=18 'https://www.youtube.com/watch?v=jNQXAC9IVRw'`
* 使用HTTP代理下载：
`you-get -x 127.0.0.1:1087 'https://www.youtube.com/watch?v=jNQXAC9IVRw'`


### youtube-dl用法
* 下载默认类型视频（无字幕）
`youtube-dl https://www.youtube.com/watch?v=n_6p-1J551Y`
* 下载默认类型视频（有字幕）
`youtube-dl --write-auto-sub https://www.youtube.com/watch?v=n_6p-1J551Y`
* 下载字幕（无视频）
`youtube-dl --write-auto-sub --skip-download https://www.youtube.com/watch?v=n_6p-1J551Y`
* 查看视频所有类型
`youtube-dl -F https://www.youtube.com/watch?v=n_6p-1J551Y`
* 查看视频所有字幕
`-dl --list-subs https://www.youtube.com/watch?v=n_6p-1J551Y`
* 下载指定质量的视频和音频并自动合并（有字幕）
`youtube-dl --write-auto-sub -f 160+249 https://www.youtube.com/watch?v=n_6p-1J551Y`
* 使用代理下载默认类型的视频（有字幕）
`youtube-dl --proxy 127.0.0.1:1087 --write-auto-sub https://www.youtube.com/watch?v=xqdI6ljJ954`
* 获取proxy_url:proxy_port的方式
`在Shadowsocks找到copy HTTP proxy shell export line，如‘export http_proxy=http://127.0.0.1:1087’即可提取代理地址何端口`


### Mac 修改文件创建时间
`touch -mt YYYYMMDDhhmm`
示例
```
1. 在Terminal中输入 touch -mt 20160101  
2. 将/Users/will/Downloads/1.png拖入Terminal中
3. Terminal会显示 touch -mt 20160101 /Users/will/Downloads/123.png
4. 回车执行即可
注：改成当天 touch -m 文件名
```

### Git挂代理方式
```
git clone https://github.com/altercation/solarized/ --config http.proxy='http://127.0.0.1:1087'
```

### brew挂代理方式
```
touch ~/.curlrc
open ~/.curlrc
输入代理地址：proxy=127.0.0.1:8087
用完可以删掉该文件，否则墙内资源会受限
rm ~/.curlrc
```
