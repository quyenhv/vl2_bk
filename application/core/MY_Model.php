<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Model extends CI_Model {
    protected $_TABLE = '';
    protected $_PRIMARY = '';

    public function __construct() {
        parent::__construct();

        $this->load->database();
    }

    public function get($select = '*', $where = array()) {
        $this->db->select($select);

        if(count($where) > 0)
            $this->db->where($where);

        return $this->db->get($this->_TABLE)->row_object();
    }

    public function count($where = array()) {
        if(count($where) > 0)
            $this->db->where($where);

        return $this->db->get($this->_TABLE)->num_rows();
    }

    public function gets($select = '*', $condition = NULL, $limited = false, $start = 0) {
        $this->db->select($select);

        if(isset($condition->where)) {
            foreach($condition->where as $k => $v)
                $this->db->where($k, $v);
        }
        if(isset($condition->or_where)) {
            foreach($condition->or_where as $k => $v)
                $this->db->or_where($k, $v);
        }
        if(isset($condition->like)) {
            foreach($condition->like as $k => $v)
                $this->db->like($k, $v);
        }
        if(isset($condition->join)) {
            foreach($condition->join as $k => $v)
                $this->db->join($k, $v);
        }

        if(isset($condition->count))
            return $this->db->get($this->_TABLE)->num_rows();

        if($limited !== false)
            $this->db->limit($limited, $start);

        if($limited == 1)
            return $this->db->get($this->_TABLE)->row_object();

        if(isset($condition->order_by)) {
            foreach($condition->order_by as $k => $v)
                $this->db->order_by($k, $v);
        }

        return $this->db->get($this->_TABLE)->result_object();
    }

    public function put($data) {
		if(!is_array($data) && !is_object($data))
			return false;

		$this->db->insert($this->_TABLE, $data);
        return $this->db->insert_id();
	}

    public function update($primary, $data) {
        $this->db->trans_start();
        $this->db->where($this->_PRIMARY, $primary);
        $this->db->update($this->_TABLE, $data);
        $this->db->trans_complete();

        if($this->db->trans_status())
            return true;

        return false;
    }

    public function del($primary) {
		$this->db->trans_start();
        $this->db->delete($this->_TABLE, array($this->_PRIMARY => $primary));
        $this->db->trans_complete();

        if($this->db->trans_status())
            return true;

        return false;
	}
}
