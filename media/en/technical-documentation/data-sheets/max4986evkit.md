<!-- lastmod 2022-08-04 -->
## General Description

The MAX4986 evaluation kit (EV kit) provides a proven design to evaluate the MAX4986 SAS/SATA 2:1/1:2 multiplexer/demultiplexer. The EV kit contains four sections: an  application  circuit,  characterization  circuit,  and  two sets of calibration traces.

The  application  circuit  is  designed  to  demonstrate  the MAX4986 in multiplexing and equalizing SAS/SATA signals. This section of the EV kit operates from an external +5V  supply  that  is  regulated  by  an  on-board  LDO  to +3.3V,  which  powers  the  MAX4986  (U1).  All  traces  in the  application  circuit  are  100 I differential  controlledimpedance traces.

The characterization circuit is provided for eye diagram evaluation  using  SMA  connectors  and  50 I controlledimpedance traces. This section is powered by an external +3.3V power supply.

For information on the specifications for SATA interfaces, refer to documents defined by the 2.6 release from the Serial  ATA  industry  work  group  (www.serialata.org),  or if superceded, by the most recently released document from the ATA ANSI work group (www.t13.org).

WIXVW

<!-- image -->

## MAX4986 Evaluation Kit

## Features

- S One SATA Host Connector
- S Two SATA Device Connectors
- S Application Circuit with SATA Inputs/Outputs
- S Eye Diagram Test Circuit with SMA Inputs/ Outputs
- S Calibration Traces (50 I Load Trace and Through Trace)
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX4986EVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION                                  |   QTY | DESCRIPTION                                                            |
|----------------------------------------------|-------|------------------------------------------------------------------------|
| C1, C3, C4, C9, C10, C19, C22, C27, C28, C37 |    10 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C2, C25                                      |     2 | 10 F F Q 20%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J106M |
| C5-C8, C11-C18, C23, C24, C35, C36, C38-C41  |    20 | 0.01 F F Q 5%, 25V X7R ceramic capacitors (0402) Murata GRM155R71E103J |
| C20, C21, C42                                |     3 | 1 F F Q 10%, 16V X5R ceramic capacitors (0603) Murata GRM188R61C105K   |
| C26                                          |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K  |
| D1                                           |     1 | Red LED (0603)                                                         |
| H1                                           |     1 | Disk drive power connector                                             |
| J1, J2, J3                                   |     3 | 7-position SATA vertical connectors                                    |
| JU1                                          |     1 | 2-pin header                                                           |
| JU2                                          |     1 | 3-pin header                                                           |

| DESIGNATION             |   QTY | DESCRIPTION                                            |
|-------------------------|-------|--------------------------------------------------------|
| P1, P2, P11-P18         |    10 | Edge-mount receptacle SMA connectors                   |
| R1                      |     1 | 300 I Q 5% resistor (0603)                             |
| R2-R8, R10-R15, R17-R22 |    19 | 10k I Q 5% resistors (0603)                            |
| R9                      |     1 | 0 I Q 5% resistor (0603)                               |
| R34, R35                |     2 | 49.9 I Q 1% resistors (0402)                           |
| SW1, SW2, SW3           |     3 | 8-channel SPST DIP switches                            |
| TP1                     |     1 | Red multipurpose test point                            |
| TP2, TP3                |     2 | Black multipurpose test points                         |
| U1, U2                  |     2 | SAS/SATA multiplexers (42 TQFN-EP*) Maxim MAX4986CTO+  |
| U3                      |     1 | 500mA linear regulator (8 TDFN-EP*) Maxim MAX8902AATA+ |
| -                       |     2 | Shunts                                                 |
| -                       |     1 | PCB: MAX4986 EVALUATION KIT+                           |

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4986 Evaluation Kit

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX4986 when contacting this component supplier.

## Quick Start

## Required Equipment

- 8) The  host  should  recognize  DEVICE  A  as  a  hard drive. DEVICE A can be written to during this time. The hard drives must be preformatted. Refer to the operating  system  instructions  for  mounting  and installing the hard drives.
- 9) Change SEL to the  high  position  on  position  1  of SW1.  The  host  should  recognize  DEVICE  B  as  a hard drive. DEVICE B can be written to during this time.

## Detailed Description of Hardware

The  MAX4986  evaluation  kit  (EV  kit)  evaluates  the MAX4986  SAS/SATA  2:1/1:2  multiplexer/demultiplexer. The  MAX4986  is  designed  to  multiplex  and  equalize SAS and SATA signals. The EV kit is  divided  into  four sections: application circuit, characterization circuit, and two sets of calibration traces.

The  application  circuit  utilizes  100 I differential  controlled-impedance  traces  and  provides  three  SATA connectors  (J1,  J2,  J3),  allowing  for  evaluation  of  the MAX4986  in  a  SAS/SATA  environment.  J1  and  J2  are wired as devices for demonstration of the failsafe configuration.  J3  is  wired  as  the  host.  The  MAX4986  can also operate with two hosts and one device, but the EV kit  is  wired  for  only  the  failsafe  configuration.  To  operate the EV kit with two hosts and one device, the three SATA connectors (J1, J2, J3) need to be installed on the backside of the EV kit. Then J1 and J2 become the host connectors and J3 becomes the device.

- MAX4986 EV kit
- +5V, 200mA power supply
- Two SATA cables
- Two SATA devices (e.g., hard drives)
- SATA host (e.g., PC)

## Procedure

The  MAX4986  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Verify that jumpers JU1 and JU2 are in their default positions, as shown in Table 1.
- 2) Verify that switch settings for SW1 and SW2 are in the low position.
- 3) Connect  a  SATA  source  to  J3  (HOST)  on  the MAX4986 EV kit.
- 4) Connect a SATA cable A from J1 (DEVICE A) to the first  SATA  hard  drive  A.  Connect  a  second  SATA cable B from J2 (DEVICE B) to the second SATA hard drive B.
- 5) Apply +5V between VIN and GND.
- 6) Power the hard drives.
- 7) Enable the MAX4986 by driving EN high on position 8 of SW2.

## Table 1. Jumper Descriptions (JU1, JU2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                           |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects the +3.3V regulated supply to the MAX4986. Verify the supply by mea- suring the voltage between TP1 and TP2. |
| JU1      | Open             | Apply an external +3.3V regulated supply between TP1 and TP2.                                                         |
| JU2      | 1-2*             | VL is powered by on-board VCC.                                                                                        |
| JU2      | 2-3              | VL is powered externally by applying a voltage to EXTVL.                                                              |

2    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

The  characterization  circuit  utilizes  50 I controlledimpedance traces and SMA connectors, allowing for eye diagrams,  return  loss,  and  other  compliance  measurements.  A  separate  +3.3V  power  supply  needs  to  connect between the VCC and GND pads. It is possible to connect the +3.3V generated from the application circuit and apply it to the VCC pad. The GNDs are separated between the application circuit and characterization circuit, so both power and GND need to be applied.

The lower half of the EV kit provides two sets of calibration traces, all of which are matched to the trace lengths in the characterization circuit. These traces provide a reference for  determining  the  performance  of  only  the  MAX4986 device when evaluated in the characterization circuit.

## Input Supply (VIN)

The application circuit must be powered by +3.3V. There are two ways to get this voltage, through the on-board LDO (U3)  or  by  directly  connecting  to  a  +3.3V  power supply. When using the on-board voltage regulator, the LDO can be powered by the 4-pin Molex connector (H1) or by a +5V external supply connected to the VIN and GND  pads.  When  using  the  on-board  LDO  to  supply power, there is a power LED (D1) to indicate the presence of power at the VIN supply.

The user can also connect directly  to  a  +3.3V  supply, which  is  available  on  a  SATA  power  connector.  The shunt  must  be  removed  from  jumper  JU1.  Apply  the +3.3V supply between TP1 and TP2.

## Application Circuit

The  application  circuit  section  allows  an  easy  way  to interface  a  host  (PC)  to  SAS/SATA  devices  (e.g.,  hard drives)  for  a  functional  test  of  the  MAX4986.  Different lengths and types of cables can be used to test enable, drive  selection,  preemphasis,  equalization,  and  OOB threshold  settings.  Change  the  positions  on  the  DIP switches  (SW1,  SW2)  to  control  the  settings  of  the MAX4986  in  the  application  section.  Tables  2  and  3 show the various setting options.

<!-- image -->

## MAX4986 Evaluation Kit

## Cable Detection

To test the cable-detection feature, remove resistor R9. Without  R9  populated, EN is  shorted  to  GND  when  a device is plugged into J1 or J2. EN must be high to test this feature. The cable detection applies only to J1 or J2.

## Characterization Circuit

The  characterization  circuit  is  provided  as  a  separate test circuit for eye diagram evaluation of the MAX4986. The  characterization  circuit  section  allows  for  detailed frequency analysis of a single channel. All channels have similar  performance  by  design.  This  circuit  provides differential SMA inputs and outputs with 50 I controlledimpedance traces.

DIP switch SW3 has fewer options because it only deals with one channel and some settings do not apply or are set in hardware. To control the settings of the MAX4986 in the characterization circuit section, see Table 4.

## Input Supply (VCC)

The  characterization  circuit  is  powered  by  an  external +3.3V power supply connected between the VCC and GND  pads.  The  GND  in  the  application  circuit  is  not continuous with the GND in the characterization circuit section.

## External Logic Supply (EXTVL)

The VL logic supply can interface to a lower voltage than VCC, as low as +1.8V. Connecting to an external logic supply also separates the leakage current from the VCC current.

## Calibration Traces

The lower half of the EV kit provides two sets of calibration  traces  that  can  be  used  for  further  analysis.  The lengths  of  the  calibration  traces  are  matched  to  the traces going from the SMA connector to the MAX4986 (U2) of  the  characterization  circuit.  The  first  calibration trace  includes  a  50 I load  termination  and  the  second calibration trace is a straight through trace.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX4986 Evaluation Kit

## Table 2. SW1 Switch Settings

|   POSITION | NAME   | SETTINGS   | DESCRIPTION                              |
|------------|--------|------------|------------------------------------------|
|          1 | SEL    | Low*       | Connects the HOST (J3) to DEVICE A (J1)  |
|          1 | SEL    | High       | Connects the HOST (J3) to DEVICE B (J2)  |
|          2 | OAMPB  | Low*       | Drives DEVICE B (J2) with high amplitude |
|          2 | OAMPB  | High       | Drives DEVICE B (J2) with low amplitude  |
|          3 | OAMPA  | Low*       | Drives DEVICE A (J1) with high amplitude |
|          3 | OAMPA  | High       | Drives DEVICE A (J1) with low amplitude  |
|          4 | MODE   | Low*       | Sets SAS OOB threshold for HOST (J3)     |
|          4 | MODE   | High       | Sets SATA OOB threshold for HOST (J3)    |
|          5 | INEQ   | Low*       | Sets no input equalization for HOST (J3) |
|          5 | INEQ   | High       | Sets input equalization for HOST (J3)    |
|          6 | PEB    | Low*       | Sets no preemphasis for DEVICE B (J2)    |
|          6 | PEB    | High       | Sets preemphasis for DEVICE B (J2)       |
|          7 | PEA    | Low*       | Sets no preemphasis for DEVICE A (J1)    |
|          7 | PEA    | High       | Sets preemphasis for DEVICE A (J1)       |
|          8 | -      | -          | -                                        |

* Default position.

## Table 3. SW2 Switch Settings

|   POSITION | NAME        | SETTINGS   | DESCRIPTION                                  |
|------------|-------------|------------|----------------------------------------------|
|          1 | EQA         | Low*       | Sets no input equalization for DEVICE A (J1) |
|          1 | EQA         | High       | Sets input equalization for DEVICE A (J1)    |
|          2 | EQB         | Low*       | Sets no input equalization for DEVICE B (J2) |
|          2 | EQB         | High       | Sets input equalization for DEVICE B (J2)    |
|          3 | OUTPE       | Low*       | Sets no preemphasis for HOST (J3)            |
|          3 | OUTPE       | High       | Sets preemphasis for HOST (J3)               |
|          4 | OAMP        | Low*       | Drives HOST (J3) with high amplitude         |
|          4 | OAMP        | High       | Drives HOST (J3) with low amplitude          |
|          5 | MODEB       | Low*       | Sets SAS OOB threshold for DEVICE B (J2)     |
|          5 | MODEB       | High       | Sets SATA OOB threshold for DEVICE B (J2)    |
|          6 | MODEA       | Low*       | Sets SAS OOB threshold for DEVICE A (J1)     |
|          6 | MODEA       | High       | Sets SATA OOB threshold for DEVICE A (J1)    |
|          7 | -           | -          | -                                            |
|          8 | EN (pin 10) | Low*       | MAX4986 (U1) is in shutdown                  |
|          8 | EN (pin 10) | High       | MAX4986 (U1) is enabled                      |

4    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 4. SW3 Switch Settings

|   POSITION | NAME   | SETTINGS   | DESCRIPTION                                   |
|------------|--------|------------|-----------------------------------------------|
|          1 | OAMPA2 | Low*       | Drives outputs (P11, P12) with high amplitude |
|          1 | OAMPA2 | High       | Drives outputs (P11, P12) with low amplitude  |
|          2 | EN2    | Low*       | MAX4986 (U2) is in shutdown                   |
|          2 | EN2    | High       | MAX4986 (U2) is enabled                       |
|          3 | MODE2  | Low*       | Sets SAS OOB threshold                        |
|          3 | MODE2  | High       | Sets SATA OOB threshold                       |
|          4 | INEQ2  | Low*       | Sets P1, P2 inputs with no equalization       |
|          4 | INEQ2  | High       | Sets P1, P2 inputs with equalization          |
|          5 | PEA2   | Low*       | Sets P11, P12 outputs with no preemphasis     |
|          5 | PEA2   | High       | Sets P11, P12 outputs with preemphasis        |
|          6 | -      | -          | -                                             |
|          7 | -      | -          | -                                             |
|          8 | -      | -          | -                                             |

## MAX4986 Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX4986 Evaluation Kit

Figure 1a. MAX4986 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

6    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

8

XI

## MAX4986 Evaluation Kit

Figure 1b. MAX4986 EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX4986 Evaluation Kit

Figure 1c. MAX4986 EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

8    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX4986 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX4986 Evaluation Kit

Figure 3. MAX4986 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX4986 Evaluation Kit

Figure 4. MAX4986 EV Kit PCB Layout-GND Layer 2

<!-- image -->

Figure 5. MAX4986 EV Kit PCB Layout-VCC Layer 3

<!-- image -->

10     �������������������������������������������������������������������������������������

<!-- image -->

Figure 6. MAX4986 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX4986 Evaluation Kit

Figure 7. MAX4986 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.