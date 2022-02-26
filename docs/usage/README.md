---
sidebarDepth: 3
---

# Usage

All your module components should work just like the regular Laravel equivalents.
In addition, you can check the availability and status of each module and interact with it.

<br>
<br>

## Facade

L5Modular comes with a equally named Facade which can do some rudimantary checks and interaction.

### Check if a module exists

The method `exists` takes the name of the desired module as an argument and returns a boolean value which represents the existence of it.

```php
L5Modular::exists('HelloWorld');
```

<br>

### Disable a module

The method `disable` takes the name of the desired module as an argument and updates the status.  

```php
L5Modular::disable('HelloWorld');
```
**Be aware!** This method changes the status of the module for the duration of the execution runtime only.  
To disable a module permanently you need to [configure](/configuration/#disable-a-module) it under `specific` in `config/modules.php`.

<br>

### Check if a module is disabled

The method `disabled` takes the name of the desired module as an argument and returns a boolean value.

```php
L5Modular::disabled('HelloWorld');
```

<br>

### Enable a module

The method `enable` takes the name of the desired module as an argument and updates the status.  

```php
L5Modular::enable('HelloWorld');
```
**Be aware!** This method changes the status of the module for the duration of the execution runtime only.  
To enable a module permanently you need to [configure](/configuration/#disable-a-module) it under `specific` in `config/modules.php`.

<br>

### Check if a module is enabled

The method `enabled` takes the name of the desired module as an argument and returns a boolean value.

```php
L5Modular::enabled('HelloWorld');
```

<br>
<br>

## Loading additional classes

Often enough there is a need to load additional classes into a module. Since Laravel loads the app using the [PSR-4](http://www.php-fig.org/psr/psr-4/) autoloading standard, you can just add folders and files almost without limitations. The only thing you should keep in mind is to name the file exactly like the class name and to add the correct namespace.

F.a. If you want to add the file `Services/FancyService.php` to the `HelloWorld` module, you can absolutely do so. The class could then look like this:

```php
<?php
namespace App\Modules\HelloWorld\Services;

class FancyService
{
    public static function doFancyStuff() {
        return 'some output';
    }
}
```

<br>
<br>

## Good to know
Noteworthy behavior and possible deviations from expectations.

::: tip INFO
In most cases there is not much to consider. Just add files to your modules, keep the PSR-4 autoloading conventions in mind and you're good.  
However, some components can only be correctly used if you know how Laravel handles them.
:::

<br>

### Views

To tell Laravel that you want to render a view file from a specific module, you need to use the double-colon syntax.  
The `welcome.blade.php` from the example module `HelloWorld` could be rendered like this:

```php
return view('HelloWorld::welcome');
```

<br>

### Translations

For the translations applies the same as for the views. You can access them with the double-colon syntax.

```php
echo trans('HelloWorld::example.welcome');
```

<br>

### Routing

For the routes it is not enough to get correctly loaded through PSR-4, they need to be registered by the corresponding service provider to be accessible.  
Unless [otherwise configured](/configuration/), the service provider will look for the files `routes/web.php` and `routes/api.php` and load them with the corresponding middleware and the controllers namespace.  
That means you can register routes without having to enter the full namespace.

```php
Route::resource('hello-world', 'HelloWorldController');
```

<br>

### Migrations

For the migrations it is not enough to get correctly loaded through PSR-4, they need to be registered by the corresponding service provider to be accessible.  
Unless [otherwise configured](/configuration/), the service provider will expect the migrations inside the `database/migrations/` folder of every module.

<br>

### Factories

For the factories applies the same as for the migrations.  
Unless [otherwise configured](/configuration/), the service provider will expect the factories inside the `database/factories/` folder.
