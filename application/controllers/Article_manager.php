<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Ho_Chi_Minh');
class Article_manager extends ADCP_Controller {
	public function __construct() {
		parent::__construct();

		$this->meta->PushTitle('QUẢN LÝ BÀI VIẾT');

		$this->load->model('article_model');
	}

	public function index() {
		$this->meta->PushTitle('DANH SÁCH BÀI VIẾT');
		$this->stml->PushCSS(array(
            'statics/manage/assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.css',
        ));
        $this->stml->PushJS(array(
            'statics/manage/assets/global/plugins/datatables/media/js/jquery.dataTables.min.js',
            'statics/manage/assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js',
        ));

		$this->_DAT['articles'] = $this->article_model->gets();

		$this->load->view('manage/inc/header', $this->_DAT);
		$this->load->view('manage/pages/articles', $this->_DAT);
		$this->load->view('manage/inc/footer', $this->_DAT);
	}

	public function add() {
		$this->meta->PushTitle('THÊM BÀI VIẾT MỚI');
		$this->stml->PushCSS(array(
            'statics/manage/assets/global/plugins/bootstrap-summernote/summernote.css',
        ));
        $this->stml->PushJS(array(
            'statics/manage/assets/global/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.js',
            'statics/manage/assets/global/plugins/bootstrap-summernote/summernote.min.js',
        ));

		$this->_DAT['err'] = '';

		if(!empty($_POST)) {
			$box = $this->input->post('box');
			$title = $this->input->post('title');
			$desc = $this->input->post('desc');
			$showing = $this->input->post('showing');
			$is_hot = $this->input->post('is_hot');
			$link_fb = $this->input->post('link_fb');

			try {

				if(empty($title) || empty($desc) || empty($box) || empty($_POST['content']))
					throw new \Exception("Vui lòng điền đầy đủ thông tin.", 1);

				if(strlen($_POST['content']) < 20)
					throw new \Exception("Nội dung bài viết tối thiểu 20 ký tự", 1);

				$data = array(
                    'title' => $title,
                    'box' => $box,
                    'desc' => $desc,
                    'content' => $_POST['content'],
                    'create_at' => time(),
                    'showing' => ($showing == 1) ? 1 : 0,
                    'is_hot' => ($is_hot == 1) ? 1 : 0,
					'link_fb' => (!empty($link_fb)) ? $link_fb : NULL,
					'created_at' => date("d-m",time())
                );

                if(!empty($_FILES['thumb']['name'])) {
                    $config['upload_path'] = "statics/endusers/images/uploads/";
                    $config['allowed_types'] = "jpg|jpeg|png|gif";
                    $config['encrypt_name'] = true;
                    $this->load->library('upload', $config);

                    if($this->upload->do_upload('thumb')) {
                        $data['thumb'] = $config['upload_path'].$this->upload->data()['file_name'];
                    } else {
                        throw new \Exception("Có lỗi trong quá trình upload thumb: ".$this->upload->display_errors(), 1);
                    }
                }

				if(!($this->article_model->put($data) > 0))
					throw new \Exception("Có lỗi trong quá trình thêm dữ liệu", 1);

				$this->_DAT['success'] = 'Thêm bài viết mới thành công!';

			} catch (\Exception $e) {
				$this->_DAT['err'] = $e->getMessage();
			}
		}

		$this->load->view('manage/inc/header', $this->_DAT);
		$this->load->view('manage/pages/articles_add', $this->_DAT);
		$this->load->view('manage/inc/footer', $this->_DAT);
	}

	public function edit($id = 0) {
		$data = $this->article_model->get('*', array('article_id' => $id));

		if(empty($data->article_id))
			redirect('article_manager/');

		$this->meta->PushTitle('CHỈNH SỬA BÀI VIẾT #'.$data->article_id);
		$this->stml->PushCSS(array(
            'statics/manage/assets/global/plugins/bootstrap-summernote/summernote.css',
        ));
        $this->stml->PushJS(array(
            'statics/manage/assets/global/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.js',
            'statics/manage/assets/global/plugins/bootstrap-summernote/summernote.min.js',
        ));

		$this->_DAT['err'] = '';

		if(!empty($_POST)) {
			$box = $this->input->post('box');
			$title = $this->input->post('title');
			$desc = $this->input->post('desc');
			$showing = $this->input->post('showing');
			$is_hot = $this->input->post('is_hot');
			$link_fb = $this->input->post('link_fb');

			try {

				if(empty($title) || empty($desc) || empty($box) || empty($_POST['content']))
					throw new \Exception("Vui lòng điền đầy đủ thông tin.", 1);

				if(strlen($_POST['content']) < 20)
					throw new \Exception("Nội dung bài viết tối thiểu 20 ký tự", 1);

				$dataUp = array(
                    'title' => $title,
                    'box' => $box,
                    'desc' => $desc,
                    'content' => $_POST['content'],
                    'create_at' => time(),
                    'showing' => ($showing == 1) ? 1 : 0,
                    'is_hot' => ($is_hot == 1) ? 1 : 0,
					'link_fb' => (!empty($link_fb)) ? $link_fb : NULL
                );

                if(!empty($_FILES['thumb']['name'])) {
                    $config['upload_path'] = "statics/endusers/images/uploads/";
                    $config['allowed_types'] = "jpg|jpeg|png|gif";
                    $config['encrypt_name'] = true;
                    $this->load->library('upload', $config);

                    if($this->upload->do_upload('thumb')) {
                        $dataUp['thumb'] = $config['upload_path'].$this->upload->data()['file_name'];
                    } else {
                        throw new \Exception("Có lỗi trong quá trình upload thumb: ".$this->upload->display_errors(), 1);
                    }
                }

				if($this->article_model->update($id, $dataUp) != true)
					throw new \Exception("Có lỗi trong quá trình cập nhật dữ liệu", 1);

				$this->_DAT['success'] = 'Cập nhật thông tin bài viết thành công!';
				$data = $this->article_model->get('*', array('article_id' => $id));

			} catch (\Exception $e) {
				$this->_DAT['err'] = $e->getMessage();
			}
		}

		$this->_DAT['data'] = $data;

		$this->load->view('manage/inc/header', $this->_DAT);
		$this->load->view('manage/pages/articles_edit', $this->_DAT);
		$this->load->view('manage/inc/footer', $this->_DAT);
	}

	public function del($id = 0) {
		$this->article_model->del($id);
		redirect('article_manager/');
	}
}
