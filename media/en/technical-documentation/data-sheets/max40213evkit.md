<!-- lastmod 2022-08-03 -->
## MAX40213 Evaluation Kit

## General Description

The MAX40213 evaluation kit (EV kit) is a fully assembled electrical demonstration kit that provides a proven design to  evaluate  the  MAX40213  transimpedance  amplifiers. Included in the EV kit are two different output circuits to accommodate different terminations on the equipment.

Note  that  the  MAX40213  EV  kit  provides  an  electrical interface to the IC that is similar, but not the same as a photodiode.

The MAX40213 EV kit PCB comes with two MAX40213EWA+ installed.

## MAX40213 EV Kit Photo

<!-- image -->

<!-- image -->

## Features

- Two Evaluation Circuits: 50Ω and Hi-Z Outputs for Different Equipment
- -40°C to +85°C Temperature Range
- Accommodates Easy-to-Use Components
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX40213

## MAX40213 Evaluation Kit

## Quick Start

## Required Equipment

- +3.3V, 100mA DC Power Supply
- Signal Source Up to 1GHz
- 500MHz to 2.5GHz Oscilloscope
- Three SMA Cables of Equal Length (Only One SMA Applies to Test Circuit 1)
- High-Speed Differential Probe (Option 1-Only Applies to Test Circuit 2)
- Two FET Probes (Option 2-Only Applies to Test Circuit 2)

## Procedure

The  MAX40213  EV  kit  is  fully  assembled  and  tested. Follow the steps to verify board operation:

Caution: Do not turn on the power supply or the electronic load until all the connections are complete.

- 1) Evaluation Circuit 1 (see Figure 1 ): Connect a +3.3V supply and ground to VCC1 connector and GND1 return pad of the EV kit respectively. Disable the output of the power supply.
- 2) Evaluation Circuit 2 (see Figure 2): Before beginning, use resistor R13 pads to install the differential probes.

Figure 1. Evaluation Circuit 1 -50Ω Input Termination on Equipment

<!-- image -->

## Evaluates: MAX40213

If a differential probe is not available, installed 0Ω at resistors R14 and R15. The 2-pin headers J13 and J14 can be used for the FET probes. Connect a +3.3V supply and ground to the VCC2 connector and GND2 return pad of the EV kit respectively. Disable the output of the power supply.

- 3) Verify that all shunts are in default positions as shown in Table 1 .
- 4) Connect a signal source to I\_IN1 (evaluation cir -cuit 1) or I\_IN2 (evaluation circuit 2) edge-mount SMA input. Set the signal amplitude to 12.5mVPP (4.4mV RMS  or -34dBm), which corresponds to 5μAP-P. Set the frequency to 100MHz. Disable the signal generator output. For gain of 750kΩ, the input resistors R1 or R9 needs to increase to 10kΩ.
- 5) Evaluation Circuit 1: Connect OUTP and OUTN edge-mount SMA outputs to the 50Ω inputs of a high-speed oscilloscope.
- 6) Evaluation Circuit 2: If using option 1 equipment, the differential probe is preinstalled in step 1. If using option 2, connect the FET probes at 2-pin headers J13 and J14.
- 7) Enable the power supply and signal generator output. Observe the output(s) from OUTP and OUTN of the respective circuit on the oscilloscope.

Figure 2. Evaluation Circuit 2 -High Impedance Input on Equipment

<!-- image -->

│

## Table 1. MAX40213 Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                 |
|----------|------------------|-------------------------------------------------------------|
| J1       | 1-2              | High gain mode selected (750kΩ Transimpedance) for IC (U1). |
| J1       | 2-3*             | Low gain mode selected (150kΩ Transimpedance) for U1.       |
| J2       | 1-2*             | Enables U1. Active mode.                                    |
| J2       | 1-3              | Shutdown enabled for U1.                                    |
| J3       | 1-2              | High gain mode selected (750kΩ Transimpedance) for IC (U2). |
| J3       | 2-3*             | Low gain mode selected (150kΩ Transimpedance) for U2.       |
| J4       | 1-2*             | Enables U2. Active mode.                                    |
| J4       | 1-3              | Shutdown enabled for U2.                                    |

* Default position

## Detailed Description of Hardware

The MAX40213 accepts AC and DC-coupled inputs from a  high-speed  photodiode.  The  EV  kit  facilitates  evaluation  of  the  MAX40213  TIA  without  a  photodiode.  The MAX40213 TIA is designed to be used with optical trans -ceiver  systems  when  the  detector's  (APD,  PIN  diodes) cathode is connected to the IN pin of the IC. The device is to be used when AC input currents are flowing out of the device at the IN pin of the IC.

When an APD with negative bias voltage is connected to the TIA input, the signal current flows out of the amplifier's summing node. The input current flows through an internal load resistor to develop a voltage that is then applied to the input of the second stage. An internal clamp circuit protects against input currents up to 100mA, up to 100ns, and up to 2A for 10ns pulses at low duty cycles. For more information about the device, refer to the IC data sheet.

Two  different  output  circuits  accommodate  different input terminations on the equipment. IC U1 uses SMAs connectors  at  the  outputs  and  is  intended  for  50Ω systems. IC U2 is intended for a differential probe or FET probes with high impedance.

## Theory of Operation

The  MAX40213  EV  kit  provides  photodiode  emulation using a simplified electrical photodiode model. The model provides  a  resistor  that  converts  the  high-speed  input voltage to high-speed current. A DC path is provided to model the average photodiode current.

## Test Interface

## Evaluation Circuit 1

The  MAX40213  outputs  are  back  terminated  with  50Ω. When  terminating  the  outputs  to  50Ω  oscilloscope, the  ac-coupling  capacitors  C6  and  C7  are  present and  resistor R0  is not installed. When  interfacing with  subsequent  amplifiers  or  LVDS  capable  devices, ac-coupling capacitors C10 and C11, and 1kΩ at resistor R0 is installed.

## Evaluation Circuit 2

The  MAX40213  outputs  are  connected  to  a  1kΩ  load differentially.  The  default  position  is  option  1  and  uses resistor  R13  pad  for  probing  purposes.  Option  2  allows the user to install 0Ω at resistor R14 and R15. Use FET probes to monitor at the 2-pin headers J13 and J14 (see Figure 2 ).

│

## MAX40213 Evaluation Kit

## Current Pulse Measurements

To  perform  pulse  measurements,  the  current  pulses are  created  by  providing  a  voltage  pulse  at  I\_IN  or I\_IN2 edge-mount SMAs. The input I\_IN or I\_IN2 series resistance combination (R1+R2) or (R7+R8) respectively determines the amplitude of the current pulse.

Both AC and DC coupling at the I\_IN or I\_IN2 input can be used for this test. When using AC coupling capacitors, (C8 and C10) or (C13 and C14) are used in conjunction with the test. When providing a DC input voltage pulse at I\_IN or I\_IN2 edge-mount SMA, the DC blocking capacitors (C8 and C10) or (C12 and C13) are replaced with 0Ω short to DC couple the input to the MAX40213. Make sure resistors R3 or R8 are not installed.

Evaluates: MAX40213

The  following  resistor  settings  R S   =  (R1+R2)  or  R S = (R9+R10) are shown in Table 2 to create the large-signal current amplitude pulses.

## Noise measurements

Noise measurement only applies to test circuit 1. Remove the input resistors and shunt capacitor before attempting noise  measurement.  With  the  input  resistors  and  shunt capacitor removed, the total capacitance at the IN pin of U1 is equal to 0.5pF.

## Output Response

The  output  response  can  be  slowed  down  by  installing ~22pF at capacitor C23 or C24.

## Table 2. Different Values of RS (R1+R2) or RS  (R9+R10) for Different Input Current Pulse Amplitudes

|   INPUT SERIES RESISTANCE R S (Ω) |   GENERATOR INPUT HIGH VOLTAGE (V) |   GENERATOR INPUT LOW VOLTAGE (V) |   GENERATED INPUT CURRENT STEP FROM IN (mA) |
|-----------------------------------|------------------------------------|-----------------------------------|---------------------------------------------|
|                                 1 |                               0.78 |                             0.545 |                                           1 |
|                                 1 |                               0.78 |                             0.045 |                                          10 |
|                                 1 |                               0.78 |                            -1.145 |                                          50 |
|                                 1 |                               0.78 |                            -2.545 |                                         100 |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40213EVKIT# | EV Kit |

# Denotes RoHS compliant.

│

## MAX40213 EV Kit Bill of Materials

| ITEM   | REF_DES                             | DNI/DNP   |   QTY | MFG PART #                                                                                                      | MANUFACTURER                                             | VALUE                                   | DESCRIPTION                                                                                       | COMMENTS   |
|--------|-------------------------------------|-----------|-------|-----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|-----------------------------------------|---------------------------------------------------------------------------------------------------|------------|
| 1      | C1, C8, C13, C18                    | -         |     4 | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA; CGA2B2C0G1H101J050BA | KEMET;NIC COMPONENTS CORP.;YAGEO PHICOMP; MURATA;TDK;TDK | 100PF                                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G         |            |
| 2      | C2, C19                             | -         |     2 | C0402X7R500-222KNE; GRM155R71H222KA01                                                                           | VENKEL LTD.;MURATA                                       | 2200PF                                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 2200PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R       |            |
| 3      | C3, C20                             | -         |     2 | CL05B105KQ5NQNC; GRM155R70J105KA12                                                                              | SAMSUNG ELECTRONICS; MURATA                              | 1UF                                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R         |            |
| 4      | C4, C6, C7, C10, C11, C14, C15, C21 | -         |     8 | C0402C104J4RAC; GCM155R71C104JA55                                                                               | KEMET;MURATA                                             | 0.1UF                                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R |            |
| 5      | C5, C22                             | -         |     2 | GMC10X7R225K6R3NT; GRM188R70J225KE15; GRJ188R70J225KE11                                                         | CAL-CHIP ELECTRONIC INC.; MURATA;MURATA                  | 2.2UF                                   | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;      |            |
| 6      | GND1, GND2, J15, J16, VCC, VCC2     | -         |     6 | 9020 BUSS                                                                                                       | WEICO WIRE                                               | MAXIMPAD                                | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG          |            |
| 7      | J1, J2, J11, J12                    | -         |     4 | PCC03SAAN                                                                                                       | SULLINS                                                  | PCC03SAAN                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; - 65 DEGC TO +125 DEGC         |            |
| 8      | J3, J5, J8, J10                     | -         |     4 | 131-3701-266                                                                                                    | JOHNSON COMPONENTS                                       | 131-3701-266                            | CONNECTOR; MALE; THROUGH HOLE; SMB JACK VERTICAL PCB MOUNT; STRAIGHT; 5PINS                       |            |
| 9      | J4, J6, J7, J9                      | -         |     4 | 32K243-40ML5                                                                                                    | ROSENBERGER                                              | 32K243-40ML5                            | CONNECTOR; FEMALE; SMT; SMA JACK PCB; RIGHT ANGLE; 2PINS                                          |            |
| 10     | J13, J14                            | -         |     2 | PCC02SAAN                                                                                                       | SULLINS                                                  | PCC02SAAN                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; - 65 DEGC TO +125 DEGC         |            |
| 11     | L1, L2                              | -         |     2 | BLM15BD601SN1                                                                                                   | MURATA                                                   | 600 INDUCTOR; SMT (0402); FERRITE-BEAD; | 600; TOL=+/-25%; 0.2A                                                                             |            |
| 12     | MH1-MH4                             | -         |     4 | P440.375                                                                                                        | GENERIC PART                                             | N/A                                     | MACHINE SCREW; SLOTTED; PAN; 4-40IN; 3/8IN; NYLON                                                 |            |
| 13     | MH1-MH4                             | -         |     4 | 1902B                                                                                                           | GENERIC PART                                             | N/A                                     | STANDOFF; FEMALE-THREADED; HEX; 4-40IN; 3/8IN; NYLON                                              |            |
| 14     | R1, R2, R9                          | -         |     3 | ERJ-2RKF1241                                                                                                    | PANASONIC                                                | 1.24K                                   | RESISTOR; 0402; 1.24K OHM; 1%; 100PPM; 0.10W; THICK FILM                                          |            |
| 15     | R4, R7                              | -         |     2 | TNPW040249R9BE; RG1005P-49R9-B-T; ERA-2AEB49R9                                                                  | VISHAY;SUSUMU CO LTD.; PANASONIC                         |                                         | 49.9 RESISTOR; 0402; 49.9 OHM; 0.1%; 25PPM; 0.063W; THICK FILM                                    |            |
| 16     | R11                                 | -         |     1 | ERJ-2GE0R00                                                                                                     | PANASONIC                                                |                                         | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                            |            |
| 17     | R12                                 | -         |     1 | ERJ-2RKF1001                                                                                                    | PANASONIC                                                | 1K                                      | RESISTOR; 0402; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                             |            |
| 18     | PCB                                 | -         |     1 | MAX40213                                                                                                        | MAXIM                                                    | PCB                                     | PCB:MAX40213                                                                                      |            |
| 19     | C9, C17                             | DNP       |     0 | CL05B105KQ5NQNC; GRM155R70J105KA12                                                                              | SAMSUNG ELECTRONICS; MURATA                              | 1UF                                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R         |            |
| 20     | C12, C16, C23, C24                  | DNP       |     0 | N/A                                                                                                             | N/A                                                      | OPEN                                    | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                          |            |
| 21     | R3, R5, R8                          | DNP       |     0 | ERJ-2GE0R00                                                                                                     | PANASONIC                                                |                                         | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                            |            |
| 22     | R6                                  | DNP       |     0 | ERJ-2RKF1001                                                                                                    | PANASONIC                                                | 1K                                      | RESISTOR; 0402; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                             |            |
| 23     | R10                                 | DNP       |     0 | ERJ-2RKF1241                                                                                                    | PANASONIC                                                | 1.24K                                   | RESISTOR; 0402; 1.24K OHM; 1%; 100PPM; 0.10W; THICK FILM                                          |            |
| 24     | R13                                 | DNP       |     0 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                                                                  | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH                     |                                         | 0 RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                            |            |
| 25     | R14, R15                            | DNP       |     0 | RC0805JR-070RL                                                                                                  | YAGEO PHYCOMP                                            |                                         | 0 RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM                                           |            |
| TOTAL  |                                     |           |    56 |                                                                                                                 |                                                          |                                         |                                                                                                   |            |

Evaluates: MAX40213

## MAX40213 EV Kit Schematic

<!-- image -->

## MAX40213 EV Kit Schematic (continued)

<!-- image -->

## MAX40213 EV Kit PCB Layout

MAX40213 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX40213 EV Kit PCB Layout -Top

<!-- image -->

MAX40213 EV Kit PCB Layout -GND2

<!-- image -->

MAX40213 EV Kit PCB Layout -GND3

<!-- image -->

│

## MAX40213 EV Kit PCB Layout (continued)

MAX40213 EV Kit PCB Layout -Bottom

<!-- image -->

MAX40213 EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

│

## MAX40213 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                              | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------|-----------------|
|                 0 | 10/20           | Initial release                          | -               |
|                 1 | 6/21            | Updated General Description and Features | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX40213