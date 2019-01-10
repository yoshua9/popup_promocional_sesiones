<?php
session_start();

//Detectamos que es la primera primera vez que accede a la pagina e insertamos el contenido html del popup
if(!isset($_SESSION[ 'last_activity']) || (empty($_SESSION[ 'last_activity']))){
    include("view/index.html");
}

//define( 'MAX_SESSION_TIME', 1200 ); // 20 minutos
define( 'MAX_SESSION_TIME', 15 );

/* Comprobamos si la URL contiene parametros GET o bien si han expirado los 20 minutos de la session*/
if ( (isset( $_SESSION[ 'last_activity' ] ) && ( time() - $_SESSION[ 'last_activity' ] ) > MAX_SESSION_TIME) || (!empty($_GET)) ) {
    session_unset();

    if ( ini_get( 'session.use_cookies' ) ) {

        $params = session_get_cookie_params();
        setcookie( session_name(), '',
                   time() - MAX_SESSION_TIME,
                   $params[ 'path' ],
                   $params[ 'domain' ],
                   $params[ 'secure' ],
                   $params[ 'httponly' ] );
    }

    @session_destroy();

    header( 'Location: ' );

}

$_SESSION[ 'last_activity' ] = time();