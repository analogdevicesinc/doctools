<!-- lastmod 2022-08-02 -->
## MAX77541 Evaluation Kit

## General Description

The MAX77541 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the MAX77541 dual-phase configurable step-down regulator. The board is equipped with test points and jumpers for  testing  all  pins  on  the  device.  Three  potentiometers allow the user to adjust the SEL1/SEL2/CFG configuration pins at will. There are also probe sockets on critical nodes  (VOUTx,  LXx)  for  precise  measurements.  The board also comes with some spare inductors (L3-L6) for testing out efficiency/performance tradeoffs. The PCB is designed with Maxim Integrated's recommended layout of the IC and external components. The IC sets default output voltages by way of R13 and R14, but can be changed with  the  potentiometers  or  through  I 2 C  communication. Maxim  Integrated's  graphical  user  interface  (GUI)  can be  used  by  connecting  J11  to  a  Windows ® -based  PC through a MAXUSB\_INTERFACE# device.

Ordering Information appears at end of data sheet.

## Features

- Probe sockets for high-accuracy measurements
- Test points for all features (POK, FPWM, EN, and IRQB)
- Default output voltage adjustable through SEL
- I 2 C slave ADDR, ILIM, f SW  preset by CFG
- Connector for custom I 2 C host

## Checklist

- The MAX77541 EV kit
- USB to I 2 C interface (MAXUSB\_INTERFACE#)
- USB Type-A to Micro-USB cable
- Windows-based graphical user interface (GUI) software is available for use with the EV kit and can be downloaded  from  Maxim  Integrated's  website  at https://www. maximintegrated.com/products/MAX77541EVKIT under the Design Resources tab. Windows 7 or newer is required to use the EV kit GUI software.

Figure 1. MAX77541 Evaluation Board

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Evaluates: MAX77541 in Wafer-Level Package

<!-- image -->

## MAX77541 Evaluation Kit

## EV kit Specification and Default Configuration

The MAX77541 EV kit comes with the following default settings:

- VOUT1 = 0.65V (dual phase)
- VOUT2 = 1.1V (ignored since buck is in dual phase)
- f SW = 1.6MHz

## Table 1. EV Kit Default Specifications

| SPECIFICATION       | TEST CONDITIONS                   |   MIN |   TYP |   MAX | UNIT   |
|---------------------|-----------------------------------|-------|-------|-------|--------|
| Input Voltage       |                                   |   2.2 |       |   5.5 | V      |
| Output Voltage      | Configurable by SEL or with I 2 C |   0.3 |       |   5.2 | V      |
| Output Current      | Per Phase                         |     0 |       |     3 | A      |
| Switching Frequency |                                   |       |   1.6 |       | MHz    |
| Current Limit       |                                   |       |   4.6 |       | A      |

## Table 2. Default Shunt Positions and Jumper Descriptions

| JUMPER   | NODE OR FUNCTION    | SHUNT POSITION   | FUNCTION                                                                 |
|----------|---------------------|------------------|--------------------------------------------------------------------------|
| J1       | SEL1                | 1-2*             | Connects SEL1 to fixed 649Ω resistor (0.65V OUT default)                 |
| J1       | SEL1                | 2-3              | Connects SEL1 to the potentiometer for adjustable default V OUT          |
| J2       | EN1                 | 1-2              | Connects EN1 to SYS (enables Buck 1)                                     |
| J2       | EN1                 | 2-3*             | Connects EN1 to GND (disables Buck 1)                                    |
| J3       | FPWM1               | 1-2              | Connects FPWM1 to VIO (Buck 1 FPWM mode enabled)                         |
| J3       | FPWM1               | 2-3*             | Connects FPWM1 to GND (Buck 1FPWM mode disabled)                         |
| J4       | I2C_EN              | 1-2*             | Connects I2C_EN to VIO (enables I 2 C)                                   |
| J4       | I2C_EN              | 2-3              | Connects I2C_EN to GND (disables I 2 C)                                  |
| J5       | SEL2                | 2-4              | Connects SEL2 to fixed 2.87kΩ resistor (1.1V OUT default)                |
| J5       | SEL2                | 3-4*             | Connects SEL2 to GND (enables dual-phase operation)                      |
| J5       | SEL2                | 4-6              | Connects SEL2 to the potentiometer for adjustable default V OUT          |
| J6       | EN2                 | 1-2              | Connects EN2 to SYS (enables Buck 2)                                     |
| J6       | EN2                 | 2-3*             | Connects EN2 to GND (disables Buck 2)                                    |
| J7       | FPWM2               | 1-2              | Connects FPWM2 to VIO (Buck 2 FPWM mode enabled)                         |
| J7       | FPWM2               | 2-3*             | Connects FPWM2 to GND (Buck 2 FPWM mode disabled)                        |
| J8       | CFG                 | 1-2*             | Connects CFG to 64.9kΩ (sets I 2 C address, Mx_ILIM, and Mx_FREQ)        |
| J8       | CFG                 | 2-3              | Connects CFG to potentiometer (sets I 2 C address, Mx_ILIM, and Mx_FREQ) |
| J11      | USB Connector (GUI) | N/A              | GUI (MAXUSB_INTERFACE#) connector                                        |
| J15      | VIO                 | 1-2*             | Powers VIO from the GUI connector                                        |
| J15      | VIO                 | 2-3              | Powers VIO from the external header J16                                  |
| J16      | External I 2 C      | N/A              | External header for I 2 C host                                           |
| R12      | Phase Configuration | N/A              | Remove to separate OUT2 from OUT1                                        |

- Skip mode
- Soft-Start and DVS ramp up rate = 5.0mV/µs
- Soft-Stop and DVS ramp down rate = -0.15mV/µs
- 100Ω active discharge enabled (7Ω is disabled)
- Current Limit = 4.6A when set to dual phase
- MAX77541AAWV+T installed

Evaluates: MAX77541 in

Wafer-Level Package

│

## MAX77541 Evaluation Kit

## Quick Start

## Required Equipment

- Adjustable DC power supply or applicable battery
- Multimeter
- MAXUSB\_INTERFACE# for I 2 C serial interface (optional)
- USB Type-A to Micro-USB Cable (optional)
- Windows-based PC with MAX77541 EV kit GUI (optional)

Figure 2. Simplified Setup Block Diagram

<!-- image -->

Figure 3. Application Circuit

<!-- image -->

## Evaluates: MAX77541 in Wafer-Level Package

## Setup Overview

Figure  2  depicts  a  simplified  block  diagram  of  a  typical EV kit  setup,  attach  more  meters  and  scope  probes  as needed.  Figure  3  depicts  a  typical  application  circuit  of the MAX77541.

│

## MAX77541 Evaluation Kit

## Procedure

Follow this procedure for first time evaluation:

- 1) Ensure that the jumpers are configured as shown in Table 2.
- 2) Apply a valid voltage (like 3.8V) from a power supply to the SYS and PGND3 terminals of the EV kit. Do not turn it on yet.
- 3) Important: make sure the phase configuration is correct. See the Phase Configuration section.
- 4) Connect the MAXUSB\_INTERFACE# circuit to J11 on the EV kit, then connect a USB cable between the PC and the MAXUSB\_INTERFACE circuit.
- 5) Turn on the power supply and connect to the EV kit through the GUI.
- 6) Turn on Buck 1 either with the GUI or moving the shunt on the EN1 jumper to SYS.
- 7) Measure OUT1 with a voltmeter. It should read 0.65V.
- 8) Use the GUI to exercise the various features of the MAX77541.

Note: When powering down or power cycling the device, remove  VIO  (or  set  I2C\_EN  to  ground  with  J4)  before removing power from SYS.

The next steps of the procedure use the EV kit GUI and MAXUSB\_INTERFACE#  to  evaluate  MAX77541's  I 2 C serial interface. If evaluation of the I 2 C serial interface is not required, the following steps can be skipped. The EV kit  includes onboard 2.2kΩ pullup resistors (R4 and R7) to VIO.

Note: In the following sections, software-related items are identified as follows: Text in bold refers to items directly from  the  evaluation  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

- 9) Install GUI software. Visit the product webpage at https://www.maximintegrated.com/products/MAX77541EVKIT and navigate to the Design Resources to download the latest version of the EV kit software. Save the EV kit software installation file to a tempo -rary folder and decompress the ZIP file. Run the .EXE file and follow the on-screen instructions to complete installation.
- 10) Turn off the 1.8V VIO power supply and input power supply connected in steps 4 and 5.
- 11) Disconnect the 1.8V VIO power supply connected in step 4 from the EV kit. MAXUSB\_INTERFACE# has an on-board LDO to supply 1.8V to VIO.

## Evaluates: MAX77541 in Wafer-Level Package

- 12)  Ensure SW1 and SW2 switches on the MAXUSB\_IN-TERFACE# are set to the ON position. This enables I 2 C mode on MAXUSB\_INTERFACE#.
- 13)  Connect the MAXUSB\_INTERFACE# to the MAX77541 EV kit. Connect the MAXUSB\_INTER-FACE# to the PC's USB port with a USB Type-A to Micro-USB cable.
- 14)  Turn on the input power supply.
- 15)  Open the GUI and click the Device button in the menu bar. Select Connect in the Device drop-down list. Wait for the device to respond, then click the Connect button in the Synchronize window.
- 16)  Drag the slider bar in the Output Voltage Configura -tion section to change the output voltage and click the Write button.
- 17) Confirm with a DVM that the software instruction to change output voltage was successful. If so, the I 2 C serial interface is confirmed to be working.

This concludes the Quick Start procedure. Users are now encouraged to further explore the device and its register settings with the GUI software. For more information on the GUI, see the Detailed Description of Software section.

## EV Kit Hardware

## MAXUSB\_INTERFACE#

The  MAXUSB\_INTERFACE#  along  with  the  companion  EV  kit  GUI  software  allows  users  to  easily  change MAX77541's register settings with a Windows PC. Before connecting  the  MAXUSB\_INTERFACE#  to  the  EV  kit's MAXUSB\_INTERFACE# connector (J5), make sure the MAXUSB\_INTERFACE# is configured with the following settings:

- SW1, SW2 to the ON position (this enables I 2 C mode on the MAXUSB\_INTERFACE#)
- VL Jumper (J5) to 1.8V (this sets MAXUSB\_ INTERFACE#'s V IO  voltage)

MAXUSB\_INTERFACE# also includes an on-board LDO that can supply necessary voltage to V IO .

## External I 2 C Bus

To  use  a  different  I 2 C  host,  disconnect  the  MAXUSB\_ INTERFACE# or the USB cable and attach I 2 C wires to J16 on the EV kit.

## MAX77541 Evaluation Kit

## Phase Configuration

To  set  the  MAX77541  to  dual-phase  operation,  set  J5 to  the  3:4  position.  Use  the  nearby  silk  screen  as  a reference.

Phase configuration is set by SEL2. If SEL2 is shorted to GND (effectively 0Ω), the part will be in 2 phase; if SEL2 is higher than 200Ω, the part will be in 1+1 phase. Resistor R12 (on the bottom side of the board) connects the two outputs together. Ensure that R12 is installed/uninstalled based on desired phase configuration (see Table 3).

## Change Default Setup with RSEL1/RSEL2

Note  that  the  MAX77541  EV  kit  is  default  configured for  dual phase operation, with VOUT1 set to 0.65V and VOUT2 set to 1.1V (by way of R13 and R14). To evaluate other default configurations (for different voltages/ranges upon  first  power-up),  change  the  resistance  at  SEL1/2 with either of the potentiometers or R13/R14. Refer to the device datasheet for more information.

## High Temperature Testing

The  MAX77541  is  rated  for  operation  under  ambient/ junction  temperatures  up  to  125°C.  Note  that  not  all components on the EV kit are rated for temperatures that high. Some ceramic capacitors experience extra leakage when put under temperatures higher than they are rated for, and supply current readings for the IC might be larger than expected. Double check the components on the EV kit if testing at 125°C ambient temperatures.

## Table 3. Phase Configuration Truth Table

| SEL2   | R12   | PHASE CONFIGURATION    |
|--------|-------|------------------------|
| 0Ω     | 0Ω    | Dual Phase (2ϕ)        |
| 0Ω     | Open  | Mismatch               |
| >200Ω  | 0Ω    | Mismatch               |
| >200Ω  | Open  | Single Phase (1ϕ + 1ϕ) |

## Evaluates: MAX77541 in Wafer-Level Package

List of caps not rated for 125°C: C10-C23 (Buck 1 and 2 output capacitors)

Consider replacing these components if IC operation at 125°C ambient temperature is an important use case.

## Test Points and Critical Node Measurement (VOUT &amp; LX)

The  EV  kit  comes  with  sockets  presoldered  onto  the board for measuring the critical nodes VOUT1 (J10), LX1 (J14),  VOUT2  (J12),  and  LX2  (J13).  Use  these  probe sockets  to  eliminate  as  much  noise  as  possible  when measuring the critical nodes. To ensure best results, use a  very  short  ground  wire  from  the  ground  sleeve  of  the scope probe to the GND side of the probe socket and use the bare tip of the probe directly to the signal side of the probe socket. Following these guidelines gives the most accurate results when measuring parameters like output voltage  ripple,  switching  waveforms,  and  load  transient response.

Figure 4. Example of Probing Sensitive Node

<!-- image -->

## Table 4. Test Point Selection for Measurement

| LOAD TRANSIENT, OUTPUT RIPPLE          | LOAD REGULATION, LINE REGULATION,   | EFFICIENCY     | EFFICIENCY    | SWITCHING NODE   | SWITCHING NODE   |
|----------------------------------------|-------------------------------------|----------------|---------------|------------------|------------------|
|                                        | VOUT ACCURACY                       | OUTPUT VOLTAGE | INPUT VOLTAGE | LX1              | LX2              |
| J10 (VOUT1 SOCKET), J12 (VOUT2 SOCKET) | INxS, OUTxS, PGNDxS                 | OUTxS, PGNDxS  | INxS, OUTxS   | J14              | J13              |

│

## MAX77541 Evaluation Kit

## Detailed Description of Software

The  Graphical  User  Interface  (GUI)  software  allows  for quick, easy, and thorough evaluation of the MAX77541. The GUI drives I 2 C communication with the EV kit (the GUI  along  with  the  MAXUSB\_INTERFACE#  drives  I 2 C communication with the EV kit). Every control in the GUI corresponds directly to a register within the MAX77541. Refer to the Register Map section of MAX77541 IC data sheet  for  a  complete  description  of  the  registers.  See Figure 5 for a screenshot of the GUI upon launch.

## Installation

Visit  the  product  webpage  at https://www.maximintegrated.com/products/MAX77541EVKIT and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software installation file to a temporary folder and decompress the ZIP file. Run the .EXE installer and follow the on-screen instructions to complete the installation.

## Windows Driver

After plugging in the MAXUSB\_INTERFACE# to the PC with a Micro-USB cable for the first time, wait about 30 seconds for Windows to automatically install the necessary drivers.

## Connecting GUI

After  opening  the  GUI,  click  the Device drop  down  list in  the  upper  left  corner  of  the  GUI  window  and  select Connect .

The Device  Synchronization menu  opens  (Figure  7) once the MAX77541 IC responds (voltages on SYS pin and V IO  pin must be valid on the MAX77541 IC for it to respond). The I 2 C address shown is the MAX77541 IC's 7-bit slave address. The address shown changes depending on the EV kit's ADDR configuration. Click the Connect button.  The  text  at  the  bottom  right  of  the  GUI  window changes  from MAXUSB\_INTERFACE# is  Disconnected to MAXUSB\_INTERFACE# is Connected.

Figure 5. MAX77541 Evaluation Kit GUI Top-Level Interface (before Connecting)

<!-- image -->

## Evaluates: MAX77541 in Wafer-Level Package

│

## MAX77541 Evaluation Kit

Figure 6. Port Synchronization Menu

<!-- image -->

Evaluates: MAX77541 in

## Configuring the Regulator

The GUI has a configuration tab for each buck (Buck 1 Configuration  and  Buck  2  Configuration).  Use  these  to adjust the various parameters of each buck. Note that Buck 2 Configuration is disabled during dual phase operation. Figure 7 shows a snapshot of the Buck 1 Configuration tab. To use the GUI, select the desired option in one of the interactable  fields  (button,  slider,  or  drop-down  list)  and click the Write button next to it. Use the Read button to refresh the current state of the registers.

## PCB Layout Guidelines

Careful  circuit  board  layout  is  critical  to  achieve  low switching  power  losses  and  clean,  stable  operation. Refer  to https://www.maximintegrated.com/products/ MAX77541EVKIT for  the PCB Layout Guideline section of the MAX77541 data sheet.

Figure 7. Primary Control Portion of Main GUI Window

<!-- image -->

## Ordering Information

# Denotes RoHS compliant

<!-- image -->

│

## MAX77541 Evaluation Kit

## MAX77541 EV Kit Bill of Materials

| REF_DES                                                                                                      | QTY                                                                                                          | MFG PART #                                                                                                   | MANUFACTURER                                                                                                 | VALUE                                                                                                        | DESCRIPTION                                                                                                  |
|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| C2                                                                                                           | 2                                                                                                            | C1005X7S1A225K050BC                                                                                          | TDK                                                                                                          | 2.2UF                                                                                                        | CAPACITOR; SMT (0402); CERAMIC CHIP; 2.2UF; 10V; TOL = 10%; TG=-55 DEGC TO +125 DEGC; TC = X7S;              |
| C3                                                                                                           | 1                                                                                                            | C1005X7S1A105K; GRM155C71A105KE11                                                                            | TDK/MURATA                                                                                                   | 1UF                                                                                                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL = 10%; TG=-55 DEGC TO +125 DEGC; TC = X7S;                |
| C5, C6                                                                                                       | 2                                                                                                            | GRM188R61E106MA73                                                                                            | MURATA                                                                                                       | 10UF                                                                                                         | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                     |
| C7                                                                                                           | 1                                                                                                            | GRM188R71A225KE15                                                                                            | MURATA                                                                                                       | 2.2UF                                                                                                        | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R           |
| C8, C9                                                                                                       | 2                                                                                                            | C1005X7R1C104K050BC                                                                                          | TDK                                                                                                          | 0.1UF                                                                                                        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                   |
| C10-C21                                                                                                      | 12                                                                                                           | C1608X5R1A226M080A; GRM188R61A226ME15                                                                        | TDK; MURATA                                                                                                  | 22UF                                                                                                         | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                     |
| C22, C23                                                                                                     | 2                                                                                                            | GRM155R71E104KE14; C1005X7R1E104K050BB                                                                       | MURATA; TDK                                                                                                  | 0.1UF                                                                                                        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R |
| L1, L2                                                                                                       | 2                                                                                                            | GLULMR4701A                                                                                                  | ALPS                                                                                                         | 0.47UH                                                                                                       | INDUCTOR; SMT (1008); METAL; 0.47UH; 20%; 5.6A                                                               |
| U1                                                                                                           | 1                                                                                                            | MAX77541AAWV+                                                                                                | MAXIM                                                                                                        | MAX77541AAWV+                                                                                                | EVKIT PART-IC; MAX77541AAWV+; PACKAGE OUTLINE:21-100479; PACKAGE CODE: W302R2Z+1; WLP30                      |
| Components below this line are outside of the immediate MAX77541 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77541 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77541 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77541 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77541 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77541 evaluation circuit and solution silkscreen. |
| BST1, BST2, CFG, EN1, EN2, FPWM1, FPWM2, I2C_EN, IRQB, POK1, POK2, SCL, SDA, SEL1, SEL2, VDD, VIO, VL        | 18                                                                                                           | 5002                                                                                                         | KEYSTONE                                                                                                     | N/A                                                                                                          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;        |

│

Evaluates: MAX77541 in

Wafer-Level Package

## MAX77541 Evaluation Kit

## MAX77541 EV Kit Bill of Materials (continued)

| REF_DES                                     |   QTY | MFG PART #                          | MANUFACTURER              | VALUE          | DESCRIPTION                                                                                                        |
|---------------------------------------------|-------|-------------------------------------|---------------------------|----------------|--------------------------------------------------------------------------------------------------------------------|
| C24, C25                                    |     2 | C0402C101K5GAC; C1005C0G1H101K050BA | KEMET;TDK                 | 100PF          | CAPACITOR; SMT; 0402; CERAMIC; 100pF; 50V; 10%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                         |
| C26, C27                                    |     2 | GRM32ED71A476KE15                   | MURATA                    | 47UF           | CAP; SMT (1210); 47UF; 10%; 10V; X7T; CERAMIC CHIP                                                                 |
| GND, IN1, IN2, OUT1, OUT2, PGND1-PGND6, SYS |    12 | 9020 BUSS                           | WEICO WIRE                | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                           |
| IN1S, IN2S, OUT1S, OUT2S                    |     4 | 5000                                | KEYSTONE                  | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
| J1-J4, J6-J8, J15                           |     8 | TSW-103-07-T-S                      | SAMTEC                    | TSW-103-07-T-S | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                   |
| J5                                          |     2 | TSW-102-26-T-T                      | SAMTEC                    | TSW-102-26-T-T | CONNECTOR; THROUGH HOLE; TSW SERIES; TRIPLE ROW; STRAIGHT; 6PINS                                                   |
| J11                                         |     1 | PPPC092LJBN-RC                      | SULLINS ELECTRONICS CORP  | PPPC092LJBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; PPP SERIES; RIGHTANGLE; 18PINS                                                    |
| J16                                         |     1 | PEC04SAAN                           | SULLINS ELECTRONICS CORP. | PEC04SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                          |
| J18                                         |     1 | PBC02SAAN                           | SULLINS ELECTRONICS CORP. | PBC02SAAN      | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                       |
| L3, L4                                      |     2 | GLULMR2201A                         | ALPS                      | 0.22UH         | INDUCTOR; SMT (1008); METAL; 0.22UH; 20%; 7.00A                                                                    |
| L5, L6                                      |     2 | DFE252012F-1R0M                     | MURATA                    | 1.0UH          | INDUCTOR; SMT (1008); SHIELDED; 1.0UH; 20%; 3.3A                                                                   |
| PGND1S, PGND2S                              |     2 | 5001                                | KEYSTONE                  | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |

│

Evaluates: MAX77541 in

Wafer-Level Package

## MAX77541 EV Kit Bill of Materials (continued)

| REF_DES     |   QTY | MFG PART #                       | MANUFACTURER               | VALUE   | DESCRIPTION                                                                  |
|-------------|-------|----------------------------------|----------------------------|---------|------------------------------------------------------------------------------|
| R1, R6, R16 |     2 | 3296Y-1-204LF                    | BOURNS                     | 200K    | RESISTOR; THROUGH HOLE-RADIAL LEAD; 3296 SERIES; 200K OHM; 10%; 100PPM; 0.5W |
| R2, R3      |     2 | CRCW04022K20FK; RC0402FR-072K2L  | VISHAY DALE; YAGEO PHICOMP | 2.2K    | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM                    |
| R4, R8      |     2 | ERJ-2GE0R00                      | PANASONIC                  | 0       | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                         |
| R5, R7, R9  |     3 | CRCW040210K0FK; RC0402FR-0710KL  | VISHAY DALE; YAGEO PHICOMP | 10K     | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                         |
| R10-R12     |     3 | CRCW25120000ZS                   | VISHAY DALE                | 0       | RESISTOR; 2512; 0 OHM; 1%; JUMPER; 1.0W; METAL FILM                          |
| R13         |     1 | ERJ-2RKF6490                     | PANASONIC                  | 649     | RESISTOR; 0402; 649 OHM; 1%; 100PPM; 0.1000W;                                |
| R14         |     1 | CR0402-16W-2871F; CRCW04022K87   | VENKEL LTD.; VISHAY DALE   | 2.87k   | RES; SMT (0402); 2.87K; 1%; +/-100PPM/ DEGC; 0.0630W                         |
| R17         |     1 | CRCW040264K9FK; RC0402FR-0764K9L | VISHAY; YAGEO              | 64.9K   | RES; SMT (0402); 64.9K; 1%; +/-100PPM/ DEGK; 0.0630W                         |
| PCB         |     1 | MAX77541                         | MAXIM                      | PCB     | PCB:MAX77541                                                                 |
| C4          |     0 | KTJ250B107M76BFT00               | UNITED CHEMI-CON           | 100UF   | CAP; SMT (3126); 100UF; 20%; 25V; X7R; CERAMIC CHIP                          |
| R15         |     0 | N/A                              | N/A                        | OPEN    | RES; SMT (2512); OPEN                                                        |

│

Evaluates: MAX77541 in

Wafer-Level Package

## MAX77541 EV Kit Schematic Diagrams

<!-- image -->

## MAX77541 Evaluation Kit

## MAX77541 EV Kit PCB Layout Diagrams

MAX77541 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Evaluates: MAX77541 in

│

## MAX77541 EV Kit PCB Layout Diagrams (continued)

MAX77541 EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX77541 in

│

## MAX77541 EV Kit PCB Layout Diagrams (continued)

MAX77541 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

Evaluates: MAX77541 in

│

## MAX77541 EV Kit PCB Layout Diagrams (continued)

MAX77541 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

Evaluates: MAX77541 in

│

## MAX77541 EV Kit PCB Layout Diagrams (continued)

MAX77541 EV Kit PCB Layout-Internal Layer 4

<!-- image -->

Evaluates: MAX77541 in

│

## MAX77541 EV Kit PCB Layout Diagrams (continued)

MAX77541 EV Kit PCB Layout-Internal Layer 5

<!-- image -->

Evaluates: MAX77541 in

│

## MAX77541 EV Kit PCB Layout Diagrams (continued)

MAX77541 EV Kit PCB Layout-Bottom Layer

<!-- image -->

Evaluates: MAX77541 in

│

## MAX77541 EV Kit PCB Layout Diagrams (continued)

MAX77541 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

Evaluates: MAX77541 in

│

## MAX77541 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 5/21            | Release for Market Intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77541 in

Wafer-Level Package