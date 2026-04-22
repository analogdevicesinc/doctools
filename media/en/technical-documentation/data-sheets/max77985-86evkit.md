<!-- lastmod 2023-02-10 -->
<!-- image -->

©

Click here to ask an associate for production status of specific part numbers.

## Evaluates: MAX77985/MAX77986 (A/B)

## General Description

The MAX77985/MAX77986 evaluation kit (EV kit) is a fully assembled  and  tested  printed  circuit  board  (PCB)  that demonstrates the MAX77985A/MAX77985B/MAX77986A/ MAX77986B single-cell lithium-ion battery charger.

The MAX7798XX series of IC is for 1S Li+ battery applications and can operate with a 4.7V to 19V input voltage with a maximum charging current of 3.5/5.5A. The IC offers a reverse  boost  as  well  as  fully  integrated  low  power  loss switches to provide a small solution size and high efficien -cy. The EV kit demonstrates the performance of the IC and provides the convenience of evaluating full USB Type-C ® PD solutions with the MAX77958 USB Type-C PD controller.  This  combination  allows  fast  charging  of  the  battery through the USB Type-C port as well as reverse powering the USB Type-C port with battery OTG mode.

A Micro-B USB cable is included in the package to serve as the interface from a USB port on a Windows PC to the slave I 2 C port on the IC. Windows ® -based graphical user interface (GUI) software provides a user-friendly interface to exercise the features of the IC.

Ordering Information appears at end of data sheet.

## MAX77985/MAX77986 Evaluation Kits

## Features

- High-Efficiency Single-Cell Switching Charger
- Up to 5.5A Charging with MAX77986
- 92% Buck Efficiency at 4A, 12V Input
- +28V Absolute Maximum Input Voltage Rating
- 4.7V to 19V Input Operating Voltage Range
- Reverse Boost with Programmable Output Voltage Options up to 12V
- Charge Status Output for LED
- Push-Button Input for Exiting from Ship Mode
- External Discharge FET Enable Output
- Dedicated Input for Suspend Mode (SUSPND)
- Spread Spectrum for Noise Sensitive Applications
- Programmable Unplug Detection for 9V and 15V Source
- USB Type-C Standalone Controller Support Customizable Firmware
- USB Type-C Version 1.3 and PD 3.0 Compliant
- Sink/Source/DRP Port Support
- PPS Sink Support
- Fast Role Swap Initial Sink Support
- Integrated VCONN Switch with OCP
- Support Try.Snk
- Support BC1.2 Legacy Charger Detection

USB Type-C® is a registered trademark of USB Implementers Forum.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

owners.

## MAX77985/MAX77986 Evaluation Kits

## Quick Start

Follow this procedure to familiarize yourself with the EV kit.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in  bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- MAX77985/MAX77986 evaluation package
-  MAX77985/MAX77986EVKIT# Board
- USB Micro-B cable
- MAX77985/MAX77986 EV kit software (GUI)
- USB Type-C or PD travel adapter (TA)
- USB Type-C cable
- Power supply
- Battery simulator or real 1-cell Li-ion battery
- Multi-meters
- Windows-based PC
- Oscilloscope to monitor CC pin or other signals

## Procedure

The EV kits are fully  assembled and tested. Follow the steps  below  to  install  the  EV  kit  software,  make  the required hardware connections, and start the operation of the kit. The EV kit software can be run without attached hardware. Note that after communication is established, the  IC  must  still  be  configured  correctly  for  the  desired operation mode. Make sure the PC is connected to the internet  throughout  the  process  so  that  the  USB  driver can be automatically installed.

- 1) Visit www.maximintegrated.com/products/ MAX77985\_MAX77986 under the Design Resources tab to download the latest version of the MAX77985/ MAX77986 EV kit GUI software. Save the software to a temporary folder and unpack the zip file.
- 2) Install the EV kit software on your computer by running the MAX77985\_MAX77986GUISetupX.X.X.exe program inside the temporary folder. The program files are copied, and icons are created in the Win -dows Start menu. The software requires the .NET

## Evaluates: MAX77985/MAX77986 (A/B)

Framework 4.5 or later. If you are connected to the Internet, Windows automatically updates the .NET framework as needed.

- 3) The EV kit software launches automatically after installation, or it can be launched by clicking on its icon in the Windows Start menu.
- 4) Make jumper connections based on the Default Connection section from Table 1. Change it later when evaluating more features. For the SW1 on the EV kit, set the switch location to the RIGHT so that the MAX77985/MAX77986 I 2 C lines are connected directly to the MAXUSB communication interface. Later you can switch it to the LEFT so that the MAX77985/MAX77986 I 2 C lines are connected to the MAX77958 I 2 C master.
- 5) Make connections to the EV kit board following guidance as shown in Figure 1. The two main inputs to apply are the battery and the charging adaptor. For quick start evaluation, it is suggested to use a 5V power supply at the CHGIN input and a battery voltage greater than 3.6V at the BATT input. The optional voltmeter and ammeter location for testing charger efficiency is indicated in Figure 1. When set up properly with both CHGIN = 5V and BATT = 3.8V input, the SYS voltage is regulated above VBATT by default.
- 6) Connect the EV kit to a USB port on the PC using a USB Micro-B cable.
- 7) Open the GUI software and click Device &gt; Connect . A window pops up showing that a slave address corresponding to MAX7798xx and MAX77958 has been found. If not, check the connection.
- 8) Start evaluating the part with the GUI software. Unlock the write protection and adjust the charger mode, the charging input current limit, and the charging current to start evaluating the basic charger features as described in the Configurations 0-13 Tabs section. Play with the charger mode and other register settings to evaluate the smart power path and more features. Remove the CHGIN input and use the real travel adaptor to evaluate charging the battery through the USB Type-C port.

## MAX77985/MAX77986 Evaluation Kits

Evaluates: MAX77985/MAX77986 (A/B)

Figure 1. MAX7798xx EV Kit Board Connections. The power supply and the USB Type-C adaptor can NOT be applied at the same time.

<!-- image -->

## Table 1. Jumper Connection and Switch Setting Guide

| JUMPER   | DEFAULT CONNECTION                        | FEATURE                                                                                                                                                                                                                                                           |
|----------|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J20      | 1-2: Closed 3-4: Open 5-6: Open 7-8: Open | Open: No additional capacitor added on SYS. Bridge N jumpers (N can be 1, 2, 3, 4): Add N x 100µF capacitor on SYS. 1-2: Additional 1x100 µ F capacitor. 3-4: Additional 1x100µF capacitor. 5-6: Additional 1x100µF capacitor. 7-8: Additional 1x100µF capacitor. |
| J21      | Closed                                    | Open: Disconnect BATTSP from BATTN. Allows BATTSP pin to remote sense at battery positive terminal. Closed: BATTSP sense point is directly at the BATTP input terminal on the EV kit.                                                                             |
| J22      | Closed                                    | Open: Disconnect BATTSN from BATTN. Allows BATTSN pin to remote sense at battery negative terminal. Closed: BATTSN sense point is directly at the BATTN input terminal on the EV kit.                                                                             |
| J23      | Open                                      | Open: Disable external BATT to SYS FET circuit. Closed: Enable the external BATT to SYS FET path to further reduce the BATT to SYS on resistance. Need to connect J18 and J29.                                                                                    |
| J36      | Closed                                    | Open: No additional capacitor added on BATT. Closed: 220μF capacitor added on BATT.                                                                                                                                                                               |

│

## MAX77985/MAX77986 Evaluation Kits

Evaluates: MAX77985/MAX77986 (A/B)

Table 1. Jumper Connection and Switch Setting Guide (continued)

| JUMPER   | DEFAULT CONNECTION                                                    | FEATURE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|----------|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J5       | 1-2 (ROOM): Closed 3-4 (NTC): Open 5-6 (POT): Open 7-8 (ENTH): Closed | All Open: Disable thermistor. Only 7-8 Closed: Enable thermistor function, connect pin 1 to the thermistor from the battery pack to measure temperature directly at the battery. 1-2, 7-8 Closed: Enable thermistor function, a fixed 10kΩ pullup and pulldown simulate a constant room temperature. 3-4, 7-8 Closed: Enable thermistor with temperature measurement from an NTC resistor installed on EV kit. 5-6, 7-8 Closed: Enable thermistor with temperature measurement simulated with a potentiometer R43. Any other configuration: Do not configure. |
| J18      | 1-2                                                                   | 1-2: Enable QBEXT pin as PGOOD . 2-3: Connect 100kΩ pullup for the external BATT to SYS FET circuit. Need to connect J23 and J29.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| J29      | Open                                                                  | Open: Disable external BATT to SYS FET circuit. Close: Connect QBEXT pin to control external BATT to SYS FET circuit. Need to connect J23 and J18.                                                                                                                                                                                                                                                                                                                                                                                                            |
| J37      | Open                                                                  | Open: Default operation. Closed: Force disconnect QBATT.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| J13      | Open                                                                  | Open: Default operation. Closed: Force SUSPEND = 1 to the charger.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| J17      | Open                                                                  | Open: STAT pin LED indicator is disabled. Closed: STAT pin LED indicator is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| J7       | 2-3                                                                   | Open: Do not configure. 1-2: VIO powered through EXTVIO with 1.8V external power supply. 2-3: VIO powered by USB Micro-B port connected to PC.                                                                                                                                                                                                                                                                                                                                                                                                                |
| J9       | Closed                                                                | Open: MAX77958 V CONN is not powered. Closed: MAX77958 V CONN is powered by SYS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| J3       | Closed                                                                | Open: MAX77958 is not connected to VBUS. Closed: MAX77958 is connected to VBUS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| J16      | Closed                                                                | Open: MAX77958 is not powered by SYS. Closed: MAX77958 is powered by SYS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| J4       | Open                                                                  | Open: MAX77958 GPIO4 is not connected to MAX77985/MAX77986 IRQB. Closed: MAX77958 GPIO4 is connected to MAX77985/MAX77986 IRQB. Also, connect 1-2 on J15 for pullup.                                                                                                                                                                                                                                                                                                                                                                                          |
| J15      | Open                                                                  | Open: MAX77985/6 IRQB is not connected. Close 1-2: MAX77985/6 connects to 100kΩ pullup to VIO. Close 3-4: IRQB LED indicator is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| J30      | Open                                                                  | Open: MAX77958 slave address configured by J31, J32. Closed: MAX77958 slave address is selected to be 0b0100110. Do not connect J31 and J32.                                                                                                                                                                                                                                                                                                                                                                                                                  |

## MAX77985/MAX77986 Evaluation Kits

Evaluates: MAX77985/MAX77986 (A/B)

Table 1. Jumper Connection and Switch Setting Guide (continued)

| JUMPER   | DEFAULT CONNECTION   | FEATURE                                                                                                                                                                                                                                                                                                                 |
|----------|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J31      | Open                 | Open: MAX77958 slave address configured by J30, J32. Closed: MAX77958 slave address is selected to be 0b0100111. Do not connect J30 and J32.                                                                                                                                                                            |
| J32      | Closed               | Open: MAX77958 slave address configured by J30, J31. Closed: MAX77958 slave address is selected to 0b0100101 by connecting the GPIO6 to GND. Default for GUI communication. Do not connect J30 and J31.                                                                                                                 |
| J33      | Open                 | All GPIO pins of the MAX77958 at J33 are available to connect externally. Some GPIOs have reserved functionality. Refer to the MAX77958 data sheet for details.                                                                                                                                                         |
| J34      | Closed               | Open: MAX77958 VIO1 is not powered. Closed: MAX77958 VIO1 is powered.                                                                                                                                                                                                                                                   |
| J35      | Closed               | Open: MAX77958 VIO2 is not powered. Closed: MAX77958 VIO2 is powered.                                                                                                                                                                                                                                                   |
| J8       | Open                 | Open: CC1 line is not connected to pullup or pulldown. Must open J8 for testing with a real USB Type-C adaptor. Close 1-2: CC1 is connected to RP to simulate a DFP that has been connected to CC1. Close 3-4: CC1 is connected to RD to simulate a UFP that has been connected to CC1. J11 must be installed for this. |
| J10      | Open                 | Open: CC2 line is not connected to pullup or pulldown. Must open J8 for testing with a real USB Type-C adaptor. Close 1-2: CC2 is connected to RP to simulate a DFP that has been connected to CC2. Close 3-4: CC2 is connected to RD to simulate a UFP that has been connected to CC2. J11 must be installed for this. |
| J12      | Open                 | Open: CC1 line is not connected to RA. Must open J8 for testing with a real USB Type-C adaptor. Close 1-2: CC1 is connected to RAto simulate a cable when RAis connected. J11 must be installed for this.                                                                                                               |
| J14      | Open                 | Open: CC2 line is not connected to RA. Must open J8 for testing with a real USB Type-C adaptor. Close 1-2: CC2 is connected to RAto simulate a cable when RAis connected. J11 must be installed for this.                                                                                                               |
| J11      | Closed               | Open: On-board RAand RD are not allowed. Closed: On-board RA and RD are allowed.                                                                                                                                                                                                                                        |
| SW1      | 1-2                  | 1-2: MAX77985/MAX77986 I 2 C lines are connected to the host directly. 2-3: MAX77985/MAX77986 I 2 C lines are connected to the MAX77958 I 2 C master.                                                                                                                                                                   |

Default options are in bold .

│

## MAX77985/MAX77986 Evaluation Kits

## Detailed Description of Software

The GUI allows for quick, easy, and thorough evaluation of the MAX7798xx and MAX77958. Every control in the GUI  corresponds  to  a  register  in  the  MAX7798xx  and MAX77958.  Refer  to  the Register  Map section  in  the MAX7798xx and MAX77958 data sheets for a complete description.

## Software Installation

The  MAX77986EVKIT#  GUI  can  be  downloaded  from Maxim's  website  at http://www.maximintegrated.com/ products/MAX77985\_MAX77986 (under the Design Resources tab).  Save  the  EV  kit  software  to  a  temporary folder and decompress the ZIP file. Run the .EXE file and follow the on-screen instructions to complete the installation.

Evaluates: MAX77985/MAX77986 (A/B)

## Windows Driver

After connecting the Micro-USB cable between your PC and the EV kit for the first time, wait for Windows to auto -matically install the drivers for the USB to I 2 C Interface.

## Establish Communication

When  the  device  is  powered  up  by  CHGIN  or  BATT input, click Device &gt; Connect to communicate to the IC. Figure 2 shows the correct detection result. Click Read and Close to establish the connection.

Before configuring at any tab, click Read Once to make sure all the displayed configurations are in sync with the IC configuration state. Alternatively, click Start Auto Read and  set  the  corresponding  read  frequency  to  keep  this page up to date all the time. Follow the guidance on the IC data sheet for the detailed usage of each register. When trying to write to a register with the write button, disable the Auto Read feature.

Figure 2. Device &gt; Connect Resulting Window

<!-- image -->

│

## MAX77985/MAX77986 Evaluation Kits

## Top Tab

The Top tab displays the top-level configuration settings for  the  IC.  Figure  3  shows  the  format  of  the Top tab. Information is grouped by function, and each is detailed separately. The masked top interrupt is not reflected on

Evaluates: MAX77985/MAX77986 (A/B)

the IRQB pin, while the unmasked interrupt is reflected on the IRQB pin. The Top Status Indicator section includes controls for the top-level settings. The software reset command is 0xA5.

Figure 3. MAX77985/MAX77986 Top Tab

<!-- image -->

│

## MAX77985/MAX77986 Evaluation Kits

## Interrupts/Status Tab

The Interrupts/Status tab displays the charger interrupt setting and status for the IC. Figure 4 shows the format

Evaluates: MAX77985/MAX77986 (A/B)

of the Interrupts/Status tab. The masked charger interrupt is not reflected on the IRQB pin, while the unmasked interrupt is reflected on the IRQB pin.

Figure 4. MAX77985/MAX77986 Interrupt and Status

<!-- image -->

## MAX77985/MAX77986 Evaluation Kits

## Details/STAT Tab

The Details/STAT tab  displays  the  charger's  detailed status.  Figure  5  shows  the  format  of  the Details/STAT tab. The detailed status of the charger helps diagnose the state of the charger operation. Also, the detailed charger

Evaluates: MAX77985/MAX77986 (A/B)

status  is  the  basis  of  the  interrupt  status.  Refer  to  the description of the CHG\_DTLS00/01/02 register in the data sheet  for  more  details.  The  tab  also  controls  the  STAT LED behavior.

Figure 5. MAX77985/MAX77986 Details and STAT

<!-- image -->

│

## MAX77985/MAX77986 Evaluation Kits

## Configurations 0-13 Tabs

The Configurations 0-13 tabs display the charger configuration settings corresponding to registers CHG\_CFG\_00-13. Figure 6 shows the format of the Configurations 0-3 tab as an example. Notice that the Configuration 1, 2, 3, 4, and 7 registers are locked by the register Configuration 6. To unlock, set the Charger Settings Protection field

## Evaluates: MAX77985/MAX77986 (A/B)

of  Configuration  6  to Unlock  0x3 state,  then  click  the Write button.  Click Read to  make  sure  the  change  is in  place. After the unlock, all configuration registers can be configured. To get started charging a battery with the desired  current  setting,  set Chgin  Input  Current  Limit in  Configuration  9,  then  set Fast  Charging  Current in Configuration 2, then set Mode = 5 in Configuration 0 to switch from buck-only mode to charging mode.

Figure 6. MAX77985/MAX77986 Configurations

<!-- image -->

│

## MAX77985/MAX77986 Evaluation Kits

## Test with MAX77958 and USB Type-C Port Interface

## CC Detection Test

- 1) Connect a USB Type-C adapter to the EV kit and see whether the MAX77958 detects SINK and configures the input current limit correctly.
- 2) Connect a USB Type-C cable from a Type-C dualrole port (source preferred) device to see whether the MAX77958 detects CC Pin State Machine Detection and configures the input current limit correctly.

## USB Power Delivery Test

- 1) Source capability request function test.
- 2) Connect the USB power delivery AC adapter to the EV kit.
- 3) Use a voltmeter to monitor the voltage on VBUS.
- 4) Go to Command &gt; Get SrcCap(0x31) , and click on Write to execute the command, the MAX77958 sends this command over the CC pin to the TA, and the TA provides a list of available source capabilities.
- 5) Review the source capabilities and make a note of the desired PDO.
- 6) Go to SrcCap Request (0x32) , set the value of the PDO, and press the Write button to change the BUS voltage.

Figure 7. CC Status after Connecting the USB Type-C Connector of EV Kit to a Travel Adapter (TA).

<!-- image -->

Figure 8. Get Source Capability (Get SrcCap) Under the Command Section

<!-- image -->

## Evaluates: MAX77985/MAX77986 (A/B)

## BC1.2 Charger Type Detection

- 1) Plug in the USB Type-A to Type-C cable from a BC1.2 adapter or other legacy port and check the Charger Detection Status under the BC Status tab of the MAX77958 GUI to see if the USBC detects the correct charger type.

## MAX77985/MAX77986 Evaluation Kits

Figure 9. BC Status after Connecting the USB Type-C Connector of EV Kit to SDP

<!-- image -->

## Detailed Description of Firmware for MAX77958

The firmware of MAX77958 consists of two main parts: the core firmware and the customization script.

The  core  firmware  is  compliant  with  the  USB  Type-C 1.3  and  PD  3.0  specifications.  The  customization  script is  based  on  the  application  system,  giving  more  flex -ibility  for  system  design.  It  is  based  on  the  customization  script  update,  which  can  achieve functions such as GPIO  matrix  control,  charger  configuration  initialization, etc.  Future  USB  Type-C  and  PD  specification  changes can be accommodated by updating the MAX77958 core firmware. See the Core Firmware Update section of this data sheet.

See  the MAX77958  Customization  Script  and  OPCode Command  Guide for  details  about  the  customization script.

## MAX77958 Customization Script Block Update

The customization script defines the application-specific behavior  of  the  MAX77958.  An  example  is  setting  the input current limit of the charger when USB device detection is completed.

- 1) Follow the initial test setup to connect the GUI with the MAX77985/MAX77986 EV kit.
- 2) Connect 3.8V to BATT, do not disconnect the EV kit from the PC during the customization script block update.
- 3) Click on Tools in the menu bar and then go to CUS Command Block Update .
- 4) Click on the Open button in the pop-up window to load the latest customization script, and then click on Start to activate the customization script update.
- 5) Figure 11 shows the customization script update process complete.

Figure 10. MAX77985/MAX77986 EV Kit GUI Customization Script Block Update

<!-- image -->

## MAX77985/MAX77986 Evaluation Kits

Evaluates: MAX77985/MAX77986 (A/B)

Figure 11. Customization Script Update Process Complete

<!-- image -->

## Core Firmware Update

- 1) Follow the initial test setup to connect the GUI with the MAX77985/MAX77986 EV kit.
- 2) Connect 3.8V to BATT and do not disconnect the EV kit from the PC during the firmware update.
- 3) Click on Tools in the menu bar and then go to Firmware Update .
- 4) Click on the Open button in the pop-up window to load the latest firmware. In the file select window, click on the .bin file, and then select Start to activate the firmware update.
- 5) Figure 13 shows the firmware update process com -plete.

Figure 12. MAX77985/MAX77986 EV Kit GUI Firmware Update

<!-- image -->

Figure 13. Firmware Update Process Complete

<!-- image -->

## MAX77985/MAX77986 Evaluation Kits

## Script Automation

A  Python-based  script  system  is  embedded  in  the  GUI software to allow automating or configuring multiple registers sequentially with ease. To evaluate through Pythonbased commands, click Tools &gt; Run Script File . A Script window pops up, as shown in Figure 14. The first tab consists of a script editor and an embedded Python Terminal Interface. The second tab provides the Python I/O console. The Help button provides a coding tutorial for this script window. Click the Run button to execute the script. The script feature helps with testing out a sequence of the configuration automatically.

Evaluates: MAX77985/MAX77986 (A/B)

## Optional Tools

For I 2 C-communication debugging, more tools are avail -able at Options &gt; CMOD Advanced UI . With the proper test set-up procedure described in this document, these tools do not need to be used to evaluate the MAX77985/ MAX77986. However, other slave devices can be tested with the I 2 C debugging tools and the GUI software when connected  to  the  MAX77985/MAX77986  with  the  SDA and SCL pins. If successful, you can automate multiple slave devices through the script window.

Figure 14. MAX77985/MAX77986 Script Window

<!-- image -->

│

## MAX77985/MAX77986 Evaluation Kits

## Table 2. USB Acronym

| ACRONYM   | DESCRIPTION                |
|-----------|----------------------------|
| BC1.2     | Battery Charging 1.2       |
| CC        | Configuration Channel      |
| CDP       | Charging Downstream Port   |
| DCP       | Dedicated Charging Port    |
| DFP       | Downstream Facing Port     |
| MAXUSB    | USB to I 2 C translator    |
| MTP       | Multiple Time Programmable |
| OVP       | Over Voltage Protection    |
| PD        | Power Delivery             |
| PDO       | Power Data Object          |
| PPS       | Programmable Power Supply  |
| SDP       | Standard Downstream Port   |
| UFP       | Upstream Facing Port       |
| VDM       | Vendor Defined Message     |

## Ordering Information

| PART            | EVALUATES           | TYPE   |
|-----------------|---------------------|--------|
| MAX77985AEVKIT# | MAX77985A, MAX77958 | EV Kit |
| MAX77985BEVKIT# | MAX77985B, MAX77958 | EV Kit |
| MAX77986AEVKIT# | MAX77986A, MAX77958 | EV Kit |
| MAX77986BEVKIT# | MAX77986B, MAX77958 | EV Kit |

# Denotes RoHS compliant.

## MAX77985/MAX77986 Evaluation Kits

## MAX77985/MAX77986 EV Kit Bill of Materials

| ITEM   | REF_DES                                                                                                                                         | DNI/DNP   | QTY   | MFG PART #                                                                            | MANUFACTURER                                      | VALUE           | DESCRIPTION                                                                                                        |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|---------------------------------------------------------------------------------------|---------------------------------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------|
| 1      | AVL1, BATSN, BATSP, BATTS, BYPS, CC1, CC2, CHGINS, DN, DN1, DP, DP2, INTB1, SBU1, SBU2, SCL1, SDA1, SYS1, SYSS, VDD1P1, VDD1P8, VIO, VIO1, VIO2 | -         | 24    | 5000 KEYSTONE                                                                         | 5000 KEYSTONE                                     | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
| 2      | BATTN, BATTN1, BATTP, BATTP1, BYP, CHGIN, GND1-GND5, GND7, SYS                                                                                  | -         | 13    | 9020 BUSS                                                                             | WEICO WIRE                                        | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                           |
| 3      | C1, C15, C18-C21, C23-C29, C36                                                                                                                  | -         | 14    | GRM155R71A104JA01                                                                     | MURATA                                            | 0.1UF           | CAP; SMT (0402); 0.1UF; 5%; 10V; X7R; CERAMIC                                                                      |
| 4      | C2                                                                                                                                              | -         | 1     | C1608X5R1V225K080AC; GRM188R6YA225KA12                                                | TDK;MURATA                                        | 2.2UF           | CAP; SMT (0603); 2.2UF; 10%; 35V; X5R; CERAMIC                                                                     |
| 5      | C3, C4, C16, C17, C30-C32                                                                                                                       | -         | 7     | C0402C105K8PAC; CC0402KRX5R6BB105                                                     | KEMET;YAGEO                                       | 1UF             | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                       |
| 6      | C5, C33, C50, C54, C55                                                                                                                          | -         | 5     | CL05A105KO5NNN                                                                        | SAMSUNG                                           | 1UF             | CAP; SMT (0402); 1UF; 10%; 16V; X5R; CERAMIC                                                                       |
| 7      | C6, C10                                                                                                                                         | -         | 2     | C2012X5R1V226M125AC                                                                   | TDK                                               | 22UF            | CAP; SMT (0805); 22UF; 20%; 35V; X5R; CERAMIC                                                                      |
| 8      | C7, C49                                                                                                                                         | -         | 2     | C1005X7R1H104K050BB; GRM155R71H104KE14; C1005X7R1H104K050BE; UMK105B7104KV-FR         | TDK;MURATA;TDK; TAIYO YUDEN                       | 0.1UF           | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                     |
| 9      | C8, C34                                                                                                                                         | -         | 2     | CL10A226MO7JZNC                                                                       | SAMSUNG ELECTRONICS                               | 22UF            | CAP; SMT (0603); 22UF; 20%; 16V; X5R; CERAMIC                                                                      |
| 10     | C9 , C53                                                                                                                                        | -         | 2     | GRM188R61C106MA73                                                                     | MURATA                                            | 10UF            | CAP; SMT (0603); 10UF; 20%; 16V; X5R; CERAMIC                                                                      |
| 11     | C11, C14, C43, C44                                                                                                                              | -         | 4     | C0402C0G500270JNP; GRM1555C1H270JA01                                                  | VENKEL LTD.;MURATA                                | 27PF            | CAP; SMT (0402); 27PF; 5%; 50V; C0G; CERAMIC                                                                       |
| 12     | C12, C13, C22                                                                                                                                   | -         | 3     | ZRB15XR61A475ME01; CL05A475MP5NRN; GRM155R61A475MEAA; C1005X5R1A475M050BC             | MURATA;SAMSUNG; MURATA;TDK                        | 4.7UF           | CAP; SMT (0402); 4.7UF; 20%; 10V; X5R; CERAMIC                                                                     |
| 13     | C35                                                                                                                                             | -         | 1     | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV | KEMET;MURATA;TDK; SAMSUNG ELECTRONIC; TAIYO YUDEN | 0.01UF          | CAP; SMT (0402); 0.01UF; 10%; 50V; X7R; CERAMIC                                                                    |
| 14     | C37-C40                                                                                                                                         | -         | 4     | EMK325ABJ107MM                                                                        | TAIYO YUDEN                                       | 100UF           | CAP; SMT (1210); 100UF; 20%; 16V; X5R; CERAMIC                                                                     |
| 15     | C41                                                                                                                                             | -         | 1     | GRM32ER60J227ME05                                                                     | MURATA                                            | 220UF           | CAP; SMT (1210); 220UF; 20%; 6.3V; X5R; CERAMIC                                                                    |
| 16     | C46                                                                                                                                             | -         | 1     | GRM188R71A225KE15; CL10B225KP8NNN; C1608X7R1A225K080AC; C0603C225K8RAC                | MURATA;SAMSUNG; TDK;KEMET                         | 2.2UF           | CAP; SMT (0603); 2.2UF; 10%; 10V; X7R; CERAMIC                                                                     |
| 17     | C47, C51                                                                                                                                        | -         | 2     | ANY                                                                                   | ANY                                               | 1UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R;                  |
| 18 19  | C52 D1                                                                                                                                          | - -       | 1 1   | C1005X5R1V105K050BC PTVS20VS1UR                                                       | TDK                                               | 1UF 20V         | CAP; SMT (0402); 1UF; 10%; 35V; X5R; CERAMIC DIODE; TVS; SMT (SOD-123W); VRM=20V; IPP=12.3A                        |
| 20     |                                                                                                                                                 |           | 0     | ESD9X3.3ST5G                                                                          | NEXPERIA ON SEMICONDUCTOR                         | 3.3V            | DIODE; TVS; SMT (SOD-923); VRM=3.3V; IPP=9.8A                                                                      |
| 21     | D2 D3                                                                                                                                           | DNP DNP   | 0     | SD2114S040S8R0                                                                        | AVX                                               | SD2114S040S8R0  | DIODE; SCH; SMB (DO-214AA); PIV=40V; IF=8A                                                                         |
| 22     | D8, D9                                                                                                                                          | -         | 2     | PESD4V0W1BSF                                                                          | NEXPERIA                                          | 4V              | EVKIT PART-DIODE; TVS; SMT (SOD962-2); VRM=+/-4V; IPP=N/A                                                          |
| 23     | DISQBAT, EXTSM, IRQB, IRQB83, QBEXT, SCL, SDA, STAT, SUSPND                                                                                     | -         | 9     |                                                                                       | 5002 KEYSTONE                                     | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;              |
| 24     | DS1-DS3                                                                                                                                         | -         | 3     | LTST-C190CKT                                                                          | LITE-ON ELECTRONICS INC.                          | LTST-C190CKT    | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                    |
| 25     | EXTVIO, PVDD, VDD                                                                                                                               | -         | 3     |                                                                                       | 5010 KEYSTONE                                     | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;              |
| 26     | GNDS, PGNDS, SYSGNDS                                                                                                                            | -         | 3     | 5001                                                                                  | KEYSTONE                                          | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 27     | J1                                                                                                                                              | -         | 1     | 10118193-0001LF                                                                       | FCICONNECT                                        | 10118193-0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                            |
| 28     | J2                                                                                                                                              | -         | 1     | 12401832E402A                                                                         | AMPHENOL                                          | 12401832E402A   | CONNECTOR; FEMALE; SMT; USB TYPE C CONNECTOR; RIGHT ANGLE; DUAL ROW; 24PINS                                        |
| 29     | J3, J4, J9, J11, J12, J14, J16, J30-J32, J34, J35                                                                                               | -         | 12    | TSW-102-07-T-S                                                                        | SAMTEC                                            | TSW-102-07-T-S  | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                            |
| 30     | J5, J20                                                                                                                                         | -         | 2     | PBC04DAAN                                                                             | SULLINS ELECTRONICS CORP.                         | PBC04DAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65 DEGC TO +125 DEGC                                   |
| 31     | J7, J8, J10, J18                                                                                                                                | -         | 4     | PBC03SAAN                                                                             | SULLINS                                           | PBC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                   |
| 32     | J13, J17, J21, J22,                                                                                                                             | -         | 7     | PBC02SAAN                                                                             | SULLINS ELECTRONICS CORP.                         | PBC02SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                          |
| 33     | J29, J36, J37                                                                                                                                   |           | 2     |                                                                                       |                                                   |                 | CONNECTOR; MALE; THROUGH HOLE;                                                                                     |
|        | J15, J23                                                                                                                                        | -         |       | PBC02DAAN                                                                             | SULLINS ELECTRONIC CORP.                          | PBC02DAAN       | BREAKAWAY; STRAIGHT; 4PINS                                                                                         |
| 34     | J33                                                                                                                                             | -         | 1     | PBC09SAAN                                                                             | SULLINS ELECTRONICS CORP                          | PBC09SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 9PINS; -65 DEGC TO +125 DEGC                                   |
| 35     | L1                                                                                                                                              | -         | 1     | IHLP2020CZER1R0M01                                                                    | VISHAY DALE                                       | 1UH             | INDUCTOR; SMT; SHIELDED; 1UH; TOL=+/-20%; 9.2A                                                                     |
| 36 37  | L2-L4                                                                                                                                           | -         | 3     | BLM18AG601SN1                                                                         | MURATA 9032 KEYSTONE                              | 600 9032        | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A MACHINE FABRICATED; ROUND-THRU HOLE                         |
|        | MH1-MH4                                                                                                                                         | -         | 4     | AK67421-1-R                                                                           |                                                   |                 | SPACER; NO THREAD; M3.5; 5/8IN; NYLON CONNECTOR; MALE; USB; USB2.0 MICRO TO                                        |
| 38     | MISC1                                                                                                                                           | -         | 1     |                                                                                       | ASSMANN                                           | AK67421-1-R     | CONNECTION CABLE; USB B MICRO MALE USB A MALE; STRAIGHT; 5PINS-4PINS                                               |

## MAX77985/MAX77986 Evaluation Kits

Evaluates: MAX77985/MAX77986 (A/B)

## MAX77985/MAX77986 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                                | DNI/DNP   | QTY   | MFG PART #                                                    | MANUFACTURER                           | VALUE                   | DESCRIPTION                                                                                                                                                                                                                               |
|--------|--------------------------------------------------------|-----------|-------|---------------------------------------------------------------|----------------------------------------|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 39     | Q1, Q2                                                 | -         | 2     | BSC014N03MSG                                                  | INFINEON                               | BSC014N03MSG            | TRAN; N-CHANNEL POWER MOSFET; NCH; PG-TDSON8; PD-(139W); I-(100A); V-(30V)                                                                                                                                                                |
| 40     | R1, R7, R14-R16, R18, R22, R32-R34, R44                | -         | 11    | ERJ-2GE0R00                                                   | PANASONIC                              |                         | 0 RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                                                                             |
| 41     | R2, R42                                                | -         | 2     | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0 | VISHAY DALE;PANASONIC; YAGEO           | 10K                     | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                                                         |
| 42     | R4, R6                                                 | -         | 2     | ERJ-2RKF6493                                                  | PANASONIC                              | 649K                    | RES; SMT (0402); 649K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                                                        |
| 43     | R5, R64                                                | -         | 2     | ERJ-2RKF1203                                                  | PANASONIC                              | 120K                    | RES; SMT (0402); 120K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                                                        |
| 44     | R8                                                     | -         | 1     | CRCW040212K0FK; MCR01MZPF1202                                 | VISHAY DALE;ROHM SEMICONDUCTOR         | 12K                     | RES; SMT (0402); 12K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                                         |
| 45     | R9, R13                                                | -         | 2     | ERJ-2RKF27R0X; RC0402FR-0727RL; CRCW040227R0FK                | PANASONIC;YAGEO PHICOMP;VISHAY DALE    | 27                      | RES; SMT (0402); 27; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                                          |
| 46     | R10                                                    | -         | 1     | CRCW04021M00FK                                                | VISHAY DALE                            | 1M                      | RES; SMT (0402); 1M; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                                          |
| 47     | R11, R36, R37, R45                                     | -         | 4     | RC0402FR-071KL; MCR01MZPF1001                                 | YAGEO;ROHM SEMICONDUCTOR               | 1K                      | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                                          |
| 48     | R12, R21                                               | -         | 2     | CRCW04022K20JN                                                | VISHAY DALE                            | 2.2K                    | RES; SMT (0402); 2.2K; 5%; +/-200PPM/DEGK; 0.0630W                                                                                                                                                                                        |
| 49     | R17                                                    | -         | 1     | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK             | VISHAY DALE;YAGEO; VISHAY DALE         | 47.5K                   | RES; SMT (0402); 47.5K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                                       |
| 50     | R19, R20, R23, R31, R41                                | -         | 5     | CRCW0402100KFK; RC0402FR-07100KL                              | VISHAY;YAGEO                           | 100K                    | RES; SMT (0402); 100K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                                        |
| 51     | R24, R38                                               | -         | 2     | CRCW040210R0FK; 9C04021A10R0FL                                | VISHAY DALE;YAGEO                      |                         | 10 RES; SMT (0402); 10; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                                       |
| 52     | R25, R29                                               | -         | 2     | ERJ-2RKF5602                                                  | PANASONIC                              | 56K                     | RES; SMT (0402); 56K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                                         |
| 53     | R26, R48                                               | -         | 2     | CRCW0402200KFK; RF73H1ELTP2003                                | VISHAY DALE;KOA SPEER ELECTRONICS      | 200K                    | RES; SMT (0402); 200K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                                        |
| 54     | R27, R28                                               | -         | 2     | CRCW04024K70FK; MCR01MZPF4701                                 | VISHAY DALE;ROHM SEMICONDUCTOR         | 4.7K                    | RES; SMT (0402); 4.7K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                                        |
| 55     | R30                                                    | -         | 1     | CRCW0402169KFK                                                | VISHAY DALE                            | 169K                    | RES; SMT (0402); 169K; 1%; +/-100PPM/DEGK; 0.0630W                                                                                                                                                                                        |
| 56     | R35                                                    | -         | 1     | CRCW0402470RFK                                                | VISHAY DALE                            |                         | 470 RES; SMT (0402); 470; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                                     |
| 58     | R43                                                    | -         | 1     | 3296Y-1-104LF                                                 | BOURNS                                 | 100K                    | RESISTOR; THROUGH HOLE-RADIAL LEAD; 3296 SERIES; 100K OHM; 10%; 100PPM; 0.5W                                                                                                                                                              |
| 59     | R46                                                    | -         | 1     | ERJ-2RKF4701                                                  | PANASONIC                              | 4.7K                    | RES; SMT (0402); 4.7K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                                                        |
| 60     | R49, R50, R59, R60                                     | -         | 4     | CRCW06030000Z0EAHP                                            | VISHAY DRALORIC                        |                         | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.2500W 1 RES; SMT (0402); 1; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                           |
| 61 62  | R51, R52 R55, R57                                      | - -       | 2 2   | CRCW04021R00FK CRCW04022K20FK;                                | VISHAY DALE VISHAY DALE;               | 2.2K                    | RES; SMT (0402); 2.2K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                                        |
| 63     | R66, R67                                               | -         | 2     | RC0402FR-072K2L CRCW0402330KFK                                | YAGEO PHICOMP VISHAY DALE              | 330K                    | RES; SMT (0402); 330K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                                        |
| 64     | RT1                                                    | -         | 1     | NTCG163JF103F                                                 | TDK                                    | 10K                     | THERMISTOR; SMT (0603); THICK FILM (NICKEL PLATED); 10K; TOL=+/-1%                                                                                                                                                                        |
| 65     | SU3, SU5, SU7, SU9, SU11, SU16, SU18, SU32, SU34, SU35 | -         | 10    | S1100-B;SX1100-B; STC02SYAN                                   | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B                | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                                                                   |
| 66     | SW1                                                    | -         | 1     | CL-SB-22C-02                                                  | COPAL ELECTRONICS INC.                 | CL-SB-22C-02            | SWITCH; DPDT; THROUGH HOLE; 12V; 0.2A; ON-ON; RCOIL=0.05 OHM; RINSULATION=10M OHM; COPAL ELECTRONICS INC.; -40 DEGC TO +85 DEGC                                                                                                           |
| 67     | SW2                                                    | -         | 1     | EVQ-Q2K03W                                                    | PANASONIC                              | EVQ-Q2K03W              | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                                                                                                                                                |
| 68     | U1                                                     | -         | 1     | MAX77985A/B MAX77986A/B                                       | MAXIM                                  | MAX77985A/B MAX77986A/B | EVKIT PART - IC; MAX77985A/B or MAX77986A/B; 19V INPUT; 5.5A 1-CELL LI+ BATTERYCHARGER WITH SMART POWER SELECTOR AND OTG FOR USBC PD; PACKAGE OUTLINE DRAWING 21-100411; LAND PATTERN DRAWING: 90-100145; PACKAGE CODE: F234A4F-1 FCQFN32 |
| 69     | U2                                                     | -         | 1     | FT2232HL                                                      | FUTURE TECHNOLOGY DEVICES INTL LTD.    | FT2232HL                | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                                                                                                                                           |
| 70     | U3                                                     | -         | 1     | TCK402G                                                       | TOSHIBA                                | TCK402G                 | IC; ASW; CMOS LINEAR INTEGRATED CIRCUIT SILICON MONOLITHIC; WLCSP6                                                                                                                                                                        |
| 71     | U4                                                     | -         | 1     | MAX14611ETD+                                                  | MAXIM                                  | MAX14611ETD+            | IC; TRANS; QUAD BIDIRECTIONAL LOW-VOLTAGE LOGIC LEVEL TRANSLATOR; TDFN14-EP                                                                                                                                                               |
| 72     | U5, U6                                                 | -         | 2     | MAX8512EXK+                                                   | MAXIM                                  | MAX8512EXK              | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                                                                                                                                             |
| 73     | U7                                                     | -         | 1     | MAX77958EWV+T                                                 | MAXIM                                  | MAX77958EWV+T           | EVKIT PART - IC; USB TYPE-C AND USB PD CONTROLLER; WLP30; 0.5MM PITCH; PACKAGE OUTLINE: 21-0069; PACKAGE                                                                                                                                  |
| 74     | Y1                                                     | -         | 1     | 7M-12.000MAAJ                                                 | TXC CORPORATION                        | 12MHZ                   | CODE: W302A3+2 CRYSTAL; SMT; 12MHZ; 18PF; TOL = +/-30PPM;                                                                                                                                                                                 |
| 75     | PCB                                                    | -         | 1     | MAX77985986                                                   | MAXIM                                  | PCB                     | STABILITY = +/-30PPM PCB:MAX77985986 35V;                                                                                                                                                                                                 |
| 76     | C42                                                    |           |       | EEE-FK1V101P                                                  | PANASONIC                              | 100UF                   | CAP; SMT (CASE_F); 100UF; 20%; ALUMINUM-ELECTROLYTIC                                                                                                                                                                                      |
| 77     | C45, C48                                               | DNP DNP   | 0 0   | N/A                                                           | N/A                                    | OPEN                    | CAPACITOR; SMT (0805); OPEN; FORMFACTOR                                                                                                                                                                                                   |
| 78     | R3                                                     | DNP       | 0     | N/A                                                           | N/A                                    | OPEN                    | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                                                                                                          |

## MAX77985/MAX77986 Evaluation Kits

## MAX77985/MAX77986 EV Kit Schematic

<!-- image -->

## MAX77985/MAX77986 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77985/MAX77986 EV Kit Schematic (continued)

<!-- image -->

## MAX77985/MAX77986 Evaluation Kits

## MAX77985/MAX77986 EV Kit Schematic (continued)

<!-- image -->

## MAX77985/MAX77986

## Evaluation Kits

## MAX77985/MAX77986 EV Kit PCB Layout

MAX77985/MAX77986 EV Kit Component Placement GuideTop Silkscreen

<!-- image -->

MAX77985/MAX77986 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

Evaluates: MAX77985/MAX77986 (A/B)

MAX77985/MAX77986 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX77985/MAX77986 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX77985/MAX77986

## Evaluation Kits

## MAX77985/MAX77986 EV Kit PCB Layout

MAX77985/MAX77986 EV Kit PCB Layout-Internal Layer 4

<!-- image -->

MAX77985/MAX77986 EV Kit PCB Layout-Bottom Layer

<!-- image -->

Evaluates: MAX77985/MAX77986 (A/B)

MAX77985/MAX77986 EV Kit PCB Layout-Internal Layer 5

<!-- image -->

MAX77985/MAX77986 EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

│

## MAX77985/MAX77986 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/22           | Initial release                                                                                                                         | -               |
|                 1 | 10/22           | Updated title, MAX77985/MAX77986 EV Kit Bill of Materials, MAX77985/ MAX77986 EV Kit Schematic, and MAX77985/MAX77986 EV Kit PCB Layout | All             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX77985/MAX77986 (A/B)