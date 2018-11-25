# 说明
首次下载本项目时，先安装好Node.js及npm，再安装AngularJS
node -v, npm -v
我的Node.js版本10.13.0，npm版本6.4.1

之后操作步骤如下

git clone https://github.com/LAUHank/demo-ng-alain.git

cd demo-ng-alain

npm install # 这个过程可能会很久，如果出现 `npm audit fix` 一类的提示，忽略它

ng serve # 启动开发服务器，浏览器访问  http://127.0.0.1:4200/

或者

ng build

会在当前项目目录下生成一个 dist/ 目录

此目录下有一个 demo-ng-alain 目录，就相当于WebRoot了

# 参考
https://ng-alain.com/docs/getting-started/zh

你的本地环境需要安装 node 和 git。我们的技术栈基于 Typescript、Angular、g2、@delon 和 ng-zorro-antd，提前了解和学习这些知识会非常有帮助

# 创建并初始化项目
确保使用的是最新版本 Angular cli

ng new demo-ng-alain --style less

y

# 安装ng-alain并启动开发服务器
cd demo-ng-alain

ng add ng-alain # 此处可能会卡住，可以Ctrl + C停止后多次重试。如果安装完成后有 npm audit fix，忽略它

ng serve

# 浏览器访问
http://127.0.0.1:4200/

用户名：admin  密码：ng-alain.com

<p align="center">
  <a href="https://ng-alain.com">
    <img width="100" src="https://ng-alain.com/assets/img/logo-color.svg">
  </a>
</p>

<h1 align="center">
Ng Alain
</h1>

<div align="center">

  Out-of-box UI solution for enterprise applications, Let developers focus on business.

  [![Build Status](https://travis-ci.org/ng-alain/ng-alain.svg?branch=master)](https://travis-ci.org/ng-alain/ng-alain)
  [![Dependency Status](https://david-dm.org/ng-alain/ng-alain/status.svg)](https://david-dm.org/ng-alain/ng-alain)
  [![GitHub Release Date](https://img.shields.io/github/release-date/ng-alain/ng-alain.svg?style=flat-square)](https://github.com/ng-alain/ng-alain/releases)
  [![NPM version](https://img.shields.io/npm/v/ng-alain.svg)](https://www.npmjs.com/package/ng-alain)
  [![NPM version](https://img.shields.io/npm/v/ng-alain/next.svg)](https://www.npmjs.com/package/ng-alain)
  [![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
  [![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/ng-alain/ng-alain/blob/master/LICENSE)
  [![Gitter](https://img.shields.io/gitter/room/ng-alain/ng-alain.svg?style=flat-square)](https://gitter.im/ng-alain/ng-alain)
  [![extension-for-VSCode](https://img.shields.io/badge/extension%20for-VSCode-blue.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)
  [![Backers on Open Collective](https://opencollective.com/ng-alain/backers/badge.svg)](#backers) 
  [![Sponsors on Open Collective](https://opencollective.com/ng-alain/sponsors/badge.svg)](#sponsors) 

</div>

English | [简体中文](README-zh_CN.md)

## Quick start

```bash
# Make sure you are using the latest version of Angular cli
ng new demo --style less
cd demo
ng add ng-alain
ng serve
# or hmr mode
npm run hmr
```

> Please refer to [Cli](https://ng-alain.com/cli) for more details.
>
> [vscode] recommended install [ng-zorro-vscode](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode) & [ng-alain-vscode](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode) plugins.

## Links

+ [Document](https://ng-alain.com)
+ [DEMO](https://ng-alain.github.io/ng-alain/)

## Features

+ `ng-zorro-antd` based
+ Responsive Layout
+ I18n
+ [@delon](https://github.com/ng-alain/delon)
+ Lazy load Assets
+ UI Router States
+ Customize Theme
+ Less preprocessor
+ Well organized & commented code
+ Simple upgrade
+ Support Docker deploy

## Architecture

![Architecture](https://raw.githubusercontent.com/ng-alain/delon/master/_screenshot/architecture.png)

> [delon](https://github.com/ng-alain/delon) is a production-ready solution for admin business components packages, Built on the design principles developed by Ant Design.

## App Shots

![desktop](https://raw.githubusercontent.com/ng-alain/delon/master/_screenshot/desktop.png)
![ipad](https://raw.githubusercontent.com/ng-alain/delon/master/_screenshot/ipad.png)
![iphone](https://raw.githubusercontent.com/ng-alain/delon/master/_screenshot/iphone.png)

## Donation

ng-alain is an MIT-licensed open source project. In order to achieve better and sustainable development of the project, we expect to gain more backers. You can support us in any of the following ways:

- [opencollective](https://opencollective.com/ng-alain)
- [paypal](https://www.paypal.me/cipchk)
- [支付宝或微信](https://ng-alain.com/assets/donate.png)

## Backers

Thank you to all our backers! 🙏

<a href="https://opencollective.com/ng-alain#backers" target="_blank"><img src="https://opencollective.com/ng-alain/backers.svg?width=890"></a>

### License

The MIT License (see the [LICENSE](https://github.com/ng-alain/ng-alain/blob/master/LICENSE) file for the full text)
