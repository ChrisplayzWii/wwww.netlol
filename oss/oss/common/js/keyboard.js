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
//  keyboard type
//
var cKT_Default     = 0 ;  // (Default)                           
var cKT_Letter      = 1 ;  // (Letter)                            
var cKT_Num         = 2 ;  // (Numeric)                           
var cKT_NoLF        = 3 ;  // (without Line Feed)                 
var cKT_LNoLF       = 4 ;  // (Large text w/o Line Feed)          
var cKT_NoLFS       = 5 ;  // (w/o Line Feed and Sign)            
var cKT_LNoLFS      = 6 ;  // (Large text w/o Line Feed and Sign) 
var cKT_NumD        = 7 ;  // (Numeric w Dot)                     
var cKT_LNumD       = 8 ;  // (Large text Numeric w Dot)          
var cKT_NumSep      = 9 ;  // (Numeric w Separator)               
var cKT_PredictNoLF = 10 ; // (Predict w/o Line Feed)             

var kbd = null; //new wiiKeyboard();

//
//  kbd.call( keyboardtype, limitrow=1, secret=false, title="" )
//
