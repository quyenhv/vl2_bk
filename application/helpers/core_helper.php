<?php
defined('BASEPATH') OR exit('No direct script access allowed');

function WriteLogFile($file, $content) {
	$fp = fopen($file, 'a');
	fwrite($fp, date('H:i:s d/m/Y').': '.$content.PHP_EOL);
	fclose($fp);
}

function XPrintf($str, $args) {
    if (is_string($args)) {
        if ($args == '')
            return $str;

        $args = array($args);
    }

    $count = count($args);
    for ($i = 0; $i < $count; $i++) {
        $str = preg_replace('/%s%/', $args[$i], $str, 1);
    }

    return $str;
}

function HTMLEntityQuote($str) {
	return 	str_replace('"',
						'&quot;',
						str_replace("'", '&apos;', $str));
}

function GenerateResponse($type, $content, $title = '') {
    if($title == '') {
        if($type == 'danger')
            $title = 'Cảnh báo lỗi';
        else if($type == 'success')
            $title = 'Thành công';
    }

    return array('type' => $type, 'content' => $content, 'title' => $title);
}
function generateRandomString($length = 6) {
    $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
function GetIPClient() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';

    $ip_a = explode(',', $ipaddress);
    if(is_array($ip_a) && count($ip_a) > 1)
        $ipaddress = $ip_a[0];

    return $ipaddress;
}
function _substr($str, $length, $minword = 3) {
	$sub = '';
	$len = 0;
	foreach (explode(' ', $str) as $word) {
		$part = (($sub != '') ? ' ' : '') . $word;
		$sub .= $part;
		$len += strlen($part);

		if (strlen($word) > $minword && strlen($sub) >= $length) {
			break;
		}
	}

	return $sub . (($len < strlen($str)) ? '...' : '');
}
function utf8convert($str) {
    if(!$str) return false;

    $utf8 = array(
		'a' => 'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ|Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ',
		'd' => 'đ|Đ',
		'e' => 'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ|É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ',
		'i' => 'í|ì|ỉ|ĩ|ị|Í|Ì|Ỉ|Ĩ|Ị',
		'o' => 'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ|Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ',
		'u' => 'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự|Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự',
		'y' => 'ý|ỳ|ỷ|ỹ|ỵ|Ý|Ỳ|Ỷ|Ỹ|Ỵ',
	);

    foreach($utf8 as $ascii => $uni)
		$str = preg_replace("/($uni)/i", $ascii, $str);

	return $str;
}
function utf8tourl($text){
    $text = strtolower(utf8convert($text));
    $text = str_replace("ß", "ss", $text);
    $text = str_replace("%", "", $text);
    $text = preg_replace("/[^_a-zA-Z0-9 -]/", "",$text);
    $text = str_replace(array('%20', ' '), '-', $text);
    $text = str_replace("----","-",$text);
    $text = str_replace("---","-",$text);
    $text = str_replace("--","-",$text);

	return $text;
}
function _subword($str, $maxChars = 40, $holder = "...") {
    if (strlen($str) > $maxChars) {
        return trim(mb_substr($str, 0, $maxChars)) . $holder;
    } else {
        return $str;
    }
}
