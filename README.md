### USAGE

~~~
import * as secrets from "docker-secrets"

secrets.setupSecretsDir("/dir")  // optional, default directory is '/run/secrets'
secrets.get("env_variable_a") // will try to get env_variable_a from /run/secrets/env_variable_a or ENV_VARIABLE_A
~~~

several conventions for this library:

1) the secret name has to always be in lowercase from secrets of docker.
2) the environment variable name has to be in uppercase.
3) it doesn't matter when you call secrets.get using lowercase or uppercase, it converts accordingly.


Any suggestion is welcome.


