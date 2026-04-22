<!-- lastmod 2024-06-28 -->
<!-- image -->

Evaluates: MAX30207

## General Description

The MAX30207 evaluation (EV) system provides a single platform to evaluate the MAX30207, a +/-0.1°C accurate temperature  sensor.  The  EV  system  consists  of  two boards  connected  through  headers,  a  MAX32630FTHR microcontroller board, and the MAX30207\_INTERFACE\_ EVKIT board. The EV system also includes a MAX30207\_ SENSOR\_FLEX\_EVKIT  flex  module  that  holds  the MAX30207 IC. The  MAX32630FTHR contains  the  firm -ware necessary to use the PC GUI program and provides power to the MAX30207 interface board. The MAX30207 interface  board  ships  with  jumpers  preinstalled  to  allow quick evaluation of the MAX30207.

## Benefits and Features

- Flexible PCB Design
- Low Thermal Mass for Fast Response Time
- Sense Temperature away from Extra Circuitry
- Easy to Reach Test Points
- Fully Assembled and Tested
- Windows ®  10-Compatible Software

## MA30207 EV Kit Files

| FILE                  | DECRIPTION     |
|-----------------------|----------------|
| MAX30207EVKitTool.exe | PC GUI Program |

Ordering Information appears at end of data sheet.

## MAX30207 EV Kit Photo

<!-- image -->

## MAX30207 Evaluation Kit

## Quick Start

## Required Equipment

Note: In the following sections, software-related items are identified by bold text. Text in bold refers to items directly from the install of the EV kit software. Bold and underlined text refers to items from the Windows 1  operating system.

- MAX30207\_INTERFACE\_EVKIT REV-A
- MAX30207\_SENSOR\_FLEX\_EVKIT REV-A
- MAX32630FTHR
- Micro-USB cable
- Windows PC with USB port
- MicroSD card (optional)
- Lithium-ion battery (optional)

Note: MAX30207\_INTERFACE\_EVKIT REV-A and MAX30207\_SENSOR\_FLEX\_EVKIT  REV-A  design  files are attached at the end of this document.

## Procedure

The EV kit is tested and shipped in three pieces. Follow these steps to assemble and verify board operation:

- 1) Plug the MAX32630FTHR into the MAX30207\_IN-TERFACE\_EVKIT\_A.
- 2) Connect the MAX30207\_SENSOR\_FLEX\_EVKIT\_A to J11 on the interface board, ensuring the contact pads are on the bottom.
- 3) Set the EV kit hardware on a non-conductive surface to ensure nothing on the PCBs short together.

## MAX30207 Evaluation Kit

- 4) Connect the EV kit hardware to a PC with the provided USB cable. Attach the micro-USB end to the MAX32630FTHR. The other end to the PC. LED D1 on the MAX32630FTHR begins blinking blue.
- 5) Microsoft Windows automatically begins installing the necessary device driver. Once the driver installation is complete, a Windows message appears near the system icon menu, indicating the hardware is ready to use. Do not attempt to run the GUI prior to this message. To do so, close the application and restart it once the driver installation is complete. On some versions of Windows, administrator privileges are required to install the USB device.
- 6) Once the device drivers are installed, download the EV kit software from www.analog.com/evkitsoftware (MAX30207EVKitSoftwareInstall.ZIP) and extract it to a temporary folder.
- 7) Open the extracted ZIP folder and double-click the .EXE file to run the installer. If a message box stating 'The publisher could not be verified. Are you sure you want to run this software?' appears, select Yes .
- 8) When the installer GUI appears, click Next . Select the installation paths and if a shortcut should be created on the desktop. When prompted, press Install . Once complete, click Close .
- 9) If a shortcut is created, double-click on the created shortcut to start the GUI. Alternatively, go to Start | All Programs. Find the MAX30207EVKitTool folder and click on the MAX30207EVKitTool.EXE file inside the folder.
- 10) When the GUI appears, the text in the right field of the bottom status bar displays Connected . If the GUI displays Not Connected , ensure the flex PCB is properly connected and power-cycle the MAX30207 EV Kit.

## Detailed Description of Software

## Software Startup

If  the  EV  system  is  connected  when  the  software  is opened, the software first initializes the hardware to com -municate. The software then reads the device registers and updates all the associated control fields displayed on the GUI.

If  the  EV  system  is  not  connected  on  start-up,  the  GUI starts  and  displays  no  devices  in  the Devices section of the GUI and no temperature reading in the Selected Device section. The status bar at the bottom of the GUI states Not Connected .

Once an EV system is connected, the GUI automatically sets the device registers and begins taking temperature measurements.

## ToolStrip Menu Bar

The ToolStrip menu bar (Figure 1) is located at the top of the GUI window. This bar comprises the File , Device , Logging ,  and Help menus,  the  functions  of  which  are detailed in the following sections.

## File Menu

The File menu contains the option to exit  the  GUI  pro -gram.

## Device Menu

The Device menu connects or disconnects an EV system to  the  GUI.  If  a  board  is  disconnected  while  the  GUI  is open, the GUI displays Hardware Not Connected in the lower right corner. If the device is then plugged back in, navigate to the Device menu and select Connect . If successful, the bottom right corner of the GUI reads Device Connected .

Figure 1. ToolStrip Menu Bar

<!-- image -->

## MAX30207 Evaluation Kit

## Logging Menu

The only  logging  option  is MicroSD Logging .  MicroSD logging  operates  the  EV  kit  without  a  connection  to  a host  PC  or  power  supply.  First,  insert  a  microSD  card into the connector at the bottom of the MAX32630FTHR. For  logging  under  battery  powered,  after  selecting  the logging interval and writing the selection to the microSD card  (Figure  3),  connect  a  3.7V  lithium-ion  battery  with a  JST  PH  connector  to  the  MAX32630FTHR  and  then disconnect  the  board  from  the  host  PC.  Refer  to  the MAX32630FTHR documentation for details on connecting a Li+ battery. Press SW2 on the MAX32630FTHR board to  start  (LED  D1  blinking  red)  saving  measurements  to the SD card. Pressing SW2 again (LED D1 blinking blue)

Evaluates: MAX3027

stops measurements. To transfer the logged data from the MicroSD card to a file on a PC, reconnect the MAX30207 EV kit to the PC and select microSD card logging from the Logging menu. Select the 'Save to File' option and a prompt appears to name the log file (Figure 2). For subsequent logging sessions, press 'Clear Log' on the 'Setup MicroSD  Logging'  screen  to  prevent  multiple  data  sets being recorded to the same log file. Data logging can also be accomplished by using 'Save' in the 'Plot' tab.

## Help Menu

The Help menu contains information to aid with any problems in the use of the GUI. About displays the GUI splash screen indicating the GUI version being used.

Figure 2. File Naming Screen for Logging

<!-- image -->

Evaluates: MAX3027

Figure 3. MicroSD Logging Prompt

<!-- image -->

## MAX30207 Evaluation Kit

## Tab Control

The main interface  structure  of  the  GUI  consists  of  the General , Plot ,  and Register Map tabs, where each tab contains controls relevant to various blocks of the device.

## General Tab

The General Tab (Figure 4) displays a general overview of the MAX30207. The tab provides a list of devices connected, temperature data for a selected device, as well as controls for select registers.

## Plot Tab

The  Plot  tab  plots  the  measured  data  for  a  single MAX30207 temperature sensor (device), or a list of devic-

Evaluates: MAX3027

es  connected  by  selecting  the  device  using  the  check box in the plot column. Use 'Plot Duration' and 'Sample Temperature Every' to set the plot duration and sample rate,  then  click  'Start'  (Figure  5).  The  other  function  of the plot tab is to log the temperature data that provides a way to export each data sample being measured by the device. After the plot is started, click 'Save' to save the plotted data to a file. A prompt then appears to choose a name for the comma-separated value (CSV) log file, as well as the location to save the generated file. Figure 6 shows the log file format. Click 'Reset' to clean the buffer and prevent multiple data sets being recorded to the same log file.

Figure 4. General Tab

<!-- image -->

Evaluates: MAX3027

Figure 5. Plot Tab

<!-- image -->

Figure 6. Log File Format

<!-- image -->

## MAX30207 Evaluation Kit

## Register Map Tab

The  Registers  Map  tab  (Figure  7)  provides  more  direct access to the internal registers of the MAX30207. From this  tab,  read  the  contents  of  individual  registers  and manually  enter  the  desired  bit  settings  using  a  write operation. For the register address selected in the table, the bit values are displayed at the bottom of the tab and visualized as bold or non-bold bit names. When a bit is

Evaluates: MAX3027

bold, its value is 1. Otherwise, the bit is 0. Full descriptions of each bit are available in the table on the right for quick reference. Pressing Read reads the selected register.  Pressing Read All reads all registers and updates their values in the Registers tab. To write to a register, set the desired bit values by clicking on the bit names to make bold or non-bold, and then select Write .

Figure 7. Register Map Tab

<!-- image -->

## Detailed Description of Hardware

The MAX30207 EV kit provides a single platform to evaluate the functionality and features of the MAX30207. The board contains jumpers to test the MAX30207 under several conditions. A list of all jumpers and their respective functions is available in Table 1.

The  EV  system  utilizes  the  MAX32630FTHR  CortexM4F  Microcontroller  for  wearables  to  interface  with  the GUI  and  optionally  provide  power  to  the  MAX30207. The MAX32630FTHR operates either from a host PC or directly from a Li+ battery. If an SD card is present in the

## Table 1. Description of Jumpers

| JUMPER       | DESCRIPTION                                                                                                                                                           |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J3-1 to J3-2 | Connect V CC to 1.8V of the MAX32630FTHR.                                                                                                                             |
| J5-1 to J5-2 | Connects GPIO0_INTB to 4.7kΩ pullup (optional).                                                                                                                       |
| J6-1 to J6-2 | Connect SCL to 4.7kΩ pullup.                                                                                                                                          |
| J7-1 to J7-2 | Connect SDA to 4.7kΩ pullup.                                                                                                                                          |
| J8-1 to J8-2 | Select the 1-Wire communication protocol by connecting 'DS2484'.                                                                                                      |
| J9           | Connects each signal from the interface board to the flex module connector and the J10 terminal block. Ground (pin 1 and 2) and DQ (pin 11 and 12) must be connected. |

## Component Suppliers

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

Note: Indicates using the MAX30207 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX30207EVSYS# | EV Kit |

Evaluates: MAX3027

MAX32630FTHR, pressing SW2 on the MAX32630FTHR initiates measurements and saves log files to the SD card. Logging is stopped by pressing SW2 a second time.

## Powering the EV Kit

The  MAX30207  EV  kit  is  powered  directly  from  the MAX32630FTHR through  either  a  lithium-ion  battery  or a USB to Micro-USB cable. J3 must be connected to the 1.8V option to supply power from the MAX32630FTHR. J9  and  J10  can  be  used  to  connect  the  interface board, through wires, to another board that contains the MAX30207 IC.

## MAX30207 Flex PCB Bill of Materials (BOM)

|   ITEM | REF_DES   | DNI/DNP   |   QTY | MFG PART #         | MANUFACTURER   | VALUE            | DESCRIPTION                                                                                             |
|--------|-----------|-----------|-------|--------------------|----------------|------------------|---------------------------------------------------------------------------------------------------------|
|      1 | C1        | -         |     1 | GRM033C81E104KE14  | MURATA         | 0.1UF            | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; TG=-55 DEGC TO +105 DEGC; TC=X6S              |
|      2 | U1        | -         |     1 | MAX30207           | ANALOG DEVICES | MAX30207         | EVKIT PART - IC; MAX30207; 1-WIRE DIGITAL TEMPERATURE SENSOR; PACKAGE OUTLINE DRAWING: 21-100265; LGA10 |
|      3 | PCB       | -         |     1 | MAX30207SENSORFLEX | ANALOG DEVICES | PCB              | PCB:MAX30207SENS ORFLEX                                                                                 |
|      4 | J1        | DNP       |     0 | 5051100692_EDGE    | MOLEX          | 5051100692 _EDGE | CONNECTOR; FEMALE; SMT; FD19 SERIES; RIGHT ANGLE; 6PINS                                                 |

Evaluates: MAX3027

## MAX30207 Interface Board Bill of Materials (BOM)

|   ITEM | REF_DES               | DNI/DNP   |   QTY | MFG PART #     | MANUFACTURER              | VALUE          | DESCRIPTION                                                                                                           |
|--------|-----------------------|-----------|-------|----------------|---------------------------|----------------|-----------------------------------------------------------------------------------------------------------------------|
|      1 | DQ, GND, GPIO0, GPIO1 | -         |     4 | 5006           | KEYSTONE                  | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH |
|      2 | J1                    | -         |     1 | PPPC161LFBN-RC | SULLINS ELECTRONICS CORP. | PPPC161LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; LFB SERIES; 2.54MM CONTACT CENTER; STRAIGHT; 16PINS                                  |
|      3 | J2                    | -         |     1 | PPPC121LFBN-RC | SULLINS ELECTRONICS CORP. | PPPC121LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; HEADER FEMALE; STRAIGHT; 12PINS                                                      |
|      4 | J3, J5-J7             | -         |     4 | TSW-103-07-L-S | SAMTEC                    | TSW-103-07-L-S | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS                                                                  |
|      5 | J4                    | -         |     1 | TSW-102-07-T-S | SAMTEC                    | TSW-102-07-T-S | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; - 55 DEGC TO +105 DEGC                              |
|      6 | J8                    | -         |     1 | TSW-102-07-L-D | SAMTEC                    | TSW-102-07-L-D | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; STRAIGHT; 4PINS                                                            |
|      7 | J9                    | -         |     1 | TSW-106-07-L-D | SAMTEC                    | TSW-106-07-L-D | CONNECTOR; MALE; THROUGH-HOLE .025 IN SQ POST HEADER; STRAIGHT; 12PINS                                                |
|      8 | J10                   | -         |     1 | 282834-6       | TE CONNECTIVITY           | 282834-6       | CONNECTOR; FEMALE; THROUGH HOLE; TERMINAL BLOCK PCB MOUNT SIDE WIRE ENTRY STACKING; STRAIGHT; 6PINS                   |
|      9 | J11                   | -         |     1 | 5051100692     | MOLEX                     | 5051100692     | CONNECTOR; FEMALE; SMT; FD19 SERIES; RIGHT ANGLE; 6PINS                                                               |
|     10 | R1-R3                 | -         |     3 | ERJ-2RKF4701   | PANASONIC                 | 4.7K           | RESISTOR; 0402; 4.7K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                               |

Evaluates: MAX3027

Evaluates: MAX3027

## MAX30207 Interface Board Bill of Materials (BOM) (continued)

|   ITEM | REF_DES    | DNI/DNP   |   QTY | MFG PART #        | MANUFACTURER   | VALUE    | DESCRIPTION                                                                                                         |
|--------|------------|-----------|-------|-------------------|----------------|----------|---------------------------------------------------------------------------------------------------------------------|
|     11 | U1         | -         |     1 | DS2484R+          | ANALOG DEVICES | DS2484R+ | IC; INFC; SINGLE- CHANNEL 1-WIRE MASTER WITH ADJUSTABLE TIMING AND SLEEP MODE; SOT23-6                              |
|     12 | V1P8, V3P3 | -         |     2 | 5005              | KEYSTONE       | N/A      | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH |
|     13 | PCB        |           |     1 | MAX30207INTERFACE | ANALOG DEVICES | PCB      | PCB:MAX30207INTER FACE                                                                                              |

## MAX30207 Evaluation Kit

## MAX30207 Flex Schematic

<!-- image -->

## MAX30207 Interface Schematic

<!-- image -->

Evaluates: MAX3027

## MAX30207 Evaluation Kit

## MAX30207 Flex PCB Layout

<!-- image -->

MAX30207EV Flex - Silk Top

MAX30207EV Flex - Top

<!-- image -->

MAX30207EV Flex - Bottom

<!-- image -->

Evaluates: MAX3027

## MAX30207 Evaluation Kit

## MAX30207 Interface PCB Layout

MAX30207EV Interface - Silk Top

<!-- image -->

MAX30207EV Interface - Top

<!-- image -->

Evaluates: MAX3027

MAX30207EV Interface - Bottom

<!-- image -->

MAX30207EV Interface - Silk Bottom

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                       | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/21            | Initial release                                                                                                   | -               |
|                 1 | 4/24            | Added notes under Quick Start section and updated web hyperlink, replaced references to Maxim with Analog Devices | 1, 2, 8-11      |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX3027