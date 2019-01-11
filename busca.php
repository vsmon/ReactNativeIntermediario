<?php
	//$con = odbc_connect("Driver={Progress OpenEdge 10.2B Driver}; HostName=192.168.0.62; PortNumber=6000; DatabaseName=bpqlikview; DefaultIsolationLevel=READ COMMITTED;", "pub", "pub", SQL_CUR_USE_ODBC) or die("Não pude conectar com o Banco Progress.");	
	$con = odbc_connect("Driver={Progress OpenEdge 11.7 Driver}; HostName=192.168.0.5; PortNumber=23725; DatabaseName=wyda; DefaultIsolationLevel=READ COMMITTED;", "pub", "pub", SQL_CUR_USE_ODBC) or die("Não pude conectar com o Banco Progress.");	
	//$con = odbc_connect("wy-ems2mov", "pub","pub",SQL_CUR_USE_ODBC);	 
	#mysqli_set_charset ($con , "utf8");
	$data_implant = isset($_GET['data_implant']) ? $_GET['data_implant'] : die();
	$nome_abrev   = isset($_GET['nome_abrev']) ? $_GET['nome_abrev'] : die();
	//$nrpedido   = isset($_GET['nrpedido']) ? $_GET['nrpedido'] : die();
	
	$query = "select \"ped-venda\".\"nr-pedcli\" nrPedido, \"ped-venda\".\"nome-abrev\" nomeAbrev from \"ped-venda\" where \"ped-venda\".\"nome-abrev\" = '$nome_abrev' or \"ped-venda\".\"dt-implant\" = '$data_implant'"; //file_get_contents("php://input");
	//$query = "select \"ped-venda\".\"nome-abrev\", \"ped-venda\".\"dt-implant\" from \"ped-venda\" where \"ped-venda\".\"nome-abrev\" = '$nome_abrev'";
	$sth = odbc_exec($con,$query);
	
	if (odbc_error($con)) {
		header("HTTP/1.1 500 Internal Server Error");
		echo $query.'\n';
		echo odbc_errormsg($con);
	}
	else
	{
		$rows = array();
		while($r = odbc_fetch_array($sth)) {
		$rows[] = $r;
		}
		$res = json_encode($rows);
		echo $res;
		odbc_free_result($sth);
	}
odbc_close($con);
?>	
