<!-- lastmod 2022-08-03 -->
<!-- image -->

## www.maxim-ic.com

## FEATURES

-  Demonstrates the Capabilities of the DS2502 1Kb Add-Only Memory Including:
-  Identification
-  EPROM Memory
-  Interfaces to the USB Port of a PC Running a Windows XP® Operating System or Older

## INDEX

Evaluation Kit Contents

Equipment Needed

Introduction

Setup and Installation

Board Connections

Software Installation

Selecting the COM Port

Program Menus

Menu Windows

Program Tabs

ROM Codes Tab

Memory Tab

## INTRODUCTION

The  DS2502  evaluation  kit  (EV  kit)  makes  performance  evaluation,  software  development,  and prototyping  with  the  DS2502  1Kb  Add-Only  Memory  easy.  The  evaluation  board  interfaces  to  a  PC through a DS9123O USB Adapter and RJ-11 cable connection.

Separate control tabs allow the user access all DS2502s that are connected to the 1-Wire® bus and access all memory locations of those devices.

Kit demonstration boards will vary as they are improved upon over time.

## DS2502EVKIT+ 1Kb Add-Only Memory Evaluation Kit

## EVALUATION KIT CONTENTS

1 pc. Evaluation Board

1 pc. DS9123O USB Port Adapter

1 pc. RJ-11 Cable

## EQUIPMENT NEEDED

1. A PC running Windows XP operating system or older and an available serial port.
2. Cables with mini-grabber style clips or the ability to solder directly to connection pads.
3. A Lithium-Ion (Li+) battery and a power supply and/or load circuit.

## ORDERING INFORMATION

| PART         | TYPE   |
|--------------|--------|
| DS2502EVKIT+ | EV Kit |

## SETUP AND INSTALLATION

## BOARD CONNECTIONS

Connections to the TSSOP demonstration board are best made either by soldering directly to the pads or by using cables with mini-grabber clips. Communication to the TSSOP board can be accomplished either through the RJ-11 jack by connecting the provided standard six conductor RJ-11 cord.

A battery should be connected between the VDD (positive terminal) and VSS (negative terminal) and provide enough voltage to power the DS2502. In order to program the device, a 12 Volt programming voltage should be connected between VPP and VSS.

Figure 1:  Connecting the DS2502 Evaluation Kit

<!-- image -->

## SOFTWARE INSTALLATION

To install the DS2502 EV kit software, download the latest version at www.maxim-ic.com. Unzip the compressed  file  and  double-click  the  SETUP.EXE  icon  to  begin  the  installation  process.  Follow  the prompts to complete the installation. The DS2502 EV kit software can be uninstalled in the Add/Remove Programs tool in the Control Panel. After the installation is complete, open the DS2502K folder and run DS2502K.EXE  or  select  DS2502K  from  the  program  menu.  A  splash  screen  containing  information about the evaluation kit appears as the program is being loaded.

## SELECTING THE COMMUNICATION PORT

The first time the software runs, the Select Preferences window may appear. In this window, select either serial port or USB communication and the port number; then hit OK. The DS2502 EV kit software saves this port selection and automatically uses the selection each time the program starts. To change the port later, click the Preferences option on the menu bar, select Port Settings, and then select the appropriate port. To attempt to automatically locate the DS9123,  click the Poll Ports button. Warning: Automatically polling for the DS9123 can disrupt other devices connected to your computer's COM ports .

<!-- image -->

## PROGRAM MENUS

Several pull down menu options have been provided to simplify use of the DS2502 EV kit software for the user. Their functions are individually detailed below.

## FILE MENU

<!-- image -->

The File  Menu  allows  the  user  to  save  or  load  all  of  the  data  in  the  text  boxes  on  the  Memory  Tab. Selecting the Load Setup does not write the DS2502, but rather it loads the values into the text boxes. The user must still click the Write button in order to write the device.

## HELP MENU

Selecting  the  About  topic  from  the  Help  Menu  will  open  a  window  containing  information  about  the current revision of this program and Maxim.

<!-- image -->

## PROGRAM TABS

All functions of the program are divided under two tabs in the main program window. Left click on the appropriate  tab  to  move  to  the  desired  function  page.    Located  on  the  ROM  Codes  tab  are  the  ROM Codes of all the DS2502s that are found on the 1-Wire bus. The Memory tab displays the contents of all of the memory locations inside the DS2502 and allows the user to alter the data.

## ROM CODES TAB

<!-- image -->

The ROM Codes Tab displays the ROM Codes of all the DS2502s that are found on the 1-Wire bus. The user can refresh the list of ROM Codes by left-clicking on the Find DS2502 ROM Codes button. This will  initiate  a  Search  ROM  sequence  to  find  all  of  the  1-Wire  devices  with  the  family  code  of  the DS2502.

## MEMORY TAB

<!-- image -->

The Memory Tab gives the user access to read the contents of all of the Memory inside the DS2502. Leftclicking the Write Page X or Read Page X buttons will access the device for the specific page that is displayed. Left-clicking on the Read All Pages or Write All Pages will access Pages 0-3 and the Status registers.

When the user writes to the device, the software will determine if the data was correctly written to the device  by  checking  the  CRC  byte.  Once  the  CRC  byte  has  been  verified,  the  software  will  enable  a programming pulse to program the data into the EPROM of the device.

A 12 volt programming voltage is required on the VPP terminal of the DS2502 EV kit in order to write to the device. If the programming voltage is not present, an Error message will be displayed and the memory will not be updated.

## REVISION HISTORY

| REVISION DATE   | DESCRIPTION                                                    | PAGES CHANGED   |
|-----------------|----------------------------------------------------------------|-----------------|
| 8/09            | Changed the ordering part number from DS2502K to DS2502EVKIT+. | All             |