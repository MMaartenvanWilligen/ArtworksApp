<?php

$accesstoken = "W5QWPGAM";

$accept = $_SERVER["HTTP_ACCEPT"];

$method = $_SERVER["REQUEST_METHOD"];

if ($method == "GET") {

    if ($accept == "application/json") {
        makeJson($accesstoken);

    } else {
        http_response_code(406);
    }

} else {
    http_response_code(406);

}

function makeJson($accesstoken)
{
    header("Content-Type: application/json");

    echo json_encode(["accessToken" => $accesstoken]);
}

