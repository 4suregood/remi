

$(document).ready(function() {

	//alert("doc ready");

	$( "form" ).on( "submit", function( event ) {
	  event.preventDefault();
	  const a = $("#a").val();
	  const b = $("#b").val();
	  const c = $("#c").val();
	  const d = $("#d").val();

	let aS =  parseInt(a-b) +  parseInt(a-c) +  parseInt(a-d);
	//let rez = "aS=" + aS + "\n";
	$("#aS").text(aS);

	let bS = parseInt(b-a) + parseInt(b-c) + parseInt(b-d);
	//rez = rez + "bS=" + bS + "\n";
	$("#bS").text(bS);

	let cS = parseInt(c-a) + parseInt(c-b) + parseInt(c-d);
	//rez = rez + "cS=" + cS + "\n";
	$("#cS").text(cS);

	let dS = parseInt(d-a) + parseInt(d-b) + parseInt(d-c);
	//rez = rez + "dS=" + dS + "\n";
	$("#dS").text(dS);

	//alert( "rez=\n" + rez);

	});

}); // end of document ready

