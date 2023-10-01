<?php
/**
 * Plugin Name:       WP Todo
 * Plugin URI:        https://github.com/ariful93/wp-todo
 * Description:       WP Todo Board
 * Author:            weDevs
 * Author URI         https://github.com/ariful93
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-todo
 *
 * @package           create-block
 */

 class WP_TODO_BOARD {
    public function __construct () {
        add_action( 'admin_menu', array( $this, 'wp_todo_board_menu_page' ) );
        add_action( 'admin_enqueue_scripts', array( $this, 'wptodo_admin_enqueue_scripts' ) );
    }

    /**
     * Register a custom menu page.
     */
    public function wp_todo_board_menu_page(){
        add_menu_page( 
            __( 'WP To-Do', 'wp-todo' ),
            'WP Todo',
            'manage_options',
            'wp-todo',
            array( $this, 'wp_todo_board_custom_page' ),
            'dashicons-yes-alt',
            6
        ); 
    }


    /**
     * Display a custom menu page
     */
    public function wp_todo_board_custom_page(){
        require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
    }

    /**
     * Enqueue scripts and styles.
     *
     * @return void
     */
    function wptodo_admin_enqueue_scripts() {
        wp_enqueue_style( 'wptodo-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
        wp_enqueue_script( 'wptodo-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.0', true );
    }

}

new WP_TODO_BOARD();




