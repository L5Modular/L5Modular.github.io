import{c as n}from"./app.d06ad9c0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=n(`<h1 id="artisan-commands" tabindex="-1"><a class="header-anchor" href="#artisan-commands" aria-hidden="true">#</a> Artisan Commands</h1><p>To make your life easier, L5Modular includes a lot of artisan commands. Most of them are extended <code>make</code> commands and will behave like the originals but will also take a <code>--module</code> option.</p><br><br><h2 id="make-module" tabindex="-1"><a class="header-anchor" href="#make-module" aria-hidden="true">#</a> Make Module</h2><p>This command generates a full module.<br> You can configure which structure and which components should be generated.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new module (folder structure)

Usage:
  make:module &lt;name&gt;

Arguments:
  name                  Module name.

Options:
  -h, --help            Display this help message
  -q, --quiet           Do not output any message
  -V, --version         Display this application version
      --ansi            Force ANSI output
      --no-ansi         Disable ANSI output
  -n, --no-interaction  Do not ask any interactive question
      --env[=ENV]       The environment the command should run under
  -v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></details><br><br><h2 id="make-controller" tabindex="-1"><a class="header-anchor" href="#make-controller" aria-hidden="true">#</a> Make Controller</h2><p>This command generates a controller into a module.<br> By passing in options you can define what kind of controller and in which module it should be generated.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:controller</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new controller class in a module

Usage:
  make:module:controller [options] [--] &lt;name&gt;

Arguments:
  name                   The name of the class

Options:
      --api              Exclude the create and edit methods from the controller.
      --force            Create the class even if the controller already exists
  -i, --invokable        Generate a single method, invokable controller class.
  -m, --model[=MODEL]    Generate a resource controller for the given model.
  -p, --parent[=PARENT]  Generate a nested resource controller class.
  -r, --resource         Generate a resource controller class.
  -w, --welcome          Generate a controller with a welcome method.
      --module[=MODULE]  Generate a controller in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>Example:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:controller MemberController --module=HelloWorld --model=Member</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>This would create a RESTful Resource Controller <code>app/Modules/HelloWorld/Http/Controllers/MemberController.php</code> and ask you if you want to generate the <code>Member</code> model as well, if it doesn&#39;t already exist.</p></details><br><br><h2 id="make-model" tabindex="-1"><a class="header-anchor" href="#make-model" aria-hidden="true">#</a> Make Model</h2><p>This command generates a model into a module.<br> By passing in options you can define in which module it should be generated and whether other components should also be generated or not.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:model</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new model class in a module

Usage:
  make:module:model [options] [--] &lt;name&gt;

Arguments:
  name                   The name of the class

Options:
  -a, --all              Generate a migration, seeder, factory, and resource controller for the model
  -c, --controller       Create a new controller for the model
  -f, --factory          Create a new factory for the model
      --force            Create the class even if the model already exists
  -m, --migration        Create a new migration file for the model
  -s, --seed             Create a new seeder file for the model
  -p, --pivot            Indicates if the generated model should be a custom intermediate table model
  -r, --resource         Indicates if the generated controller should be a resource controller
      --api              Indicates if the generated controller should be an API controller
      --module[=MODULE]  Generate a model in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></details><br><br><h2 id="make-resource" tabindex="-1"><a class="header-anchor" href="#make-resource" aria-hidden="true">#</a> Make Resource</h2><p>This command generates a resource into a module.<br> By passing in options you can define what kind of resource and in which module it should be generated.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:resource</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new resource class in a module

Usage:
  make:module:resource [options] [--] &lt;name&gt;

Arguments:
  name                   The name of the class

Options:
  -c, --collection       Create a resource collection
      --module[=MODULE]  Generate a resource in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></details><br><br><h2 id="make-request" tabindex="-1"><a class="header-anchor" href="#make-request" aria-hidden="true">#</a> Make Request</h2><p>This command generates a request into a module.<br> By passing in the corresponding option you can define in which module the request class should be generated.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:request</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new request class in a module

Usage:
  make:module:request [options] [--] &lt;name&gt;

Arguments:
  name                   The name of the class

Options:
      --module[=MODULE]  Generate a request in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></details><br><br><h2 id="make-mail" tabindex="-1"><a class="header-anchor" href="#make-mail" aria-hidden="true">#</a> Make Mail</h2><p>This command generates a mail into a module.<br> By passing in options you can define in which module it should be generated and whether a markdown view should also be generated or not.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:mail</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new mail class in a module

Usage:
  make:module:mail [options] [--] &lt;name&gt;

Arguments:
  name                       The name of the class

Options:
  -f, --force                Create the class even if the mailable already exists
  -m, --markdown[=MARKDOWN]  Create a new Markdown template for the mailable
      --module[=MODULE]      Generate a mailable in a certain module
  -h, --help                 Display this help message
  -q, --quiet                Do not output any message
  -V, --version              Display this application version
      --ansi                 Force ANSI output
      --no-ansi              Disable ANSI output
  -n, --no-interaction       Do not ask any interactive question
      --env[=ENV]            The environment the command should run under
  -v|vv|vvv, --verbose       Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></details><br><br><h2 id="make-notification" tabindex="-1"><a class="header-anchor" href="#make-notification" aria-hidden="true">#</a> Make Notification</h2><p>This command generates a notification into a module.<br> By passing in options you can define in which module it should be generated and whether a markdown view should also be generated or not.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:notification</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new notification class in a module

Usage:
  make:module:notification [options] [--] &lt;name&gt;

Arguments:
  name                       The name of the class

Options:
  -f, --force                Create the class even if the notification already exists
  -m, --markdown[=MARKDOWN]  Create a new Markdown template for the notification
      --module[=MODULE]      Generate a notification in a certain module
  -h, --help                 Display this help message
  -q, --quiet                Do not output any message
  -V, --version              Display this application version
      --ansi                 Force ANSI output
      --no-ansi              Disable ANSI output
  -n, --no-interaction       Do not ask any interactive question
      --env[=ENV]            The environment the command should run under
  -v|vv|vvv, --verbose       Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></details><br><br><h2 id="make-event" tabindex="-1"><a class="header-anchor" href="#make-event" aria-hidden="true">#</a> Make Event</h2><p>This command generates a event into a module.<br> By passing in the corresponding option you can define in which module the event class should be generated.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:event</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new event class in a module

Usage:
  make:module:event [options] [--] &lt;name&gt;

Arguments:
  name                   The name of the class

Options:
      --module[=MODULE]  Generate an event in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></details><br><br><h2 id="make-listener" tabindex="-1"><a class="header-anchor" href="#make-listener" aria-hidden="true">#</a> Make Listener</h2><p>This command generates a listener into a module.<br> By passing in options you can define in which module it should be generated, also the event the listener should listen for and whether the listener should be queued or not.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:listener</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new listener class in a module

Usage:
  make:module:listener [options] [--] &lt;name&gt;

Arguments:
  name                   The name of the class

Options:
  -e, --event[=EVENT]    The event class being listened for
      --queued           Indicates the event listener should be queued
      --module[=MODULE]  Generate a listener in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></details><br><br><h2 id="make-observer" tabindex="-1"><a class="header-anchor" href="#make-observer" aria-hidden="true">#</a> Make Observer</h2><p>This command generates a observer into a module.<br> By passing in options you can define in which module it should be generated and the model the observer should apply to.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:observer</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new observer class in a module

Usage:
  make:module:observer [options] [--] &lt;name&gt;

Arguments:
  name                   The name of the class

Options:
  -m, --model[=MODEL]    The model that the observer applies to.
      --module[=MODULE]  Generate an observer in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></details><br><br><h2 id="make-job" tabindex="-1"><a class="header-anchor" href="#make-job" aria-hidden="true">#</a> Make Job</h2><p>This command generates a job into a module.<br> By passing in options you can define in which module it should be generated and whether the job should be synchronous or not.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:job</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new job class in a module

Usage:
  make:module:job [options] [--] &lt;name&gt;

Arguments:
  name                   The name of the class

Options:
      --sync             Indicates that job should be synchronous
      --module[=MODULE]  Generate a job in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></details><br><br><h2 id="make-rule" tabindex="-1"><a class="header-anchor" href="#make-rule" aria-hidden="true">#</a> Make Rule</h2><p>This command generates a validation rule into a module.<br> By passing in the corresponding option you can define in which module the rule should be generated.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:rule</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new rule class in a module

Usage:
  make:module:rule [options] [--] &lt;name&gt;

Arguments:
  name                   The name of the class

Options:
      --module[=MODULE]  Generate a rule in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></details><br><br><h2 id="make-view" tabindex="-1"><a class="header-anchor" href="#make-view" aria-hidden="true">#</a> Make View</h2><p>This command generates a blade view into a module.<br> By passing in the corresponding option you can define in which module the view should be generated.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:view</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new blade view file in a module

Usage:
  make:module:view [options] [--] &lt;name&gt;

Arguments:
  name                   The name for the blade view

Options:
      --module[=MODULE]  Generate a view file in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></details><br><br><h2 id="make-translation" tabindex="-1"><a class="header-anchor" href="#make-translation" aria-hidden="true">#</a> Make Translation</h2><p>This command generates a translation into a module.<br> By passing in the corresponding option you can define in which module the translation should be generated.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:translation</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new translation file in a module

Usage:
  make:module:translation [options] [--] &lt;name&gt;

Arguments:
  name                   The language short code of the translation

Options:
      --module[=MODULE]  Generate a translation file in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></details><br><br><h2 id="make-route" tabindex="-1"><a class="header-anchor" href="#make-route" aria-hidden="true">#</a> Make Route</h2><p>This command generates route files into a module.<br> By passing in options you can define in which module and what kind of route files should be generated.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:route</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new route file in a module

Usage:
  make:module:route [options]

Options:
      --simple           Generate a simple routes.php file
      --web              Generate a web route file
      --api              Generate an api route file
      --module[=MODULE]  Generate a route file in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></details><br><br><h2 id="make-migration" tabindex="-1"><a class="header-anchor" href="#make-migration" aria-hidden="true">#</a> Make Migration</h2><p>This command generates a migration into a module.<br> By passing in options you can define in which module it should be generated, also amongst others the table to be created.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:migration</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new migration file in a module

Usage:
  make:module:migration [options] [--] &lt;name&gt;

Arguments:
  name                   The name of the migration

Options:
      --create[=CREATE]  The table to be created
      --table[=TABLE]    The table to migrate
      --module[=MODULE]  Generate a migration in a certain module
      --path[=PATH]      The location where the migration file should be created
      --fullpath         Output the full path of the migration
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></details><br><br><h2 id="make-seeder" tabindex="-1"><a class="header-anchor" href="#make-seeder" aria-hidden="true">#</a> Make Seeder</h2><p>This command generates a seeder into a module.<br> By passing in the corresponding option you can define in which module the seeder should be generated.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:seeder</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new seeder class in a module

Usage:
  make:module:seeder [options] [--] &lt;name&gt;

Arguments:
  name                   The name of the class

Options:
      --module[=MODULE]  Generate a seeder in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></details><br><br><h2 id="make-factory" tabindex="-1"><a class="header-anchor" href="#make-factory" aria-hidden="true">#</a> Make Factory</h2><p>This command generates a factory into a module.<br> By passing in options you can define in which module it should be generated and the model.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:factory</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Arguments / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new model factory in a module

Usage:
  make:module:factory [options] [--] &lt;name&gt;

Arguments:
  name                   The name of the class

Options:
  -m, --model[=MODEL]    The name of the model
      --module[=MODULE]  Generate a factory in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></details><br><br><h2 id="make-config" tabindex="-1"><a class="header-anchor" href="#make-config" aria-hidden="true">#</a> Make Config</h2><p>This command generates a config file into a module.<br> By passing in the corresponding option you can define in which module the config file should be generated.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:config</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new config file in a module

Usage:
  make:module:config [options]

Options:
      --module[=MODULE]  Generate a config file in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details><br><br><h2 id="make-helpers" tabindex="-1"><a class="header-anchor" href="#make-helpers" aria-hidden="true">#</a> Make Helpers</h2><p>This command generates a helpers file into a module.<br> By passing in the corresponding option you can define in which module the helpers file should be generated.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan make:module:helpers</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  Create a new helpers file in a module

Usage:
  make:module:helpers [options]

Options:
      --module[=MODULE]  Generate a helpers file in a certain module
  -h, --help             Display this help message
  -q, --quiet            Do not output any message
  -V, --version          Display this application version
      --ansi             Force ANSI output
      --no-ansi          Disable ANSI output
  -n, --no-interaction   Do not ask any interactive question
      --env[=ENV]        The environment the command should run under
  -v|vv|vvv, --verbose   Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details><br><br><h2 id="module-list" tabindex="-1"><a class="header-anchor" href="#module-list" aria-hidden="true">#</a> Module List</h2><p>This command simply lists all components and their status.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">php artisan module:list</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details><summary>Description / Usage / Options</summary><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#abb2bf;">Description:
  List the application&#39;s modules

Usage:
  module:list

Options:
  -h, --help            Display this help message
  -q, --quiet           Do not output any message
  -V, --version         Display this application version
      --ansi            Force ANSI output
      --no-ansi         Disable ANSI output
  -n, --no-interaction  Do not ask any interactive question
      --env[=ENV]       The environment the command should run under
  -v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details>`,128);function r(l,i){return a}var t=s(e,[["render",r]]);export{t as default};
