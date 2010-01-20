<?php
/**
* Replaces occurences of the form #filter:user_login-asdfas# with a personal message link
*/

function smarty_outputfilter_eF_template_encryptQuery($compiled, &$smarty) {
    $re = "/(href\s*=\s*['\"].*\?)(.*)(['\"])/U";    
    preg_match_all($re, $compiled, $matches);
    //pr($matches);
    $compiled = preg_replace_callback($re, "local_encryptQueryReplace", $compiled);
    return $compiled;
}

function local_encryptQueryReplace($matches) {
    //pr(encryptString($matches[2]));
    $matches[2] = 'cru='.encryptString($matches[2]);
    //pr($matches[2]);
    //pr($matches[1].$matches[2].$matches[3]);
    return $matches[1].$matches[2].$matches[3];    
}


?>