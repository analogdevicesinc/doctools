<!-- lastmod 2022-08-02 -->
## MAX77540 Evaluation Kit

## General Description

The MAX77540 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the MAX77540 dual-phase configurable step-down regulator. The board is equipped with test points and jumpers for  testing  all  pins  on  the  device.  Two  potentiometers allow the user to adjust the SEL1/SEL2 configuration pins at  will.  There  are  also  probe  sockets  on  critical  nodes (VOUTx, LXx) for precise measurements. The board also comes with some spare inductors (L3-L6) for testing out efficiency/performance  tradeoffs.  The  PCB  is  designed with  Maxim  Integrated's  recommended  layout  of  the  IC and external components. The IC sets default output voltages by way of R13 and R14 but can be changed with the potentiometers or through I 2 C communication. Maxim Integrated's  graphical  user  interface  (GUI)  can  be  used by  connecting  a  Windows ® -based  PC  to  J11  through  a MAXUSB\_INTERFACE# device.

Ordering Information appears at end of data sheet.

Figure 1. MAX77540 Evaluation Board

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Features

- Probe Sockets for High-Accuracy Measurements
- Test Points for all Features (POK, FPWM, EN, and IRQB)
- Default Output Voltage Adjustable through SEL
- Connector for Custom I 2 C Host

## Check List

- The MAX77540 EV kit
- USB to I 2 C interface (MAXUSB\_INTERFACE#)
- USB Type-A to micro-USB cable
- Windows-based graphical user interface (GUI) software is available for use with the EV kit and can be downloaded from Maxim Integrated's website at https://www.maximintegrated.com/products/ MAX77540EVKIT (under the Design Resources tab). Windows 7 or newer is required to use the EV kit GUI software.

Evaluates: MAX77540 in

WLP Package

<!-- image -->

## MAX77540 Evaluation Kit

## EV Kit Specification and Default Configuration

The MAX77540 EV kit comes with the following default settings:

- VOUT1 = 3.3V (dual phase)
- VOUT2 = 5.0V (ignored since buck is in dual phase)

## Table 1. EV Kit Default Specifications

| SPECIFICATION       | TEST CONDITIONS                      |   MIN |   TYP |   MAX | UNIT   |
|---------------------|--------------------------------------|-------|-------|-------|--------|
| Input Voltage       |                                      |   4.0 |       |  16.0 | V      |
| Output Voltage      | Configurable by SEL or through I 2 C |   0.5 |       |   5.2 | V      |
| Output Current      | Per phase                            |     0 |       |     3 | A      |
| Switching Frequency |                                      |       |     1 |       | MHz    |
| Current Limit       |                                      |       |   4.5 |       | A      |

## Table 2. Default Shunt Positions and Jumper Descriptions

| JUMPER   | NODE OR FUNCTION    | SHUNT POSITION   | FUNCTION                                                        |
|----------|---------------------|------------------|-----------------------------------------------------------------|
| J1       | SEL1                | 1-2*             | Connects SEL1 to fixed 75k resistor (3.3V OUT default)          |
| J1       | SEL1                | 2-3              | Connects SEL1 to the potentiometer for adjustable default V OUT |
| J2       | EN1                 | 1-2              | Connects EN1 to SYS (enables Buck 1)                            |
| J2       | EN1                 | 2-3*             | Connects EN1 to GND (disables Buck 1)                           |
| J3       | FPWM1B              | 1-2*             | Connects FPWM1B to VIO (Buck 1 FPWM mode disabled)              |
| J3       | FPWM1B              | 2-3              | Connects FPWM1B to GND (Buck 1 FPWM mode enabled)               |
| J4       | I2C_EN              | 1-2*             | Connects I2C_EN to VIO (enables I 2 C)                          |
| J4       | I2C_EN              | 2-3              | Connects I2C_EN to GND (disables I 2 C)                         |
| J5       | SEL2                | 2-4              | Connects SEL2 to fixed 100k resistor (5.0V OUT default)         |
| J5       | SEL2                | 3-4*             | Connects SEL2 to GND (enables dual-phase operation)             |
| J5       | SEL2                | 4-6              | Connects SEL2 to the potentiometer for adjustable default V OUT |
| J6       | EN2                 | 1-2              | Connects EN2 to SYS (enables Buck 2)                            |
| J6       | EN2                 | 2-3*             | Connects EN2 to GND (disables Buck 2)                           |
| J7       | FPWM2B              | 1-2*             | Connects FPWM2B to VIO (Buck 2 FPWM mode disabled)              |
| J7       | FPWM2B              | 2-3              | Connects FPWM2B to GND (Buck 2 FPWM mode enabled)               |
| J8       | ADDR                | 1-2              | ConnectsADDR to VDD (sets I 2 C address)                        |
| J8       | ADDR                | 2-3*             | ConnectsADDR to GND (sets I 2 C address)                        |
| J8       | ADDR                | N/A              | Leave floating to set third I 2 C address                       |
| J11      | USB connector (GUI) | N/A              | GUI (MAXUSB_INTERFACE#) connector                               |
| J15      | VIO                 | 1-2*             | Powers VIO from the GUI connector                               |
| J15      | VIO                 | 2-3              | Powers VIO from the external header J16                         |
| J16      | External I 2 C      | N/A              | External header for I 2 C host                                  |
| J17      | ALT_IN              | 2-4              | Connects ALT_IN to OUT1                                         |
| J17      | ALT_IN              | 3-4*             | Connects ALT_IN to the external test point ALT_IN_EXT           |
| J17      | ALT_IN              | 4-6              | Connects ALT_IN to OUT2                                         |
| J18      | ALT_IN_EXT          |                  | Connects ALT_IN_EXT to GND                                      |
| R12      | Phase configuration | N/A              | Remove to separate OUT2 from OUT1                               |

- f SW = 1.0MHz
- Skip mode
- Soft-start and DVS ramp up rate = 5.0mV/µs
- Soft-stop and DVS ramp down rate = -0.15mV/µs
- 100Ω active discharge enabled (1Ω is disabled)
- Current limit = 4.5A
- MAX77540AAWV+T installed

Evaluates: MAX77540 in

WLP Package

│

## MAX77540 Evaluation Kit

## Quick Start

## Required Equipment

- Adjustable DC power supply or applicable battery
- Multimeter
- MAXUSB\_INTERFACE# for I 2 C serial interface (optional)
- USB Type-A to micro-USB cable (optional)

Figure 2. Simplified Setup Block Diagram

<!-- image -->

Figure 3. Application Circuit

<!-- image -->

## Evaluates: MAX77540 in WLP Package

- Windows-based PC with MAX77540 EV kit GUI (optional)

## Setup Overview

Figure  2  depicts  a  simplified  block  diagram  of  a  typical EV kit setup. Attach more meters and scope probes as necessary. Figure 3 depicts a typical application circuit of the MAX77540.

│

## MAX77540 Evaluation Kit

## Procedure

Follow this procedure for first time evaluation:

- 1) Ensure that the jumpers are configured as shown in Table 2.
- 2) Apply a valid voltage (like 7.6V) from a power supply to the SYS and PGND3 terminals of the EV kit. Do not turn it on yet.
- 3) Important: make sure the phase configuration is correct. See the Phase Configuration section.
- 4) Connect a USB cable between the PC and the MAXUSB\_INTERFACE# circuit, then connect the MAXUSB\_INTERFACE# circuit to J11 on the EV kit.
- 5) Turn on the power supply and connect to the EV kit through the GUI.
- 6) Turn on Buck 1 by either with the GUI or moving the shunt on the EN1 jumper to SYS.
- 7) Measure OUT1 with a voltmeter. It should read 3.3V.
- 8) Use the GUI to exercise the various features of the MAX77540.

Note: When  powering  down  or  power  cycling  the device,  remove  VIO  (or  set  I2C\_EN  to  ground through J4) before removing power from SYS.

The  next  steps  of  the  procedure  use  the  EV  kit GUI and MAXUSB\_INTERFACE# to evaluate MAX77540's I 2 C serial interface. If evaluation of the I 2 C serial interface is not required, the following steps can be skipped. The EV kit includes onboard 2.2kΩ pullup resistors (R4 and R7) to VIO.

Note: In  the  following  sections,  software-related items  are  identified  as  follows:  Text  in bold refers to  items  directly  from  the  evaluation  software.  Text in bold  and  underlined refers  to  items  from  the Windows operating system.

- 9) Install GUI software. Visit the product webpage at https://www.maximintegrated.com/products/ MAX77540EVKIT and navigate to the Design Resources to download the latest version of the EV kit software. Save the EV kit software installation file to a temporary folder and decompress the ZIP file. Run the .EXE file and follow the on-screen instructions to complete installation.
- 10) Turn off the 1.8V VIO power supply and input power supply connected in steps 4 and 5.

## Evaluates: MAX77540 in WLP Package

- 11)  Disconnect the 1.8V VIO power supply connected in step 4 from the EV kit. MAXUSB\_INTERFACE# has an on-board LDO to supply 1.8V to VIO.
- 12)  Ensure SW1 and SW2 switches on the MAX-USB\_INTERFACE# are set to the ON position. This enables I 2 C mode on MAXUSB\_INTERFACE#.
- 13)  Connect the MAXUSB\_INTERFACE# to the MAX77540 EV kit. Connect the MAXUSB\_INTER-FACE# to the PC's USB port with a USB Type-A to micro-USB cable.
- 14)  Turn on the input power supply.
- 15)  Open the GUI and click the Device button in the menu bar. Select Connect in the Device drop-down list. Wait for the device to respond, and in the Synchronize window, press the Connect button.
- 16)  Drag the slide bar in the Output Voltage Configura -tion section to change the output voltage and click the Write button.
- 17) Confirm with a DVM that the software instruction to change output voltage was successful. If so, the I 2 C serial interface is confirmed to be working.

This concludes the Quick Start procedure. Users are now encouraged to further explore the device and its register settings with the GUI software. For more information on the GUI, see the Detailed Description of Software section.

## EV Kit Hardware

## MAXUSB\_INTERFACE#

The  MAXUSB\_INTERFACE#  along  with  the  companion  EV  kit  GUI  software  allows  users  to  easily  change MAX77540's register settings with a Windows PC. Before connecting  the  MAXUSB\_INTERFACE#  to  the  EV  kit's MAXUSB\_INTERFACE# connector (J5), make sure the MAXUSB\_INTERFACE# is configured with the following settings:

- SW1, SW2 to the ON position (This enables I 2 C mode on the MAXUSB\_INTERFACE#.)
- VL Jumper (J5) to 1.8V (This sets MAXUSB\_ INTERFACE#'s V IO  voltage.)

MAXUSB\_INTERFACE# also includes an on-board LDO that can supply necessary voltage to V IO .

## External I 2 C Bus

To use a different I 2 C host, disconnect the MAXUSB or the USB cable, and attach I 2 C wires to J16 on the EV kit.

## MAX77540 Evaluation Kit

## Phase Configuration

To set the MAX77540 to dual-phase operation, set J5 to the 3:4 position . Use the nearby silk screen as a reference.

Phase configuration is set by SEL2. If SEL2 is shorted to GND (effectively 0Ω), the part will be in 2 phase; if SEL2 is higher than 200Ω, the part will be in 1+1 phase. Resistor R12 (on the bottom side of the board) connects the two outputs together. Ensure that R12 is installed/uninstalled based on desired phase configuration (See Table 3).

## Change Default Setup with RSEL1/RSEL2

Note  that  the  MAX77540  EV  kit  is  default  configured for  dual-phase  operation,  with  VOUT1  set  to  3.3V  and VOUT2 set to 5V (by way of R13 and R14). To evaluate other default configurations (for different voltages/ranges upon  first  power-up),  change  the  resistance  at  SEL1/2 with either of the potentiometers or R13/R14. Refer to the device data sheet for more information.

## High Temperature Testing

The  MAX77540  is  rated  for  operation  under  ambient temperatures up to 125°C. Note that not all components on the EV kit are rated for temperatures that high. Some ceramic  capacitors  experience  extra  leakage  when  put under  temperatures  higher  than  they  are  rated  for,  and supply  current  readings  for  the  IC  might  be  larger  than expected. Double check the components on the EV kit if testing at 125°C ambient temperatures.

## Table 3. Phase Configuration Truth Table

| SEL2   | R12   | PHASE CONFIGURATION    |
|--------|-------|------------------------|
| 0Ω     | 0Ω    | Dual Phase (2ϕ)        |
| 0Ω     | Open  | Mismatch               |
| >200Ω  | 0Ω    | Mismatch               |
| >200Ω  | Open  | Single Phase (1ϕ + 1ϕ) |

## Evaluates: MAX77540 in WLP Package

List of caps not rated for 125°C:

- C26, C27 (IN1, IN2 bulk capacitors)
- C5, C6, C7 (IN1, IN2, SYS bypass capacitors)
- C10-C15 (Buck 1 and 2 output capacitors)

Consider replacing these components if IC operation at 125°C ambient temperature is an important use case.

## Test Points and Critical Node Measurement (VOUT and LX)

The  EV  kit  comes  with  sockets  presoldered  onto  the board for measuring the critical nodes VOUT1 (J10), LX1 (J14),  VOUT2  (J12),  and  LX2  (J13).  Use  these  probe sockets  to  eliminate  as  much  noise  as  possible  when measuring the critical nodes. To ensure best results, use a  very  short  ground  wire  from  the  ground  sleeve  of  the scope probe to the GND side of the probe socket, and use the bare tip of the probe directly to the signal side of the probe socket. Following these guidelines gives the most accurate results when measuring parameters like output voltage  ripple,  switching  waveforms,  and  load  transient response.

Figure 4. Example of Probing Sensitive Node

<!-- image -->

## Table 4. Test Point Selection for Measurement

| LOAD TRANSIENT, OUTPUT RIPPLE          | LOAD REGULATION, LINE REGULATION,   | EFFICIENCY     | EFFICIENCY    | SWITCHING NODE   | SWITCHING NODE   |
|----------------------------------------|-------------------------------------|----------------|---------------|------------------|------------------|
|                                        | VOUTACCURACY                        | OUTPUT VOLTAGE | INPUT VOLTAGE | LX1              | LX2              |
| J10 (VOUT1 SOCKET), J12 (VOUT2 SOCKET) | INxS, OUTxS, PGNDxS                 | OUTxS, PGNDxS  | INxS, OUTxS   | J14              | J13              |

│

## MAX77540 Evaluation Kit

## Detailed Description of Software

The  graphical  user  interface  (GUI)  software  allows  for quick, easy, and thorough evaluation of the MAX77540. The GUI drives I 2 C communication with the EV kit (The GUI  along  with  the  MAXUSB\_INTERFACE#  drives  I 2 C communication with the EV kit). Every control in the GUI corresponds directly to a register within the MAX77540. Refer to the Register Map section of MAX77540 IC data sheet  for  a  complete  description  of  the  registers.  See Figure 5 for a screenshot of the GUI upon launch.

## Installation

Visit  the  product  webpage  at https://www.maximintegrated.com/products/MAX77540EVKIT and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software installation file to a temporary folder and decompress the ZIP file. Run the .EXE installer and follow the on-screen instructions to complete the installation.

## Windows Driver

After plugging in the MAXUSB\_INTERFACE# to the PC with a micro-USB cable for the first time, wait about 30 seconds for Windows to automatically install the necessary drivers.

## Connecting GUI

After  opening  the  GUI,  click  the Device drop-down  list in  the  upper  left  corner  of  the  GUI  window  and  select Connect .

The Device  Synchronization menu  opens  (Figure  7) once the MAX77540 IC responds (voltages on SYS pin and V IO  pin must be valid on the MAX77540 IC for it to respond). The I 2 C address shown is MAX77540 IC's 7-bit slave  address. The  address  shown  changes  depending on  the  EV  kit's ADDR  configuration.  Click  the Connect and  Read button.  The  text  at  the  bottom  right  of  the GUI  window  changes  from  MAXUSB\_INTERFACE#  is Disconnected to MAXUSB\_INTERFACE# is Connected.

Figure 5. MAX77540 Evaluation Kit GUI Top-Level Interface (before Connecting)

<!-- image -->

## Evaluates: MAX77540 in WLP Package

│

## MAX77540 Evaluation Kit

Figure 6. Port Synchronization Menu

<!-- image -->

Figure 7. Primary Control Portion of Main GUI Window

<!-- image -->

## Ordering Information

| PART           | U1 IC          |
|----------------|----------------|
| MAX77540EVKIT# | MAX77540AAWV+T |

#Denotes RoHS compliance.

## Evaluates: MAX77540 in WLP Package

## Configuring the Regulator

The GUI has a Configuration tab  for  each  buck  (Buck 1  Configuration  and  Buck  2  Configuration).  Use  these to  adjust  the  various  parameters  of  each  buck.  Note that Buck 2 Configuration is disabled during dual-phase operation.  Figure  7  shows  a  snapshot  of  the  Buck  1 Configuration  tab.  To  use  the  GUI,  select  the  desired option  in  one  of  the  interactable  fields  (button,  slider, and drop-down list) and click the Write button next to it. Use the Read button to refresh the current state of the registers.

## PCB Layout Guidelines

Careful  circuit  board  layout  is  critical  to  achieve  low switching  power  losses  and  clean,  stable  operation. Refer  to https://www.maximintegrated.com/products/ MAX77540EVKIT for  the PCB Layout Guideline section of the MAX77540 IC data sheet.

│

## MAX77540 Evaluation Kit

## MAX77540 EV Kit Bill of Materials

| REF_DES   |   QTY* | MFG PART #                                                                                                                                                                 | MANUFACTURER                                                                                                                          | VALUE           | DESCRIPTION                                                                                                                                                         |
|-----------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C1, C2    |      2 | C1005X7S1A225K050BC                                                                                                                                                        | TDK                                                                                                                                   | 2.2UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 2.2UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                                                          |
| C3        |      1 | C1005X7S1A105K; GRM155C71A105KE11                                                                                                                                          | TDK; MURATA                                                                                                                           | 1UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7S                                                          |
| C5, C6    |      2 | C1608X5R1E106M080AC; CL10A106MA8NRNC; GRM188R61E106MA73; ZRB18AR61E106ME01; GRT188R61E106ME13                                                                              | TDK; SAMSUNG ELECTRONICS; MURATA; MURATA                                                                                              | 10UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                            |
| C7        |      1 | C1608X5R1E225K; TMK107ABJ225KA; TMK107BJ225KA; GRM188R61E225KA12                                                                                                           | TDK; TAIYO YUDEN; TAIYO YUDEN; MURATA                                                                                                 | 2.2UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                   |
| C8, C9    |      2 | C1005X7R1C104K050BC; ATC530L104KT16; 0402YC104KAT2A; C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV; CL05B104KO5 | TDK; AMERICAN TECHNICAL CERAMICS; AVK; VENKEL LTD.; SAMSUNG ELECTRONICS; MURATA; TDK; YAGEO PHICOMP; TAIYO YUDEN; SAMSUNG ELECTRONICS | 0.1UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                          |
| C10-C15   |     12 | C1608X5R1A226M080A; GRM188R61A226ME15                                                                                                                                      | TDK; MURATA                                                                                                                           | 22UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                            |
| C22, C23  |      2 | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB                                                                                               | MURATA; TDK; TAIYO YUDEN; TDK                                                                                                         | 0.1UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                        |
| L1, L2    |      2 | DFE252012F-1R0M=P2; DFE252012F-1R0M                                                                                                                                        | MURATA; MURATA                                                                                                                        | 1UH             | INDUCTOR; SMT (1008); METAL; 1UH; 20%; 3.3A                                                                                                                         |
| U1        |      1 | MAX77540AAWV+                                                                                                                                                              | MAXIM                                                                                                                                 | MAX775 40AAWV + | EVKIT PART-IC; MAX77540AAWV+; 6V INPUT DUAL-PHASE CONFIGURABLE 3A/PHASE HIGH-EFFICIENCY BUCK CONVERTER; PACKAGE OUTLINE: 21- 100414; PACKAGE CODE: W302P2Z+1; WLP30 |

│

Evaluates: MAX77540 in

WLP Package

## MAX77540 EV Kit Bill of Materials (continued)

| REF_DES                                                                                                        | QTY*                                                                                                         | MFG PART #                                                                                                   | MANUFACTURER                                                                                                 | VALUE                                                                                                        | DESCRIPTION                                                                                                      |
|----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| Components below this line are outside of the immediate MAX77540 evaluation circuit and solution silkscreen.   | Components below this line are outside of the immediate MAX77540 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77540 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77540 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77540 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77540 evaluation circuit and solution silkscreen.     |
| ALT_IN_EXT, BST1, BST2, EN1, EN2, FPWM1B, FPWM2B, I2C_EN, IRQB, POK1, POK2, SCL, SDA, SEL1, SEL2, VDD, VIO, VL | 18                                                                                                           | 5002                                                                                                         | KEYSTONE                                                                                                     | N/A                                                                                                          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;            |
| C24, C25                                                                                                       | 2                                                                                                            | C0402C101K5GAC; C1005C0G1H101K050BA                                                                          | KEMET; TDK                                                                                                   | 100PF                                                                                                        | CAPACITOR; SMT; 0402; CERAMIC; 100pF; 50V; 10%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                       |
| C26, C27                                                                                                       | 2                                                                                                            | TMK325ABJ476MM                                                                                               | TAIYO YUDEN                                                                                                  | 47UF                                                                                                         | CAP; SMT (1210); 47UF; 20%; 25V; X5R; CERAMIC CHIP                                                               |
| GND, IN1, IN2, OUT1, OUT2, PGND1- PGND6, SYS                                                                   | 12                                                                                                           | 9020 BUSS                                                                                                    | WEICO WIRE                                                                                                   | MAXIM PAD                                                                                                    | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                         |
| IN1S, IN2S, OUT1S, OUT2S                                                                                       | 4                                                                                                            | 5000                                                                                                         | KEYSTONE                                                                                                     | N/A                                                                                                          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| J1-J4, J6-J8, J15                                                                                              | 8                                                                                                            | TSW-103-07-T-S                                                                                               | SAMTEC                                                                                                       | TSW- 103-07- T-S                                                                                             | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                 |
| J5, J17                                                                                                        | 2                                                                                                            | TSW-102-26-T-T                                                                                               | SAMTEC                                                                                                       | TSW- 102-26- T-T                                                                                             | CONNECTOR; THROUGH HOLE; TSW SERIES; TRIPLE ROW; STRAIGHT; 6PINS                                                 |
| J10, J12-J14                                                                                                   | 4                                                                                                            | SS-102-TT-2                                                                                                  | SAMTEC                                                                                                       | SS-102- TT-2                                                                                                 | IC-SOCKET; SIP; STRAIGHT; PRECISION MACHINED SOCKET STRIP; OPEN FRAME; 2PINS; 100MIL                             |
| J11                                                                                                            | 1                                                                                                            | PPPC092LJBN-RC                                                                                               | SULLINS ELECTRONICS CORP                                                                                     | PPPC09 2LJBN- RC                                                                                             | CONNECTOR; FEMALE; THROUGH HOLE; PPP SERIES; RIGHTANGLE; 18PINS                                                  |
| J16                                                                                                            | 1                                                                                                            | PEC04SAAN                                                                                                    | SULLINS ELECTRONICS CORP.                                                                                    | PEC04 SAAN                                                                                                   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                        |
| J18                                                                                                            | 1                                                                                                            | PBC02SAAN                                                                                                    | SULLINS ELECTRONICS CORP.                                                                                    | PBC02 SAAN                                                                                                   | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                     |

WLP Package

## MAX77540 EV Kit Bill of Materials (continued)

| REF_DES        |   QTY* | MFG PART #                       | MANUFACTURER               | VALUE   | DESCRIPTION                                                                                                        |
|----------------|--------|----------------------------------|----------------------------|---------|--------------------------------------------------------------------------------------------------------------------|
| L3, L4         |      2 | DFE252012F-R47M                  | MURATA                     | 0.47UH  | INDUCTOR; SMT (1008); METAL; 0.47UH; 20%; 4.9A                                                                     |
| L5, L6         |      2 | DFE252012F-1R5M                  | MURATA                     | 1.5UH   | INDUCTOR; SMT (1008); SHIELDED; 1.5UH; 20%; 2.7A                                                                   |
| PGND1S, PGND2S |      2 | 5001                             | KEYSTONE                   | N/A     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| R1, R6         |      2 | 3296Y-1-204LF                    | BOURNS                     | 200K    | RESISTOR; THROUGH HOLE-RADIAL LEAD; 3296 SERIES; 200K OHM; 10%; 100PPM; 0.5W                                       |
| R2, R3         |      2 | CRCW04022K20FK; RC0402FR-072K2L  | VISHAY DALE; YAGEO PHICOMP | 2.2K    | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                          |
| R4, R8         |      2 | ERJ-2GE0R00                      | PANASONIC                  | 0       | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                               |
| R5, R7, R9     |      3 | CRCW040210K0FK; RC0402FR-0710KL  | VISHAY DALE; YAGEO PHICOMP | 10K     | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                               |
| R10-R12        |      3 | CRCW25120000ZS                   | VISHAY DALE                | 0       | RESISTOR; 2512; 0 OHM; 1%; JUMPER; 1.0W; METAL FILM                                                                |
| R13            |      1 | CRCW040275K0FK; RC0402FR-0775KL  | VISHAY; YAGEO              | 75K     | RESISTOR; 0402; 75K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                            |
| R14            |      1 | CRCW0402100KFK; RC0402FR-07100KL | VISHAY; YAGEO              | 100K    | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                              |
| PCB            |      1 | MAX77540                         | MAXIM                      | PCB     | PCB:MAX77540                                                                                                       |
| C4             |      0 | KTJ250B107M76BFT00               | UNITED CHEMI-CON           | 100UF   | CAP; SMT (3126); 100UF; 20%; 25V; X7R; CERAMIC CHIP                                                                |
| R15            |      0 | N/A                              | N/A                        | OPEN    | RES; SMT (2512); OPEN                                                                                              |

│

Evaluates: MAX77540 in

WLP Package

## MAX77540 Evaluation Kit

## MAX77540 EV Kit Schematics

<!-- image -->

## MAX77540 Evaluation Kit

## MAX77540 EV Kit PCB Layouts

MAX77540 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX77540 EV Kit PCB Layouts (continued)

MAX77540 EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX77540 in

│

## MAX77540 EV Kit PCB Layouts (continued)

MAX77540 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Evaluates: MAX77540 in

│

## MAX77540 EV Kit PCB Layouts (continued)

MAX77540 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

Evaluates: MAX77540 in

│

## MAX77540 EV Kit PCB Layouts (continued)

<!-- image -->

MAX77540 EV Kit PCB Layout-PWR

Evaluates: MAX77540 in

│

## MAX77540 EV Kit PCB Layouts (continued)

MAX77540 EV Kit PCB Layout-GND

<!-- image -->

Evaluates: MAX77540 in

│

## MAX77540 EV Kit PCB Layouts (continued)

<!-- image -->

MAX77540 EV Kit PCB Layout-Bottom

Evaluates: MAX77540 in

│

## MAX77540 EV Kit PCB Layouts (continued)

<!-- image -->

MAX77540 EV Kit Component Placement Guide-Bottom Silkscreen

Evaluates: MAX77540 in

│

## MAX77540 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77540 in

WLP Package