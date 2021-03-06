import { injectGlobal } from 'styled-components';

injectGlobal`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1533741497493'); /* IE9*/
  src: url('./iconfont.eot?t=1533741497493#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1533741497493') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1533741497493#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
font-family:"iconfont" !important;
font-size:16px;
font-style:normal;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
`;


