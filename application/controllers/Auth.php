<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {
	protected $_DAT = array();

	public function __construct() {
		parent::__construct();

		$this->load->helper(array(
            'url_helper',
            'core_helper'
        ));

        $this->load->model(array(
            'user_model'
        ));

        $this->load->library(array(
            'meta',
			'authencation'
        ));
	}
	
	public function hash_pw($pw) {
		echo password_hash($pw, PASSWORD_DEFAULT);
	}

	public function logout() {
		$this->load->helper('cookie');
		delete_cookie('authen_token');
		redirect('auth/admin');
	}

	public function admin() {
		$this->meta->PushTitle('Login AdminCP');
		$this->_DAT['err'] = '';

		if(!empty($_POST)) {
			$email = $this->input->post('email');
			$password = $this->input->post('password');

			try {

				if(empty($email) || empty($password))
					throw new \Exception("Vui lòng điền đầy đủ thông tin.", 1);

				if (!filter_var($email, FILTER_VALIDATE_EMAIL))
					throw new \Exception("Địa chỉ email không chính xác", 1);

				$user = $this->user_model->get('*', array('email' => $email));

				if(empty($user->user_id))
					throw new \Exception("Tài khoản hoặc mật khẩu không đúng", 1);

				if(!password_verify($password, $user->password))
					throw new \Exception("Tài khoản hoặc mật khẩu không đúng", 1);

				$new_token_key = md5(md5($this->config->item('jwt_key').time().$user->user_id));
		        $this->user_model->update($user->user_id, array('token_key' => $new_token_key));
		        $user->token_key = $new_token_key;
				$remember = 90*24*60*60;

		        $generateCookie_Token = $this->authencation->generateCookie_Token(
		            array(
		            	'remember' => $remember,
		            	'user_data' => $user
		            ), $remember
		        );

		        if($generateCookie_Token == true)
		        	redirect('admin/');

				throw new \Exception("Có lỗi xảy ra trong quá trình xử lý", 1);

			} catch (\Exception $e) {
				$this->_DAT['err'] = $e->getMessage();
			}
		}

		$this->load->view('manage/pages/login', $this->_DAT);
	}
}
