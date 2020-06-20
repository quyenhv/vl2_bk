<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ADCP_Controller extends CI_Controller {

    protected $_DAT = array();
    protected $_USER = NULL;
    protected $_SYS = NULL;

    public function __construct() {
        parent::__construct();

        $this->load->helper(array(
            'url_helper',
            'core_helper'
        ));

        $this->load->model(array(
            'user_model',
            'sys_model'
        ));

        $this->load->library(array(
            'stml',
            'meta',
            'authencation'
        ));

        $auth = $this->authencation->authen();

        if(empty($auth->user_id))
            redirect('auth/admin');

        $this->_USER = $auth;
        $this->_DAT['user'] = $auth;
        $this->_DAT['class'] = $this->router->fetch_class();
        $this->_DAT['method'] = $this->router->fetch_method();

        $this->stml->PushCSS(array(
            'statics/manage/assets/global/plugins/font-awesome/css/font-awesome.min.css',
            'statics/manage/assets/global/plugins/simple-line-icons/simple-line-icons.min.css',
            'statics/manage/assets/global/plugins/bootstrap/css/bootstrap.min.css',
            'statics/manage/assets/global/plugins/uniform/css/uniform.default.css',
            'statics/manage/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
            'statics/manage/assets/global/css/components-rounded.css',
            'statics/manage/assets/global/css/plugins.css',
            'statics/manage/assets/admin/layout4/css/layout.css',
            'statics/manage/assets/admin/layout4/css/themes/light.css',
            'statics/manage/assets/admin/layout4/css/custom.css',
        ));
        $this->stml->PushJS(array(
            'statics/manage/assets/global/plugins/jquery.min.js',
            'statics/manage/assets/global/plugins/jquery-migrate.min.js',
            'statics/manage/assets/global/plugins/jquery-ui/jquery-ui.min.js',
            'statics/manage/assets/global/plugins/bootstrap/js/bootstrap.min.js',
            'statics/manage/assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js',
            'statics/manage/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js',
            'statics/manage/assets/global/plugins/jquery.blockui.min.js',
            'statics/manage/assets/global/plugins/jquery.cokie.min.js',
            'statics/manage/assets/global/plugins/uniform/jquery.uniform.min.js',
            'statics/manage/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
            'statics/manage/assets/global/scripts/metronic.js',
            'statics/manage/assets/admin/layout4/scripts/layout.js',
            'statics/manage/assets/admin/layout4/scripts/demo.js',
        ));

        $this->_SYS = $this->sys_model->all();

        $this->_DAT['sys'] = $this->_SYS;
        $this->_DAT['class'] = $this->router->fetch_class();
        $this->_DAT['method'] = $this->router->fetch_method();

        $this->meta->PushTitle($this->_SYS->title);
        $this->meta->PushTitle('ADMIN CP');
    }
}

class ADCP_AJAX extends CI_Controller {

    protected $_DAT = array();

    public function __construct() {
        parent::__construct();

        $this->load->helper(array(
            'core_helper'
        ));

        $this->load->model(array(
            'user_model'
        ));

        $this->load->library(array(
            'restapi',
            'authencation',
            'form_validation'
        ));

        $auth = $this->authencation->authen();

        if(empty($auth->user_id))
            $this->restapi->response(array('status' => -9999, 'desc' => 'Denied'));

        $this->_USER = $auth;
    }
}

class EndUser_Controller extends CI_Controller {

    protected $_DAT = array();
    protected $_SYS = NULL;

    public function __construct() {
        parent::__construct();

        $this->load->helper(array(
            'url_helper',
            'core_helper'
        ));

        $this->load->model(array(
            'sys_model'
        ));

        $this->load->library(array(
            'stml',
            'meta'
        ));

        $this->_SYS = $this->sys_model->all();

        $this->meta->PushTitle($this->_SYS->title);

        $this->_DAT['sys'] = $this->_SYS;
        $this->_DAT['class'] = $this->router->fetch_class();
        $this->_DAT['method'] = $this->router->fetch_method();

        if($this->_SYS->is_online != 1)
            redirect('bao-tri.html');
    }
}

class EndUser_AJAX extends CI_Controller {

    protected $_DAT = array();
    protected $_SYS = NULL;

    public function __construct() {
        parent::__construct();

        $this->load->helper(array(
            'core_helper'
        ));

        $this->load->model(array(
            'sys_model'
        ));

        $this->load->library(array(
            'restapi',
            'form_validation'
        ));

        $this->_SYS = $this->sys_model->multi('is_online');
    }
}
