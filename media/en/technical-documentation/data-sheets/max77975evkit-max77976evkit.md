<!-- lastmod 2022-08-05 -->
## MAX77975/MAX77976 Evaluation Kits

## General Description

The  MAX77975/MAX77976  evaluation  kit  (EV  kit)  is  a fully  assembled  and  tested  printed  circuit  board  (PCB) that  demonstrates the MAX77975/MAX77976 single-cell lithium-ion battery charger.

The  MAX77975/MAX77976  is  for  1S  Li+  battery  applications  and  can  operate  with  a  3.8V  to  19V  input  voltage  with  a  maximum  charging  current  of  3.5/5.5A.  The MAX77975/MAX77976 offers a reverse boost as well as fully integrated low power loss switches to provide small solution size and high efficiency. The EV kit demonstrates the  performance  of  the  MAX77975/MAX77976  charger and  provides  the  convenience  of  evaluating  full  USB Type-C ®  PD solutions with the MAX77958 USB Type-C PD controller. This combination allows fast charging of the battery through the USB Type-C port as well as reverse powering the USB Type-C port with battery OTG mode.

A Micro-B USB cable is included in the package to serve as  the  interface  from  a  USB  port  on  a  Windows  PC  to the slave I 2 C port on MAX77975/MAX77976. Windows ® based  graphical  user  interface  (GUI)  software  provides a  user-friendly  interface  to  exercise  the  features  of  the MAX77975/MAX77976.

## Evaluates: MAX77975/MAX77976/ MAX77958

## Benefits and Features

- High-Efficiency Single-Cell Switching Charger
- Up to 5.5A Charging with MAX77976
- 91.2% Buck Efficiency at 4A, 12V Input
- +28V Absolute Maximum Input Voltage Rating
- 3.8V to 19V Input Operating Voltage Range
- Reverse Boost with Programmable Output Voltage Options Up to 12V
- Charge Status Output for LED
- Push-Button Input for Exiting from Ship Mode
- External Discharge FET Enable Output
- Dedicated Input for Suspend Mode (SUSPND)
- USB Type-C Standalone Controller Support Customizable Firmware
- USB Type-C Version 1.3 and PD 3.0 Compliant
- Sink/Source/DRP Port Support
- PPS Sink Support
- Fast Role Swap Initial Sink Support
- Integrated V CONN  Switch with OCP
- Support Try.Sink
- Support BC1.2 Legacy Charger Detection

Ordering Information appears at end of data sheet.

USB Type-C ®  is a registered trademark of USB Implementers Forum.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

## MAX77975/MAX77976 Evaluation Kits

## Quick Start

Follow this procedure to familiarize yourself with the EV kit.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- MAX77975/MAX77976 evaluation package
-  MAX77975/MAX77976EVKIT# Board
- USB Micro-B cable
- MAX77975/MAX77976 EV kit software (GUI)
- USB Type-C or PD travel adapter (TA)
- Power supply
- Battery simulator
- Multi-meters
- Windows-based PC
- Oscilloscope to monitor CC pin or other signals

## Procedure

The  EV  kits  are  fully  assembled  and  tested.  Follow  the steps  below  to  install  the  EV  kit  software,  make  required hardware connections, and start operation of the kits. The EV kit software can be run without attached hardware. Note that after communication is established, the IC must still be configured correctly for the desired operation mode. Make sure the PC is connected to the internet throughout the process so that the USB driver can be automatically installed.

- 1) Visit www.maximintegrated.com/products/MAX77975\_ MAX77976 under the Design Resources tab to download the latest version of the MAX77975/MAX77976 EV kit GUI software. Save the software to a temporary folder and unpack the zip file .
- 2) Install the EV kit software on your computer by running the MAX77975\_MAX77976GUISetupX.X.X.exe program  inside  the  temporary  folder.  The  program files are copied, and icons are created in the Windows Start menu. The software requires the .NET Frame -work 4.5 or later. If you are connected to the Internet,

## Evaluates: MAX77975/MAX77976/ MAX77958

Windows automatically updates the .NET framework as needed.

- 3) The EV kit software launches automatically after installation, or it can be launched by clicking on its icon in the Windows Start menu.
- 4) Make jumper connections based on the default connection  options  in  Table  1.  Change  it  later  when evaluating  more  features.  For  the  SW1  on  the  EV kit,  set the switch location to the RIGHT so that the MAX77975/MAX77976  I 2 C  lines  are  connected  directly to the MAXUSB communication interface. Later you can switch it to the LEFT so that the MAX77975/ MAX77976 I 2 C lines are connected to MAX77958 I 2 C master.
- 5) Make connections to the EV kit board following guidance as shown in Figure 1. The two main inputs to apply are the battery and the charging adaptor. For quick  start  evaluation,  it  is  suggested  to  use  a  5V power supply at the CHGIN input and a battery voltage greater than 3.6V at the BATT input. The optional voltmeter and ammeter location for testing charger efficiency is indicated in Figure 1. When set up properly with both CHGIN = 5V and BATT = 3.8V input, the SYS voltage is regulated above VBATT by default.
- 6) Connect the EV kit to a USB port on the PC using a USB Micro-B cable.
- 7) Open the GUI software, click Device &gt; Connect . A window pops up showing that a slave address corresponding to MAX77975/MAX77976 and/or MAX77958 has been found. If not, check the connection.
- 8) Start  evaluating  the  part  with  the  GUI  software. Unlock  the  write  protection  and  adjust  the  charger  mode,  the  charging  input  current  limit,  and  the charging current to start evaluating the basic charger features  as  described  in  the Configurations  0-13 Tabs section. Play with the charger mode and other register settings to evaluate the smart power path and more features. Remove the CHGIN input and use the real  travel  adaptor  to  evaluate  charging  the  battery through the USB Type-C port.

Evaluates: MAX77975/MAX77976/

Figure 1. MAX77975/MAX77976 EV Kit Board Connections. The power supply and the USB Type-C adaptor can NOT be applied at the same time.

<!-- image -->

## Table 1. Jumper Connection and Switch Setting Guide

| JUMPER   | DEFAULT CONNECTION   | FEATURE                                                                                                                                                                           |
|----------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J20      | Open                 | Open: No additional capacitor added on SYS. Bridge N jumpers (N can be 1, 2, 3, 4): Add N x 100µF capacitor on SYS.                                                               |
| J21      | Closed               | Open: Disconnect BATTSP from BATTN. Allows BATTSP pin to remote sense at battery positive terminal. Closed: BATTSP sense point is directly at BATTP input terminal on the EV kit. |
| J22      | Closed               | Open: Disconnect BATTSN from BATTN. Allows BATTSN pin to remote sense at battery negative terminal. Closed: BATTSN sense point is directly at BATTN input terminal on the EV kit. |
| J23      | Open                 | Open: Disable external BATT to SYS FET circuit. Closed: Enable the external BATT to SYS FET path to further reduce the BATT to SYS on resistance. Need to connect J18 and J29.    |
| J36      | Open                 | Open: No additional capacitor added on BATT. Closed: 220µF capacitor added on BATT.                                                                                               |

│

Evaluates: MAX77975/MAX77976/

MAX77958

## Table 1. Jumper Connection and Switch Setting Guide (continued)

| JUMPER   | DEFAULT CONNECTION                                                    | FEATURE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|----------|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J5       | 1-2 (ROOM): Closed 3-4 (NTC): Open 5-6 (POT): Open 7-8 (ENTH): Closed | All Open: Disable thermistor. Only 7-8 Closed: Enable thermistor function, connect pin 1 to the thermistor from the battery pack to measure temperature directly at the battery. 1-2, 7-8 Closed: Enable thermistor function, a fixed 10kΩ pullup and pulldown simulate a constant room temperature. 3-4, 7-8 Closed: Enable thermistor with temperature measurement from an NTC resistor installed on EV kit. 5-6, 7-8 Closed: Enable thermistor with temperature measurement simulated with a potentiometer R43. Any other configuration: Do not configure. |
| J18      | Open                                                                  | Open: Disable external BATT to SYS FET circuit. Close: Connect 100kΩ pullup for the external BATT to SYS FET circuit. Need to connect J23 and J29.                                                                                                                                                                                                                                                                                                                                                                                                            |
| J29      | Open                                                                  | Open: Disable external BATT to SYS FET circuit. Close: Connect QBEXT pin to control external BATT to SYS FET circuit. Need to connect J23 and J18.                                                                                                                                                                                                                                                                                                                                                                                                            |
| J37      | Open                                                                  | Open: Default operation. Closed: Force disconnect QBATT.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| J13      | Open                                                                  | Open: Default operation. Closed: Force SUSPEND = 1 to the charger.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| J17      | Open                                                                  | Open: STAT pin LED indicator is disabled. Closed: STAT pin LED indicator is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| J7       | 2-3                                                                   | Open: Do not configure. 1-2: VIO powered through EXTVIO with 1.8V external power supply. 2-3: VIO powered by USB Micro-B port connected to PC.                                                                                                                                                                                                                                                                                                                                                                                                                |
| J9       | Closed                                                                | Open: MAX77958 V CONN is not powered. Closed: MAX77958 V CONN is powered by SYS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| J3       | Closed                                                                | Open: MAX77958 is not connected to VBUS. Closed: MAX77958 is connected to VBUS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| J16      | Closed                                                                | Open: MAX77958 is not powered by SYS. Closed: MAX77958 is powered by SYS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| J4       | Open                                                                  | Open: MAX77958 GPIO4 is not connected to MAX77975/MAX77976 IRQB. Closed: MAX77958 GPIO4 is connected to MAX77975/MAX77976 IRQB. Also, connect 1-2 on J15 for pullup.                                                                                                                                                                                                                                                                                                                                                                                          |
| J15      | Open                                                                  | Open: MAX77975/6 IRQB is not connected. Close 1-2: MAX77975/6 connects to 100kΩ pullup to VIO Close 3-4: IRQB LED indicator is enabled .                                                                                                                                                                                                                                                                                                                                                                                                                      |
| J30      | Open                                                                  | Open: MAX77958 slave address configured by J31, J32. Closed: MAX77958 slave address is selected to be 0b0100110. Do not connect J31, J32.                                                                                                                                                                                                                                                                                                                                                                                                                     |

│

## MAX77975/MAX77976 Evaluation Kits

Evaluates: MAX77975/MAX77976/

MAX77958

## Table 1. Jumper Connection and Switch Setting Guide (continued)

| JUMPER   | DEFAULT CONNECTION   | FEATURE                                                                                                                                                                                                                                                                                            |
|----------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J31      | Open                 | Open: MAX77958 slave address configured by J30, J32. Closed: MAX77958 slave address is selected to be 0b0100111. Do not connect J30, J32.                                                                                                                                                          |
| J32      | Closed               | Open: MAX77958 slave address configured by J30, J31. Closed: MAX77958 slave address is selected to 0b0100101 by connecting the GPIO6 to GND. Default for GUI communication. Do not connect J30, J31.                                                                                               |
| J33      | Open                 | All MAX77958 GPIO pins at J33 are available to connect externally. Some GPIOs have reserved functionality. Refer to the MAX77958 data sheet for details.                                                                                                                                           |
| J34      | Closed               | Open: MAX77958 VIO1 is not powered. Closed: MAX77958 VIO1 is powered.                                                                                                                                                                                                                              |
| J35      | Closed               | Open: MAX77958 VIO2 is not powered. Closed: MAX77958 VIO2 is powered.                                                                                                                                                                                                                              |
| J8       | Open                 | Open: CC1 line is not connected to pullup or pulldown. Must open J8 for testing with real USB Type-C adaptor. Close 1-2: CC1 is connected to RP to simulate a DFP has been connected to CC1. Close 3-4: CC1 is connected to RD to simulate a UFP has been connected to CC1. J11 must be installed. |
| J10      | Open                 | Open: CC2 line is not connected to pullup or pulldown. Must open J8 for testing with real USB Type-C adaptor. Close 1-2: CC2 is connected to RP to simulate a DFP has been connected to CC2. Close 3-4: CC2 is connected to RD to simulate a UFP has been connected to CC2. J11 must be installed. |
| J12      | Open                 | Open: CC1 line is not connected to RA. Must open J8 for testing with real USB Type-C adaptor. Close 1-2: CC1 is connected to RAto simulate a cable when RAis connected. J11 must be installed.                                                                                                     |
| J14      | Open                 | Open: CC2 line is not connected to RA. Must open J8 for testing with real USB Type-C adaptor. Close 1-2: CC2 is connected to RAto simulate a cable when RAis connected. J11 must be installed.                                                                                                     |
| J11      | Closed               | Open: On-board RAand RD are not allowed. Closed: On-board RA and RD are allowed.                                                                                                                                                                                                                   |
| SW1      | 1-2                  | 1-2: MAX77975/MAX77976 I 2 C lines are connected to the host directly. 2-3: MAX77975/MAX77976 I 2 C lines are connected to the MAX77958 I 2 C master.                                                                                                                                              |

Default Options are in Bold

│

## MAX77975/MAX77976 Evaluation Kits

## Detailed Description of Hardware

The GUI allows for quick, easy, and thorough evaluation of the MAX77975/MAX77976 and MAX77958. Every control in the GUI corresponds to a register in the MAX77975/ MAX77976 and MAX77958. Refer to  the Register  Map section  in  the MAX77975/MAX77976 and MAX77958 data sheets for a complete description.

## Software Installation

The  MAX77976EVKIT#  GUI  can  be  downloaded  from Maxim's  website  at http://www.maximintegrated.com/ products/MAX77976 (under the Design Resources tab). Save  the  EV  kit  software  to  a  temporary  folder  and decompress the ZIP file. Run the .EXE file and follow the on-screen instructions to complete the installation.

Evaluates: MAX77975/MAX77976/ MAX77958

## Windows Driver

After connecting the Micro-USB cable between your PC and the EV kit for the first time, wait for Windows to auto -matically install the drivers for the USB to I 2 C Interface.

## Establish Communication

When the device is powered up by CHGIN or BATT input, click Device &gt; Connect to communicate to the IC. Figure 2  shows  the  correct  detection  result.  Click Read  and Close to establish the connection.

Before configuring at any tab, click Read Once to make sure  all  the  displayed  configurations  are  in  sync  with the IC configuration state. Alternatively, click Start Auto Read and set corresponding read frequency to keep this page up to date at all times. Follow the guidance on the MAX77975/MAX77976 IC  data  sheet  for  the  detailed usage of each register. When trying to write to a register with the write button, disable the Auto Read feature.

Figure 2. Device &gt; Connect Resulting Window

<!-- image -->

│

## MAX77975/MAX77976 Evaluation Kits

## Top Tab

The Top tab displays the top-level configuration settings for the IC. Figure 3 shows the format of the Top tab. Information is grouped by function and each is detailed separately. The masked top interrupt is not reflected on the IRQB pin, while the unmasked interrupt is reflected on the IRQB pin. The Top Status Indicator section includes controls for the top-level settings. The software reset command is 0xA5.

Figure 3. MAX77975/MAX77976 Top Tab

<!-- image -->

Evaluates: MAX77975/MAX77976/ MAX77958

## MAX77975/MAX77976

## Evaluation Kits

## Interrupts/Status Tab

The Interrupts/Status tab displays the charger interrupt setting and status for the IC. Figure 4 shows the format of the Interrupts/Status tab. The masked charger interrupt is not reflected on the IRQB pin, while the unmasked interrupt is reflected on the IRQB pin.

Figure 4. MAX77975/MAX77976 Interrupt and Status

<!-- image -->

Evaluates: MAX77975/MAX77976/

MAX77958

## MAX77975/MAX77976

## Evaluation Kits

## Details/STAT Tab

The Details/STAT tab displays the charger detailed status. Figure 5 shows the format of the Details/STAT tab.  The detailed status of the charger helps diagnose the state of the charger operation. Also, the detailed charger status is the basis of the interrupt status. Refer to the description of the CHG\_DTLS00/01/02 register in the data sheet for more details. The tab also controls the STAT LED behavior.

Figure 5. MAX77975/MAX77976 Details and STAT

<!-- image -->

Evaluates: MAX77975/MAX77976/ MAX77958

## MAX77975/MAX77976

## Evaluation Kits

## Configurations 0-13 Tabs

The Configurations 0-13 tabs display the charger configuration settings corresponding to registers CHG\_CFG\_00-13. Figure 6 shows the format of the Configurations 0-3 tab as an example. Notice that the Configuration 1, 2, 3, 4,  and  7  registers  are  locked  by  register  Configuration 6. To unlock, set the Charger Settings Protection field of  Configuration  6  to Unlock  0x3 state,  then  click  the Write button.  Click Read to  make  sure  the  change  is in  place. After the unlock, all configuration registers can be configured. To get started charging a battery with the desired  current  setting,  set Chgin  Input  Current  Limit in  Configuration  9,  then  set Fast  Charging  Current in Configuration 2, then set Mode = 5 in Configuration 0 to switch from buck-only mode to charging mode.

## Test with MAX77958 and USB Type-C Port Interface

## CC Detection Test

- 1) Connect a USB Type-C adapter to the EV kit and see whether the MAX77958 detects SINK and configures input current limit correctly.
- 2) Connect  a  USB Type-C  cable  from  a  Type-C  dualrole port (source preferred) device to see whether the MAX77958 detects CC Pin State Machine Detection and configures input current limit correctly.

Figure 6. MAX77975/MAX77976 Configurations

<!-- image -->

## Evaluates: MAX77975/MAX77976/ MAX77958

## USB Power Delivery Test

- 1) Source capability request function test.
- 2) Connect USB power delivery AC adapter to the EV kit.
- 3) Use a volt-meter to monitor the voltage on VBUS.
- 4) Go to Command &gt; Get SrcCap(0x31) , click on Write to execute the command, the MAX77958 sends this command over the CC pin to the TA, and the TA pro -vides a list of available source capabilities.
- 5) Review the source capabilities and make a note of the desired PDO.
- 6) Go to SrcCap Request (0x32) ,  set the value of the PDO, and press the Write button to change the BUS voltage.

│

## BC1.2 Charger Type Detection

- 1) Plug in the USB Type-A to Type-C cable from a BC1.2 adapter or other legacy port, check the Charger Detection Status under the BC Status tab of the MAX77958 GUI, to see if the USBC detects the correct charger type.

<!-- image -->

Figure 7. CC Status after Connecting the USB Type-C Connector of EV Kit to a Travel Adapter (TA).

Figure 8. Get Source Capability (Get SrcCap) Under the Command Section

<!-- image -->

Figure 9. BC Status after Connecting the USB Type-C Connector of EV Kit to SDP

<!-- image -->

Evaluates: MAX77975/MAX77976/

│

## Detailed Description of Firmware for MAX77958

The firmware of MAX77958 consists of two main parts: the core firmware and customization script.

The  core  firmware  is  compliant  with  the  USB  Type-C 1.3  and  PD  3.0  specifications.  The  customization  script is  based  on  the  application  system,  giving  more  flex -ibility  for  system  design.  It  is  based  on  the  customization  script  update,  which  can  achieve functions such as GPIO  matrix  control,  charger  configuration  initialization, etc.  Future  USB  Type-C  and  PD  specification  changes can be accommodated by updating the MAX77958 core firmware. See the Core Firmware Update section of this data sheet.

See  the MAX77958 Customization  Script Block  Update section  and  the MAX77958 Customization Script and OPCode Command Guide for details about the customization script.

## MAX77958 Customization Script Block Update

The customization script defines the application-specific behavior  of  the  MAX77958.  An  example  is  setting  the input current limit of the charger when USB device detection is completed.

Figure 10. MAX77975/MAX77976 EV Kit GUI Customization Script Block Update

<!-- image -->

Figure 11. Customization Script Update Process Complete

<!-- image -->

## Evaluates: MAX77975/MAX77976/ MAX77958

- 1) Follow the initial test setup to connect the GUI with the MAX77975/MAX77976 EV kit.
- 2) Connect 3.8V to BATT, do not disconnect the EV kit from the PC during the customization script block update.
- 3) Click on Tools in the menu bar and then go to CUS Command Block Update .
- 4) Click  on  the Open button  in  the  pop-up  window  to load the latest customization script, and then click on Start to activate the customization script update.
- 5) Figure 11 shows the customization script update process complete.

## Core Firmware Update

- 1) Follow the initial test setup to connect the GUI with the MAX77975/MAX77976 EV kit.
- 2) Connect 3.8V to BATT and do not disconnect the EV kit from the PC during the firmware update.
- 3) Click  on Tools in  the  menu  bar  and  then  go  to Firmware Update .
- 4) Click  on  the Open button  in  the  pop-up  window  to load the latest firmware. In the file select window, click on the .bin file, and then select Start to activate the firmware update.
- 5) Figure 13 shows the firmware update process complete.

Figure 12. MAX77975/MAX77976 EV Kit GUI Firmware Update

<!-- image -->

Figure 13. Firmware Update Process Complete

<!-- image -->

│

## MAX77975/MAX77976 Evaluation Kits

## Script Automation

A  Python-based  script  system  is  embedded  in  the  GUI software  to  allow  automating  or  configuring  multiple registers  sequentially  with  ease.  To  evaluate  through Python-based commands, click Tools &gt; Run Script File . A Script window pops up, as shown in Figure 14 . The first tab consists of a script editor and an embedded Python terminal interface. The second tab provides a Python I/O console. The help button provides a coding tutorial for this script window. Click the Run button to execute the script. The script feature helps with testing out a sequence of the configuration automatically.

## Evaluates: MAX77975/MAX77976/ MAX77958

## Optional Tools

For I 2 C-communication debugging, more tools are avail -able at Options &gt; CMOD Advanced UI . With the proper test set-up procedure described in this document, these tools do not need to be used to evaluate the MAX77975/ MAX77976. However, other slave devices can be tested with the I 2 C debugging tools and the GUI software when connected  to  the  MAX77975/MAX77976  with  the  SDA and SCL pins. If successful, you can automate multiple slave devices through the script window.

Figure 14. MAX77975/6 Script Window

<!-- image -->

│

## MAX77975/MAX77976 Evaluation Kits

## Table 2. USB Acronyms

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

| PART           | EVALUATES          | TYPE   |
|----------------|--------------------|--------|
| MAX77975EVKIT# | MAX77975, MAX77958 | EV Kit |
| MAX77976EVKIT# | MAX77976, MAX77958 | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX77975/MAX77976/

MAX77958

│

## MAX77975 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                                                         | DNI/DNP   |   QTY | MFGPART #                                                                                                               | MANUFACTURER                                       | VALUE    | DESCRIPTION                                                                                                            |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|-------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------|
|      1 | AVL1, BATSN, BATSP, BATTS, BYPS, CC1, CC2, CHGINS, DN, DN1, DP, DP2, INTB1, SBU1, SBU2, SCL1, SDA1, SYS1, SYSS, VDD1P1, VDD1P8, VIO, VIO1, VIO2 | -         |    24 | 5000                                                                                                                    | KEYSTONE                                           | N/A      | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      2 | BATTN, BATTN1, BATTP, BATTP1, BYP, CHGIN, GND1-GND5, GND7, SYS                                                                                  | -         |    13 | 9020 BUSS                                                                                                               | WEICO WIRE                                         | MAXIMPAD | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWNBUSTYPE-S;20AWG                                  |
|      3 | C1, C15, C18-C21, C23-C29, C36                                                                                                                  | -         |    14 | GRM155R71A104JA01                                                                                                       | MURATA                                             | 0.1µF    | CAPACITOR;SMT (0402); CERAMIC CHIP; 0.1µF; 10V; TOL = 5%; TG = -55°C TO +125°C; TC = X7R                               |
|      4 | C2                                                                                                                                              | -         |     1 | C1608X5R1V225K080AC; GRM188R6YA225KA12                                                                                  | TDK; MURATA                                        | 2.2µF    | CAPACITOR;SMT (0603); CERAMIC CHIP; 2.2µF; 35V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                               |
|      5 | C3, C4, C16, C17, C30-C32                                                                                                                       | -         |     7 | C0402C105K8PAC; CC0402KRX5R6BB105                                                                                       | KEMET; YAGEO                                       | 1µF      | CAPACITOR;SMT (0402); CERAMIC CHIP; 1µF; 10V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                 |
|      6 | C5, C33, C50, C54, C55                                                                                                                          | -         |     5 | CL05A105KO5NNN                                                                                                          | SAMSUNG                                            | 1µF      | CAP;SMT (0402); 1µF; 10%; 16V; X5R; CERAMIC CHIP                                                                       |
|      7 | C6, C10                                                                                                                                         | -         |     2 | C2012X5R1V106K125AC                                                                                                     | TDK                                                | 10µF     | CAPACITOR;SMT (0805); CERAMIC CHIP; 10µF; 35V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                |
|      8 | C7                                                                                                                                              | -         |     1 | CGA2B3X7R1H104K050BB; C1005X7R1H104K050BB; GRM155R71H104KE14; GCM155R71H104KE02; C1005X7R1H104K050BE; UMK105B7104KV-FR; | TDK;TDK; MURATA;MURATA; TDK;TAIYO YUDEN; TDK       | 0.1µF    | CAPACITOR;SMT (0402); CERAMIC CHIP; 0.1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                              |
|      9 | C8, C34                                                                                                                                         | -         |     2 | CL10A226MO7JZNC                                                                                                         | SAMSUNG ELECTRONICS                                | 22µF     | CAP;SMT (0603); 22µF; 20%; 16V; X5R; CERAMIC CHIP                                                                      |
|     10 | C9                                                                                                                                              | -         |     1 | GRM188R61C106MA73                                                                                                       | MURATA                                             | 10µF     | CAPACITOR;SMT (0603); CERAMIC CHIP; 10µF; 16V; TOL = 20%;MODEL = GRM SERIES; TG = -55°C TO +85°C; TC = X5R             |
|     11 | C11, C14, C43, C44                                                                                                                              | -         |     4 | C0402C0G500270JNP; GRM1555C1H270JA01                                                                                    | VENKEL LTD.; MURATA                                | 27PF     | CAPACITOR; SMT; 0402; CERAMIC; 27pF; 50V; 5%; C0G; -55°C to + 125°C; 0 ± 30PPM/°C                                      |
|     12 | C12, C13, C22                                                                                                                                   | -         |     3 | ZRB15XR61A475ME01; CL05A475MP5NRN; GRM155R61A475MEAA; C1005X5R1A475M050BC                                               | MURATA; SAMSUNG; MURATA;TDK                        | 4.7µF    | CAPACITOR;SMT (0402); CERAMIC CHIP; 4.7µF; 10V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                               |
|     13 | C35                                                                                                                                             | -         |     1 | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV                                   | KEMET; MURATA;TDK; SAMSUNG ELECTRONIC; TAIYO YUDEN | 0.01µF   | CAPACITOR;SMT (0402); CERAMIC CHIP; 0.01µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                             |
|     14 | C37-C40                                                                                                                                         | -         |     4 | EMK325ABJ107MM                                                                                                          | TAIYO YUDEN                                        | 100µF    | CAPACITOR;SMT (1210); CERAMIC CHIP; 100µF; 16V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                               |
|     15 | C41                                                                                                                                             | -         |     1 | GRM32ER60J227ME05                                                                                                       | MURATA                                             | 220µF    | CAP;SMT (1210); 220µF; 20%; 6.3V; X5R; CERAMIC CHIP                                                                    |
|     16 | C42                                                                                                                                             | DNI       |     1 | EEE-FK1V101P                                                                                                            | PANASONIC                                          | 100µF    | CAPACITOR;SMT (CASE_F); ALUMINUM-ELECTROLYTIC; 100µF; 35V; TOL = 20%; TG = -55°C TO +105°C; AUTO                       |
|     17 | C46                                                                                                                                             | -         |     1 | GRM188R71A225KE15; CL10B225KP8NNN; C1608X7R1A225K080AC; C0603C225K8RAC                                                  | MURATA; SAMSUNG; TDK;KEMET                         | 2.2µF    | CAPACITOR;SMT (0603); CERAMIC CHIP; 2.2µF; 10V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                              |
|     18 | C47, C51                                                                                                                                        | -         |     2 | ANY                                                                                                                     | ANY                                                | 1µF      | CAPACITOR;SMT (0402); CERAMIC CHIP; 1µF; 6.3V; TOL = 10%;MODEL = ; TG = -55°C TO +85°C; TC = X5R;                      |

Evaluates: MAX77975/MAX77976/

MAX77958

## MAX77975 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                     | DNI/DNP   |   QTY | MFGPART #           | MANUFACTURER                | VALUE           | DESCRIPTION                                                                                                              |
|--------|-------------------------------------------------------------|-----------|-------|---------------------|-----------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------|
|     19 | C52                                                         | -         |     1 | C1005X5R1V105K050BC | TDK                         | 1µF             | CAPACITOR;SMT (0402); CERAMIC CHIP; 1µF; 35V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                   |
|     20 | D1                                                          | -         |     1 | PTVS20VS1UR         | NEXPERIA                    | 20V             | DIODE; TVS;SMT (SOD-123W);VRM = 20V; IPP = 12.3A                                                                         |
|     21 | D3                                                          | -         |     1 | SD2114S040S8R0      | AVX                         | SD2114S040S8R0  | DIODE; SCH;SMB (DO-214AA); PIV = 40V; IF = 8A                                                                            |
|     22 | D8, D9                                                      | -         |     2 | PESD4V0W1BSF        | NEXPERIA                    | 4V              | EVKIT PART-DIODE; TVS;SMT (SOD962-2); VRM = ± 4V; IPP = N/A                                                              |
|     23 | DISQBAT, EXTSM, IRQB, IRQB53, QBEXT, SCL, SDA, STAT, SUSPND | -         |     9 | 5002                | KEYSTONE                    | N/A             | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;              |
|     24 | DS1-DS3                                                     | -         |     3 | LTST-C190CKT        | LITE-ON ELECTRONICS INC.    | LTST-C190CKT    | DIODE; LED; STANDARD; RED;SMT (0603); PIV = 5.0V; IF = 0.04A; -55°C TO +85°C                                             |
|     25 | EXTVIO, PVDD,VDD                                            | -         |     3 | 5010                | KEYSTONE                    | N/A             | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; RED;PHOSPHOR BRONZE WIRE SIL;               |
|     26 | GNDS, PGNDS, SYSGNDS                                        | -         |     3 | 5001                | KEYSTONE                    | N/A             | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     27 | J1                                                          | -         |     1 | 10118193-0001LF     | FCICONNECT                  | 10118193-0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                  |
|     28 | J2                                                          | -         |     1 | 12401832E402A       | AMPHENOL                    | 12401832E402A   | CONNECTOR; FEMALE; SMT; USB TYPE C CONNECTOR; RIGHT ANGLE; DUAL ROW; 24PINS                                              |
|     29 | J3, J4, J9, J11, J12, J14, J16, J30-J32, J34, J35           | -         |    12 | TSW-102-07-T-S      | SAMTEC                      | TSW-102-07-T-S  | CONNECTOR;THROUGH HOLE;TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55°C TO +105°C                                          |
|     30 | J5, J20                                                     | -         |     2 | PBC04DAAN           | SULLINS ELECTRONICS CORP.   | PBC04DAAN       | CONNECTOR; MALE;THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65°C TO +125°C                                                |
|     31 | J7, J8, J10                                                 | -         |     3 | PEC03SAAN           | SULLINS ELECTRONICS CORP.   | PEC03SAAN       | EVKIT PART-CONNECTOR; MALE;THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65°C TO +125°C;                                    |
|     32 | J13, J17, J18, J21, J22, J29, J36, J37                      | -         |     8 | PBC02SAAN           | SULLINS ELECTRONICS CORP.   | PBC02SAAN       | CONNECTOR; MALE;THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                 |
|     33 | J15, J23                                                    | -         |     2 | PBC02DAAN           | SULLINS ELECTRONICS CORP.   | PBC02DAAN       | CONNECTOR; MALE;THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                 |
|     34 | J33                                                         | -         |     1 | PBC09SAAN           | SULLINS ELECTRONICS CORP.   | PBC09SAAN       | CONNECTOR; MALE;THROUGH HOLE; BREAKAWAY; STRAIGHT; 9PINS; -65°C TO +125°C                                                |
|     35 | L1                                                          | -         |     1 | IHLP2020BZER1R0M11  | VISHAY DALE                 | 1µH             | INDUCTOR; SMT; IHLP SERIES; 1µH; TOL = ± 20%; 7A; -55°C TO +125°C                                                        |
|     36 | L2-L4                                                       | -         |     3 | BLM18AG601SN1       | MURATA                      | 600             | INDUCTOR;SMT (0603); FERRITE-BEAD; 600; TOL = ±; 0.5A                                                                    |
|     37 | MH1-MH4                                                     | -         |     4 | 9032                | KEYSTONE                    | 9032            | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NOTHREAD; M3.5; 5/8IN; NYLON                                                 |
|     38 | MISC1                                                       | -         |     1 | AK67421-1-R         | ASSMANN                     | AK67421-1-R     | CONNECTOR; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; STRAIGHT; 5PINS-4PINS               |
|     39 | Q1, Q2                                                      | -         |     2 | AON6512             | ALPHA & OMEGA SEMICONDUCTOR | AON6512         | TRAN; N-CHANNEL ALPHAMOS; NCH; DFN8-EP; PD-(83W); I-(150A); V-(30V)                                                      |
|     40 | R1, R7, R14-R16, R18, R22, R32-R34, R44                     | -         |    11 | ERJ-2GE0R00         | PANASONIC                   | 0               | RESISTOR; 0402; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                                                      |

## MAX77975 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                 | DNI/DNP   |   QTY | MFGPART #                                         | MANUFACTURER                          | VALUE   | DESCRIPTION                                                              |
|--------|-------------------------|-----------|-------|---------------------------------------------------|---------------------------------------|---------|--------------------------------------------------------------------------|
|     41 | R2, R42                 | -         |     2 | CRCW060310K0FK; ERJ-3EKF1002                      | VISHAY DALE; PANASONIC                | 10K     | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                       |
|     42 | R4, R6                  | -         |     2 | ERJ-2RKF6493                                      | PANASONIC                             | 649K    | RESISTOR; 0402; 649KΩ; 1%; 100PPM; 0.1W; THICK FILM                      |
|     43 | R5, R64                 | -         |     2 | ERJ-2RKF1203                                      | PANASONIC                             | 120K    | RESISTOR; 0402; 120KΩ; 1%; 100PPM; 0.1W; THICK FILM                      |
|     44 | R8                      | -         |     1 | CRCW040212K0FK; MCR01MZPF1202                     | VISHAY DALE; ROHM SEMICONDUCTOR       | 12K     | RESISTOR, 0402, 12KΩ, 1%, 100PPM, 0.0625W, THICK FILM                    |
|     45 | R9, R13                 | -         |     2 | ERJ-2RKF27R0X; RC0402FR-0727RL; CRCW040227R0FK    | PANASONIC; YAGEO PHICOMP; VISHAY DALE | 27      | RESISTOR, 0402, 27Ω, 1%, 100PPM, 0.0625W, THICK FILM                     |
|     46 | R10                     | -         |     1 | CRCW04021M00FK                                    | VISHAY DALE                           | 1M      | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                      |
|     47 | R11, R36, R37, R45      | -         |     4 | CRCW04021K00FK; RC0402FR-071KL; MCR01MZPF1001     | VISHAY DALE; YAGEO PHICOMP; ROHM SEMI | 1K      | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                      |
|     48 | R12, R21                | -         |     2 | CRCW04022K20JN                                    | VISHAY DALE                           | 2.2K    | RESISTOR; 0402; 2.2KΩ; 5%; 200PPM; 0.063W; METAL FILM                    |
|     49 | R17                     | -         |     1 | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE; YAGEO; VISHAY DALE       | 47.5K   | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM                   |
|     50 | R19, R20, R23, R31, R41 | -         |     5 | CRCW0402100KFK; RC0402FR-07100KL                  | VISHAY;YAGEO                          | 100K    | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                    |
|     51 | R24, R38                | -         |     2 | CRCW040210R0FK; 9C04021A10R0FL                    | VISHAY DALE;YAGEO                     | 10      | RESISTOR; 0402; 10Ω; 1%; 100PPM; 0.0625W; THICK FILM                     |
|     52 | R25, R29                | -         |     2 | ERJ-2RKF5602                                      | PANASONIC                             | 56K     | RESISTOR, 0402, 56KΩ, 1%, 100PPM, 0.0625W, THICK FILM                    |
|     53 | R26, R48                | -         |     2 | CRCW0402200KFK; RF73H1ELTP2003                    | VISHAY DALE; KOA SPEER ELECTRONICS    | 200K    | RESISTOR; 0402; 200K; 1%; 100PPM; 0.0625W; THICK FILM                    |
|     54 | R27, R28                | -         |     2 | CRCW04024K70FK; MCR01MZPF4701                     | VISHAY DALE; ROHM SEMICONDUCTOR       | 4.7K    | RESISTOR, 0402, 4.7KΩ, 1%, 100PPM, 0.0625W, THICK FILM                   |
|     55 | R30                     | -         |     1 | CRCW0402169KFK                                    | VISHAY DALE                           | 169K    | RESISTOR; 0402; 169KΩ; 1%; 100PPM; 0.063W; THICK FILM                    |
|     56 | R35                     | -         |     1 | CRCW0402470RFK                                    | VISHAY DALE                           | 470     | RESISTOR, 0402, 470Ω, 1%, 100PPM, 0.0625W, THICK FILM                    |
|     57 | R39, R40                | -         |     2 | CRCW04025K10FK                                    | VISHAY DALE                           | 5.1K    | RESISTOR; 0402; 5.1K; 1%; 100PPM; 0.0625W; THICK FILM                    |
|     58 | R43                     | -         |     1 | 3296Y-1-104LF                                     | BOURNS                                | 100K    | RESISTOR;THROUGH HOLE-RADIAL LEAD; 3296 SERIES; 100KΩ; 10%; 100PPM; 0.5W |
|     59 | R49, R50, R59, R60      | -         |     4 | CRCW06030000Z0EAHP                                | VISHAY DRALORIC                       | 0       | RESISTOR; 0603; 0Ω; 0%; JUMPER; 0.25W; THICK FILM                        |
|     60 | R51, R52                | -         |     2 | CRCW04021R00FK                                    | VISHAY DALE                           | 1       | RESISTOR, 0402, 1Ω, 1%, 100PPM, 0.0625W, THICK FILM                      |

│

Evaluates: MAX77975/MAX77976/

MAX77958

## MAX77975 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES   | DNI/DNP   |   QTY | MFGPART #                       | MANUFACTURER                        | VALUE         | DESCRIPTION                                                                                                                                                                              |
|--------|-----------|-----------|-------|---------------------------------|-------------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 61     | R55, R57  | -         |     2 | CRCW04022K20FK; RC0402FR-072K2L | VISHAY DALE; YAGEO PHICOMP          | 2.2K          | RESISTOR, 0402, 2.2KΩ, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                   |
| 62     | R66, R67  | -         |     2 | CRCW0402330KFK                  | VISHAY DALE                         | 330K          | RESISTOR, 0402, 330KΩ, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                   |
| 63     | RT1       | -         |     1 | NTCG163JF103F                   | TDK                                 | 10K           | THERMISTOR;SMT (0603); THICK FILM (NICKEL PLATED); 10K; TOL = ± 1%                                                                                                                       |
| 64     | SW1       | -         |     1 | CL-SB-22C-02                    | COPAL ELECTRONICS INC.              | CL-SB-22C-02  | SWITCH; DPDT;THROUGH HOLE; 12V; 0.2A; ON-ON; RCOIL = 0.05Ω; RINSULATION = 10MΩ; COPAL ELECTRONICS INC.; -40°C TO +85°C                                                                   |
| 65     | SW2       | -         |     1 | EVQ-Q2K03W                      | PANASONIC                           | EVQ-Q2K03W    | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL = Ω; RINSULATION = Ω; PANASONIC                                                                                                 |
| 66     | U1        | -         |     1 | MAX77975                        | MAXIM                               | MAX77975      | EVKIT PART - IC; MAX77975; 19V INPUT; 5.5A BUCK CHARGER FOR 1S LI-ION BATTERY; PACK; PACKAGE OUTLINE DRAWING 21-100411; LAND PATTERN DRAWING: 90-100145; PACKAGE CODE: F234A4F-1 FCQFN32 |
| 67     | U2        | -         |     1 | FT2232HL                        | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT2232HL      | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                                                                                          |
| 68     | U3        | -         |     1 | TCK402G                         | TOSHIBA                             | TCK402G       | IC; ASW; CMOSLINEAR INTEGRATED CIRCUIT SILICON MONOLITHIC; WLCSP6                                                                                                                        |
| 69     | U4        | -         |     1 | MAX14611ETD+                    | MAXIM                               | MAX14611ETD+  | IC; TRANS;QUAD BIDIRECTIONAL LOW-VOLTAGE LOGIC LEVEL TRANSLATOR; TDFN14-EP                                                                                                               |
| 70     | U5, U6    | -         |     2 | MAX8512EXK+                     | MAXIM                               | MAX8512EXK    | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                                                                                            |
| 71     | U7        | -         |     1 | MAX77958EWV+T                   | MAXIM                               | MAX77958EWV+T | EVKIT PART - IC; USB TYPE-C AND USB PD CONTROLLER; WLP30; 0.5MM PITCH; PACKAGE OUTLINE: 21-0069; PACKAGE CODE: W302A3+2                                                                  |
| 72     | Y1        | -         |     1 | 7M-12.000MAAJ                   | TXC CORPORATION                     | 12MHZ         | CRYSTAL; SMT; 18PF; 12MHZ; ± 30PPM; ±30PPM                                                                                                                                               |
| 73     | PCB       | -         |     1 | MAX77976                        | MAXIM                               | PCB           | PCB:MAX77976                                                                                                                                                                             |
| 74     | D2        | DNP       |     0 | ESD9X3.3ST5G                    | ONSEMICONDUCTOR                     | 3.3V          | DIODE; TVS;SMT (SOD-923);VRM = 3.3V; IPP = 9.8A                                                                                                                                          |
| 75     | R3        | DNP       |     0 | N/A                             | N/A                                 | OPEN          | RESISTOR; 0402; OPEN;FORMFACTOR                                                                                                                                                          |
| TOTAL  |           |           |   219 |                                 |                                     |               |                                                                                                                                                                                          |

│

Evaluates: MAX77975/MAX77976/

MAX77958

## MAX77976 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                                                         | DNI/DNP   |   QTY | MFG PART #                                                                                                                                   | MANUFACTURER                                       | VALUE    | DESCRIPTION                                                                                                            |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------|
|      1 | AVL1, BATSN, BATSP, BATTS, BYPS, CC1, CC2, CHGINS, DN, DN1, DP, DP2, INTB1, SBU1, SBU2, SCL1, SDA1, SYS1, SYSS, VDD1P1, VDD1P8, VIO, VIO1, VIO2 | -         |    24 | 5000                                                                                                                                         | KEYSTONE                                           | N/A      | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      2 | BATTN, BATTN1, BATTP, BATTP1, BYP, CHGIN, GND1-GND5, GND7, SYS                                                                                  | -         |    13 | 9020 BUSS                                                                                                                                    | WEICO WIRE                                         | MAXIMPAD | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                               |
|      3 | C1, C15, C18-C21, C23-C29, C36                                                                                                                  | -         |    14 | GRM155R71A104JA01                                                                                                                            | MURATA                                             | 0.1µF    | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 10V; TOL = 5%; TG = -55°C TO +125°C; TC = X7R                              |
|      4 | C2                                                                                                                                              | -         |     1 | C1608X5R1V225K080AC; GRM188R6YA225KA12                                                                                                       | TDK;MURATA                                         | 2.2µF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2µF; 35V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                              |
|      5 | C3, C4, C16, C17, C30-C32                                                                                                                       | -         |     7 | C0402C105K8PAC; CC0402KRX5R6BB105                                                                                                            | KEMET;YAGEO                                        | 1µF      | CAPACITOR; SMT (0402); CERAMIC CHIP; 1µF; 10V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                |
|      6 | C5, C33, C50, C54, C55                                                                                                                          | -         |     5 | CL05A105KO5NNN                                                                                                                               | SAMSUNG                                            | 1µF      | CAP; SMT (0402); 1µF; 10%; 16V; X5R; CERAMIC CHIP                                                                      |
|      7 | C6, C10                                                                                                                                         | -         |     2 | C2012X5R1V106K125AC                                                                                                                          | TDK                                                | 10µF     | CAPACITOR; SMT (0805); CERAMIC CHIP; 10µF; 35V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                               |
|      8 | C7                                                                                                                                              | -         |     1 | CGA2B3X7R1H104K050BB; C1005X7R1H104K050BB; GRM155R71H104KE14; GCM155R71H104KE02; C1005X7R1H104K050BE; UMK105B7104KV-FR; CGA2B3X7R1H104K050BE | TDK;TDK; MURATA; MURATA;TDK; TAIYO YUDEN; TDK      | 0.1µF    | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                             |
|      9 | C8, C34                                                                                                                                         | -         |     2 | CL10A226MO7JZNC                                                                                                                              | SAMSUNG ELECTRONICS                                | 22µF     | CAP; SMT (0603); 22µF; 20%; 16V; X5R; CERAMIC CHIP                                                                     |
|     10 | C9                                                                                                                                              | -         |     1 | GRM188R61C106MA73                                                                                                                            | MURATA                                             | 10µF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 10µF; 16V; TOL = 20%; MODEL= GRM SERIES; TG = -55°C TO +85°C; TC = X5R            |
|     11 | C11, C14, C43, C44                                                                                                                              | -         |     4 | C0402C0G500270JNP; GRM1555C1H270JA01                                                                                                         | VENKEL LTD.; MURATA                                | 27PF     | CAPACITOR; SMT; 0402; CERAMIC; 27pF; 50V; 5%; C0G; -55°C to + 125°C; 0 ± 30PPM/°C                                      |
|     12 | C12, C13, C22                                                                                                                                   | -         |     3 | ZRB15XR61A475ME01; CL05A475MP5NRN; GRM155R61A475MEAA; C1005X5R1A475M050BC                                                                    | MURATA; SAMSUNG; MURATA;TDK                        | 4.7µF    | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7µF; 10V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                              |
|     13 | C35                                                                                                                                             | -         |     1 | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV                                                        | KEMET; MURATA;TDK; SAMSUNG ELECTRONIC; TAIYO YUDEN | 0.01µF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                            |
|     14 | C37-C40                                                                                                                                         | -         |     4 | EMK325ABJ107MM                                                                                                                               | TAIYO YUDEN                                        | 100µF    | CAPACITOR; SMT (1210); CERAMIC CHIP; 100µF; 16V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                              |
|     15 | C41                                                                                                                                             | -         |     1 | GRM32ER60J227ME05                                                                                                                            | MURATA                                             | 220µF    | CAP; SMT (1210); 220UF; 20%; 6.3V; X5R; CERAMIC CHIP                                                                   |
|     16 | C42                                                                                                                                             | DNI       |     1 | EEE-FK1V101P                                                                                                                                 | PANASONIC                                          | 100µF    | CAPACITOR; SMT (CASE_F); ALUMINUM-ELECTROLYTIC; 100µF; 35V; TOL = 20%; TG = -55°C TO +105°C; AUTO                      |
|     17 | C46                                                                                                                                             | -         |     1 | GRM188R71A225KE15; CL10B225KP8NNN; C1608X7R1A225K080AC; C0603C225K8RAC                                                                       | MURATA; SAMSUNG;TDK; KEMET                         | 2.2µF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2µF; 10V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                             |
|     18 | C47, C51                                                                                                                                        | -         |     2 | ANY                                                                                                                                          | ANY                                                | 1µF      | CAPACITOR; SMT (0402); CERAMIC CHIP; 1µF; 6.3V; TOL = 10%; MODEL= ; TG = -55°C TO +85°C; TC = X5R;                     |
|     19 | C52                                                                                                                                             | -         |     1 | C1005X5R1V105K050BC                                                                                                                          | TDK                                                | 1µF      | CAPACITOR; SMT (0402); CERAMIC CHIP; 1µF; 35V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                |
|     20 | D1                                                                                                                                              | -         |     1 | PTVS20VS1UR                                                                                                                                  | NEXPERIA                                           | 20V      | DIODE; TVS; SMT (SOD-123W); VRM = 20V; IPP = 12.3A                                                                     |

Evaluates: MAX77975/MAX77976/

MAX77958

## MAX77976 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                     | DNI/DNP   |   QTY | MFG PART #                                     | MANUFACTURER                          | VALUE           | DESCRIPTION                                                                                                              |
|--------|-------------------------------------------------------------|-----------|-------|------------------------------------------------|---------------------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------|
|     21 | D3                                                          | -         |     1 | SD2114S040S8R0                                 | AVX                                   | SD2114S040S8R0  | DIODE; SCH; SMB (DO-214AA); PIV = 40V; IF = 8A                                                                           |
|     22 | D8, D9                                                      | -         |     2 | PESD4V0W1BSF                                   | NEXPERIA                              | 4V              | EVKIT PART-DIODE; TVS; SMT (SOD962-2); VRM = ± 4V; IPP = N/A                                                             |
|     23 | DISQBAT, EXTSM, IRQB, IRQB53, QBEXT, SCL, SDA, STAT, SUSPND | -         |     9 | 5002                                           | KEYSTONE                              | N/A             | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;              |
|     24 | DS1-DS3                                                     | -         |     3 | LTST-C190CKT                                   | LITE-ON ELECTRONICS INC.              | LTST-C190CKT    | DIODE; LED; STANDARD; RED; SMT (0603); PIV = 5.0V; IF = 0.04A; -55°C TO +85°C                                            |
|     25 | EXTVIO, PVDD, VDD                                           | -         |     3 | 5010                                           | KEYSTONE                              | N/A             | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;              |
|     26 | GNDS, PGNDS, SYSGNDS                                        | -         |     3 | 5001                                           | KEYSTONE                              | N/A             | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     27 | J1                                                          | -         |     1 | 10118193-0001LF                                | FCICONNECT                            | 10118193-0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                  |
|     28 | J2                                                          | -         |     1 | 12401832E402A                                  | AMPHENOL                              | 12401832E402A   | CONNECTOR; FEMALE; SMT; USB TYPE C CONNECTOR; RIGHT ANGLE; DUAL ROW; 24PINS                                              |
|     29 | J3, J4, J9, J11, J12, J14, J16, J30-J32, J34, J35           | -         |    12 | TSW-102-07-T-S                                 | SAMTEC                                | TSW-102-07-T-S  | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55°C TO +105°C                                        |
|     30 | J5, J20                                                     | -         |     2 | PBC04DAAN                                      | SULLINS ELECTRONICS CORP.             | PBC04DAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65°C TO +125°C                                               |
|     31 | J7, J8, J10                                                 | -         |     3 | PEC03SAAN                                      | SULLINS ELECTRONICS CORP.             | PEC03SAAN       | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65°C TO +125°C;                                   |
|     32 | J13, J17, J18, J21, J22, J29, J36, J37                      | -         |     8 | PBC02SAAN                                      | SULLINS ELECTRONICS CORP.             | PBC02SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                |
|     33 | J15, J23                                                    | -         |     2 | PBC02DAAN                                      | SULLINS ELECTRONICS CORP.             | PBC02DAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                |
|     34 | J33                                                         | -         |     1 | PBC09SAAN                                      | SULLINS ELECTRONICS CORP.             | PBC09SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 9PINS; -65°C TO +125°C                                               |
|     35 | L1                                                          | -         |     1 | IHLP2020BZER1R0M11                             | VISHAY DALE                           | 1UH             | INDUCTOR; SMT; IHLP SERIES; 1µH; TOL = ± 20%; 7A; -55°C TO +125°C                                                        |
|     36 | L2-L4                                                       | -         |     3 | BLM18AG601SN1                                  | MURATA                                | 600             | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL = ± ; 0.5A                                                                  |
|     37 | MH1-MH4                                                     | -         |     4 | 9032                                           | KEYSTONE                              | 9032            | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                |
|     38 | MISC1                                                       | -         |     1 | AK67421-1-R                                    | ASSMANN                               | AK67421-1-R     | CONNECTOR; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; STRAIGHT; 5PINS-4PINS               |
|     39 | Q1, Q2                                                      | -         |     2 | AON6512                                        | ALPHA & OMEGA SEMICONDUCTOR           | AON6512         | TRAN; N-CHANNEL ALPHAMOS; NCH; DFN8-EP; PD-(83W); I-(150A); V-(30V)                                                      |
|     40 | R1, R7, R14-R16, R18, R22, R32-R34, R44                     | -         |    11 | ERJ-2GE0R00                                    | PANASONIC                             | 0               | RESISTOR; 0402; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                                                      |
|     41 | R2, R42                                                     | -         |     2 | CRCW060310K0FK; ERJ-3EKF1002                   | VISHAY DALE; PANASONIC                | 10K             | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                       |
|     42 | R4, R6                                                      | -         |     2 | ERJ-2RKF6493                                   | PANASONIC                             | 649K            | RESISTOR; 0402; 649KΩ; 1%; 100PPM; 0.1W; THICK FILM                                                                      |
|     43 | R5, R64                                                     | -         |     2 | ERJ-2RKF1203                                   | PANASONIC                             | 120K            | RESISTOR; 0402; 120KΩ; 1%; 100PPM; 0.1W; THICK FILM                                                                      |
|     44 | R8                                                          | -         |     1 | CRCW040212K0FK; MCR01MZPF1202                  | VISHAY DALE; ROHM SEMICONDUCTOR       | 12K             | RESISTOR, 0402, 12KΩ, 1%, 100PPM, 0.0625W, THICK FILM                                                                    |
|     45 | R9, R13                                                     | -         |     2 | ERJ-2RKF27R0X; RC0402FR-0727RL; CRCW040227R0FK | PANASONIC; YAGEO PHICOMP; VISHAY DALE | 27              | RESISTOR, 0402, 27Ω, 1%, 100PPM, 0.0625W, THICK FILM                                                                     |

## MAX77976 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                 | DNI/DNP   |   QTY | MFG PART #                                        | MANUFACTURER                          | VALUE         | DESCRIPTION                                                                                                                                                                              |
|--------|-------------------------|-----------|-------|---------------------------------------------------|---------------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 46     | R10                     | -         |     1 | CRCW04021M00FK                                    | VISHAY DALE                           | 1M            | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                      |
| 47     | R11, R36, R37, R45      | -         |     4 | CRCW04021K00FK; RC0402FR-071KL; MCR01MZPF1001     | VISHAY DALE; YAGEO PHICOMP; ROHM SEMI | 1K            | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                      |
| 48     | R12, R21                | -         |     2 | CRCW04022K20JN                                    | VISHAY DALE                           | 2.2K          | RESISTOR; 0402; 2.2KΩ; 5%; 200PPM; 0.063W; METAL FILM                                                                                                                                    |
| 49     | R17                     | -         |     1 | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE; YAGEO; VISHAY DALE       | 47.5K         | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                   |
| 50     | R19, R20, R23, R31, R41 | -         |     5 | CRCW0402100KFK; RC0402FR-07100KL                  | VISHAY;YAGEO                          | 100K          | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                    |
| 51     | R24, R38                | -         |     2 | CRCW040210R0FK; 9C04021A10R0FL                    | VISHAY DALE;YAGEO                     | 10            | RESISTOR; 0402; 10Ω; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                     |
| 52     | R25, R29                | -         |     2 | ERJ-2RKF5602                                      | PANASONIC                             | 56K           | RESISTOR, 0402, 56KΩ, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                    |
| 53     | R26, R48                | -         |     2 | CRCW0402200KFK; RF73H1ELTP2003                    | VISHAY DALE; KOA SPEER ELECTRONICS    | 200K          | RESISTOR; 0402; 200K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                    |
| 54     | R27, R28                | -         |     2 | CRCW04024K70FK; MCR01MZPF4701                     | VISHAY DALE; ROHM SEMICONDUCTOR       | 4.7K          | RESISTOR, 0402, 4.7KΩ, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                   |
| 55     | R30                     | -         |     1 | CRCW0402169KFK                                    | VISHAY DALE                           | 169K          | RESISTOR; 0402; 169KΩ; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                                    |
| 56     | R35                     | -         |     1 | CRCW0402470RFK                                    | VISHAY DALE                           | 470           | RESISTOR, 0402, 470Ω, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                    |
| 57     | R39, R40                | -         |     2 | CRCW04025K10FK                                    | VISHAY DALE                           | 5.1K          | RESISTOR; 0402; 5.1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                    |
| 58     | R43                     | -         |     1 | 3296Y-1-104LF                                     | BOURNS                                | 100K          | RESISTOR; THROUGH HOLE-RADIAL LEAD; 3296 SERIES; 100KΩ; 10%; 100PPM; 0.5W                                                                                                                |
| 59     | R49, R50, R59, R60      | -         |     4 | CRCW06030000Z0EAHP                                | VISHAY DRALORIC                       | 0             | RESISTOR; 0603; 0Ω; 0%; JUMPER; 0.25W; THICK FILM                                                                                                                                        |
| 60     | R51, R52                | -         |     2 | CRCW04021R00FK                                    | VISHAY DALE                           | 1             | RESISTOR, 0402, 1Ω, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                      |
| 61     | R55, R57                | -         |     2 | CRCW04022K20FK; RC0402FR-072K2L                   | VISHAY DALE; YAGEO PHICOMP            | 2.2K          | RESISTOR, 0402, 2.2KΩ, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                   |
| 62     | R66, R67                | -         |     2 | CRCW0402330KFK                                    | VISHAY DALE                           | 330K          | RESISTOR, 0402, 330KΩ, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                   |
| 63     | RT1                     | -         |     1 | NTCG163JF103F                                     | TDK                                   | 10K           | THERMISTOR; SMT (0603); THICK FILM (NICKEL PLATED); 10K; TOL = ± 1%                                                                                                                      |
| 64     | SW1                     | -         |     1 | CL-SB-22C-02                                      | COPAL ELECTRONICS INC.                | CL-SB-22C-02  | SWITCH; DPDT; THROUGH HOLE; 12V; 0.2A; ON-ON; RCOIL = 0.05Ω; RINSULATION = 10MΩ; COPAL ELECTRONICS INC.; -40°C TO +85°C                                                                  |
| 65     | SW2                     | -         |     1 | EVQ-Q2K03W                                        | PANASONIC                             | EVQ-Q2K03W    | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL = Ω; RINSULATION = Ω; PANASONIC                                                                                                 |
| 66     | U1                      | -         |     1 | MAX77976                                          | MAXIM                                 | MAX77976      | EVKIT PART - IC; MAX77976; 19V INPUT; 5.5A BUCK CHARGER FOR 1S LI-ION BATTERY; PACK; PACKAGE OUTLINE DRAWING 21-100411; LAND PATTERN DRAWING: 90-100145; PACKAGE CODE: F234A4F-1 FCQFN32 |
| 67     | U2                      | -         |     1 | FT2232HL                                          | FUTURE TECHNOLOGY DEVICES INTL LTD.   | FT2232HL      | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                                                                                          |
| 68     | U3                      | -         |     1 | TCK402G                                           | TOSHIBA                               | TCK402G       | IC; ASW;CMOS LINEAR INTEGRATED CIRCUIT SILICON MONOLITHIC; WLCSP6                                                                                                                        |
| 69     | U4                      | -         |     1 | MAX14611ETD+                                      | MAXIM                                 | MAX14611ETD+  | IC; TRANS; QUAD BIDIRECTIONAL LOW-VOLTAGE LOGIC LEVEL TRANSLATOR; TDFN14-EP                                                                                                              |
| 70     | U5, U6                  | -         |     2 | MAX8512EXK+                                       | MAXIM                                 | MAX8512EXK    | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                                                                                            |
| 71     | U7                      | -         |     1 | MAX77958EWV+T                                     | MAXIM                                 | MAX77958EWV+T | EVKIT PART - IC; USB TYPE-C AND USB PD CONTROLLER; WLP30; 0.5MM PITCH; PACKAGE OUTLINE: 21-0069; PACKAGE CODE: W302A3+2                                                                  |
| 72     | Y1                      | -         |     1 | 7M-12.000MAAJ                                     | TXC CORPORATION                       | 12MHZ         | CRYSTAL; SMT; 18PF; 12MHZ; ± 30PPM; ±30PPM                                                                                                                                               |
| 73     | PCB                     | -         |     1 | MAX77976                                          | MAXIM                                 | PCB           |                                                                                                                                                                                          |
| 74     | D2                      | DNP       |     0 | ESD9X3.3ST5G                                      | ON SEMICONDUCTOR                      | 3.3V          | PCB:MAX77976 DIODE; TVS; SMT (SOD-923); VRM = 3.3V; IPP = 9.8A                                                                                                                           |
| 75     | R3                      | DNP       |     0 | N/A                                               | N/A                                   | OPEN          | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                                                         |
| TOTAL  |                         |           |   219 |                                                   |                                       |               |                                                                                                                                                                                          |

## MAX77975/MAX77976 EV Kit Schematic

<!-- image -->

## MAX77975/MAX77976 EV Kit Schematic (continued)

<!-- image -->

## MAX77975/MAX77976 EV Kit Schematic (continued)

<!-- image -->

## MAX77975/MAX77976 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77975/MAX77976 EV Kit PCB Layout

MAX77975/MAX77976 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

Evaluates: MAX77975/MAX77976/

## MAX77975/MAX77976 EV Kit PCB Layout (continued)

MAX77975/MAX77976 EV Kit PCB Layout-Top View

<!-- image -->

│

Evaluates: MAX77975/MAX77976/

## MAX77975/MAX77976 EV Kit PCB Layout (continued)

MAX77975/MAX77976 EV Kit PCB Layout-Layer 2

<!-- image -->

│

Evaluates: MAX77975/MAX77976/

## MAX77975/MAX77976 EV Kit PCB Layout (continued)

MAX77975/MAX77976 EV Kit PCB Layout-Layer 3

<!-- image -->

│

Evaluates: MAX77975/MAX77976/

## MAX77975/MAX77976 EV Kit PCB Layout (continued)

MAX77975/MAX77976 EV Kit PCB Layout-Bottom View

<!-- image -->

│

Evaluates: MAX77975/MAX77976/

## MAX77975/MAX77976 EV Kit PCB Layout (continued)

MAX77975/MAX77976 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX77975/MAX77976 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 9/20            | Initial release                    | -               |
|                 1 | 11/20           | Updated Ordering Information table | 14              |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX77975/MAX77976/

MAX77958