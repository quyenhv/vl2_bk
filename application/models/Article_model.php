<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Article_model extends MY_Model {
    public function __construct() {
        $this->_TABLE = 'articles';
        $this->_PRIMARY = 'article_id';

        parent::__construct();
    }
}
