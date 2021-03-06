const moment = require('moment');
moment.locale("zh-cn");

const secret = require('./secret');

module.exports = {
    //更新时间
    '@vuepress/last-updated': {
        transformer: (timestamp) => moment(timestamp).format('LLLL')
        // 不要忘了安装 moment
        // const moment = require('moment');
        // return moment(timestamp).format('LLLL');
    },
    //PWA更新
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新",
        }
    },
    //vssue评论插件
    // '@vssue/vuepress-plugin-vssue': {
    //     // 设置 `platform` 而不是 `api`
    //     platform: 'github-v4',
    //     // 其他的 Vssue 配置
    //     owner: 'githubsgeek',
    //     repo: 'VuePressBlog',
    //     clientId: secret.clientId,
    //     clientSecret: secret.clientSecret,
    //     autoCreateIssue: true,
    // },
    //置顶
    '@vuepress/back-to-top': true,
    //Google Analytics
    '@vuepress/google-analytics':
    {
        'ga': secret.ga,
    },
    //图片缩放
    '@vuepress/medium-zoom': {
        selector: 'img.custom',
    }
}