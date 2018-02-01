### USAGE

to get credential data from docker secrets or environment variables in nodejs, the secrets take precedence over ENVs.

~~~
import * as secrets from "docker-secrets"

secrets.setupSecretsDir("/dir")  // optional, default directory is '/run/secrets'
secrets.get("env_variable_a") // will try to get env_variable_a from /run/secrets/env_variable_a 
							  // or ENV_VARIABLE_A from environment variables
~~~

### CONVENTIONS

several conventions for this library:

	* the secret name has to always be in lowercase from secrets of docker.
	* the environment variable name has to be in uppercase.
	* it doesn't matter when you call secrets.get using lowercase or uppercase, it converts accordingly.


Any suggestion is welcome!


