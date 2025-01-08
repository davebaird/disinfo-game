lang = "FR";
currentPage = "Q0";
launchedGame = false;
pausedGame = true;
pauseDuration = 0;
chronoInit = 90*60*10; // full chronometer in tenths of seconds
// chronoInit = 15*10; // full chronometer in tenths of seconds
chrono = chronoInit;
nPenalty = 0;
currentCard = 0;
currentAction = "MI";
hoveredItem = "none";
videoFullScreen = false;
miniGameWon = false;
gameOver = false;
hintsUsed = 0;
svgGrad = "<defs>"+
	"<radialGradient id=\"grad1\" cx=\"50%\" cy=\"50%\" r=\"50%\" fx=\"50%\" fy=\"50%\">"+
		"<stop offset=\"70%\" style=\"stop-color:rgba(49,60,69,.6)\" />"+
		"<stop offset=\"100%\" style=\"stop-color:rgba(49,60,69,.0)\" />"+
	"</radialGradient>"+
    "<filter id=\"shadow\">"+
	  "<feDropShadow dx=\"-15\" dy=\"10\" stdDeviation=\"2\" flood-color=\"grey\" flood-opacity=\"0.5\"/>"+
    "</filter>"+
	"</defs>";
svgGrad2 = "<defs>"+
    "<filter id=\"shadow2\">"+
	  "<feDropShadow dx=\"-15\" dy=\"10\" stdDeviation=\"2\" flood-color=\"grey\" flood-opacity=\"0.5\"/>"+
    "</filter>"+
	"</defs>";
veilOn = false;
wrongMiniGame = false;
smartPhone = false;
today = new Date();


// Reset all
function resetMain(){
  launchedGame = false;
  pausedGame = true;
  pauseDuration = 0;
  miniGameWon = false;
  wrongMiniGame = false;
  chrono = chronoInit;
  today = new Date();
  nPenalty = 0;
  currentCard = 0;
  hintsUsed = 0;
  currentAction = "BF"; // briefing
  veilOn = false;
  for (var i=0; i<allVignettes.length; i++){
	  allVignettes[i].x = .5;
	  allVignettes[i].y = .1;
  };
  allVignettes = shuffle(allVignettes);
  // console.log(allVignettes);
  updateMat();
  togglePage();
};


// Update gaming mat
function updateMat(){
	smartPhone = (window.innerWidth <= 800);
	var myWinH = window.innerHeight-(smartPhone ? 0 : 60);
	var myWinW = window.innerWidth;
	document.getElementById("globalContainer").style = "background-image: url(img/back"+
		(currentPage == "Q1" && veilOn ? "-veil" : "")+".png); min-height:100%";

	if (myWinW >= window.innerHeight) {

		var blah = svgGrad;
		var blah2 = svgGrad2;
		var veil = false;
		var tmp = getNeedle(textLib,"ID",currentCard);

		if (!smartPhone) { // Desktop view
			document.getElementById("interactiveWin").style = "padding:0px; margin:0px auto; max-width:"+
				(Math.min(1366, Math.floor(1366*myWinH/709.)))+"px";
			document.getElementById("interactiveWin2").style = "width:100%; padding:0px; margin:0px auto; max-width:"+
				Math.floor(1366*myWinH/709.)+"px";
			var elem = document.getElementById("selectWorld");
			elem.setAttribute("viewBox", "0 0 1366 709");


			// default view (mission / clock / buttons)
			if (currentAction != "MI") {
				blah += addRoundRect(612,-4,140,40,
					(hoveredItem == "MI" ? "#EC6661" : (veilOn ? "#65747D" : "#B4C8D1")),
					"<span id=\"myTitleMI\" style=\"color:#313C45!important\" >"+
					"<span class=\"icon-arrow1-down-14\" > &nbsp;</span>"+textGUI[lang][".missionButton"]+
					"</span>",
					(pausedGame ? "" :"class=\"pin-map\" id=\"myButtonMI\" onmouseover=\"hoverIcon('MI')\" onmouseout=\"hoverIconOFF()\" onclick=\"changeView('MI')\""));
			}
			blah += addClock();
			blah += addButton( 372,225,"&#xE944","DV"); // unlock
			blah += addButton( 546,225,"&#xE945","IT"); // interact
			blah += addButton( 720,225,"&#xE93D","ID"); // hint
			blah += addButton( 892,225,"&#xE93E","CF"); // final code
			blah += addPenaltyButton(969,100,"&#xE943"); // penalty
			blah += addPauseButton(854,100,(pausedGame ? "&#xE946;" : "&#xE942" )); // pause/unpause
			blah += addWhiteButton(1212,36,"&#xE918",
				(pausedGame ? "" :"class=\"pin-map\" onclick=\"changeView('GU')\"")); //give up
			blah += "<text x=\"1247\" y=\"42\" fill=\"#313C45\" "+
					"style=\"font-size:11px; text-transform: uppercase; font-weight:bold; letter-spacing:1px; font-family:OpenSans\" "+
					(pausedGame ? "" : "class=\"pin-map\" onclick=\"changeView('GU')\"")+">"+
					textGUI[lang][".giveUpButton"]+"</text>";

			// interaction tools (question / form / buttons)
			if (isInside(currentAction, ["DV","DV1","IT","ID","CF"])){
				blah += "<rect x=\"333\" y=\"408\" width=\"700\" height=\"250\" fill=\"white\" stroke=\"none\" />";
				blah += "<text x=\""+(333+350)+"\" y=\""+(408+55)+"\" fill=\""+
					(currentAction == "DV1" ? "#EC6661" : "#313C45")+"\" "+
					"style=\"font-size:20px; text-anchor:middle; text-transform: uppercase; font-weight:bold; letter-spacing:1px; font-family:OpenSans; pointer-events:none\" >"+
					textGUI[lang][".sub"+currentAction]+"</text>";
				blah += "<text x=\""+(333+350)+"\" y=\""+(408+75)+"\" fill=\"#313C45\" "+
					"style=\"font-size:14px; text-anchor:middle; letter-spacing:1px; font-family:OpenSans; pointer-events:none\" >"+
					(isInside(currentAction,["CF","DV1"]) ? tmp[lang].desc : textGUI[lang][".want"+currentAction])+"</text>";
				blah += "<foreignObject x=\""+(333+90)+"\" y=\""+(408+128)+"\" width=\"250\" height=\"40\" >"+
					"<span style=\"color:#FFF; font-family:OpenSans\" >"+
					"<input class=\"input input-empty\" id=\"textboxId\" type=\"text\" value=\""+textGUI[lang][".hint"+currentAction]+"\" onclick=\"cleanTextArea()\" />"+
					"</span>"+
					"</foreignObject>";
				blah += addRoundRect(333+362,408+128,120,40,"#EC6661",textGUI[lang][".OKButton"],"class=\"pin-map\" onclick=\"checkAnswer()\" ");
				blah += addRoundRect(333+492,408+128,120,40,"#313C45",textGUI[lang][".cancelButton"],"class=\"pin-map\" onclick=\"changeView()\" ");
			};

			// popin
			switch (currentAction) {
				// big boxes
				case "BF": // briefing
					blah += bigBox();
					blah += addWhiteButton(1042,156,"&#xE91E","class=\"pin-map\" onclick=\"resetMain()\"");
					blah += addTextBlob(283+40,200,800-80,129+450-80-200-40,"#313C45",textLib[0][lang]["mission"]);
					blah += "<text x=\"683\" y=\"180\" fill=\"#EC6661\" "+
						"style=\"font-size:20px; text-anchor:middle; font-family:OpenSans\" >"+
						textGUI[lang][".missionButton"].toUpperCase()+"</text>";
					blah += addRoundRect(572,129+450-80,220,40,"#EC6661",textGUI[lang][".startButton"],"class=\"pin-map\" onclick=\"startGame()\" ");
					break;
				case "CF1": // victory!
					blah += bigBox();
					blah += "<text x=\"683\" y=\"230\" fill=\"#EC6661\" "+
						"style=\"font-size:64px; text-anchor:middle; font-family:OCEicon\" >&#xE914;</text>";
					blah += addWhiteButton(1042,156,"&#xE91E","class=\"pin-map\" onclick=\"resetMain()\"");
					blah += addTextBlob(283+40,247,720,100,"#313C45",textLib[0][lang]["won"]);
					// time elapsed
					blah += "<rect x=\"517\" y=\"367\" width=\"150\" height=\"150\" fill=\"#75909E\" stroke=\"none\" />";
					blah += "<text x=\"592\" y=\"444\" fill=\"#FFF\" "+
						"style=\"font-size:54px; text-anchor:middle; font-family:OCEicon\" >&#xE93F;</text>";
					blah += "<text x=\"592\" y=\"469\" fill=\"#313C45\" "+
						"style=\"font-size:14px; text-anchor:middle; text-transform:uppercase; font-family:OpenSans\" >"+textGUI[lang][".timeButton"]+"</text>";
					blah += "<text x=\"592\" y=\"493\" fill=\"#FFF\" "+
						"style=\"font-size:20px; text-anchor:middle; font-family:OpenSans\" >"+textClock((chronoInit-chrono)/10)+"</text>";
					// hints used
					blah += "<rect x=\"699\" y=\"367\" width=\"150\" height=\"150\" fill=\"#75909E\" stroke=\"none\" />";
					blah += "<text x=\"774\" y=\"444\" fill=\"#FFF\" "+
						"style=\"font-size:54px; text-anchor:middle; font-family:OCEicon\" >&#xE93D;</text>";
					blah += "<text x=\"774\" y=\"469\" fill=\"#313C45\" "+
						"style=\"font-size:14px; text-anchor:middle; text-transform:uppercase; font-family:OpenSans\" >"+textGUI[lang][".hintButton"]+"</text>";
					blah += "<text x=\"774\" y=\"493\" fill=\"#FFF\" "+
						"style=\"font-size:20px; text-anchor:middle; font-family:OpenSans\" >"+hintsUsed+"</text>";
					break;
				case "IT1": // play SFX
					blah += bigBox();
					blah += addWhiteButton(1042,156,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					blah += addTextBlobCentred(283+40,129+40,800-80,32,"#313C45",
						"<span style=\"font-weight:bold\"><span style=\"color:#75909E; text-transform:uppercase\">"+textGUI[lang][".subIT"]+"&nbsp;>&nbsp;</span>"+
						tmp[lang].desc+"</span>");
					blah += "<image x=\"608\" y=\"352\" xlink:href=\"custom/hint_sfx.png\""+
						" width=\"150\" height=\"200\" />";
					blah += addTextBlobCentred(283+40,300,800-80,20,"#313C45",tmp[lang].sub);
					blah += "<foreignObject x=\"538\" y=\"222\" width=\"290\" height=\"40\" >"+
						"<audio controls>"+
						"<source src=\"./custom/sfx_"+lang+".ogg\" type=\"audio/ogg\">"+
						"<source src=\"./custom/sfx_"+lang+".mp3\" type=\"audio/mpeg\">"+
						"Your browser does not support the audio element."+
						"</audio>"+
						"</foreignObject>";
					break;
				case "IT2": // play VIDEO
					var elem = document.getElementById("video1");
					// full screen video
						// blah2 += fullScreen();
						blah2 += addTextBlobCentred(40,30,1366-80,32,"#313C45",
							"<span style=\"font-weight:bold\"><span style=\"color:#75909E; text-transform:uppercase\">"+textGUI[lang][".subIT"]+"&nbsp;>&nbsp;</span>"+
							tmp[lang].desc+"</span>");
						blah2 += "<rect x=\"108\" y=\"67\" width=\"1150\" height=\"600\" fill=\"#000\" stroke=\"none\" />";
						blah2 += "<foreignObject x=\"150\" y=\"67\" width=\"1065\" height=\"600\" >"+
							"<video id=\"video2\" width=\"1065\" onclick=\"playVid()\">"+
							"<source src=\"custom/mov_"+lang+".ogg\" type=\"video/ogg\">"+
							"<source src=\"custom/mov_"+lang+".mp4\" type=\"video/mp4\">"+
							"Your browser does not support HTML video."+
							"</video>"+
							"</foreignObject>";
						blah2 += "<text id=\"video1PlayButton\" x=\"150\" y=\"640\" fill=\"#FFF\" "+
						"style=\"font-size:20px; text-anchor:middle; font-family:OCEicon\" class=\"pin-map\" onclick=\"playVid()\" >&#xE93B;</text>";
						blah2 += "<text id=\"video1PlayState\" x=\"1180\" y=\"634\" fill=\"#FFF\" "+
						"style=\"font-size:12px; text-anchor:end; font-family:OpenSans\" class=\"pin-map\" onclick=\"playVid()\" >"+textClock(0)+"</text>";
						blah2 += "<text id=\"video1PlayDuration\" x=\"1232\" y=\"634\" fill=\"#75909E\" "+
						"style=\"font-size:12px; text-anchor:end; font-family:OpenSans\" class=\"pin-map\" onclick=\"playVid()\" >/"+textClock(0)+"</text>";
						blah2 += "<line x1=\"184\" y1=\"630\" x2=\"1124\" y2=\"630\" style=\"stroke:#75909E; stroke-width:4\"  id=\"video2State\" />";
						blah2 += "<line x1=\"184\" y1=\"630\" x2=\"185\" y2=\"630\" style=\"stroke:#EC6661; stroke-width:4\" id=\"video2Progress\" />";
						blah2 += addWhiteButton(1320,20,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
						if (!smartPhone) {blah2 += addWhiteButton(1284,20,"&#xE93A","class=\"pin-map\" onclick=\"screenVid()\"");};
					if (!smartPhone)  {
						blah += bigBox();
						blah += addTextBlobCentred(283+40,129+40,800-80,32,"#313C45",
							"<span style=\"font-weight:bold\"><span style=\"color:#75909E; text-transform:uppercase\">"+textGUI[lang][".subIT"]+"&nbsp;>&nbsp;</span>"+
							tmp[lang].desc+"</span>");
						blah += "<rect x=\"383\" y=\"200\" width=\"600\" height=\"338\" fill=\"#000\" stroke=\"none\" />";
						blah += "<foreignObject x=\"383\" y=\"200\" width=\"600\" height=\"338\" >"+
							"<video id=\"video1\" width=\"600\" onclick=\"playVid()\">"+
							"<source src=\"custom/mov_"+lang+".ogg\" type=\"video/ogg\">"+
							"<source src=\"custom/mov_"+lang+".mp4\" type=\"video/mp4\">"+
							"Your browser does not support HTML video."+
							"</video>"+
							"</foreignObject>";
						blah += "<text id=\"video1PlayButton\" x=\"403\" y=\"528\" fill=\"#FFF\" "+
						"style=\"font-size:20px; text-anchor:middle; font-family:OCEicon\" class=\"pin-map\" onclick=\"playVid()\" >&#xE93B;</text>";
						blah += "<text id=\"video1PlayState\" x=\"900\" y=\"524\" fill=\"#FFF\" "+
						"style=\"font-size:12px; text-anchor:end; font-family:OpenSans\" class=\"pin-map\" onclick=\"playVid()\" >"+textClock(0)+"</text>";
						blah += "<text id=\"video1PlayDuration\" x=\"960\" y=\"524\" fill=\"#75909E\" "+
						"style=\"font-size:12px; text-anchor:end; font-family:OpenSans\" class=\"pin-map\" onclick=\"playVid()\" >/"+textClock(0)+"</text>";
						blah += "<line x1=\"436\" y1=\"520\" x2=\"846\" y2=\"520\" style=\"stroke:#75909E; stroke-width:4\" id=\"video1State\" />";
						blah += "<line x1=\"436\" y1=\"520\" x2=\"437\" y2=\"520\" style=\"stroke:#EC6661; stroke-width:4\" id=\"video1Progress\" />";
						blah += addWhiteButton(1042,156,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
						blah += addWhiteButton(1006,156,"&#xE939","class=\"pin-map\" onclick=\"screenVid()\"");
					};
					break;
				case "IT3": // play GAME
					// full screen video
						// blah2 += fullScreen();
						blah2 += addTextBlobCentred(40,30,1286,32,"#313C45",
							"<span style=\"font-weight:bold\"><span style=\"color:#75909E; text-transform:uppercase\">"+textGUI[lang][".subIT"]+"&nbsp;>&nbsp;</span>"+
							tmp[lang].desc+"</span>");
						blah2 += addTextBlobCentred(20,62,1326,32,"#313C45",tmp[lang].sub);
						blah2 += "<g id=\"mapNameChart2\" >";
						blah2 += addRectangle(20,100,1326/2,575,"#A9D2DC","<span style=\"font-size:80px; color:#DDEDF1!important; font-weight:bold\">"+textGUI[lang][".miniWeat"]+"</span>");
						blah2 += addRectangle(20+1326/2,100,1326/2,575,"#84B8AB","<span style=\"font-size:80px; color:#CEE3DD!important; font-weight:bold\">"+textGUI[lang][".miniClim"]+"</span>");
						// vignettes
						  for (var i=0; i<allVignettes.length; i++) {
							  blah2 += addVignette(i,true);
						  };
						blah2 += "<rect x=\"616\" y=\"628\" rx=\"4\" ry=\"4\" width=\"135\" height=\"55\" style=\"fill:#FFF; stroke-width:15; stroke:#FFF\" />";
						blah2 += addRectangle(623,635,120,40,"#EC6661",textGUI[lang][".OKButton"],"class=\"pin-map\" onclick=\"checkMiniGame()\" ");
						if (wrongMiniGame){
							blah2 += "<rect x=\"20\" y=\"100\" width=\"1326\" height=\"575\" fill=\"rgba(49,60,69,.8)\" stroke=\"none\" />"; // grey veil
							blah2 += "<text x=\"683\" y=\"350\" fill=\"#FFF\" "+
								"style=\"font-size:64px; text-anchor:middle; font-family:OCEicon\" >&#xE940;</text>";
							blah2 += addTextBlobCentred(283+40,350,720,70,"#FFF",textGUI[lang][".cantIT3"]);
							blah2 += addRectangle(623,420,120,40,"#EC6661",textGUI[lang][".continueButton"],"class=\"pin-map\" onclick=\"retryMiniGame()\" ");
						};
						blah2 += "</g>";
						blah2 += addWhiteButton(1320,20,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
						if (!smartPhone) {blah2 += addWhiteButton(1284,20,"&#xE93A","class=\"pin-map\" onclick=\"screenVid()\"");}
					if (!smartPhone) { // bigBox only
						blah += bigBox();
						blah += addTextBlobCentred(303,129+30,760,32,"#313C45",
							"<span style=\"font-weight:bold\"><span style=\"color:#75909E; text-transform:uppercase\">"+textGUI[lang][".subIT"]+"&nbsp;>&nbsp;</span>"+
							tmp[lang].desc+"</span>");
						blah += addTextBlobCentred(303,129+62,760,32,"#313C45",tmp[lang].sub);
						blah += "<g id=\"mapNameChart1\" >";
						blah += addRectangle(303,229,760/2,338,"#A9D2DC","<span style=\"font-size:80px; color:#DDEDF1!important; font-weight:bold\">"+textGUI[lang][".miniWeat"]+"</span>");
						blah += addRectangle(303+760/2,229,760/2,338,"#84B8AB","<span style=\"font-size:80px; color:#CEE3DD!important; font-weight:bold\">"+textGUI[lang][".miniClim"]+"</span>");
						// vignettes
						  for (var i=0; i<allVignettes.length; i++) {
							  blah += addVignette(i);
						  };
						blah += "<rect x=\"616\" y=\"520\" rx=\"4\" ry=\"4\" width=\"135\" height=\"50\" style=\"fill:#FFF; stroke-width:15; stroke:#FFF\" />";
						blah += addRectangle(623,229+338-40,120,40,"#EC6661",textGUI[lang][".OKButton"],"class=\"pin-map\" onclick=\"checkMiniGame()\" ");
						if (wrongMiniGame){
							blah += "<rect x=\"303\" y=\"229\" width=\"760\" height=\"338\" fill=\"rgba(49,60,69,.8)\" stroke=\"none\" />"; // grey veil
							blah += "<text x=\"683\" y=\"350\" fill=\"#FFF\" "+
								"style=\"font-size:64px; text-anchor:middle; font-family:OCEicon\" >&#xE940;</text>";
							blah += addTextBlobCentred(283+40,350,720,70,"#FFF",textGUI[lang][".cantIT3"]);
							blah += addRectangle(623,420,120,40,"#EC6661",textGUI[lang][".continueButton"],"class=\"pin-map\" onclick=\"retryMiniGame()\" ");
						};
						blah += "</g>";
						blah += addWhiteButton(1042,156,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
						blah += addWhiteButton(1006,156,"&#xE939","class=\"pin-map\" onclick=\"screenVid()\"");
					};
					break;
				case "IT3a": // lost mini game
					blah += smallBox();
					blah += addTextBlobCentred(523,280,320,144,"#313C45",textGUI[lang][".cantIT3"]);
					blah += addWhiteButton(847,259,"&#xE91E","class=\"pin-map\" onclick=\"changeView('IT3')\"");
					break;
				// small boxes
				case "GU": // give up?
					blah += smallBox();
					blah += addTextBlobCentred(523,280,320,144,"#313C45",textGUI[lang][".giveUpDesc"]);
					blah += addRectangle(536,396,164,40,"#EC6661",textGUI[lang][".dontGiveUpButton"],"class=\"pin-map\" onclick=\"changeView()\" ");
					blah += addRectangle(710,396,120,40,"#313C45",textGUI[lang][".giveUpButton"],"class=\"pin-map\" onclick=\"resetMain()\" ");
					break;
				case "PE": // penalty
					blah += smallBox();
					blah += addTextBlobCentred(523,280,320,144,"#313C45",textGUI[lang][".wantPE"]);
					blah += addWhiteButton(847,259,"&#xE91E","class=\"pin-map\" onclick=\"countPenalty()\"");
					break;
				case "GO": // game over
					blah += smallBox();
					blah += addTextBlobCentred(523,280,320,144,"#313C45",textGUI[lang][".timeOutDesc"]);
					blah += addRectangle(536,396,164,40,"#EC6661",textGUI[lang][".continueButton"],"class=\"pin-map\" onclick=\"startGameAnyway()\" ");
					blah += addRectangle(710,396,120,40,"#313C45",textGUI[lang][".giveUpButton"],"class=\"pin-map\" onclick=\"resetMain()\" ");
					break;
				case "DV2": // error : card is not a code
					blah += smallBox();
					blah += addTextBlobCentred(523,280,320,144,"#313C45",textGUI[lang][".cantDV"]+currentCard);
					blah += addWhiteButton(847,259,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				case "DV3": // card unlocked : give reward
					var tmp = getNeedle(textLib,"ID",currentCard);
					blah += smallBox();
					blah += addTextBlobCentred(523,280,320,144,"#313C45",tmp[lang].won);
					blah += addWhiteButton(847,259,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				case "DV4": // error : wrong code for card
					blah += smallBox();
					blah += addTextBlobCentred(523,280,320,144,"#313C45",textGUI[lang][".cantDV1"]+currentCard);
					blah += addWhiteButton(847,259,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				case "ID1": // returns hint
					blah += smallBox();
					blah += addTextBlobCentred(523,280,320,144,"#313C45",tmp[lang].hint);
					blah += addWhiteButton(847,259,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				case "ID2": // error : no hint for that card
					blah += smallBox();
					blah += addTextBlobCentred(523,280,320,144,"#313C45",textGUI[lang][".cantID"]+currentCard);
					blah += addWhiteButton(847,259,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				case "CF2": // error : wrong code + penalty
					blah += smallBox();
					blah += addTextBlobCentred(523,280,320,144,"#313C45",textGUI[lang][".cantCF"]);
					blah += addWhiteButton(847,259,"&#xE91E","class=\"pin-map\" onclick=\"countPenalty()\"");
					break;
				case "IT3b": // won mini game
					blah += smallBox();
					blah += addTextBlobCentred(523,280,320,144,"#313C45",tmp[lang].won);
					blah += addWhiteButton(847,259,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				case "IT4": // error : no interaction for that card
					blah += smallBox();
					blah += addTextBlobCentred(523,280,320,144,"#313C45",textGUI[lang][".cantIT"]+currentCard);
					blah += addWhiteButton(847,259,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				// special
				case "MI": // mission briefing mid-game
					blah += addRoundRect(612,300-8,140,40,"#EC6661",
						"<span class=\"icon-arrow1-up-14\"> &nbsp;</span>"+textGUI[lang][".missionButton"],
						"class=\"pin-map\" onclick=\"changeView()\"");
					blah += "<rect x=\"382\" y=\"-4\" width=\"600\" rx=\"4\" ry=\"4\" height=\"300\" fill=\"#D9E3E8\" stroke=\"none\" />";
					blah += addTextBlob(382+40,36,600-80,300-80,"#313C45","<span class=\"w3-text-nuit\">"+textLib[0][lang]["mission"]+"</span>");
					break;
				default:
					break;
			};
		} else { // smartPhone view #######################################################################"

			var elem = document.getElementById("selectWorld");
			elem.setAttribute("viewBox", "0 0 "+myWinW+" "+myWinH);
			document.getElementById("interactiveWin").style = "padding:0px; margin:0px auto; width:"+
				myWinW+"px; height:"+myWinH;

			// left sidebar
			var dx = Math.max(111,myWinW/6); // sidebar width
			blah += "<rect x=\"0\" y=\"0\" width=\""+dx+"\" height=\""+myWinH+"\" fill=\"#FFF\" stroke=\"none\" />";
			blah += addButton((dx-54)/2, 50,"&#xE944","DV"); // unlock
			blah += addButton((dx-54)/2,114,"&#xE945","IT"); // interact
			blah += addButton((dx-54)/2,178,"&#xE93D","ID"); // hint
			blah += addButton((dx-54)/2,242,"&#xE93E","CF"); // final code
			blah += addWhiteButton(Math.max(111,myWinW/6)-45,myWinH-28,"&#xE918",
				(pausedGame || veilOn ? "" : "class=\"pin-map\" onclick=\"changeView('GU')\""), pausedGame || (veilOn && currentAction != "GU")); //give up
			blah += addWhiteButton(20,myWinH-28,"&#xE947",
				(pausedGame || veilOn ? "" :"class=\"pin-map\" onclick=\"changeView('MI')\""), pausedGame || (veilOn && !isInside(currentAction,["MI","BF"]))); //briefing in-game

			// default view (clock / pause / penalty / interaction tools)

			blah += addClock();
			blah += addPenaltyButton(362+dx+(myWinW-dx-420)/2,50,"&#xE943"); // penalty
			blah += addPauseButton(280+dx+(myWinW-dx-420)/2,50,(pausedGame ? "&#xE946;" : "&#xE942" )); // pause/unpause


			// interaction tools (question / form / buttons)
			if (isInside(currentAction, ["DV","DV1","IT","ID","CF"])){
				blah += "<rect x=\""+(dx+30)+"\" y=\"125\" width=\""+(myWinW-dx-60)+"\" height=\""+(myWinH-155)+"\" fill=\"white\" stroke=\"none\" />";
				blah += "<text x=\""+(dx+(myWinW-dx)/2)+"\" y=\""+(180)+"\" fill=\""+
					(currentAction == "DV1" ? "#EC6661" : "#313C45")+"\" "+
					"style=\"font-size:20px; text-anchor:middle; text-transform: uppercase; font-weight:bold; letter-spacing:1px; font-family:OpenSans; pointer-events:none\" >"+
					textGUI[lang][".sub"+currentAction]+"</text>";
				blah += addTextBlobCentred(dx+50,180,myWinW-dx-100,myWinH-280,"#313C45",
					"<span style=\"font-size:14px\">"+(isInside(currentAction,["CF","DV1"]) ? tmp[lang].desc : textGUI[lang][".want"+currentAction])+"</span>");
				blah += "<foreignObject x=\""+(dx+50)+"\" y=\""+(myWinH-100)+"\" width=\""+(myWinW-dx-100-2*130)+"\" height=\"40\" >"+
					"<span style=\"color:#FFF; font-family:OpenSans\" >"+
					"<input class=\"input input-empty\" id=\"textboxId\" type=\"text\" value=\""+textGUI[lang][".hint"+currentAction]+"\" onclick=\"cleanTextArea()\" />"+
					"</span>"+
					"</foreignObject>";
				blah += addRoundRect(myWinW-170-120-10,myWinH-100,120,40,"#EC6661",textGUI[lang][".OKButton"],"class=\"pin-map\" onclick=\"checkAnswer()\" ");
				blah += addRoundRect(myWinW-170,myWinH-100,120,40,"#313C45",textGUI[lang][".cancelButton"],"class=\"pin-map\" onclick=\"changeView()\" ");
			};

			// popin
			switch (currentAction) {
				// smartPhone => big boxes -> fullScreen
				case "BF": // briefing
					blah += fullScreen();
					blah += addWhiteButton(myWinW-30,18,"&#xE91E","class=\"pin-map\" onclick=\"resetMain()\"");
					blah += addTextBlob(30,30,myWinW-60,myWinH-90,"#313C45",textLib[0][lang]["mission"]);
					blah += "<text x=\""+(myWinW/2)+"\" y=\"35\" fill=\"#EC6661\" "+
						"style=\"font-size:20px; text-anchor:middle; font-family:OpenSans\" >"+
						textGUI[lang][".missionButton"].toUpperCase()+"</text>"; //title
					blah += addRoundRect(myWinW/2-110,myWinH-60,220,40,"#EC6661",textGUI[lang][".startButton"],"class=\"pin-map\" onclick=\"startGame()\" ");
					break;
				case "MI": // briefing mid-game
					blah += fullScreen();
					blah += addWhiteButton(myWinW-30,18,"&#xE91E","class=\"pin-map\" onclick=\"resetMain()\"");
					blah += addTextBlob(30,30,myWinW-60,myWinH-90,"#313C45",textLib[0][lang]["mission"]);
					blah += "<text x=\""+(myWinW/2)+"\" y=\"35\" fill=\"#EC6661\" "+
						"style=\"font-size:20px; text-anchor:middle; font-family:OpenSans\" >"+
						textGUI[lang][".missionButton"].toUpperCase()+"</text>"; //title
					blah += addRoundRect(myWinW/2-110,myWinH-60,220,40,"#EC6661",textGUI[lang][".playButton"],"class=\"pin-map\" onclick=\"startGame()\" ");
					break;
				case "CF1": // victory!
					blah += fullScreen();
					blah += "<text x=\""+(myWinW/2)+"\" y=\"70\" fill=\"#EC6661\" "+
						"style=\"font-size:64px; text-anchor:middle; font-family:OCEicon\" >&#xE914;</text>"; //title
					blah += addWhiteButton(myWinW-30,18,"&#xE91E","class=\"pin-map\" onclick=\"resetMain()\"");
					blah += addTextBlob(30,80,myWinW-60,myWinH-80-140,"#313C45",textLib[0][lang]["won"]);
					// time elapsed
					blah += "<rect x=\""+(myWinW/2-130)+"\" y=\""+(myWinH-140)+"\" width=\"120\" height=\"120\" fill=\"#75909E\" stroke=\"none\" />";
					blah += "<text x=\""+(myWinW/2-130+60)+"\" y=\""+(myWinH-80)+"\" fill=\"#FFF\" "+
						"style=\"font-size:54px; text-anchor:middle; font-family:OCEicon\" >&#xE93F;</text>";
					blah += "<text x=\""+(myWinW/2-130+60)+"\" y=\""+(myWinH-60)+"\" fill=\"#313C45\" "+
						"style=\"font-size:14px; text-anchor:middle; text-transform:uppercase; font-family:OpenSans\" >"+textGUI[lang][".timeButton"]+"</text>";
					blah += "<text x=\""+(myWinW/2-130+60)+"\" y=\""+(myWinH-40)+"\" fill=\"#FFF\" "+
						"style=\"font-size:20px; text-anchor:middle; font-family:OpenSans\" >"+textClock((chronoInit-chrono)/10)+"</text>";
					// hints used
					blah += "<rect x=\""+(myWinW/2+10)+"\" y=\""+(myWinH-140)+"\" width=\"120\" height=\"120\" fill=\"#75909E\" stroke=\"none\" />";
					blah += "<text x=\""+(myWinW/2+10+60)+"\" y=\""+(myWinH-80)+"\" fill=\"#FFF\" "+
						"style=\"font-size:54px; text-anchor:middle; font-family:OCEicon\" >&#xE93D;</text>";
					blah += "<text x=\""+(myWinW/2+10+60)+"\" y=\""+(myWinH-60)+"\" fill=\"#313C45\" "+
						"style=\"font-size:14px; text-anchor:middle; text-transform:uppercase; font-family:OpenSans\" >"+textGUI[lang][".hintButton"]+"</text>";
					blah += "<text x=\""+(myWinW/2+10+60)+"\" y=\""+(myWinH-40)+"\" fill=\"#FFF\" "+
						"style=\"font-size:20px; text-anchor:middle; font-family:OpenSans\" >"+hintsUsed+"</text>";
					break;
				case "IT1": // play SFX
					blah += fullScreen();
					blah += addWhiteButton(myWinW-30,18,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					blah += addTextBlobCentred(30,30,myWinW-60,32,"#313C45",
						"<span style=\"font-weight:bold\"><span style=\"color:#75909E; text-transform:uppercase\">"+textGUI[lang][".subIT"]+"&nbsp;>&nbsp;</span>"+
						tmp[lang].desc+"</span>");
					blah += "<image x=\""+(myWinW/4-75)+"\" y=\"140\" xlink:href=\"custom/hint_sfx.png\""+
						" width=\"150\" height=\"200\" />";
					blah += addTextBlobCentred(30,60,myWinW/2-40,80,"#313C45",tmp[lang].sub);
					blah += "<foreignObject x=\""+(myWinW/2-10)+"\" y=\"80\" width=\""+(myWinW/2)+"\" height=\"40\" >"+
						"<audio controls>"+
						"<source src=\"custom/sfx_"+lang+".ogg\" type=\"audio/ogg\">"+
						"<source src=\"custom/sfx_"+lang+".mp3\" type=\"audio/mpeg\">"+
						"Your browser does not support the audio element."+
						"</audio>"+
						"</foreignObject>";
					break;
				case "IT2": // play VIDEO
					blah += fullScreen();
					blah += addTextBlobCentred(30,30,myWinW-60,32,"#313C45",
						"<span style=\"font-weight:bold\"><span style=\"color:#75909E; text-transform:uppercase\">"+textGUI[lang][".subIT"]+"&nbsp;>&nbsp;</span>"+
						tmp[lang].desc+"</span>");
					blah += "<rect x=\"30\" y=\"60\" width=\""+(myWinW-60)+"\" height=\""+(myWinH-80)+"\" fill=\"#000\" stroke=\"none\" />";
					blah += "<foreignObject x=\"30\" y=\"60\" width=\""+(myWinW-60)+"\" height=\""+(myWinH-80)+"\" >"+
						"<video id=\"video1\" width=\""+(myWinW-60)+"\" onclick=\"playVid()\">"+
						"<source src=\"custom/mov_"+lang+".ogg\" type=\"video/ogg\">"+
						"<source src=\"custom/mov_"+lang+".mp4\" type=\"video/mp4\">"+
						"Your browser does not support HTML video."+
						"</video>"+
						"</foreignObject>";
					blah += "<text id=\"video1PlayButton\" x=\"60\" y=\""+(myWinH-30)+"\" fill=\"#FFF\" "+
					"style=\"font-size:20px; text-anchor:middle; font-family:OCEicon\" class=\"pin-map\" onclick=\"playVid()\" >&#xE93B;</text>";
					blah += "<text id=\"video1PlayState\" x=\""+(myWinW-100)+"\" y=\""+(myWinH-34)+"\" fill=\"#FFF\" "+
					"style=\"font-size:12px; text-anchor:end; font-family:OpenSans\" class=\"pin-map\" onclick=\"playVid()\" >"+textClock(0)+"</text>";
					blah += "<text id=\"video1PlayDuration\" x=\""+(myWinW-40)+"\" y=\""+(myWinH-34)+"\" fill=\"#75909E\" "+
					"style=\"font-size:12px; text-anchor:end; font-family:OpenSans\" class=\"pin-map\" onclick=\"playVid()\" >/"+textClock(0)+"</text>";
					blah += "<line x1=\"90\" y1=\""+(myWinH-39)+"\" x2=\""+(myWinW-160)+"\" y2=\""+(myWinH-39)+"\" style=\"stroke:#75909E; stroke-width:4\" id=\"video1State\" />";
					blah += "<line x1=\"90\" y1=\""+(myWinH-39)+"\" x2=\"91\" y2=\""+(myWinH-39)+"\" style=\"stroke:#EC6661; stroke-width:4\" id=\"video1Progress\" />";
					blah += addWhiteButton(myWinW-30,18,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				case "IT3": // play GAME
					blah += fullScreen();
					blah += addTextBlobCentred(0,33,myWinW,32,"#313C45",
						"<span style=\"font-weight:bold\"><span style=\"color:#75909E; text-transform:uppercase\">"+textGUI[lang][".subIT"]+"&nbsp;>&nbsp;</span>"+
						tmp[lang].desc+"</span>");
					blah += addTextBlobCentred(30,60,myWinW-60,32,"#313C45",tmp[lang].sub);
					blah += "<g id=\"mapNameChart1\" >";
					blah += addRectangle(30,90,myWinW/2-30,myWinH-110,"#A9D2DC","<span style=\"font-size:50px; color:#DDEDF1!important; font-weight:bold\">"+textGUI[lang][".miniWeat"]+"</span>");
					blah += addRectangle(myWinW/2,90,myWinW/2-30,myWinH-110,"#84B8AB","<span style=\"font-size:50px; color:#CEE3DD!important; font-weight:bold\">"+textGUI[lang][".miniClim"]+"</span>");
					// vignettes
					  for (var i=0; i<allVignettes.length; i++) {
						  blah += addVignette(i);
					  };
					blah += "<rect x=\""+(myWinW/2-67)+"\" y=\""+(myWinH-67)+"\" rx=\"4\" ry=\"4\" width=\"134\" height=\"50\" style=\"fill:#FFF; stroke-width:15; stroke:#FFF\" />";
					blah += addRectangle(myWinW/2-60,myWinH-60,120,40,"#EC6661",textGUI[lang][".OKButton"],"class=\"pin-map\" onclick=\"checkMiniGame()\" ");
					if (wrongMiniGame){
						blah += "<rect x=\"30\" y=\"90\" width=\""+(myWinW-60)+"\" height=\""+(myWinH-110)+"\" fill=\"rgba(49,60,69,.8)\" stroke=\"none\" />"; // grey veil
						blah += "<text x=\""+(myWinW/2)+"\" y=\"180\" fill=\"#FFF\" "+
							"style=\"font-size:64px; text-anchor:middle; font-family:OCEicon\" >&#xE940;</text>";
						blah += addTextBlobCentred(40,180,myWinW-80,70,"#FFF",textGUI[lang][".cantIT3"]);
						blah += addRectangle(myWinW/2-60,myWinH-120,120,40,"#EC6661",textGUI[lang][".continueButton"],"class=\"pin-map\" onclick=\"retryMiniGame()\" ");
					};
					blah += "</g>";
					blah += addWhiteButton(myWinW-30,18,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				case "IT3a": // lost mini game
					blah += smallBox();
					blah += addTextBlobCentred(dx+40,40,myWinW-dx-80,myWinH-80,"#313C45",textGUI[lang][".cantIT3"]);
					blah += addWhiteButton(myWinW-50,38,"&#xE91E","class=\"pin-map\" onclick=\"changeView('IT3')\"");
					break;

				// smartPhone => small boxes ->  phoneBox -------------------------------------------------
				case "GU": // give up?
					blah += phoneBox();
					blah += addTextBlobCentred(dx+40,40,myWinW-dx-80,myWinH-80,"#313C45",textGUI[lang][".giveUpDesc"]);
					blah += addRectangle(dx+(myWinW-dx-300)/2,myWinH-80,160,40,"#EC6661",textGUI[lang][".dontGiveUpButton"],"class=\"pin-map\" onclick=\"changeView()\" ");
					blah += addRectangle(dx+(myWinW-dx-300)/2+180,myWinH-80,120,40,"#313C45",textGUI[lang][".giveUpButton"],"class=\"pin-map\" onclick=\"resetMain()\" ");
					break;
				case "PE": // penalty
					blah += phoneBox();
					blah += addTextBlobCentred(dx+40,40,myWinW-dx-80,myWinH-80,"#313C45",textGUI[lang][".wantPE"]);
					blah += addWhiteButton(myWinW-50,38,"&#xE91E","class=\"pin-map\" onclick=\"countPenalty()\"");
					break;
				case "GO": // game over
					blah += phoneBox();
					blah += addTextBlobCentred(dx+40,40,myWinW-dx-80,myWinH-80,"#313C45",textGUI[lang][".timeOutDesc"]);
					blah += addRectangle(dx+(myWinW-dx-300)/2,myWinH-80,160,40,"#EC6661",textGUI[lang][".continueButton"],"class=\"pin-map\" onclick=\"startGameAnyway()\" ");
					blah += addRectangle(dx+(myWinW-dx-300)/2+180,myWinH-80,120,40,"#313C45",textGUI[lang][".giveUpButton"],"class=\"pin-map\" onclick=\"resetMain()\" ");
					break;
				case "DV2": // error : card is not a code
					blah += phoneBox();
					blah += addTextBlobCentred(dx+40,40,myWinW-dx-80,myWinH-80,"#313C45",textGUI[lang][".cantDV"]+currentCard);
					blah += addWhiteButton(myWinW-50,38,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				case "DV3": // card unlocked : give reward
					var tmp = getNeedle(textLib,"ID",currentCard);
					blah += phoneBox();
					blah += addTextBlobCentred(dx+40,40,myWinW-dx-80,myWinH-80,"#313C45",tmp[lang].won);
					blah += addWhiteButton(myWinW-50,38,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				case "DV4": // error : wrong code for card
					blah += phoneBox();
					blah += addTextBlobCentred(dx+40,40,myWinW-dx-80,myWinH-80,"#313C45",textGUI[lang][".cantDV1"]+currentCard);
					blah += addWhiteButton(myWinW-50,38,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				case "ID1": // returns hint
					blah += phoneBox();
					blah += addTextBlobCentred(dx+40,40,myWinW-dx-80,myWinH-80,"#313C45",tmp[lang].hint);
					blah += addWhiteButton(myWinW-50,38,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				case "ID2": // error : no hint for that card
					blah += phoneBox();
					blah += addTextBlobCentred(dx+40,40,myWinW-dx-80,myWinH-80,"#313C45",textGUI[lang][".cantID"]+currentCard);
					blah += addWhiteButton(myWinW-50,38,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				case "CF2": // error : wrong code + penalty
					blah += phoneBox();
					blah += addTextBlobCentred(dx+40,40,myWinW-dx-80,myWinH-80,"#313C45",textGUI[lang][".cantCF"]);
					blah += addWhiteButton(myWinW-50,38,"&#xE91E","class=\"pin-map\" onclick=\"countPenalty()\"");
					break;
				case "IT3b": // won mini game
					blah += phoneBox();
					blah += addTextBlobCentred(dx+40,40,myWinW-dx-80,myWinH-80,"#313C45",tmp[lang].won);
					blah += addWhiteButton(myWinW-50,38,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				case "IT4": // error : no interaction for that card
					blah += phoneBox();
					blah += addTextBlobCentred(dx+40,40,myWinW-dx-80,myWinH-80,"#313C45",textGUI[lang][".cantIT"]+currentCard);
					blah += addWhiteButton(myWinW-50,38,"&#xE91E","class=\"pin-map\" onclick=\"changeView()\"");
					break;
				default:
					break;
			};
		};
		replaceInnerHTML("#selectWorld",blah);
		replaceInnerHTML("#selectWorldFullScreen",blah2);
		var fruitz = document.querySelectorAll('.draggable');
		for (fruit of fruitz){
			dragElement(fruit);
		};
	} else {// portrait screen
		var ratio = 10.*window.innerWidth/12.;
		blah = "<rect x=\"20\" y=\"20\" rx=\"7\" ry=\"7\" width=\""+(1366-40)+"\" height=\""+(709-40)+"\" style=\"fill:#FFF;stroke-width:0\"/>";
		blah += "<foreignObject x=\"40\" y=\"40\" width=\""+(1366-80)+"\" height=\""+(709-80)+"\">" +
			"<p style=\"color:#313C45; font-size:40px; line-height:1.2em; text-align:center\">"+textGUI[lang][".warningPortrait"]+"</p>"+
			"<p style=\"color:#313C45; font-size:300px; font-family:OCEicon; text-align:center; margin:0px; line-height:300px\">&#xe92a;</p>"+
			"</foreignObject>";
		replaceInnerHTML("#selectWorld",blah);
	};
};







// ---
// GAME TOOLS
// --

function startGame(){
	pausedGame = false;
	gameOver = false;
	today = new Date();
	changeView();
};

function startGameAnyway(){
	pausedGame = false;
	gameOver = true;
	changeView();
};

function letsGo(){
	veilOn = true;
	togglePage(document.querySelector("#Q1"));
};

// Update the count down every 0.1 second
var x = setInterval(function() {

  if (!pausedGame) {
	  var rightNow = new Date();
	  // console.log(Math.abs(today-rightNow));
	  // chrono +=  -1;
	  chrono = chronoInit-Math.floor(Math.abs(today-rightNow+100*pauseDuration)/100.)-600*nPenalty;
	  // console.log(chrono,Math.floor(Math.abs(today-rightNow)/100.),Math.abs(today-rightNow));
	  if (chrono <= 9 && !gameOver ) {
		  pausedGame = true;
		  chrono = 0;
		  gameOver = true;
		  changeView("GO");
	  };
	  updateClock();
  } else {if (currentAction != "BF") {pauseDuration++;}};

  // If the count down is finished, write some text
  // if (distance < 0) {
    // clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
  // }
}, 100);

function updateClock(){
	// update clock
	replaceTextContent('#myClock',textClock(chrono/10.));
	// update video
	var elem = document.getElementById("video"+(videoFullScreen ? "2" : "1"));
	if (elem) {
		replaceInnerHTML("#video1PlayState",textClock(elem.currentTime));
		replaceInnerHTML("#video1PlayDuration","/"+textClock(elem.duration));
		var bar = document.getElementById("video"+(videoFullScreen ? "2" : "1")+"Progress");
		var bar0 = document.getElementById("video"+(videoFullScreen ? "2" : "1")+"State");
		// console.log(bar.x1);
		// bar.setAttribute("x2", bar.x1.baseVal.value + (videoFullScreen ? 1124-184 : 846-436 )*elem.currentTime/elem.duration);
		bar.setAttribute("x2", bar.x1.baseVal.value + (bar0.x2.baseVal.value-bar0.x1.baseVal.value)*elem.currentTime/elem.duration);
		// console.log(bar);
		if (elem.ended) {replaceInnerHTML("#video1PlayButton", "&#xE93B;");}
	};
};

// Change view
function changeView(i="none"){
	// console.log(i);
	currentAction = i;
	switch (true) {
		case (currentAction == "PA") :
			pausedGame = !pausedGame ;
			if (pausedGame == false) {currentAction = "none";}
			break;
		default:
			break;
	};
	if (currentAction == "none") {
		currentCard = 0;
		wrongMiniGame = false;
		hoveredItem = "none";
		// videoFullScreen = false;
		}
	if (currentAction != "IT3") {videoFullScreen = false;}
	veilOn = isInside(currentAction, ["BF","GU","MI","PE","GO","DV2","DV3","DV4","ID1","ID2","CF1","CF2","IT1","IT2","IT3","IT3b","IT4"]);
	if (currentAction != "IT3" || !videoFullScreen) {togglePage(document.querySelector("#Q1"));} else
		{togglePage(document.querySelector("#Q2"));}
  };

function checkAnswer(){
	if (document.getElementById('textboxId')) {
		var blah = document.getElementById('textboxId').value;
		if (blah != textGUI[lang][".textAreaDefault"]) {
			if (isInside(currentAction,["DV","IT","ID"])) {currentCard = document.getElementById('textboxId').value;}
			var tmp = getNeedle(textLib,"ID",currentCard);
			var myAnswer = false;
			switch (currentAction) {
				case "DV1" : // input password to unlock card #currentCard
					if (tmp[lang]["answer"] == blah) { // correct answer
						changeView("DV3"); // give reward
					} else { // wrong answer
						changeView("DV4"); // wrong password
					};
					break;
				case "DV" : // input card to unlock
					if (tmp) {if (tmp.type) {if (tmp.type == "code") {myAnswer = true;}}}; // can use given answer?
					if (myAnswer) { // can use given answer
						changeView("DV1"); // ask for correct password
					} else { // cannot use given answer
						changeView("DV2"); // no password expected
					};
					break;
				case "IT" : // input card to interact with
					if (tmp) {if (tmp.type) {if (isInside(tmp.type,["sfx","video","game"])) {myAnswer = true;}}}; // can use given answer?
					if (myAnswer) { // can use given answer
						switch (tmp.type) {
							case "sfx" : changeView("IT1"); break; // play SFX
							case "video" : changeView("IT2"); break; // play VIDEO
							case "game" : changeView("IT3"); break; // play GAME
							default: break;
						};
					} else { // cannot use given answer
						changeView("IT4"); // no interaction expected
					};
					break;
				case "ID" : // input card to get a hint for
					if (tmp) {if (tmp[lang].hint) {myAnswer = true;}}; // can use given answer?
					if (myAnswer) { // returns hint
						hintsUsed++;
						changeView("ID1");
					} else { changeView("ID2"); // cannot return hint
					};
					break;
				case "CF" : // input final password to win game
					if (textLib[0][lang]["answer"] == blah) { // correct answer
						pausedGame = true;
						changeView("CF1"); // give reward
					} else { // wrong answer
						changeView("CF2"); // wrong password
					};
					break;
				default:
					break;
			};
		};
	};
};

function countPenalty(){
	nPenalty++;
	chrono -= 600;
	  if (chrono <= 9 && !gameOver) {
		  pausedGame = true;
		  gameOver = true;
		  changeView("GO");
	  } else {changeView();}
}


// ---
// GRAPHIC TOOLS
// --

function hoverIcon(i){
	hoveredItem = i;
	// console.log(hoveredItem);
	var elem = document.getElementById("myButton"+hoveredItem);
	if (elem) {elem.style = "fill:#EC6661;stroke-width:0";};
	if (!smartPhone) {
		elem = document.getElementById("myTitleMI");
		if (i == "MI" && elem) {elem.style = "color:#FFF!important";} else {elem.style = "color:#313C45!important";};
	};
};

function hoverIconOFF(){
	hoveredItem = "none";
	// console.log(hoveredItem);
	updateMat();
}

function addRectangle(x,y,dimX,dimY,col,titre,linx=""){
	return "<rect x=\""+x+"\" y=\""+y+"\" width=\""+dimX+"\" height=\""+dimY+"\" style=\"fill:"+col+";stroke-width:0\" "+linx+"/>"+
		"<foreignObject x=\""+x+"\" y=\""+y+"\" width=\""+dimX+"\" height=\""+dimY+"\" style=\"pointer-events:none\" >"+
		"<table style=\"border:none; width:100%; height:"+dimY+"px; vertical-align:center; text-align:center\" ><tr><td>"+
		"<span style=\"color:#FFF; font-size:14px; text-transform: uppercase; font-family:OpenSans\" >"+titre+"</span>"+
		"</td></tr></table>"+
		"</foreignObject>";
};

function addRoundRect(x,y,dimX,dimY,col,titre,linx=""){
	return "<rect x=\""+x+"\" y=\""+y+"\" rx=\"4\" ry=\"4\" width=\""+dimX+"\" height=\""+dimY+"\" style=\"fill:"+col+";stroke-width:0\" "+linx+"/>"+
		"<foreignObject x=\""+x+"\" y=\""+y+"\" width=\""+dimX+"\" height=\""+dimY+"\" style=\"pointer-events:none\" >"+
		"<table style=\"border:none; width:100%; height:"+dimY+"px; vertical-align:center; text-align:center\" ><tr><td>"+
		"<span style=\"color:#FFF; font-size:14px; text-transform: uppercase; font-family:OpenSans\" >"+titre+"</span>"+
		"</td></tr></table>"+
		"</foreignObject>";
};

function addButton(x,y,titre,id){
	var linx = "class=\"pin-map\" onmouseover=\"hoverIcon('"+id+"')\" onmouseout=\"hoverIconOFF()\" onclick=\"changeView('"+id+"')\" ";
	// disable buttons if needed
		linx = (currentAction == "none" || id == "PA" ? linx : "");
	if (smartPhone) {
		return "<circle cx=\""+(x+27)+"\" cy=\""+(y+27)+"\" r=\"27\" id=\"myButton"+id+"\" style=\"fill:"+
			(currentAction == id ? "#EC6661" : (currentAction == "none" || id == "PA" ?
			"#75909E" : "#BAC7CE" ) )+"\" "+linx+"/>"+
			"<text x=\""+(x+27)+"\" y=\""+(y+41)+"\" fill=\""+(currentAction == "none" || id == "PA" ? "#FFF" : "rgba(255,255,255,0.6)" )+"\" "+
					"style=\"font-size:30px; text-anchor:middle; font-family:OCEicon; pointer-events:none\" >"+
					titre+"</text>";
	} else {
		return "<circle cx=\""+(x+55)+"\" cy=\""+(y+55)+"\" r=\"55\" id=\"myButton"+id+"\" style=\"fill:"+
			(currentAction == id ? "#EC6661" : (currentAction == "none" || id == "PA" ?
			(veilOn ? "#4C5E68" : "#75909E") : (veilOn ? "#757C81" : "#BAC7CE") ) )+"\" "+linx+"/>"+
			"<text x=\""+(x+55)+"\" y=\""+(y+82)+"\" fill=\""+(veilOn ? "#838A8F" : (currentAction == "none" || id == "PA" ? "#FFF" : "rgba(255,255,255,0.6)" ) )+"\" "+
					"style=\"font-size:60px; text-anchor:middle; font-family:OCEicon; pointer-events:none\" >"+
					titre+"</text>"+
			"<text x=\""+(x+55)+"\" y=\""+(y+133)+"\" fill=\""+(isInside(currentAction, [id,"none"])  ? "#313C45" : "#91A6B1")+"\" "+
					"style=\"font-size:12px; text-anchor:middle; text-transform: uppercase; font-weight:bold; letter-spacing:1px; font-family:OpenSans; pointer-events:none\" "+linx+">"+
					textGUI[lang][".sub"+id]+"</text>";
	}

};

function addPauseButton(x,y,titre){
	var id = "PA";
	var linx = "class=\"pin-map\" onmouseover=\"hoverIcon('PA')\" onmouseout=\"hoverIconOFF()\" onclick=\"changeView('PA')\" ";
	if (smartPhone) { // smartPhone view
		return "<rect x=\""+x+"\" y=\""+y+"\" rx=\"2\" ry=\"2\" width=\"48\" height=\"48\" id=\"myButtonPA\" style=\"fill:"+
			// (currentAction == "PA" ? "#EC6661" : (veilOn ? "#4C5E68" : "#75909E")  )+";stroke-width:0\" "+linx+"/>"+
			(veilOn ? "#4C5E68" : "#75909E") +";stroke-width:0\" "+linx+"/>"+
			"<text x=\""+(x+24)+"\" y=\""+(y+41)+"\" fill=\""+(veilOn ? "#838A8F" : "#FFF" )+"\" "+
					"style=\"font-size:40px; text-anchor:middle; font-family:OCEicon; pointer-events:none\" >"+
					titre+"</text>";
	} else { // Desktop view
		return "<rect x=\""+x+"\" y=\""+y+"\" rx=\"2\" ry=\"2\" width=\"64\" height=\"64\" id=\"myButtonPA\" style=\"fill:"+
			// (currentAction == "PA" ? "#EC6661" : (veilOn ? "#4C5E68" : "#75909E")  )+";stroke-width:0\" "+linx+"/>"+
			(veilOn ? "#4C5E68" : "#75909E") +";stroke-width:0\" "+linx+"/>"+
			"<text x=\""+(x+32)+"\" y=\""+(y+58)+"\" fill=\""+(veilOn ? "#838A8F" : "#FFF" )+"\" "+
					"style=\"font-size:60px; text-anchor:middle; font-family:OCEicon; pointer-events:none\" >"+
					titre+"</text>";
	};

};

function addPenaltyButton(x,y,titre){
	var id = "PE";
	var linx = "class=\"pin-map\" onmouseover=\"hoverIcon('PE')\" onmouseout=\"hoverIconOFF()\" onclick=\"changeView('PE')\" ";
	// disable buttons if needed
		linx = (currentAction == "none" ? linx : "");
	if (smartPhone) { // smartPhone view
		return "<rect x=\""+x+"\" y=\""+y+"\" rx=\"2\" ry=\"2\" width=\"48\" height=\"48\" id=\"myButtonPE\" style=\"fill:"+
			(currentAction == "PE" ? "#EC6661" : (currentAction == "none" ?
			(veilOn ? "#832429" : "#E44545") : (veilOn ? "#757C81" : "#EF8F8F") ) )+
			";stroke-width:0\" "+linx+"/>"+
			"<text x=\""+(x+24)+"\" y=\""+(y+41)+"\" fill=\""+(veilOn ? "#838A8F" : (currentAction == "none" ? "#FFF" : "rgba(255,255,255,0.6)") )+"\" "+
					"style=\"font-size:40px; text-anchor:middle; font-family:OCEicon; pointer-events:none\" >"+
					titre+"</text>"+
			"<text x=\""+(x+24)+"\" y=\""+(y+63)+"\" fill=\""+(isInside(currentAction, ["PE","none"]) ? "#313C45" : "#91A6B1")+"\" "+
					"style=\"font-size:12px; text-anchor:middle; text-transform: uppercase; font-weight:bold; letter-spacing:1px; font-family:OpenSans; pointer-events:none\" "+linx+">"+
					textGUI[lang][".subPE"]+"</text>";
	} else { // Desktop view
		return "<rect x=\""+x+"\" y=\""+y+"\" rx=\"2\" ry=\"2\" width=\"64\" height=\"64\" id=\"myButtonPE\" style=\"fill:"+
			(currentAction == "PE" ? "#EC6661" : (currentAction == "none" ?
			// (veilOn ? "#4C5E68" : "#75909E") : (veilOn ? "#757C81" : "#DDDDDD") ) )+
			(veilOn ? "#832429" : "#E44545") : (veilOn ? "#757C81" : "#EF8F8F") ) )+
			";stroke-width:0\" "+linx+"/>"+
			"<text x=\""+(x+32)+"\" y=\""+(y+56)+"\" fill=\""+(veilOn ? "#838A8F" : (currentAction == "none" ? "#FFF" : "rgba(255,255,255,0.6)") )+"\" "+
					"style=\"font-size:60px; text-anchor:middle; font-family:OCEicon; pointer-events:none\" >"+
					titre+"</text>"+
			"<text x=\""+(x+32)+"\" y=\""+(y+80)+"\" fill=\""+(isInside(currentAction, ["PE","none"]) ? "#313C45" : "#91A6B1")+"\" "+
					"style=\"font-size:12px; text-anchor:middle; text-transform: uppercase; font-weight:bold; letter-spacing:1px; font-family:OpenSans; pointer-events:none\" "+linx+">"+
					textGUI[lang][".subPE"]+"</text>";
	};

};

function addWhiteButton(x,y,titre,linx,special=false){
	return "<text x=\""+(x+12)+"\" y=\""+(y+12)+"\" fill=\""+(special ? "#91A6B1" : "#313C45")+"\" "+
		"style=\"font-size:"+(smartPhone ? 30 : 25)+"px; text-anchor:middle; font-family:OCEicon\" "+linx+" >"+
		titre+"</text>";
};

function addTextBlob(x,y,dimX,dimY,col,titre){
	return "<foreignObject x=\""+x+"\" y=\""+y+"\" width=\""+dimX+"\" height=\""+dimY+"\" >"+
		"<table style=\"border:none; width:100%; height:"+dimY+"px; vertical-align:center; text-align:left; line-height:1.2em\" ><tr><td>"+
		"<span style=\"color:"+col+"; font-size:"+(smartPhone ? 14 : 14)+"px; font-family:OpenSans; text-align:left\" >"+titre+"</span>"+
		"</td></tr></table>"+
		"</foreignObject>";
};

function addTextBlobCentred(x,y,dimX,dimY,col,titre){
	return "<foreignObject x=\""+x+"\" y=\""+y+"\" width=\""+dimX+"\" height=\""+dimY+"\" >"+
		"<table style=\"border:none; width:100%; height:"+dimY+"px; vertical-align:center; text-align:center; line-height:1.2em\" ><tr><td>"+
		"<span style=\"color:"+col+"; font-size:"+(smartPhone ? 14 : 14)+"px; font-family:OpenSans; text-align:center\" >"+titre+"</span>"+
		"</td></tr></table>"+
		"</foreignObject>";
};

function addClock(){
	if (smartPhone) { // smartPhone view
		var myWinH = window.innerHeight;
		var myWinW = window.innerWidth;
		var dx = Math.max(111,myWinW/6); // sidebar width
		return "<rect x=\""+(dx+(myWinW-dx-420)/2)+"\" y=\"40\" rx=\"8\" ry=\"8\" width=\"340\" height=\"67\" style=\"fill:"+
			(veilOn ? "#838A8F" : "#FFF" )+"; stroke-width:1; stroke:"+(veilOn ? "#65747D" : "#B4C8D1" )+"\" />"+
			"<text x=\""+(dx+242+(myWinW-dx-420)/2)+"\" y=\"92\" id=\"myClock\" fill=\""+(chrono <= 0 ? (veilOn ? "#832429" : "red") : (veilOn ? "#313C45" : "#313C45" ) )+"\" style=\"font-family:OpenSans; font-size:53px; text-anchor:end\">"+
			textClock(chrono/10.)+"</text>";
	} else { // Desktop view
		return "<rect x=\"428\" y=\"80\" rx=\"8\" ry=\"8\" width=\"510\" height=\"100\" style=\"fill:"+
			(veilOn ? "#838A8F" : "#FFF" )+"; stroke-width:1; stroke:"+(veilOn ? "#65747D" : "#B4C8D1" )+"\" />"+
			"<text x=\"794\" y=\"160\" id=\"myClock\" fill=\""+(chrono <= 0 ? (veilOn ? "#832429" : "red") : (veilOn ? "#313C45" : "#313C45" ) )+"\" style=\"font-family:OpenSans; font-size:80px; text-anchor:end\">"+
			textClock(chrono/10.)+"</text>";
	};
};

function textClock(i){
	var d1 = Math.floor(Math.abs(i)/3600.);
	var d2 = Math.floor((Math.abs(i)-(3600*d1))/60.);
	var d3 = Math.abs(i)%60.;
	return (i < 0 ? "-" : "" )+decile(d1)+":"+decile(d2)+":"+decile(d3);
};


function addVignette(id,bigScreen=false) {
	var elem = allVignettes[id];
	var blah = "";
	var dimCardX = (bigScreen ? 340 : 200);
	var dimCardY = (bigScreen ? 185 : 110);
	var dimPin = (bigScreen ? 20 : 11);
	var fontSize = (bigScreen ? 24 : 15);
	var marginTop = (smartPhone ? 90 : (bigScreen ? 0 : 129)+100);
	var marginLeft = (smartPhone ? 30 : (bigScreen ? 0 : 283)+20);
	var dimMatX = (smartPhone ? window.innerWidth : 1366);
	var dimMatY = (smartPhone ? window.innerHeight-110: (bigScreen ? 709 : 450)-marginTop);
	var myX = Math.min(Math.max(marginLeft+dimCardX/2,dimMatX*elem.x),dimMatX-marginLeft-dimCardX/2);
	var myY = Math.min(marginTop+dimMatY*elem.y,129+450-dimCardY/2);
	// card
	blah += "<rect x=\""+(myX-dimCardX/2)+"\" y=\""+(myY)+"\" rx=\"8\" ry=\"8\" width=\""+dimCardX+"\" height=\""+dimCardY+"\" style=\"fill:#FFF; stroke-width:0; filter:url(#shadow"+(bigScreen ? "2" : "")+")\" class=\"draggable\" ID=\"Vig"+id+"\" />";
	// text
	blah += "<foreignObject x=\""+(myX+(bigScreen ? 20 : 10)-dimCardX/2)+"\" y=\""+(myY+20)+"\" width=\""+(dimCardX-2*(bigScreen ? 20 : 10))+"\" height=\""+(dimCardY-40)+"\" style=\"pointer-events:none; line-height:1em\" >"+
		"<table style=\"border:none; width:100%; height:100%; vertical-align:center; text-align:center; line-height:1em\" ><tr><td>"+
		"<span style=\"color:#313C45; font-size:"+(fontSize)+"px; font-family:OpenSans; line-height:1em\" >"+elem[lang]+"</span>"+
		"</td></tr></table>"+
		"</foreignObject>";
	// pin
	switch (true) {
		case (elem.x < 0.5) : // drag towards Weather = green pin
			blah += "<circle cx=\""+(myX)+"\" cy=\""+(myY+10)+"\" r=\""+(dimPin)+"\" stroke-width=\"0\" fill=\"#2AB0C6\" style=\"pointer-events:none\" />";
			break;
		case (elem.x > 0.5) : // drag towards Climate = red pin
			blah += "<circle cx=\""+(myX)+"\" cy=\""+(myY+10)+"\" r=\""+(dimPin)+"\" stroke-width=\"0\" fill=\"#0B966E\" style=\"pointer-events:none\" />";
			break;
		default : // no try yet = question mark
			blah += "<circle cx=\""+(myX)+"\" cy=\""+(myY+10)+"\" r=\""+(dimPin)+"\" stroke-width=\"0\" fill=\"#536570\" style=\"pointer-events:none\" />";
			blah += "<text x=\""+(myX)+"\" y=\""+(myY+(bigScreen ? 7 : 4)+10)+"\" fill=\"#FFF\" style=\"font-size:"+(fontSize-4)+"px; font-weight:bold; text-anchor:middle\">?</text>";
			break;
	};
	return blah;
};

function smallBox(){
	return "<rect x=\"483\" y=\"240\" width=\"400\" height=\"224\" fill=\"white\" stroke=\"none\" />";
};

function bigBox(){
	return "<rect x=\"283\" y=\"129\" width=\"800\" height=\"450\" fill=\"white\" stroke=\"none\" />";
};

function fullScreen(){
	return "<rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"white\" stroke=\"none\" />";
};

function phoneBox(){
	var myWinH = window.innerHeight;
	var myWinW = window.innerWidth;
	var dx = Math.max(111,myWinW/6); // sidebar width
	return "<rect x=\""+(dx+20)+"\" y=\""+(20)+"\" width=\""+(myWinW-dx-40)+"\" height=\""+(myWinH-40)+"\" fill=\"white\" stroke=\"none\" />";
};

function decile(i){
	if (i == 0) {return "00"} else {return (i < 10 ? "0" : "" )+Math.floor(i);}
}

function cleanTextArea(){
	var i = document.getElementById('textboxId');
	if (i.value == textGUI[lang][".hint"+currentAction]) {
		i.value = "";
		classListExchange("#textboxId","input-empty","input-full");
	};
};

function playVid(){
	var myVideo = document.getElementById("video"+(videoFullScreen ? "2" : "1"));
	  if (myVideo.paused) {
		myVideo.play();
		replaceInnerHTML("#video1PlayButton", "&#xE93C;") ;
	  } else {
		myVideo.pause();
		replaceInnerHTML("#video1PlayButton", "&#xE93B;");
	  }
};

function screenVid(){
	videoFullScreen = !videoFullScreen;
	togglePage(document.querySelector("#Q"+(videoFullScreen ? "2" : "1")));
};

 // --
 // DRAG&DROP
 // --


 function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;
  // console.log(elmnt);

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
	var rect = document.getElementById("mapNameChart"+(videoFullScreen ? "2" : "1")).getBoundingClientRect(); // get the bounding rectangle
	// console.log(rect);
	e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
	allVignettes[elmnt.id.substr(3)].x = Math.min(Math.max((e.clientX-rect.left)/rect.width, 0.), 1.);
	allVignettes[elmnt.id.substr(3)].y = Math.min(Math.max((e.clientY-rect.top)/rect.height, 0.), 1.);
	updateMat();
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
	updateMat();
  }
}

 function checkMiniGame(){
	 var res = true;
	 for (var i=0; i<allVignettes.length; i++) {
		 res = res && ( (allVignettes[i].x > .5) === allVignettes[i].isClim);
	 };
	 if (res) {changeView("IT3b");} else {
		 wrongMiniGame = true;
		 changeView("IT3");
	 };
 };

 function retryMiniGame(){
	 wrongMiniGame = false;
	 changeView("IT3");
 }


// ---
// MISC TOOLS
// --

function isInside(key,haystack){
	var res = false;
	for (var i=0; i<haystack.length; i++) {res = res || (key == haystack[i]);}
	return res;
}

// Toggle active page
function togglePage(idPage) {
  // hide all blocks
  for (var i=0; i<30; i++) { //brute force all possible pages
    classListExchange("#Q"+i,"active","hidden");
  }

  if (!idPage) {idPage = document.querySelector("#Q0");}
  idPage.classList.remove("hidden");
  idPage.classList.add("active");
  currentPage = idPage.id;
  // console.log(currentPage);
  changeLang(lang);
};

// Change active language
function changeLang(i){
  if (i.id) {i = i.id;}
  lang = i;
  replaceInnerHTML("#newLang",lang);
  // console.log(lang);
  for (var x in textGUI[lang]) {
    if (x.substr(0,1) == "#" || x.substr(0,1) == '.') {replaceInnerHTML(x,textGUI[lang][x]);}
    else {
      replaceInnerHTML("#value-"+x,textGUI[lang][x]);
      replaceInnerHTML("#"+x,textGUI[lang][x]);
      replaceInnerHTML("."+x,textGUI[lang][x]);
    }
  }
  replaceInnerHTML("#legendCardLine","> "+textGUI[lang]["#helpDesc"]);
  var langz=["EN","FR","DE","ES"];
  // make current language icon "active" and deactivate others
  for (var i=0; i<langz.length; i++) {
    classListExchange("#"+langz[i],"drapoActive","drapoInactive");
    }
  classListExchange("#"+lang,"drapoInactive","drapoActive");
  // update metadata
  var elem = document.querySelector("title");
  elem.innerHTML = textGUI[lang]["#mainTitle"];
  updateScreen();
  updateMat();
};

// items specific to this animation
function updateScreen(){
	document.getElementById("globalContainer").style = "background-image: url(img/back"+
		(currentPage == "Q1" && veilOn ? "-veil" : "")+".png); min-height:100%";
	var elem = document.querySelectorAll(".sourcePDF");
	for (var i=0; i<elem.length; i++) {elem[i].href="PDF/cards_"+lang+".pdf"; }
};

// Find needle in Object haystack
function getNeedle (haystack, key, value) {
  // q = haystack.findIndex(function(elem){return elem[key] == value; }); // unsupported by IE
  var q;
  for (var i=0; i<haystack.length; i++) {
	  if (haystack[i][key] == value) {q=i;}
  }
  if (haystack[q]) {return haystack[q];} else {return undefined;}
};

// Replace textContent of given selector
function replaceTextContent(balise,texte) {
	var elem = document.querySelectorAll(balise);
	for (var i=0; i<elem.length; i++) {elem[i].textContent = texte;}
};

// Replace innerHTML of given selector
function replaceInnerHTML(balise,texte) {
	var elem = document.querySelectorAll(balise);
	for (var i=0; i<elem.length; i++) {elem[i].innerHTML = texte;}
};

// Replace outerHTML of given selector
function replaceOuterHTML(balise,texte) {
	var elem = document.querySelectorAll(balise);
	for (var i=0; i<elem.length; i++) {elem[i].outerHTML = texte;}
};

// Replace src of given selector
function replaceSrc(balise,texte) {
	var elem = document.querySelectorAll(balise);
	for (var i=0; i<elem.length; i++) {elem[i].src = texte;}
};

// Exchange a class for another
function classListExchange(balise,classToRemove,classToAdd){
	var elem = document.querySelectorAll(balise);
	for (var k=0; k<elem.length; k++) {
		elem[k].classList.add(classToAdd);
		elem[k].classList.remove(classToRemove);
	}
};

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
};
