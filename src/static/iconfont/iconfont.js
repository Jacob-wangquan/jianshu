import { injectGlobal } from 'styled-components';

injectGlobal`
@font-face {font-family: "iconfont";
src: url('./iconfont.eot?t=1533709991647'); /* IE9*/
src: url('./iconfont.eot?t=1533709991647#iefix') format('embedded-opentype'), /* IE6-IE8 */
url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
url('./iconfont.ttf?t=1533709991647') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
url('./iconfont.svg?t=1533709991647#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
font-family:"iconfont" !important;
font-size:16px;
font-style:normal;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

.icon-Aa:before { content: "\e636"; }

.icon-qianbi:before { content: "\e610"; }

.icon-fangdajing:before { content: "\e6dd"; }
`;


