import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.f98883f0.js";const u=JSON.parse('{"title":"Web Worker","description":"","frontmatter":{},"headers":[],"relativePath":"question/js/04.md","filePath":"question/js/04.md","lastUpdated":1699188084000}'),p={name:"question/js/04.md"},l=o(`<h1 id="web-worker" tabindex="-1">Web Worker <a class="header-anchor" href="#web-worker" aria-label="Permalink to &quot;Web Worker&quot;">​</a></h1><h2 id="web-worker-是什么" tabindex="-1">Web Worker 是什么? <a class="header-anchor" href="#web-worker-是什么" aria-label="Permalink to &quot;Web Worker 是什么?&quot;">​</a></h2><p>​ <code>web worker</code>是浏览器独有的 API，可以为<code>javascript</code>创建多个线程。只允许主线程创建<code>Web Worker</code>，可以让<code>Web Worker</code>执行一些后台任务。可以通过<code>Web Worker</code>创建子线程执行一些操作，例如耗费大量时间的同步操作（但不会阻塞主线程运行）、发送网络请求....有了<code>Web Worker</code>可以避免同步操作阻塞主线程渲染的问题。</p><p>​ 由于创建了多个线程，为了不影响主线程，所以<code>Web Worker</code>有以下限制：</p><p>（1）<strong>同源限制</strong></p><p>​ 分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。</p><p>（2）<strong>DOM 限制</strong></p><p>​ Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用<code>document</code>、<code>window</code>、<code>parent</code>这些对象。但是，Worker 线程可以<code>navigator</code>对象和<code>location</code>对象。</p><p>（3）<strong>通信联系</strong></p><p>​ <strong>Worker 线程</strong>和<strong>主线程</strong>不在同一个上下文环境，它们不能直接通信，必须通过消息完成主线程和子线程的通信。</p><p>（4）<strong>脚本限制</strong></p><p>​ Worker 线程不能执行<code>alert()</code>方法和<code>confirm()</code>方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。</p><p>（5）<strong>文件限制</strong></p><p>​ Worker 线程无法读取本地文件，即不能打开本机的文件系统（<code>file://</code>），它所加载的脚本，必须来自网络。</p><h2 id="_1-主线程" tabindex="-1">1.主线程 <a class="header-anchor" href="#_1-主线程" aria-label="Permalink to &quot;1.主线程&quot;">​</a></h2><p>​ 主线程通过<code>new Worker</code>来创建一个子线程，<code>Worker</code>构造函数必须是 HTTP 协议，必须加载网络脚本资源。返回一个 worker 实例，可以和对应子线程通信。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Worker</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/index.js&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 发送请求加载外部脚本资源，并将该资源放在子线程中执行</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Worker</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/index.js&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 发送请求加载外部脚本资源，并将该资源放在子线程中执行</span></span></code></pre></div><p>​ <strong>通信</strong>：</p><p>1.主线程通过<code>worker.postMessage</code>向对应的子线程发送消息</p><p>2.主线程通过<code>worker</code>的<code>message</code>监听子线程发送的消息</p><p>3.主线程通过<code>worker.terminate</code>结束子线程。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">wb</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Worker</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;index.js&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 接受子线程消息</span></span>
<span class="line"><span style="color:#E1E4E8;">wb.</span><span style="color:#B392F0;">onmessage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;接受子线程消息:&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> data.data);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(window.a);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 向对应子线程发送消息</span></span>
<span class="line"><span style="color:#E1E4E8;">  wb.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello~&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">wb</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Worker</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;index.js&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 接受子线程消息</span></span>
<span class="line"><span style="color:#24292E;">wb.</span><span style="color:#6F42C1;">onmessage</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;接受子线程消息:&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> data.data);</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(window.a);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 向对应子线程发送消息</span></span>
<span class="line"><span style="color:#24292E;">  wb.</span><span style="color:#6F42C1;">postMessage</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello~&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="_2-子线程" tabindex="-1">2.子线程 <a class="header-anchor" href="#_2-子线程" aria-label="Permalink to &quot;2.子线程&quot;">​</a></h2><p>​ 子线程里失去了很多 API，不过浏览器也为子线程提供了内置 API。在子线程中是不能操作 DOM，并且子线程和主线程的执行上下文是不同的，所以不能共享声明的变量、函数等。</p><p>​ <strong>通信</strong>:</p><p>1.子线程通过<code>this.postMessage</code>与发送消息给主线程</p><p>2.子线程通过<code>this.addEventListen(&quot;message&quot;)</code>来监听主线程发送的消息。</p><p>3.子线程通过<code>this.close</code>关闭线程，释放内存</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;message&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;接受到主线程消息:&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> data.data);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;子线程消息~~&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;message&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;接受到主线程消息:&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> data.data);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">postMessage</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;子线程消息~~&quot;</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="_3-使用-web-worker-的示例" tabindex="-1">3.使用 Web Worker 的示例 <a class="header-anchor" href="#_3-使用-web-worker-的示例" aria-label="Permalink to &quot;3.使用 Web Worker 的示例&quot;">​</a></h2><p>​ 同步计算复杂数据时，会阻塞浏览器渲染线程，从而导致页面<strong>卡死</strong>。若我们使用<code>Web Worker</code>就不会产生这样的后果。</p><p>​ 1.不使用 Web Worker（Sync）</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;执行一段长时间阻塞主线程的代码&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">btn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;button&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fun</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">time</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">now</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> now </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> time) {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  btn.</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 渲染进程卡死</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">fun</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;执行一段长时间阻塞主线程的代码&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">btn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;button&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fun</span><span style="color:#24292E;">(</span><span style="color:#E36209;">time</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">now</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Date.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (Date.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> now </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> time) {}</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  btn.</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 渲染进程卡死</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fun</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>​ 2.使用 Web Worker</p><p>​ 主线程代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">webworker</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 执行复杂的同步任务</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">worker</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Worker</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;01.js&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  worker.</span><span style="color:#B392F0;">onmessage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(e.data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    worker.</span><span style="color:#B392F0;">terminate</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">webworker</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 执行复杂的同步任务</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">worker</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Worker</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;01.js&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  worker.</span><span style="color:#6F42C1;">onmessage</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(e.data);</span></span>
<span class="line"><span style="color:#24292E;">    worker.</span><span style="color:#6F42C1;">terminate</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>​ 子线程代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Work Load!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">fun</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;计算完成~&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fun</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">time</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">now</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> now </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> time) {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Work Load!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">fun</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">postMessage</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;计算完成~&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fun</span><span style="color:#24292E;">(</span><span style="color:#E36209;">time</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">now</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Date.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (Date.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> now </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> time) {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,38),e=[l];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{u as __pageData,g as default};