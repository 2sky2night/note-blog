import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.273ff57c.js";const u=JSON.parse('{"title":"在 TS 中定义 window 对象扩展属性","description":"","frontmatter":{},"headers":[],"relativePath":"question/ts/01.md","filePath":"question/ts/01.md","lastUpdated":1699188084000}'),l={name:"question/ts/01.md"},o=p(`<h1 id="在-ts-中定义-window-对象扩展属性" tabindex="-1">在 TS 中定义 window 对象扩展属性 <a class="header-anchor" href="#在-ts-中定义-window-对象扩展属性" aria-label="Permalink to &quot;在 TS 中定义 window 对象扩展属性&quot;">​</a></h1><p>​ 当我们想给项目挂载一个全局 API 时，尝尝都是把他挂载到 window 上去，这样我们就可以随时随地的调用。在 js 里只需要获取到 window 然后给他添加一个属性即可。但是在 ts 中由于 Window 的类型定义不包含我们自定义属性，所以需要额外的扩展声明。</p><p>​ 在项目中创建 types 文件，并创建 index.d.ts 文件</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { MessageApi } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;naive-ui&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> global {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Window</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * naive-ui的消息组件api</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">$message</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MessageApi</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { MessageApi } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;naive-ui&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> global {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Window</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * naive-ui的消息组件api</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">$message</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MessageApi</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,4),e=[o];function t(c,r,i,E,y,d){return a(),n("div",null,e)}const A=s(l,[["render",t]]);export{u as __pageData,A as default};
