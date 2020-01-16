(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{843:function(e,a,n){e.exports={marked:"marked-module__marked___361eJ"}},898:function(e,a,n){"use strict";n.r(a);var s=n(0),t=n.n(s),o=n(2),i=n.n(o),c=n(843),r=n.n(c),p=i.a.bind(r.a);a.default=function(){return t.a.createElement("div",{dir:"ltr",className:p("marked"),dangerouslySetInnerHTML:{__html:'<h1 id="v6-0-0-upgrade-guide"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#v6-0-0-upgrade-guide"><span class="icon icon-link" /></a>v6.0.0 Upgrade Guide</h1><p>This document will provide information on upgrading from Terra Dev Site <code>5.x.x</code> to <code>6.0.0</code>.</p>\n<h2 id="browser-router"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#browser-router"><span class="icon icon-link" /></a>Browser Router</h2><p>Previously terra-dev-site used a hash router <code>/#/</code> to display its pages. This interferes with anchor tags which also use the hash to denote where to go on the page. To resolve this terra-dev-site has switched to a browser router. Current links using the hash router will still resolve, slash routes with the hash will be redirected to the equivalent non hash route.</p>\n<p>To support hash routing with path based routing for gh-pages style deployments, you must supply an env variable, <code>TERRA_DEV_SITE_PUBLIC_PATH</code>, describing the path for assets to be served from.</p>\n<p>For example, for a page hosted on github pages with a url of: <a href="http://cerner.github.com/terra-dev-site.">http://cerner.github.com/terra-dev-site.</a> The environment variable should be set as follows.</p>\n<pre><code class="codeblock language-bash">TERRA_DEV_SITE_PUBLIC_PATH=&#39;/terra-dev-site/&#39;</code></pre>\n<p>Without the environment variable set assets will assume they are served from <code>/</code> when they should be served from <code>/terra-dev-site/</code></p>\n<h2 id="site-config"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#site-config"><span class="icon icon-link" /></a>site.config</h2><p>A few sections have been removed from site.config.</p>\n<ul>\n<li><p>Theme import - The need for this option has been removed with the aggregate-themes project.</p>\n</li>\n<li><p>Extension config - The new navigation has a tighter definition of extensions and the github link no longer makes sense as an extension. Extensions are still customizable but the api has changed.</p>\n</li>\n<li><p>Logo config removed. It&#39;s now best practice to not have an app logo.</p>\n</li>\n</ul>\n<h2 id="navigation-config"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#navigation-config"><span class="icon icon-link" /></a>navigation.config</h2><ul>\n<li>Hide - The option to hide a navigation tab has been removed. This option was always a little weird. We wanted to hide the test tab for terra-ui and have access to it for sites with tests. It has caused discoverability issues and it&#39;s best if we just show the tab if available.</li>\n</ul>\n<h2 id="dynamic-imports"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#dynamic-imports"><span class="icon icon-link" /></a>Dynamic Imports</h2><p>The code generated by terra dev site has always required transpilation, but with the addition of code splitting dynamic imports are required. No changes are needed if you are using babel 7.5 and babel-preset-env</p>\n<h2 id="wdio-config-removed"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#wdio-config-removed"><span class="icon icon-link" /></a>WDIO config removed</h2><p>The wdio config was paired down to almost nothing so we decided to fully remove it. All it contained was setting the <code>webpackConfig</code> field to the terra-dev-site webpack config. To correct this either:</p>\n<h3 id="create-a-root-level-webpack-config-extending-terra-dev-site-39-s-config-and-use-the-terra-toolkit-wdio-config"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#create-a-root-level-webpack-config-extending-terra-dev-site-39-s-config-and-use-the-terra-toolkit-wdio-config"><span class="icon icon-link" /></a>Create a root level webpack config extending terra-dev-site&#39;s config and use the terra-toolkit wdio config</h3><h4 id="package-json"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#package-json"><span class="icon icon-link" /></a>package.json</h4><pre><code class="codeblock language-json">{\n  &quot;scripts&quot;: {\n    &quot;wdio&quot;: &quot;wdio node_modules/terra-toolkit/config/wdio/wdio.conf.js&quot;\n  }\n}</code></pre>\n<h4 id="webpack-config"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#webpack-config"><span class="icon icon-link" /></a>webpack.config</h4><pre><code class="codeblock language-javascript"><span class="token keyword">const</span> terraDevSiteWebpackConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'terra-dev-site/config/webpack/webpack.config\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> terraDevSiteWebpackConfig<span class="token punctuation">;</span></code></pre>\n<h3 id="create-a-root-level-wdio-config-pulling-setting-the-code-webpackconfig-code-variable-to-terra-dev-site-39-s-webpack-config-"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#create-a-root-level-wdio-config-pulling-setting-the-code-webpackconfig-code-variable-to-terra-dev-site-39-s-webpack-config-"><span class="icon icon-link" /></a>Create a root level wdio config pulling setting the <code>webpackConfig</code> variable to terra-dev-site&#39;s webpack config.</h3><h4 id="wdio-config"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#wdio-config"><span class="icon icon-link" /></a>wdio.config</h4><pre><code class="codeblock language-javascript"><span class="token keyword">const</span> wdioConf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'terra-toolkit/config/wdio/wdio.conf\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> webpackConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'terra-dev-site/config/webpack/webpack.config\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>wdioConf<span class="token punctuation">.</span>config<span class="token punctuation">,</span>\n\n  webpackConfig<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nexports<span class="token punctuation">.</span>config <span class="token operator">=</span> config<span class="token punctuation">;</span></code></pre>\n<h2 id="test-updates"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#test-updates"><span class="icon icon-link" /></a>Test Updates</h2><p>With dynamic imports there can now be a slight delay before your test pages load. Changes have been made terra toolkit 5.2.0 to mitigate these issues but if you have a slow page and are seeing timeouts you may have to add a wait for exist check on the &#39;data-terra-dev-site-content&#39; selector.</p>\n<pre><code class="codeblock language-javascript">browser<span class="token punctuation">.</span><span class="token function">waitForExist</span><span class="token punctuation">(</span><span class="token string">\'[data-terra-dev-site-content]\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>Previously with the hash router, a duplicate call to browser.url would result in a no-op. Now with the hash router the duplicate call will behave as a refresh.</p>\n<pre><code class="codeblock language-javascript">browser<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">\'/#/raw/thing/route\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Loads the page at the url</span>\nbrowser<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">\'/#/raw/thing/route\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Previously was a no-op, now reloads the page at the url.</span></code></pre>\n<p>To mitigate this issue re-factor the test to remove the duplicate call to browser.url.</p>\n<p>You may also see some issues with cursor positioning. If items with a hover state no longer appear hovered, try moving the cursor to the item.</p>\n'}})}}}]);
//# sourceMappingURL=22-8e264e64aaf2ad275ed4.js.map