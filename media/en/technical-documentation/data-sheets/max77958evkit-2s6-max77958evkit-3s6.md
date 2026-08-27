<!-- lastmod 2022-08-04 -->
## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT  Buck-Boost Charger

## General Description

The MAX77958 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the  MAX77958  Standalone  USB  Type-C  and  Power Delivery Controller.

The  EV  kit  enables  easy  evaluation  of  the  following features:

- USB Type-C Detection/PD Communication (See Table 1 for Acronyms)
- Power Role (Sink and Source), Data Role (UFP and DFP) detection
- PD Adapter Detection and PD Communication
- Integrated V CONN  Switch with OCP
-  Power/Data Role Swap
- PPS (with PD Adapter Supporting PPS)
- Audio and Debug Accessory Sink/Source Mode
- Vendor Defined Message
- BC1.2 Legacy Charger Detection: SDP, CDP, DCP and DCD Timeout
- I 2 C Master to Control Companion IC
- Nine Configurable GPIOs (GPIO6 for SID)

The EV kit contains a MAX77961 charger to demonstrate the I 2 C master feature of the MAX77958. The MAX77961 is  a  buck-boost  charger  for  2S/3S  Li+  battery  application  and  is  capable  of  3.5V  to  25V  input  voltage,  with a  maximum  programmable  fast  charging  current  of  6A. The MAX77961 can be configured as the 2-cell or 3-cell application  by  the  CONG  pin  resistor  (R5),  refer  to  the MAX77961 data sheet for more details.

The MAX16904 (a buck converter) is installed on the EV kit  to  provide  5V  to  V CONN   pin.  The  MAX77958  uses GPIO2 to enable the buck converter when the MAX77958 is in SOURCE Power Role.

A Micro-B USB cable is included in the package to serve as the interface from a USB port on a Windows ®  PC to the slave I 2 C port on the MAX77958. A Windows based software provides a user-friendly interface to exercise the features of the MAX77958.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX77958, MAX77961

## Features

- High Voltage V BUS  Range
- Short to V BUS  Protection on CC Pins
- Type-C Support and USB-PD Support
- Mode configuration: DFP/UFP/DRP
- Type-C rev1.3 and PD3.0 Compatible
- Cable Orientation and Power Role Detection
- Integrated V CONN  Switch with OCP
- Support Try.Snk State
- Support Audio
- Support Debug Accessory Sink/Source Mode
- FRS (Fast Role Swap) Initial Sink Support
- PPS (Programmable Power Supply) Sink Support
- Support BC1.2 Legacy/Proprietary Charger Detection
- Integrated D+/D- Switches
- MTP Memory for Storing Custom Configuration
- Moisture Detection and Corrosion Prevention
- Customization Script
- I 2 C Programmable Configuration
- I 2 C Master to Control External Charger or DC-DC Converter IC
- Nine Configurable GPIOs (GPIO6 for SID)
- External SuperSpeed Mux/Detection/IRQ
- EN/DISABLE External Power or FETs
- On-Board I 2 C Interface
- Windows 10 Compatible
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX77958, MAX77961

Figure 1. MAX77958 EV Kit-2S6/3S6#

<!-- image -->

│

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

Evaluates: MAX77958, MAX77961

Figure 2. MAX77958 EV Kit-2S6/3S6# Top View

<!-- image -->

## Quick Start

## Required Equipment

- MAX77958 evaluation package
- MAX77958EVKIT-2S6/3S6# Board
- Micro-B USB cable
- MAX77958 EV kit software (GUI)
- Type-C or PD travel adapter (TA)
- Power supply
- Battery simulator (or power supply with electronic load) after the battery simulator
- Multimeters
- Windows-based PC
- Oscilloscope to monitor CC pin or other signals

## Detailed Description of Hardware

The  default settings of the jumpers configure the MAX77958 in Autonomous mode to control the MAX77961 to charge a 2S/3S Li+ battery. Review jumper settings in Table 2 for other application scenarios.

│

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

## Table 1. Acronyms

| BC1.2   | Battery Charging 1.2         |
|---------|------------------------------|
| CC      | Configuration Channel        |
| CDP     | Charging Downstream Port     |
| DCP     | Dedicated Charging Port      |
| DFP     | Downstream Facing Port       |
| EV kit  | Evaluation kit               |
| GPIO    | General Purpose Input/Output |
| GUI     | Graphical User Interface     |
| I 2 C   | Inter Integrated Circuit     |
| IC      | Integrated Circuit           |
| MAXUSB  | USB to I 2 C translator      |
| MTP     | Multiple Time Programmable   |
| OVP     | Over Voltage Protection      |
| PCB     | Printed Circuit Board        |
| PD      | Power Delivery               |
| PDO     | Power Data Object            |
| PPS     | Programmable Power Supply    |
| SDP     | Standard Downstream Port     |
| UFP     | Upstream Facing Port         |
| USB     | Universal Serial Bus         |
| VDM     | Vendor Defined Message       |

## Table 2. Jumper Descriptions and Default Positions

| DESCRIPTION              | JUMPER NUMBER   | DEFAULT POSITION   | FUNCTION                                              |
|--------------------------|-----------------|--------------------|-------------------------------------------------------|
| VIO1 and VIO2 Connection | J2              | Short 2-3          | 1-2 VIO1 is powered by the charger's PVL              |
| VIO1 and VIO2 Connection | J2              | Short 2-3          | 2-3 VIO1 is powered by the VCC1P8 LDO from the MAXUSB |
| VIO1 and VIO2 Connection | J19             | Open               | 1-2 VIO2 is powered by the VCC3P3 LDO from the MAXUSB |
| VIO1 and VIO2 Connection | J19             | Open               | 2-3 VIO2 is powered by the AVL of the MAX77958        |
| VIO1 and VIO2 Connection | J33             | Short 1-2          | Open: VIO2 depends on the J19                         |
| VIO1 and VIO2 Connection | J33             | Short 1-2          | Short: connect VIO1 with VIO2                         |
| VIO1 and VIO2 Connection | J34             | Short 1-2          | Open to disconnect VIO1 from the MAX77958             |
| VIO1 and VIO2 Connection | J35             | Short 1-2          | Open to disconnect VIO2 from the MAX77958             |

│

Evaluates: MAX77958, MAX77961

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

Evaluates: MAX77958, MAX77961

Table 2. Jumper Descriptions and Default Positions (continued)

| DESCRIPTION                                                                     | JUMPER NUMBER   | DEFAULT POSITION   | FUNCTION                                                                           |
|---------------------------------------------------------------------------------|-----------------|--------------------|------------------------------------------------------------------------------------|
| USB Type-C Detec- tion Test when no USB Type-C cable is connected               | J11             | Short 1-2          | USB Type-C test, Rd and Ra connection to GND                                       |
| USB Type-C Detec- tion Test when no USB Type-C cable is connected               |                 |                    | USB Type-C CC1 RP/RD connection                                                    |
| USB Type-C Detec- tion Test when no USB Type-C cable is connected               | J8              | Open               | 1-2 connects RP to CC1                                                             |
| USB Type-C Detec- tion Test when no USB Type-C cable is connected               |                 |                    | 2-3 connects RD to CC1                                                             |
| USB Type-C Detec- tion Test when no USB Type-C cable is connected               |                 |                    | USB Type-C CC2 RP/RD connection                                                    |
| USB Type-C Detec- tion Test when no USB Type-C cable is connected               | J10             | Open               | 1-2 connects RP to CC2                                                             |
| USB Type-C Detec- tion Test when no USB Type-C cable is connected               |                 |                    | 2-3 connects RD to CC2                                                             |
| USB Type-C Detec- tion Test when no USB Type-C cable is connected               | J12             | Open               | Connects RAto CC1                                                                  |
| USB Type-C Detec- tion Test when no USB Type-C cable is connected               | J14             | Open               | Connects RAto CC2                                                                  |
| V CONN Boost Enable                                                             | J9              | Short 1-2          | Connects 5V buck converter to V CONN                                               |
| V CONN Boost Enable                                                             | J18             | Short 1-2          | Connects GPIO2 to the EN pin of the 5V buck converter to VCIN                      |
| V BUS from USB Type A Connector                                                 | J26             | Open               | USB Type-A connection to V BUS                                                     |
| LED Indicator                                                                   | J17             | Short 1-2          | GPIO4 indicator LED connection                                                     |
| LED Indicator                                                                   | J24             | Short 1-2          | GPIO5 indicator LED connection                                                     |
| LED Indicator                                                                   | J25             | Short 1-2          | GPIO7 indicator LED connection                                                     |
| I 2 C _Master to MAX66961 from MAX77958                                         | J20             | Short 1-2          | I 2 C _Master Interrupt input from the MAX77961                                    |
| I 2 C _Master to MAX66961 from MAX77958                                         | J21             | Short 1-2          | I 2 C _Master SCL to MAX77961 from the MAX77958                                    |
| I 2 C _Master to MAX66961 from MAX77958                                         | J22             | Short 1-2          | I 2 C _Master SDAto MAX77961 from the MAX77958                                     |
| I 2 C _Slave to MAX- USB                                                        | J29             | Short 1-2          | I 2 C _Slave SDAto the MAXUSB                                                      |
| I 2 C _Slave to MAX- USB                                                        | J27             | Short 1-2          | I 2 C _Slave SCL to the MAXUSB                                                     |
| I 2 C _Slave to MAX- USB                                                        | J28             | Short 1-2          | I 2 C _Slave INTB to the MAXUSB                                                    |
| MAX77958 Slave ID Selector, one of the Jumper from J30 to J32 must be populated | J31             | Open               | Connect GPIO6 with an external 330kΩ pulldown resistor to GN; slave address = 0x4E |
| MAX77958 Slave ID Selector, one of the Jumper from J30 to J32 must be populated | J30             | Open               | Connect GPIO6 with an external 330kΩ pullup resistor to VIO1; slave address = 0x4C |
|                                                                                 | J32             | Short 1-2          | Connect GPIO6 to GND; slave address = 0x4A                                         |
| MAX77961 Charger related jumpers                                                | J5              | Short 2-3          | Charger OTG_EN                                                                     |
| MAX77961 Charger related jumpers                                                | J6              | Short 2-3          | Charger DISQBAT                                                                    |
| MAX77961 Charger related jumpers                                                | J7              | Short 2-3          | Charger STBY                                                                       |
| MAX77961 Charger related jumpers                                                | J13             | Short 2-3          | Charger THMBAT                                                                     |
| MAX77961 Charger related jumpers                                                | J15             | Short 1-2          | Charger input power DCIN to V BUS                                                  |
| MAX77961 Charger related jumpers                                                | J16             | Short 1-2          | Connects charger System Voltage with USBC controller System Voltage                |

│

Evaluates: MAX77958, MAX77961

Figure 3. MAX77958 EV Kit-2S6/3S6# Top View with Default Jumpers Setup

<!-- image -->

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

## Detailed Description of Software

The GUI allows for quick, easy, and thorough evaluation of the MAX77958. Every control in the GUI corresponds to  a  register  in  the  MAX77958.  Refer  to  the Register Map section in the MAX77958 data sheet for a complete description.

## Installation

The  MAX77958EVKIT  GUI  can  be  downloaded  from Maxim's  website  at http://www.maximintegrated.com/ products/MAX77958 (under the Design &amp; Development

Figure 4. MAX77958 Evaluation Kit Software

<!-- image -->

Evaluates: MAX77958, MAX77961

tab). Save the EV kit software to a temporary folder and decompress the ZIP file. Run the .EXE file and follow the on-screen instructions to complete the installation.

## Windows Driver

After connecting the Micro-USB cable between a PC and the EV kit for the first time, wait for Windows to automatically install the drivers for the USB to I 2 C Interface.

│

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

## Test Procedure

The EV kit is fully assembled and tested. The following test  procedure  is  based  on  the  2S  application.  For  3S applications,  increase  the  battery  voltage  from  7V  to 10.5V. Use the following steps to verify board operation.

## Autonomous Mode 2S/3S Application SINK Mode

When  the  MAX77958  is  configured  as  the  SINK,  the MAX77958 enables the charger mode of the MAX77961 and set the input current limit of the MAX77961 according to the USB Type-C and BC1.2 detection result.

- 1) Connect the battery simulator between BATTP and BATTN, adjust the voltage to 7V and turn it on.
- 2) Connect USB Type-C AC adapter into the EV kit.
- 3) Observe the current reading from the battery simulator. The MAX77958 sets the input current limit of the charger based on the CC detection result. (If the battery simulator is not available, use the power supply in parallel with the electronic load to test.)

## SOURCE Mode

When the MAX77958 is configured as the SOURCE, the MAX77961 automatically switches to reverse-buck mode, and supplies 5.1V to V BUS .

- 1) Connect the battery simulator between BATTP and BATTN, adjust the voltage to 7V and turn it on.
- 2) Make sure no USB Type-C cable is connected.
- 3) Short Pin1-2 of J11 and short Pin2-3 of J8 to connect a 5.1kΩ Rd to CC1.
- 4) Monitor the voltage of V BUS  and check whether it equals 5.1V.

Figure 5. CC Status After Connecting the USB Type-C Connector of EV Kit to a Travel Adapter (TA)

<!-- image -->

Evaluates: MAX77958, MAX77961

## Initial Test Setup

- 1) Do not turn on the DC power supplies until all connections are made.
- 2) Confirm all jumpers are at their default positions as indicated in Table 2.
- 3) Connect a Micro-B USB cable from the computer's USB port to the MAX77958 EV kit.
- 4) Connect the DC power supply to the loop labeled SYS and GND.
- 5) Adjust the DC power supply to 7V and turn it on.
- 6) Follow the description of software covered in page 7 to install the MAX77958EVKIT.EXE software program.
- 7) Open the MAX77958 GUI and go to the Device drop-down menu, and press the Connect button in the drop-down list.
- 8) Wait for the device to respond and click on the Read and Close button to continue.
- 9) The EV kit and GUI are now ready for use.

## CC Detection Test

- 1) Connect USB Type-C adapter into the EV kit and see whether the MAX77958 detects SINK and configures input current limit correctly.
- 2) Connect USB Type-C cable from a Type-C dual role port (Source Preferred) device to see whether the MAX77958 detects CC Pin State Machine Detection and configures input current limit correctly.

│

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

## USB Power Delivery Test

Source capability request function test.

- 1) Connect USB Power delivery AC Adapter into the EV kit.
- 2) Use a voltmeter to monitor the voltage on V BUS .
- 3) Go to Command &gt; Get SrcCap (0x31) , click on Write button execute the command, the MAX77958 sends this command over the CC pin to the TA, the TA provides a list of available source capabilities.
- 4) Review the source capabilities and make a note of the desired PDO.
- 5) Go to SrcCap Request (0x32) , set the value of the PDO and press the Write button to change the BUS voltage.

Figure 6. Get Source Capability (Get SrcCap) under Command Section

<!-- image -->

Figure 7. BC Status After Connecting the USB Type-C Connector of EV Kit to SDP

<!-- image -->

## Evaluates: MAX77958, MAX77961

## BC1.2 Charger Type Detection

- 1) Plug in the USB Type-A to Type-C cable from a BC1.2 adapter or other legacy port, check the Charger Detection Status under the status tab of the MAX77958 GUI, to see if the USBC detects the correct charger type.

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

## I 2 C Master Test

The MAX77961 buck-boost charger IC is installed on the EV kit and communicates with the MAX77958 through the master I 2 C interface. When the MAX77958 is configured as the source, the MAX77961 automatically switches to reverse-buck mode, and supplies 5.1V to V BUS .

- 1) Disconnect Type-C cable.
- 2) Connect 7V power supply to BATT+.
- 3) Connect the pin 2-3 of Jumper 10, to attach the Rd to the CC2.
- 4) Check the CC Status in GUI, the MAX77958 should be in SOURCE mode.
- 5) MAX77961 is under the OTG mode, the measured VBUS voltage should equal to 5.1V.

## Detailed Description of Firmware

The  firmware  of  the  MAX77958  consists  of  two  main parts: the core firmware and customization script.

The core firmware is compliant with the USB Type-C 1.3 and  PD  3.0  specifications.  The  customization  script  is based  on  application  system,  giving  more  flexibility  for system  design.  It  is  based  on  the  customization  script update,  which  can  achieve  functions  such  as  GPIO matrix  control,  charger  configuration  initialization,  etc.

Evaluates: MAX77958, MAX77961

Future USB Type-C and PD specifications changes can be accommodated by updating the MAX77958 core firmware. See the Core Firmware Update section of this data sheet.

See  the  MAX77958  customization  script  and  OPCode command guide for details about the customization script.

## Customization Script Block Update

The customization script defines the application specific behavior  of  the  MAX77958.  An  example  is  setting  the input  current  limit  of  the  charger  when  the  USB  device detection is completed.

- 1) Follow the initial test setup to connect the GUI with the MAX77958 EV kit.
- 2) Connect 7.0V to SYS, do not disconnect the EV kit from the PC during the Customization Script Block Update .
- 3) Click on Tools in the menu bar and then go to CUS Command Block Update .
- 4) Click on the Open button in the pop up window to load the latest customization script and then click on Start to activate the Customization Script Update .
- 5) Figure 10 shows the completion of the customization script update process.

Figure 8. CC Status After Attaching Rd to CC2

<!-- image -->

│

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

Evaluates: MAX77958, MAX77961

Figure 9. GUI Customization Script Block Update

<!-- image -->

Figure 10. Customization Script Update Process Complete

<!-- image -->

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

## Core Firmware Update

- 1) Follow the initial test setup to connect the GUI with the MAX77958 EV kit.
- 2) Connect 7.0V to SYS, do not disconnect the EV kit from the PC during the Firmware Update .
- 3) Click on Tools in the menu bar and then go to Firmware Update .
- 4) Click on the Open button in the pop up window to load the latest firmware, in the file select window click on the .bin file, and then select Start to activate the Firmware Update .
- 5) Figure 12 shows the firmware update process is completed.

## Evaluates: MAX77958, MAX77961

Figure 11. GUI Firmware Update

<!-- image -->

Figure 12. Firmware Update Process Complete

<!-- image -->

│

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

## Component Suppliers

| SUPPLIER                            | PHONE        | WEBSITE                          |
|-------------------------------------|--------------|----------------------------------|
| MURATA                              | 770-436-1300 | www.murata-northamerica.com      |
| SAMTEC                              | 800-726-8329 | www.samtec.com                   |
| SULLINS ELECTRONICS CORP.           | 760-774-0125 | www.sullinselectronics.com       |
| TAIYO-YUDEN                         | 603-669-7587 | www.t-yuden.com                  |
| TDK                                 | 847-803-6100 | www.tdk.com/corp/en/index.htm    |
| VISHAY                              | 408-970-5852 | www.vishay.com                   |
| CYNTEC                              | 510-668-5167 | www.cyntec.com                   |
| PANASONIC                           | 800-344-2112 | www.na.industrial.panasonic.com/ |
| FUTURE TECHNOLOGY DEVICES INTL LTD. | 503-547-0988 | www.ftdichip.com                 |

Note:

Indicate that you are using the MAX77958 when contacting these component suppliers.

## Ordering Information

| PART NUMBER        | IC                          | TYPE   |
|--------------------|-----------------------------|--------|
| MAX77958EVKIT-2S6# | MAX77958EWV+ MAX77961EFV06+ | EV Kit |
| MAX77958EVKIT-3S6# | MAX77958EWV+ MAX77961EFV06+ | EV Kit |

Evaluates: MAX77958, MAX77961

│

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

## MAX77958-2S/3S EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                                                                                                    |   QTY | MFG PART #                                                                                   | VALUE                 | DESCRIPTION                                                                                                             |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|----------------------------------------------------------------------------------------------|-----------------------|-------------------------------------------------------------------------------------------------------------------------|
|      1 | AVL1, CC1, CC2, CHGINS, CSINN, CSINP, DISQBAT, DN, DN1, DP, DP2, GPIO0-GPIO8, INOKB, INTB1, OTG_EN, PVL, SBU1, SBU2, SCL1, SCL_M, SDA1, SDA_M, STAT, STBY, THM, VDD1P1, VDD1P8, VIO1, VIO2 |    37 | 5000                                                                                         | N/A                   | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |
|      2 | BATTN, BATTP, GND2-GND7, SYS, VBUS                                                                                                                                                         |    10 | 9020 BUSS                                                                                    | MAXIMPAD              | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                |
|      3 | C1, C15, C18-C21, C23-C29, C35                                                                                                                                                             |    14 | GRM155R71A104JA01                                                                            | 0.1UF                 | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 10V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                    |
|      4 | C2, C3, C12, C13, C22                                                                                                                                                                      |     5 | ZRB15XR61A475ME01; CL05A475MP5NRN; GRM155R61A475MEAA; C1005X5R1A475M050BC                    | 4.7UF                 | CAPACITOR; SMT (0402); CERAMIC; 4.7UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                    |
|      5 | C4                                                                                                                                                                                         |     1 | C1005X7R1E473K050BC; GRM155R71E473K; GCM155R71E473KA55                                       | 0.047UF               | CAPACITOR; SMT (0402); CERAMIC; 0.047UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC                                         |
|      6 | C5                                                                                                                                                                                         |     1 | GRM155C81E105KE11                                                                            | 1UF                   | CAPACITOR; SMT (0402); CERAMIC; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +105 DEGC; TC=X6S                                     |
|      7 | C6                                                                                                                                                                                         |     1 | GRM21BR61E106K; C2012X5R1E106K085AC125AB; C2012X5R1E106K085AC;TMK212BBJ106KG; CL21A106KAFN3N | 10UF                  | CAPACITOR; SMT (0805); CERAMIC; 10UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                             |
|      8 | C7, C8                                                                                                                                                                                     |     2 | GRM155R71C224KA12                                                                            | 0.22UF                | CAPACITOR; SMT (0402); CERAMIC; 0.22UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                |
|      9 | C9, C10                                                                                                                                                                                    |     2 | TMK325ABJ476MM                                                                               | 47UF                  | CAP; SMT (1210); 47UF; 20%; 25V; X5R; CERAMIC                                                                           |
|     10 | C11, C14, C43, C44                                                                                                                                                                         |     4 | C0402C0G500270JNP; GRM1555C1H270JA01                                                         | 27PF                  | CAPACITOR; SMT; 0402; CERAMIC; 27pF; 50V; 5%; C0G; -55degC to + 125degC; 0 +/- 30PPM/degC                               |
|     11 | C16, C17, C30-C32                                                                                                                                                                          |     5 | C0402C105K8PAC;CC0402KRX5R6BB105                                                             | 1UF                   | CAPACITOR; SMT (0402); CERAMIC; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                      |
|     12 | C33, C47, C51, C54, C55                                                                                                                                                                    |     5 | ANY                                                                                          | 1UF                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R;                       |
|     13 | C34, C36                                                                                                                                                                                   |     2 | GRM155R71H153KA12                                                                            | 0.015UF               | CAPACITOR; SMT (0402); CERAMIC; 0.015UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                 |
|     14 | C39, C45                                                                                                                                                                                   |     2 | GRM32ER7YA106KA12; CL32B106KLULNN                                                            | 10UF                  | CAPACITOR; SMT (1210); CERAMIC; 10UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                    |
|     15 | C46                                                                                                                                                                                        |     1 | GRM188R71A225KE15;CL10B225KP8NNN; C1608X7R1A225K080AC;C0603C225K8RAC                         | 2.2UF                 | CAPACITOR; SMT (0603); CERAMIC; 2.2UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                   |
|     16 | C48                                                                                                                                                                                        |     1 | C1210C475K5RAC;GRM32ER71H475KA88;CNC 6P1X7R1H475K250AE                                       | 4.7UF                 | CAPACITOR; SMT (1210); CERAMIC; 4.7UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                   |
|     17 | C49                                                                                                                                                                                        |     1 | TMK105BJ104KV; GRM155R61E104KA87                                                             | 0.1UF                 | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                    |
|     18 | C50, C52                                                                                                                                                                                   |     2 | C1005X5R1V105K050BC                                                                          | 1UF                   | CAPACITOR; SMT (0402); CERAMIC; 1UF; 35V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                      |
|     19 | C53                                                                                                                                                                                        |     1 | ZRB157R61A225KE11; GRM155R61A225KE95;CL05A225KP5NSN                                          | 2.2UF                 | CAPACITOR; SMT (0402); CERAMIC; 2.2UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                    |
|     20 | D1                                                                                                                                                                                         |     1 | PMEG4050EP                                                                                   | PMEG4050EP            | DIODE; SCH; SMT (SOD-128); PIV=40V; IF=5A                                                                               |
|     21 | DS2                                                                                                                                                                                        |     1 | LTST-C190CKT                                                                                 | LTST-C190CKT          | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                         |
|     22 | DS3                                                                                                                                                                                        |     1 | LTST-C190KFK                                                                                 | LTST-C190KFK          | DIODE; LED; ULTRA BRIGHT CHIP LEAD; ORANGE; SMT (0603); VF=2V; IF=0.02A                                                 |
|     23 | DS4                                                                                                                                                                                        |     1 | 19-337/R6GHBHC-A01/2T                                                                        | 19-337/R6GHBHC-A01/2T | DIODE; LED; SMD-B; RED/GREEN/BLUE; SMT; PIV=2V-3.3V; IF=0.02A                                                           |
|     24 | J1                                                                                                                                                                                         |     1 | 12401832E402A                                                                                | 12401832E402A         | CONNECTOR; FEMALE; SMT; USB TYPE C CONNECTOR; RIGHT ANGLE; DUAL ROW; 24PINS                                             |
|     25 | J2, J5-J8, J10, J13, J18, J19                                                                                                                                                              |     9 | PEC03SAAN                                                                                    | PEC03SAAN             | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; 65 DEGC TO +125 DEGC;                             |
|     26 | J3                                                                                                                                                                                         |     1 | 87520-0010BLF                                                                                | 87520-0010BLF         | CONNECTOR; FEMALE; THROUGH HOLE; USB RECEPTACLE; RIGHT ANGLE; 4PINS                                                     |
|     27 | J4                                                                                                                                                                                         |     1 | 10118193-0001LF                                                                              | 10118193-0001LF       | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                 |
|     28 | J9, J11, J12, J14-J17, J20-J22, J24-J35                                                                                                                                                    |    22 | TSW-102-07-T-S                                                                               | TSW-102-07-T-S        | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                 |
|     29 | J23                                                                                                                                                                                        |     1 | SBH11-PBPC-D05-ST-BK                                                                         | SBH11-PBPC-D05-ST-BK  | CONNECTOR; MALE; THROUGH HOLE; 0.100IN MALE SHROUDED BOX HEADER; STRAIGHT; 10PINS                                       |
|     30 | L1                                                                                                                                                                                         |     1 | PA5007.332NLT                                                                                | 3.3UH                 | INDUCTOR; SMT; COMPOSITE; 3.3UH; 20%; 10A                                                                               |
|     31 | L2-L4                                                                                                                                                                                      |     3 | BLM18AG601SN1                                                                                | 600                   | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A                                                                  |
|     32 | L5                                                                                                                                                                                         |     1 | XFL4020-472ME                                                                                | 4.7UH                 | INDUCTOR; SMT; METAL COMPOSITE CORE; 4.7UH; TOL=+/-20%; 5A; -40 DEGC TO +125 DEGC                                       |
|     33 | PGNDS                                                                                                                                                                                      |     1 | 5011                                                                                         | N/A                   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     34 | Q1                                                                                                                                                                                         |     1 | DMN3016LFDE                                                                                  | DMN3016LFDE           | TRAN; NCH; U-DFN2020-6 (TYPE E); PD-(0.73W); I-(10A); V-(30V)                                                           |

│

Evaluates: MAX77958, MAX77961

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

Evaluates: MAX77958, MAX77961

## MAX77958-2S/3S EV Kit Bill of Materials (continued)

|   ITEM | ITEM                                                   | ITEM   | ITEM                                              | ITEM            | ITEM                                                                                                                    |
|--------|--------------------------------------------------------|--------|---------------------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------|
|     35 | R1, R7, R14-R16, R18, R22, R24, R26, R32-R34, R44, R68 | 14     | ERJ-2GE0R00                                       | 0               | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                    |
|     36 | R2                                                     | 1      | CRA2512-FZ-R010ELF                                | 0.01            | RESISTOR; 2512; 0.01 OHM; 1%; 75PPM; 3.0W; THICK FILM                                                                   |
|     37 | R4, R23, R58, R65                                      | 4      | CRCW0402200KFK; RF73H1ELTP2003                    | 200K            | RESISTOR; 0402; 200K; 1%; 100PPM; 0.0625W; THICK FILM                                                                   |
|     38 | R5 for 2S application                                  | 1      | ERJ-2RKF8662                                      | 86.6K           | RESISTOR; 0402; 86.6K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                 |
|        | R5 for 3S application                                  | 1      | ERJ-2RKF8661                                      | 8.66K           | RESISTOR; 0402; 8.66K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                 |
|     39 | R6                                                     | 1      | ERJ-2GEJ4R7                                       | 4.7             | RESISTOR; 0402; 4.7 OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                  |
|     40 | R8                                                     | 1      | CRCW040212K0FK;MCR01MZPF1202                      | 12K             | RESISTOR, 0402, 12K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                |
|     41 | R9, R13                                                | 2      | ERJ-2RKF27R0X;RC0402FR- 0727RL;CRCW040227R0FK     | 27              | RESISTOR, 0402, 27 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                 |
|     42 | R10                                                    | 1      | CRCW04021M00FK                                    | 1M              | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                     |
|     43 | R11, R40, R45, R71                                     | 4      | CRCW04021K00FK; RC0402FR- 071KL;MCR01MZPF1001     | 1K              | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                     |
|     44 | R12, R54                                               | 2      | CRCW040210K0FK;RC0402FR-0710KL                    | 10K             | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                    |
|     45 | R17                                                    | 1      | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | 47.5K           | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM                                                                  |
|     46 | R19, R31, R41                                          | 3      | CRCW0402100KFK;RC0402FR-07100KL                   | 100K            | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                   |
|     47 | R20, R21                                               | 2      | CRCW040210R0FK; 9C04021A10R0FL                    | 10              | RESISTOR; 0402; 10 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                 |
|     48 | R25, R29                                               | 2      | ERJ-2RKF5602                                      | 56K             | RESISTOR, 0402, 56K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                |
|     49 | R27, R28                                               | 2      | CRCW04024K70FK;MCR01MZPF4701                      | 4.7K            | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                               |
|     50 | R30                                                    | 1      | CRCW0402169KFK                                    | 169K            | RESISTOR; 0402; 169K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                |
|     51 | R35                                                    | 1      | CRCW0402470RFK                                    | 470             | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                |
|     52 | R36, R37                                               | 2      | CRCW04025K10FK                                    | 5.1K            | RESISTOR; 0402; 5.1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                   |
|     53 | R38, R42, R55, R57                                     | 4      | CRCW04022K20FK;RC0402FR-072K2L                    | 2.2K            | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                               |
|     54 | R39                                                    | 1      | 3296Y-1-503LF                                     | 50K             | RESISTOR; THROUGH HOLE-RADIAL LEAD; 3296 SERIES; 50K OHM; 10%; 100PPM; 0.5W                                             |
|     55 | R43, R47                                               | 2 2    | ERJ-2RKF6493 ERJ-2RKF1203                         | 649K 120K       | RESISTOR; 0402; 649K OHM; 1%; 100PPM; 0.1W; THICK FILM RESISTOR; 0402; 120K OHM; 1%; 100PPM; 0.1W; THICK FILM           |
|     56 | R46, R64                                               |        |                                                   |                 |                                                                                                                         |
|     57 | R48                                                    | 1      | ERJ-2GEJ132                                       | 1.3K            | RESISTOR; 0402; 1.3K OHM; 5%; 200PPM; 0.1W; THICK FILM                                                                  |
|     58 | R49, R50, R59, R60                                     | 4      | CRCW06030000Z0EAHP                                | 0               | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.25W; THICK FILM                                                                    |
|     59 | R51, R52                                               | 2      | CRCW04021R00FK                                    | 1               | RESISTOR, 0402, 1 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                  |
|     60 | R53                                                    | 1      | ERJ-2RKF3302                                      | 33K             | RESISTOR, 0402, 33K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                |
|     61 | R56                                                    | 1      | CRCW040220K0FK                                    | 20K             | RESISTOR; 0402; 20K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                 |
|     62 | R61, R63                                               | 2      | CRCW0402150RFK; 9C04021A1500FL                    | 150             | RESISTOR; 0402; 150 OHM; 1%; 100PPM; 0.0625W; THICK FILM RESISTOR; 0402; 500 OHM; 0.1%; 25PPM; 0.05W; THIN FILM         |
|     63 | R62                                                    | 1      | PNM0402E5000BS                                    | 500             |                                                                                                                         |
|     64 | R66, R67                                               | 2      | CRCW0402330KFK                                    | 330K            | RESISTOR, 0402, 330K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                               |
|     65 | R70                                                    | 1      | ERJ-2RKF2203                                      | 220K            | RESISTOR; 0402; 220K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                  |
|     66 | R73                                                    | 1      | ERJ-2GEJ474                                       | 470K            | RES; SMT (0402); 470K; 5%; +/-200PPM/DEGC; 0.1W                                                                         |
|     67 | U1                                                     | 1      | MAX77958EWV+T                                     | MAX77958EWV+T   | EVKIT PART - IC; USB TYPE-C AND USB PD CONTROLLER; WLP30; 0.5MM PITCH; PACKAGE OUTLINE: 21-0069; PACKAGE CODE: W302A3+2 |
|     68 | U2                                                     | 1      | FT2232HL                                          | FT2232HL        | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                         |
|     69 | U3                                                     | 1      | MAX16904RATB50+                                   | MAX16904RATB50+ | IC; CONV; 2.1MHZ HIGH-VOLTAGE; 600 MILLIAMPHERE MINI-BUCK CONVERTER; TDFN10-EP                                          |
|     70 | U4                                                     | 1      | MAX14611ETD+                                      | MAX14611ETD+    | IC; TRANS; QUAD BIDIRECTIONAL LOW-VOLTAGE LOGIC LEVEL TRANSLATOR; TDFN14-EP                                             |
|     71 | U5, U6                                                 | 2      | MAX8512EXK+                                       | MAX8512EXK      | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                           |
|     73 | Y1                                                     | 1      | 7M-12.000MAAJ                                     | 12MHZ           | CRYSTAL; SMT; 18PF; 12MHZ; +/-30PPM; +/-30PPM                                                                           |
|     74 | PCB                                                    | 1      | MAX77958                                          | PCB             | PCB:MAX77958                                                                                                            |
|     75 | R3                                                     | 0      | N/A                                               | OPEN            | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                        |
|     76 | R72                                                    | 0      | N/A                                               | OPEN            | RESISTOR; 0805; OPEN; FORMFACTOR                                                                                        |
|     77 | C37, C38, C40-C42                                      | 0      | N/A                                               | OPEN            | CAPACITOR; SMT (1210); OPEN; IPC MAXIMUM LAND PATTERN                                                                   |

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

## MAX77958-2S/3S EV Kit Schematics

<!-- image -->

Evaluates: MAX77958, MAX77961

## MAX77958-2S/3S EV Kit Schematics (continued)

MAX77961 2/3-Cell Charger to Validate the I 2 C Master Feature

<!-- image -->

Evaluates: MAX77958, MAX77961

│

## MAX77958-2S/3S EV Kit Schematics (continued)

MAXUSB, USB to I 2 C Translator

<!-- image -->

Evaluates: MAX77958, MAX77961

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

## MAX77958-2S/3S EV Kit PCB Layouts

MAX77958-2S/3S EV Kit PCB Layout-Silkscreen Top

<!-- image -->

MAX77958-2S/3S EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX77958, MAX77961

MAX77958-2S/3S EV Kit PCB Layout-Inner Layer 2

<!-- image -->

MAX77958-2S/3S EV Kit PCB Layout-Inner Layer 3

<!-- image -->

│

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

Evaluates: MAX77958, MAX77961

## MAX77958-2S/3S EV Kit PCB Layouts (continued)

<!-- image -->

MAX77958-2S/3S EV Kit PCB Layout-Inner Layer 4

<!-- image -->

MAX77958-2S/3S EV Kit PCB Layout-Inner Layer 5

MAX77958-2S/3S EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX77958-2S/3S EV Kit PCB Layout-Silkscreen Bottom

<!-- image -->

│

## MAX77958 Evaluation Kit with 2S/3S Li+ 6A OUT Buck-Boost Charger

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77958, MAX77961