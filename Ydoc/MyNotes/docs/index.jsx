---
banner:
  name: 'Will的学习小站'
  desc: '记录投入过时间的零散碎片'
  btns: 
    - { name: '开 始', href: 'RoadToExcellence/index.html', primary: true }
    - { name: '>', href: 'https://github.com/jiangsai0502/jiangsai0502.github.io.source' }
  caption: '当前版本: v1.0'
features: 
  - { name: '集中管理', desc: '过去学过很多东西，因为记录的媒介繁杂，导致很多掌握了的知识等到再用时都被深埋在记忆的尘埃里了，所以现在自己建个博客用于存储笔记' }
  - { name: '碎片化', desc: '目前还没找个一个系统学习的路径，写到哪算哪吧' }

footer:
  copyRight:
    name: 'Will jiang'
    href: 'https://github.com/jiangsai0502'
  links:
    站点框架:
      - { name: 'YDoc文件站构建工具', href: 'https://github.com/YMFE/ydoc' }
    站点作者的Github:
      - { name: 'Github', href: 'https://github.com/YMFE' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />