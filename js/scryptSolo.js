window.onload = function()
{
	//alert("Hola Sprites");
	var pasos = ["sprite-1", "sprite-2", "sprite-3", "sprite-4"];
	var num_camina = 1;
	var camina_inversa = 5;
	var camina = false;
	var cont = 0;

	setInterval(function()
	{
		if(!camina)
		{
			cont++;
			div("monacho").setAttribute("class", "li " + pasos[num_camina - 1]);
			num_camina++;
			if(num_camina >= 5)
			{
				num_camina = 1;
			}

			//if(cont % 5 == 0)
			//{
		    /*	div("monacho2").setAttribute("class", "caminar " + pasos[camina_inversa - 1]);
				camina_inversa--;
				if(camina_inversa <= 1)
				{
					camina_inversa = 5;

				}
				cont = 0; */
			//} 
		}
	}, 100);

	div("up").addEventListener('click', function(event)
	{
		camina = !camina;
		
		if(camina == true)
		{
			camina = false;
		}
		else
		{
			camina = true;
		}
		

	});
	function div(div)
	{
		return document.getElementById(div);
	}
}