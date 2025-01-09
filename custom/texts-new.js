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
		"mission":"Your uncle, a media personality, has just started a video conference from Oregon to claim that climate change does not exist. It will last <strong>1.5 hours</strong>.<br/><br/><strong>Before the end of his conference, you must find the password for his DEZOOM video conferencing account to take control of the meeting.</strong><br/><br/>This will allow you to speak live and refute each of the fallacious arguments you find during your quest, using scientific evidence.<br/><br/>Click <strong>Start Mission and then reveal card 01.</strong><br/>",
		"desc":"Enter the 5-digit password to unlock the DEZOOM session.",
		"answer":"49301",
		"hint":"Nice try!",
		"won":"<span class='w3-text-capucine'>Well done!</span> You successfully unlocked the video conferencing software and interrupted your uncle's speech. Using the scientific arguments you now have at your fingertips, you refuted his fallacies one by one. Climate skeptics, beware!",
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
		"hint":"Take a close look at the carpet&hellip;",
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
		"desc":"A 3-digit code is required.",
		"answer":"416",
		"hint":"A greenhouse gas might help you here.",
		"won":"Well done, the iPad is unlocked! <strong>Draw card 24.</strong>",
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
		"desc":"A 3-letter code is required, all lowercase.",
		"answer":"ice",
		"hint":"Ask Père Fouras for help!",
		"won":"The freezer opens&hellip; <strong>Draw card 58.</strong>",
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
		"hint":"This looks like weather observations&hellip;",
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
		"desc":"The games page of the newspaper <em>La Terre</em> invites you to have fun.",
		"sub":"Weather or climate? Classify these statements according to their match.",
		"won":"WHITE CIRCLE (note this result)<br/>A key falls from the newspaper: <strong>draw card 62.</strong>",
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
		"src":"./custom/sono_FR.mp3",
		"sub":"Voici les réponses possibles :",
		"won":"",
		},
	"EN":{
		"desc":"It's time to listen to the €999 game!",
		"src":"./custom/sono_FR.mp3",
		"sub":"Here are the possible answers:",
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
		"hint":"Find the location of these foods on a map&hellip; And in order!",
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
		"hint":"Spell it out - a little carelessly.",
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
		"desc":"The office is locked with a 4-digit code.",
		"answer":"9483",
		"hint":"Weather observations in order will be helpful here.",
		"won":"The office door creaks open. <strong>Draw card 7.</strong>",
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
	{ // 39
	"ID":39,
	"type":"code",
	"FR":{
		"desc":"",
		"answer":"",
		"hint":"",
		"won":"",
		},
	"EN":{
		"desc":"A 4-digit code is needed here.",
		"answer":"2647",
		"hint":"The safe is locked; some books might help you!",
		"won":"The safe opens, and you find a valuable item: <br/><strong>draw card 60.</strong>",
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
		"hint":"The cities connected in the right order will yield a card to draw&hellip;",
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
		"hint":"What type of weather might these descriptions correspond to?",
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
	"EN":{
		"desc":"A 4-digit code would start the weather station.",
		"answer":"5038",
		"hint":"Correctly connect the wires from the weather station.",
		"won":"The station is operational! You can <strong>draw card 95.</strong>",
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
	{ // 77
	"ID":77,
	"type":"text",
	"FR":{
		"hint":"Avez-vous bien regardé ce reflet ?",
		},
	"EN":{
		"hint":"Did you take a good look at this reflection?",
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
		"src":"./custom/mov_FR.mp4",
		"won":"",
		},
	"EN":{
		"desc":"A scientist has something to tell you&hellip;",
		"src":"./custom/mov_EN.mp4",
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
		"hint":"Rearrange the books in order of size, from largest to smallest.",
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
		"hint":"These 3 digits might serve as a code.",
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
		"hint":"How will the water level be affected when the ice cube melts?",
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
