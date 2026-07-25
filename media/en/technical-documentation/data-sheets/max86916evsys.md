<!-- lastmod 2022-08-03 -->
## MAX86916 Evaluation System

## General Description

The MAX86916 evaluation system (EV system) allows for the quick evaluation of the MAX86916 optical module for applications at various sites on the body, particularly the finger. The MAX86916 has four LEDs (blue, green, red, and IR) and one photodiode. The MAX86916 supports a standard I 2 C interface.

## Features

- Quick Evaluation of the MAX86916 IC
- Extensive Control Over Device Registers
- Data Logging and Real-Time Monitoring Capabilities
- Fully Assembled and Tested
- Windows® 7, 8, and 10-Compatible Software

## MAX86916 EV System Files

| FILE                            | DESCRIPTION    |
|---------------------------------|----------------|
| Insert Final File Name here.exe | PC GUI Program |

## Quick Start

## Required Equipment

- MAX86916\_EVKIT\_A Board
- MAX32630FTHR
- Micro-USB Cable
- USB to FTDI Cable
- Windows PC with Two USB Ports

Ordering Information appears at end of data sheet.

## MAX86916 EV System Board

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Procedures

Note:  Software-related  items  are  identified  by  bold  text. Text in bold refers to items directly from the EV system software  installer.  Text  which  is bold  and  underlined refers to items from the Windows operating system.

The  EV  system  is  tested  and  ships  in  two  pieces, MAX86916\_EVKIT\_A and MAX32630FTHR. Perform the following steps to verify board operation:

- 1) Plug the MAX32630FTHR into the MAX86916\_ EVKIT\_A board.
- 2) Set the EV system hardware on a nonconductive surface to ensure nothing on the PCBs short together.
- 3) Connect the EV system hardware to a PC with the provided USB cable. Attach the micro-USB end to the MAX32630FTHR and the other end to the PC. LED D1 on the MAX32630FTHR begins blinking light blue.
- 4) Connect the FTDI cable to the three headers on the MAX86916\_EVKIT\_A board. With the MAX86916\_ EVKIT\_A board sensor side up, the order of the FTDI from left to right is orange, yellow, and black. See the MAX86916 EV System Board.
- 5) Windows automatically begins installing the necessary device driver. Once the driver installation is complete, a Windows message appears near the system icon menu, indicating the hardware is ready to use. Do not attempt to run the GUI prior to this message. Running the GUI prior to receiving this message necessitates closing the application and restarting it once the driver installation is complete. On some versions of Windows, administrator privileges might be required to install the USB device.

Evaluates: MAX86916

<!-- image -->

## MAX86916 Evaluation System

- 6) Once the device drivers have been installed, download the EV system software from MAX86916 EV system Design Resources tab and extract it to a temporary folder.
- 7) Open the extracted ZIP folder and double-click the .EXE file to run the installer. If a message box stating 'The publisher could not be verified. Are you sure you want to run this software?' appears, select the Yes option.
- 8) When the installer GUI appears, click Next . Select the installation paths and whether to create a short -cut on the desktop. When prompted, click Install . Once complete, click Close .
- 9) If a shortcut was created, double-click on the shortcut to start the GUI. Alternatively, go to Start | All Programs , look for the MAX86916EVKitTool folder, and click on the MAX86916EVKitTool.EXE file.
- 10) When the GUI appears, the text in the status bar in the lower right corner displays Connected . If the GUI displays Not Connected , ensure the flex PCB is properly connected and power cycle the MAX86916 EV system.

## Detailed Description of Software

## Software Startup

When  the  DeviceStudio  GUI  is  opened,  no  devices  are connected. Select Serial over USB/Bluetooth as the Scan Mode and click the Scan button, as shown in Figure 1.

After  a  device  has  been  found,  the Device  Info and the GUI refresh to indicate a device has been found, as shown in Figure 2.

Click Launch  Tool to  continue  using  the  EV  system software.

## ToolStrip Menu Bar

The ToolStrip menu bar (Figure 3 )  is  located  at  the  top of  the  GUI  window. This bar consists of the File , View , Device , Diagnostics , Tools ,  and Help menus,  whose functions are detailed in the following sections.

Figure 1. DeviceStudio GUI with Device Disconnected

<!-- image -->

Figure 2. DeviceStudio Device Connected

<!-- image -->

Figure 3. ToolStrip Menu Bar

<!-- image -->

## MAX86916 Evaluation System

## File Menu

The File menu  has  the  option  to  exit  out  of  the  GUI program.

## View Menu

The View menu has the options to view the device info from the GUI introduction screen and to view the Register Map . In the register map, the user has the option to read and  set  individual  registers.  The  register  map  also  provides an explanation of every bit in each register. Doubleclicking  on  a  bit  toggles  its  state,  and  pressing  the Set Reg button writes the selected settings.

## Device Menu

The Device menu has the option to connect or discon -nect an EV system to the GUI. If a board is disconnected while the GUI is open, the GUI displays Hardware Not Connected in the lower right corner. If the device is then plugged  back  in,  the  user  can  navigate  to  the Device Evaluates: MAX86916

menu and select Connect .  If  successful, the lower right corner of the GUI reads Connected .

## Diagnostics Menu

The Diagnostics menu has the option to look at the log file for the DeviceStudio. This can be used for debugging purposes.

## Help Menu

The Help menu  contains  information  to  aid  with  any problems that might arise when using the GUI. The About option displays the GUI splash screen which tells the user the GUI version being used.

## MAX86916 GUI

The  main  interface  structure  of  the  GUI  consists  of  a tab  control,  where  each  tab  contains  controls  to  change various  PPG  settings  as  shown  in  Figure  4.  Changing these interactive controls triggers a write operation to the MAX86916 to update the register contents. Likewise, these controls are refreshed when reading from the device.

Figure 4. Main GUI Screen

<!-- image -->

Evaluates: MAX86916

Figure 5 shows an example of viewing data streaming in the GUI. The GUI allows for any LED output to be put on either the left or right Y-axis. Clicking once on an LED shows the output on the left axis, clicking a second time shows the output on the right axis, and clicking a third time stops showing the output. This feature is useful to help align LED outputs on top of each other in the GUI.

Figure 5. GUI Showing Data Streaming

<!-- image -->

## MAX86916 Evaluation System

## PPG Settings Tab

The PPG Settings tab ( Figure 6) displays the general settings associated with PPG. The tab provides the option to enable automatic gain control (AGC), a fully configurable LED drive current, selectable sample rates, pulse widths, and ADC ranges.

## PPG Settings (Cont.) Tab

The PPG Settings (Cont.) tab ( Figure 7) in the GUI gives the  option  to  disable  ambient  light  cancellation,  enable and  increase  the  amount  of  crosstalk  cancellation,  and change how the FIFO behaves.

Figure 6. PPG Settings Tab

<!-- image -->

Figure 7. PPG Settings (Cont.) Tab

<!-- image -->

## MAX86916 Evaluation System

## LED Sequence Tab

The LED Sequence tab ( Figure 8 ) controls the data for -mat in the FIFO and the sequence of the LED exposures.

## Logging Settings

The MAX86916 GUI provides the ability to log raw optical data to a comma separated value (CSV) file. To log data,

Figure 8. LED Sequence Tab

<!-- image -->

Figure 9. Check the Box to Enable Logging

<!-- image -->

Evaluates: MAX86916

check the Log to File box ( Figure 9 ), choose whether to write a header and the current PPG settings to the log file, and then click the Browse button to select where to save the log file (Figure 10). The GUI allows the user to select which values to be logged to the file.

Figure 10. Choose Location to Save the Log File

<!-- image -->

## MAX86916 Evaluation System

## Detailed Description of Hardware

The MAX86916 EV system provides a single platform to evaluate the functionality and features of the MAX86916. The MAX86916 is an optical module containing 4 LEDs (IR,  red,  green,  and  blue)  and  one  photodiode. The EV system comes with all jumpers installed, and a description of the jumpers can be found in Table 1 . The EV system utilizes the MAX32630FTHR Cortex-M4F microcontroller for wearables to interface with the GUI and provide power

## Component Suppliers

| SUPPLIER                  | WEBSITE                             |
|---------------------------|-------------------------------------|
| Keystone                  | www.keyelco.com                     |
| Kycon                     | www.kycon.com                       |
| Maxim Integrated          | www.maximintegrated.com             |
| Molex                     | www.molex.com                       |
| Murata                    | www.murata.com                      |
| Panasonic                 | www.industrial.panasonic.com        |
| Samtec                    | www.samtec.com                      |
| Samsung Electro-Mechanics | www.samsungsem.com/global/index.jsp |
| Sullins                   | www.sullinscorp.com                 |
| TDK Corporation           | www.tdk.com                         |
| TE Connectivity           | www.te.com                          |
| Wurth Electronics         | www.we-online.com                   |

Note: When contacting these component suppliers, indicate that the MAX86916 is being used.

## Component List

| SUPPLIER               | DESCRIPTION                                       |
|------------------------|---------------------------------------------------|
| MAX86916_EVKIT_A       | MAX86916 Sensor Board                             |
| MAX32630FTHR           | Microcontroller Board                             |
| Micro-USB to USB Cable | Cable to connect Micro- controller Board to PC    |
| USB to FTDI Cable      | Cable to provide data streaming from sensor to PC |

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX86916EVSYS# | EV System |

Evaluates: MAX86916

to the MAX86916. The MAX32630FTHR operates from a host PC through a USB to Micro-USB cable and a USB to FTDI cable.

## Table 1. Description of Jumpers

| JUMPER   | DESCRIPTION          |
|----------|----------------------|
| JU1      | Connect VLED to +5V  |
| JU2      | Connect VDD to +1.8V |

## MAX86916 EV System Bill of Materials (BOM)

| ITEM           | QTY                   | REF DES                             | Var Status                    | MAXINV                                         | MFG PART #                                                                                              | MANUFACTURER                                    | VALUE                                                                                          | DESCRIPTION                                                                                                                                                                    |
|----------------|-----------------------|-------------------------------------|-------------------------------|------------------------------------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                |                       |                                     |                               |                                                | CGA2B3X7R1H104K050BB;C1005X7R1H104 K050BB;GRM155R71H104KE14;GCM155R7 1H104KE02;C1005X7R1H104K050BE;UMK1 | TDK;TDK;MURATA;MURATA;TDK;TAIYO YUDEN;TDK       | 0.1UF                                                                                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125                                                                                                  |
| 1 2            | 2 1                   | C1, C3 C2                           | Pref Pref                     | 20-000U1-04A 20-004U7-33B                      | 05B7104KV-FR;CGA2B3X7R1H104K050BE CL05A475MO5NUN                                                        | SAMSUNG ELECTRO-MECHANICS                       | 4.7UF                                                                                          | DEGC; TC=X7R CAP; SMT (0402); 4.7UF; 20%; 16V; X5R; CERAMIC CHIP                                                                                                               |
| 3              | 2 C4,                 | C6                                  | Pref                          | 20-0010U-A29                                   | GRM188R61C106MA73                                                                                       | MURATA                                          | 10UF                                                                                           | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=20%; MODEL=GRM SERIES; TG=- 55 DEGC TO +85 DEGC; TC=X5R                                                                    |
| 4              | 2                     | C5, C7                              | Pref                          | 20-0001U-CA28                                  | EMK105BJ105KV                                                                                           | TAIYO YUDEN                                     | 1UF                                                                                            | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 16V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R ;NOTE:PURCHASE DIRECT FROM THE MANUFACTURER                                            |
| 5              | 1                     | C13                                 | Pref                          | 20-0010U-BA12                                  | GRM155R61A106ME44;GRM155R61A106 ME11;0402ZD106MAT2A;CL05A106MP5NU NC                                    | MURATA;MURATA;AVX;SAMSUNG                       | 10UF                                                                                           | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW;             |
| 6              | 1                     | INTB PU                             | Pref                          | 02-TPMINI5004-00                               | 5004                                                                                                    | KEYSTONE                                        | N/A                                                                                            | PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                                                                           |
| 7              | 1 J1                  |                                     | Pref                          | 01-PPTC121LFBN12P-19                           | PPTC121LFBN-RC                                                                                          | SULLINS ELECTRONICS CORP                        | PPTC121LFBN-RC                                                                                 | CONNECTOR; FEMALE; THROUGHHOLE; 2.54MM CONTACT CENTER; FEMALE HEADER; STRAIGHT; 12PINS                                                                                         |
| 8              | 1 J2                  |                                     | Pref                          | 01-PPTC161LFBN16P-19                           | PPTC161LFBN-RC                                                                                          | SULLINS ELECTRONICS CORP                        | PPTC161LFBN-RC                                                                                 | CONNECTOR; FEMALE; THROUGHHOLE; 2.54MM CONTACT CENTER; FEMALE HEADER; STRAIGHT; 16PINS CONNECTOR; MALE; THROUGHHOLE; 2.54MM THT ANGLED PIN HEADER; RIGHT ANGLE;                |
| 9              | 1 J3                  |                                     | Pref                          | 01-613003110213P-19 01-TSM10201LSV2P-17        | 61300311021 TSM-102-01-L-SV                                                                             | WURTHELECTRONICS INC SAMTEC                     | 61300311021 TSM-102-01-L-SV                                                                    | 3PINS CONNECTOR; MALE; SMT; SINGLE ROW; STRAIGHT THROUGH; 2PINS RESISTOR; 0402; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                          |
| 10 11          | 2 1 R5                | JU1, JU2                            | Pref Pref                     | 80-0001K-18                                    | ERJ-2RKF1001                                                                                            | PANASONIC KYCON;KYCON;SULLINS ELECTRONICS CORP. | 1K SX1100-B                                                                                    | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; |
| 12 13          | 2 1 TP3               | SU1, SU2                            | Pref Pref                     | 02-JMPFS1100B-00 02-TPMINI5000-00              | S1100-B;SX1100-B;STC02SYAN                                                                              | 5000 KEYSTONE                                   | N/A                                                                                            | PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                                                                           |
| 14             | 1                     | U1                                  | Pref                          | 00-SAMPLE-02                                   | MAX86916                                                                                                | MAXIM                                           | MAX86916                                                                                       | EVKIT PART - IC; MAX86916; OLGA14; PACKAGE DRAWING NUMBER: 21-100325; LAND PATTERN NUMBER: 90-100122; PACKAGE CODE: F143H7MK+1                                                 |
| 15             | 1                     | U2                                  | Pref                          | 10-MAX8511EXK18-X EPCB86916                    | MAX8511EXK18+ MAX86916                                                                                  | MAXIM                                           | MAX8511EXK18+                                                                                  | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW=DROPOUT; LINEAR REGULATOR; SC70-5 PCB:MAX86916                                                                                       |
| 16             | 1                     | PCB                                 | -                             |                                                |                                                                                                         | MAXIM MAXIM                                     | PCB                                                                                            | MODULE; BOARD ASSEMBLY; THROUGHHOLE; MAX32630FTHR# LAMINATED PLASTIC WITH COPPER CLAD                                                                                          |
| 17             | 1 KIT1                |                                     | Pref 01- PBC12SAAN12P- 21     | 35-8932630KFT-00                               | 89-32630#KFT                                                                                            |                                                 | 89-32630#KFT CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 12PINS; -65 DEGC TO +125 DEGC |                                                                                                                                                                                |
| 19             | 1 Pref                |                                     | 01- PBC16SAAN16P-             | PBC12SAAN                                      | SULLINS ELECTRONICS CORP.                                                                               | PBC12SAAN                                       | CONNECTOR; MALE; THROUGH                                                                       |                                                                                                                                                                                |
| 20 TOTAL       | 1 24                  | Pref                                | 21                            | PBC16SAAN                                      | SULLINS ELECTRONICS CORP.                                                                               | PBC16SAAN                                       | HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC                                       |                                                                                                                                                                                |
| DO NOT ITEM    | PURCHASE(DNP) QTY REF | DES                                 | Var Status                    | MAXINV N/A                                     | MFG PART # N/A                                                                                          | MANUFACTURER N/A                                | VALUE SHORT                                                                                    | DESCRIPTION                                                                                                                                                                    |
| 1 2            | 3 R3, R8, 1 R4        | R10                                 | DNP DNP                       | N/A                                            | N/A                                                                                                     | N/A                                             | SHORT                                                                                          | PACKAGE OUTLINE 0603 RESISTOR - EVKIT PACKAGE OUTLINE 0402 RESISTOR - EVKIT                                                                                                    |
|                | 3 R11,                | R13, R15                            | DNP                           | N/A                                            |                                                                                                         | N/A                                             | OPEN                                                                                           | PACKAGE OUTLINE 0402 RESISTOR -                                                                                                                                                |
| TOTAL          | 3 7                   |                                     |                               |                                                | N/A                                                                                                     |                                                 |                                                                                                | EVKIT                                                                                                                                                                          |
| PACKOUT ITEM 1 | (These are QTY REF 1  | purchased parts but DES PACKOUT BOX | not assembled Var Status Pref | on PCB and will be shipped MAXINV 88-00711-SML | with PCB) MFG PART # 88-00711-SML                                                                       | MANUFACTURER N/A N/A                            | VALUE N/A N/A                                                                                  | DESCRIPTION BOX;SMALL BROWN93/16X7X1 1/4 - PACKOUT                                                                                                                             |
|                | 2 3                   | 1 PACKOUT BOX 1 PACKOUT BOX         | Pref Pref                     | 87-02162-00 85-MAXKIT-PNK                      | 87-02162-00 85-MAXKIT-PNK EVINSERT                                                                      | N/A                                             | N/A                                                                                            | ESD BAG;BAG;STATIC SHIELD ZIP 4inX6in;W/ESD LOGO - PACKOUT PINK FOAM;FOAM;ANTI-STATIC PE 12inX12inX5MM WEBINSTRUCTIONS FOR MAXIM DATA SHEET                                    |
| 6              | 4 5 1                 | 1 PACKOUT BOX PACKOUT BOX           | Pref Pref                     | EVINSERT 85-84003-006                          | 85-84003-006                                                                                            | N/A N/A                                         | N/A                                                                                            | - PACKOUT LABEL(EV KIT BOX) - PACKOUT KIT; ASSY-STANDOFF 3/8IN; 1PC.                                                                                                           |
|                |                       |                                     |                               |                                                |                                                                                                         |                                                 | N/A 3/8IN                                                                                      | STANDOFF/FEM/HEX/4-40IN/(3/8IN)/NYLON; 1PC. SCREW/SLOT/PAN/4-40IN/(3/ TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK;                             |
|                | 4                     | PACKOUT 1.8V, AGND,                 | Pref                          | 08-EKSO44003803-01                             | NYLON STANDOFF 4-40 3/8                                                                                 | MAXIM                                           |                                                                                                | PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD                                                                                                                |
| 7              | 4                     | INTB, TP3                           |                               |                                                |                                                                                                         |                                                 |                                                                                                |                                                                                                                                                                                |
|                |                       |                                     | Pref                          | 02-TPCOMP5006-00                               |                                                                                                         | 5006 KEYSTONE                                   | N/A                                                                                            | THICKNESS=0.062IN; NOT FOR COLD TEST                                                                                                                                           |
| 9              | 2                     | MISC1                               | Pref                          | 01-302501003-10                                |                                                                                                         | QUALTEK                                         | N/A                                                                                            |                                                                                                                                                                                |
| TOTAL          | 15                    |                                     |                               |                                                |                                                                                                         |                                                 |                                                                                                | CONNECTOR; MALE; USB-A MINI-B; USB 4P(A)/M - USB MINI 5P(B)/M; STRAIGHT;                                                                                                       |
|                |                       |                                     |                               |                                                |                                                                                                         |                                                 |                                                                                                | 36IN                                                                                                                                                                           |
|                |                       |                                     |                               |                                                | 3025010-03                                                                                              |                                                 |                                                                                                |                                                                                                                                                                                |

## MAX86916 EV System Schematics

<!-- image -->

## MAX86916 Evaluation System

## MAX86916 EV System PCB Layout

MAX86916 EV System-Top Silkscreen

<!-- image -->

MAX86916 EV System-Bottom Layer

<!-- image -->

MAX86916 EV System-Top Layer

<!-- image -->

MAX86916 EV System-Bottom Silkscreen

<!-- image -->

## MAX86916 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX86916