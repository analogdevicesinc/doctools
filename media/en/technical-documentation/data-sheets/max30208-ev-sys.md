<!-- lastmod 2024-07-15 -->
<!-- image -->

Evaluates: MAX30208

## General Description

The MAX30208 evaluation system (EV system) provides a single platform to evaluate the MAX30208, a temperature sensor with ±0.1°C accuracy. The EV system consists of two boards connected through headers, a MAX32630FTHR microcontroller board, and the MAX30208 interface board. Also included with the EV system is a flex PCB that holds the  MAX30208  IC.  The  MAX32630FTHR  contains  the firmware necessary to use the PC GUI program and also provides  power  to  the  MAX30208  interface  board.  The MAX30208 interface board ships with jumpers preinstalled to allow quick evaluation of the MAX30208.

## Features

- Flexible PCB Design
- Low Thermal Mass Allows for Fast Response Time
- Sense Temperature Away from Extra Circuitry
- Easy to Reach Test Points
- Fully Assembled and Tested
- Windows ®  7, 8, and 10-Compatible Software

## MAX30208 EV System Files

| FILE                       | DESCRIPTION          |
|----------------------------|----------------------|
| MAX30208EVKitSetupV100.exe | PC GUI Program       |
| MAX30208_SENSOR_FLEX.zip   | Sch, BOM, PCB Layout |
| MAX3020x INTERFACE.zip     | Sch, BOM, PCB Layout |
| MAX32630FTHR.zip           | Sch, BOM, PCB Layout |

The GUI and other documentation to use this EV System are available in the MAX30208EVSYS# EV System Design Resources tab.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## MAX30208 EV System Photo

<!-- image -->

319-100370; Rev 1; 4 /24

## MAX30208 Evaluation System

## Quick Start

## Required Equipment

Note: In  the  following  sections,  software-related  items are  identified  by  bold  text.  Text  in bold refers  to  items directly from the install of EV system software. Text that is bold and underlined refers to items from the Windows operating system.

- MAX30208 Sensor Flex
- MAX3020x interface board
- MAX32630FTHR
- Micro-USB cable
- Windows PC with USB port
- MicroSD card (optional)
- Lithium-ion battery (optional)

Note:  MAX30208  Sensor  Flex  and  MAX3020x  interface board design files are attached at the end of this document.

## Procedure

The  EV  system  is  tested  and  ships  in  three  pieces: MAX30208 Sensor Flex, MAX3020x interface board, and MAX32630FTHR.

Follow the steps below to verify board operation:

- 1) Plug the MAX32630FTHR into the MAX3020x Interface Board.
- 2) Connect  the  MAX30208  Sensor  Flex  to  J9  on  the interface board, ensuring that the contact pads are on the bottom.
- 3) Set  the  EV  system  hardware  on  a  nonconductive surface to ensure nothing on the PCBs short together.
- 4) Connect the EV system hardware to a PC with the provided USB cable. Attach the micro-USB end to the MAX32630FTHR and the other end to the PC. LED D1 on the MAX32630FTHR begins blinking light blue.

Ordering Information appears at end of data sheet.

- 5) Windows  should  automatically  begin  installing  the necessary device driver. Once the driver installation is  complete, a Windows message appears near the system icon menu, indicating the hardware is ready to use. Do not attempt to run the GUI prior to this message. If you do, then close the application and restart it  once  the  driver  installation  is  complete.  On  some versions  of  Windows,  administrator  privileges  might be required to install the USB device.
- 6) Once the device drivers have been installed, download  the  software  from MAX30208ESYS#  EV  system  Design  Resources tab  and  extract  it  to  a temporary folder.
- 7) Open the extracted ZIP folder and double-click the .EXE file  to  run  the  installer.  If  a  message  box  stating The publisher could not be verified. Are you sure you want to run this software? appears,  select  the Yes option.
- 8) When the  installer  GUI  appears,  click Next .  Select the installation paths and whether a shortcut should be  created  on  the  desktop.  When  prompted,  press Install . Once complete, click Close .
- 9) If a shortcut was created, double-click on the shortcut to start the GUI. Alternatively, go to Start | All Programs . Look for the MAX30208EVKitTool folder and click on the MAX30208EVKitTool.EXE file inside the folder.
- 10) When the GUI appears, the text in the right field of the bottom status bar displays Connected . If the GUI displays Not Connected , ensure the flex PCB is properly connected and power-cycle the MAX30208 EV system.

## Detailed Description of Software

## Software Startup

If the EV system is connected while the software is open, the software first initializes the hardware to communicate. The software then reads the device registers and updates all the associated control fields displayed on the GUI.

Once an EV system is connected, the GUI automatically sets the device registers and begins taking temperature measurements.

If  the  EV  system  is  not  connected  on  startup,  the  GUI starts up with no devices displayed in the Devices section of the GUI and no temperature reading in the Selected Device section. The status bar at the bottom of the GUI states Not Connected .

## ToolStrip Menu Bar

The ToolStrip menu bar (Figure 1) is located at the top of the GUI window. This bar comprises the File , Device , Logging , and Help menus whose functions are detailed in the following sections.

## File Menu

The File menu contains the option to exit out of the GUI program.

## Device Menu

The Device menu  provides  the  ability  to  connect  or disconnect an EV system to the GUI. If a board is disconnected while the GUI is open the GUI displays Hardware Not  Connected in  the  lower  right  corner.  If  the  device is  then  plugged  back  in,  the  user  can  navigate  to  the Device menu  and  select Connect .  If  successful,  the bottom right corner of the GUI reads Device Connected .

## Logging Menu

The Logging menu  provides  two  ways  to  export  each data sample that is being measured by the device. The first  logging  option  is File Logging .  Selecting either log option  opens  a  prompt  asking  to  select  a  device  from which to log data. Next, a prompt appears that allows the user to choose a name for the comma-separated value (CSV) log file, as well as the location to save the generated file. Figure 2 and Figure 3 show the GUI when creating a log file. The GUI disables file logging after one monitoring session and a new file must be generated through the Logging menu to log another dataset.

The second logging option is MicroSD Logging . MicroSD logging  provides  the  ability  to  operate  the  EV  system without a connection to a host PC or power supply. First, insert  a  microSD  card  into  the  connector  on  the  underside of the MAX32630FTHR. After selecting the logging interval  and  writing  the  selection  to  the  microSD  card as  seen  in  Figure  4,  connect  a  3.7V  lithium-ion  battery with  a  JST  PH  connector  to  the  MAX32630FTHR  and then disconnect the board from the host PC. Refer to the MAX32630FTHR data sheet for details on connecting a Li+ battery. Press SW2 to start saving measurements to the SD card. Pressing SW2 again stops measurements.

To transfer the logged data from the MicroSD card to a file on a PC, reconnect the MAX30208 EV system to the PC and select microSD card logging from the Logging menu. Select  the Save  to  File option  and  a  prompt  appears to  name the log file  (Figure  3).  For  subsequent  logging sessions, Clear  Log should  be  pressed  on  the Setup MicroSD  Logging screen  to  prevent  multiple  datasets from being recorded to the same log file.

## MAX30208 Evaluation System

Evaluates: MAX30208

<!-- image -->

Figure 1. ToolStrip Menu Bar

Figure 2. Device Select Screen for Logging

<!-- image -->

Figure 3. File Naming Screen for Logging

<!-- image -->

## MAX30208 Evaluation System

## Help Menu

The About option displays the GUI splash screen, which names the GUI version being used.

## Tab Control

The  main  interface  structure  of  the  GUI  consists  of  a tab control where each tab contains controls relevant to various blocks of the device. Changing these interactive controls  triggers  a  write  operation  to  the  MAX30208  to update the register contents. Likewise, these controls are refreshed  when  reading  from  the  device.  The Register Map tab  allows  the  user  to  read  and  write  to  individual registers.

## General Tab

The General Tab (Figure 5) displays a general overview of  the  MAX30208.  The  tab  provides  a  list  of  devices currently  connected,  temperature  data  for  a  selected device, as well as controls for select registers.

Evaluates: MAX30208

Figure 4. MicroSD Logging Prompt

<!-- image -->

Figure 5. General Tab

<!-- image -->

│

## MAX30208 Evaluation System

## Register Map Tab

The Register Map tab (Figure 6) provides more direct access to the internal registers of the MAX30208. From this tab, it is possible to read the contents of individual registers and to manually enter the desired bit settings for a write operation. For the register address selected in the table on the left, the contents are displayed at the bottom of the tab and visualized as bold or non-bold bit names. When a bit is bold, its value is 1. Otherwise, the bit is 0. Full descriptions of each bit are available in the table on the right for quick reference. Pressing Read reads the selected register highlighted in teal. Pressing Read All reads all registers and updates their values in the Register Map tab. To write to a register, set the desired bit values by clicking on the bit names to make bold or non-bold and then press Write .

Figure 6. Register Map Tab

<!-- image -->

Evaluates: MAX30208

## Detailed Description of Hardware

The MAX30208 EV system provides a single platform to evaluate the functionality and features of the MAX30208. The board contains jumpers to test the MAX30208 under several conditions. A list of all jumpers and their respective functions is available in Table 1.

## Table 1. Description of Jumpers

| JUMPER   | DESCRIPTION                                   |
|----------|-----------------------------------------------|
| J3       | Connect SCL to 4.7kΩ pullup                   |
| J4       | Connect SDAto 4.7kΩ pullup                    |
| J5       | Connect VCC to 1.8V of the MAX32630FTHR       |
| J6       | Connect to I 2 C position                     |
| J7/J8    | Connect SDA/SCL from MAX23630FTHR to MAX30208 |

## Component  Suppliers

| SUPPLIER        | WEBSITE                      |
|-----------------|------------------------------|
| Keystone        | www.keyelco.com              |
| Analog Devices  | www.analog.com               |
| Molex           | www.molex.com                |
| Murata          | www.murata.com               |
| Panasonic       | www.industrial.panasonic.com |
| Samtec          | www.samtec.com               |
| Sullins         | www.sullinscorp.com          |
| TE Connectivity | www.te.com                   |

Note: Indicate that you are using the MAX30208 when contacting these component suppliers.

The  EV  system  utilizes  the  MAX32630FTHR  Arm® Cortex®-M4F microcontroller for wearables to interface with the GUI and optionally provides power to the MAX30208. The MAX32630FTHR operates either from a host PC or directly from a Li+ battery. If an SD card is present in the MAX32630FTHR, pressing SW2 on the MAX32630FTHR initiates measurements and saves log files to the SD card. Logging is stopped by pressing SW2 a second time.

## Powering the EV system

The  MAX30208  EV  system  is  powered  directly  from the  MAX32630FTHR  through  either  a  lithium-ion  battery  or  a  USB  to  Micro-USB  cable.  J5  must  be  connected to the 1.8V option in order to supply power from the  MAX32630FTHR.  J7  and  J8  must  each  have  a shunt  connected  to  connect  the  serial  data  (SDA)  and serial clock (SCL) lines from the MAX32630FTHR to the MAX30208 IC. J10 can be used to connect the interface board, through wires to another board that contains the MAX30208 IC.

J10 can also be used to connect a microcontroller other than the MAX32630FTHR to the MAX30208 IC.

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX30208EVSYS# | EV System |

#Denotes RoHS compliance.

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

## MAX30208EVSYS# EV System Bill of Materials

Other documentation to use this EV System are available in the MAX30208EVSYS# EV System Design Resources tab.

## MAX30208 Sensor Flex Bill of Materials

| ITEM   | REF_DES   | DNI/DNP   |   QTY | MFG PART #         | MANUFACTURER   | VALUE            | DESCRIPTION                                                                                |
|--------|-----------|-----------|-------|--------------------|----------------|------------------|--------------------------------------------------------------------------------------------|
| 1      | C1        | -         |     1 | GRM033C81E104KE14  | MURATA         | 0.1UF            | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1µF; 25V; TOL = 10%; TG = -55°C TO +105°C; TC = X6S |
| 2      | U1        | -         |     1 | MAX30208           | ANALOG DEVICES | MAX30208         | EVKIT PART - IC; MAX30208; PACKAGE OUTLINE DRAWING: 21-100265; LGA10                       |
| 3      | PCB       | -         |     1 | MAX30208SENSORFLEX | ANALOG DEVICES | PCB              | PCB:MAX30208SENSORFLEX                                                                     |
| 4      | J1        | DNP       |     0 | 5051100692_EDGE    | MOLEX          | 5051100692_ EDGE | CONNECTOR; FEMALE; SMT; FD19 SERIES; RIGHT ANGLE; 6PINS;                                   |
| TOTAL  | TOTAL     | TOTAL     |     3 |                    |                |                  |                                                                                            |

## MAX30208 Interface Board Bill of Materials

| ITEM   | REF_DES               |   QTY | MFG PART #        | MANUFACTURER              | VALUE          | DESCRIPTION                                                                                                                  |
|--------|-----------------------|-------|-------------------|---------------------------|----------------|------------------------------------------------------------------------------------------------------------------------------|
| 1      | 3VP3, V1P8            |     2 | 5005              | KEYSTONE                  | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
| 2      | GND, SCL, SDA, VDD/DQ |     4 | 5006              | KEYSTONE                  | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 3      | J1                    |     1 | PPPC161LFBN-RC    | SULLINS ELECTRONICS CORP. | PPPC161LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; LFB SERIES; 2.54MM CONTACT CENTER; STRAIGHT; 16PINS                                         |
| 4      | J2                    |     1 | PPPC121LFBN-RC    | SULLINS ELECTRONICS CORP  | PPPC121LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; HEADER FEMALE; STRAIGHT; 12PINS                                                             |
| 5      | J3, J4                |     2 | TSW-102-07-T-S    | SAMTEC                    | TSW-102-07-T-S | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55°C TO +105°C                                            |
| 6      | J5, J7, J8            |     3 | TSW-103-07-L-S    | SAMTEC                    | TSW-103-07-L-S | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS                                                                         |
| 7      | J6                    |     1 | TSW-103-07-L-D    | SAMTEC                    | TSW-103-07-L-D | CONNECTOR; MALE; THROUGH HOLE; THROUGH HOLE 0.025 POST HEADER; STRAIGHT; 6PINS                                               |
| 8      | J9                    |     1 | 5051100692        | MOLEX                     | 5051100692     | CONNECTOR; FEMALE; SMT; FD19 SERIES; RIGHT ANGLE; 6PINS                                                                      |
| 9      | J10                   |     1 | 282834-6          | TE CONNECTIVITY           | 282834-6       | CONNECTOR; FEMALE; THROUGH HOLE; TERMINAL BLOCK PCB MOUNT SIDE WIRE ENTRY STACKING; STRAIGHT; 6PINS                          |
| 10     | R1, R2                |     2 | ERJ-2RKF4701      | PANASONIC                 | 4.7K           | RESISTOR; 0402; 4.7K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                       |
| 11     | U1                    |     1 | DS2484R+          | ANALOG DEVICES            | DS2484R+       | IC; INFC; SINGLE-CHANNEL 1-WIRE MASTER WITH ADJUSTABLE TIMING AND SLEEP MODE; SOT23-6                                        |
| 12     | PCB                   |     1 | MAX3020XINTERFACE | ANALOG DEVICES            | PCB            | PCB:MAX3020XINTERFACE                                                                                                        |
| TOTAL  |                       |    20 |                   |                           |                |                                                                                                                              |

│

Evaluates: MAX30208

## MAX30208 Evaluation System

## MAX30208EVSYS# EV System Schematic

Other documentation to use this EV System are available in the MAX30208EVSYS# EV System Design Resources tab.

## MAX30208 Sensor Flex Schematic

<!-- image -->

│

Evaluates: MAX30208

## MAX30208EVSYS# EV System Schematic (continued)

## MAX30208 Interface Board Schematic

<!-- image -->

│

Evaluates: MAX30208

## MAX30208EVSYS# EV System PCB Layout Diagrams

Other documentation to use this EV System are available in the MAX30208EVSYS# EV System Design Resources tab.

## MAX30208 Sensor Flex PCB Layout

<!-- image -->

MAX30208 EV Kit Sensor Flex PCB Layout-Silk Top

<!-- image -->

MAX30208 EV Kit Sensor Flex PCB Layout-Top View

<!-- image -->

MAX30208 EV Kit Sensor Flex PCB Layout-Bottom View

<!-- image -->

MAX30208 EV Kit Sensor Flex PCB Layout-Bottom Silkscreen

Evaluates: MAX30208

## MAX30208 Evaluation System

## MAX30208EVSYS# EV System PCB Layout Diagrams (continued)

## MAX30208 Interface Board PCB Layout

MAX30208 EV Kit Interface Board PCB Layout-Silk Top

<!-- image -->

MAX30208 EV Kit Interface Board PCB Layout-Top View

<!-- image -->

│

## MAX30208EVSYS# EV System PCB Layout Diagrams (continued)

## MAX30208 Interface Board PCB Layout (continued)

<!-- image -->

MAX30208 EV Kit Interface Board PCB Layout-Bottom View

<!-- image -->

MAX30208 EV Kit Interface Board PCB Layout-Bottom Silkscreen

│

## MAX30208 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                       | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 6/19            | Initial release                                                                                   | -               |
|                 1 | 6/24            | Added Notes under Quick Start section and updated web hyperlink, replaced MAXIM to Analog Devices | 1, 2, 6, 7      |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX30208