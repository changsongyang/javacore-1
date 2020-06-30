(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{515:function(t,v,a){"use strict";a.r(v);var _=a(14),s=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jvm-体系结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm-体系结构"}},[t._v("#")]),t._v(" JVM 体系结构")]),t._v(" "),a("blockquote",[a("p",[t._v("JVM 能跨平台工作，主要是由于 JVM  屏蔽了与各个计算机平台相关的软件、硬件之间的差异。")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#jvm-%E7%AE%80%E4%BB%8B"}},[t._v("JVM 简介")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84"}},[t._v("计算机体系结构")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#jvm-%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84%E7%AE%80%E4%BB%8B"}},[t._v("JVM 体系结构简介")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#hotspot-%E6%9E%B6%E6%9E%84"}},[t._v("Hotspot 架构")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#hotspot-%E5%85%B3%E9%94%AE%E7%BB%84%E4%BB%B6"}},[t._v("Hotspot 关键组件")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%80%A7%E8%83%BD%E6%8C%87%E6%A0%87"}},[t._v("性能指标")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("参考资料")])])]),t._v(" "),a("h2",{attrs:{id:"jvm-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm-简介"}},[t._v("#")]),t._v(" JVM 简介")]),t._v(" "),a("h3",{attrs:{id:"计算机体系结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算机体系结构"}},[t._v("#")]),t._v(" 计算机体系结构")]),t._v(" "),a("p",[t._v("真实的计算机体系结构的核心部分包含：")]),t._v(" "),a("ul",[a("li",[t._v("指令集")]),t._v(" "),a("li",[t._v("计算单元（CPU）")]),t._v(" "),a("li",[t._v("寻址方式")]),t._v(" "),a("li",[t._v("寄存器")]),t._v(" "),a("li",[t._v("存储单元")])]),t._v(" "),a("h3",{attrs:{id:"jvm-体系结构简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm-体系结构简介"}},[t._v("#")]),t._v(" JVM 体系结构简介")]),t._v(" "),a("p",[t._v("JVM 体系结构与计算机体系结构相似，它的核心部分包含：")]),t._v(" "),a("ul",[a("li",[t._v("JVM 指令集")]),t._v(" "),a("li",[t._v("类加载器")]),t._v(" "),a("li",[t._v("执行引擎 - 相当于 JVM 的 CPU")]),t._v(" "),a("li",[t._v("内存区 - JVM 的存储")]),t._v(" "),a("li",[t._v("本地方法调用 - 调用 C/C++ 实现的本地方法")])]),t._v(" "),a("h2",{attrs:{id:"hotspot-架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hotspot-架构"}},[t._v("#")]),t._v(" Hotspot 架构")]),t._v(" "),a("p",[t._v("Hotspot 是最流行的 JVM。")]),t._v(" "),a("p",[t._v("Java 虚拟机的主要组件，包括"),a("strong",[t._v("类加载器")]),t._v("、"),a("strong",[t._v("运行时数据区")]),t._v("和"),a("strong",[t._v("执行引擎")]),t._v("。")]),t._v(" "),a("p",[t._v("Hotspot 虚拟机拥有一个架构，它支持强大特性和能力的基础平台，支持实现高性能和强大的可伸缩性的能力。举个例子，Hotspot 虚拟机 JIT 编译器生成动态的优化，换句话说，它们在 Java 应用执行期做出优化，为底层系统架构生成高性能的本地机器指令。另外，经过它的运行时环境和多线程垃圾回收成熟的进化和连续的设计， Hotspot 虚拟机在高可用计算系统上产出了高伸缩性。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/jvm/jvm-hotspot-architecture.png"}})]),t._v(" "),a("h3",{attrs:{id:"hotspot-关键组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hotspot-关键组件"}},[t._v("#")]),t._v(" Hotspot 关键组件")]),t._v(" "),a("p",[t._v("Java 虚拟机有三个组件关注着什么时候进行性能优化，堆空间是对象所存储的地方，这个区域被启动时选择的垃圾回收器管理，大部分调优选项与调整堆大小和根据你的情况选择最适当的垃圾收集器相关。即时编译器对性能也有很大的影响，但是使用新版本的 Java 虚拟机时很少需要调整。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/jvm/jvm-hotspot-key-components.png"}})]),t._v(" "),a("h3",{attrs:{id:"性能指标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能指标"}},[t._v("#")]),t._v(" 性能指标")]),t._v(" "),a("p",[t._v("Java 虚拟机的性能指标主要有两点：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("停顿时间")]),t._v(" - 响应延迟是指一个应用回应一个请求的速度有多快。对关注响应能力的应用来说，长暂停时间是不可接受的，重点是在短的时间周期内能做出响应。\n"),a("ul",[a("li",[t._v("桌面 UI 响应事件的速度")]),t._v(" "),a("li",[t._v("网站返回网页的速度")]),t._v(" "),a("li",[t._v("数据查询返回的速度")])])]),t._v(" "),a("li",[a("strong",[t._v("吞吐量")]),t._v(" - 吞吐量关注在特定的时间周期内一个应用的工作量的最大值。对关注吞吐量的应用来说长暂停时间是可以接受的。由于高吞吐量的应用关注的基准在更长周期时间上，所以快速响应时间不在考虑之内。\n"),a("ul",[a("li",[t._v("给定时间内完成事务的数量")]),t._v(" "),a("li",[t._v("一小时内批处理程序完成的工作数量")]),t._v(" "),a("li",[t._v("一小时内数据查询完成的数量")])])])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://item.jd.com/11252778.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《深入理解 Java 虚拟机》"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=s.exports}}]);