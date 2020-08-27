//获取main元素
const main = document.getElementById('main');

//创建并添加main子元素
let basic = document.createElement('section');
let nodejs = document.createElement('section');
let react = document.createElement('section');
main.appendChild(basic);
main.appendChild(nodejs);
main.appendChild(react);

//为main下的所有子元素添加main-child类名，并统一设置样式
for (element of main.children) {
  element.className = 'main-child';
}
let mainChildren = document.getElementsByClassName('main-child');
for (item of mainChildren) {
  item.style.display = 'flex';
  item.style.flexDirection = 'column';
  item.style.justifyContent = 'space-between';

  item.style.width = '30%';
  item.style.paddingBottom = '20px';

  item.style.color = '#fff';
  item.style.borderRadius = '10px'
  item.style.backgroundColor = '#323031';
}

//main后代元素内容初始化
function mainDescendantInit(ele) {
  let theme = document.createElement('div');
  let title = document.createElement('h2');
  let tags = document.createElement('div');
  let intro = document.createElement('p');
  let btn = document.createElement('a');

  ele.appendChild(theme);
  theme.appendChild(title);
  theme.appendChild(tags);
  ele.appendChild(intro);
  ele.appendChild(btn);

  theme.className = 'theme';
  title.className = 'title';
  tags.className = 'tags';
  intro.className = 'intro';
  btn.className = 'btn';

  theme.style.height = '154px';
  theme.style.padding = '10px 20px';
  theme.style.color = '#fff';
  theme.style.borderRadius = '10px';

  title.style.margin = '60px auto 10px';
  title.style.fontSize = '19px';
  title.style.textAlign = 'center';

  tags.style.margin = '0 auto';
  tags.style.fontSize = '15px';
  tags.style.textAlign = 'center';

  intro.style.flexGrow = '1';
  intro.style.margin = '20px';
  intro.style.fontSize = '12px';
  intro.style.lineHeight = '20px'
  intro.style.color = '#929294';

  btn.href = 'javascript:;';
  btn.innerText = '了解详情';
  btn.style.display = 'block';
  btn.style.width = '80%';
  btn.style.margin = '0 auto';
  btn.style.lineHeight = '50px';
  btn.style.textAlign = 'center';
  btn.style.color = '#fff';
  btn.style.borderRadius = '25px';
  btn.style.backgroundColor = '#FE7C66';
}
//basic部分
mainDescendantInit(basic);

let basicTheme = basic.getElementsByClassName('theme')[0];
let basicTitle = basic.getElementsByClassName('title')[0];
let basicTags = basic.getElementsByClassName('tags')[0];
let basicIntro = basic.getElementsByClassName('intro')[0];
let basicBtn = basic.getElementsByClassName('btn')[0];

basicTheme.style.backgroundImage = "url('imgs/pic1.png')";
basicTitle.innerHTML = 'VS Code & Markdown & Git';
basicTags.innerHTML = '<span>Markdown</span> <span>git</span> <span>版本控制</span> <span>在线简历</span>';
basicIntro.innerHTML = "欢迎同学们来到此地进行学习，本课程为Web基础系列课程的前置课程，以markdown语法为切入点，结合Git，VS Code，Github等工具，让同学们宏观了解软件开发的形式，直观体验编程的乐趣，为后期学习奠定基础。学完之后将制作一份可浏览的在线简历。";

for (ele of basicTags.children) {
  ele.style.margin = '0 10px';
  ele.style.padding = '0 5px';
  ele.style.lineHeight = '30px';
  ele.style.borderRadius = '30px';
  ele.style.backgroundColor = '#000';
}

//nodejs部分
mainDescendantInit(nodejs);

let nodejsTheme = nodejs.getElementsByClassName('theme')[0];
let nodejsTitle = nodejs.getElementsByClassName('title')[0];
let nodejsTags = nodejs.getElementsByClassName('tags')[0];
let nodejsIntro = nodejs.getElementsByClassName('intro')[0];
let nodejsBtn = nodejs.getElementsByClassName('btn')[0];

nodejsTheme.style.backgroundImage = "url('imgs/pic2.png')";
nodejsTitle.innerHTML = 'Web 开发全栈-NodeJS 路线';
nodejsTags.innerHTML = '<span>Git & CMD</span> <span>JavaScript</span> <span>React</span> <span>Nodejs</span> <span>TDD</span>';
nodejsIntro.innerHTML = "Web开发全栈项目采用\"Agile Education\"小规模限制性在线课程（SPOC）模式，课程有全球顶尖软件咨询公司合作研发，成为Web全栈工程师";

for (ele of nodejsTags.children) {
  ele.style.margin = '0 10px';
  ele.style.padding = '0 5px';
  ele.style.lineHeight = '30px';
  ele.style.borderRadius = '30px';
  ele.style.backgroundColor = '#000';
}

//react部分
mainDescendantInit(react);

let reactTheme = react.getElementsByClassName('theme')[0];
let reactTitle = react.getElementsByClassName('title')[0];
let reactTags = react.getElementsByClassName('tags')[0];
let reactIntro = react.getElementsByClassName('intro')[0];
let reactBtn = react.getElementsByClassName('btn')[0];

reactTheme.style.backgroundImage = "url('imgs/pic3.png')";
reactTitle.innerHTML = 'Web 开发前端-React';
reactTags.innerHTML = '<span>Git & CMD</span> <span>JavaScript</span> <span>React</span>';
reactIntro.innerHTML = "学习使用命令行、Git等开发者工具，深入Javascript和React，成为Web前端工程师";

for (ele of reactTags.children) {
  ele.style.margin = '0 10px';
  ele.style.padding = '0 5px';
  ele.style.lineHeight = '30px';
  ele.style.borderRadius = '30px';
  ele.style.backgroundColor = '#000';
}