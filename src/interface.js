//
// INTERFACE.JS for ESCAPEGAME.HTML
//
// For security reasons, text files from origin 'null' (i.e. local files!) have been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https
// Thus we cheat by using a JS file to upload the customisable texts we need
	
textGUI = {
"FR":{
	"#mainTitle":"Climato-complot",
	".credButton":"Crédits",
	".helpButton":"Instructions",
	".langSelect":"Choisis ta langue",
	".helpDesc":"Bienvenue dans l'application qui accompagne le jeu Climato Complot. Pour jouer, vous avez besoin de cette application et des cartes à jouer. Il est possible d'enregistrer la page internet en mode hors-connexion pour jouer sans réseau. <br/><br/>Les cartes à jouer sont disponibles gratuitement sur cette page et doivent être préalablement imprimées en <strong>recto-verso</strong>. Le fichier a été fait pour être directement imprimé en recto-verso sans manipulation complexe de votre part. <br/><br/><strong>Sans regarder le recto</strong>, découpez les cartes en suivant les traits figurants sur le verso (face comportant les numéros).",
	".welcomeButton":"Bienvenue !",
	".refButton":"Références",
	".resetButton":"Rejouer",
	".missionButton":"Mission",
	".startButton":"Commencer la mission",
	".playButton":"Retour au jeu",
	".backButton":"RETOUR",
	".downButton":"Télécharger les cartes",
	".giveUpDesc":"Êtes-vous certain de vouloir arrêter la partie ?",
	".timeOutDesc":"Le temps imparti est écoulé.",
	".giveUpButton":"Abandonner",
	".dontGiveUpButton":"Retourner au jeu",
	".OKButton":"Valider",
	".cancelButton":"Annuler",
	".continueButton":"Continuer",
	".subDV":"Code",
	".subIT":"Interaction",
	".subID":"Indice",
	".subCF":"Code final",
	".subPE":"Pénalité",
	".hintDV":"Numéro de carte",
	".hintDV1":"Saisissez le code",
	".hintIT":"Numéro de carte",
	".hintID":"Numéro de carte",
	".hintCF":"Saisissez le code final",
	".wantDV":"Quelle carte souhaitez-vous déverrouiller ?",
	".subDV1":"Quel est le code de la carte ?",
	".wantIT":"Avec quelle carte souhaitez-vous intéragir ?",
	".wantID":"Pour quelle carte souhaitez-vous un indice ?",
	".wantCF":"Quel est le code final ?",
	".wantPE":"Pénalité prise en compte : <br/>vous perdez 1 minute.",
	".cantDV":"Erreur : il n'est pas possible de déverrouiller la carte #",
	".cantDV1":"Erreur : ce n'est pas le code de la carte #",
	".cantIT":"Erreur : il n'est pas possible d'intéragir avec la carte #",
	".cantIT3":"hum&hellip; il reste quelques erreurs&hellip;",
	".cantID":"Erreur : il n'y a pas d'indice pour la carte #",
	".cantCF":"Erreur ! Vous perdez 1 minute.",
	".textAreaDefault":"votre réponse",
	".pauseButton":"Pause",
	".miniClim":"Climat",
	".miniWeat":"Météo",
	".timeButton":"Temps",
	".hintButton":"Indices",
	".partnButton":"Partenaires et financeurs",
	".egideButton":"Sous l'égide de",
	".fundingButton":"Contributeur principal",
	".memberButton":"Membres fondateurs",
	".supportButton":"Avec le soutien de",
	"#yeahButton":"Bravo !",
	".glossButton":"Glossaire",
	".warningPortrait":"Pour un meilleur confort de jeu, pivotez votre appareil !",
	".sourceDesc":"Cinquième rapport du GIEC &ndash; AR5 WG1 &ndash; chapitre 6, page 471.",
	".credDesc":"Cette animation s'inspire de l'excellent Unfake conçu par Guillaume Berthelot, pour les élèves.<br/><br/> L'OCE encourage l'utilisation, la reproduction et la diffusion de ce matériel. À l'exception des photos, les documents peuvent être copiés, téléchargés et imprimés pour un usage personnel, pédagogique ou scientifique, ainsi que pour toute utilisation non commerciale. Toutes les demandes de droits de traduction et d'adaptation doivent être envoyées à contact&lt;at&gt;oce.global. Les ressources pédagogiques sont disponibles sur le site Web de l’OCE.<br/><br/>	<strong>Conception - programmation :</strong> Mathieu Hirtzig<br/><strong>Graphisme :</strong> Simon Klein <br/><strong>Charte graphique :</strong> Mareva Sacoun"
	},
"EN":{
	"#mainTitle":"Agriculture fields diversity",
	".credButton":"Credits",
	".helpButton":"Instructions",
	".langSelect":"Choose your language",
	".helpDesc":"Choose a region and observe. ",
	".welcomeButton":"Welcome!",
	".refButton":"References",
	".resetButton":"Restart",
	".missionButton":"Mission",
	".startButton":"Start the game",
	".playButton":"Back to the game",
	".backButton":"ALL REGIONS",
	".downButton":"Download cards",
	".giveUpDesc":"Are you sure you want to give up?",
	".timeOutDesc":"Time's up.",
	".giveUpButton":"Give up",
	".dontGiveUpButton":"Back to the game",
	".OKButton":"Enter",
	".cancelButton":"Annuler",
	".continueButton":"Continue",
	".subDV":"Code",
	".subIT":"Interaction",
	".subID":"Hint",
	".subCF":"Final code",
	".subPE":"Penalty",
	".hintDV":"Card number",
	".hintDV1":"Enter code",
	".hintIT":"Card number",
	".hintID":"Card number",
	".hintCF":"Enter final code",
	".wantDV":"Enter the number of the card you wish to unlock",
	".wantIT":"Enter the number of the card you wish to interact with",
	".wantID":"Enter the number of the card you wish a hint for",
	".wantCF":"Enter the final secret code",
	".wantPE":"Penalty aknowledged: you lose 1 minute.",
	".cantDV":"Sorry, you cannot unlock card #",
	".cantIT":"Sorry, you cannot interact with card #",
	".cantIT3":"Sorry, wrong answer.<br/>Try again.",
	".cantID":"Sorry, there is no hint for card #",
	".cantCF":"Wrong! You lose 1 minute.",
	".textAreaDefault":"Input field",
	".pauseButton":"Pause",
	".miniClim":"Climate",
	".miniWeat":"Weather",
	".timeButton":"Time elapsed",
	".hintButton":"Hints used",
	".partnButton":"Partners and sponsors",
	".egideButton":"Under the auspices of",
	".fundingButton":"Main sponsor",
	".memberButton":"Founding members",
	".supportButton":"With the support of",
	"#yeahButton":"Congrats!",
	".glossButton":"Glossary",
	".warningPortrait":"To enjoy a better view of the game, please rotate your phone",
	".sourceDesc":"Fifth IPCC Assessment Report &ndash; AR5 WG1 &ndash; chapter 6, page 471.",
	".credDesc":"The OCE encourages the use, reproduction and dissemination of this material. Except the photos, material may be copied, downloaded and printed for private study, research and teaching purposes, or for use for non-commercial purposes. All requests for translation and adaptation rights should be made via contact&lt;at&gt;oce.global. OCE information products are available on the OCE website.<br/><br/>	<strong>Software design:</strong> Mathieu Hirtzig<br/><strong>Art work:</strong> Romain Garouste<br/><strong>Graphical charter:</strong> Mareva Sacoun"
	},
"DE":{
	"#mainTitle":"Klimawandel &ndash; Anstieg des Meeresspiegels",
	".credButton":"Kredite",
	".helpButton":"Hilfe",
	".langSelect":"Sprache wählen",
	".helpDesc":"Choose a region and observe. ",
	".welcomeButton":"Willkommen!",
	".refButton":"Bildnachweise",
	".resetButton":"Erneut spielen",
	".missionButton":"Mission",
	".startButton":"Start the game",
	".playButton":"Lass uns spielen !",
	".backButton":"ZURÜCK",
	".downButton":"Download cards",
	".giveUpDesc":"Are you sure you want to give up?",
	".timeOutDesc":"Time's up.",
	".giveUpButton":"Give up",
	".dontGiveUpButton":"Back to the game",
	".OKButton":"Enter",
	".cancelButton":"Annuler",
	".continueButton":"Continue",
	".subDV":"Code",
	".subIT":"Interaction",
	".subID":"Hint",
	".subCF":"Final code",
	".subPE":"Penalty",
	".hintDV":"Card number",
	".hintDV1":"Enter code",
	".hintIT":"Card number",
	".hintID":"Card number",
	".hintCF":"Enter final code",
	".wantDV":"Enter the number of the card you wish to unlock",
	".wantIT":"Enter the number of the card you wish to interact with",
	".wantID":"Enter the number of the card you wish a hint for",
	".wantCF":"Enter the final secret code",
	".wantPE":"Penalty aknowledged: you lose 1 minute.",
	".cantDV":"Sorry, you cannot unlock card #",
	".cantIT":"Sorry, you cannot interact with card #",
	".cantIT3":"Sorry, wrong answer.<br/>Try again.",
	".cantID":"Sorry, there is no hint for card #",
	".cantCF":"Wrong! You lose 1 minute.",
	".textAreaDefault":"Input field",
	".pauseButton":"Pause",
	".miniClim":"Klima",
	".miniWeat":"Weather",
	".timeButton":"Time elapsed",
	".hintButton":"Hints used",
	".partnButton":"Partner und Sponsoren",
	".egideButton":"Unter der Schirmherrschaft von",
	".fundingButton":"Sponsoren",
	".memberButton":"Gründungsmitglieder",
	".supportButton":"Mit der Unterstützung von",
	"#yeahButton":"Herzlichen Glückwunsch!",
	".glossButton":"Lexikon",
	".warningPortrait":"To enjoy a better view of the game, please rotate your phone",
	".sourceDesc":"Fünfter IPCC-Bewertungsbericht &ndash; AR5 WG1 &ndash; Kapitel 6, Seite 471.",
	".credDesc":"Das OCE erlaubt ausdrücklich die Nutzung, Vervielfältigung und Verbreitung dieser Animation. Mit Ausnahme der Fotos darf das Material für private Studien-, Forschungs- und Lehrzwecke oder für nichtkommerzielle Zwecke kopiert, heruntergeladen und gedruckt werden. Senden Sie bitte alle Anfragen zu Übersetzungs- und Anpassungsrechten an contact&lt;at&gt;oce.global. Auf der Webseite des OCE gibt es weitere Unterrichtsmaterialien.<br/><br/>	<strong>Design &ndash; Programmierung:</strong> Mathieu Hirtzig<br/><strong>Gestaltung:</strong> Romain Garouste<br/><strong>Grafisches Layout:</strong> Mareva Sacoun"
	},
"ES":{
	"#mainTitle":"Cambio Climático &ndash; Aumento del nivel del mar",
	".credButton":"Créditos",
	".helpButton":"Ayuda",
	".langSelect":"Elige tu idioma",
	".helpDesc":"Choose a region and observe. ",
	".welcomeButton":"Bienvenido!",
	".refButton":"Referencias",
	".resetButton":"Reanudar",
	".missionButton":"Mission",
	".startButton":"Start the game",
	".playButton":"Juguemos (otra vez) !",
	".backButton":"BACK",
	".downButton":"Download cards",
	".giveUpDesc":"Are you sure you want to give up?",
	".timeOutDesc":"Time's up.",
	".giveUpButton":"Give up",
	".dontGiveUpButton":"Back to the game",
	".OKButton":"Enter",
	".cancelButton":"Annuler",
	".continueButton":"Continue",
	".subDV":"Code",
	".subIT":"Interaction",
	".subID":"Hint",
	".subCF":"Final code",
	".subPE":"Penalty",
	".hintDV":"Card number",
	".hintDV1":"Enter code",
	".hintIT":"Card number",
	".hintID":"Card number",
	".hintCF":"Enter final code",
	".wantDV":"Enter the number of the card you wish to unlock",
	".wantIT":"Enter the number of the card you wish to interact with",
	".wantID":"Enter the number of the card you wish a hint for",
	".wantCF":"Enter the final secret code",
	".wantPE":"Penalty aknowledged: you lose 1 minute.",
	".textAreaDefault":"Input field",
	".cantDV":"Sorry, you cannot unlock card #",
	".cantIT":"Sorry, you cannot interact with card #",
	".cantIT3":"Sorry, wrong answer.<br/>Try again.",
	".cantID":"Sorry, there is no hint for card #",
	".cantCF":"Wrong! You lose 1 minute.",
	".pauseButton":"Pause",
	".miniClim":"Climate",
	".miniWeat":"Weather",
	".timeButton":"Time elapsed",
	".hintButton":"Hints used",
	".partnButton":"Socios y patrocinadores",
	".egideButton":"Bajo los auspicios de",
	".fundingButton":"Patrocinadores",
	".memberButton":"Miembros fundadores",
	".supportButton":"Con el apoyo de",
	"#yeahButton":"Bien hecho!",
	".glossButton":"Glosario",
	".warningPortrait":"To enjoy a better view of the game, please rotate your phone",
	".sourceDesc":"Quinto Informe de Evaluación del IPCC &ndash; AR5 WG1 &ndash; capítulo 6, página 471.",
	".credDesc":"La OCE fomenta el uso, la reproducción y la difusión de este material. Excepto las fotos, el material puede copiarse, descargarse e imprimirse para fines privados de estudio, investigación y enseñanza, o para su uso con fines no comerciales. Todas las solicitudes de derechos de traducción y adaptación deben realizarse a través de contact&lt;at&gt;oce.global. Los productos de información de OCE están disponibles en el sitio web de OCE.<br/><br/>	<strong>Concepción - programación:</strong> Mathieu Hirtzig<br/><strong>Gráficos:</strong> Romain Garouste<br/><strong>Mapa gráfico:</strong> Mareva Sacoun"
	}
};
