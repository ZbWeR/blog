---
updateTime: "2024-03-07 00:05"
desc: "现代 CSS 的博大精深！好想成为 CSS 高手😭，切最酷的图！本文试图全面记录 CSS 在面试中的考点，探索那些微小但重要的细节。"
tags: "八股/CSS"
outline: deep
---

## 八股

### 物理像素与逻辑像素

1. 物理像素：物理像素是在设备制造过程中固定下来的像素，也被称为“设备像素”，通常用 `dp` 表示。我们经常提到的屏幕分辨率，如 1920\*1080，就是指的物理像素，它反映的是显示器上的像素点数量。
2. 逻辑像素：逻辑像素通常用来描述图像尺寸，这是一种可以动态变化的像素，一般用`dip`表示。例如一张 300\*300 像素大小的图片，在正常情况下，它的尺寸为 300\*300 个逻辑像素，但是当我们将其放大 2 倍时，它的尺寸就变为了 600\*600 个逻辑像素。

物理像素与逻辑像素的比值称之为`设备像素比`，通常用`dpr`表示，当我们缩放浏览器时，实际上就是在改变设备像素比。在一般的电脑上，设备像素是等于逻辑像素的，也就是 dpr = 1.0 ，但是在高分辨率的电脑上，二者不一定相等，例如，在一台 2k 分辨率的电脑上，dpr 可能为 1.5，意味着 1 个逻辑像素对应 1.5 个物理像素。这样做是为了保证图片在高分辨率屏幕上的清晰度，因为如果不进行缩放，图片在高分辨率屏幕上的尺寸会显得过小。

我们可以通过 `window.devicePixelRatio` 属性来查看当前设备的 `dpr` 值；也可以通过 `meta` 标签的 `initial-scale` 来调整 `dpr` 值（其实就相当于缩放浏览器）。

这一部分的知识有时候会用来解决**不同设备上的 1px 边框问题**，例如在 dpr 为 2 的设备上，1px 的边框实际上是 2px，我们可以通过媒体查询结合`scale`来解决这个问题。

```css
@media (-webkit-min-device-pixel-ratio: 2) {
  .border-1px::after {
    transform: scale(0.5);
  }
}
```

### CSS 选择器优先级

`!important` > 内联样式 > ID > 类 > 标签 > 通配符 > 继承 > 浏览器默认样式

### 伪类与伪元素

- 伪类：单冒号开头, 用于为元素的特定状态设置样式. 如`:hover`、`:active`、`:focus`等。
- 伪元素：双冒号开头, 用于创建一些不在文档树中的元素，并为其设置样式。如`::before`、`::after`...

### 定位 - position

- `static`: 默认值, 即标准的文档定位.
- `relative`: 相对定位，相对于自身原来的位置进行定位，不会脱离文档流，不会影响其他元素的位置。
- `absolute`: 绝对定位，相对于最近的**非`static`定位**的祖先元素进行定位（没有则相对于视窗），脱离文档流，会影响其他元素的位置。
- `fixed`: 固定定位，相对于**视窗**进行定位，脱离文档流，会影响其他元素的位置。
- `sticky`: 粘性定位，相对于最近的**滚动祖先**元素和视窗进行定位，脱离文档流，会影响其他元素的位置。

### 盒模型 - box-sizing

- `content-box`: 默认值，宽度和高度只包括内容，不包括 border 与 padding
- `border-box`: 怪异盒模型

### 回流与重绘

- **重绘**: 当元素的样式发生改变，但不影响布局时，浏览器将使用重绘对元素进行更新，例如改变 `color`、`background-color`、`visibility` 等属性。
- **回流**: 当元素的几何尺寸、位置或者某些属性发生改变时，浏览器会重新渲染页面，称为回流。例如改变 `width`、`height`、`padding`、`margin`、`display`、`border-width` 等属性。
- 回流一定会引起重绘，重绘不一定会引起回流。

### 隐藏元素的方法

- `display: none`: 隐藏元素，不占据空间，不能触发事件，会导致回流。
- `visibility: hidden`: 隐藏元素，占据空间，不能触发事件，导致重绘。
- `opacity: 0`: 隐藏元素，占据空间，可以触发事件，不导致回流重绘，而是触发 CSS3 硬件加速。
- 通过定位将元素移出视窗之外。

> CSS3 硬件加速通过将特定的 CSS 属性应用于元素，例如`transform`、`opacity`、`filter`等，浏览器会将这些元素的渲染和动画操作交给 GPU 来处理，从而提高性能和流畅度。

### BFC

BFC 中文是块级格式化上下文, 是块级盒子布局发生的区域, 也是浮动元素与其他元素交互的区域. BFC 通常用来包含内部浮动元素,**防止父元素高度塌陷**, 也可以用来避免**垂直外边距重叠**。

创建 BFC 的方式有很多, 例如: 浮动元素、绝对定位元素、行内块元素、`overflow` 不为 `visible` 的元素等。

### flex:1 是什么的缩写

`flex:1` 是 `flex-grow`、`flex-shrink`、`flex-basis` 的缩写，分别表示元素的放大比例、缩小比例、初始尺寸。

### 元素水平垂直居中的方法

**水平居中**:

- 行内元素: `text-align: center`
- 块级元素:
  - 外边距 `margin: 0 auto`
  - flex 布局 `justify-content: center`
  - 绝对定位 `left: 50%; transform: translateX(-50%)`

**垂直居中**:

- 行内元素：设置`line-height`等于`height`值
- 块级元素:
  - flex 布局 `align-items: center`
  - 绝对定位 `top: 50%; transform: translateY(-50%)`

## 场景题

### 文本溢出

**单行文本溢出**

```css
.text-overflow {
  white-space: nowrap; /* 强制单行显示 */
  overflow: hidden; /* 溢出部分隐藏 */
  text-overflow: ellipsis; /* 溢出部分显示省略号 */
}
```

**多行文本溢出**

```css
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 显示的行数 */
  -webkit-box-orient: vertical;
}
```

### 三角形

### 正方形

### 【0.5px】问题

> 现在，可爱的美工妹子【哆啦】觉得 1px 的边框还是太粗了，她想要你实现 0.5px 的边框，你可以做到吗？

**解题要点**: <Badge>transform</Badge><Badge>transform-origin</Badge><Badge>伪元素</Badge>

**问题分析**:

我们知道 CSS 的最小尺寸为 1px,想要实现 0.5px 的边框，显然不能通过直接设置尺寸来实现，我们需要借助一点其他的工具———`transform`的`scale`函数.

但需要注意的是，`transform` 的对象是整个盒子，无法指定某个特定的属性去放缩。当我们对某个 div 盒子使用 `scale` 放缩的时候，无论是边框还是内容大小都会发生改变。例如本例中当我们试图通过 `scale(0.5)` 去获得 0.5px 的边框时，盒子内容大小(长宽、字体大小等属性)也会变为原来的一半。

这时我们可以考虑使用**伪元素**，将伪元素的长宽设为原来的 200%(因为后面缩小为了 50%)，并设置 `border` 为 1px 以及, 随后再对伪元素进行`transform`操作，这样就不会影响到原来的内容了。

至此我们已经能得到 0.5px 的边框了，但是它的位置与预期效果还存在较大差距。

1. 我们需要利用定位的方式将其覆盖在原来的内容上。

2. 我们还需要随后呢还需要调整 `transform-origin` 的取值，具体取值其实与定位的设置有关.

这里给出我的参考代码

```html{11,14,15,16,18-22}
<div class="box thin-border">0.5px边框</div>

<style>
    .box{
        width: 200px;
        height: 200px;
        line-height: 200px;
        text-align: center;
    }
    .thin-border{
        position: relative;
    }
    .thin-border::after{
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        border: 1px solid red;
        width: 200%;
        height: 200%;
        transform: scale(0.5);
        transform-origin: top left;
    }
</style>
```
