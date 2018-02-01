[![Build Status](https://travis-ci.org/zhu1230/docker-secrets.svg?branch=master)](https://travis-ci.org/zhu1230/docker-secrets)
[![npm version](https://badge.fury.io/js/docker-secrets-nodejs.svg)](https://badge.fury.io/js/docker-secrets-nodejs)

### USAGE

to get credential data from docker secrets or environment variables in nodejs, the secrets take precedence over ENVs.

~~~
import * as secrets from "docker-secrets-nodejs"

secrets.setupSecretsDir("/dir")  // optional, default directory is '/run/secrets'
secrets.get("env_variable_a") // will try to get env_variable_a from /run/secrets/env_variable_a 
							  // or ENV_VARIABLE_A from environment variables
~~~

#### CONVENTIONS

several conventions for this library:

	* the secret name has to always be in lowercase from secrets of docker.
	* the environment variable name has to be in uppercase.
	* it doesn't matter whether you pass the parametr in "secrets.get()" using lowercase or uppercase, it converts accordingly.


Any suggestion is welcome!


