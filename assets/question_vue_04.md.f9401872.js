import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.f98883f0.js";const p="/note-blog/imgs/question/04.png",o="/note-blog/imgs/question/05.png",d=JSON.parse('{"title":"vue 项目使用 i18n 插件","description":"","frontmatter":{},"headers":[],"relativePath":"question/vue/04.md","filePath":"question/vue/04.md","lastUpdated":1699188084000}'),e={name:"question/vue/04.md"},t=l(`<h1 id="vue-项目使用-i18n-插件" tabindex="-1">vue 项目使用 i18n 插件 <a class="header-anchor" href="#vue-项目使用-i18n-插件" aria-label="Permalink to &quot;vue 项目使用 i18n 插件&quot;">​</a></h1><p>navigator.language 这个 BOM API 可以获取当前浏览器的语言</p><h4 id="_1-配置-i18n-插件" tabindex="-1">1.配置 i18n 插件 <a class="header-anchor" href="#_1-配置-i18n-插件" aria-label="Permalink to &quot;1.配置 i18n 插件&quot;">​</a></h4><p>​ 需要先安装 vue-i18n 插件，创建 locale 文件夹，创建 index 文件，引入后配置 i18n 插件，同时需要准备各个国家的翻译文案。导出 i18n 对象后，可以直接使用 app.use 注册插件，就可以在模板中使用该插件提供的 api 实现多语言文本替换了。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createI18n } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue-i18n&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 提前准备好的各个国家的翻译文案</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> CN </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./CN&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> US </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./US&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> BR </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./BR&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ID </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./ID&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> JP </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./JP&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> RU </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./RU&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> TH </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./TH&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> VN </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./VN&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> NG </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./NG&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">i18n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createI18n</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 当前激活的国家文本 （value必须是messages配置项中的某个key）</span></span>
<span class="line"><span style="color:#E1E4E8;">  locale: </span><span style="color:#9ECBFF;">&quot;CN&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 失败激活的国家文本（value必须是messages配置项中的某个key）</span></span>
<span class="line"><span style="color:#E1E4E8;">  fallbackLocale: </span><span style="color:#9ECBFF;">&quot;US&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  allowComposition: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 配置各个国家的文本</span></span>
<span class="line"><span style="color:#E1E4E8;">  messages: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    CN,</span></span>
<span class="line"><span style="color:#E1E4E8;">    US,</span></span>
<span class="line"><span style="color:#E1E4E8;">    BR,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ID,</span></span>
<span class="line"><span style="color:#E1E4E8;">    JP,</span></span>
<span class="line"><span style="color:#E1E4E8;">    RU,</span></span>
<span class="line"><span style="color:#E1E4E8;">    TH,</span></span>
<span class="line"><span style="color:#E1E4E8;">    VN,</span></span>
<span class="line"><span style="color:#E1E4E8;">    NG,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> i18n;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createI18n } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue-i18n&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 提前准备好的各个国家的翻译文案</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> CN </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./CN&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> US </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./US&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> BR </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./BR&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ID </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./ID&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> JP </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./JP&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> RU </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./RU&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> TH </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./TH&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> VN </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./VN&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> NG </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./NG&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">i18n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createI18n</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 当前激活的国家文本 （value必须是messages配置项中的某个key）</span></span>
<span class="line"><span style="color:#24292E;">  locale: </span><span style="color:#032F62;">&quot;CN&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 失败激活的国家文本（value必须是messages配置项中的某个key）</span></span>
<span class="line"><span style="color:#24292E;">  fallbackLocale: </span><span style="color:#032F62;">&quot;US&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  allowComposition: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 配置各个国家的文本</span></span>
<span class="line"><span style="color:#24292E;">  messages: {</span></span>
<span class="line"><span style="color:#24292E;">    CN,</span></span>
<span class="line"><span style="color:#24292E;">    US,</span></span>
<span class="line"><span style="color:#24292E;">    BR,</span></span>
<span class="line"><span style="color:#24292E;">    ID,</span></span>
<span class="line"><span style="color:#24292E;">    JP,</span></span>
<span class="line"><span style="color:#24292E;">    RU,</span></span>
<span class="line"><span style="color:#24292E;">    TH,</span></span>
<span class="line"><span style="color:#24292E;">    VN,</span></span>
<span class="line"><span style="color:#24292E;">    NG,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> i18n;</span></span></code></pre></div><h4 id="_2-配置某个国家的文案" tabindex="-1">2.配置某个国家的文案 <a class="header-anchor" href="#_2-配置某个国家的文案" aria-label="Permalink to &quot;2.配置某个国家的文案&quot;">​</a></h4><p>​ 形如这种对象形式的来配置各个文本</p><p>// CN.ts</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> layout </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./CN/layout&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  layout,</span></span>
<span class="line"><span style="color:#E1E4E8;">  message: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    hello: </span><span style="color:#9ECBFF;">&quot;你好&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> layout </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./CN/layout&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  layout,</span></span>
<span class="line"><span style="color:#24292E;">  message: {</span></span>
<span class="line"><span style="color:#24292E;">    hello: </span><span style="color:#032F62;">&quot;你好&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>// 模块化举例 layout.ts</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  header: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    signIn: </span><span style="color:#9ECBFF;">&quot;登录&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    signUp: </span><span style="color:#9ECBFF;">&quot;注册&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    home: </span><span style="color:#9ECBFF;">&quot;首页&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    game: </span><span style="color:#9ECBFF;">&quot;游戏&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  header: {</span></span>
<span class="line"><span style="color:#24292E;">    signIn: </span><span style="color:#032F62;">&quot;登录&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    signUp: </span><span style="color:#032F62;">&quot;注册&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    home: </span><span style="color:#032F62;">&quot;首页&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    game: </span><span style="color:#032F62;">&quot;游戏&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h4 id="_3-在模板中使用" tabindex="-1">3.在模板中使用 <a class="header-anchor" href="#_3-在模板中使用" aria-label="Permalink to &quot;3.在模板中使用&quot;">​</a></h4><p>​ 通过 app.use 安装好了该插件就可以直接在模板中使用其提供的$t 方法，来通过 2 中配置的对象路径来读取对应的文案。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sign-container&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;mr-10 sign-in-btn btn&quot;</span><span style="color:#E1E4E8;">&gt;{{ $t(&quot;layout.header.signIn&quot;) }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sign-up-btn btn&quot;</span><span style="color:#E1E4E8;">&gt;{{ $t(&quot;layout.header.signUp&quot;) }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sign-container&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;mr-10 sign-in-btn btn&quot;</span><span style="color:#24292E;">&gt;{{ $t(&quot;layout.header.signIn&quot;) }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sign-up-btn btn&quot;</span><span style="color:#24292E;">&gt;{{ $t(&quot;layout.header.signUp&quot;) }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h4 id="_4-在-ts-中使用" tabindex="-1">4.在 ts 中使用 <a class="header-anchor" href="#_4-在-ts-中使用" aria-label="Permalink to &quot;4.在 ts 中使用&quot;">​</a></h4><p>引入创建的 i18n 实例即可使用提供的 api，i18n.global.t()，读取对象路径获取对应的值。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">script lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;ts&#39;</span><span style="color:#E1E4E8;"> setup</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> NavBtn </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/components/btn/NavBtn.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> i18n </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/locale&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 引入i8n实例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;"> { icon: </span><span style="color:#9ECBFF;">&#39;icon-home&#39;</span><span style="color:#E1E4E8;">, title: i18n.global.</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;layout.header.home&#39;</span><span style="color:#E1E4E8;">), path: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;"> { icon: </span><span style="color:#9ECBFF;">&#39;icon-live-broadcast&#39;</span><span style="color:#E1E4E8;">, title: i18n.global.</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;layout.header.game&#39;</span><span style="color:#E1E4E8;">), path: </span><span style="color:#9ECBFF;">&#39;/game&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">script lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;ts&#39;</span><span style="color:#24292E;"> setup</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> NavBtn </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/components/btn/NavBtn.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> i18n </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/locale&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 引入i8n实例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">list</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;"> { icon: </span><span style="color:#032F62;">&#39;icon-home&#39;</span><span style="color:#24292E;">, title: i18n.global.</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;layout.header.home&#39;</span><span style="color:#24292E;">), path: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;"> { icon: </span><span style="color:#032F62;">&#39;icon-live-broadcast&#39;</span><span style="color:#24292E;">, title: i18n.global.</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;layout.header.game&#39;</span><span style="color:#24292E;">), path: </span><span style="color:#032F62;">&#39;/game&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h4 id="_5-切换当前语言设置" tabindex="-1">5.切换当前语言设置 <a class="header-anchor" href="#_5-切换当前语言设置" aria-label="Permalink to &quot;5.切换当前语言设置&quot;">​</a></h4><p>​ 该钩子可以获取到 i18n 实例，i18n.locale.value 即可设置语言，但是必须是实例化 i18n 时 messages 配置项中有的 key 才能生效。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useI18n } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue-i18n&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// i18n插件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">i18n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useI18n</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setLanguage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LOCALE_VALUE_TYPE</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  i18n.locale.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useI18n } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue-i18n&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// i18n插件</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">i18n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useI18n</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setLanguage</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LOCALE_VALUE_TYPE</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  i18n.locale.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>​ 所有模板内容调用了$t 函数都会重新解析模板生成对应语言的 dom 文本</p><p><img src="`+p+'" alt="图片"></p><p>​ <strong>但是通过 ts 调用 t 函数是不会因为语言更新而重新调用 这个需要特别注意（也就是 4 的例子）。</strong>，这种方式生成的内容都是死内容，需要自己手动监听语言的变化，重新调用 t 函数生成对应语言文本。</p><p><img src="'+o+`" alt="图片"></p><h4 id="_6-js-中如何处理多语言切换-多语言路由表渲染导航菜单处理" tabindex="-1">6.(JS 中如何处理多语言切换)多语言路由表渲染导航菜单处理 <a class="header-anchor" href="#_6-js-中如何处理多语言切换-多语言路由表渲染导航菜单处理" aria-label="Permalink to &quot;6.(JS 中如何处理多语言切换)多语言路由表渲染导航菜单处理&quot;">​</a></h4><p>​ 最开始我是直接在路由上直接调用 t 函数根据语言模式生成对应文本，这样生成的路由表是文本内容是死的，有两种解决方案</p><h5 id="_1-getter-函数-代码量多一些" tabindex="-1">1.getter 函数（代码量多一些） <a class="header-anchor" href="#_1-getter-函数-代码量多一些" aria-label="Permalink to &quot;1.getter 函数（代码量多一些）&quot;">​</a></h5><p>​ 所以可以配置一个 getter 函数，getter 函数调用后返回当前语言的路由表。</p><h6 id="routes-ts" tabindex="-1">routes.ts <a class="header-anchor" href="#routes-ts" aria-label="Permalink to &quot;routes.ts&quot;">​</a></h6><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { RouteRecordRaw } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue-router&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> i18n </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@/locale&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">initRoutes</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RouteRecordRaw</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;home&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/home/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: i18n.global.</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;menu.home&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      level: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&quot;/sports&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;sports&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/sports/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: i18n.global.</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;menu.sports&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&quot;icon-at&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      level: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&quot;/game&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;game&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/game/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: i18n.global.</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;menu.game&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&quot;icon-code&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      level: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&quot;/test&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;test&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/test/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: </span><span style="color:#9ECBFF;">&quot;test&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      level: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&quot;test-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-01/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&quot;test-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          level: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-01/test-son-01-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&quot;test-son-01-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-01/children/test-son-01-son-01/index.vue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">              ),</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              title: </span><span style="color:#9ECBFF;">&quot;test-son-01-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              level: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-01/test-son-01-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&quot;test-son-01-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-01/children/test-son-01-son-02/index.vue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">              ),</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              title: </span><span style="color:#9ECBFF;">&quot;test-son-01-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              level: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&quot;test-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-02/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&quot;test-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          level: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-02/test-son-02-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&quot;test-son-02-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-02/children/test-son-02-son-01/index.vue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">              ),</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              title: </span><span style="color:#9ECBFF;">&quot;test-son-02-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              level: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-02/test-son-02-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&quot;test-son-02-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-02/children/test-son-02-son-02/index.vue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">              ),</span></span>
<span class="line"><span style="color:#E1E4E8;">            meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              title: </span><span style="color:#9ECBFF;">&quot;test-son-02-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              level: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&quot;/blog&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;blog&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/blog/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: i18n.global.</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;menu.blog&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&quot;icon-launch&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      level: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 获取路由表</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@returns</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getterInitRoutes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;home&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/home/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: i18n.global.</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;menu.home&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        level: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&quot;/sports&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;sports&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/sports/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: i18n.global.</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;menu.sports&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&quot;icon-at&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        level: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&quot;/game&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;game&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/game/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: i18n.global.</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;menu.game&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&quot;icon-code&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        level: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&quot;/test&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;test&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/test/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&quot;test&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        level: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&quot;test-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-01/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&quot;test-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            level: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-01/test-son-01-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: </span><span style="color:#9ECBFF;">&quot;test-son-01-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-01/children/test-son-01-son-01/index.vue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                ),</span></span>
<span class="line"><span style="color:#E1E4E8;">              meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&quot;test-son-01-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                level: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-01/test-son-01-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: </span><span style="color:#9ECBFF;">&quot;test-son-01-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-01/children/test-son-01-son-02/index.vue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                ),</span></span>
<span class="line"><span style="color:#E1E4E8;">              meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&quot;test-son-01-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                level: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&quot;test-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-02/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&quot;test-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            level: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-02/test-son-02-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: </span><span style="color:#9ECBFF;">&quot;test-son-02-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-02/children/test-son-02-son-01/index.vue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                ),</span></span>
<span class="line"><span style="color:#E1E4E8;">              meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&quot;test-son-02-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                level: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-02/test-son-02-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: </span><span style="color:#9ECBFF;">&quot;test-son-02-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-02/children/test-son-02-son-02/index.vue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                ),</span></span>
<span class="line"><span style="color:#E1E4E8;">              meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&quot;test-son-02-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                level: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&quot;/blog&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;blog&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/blog/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: i18n.global.</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;menu.blog&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&quot;icon-launch&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        level: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { RouteRecordRaw } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue-router&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> i18n </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@/locale&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">initRoutes</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RouteRecordRaw</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;home&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/home/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    meta: {</span></span>
<span class="line"><span style="color:#24292E;">      title: i18n.global.</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;menu.home&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      level: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&quot;/sports&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;sports&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/sports/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    meta: {</span></span>
<span class="line"><span style="color:#24292E;">      title: i18n.global.</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;menu.sports&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      icon: </span><span style="color:#032F62;">&quot;icon-at&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      level: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&quot;/game&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;game&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/game/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    meta: {</span></span>
<span class="line"><span style="color:#24292E;">      title: i18n.global.</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;menu.game&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      icon: </span><span style="color:#032F62;">&quot;icon-code&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      level: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&quot;/test&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;test&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/test/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    meta: {</span></span>
<span class="line"><span style="color:#24292E;">      title: </span><span style="color:#032F62;">&quot;test&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      level: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&quot;/test/test-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;test-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/test/children/test-son-01/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        meta: {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&quot;test-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          level: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        children: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&quot;/test/test-son-01/test-son-01-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&quot;test-son-01-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;@/views/test/children/test-son-01/children/test-son-01-son-01/index.vue&quot;</span></span>
<span class="line"><span style="color:#24292E;">              ),</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">              title: </span><span style="color:#032F62;">&quot;test-son-01-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              level: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&quot;/test/test-son-01/test-son-01-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&quot;test-son-01-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;@/views/test/children/test-son-01/children/test-son-01-son-02/index.vue&quot;</span></span>
<span class="line"><span style="color:#24292E;">              ),</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">              title: </span><span style="color:#032F62;">&quot;test-son-01-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              level: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&quot;/test/test-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;test-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/test/children/test-son-02/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        meta: {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&quot;test-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          level: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        children: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&quot;/test/test-son-02/test-son-02-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&quot;test-son-02-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;@/views/test/children/test-son-02/children/test-son-02-son-01/index.vue&quot;</span></span>
<span class="line"><span style="color:#24292E;">              ),</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">              title: </span><span style="color:#032F62;">&quot;test-son-02-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              level: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&quot;/test/test-son-02/test-son-02-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&quot;test-son-02-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;@/views/test/children/test-son-02/children/test-son-02-son-02/index.vue&quot;</span></span>
<span class="line"><span style="color:#24292E;">              ),</span></span>
<span class="line"><span style="color:#24292E;">            meta: {</span></span>
<span class="line"><span style="color:#24292E;">              title: </span><span style="color:#032F62;">&quot;test-son-02-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              level: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&quot;/blog&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;blog&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/blog/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    meta: {</span></span>
<span class="line"><span style="color:#24292E;">      title: i18n.global.</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;menu.blog&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      icon: </span><span style="color:#032F62;">&quot;icon-launch&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      level: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 获取路由表</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@returns</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getterInitRoutes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;home&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/home/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: i18n.global.</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;menu.home&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        level: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&quot;/sports&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;sports&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/sports/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: i18n.global.</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;menu.sports&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&quot;icon-at&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        level: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&quot;/game&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;game&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/game/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: i18n.global.</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;menu.game&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&quot;icon-code&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        level: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&quot;/test&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;test&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/test/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&quot;test&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        level: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      children: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          path: </span><span style="color:#032F62;">&quot;/test/test-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&quot;test-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/test/children/test-son-01/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          meta: {</span></span>
<span class="line"><span style="color:#24292E;">            title: </span><span style="color:#032F62;">&quot;test-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            level: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          children: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              path: </span><span style="color:#032F62;">&quot;/test/test-son-01/test-son-01-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              name: </span><span style="color:#032F62;">&quot;test-son-01-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#032F62;">&quot;@/views/test/children/test-son-01/children/test-son-01-son-01/index.vue&quot;</span></span>
<span class="line"><span style="color:#24292E;">                ),</span></span>
<span class="line"><span style="color:#24292E;">              meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&quot;test-son-01-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                level: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              path: </span><span style="color:#032F62;">&quot;/test/test-son-01/test-son-01-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              name: </span><span style="color:#032F62;">&quot;test-son-01-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#032F62;">&quot;@/views/test/children/test-son-01/children/test-son-01-son-02/index.vue&quot;</span></span>
<span class="line"><span style="color:#24292E;">                ),</span></span>
<span class="line"><span style="color:#24292E;">              meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&quot;test-son-01-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                level: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          ],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          path: </span><span style="color:#032F62;">&quot;/test/test-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&quot;test-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/test/children/test-son-02/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          meta: {</span></span>
<span class="line"><span style="color:#24292E;">            title: </span><span style="color:#032F62;">&quot;test-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            level: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          children: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              path: </span><span style="color:#032F62;">&quot;/test/test-son-02/test-son-02-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              name: </span><span style="color:#032F62;">&quot;test-son-02-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#032F62;">&quot;@/views/test/children/test-son-02/children/test-son-02-son-01/index.vue&quot;</span></span>
<span class="line"><span style="color:#24292E;">                ),</span></span>
<span class="line"><span style="color:#24292E;">              meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&quot;test-son-02-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                level: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              path: </span><span style="color:#032F62;">&quot;/test/test-son-02/test-son-02-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              name: </span><span style="color:#032F62;">&quot;test-son-02-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#032F62;">&quot;@/views/test/children/test-son-02/children/test-son-02-son-02/index.vue&quot;</span></span>
<span class="line"><span style="color:#24292E;">                ),</span></span>
<span class="line"><span style="color:#24292E;">              meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&quot;test-son-02-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                level: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          ],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&quot;/blog&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;blog&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/blog/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: i18n.global.</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;menu.blog&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&quot;icon-launch&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        level: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h6 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h6><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;navigations-container&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-menu</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:selected-keys</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[$route.path]&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">NavigateItems</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:routes</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;routesList&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">a-menu</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 路由表</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getterInitRoutes } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@/router/routes&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 组件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> NavigateItems </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./NavigateItems.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// hooks</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useRoute } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue-router&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> useSettingStore </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@/store/setting&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { watch, reactive } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { storeToRefs } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;pinia&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// types</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { RouteRecordRaw } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue-router&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置仓库</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">settingStore</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useSettingStore</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 当前语言</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">language</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">storeToRefs</span><span style="color:#E1E4E8;">(settingStore);</span></span>
<span class="line"><span style="color:#6A737D;">// 路由</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$route</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useRoute</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 路由表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">routesList</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RouteRecordRaw</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">([]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 语言变化时 需要重新根据语言来获取最新的路由表</span></span>
<span class="line"><span style="color:#B392F0;">watch</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  language,</span></span>
<span class="line"><span style="color:#E1E4E8;">  () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    routesList.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getterInitRoutes</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">ele</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      routesList.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(ele);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { immediate: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.navigations-container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">flex-grow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;navigations-container&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">a-menu</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:selected-keys</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[$route.path]&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">NavigateItems</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:routes</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;routesList&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">a-menu</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 路由表</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getterInitRoutes } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@/router/routes&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 组件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> NavigateItems </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./NavigateItems.vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// hooks</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useRoute } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue-router&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> useSettingStore </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@/store/setting&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { watch, reactive } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { storeToRefs } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;pinia&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// types</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { RouteRecordRaw } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue-router&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置仓库</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">settingStore</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useSettingStore</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 当前语言</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">language</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">storeToRefs</span><span style="color:#24292E;">(settingStore);</span></span>
<span class="line"><span style="color:#6A737D;">// 路由</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$route</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useRoute</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 路由表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routesList</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RouteRecordRaw</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">([]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 语言变化时 需要重新根据语言来获取最新的路由表</span></span>
<span class="line"><span style="color:#6F42C1;">watch</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  language,</span></span>
<span class="line"><span style="color:#24292E;">  () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    routesList.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getterInitRoutes</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">ele</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      routesList.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(ele);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  { immediate: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.navigations-container</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">flex-grow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h5 id="_2-使用-computed-函数" tabindex="-1">2.使用 computed 函数 <a class="header-anchor" href="#_2-使用-computed-函数" aria-label="Permalink to &quot;2.使用 computed 函数&quot;">​</a></h5><p>​ 利用 i18n.global.t 函数在语言切换时会重新调用一次的特性，可以使用 computed 函数，传入 getter 函数，getter 函数直接返回路由表，这样就能做到语言切换时重新调用 getter 函数，相当于底层就是基于 1 的实现，但是简化了监听的流程，让 vue 监听到 t 函数执行直接调用 getter 函数获取最新的路由表。</p><p>定义</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 获取路由表</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@returns</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">getterInitRoutes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;home&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/home/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: i18n.global.</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;menu.home&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        level: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&quot;/sports&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;sports&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/sports/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: i18n.global.</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;menu.sports&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&quot;icon-at&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        level: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&quot;/game&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;game&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/game/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: i18n.global.</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;menu.game&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&quot;icon-code&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        level: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&quot;/test&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;test&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/test/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&quot;test&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        level: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&quot;test-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-01/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&quot;test-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            level: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-01/test-son-01-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: </span><span style="color:#9ECBFF;">&quot;test-son-01-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-01/children/test-son-01-son-01/index.vue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                ),</span></span>
<span class="line"><span style="color:#E1E4E8;">              meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&quot;test-son-01-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                level: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-01/test-son-01-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: </span><span style="color:#9ECBFF;">&quot;test-son-01-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-01/children/test-son-01-son-02/index.vue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                ),</span></span>
<span class="line"><span style="color:#E1E4E8;">              meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&quot;test-son-01-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                level: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&quot;test-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-02/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&quot;test-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            level: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-02/test-son-02-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: </span><span style="color:#9ECBFF;">&quot;test-son-02-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-02/children/test-son-02-son-01/index.vue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                ),</span></span>
<span class="line"><span style="color:#E1E4E8;">              meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&quot;test-son-02-son-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                level: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              path: </span><span style="color:#9ECBFF;">&quot;/test/test-son-02/test-son-02-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: </span><span style="color:#9ECBFF;">&quot;test-son-02-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#9ECBFF;">&quot;@/views/test/children/test-son-02/children/test-son-02-son-02/index.vue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                ),</span></span>
<span class="line"><span style="color:#E1E4E8;">              meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&quot;test-son-02-son-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: </span><span style="color:#9ECBFF;">&quot;icon-folder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                level: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&quot;/blog&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;blog&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/views/blog/index.vue&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: i18n.global.</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;menu.blog&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&quot;icon-launch&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        level: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ];</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 获取路由表</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@returns</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">getterInitRoutes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;home&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/home/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: i18n.global.</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;menu.home&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        level: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&quot;/sports&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;sports&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/sports/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: i18n.global.</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;menu.sports&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&quot;icon-at&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        level: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&quot;/game&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;game&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/game/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: i18n.global.</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;menu.game&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&quot;icon-code&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        level: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&quot;/test&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;test&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/test/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&quot;test&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        level: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      children: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          path: </span><span style="color:#032F62;">&quot;/test/test-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&quot;test-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/test/children/test-son-01/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          meta: {</span></span>
<span class="line"><span style="color:#24292E;">            title: </span><span style="color:#032F62;">&quot;test-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            level: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          children: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              path: </span><span style="color:#032F62;">&quot;/test/test-son-01/test-son-01-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              name: </span><span style="color:#032F62;">&quot;test-son-01-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#032F62;">&quot;@/views/test/children/test-son-01/children/test-son-01-son-01/index.vue&quot;</span></span>
<span class="line"><span style="color:#24292E;">                ),</span></span>
<span class="line"><span style="color:#24292E;">              meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&quot;test-son-01-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                level: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              path: </span><span style="color:#032F62;">&quot;/test/test-son-01/test-son-01-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              name: </span><span style="color:#032F62;">&quot;test-son-01-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#032F62;">&quot;@/views/test/children/test-son-01/children/test-son-01-son-02/index.vue&quot;</span></span>
<span class="line"><span style="color:#24292E;">                ),</span></span>
<span class="line"><span style="color:#24292E;">              meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&quot;test-son-01-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                level: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          ],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          path: </span><span style="color:#032F62;">&quot;/test/test-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&quot;test-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/test/children/test-son-02/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          meta: {</span></span>
<span class="line"><span style="color:#24292E;">            title: </span><span style="color:#032F62;">&quot;test-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            level: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          children: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              path: </span><span style="color:#032F62;">&quot;/test/test-son-02/test-son-02-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              name: </span><span style="color:#032F62;">&quot;test-son-02-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#032F62;">&quot;@/views/test/children/test-son-02/children/test-son-02-son-01/index.vue&quot;</span></span>
<span class="line"><span style="color:#24292E;">                ),</span></span>
<span class="line"><span style="color:#24292E;">              meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&quot;test-son-02-son-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                level: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              path: </span><span style="color:#032F62;">&quot;/test/test-son-02/test-son-02-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              name: </span><span style="color:#032F62;">&quot;test-son-02-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#032F62;">&quot;@/views/test/children/test-son-02/children/test-son-02-son-02/index.vue&quot;</span></span>
<span class="line"><span style="color:#24292E;">                ),</span></span>
<span class="line"><span style="color:#24292E;">              meta: {</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&quot;test-son-02-son-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: </span><span style="color:#032F62;">&quot;icon-folder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                level: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          ],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&quot;/blog&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;blog&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/views/blog/index.vue&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: i18n.global.</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;menu.blog&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        icon: </span><span style="color:#032F62;">&quot;icon-launch&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        level: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ];</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>使用</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">div class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;navigations-container&quot;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">-</span><span style="color:#B392F0;">menu</span><span style="color:#E1E4E8;"> :selected</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">keys</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;[ $route.path ]&quot;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">NavigateItems</span><span style="color:#E1E4E8;"> :routes</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;getterInitRoutes&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">menu</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">div</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">template</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">script lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;ts&#39;</span><span style="color:#E1E4E8;"> setup</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 路由表</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getterInitRoutes } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/router/routes&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 组件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> NavigateItems </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./NavigateItems.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// hooks</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useRoute } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue-router&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 路由</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$route</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useRoute</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">style scoped lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;scss&#39;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">.navigations</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">container {</span></span>
<span class="line"><span style="color:#E1E4E8;">  flex</span><span style="color:#F97583;">-</span><span style="color:#B392F0;">grow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">style</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">div class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;navigations-container&quot;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">-</span><span style="color:#6F42C1;">menu</span><span style="color:#24292E;"> :selected</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">keys</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;[ $route.path ]&quot;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">&lt;</span><span style="color:#6F42C1;">NavigateItems</span><span style="color:#24292E;"> :routes</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;getterInitRoutes&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">menu</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">div</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">template</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">script lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;ts&#39;</span><span style="color:#24292E;"> setup</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 路由表</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getterInitRoutes } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/router/routes&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 组件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> NavigateItems </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./NavigateItems.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// hooks</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useRoute } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 路由</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$route</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useRoute</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">style scoped lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;scss&#39;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">.navigations</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">container {</span></span>
<span class="line"><span style="color:#24292E;">  flex</span><span style="color:#D73A49;">-</span><span style="color:#6F42C1;">grow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">style</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h4 id="_7-渲染动态内容" tabindex="-1">7.渲染动态内容 <a class="header-anchor" href="#_7-渲染动态内容" aria-label="Permalink to &quot;7.渲染动态内容&quot;">​</a></h4><p>​ 例如要渲染 确定删除 xx 吗？的国际化</p><p>定义：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">en</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">deleteTip</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&#39;Are you sure to delete {username}&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#B392F0;">cn</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">deleteTip</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&#39;你确定要删除 {username} 吗&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">en</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">deleteTip</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&#39;Are you sure to delete {username}&#39;</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6F42C1;">cn</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">deleteTip</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&#39;你确定要删除 {username} 吗&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>使用</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;deleteTip&quot;</span><span style="color:#E1E4E8;">, { username: </span><span style="color:#9ECBFF;">&quot;张三&quot;</span><span style="color:#E1E4E8;"> });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$t</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;deleteTip&quot;</span><span style="color:#24292E;">, { username: </span><span style="color:#032F62;">&quot;张三&quot;</span><span style="color:#24292E;"> });</span></span></code></pre></div><h4 id="_8-多语言面包屑" tabindex="-1">8.多语言面包屑 <a class="header-anchor" href="#_8-多语言面包屑" aria-label="Permalink to &quot;8.多语言面包屑&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">div class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;breadcrumb-container&quot;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">breadcrumb</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">breadcrumb</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">item @click</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;() =&gt; onHandleClick(item.path)&quot;</span><span style="color:#E1E4E8;"> v</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">for</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;item in list&quot;</span><span style="color:#E1E4E8;"> :key</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;item.path&quot;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {{ item.title }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">breadcrumb</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">item</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">breadcrumb</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">div</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">template</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">script lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;ts&#39;</span><span style="color:#E1E4E8;"> setup</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useRoute, useRouter } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue-router&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { computed } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { RouteRecordRaw } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue-router&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getterInitRoutes } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/router/routes&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useRouter</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">route</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useRoute</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 当前激活的路由</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nowRoutes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> route.matched</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 遍历当前激活的路由表 获取对应的title</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> nowRoutes.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ele</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: ele.path,</span></span>
<span class="line"><span style="color:#E1E4E8;">      title:</span><span style="color:#B392F0;">getRouteTitle</span><span style="color:#E1E4E8;">(ele.path,getterInitRoutes.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据当前路由的path获取对应的title</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getRouteTitle</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">path</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">routes</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RouteRecordRaw</span><span style="color:#E1E4E8;">[])</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> title </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 遍历当前层级的路由 获取对应的title</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(routes.</span><span style="color:#B392F0;">some</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ele</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (ele.path </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> path) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (ele.meta) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ele.meta.title</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ele.path</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 若找到了则直接返回对应title</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> title</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 若没找到就遍历当前层的每一级路由，递归调用对应子路由</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> routes.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 若有子孩子就递归调用 没有就跳过调用递归函数</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (routes[ i ].children) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getRouteTitle</span><span style="color:#E1E4E8;">(path, routes[ i ].children </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RouteRecordRaw</span><span style="color:#E1E4E8;">[])</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 若找到了 并且不为not found（因为第一次调用可能未找到则返回值为not found，但后续子路由还没开始找呢） 没找到则直接跳过，遍历下一个路由</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res</span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;">res</span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;">&#39;not found&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> res</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 兜底的 若遍历一直没找到就是not found</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;not found&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onHandleClick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">path</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  router.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(path)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">defineOptions</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;Breadcrumbs&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">div class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;breadcrumb-container&quot;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">breadcrumb</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">breadcrumb</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">item @click</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;() =&gt; onHandleClick(item.path)&quot;</span><span style="color:#24292E;"> v</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">for</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;item in list&quot;</span><span style="color:#24292E;"> :key</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;item.path&quot;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        {{ item.title }}</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">breadcrumb</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">item</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">breadcrumb</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">div</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">template</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">script lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;ts&#39;</span><span style="color:#24292E;"> setup</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useRoute, useRouter } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { computed } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { RouteRecordRaw } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getterInitRoutes } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/router/routes&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useRouter</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">route</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useRoute</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">list</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 当前激活的路由</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nowRoutes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> route.matched</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 遍历当前激活的路由表 获取对应的title</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> nowRoutes.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#E36209;">ele</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      path: ele.path,</span></span>
<span class="line"><span style="color:#24292E;">      title:</span><span style="color:#6F42C1;">getRouteTitle</span><span style="color:#24292E;">(ele.path,getterInitRoutes.value)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据当前路由的path获取对应的title</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getRouteTitle</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">path</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">routes</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RouteRecordRaw</span><span style="color:#24292E;">[])</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> title </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 遍历当前层级的路由 获取对应的title</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(routes.</span><span style="color:#6F42C1;">some</span><span style="color:#24292E;">(</span><span style="color:#E36209;">ele</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (ele.path </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> path) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (ele.meta) {</span></span>
<span class="line"><span style="color:#24292E;">        title </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ele.meta.title</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        title </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ele.path</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 若找到了则直接返回对应title</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> title</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 若没找到就遍历当前层的每一级路由，递归调用对应子路由</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> routes.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 若有子孩子就递归调用 没有就跳过调用递归函数</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (routes[ i ].children) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getRouteTitle</span><span style="color:#24292E;">(path, routes[ i ].children </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RouteRecordRaw</span><span style="color:#24292E;">[])</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 若找到了 并且不为not found（因为第一次调用可能未找到则返回值为not found，但后续子路由还没开始找呢） 没找到则直接跳过，遍历下一个路由</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res</span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;">res</span><span style="color:#D73A49;">!==</span><span style="color:#032F62;">&#39;not found&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 兜底的 若遍历一直没找到就是not found</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;not found&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onHandleClick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">path</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(path)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">defineOptions</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;Breadcrumbs&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h4 id="_9-多语言配置网页标题-vue-路由" tabindex="-1">9.多语言配置网页标题（Vue 路由） <a class="header-anchor" href="#_9-多语言配置网页标题-vue-路由" aria-label="Permalink to &quot;9.多语言配置网页标题（Vue 路由）&quot;">​</a></h4><p>​ 网页标题也得适配国际化，在主动切换语言时也需要根据当前路由来设置对应的网页标题。</p><h5 id="方案一" tabindex="-1">方案一 <a class="header-anchor" href="#方案一" aria-label="Permalink to &quot;方案一&quot;">​</a></h5><p>​ 在路由元数据<code>route.meta</code>中，添加一个属性<code>title</code>，其值为配置<code>i18n</code>中对应定义好的 key，在需要设置网页标题时只需要获取当前激活的路由元数据<code>route.meta</code>中的<code>title</code>，即可获得需要转换的 key，通过<code>i18n</code>即可获取当前语言下的文本值。</p><h6 id="_0-配置路由元数据" tabindex="-1">0.配置路由元数据 <a class="header-anchor" href="#_0-配置路由元数据" aria-label="Permalink to &quot;0.配置路由元数据&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">routes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path:</span><span style="color:#9ECBFF;">&quot;/home&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        component:</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">., </span><span style="color:#6A737D;">// 省略</span></span>
<span class="line"><span style="color:#E1E4E8;">        meta:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            title:</span><span style="color:#9ECBFF;">&#39;home&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 需要在i18n配置好这个 home 的国际化值</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        path:</span><span style="color:#032F62;">&quot;/home&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        component:</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">., </span><span style="color:#6A737D;">// 省略</span></span>
<span class="line"><span style="color:#24292E;">        meta:{</span></span>
<span class="line"><span style="color:#24292E;">            title:</span><span style="color:#032F62;">&#39;home&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 需要在i18n配置好这个 home 的国际化值</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><h6 id="_1-页面切换后的标题国际化aftereach" tabindex="-1">1.页面切换后的标题国际化<code>afterEach</code> <a class="header-anchor" href="#_1-页面切换后的标题国际化aftereach" aria-label="Permalink to &quot;1.页面切换后的标题国际化\`afterEach\`&quot;">​</a></h6><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">afterGuards</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NavigationHookAfter</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  nprogress.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// to为路由元信息</span></span>
<span class="line"><span style="color:#E1E4E8;">  to.meta?.title</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> (document.title </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">i18n</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">global</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">t</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">to</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">meta</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">title</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} | Photo Share\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (document.title </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Photo Share&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">afterGuards</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NavigationHookAfter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">to</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  nprogress.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// to为路由元信息</span></span>
<span class="line"><span style="color:#24292E;">  to.meta?.title</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> (document.title </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">i18n</span><span style="color:#032F62;">.</span><span style="color:#24292E;">global</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">t</span><span style="color:#032F62;">(</span><span style="color:#24292E;">to</span><span style="color:#032F62;">.</span><span style="color:#24292E;">meta</span><span style="color:#032F62;">.</span><span style="color:#24292E;">title</span><span style="color:#032F62;">)</span><span style="color:#032F62;">} | Photo Share\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (document.title </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Photo Share&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h6 id="_2-主动设置语言的标题国际化" tabindex="-1">2.主动设置语言的标题国际化 <a class="header-anchor" href="#_2-主动设置语言的标题国际化" aria-label="Permalink to &quot;2.主动设置语言的标题国际化&quot;">​</a></h6><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 切换语言</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">value</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">toggleLocale</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LOCALE_VALUE</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  locale.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">  i18n.global.locale </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 根据当前激活的路由来设置标题国际化</span></span>
<span class="line"><span style="color:#E1E4E8;">  route.meta?.title</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> (document.title </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">i18n</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">global</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">t</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">route</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">meta</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">title</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} | Photo Share\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (document.title </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Photo Share&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 切换语言</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">value</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toggleLocale</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">value</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LOCALE_VALUE</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  locale.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">  i18n.global.locale </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 根据当前激活的路由来设置标题国际化</span></span>
<span class="line"><span style="color:#24292E;">  route.meta?.title</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> (document.title </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">i18n</span><span style="color:#032F62;">.</span><span style="color:#24292E;">global</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">t</span><span style="color:#032F62;">(</span><span style="color:#24292E;">route</span><span style="color:#032F62;">.</span><span style="color:#24292E;">meta</span><span style="color:#032F62;">.</span><span style="color:#24292E;">title</span><span style="color:#032F62;">)</span><span style="color:#032F62;">} | Photo Share\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (document.title </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Photo Share&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div>`,56),c=[t];function E(r,y,i,u,F,q){return n(),a("div",null,c)}const C=s(e,[["render",E]]);export{d as __pageData,C as default};
