<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends ADCP_Controller {
	public function __construct() {
		parent::__construct();
	}

	public function index() {
		$this->load->view('manage/inc/header', $this->_DAT);
		$this->load->view('manage/pages/home', $this->_DAT);
		$this->load->view('manage/inc/footer', $this->_DAT);
	}

	public function sys() {
		$this->meta->PushTitle('CẤU HÌNH HỆ THỐNG');
		$this->_DAT['err'] = '';

		if(!empty($_POST)) {
			$title = $this->input->post('title');
			$keywords = $this->input->post('keywords');
			$desc = $this->input->post('desc');
			$is_online = $this->input->post('is_online');

			$desc_fb = $this->input->post('desc_fb');
			$link_fanpage = $this->input->post('link_fanpage');
			$link_download = $this->input->post('link_download');
			$link_reg = $this->input->post('link_reg');
			$link_charge = $this->input->post('link_charge');

			try {

				if(empty($title))
					throw new \Exception("Vui lòng nhập tiêu đề trang web", 1);

				$dataUp = array(
                    'title' => $title,
                    'keywords' => $keywords,
                    'desc' => $desc,
                    'desc_fb' => $desc_fb,
                    'link_fanpage' => $link_fanpage,
                    'link_download' => $link_download,
                    'link_reg' => $link_reg,
                    'link_charge' => $link_charge,
                    'is_online' => ($is_online == 1) ? 1 : 0,
                );

                if(!empty($_FILES['logo']['name']) || !empty($_FILES['favicon']['name']) || !empty($_FILES['thumb_fb']['name'])) {
                    $config['upload_path'] = "statics/endusers/images/";
                    $config['allowed_types'] = "jpg|jpeg|png|gif|ico";
                    $this->load->library('upload', $config);

                    if(!empty($_FILES['logo']['name'])) {
                        if($this->upload->do_upload('logo')) {
                            $dataUp['logo'] = $config['upload_path'].$this->upload->data()['file_name'];
                        } else {
                            throw new \Exception("Có lỗi trong quá trình upload logo: ".$this->upload->display_errors(), 1);
                        }
                    }
                    if(!empty($_FILES['favicon']['name'])) {
                        if($this->upload->do_upload('favicon')) {
                            $dataUp['favicon'] = $config['upload_path'].$this->upload->data()['file_name'];
                        } else {
                            throw new \Exception("Có lỗi trong quá trình upload favicon: ".$this->upload->display_errors(), 1);
                        }
                    }
                    if(!empty($_FILES['thumb_fb']['name'])) {
                        if($this->upload->do_upload('thumb_fb')) {
                            $dataUp['thumb_fb'] = $config['upload_path'].$this->upload->data()['file_name'];
                        } else {
                            throw new \Exception("Có lỗi trong quá trình upload thumb_fb: ".$this->upload->display_errors(), 1);
                        }
                    }
                }

				if($this->sys_model->update_multi($dataUp) == false)
					throw new \Exception("Có lỗi trong quá trình cập nhật", 1);

				$this->_DAT['success'] = "Cập nhật thông tin cấu hình hệ thống thành công";

				$this->_SYS = $this->sys_model->all();
		        $this->_DAT['sys'] = $this->_SYS;

			} catch (\Exception $e) {
				$this->_DAT['err'] = $e->getMessage();
			}

		}

		$this->load->view('manage/inc/header', $this->_DAT);
		$this->load->view('manage/pages/sys', $this->_DAT);
		$this->load->view('manage/inc/footer', $this->_DAT);
	}
}
