<?php
include_once 'config.php';
include_once 'Locatr.php';
$action = $_REQUEST["action"];
if (!isset($action)) {
  throw new Exception("'action' parameter is not supplied");
}
switch ($action) {
  case "nearbysearch":
    header("Content-Type: application/json; charset=utf-8");
    print Locatr::getNearBySearchLocations();
    break;
}
