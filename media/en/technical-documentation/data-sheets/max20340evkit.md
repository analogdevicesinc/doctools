<!-- lastmod 2022-08-02 -->
## MAX20340 Evaluation Kit

## General Description

The MAX20340 evaluation kit (EV kit) is a fully assembled and tested PCB that evaluates the MAX20340 bidirectional powerline  communication  (PLC)  management  integrated circuit. The EV kit obtains power from an external power source or the MAX32625PICO microcontroller that contains the  firmware  necessary  to  use  the  EV  kit  GUI  program. Installed with two MAX20340s (one Master and one Slave), the EV kit features a master/slave mode PLC with flexible configurations. The EV kit ships with jumpers installed and supply voltages set to typical operating values.

## Features

- USB-Powered Operation
- Compact and Simple Solution for PLC
- Flexible Configuration
- On-Board Regulator and Battery-Charging Circuitry
- Windows ® 8/10-Compatible GUI Software
- Fully Assembled and Tested

## Evaluation Kit Contents

- MAX20340 EV Kit
- Two USB A to micro-USB Cables

## MAX20340 EV Kit Files

| FILE              | DECRIPTION     |
|-------------------|----------------|
| MAX20340EVKit.exe | PC GUI Program |

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX20340

## Quick Start

## Required Equipment

Note: In the following sections, software-related items are identified by bold text. Text in bold refers to items directly from the install of EV kit software. Text that is bold and underlined refers  to  items  from  the  Windows  operating system.

- MAX20340 EV kit
- Two USB A to micro-USB cables
- Windows PC with USB ports

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Use  the  following steps to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1) Visit https://www.maximintegrated.com to download the latest version of the EV kit software, MAX20340EVKitSetupVxxx.ZIP located on the MAX20340 EV kit web page. Download the EV kit software to a temporary folder and unzip the ZIP file.
- 2) Install the EV kit software on your computer by run -ning the MAX20340EVKitSetupVxxx.EXE program inside the temporary folder.
- 3) Verify that all jumpers are in their default positions, as shown in Table 1.
- 4) Connect the micro-USB end of a cable to USB1 port of the EV kit and the type-A end to the PC.

<!-- image -->

## MAX20340 Evaluation Kit

- 5) Connect the micro-USB end of a cable to the USB port of the MA32625PICO microcontroller and the type-A end to the PC.
- 6) The LED on the MA32625PICO microcontroller flashes blue.
- 7) The MAX20340 EV kit board must be installed with the latest firmware. Follow the Firmware Update procedure to install the latest firmware.
- 8) Start the MAX20340 EV kit GUI. The EV kit software main window appears, as shown in Figure 1.
- 9) If connection is successfully established, the status bar the bottom displays Connected .
- 10)  Verify the status of the master: Slave Found Charging on the left Master panel and the status of the slave: Master Found Comm. Enabled on the right Slave panel.
- 11)  The EV kit is now ready for additional evaluations.

## Evaluates: MAX20340

Figure 1. The Status of the GUI Shows Connected Ready for Further Evaluations.

<!-- image -->

│

## Detailed Description of Software

## Software Startup

Upon starting the program, the EV kit software automatically searches for the USB interface circuit and then for the  IC  device  addresses.  The  EV  kit  enters  the  normal operating mode when the connection is established and addresses are found. If the USB connection is not detected,  the  status  bar  displays Not Connected .  If  the  USB connection is detected, but the MAX20340 is not found, the Master or Slave panel in the General tab shows Not Found .

## ToolStrip Menu Bar

The ToolStrip menu bar (Figure 2) is located at the top of  the  GUI  window.  This  bar  comprises File , Device , Options ,  and Help menus whose functions are detailed in the following sections.

## File Menu

The File menu contains the option to exit out of the GUI program.

## Device Menu

The Device menu provides the ability to connect or dis -connect the EV kit to the GUI. If a board is disconnected while the GUI is open the GUI displays Disconnected in the lower right corner. If the device is then plugged back in, the bottom right corner of the GUI displays Connected .

## Options Menu

The Options menu provides several settings  to  access more features offered by the GUI. The Disable polling option lets the user read the registers manually instead of getting  automatically  frequent  register  updates  from  the IC. MAX20343 option allows the user to reset, enable, or disable the buck-boost regulator on the EV kit. The user can view the Serial Log of reading or writing registers in the Advanced option.  Also,  the I2C  Read/Write in  the Advanced option allows the user to read from or write to a selected register with a specified slave address

## Help Menu

The Help menu  contains  the About option,  which  dis -plays the GUI splash screen indicative of the GUI version being used.

Figure 2. The ToolStrip Menu Items

<!-- image -->

## Evaluates: MAX20340

│

## MAX20340 Evaluation Kit

## Tab Controls

The MAX20340 EV kit software GUI provides a convenient way to test the features of the MAX20340. Each tab contains controls relevant to various blocks of the device. Changing these interactive controls triggers a write opera -tion to the MAX20340 to update the register contents.

## General Tab

The General tab  (Figure  3)  provides  all  important  infor -mation and options to set up the MAX20340 master and slave  modes.  The Master block  (on  the  left  side)  and Slave block (on the right side) display I 2 C addresses and allow the user to choose parameters for each setting in powerline communication.

Figure 3. General Tab

<!-- image -->

Evaluates: MAX20340

│

## Configure Tab

The Configure tab (Figure 4) configures the Master and Slave sides with more unique settings such as Transmit Filter , Charge Timer , and LDO Voltage .

Figure 4. Configure Tab

<!-- image -->

## MAX20340 Evaluation Kit

## Communication Test Tab

The Communication Test tab  (Figure  5)  hosts  the  set -tings  for  powerline  communication  tests.  The  user  can specify transmit data in hex values and run the test with either  single  or  continuous  transmission.  The Results block,  on  the  right  side,  shows  all  statistics,  specifically errors and error rate, when the test ends.

During a test, each transmission consists of three bytes. It is not possible to send less than three bytes per transmis -sion using the communication test tool.

Evaluates: MAX20340

To start a test, input the data to transmit in the Transmit Data 0  to  2  text  boxes  or  select Use Random Data to use  a  pseudorandom  set  of  three  bytes.  Clicking  the Transmit button transmits a single set of three bytes. To start continuous transmission test, click Start Test button. It is not possible to modify settings on other tabs while a transmission is in progress.

Click Stop Test to  end the communication test. A set of Pause Test… buttons  can  be  selected  to  stop  the  test whenever  a  corresponding  transmit  or  receive  error  is detected. Click the Clear Results button any time to clear the results.

Figure 5. Communication Test Tab

<!-- image -->

│

## MAX20340 Evaluation Kit

## Register Map Tab

The Register Map tab (Figure 6) provides all names and values of MAX20340 registers. The user can click Read All on the top right corner to perform a burst read of all registers.  Master  and  slave  registers  can  be  read  and written individually.

The left table shows the register to be read from or written to. The right table contains descriptions for each register field of the selected 8-bit register. All bits, along with their field names, are displayed at the bottom of the page.

Evaluates: MAX20340

To set a bit, click the bit label. Bold text represents logic 1  and  regular  text  represents  logic  0.  To  configure  the changes to the device, click the Write button at the bot -tom right.

When configuring PLC settings through the register map, some settings, such as PLC Communication Frequency , must be the same on the master and slave. To simplify writing  settings  to  both  devices,  toggle the  Duplicate Writes on Both Devices button. When enabled, all writes are committed to both the master and slave.

Figure 6. Register Map Tab

<!-- image -->

│

## Detailed Description of Hardware

The MAX20340 EV kit evaluates the MAX20340 bidirec -tional  powerline  communication  management integrated circuit,  which  communicates over the I 2 C interface. The EV  kit  demonstrates  the  IC  features  such  as  different charging states, master/slave mode, I 2 C addresses, dual/ single PLC slave mode, and PLC slave addresses. The

Table 1. Jumper Table (JU1-JU26)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                       |
|----------|------------------|-----------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connect SDAof U2 to SDAof MAX32625PICO. (Assuming a shunt is installed on JU12)   |
| JU2      | 1-2*             | Connect SCL of U2 to SCL of MAX32625PICO. (Assuming a shunt is installed on JU13) |
| JU3      | 1-2*             | Connect SDAof U1 to SDAof MAX32625PICO. (Assuming a shunt is installed on JU12)   |
| JU4      | 1-2*             | Connect SCL of U1 to SCL of MAX32625PICO. (Assuming a shunt is installed on JU13) |
| JU5      | 1-2              | Connect VCC2 of U2 to external power supply applied at VEXT.                      |
| JU5      | 2-3*             | Connect VCC2 of U2 to BBOUT of U6.                                                |
| JU6      | Open*            | Disconnect VCC1 of U1 to CHGIN of U5.                                             |
| JU6      | Closed           | Connect VCC1 of U1 to CHGIN of U5.                                                |
| JU7      | 1-2              | Connect VBAT1 of U1 to external power supply applied at VEXT.                     |
| JU7      | 2-3              | Connect VBAT1 of U1 to VBAT of U5.                                                |
| JU8      | 1-2              | Connect VBAT2 of U2 to external power supply applied at VEXT.                     |
| JU8      | 2-3*             | Connect VBAT2 of U2 to BBOUT of U6.                                               |
| JU9      | 1-2*             | Connect VIO to 3.3V of MAX32625PICO.                                              |
| JU10     | 1-2*             | Connect INT2 of U2 to LED indicator.                                              |
| JU11     | 1-2*             | Connect INT1 of U1 to LED indicator.                                              |
| JU12     | 1-2*             | Connect SDAline to MAX32625PICO.                                                  |
| JU13     | 1-2*             | Connect SCL line to MAX32625PICO.                                                 |
| JU14     | Open             | Pull EN of U1 high to VIO to put it in low power shutdown state.                  |
| JU14     | 1-2              | Connect EN of U1 to GPIO of the MAX32625PICO.                                     |
| JU14     | 2-3*             | Connect EN of U1 to ground to exit low power shutdown state.                      |
| JU15     | Open             | Pull EN of U2 high to VIO to put it in low power shutdown state.                  |
| JU15     | 1-2              | Connect EN of U2 to GPIO of the MAX32625PICO.                                     |
| JU15     | 2-3*             | Connect EN of U2 to ground to exit low power shutdown state.                      |
| JU16     | 1-2*             | Connect PLC line between U1 and U2.                                               |
| JU17     | 1-2*             | Select 19.1KΩ resistor for RSEL of U1.                                            |
| JU17     | 3-4              | Select 24.9KΩ resistor for RSEL of U1.                                            |
| JU17     | 5-6              | Select 31.6KΩ resistor for RSEL of U1.                                            |
| JU17     | 7-8              | Select 43KΩ resistor for RSEL of U1.                                              |

│

Evaluates: MAX20340

EV kit  uses  the  IC  in  a  9-bump  (1.358mm  x  1.358mm) wafer-level package (WLP) on a proven, four-layer PCB design. The EV kit operates from the USB +5V DC, and therefore,  does  not  require  an  external  power  supply. Alternatively, the EV kit can be powered with an external power supply using  VEXT TP4.

## MAX20340 Evaluation Kit

## Table 1. Jumper Table (JU1-JU26) (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                 |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------------------|
| JU18     | 1-2              | Select 3.9kΩ resistor for RSEL of U2.                                                                                       |
| JU18     | 3-4              | Select 6.65kΩ resistor for RSEL of U2.                                                                                      |
| JU18     | 5-6              | Select 10.2kΩ resistor for RSEL of U2.                                                                                      |
| JU18     | 7-8*             | Select 14.3kΩ resistor for RSEL of U2.                                                                                      |
| JU19     | 1-2*             | Connect BBIN of U6 to external power supply applied at VEXT.                                                                |
| JU19     | 2-3              | Connect BBIN of U6 to MAX32625PICO 5V.                                                                                      |
| JU20     | 1-2              | Connect FAST to CAP pin of U6.                                                                                              |
| JU21     | 1-2              | Do not install a shunt on JU21. It is for connecting an optional external battery pack to the MAX20335 battery charger.     |
| JU23     | 1-2*             | Connect VBUS of USB1 to external power supply applied at VEXT.                                                              |
| JU24     | 1-2              | Connect 2.2µF capacitor to CHGIN of U5.                                                                                     |
| JU25     | 1-2*             | Connect the fixed-value R8 to form the bottom resistor of the resistor divider between VBAT of U5 and AIN2 of MAX32625PICO. |
| JU25     | 2-3              | Connect the potentiometer to form the bottom resistor of the resistor divider between VBAT of U5 and AIN2 of MAX32625PICO.  |
| JU26     | 1-2              | Connect output capacitor C1 to VCC1 of U1. Install this shunt if LDO of U1 is enabled.                                      |

*Default position.

## Dual Slave Mode

This section covers the procedure to evaluate Dual Slave Mode with the MAX20340 EV kit and the MAX20340 EV kit GUI.

## Required Equipment

- Windows 8/10 PC with an available USB port and the latest MAX20340 EV kit GUI application installed
- Two MAX20340\_EV kit\_A boards programmed with the latest firmware*
- Two USB A to USB Micro-B cables

*Note:  If  the  latest  firmware  is  not  installed.  Follow  the Firmware Update procedure.

## Setup

To  evaluate  dual  slave  mode,  two  EV  kits  and  two MAX20340 EV kit GUIs are used. One board is configured with one master and one slave, and the other is con -figured with one slave and no master. Use the following steps to setup the two MAX20340 EV kits:

- 1) Install jumper shunts on both boards as shown in teal in Figure 7.
- 2) Connect the PLC and GND pins of the two boards by inserting the J2 pins of the 'Slave Only' board into the J1 connector of the 'Master and Slave' board as shown in Figure 7.

│

Evaluates: MAX20340

Evaluates: MAX20340

Figure 7. Jumper Configuration for Dual Slave Mode.

<!-- image -->

## MAX20340 Evaluation Kit

- 3) Connect the USB A-to-micro-B cable to the PC and to the 'Master and Slave' board USB Micro-B port located at U3.
- 4) Run the MAX20340 EV kit GUI. The GUI automatically connects to the 'Master and Slave' board and the master and slave are both found automatically (see Figure 8).

Evaluates: MAX20340

Figure 8. MAX20340 EV Kit GUI Connected to the Master and Slave Board.

<!-- image -->

│

## MAX20340 Evaluation Kit

- 5) Connect the USB A to Micro-B cable to the PC and to the 'Slave Only' board's USB Micro-B port located at U3.
- 6) Run another instance of the MAX20340 EV kit GUI. Do not close the GUI that is connected to the 'Master and Slave' board. The GUI automatically

connects to the 'Slave Only' board and the single slave is found automatically. Since there is no master connected to the PLC and GND pins on this board, the GUI shows 'Not Found' for the master. The application should appear as shown in Figure 9.

Figure 9. MAX20340 EV Kit GUI Connected to the Slave Only Board.

<!-- image -->

│

- 7) If the setup steps were followed correctly, the two GUIs should appear as shown in Figure 10.

Figure 10. Two MAX20340 EV Kit GUIs Connected to Both Boards.

<!-- image -->

## MAX20340 Evaluation Kit

Evaluates: MAX20340

- 8) If the setup steps were followed correctly, the two boards should be connected to the PC using two USB cables and set up as shown in Figure 11.

Figure 11. Two MAX20340 EV Kit Boards Setup for Dual Slave Mode.

<!-- image -->

│

## MAX20340 Evaluation Kit

## Transmitting Data

To transmit data from the master to the two slaves:

- 1) Disable slave echo on both slaves by selecting Echo Off in the Slave section of the General tab on each GUI.
- 2) On the 'Master and Slave' GUI, select the number of bytes to transmit in the dropdown in the Master sec -tion of the General tab.
- 3) Enter the data to be transmitted (in hexadecimal) into the Transmit Data 0-2 text boxes.
- 4) Click 'Transmit'.

The 'Transmit Result' updates on the 'Master and Slave' GUI and shows 'Transmit OK' and 'Receive OK' if the transmission is successful.

If  the  transmission is successful, the transmitted data is available in the RX\_DATA registers of each slave. Click the 'Read Data' button in the Slave section to read the contents  of  the  RX\_DATA  registers.  The  GUI  automatically  reads  the  RX\_DATA  registers  of  the  slave  on  the 'Master and Slave' board when the 'Transmit' button is clicked,  but  a  manual  read  is  needed  on  the  GUI  connected to the single slave board.

## Firmware Update

To stay up to date with the latest software releases, the MAX32625PICO firmware might need to be updated. The firmware image file (.bin) is located in the zip file down -loaded  from  the Quick  Start section.  Follow  the  steps below  to  program  a  firmware  image  file  (.bin)  onto  the MAX32625PICO board:

- 1) Put the board in maintenance mode by holding the button while the board is being connected to the computer. It might be easier to hold the button while inserting the USB cable at the computer end rather than the micro-USB connector end (see Figure 12).
- 2) If the board enters bootloader mode successfully, the LED on the board turns red and the board appears to the computer as a USB drive named 'MAINTENANCE.'
- 3) Drag and drop the firmware image file (.bin) into the MAINTENANCE drive and the board installs the new firmware.

Figure 12. Enter maintenance mode on the MAX32625PICO.

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20340EVKIT# | EV Kit |

#Denotes RoHS compliance.

## Evaluates: MAX20340

│

## MAX20340 EV Kit Bill of Materials

|   ITEM | REF_DES                                                        | DNI/DNP   |   QTY | MFGPART #                                                           | MANUFACTURER                                  | VALUE             | DESCRIPTION                                                                                               |
|--------|----------------------------------------------------------------|-----------|-------|---------------------------------------------------------------------|-----------------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------|
|      1 | C1, C10-C12,                                                   | -         |     6 | GRM155R60J226ME11                                                   | MURATA                                        | 22UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TC=X5R ;                                        |
|      2 | C16, C17 C2-C4, C8                                             | -         |     4 | 0603ZC105KAT2A                                                      | AVX                                           | 1UF               | CAP; SMT (0603); 1UF; 10%; 10V; X7R; CERAMIC CHIP                                                         |
|      3 | C5                                                             | -         |     1 | 6TPE220MAZB                                                         | PANASONIC                                     | 220UF             | CAP; SMT (CASE_B2); 220UF; 20%; 6.3V; TANTALUM CHIP                                                       |
|      4 | C6, C20                                                        | -         |     2 | GRM21BR61A106KE19; ECJ-2FB1A106; CL21A106KPCLQNC; GRM219R61A106KE44 | MURATA;PANASONIC; SAMSUNG ELECTRONICS; MURATA | 10UF              | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R          |
|      5 | C9                                                             | -         |     1 | C1608X5R1H104K080AA                                                 | TDK                                           | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R |
|      6 | C13                                                            | -         |     1 | GRM033R61A105ME15                                                   | MURATA                                        | 1UF               | CAPACITOR; SMT (0201); CERAMIC CHIP; 1UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                   |
|      7 | C14, C15, C19                                                  | -         |     3 | C1005X5R1V225M050BC                                                 | TDK                                           | 2.2UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 2.2UF; 35V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R |
|      8 | DS1-DS3                                                        | -         |     3 | LG L29K-G2J1-24                                                     | OSRAM                                         | LG L29K-G2J1-24   | DIODE; LED; SMT (0603); Vf=1.7V; If(test)=0.002A; -40 DEGC TO +100 DEGC                                   |
|      9 | J1                                                             | -         |     1 | SSQ-102-02-T-S-RA                                                   | SAMTEC                                        | SSQ-102-02-T-S-RA | CONNECTOR; FEMALE; THROUGH HOLE; 0.025IN SQUARE POST SOCKET; SSQ SERIES; RIGHT ANGLE; 2PINS               |
|     10 | J2                                                             | -         |     1 | M20-9960246                                                         | HARWIN                                        | M20-9960246       | CONNECTOR; MALE; THROUGH HOLE; PIN HEADER ASSEMBLY; M20 SERIES; RIGHT ANGLE; 2PINS                        |
|     11 | J3, JU1-JU4, JU6, JU9-JU13, JU16, JU20, JU21, JU23, JU24, JU26 | -         |    17 | PCC02SAAN                                                           | SULLINS                                       | PCC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                  |
|     12 | JU5, JU7, JU8, JU14, JU15, JU19, JU25                          | -         |     7 | PEC03SAAN                                                           | SULLINS                                       | PEC03SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                 |
|     13 | JU17, JU18                                                     | -         |     2 | PEC04DAAN                                                           | SULLINS ELECTRONICS CORP.                     | PEC04DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS                                                 |
|     14 | L1                                                             | -         |     1 | DFE252012F-1R0M=P2; DFE252012F-1R0M                                 | MURATA;MURATA                                 | 1UH               | INDUCTOR; SMT (1008); METAL; 1UH; 20%; 3.3A                                                               |
|     15 | MH1-MH4                                                        | -         |     4 | 9032                                                                | KEYSTONE                                      | 9032              | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NOTHREAD; M3.5; 5/8IN; NYLON                                  |
|     16 | R1, R2, R25                                                    | -         |     3 | CRCW0402499RFK                                                      | VISHAY DALE                                   | 499               | RESISTOR; 0402; 499 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                  |
|     17 | R3                                                             | -         |     1 | ERA-2AEB392                                                         | PANASONIC                                     | 3.9K              | RESISTOR; 0402; 3.9K OHM; 0.1%; 25PPM; 0.063W; THICK FILM                                                 |
|     18 | R4                                                             | -         |     1 | ERJ-2RKF6651                                                        | PANASONIC                                     | 6.65K             | RESISTOR; 0402; 6.65K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                  |
|     19 | R5                                                             | -         |     1 | CRCW040210K2FK; CR0402-16W-1022                                     | VISHAY DALE;VENKEL LTD                        | 10.2K             | RESISTOR; 0402; 10.2K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                 |
|     20 | R6                                                             | -         |     1 | CRCW040214K3FK                                                      | VISHAY DALE                                   | 14.3K             | RESISTOR, 0402, 14.3K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                |
|     21 | R7                                                             | -         |     1 | CRCW06031M50FK                                                      | VISHAY DALE                                   | 1.5M              | RESISTOR, 0603, 1.5M OHM, 1%, 100PPM, 0.10W, THICK FILM                                                   |
|     22 | R8                                                             | -         |     1 | ERJ-PB6D4993                                                        | PANASONIC                                     | 499K              | RES; SMT (0805); 499K; 0.5%; +/-50PPM/DEGC; 0.25W                                                         |
|     23 | R9, R34                                                        | -         |     2 | 3296Y-1-504LF                                                       | BOURNS                                        | 500K              | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 500K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER            |
|     24 | R15                                                            | -         |     1 | CR0402-16W-1912FT; CRCW040219K1FK                                   | VENKEL LTD.;VISHAY DALE                       | 19.1K             | RESISTOR; 0402; 19.1K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                 |
|     25 | R16                                                            | -         |     1 | ERJ-2RKF2492                                                        | PANASONIC                                     | 24.9K             | RESISTOR; 0402; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                  |
|     26 | R17                                                            | -         |     1 | CRCW040231K6FK                                                      | VISHAY DALE                                   | 31.6K             | RESISTOR; 0402; 31.6K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                 |
|     27 | R18                                                            | -         |     1 | CRCW040243K0FK                                                      | VISHAY DALE                                   | 43K               | RESISTOR; 0402; 43K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                   |
|     28 | R19-R24                                                        | -         |     6 | CRCW04024K70FK; MCR01MZPF4701                                       | VISHAY DALE; ROHM SEMICONDUCTOR               | 4.7K              | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                 |
|     29 | R26, R31                                                       | -         |     2 | CRCW040210K0FK; RC0402FR-0710KL                                     | VISHAY DALE;YAGEO PHICOMP                     | 10K               | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                      |
|     30 | R27                                                            | -         |     1 | ERA-3AEB104; AT0603BRD07100KL                                       | PANASONIC;YAGEO                               | 100K              | RESISTOR; 0603; 100K OHM; 0.1%; 25PPM; 0.1W; THIN FILM                                                    |

Evaluates: MAX20340

## MAX20340 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES             | DNI/DNP   |   QTY | MFGPART #                        | MANUFACTURER                           | VALUE           | DESCRIPTION                                                                                                                                       |
|--------|---------------------|-----------|-------|----------------------------------|----------------------------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| 31     | R29, R30, R32, R33  | -         |     4 | RC0603FR-0710KL; AC0603FR-0710KL | YAGEO;YAGEO                            | 10K             | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                             |
| 32     | R35                 | -         |     1 | RNCP0603FTD2K00                  | STACKPOLE ELECTRONICS INC.             | 2K              | RESISTOR; 0603; 2K OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                                            |
| 33     | SU1-SU19, SU23-SU25 | -         |    22 | S1100-B;SX1100-B; STC02SYAN      | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B        | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED                                          |
| 34     | TP1-TP3, TP13-TP16  | -         |     7 | 5011                             | KEYSTONE                               | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                           |
| 35     | TP4                 | -         |     1 |                                  | 5010 KEYSTONE                          | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                             |
| 36     | TP5, TP10           | -         |     2 |                                  | 5004 KEYSTONE                          | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                               |
| 37     | TP6-TP9             | -         |     4 | 5000                             | KEYSTONE                               | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                  |
| 38     | U1, U2              | -         |     2 | MAX20340                         | MAXIM                                  | MAX20340        | EVKIT PART - IC; MAX20340; BI-DIRECTIONAL POWER LINE COMMUNICATION MANAGEMENT IC; WLP9; PACKAGE OUTLINE DRAWING: 21-100389; PACKAGE CODE: W91R1+1 |
| 39     | U3                  | -         |     1 | MAX32625PICO                     | MAXIM                                  | MAX32625PICO    | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625 ARM CORTEX-M4F; BOARD; LAMINATED PLASTIC WITH COPPER CLAD;                                  |
| 40     | U4                  | -         |     1 | NC7WZ07P6X                       | FAIRCHILD SEMICONDUCTOR                | NC7WZ07P6X      | IC; BUF; TINY LOGIC ULTRA-HIGH SPEED DUAL BUFFER; SC70-6                                                                                          |
| 41     | U5                  | -         |     1 | MAX20335                         | MAXIM                                  | MAX20335        | EVKIT PART - IC; PWRM; WEARABLE CHARGE MANAGEMENT SOLUTION; WLP36;                                                                                |
| 42     | U6                  | -         |     1 | MAX20343EEWE+                    | MAXIM                                  | MAX20343EEWE+   | EVKIT PART - IC; ULTRA-LOW QUIESCENT CURRENT; LOW NOISE 3.5W BUCKBOOST REGULATOR; WLP16; PACKAGE OUTLINE: 21-100328; PACKAGE CODE: W161C2+1       |
| 43     | USB1                | -         |     1 | 10118192-0001LF                  | FCI CONNECT                            | 10118192-0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                                           |
| 44     | PCB                 | -         |     1 | MAX20340                         | MAXIM                                  | PCB             | PCB:MAX20340                                                                                                                                      |
| 45     | PS1-PS3             | DNP       |     0 | 131-4353-00                      | TEKTRONICS                             | 131-4353-00     | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                                                   |
| TOTAL  |                     |           |   127 |                                  |                                        |                 |                                                                                                                                                   |

│

Evaluates: MAX20340

## MAX20340 EV Kit Schematics

<!-- image -->

## MAX20340 EV Kit Schematics (continued)

<!-- image -->

## MAX20340 EV Kit PCB Layouts

MAX20340 EV Kit PCB Layout-Silkscreen Top

<!-- image -->

MAX20340 EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX20340 EV Kit PCB Layouts (continued)

MAX20340 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

MAX20340 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX20340 EV Kit PCB Layouts (continued)

MAX20340 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX20340 EV Kit PCB Layout-Silkscreen Bottom

<!-- image -->

│

## MAX20340 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                     | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 12/19           | Initial release                                                                                                                                                                                                 | -               |
|                 1 | 4/20            | Updated the General Description , Features , Procedure, Options Menu, Detailed Description of Hardware sections; Replaced Figures 1-6; Added the Dual Slave Mode and Firmware Update sections, and Figures 7-12 | 1-9             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX20340