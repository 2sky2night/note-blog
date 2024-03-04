import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.f98883f0.js";const h=JSON.parse('{"title":"第三库的 ts 支持","description":"","frontmatter":{},"headers":[],"relativePath":"question/ts/03.md","filePath":"question/ts/03.md","lastUpdated":1699188084000}'),p={name:"question/ts/03.md"},l=o(`<h1 id="第三库的-ts-支持" tabindex="-1">第三库的 ts 支持 <a class="header-anchor" href="#第三库的-ts-支持" aria-label="Permalink to &quot;第三库的 ts 支持&quot;">​</a></h1><h2 id="第三方库有-ts-声明文件" tabindex="-1">第三方库有 ts 声明文件 <a class="header-anchor" href="#第三方库有-ts-声明文件" aria-label="Permalink to &quot;第三方库有 ts 声明文件&quot;">​</a></h2><p>如何查看第三方库有 ts 声明文件呢？你可以在 node_modules 中查看此库的源代码，若包 含了 xxx.d.ts 文件，则说明有 ts 声明文件。</p><p>我们可以在 tsconfig 中配置项：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;types&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;antd/es&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 这里演示的antd，编译器则会在node_modules文件夹中查询此文件</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;types&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;antd/es&quot;</span><span style="color:#24292E;">] </span><span style="color:#6A737D;">// 这里演示的antd，编译器则会在node_modules文件夹中查询此文件</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="第三方库无-ts-声明文件" tabindex="-1">第三方库无 ts 声明文件 <a class="header-anchor" href="#第三方库无-ts-声明文件" aria-label="Permalink to &quot;第三方库无 ts 声明文件&quot;">​</a></h2><p>​ 有些第三方库没有对应的 ts 声明文件，只能自己来声明。</p><h3 id="默认导出" tabindex="-1">默认导出 <a class="header-anchor" href="#默认导出" aria-label="Permalink to &quot;默认导出&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 声明 vue-img-cutter.d.ts</span></span>
<span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">module</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue-img-cutter&quot;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">content</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;vue-img-cutter&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> content;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 声明 vue-img-cutter.d.ts</span></span>
<span class="line"><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">module</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue-img-cutter&quot;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">content</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;vue-img-cutter&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> content;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 使用</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ImgCutter </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue-img-cutter&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 使用</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ImgCutter </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue-img-cutter&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="按需导出" tabindex="-1">按需导出 <a class="header-anchor" href="#按需导出" aria-label="Permalink to &quot;按需导出&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 声明 md-editor-v3.d.ts</span></span>
<span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">module</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;md-editor-v3&quot;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MdEditor</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MdPreview</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 声明 md-editor-v3.d.ts</span></span>
<span class="line"><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">module</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;md-editor-v3&quot;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MdEditor</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MdPreview</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 使用</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { MdEditor } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;md-editor-v3&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 使用</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { MdEditor } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;md-editor-v3&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div>`,13),e=[l];function t(c,r,y,E,i,d){return a(),n("div",null,e)}const m=s(p,[["render",t]]);export{h as __pageData,m as default};
