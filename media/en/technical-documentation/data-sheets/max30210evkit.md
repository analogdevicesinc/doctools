<!-- lastmod 2024-07-15 -->
<!-- image -->

Evaluates: MAX30210

## General Description

The MAX30210 evaluation kit (EV kit) provides a single platform  to  evaluate  the  MAX30210,  a  ±0.1°C  accurate temperature  sensor.  The  EV  kit  consists  of  two  boards which are connected through headers, a MAX32630FTHR microcontroller  board,  and  the  MAX30210  interface board. It also included with the EV kit is a flex PCB which holds the MAX30210 IC. The MAX32630FTHR contains the firmware necessary to use the PC GUI program and provides  power  to  the  MAX30210  interface  board.  The MAX30210  interface  board  ships  with  jumpers  preinstalled to allow quick evaluation of the MAX30210.

## Features

- Flexible PCB Design
- Low Thermal Mass for Fast Response Time
- Sense Temperature away from Extra Circuitry
- Easy to Reach Test Points
- Fully Assembled and Tested
- Windows ®  7, 8, and 10-Compatible Software

## MAX30210 EV Kit Files

| FILE                  | DESCRIPTION    |
|-----------------------|----------------|
| MAX30210EVKitTool.exe | PC GUI Program |

## MAX30210 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## MAX30210 Evaluation Kit

## Quick Start

## Required Equipment

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

- MAX30210\_INTERFACE\_EVKIT\_A
- MAX30210\_SENSOR\_FLEX\_EVKIT\_A
- MAX32630FTHR
- Micro-USB cable
- Windows PC with USB port

Note: MAX30210\_INTERFACE\_EVKIT\_A and MAX30210\_SENSOR\_FLEX\_EVKIT\_A  design  files  are attached at the end of this document.

## Procedure

The EV kit is tested and shipped in three pieces. Follow the steps below to verify board operation:

- 1) Plug the MAX32630FTHR into the MAX30210\_ INTERFACE\_EVKIT\_A.
- 2) Connect the MAX30210\_SENSOR\_FLEX\_EVKIT\_A to J9 on the interface board, ensuring the contact pads are on the bottom.

Ordering Information appears at end of data sheet.

- 3) Set the EV kit hardware on a non-conductive surface to ensure nothing on the PCBs short together.
- 4) Connect the EV kit hardware to a PC with the provided USB cable. Attach the micro-USB end to the MAX32630FTHR and the other end to the PC. LED D1 on the MAX32630FTHR begins blinking blue.
- 5) Microsoft Windows automatically begins installing the necessary device driver. Once the driver installation is complete, a Windows message appears near the system icon menu, indicating the hardware is ready to use. Do not attempt to run the GUI prior to this message. To do so, close the application and restart it once the driver installation is complete. On some versions of Windows, administrator privileges are required to install the USB device.
- 6) Once the device drivers are installed, download the EV kit software from www.analog.com/evkitsoftware (MAX30210EVKitSoftwareInstall.ZIP) and extract it to a temporary folder.
- 7) Open the extracted ZIP folder and double-click the .EXE file to run the installer. If a message box stating 'The publisher could not be verified. Are you sure you want to run this software?' appears, select Yes .
- 8) When the installer GUI appears, click Next . Select the installation paths and if a shortcut should be created on the desktop. When prompted, press Install . Once complete, click Close .
- 9) If a shortcut is created, double-click on the created shortcut to start the GUI. Alternatively, go to Start | All Programs . Find the MAX30210EVKitTool folder and click on the MAX30210EVKitTool.EXE file inside the folder.
- 10) When the GUI appears, the text in the right field of the bottom status bar displays Connected . If the GUI displays Not Connected , ensure the flex PCB is properly connected and power-cycle the MAX30210 EV kit.

Figure 1. ToolStrip Menu Bar

<!-- image -->

## Detailed Description of Software

## Software Startup

If  the  EV kit is connected when the software is opened, the software first initializes the hardware to communicate. The software then reads the device registers and updates all the associated control fields displayed on the GUI.

If the EV kit is not connected on start-up, the GUI  starts and  displays  no  devices  in  the Devices section  of  the GUI and no temperature reading in the Selected Device section. The status bar at the bottom of the GUI states Not Connected .

Once an EV kit is connected, the GUI automatically sets the device registers and begins taking temperature measurements.

## ToolStrip Menu Bar

The ToolStrip menu bar (Figure 1) is located at the top of the GUI window. This bar comprises the File , Device , Logging ,  and Help menus,  the  functions  of  which  are detailed in the following sections.

## File Menu

The File menu contains the option to exit the GUI program.

## Device Menu

The Device menu  connects  or  disconnects  an  EV  kit to  the  GUI.  If  a  board  is  disconnected  while  the  GUI  is open, the GUI displays Hardware Not Connected in the lower right corner. If the device is then plugged back in, navigate to the Device menu and select Connect . If successful, the bottom right corner of the GUI reads Device Connected .

## MAX30210 Evaluation Kit

## Logging Menu

The Logging menu provides a way to export each data sample that  is  being  measured  by  the  device.  The  first logging option is File Logging . Selecting either log option opens a prompt asking to select a device to log data from. Next a prompt appears to allow to choose a name for the comma-separated  value  (CSV)  log  file,  as  well  as  the location to save the generated file. Figure 2 and Figure 3 show the GUI when creating a log file. The GUI disables file  logging  after  one  monitoring  session  and  a  new  file must  be  generated  through  the Logging menu  to  log another dataset.

The second logging option is MicroSD Logging . MicroSD logging  operates  the  EV  kit  without  a  connection  to  a host  PC  or  power  supply.  First,  insert  a  microSD  card into  the  connector  on  the  underside  of  the  MAX32630.

## Evaluates: MAX30210

After selecting the logging interval and writing the selection to the microSD card as shown in Figure 4, connect a 3.7V lithium-ion battery with a JST PH connector to the MAX32630FTHR  and  then  disconnect  the  board  from the host PC. Refer to the MAX32630FTHR documentation  for  details  on  connecting  a  Li+  battery.  Press SW2 to  start  saving  measurements  to  the  SD  card.  Pressing SW2 again stops measurements. To transfer the logged data from the MicroSD card to a file on a PC, reconnect the MAX30210 EV Kit to the PC and select microSD card logging from the Logging menu. Select the 'Save to File' option  and  a  prompt  appears  to  name  the  log  file,  see Figure 3. For subsequent logging sessions, press 'Clear Log'  on  the  'Setup  MicroSD  Logging'  screen  to  prevent multiple data sets being recorded to the same log file.

Figure 2: Device Select Screen for Logging

<!-- image -->

Evaluates: MAX30210

Figure 3: File Naming Screen for Logging

<!-- image -->

Evaluates: MAX30210

Figure 4: MicroSD Logging Prompt

<!-- image -->

## MAX30210 Evaluation Kit

## Help Menu

The Help menu contains information to aid with any problems in the use of the GUI. The About option displays the GUI splash screen indicating the GUI version being used.

## Tab Control

The main interface structure of the GUI consists of a tab control,  where  each  tab  controls  various  blocks  of  the device. A Change in these interactive controls triggers a write operation to the MAX30210 to update the contents

Evaluates: MAX30210

of the registers. These controls are refreshed when reading  from  the  device.  The Register  Map tab  allows  the user to read and write to individual registers.

## General Tab

The General tab (Figure 5) displays a general overview of the MAX30210. The tab provides a list of devices connected, temperature data for a selected device, as well as controls for select registers.

Figure 5: General Tab

<!-- image -->

│

## MAX30210 Evaluation Kit

## Plots Tab

The Plots tab (Figure 6) provides a visual output of the MAX30210 temperature readings. From this tab, it is possible  to  select  a  duration,  plot  the  data  for  the  selected device, and save the plotted data to a log file. Plot duration

Evaluates: MAX30210

can be selected in the Plot Time and plotting begins when the Start button is clicked. Plotted data can be saved to a CSV file by selecting Save Plot Data once the plot time duration has surpassed and plotting has stopped.

Figure 6: Plots Tab

<!-- image -->

│

## MAX30210 Evaluation Kit

## Register Map Tab

The Register  Map tab  (Figure  7)  provides  more  direct access to the internal registers of the MAX30210. From this tab, read the contents of individual registers and manually enter the desired bit settings using a write operation. For the register address selected in the table on the left, the bit values are displayed at the bottom of the tab and visualized as bold or non-bold bit names. When a bit is

Evaluates: MAX30210

bold, its value is 1. Otherwise, the bit is 0. Full descriptions of each bit are available in the table on the right for quick reference. Pressing Read reads the selected register highlighted in teal. Pressing Read All reads all registers and updates their values in the Register tab. To write to a register, set the desired bit values by clicking on the bit names to make bold or non-bold and then press Write .

Figure 7: Register Map Tab

<!-- image -->

│

## Detailed Description of Hardware

The MAX30210 EV kit provides a single platform to evaluate the functionality and features of the MAX30210. A list of all jumpers and their respective functions is available in Table 1.

## Table 1. Description of Jumpers

| JUMPER   | DESCRIPTION                         |
|----------|-------------------------------------|
| J3       | Connect SCL to 4.7kΩ pullup to VDD  |
| J4       | Connect SDAto 4.7kΩ pullup to VDD   |
| J5       | Connect INTB to 4.7kΩ pullup to VDD |
| J6       | Connect VDD to MAX32630FTHR 1.8V    |

## Component Suppliers

| SUPPLIER       | WEBSITE                      |
|----------------|------------------------------|
| Analog Devices | www.analog.com               |
| Keystone       | www.keyelco.com              |
| Molex          | www.molex.com                |
| Murata         | www.murata.com               |
| Panasonic      | www.industrial.panasonic.com |
| Sullins        | www.sullinscorp.com          |

Note: Indicates using the MAX30210 when contacting these component suppliers.

The  EV  kit  utilizes  the  MAX32630FTHR  Cortex-M4F Microcontroller  for  wearables  to  interface  with  the  GUI and  optionally  provide  power  to  the  MAX30210.  The MAX32630FTHR  operates  either  from  a  host  PC  or directly from a Li+ battery. If an SD card is present in the MAX32630FTHR, pressing SW2 on the MAX32630FTHR initiates measurements and saves log files to the SD card. Logging is stopped by pressing SW2 a second time.

## Powering the EV Kit

The  MAX30210  EV  kit  is  powered  directly  from  the MAX32630FTHR through either a lithium-ion battery or a USB to Micro-USB cable. J5 must be connected to the 1.8V option in order to supply power from the MAX32630FTHR. J7 and J8 must each have a shunt connected to connect the serial data (SDA) and serial clock (SCL) lines from the MAX32630FTHR to the MAX30210 IC.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX30210EVKIT# | EV Kit |

#Denotes RoHS compliance.

## MAX30210 EV Kit Bill of Materials

## MAX30210 EV Kit Sensor Flex Bill of Materials

| ITEM   | REF_DES   | DNI/DNP   |   QTY | MFG PART #         | MANUFACTURER   | VALUE           | DESCRIPTION                                                                             |
|--------|-----------|-----------|-------|--------------------|----------------|-----------------|-----------------------------------------------------------------------------------------|
| 1      | C1        | -         |     1 | GRM033C81E104KE14  | MURATA         | 0.1UF           | CAP; SMT (0201); 0.1UF; 10%; 25V; X6S; CERAMIC                                          |
| 2      | U1        | -         |     1 | MAX30210           | ANALOG DEVICES | MAX30210        | EVKIT PART - IC; MAX30210; WLP9; PACKAGE OUTLINE DRAWING:21-0486; PACKAGE CODE: W91D1+1 |
| 3      | PCB       | -         |     1 | MAX30210SENSORFLEX | ANALOG DEVICES | PCB             | PCB:MAX30210SENSORFLEX                                                                  |
| 4      | J1        | DNP       |     0 | 5051100692_EDGE    | MOLEX          | 5051100692_EDGE | CONNECTOR; FEMALE; SMT; FD19 SERIES; RIGHT ANGLE; 6PINS;                                |
| TOTAL  | TOTAL     | TOTAL     |     3 |                    |                |                 |                                                                                         |

## MAX30210 EV Kit Interface Board Bill of Materials

| ITEM   | REF_DES                          |   QTY | MFG PART #        | MANUFACTURER              | VALUE          | DESCRIPTION                                                                                                            |
|--------|----------------------------------|-------|-------------------|---------------------------|----------------|------------------------------------------------------------------------------------------------------------------------|
| 1      | CVT/PDB, GND, INT, SCL, SDA, VDD |     6 | 5006              | KEYSTONE                  | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 2      | J1                               |     1 | PPPC161LFBN-RC    | SULLINS ELECTRONICS CORP. | PPPC161LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; LFB SERIES; 2.54MM CONTACT CENTER; STRAIGHT; 16PINS                                   |
| 3      | J2                               |     1 | PPPC121LFBN-RC    | SULLINS ELECTRONICS CORP  | PPPC121LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; HEADER FEMALE; STRAIGHT; 12PINS                                                       |
| 4      | J3-J6                            |     4 | GRPB021VWVN-RC    | SULLINS ELECTRONICS CORP. | GRPB021VWVN-RC | CONNECTOR; MALE; THROUGH HOLE; 0.050 SINGLE ROWMALE HEADER CONNECTOR; STRAIGHT; 2PINS; -40 DEGC TO +105 DEGC           |
| 5      | J9                               |     1 | 5051100692        | MOLEX                     | 5051100692     | CONNECTOR; FEMALE; SMT; FD19 SERIES; RIGHT ANGLE; 6PINS                                                                |
| 6      | R1-R3                            |     3 | ERJ-2RKF4701      | PANASONIC                 | 4.7K           | RES; SMT (0402); 4.7K; 1%; +/-100PPM/DEGC; 0.1000W                                                                     |
| 7      | PCB                              |     1 | MAX30210INTERFACE | ANALOG DEVICES            | PCB            | PCB:MAX30210INTERFACE                                                                                                  |
| TOTAL  |                                  |    17 |                   |                           |                |                                                                                                                        |

Evaluates: MAX30210

## MAX30210 Evaluation Kit

## MAX30210 EV Kit Schematic

## MAX30210 EV Kit Sensor Flex Schematic

<!-- image -->

│

## MAX30210 EV Kit Schematic (continued)

## MAX30210 EV Kit Interface Board Schematic

<!-- image -->

│

## MAX30210 EV Kit PCB Layout Diagrams

## MAX30210 EV Kit Sensor Flex PCB Layout

<!-- image -->

MAX30210 EV Kit Sensor Flex PCB Layout-Silk Top

MAX30210 EV Kit Sensor Flex PCB Layout-Top View

<!-- image -->

MAX30210 EV Kit Sensor Flex PCB Layout-Bottom View

<!-- image -->

## MAX30210 EV Kit PCB Layout Diagrams (continued)

## MAX30210 EV Kit Interface Board PCB Layout

MAX30210 EV Kit Interface Board PCB Layout-Silk Top

<!-- image -->

MAX30210 EV Kit Interface Board PCB Layout-Top View

<!-- image -->

│

## MAX30210 EV Kit PCB Layout Diagrams (continued)

## MAX30210 EV Kit Interface Board PCB Layout

MAX30210 EV Kit Interface Board PCB Layout-Bottom View

<!-- image -->

MAX30210 EV Kit Interface Board PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX30210 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                         | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 11/22           | Initial release                                                                                                                                                     | -               |
|                 1 | 4/24            | Added a note at the end of Required Equipment. Replaced the Maxim link with the latest Analog product page link. Replaced 'Maxim' with 'Analog devices' in the BOM. | 1, 2, 10        |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX30210