# Web Template with AntD and Theme Switching
This is a web template project with AntD and theme switching already pre-built. The goal of this repository is to be able to be easily forked and modified for quick app prototyping.

## Themeing
Themes should be created in /src/common/themes. Themes need to be in a .less format, and must use theme variables from [https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less] or [/node_modules/antd/lib/style/themes/default.less]

Once theme has been created (or modified), you will need to run 'npm run themify' in order to have it compiled into browser-ready css. Modified themes will not work until this command is run.

## Node Setup
Node: v14.16.0
Npm: 6.14.11