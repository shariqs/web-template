# Web Template with AntD, Theme Switching, Routing, Redux
This is a web template project with the basics already pre-built. The goal of this repository is to be easily forked and modified for quick app prototyping.

# Themeing
Theming isn't particularly hard in this project, but does require a bit of coordination and setup. Please read the below guide carefully to ensure themes are correctly used. **Keep theme variables named the same across files and objects**

## Add Themes
1. Create a new **less file** in */src/common/themes* (needs to be a .less file)
2. Create a new **javascript object** in */src/constants/themes*
3. Create a new **css file** in */public* called **master-<themeName>-theme.css**
4. Add your theme to the **getThemeColors** function in */src/actions/util*
5. Add theme file (from step 3) to **themes** variable in */src/index.js*
5. Run **npm run themify** to compile your changes
6. Restart terminal (re-rerun **npm run start**)

## Remove Themes
1. Remove undesired theme **file** from */src/common/themes*
2. Remove undesired theme **object** from */src/constants/themes*
3. Remove undesired theme **files** from */public* (master-theme + exported theme)
4. Remove undesired theme from **theme** variable in */src/index.js*
5. Remove undesired theme from **getThemeColors** function in */src/actions/util*
6. Restart terminal (re-rerun **npm run start**)

## Modify Themes
1. Location desired theme in */src/common/themes*. Modify **AntD variables** in **less-format** here
2. Location desired theme in */src/constants/themes* Modify **Javascript object** here
3. Location desired theme in */public*. Modify **:root** css variables here
4. Run **npm run themify** to compile your changes
5. Restart terminal (re-rerun **npm run start**)

## What the files do?
- */src/common/themes* -> Controls **AntD theme**
- */src/constants/themes* -> Controls **inline javascript styling**
- */public/<master-themeName-theme.css>* -> Controls **css variables**. Combines **AntD theme** and **css variables**
- **getThemeColors** function in */src/actions/util* -> Outputs the current theme's **inline javascript styling**. No need to write confusing *themename === "x" ? "red" : "blue" logic*. Instead, grab **themeColors** from redux, then simply call: **themeColors.primaryColor**

## Modifying AntD theme (via .less theme files)
The .less theme files use variables from [https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less] or [/node_modules/antd/lib/style/themes/default.less]

## Why so many theme files?
Good question! I'd love to reduce this, if anyone has a better system. I needed a way to *blend* the AntD themes, css variables, and inline style variables, as all 3 may be used throughout the app, and all 3 should relate to one-another.

# Node Setup
Node: v14.16.0
Npm: 6.14.11