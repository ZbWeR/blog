export interface Friend {
  avatar?: string // 头像链接
  name: string // 用户 id
  link: string // 博客链接
  title?: string // 用户头衔
  tag?: string // 用户标签
  color?: string // 标签颜色
  isMe?: boolean // 是否是自己
}

export const friendsInfo: Friend[] = [
  {
    avatar: 'https://blog.zbwer.work/assets/avatar.BTzuv0Gg.jpg',
    name: 'zbwer',
    title: '地球其实只是一个柯基的屁股',
    tag: 'Front-End Developer',
    link: '欢迎交换友链！可参考此处信息',
    color: 'sky',
    isMe: true
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/108560334?v=4',
    name: 'Ma5hr00m',
    title: '在摇摆与徘徊中前行',
    link: 'https://blog.kinoko.fun/',
    tag: 'Web Developer',
    color: 'orange'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/78269445?v=4',
    name: 'mrcaidev',
    title: 'Full-stack Developer.',
    link: 'https://mrcai.dev/',
    tag: 'UESTCer',
    color: 'indigo'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/29620619?v=4',
    name: 'Yaossg',
    title: 'Awesome Computer Scientist',
    link: 'https://Yaossg.com',
    tag: 'DevOps',
    color: 'pink'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/108183563?v=4',
    name: 'ZzzRemake',
    title: 'Curious and Passionate',
    link: 'https://zzzremake.github.io/',
    color: 'indigo'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/106670529?v=4',
    name: '风唤长河',
    title: 'Resourceful Developer',
    link: 'https://ventusvocatflumen.cn/',
    tag: 'Frontend',
    color: 'sky'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/64351788?v=4',
    name: 'sake',
    title: 'NLP Enthusiast',
    link: 'https://sakee.cn/',
    tag: 'INFJ',
    color: 'orange'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/25294996?v=4',
    name: 'Timlzh',
    title: 'Talented Hacker',
    link: 'https://timlzh.com/',
    tag: 'CTFer',
    color: 'pink'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/119086094?v=4',
    name: '破酥',
    title: '潮水蜂拥而至',
    link: 'https://cainhappyfish.github.io/',
    tag: 'UESTCer',
    color: 'green'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/91458671?v=4',
    name: 'Rui1',
    title: 'Visionary and Driven ',
    link: 'https://blog.ruinique.cn/',
    tag: 'Backend',
    color: 'sky'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/61999173?v=4',
    name: 'syrinka',
    title: 'Just Daydream',
    link: 'https://blog.hareta.ren',
    tag: 'CNSS',
    color: 'indigo'
  },
  {
    avatar: 'https://421zuoduan.github.io/images/acg_portrait.png',
    name: '佐渡安',
    title: '猫会死, 可现实一望无垠',
    link: 'https://421zuoduan.github.io/',
    color: 'orange',
    tag: 'CV'
  },
  {
    name: '柳苏明',
    title: '有人生来就被幸福环绕，有人生来就被长夜围绕',
    link: 'https://ignotusjee.github.io/',
    avatar: 'https://ignotusjee.github.io/img/avatar.jpg',
    tag: 'sys',
    color: 'orange'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/163713803?v=4',
    name: 'LofiSu',
    title: 'Learning is a lifelong journey.Keep going.',
    link: 'https://www.lofisu.chat/',
    tag: 'Front-end',
    color: 'sky'
  },
  {
    name: 'Kawhicurry',
    title: "The future is already here.It's just not evenly distributed.",
    link: 'https://kawhicurry.github.io/',
    avatar: 'https://avatars.githubusercontent.com/u/68467656?v=4',
    tag: 'SRE',
    color: 'green'
  },
  {
    name: 'c0s1ne',
    link: 'blog.cos02.top',
    title: 'Keep Passion.',
    avatar: 'https://avatars.githubusercontent.com/u/102515482?v=4',
    color: 'pink',
    tag: 'Front-end'
  },
  {
    name: '戴森球',
    title: '永远相信美好的事情即将发生',
    link: 'http://www.daisenqiu.top/',
    avatar: 'https://avatars.githubusercontent.com/u/142326902?v=4',
    tag: '海康威视'
  }
]
