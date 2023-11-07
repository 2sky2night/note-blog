import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.f98883f0.js";const C=JSON.parse('{"title":"Vue 命令式组件实践","description":"","frontmatter":{},"headers":[],"relativePath":"question/vue/11.md","filePath":"question/vue/11.md","lastUpdated":1699188084000}'),p={name:"question/vue/11.md"},o=l(`<h1 id="vue-命令式组件实践" tabindex="-1">Vue 命令式组件实践 <a class="header-anchor" href="#vue-命令式组件实践" aria-label="Permalink to &quot;Vue 命令式组件实践&quot;">​</a></h1><p>​ 以往封装的命令式组件往往都是通过 h 和 render，临时渲染的组件，并且文件拆分成了几个（函数文件、组件文件、样式文件），非常零散。</p><p>​ 这一次可以通过 <strong>jsx</strong>与<strong>css-in-js</strong>(<a href="https://styils.github.io/styils" target="_blank" rel="noreferrer">@styils/vue</a>)实现一个文件即可完成命令式组件的封装。</p><h2 id="案例-01" tabindex="-1">案例 01 <a class="header-anchor" href="#案例-01" aria-label="Permalink to &quot;案例 01&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Component, createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./index.css&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//这个只是真实DOM的样式，其实也可以不使用，将其封装成组件也可以。</span></span>
<span class="line"><span style="color:#6A737D;">// css-in-js的vue插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { styled } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@styils/vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置了样式的组件元素</span></span>
<span class="line"><span style="color:#6A737D;">// styled会创建一个组件，在传入参数时可以选择组件的tagName和对应样式，并且最终渲染时会通过class选择器给元素配置样式的。</span></span>
<span class="line"><span style="color:#6A737D;">// 消息容器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">BoxContainer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">styled</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;div&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  backgroundColor: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  borderRadius: </span><span style="color:#9ECBFF;">&quot;5px&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: </span><span style="color:#9ECBFF;">&quot;150px&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: </span><span style="color:#9ECBFF;">&quot;80%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  maxWidth: </span><span style="color:#9ECBFF;">&quot;500px&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  padding: </span><span style="color:#9ECBFF;">&quot;10px&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  boxSizing: </span><span style="color:#9ECBFF;">&quot;border-box&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 按钮</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ConfirmButton</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">styled</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;button&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  border: </span><span style="color:#9ECBFF;">&quot;none&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  padding: </span><span style="color:#9ECBFF;">&quot;5px 10px&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  backgroundColor: </span><span style="color:#9ECBFF;">&quot;skyblue&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  color: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  cursor: </span><span style="color:#9ECBFF;">&quot;pointer&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件配置项</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MessageBox</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 自定义熟悉</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">      required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 定义的方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onHandleClick</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;toClose&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 自定义事件</span></span>
<span class="line"><span style="color:#E1E4E8;">  emits: [</span><span style="color:#9ECBFF;">&quot;toClose&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 组件的render函数</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ctx</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">BoxContainer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#E1E4E8;">&gt;{ctx.title}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">ConfirmButton</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{ctx.onHandleClick}&gt;确认&lt;/</span><span style="color:#79B8FF;">ConfirmButton</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">BoxContainer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建消息盒子的函数</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">title</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">container</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;div&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  container.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;message_box_mask_container&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(MessageBox, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onToClose</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      app.</span><span style="color:#B392F0;">unmount</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      container.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  app.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(container);</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(container);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Component, createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./index.css&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//这个只是真实DOM的样式，其实也可以不使用，将其封装成组件也可以。</span></span>
<span class="line"><span style="color:#6A737D;">// css-in-js的vue插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { styled } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@styils/vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置了样式的组件元素</span></span>
<span class="line"><span style="color:#6A737D;">// styled会创建一个组件，在传入参数时可以选择组件的tagName和对应样式，并且最终渲染时会通过class选择器给元素配置样式的。</span></span>
<span class="line"><span style="color:#6A737D;">// 消息容器</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">BoxContainer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">styled</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;div&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  backgroundColor: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  borderRadius: </span><span style="color:#032F62;">&quot;5px&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  height: </span><span style="color:#032F62;">&quot;150px&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  width: </span><span style="color:#032F62;">&quot;80%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  maxWidth: </span><span style="color:#032F62;">&quot;500px&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  padding: </span><span style="color:#032F62;">&quot;10px&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  boxSizing: </span><span style="color:#032F62;">&quot;border-box&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 按钮</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ConfirmButton</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">styled</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;button&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  border: </span><span style="color:#032F62;">&quot;none&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  padding: </span><span style="color:#032F62;">&quot;5px 10px&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  backgroundColor: </span><span style="color:#032F62;">&quot;skyblue&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  color: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  cursor: </span><span style="color:#032F62;">&quot;pointer&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件配置项</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MessageBox</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 自定义熟悉</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    title: {</span></span>
<span class="line"><span style="color:#24292E;">      type: String,</span></span>
<span class="line"><span style="color:#24292E;">      required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 定义的方法</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onHandleClick</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;toClose&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 自定义事件</span></span>
<span class="line"><span style="color:#24292E;">  emits: [</span><span style="color:#032F62;">&quot;toClose&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 组件的render函数</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(</span><span style="color:#E36209;">ctx</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#005CC5;">BoxContainer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;content&quot;</span><span style="color:#24292E;">&gt;{ctx.title}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#005CC5;">ConfirmButton</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onClick</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{ctx.onHandleClick}&gt;确认&lt;/</span><span style="color:#005CC5;">ConfirmButton</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#005CC5;">BoxContainer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建消息盒子的函数</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">title</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">container</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;div&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  container.classList.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;message_box_mask_container&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(MessageBox, {</span></span>
<span class="line"><span style="color:#24292E;">    title,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onToClose</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      app.</span><span style="color:#6F42C1;">unmount</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      container.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(container);</span></span>
<span class="line"><span style="color:#24292E;">  document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(container);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="案例-02" tabindex="-1">案例 02 <a class="header-anchor" href="#案例-02" aria-label="Permalink to &quot;案例 02&quot;">​</a></h2><p>使用<code>@styils/vue</code>插件库可以很轻松的将 css 融入到 js 中，他可以创建组件时同时配置该组件的样式来完成组件样式的封装。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Component, createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./index.css&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { styled } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@styils/vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置样式的组件元素</span></span>
<span class="line"><span style="color:#6A737D;">// 消息容器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">BoxContainer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">styled</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;div&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  backgroundColor: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  borderRadius: </span><span style="color:#9ECBFF;">&quot;5px&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: </span><span style="color:#9ECBFF;">&quot;150px&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: </span><span style="color:#9ECBFF;">&quot;80%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  maxWidth: </span><span style="color:#9ECBFF;">&quot;500px&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  padding: </span><span style="color:#9ECBFF;">&quot;10px&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  boxSizing: </span><span style="color:#9ECBFF;">&quot;border-box&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 按钮</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ConfirmButton</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">styled</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;button&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  border: </span><span style="color:#9ECBFF;">&quot;none&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  padding: </span><span style="color:#9ECBFF;">&quot;5px 10px&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  backgroundColor: </span><span style="color:#9ECBFF;">&quot;skyblue&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  color: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  cursor: </span><span style="color:#9ECBFF;">&quot;pointer&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件配置项</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MessageBox</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">      required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onHandleClick</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;toClose&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  emits: [</span><span style="color:#9ECBFF;">&quot;toClose&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ctx</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#B392F0;">BoxContainer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">div class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">{ctx.title}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">div</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">ConfirmButton onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{ctx.onHandleClick}</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">确认</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">ConfirmButton</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">BoxContainer</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">title</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">container</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;div&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  container.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;message_box_mask_container&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(MessageBox, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onToClose</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      app.</span><span style="color:#B392F0;">unmount</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      container.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  app.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(container);</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(container);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Component, createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./index.css&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { styled } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@styils/vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置样式的组件元素</span></span>
<span class="line"><span style="color:#6A737D;">// 消息容器</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">BoxContainer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">styled</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;div&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  backgroundColor: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  borderRadius: </span><span style="color:#032F62;">&quot;5px&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  height: </span><span style="color:#032F62;">&quot;150px&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  width: </span><span style="color:#032F62;">&quot;80%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  maxWidth: </span><span style="color:#032F62;">&quot;500px&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  padding: </span><span style="color:#032F62;">&quot;10px&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  boxSizing: </span><span style="color:#032F62;">&quot;border-box&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 按钮</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ConfirmButton</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">styled</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;button&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  border: </span><span style="color:#032F62;">&quot;none&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  padding: </span><span style="color:#032F62;">&quot;5px 10px&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  backgroundColor: </span><span style="color:#032F62;">&quot;skyblue&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  color: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  cursor: </span><span style="color:#032F62;">&quot;pointer&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件配置项</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MessageBox</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    title: {</span></span>
<span class="line"><span style="color:#24292E;">      type: String,</span></span>
<span class="line"><span style="color:#24292E;">      required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onHandleClick</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;toClose&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  emits: [</span><span style="color:#032F62;">&quot;toClose&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(</span><span style="color:#E36209;">ctx</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#6F42C1;">BoxContainer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">div class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;content&quot;</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">{ctx.title}</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">div</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">ConfirmButton onClick</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{ctx.onHandleClick}</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">确认</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">ConfirmButton</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">BoxContainer</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">title</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">container</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;div&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  container.classList.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;message_box_mask_container&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(MessageBox, {</span></span>
<span class="line"><span style="color:#24292E;">    title,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onToClose</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      app.</span><span style="color:#6F42C1;">unmount</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      container.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(container);</span></span>
<span class="line"><span style="color:#24292E;">  document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(container);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,8),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const q=s(p,[["render",t]]);export{C as __pageData,q as default};
