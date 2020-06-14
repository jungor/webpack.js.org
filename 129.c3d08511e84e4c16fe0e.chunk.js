(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{421:function(n,s,e){"use strict";e.r(s),s.default='<p><a href="https://badge.fury.io/js/closure-webpack-plugin"><img src="https://badge.fury.io/js/closure-webpack-plugin.svg" alt="npm version"></a></p>\n<p>This plugin supports the use of Google\'s Closure Tools with webpack.</p>\n<p><strong>Note: This is the webpack 4 branch.</strong></p>\n<p><a href="https://developers.google.com/closure/compiler/">Closure-Compiler</a> is a full optimizing compiler and transpiler.\nIt offers unmatched optimizations, provides type checking and can easily target transpilation to different versions of ECMASCRIPT.</p>\n<p><a href="https://developers.google.com/closure/library/">Closure-Library</a> is a utility library designed for full compatibility\nwith Closure-Compiler. </p>\n<h2 id="older-versions">Older Versions<a href="#older-versions" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>For webpack 3 support, see <a href="https://github.com/webpack-contrib/closure-webpack-plugin/tree/webpack-3">https://github.com/webpack-contrib/closure-webpack-plugin/tree/webpack-3</a></p>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>You must install both the google-closure-compiler package as well as the closure-webpack-plugin.</p>\n<pre><code>npm install --save-dev closure-webpack-plugin google-closure-compiler\n</code></pre>\n<h2 id="usage-example">Usage example<a href="#usage-example" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> ClosurePlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'closure-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    minimizer<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token keyword">new</span> <span class="token class-name">ClosurePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>mode<span class="token punctuation">:</span> <span class="token string">\'STANDARD\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        <span class="token comment">// compiler flags here</span>\n        <span class="token comment">//</span>\n        <span class="token comment">// for debugging help, try these:</span>\n        <span class="token comment">//</span>\n        <span class="token comment">// formatting: \'PRETTY_PRINT\'</span>\n        <span class="token comment">// debug: true,</span>\n        <span class="token comment">// renaming: false</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li>\n<p><strong>platform</strong> - <code>native</code>, <code>java</code> or <code>javascript</code>. Controls which version to use of closure-compiler.\nBy default the plugin will attempt to automatically choose the fastest option available.</p>\n<ul>\n<li><code>JAVASCRIPT</code> does not require the JVM to be installed. Not all flags are supported. </li>\n<li><code>JAVA</code> utilizes the jvm. Utilizes multiple threads for parsing and results in faster compilation for large builds.</li>\n<li><code>NATIVE</code> only available on linux or MacOS. Faster compilation times without requiring a JVM.</li>\n</ul>\n</li>\n<li>\n<p><strong>mode</strong> - <code>STANDARD</code> (default) or <code>AGGRESSIVE_BUNDLE</code>. Controls how the plugin utilizes the compiler.  </p>\n<ul>\n<li><code>STANDARD</code> mode, closure-compiler is used as a direct replacement for other minifiers as well as most Babel transformations.  </li>\n<li><code>AGGRESSIVE_BUNDLE</code> mode, the compiler performs additional optimizations of modules to produce a much smaller file</li>\n</ul>\n</li>\n<li>\n<p><strong>childCompilations</strong> - boolean or function. Defaults to <code>false</code>.\nIn order to decrease build times, this plugin by default only operates on the main compilation.\nPlugins such as extract-text-plugin and html-webpack-plugin run as child compilations and\nusually do not need transpilation or minification. You can enable this for all child compilations\nby setting this option to <code>true</code>. For specific control, the option can be set to a function which\nwill be passed a compilation object.<br>\nExample: <code>function(compilation) { return /html-webpack/.test(compilation.name); }</code>.</p>\n</li>\n<li>\n<p><strong>output</strong> - An object with either <code>filename</code> or <code>chunkfilename</code> properties. Used to override the\noutput file naming for a particular compilation. See <a href="https://webpack.js.org/configuration/output/">https://webpack.js.org/configuration/output/</a>\nfor details.</p>\n</li>\n<li>\n<p><strong>test</strong> - An optional string or regular expression to determine whether a chunk is included in the compilation</p>\n</li>\n<li>\n<p><strong>extraCommandArgs</strong> - Optional string or Array of strings to pass to the google-closure-compiler plugin.\nCan be used to pass flags to the java process.</p>\n</li>\n</ul>\n<h2 id="compiler-flags">Compiler Flags<a href="#compiler-flags" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The plugin controls several compiler flags. The following flags should not be used in any mode:</p>\n<ul>\n<li>module_resolution</li>\n<li>output_wrapper</li>\n<li>dependency_mode</li>\n<li>create_source_map</li>\n<li>module</li>\n<li>entry_point</li>\n</ul>\n<h2 id="aggressive-bundle-mode">Aggressive Bundle Mode<a href="#aggressive-bundle-mode" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>In this mode, the compiler rewrites CommonJS modules and hoists require calls. Some modules are not compatible with this type of rewritting. In particular, hoisting will cause the following code to execute out of order:</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">addPolyfillToFoo</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bar\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>Aggressive Bundle Mode utilizes a custom runtime in which modules within a chunk file are all included in the same scope.\nThis avoids <a href="https://nolanlawson.com/2016/08/15/the-cost-of-small-modules/">the cost of small modules</a>.</p>\n<p>In Aggressive Bundle Mode, a file can only appear in a single output chunk. Use the <a href="/plugins/split-chunks-plugin/">Split Chunks Plugin</a>\nto split duplicated files into a single output chunk. If a module is utilized by more than one chunk, the\nplugin will move it up to the first common parent to prevent code duplication.</p>\n<p>The <a href="/configuration/optimization/#optimizationconcatenatemodules">concatenatedModules optimization</a>\nis not compatible with this mode since Closure-Compiler performs an equivalent optimization).\nThe plugin will emit a warning if this optimization is not disabled.</p>\n<h2 id="multiple-output-languages">Multiple Output Languages<a href="#multiple-output-languages" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>You can add the plugin multiple times. This easily allows you to target multiple output languages.\nUse <code>ECMASCRIPT_2015</code> for modern browsers and <code>ECMASCRIPT5</code> for older browsers.</p>\n<p>Use the <code>output</code> option to change the filenames of specific plugin instances.</p>\n<p>Use <code>&#x3C;script type="module" src="es6_out_path.js"></code> to target modern browsers and\n<code>&#x3C;script nomodule src="es5_out_path.js"></code> for older browsers.</p>\n<p>See the <a href="https://github.com/webpack-contrib/closure-webpack-plugin/tree/master/demo/es5-and-es6">es5 and es6 output demo</a>\nfor an example.</p>\n<h2 id="other-tips-for-use">Other tips for Use<a href="#other-tips-for-use" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li>Don\'t use babel at the same time - closure-compiler is also a transpiler.\nIf you need <a href="https://github.com/google/closure-compiler/wiki/ECMAScript6">features not yet supported</a> by closure-compiler, have babel\nonly target those features. Closure Compiler can transpile async/await - you don\'t need babel for that functionality either.</li>\n</ul>\n<h1 id="closure-library-plugin">Closure Library Plugin<a href="#closure-library-plugin" aria-hidden="true"><span class="icon icon-link"></span></a></h1>\n<p>In order for webpack to recognize <code>goog.require</code>, <code>goog.provide</code>, <code>goog.module</code> and related primitives,\na separate plugin is shipped.</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> ClosurePlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'closure-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">ClosurePlugin<span class="token punctuation">.</span>LibraryPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      closureLibraryBase<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>\n        <span class="token string">\'google-closure-library/closure/goog/base\'</span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n      deps<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'google-closure-library/closure/goog/deps\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token string">\'./public/deps.js\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>The plugin adds extra functionality to support using Closure Library without Closure Compiler.\nThis is typically used during development mode. When the webpack mode is <code>production</code>,\nonly dependency information is provided to webpack as Closure Compiler will natively recognize\nthe Closure Library primitives.</p>\n<p>The Closure Library Plugin is only compatible with the <code>AGGRESSIVE_BUNDLE</code> mode of the Closure-Compiler\nwebpack plugin.</p>\n<h2 id="options-1">Options<a href="#options-1" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li>\n<p><strong>closureLibraryBase</strong> - (optional) string. Path to the base.js file in Closure-Library.</p>\n</li>\n<li>\n<p><strong>deps</strong> - (optional) string or Array. Closures style dependency mappings. Typically generated by the\n<a href="https://developers.google.com/closure/library/docs/depswriter">depswriter.py script</a> included with Closure-Library.</p>\n</li>\n<li>\n<p><strong>extraDeps</strong> - (optional) Object. Mapping of namespace to file path for closure-library provided namespaces.</p>\n</li>\n</ul>\n<h2 id="maintainers">Maintainers<a href="#maintainers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <a href="https://github.com/ChadKillingsworth">\n          <img width="150" alt="" height="150" src="https://avatars.githubusercontent.com/u/1247639?v=3">\n          </br>\n          Chad Killingsworth\n        </a>\n      </td>\n      <td align="center">\n        <a href="https://github.com/d3viant0ne">\n          <img width="150" alt="" height="150" src="https://avatars.githubusercontent.com/u/8420490?v=3">\n          </br>\n          Joshua Wiens\n        </a>\n      </td>\n    </tr>\n  <tbody>\n</table>\n'}}]);