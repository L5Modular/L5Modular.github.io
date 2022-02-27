# Artisan Commands

To make your life easier, L5Modular includes a lot of artisan commands. Most of them are extended `make` commands and will behave like the originals but will also take a `--module` option.

<br>
<br>

##  Make Module

This command generates a full module.  
You can configure which structure and which components should be generated.

```bash
php artisan make:module
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new module (folder structure)

Usage:
  make:module <name>

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
```
</details>

<br>
<br>

## Make Controller

This command generates a controller into a module.  
By passing in options you can define what kind of controller and in which module it should be generated.

```bash
php artisan make:module:controller
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new controller class in a module

Usage:
  make:module:controller [options] [--] <name>

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
```

Example:  

```bash
php artisan make:module:controller MemberController --module=HelloWorld --model=Member
```

This would create a RESTful Resource Controller `app/Modules/HelloWorld/Http/Controllers/MemberController.php` and ask you if you want to generate the `Member` model as well, if it doesn't already exist.

</details>

<br>
<br>

## Make Model

This command generates a model into a module.  
By passing in options you can define in which module it should be generated and whether other components should also be generated or not.

```bash
php artisan make:module:model
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new model class in a module

Usage:
  make:module:model [options] [--] <name>

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
```
</details>

<br>
<br>

## Make Resource

This command generates a resource into a module.  
By passing in options you can define what kind of resource and in which module it should be generated.

```bash
php artisan make:module:resource
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new resource class in a module

Usage:
  make:module:resource [options] [--] <name>

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
```
</details>

<br>
<br>

## Make Request

This command generates a request into a module.  
By passing in the corresponding option you can define in which module the request class should be generated.

```bash
php artisan make:module:request
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new request class in a module

Usage:
  make:module:request [options] [--] <name>

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
```
</details>

<br>
<br>

## Make Mail

This command generates a mail into a module.  
By passing in options you can define in which module it should be generated and whether a markdown view should also be generated or not.

```bash
php artisan make:module:mail
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new mail class in a module

Usage:
  make:module:mail [options] [--] <name>

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
```
</details>

<br>
<br>

## Make Notification

This command generates a notification into a module.  
By passing in options you can define in which module it should be generated and whether a markdown view should also be generated or not.

```bash
php artisan make:module:notification
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new notification class in a module

Usage:
  make:module:notification [options] [--] <name>

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
```
</details>

<br>
<br>

## Make Event

This command generates a event into a module.  
By passing in the corresponding option you can define in which module the event class should be generated.

```bash
php artisan make:module:event
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new event class in a module

Usage:
  make:module:event [options] [--] <name>

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
```
</details>

<br>
<br>

## Make Listener

This command generates a listener into a module.  
By passing in options you can define in which module it should be generated, also the event the listener should listen for and whether the listener should be queued or not.

```bash
php artisan make:module:listener
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new listener class in a module

Usage:
  make:module:listener [options] [--] <name>

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
```
</details>

<br>
<br>

## Make Observer

This command generates a observer into a module.  
By passing in options you can define in which module it should be generated and the model the observer should apply to.

```bash
php artisan make:module:observer
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new observer class in a module

Usage:
  make:module:observer [options] [--] <name>

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
```
</details>

<br>
<br>

## Make Job

This command generates a job into a module.  
By passing in options you can define in which module it should be generated and whether the job should be synchronous or not.

```bash
php artisan make:module:job
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new job class in a module

Usage:
  make:module:job [options] [--] <name>

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
```
</details>

<br>
<br>

## Make Rule

This command generates a validation rule into a module.  
By passing in the corresponding option you can define in which module the rule should be generated.

```bash
php artisan make:module:rule
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new rule class in a module

Usage:
  make:module:rule [options] [--] <name>

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
```
</details>

<br>
<br>

## Make View

This command generates a blade view into a module.  
By passing in the corresponding option you can define in which module the view should be generated.

```bash
php artisan make:module:view
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new blade view file in a module

Usage:
  make:module:view [options] [--] <name>

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
```
</details>

<br>
<br>

## Make Translation

This command generates a translation into a module.  
By passing in the corresponding option you can define in which module the translation should be generated.

```bash
php artisan make:module:translation
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new translation file in a module

Usage:
  make:module:translation [options] [--] <name>

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
```
</details>

<br>
<br>

## Make Route

This command generates route files into a module.  
By passing in options you can define in which module and what kind of route files should be generated.

```bash
php artisan make:module:route
```

<details>
    <summary>Description / Usage / Options</summary>

```
Description:
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
```
</details>

<br>
<br>

## Make Migration

This command generates a migration into a module.  
By passing in options you can define in which module it should be generated, also amongst others the table to be created.

```bash
php artisan make:module:migration
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new migration file in a module

Usage:
  make:module:migration [options] [--] <name>

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
```
</details>

<br>
<br>

## Make Seeder

This command generates a seeder into a module.  
By passing in the corresponding option you can define in which module the seeder should be generated.

```bash
php artisan make:module:seeder
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new seeder class in a module

Usage:
  make:module:seeder [options] [--] <name>

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
```
</details>

<br>
<br>

## Make Factory

This command generates a factory into a module.  
By passing in options you can define in which module it should be generated and the model.

```bash
php artisan make:module:factory
```

<details>
    <summary>Description / Usage / Arguments / Options</summary>

```
Description:
  Create a new model factory in a module

Usage:
  make:module:factory [options] [--] <name>

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
```
</details>

<br>
<br>

## Make Config

This command generates a config file into a module.  
By passing in the corresponding option you can define in which module the config file should be generated.

```bash
php artisan make:module:config
```

<details>
    <summary>Description / Usage / Options</summary>

```
Description:
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
```
</details>

<br>
<br>

## Make Helpers

This command generates a helpers file into a module.  
By passing in the corresponding option you can define in which module the helpers file should be generated.

```bash
php artisan make:module:helpers
```

<details>
    <summary>Description / Usage / Options</summary>

```
Description:
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
```
</details>

<br>
<br>

## Module List

This command simply lists all components and their status.

```bash
php artisan module:list
```

<details>
    <summary>Description / Usage / Options</summary>

```
Description:
  List the application's modules

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
```
</details>
