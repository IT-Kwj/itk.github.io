(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{608:function(t,a,e){"use strict";e.r(a);var r=e(26),s=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_8-关于q1需求中浏览器url隐藏的解决方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-关于q1需求中浏览器url隐藏的解决方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 8. 关于Q1需求中浏览器url隐藏的解决方法")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#背景"}},[t._v("背景")])]),e("li",[e("a",{attrs:{href:"#思路和实现"}},[t._v("思路和实现")])]),e("li",[e("a",{attrs:{href:"#总结"}},[t._v("总结")])])])]),e("p"),t._v(" "),e("p",[e("img",{attrs:{src:"/images/Other/url%E9%9A%90%E8%97%8F.gif",alt:"url隐藏"}})]),t._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景","aria-hidden":"true"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("2020Q1需求中有一段关于浏览器URL地址隐藏的需求如下：")]),t._v(" "),e("p",[t._v("需将系统的URL地址需要进行加密处理。")]),t._v(" "),e("p",[t._v("a)IP地址后面的信息需要控制为不能按照意思猜到或者改变页面内容，不能把一些参数的名称和值都在URL地址栏中暴露出来，需以不可表意的乱码展示；")]),t._v(" "),e("p",[t._v("b)加密后的链接复制后不能打开同一页面，且同一功能每次打开时的URL链接需不同；")]),t._v(" "),e("p",[t._v("以上描述总结下来共有以下几个规则：")]),t._v(" "),e("ol",[e("li",[t._v("IP地址后的路径需要乱码显示")]),t._v(" "),e("li",[t._v("加密后的URL复制后不能在新标签跳转成功")]),t._v(" "),e("li",[t._v("同一功能跳转地址URL不能相同")])]),t._v(" "),e("h2",{attrs:{id:"思路和实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思路和实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 思路和实现")]),t._v(" "),e("p",[t._v("虽然这个需求不是我负责的，但是还是挺有兴趣研究的。")]),t._v(" "),e("p",[t._v("我刚开始想法是用iframe实现，隐藏顶层地址。但是这个有点前端基础的都知道在DOM中可以看到地址，这么做无疑在欺骗自己，所以Pass。")]),t._v(" "),e("p",[t._v("第二个想法是能不能做得和短地址服务一样，这个得先把所有地址路径做个映射保存起来，通过这个短地址获取正确的地址，然后路由跳转。但是这个有几个难点，第一个是系统中路由非常多，要全部实现映射无疑非常难，第二个是如果这样做就违背了同一功能跳转地址URL不能相同的原则，所以Pass。")]),t._v(" "),e("p",[t._v("最后想了下，如果要满足第三个点同一功能跳转地址URL不能相同，就需要在访问的时候进行乱码加密，而且得满足浏览器刷新、前进、后退这些操作能通过乱码取到真实地址。")]),t._v(" "),e("p",[t._v("到这因为有其他任务要做就没想了。最后大飞哥实现了这个功能，通过分享和看过提交的代码后有两个点是没想到的，第一个是没在系统内部进行修改而是在vue-router框架内部进行修改的，第二个是javascript中BOM可以通过修改location.hash而改变当前URL的hash地址，重要的是修改这个值可以改变URL地址但是不跳转。")]),t._v(" "),e("p",[t._v("最后说下大飞哥的实现方法。首先vue-router是可以获取到当前路由地址的，然后将获取到的地址和登录人uuid通过加密生成fullPath的加密地址，随机生成一个32位乱码tempPath，然后通过location.hash=tempPath就更改了URL的hash值，也就更改了URL地址，但是地址跳转是对的。此时就造成循环，点击新功能，vue-router获取到路由地址，跳转，然后加密并改变URL的hash。")]),t._v(" "),e("p",[t._v("但是有个问题，如果刷新就如何从乱码中找到对应得正确地址呢？所以飞哥把这两个值tempPath和fullPath保存在了sessionStorge中，然后刷新的时候通过url截取到hash如果和sessionStorge中的tempPath相同则取到fullPath,然后在路由守卫beforeEach中通过将fullPath解密获取到真实路径，然后再跳转到真实路径。可能你会问，为啥不是localStorge，原因是为了满足规则2（加密后的URL复制后不能在新标签跳转成功），sessionStorge只在当前标签页中有效，这样你复制地址然后在新页签中跳转就获取不到sessionStorge中的tempPath，也就跳转不了。")]),t._v(" "),e("p",[t._v("刷新操作是实现了，但是后退前进操作呢？这个任务就落到了我的头上，我需要在vue-router中设置一个存储历史的机制。")]),t._v(" "),e("p",[t._v("我是这么做的，通过给vue-router中设置一个全局数组，这个数组保存了tempPath和fullPath，这样前进和后退操作就实现了。你以为这样就好了？太天真了，如果刷新页面全局数组就丢失了，GG。想来想去都需要在浏览器中设置一个缓存，但是如果放到sessionStorge中也太难受了，也不好放。最后发现每个页签是有个History对象的，vue-router本质上也是操作window.history.pushState和replaceState实现跳转的，刚好这个pushState和replaceState有个state对象可以保存在当前页签中，只要这个页签（新页签不行）地址不变，这个数据就一直存在。那么刷新前进后退都可以通过这个history.state获取到fullPath，然后解密跳转。")]),t._v(" "),e("p",[t._v("最后实现的效果是这样的，先获取sessionStorge中的fullPath，如果没有就获取全局数组中的fullPath，还没有就获取history对象中的数据。")]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("做完后其实感觉直接利用history就可以直接实现，还不用通过tempPath获取fullPath，还美观。")]),t._v(" "),e("p",[t._v("说了这么多感觉一半都是废话，如果开始的时候直接用history哪有这么多坑，所以平时js还是要多多总结的，关键时候就用到了。思维方式也是要改变的，不能只关注系统而忽略了用到的框架源码、插件源码，要习惯在源码上做事情，这样就有可能起到事半功倍的效果。如果不了解源码真不知道如何下手。")])])},[],!1,null,null,null);a.default=s.exports}}]);