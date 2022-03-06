import{r as o,o as p,a as t,b as l,d as s,w as a,F as i,c as r,e}from"./app.d06ad9c0.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";var d="/assets/l5modular-screenshot.png";const b={},u=r(`<h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>The easiest way to install this package is through your terminal via Composer.<br> Run the following command in a bash prompt from your projects root.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">composer require artem-schander/l5-modular</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">REQUIREMENTS</p><p>L5Modular v2 requires <strong>at least</strong> PHP 7.2 and Laravel 5.7<br> Older PHP / Laravel versions are supported by L5Modular v1.</p></div><br><br><h2 id="generating-a-module" tabindex="-1"><a class="header-anchor" href="#generating-a-module" aria-hidden="true">#</a> Generating A Module</h2><p>The built in Artisan command <code>php artisan make:module hello-world</code> generates a ready to use <code>HelloWorld</code> module in the <code>app/Modules</code> folder.</p><p>The welcome method in the generated controller <code>Http/Controllers/HelloWorldController.php</code>, the corresponding route in <code>routes/web.php</code> and the view <code>welcome.blade.php</code>, make it easy to dive in.</p><p>After executing the mentioned make command, you should be able to see the output of the view <code>resources/views/welcome.blade.php</code> by opening <code>http://laravel-project.dev/hello-world</code> in your browser.</p><p><img src="`+d+'" alt="welcome screen acreenshot"></p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The host can differ depending on your local development environment</p></div><br><br><h4 id="default-module" tabindex="-1"><a class="header-anchor" href="#default-module" aria-hidden="true">#</a> Default Module</h4>',16),m=e("Unless "),h=e("otherwise configured"),_=e(", this is how the generated module would look like."),g=r(`<div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">laravel-project/
    app/
    \u2514\u2500\u2500 Modules/
        \u2514\u2500\u2500 HelloWorld
            \u251C\u2500\u2500 Http
            \u2502\xA0\xA0 \u2514\u2500\u2500 Controllers
            \u2502\xA0\xA0     \u2514\u2500\u2500 HelloWorldController.php
            \u251C\u2500\u2500 Models
            \u2502\xA0\xA0 \u2514\u2500\u2500 HelloWorld.php
            \u251C\u2500\u2500 resources
            \u2502\xA0\xA0 \u251C\u2500\u2500 lang
            \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 en.php
            \u2502\xA0\xA0 \u2514\u2500\u2500 views
            \u2502\xA0\xA0     \u2514\u2500\u2500 welcome.blade.php
            \u2514\u2500\u2500 routes
                \u251C\u2500\u2500 api.php
                \u2514\u2500\u2500 web.php
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><br><br><h4 id="custom-module" tabindex="-1"><a class="header-anchor" href="#custom-module" aria-hidden="true">#</a> Custom Module</h4>`,4),f=e("The said command "),v=e("can be configured"),w=e(" to generate modules completely differently structured and up to the following extent."),H=l("br",null,null,-1),y=e(" Of course it is also possible to "),x=e("add any kind of additional classes"),W=e(" to any module, as long as it follows the PSR-4 autoloading convention."),k=r(`<div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">laravel-project/
    app/
    \u2514\u2500\u2500 Modules/
        \u2514\u2500\u2500 HelloWorld
            \u251C\u2500\u2500 Events
            \u2502\xA0\xA0 \u2514\u2500\u2500 HelloWorld.php
            \u251C\u2500\u2500 Http
            \u2502\xA0\xA0 \u251C\u2500\u2500 Controllers
            \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 HelloWorldController.php
            \u2502\xA0\xA0 \u251C\u2500\u2500 Requests
            \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 HelloWorld.php
            \u2502\xA0\xA0 \u2514\u2500\u2500 Resources
            \u2502\xA0\xA0     \u2514\u2500\u2500 HelloWorld.php
            \u251C\u2500\u2500 Jobs
            \u2502\xA0\xA0 \u2514\u2500\u2500 HelloWorld.php
            \u251C\u2500\u2500 Listeners
            \u2502\xA0\xA0 \u2514\u2500\u2500 HelloWorld.php
            \u251C\u2500\u2500 Mail
            \u2502\xA0\xA0 \u2514\u2500\u2500 HelloWorld.php
            \u251C\u2500\u2500 Models
            \u2502\xA0\xA0 \u2514\u2500\u2500 HelloWorld.php
            \u251C\u2500\u2500 Notifications
            \u2502\xA0\xA0 \u2514\u2500\u2500 HelloWorld.php
            \u251C\u2500\u2500 Observers
            \u2502\xA0\xA0 \u2514\u2500\u2500 HelloWorld.php
            \u251C\u2500\u2500 Rules
            \u2502\xA0\xA0 \u2514\u2500\u2500 HelloWorld.php
            \u251C\u2500\u2500 config.php
            \u251C\u2500\u2500 database
            \u2502\xA0\xA0 \u251C\u2500\u2500 factories
            \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 HelloWorldFactory.php
            \u2502\xA0\xA0 \u251C\u2500\u2500 migrations
            \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 2020_04_19_111656_create_foo_bars_table.php
            \u2502\xA0\xA0 \u2514\u2500\u2500 seeds
            \u2502\xA0\xA0     \u2514\u2500\u2500 HelloWorldSeeder.php
            \u251C\u2500\u2500 helpers.php
            \u251C\u2500\u2500 resources
            \u2502\xA0\xA0 \u251C\u2500\u2500 lang
            \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 en.php
            \u2502\xA0\xA0 \u2514\u2500\u2500 views
            \u2502\xA0\xA0     \u2514\u2500\u2500 welcome.blade.php
            \u2514\u2500\u2500 routes
                \u251C\u2500\u2500 api.php
                \u2514\u2500\u2500 web.php
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div>`,1);function M(C,R){const n=o("RouterLink");return p(),t(i,null,[u,l("p",null,[m,s(n,{to:"/configuration/"},{default:a(()=>[h]),_:1}),_]),g,l("p",null,[f,s(n,{to:"/configuration/"},{default:a(()=>[v]),_:1}),w,H,y,s(n,{to:"/usage/#loading-additional-classes/"},{default:a(()=>[x]),_:1}),W]),k],64)}var T=c(b,[["render",M]]);export{T as default};
