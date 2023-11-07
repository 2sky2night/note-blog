import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.273ff57c.js";const d=JSON.parse('{"title":"h 函数定义和使用插槽","description":"","frontmatter":{},"headers":[],"relativePath":"question/vue/14.md","filePath":"question/vue/14.md","lastUpdated":1699188084000}'),p={name:"question/vue/14.md"},o=l(`<h1 id="h-函数定义和使用插槽" tabindex="-1">h 函数定义和使用插槽 <a class="header-anchor" href="#h-函数定义和使用插槽" aria-label="Permalink to &quot;h 函数定义和使用插槽&quot;">​</a></h1><p>​ 使用 h 函数用来创建渲染虚拟 DOM，可以封装成函数，可以通过 JS 中调用快速渲染出一个组件。可是 h 函数如何定义和使用插槽呢?</p><h2 id="_1-定义插槽" tabindex="-1">1.定义插槽 <a class="header-anchor" href="#_1-定义插槽" aria-label="Permalink to &quot;1.定义插槽&quot;">​</a></h2><p>使用<code>renderSlots</code>来定义插槽，其原理就是通过上下文中的 slots 对象获取某个具名插槽的 key 来渲染出该插槽的内容</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">components</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">slots</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;div&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">renderSlots</span><span style="color:#E1E4E8;">(slots, </span><span style="color:#9ECBFF;">&quot;default&quot;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 默认插槽</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">renderSlots</span><span style="color:#E1E4E8;">(slots, </span><span style="color:#9ECBFF;">&quot;footer&quot;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 具名插槽，名为：footer</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">renderSlots</span><span style="color:#E1E4E8;">(slots, </span><span style="color:#9ECBFF;">&quot;header&quot;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 具名插槽，名为:header</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">components</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(</span><span style="color:#E36209;">_</span><span style="color:#24292E;">, { </span><span style="color:#E36209;">slots</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;div&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">renderSlots</span><span style="color:#24292E;">(slots, </span><span style="color:#032F62;">&quot;default&quot;</span><span style="color:#24292E;">), </span><span style="color:#6A737D;">// 默认插槽</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">renderSlots</span><span style="color:#24292E;">(slots, </span><span style="color:#032F62;">&quot;footer&quot;</span><span style="color:#24292E;">), </span><span style="color:#6A737D;">// 具名插槽，名为：footer</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">renderSlots</span><span style="color:#24292E;">(slots, </span><span style="color:#032F62;">&quot;header&quot;</span><span style="color:#24292E;">), </span><span style="color:#6A737D;">// 具名插槽，名为:header</span></span>
<span class="line"><span style="color:#24292E;">      ]);</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>也可以获取到对应渲染函数直接调用函数一样可以。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">components</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">,{</span><span style="color:#FFAB70;">slots</span><span style="color:#E1E4E8;">}){</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,[</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">,slots?.</span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">()),</span></span>
<span class="line"><span style="color:#E1E4E8;">              slots?.</span><span style="color:#B392F0;">footer</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">              slots?.</span><span style="color:#B392F0;">header</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">            ])</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">components</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(</span><span style="color:#E36209;">_</span><span style="color:#24292E;">,{</span><span style="color:#E36209;">slots</span><span style="color:#24292E;">}){</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,[</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">,slots?.</span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">()),</span></span>
<span class="line"><span style="color:#24292E;">              slots?.</span><span style="color:#6F42C1;">footer</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">              slots?.</span><span style="color:#6F42C1;">header</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">            ])</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_2-使用插槽" tabindex="-1">2.使用插槽 <a class="header-anchor" href="#_2-使用插槽" aria-label="Permalink to &quot;2.使用插槽&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  components,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 这一项必须为null，否则会插槽会被认为是props、attrs</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;div&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;hello~&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">footer</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;div&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;hello~&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">header</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;div&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;hello~&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  components,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 这一项必须为null，否则会插槽会被认为是props、attrs</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;div&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;hello~&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">footer</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;div&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;hello~&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">header</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;div&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;hello~&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="_3-特殊情况" tabindex="-1">3.特殊情况 <a class="header-anchor" href="#_3-特殊情况" aria-label="Permalink to &quot;3.特殊情况&quot;">​</a></h2><p>​ 如果说我们通过 h 函数渲染的组件有第三方插件例如<code>i18n</code>会在模板中使用<code>$t</code>来渲染国际化文本就会导致因为虚拟 DOM 无<code>$t</code>从而渲染失败而报错。解决方案：</p><h3 id="_1-新建-app-实例-不推荐" tabindex="-1">1.新建 App 实例(不推荐) <a class="header-anchor" href="#_1-新建-app-实例-不推荐" aria-label="Permalink to &quot;1.新建 App 实例(不推荐)&quot;">​</a></h3><p>​ 我们可以通过 createApp 新建一个 app 实例，并通过 app.use 按照插件，再通过 app 组件的 render 函数来渲染组件。</p><p>但是这样多多少少都会有内容开销，毕竟一个 app 实例+插件是是否繁重的。</p><p>下面是一个模态框的封装：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp, h, render, renderSlot } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { Component } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./index.css&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> i18n </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@/config/i18n&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">renderModal</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">content</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">props</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Record</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">&gt;) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 遮罩层</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mask</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;div&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  mask.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;modal-mask-container&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;ModalApp&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> container;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 实际组件（模态框）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">container</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 定义</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;ModalContainer&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;div&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              class: </span><span style="color:#9ECBFF;">&quot;modal-container&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            [</span><span style="color:#B392F0;">renderSlot</span><span style="color:#E1E4E8;">(context.slots, </span><span style="color:#9ECBFF;">&quot;default&quot;</span><span style="color:#E1E4E8;">)]</span></span>
<span class="line"><span style="color:#E1E4E8;">          );</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 使用</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(content, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">props,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">onClose</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;关闭事件触发了!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 按照插件</span></span>
<span class="line"><span style="color:#E1E4E8;">  app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(i18n);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 将虚拟DOM渲染再真实DOM中</span></span>
<span class="line"><span style="color:#E1E4E8;">  app.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(mask);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(mask);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp, h, render, renderSlot } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { Component } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./index.css&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> i18n </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@/config/i18n&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">renderModal</span><span style="color:#24292E;">(</span><span style="color:#E36209;">content</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;">, </span><span style="color:#E36209;">props</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Record</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">any</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">&gt;) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 遮罩层</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mask</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;div&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  mask.classList.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;modal-mask-container&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;ModalApp&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> container;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 实际组件（模态框）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">container</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 定义</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;ModalContainer&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(</span><span style="color:#E36209;">_</span><span style="color:#24292E;">, </span><span style="color:#E36209;">context</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;div&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              class: </span><span style="color:#032F62;">&quot;modal-container&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            [</span><span style="color:#6F42C1;">renderSlot</span><span style="color:#24292E;">(context.slots, </span><span style="color:#032F62;">&quot;default&quot;</span><span style="color:#24292E;">)]</span></span>
<span class="line"><span style="color:#24292E;">          );</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 使用</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(content, {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">props,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">onClose</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;关闭事件触发了!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 按照插件</span></span>
<span class="line"><span style="color:#24292E;">  app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(i18n);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 将虚拟DOM渲染再真实DOM中</span></span>
<span class="line"><span style="color:#24292E;">  app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(mask);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(mask);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_2-直接导入-i18n-插件来使用" tabindex="-1">2.直接导入 i18n 插件来使用 <a class="header-anchor" href="#_2-直接导入-i18n-插件来使用" aria-label="Permalink to &quot;2.直接导入 i18n 插件来使用&quot;">​</a></h3><p>​ 对应组件中直接导入<code>i18n</code>插件在模板中使用，就不再需要 app 实例了，因为我们的组件模板没有使用<code>$t</code>来渲染文本就不会产生错误了。</p><p>下面是一个模态框的封装： 这样就非常好了。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { h, render, renderSlot } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { Component } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./index.css&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 渲染模态框</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">content</span><span style="color:#6A737D;"> 模态框内容组件</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">props</span><span style="color:#6A737D;"> 模态框内容组件的props</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">renderModal</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">content</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">props</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Record</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">&gt;) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 容器</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mask</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;div&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  mask.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;modal-mask-container&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 虚拟DOM</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">container</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 定义组件</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;ModalContainer&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;div&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              class: </span><span style="color:#9ECBFF;">&quot;modal-container&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            [</span><span style="color:#B392F0;">renderSlot</span><span style="color:#E1E4E8;">(context.slots, </span><span style="color:#9ECBFF;">&quot;default&quot;</span><span style="color:#E1E4E8;">)]</span></span>
<span class="line"><span style="color:#E1E4E8;">          );</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 使用组件</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(content, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">props,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">onClose</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;关闭事件触发了!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 渲染</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(container, mask);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 挂载</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(mask);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { h, render, renderSlot } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { Component } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./index.css&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 渲染模态框</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">content</span><span style="color:#6A737D;"> 模态框内容组件</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">props</span><span style="color:#6A737D;"> 模态框内容组件的props</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">renderModal</span><span style="color:#24292E;">(</span><span style="color:#E36209;">content</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;">, </span><span style="color:#E36209;">props</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Record</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">any</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">&gt;) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 容器</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mask</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;div&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  mask.classList.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;modal-mask-container&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 虚拟DOM</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">container</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 定义组件</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;ModalContainer&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(</span><span style="color:#E36209;">_</span><span style="color:#24292E;">, </span><span style="color:#E36209;">context</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;div&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              class: </span><span style="color:#032F62;">&quot;modal-container&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            [</span><span style="color:#6F42C1;">renderSlot</span><span style="color:#24292E;">(context.slots, </span><span style="color:#032F62;">&quot;default&quot;</span><span style="color:#24292E;">)]</span></span>
<span class="line"><span style="color:#24292E;">          );</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 使用组件</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(content, {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">props,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">onClose</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;关闭事件触发了!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 渲染</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(container, mask);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 挂载</span></span>
<span class="line"><span style="color:#24292E;">  document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(mask);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,20),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{d as __pageData,C as default};
