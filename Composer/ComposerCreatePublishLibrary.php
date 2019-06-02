Create and Publish a Library to Packagist.org

create the class, for example a  json responsehandler like this:
<?php

namespace Martina\ResponseClass;


class JsonResponse
{
    public $status;
    public $message;
    public $data = [];
    public $statusCode;
    public $code;

    public function __construct($status, $message = '', array $data = [])
    {
        $this->status = $status;
        $this->message = $message;
        $this->data = $data;

        $this->result = array(
            'status' => $this->status
        );

        echo $this->response();
    }

    /**
     * Format user message with HTTP status and status code
     * @return string, json object
     */

    public function response()
    {
        //set the HTTP respoonse code
        switch ($this->status)
        {
            case "unauthorized":
                $statusCode = 401;
                break;
            case "exception":
                $statusCode = 500;
                break;
            default:
                $statusCode = 200;
                break;
        }

        //set the response header
        header("Content-Type", "application/json");
        header(sprintf('HTTp/1.1. %s %s', $statusCode, $this->status), true, $statusCode);

        if ($this->message !== '')
        {
            $this->result['message'] = $this->message;
        }

        if ($this->message !== '')
        {
            $this->result['message'] = $this->message;
        }

        if (count($this->data) > 0)
        {
            $this->result['data'] = $this->data;
        }

        return json_encode( $this->result);
    }
}
?>

format the composer.json autoloader (under vendor) file like this:
{
  "name": "martina/json-response",
  "description": "A simple class that returns a proberly formated json response with http status",
  "keywords": ["Json", "Response", "API Response Class", "PHP"]
  "license": "MIT",
  "type": "library",
  "authors": [
    {
      "name": "Martina Schwerdtfeger",
      "email": "martina.schwerdtfeger@awin.com",
	  "homepage": "https://all-that-code.com"
    }
  ],
  "require": {
	  "php": ">=5.3.0"
  },
  "autoload": {
    "psr-4": {
      "Martina\\ResponseClass\\": "src/"
    }
  }
}
run the composer dumpautoload in the command line
and then you will be able, if the library is working correctly:

<?php

require_once __DIR__ ."/autoload.php";

use Martina\ResponseClass\JsonResponse;


$student = array(

    'name' => 'John Doe',
    'course' => 'Software Engneering',
    'level' => '200',
    'collections' => ['books' => 'Intro to UML', 'music' => 'rap']
);

new JsonResponse('ok', '', $student);
?>
then you have to create a git repository and push the library there
submit on getcomposer.org - Browse packages
Auto-Uploaded (whenever there is a change at Github it will be auto update the packagist package):
on Github go to Integrations & services, under Service select packagist, enter packagist name and API tpoken (from packagist: profile)