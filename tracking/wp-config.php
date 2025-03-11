<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'epiz_20605293_w114' );

/** MySQL database username */
define( 'DB_USER', '20605293_1' );

/** MySQL database password */
define( 'DB_PASSWORD', 'SpR4232C.!' );

/** MySQL hostname */
define( 'DB_HOST', 'sql104.byetcluster.com' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'lfgapbm3mwjdkhwvcoelp9u1oswlsu0frhym3uajaku65kgzzqjaagfhrp0zx1s0' );
define( 'SECURE_AUTH_KEY',  'jjslkdjjov3yzyl4kn4xefmkzdrto93mncvs0g9qfenf4omjilf5sits7rewgtut' );
define( 'LOGGED_IN_KEY',    'pz5fe0cdqnxietxiejfaaiq0by1wsdjwb7dnwt5s5bzx6ryunmdfrfi2t1pefn0y' );
define( 'NONCE_KEY',        'lcwip6bcxhfd7jvxwodyrenfwv4swb2c8yl43tgcwjojagx1votkmkl3liexcwko' );
define( 'AUTH_SALT',        'o856mdbeactxa6aycfm0ey4vnmludkcbx5xexoec6rbv9721jjoacnl5zai3hwis' );
define( 'SECURE_AUTH_SALT', 'jj4j0j75avcy4fdgbkbcpa4u8k310bfqb169p7gd4k8fqgvdudbhh1apudl55tgw' );
define( 'LOGGED_IN_SALT',   'qsbeltdukil3hn845lr0qbbcg0ov4pnmq34u6qu8zz6ieba23ay4ypz4v45zg4db' );
define( 'NONCE_SALT',       'qczddw6exhnwccyjmlrqrvr9l492tsk55xe09agalbgyo5viihiiokyplcauz25n' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpni_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
