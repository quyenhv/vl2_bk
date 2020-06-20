<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class stml {
	private $_CSS;
	private $_CSSCONTENT;
	private $_JS;
	private $_JSCONTENT;

	public function __construct() {
		$this->_CSS = array();
		$this->_CSSCONTENT = array();
		$this->_JS = array();
		$this->_JSCONTENT = array();
	}

	public function PushCSS($file_path, $insert_base_url = true) {
		if(is_array($file_path)){
			if($insert_base_url == true) {
				foreach($file_path as $k => $v) {
					$file_path[$k] = base_url($v);
				}
			}
			$this->_CSS = array_merge($this->_CSS, $file_path);
		}
		else{
			if($insert_base_url == true)
				$this->_CSS[] = base_url($file_path);
			else
				$this->_CSS[] = $file_path;
		}
	}

	public function PushCSSContent($content) {
		$index = count($this->_CSSCONTENT);

		$this->_CSSCONTENT[$index] = '<style>';
		$this->_CSSCONTENT[$index] .= PHP_EOL;
		$this->_CSSCONTENT[$index] .= $content;
		$this->_CSSCONTENT[$index] .= PHP_EOL;
		$this->_CSSCONTENT[$index] .= '</style>';
	}

	public function PushJS($file_path, $insert_base_url = true) {
		if(is_array($file_path)){
			if($insert_base_url == true) {
				foreach($file_path as $k => $v) {
					$file_path[$k] = base_url($v);
				}
			}
			$this->_JS = array_merge($this->_JS, $file_path);
		}
		else{
			if($insert_base_url == true)
				$this->_JS[] = base_url($file_path);
			else
				$this->_JS[] = $file_path;
		}
	}

	public function PushJSContent($content, $jquery = true) {
		$index = count($this->_JSCONTENT);

		$this->_JSCONTENT[$index] = '<script>';
		$this->_JSCONTENT[$index] .= PHP_EOL;

		if($jquery == true) {
			$this->_JSCONTENT[$index] .= '$(function(){';
			$this->_JSCONTENT[$index] .= PHP_EOL;
			$this->_JSCONTENT[$index] .= $content;
			$this->_JSCONTENT[$index] .= PHP_EOL;
			$this->_JSCONTENT[$index] .= '});';
		} else {
			$this->_JSCONTENT[$index] .= $content;
		}

		$this->_JSCONTENT[$index] .= PHP_EOL;
		$this->_JSCONTENT[$index] .= '</script>';
	}

	public function RenderCSS() {
		$render = array();

		foreach($this->_CSS as $v) {
			$render[] = '<link href="'.$v.'" rel="stylesheet">';
		}

		echo implode(PHP_EOL, $render);
	}

	public function ShowCSSContent() {
		foreach($this->_CSSCONTENT as $v) {
			echo PHP_EOL;
			echo $v;
		}
	}

	public function RenderJS() {
		$render = array();

		foreach($this->_JS as $v) {
			$render[] = '<script src="'.$v.'"></script>';
		}

		echo implode(PHP_EOL, $render);
	}

	public function ShowJSContent() {
		foreach($this->_JSCONTENT as $v) {
			echo PHP_EOL;
			echo $v;
		}
	}
}
