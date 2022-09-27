---
title: 性能监控
sidebarDepth: 2
---

## 1 前言

- 前端监控是开发人员用来跟踪和维护应用程序表现层的运行状况的过程和工具。
- 可以直接的体现出用户的使用体验的指标：FCP、LCP、CLS(加载速度、视觉稳定、交互延迟)
加载速度 决定了 用户是否可以尽早感受到页面已经加载完成
视觉稳定 衡量了 页面上的视觉变化对用户造成的负面影响大小
交互延迟 决定了 用户是否可以尽早感受到页面已经可以操作


## 2 重要指标

### 2.1 FP（First Paint）-首次绘制时间

::: warning 温馨提示

#### 首次绘制时间，这个指标用于记录页面第一次绘制像素的时间，也可称为白屏时间

### 2.2 FCP（First Contentful Paint）-首次内容绘制时间

::: warning 温馨提示

#### 首次内容绘制时间，这个指标用于记录页面首次绘制文本、图片、非空白 Canvas 或 SVG 的时间。

解释：
对于非 HTML 标签之间的缩进，比如 script 或 style 标签内容缩进，与 script 或 style 标签的缩进同级。
示例：
:::


## 3 实际应用
```javascript
<script >
// 引用
import {getCLS, getFID, getLCP, getFCP, getTTFB} from 'web-vitals';

// 监听
window.addEventListener('load', () => {
    // 抽样
    if (
        window.performance
        && window.performance.timing
        && Math.random() < 0.1
    ) {
        this.sendPerformanceLog();
        this.getWebVitals();
    }
});
fucntion sendPerformanceLog() {
    const timing = performance.timing;
    // 白屏时长
    const firstPaint = timing.domLoading - timing.navigationStart;
    // 网络耗时（request请求耗时）
    const requestTime = timing.responseEnd - timing.requestStart;
    // DCL（domready时间(用户可操作时间节点)）
    const domReadyTime = timing.domContentLoadedEventEnd - timing.navigationStart;
    // Loaded（解析dom树耗时）
    const loadCompleteTime = timing.domComplete - timing.domInteractive;
    // DNS查询耗时
    const dnsTime = timing.domainLookupEnd - timing.domainLookupStart;
    // TCP链接耗时
    const tcpTime = timing.connectEnd - timing.connectStart;
    // onload（总下载时间）
    const onloadTime = timing.loadEventEnd - timing.navigationStart;
    const logParams = {
        firstPaint,
        requestTime,
        domReadyTime,
        loadCompleteTime,
        dnsTime,
        tcpTime,
        onloadTime
    };
    // 有时当前网页load事件还没有发生，loadEventEnd返回0
    if (timing.loadEventEnd > 0) {
        sendLogger.send(logParams);
    }
    else {
        setTimeout(() => {
            this.sendPerformanceLog();
        }, 2000);
    }
}

getWebVitals() {
    // 兼容性
    // getCLS(): Chromium,
    // getFCP(): Chromium, Firefox, Safari
    // getFID(): Chromium, Firefox, Safari, Internet Explorer (with the polyfill)
    // getLCP(): Chromium
    // getTTFB(): Chromium, Firefox, Safari, Internet Explorer

    // 最大内容绘制 (LCP)，对应用户体验loading时长，TTFB和FCP可作为loading感知辅助
    // <=2.5秒良好，
    getLCP(lcp => {
        lcp.value > 0 && sendLogger.send({lcpTime: lcp.value});
    }, true);

    // 记录首次最大内容绘制
    getLCP(lcp => {
        lcp.value > 0 && sendLogger.send({lcpTimeFirst: lcp.value});
    });

    // 首次输入延迟 (FID)，对应用户体验的可交互时间
    // <=100毫秒良好
    getFID(fid => {
        fid.value > 0 && sendLogger.send({fidTime: fid.value});
    }, true);

    // 累积布局偏移 (CLS)，用户感知的视觉稳定性
    // <=0.1良好
    getCLS(cls => {
        cls.value > 0 && sendLogger.send({clsOffset: cls.value * 100});
    }, true);

    // 首次内容绘制 (FCP)
    getFCP(fcp => {
        fcp.value > 0 && sendLogger.send({fcpTime: fcp.value});
    }, true);

    // 首字节时间 (TTFB)
    getTTFB(ttfb => {
        ttfb.value > 0 && sendLogger.send({ttfbTime: ttfb.value});
    }, true);
}
</script >
```

## 4 报表
| 页面（默认80分位） | FP(0.8-1.2) | domloaded(1-1.5) | FCP(1-1.6) | 首次LCP(2.5-4s) | domready(2-2.5)
| ------ | ------ | ------ | ------ | ------ | ------ |
| 1 | homepage | 576 | 2101 | 1273 | 3331 | 3626 |