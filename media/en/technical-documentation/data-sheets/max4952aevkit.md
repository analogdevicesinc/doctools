<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX4952A Evaluation Kit

## General Description

## Features

The MAX4952A evaluation kit (EV kit) provides a proven design to evaluate the MAX4952A dual-channel buffer. The EV kit contains four sections: an application circuit, characterization circuit, and two calibration traces.

The application circuit (Figure 1a) is designed to demonstrate  the  MAX4952A  IC's  use  in  redriving  SerialAttached  SCSI  (SAS)  and  Serial  ATA  (SATA)  signals. This section of the EV kit operates from an external +5V supply that is regulated by an on-board LDO to +3.3V, which powers the MAX4952A (U1) device. All traces in the  application  circuit  are  100 I differential  controlledimpedance traces.

The  characterization  circuit  (Figure  1b)  is  provided  for eye diagram evaluation using SMA connectors and 50 I single-ended controlled-impedance traces. This section is powered by an external +3.3V supply.

- S Application Circuit with SAS and SATA Input/ Output
- S Eye Diagram Test Circuit with SMA Inputs/ Outputs
- S Calibration Traces (50 I Single-Ended Load Trace and 50 I Single-Ended Through Trace)
- S Lead(Pb)-Free and RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX4952AEVKIT+ | EV Kit |

## Component List

| DESIGNATION               |   QTY | DESCRIPTION                                                                                 |
|---------------------------|-------|---------------------------------------------------------------------------------------------|
| C1-C12, C19- C26, C32-C35 |    24 | 0.01 F F Q 10%, 25V X7R ceramic capacitors (0402) Murata GRM155R71E103KA TDK C1005X7R1E103K |
| C13-C16, C27- C30         |     8 | 2.2 F F Q 10%, 10V X7R ceramic capacitors (0603) Murata GRM188R71A225K                      |
| C17, C31                  |     2 | 1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K TDK C1608X7R1C105K     |
| C18                       |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K TDK C1005X7R1C104K    |
| D1                        |     1 | Green LED (0603)                                                                            |
| H1                        |     1 | Disk-drive power connector                                                                  |
| J1, J2                    |     2 | 7-position SAS vertical connectors                                                          |

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| JU1-JU10      |    10 | 3-pin headers, 0.1in centers                                        |
| JU11          |     1 | 2-pin header, 0.1in centers                                         |
| P1-P10        |    10 | Edge-mount receptacle SMA connectors                                |
| R1            |     1 | 200 I Q 5% resistor (0603)                                          |
| R2, R3        |     2 | 49.9 I Q 1% resistors (0603)                                        |
| U1, U2        |     2 | 1.5/3.0/6.0GT/s SAS/SATA redrivers (28 TQFN-EP*) Maxim MAX4952ACTI+ |
| U3            |     1 | 3.3V regulator (6 SOT23) Maxim MAX6329TPUT-T+ (Top Mark: AAIP)      |
| -             |    11 | Shunts                                                              |
| -             |     1 | PCB: MAX4952A EVALUATION KIT+                                       |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX4952A when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4952A Evaluation Kit

## Quick Start (Application Circuit)

## Recommended Equipment

sections:  application  circuit,  characterization  circuit, and two calibration traces.

The  application  circuit  utilizes  100 I differential  controlled impedance traces and provides two SAS connectors (J1 and J2), allowing for evaluation of the MAX4952A in a SAS environment. The characterization circuit utilizes 50 I single-ended, controlled-impedance traces and SMA input/output connectors, allowing for eye diagrams, and input/output return-loss measurements.

The lower-half of the EV kit provides two sets of calibration traces (Figure 1c), all of which are matched to the trace lengths in the characterization circuit. These traces provide a reference for determining the performance of only the MAX4952A device when evaluated in the characterization circuit.

## Application Circuit (U1)

The application circuit provides the means for evaluating the MAX4952A in a SAS/SATA application. This section of the EV kit provides two SAS/SATA connectors (J1 and J2), one for connection to a SAS/SATA host (e.g., a PC) and the other for connection to a SAS/SATA device (e.g., a hard drive).

## Power Supply (VIN)

The application circuit must be powered by +3.3V. There are two ways to get this voltage, either the on-board LDO (U3) or an external +3.3V power supply. When using the on-board voltage regulator, the LDO can be powered by the 4-pin Molex connector (H1) or by a +5V external supply connected to the VIN and GND pads. When using the on-board  LDO to  supply  power,  there  is  a  power  LED (D1) to indicate the presence of +3.3V at VCC.

The user can also connect directly  to  a  +3.3V  supply, which is available on a SAS power connector. The shunt should be removed from jumper JU11 and a wire connected from the SAS power pin to pin-2 (right-most pin) of jumper JU11 (see Table 2).

-  MAX4952A EV kit
-  +5V power supply
-  Two SAS/SATA cables
-  SAS/SATA device (e.g., a hard drive)
-  SAS/SATA host (e.g., a PC)

## Procedure

The  MAX4952A  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1)    Verify that all jumpers are in their default position, as shown in Table 1.
- 2)    If testing in a SATA environment, change the shunt on jumper JU6 to the 1-2 position.
- 3)    Connect the first SAS/SATA cable from the PC to the host connector (J1) on the EV kit.
- 4)    Connect the second SAS/SATA cable from the device connector (J2) to the SAS/SATA device.
- 5)    Verify communication between the host PC and SAS/ SATA device.

## Detailed Description of Hardware

The  MAX4952A  evaluation  kit  (EV  kit)  evaluates  the MAX4952A  dual-channel  buffer.  The  MAX4952A  is designed  to  redrive  Serial-Attached  SCSI  (SAS)  or Serial ATA (SATA) signals. The EV kit is divided into four

Table 1. Default Shunt Positions

| JUMPER                 | SHUNT POSITION   |
|------------------------|------------------|
| JU1-JU4, JU7,JU8, JU10 | 2-3              |
| JU5, JU9               | 1-2              |
| JU6                    | 2-3 (SAS)        |
| JU11                   | Installed        |

## Table 2. Jumper JU11 Function

| SHUNT POSITION   | VCC PIN (U1)                     | DESCRIPTION                                                     |
|------------------|----------------------------------|-----------------------------------------------------------------|
| Installed*       | Connected to on-board LDO output | U1 powered by LDO output (+3.3V)                                |
| Not installed    | Connected to external supply     | Powered by +3.3V from an external supply or SAS power connector |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4952A Evaluation Kit

## Mode Control (JU6)

The  MAX4952A  device  can  also  be  used  to  redrive Serial ATA (SATA) signals. The MODE pin configures the device to operate with SATA or SAS signals. See Table 3 for jumper JU6 functions.

## Device Enable (JU5)

The  MAX4952A  (U1)  is  enabled/disabled  by  configuring  jumper  JU5  (see  Table  4).  When  disabled,  the

## Table 3. Jumper JU6 Function

| SHUNT POSITION   | MODE PIN (U1)      | DESCRIPTION       |
|------------------|--------------------|-------------------|
| 1-2              | Connected to +3.3V | Signal type: SATA |
| 2-3*             | Connected to GND   | Signal type: SAS  |
| Not installed    | Not connected      | Signal type: SAS  |

## Table 4. Jumper JU5 Function

| SHUNT POSITION   | EN PIN (U1)        | DESCRIPTION                                              |
|------------------|--------------------|----------------------------------------------------------|
| 1-2*             | Connected to +3.3V | Buffers enabled for normal operation                     |
| 2-3              | Connected to GND   | Buffers disabled and device is in low-power standby mode |
| Not installed    | Not connected      | Buffers disabled and device is in low-power standby mode |

## Table 5. Jumper JU1 Function

| SHUNT POSITION   | EQ0 PIN (U1)       | DESCRIPTION                |
|------------------|--------------------|----------------------------|
| 1-2              | Connected to +3.3V | Host equalization enabled  |
| 2-3*             | Connected to GND   | Host equalization disabled |
| Not installed    | Not connected      | Host equalization disabled |

## Table 6. Jumper JU3 Function

| SHUNT POSITION   | EQ1 PIN (U1)       | DESCRIPTION                  |
|------------------|--------------------|------------------------------|
| 1-2              | Connected to +3.3V | Device equalization enabled  |
| 2-3*             | Connected to GND   | Device equalization disabled |
| Not installed    | Not connected      | Device equalization disabled |

<!-- image -->

MAX4952A buffers are disabled and the part is placed in a low-power standby mode.

## Input Equalization (JU1, JU3)

The MAX4952A host and device can be evaluated with or  without  input  equalization.  Configure  JU1  to  enable/ disable the host input (IN0P, IN0M) equalization and JU3 to  enable/disable the device input (IN1P, IN1M) equalization (see Tables 5 and 6).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX4952A Evaluation Kit

## Output Preemphasis (JU2, JU4)

The MAX4952A host and device can be evaluated with or without output preemphasis. Configure JU2 to enable/ disable the host output preemphasis and JU4 to enable/ disable  the  device  output  preemphasis  (see  Tables  7 and 8).

## Characterization Circuit (U2)

The  characterization  circuit  is  provided  as  a  separate test circuit for eye diagram evaluation of the MAX4952A IC.  This  circuit  provides  differential  SMA  inputs  and outputs  with  50 I single-ended,  controlled-impedance traces. Channel 1 is not utilized in this section of the EV kit, but provides the same performance as Channel 0.

## Table 7. Jumper JU2 Function

| SHUNT POSITION   | PE0 PIN (U1)       | DESCRIPTION               |
|------------------|--------------------|---------------------------|
| 1-2              | Connected to +3.3V | Host preemphasis enabled  |
| 2-3*             | Connected to GND   | Host preemphasis disabled |
| Not installed    | Not connected      | Host preemphasis disabled |

## Table 8. Jumper JU4 Function

| SHUNT POSITION   | PE1 PIN (U1)       | DESCRIPTION                 |
|------------------|--------------------|-----------------------------|
| 1-2              | Connected to +3.3V | Device preemphasis enabled  |
| 2-3*             | Connected to GND   | Device preemphasis disabled |
| Not installed    | Not connected      | Device preemphasis disabled |

## Table 9. Jumper JU10 Function

| SHUNT POSITION   | MODE PIN (U2)            | DESCRIPTION       |
|------------------|--------------------------|-------------------|
| 1-2              | Connected to VCC (+3.3V) | Signal type: SATA |
| 2-3*             | Connected to GND         | Signal type: SAS  |
| Not installed    | Not connected            | Signal type: SAS  |

## Table 10. Jumper JU9 Function

| SHUNT POSITION   | EN PIN (U2)              | DESCRIPTION                                              |
|------------------|--------------------------|----------------------------------------------------------|
| 1-2*             | Connected to VCC (+3.3V) | Buffers enabled for normal operation                     |
| 2-3              | Connected to GND         | Buffers disabled and device is in low-power standby mode |
| Not installed    | Not connected            | Buffers disabled and device is in low-power standby mode |

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Power Supply (VCC)

The  characterization  circuit  is  powered  by  an  external +3.3V power supply connected between the VCC and GND pads.

## Mode Control (JU10)

The MAX4952A device (U2) can also be used to redrive Serial ATA (SATA) signals. The MODE pin configures the device to operate with SATA or SAS signals (see Table 9 for jumper JU10 functions).

## Device Enable (JU9)

The  MAX4952A  (U2)  is  enabled/disabled  by  configuring  jumper  JU9  (see  Table  10).  When  disabled,  the MAX4952A buffers are disabled and the part is placed in a low-power standby mode.

<!-- image -->

## MAX4952A Evaluation Kit

## Input Equalization (JU7)

The MAX4952A channel 0 can be evaluated with or without input equalization. Configure JU7 to enable/disable channel 0 equalization.

## Output Preemphasis (JU8)

The  MAX4952A  channel  0  can  be  evaluated  with  or without  preemphasis.  Configure  JU8  to  enable/disable channel 0 preemphasis.

## Table 11. Jumper JU7 Function

| SHUNT POSITION   | EQ0 PIN (U2)             | DESCRIPTION                     |
|------------------|--------------------------|---------------------------------|
| 1-2              | Connected to VCC (+3.3V) | Channel 0 equalization enabled  |
| 2-3*             | Connected to GND         | Channel 0 equalization disabled |
| Not installed    | Not connected            | Channel 0 equalization disabled |

## Table 12. Jumper JU8 Function

| SHUNT POSITION   | PE0 PIN (U2)             | DESCRIPTION                    |
|------------------|--------------------------|--------------------------------|
| 1-2              | Connected to VCC (+3.3V) | Channel 0 preemphasis enabled  |
| 2-3*             | Connected to GND         | Channel 0 preemphasis disabled |
| Not installed    | Not connected            | Channel 0 preemphasis disabled |

<!-- image -->

## Calibration Traces

The bottom-half of the EV kit provides two sets of calibration  traces,  which  can  be  used  for  further  analysis. The lengths of the calibration traces are matched to the traces going from the SMA connector to MAX4952A (U2) of the characterization circuit. The first calibration trace includes  a  50 I single-ended  load  termination  and  the second calibration trace is a through trace.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX4952A Evaluation Kit

Figure 1a. MAX4952A EV Kit Schematic-Application Circuit (Sheet 1 of 3)

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4952A Evaluation Kit

<!-- image -->

Figure 1b. MAX4952A EV Kit Schematic-Characterization Circuit (Sheet 2 of 3)

<!-- image -->

Figure 1c. MAX4952A EV Kit Schematic-Calibration Traces (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX4952A Evaluation Kit

Figure 2. MAX4952A EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX4952A EV Kit PCB Layout-Component Side

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4952A Evaluation Kit

Figure 4. MAX4952A EV Kit PCB Layout-Inner Layer 2

<!-- image -->

<!-- image -->

Figure 5. MAX4952A EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX4952A Evaluation Kit

Figure 6. MAX4952A EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10