# Getting Started

## Installation

The easiest way to install this package is through your terminal via Composer.  
Run the following command in a bash prompt from your projects root.
```bash
composer require artem-schander/l5-modular
```

::: tip REQUIREMENTS
L5Modular v2 requires **at least** PHP 7.2 and Laravel 5.7  
Older PHP / Laravel versions are supported by L5Modular v1.
:::

<br>
<br>

## Generating A Module

The built in Artisan command `php artisan make:module hello-world` generates a ready to use `HelloWorld` module in the `app/Modules` folder.  

The welcome method in the generated controller `Http/Controllers/HelloWorldController.php`, the corresponding route in `routes/web.php` and the view `welcome.blade.php`, make it easy to dive in.  

After executing the mentioned make command, you should be able to see the output of the view `resources/views/welcome.blade.php` by opening `http://laravel-project.dev/hello-world` in your browser.  

![welcome screen acreenshot](/assets/l5modular-screenshot.png)

::: warning
The host can differ depending on your local development environment
:::



<br>
<br>

#### Default Module

Unless [otherwise configured](/configuration/), this is how the generated module would look like.

```
laravel-project/
    app/
    └── Modules/
        └── HelloWorld
            ├── Http
            │   └── Controllers
            │       └── HelloWorldController.php
            ├── Models
            │   └── HelloWorld.php
            ├── resources
            │   ├── lang
            │   │   └── en.php
            │   └── views
            │       └── welcome.blade.php
            └── routes
                ├── api.php
                └── web.php
```

<br>
<br>

#### Custom Module

The said command [can be configured](/configuration/) to generate modules completely differently structured and up to the following extent.  
Of course it is also possible to [add any kind of additional classes](/usage/#loading-additional-classes/) to any module, as long as it follows the PSR-4 autoloading convention.

```
laravel-project/
    app/
    └── Modules/
        └── HelloWorld
            ├── Events
            │   └── HelloWorld.php
            ├── Http
            │   ├── Controllers
            │   │   └── HelloWorldController.php
            │   ├── Requests
            │   │   └── HelloWorld.php
            │   └── Resources
            │       └── HelloWorld.php
            ├── Jobs
            │   └── HelloWorld.php
            ├── Listeners
            │   └── HelloWorld.php
            ├── Mail
            │   └── HelloWorld.php
            ├── Models
            │   └── HelloWorld.php
            ├── Notifications
            │   └── HelloWorld.php
            ├── Observers
            │   └── HelloWorld.php
            ├── Rules
            │   └── HelloWorld.php
            ├── config.php
            ├── database
            │   ├── factories
            │   │   └── HelloWorldFactory.php
            │   ├── migrations
            │   │   └── 2020_04_19_111656_create_foo_bars_table.php
            │   └── seeds
            │       └── HelloWorldSeeder.php
            ├── helpers.php
            ├── resources
            │   ├── lang
            │   │   └── en.php
            │   └── views
            │       └── welcome.blade.php
            └── routes
                ├── api.php
                └── web.php
```
