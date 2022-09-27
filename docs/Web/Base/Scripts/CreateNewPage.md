---
title: CreateNewPage
sidebarDepth: 2
---

## 前言

### 根据项目需要一键创建模板

```javascript
<script >
const inquirer = require('Inquirer');
const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const execSync = require('child_process').execSync;
const currentUserEmail = execSync('git show -s --format=%ce').toString().trim();

// 路由文件相关配置
const routesArrReg = /const routerArr = \[[\s\S]*?\]/;
const routesStatement = 'const routerArr = [';
const routesFilePath = path.join(__dirname, '../', 'server/router.js');

// spy监控路由配置
// const spyRoutesArrReg = /const pageList = \[[\s\S]*?\]/;
// const spyRoutesStatement = 'const pageList = [';
// const spyRoutesFilePath = path.join(__dirname, '../', 'vue-src/pages/Base.ssr.vue');
let options = {};
// 生成index.js文件
const createIndexFile = (options, vueFileName) => `
/**
 * @file ${options.description}
 * @author ${currentUserEmail}
 */

import Base from '../Base.ssr.vue';
import ${vueFileName} from './${vueFileName}.vue';


const render = Base.getRenderAction(${vueFileName});
if (!V_SSR) {
    window.render = render;
}

export default render;

`;

const createVueFile = vueFileName => `
<template>
    <div>
        模版
    </div>
</template>

<script>
export default {
    name: '${vueFileName}'
};
</script>

<style  lang="scss">

</style>
`;

const createActionFile = (options, actionFileName) => `
/**
 * @file ${options.description}
 * @author ${currentUserEmail}
 */
'use strict';

import SsrBase from '../lib/ssrBase.js';

const pageAction = new SsrBase({
    title: '${options.title}',
    chunk: '${actionFileName}'
});

export default pageAction.action.bind(pageAction);

`;

const main = () => {
    const {page} = options;
    const dirName = page.toLowerCase();
    const vueFileName = `${page}View`;

    const pagePath = path.join(__dirname, '../', 'vue-src/pages/', dirName);
    const indexFilePath = path.join(pagePath, '/index.js');
    const vueFilePath = path.join(pagePath, `${vueFileName}.vue`);
    const actionFilePath = path.join(__dirname, '../', 'server/action', `${dirName}.js`);


    // 新建page目录
    const createPageDir = async () => {
        const isPageExist = await fse.exists(pagePath);
        if (isPageExist) {
            throw new Error('page已存在');
        }
        await fse.mkdir(pagePath);
        return pagePath;
    };

    // 新建page下的js,vue文件，写入内容，写入action中的文件
    const writePageFile = async () => {
        return Promise.all([
            fse.writeFile(indexFilePath, createIndexFile(options, vueFileName), 'utf-8'),
            fse.writeFile(vueFilePath, createVueFile(vueFileName), 'utf-8'),
            fse.writeFile(actionFilePath, createActionFile(options, dirName), 'utf-8'),
        ]);
    };

    // 读取router中文件，添加router

    const pushNewRoute = async (reg, statement, filePath) => {
        const routeContent = await fse.readFile(filePath, 'utf-8');
        const newRouteContent = routeContent.replace(reg, routesStr => {
        // 截取数组字符串中内容
            routesStr = routesStr.slice(statement.length + 1, routesStr.length - 2).replace(/'/g, '');
            let routesArr = routesStr.split('\n');

            routesArr = routesArr.map(route => {
                const routeObj = {};
                route = route.trim();
                const routeItemData = route.split(',');
                routeObj.value = routeItemData[0];
                // 去除route本身，注释中可能也会有逗号，合并剩余项
                routeObj.comments = routeItemData.slice(1).join();
                return routeObj;
            });

            // 将新路由推入排序
            routesArr.push({value: options.route, comments: ` // ${options.description}`});
            routesArr.sort((a, b) => {
            // 小写的ASC码会拍到大写后，所以要转化一下
                const x1 = a.value.toUpperCase();
                const x2 = b.value.toUpperCase();
                if (x1 < x2) {
                    return -1;
                }
                else if (x1 === x2) {
                    return 0;
                }
                return 1;

            });
            let newRouteStr = statement;
            routesArr.forEach((v, i) => {

                // 如果最后一行有注释单独处理
                if (i === routesArr.length - 1 && v.value.indexOf('//') !== -1) {
                    const lastRoute = v.value.split('//');
                    v = {value: lastRoute[0].trim(), comments: ` //${lastRoute[1]}`};

                }
                newRouteStr += '\n    ';
                newRouteStr += `'${v.value}'`;
                // eslint规则最后一个不加逗号
                if (i !== routesArr.length - 1) {
                    newRouteStr += ',';
                }

                if (v.comments) {
                    newRouteStr += v.comments;
                }
            });
            newRouteStr += '\n]';
            return newRouteStr;
        });
        return fse.writeFile(filePath, newRouteContent, 'utf-8');
    };
    createPageDir().then(res => {
    }).then(res => {
        return writePageFile();
    }).then(res => {
        return Promise.all([
            pushNewRoute(routesArrReg, routesStatement, routesFilePath),
            // pushNewRoute(spyRoutesArrReg, spyRoutesStatement, spyRoutesFilePath),
        ]);
    }).then(() => {
        console.log(chalk.green(`新建页面成功,路由为：/${options.route}重启项目及开发机后生效`));
    }).catch(err => {
        console.log(chalk.red(err.toString()));
    });
};


inquirer.prompt([
    {
        type: 'input',
        name: 'route',
        message: '请输入要注册的路由',
        default: '请输入小写',
        validate(value) {
            return /^[a-z]+$/.test(value);
        }
    },
    {
        type: 'input',
        name: 'page',
        message: '请输入page中的页面名称(大驼峰形式)',
        validate(value) {
            return /([A-Z][a-z]+)$/.test(value);
        }
    },
    {
        type: 'input',
        name: 'title',
        message: '请输入页面标题',
        validate(value) {
            return value !== '';
        }
    },
    {
        type: 'input',
        name: 'description',
        message: '请输入页面备注',
        default: '',
    }
]).then(answers => {
    options = answers;
    main();
}).catch(err => {
    console.log(JSON.stringify(err));
});

</script >
```