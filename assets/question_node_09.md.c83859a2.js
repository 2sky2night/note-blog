import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.f98883f0.js";const h=JSON.parse('{"title":"Node.js 与 HTTPS","description":"","frontmatter":{"title":"Node.js 与 HTTPS"},"headers":[],"relativePath":"question/node/09.md","filePath":"question/node/09.md","lastUpdated":1704704995000}'),p={name:"question/node/09.md"},o=l(`<p>HTTPS 提供了安全、可靠的传输，市面上大部分 Web 应用都是采取的 HTTPS 传输协议，其 传输报文会经过 RSA 非对称加密，使得报文不会被窃取。</p><h2 id="生成-ssl-证书" tabindex="-1">生成 SSL 证书 <a class="header-anchor" href="#生成-ssl-证书" aria-label="Permalink to &quot;生成 SSL 证书&quot;">​</a></h2><p>node 提供了 https 模块，可以用来创建基于 HTTPS 协议的接口，其 API 和 http 模块非 常类似，但在使用 createServer 创建服务器时需要配置 SSL 证书。</p><h3 id="不被受信的证书" tabindex="-1">不被受信的证书 <a class="header-anchor" href="#不被受信的证书" aria-label="Permalink to &quot;不被受信的证书&quot;">​</a></h3><p>我们可以使用<code>OpenSSL</code>来生成我们的密钥，在 windows 系统中:</p><ol><li>在需要创建证书的目录中右键打开菜单上下文，点击<code>Git Bash Here</code></li><li>输入<code>openssl genrsa -out privkey.pem 1024/2048</code>来生成 <code>private.pem</code> 文件</li><li>使用 <code>private.pem</code> 文件来生成证书，<code>openssl req -new -x509 -key privkey.pem -out server.pem -days 365 </code>，会生成<code>server.pem</code>文件</li></ol><blockquote><p>在第二步中报错如果出现提示：genrsa: Can&#39;t parse &quot;1024/2048&quot; as a number，请删除命令最后面的/2048再重新执行</p></blockquote><h3 id="可以被受信的证书" tabindex="-1">可以被受信的证书 <a class="header-anchor" href="#可以被受信的证书" aria-label="Permalink to &quot;可以被受信的证书&quot;">​</a></h3><p>可以了解下<code>let&#39;s encrypt</code>。</p><h2 id="创建https服务器" tabindex="-1">创建HTTPS服务器 <a class="header-anchor" href="#创建https服务器" aria-label="Permalink to &quot;创建HTTPS服务器&quot;">​</a></h2><p>首先先创建配置证书的对象，然后使用<code>createServer</code>即可创建HTTPS服务器</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">createServer</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">readFileSync</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">resolve</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">keyPath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;./config/pem-key&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  key: </span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(keyPath, </span><span style="color:#9ECBFF;">&#39;./privkey.pem&#39;</span><span style="color:#E1E4E8;">)),</span><span style="color:#6A737D;">// 私钥的路径</span></span>
<span class="line"><span style="color:#E1E4E8;">  cert: </span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(keyPath, </span><span style="color:#9ECBFF;">&#39;./server.pem&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">// 证书的路径</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">createServer</span><span style="color:#E1E4E8;">(options, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">setHeader</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;content-type&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;text/html&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`&lt;h1&gt;Hello,HTTPS!&lt;/h1&gt;\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">443</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">createServer</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">readFileSync</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">resolve</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keyPath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;./config/pem-key&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  key: </span><span style="color:#6F42C1;">readFileSync</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(keyPath, </span><span style="color:#032F62;">&#39;./privkey.pem&#39;</span><span style="color:#24292E;">)),</span><span style="color:#6A737D;">// 私钥的路径</span></span>
<span class="line"><span style="color:#24292E;">  cert: </span><span style="color:#6F42C1;">readFileSync</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(keyPath, </span><span style="color:#032F62;">&#39;./server.pem&#39;</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">// 证书的路径</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">createServer</span><span style="color:#24292E;">(options, (</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">setHeader</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;content-type&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;text/html&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`&lt;h1&gt;Hello,HTTPS!&lt;/h1&gt;\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">443</span><span style="color:#24292E;">)</span></span></code></pre></div>`,12),e=[o];function t(r,c,y,E,i,F){return a(),n("div",null,e)}const C=s(p,[["render",t]]);export{h as __pageData,C as default};
