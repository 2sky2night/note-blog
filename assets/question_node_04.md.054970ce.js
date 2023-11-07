import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.273ff57c.js";const F=JSON.parse('{"title":"node.js 使用 sharp","description":"","frontmatter":{},"headers":[],"relativePath":"question/node/04.md","filePath":"question/node/04.md","lastUpdated":1699188084000}'),l={name:"question/node/04.md"},o=p(`<h1 id="node-js-使用-sharp" tabindex="-1">node.js 使用 sharp <a class="header-anchor" href="#node-js-使用-sharp" aria-label="Permalink to &quot;node.js 使用 sharp&quot;">​</a></h1><p>​ sharp 是基于 node.js 的图像处理工具。</p><p>文档:<a href="https://sharp.nodejs.cn/install" target="_blank" rel="noreferrer">https://sharp.nodejs.cn/install</a></p><h2 id="_1-安装" tabindex="-1">1.安装 <a class="header-anchor" href="#_1-安装" aria-label="Permalink to &quot;1.安装&quot;">​</a></h2><h3 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h3><p>在安装时出现该问题:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sharp:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Installation</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">error:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">verify</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">first</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">certificate</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sharp:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Installation</span><span style="color:#24292E;"> </span><span style="color:#032F62;">error:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">verify</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">first</span><span style="color:#24292E;"> </span><span style="color:#032F62;">certificate</span></span></code></pre></div><h4 id="_1-取消-ssl-验证" tabindex="-1">1.取消 ssl 验证 <a class="header-anchor" href="#_1-取消-ssl-验证" aria-label="Permalink to &quot;1.取消 ssl 验证&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm config set strict-ssl=false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm config set strict-ssl=false</span></span></code></pre></div><h4 id="_2-换源" tabindex="-1">2.换源 <a class="header-anchor" href="#_2-换源" aria-label="Permalink to &quot;2.换源&quot;">​</a></h4><p>​ 可以专门给对应包换源，因为 sharp 是基于 libvips 的，所以两个都需要换源处理。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sharp_libvips_binary_host</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://npmmirror.com/mirrors/sharp-libvips&quot;</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sharp_binary_host</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://npmmirror.com/mirrors/sharp&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sharp_libvips_binary_host</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://npmmirror.com/mirrors/sharp-libvips&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sharp_binary_host</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://npmmirror.com/mirrors/sharp&quot;</span></span></code></pre></div><h2 id="_2-使用" tabindex="-1">2.使用 <a class="header-anchor" href="#_2-使用" aria-label="Permalink to &quot;2.使用&quot;">​</a></h2><p>基本看看文档就行。</p><p>例如压缩图片质量</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 通过sharp读出文件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">image</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sharp</span><span style="color:#E1E4E8;">(filePath);</span></span>
<span class="line"><span style="color:#6A737D;">// 压缩文件质量</span></span>
<span class="line"><span style="color:#E1E4E8;">image.</span><span style="color:#B392F0;">jpeg</span><span style="color:#E1E4E8;">({ quality });</span></span>
<span class="line"><span style="color:#E1E4E8;">image.</span><span style="color:#B392F0;">toBuffer</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 响应数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">setHeader</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;content-type&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;application/json&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Logger</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">InternalServerErrorException</span><span style="color:#E1E4E8;">(tips.staticFileError);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 通过sharp读出文件</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">image</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sharp</span><span style="color:#24292E;">(filePath);</span></span>
<span class="line"><span style="color:#6A737D;">// 压缩文件质量</span></span>
<span class="line"><span style="color:#24292E;">image.</span><span style="color:#6F42C1;">jpeg</span><span style="color:#24292E;">({ quality });</span></span>
<span class="line"><span style="color:#24292E;">image.</span><span style="color:#6F42C1;">toBuffer</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 响应数据</span></span>
<span class="line"><span style="color:#24292E;">    res.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">error</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    res.</span><span style="color:#6F42C1;">setHeader</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;content-type&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;application/json&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Logger</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">InternalServerErrorException</span><span style="color:#24292E;">(tips.staticFileError);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div>`,16),e=[o];function t(r,c,E,y,i,h){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{F as __pageData,u as default};
