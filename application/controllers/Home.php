<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends EndUser_Controller {
	public function __construct() {
		parent::__construct();
	}

	public function index($box = '') {
		
		$this->load->model('article_model');

		if($box == 'news' || $box == 'event') {
			$this->_DAT['allPosts'] = $this->article_model->gets(
				'*',
				(object) array(
					'where' => array('box' => $box),
				)
			);
			$this->_DAT['box'] = $box == 'news' ? "Tin tức" : "Sự Kiện";
			$this->load->view('endusers/inc/header', $this->_DAT);
			$this->load->view('endusers/pages/news', $this->_DAT);
			$this->load->view('endusers/inc/col_right', $this->_DAT);
			$this->load->view('endusers/inc/footer', $this->_DAT);

		} else {

			$this->_DAT['articles'] = $this->article_model->gets(
				'*',
				(object) array(
					'order_by' => array('article_id' => 'DESC'),
					'limit' => 8
				)
			);
			// $this->_DAT['hot_articles'] = $this->article_model->gets(
				// '*',
				// (object) array(
					// 'order_by' => array('article_id' => 'DESC'),
					// 'where' => array(
						// 'is_hot' => 1
					// )
				// ),
				// 10
			// );

			// $this->_DAT['box'] = $box;

			$this->_DAT['news'] = $this->article_model->gets(
				'*',
				(object) array(
					'where' => array('box' => 'news'),
					'order_by' => array('article_id' => 'DESC'),
					'limit' => 5
				)
			);

			$this->_DAT['event'] = $this->article_model->gets(
				'*',
				(object) array(
					'where' => array('box' => 'event'),
					'order_by' => array('article_id' => 'DESC'),
					'limit' => 5
				)
			);

			$this->load->view('endusers/inc/header', $this->_DAT);
			$this->load->view('endusers/pages/home', $this->_DAT);
			$this->load->view('endusers/inc/col_right', $this->_DAT);
			$this->load->view('endusers/inc/footer', $this->_DAT);
		}
	}

	public function download() {
		$this->load->view('endusers/inc/header', $this->_DAT);
		$this->load->view('endusers/pages/download', $this->_DAT);
		$this->load->view('endusers/inc/col_right', $this->_DAT);
		$this->load->view('endusers/inc/footer', $this->_DAT);
	}

	public function article($id = 0) {
		$this->load->model('article_model');

		$data = $this->article_model->get('*', array('article_id' => $id));
		$this->_DAT['hot_articles'] = $this->article_model->gets(
			'*',
			(object) array(
				'order_by' => array('article_id' => 'DESC'),
				'where' => array(
					'is_hot' => 1
				)
			),
			10
		);

		if(empty($data->article_id))
			redirect('index.html');

		$this->_DAT['data'] = $data;
		$this->_DAT['box'] = $data->box;

		$this->load->view('endusers/inc/header', $this->_DAT);
		$this->load->view('endusers/pages/article', $this->_DAT);
		$this->load->view('endusers/inc/col_right', $this->_DAT);
		$this->load->view('endusers/inc/footer', $this->_DAT);
	}
}
