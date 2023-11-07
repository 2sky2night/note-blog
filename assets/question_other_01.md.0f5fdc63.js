import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.273ff57c.js";const D=JSON.parse('{"title":"文件切片简易版","description":"","frontmatter":{},"headers":[],"relativePath":"question/other/01.md","filePath":"question/other/01.md","lastUpdated":1699188084000}'),p={name:"question/other/01.md"},o=l(`<h1 id="文件切片简易版" tabindex="-1">文件切片简易版 <a class="header-anchor" href="#文件切片简易版" aria-label="Permalink to &quot;文件切片简易版&quot;">​</a></h1><p>写的不好，后续可以看看别人是如何实现的。</p><h2 id="_1-后端实现" tabindex="-1">1.后端实现 <a class="header-anchor" href="#_1-后端实现" aria-label="Permalink to &quot;1.后端实现&quot;">​</a></h2><p>文件切片上传，总体思路： 1.把收到的某个切片文件存放在一个切片文件夹中（该文件夹唯一标识一个文件） 2.将目标切片文件夹中的所有切片合并成一个文件，删除所有切片和对应切片文件夹即可 后端实现需要接触到许多 fs 模块的内容，许多 API 都是一知半解，能用就行那种程度</p><h3 id="文件切片上传" tabindex="-1">文件切片上传 <a class="header-anchor" href="#文件切片上传" aria-label="Permalink to &quot;文件切片上传&quot;">​</a></h3><p>文件切片上传，通过文件名称创建切片文件夹，将后续请求所有的切片文件都写入到该文件夹中。 约定好 form-data 中的字段名为(实际情况按照开发需求定，下列情况中，文件名称和解析方式都具有特殊性)： <strong>fileName</strong>:文件名称，不包括扩展名，用来创建切片文件夹名称(文件名不能出现如：.或_，会影响解析和创建文件) <strong>chunkName</strong>:切片的名称，形如 xxx.png_0,xxx 为文件名称，png 为文件扩展名，_0 为文件切片时的索引，后端需要通过索引号按顺序合并成文件，才能正确的访问文件 <strong>chunkFile</strong>:切片文件，用来保存到切片文件夹中。 需要解析请求体里面的 form-data 中的各个对象，我们使用@koa/multer 来解析 form-data 中的数据:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;/file-chunk&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 解析请求体中的字段（文件字段必须声明，非文件字段可声明可不声明）</span></span>
<span class="line"><span style="color:#E1E4E8;">  upload.</span><span style="color:#B392F0;">fields</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 分片名（分片名称的格式 xxx.png_0）</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;chunk-name&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 分片文件</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;chunk&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      maxCount: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 文件名称</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;file-name&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]),</span></span>
<span class="line"><span style="color:#E1E4E8;">  () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 中间件部分</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;/file-chunk&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 解析请求体中的字段（文件字段必须声明，非文件字段可声明可不声明）</span></span>
<span class="line"><span style="color:#24292E;">  upload.</span><span style="color:#6F42C1;">fields</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 分片名（分片名称的格式 xxx.png_0）</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;chunk-name&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 分片文件</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;chunk&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      maxCount: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 文件名称</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;file-name&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ]),</span></span>
<span class="line"><span style="color:#24292E;">  () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 中间件部分</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div><p>通过中间件我们获取到解析成功后的请求体，用 fileName 来创建文件夹，创建之前需要先检查文件夹是否存在，若存在则直接将切片文件保存到文件夹中，没有需要创建后，再存放到切片文件夹中。 fs.mkdir 创建文件夹 fs.existsSync 查询文件夹是否存在 fs.writeFile 来将切片文件保存到对应切片文件夹中 中间件实现：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 文件分片上传</span></span>
<span class="line"><span style="color:#6A737D;">// 使用@koa/multer可以自动配置上传form-data时的字段名，从而进行解析</span></span>
<span class="line"><span style="color:#6A737D;">// 非文件字段会被保存到ctx.request.body中</span></span>
<span class="line"><span style="color:#6A737D;">// 文件字段会被保存到ctx.request.files中</span></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;/file-chunk&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 解析请求体中的字段（文件字段必须声明，非文件字段可声明可不声明）</span></span>
<span class="line"><span style="color:#E1E4E8;">  upload.</span><span style="color:#B392F0;">fields</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 分片名（分片名称的格式 xxx.png_0）</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;chunk-name&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 分片文件</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;chunk&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      maxCount: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 文件名称</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;file-name&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]),</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 非文件的form-data字段会被解析到body里</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(ctx.request.body);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 文件会被保存到ctx.request.files中</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(ctx.request.files);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 1.解析form-data中的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// @ts-ignore 获取文件列表</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fileList</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ctx.request.files;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 解析分片文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fileList[</span><span style="color:#9ECBFF;">&quot;chunk&quot;</span><span style="color:#E1E4E8;">][</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 解析出分片文件的文件名称</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">chunkName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ctx.request.body[</span><span style="color:#9ECBFF;">&quot;chunk-name&quot;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 解析出文件的名称(以文件的名称来创建文件夹)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fileName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ctx.request.body[</span><span style="color:#9ECBFF;">&quot;file-name&quot;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 2.创建文件夹，用于存放分片文件（根据文件名称来创建文件夹，将所有分片文件保存到文件夹中）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 文件夹路径</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">chunkDirPath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./static/chunk&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`./\${</span><span style="color:#E1E4E8;">fileName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">existsSync</span><span style="color:#E1E4E8;">(chunkDirPath)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 文件不存在 创建文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">      fs.</span><span style="color:#B392F0;">mkdirSync</span><span style="color:#E1E4E8;">(chunkDirPath);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 3.将当前分片文件保存在分片文件夹中</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">chunkFilePath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(chunkDirPath, </span><span style="color:#9ECBFF;">\`./\${</span><span style="color:#E1E4E8;">chunkName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 将文件保存到分片文件夹中</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      fs.</span><span style="color:#B392F0;">writeFileSync</span><span style="color:#E1E4E8;">(chunkFilePath, file.buffer);</span></span>
<span class="line"><span style="color:#E1E4E8;">      ctx.body </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        msg: </span><span style="color:#9ECBFF;">&quot;save ok&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fileName,</span></span>
<span class="line"><span style="color:#E1E4E8;">        chunkName,</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      ctx.body </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        msg: </span><span style="color:#9ECBFF;">&quot;save fail&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fileName,</span></span>
<span class="line"><span style="color:#E1E4E8;">        chunkName,</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 文件分片上传</span></span>
<span class="line"><span style="color:#6A737D;">// 使用@koa/multer可以自动配置上传form-data时的字段名，从而进行解析</span></span>
<span class="line"><span style="color:#6A737D;">// 非文件字段会被保存到ctx.request.body中</span></span>
<span class="line"><span style="color:#6A737D;">// 文件字段会被保存到ctx.request.files中</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;/file-chunk&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 解析请求体中的字段（文件字段必须声明，非文件字段可声明可不声明）</span></span>
<span class="line"><span style="color:#24292E;">  upload.</span><span style="color:#6F42C1;">fields</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 分片名（分片名称的格式 xxx.png_0）</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;chunk-name&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 分片文件</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;chunk&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      maxCount: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 文件名称</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;file-name&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ]),</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 非文件的form-data字段会被解析到body里</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(ctx.request.body);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 文件会被保存到ctx.request.files中</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(ctx.request.files);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 1.解析form-data中的数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// @ts-ignore 获取文件列表</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fileList</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ctx.request.files;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 解析分片文件</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">file</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fileList[</span><span style="color:#032F62;">&quot;chunk&quot;</span><span style="color:#24292E;">][</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 解析出分片文件的文件名称</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">chunkName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ctx.request.body[</span><span style="color:#032F62;">&quot;chunk-name&quot;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 解析出文件的名称(以文件的名称来创建文件夹)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fileName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ctx.request.body[</span><span style="color:#032F62;">&quot;file-name&quot;</span><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 2.创建文件夹，用于存放分片文件（根据文件名称来创建文件夹，将所有分片文件保存到文件夹中）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 文件夹路径</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">chunkDirPath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./static/chunk&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">\`./\${</span><span style="color:#24292E;">fileName</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">existsSync</span><span style="color:#24292E;">(chunkDirPath)) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 文件不存在 创建文件夹</span></span>
<span class="line"><span style="color:#24292E;">      fs.</span><span style="color:#6F42C1;">mkdirSync</span><span style="color:#24292E;">(chunkDirPath);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 3.将当前分片文件保存在分片文件夹中</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">chunkFilePath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(chunkDirPath, </span><span style="color:#032F62;">\`./\${</span><span style="color:#24292E;">chunkName</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将文件保存到分片文件夹中</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      fs.</span><span style="color:#6F42C1;">writeFileSync</span><span style="color:#24292E;">(chunkFilePath, file.buffer);</span></span>
<span class="line"><span style="color:#24292E;">      ctx.body </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        msg: </span><span style="color:#032F62;">&quot;save ok&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        fileName,</span></span>
<span class="line"><span style="color:#24292E;">        chunkName,</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (error) {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">      ctx.body </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        msg: </span><span style="color:#032F62;">&quot;save fail&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        fileName,</span></span>
<span class="line"><span style="color:#24292E;">        chunkName,</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="将切片文件合并" tabindex="-1">将切片文件合并 <a class="header-anchor" href="#将切片文件合并" aria-label="Permalink to &quot;将切片文件合并&quot;">​</a></h3><p>切片合并，约定：需要传入合并的文件夹名称与切片时每一份数据的大小，再读取切片文件夹，遍历所有切片文件，将切片文件写入到合并文件中，最后删除切片文件。</p><p>查询参数： <strong>fileName</strong>:通过 fileName 来找到需要合并的切片文件夹(本地中切片文件夹目录必须存在该文件夹) <strong>size</strong>:解析每份切片文件的大小，在合并文件时需要按照字节顺序依次写入内容。</p><p>先通过 fileName 到切片文件目录中查询是否存在该文件夹，存在则拼接出路径，读取该文件夹中所有的切片文件名称，并通过索引顺序来排序。 在对应目录下通过文件流的方式创建合并文件，遍历排序切片文件名称数组，将切片名称拼接成路径通过文件流的方式读取文件，按照字节顺序写入到合并文件中。 fs.readdirSync 读取文件夹中的所有文件名称 fs.createReadStream 创建读文件流 fs.createWriteStream 创建写文件流，可以指定从那个字节大小创建可写文件流 streamIns01.pipe(streamIns02)将实例 01 的文件流写入到实例 02 文件流中</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 合并切片的文件文件</span></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/merge-file&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 解析需要解析的文件名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (ctx.query.fileName </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> ctx.query.size </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (ctx.body </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;fileName or size is query need!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 文件名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fileName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ctx.query.fileName </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 分片大小为多少？</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">size</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">ctx.query.size;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolveMerge</span><span style="color:#E1E4E8;">(fileName, size);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ctx.body </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;file not exist!&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ctx.body </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> res;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolveMerge</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fileName</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">size</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 切片文件夹的路径（一个文件夹代表一个文件）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">chunkDirPath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./static/chunk&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`./\${</span><span style="color:#E1E4E8;">fileName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 1.查询文件是否存在</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">existsSync</span><span style="color:#E1E4E8;">(chunkDirPath)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 文件不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 文件存在</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 2.读取该切片文件夹中的所有文件名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fileNameList</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readdirSync</span><span style="color:#E1E4E8;">(chunkDirPath);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// @ts-ignore 切片名称为 xxx.png_0 需要按照索引顺序进行排序，避免文件被混乱的合并</span></span>
<span class="line"><span style="color:#E1E4E8;">  fileNameList.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;_&quot;</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;_&quot;</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 3.遍历所有切片合并文件，并删除切片文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fileNameList.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">chunkName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 当前切片的路径</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">chunkFilePath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(chunkDirPath, </span><span style="color:#9ECBFF;">\`./\${</span><span style="color:#E1E4E8;">chunkName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 需要合并的文件路径(合并后文件的路径)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">filePath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;./static/file&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">chunkName</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">split</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&quot;_&quot;</span><span style="color:#9ECBFF;">)[</span><span style="color:#79B8FF;">0</span><span style="color:#9ECBFF;">]</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 根据当前切片的路径，访问该切片，将该切片写入到目标文件中</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pipeStream</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      chunkFilePath,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 根据size的指定位置创建可写流</span></span>
<span class="line"><span style="color:#E1E4E8;">      fs.</span><span style="color:#B392F0;">createWriteStream</span><span style="color:#E1E4E8;">(filePath, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        start: index </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> size,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 等待全部切片写入完成</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(res);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 全部切片写入完成后，就删除该切片文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">  fs.</span><span style="color:#B392F0;">rmdirSync</span><span style="color:#E1E4E8;">(chunkDirPath);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    fileName,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;http://127.0.0.1:3000/file&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> fileNameList[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;_&quot;</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 写入文件流</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pipeStream</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">chunkPath</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">writeStream</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fs</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">WriteStream</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">&gt;((</span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 读取切片流</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">readStream</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">createReadStream</span><span style="color:#E1E4E8;">(chunkPath);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 读取完成就删除该切片</span></span>
<span class="line"><span style="color:#E1E4E8;">    readStream.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;end&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      fs.</span><span style="color:#B392F0;">unlinkSync</span><span style="color:#E1E4E8;">(chunkPath);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">r</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 将切片流写入到目标文件流中</span></span>
<span class="line"><span style="color:#E1E4E8;">    readStream.</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(writeStream);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 合并切片的文件文件</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/merge-file&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 解析需要解析的文件名称</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (ctx.query.fileName </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> ctx.query.size </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (ctx.body </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;fileName or size is query need!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 文件名称</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fileName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ctx.query.fileName </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 分片大小为多少？</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">size</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;">ctx.query.size;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resolveMerge</span><span style="color:#24292E;">(fileName, size);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    ctx.body </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;file not exist!&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    ctx.body </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resolveMerge</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fileName</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">size</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 切片文件夹的路径（一个文件夹代表一个文件）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">chunkDirPath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./static/chunk&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">\`./\${</span><span style="color:#24292E;">fileName</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 1.查询文件是否存在</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">existsSync</span><span style="color:#24292E;">(chunkDirPath)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 文件不存在</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 文件存在</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 2.读取该切片文件夹中的所有文件名称</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fileNameList</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fs.</span><span style="color:#6F42C1;">readdirSync</span><span style="color:#24292E;">(chunkDirPath);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// @ts-ignore 切片名称为 xxx.png_0 需要按照索引顺序进行排序，避免文件被混乱的合并</span></span>
<span class="line"><span style="color:#24292E;">  fileNameList.</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">((</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> a.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;_&quot;</span><span style="color:#24292E;">)[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> b.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;_&quot;</span><span style="color:#24292E;">)[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 3.遍历所有切片合并文件，并删除切片文件夹</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fileNameList.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">((</span><span style="color:#E36209;">chunkName</span><span style="color:#24292E;">, </span><span style="color:#E36209;">index</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 当前切片的路径</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">chunkFilePath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(chunkDirPath, </span><span style="color:#032F62;">\`./\${</span><span style="color:#24292E;">chunkName</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 需要合并的文件路径(合并后文件的路径)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">filePath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;./static/file&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">chunkName</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">split</span><span style="color:#032F62;">(</span><span style="color:#032F62;">&quot;_&quot;</span><span style="color:#032F62;">)[</span><span style="color:#005CC5;">0</span><span style="color:#032F62;">]</span><span style="color:#032F62;">}\`</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 根据当前切片的路径，访问该切片，将该切片写入到目标文件中</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pipeStream</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      chunkFilePath,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 根据size的指定位置创建可写流</span></span>
<span class="line"><span style="color:#24292E;">      fs.</span><span style="color:#6F42C1;">createWriteStream</span><span style="color:#24292E;">(filePath, {</span></span>
<span class="line"><span style="color:#24292E;">        start: index </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> size,</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 等待全部切片写入完成</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">(res);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 全部切片写入完成后，就删除该切片文件夹</span></span>
<span class="line"><span style="color:#24292E;">  fs.</span><span style="color:#6F42C1;">rmdirSync</span><span style="color:#24292E;">(chunkDirPath);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    fileName,</span></span>
<span class="line"><span style="color:#24292E;">    filePath:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;http://127.0.0.1:3000/file&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> fileNameList[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;_&quot;</span><span style="color:#24292E;">)[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 写入文件流</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pipeStream</span><span style="color:#24292E;">(</span><span style="color:#E36209;">chunkPath</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">writeStream</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fs</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">WriteStream</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">void</span><span style="color:#24292E;">&gt;((</span><span style="color:#E36209;">r</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 读取切片流</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">readStream</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fs.</span><span style="color:#6F42C1;">createReadStream</span><span style="color:#24292E;">(chunkPath);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 读取完成就删除该切片</span></span>
<span class="line"><span style="color:#24292E;">    readStream.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;end&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      fs.</span><span style="color:#6F42C1;">unlinkSync</span><span style="color:#24292E;">(chunkPath);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">r</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将切片流写入到目标文件流中</span></span>
<span class="line"><span style="color:#24292E;">    readStream.</span><span style="color:#6F42C1;">pipe</span><span style="color:#24292E;">(writeStream);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>上述只是实现了切片文件并合并的一种方式，写得很特殊，没法考虑到解析时文件名和扩展名的问题，只是提供一种思路。 不论是 createReadStream 和 createWriteStream 都可以指定从那个字节开始读取/写入数据，也可以指定 end，表示读取/写入到对应字节结束。</p>`,15),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const A=s(p,[["render",c]]);export{D as __pageData,A as default};
