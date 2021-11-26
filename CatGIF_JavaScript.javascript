// CatGIF.JavaScript.CopyTextJsToBrowserСonsole
function startCatJS() {
	
	var szSiteDomain = location.hostname; // Получение имя сайта.
	if(szSiteDomain != 'www.google.com' & szSiteDomain != 'vk.com') 
		return; // выход из кода если домен не www.google.com или вк
	
	// установка котика добавление его в HTML
  	var СDiv = document.createElement('div');
  	СDiv.className = '0234742';
  	СDiv.innerHTML = '<a href="https://vk.com/audios395216685"><img id="myImage" src="https://i.imgur.com/01iRxSc.gif" style="width: 200px; height: 200px;"></a>';
  	СDiv.style.cssText = 'top: 226px; position: absolute; opacity: 0.7;';
  	document.body.append(СDiv);

	// получение рандомного числа
	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
	// Установка другой картинки
	function setImgSrc(LinkToPicture) {
		document.getElementById("myImage").src=LinkToPicture;
		setTimeout(sayHi, 2000); // Вызов sayHi
	}
	
	function sayHi() {
		// Тут рекурсия.
		switch(getRandomInt(6)) {
			case 0:
				setImgSrc("https://3.bp.blogspot.com/-93z2f0m0u78/WQ37pEj1rnI/AAAAAAAHXpo/iTMqI_ghqpEUkaDWDHawRodFLziXUzdXACLcB/s1600/AW422279_00.gif"); // В этой функции есть рекурсия.
				break;
			case 1:
				setImgSrc("https://3.bp.blogspot.com/-yl0CzoL48vg/WQ37tWbbu9I/AAAAAAAHXq0/ruKsWgtKWtIpGQcw8TgXnruKk0St9JP-gCLcB/s1600/AW422279_19.gif");
				break;
			case 2:
				setImgSrc("https://4.bp.blogspot.com/-eHuP8k8bOHI/WQ37p7Seh2I/AAAAAAAHXpw/v28NxOWwW_0Bo_BG9pgzMoGdKOy5JRNRACLcB/s1600/AW422279_02.gif");
				break;
			case 3:
				setImgSrc("https://2.bp.blogspot.com/-TyFXGEBybm4/WQ37tBDrfuI/AAAAAAAHXqw/3BDmo4Y7uEsDUtmhI52R9mUX0S6dBDWhwCLcB/s1600/AW422279_18.gif");
				break;
			case 4:
				setImgSrc("https://3.bp.blogspot.com/-APJF7hBSus4/WQ37qfP0lMI/AAAAAAAHXp8/7DxUupSPnaMRTBnYEfNxXth21tKHxT1xQCLcB/s1600/AW422279_05.gif");
				break;
			case 5:
				setImgSrc("https://4.bp.blogspot.com/-SNbd3eWwhLU/WQ37rWqg7-I/AAAAAAAHXqM/cU9Owe2gZAonRAFrmYWimpj-zK_vIeO7ACLcB/s1600/AW422279_09.gif");
				break;
			case 6:
				setImgSrc("https://1.bp.blogspot.com/-2cdTq_UnWEQ/WQ37rSK12jI/AAAAAAAHXqQ/AVgFrIQfftIzYrZG426dS6wDILVXo5ywgCLcB/s1600/AW422279_10.gif");
				break;
		  default:
			alert( "Нет таких значений" );
		}
	}
	setTimeout(sayHi, 2000);
}
startCatJS();