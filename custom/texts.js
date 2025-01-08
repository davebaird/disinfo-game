// For security reasons, text files from origin 'null' (i.e. local files!) have been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https
// Thus we cheat by using a JS file to upload the customisable texts we need

// possible keywords for TYPE: code / video / sfx / game / text / final
textLib = [
	{ // 00
	"ID":0,
	"type":"final",
	"FR":{
		"mission":"Votre oncle, personnalité médiatique, vient de débuter une visioconférence depuis l'Oregon pour montrer que le réchauffement climatique n'existe pas. Elle durera <strong>1 heure et demi</strong>.<br/><br/><strong>Avant la fin de sa conférence, vous devez trouver le mot de passe de son compte de visioconférence, DEZOOM, pour prendre le contrôle de la réunion.</strong><br/><br/>Cela vous permettra de prendre la parole en direct pour démonter chacun des arguments fallacieux que vous aurez trouvé lors de votre quête, en vous appuyant sur des arguments scientifiques.<br/><br/>Cliquez sur <strong>Commencer la mission puis révélez la carte 01.</strong><br/>",
		"desc":"Entrer le mot de passe à 5 chiffres qui déverouille la session DEZOOM.",
		"answer":"49301",
		"hint":"Bien tenté !",
		"won":"<span class='w3-text-capucine'>Bravo !</span> Vous avez réussi à déverrouiller le logiciel de visioconférence, et avez pu interrompre la diffusion du discours de votre oncle : grâce aux arguments scientifiques que vous maîtrisez désormais sur le bout des doigts, vous avez pu démonter un par un ses arguments fallacieux. Désormais, les climatosceptiques n'ont qu'à bien se tenir !",
		},
	"EN":{
		"mission":"",
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		},
	"DE":{
		"mission":"",
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		},
	"ES":{
		"mission":"",
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		}
	},
	{ // 01
	"ID":1,
	"type":"text",
	"FR":{
		"hint":"Regardez bien le tapis&hellip;",
		},
	"EN":{
		"hint":"",
		},
	"DE":{
		"hint":"",
		},
	"ES":{
		"hint":"",
		}
	},
	{ // 02
	"ID":2,
	"type":"code",
	"FR":{
		"desc":"Un code à 3 chiffres est nécessaire.",
		"answer":"416",
		"hint":"Un gaz à effet de serre pourrait ici vous aider.",
		"won":"Bravo, l’Ipad est déverrouillé ! <strong>Piochez la carte 24</strong>.",
		},
	"EN":{
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		},
	"DE":{
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		},
	"ES":{
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		}
	},
	{ // 06
	"ID":6,
	"type":"code",
	"FR":{
		"desc":"Un code à 5 lettres est nécessaire, tout en minuscules.",
		"answer":"glace",
		"hint":"Demandez de l’aide au Père Fouras !",	
		"won":"Le congélateur s’ouvre&hellip; <strong>Piochez la carte 58</strong>.",
		},
	"EN":{
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		},
	"DE":{
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		},
	"ES":{
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		}
	},
	{ // 12
	"ID":12,
	"type":"text",
	"FR":{
		"hint":"Cela ressemble à des observations de météo&hellip;",
		},
	"EN":{
		"hint":"",
		},
	"DE":{
		"hint":"",
		},
	"ES":{
		"hint":"",
		}
	},
	{ // 16
	"ID":16,
	"type":"game",
	"FR":{
		"desc":"La page jeux du journal <em>La Terre</em> vous propose de vous divertir.",
		"sub":"Météo ou climat ? Classez ces phrases selon leur correspondance.",
		"won":"ROND BLANC (notez ce résultat)<br/>Une clé tombe du journal : <strong>piochez la carte 62</strong>.",
		},
	"EN":{
		"desc":"",
		"sub":"",
		"won":"",
		},
	"DE":{
		"desc":"",
		"sub":"",
		"won":"",
		},
	"ES":{
		"desc":"",
		"sub":"",
		"won":"",
		}
	},
	{ // 17
	"ID":17,
	"type":"sfx",
	"FR":{
		"desc":"C'est l'heure d'écouter le jeu des 999€ !",
		"src":"custom/sono_FR.mp3",
		"sub":"Voici les réponses possibles :",
		"won":"",
		},
	"EN":{
		"desc":"",
		"src":"",
		"sub":"",
		"won":"",
		},
	"DE":{
		"desc":"",
		"src":"",
		"sub":"",
		"won":"",
		},
	"ES":{
		"desc":"",
		"src":"",
		"sub":"",
		"won":"",
		}
	},
	{ // 29
	"ID":29,
	"type":"text",
	"FR":{
		"hint":"Cherchez la localisation de ces aliments sur une carte&hellip; Et dans l’ordre !",
		},
	"EN":{
		"hint":"",
		},
	"DE":{
		"hint":"",
		},
	"ES":{
		"hint":"",
		}
	},
	{ // 36
	"ID":36,
	"type":"text",
	"FR":{
		"hint":"Si A vaut K, B vaut quoi ?",
		},
	"EN":{
		"hint":"",
		},
	"DE":{
		"hint":"",
		},
	"ES":{
		"hint":"",
		}
	},
	{ // 37
	"ID":37,
	"type":"code",
	"FR":{
		"desc":"Le bureau est fermé par un code à 4 chiffres.",
		"answer":"9483",
		"hint":"Des observations météo dans l’ordre seront utiles ici.",
		"won":"La porte du bureau s’ouvre dans un grincement. <strong>Piochez la carte 7</strong>.",
		},
	"EN":{
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		},
	"DE":{
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		},
	"ES":{
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		}
	},
	{ // 40
	"ID":40,
	"type":"code",
	"FR":{
		"desc":"Il faut ici un code à 4 chiffres.",
		"answer":"2647",
		"hint":"Le coffre fort est fermé, des livres pourraient vous aider !",
		"won":"Le coffre-fort s’ouvre, vous y trouvez un objet précieux : <br/><strong>piochez la carte 60</strong>.",
		},
	"EN":{
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		},
	"DE":{
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		},
	"ES":{
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		}
	},
	{ // 54
	"ID":54,
	"type":"text",
	"FR":{
		"hint":"Les villes reliées dans le bon ordre, cela donnera une carte à tirer&hellip;",
		},
	"EN":{
		"hint":"",
		},
	"DE":{
		"hint":"",
		},
	"ES":{
		"hint":"",
		}
	},
	{ // 66
	"ID":66,
	"type":"text",
	"FR":{
		"hint":"À quel type de météo ces descriptions peuvent bien correspondre ?",
		},
	"EN":{
		"hint":"",
		},
	"DE":{
		"hint":"",
		},
	"ES":{
		"hint":"",
		}
	},
	{ // 75
	"ID":75,
	"type":"code",
	"FR":{
		"desc":"Un code à 4 chiffres permettrait de démarrer la station météo.",
		"answer":"5038",
		"hint":"Connectez correctement les filsdepuis la station météo.",
		"won":"La station fonctionne ! Vous pouvez <strong>piocher la carte n°95.</strong>.",
		},
	},
	{ // 77
	"ID":77,
	"type":"text",
	"FR":{
		"hint":"Avez-vous bien regardé ce reflet ?",
		},
	"EN":{
		"hint":"",
		},
	"DE":{
		"hint":"",
		},
	"ES":{
		"hint":"",
		}
	},
	{ // 87
	"ID":87,
	"type":"video",
	"FR":{
		"desc":"Un scientifique a quelque chose à vous dire&hellip;",
		"src":"custom/mov_FR.mp4",
		"won":"",
		},
	"EN":{
		"desc":"",
		"src":"",
		"won":"",
		},
	"DE":{
		"desc":"",
		"src":"",
		"won":"",
		},
	"ES":{
		"desc":"",
		"src":"",
		"won":"",
		}
	},
	{ // 93
	"ID":93,
	"type":"text",
	"FR":{
		"hint":"Remettez les livres par ordre de taille, du plus grand au plus petit.",
		},
	"EN":{
		"hint":"",
		},
	"DE":{
		"hint":"",
		},
	"ES":{
		"hint":"",
		}
	},
	{ // 95
	"ID":95,
	"type":"text",
	"FR":{
		"hint":"Ces 3 chiffres pourraient servir de code.",
		},
	"EN":{
		"hint":"",
		},
	"DE":{
		"hint":"",
		},
	"ES":{
		"hint":"",
		}
	},
	{ // 96
	"ID":96,
	"type":"text",
	"FR":{
		"hint":"Comment le niveau de l’eau sera-t-il impacté lors de la fonte du glaçon ?",
		},
	"EN":{
		"hint":"",
		},
	"DE":{
		"hint":"",
		},
	"ES":{
		"hint":"",
		}
	},
];

// mini-cards for mini-game
allVignettes = [
	{ // 1
	"ID":1,
	"isClim":true,
	"FR":"De plus en plus de cyclones dans les régions tropicales.",
	"EN":"Tropical areas witness cyclones more and more often.",
	"DE":"",
	"ES":"",
	},
	{ // 2
	"ID":2,
	"isClim":true,
	"FR":"Dépaysement assuré pour les français à New York : hivers très froids et étés très chauds !",
	"EN":"Need a change of scenery? welcome to New York: very cold winters and very hot summers guaranteed!",
	"DE":"",
	"ES":"",
	},
	{ // 3
	"ID":3,
	"isClim":false,
	"FR":"Sortez vos écharpes ce week-end, le temps s'annonce glacial&hellip;",
	"EN":"Chilly temperatures this week-end, mind your scarfs&hellip;",
	"DE":"",
	"ES":"",
	},
	{ // 4
	"ID":4,
	"isClim":false,
	"FR":"Le 8 mai, grand soleil sur toute la France !",
	"EN":"On May 8th, great sunshine all over the country!",
	"DE":"",
	"ES":"",
	},
];