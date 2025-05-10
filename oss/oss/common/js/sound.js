/*
 *  Copyright 2005-2014 Acer Cloud Technology, Inc.
 *  All Rights Reserved.
 *
 *  This software contains confidential information and
 *  trade secrets of Acer Cloud Technology, Inc.
 *  Use, disclosure or reproduction is prohibited without
 *  the prior express written permission of Acer Cloud
 *  Technology, Inc.
 */

//
//  Sound Effect ID
//
//var cSE_Slide  = 1 ;
//var cSE_Forcus = 2 ;
//var cSE_Decide = 3 ;
//var cSE_Cancel = 4 ;
//var cSE_Choise = 5 ;
//var cSE_Error  = 6 ;
//var cSE_AddPoint  = 7 ;

//
//  JavaScript Object
//
//var cSE_Forcus = new Audio('http://drive.google.com/uc?export=view&id=1zOm9zjDeIO_XH3aSO9e5_q5A7v7vx18w');
//var cSE_Decide = new Audio('http://drive.google.com/uc?export=view&id=1gzODLFnMSUpqRtMZqZUmeMY9fIh5R-LB');
//var cSE_Cancel = new Audio('http://drive.google.com/uc?export=view&id=1Y0NQSSiYKqeNWFfxAKFKmAWKXbp5uksf');
var cSE_Forcus = "cSE_Forcus";
var cSE_Decide = "cSE_Decide";
var cSE_Cancel = "cSE_Cancel";
var cSE_Finish = "cSE_Finish";
class wiiSound {
  constructor() {
    //this is just for compatibility
  }
  playSE(audio) {
    window.parent.document.getElementById(audio).currentTime = 0;
    window.parent.document.getElementById(audio).play();
    if (parent.sndlogs) console.log(audio);
  }
}

var snd = new wiiSound();

//
//  snd.playSE( soundeffectid );
//
//
//  snd.playBGM() : play BGM
//

function wiiFocusSound() {
    if (snd) { snd.playSE( cSE_Forcus ); }
}
function wiiSelectSound() {
    if (snd) { snd.playSE( cSE_Decide ); }
}
function wiiCancelSound() {
    if (snd) { snd.playSE( cSE_Cancel ); }
}
function wiiFinishSound() {
    if (snd) { snd.playSE( cSE_Finish ); }
}

// Error Check
soundCheck = true;

