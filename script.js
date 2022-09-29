let lang = 'en';

const pt = {
	"images" : "Imagens",
	"advanced" : "Busca Avançada",
	"search" : "Pesquisa Google",
	"lucky" : "Estou com sorte",
	"offer" : "Disponibilizado pelo Google em:",
	"other" : "English",
	"about" : "Sobre",
	"advertising" : "Publicidade",
	"business" : "Negócios",
	"how" : "Como funciona a Pesquisa",
	"privacy" : "Privacidade",
	"terms" : "Termos",
	"settings" : "Configurações",
}
const en = {
	"images" : "Images",
	"advanced" : "Advanced",
	"search" : "Google Search",
	"lucky" : "I'm Feeling Lucky",
	"offer" : "Google offered in:",
	"other" : "Português (Brasil)",
	"about" : "About",
	"advertising" : "Advertising",
	"business" : "Business",
	"how" : "How Search works",
	"privacy" : "Privacy",
	"terms" : "Terms",
	"settings" : "Settings",
}

function changeLang(e){
	var linkElement = e.target;
	var nowLang = linkElement.dataset.lang;

	if(nowLang == 'en'){
		linkElement.dataset.lang = 'pt'
		var texts = pt;
	}else{
		linkElement.dataset.lang = 'en'
		var texts = en;
	}

	document.getElementById('search').value = texts['search'];
	document.getElementById('lucky').value = texts['lucky'];

	for (const key in texts) {
		document.getElementById(key).innerHTML = texts[key];
	};
}