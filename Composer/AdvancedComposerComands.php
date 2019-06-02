Advanced Composer Commands

Scripts:
are callbacks that can be executed before or after a composer command, e.g. install, autoload and so on

pre-install-cmd: occurs before the install command is executed with a lock file present.
post-install-cmd: occurs after the install command has been executed with a lock file present.
pre-update-cmd: occurs before the update command is executed, or before the install command is executed without a lock file present.
post-update-cmd: occurs after the update command has been executed, or after the install command has been executed without a lock file present.
post-status-cmd: occurs after the status command has been executed.
pre-archive-cmd: occurs before the archive command is executed.
post-archive-cmd: occurs after the archive command has been executed.
pre-autoload-dump: occurs before the autoloader is dumped, either during install/update, or via the dump-autoload command.
post-autoload-dump: occurs after the autoloader has been dumped, either during install/update, or via the dump-autoload command.
post-root-package-install: occurs after the root package has been installed, during the create-project command.
post-create-project-cmd: occurs after the create-project command has been executed.

edit the composer.json autoloader file under vendors:
{
    "require": {
        "nesbot/carbon": "^2.18",
        "swiftmailer/swiftmailer": "^6.2"
    },
	"autoload": {
		"classmap":["classes/", "library/"],
        "files":["config/database.php"],
		"psr-4":{
			"App\\":"src/"
		}
	},
	"require-dev": {
		"filp/whoops": "^2.1"
	},
	"config":{
		"optimize/autoloader": true
	}
	"scripts": {
		"pre-package-install": [
			"ComposerEventListener::prePackageInstall"
		]
		"post-package-install": [
			"ComposerEventListener::postPackageInstall",
			"@composer status",
			"@composer copy",
			"@composer index"
		],
		"copy": "@php -r \"file_exists('file.txt') || copy('file.txt', 'newfile.txt');\",      						//you can also call to an php file like: "copy": "@php index.php"\"
		"index": "@php index.php"
		
	}
}

write a script-class like:
<?php

use Composer\Installer\PackageEvent;

class ComposerEventListener
{
    public static function prePackageInstall(PackageEvent $event)
    {

        $composer = $event->getComposer();
        var_dump("Preparing to install Packages");

    }

    public static function postPackageInstall(PackageEvent $event)
    {

        $composer = $event->getComposer();
        var_dump("Package installed");

    }
}