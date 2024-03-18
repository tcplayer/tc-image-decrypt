## Web 端图片解密方案


Web 端图片解密方案是利用 serviceworker 可以拦截全局请求的能力，在前端实现拦截图片请求并解密后替换，浏览器即可正常显示。在如下的体验页面中，对 cdn 实时加密的图片进行了解密并展示：

> 体验页面：
https://tcplayer.vcube.tencent.com/tc-image-decrypt/index.html

> Github：
https://github.com/tcplayer/tc-image-decrypt

本方案只需要一次注册 serviceworker 永久生效，接入成本低，对业务代码无侵入，具体操作步骤如下：

#### 1. 注册 serviceworker（参见 app.js）

通过调用`navigator.serviceWorker.register`，传入 service-worker.js 在项目中的路径地址。

```
const registration = await navigator.serviceWorker.register(
    './service-worker.js',
);
```

#### 2. 拦截请求并解密处理（参见 service-worker.js ） 

相关业务逻辑在 service-worker.js 中，在这里对 VOD 图片的 GET 请求进行拦截，并解密处理，这个文件可以完全不用改动，集成到项目中即可。




> 注：service worker 只能作用在 https 协议下，页面地址和图片地址都要使用 https 协议

> 参考：https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API

















