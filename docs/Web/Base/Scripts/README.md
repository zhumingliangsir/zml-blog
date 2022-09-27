---
title: ESlint
sidebarDepth: 2
---

## 前言

### 通过脚本一键生成eslint

```javascript
<script >
/* eslint-disable no-console */
const fs = require('fs-extra');
const execa = require('execa');
const chalk = require('chalk');
const ora = require('ora');
const commentJSON = require('comment-json');
const VSCODE_SETTINGS_PATH = '.vscode/settings.json';
const spinner = ora('vscode配置中...').start();

function install(extension) {
    return execa
        .command(`code --install-extension ${extension}`)
        .then(ret => {
            console.log('\n', ret.stdout);
        })
        .catch(err => console.log(err));
}

function eslint() {
    return install('dbaeumer.vscode-eslint');
}

const extensionSettings = commentJSON.parse(
    `{
        "editor.codeActionsOnSave": {
          "source.fixAll.eslint": true
        },
    }`,
    null,
    false
);

function setting() {
    return fs
        .pathExists(VSCODE_SETTINGS_PATH)
        .then(exist => {
            if (exist) {
                return fs
                    .readFile(VSCODE_SETTINGS_PATH)
                    .then(file => file.toString());
            }

            return Promise.resolve('{}');
        })
        .then(settingContent => {
            const settings = commentJSON.parse(settingContent);

            return settings;
        })
        .then(settings => {
            Object.keys(extensionSettings).forEach(key => {
                delete settings[key];
            });

            return settings;
        })
        .then(settings => {
            const mergedSettings = commentJSON.assign(extensionSettings, settings);

            return fs.outputFile(
                VSCODE_SETTINGS_PATH,
                commentJSON.stringify(mergedSettings, null, 2)
            );
        });
}

eslint()
    .then(setting)
    .then(() => {
        spinner.succeed('vscode配置完成').stop();
        console.log(chalk.green('vscode配置完成'));
    })
    .catch(e => {
        spinner.fail('vscode配置失败').stop();
        console.log(chalk.red(e));
    });

</script >
```