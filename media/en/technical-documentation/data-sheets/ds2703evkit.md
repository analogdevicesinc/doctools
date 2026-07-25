<!-- lastmod 2022-08-03 -->
<!-- image -->

## www.maxim-ic.com

## FEATURES

-  Demonstrates the capabilities of the DS2703 Battery Pack Authentication IC with SHA-1 Security, including:
-  Secure Challenge and Response Authentication using the SHA-1 Algorithm
-  Identification
-  Thermistor Multiplexor
-  Interfaces to the USB Port of a PC running Windows XP  or older operating system that supports USB operation

## INDEX

Evaluation Kit Contents

Equipment Needed

Introduction

Setup and Installation

Board Connections

Software Installation

Menus

SHA-1 Tools

Main Program Window

SHA-1 Commands

1-Wire® Commands

Other Commands

## INTRODUCTION

The  DS2703  evaluation  kit  (EV  kit)  makes  performance  evaluation,  software  development,  and prototyping with the DS2703 Battery Pack Authentication IC with SHA-1 Security easy. The evaluation board interfaces to a PC through a DS9123O USB Adapter and RJ-11 cable connection. All related data sheets along with the evaluation software can be found on our website at www.maxim-ic.com.

The DS2703 EV kit evaluation software gives the user complete control of all SHA-1 functions of the DS2703 as well as the various other commands.

The evaluation board circuit is  designed  to  provide  the  DS2703  with  a  stable  environment  to  perform SHA-1 Calculations, program the DS2703, and make thermistor measurements. Kit demonstration boards will vary as they are improved upon over time. For information on the demonstration board circuits refer to our website at www.maxim-ic.com.

## DS2703EVKIT

## Battery Pack Authentication IC with SHA-1 Security

## EVALUATION KIT CONTENTS

1 pc. TSSOP Evaluation Board

1 pc. DS9123O USB Adapter

1 pc. RJ-11 Phone Cable

## REQUIRED EQUIPMENT

1. A PC running Windows XP or older operating system and an available USB port.

## OPTIONAL EQUIPMENT

2. A 15V Power Supply for programming
3. Meter to measure the thermistor voltage
4. Cables with mini-grabber style clips or the ability to solder directly to connection pads.

## ORDERING INFORMATION

| PART         | TYPE   |
|--------------|--------|
| DS2703EVKIT+ | EV Kit |

Windows XP is a registered trademark of Microsoft Corp. 1-Wire is a registered trademark of Maxim Integrated Products, Inc.

## SETUP AND INSTALLATION

## BOARD CONNECTIONS

Connections to the demonstration board are best made either by soldering directly to the pads or by using cables with mini-grabber clips. Communication to the board can be accomplished through the RJ-11 jack by connecting the provided standard six conductor RJ-11 cord to the DS9123O USB Adapter.  No other connections are required for communicating with the device and performing SHA-1 Calculations.

A 15V programming supply should be connected between the VPP and VSS pads, as shown in Figures 1 and 2, if any of the commands that require a programming pulse are used.  To measure the Thermistor divider voltage, connect the meter across the THM and VSS pads.  Since the Thermistor divider voltage is only valid for a limited time following the Activate THM command, a trigger pulse is provided on the TRGR pad to signal that a voltage measurement should be made.  See the Main Program Window section below for more details on programming and thermistor measurements.

Figure 1: DS2703 EV Kit Schematic

<!-- image -->

Figure 2: DS2703 EV Kit (PD122404 ) Connections

<!-- image -->

## SOFTWARE INSTALLATION

To  install  the  DS2703  EV  kit  software,  exit  all  programs  currently  running  and  download  the  latest DS2703 EV kit software from our website at www.maxim-ic.com. Unzip the compressed file and run SETUP.EXE  to  begin  the  installation  process.  Follow  the  prompts  to  complete  the  installation.  The DS2703 EV kit software can be uninstalled in the Add/Remove Programs tool in the Control Panel. After the installation is complete, open the DS2703K folder and run DS2703K.EXE or select DS2703K from the  program  menu.  A  splash  screen  containing  information  about  the  evaluation  kit  appears  as  the program is being loaded.

All relevant data sheets and application notes on the DS2703 and DS2703 EV Kit can be found on our website at www.maxim-ic.com. They are stored in Adobe Acrobat format for easy viewing.

## SELECTING THE COM PORT

If the DS9123O is connected when the DS2703 EV Kit is started, the software will start up automatically. If  it  is  not  connected,  the  Select  Preferences  window  will  open.    This  software  will  operate  with  the DS9123 Serial Port Adapter, but the all of the functions of the DS2703 will not be available.

In this window, select either serial port or USB communication and the port number; then hit OK.  The DS2703  EV  kit  software  saves  this  port  selection  and  automatically  uses  the  selection  each  time  the program  starts.    To  change  the  port  later,  click  the  Preferences  option  on  the  menu  bar,  select  Edit Preferences,  and  then  select  the  appropriate  port.  To  attempt  to  automatically  locate  the  DS9123O  or DS9123, click the Poll Ports button. Warning - automatically polling for the DS9123 can disrupt other devices connected to your computer's COM ports.

<!-- image -->

## MENUS

Several pull down menu options have been provided to simplify use of the DS2703 EV kit software for the user. Their functions are individually detailed below.

## 1 WIRE SPEED MENU

<!-- image -->

The 1 Wire Speed Menu allows the user to set the 1 Wire speed that the software uses.  The DS2703 is capable of communicating at Regular and Over Drive speeds, so it is possible that the software will be communicating in one speed and the DS2703 will be in the other speed.  This menu allows the user to specify which speed the software will use, but it will not make any changes to the device.  The software will attempt to identify the correct speed of the device at startup, but in the event that the software and the device get out of sync, this Menu will allow the user to correct the problem.  A check mark will be next to the speed that is currently in use by the software.

## PREFERENCES MENU

<!-- image -->

The Preferences Menu allows the user to change port settings at any time. Edit Preferences opens the Select Preferences window. See Selecting the COM Port above.

## TOOLS MENU

<!-- image -->

The software provides 2 tools to evaluate the SHA-1 calculations, a method to view the Software Computed MAC and a SHA-1 Calculator.  Left-clicking on the Show Software Computed MAC Menu Item will expand the Main Window to show the MAC computed by the software.    See the Main Program Window section below for more details.

## The SHA-1 Calculator

<!-- image -->

Left-clicking on the Show SHA-1 Calculator Menu Item will open a new window that will allow the user to perform SHA-1 calculations independent of the DS2703.  Simply fill in the text boxes with the desired values and left-click on the Compute MAC with Software button.  If the ROM ID is to be used in Computing the MAC, then check the Use ROM ID? check box.  Use the Option - Fill with Values from Main Form Menu Item to fill the Secret, ROM ID and Challenge text boxes with values from the Main Program Window.

## HELP MENU

<!-- image -->

Selecting  the  About  topic  from  the  Help  Menu  will  open  a  window  containing  information  about  this program and Dallas Semiconductor.

## MAIN PROGRAM WINDOW

<!-- image -->

All functions of the program are located in Main Program Window.  These functions of the DS2703 are divided into three sections: SHA-1 Commands, 1 Wire Commands, and Other Commands.

## SHA-1 COMMANDS

The DS2703 uses an 8 byte Secret, the 8 byte ROM ID code of the device and an 8 byte Challenge to generate a 20 byte Message Digest (also called the MAC) using the SHA-1 encryption algorithm.

## The Secret

<!-- image -->

The user is able to update the 8 bytes of the Secret by entering the new Secret into the 8 text boxes below the Secret label.  The top-right text box is the LSB of the Secret, and the bottom-left text box is the MSB of the Secret.  (All text boxes are displayed in this same format.)  With the desired Secret in place, leftclick  on  the  Load  Secret  button.    This  will  write  the  new  Secret  to  the  DS2703  and  provide  a programming pulse to store the Secret to the device.

The user can also permanently lock the Secret by left-clicking on the Lock Secret button.  Once the Secret is locked, it cannot be changed and cannot be read from the DS2703.  The software will prompt the user to make sure the Secret is ready to be permanently locked.

Another feature  of  the  DS2703  is  to  generate  the  Next  Secret  from  the  existing  Secret,  ROM  ID  and Challenge.    It  is  important  to  Write  the  Challenge  (see  below)  before  left-clicking  the  Compute  Next Secret  or  Compute  Next  Secret  with  ID  button.    The  device  will  perform  the  SHA-1  calculation  and create the Next Secret.  The software will perform a SHA-1 calculation based on the values in the text boxes  for  the  Secret,  ROM  ID  (if  desired)  and  Challenge  and  place  the  new  Secret,  as  calculated  by software, in the Secret text boxes.  The new Secret is never read back from the device.

It is important for the software and the DS2703 to have identical Secrets, ROM ID's, and Challenges so that the software can properly verify the operation of the DS2703.  If the software is not in sync with the device, simply start with a new Secret and Load it into the device.

The DS2703 has 2 commands to compute the Next Secret.  The Compute Next Secret with ID command uses  the  Secret,  the  ROM  ID  and  the  Challenge  to  perform  the  SHA-1  encryption  algorithm.    The Compute Next Secret command uses the Secret and the Challenge, but replaces the ROM ID with 0xFF's to perform the algorithm.  The user can select which command is used by left-clicking on the appropriate button.

Note: The user must provide a 15 Volt Programming voltage to the VPP pad of the evaluation board in order for the Secret to be altered.

## The ROM ID

<!-- image -->

| ROMID   | ROMID   | ROMID   |   ROMID |
|---------|---------|---------|---------|
| 26      | D4      | EC      |      34 |
| C6      | 00      | 00      |      10 |

The ROM ID code is unique for each DS2703 device and cannot be changed by the User.  The user can load the ROM ID of the device into the ROM ID text boxes by using the Read ROM or Search ROM functions described in the 1 Wire Commands section.

## The Challenge

<!-- image -->

The Challenge is a random 8 byte block that is used by the DS2703 to perform the SHA-1 encryption algorithm.  Each time the SHA-1 is performed, either during a Compute Next Secret or a Compute MAC (see below) the Challenge is left in an undefined state.  Therefore the user must left-click on the Write Challenge button prior to each computation in order to get a proper SHA-1 calculation.

The user can left-click on the Randomize Challenge button to load a random challenge into the Challenge text boxes.  Left-clicking this button does not write the Challenge to the device.  It is still required that the user left-click on the Write Challenge button to write the challenge to the device.

## The MAC

<!-- image -->

|    | MAC   | MAC   | MAC   | MAC   |
|----|-------|-------|-------|-------|
| A  | D4    | 20    | 12    | 1E    |
| B  | 03    | 61    | 87    | 74    |
| C  | 80    | AB    | A2    | OD    |
| D  | 3B    | 05    | F0    | 21    |
| E  | F6    | BB    | 76    | 95    |

The MAC is the 20 byte message digest that is the result of the SHA-1 encryption algorithm.  When the Secret has been loaded properly, the ROM ID has been read, and the Challenge has been written to the device, left-clicking on the Compute MAC or Compute MAC with ID button will perform the SHA-1 calculation, read back the results, and then display them in the MAC text boxes.

The software will also perform the SHA-1 calculations based on the Secret, ROM ID (if desired) and Challenge text box values and compare its results to the results read back from the DS2703.  If the MAC computed by the software and MAC read back from the DS2703 match, then the software will display 'Verified'.    If  they  do  not  match,  'Not  Verified'  will  be  displayed.    The  user  can  view  the  Software Computed MAC by using the Tools Menu - Show Software Computed MAC.  The user also can compute the MAC with the DS2703, then change 1 bit in one of the text boxes of the Secret, and then Compute the MAC with software to see how big of a difference changing 1 bit will make.

<!-- image -->

If the MAC is 'Not Verified', make sure that the Challenge was written prior to computing the MAC.  If the 'Not Verified' error continues, perhaps the Secret in the device does not match what is in the Secret text boxes and the user will need to Load a Secret into the DS2703.

## 1-Wire COMMANDS

## 1 Wire Reset

All  communication  to  the  DS2703  occurs  over  the  1-Wire  bus,  but  the  device  can  be  configured  to communicate at Regular 1-Wire Speed or at Over Drive Speed.  The user can left-click on the 1-Wire Reset button and a 1-Wire Reset will be generated at the proper 1-Wire speed.  The caption below the 1Wire Reset button will display which 1-Wire Speed is used.  It will also indicate whether a device on the bus responded to the 1-Wire Reset with a Presence Detect pulse at the proper 1-Wire speed.

## Read ROM

The user can left-click on the Read ROM button to perform the Read ROM function.  The result of the Read ROM will be displayed in the caption below the button.  If a single 1-Wire device is located on the bus, the device's ROM ID will be displayed.  If more than one 1-Wire device is on the bus, the result will be a logical AND of the ROM ID's of all of the devices on the bus.  The result will also be displayed in the ROM ID text boxes in the SHA-1 Commands Sections.

## Search ROM

If  one  or  more  1-Wire  devices  are  on  the  bus,  the  user  can  left-click  on  the  Search  ROM  button  to perform the Search ROM Routine.  This will find all 1-Wire devices on the 1-Wire bus communicating at the specified 1-Wire speed and will display the results in the list box.  The user can left-click on any of the ROM ID's in the text box to select that device.  The selected ROM will appear in the caption below the  Search  ROM button as well as  be  displayed  in  the  ROM  ID  text  boxes  in  the  SHA-1  Commands Sections.  This ROM ID will be used for the Match ROM portion of the communication.  If no ROM ID is selected, a Skip ROM command will be used.

<!-- image -->

## OTHER COMMANDS

<!-- image -->

The Other Commands Section contains 4 other commands of the DS2703:  Activate THM, Clear Over Drive Mode, Set Over Drive Mode, and Soft POR.

## Activate THM

The user can left-click on the Activate THM button to send the Activate THM command to the device, which drives the THM pin low.  This allows the user to measure the voltage of the thermistor divider at the  THM  pad  of  the  evaluation  board.    The  software  will  drive  the  GPIO  pin  (Pin  2  of  the  RJ-11 connector) low in order to disable DQ by opening the analog switch (MAX4676) on the evaluation board, as shown in Figure 1.  Measurement of the thermistor divider must be performed within 100mS of the command  being  sent  to  the  device.    Therefore,  the  software  will  send  a  low  pulse  onto  the  Trigger (TGRG)  pad  of  the  evaluation  board  to  notify  the  host  system  to  make  the  thermistor  measurement. Figure 3 below shows the timing of this sequence.

Figure 3:  Sequence for measuring the thermistor voltage

<!-- image -->

## Set/Clear Over Drive Mode

The user can left-click on the Clear Over Drive Mode or Set Over Drive Mode to send the command to the device to configure the device to communicate in Regular 1-Wire Speed or in Over Drive Speed.  It is important  that  the  software  and  the  device  are  communicating  at  the  same  speed  in  order  for  these commands to have any affect.  After either of these buttons has been clicked, the software will send the command at the current 1-Wire speed, and then will switch the software to the appropriate speed.

Note: The user must provide a 15 Volt Programming voltage to the evaluation board in order for the 1Wire speed to be altered.

## Soft POR

The final button in this section is the Soft POR button.  The user can left-click on the Soft POR button to send the command to the device, which causes the device to be internally reset.  The part goes through its Power On Reset procedure without actually cycling the power on the device.

## REVISION HISTORY

| REVISION DATE   | DESCRIPTION                                          | PAGES CHANGED   |
|-----------------|------------------------------------------------------|-----------------|
| 10/09           | Changed the part number from DS2703K to DS2703EVKIT. | All             |