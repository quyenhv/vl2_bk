<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class restapi {
	private function _build_http_header_string($status_code) {
        $status = array(
            200 => 'OK',
            404 => 'Not Found',
            405 => 'Method Not Allowed',
            500 => 'Internal Server Error'
        );
        return "HTTP/1.1 " . $status_code . " " . $status[$status_code];
    }

    public function response($data = NULL, $status_code = 200) {
        header($this->_build_http_header_string($status_code));
        if($status_code == 200) {
            header("Content-type: application/json; charset=utf-8");
            //header('Content-Type: text/html; charset=utf-8');
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
        }
        die();
    }

    public function check_post() {
    	if(count($_POST) > 0)
    		return true;

    	return $this->response(NULL, 500);
    }

    public function check_get() {
    	if(count($_GET) > 0)
    		return true;

    	return $this->response(NULL, 500);
    }
}
