<?php

require_once "./dbconnect.php";

$input = $_POST['input'];

if (strlen($input) < 1) {
    [
        'countries' => ['id' => null, 'name' => 'No coutries found'],
    ];
    return;
}

$sql = "SELECT id, name FROM countries WHERE name LIKE '%$input%'";

$res = $con->query($sql);

if ($res->num_rows < 1) {
    echo json_encode([
        'countries' => ['id' => null, 'name' => 'No country found'],
    ]);
    return;
}

$countries = [];

while ($row = $res->fetch_object()) {
    $countries[] = $row;
}

echo json_encode(['countries' => $countries]);
