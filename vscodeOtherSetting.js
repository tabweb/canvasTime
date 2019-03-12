//  https://blog.csdn.net/win7583362/article/details/79315055/

var setting =

{ // VScode主题配置
    "editor.tabSize": 2,
    "editor.lineHeight": 24,
    "editor.renderLineHighlight": "none",
    "editor.renderWhitespace": "none",
    "editor.fontFamily": "Consolas",
    "editor.fontSize": 15,
    "editor.cursorBlinking": "smooth",
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.formatOnSave": false,
    "editor.snippetSuggestions": "top",
    "editor.wordWrapColumn": 200,
    "editor.wordWrap": "off",
    "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": false
    },
    "terminal.integrated.shell.windows": "C:\\windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
    "javascript.suggestionActions.enabled": false,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "javascript.implicitProjectConfig.experimentalDecorators": true,
    // 安装了tslint插件后，是否启用该插件
    "typescript.validate.enable": true,
    "workbench.iconTheme": "eq-material-theme-icons",
    "workbench.startupEditor": "newUntitledFile",
    "workbench.colorTheme": "Monokai Dimmed",
    "workbench.colorCustomizations": {
        // 设置guide线高亮颜色
        "editorIndentGuide.activeBackground": "#ff0000"
    },
    // 启用/禁用导航路径
    "breadcrumbs.enabled": true,
    "minapp-vscode.disableAutoConfig": true,
    "open-in-browser.default": "chrome",
    // VScode 文件搜索区域配置
    "search.exclude": {
        "**/dist": true,
        "**/build": true,
        "**/elehukouben": true,
        "**/.git": true,
        "**/.gitignore": true,
        "**/.svn": true,
        "**/.DS_Store": true,
        "**/.idea": true,
        "**/.vscode": false,
        "**/yarn.lock": true,
        "**/tmp": true
    },
    // 配置文件关联
    "files.associations": {
        // "*.vue": "html",
        "*.wxss": "css",
        "*.cjson": "jsonc",
        "*.wxs": "javascript"
    },
    // 配置emmet是否启用tab展开缩写
    "emmet.triggerExpansionOnTab": true,
    // 配置emmet对文件类型的支持
    "emmet.syntaxProfiles": {
        "vue-html": "html",
        "vue": "html",
        "javascript": "javascriptreact",
        "xml": {
            "attr_quotes": "single"
        }
    },
    // 在react的jsx中添加对emmet的支持
    "emmet.includeLanguages": {
        "jsx-sublime-babel-tags": "javascriptreact",
        "wxml": "html"
    },
    "emmet.showSuggestionsAsSnippets": true,
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    // 格式化快捷键 shirt+alt+F。vscode格式化有bug，有时可能需要多按几次
    // 保存时自动格式化
    "editor.formatOnPaste": true,
    // 是否开启eslint检测
    "eslint.enable": true,
    // 文件保存时，是否自动根据eslint进行格式化
    "eslint.autoFixOnSave": true,
    // eslint配置文件
    "eslint.options": {
        "configFile": "E:/aaaworkspace/all-template/template-pc-vue-elementui/.eslintrc.js",
        "plugins": ["html"]
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "html",
            // 保存文件时，自动格式化
            "autoFix": true
        },
        {
            "language": "vue",
            "autoFix": true
        },
        "typescript",
        "typescriptreact"
    ],
    // git是否启用自动拉取
    "git.autofetch": false,
    // 配置gitlen中git提交历史记录的信息显示情况
    "gitlens.advanced.messages": {
        "suppressCommitHasNoPreviousCommitWarning": false,
        "suppressCommitNotFoundWarning": false,
        "suppressFileNotUnderSourceControlWarning": false,
        "suppressGitVersionWarning": false,
        "suppressLineUncommittedWarning": false,
        "suppressNoRepositoryWarning": false,
        "suppressResultsExplorerNotice": false,
        "suppressShowKeyBindingsNotice": true,
        "suppressUpdateNotice": true,
        "suppressWelcomeNotice": false
    },
    // 调试，本地服务器配置
    "launch": {
        "configurations": [{
            "type": "node",
            "request": "launch",
            "name": "Node.js",
            "program": "${file}"
        },
            {
                "type": "chrome",
                "request": "launch",
                "name": "explore: chrome",
                "url": "http://localhost:8080",
                "webRoot": "${workspaceFolder}/src",
                "breakOnLoad": true,
                "sourceMapPathOverrides": {
                    "webpack:///src/*": "${webRoot}/*"
                }
            }
        ],
        "compounds": []
    },
    // 是否格式化python文件
    "python.linting.enabled": false,
    // 设置端口。开启apicloud在vscode中的wifi真机同步
    "apicloud.port": "23450",
    // 设置apicloud在vscode中的wifi真机同步根目录，默认可不设置
    "apicloud.subdirectories": "/apicloudproject"
}
