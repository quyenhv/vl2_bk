<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class authencation {

    protected $CI;

    public function __construct() {
        $this->CI =& get_instance();

        $this->CI->load->helper('cookie');
        $this->CI->load->library('JWT');
    }

    public function authen() {
        $token = get_cookie('authen_token');

        if($token == NULL)
            return -1;

        $token_data = $this->CI->jwt->validateToken($token);

        if(is_object($token_data) && isset($token_data->user_data)) {
            $user_data = $this->CI->user_model->get('*', array('user_id' => $token_data->user_data->user_id, 'token_key' => $token_data->user_data->token_key));

			if(!empty($user_data->user_id)) {
                set_cookie('authen_token', $token, $token_data->remember);

				return $user_data;
            }

            return -2;
        }

        return -3;
    }

    public function generateCookie_Token($user_data, $expire = 2592000) {
        if(!is_array($user_data) && !is_object($user_data))
            return false;

        if(is_object($user_data))
            $user_data = (array) $user_data;

        set_cookie('authen_token', $this->CI->jwt->generateToken($user_data), $expire);
        return true;
    }
}
