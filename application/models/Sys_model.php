<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Sys_model extends MY_Model {
    public function __construct() {
        $this->_TABLE = 'systems';
        $this->_PRIMARY = 'id';

        parent::__construct();
    }

    public function multi($field = array()) {
        $this->db->where($field);
        $data = $this->db->get($this->_TABLE)->result_object();

        $result = array();

        foreach($data as $v)
            $result[$v->conf_field] = $v->conf_val;

        return (object) $result;
    }

    public function all() {
        $data = $this->db->get($this->_TABLE)->result_object();

        $result = array();

        foreach($data as $v)
            $result[$v->conf_field] = $v->conf_val;

        return (object) $result;
    }

    public function get_field($field) {
        $this->db->where('conf_field', $field);

        $get = $this->db->get($this->_TABLE);
        if($get->num_rows() > 0)
            return $get->row_object()->conf_val;

        return '';
    }

    public function update_field($field, $newData) {
        $this->db->trans_start();
        $this->db->where('conf_field', $field);
        $this->db->update($this->_TABLE, $newData);
        $this->db->trans_complete();

        if($this->db->trans_status())
            return true;

        return false;
    }

    public function update_multi($newData) {
        $data = array();

        foreach($newData as $k => $v) {
            $data[] = array(
                'conf_field' => $k,
                'conf_val' => $v
            );
        }

        $this->db->trans_start();
        $this->db->update_batch($this->_TABLE, $data, 'conf_field');
        $this->db->trans_complete();

        if($this->db->trans_status())
            return true;

        return false;
    }
}
