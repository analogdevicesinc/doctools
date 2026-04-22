<!-- lastmod 2023-05-25 -->
<!-- image -->

Click here to ask an associate for production status of specific part numbers.

## Evaluates: MAX77348A, MAX77348B in WLP Package

## General Description

The MAX77348 evaluation kit (EV kit) provides a proven design to  evaluate  the  MAX77348,  a  3.5  W  buck-boost converter. The IC is capable of 2.3 V to 5.5 V input, and its output voltage is adjustable between 2.5 V to 4.8 V. The factory default output voltage of this EV kit is set at 4.5 V. Output voltage can be adjusted through the software GUI. The EN pin supports hardware or software enabling of the device. The EV kit is compatible with any version of the MAX77348 WLP IC (MAX77348AEWE+ is the default).

## Equipment Included

- The MAX77348 evaluation board
- USB to I 2 C interface (MAXUSB\_INTERFACE#)
- USB Type A to Micro USB cable Windows®-based GUI software is available for use with the EV kit

## EV Kit Photo

<!-- image -->

319-100955; Rev 1; 4/23

## MAX77348 Evaluation Kit

## Features

- Sense points for high-accuracy measurements
- Accessible test points for EN, SDA, SCL, INS, and OUTS
- Output voltage adjustable through software GUI
- FPWM and default skip mode configurability
- Active discharge functionality

Ordering Information appears at end of data sheet.

Evaluates: MAX7348, MAX7348B

in WLP Package

## EV Kit Specifications and Default Configurations

- IC part number: MAX77348AEWE+T
- Maximum power limit = 3.5 A
- Active discharge engaged when EN = 0
- UVLO rising = 2.19 V, UVLO falling = 2.10 V (MAX77348AEWE+)

## Table 1. EV Kit Default Specifications

| SPECIFICATION              | TEST CONDITIONS                                | MIN   | TYP   |   MAX | UNIT   |
|----------------------------|------------------------------------------------|-------|-------|-------|--------|
| Input Voltage              |                                                | 2.3   |       |   5.5 | V      |
| Output Voltage             | Configurable by SEL resistor R3 (see Table 2). | 2.5   |       |   4.8 | V      |
| Default Output Voltage     |                                                | 4.5   | 4.5   |   4.5 | V      |
| Output Current             |                                                | 0     |       |   1   | A      |
| MAX Output Operative Power | FETSCALE = 0, L = 1 µH                         | 3.5   | 3.5   |   3.5 | W      |
| Peak Efficiency            | 3.6 V IN , 3.3 V OUT , 300 mAload              |       |       |  94   | %      |

## Table 2. Default Shunt Positions and Jumper Descriptions

| JUMPER   | NODE OR FUNCTION   | SHUNT POSITION   | FUNCTION                                           |
|----------|--------------------|------------------|----------------------------------------------------|
| J1       | EN                 | 1-2*             | Connects EN to VL (MAX77348 is enabled by default) |
| J2       | VL                 | 1-2*             | Connects VL to MAXUSB power rail                   |
| J3       | SDA                | 1-2*             | Enables I 2 C (SDA)                                |
| J5       | SCL                | 1-2*             | Enables I 2 C (SCL)                                |

│

## MAX77348 Evaluation Kit

## Quick Start

## Required Equipment

- MAX77348 EV kit
- Adjustable DC power supply
- A 1.8V DC power supply (optional)
- Digital multimeters
- MAXUSB\_INTERFACE# for I 2 C Serial Interface (optional)
- USB Type-A to micro-USB cable (optional)
- Windows-based PC with MAX77348 EV kit GUI (optional)

## Setup Overview

A typical bench setup for the MAX77348 WLP EV kit is shown in Figure 1. A simplified  EV  kit  block  diagram  is shown in Figure 2.

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation. Use twisted wires of appropriate gauge (20AWG) that are as short as possible to connect the load and power sources.

Figure 1. EV Kit Connection Block Diagram

<!-- image -->

Figure 2. EV Kit Simplified Block Diagram

<!-- image -->

## Evaluates: MAX7348, MAX7348B in WLP Package

- 1) Ensure that the EV kit has the correct jumper settings as shown in Table 1.
- 2) Connect a DVM to the INS and GND1S sense pins to measure the input voltage.
- 3) Connect a DVM to the OUTS and GNDS2 sense pins to measure the output voltage.
- 4) Apply a power supply set to 0 V (100 mA current limit) across the IN and GND terminals of the EV kit. Turn on the supply and increase the voltage to 3.8 V.
- 5) Apply a secondary power supply of 1.8 V to VL or use a MAXUSB plugged in to a PC to get a 1.8 V supply on VL.
- 6) Confirm the DVM connected to OUTS and GNDS2 reads the default output voltage of the EV kit (4.5 V).

The next steps of the procedure use the EV kit GUI and MAXUSB\_INTERFACE# to evaluate the MAX77348's I 2 C serial interface. If evaluation of the I 2 C serial interface is not required, skip the following set of steps. The EV kit includes onboard 2.2 kΩ pull-up resistor to VL.

- 1) Install GUI software. Run the .exe file and follow the on-screen instructions to complete installation.
- 2) Turn off the 1.8 V VL power supply and input power supply connected in steps 4 and 5.
- 3) Disconnect the 1.8 V VL power supply connected in step 5 from the EV kit. The MAXUSB\_INTERFACE# has an on-board LDO to supply 1.8 V to VL.
- 4) Ensure the SW1 and SW2 switches on the MAX-USB\_INTERFACE# are set to the ON position. This enables I 2 C mode on MAXUSB\_INTERFACE#.
- 5) Ensure VL jumper on MAXUSB\_INTERFACE# (J5) is set to 1.8 V. This sets MAXUSB\_INTERFACE#'s VIO voltage. If set incorrectly to 3.3 V, potential damage can be done the MAX77348 IC.
- 6) Connect MAXUSB\_INTERFACE# to MAX77348 EV kit. Connect the MAXUSB\_INTERFACE# to your PC's USB port through a USB Type-A to Micro-USB cable.
- 7) Turn on the input power supply.
- 8) Open the GUI. The EV kit automatically connects to the GUI. Connected appears at the bottom right of the GUI window.
- 9) Drag the slide bar in Output Voltage Configuration section to change the output voltage and click Write .
- 10) Confirm with a DVM that the software instruction to change output voltage was successful. If so, the I 2 C serial interface is working.

This  concludes  the Quick  Start procedure.  Explore  the device and its register settings further using the GUI software. For more information on the GUI, see the EV Kit Software section.

## MAX77348 Evaluation Kit

## EV Kit Hardware

## MAXUSB\_INTERFACE#

The MAXUSB\_INTERFACE#, along with the companion EV kit GUI software, facilitates changing the MAX77348's register settings with a Windows PC. Before connecting the  MAXUSB\_INTERFACE#  to  the  EV  kit's  MAXUSB\_ INTERFACE# connector (J5), make sure the MAXUSB\_ INTERFACE# is configured with the following settings:

- Set SW1, SW2 to the ON position to enable I 2 C mode on the MAXUSB\_INTERFACE#.
- Set the VL jumper (J5) to 1.8 V to set the MAXUSB\_ INTERFACE#'s VIO voltage.

## WARNING: Incorrectly setting this to 3.3V can poten -tially damage the MAX77348 IC.

The MAXUSB\_INTERFACE# also includes an on-board LDO  that  can  supply  necessary  voltage  to  V IO .  If  the MAXUSB\_INTERFACE# is used, disconnect any external VIO  supply from the EV kit, and make sure header jumpers (J3, J4) and the 0 Ω jumper (R3) are installed to con -nect the MAXUSB\_INTERFACE# to the EV kit.

## External I 2 C Bus

To  connect  an  external  I 2 C  serial  bus  and  not  use the  MAXUSB\_INTERFACE#,  unplug  the  MAXUSB\_ INTERFACE#  from  the  MAX77348  EV  kit's  MAXUSB\_ INTERFACE# connector (J9) and remove header jumpers (J2)  to  isolate  the  MAXUSB\_INTERFACE#  connector from  the  EV  kit.  Apply  external  IO  supply  to  VIO  pin. Make sure the external I 2 C serial bus's logic voltage level is  compatible to the MAX77348's IO logic voltage level. Refer to MAX77348 IC data sheet for appropriate IO logic voltage level.

## Detailed Description of Hardware

The  MAX77348  EV  kit  demonstrates  the  MAX77348 buck-boost. It regulates output from input voltage ranges from 2.3 V to 5.5 V. Programmable output range is from 2.5 V to 4.8 V with 50 mV steps. The EV kit includes a general DC input. Table 2 lists the jumpers and associated functions that are available on the EV kit.

## High Temperature Testing

The  MAX77348  is  rated  for  operation  under  ambient temperatures up to 125°C. Note that not all components on the EV kit are rated for temperatures that high. Some ceramic  capacitors  experience  extra  leakage  when  put under temperatures higher than they are rated and supply current readings for the IC might be larger than expected.

## Evaluates: MAX7348, MAX7348B in WLP Package

Double check the components on the EV kit if testing at 125°C ambient temperatures.

List of caps not rated for 125°C:

- C2, C3 (output capacitor)
- C1 (input capacitor)

Consider replacing these components if IC operation at 125°C ambient temperature is an important use case.

## Test Points and Critical Node Measurement (VOUT and LX)

The  EV  kit  comes  with  sockets  presoldered  onto  the board for measuring the critical nodes OUT1, LVLX, and HVLX.  Use  these  probe  sockets  to  eliminate  as  much noise as possible when measuring the critical nodes. To ensure best results, use a very short ground wire from the ground sleeve of the scope probe to the GND side of the probe socket, and use the bare tip of the probe directly to the signal side of the probe socket. Following these guidelines provides the most accurate results when measuring parameters such as output voltage ripple, switching waveforms, and load transient response.

Figure 3. EV Kit Probing Critical Nodes

<!-- image -->

│

## Ordering Information

| PART           | U1 IC         |   DEFAULT OUTPUT VOLTAGE (V) |   UVLO FALLING (V) |   UVLO RISING (V) |
|----------------|---------------|------------------------------|--------------------|-------------------|
| MAX77348EVKIT# | MAX77348AEWE+ |                          4.5 |                2.1 |              2.19 |

## MAX77348 EV Kit Bill of Materials

| ITEM   | REF_DES                 | DNI/DNP   |   QTY | MFG PART #                         | MANUFACTURER                          | VALUE             | DESCRIPTION                                                                                                         | COMMENTS                 |
|--------|-------------------------|-----------|-------|------------------------------------|---------------------------------------|-------------------|---------------------------------------------------------------------------------------------------------------------|--------------------------|
| 1      | C1-C3                   | -         |     3 | 04026D226MAT2A; CL05A226MQ5QUNC    | AVX;SAMSUNG                           | 22UF              | CAP; SMT (0402); 22UF; 20%; 6.3V; X5R; CERAMIC                                                                      |                          |
| 2      | C4                      | -         |     1 | GRM033R61A105ME15                  | MURATA                                | 1UF               | CAP; SMT (0201); 1UF; 20%; 10V; X5R; CERAMIC                                                                        |                          |
| 3      | C5                      | -         |     1 | GMK107BJ105KA; C1608X5R1V105K080AB | TAIYO YUDEN;TDK                       | 1.0UF             | CAP; SMT (0603); 1.0UF; 10%; 35V; X5R; CERAMIC                                                                      |                          |
| 4      | C27                     | -         |     1 | GRM155R60J104KA01; C0402C104K9PAC  | MURATA;KEMET                          | 0.1UF             | CAP; SMT (0402); 0.1UF; 10%; 6.3V; X5R; CERAMIC                                                                     |                          |
| 5      | EN, INT                 | -         |     2 | 5002                               | KEYSTONE                              | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;               |                          |
| 6      | GND, GND1-GND3, IN, OUT | -         |     6 | 9020 BUSS                          | WEICO WIRE                            | MAXIMPAD          | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                            |                          |
| 7      | GND1S, GND2S            | -         |     2 | 5001                               | KEYSTONE                              | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |                          |
| 8      | INS, OUTS               | -         |     2 | 5000                               | KEYSTONE                              | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;    |                          |
| 9      | J1                      | -         |     1 | 22-28-4033                         | MOLEX                                 | 22-28-4033        | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 3PINS                                             |                          |
| 10     | J2-J7                   | -         |     6 | 22-28-4023                         | MOLEX                                 | 22-28-4023        | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 2PINS                                             |                          |
| 11     | J9                      | -         |     1 | PPPC092LJBN-RC                     | SULLINS ELECTRONICS CORP              | PPPC092LJBN-RC    | CONNECTOR; FEMALE; THROUGH HOLE; PPP SERIES; RIGHT ANGLE; 18PINS                                                    |                          |
| 12     | L1                      | -         |     1 | DFE252012F-2R2M                    | MURATA                                | 2.2UH             | INDUCTOR; SMT (1008); SHIELDED; 2.2UH; 20%; 2.3A                                                                    |                          |
| 13     | MISC1                   | -         |     1 | AK67421-2                          | ASSMANN                               | AK67421-2         | CABLE; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; 2000 MILLIMETERS; 5PINS-4PINS      | DO NOT INSTAll           |
| 14     | MOD1                    | -         |     1 | MAXUSB_INTERFACE#                  | MAXIM                                 | MAXUSB_INTERFACE# | EVKIT PART-MODULE; KIT; MAXUSB INTERFACE; DUAL-PORT USB-TO-SERIAL INTERFACE BOARD                                   | DO NOT INSTAll           |
| 15     | R1-R4                   | -         |     4 | CRCW040210K0FK; RC0402FR-0710KL    | VISHAY DALE;YAGEO PHICOMP             | 10K               | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                   |                          |
| 16     | SCL                     | -         |     1 | 5004                               | KEYSTONE                              | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |                          |
| 17     | SDA                     | -         |     1 | 5116                               | KEYSTONE                              | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |                          |
| 18     | SU1, SU2, SU4-SU7       | -         |     6 | S1100-B;SX1100-B; STC02SYAN        | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B          | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED             | SHUNTS                   |
| 19     | U1                      | -         |     1 | MAX77348AEWE+                      | MAXIM                                 | MAX77348AEWE+     | IC; CONV; ULTRA LOW IQ; LOW NOISE 3.5W BUCK- BOOST CONVERTER; WLP16                                                 | DO NOT INSTALL           |
| 20     | PCB                     | -         |     1 | MAX77348                           | MAXIM                                 | PCB               | PCB:MAX77348                                                                                                        | -                        |
| 21     | HVLX, LVLX, OUT1        | DNP       |     0 | SS-102-TT-2                        | SAMTEC                                | SS-102-TT-2       | IC-SOCKET; SIP; STRAIGHT; PRECISION MACHINED SOCKET STRIP; OPEN FRAME; 2PINS; 100MIL                                | BUY THIS, DO NOT INSTALL |
| TOTAL  |                         |           |    43 |                                    |                                       |                   |                                                                                                                     |                          |

Evaluates: MAX7348, MAX7348B in WLP Package

## MAX77348 Evaluation Kit

## MAX77348 EV Kit Schematic

<!-- image -->

## MAX77348 Evaluation Kit

## MAX77348 EV Kit PCB Layout

MAX77348 EV Kit Component Placement Guide-Top Side

<!-- image -->

## Evaluates: MAX7348, MAX7348B in WLP Package

MAX77348 EV Kit Component Placement Guide-Top Side

<!-- image -->

MAX77348 EV Kit PCB Layout-Layer 2

<!-- image -->

│

## MAX77348 Evaluation Kit

## MAX77348 EV Kit PCB Layout (continued)

MAX77348 EV Kit PCB Layout-Layer 3

<!-- image -->

## Evaluates: MAX7348, MAX7348B in WLP Package

MAX77348 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                | PAGES CHANGED   |
|-------------------|-----------------|----------------------------|-----------------|
|                 0 | 9/22            | Initial Release            | -               |
|                 1 | 4/23            | Updated EV Kit Board Photo | 1               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX7348, MAX7348B

in WLP Package