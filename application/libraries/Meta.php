<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class meta {
    private $CI;

    private $_ROBOTS;

    private $_TITLE;
    private $_NAVIGATION;

    private $_SITENAME;
    private $_FB_APP_ID;
    private $_DESCRIPTION;
    private $_KEYWORDS;
    private $_URL;
    private $_IMG;

    public function __construct()
    {
        $this->CI = &get_instance();

        $this->_ROBOTS					= TRUE;

        $this->_TITLE					= '';
        $this->_NAVIGATION				= array();

        $this->_SITENAME                = NULL;
        $this->_FB_APP_ID               = NULL;
        $this->_DESCRIPTION				= NULL;
        $this->_KEYWORDS				= NULL;
        $this->_URL						= NULL;
        $this->_IMG						= NULL;
    }

    function SetMeta($site_name, $description, $keywords, $url, $img, $fb_app_id, $robots = TRUE)
    {
        $this->Set('_ROBOTS', $robots);

        $this->Set('_SITENAME', $site_name);
        $this->Set('_DESCRIPTION', $description);
        $this->Set('_KEYWORDS', $keywords);
        $this->Set('_URL', $url);
        $this->Set('_IMG', $img);
        $this->Set('_FB_APP_ID', $fb_app_id);
    }

    private function Set($prop, $content)
    {
        if(	$prop === '_TITLE' ||
            $prop === '_NAVIGATION')
            return;

        $this->$prop = $content;
    }

    public function Get($prop)
    {
        if($this->$prop === NULL)
            return;

        if ($prop === '_NAVIGATION' ||
            $prop === '_URL' ||
            $prop === '_IMG' ||
            $prop == '_ROBOTS')
                return $this->$prop;

        return HTMLEntityQuote($this->$prop);
    }

    function PushTitle($titles)
    {
        if (is_string($titles))
        {
            if ($titles === '') return;

            $titles = array($titles);
        }

        $count = count($titles);

        if ($count == 0) return;

        $i = 0;
        if ($this->_TITLE === '')
        {
            $this->_TITLE = $titles[$i++];
        }

        while($i < $count)
        {
            $this->_TITLE = $titles[$i++] . ' :: ' . $this->_TITLE;
        }
    }

    function PushNavigation($text, $url)
    {
        $this->_NAVIGATION[] = array($text, base_url($url));
    }

    function RenderNav() {
        foreach($this->_NAVIGATION as $k => $v) {
            if($k == 0)
                echo '<ol class="breadcrumb hide-phone p-0 m-0">';

            if($k == count($this->_NAVIGATION) - 1) {
                echo '<li class="active">'.$v[0].'</li>';
                echo '</ol>';
            } else
                echo '<li><a href="'.$v[1].'">'.$v[0].'</a>';
        }
    }

    function Render($render = TRUE)
    {
        // ======== PROGRAMABLE META ======== //

        // GOOGLE
        $metas[] = '<meta name="keywords" content="%s%" />';			$args[] = $this->Get('_KEYWORDS');
        $metas[] = '<meta name="description" content="%s%" />';			$args[] = $this->Get('_DESCRIPTION');

        // FACEBOOK
        $metas[] = '<meta property="og:title" content="%s%" />';		$args[] = $this->Get('_TITLE');
        $metas[] = '<meta property="og:type" content="%s%" />';			$args[] = 'website';
        $metas[] = '<meta property="og:image" content="%s%" />';		$args[] = $this->Get('_IMG');
        $metas[] = '<meta property="og:url" content="%s%" />';			$args[] = $this->Get('_URL');
        $metas[] = '<meta property="og:site_name" content="%s%" />';	$args[] = $this->Get('_SITENAME');
        $metas[] = '<meta property="og:description" content="%s%" />';	$args[] = $this->Get('_DESCRIPTION');
        $metas[] = '<meta property="fb:app_id" content="%s%" />';		$args[] = $this->Get('_FB_APP_ID');

        $count = count($metas);
        for($i = 0; $i < $count; $i++)
        {
            $metas[$i] = XPrintf($metas[$i], $args[$i]);
        }

        // ======== FIXED META ======== //

        // HTML
        // $metas[] = '<meta http-equiv="Cache-control" content="max-age=0">';
        $metas[] = '<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />';


        // GOOGLE
        $metas[] = '<link rel="alternate" href="'.base_url().'" hreflang="vi-vn" />';
        $metas[] = '<meta http-equiv="content-language" content="vi" />';
        $metas[] = '<meta name="google-site-verification" content="" />';

        if ($this->Get('_ROBOTS'))
            $metas[] = '<meta name="robots" content="index,follow" />';
        else
            $metas[] = '<meta name="robots" content="noindex,nofollow" />';

        if ($render === FALSE)
            return implode(PHP_EOL, $metas);

        echo implode(PHP_EOL, $metas);;
    }
}
