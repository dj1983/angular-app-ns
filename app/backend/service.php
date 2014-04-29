<?php

$json = json_decode($HTTP_RAW_POST_DATA);

echo json_encode($json->data);
