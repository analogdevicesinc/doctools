<!-- lastmod 2022-08-04 -->
<!-- image -->

DEVICES

Evaluates: MAX40080

## General Description

The MAX40080 evaluation system (EV system) provides a single platform to evaluate the MAX40080 precision digital current-sense amplifier. The EV system consists of two boards  connected  through  headers,  a  MAX32666FTHR microcontroller board, and the MAX40080 EV kit board. The  MAX32666FTHR  contains  the  firmware  necessary to  use  the  PC  GUI  program  and  provides  power  to  the MAX40080 EV kit  board.  The  MAX40080  EV  kit  board ships with jumpers preinstalled for quick evaluation of the MAX40080.

## Benefits and Features

- Easy-to-Reach Test Points
- Fully Assembled and Tested
- Windows 7, 8, and 10-Compatible Software

The  GUI  and  other  documentation  to  use  this  EV  system are available in the MAX40080EVSYS# EV system Design Resources tab.

Ordering Information appears at end of data sheet.

Windows is a registered trademark of Microsoft Corporation.

Click here to ask an associate for production status of specific part numbers.

## MAX40080 Evaluation Kit

## Quick Start

## Required Equipment

Note: In the following sections, software-relates items are identified by bold text. Text in bold refers to items directly from  the  install  of  the  EV  system  software.  Bold  and underlined text refers to items from the Windows operat -ing system.

- MAX40080 EV Kit Board
- 0-36V, 3A DC Power Supply for VCM Input
- MAX32666FTHR
- Micro-USB Cable
- Windows PC with USB Port

## Procedure

The  EV  system  is  tested  and  ships  in  two  pieces: MAX40080 EV kit board and MAX32666FTHR. The EV kit  is  fully  assembled  and  tested.  Follow  these  steps  to verify the board:

CAUTION: Do not turn on the power supply or the elec -tronic load until all the connections are complete.

- 1) Plug the MAX32666FTHR into the MAX40080 EV kit board.
- 2) Set the EV system hardware on a non-conductive surface to ensure nothing on the PCB gets shorted to the workspace.
- 3) Set the Jumper on MAX40080EVKIT (Table 1).
- 4) Connect the positive terminal of the +0 to +36V DC power supply to the RS+ input and the negative ter -minal to the GND. Set the voltage level to 12V.
- 5) Set the electronic load to sink 300mA.
- 6) Connect the positive terminal of the electronic load to the RS- input and the negative terminal of the electronic load to the nearest GND input on board.
- 7) Prior to starting the GUI, connect the EV kit hardware to a PC using the supplied micro-USB cable.

## MAX40080 Evaluation Kit

- 8) Windows automatically begins installing the neces -sary device driver. Once the driver installation is complete, a Windows message appears near the system icon menu, indicating the hardware is ready to use. Do not attempt to tune the GUI prior to this message. To do so, close the application and restart it once the driver installation is complete. On some versions of Windows, administrator privileges are required to install the USB device.
- 9) Once the device drivers are installed, download the software from the MAX40080EVSYS# EV system Design Resources tab and extract it to a temporary folder.
- 10) Open the extracted zip folder and double-click the.exe file to run the installer. If a message box stating ' The publisher could not be verified. Are you sure you want to run this software? ' appears, select YES .
- 11) When the installer GUI appears, click NEXT . Select the installation paths and to create a shortcut on the desktop, when prompted, press Install . Once com -plete, click Close .
- 12) If a shortcut is created, double-click the shortcut to start the GUI. Alternatively, go to Start/All programs. Look for the MAX40080EVKIT Tool folder and click the MAX40080EVKITtool.exe file in the folder.
- 13) When the GUI appears, select the resistor value under the address setting to R0(100KΩ) and con -figure I2C address A6, A5. Click Scan Devices . The status log shows ' Found number of devices currently connected to COM port '. Select the COM port with the MAX40080 EVKIT connected from the select COM port menu and click Connect . Status log shows ' Connected to device COMX '.
- 14) Under Configuration Register , with the selection mode to active, select ' Input Range to 50mV '.
- 15) Under the FIFO configuration, select current and voltage.
- 16) Enter the value of R SENSE to 50m.

Figure 1. ToolStrip Menu Bar

<!-- image -->

## Evaluates: MAX40080

- 17) Turn on the +0 to +36V DC power supply. Then turn on the electronic load.
- 18) Enable the electronic load.
- 19) Click Read under FIFO read. Verify the current reading is around 300mA and voltage reading is around 12V.
- 20) After the functions are verified, turn off the electronic load and power supply.

## Detailed Description of Software

## Software Startup

If the EV system is connected while the software is open, the software first initializes the hardware to communicate. The software then reads the device registers and updates all the associated control fields displayed on the GUI.

If  the  EV  system  is  not  connected  on  start-up,  the  GUI starts up with no devices displayed in the Devices section of the GUI. The status bar at the bottom of the GUI states Not Connected .

## ToolStrip Menu Bar

The ToolStrip menu bar ( Figure 1 )  is  located at the top of the GUI window. This bar comprises the File , Options , and Help menus, the functions of which are detailed in the following sections.

## File Menu

The File menu contains the option to exit the GUI program.

## Options Menu

The Options menu  provides  clear  current  samples  and option to export each data samples being measured by the device. After selecting the data to export, a prompt appears to choose a name for the comma-separated value (CSV) log file, as well as the location to save the generated file.

## Help Menu

The About option displays the GUI splash screen, which names the GUI version being used.

## MAX40080 Evaluation Kit

## Tab Control

The  main  interface  structure  of  the  GUI  consists  of  an Application tab,  where  each  tab  contains  controls  rel -evant  to  various  blocks  of  the  device.  Changing  these interactive controls triggers a write operation to

the MAX40080 to update the register contents. Likewise, these  controls  are  refreshed  when  reading  from  the device. The Register Map tab allows to read and write to individual registers.

## Application Tab

The Application tab (Figure 2) displays a general overview  of  the  MAX40080.  The  tab  provides  a  list  of  the devices  currently  connected,  register  setting,  and  cur-

## Evaluates: MAX40080

rent/voltage measurement for a selected device, as well as  controls  for  select  registers.  Note  that  in  the  active mode, when selecting current and voltage measurement, ADC sampling rate is available at 0.5Ksps only. All other sampling rates are available when selecting the current/ voltage measurement.

## Register Map

The Register  Map tab  (Figure  3)  provides  more  direct access to the internal registers of the MAX40080. From this  tab,  it  is  possible  to  read  the  contents  of  individual registers and to manually enter the desired bit settings for a write operation. Full descriptions of each bit are avail -able in the table on the right for quick reference.

Figure 2. Application Tab

<!-- image -->

│

## Evaluates: MAX40080

Figure 3. Register Map

<!-- image -->

## Detailed Description of Hardware

The  EV  system  utilizes  the  MAX32666FTHR  Arm® Cortex®-M4 microcontroller with  the  GUI  and  optionally provides power to the MAX40080EVKIT.

The  MAX40080  EV  system  provides  a  proven  design to  evaluate  the  MAX40080  precision  digital  currentsense  amplifier.  The  device  features  an  ultralow  16uV input  offset  voltage  and  very  low  0.05%  gain  error. The MAX40080  includes  an  analog-to-digital  converter  with programmable sample rate and features a I2C-compliant and SMBus-compatible interface.

## Powering the EV System

The  MAX40080  EV  system  is  powered  directly  from the  MAX32666FTHR through USB to Micro-USB cable. JP5  must  be  connected  to  supply  power  from  the MAX32666FTHR.  JP10  and  JP11  must  each  have  a shunt  connected  to  connect  the  serial  data  (SDA)  and serial clock (SCL) lines from the MAX32666FTHR to the MAX40080 IC.

Arm and Cortex are registered trademarks of Arm Limited.

## Bidirectional Operation

The  MAX40080  EV  system  evaluates  the  MAX40080 bidirectional  current-sense  amplifier  with  digital  output. The current across the sense resistor can be measured in  both  directions  in  reference  to  RS+  and  RS-.  Sense current  in  the  digital  code  can  be  read  through  the  I2C interface.  Depending  on  the  input  current-sense  range selection, the voltage across the sense resistor can be in the range of 10mV or 50mV in both directions.

## Alert Pin

The MAX40080 features an open-drain Alert output when any  of  the  following  situations  occur:  overcurrent,  over -voltage, undervoltage, FIFO overflow warning, FIFO full, conversion  ready,  wake-up  current  threshold  reached, and  one-minute  timeout  on  I2C  bus  expired.  The  Alert interrupt  output  is  pulled  low  if  the  related  interrupt  is enabled and occurs. The Alert output can be deasserted by clicking Clear on the Application tab.

│

## Table 1. Jumper Functions

| JUMPER LABEL   | DEFAULT POSITION   | FUNCTION                                                                                                 |
|----------------|--------------------|----------------------------------------------------------------------------------------------------------|
| JP4 (A0)       | 1 to 2             | I2C address input, connect to 100KΩ external resistor, set last. four digits of slave address to 0b0001. |
| J5             | 1 to 2             | Connect 1.8V LDO output to the MAX40080 power supply.                                                    |
| JP8 (ALERT)    | 1 to 2             | Enable ALERT pin pullup resistor.                                                                        |
| JP10 (SDA)     | 1 to 2             | Enable SDA pin pullup resistor                                                                           |
| JP11 (SCL)     | 1 to 2             | Enable SCL pin pullup resistor.                                                                          |
| JP12           | 1 to 2             | Connect input voltage sense to current sense.                                                            |

## Ordering Information

| PART            | TYPE                              |
|-----------------|-----------------------------------|
| MAX40080EVSYS#  | EV System (EV Kit + Master Board) |
| MAX40080EVKIT#  | EV Kit                            |
| MAX32666FT H R# | Master Board                      |

Evaluates: MAX40080

│

## MAX40080 EV Kit Bill of Materials

| NOTE: DNI (DO NOT INSTALL) (PACKOUT); DNP (DO NOT PROCURE)   | NOTE: DNI (DO NOT INSTALL) (PACKOUT); DNP (DO NOT PROCURE)   | NOTE: DNI (DO NOT INSTALL) (PACKOUT); DNP (DO NOT PROCURE)   | NOTE: DNI (DO NOT INSTALL) (PACKOUT); DNP (DO NOT PROCURE)                                        | NOTE: DNI (DO NOT INSTALL) (PACKOUT); DNP (DO NOT PROCURE)   | NOTE: DNI (DO NOT INSTALL) (PACKOUT); DNP (DO NOT PROCURE)   | NOTE: DNI (DO NOT INSTALL) (PACKOUT); DNP (DO NOT PROCURE)                                                                      |
|--------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| ITEM                                                         | REF_DES                                                      |                                                              | QTY                                                                                               | MFG PART # MANUFACTURER                                      | VALUE                                                        | DESCRIPTION                                                                                                                     |
| 1                                                            | A0, ALERT_B, FLT+, FLT-, SCL, SDA                            | 6                                                            | 5002                                                                                              | KEYSTONE                                                     | N/A                                                          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                           |
| 2                                                            | C3                                                           | 1                                                            | 885012206071;C1608X7R1E104K080AA; C0603C104K3RAC;GRM188R71E104KA01; C1608X7R1E104K;06033C104KAT2A | WURTH ELECTRONICS INC; TDK; KEMET; MURATA; TDK; AVX          | 0.1UF                                                        | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                  |
| 3                                                            | C4                                                           | 1                                                            | GRM188Z71C475KE21                                                                                 | MURATA                                                       | 4.7UF                                                        | CAP; SMT (0603); 4.7UF; 10%; 16V; X7R; CERAMIC                                                                                  |
| 4                                                            | C9                                                           | 1                                                            | EMK212BJ106KG                                                                                     | TAIYO YUDEN                                                  | 10UF                                                         | CAP; SMT (0805); 10UF; 10%; 16V; X5R; CERAMIC                                                                                   |
| 5                                                            | C10                                                          | 1                                                            | CC0603KRX7R0BB104;GRM188R72A104KA35; HMK107B7104KA;06031C104KAT2A; GRM188R72A104K                 | YAGEO; MURATA; TAIYO YUDEN; AVX; MURATA                      | 0.1UF                                                        | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                                 |
| 6                                                            | C12                                                          | 1                                                            | NMC0402X7R103K16TRP; GRM155R71C103KA01; CC0402KRX7R7BB103                                         | NIC COMPONENTS CORP.; MURATA; YAGEO                          | 0.01UF                                                       | CAP; SMT (0402); 0.01UF; 10%; 16V; X7R; CERAMIC                                                                                 |
| 7                                                            | C18                                                          | 1                                                            | C1608C0G1E472J080AA                                                                               | TDK                                                          | 4700PF                                                       | CAP; SMT (0603); 4700PF; 5%; 25V; C0G; CERAMIC                                                                                  |
| 8                                                            | J4, RS-, TP8, TP9, VRS-                                      | 5                                                            | 5011                                                                                              | KEYSTONE                                                     | N/A                                                          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH          |
| 9                                                            | J5, JP4, JP8, JP10-JP12                                      | 6                                                            | PEC02SAAN                                                                                         | SULLINS                                                      | PEC02SAAN                                                    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2 PINS                                                                      |
| 10                                                           | J7                                                           | 1                                                            | SSW-116-01-T-S                                                                                    | SAMTEC                                                       | SSW-116-01-T-S                                               | CONNECTOR; MALE; THROUGH HOLE; SQ POST SOCKET; 16 PINS                                                                          |
| 11                                                           | J9                                                           | 1                                                            | SSW-112-01-G-S                                                                                    | SAMTEC                                                       | SSW-112-01-G-S                                               | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 12 PINS                                                     |
| 12                                                           | R1                                                           | 1                                                            | LVK12R050DE                                                                                       | OHMITE MFG CO.                                               | 0.05                                                         | RESISTOR; 1206; 0.05 OHM; 0.5%; 50PPM; 0.5W; METAL FILM                                                                         |
| 13                                                           | R2                                                           | 1                                                            | ERJ-3GEYJ104;CRCW0603100KJN                                                                       | PANASONIC; VISHAY                                            | 100K                                                         | RES; SMT (0603); 100K; 5%; +/- 200PPM/DEGC; 0.1000W                                                                             |
| 14                                                           | R3-R5                                                        | 3                                                            | ERJ-3GEYJ472                                                                                      | PANASONIC                                                    | 4.7K                                                         | RES; SMT (0603); 4.7K; 5%; +/- 200PPM/DEGC; 0.1000W                                                                             |
| 15                                                           | RS+, VDD, VRS+, VS                                           | 4                                                            | 5010                                                                                              | KEYSTONE                                                     | N/A                                                          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL                            |
| 16                                                           | U1                                                           | 1                                                            | OZ71_WLP                                                                                          | MAXIM INTEGRATED                                             | OZ71_WLP                                                     | EVKIT PART - IC; OZ71; AMP; DIGITAL CURRENT SENSE AMPLIFIER; PACKAGE CODE: N121D1+1S; PACKAGE OUTLINE DRAWING: 21-100492; WLP12 |
| 17                                                           | U2                                                           | 1                                                            | MAX8510EXK18+                                                                                     | MAXIM INTEGRATED                                             | MAX8510EXK18+                                                | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW-DROPOUT; 0.12A LINEAR REGULATOR; SC70-5                                               |
| 18                                                           | PCB                                                          | 1                                                            | MAX                                                                                               | MAXIM INTEGRATED                                             | PCB                                                          | PCB:MAX                                                                                                                         |
| 19                                                           | R6, R7                                                       | DNP 0                                                        | N/A                                                                                               | N/A                                                          | SHORT                                                        | PACKAGE OUTLINE 0603 RESISTOR                                                                                                   |
| 20                                                           | C1, C5, C8, C11, C13, C14                                    | DNP                                                          | 0 N/A                                                                                             | N/A                                                          | OPEN                                                         | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                        |
| TOTAL                                                        |                                                              | 37                                                           |                                                                                                   |                                                              |                                                              |                                                                                                                                 |

Evaluates: MAX40080

## MAX40080 Evaluation Kit

## MAX40080 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX40080

## MAX40080 Evaluation Kit

## MAX40080 EV Kit PCB Layout

MAX40080 EV Kit-Silk Top

<!-- image -->

MAX40080 EV Kit-Bottom

<!-- image -->

Evaluates: MAX40080

MAX40080 EV Kit-Top

<!-- image -->

MAX40080 EV Kit-Silk Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/21            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX40080