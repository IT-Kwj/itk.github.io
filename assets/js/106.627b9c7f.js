(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{677:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_6-快速响应的用户界面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-快速响应的用户界面","aria-hidden":"true"}},[t._v("#")]),t._v(" 6. 快速响应的用户界面")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#浏览器ui线程"}},[t._v("浏览器UI线程")])]),a("li",[a("a",{attrs:{href:"#浏览器限制"}},[t._v("浏览器限制")]),a("ul",[a("li",[a("a",{attrs:{href:"#使用定时器让出时间片段"}},[t._v("使用定时器让出时间片段")])]),a("li",[a("a",{attrs:{href:"#使用定时器处理数组"}},[t._v("使用定时器处理数组")])]),a("li",[a("a",{attrs:{href:"#记录代码运行时间"}},[t._v("记录代码运行时间")])]),a("li",[a("a",{attrs:{href:"#定时器与性能"}},[t._v("定时器与性能")])])])]),a("li",[a("a",{attrs:{href:"#web-workers"}},[t._v("Web Workers")]),a("ul",[a("li",[a("a",{attrs:{href:"#worker运行环境"}},[t._v("worker运行环境")])]),a("li",[a("a",{attrs:{href:"#与worker通信"}},[t._v("与worker通信")])]),a("li",[a("a",{attrs:{href:"#加载外部文件"}},[t._v("加载外部文件")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"浏览器ui线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器ui线程","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器UI线程")]),t._v(" "),a("ol",[a("li",[t._v("用于执行js和更新用户界面的进程通常被称为‘浏览器UI线程’，UI线程的工作基于一个简单的队列系统，任务会被保存到队列中直到进程空闲。一旦空闲，队列中下一个任务就被重新提取出来并运行。这些任务要么是运行js代码，要么是执行UI更新，包括重绘和重排。")])]),t._v(" "),a("h2",{attrs:{id:"浏览器限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器限制","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器限制")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("浏览器限制了js任务的运行时间。这种限制是有必要的，它确保某些恶意代码不能通过永不停止的密集操作锁住用户的浏览器或计算机。此限制分为两种：调用栈大小限制和长时间运行脚本限制。")])]),t._v(" "),a("li",[a("p",[t._v("如果[javascript]运行了整整几秒钟，那么可能是你做错了什么...。单个js操作花费的总时间不应该超过100毫秒。超过100毫秒意味着用户会感到自己与界面失去联系。")])]),t._v(" "),a("li",[a("p",[t._v("当脚本执行时，UI不随用户交互而更新。执行时间段内用户交互行为所引发的js任务被加入队列中，并在最初的js任务完成后依次执行。而这段时间内由用户交互行为引发的UI更新会被自动跳过，因为页面中的动态部分会被优先考虑。因此，在一个脚本运行期间点击一个按钮，将无法看到它被按下的样式，尽管它的onclick事件处理器会被执行。")])]),t._v(" "),a("li",[a("p",[t._v("IE会控制用户交互行为触发的js任务，因此它会识别连续两次的重复的动作。列如，当有脚本运行时点击一个按钮四次，最终按钮的onclick事件处理器只被调用两次。")])])]),t._v(" "),a("h3",{attrs:{id:"使用定时器让出时间片段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用定时器让出时间片段","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用定时器让出时间片段")]),t._v(" "),a("ol",[a("li",[t._v("让出控制权意味着停止执行js，使UI线程有机会更新，然后再继续执行js。")]),t._v(" "),a("li",[t._v("定时器与UI线程的交互方式有助于把运行耗时较长的脚本拆分为较短的片段。")]),t._v(" "),a("li",[t._v("setTimeout和setInterval第二个参数表示任务何时被添加到UI队列，而不是一定会在这段时间后执行；这个任务会等待队列中其他所有任务执行完毕后才会执行。")]),t._v(" "),a("li",[t._v("setInterval和setTimeout主要区别是，如果UI队列中已经存在由同一个setInterval创建的任务，那么后续任务不会被添加到UI队列中。")])]),t._v(" "),a("h3",{attrs:{id:"使用定时器处理数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用定时器处理数组","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用定时器处理数组")]),t._v(" "),a("ol",[a("li",[t._v("常见的一种造成长时间运行脚本的起因就是耗时过长的循环。如果已经尝试了循环优化技术还是没能减少足够的运行时间，那么下一步优化就是选用定时器。它的基本方法是把循环的工作分解到一系列定时器中。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" todo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("todo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("todo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//arguments.callee是当前函数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("每个定时器的真实延时时间在很大程度上取决于具体情况。普遍来说，最好使用至少25毫秒，因为再小的延时对大多数UI更新来说不够用。")]),t._v(" "),a("li",[t._v("使用定时器处理数组的副作用是处理数组的总时长增加了。这是因为在每个条目处理完成后UI线程会空闲出来，并且在下一条目开始处理之前会有一段延时。尽管如此，为避免锁定浏览器给用户带来的糟糕体验，这种取舍是有必要的。")])]),t._v(" "),a("h3",{attrs:{id:"记录代码运行时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记录代码运行时间","aria-hidden":"true"}},[t._v("#")]),t._v(" 记录代码运行时间")]),t._v(" "),a("ol",[a("li",[t._v("如果你还记得js可以持续运行的最长时间为100毫秒，那么你可以优化先前的模式。我的建议是把这个数字减半，不要让任何js代码持续运行50毫秒以上，这样做只是确保代码永远不会影响用户体验。")]),t._v(" "),a("li",[t._v("加号（+）可以将Date对象转化为数字。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timedProcessArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" todo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通常来说批量处理比单个处理要快")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("todo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("todo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("todo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("h3",{attrs:{id:"定时器与性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定时器与性能","aria-hidden":"true"}},[t._v("#")]),t._v(" 定时器与性能")]),t._v(" "),a("p",[t._v("间隔在1秒或1秒以上的低频率的重复定时器几乎不会影响web应用的响应速度。这种情况下定时器延迟远远超过UI线程产生瓶颈的值，因此可安全的重复使用。当多个重复定时器使用较高的频率（100到200毫秒之间）时，应用就会明显变慢，响应也不及时。")]),t._v(" "),a("p",[t._v("在你的web应用中限制高频率重复定时器的数量。作为替代方案，应该创建一个独立的重复定时器，每次执行多个操作。")]),t._v(" "),a("h2",{attrs:{id:"web-workers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-workers","aria-hidden":"true"}},[t._v("#")]),t._v(" Web Workers")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("js诞生以来，还没有办法在浏览器UI线程之外运行代码。web worker api改变了这种状况，它引入了一个接口，能使代码运行且不占用浏览器UI线程的时间。web worker已经被Firefox3.5、Chrome 3和Safari4原生支持。")])]),t._v(" "),a("li",[a("p",[t._v("每个新的worder都在自己的线程中运行代码。这意味着worker运行代码不仅不会影响浏览器UI,也不会影响其他worker运行的代码。")])])]),t._v(" "),a("h3",{attrs:{id:"worker运行环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#worker运行环境","aria-hidden":"true"}},[t._v("#")]),t._v(" worker运行环境")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("web workers从外部线程中修改DOM会导致用户界面出现错误。")])]),t._v(" "),a("li",[a("p",[t._v("worker运行环境由以下部分组成：")]),t._v(" "),a("ul",[a("li",[t._v("一个navigator对象")]),t._v(" "),a("li",[t._v("一个location对象（与window.location相同，不过所有属性是只读的）。")]),t._v(" "),a("li",[t._v("一个self对象，指向全局worker对象。")]),t._v(" "),a("li",[t._v("一个importScripts(),用来加载worker所用到的外部js文件。")]),t._v(" "),a("li",[t._v("所有的ECMAScript对象，诸如：Object,Array,Date等。")]),t._v(" "),a("li",[t._v("XMLHttpRequest构造器。")]),t._v(" "),a("li",[t._v("setTimeout和setInterval方法。")]),t._v(" "),a("li",[t._v("一个close方法，它能立刻停止worker运行。")])])]),t._v(" "),a("li",[a("p",[t._v("web worker有着不同的全局运行环境，因此你无法从js代码中创建它，你需要创建一个完全独立的js文件，其中包含了需要在worker中运行的代码。")])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" worker "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Worker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'code.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("此代码一旦执行，将为这个文件创建一个新的线程和一个新的worder运行环境。该文件会被异步下载，直到文件下载并执行完成后才会启动此worker.")]),t._v(" "),a("h3",{attrs:{id:"与worker通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与worker通信","aria-hidden":"true"}},[t._v("#")]),t._v(" 与worker通信")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" worker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Worker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'code.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nworker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmessage")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nworker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//code.js内部代码")]),t._v("\nself"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmessage")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h3",{attrs:{id:"加载外部文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载外部文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 加载外部文件")]),t._v(" "),a("p",[t._v("importScript()的调用过程是阻塞的，直到所有文件加载并执行完成之后，脚本才会继续运行。由于worker在UI线程之外运行，所以这种阻塞并不会影响UI响应。")])])},[],!1,null,null,null);s.default=e.exports}}]);