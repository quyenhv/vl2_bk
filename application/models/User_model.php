<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_model extends MY_Model {
    public function __construct() {
        $this->_TABLE = 'users';
        $this->_PRIMARY = 'user_id';

        parent::__construct();
    }
}
