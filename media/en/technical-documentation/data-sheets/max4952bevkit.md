<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX4952B Evaluation Kit

## General Description

## Features

The MAX4952B evaluation kit (EV kit) provides a proven design to evaluate the MAX4952B dual-channel redriver. The EV kit contains four sections: application circuit, characterization circuit, and two sets of calibration traces.

The  application  circuit  is  designed  to  demonstrate  the MAX4952B IC's use in redriving SATA and SAS signals. This section of the EV kit operates from an external +5V supply that is regulated by an on-board LDO to +3.3V, which powers the MAX4952B (U1) device. All traces in the  application  circuit  are  100 I differential  controlledimpedance traces.

The characterization circuit is  provided  for  eye  diagram evaluation  using  SMA  connectors  and  50 I controlledimpedance traces. This section is powered by an external +3.3V power supply.

- S Application Circuit with SATA Input/Output
- S Characterization Circuit with SMA Inputs/Outputs
- S Calibration Traces (50 I Load Trace and Through Trace)
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX4952BEVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION              |   QTY | DESCRIPTION                                                                                 |
|--------------------------|-------|---------------------------------------------------------------------------------------------|
| C1-C8, C14- C17, C22-C25 |    16 | 0.01 F F Q 10%, 25V X7R ceramic capacitors (0402) Murata GRM155R71E103KA TDK C1005X7R1E103K |
| C9, C18, C26, C27        |     4 | 1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K TDK C1608X7R1C105K     |
| C10-C13, C19, C20, C21   |     7 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K TDK C1005X7R1C104K   |
| C28                      |     1 | 4.7 F F Q 10%, 10V X7R ceramic capacitor (0805) Murata GRM21BR71A475K                       |
| D1                       |     1 | Green LED (0603)                                                                            |
| H1                       |     1 | Disk-drive power connector                                                                  |
| J1, J2                   |     2 | 7-position SATA vertical connectors                                                         |

| DESIGNATION                       |   QTY | DESCRIPTION                                                       |
|-----------------------------------|-------|-------------------------------------------------------------------|
| JU1, JU2, JU3, JU5, JU7, JU8, JU9 |     7 | 3-pin headers, 0.1in centers                                      |
| JU4                               |     1 | 2-pin header, 0.1in centers                                       |
| JU6                               |     0 | Not installed, 3-pin header                                       |
| P1-P10                            |    10 | Edge-mount receptacle SMA connectors                              |
| R1                                |     1 | 200 I Q 5% resistor (0603)                                        |
| R2, R3                            |     2 | 49.9 I Q 1% resistors (0603)                                      |
| R4, R6                            |     0 | Not installed, resistors (0603)                                   |
| R5                                |     1 | 0 I Q 5% resistor (0603)                                          |
| U1, U2                            |     2 | SATA/SAS bidirectional redrivers (20 TQFN-EP*) Maxim MAX4952BCTP+ |
| U3                                |     1 | 3.3V regulator (6 SOT23) Maxim MAX6329TPUT-T+ (Top Mark: AAIP)    |
| -                                 |     8 | Shunts                                                            |
| -                                 |     1 | PCB: MAX4952B EVALUATION KIT+                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4952B Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX4952B when contacting these component suppliers.

## Quick Start (Application Circuit)

## Recommended Equipment

## Detailed Description of Hardware

The  MAX4952B  evaluation  kit  (EV  kit)  evaluates  the MAX4952B  dual-channel  redriver.  The  MAX4952B  is designed to redrive SATA or SAS signals. The EV kit is divided into four sections: application circuit, characterization circuit, and two sets of calibration traces.

The  application  circuit  utilizes  100 I differential  controlled-impedance  traces  and  provides  two  SATA  connectors  (J1  and  J2),  allowing  for  evaluation  of  the MAX4952B in a SATA or SAS environment. The characterization circuit utilizes 50 I controlled-impedance traces  and  SMA  input/output  connectors,  allowing  for  eye diagrams and input/output return-loss measurements.

The lower half of the MAX4952B EV kit provides two sets of  calibration  traces,  all  of  which  are  matched  to  the trace lengths in the characterization circuit. These traces provide a reference for determining the performance of only the MAX4952B device when evaluated in the characterization circuit.

The MAX4952B device redrives Serially Attached SCSI (SAS) signals, but can also be used in SATA-only mode by setting M = BA = BB = GND.

## Application Circuit (U1)

The application circuit provides the means for evaluating  the  MAX4952B in a SATA or SAS application. This section of the EV kit provides two SATA connectors (J1 and J2), one for connection to a host (e.g., SAS controller HBA) and the other for connection to a device (e.g., SAS hard drive).

- MAX4952B EV kit
- +5V power supply
- Two SATA cables
- SATA or SAS device (e.g., formatted hard drive)
- SATA or SAS host (e.g., PC)

## Procedure

The  MAX4952B  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default position, as shown in Table 1.
- 2) Connect the first SATA cable from the controller to the host (J1) connector on the EV kit.
- 3) Connect  the  second  SATA  cable  from  the  device (J2) connector to the device.
- 4) Verify  communication  between  the  host  controller and device.

Table 1. Default Shunt Positions

| JUMPER        | SHUNT POSITION   |
|---------------|------------------|
| JU1, JU5      | 1-2              |
| JU2, JU3, JU7 | 2-3              |
| JU4           | Installed        |
| JU8, JU9      | 2-3              |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4952B Evaluation Kit

Table 2. Jumper JU4 Function

| SHUNT POSITION   | VCC PIN (U1)                      | DESCRIPTION                              |
|------------------|-----------------------------------|------------------------------------------|
| Installed*       | Connected to on- board LDO output | U1 powered by LDO output, +3.3V          |
| Not installed    | Connected to external supply      | Powered by +3.3V from an external supply |

* Default position.

Table 3. Jumper JU8 Function

| SHUNT POSITION   | M PIN (U1)         | DESCRIPTION                         |
|------------------|--------------------|-------------------------------------|
| 1-2              | Connected to +3.3V | OOB threshold high (120mV to 220mV) |
| 2-3*             | Connected to GND   | OOB threshold low (50mV to 150mV)   |
| Not installed    | Not connected      | OOB threshold low (50mV to 150mV)   |

## Table 4. Jumper JU1 Function

| SHUNT POSITION   | EN PIN (U1)        | DESCRIPTION                           |
|------------------|--------------------|---------------------------------------|
| 1-2*             | Connected to +3.3V | MAX4952B enabled for normal operation |
| 2-3              | Connected to GND   | MAX4952B in low-power mode            |
| Not installed    | Not connected      | MAX4952B in low-power mode            |

Table 5. Jumper JU2 Function

| SHUNT POSITION   | BB PIN (U1)        | DESCRIPTION                                              |
|------------------|--------------------|----------------------------------------------------------|
| 1-2              | Connected to +3.3V | Host output boost enabled                                |
| 2-3*             | Connected to GND   | Host output boost disabled (standard SATA output levels) |
| Not installed    | Not connected      | Host output boost disabled (standard SATA output levels) |

<!-- image -->

## Input Supply (VIN)

The MAX4952B must be powered by +3.3V. There are two ways to get this voltage, through the on-board LDO (U3) or by connecting directly to a +3.3V power supply. When using the on-board voltage regulator, the LDO can be  powered  by  the  4-pin  Molex  connector  (H1),  or  by a +5V external supply connected to the VIN and GND pads. When using the on-board LDO to supply power, there  is  a  power  LED  (D1)  to  indicate  the  presence  of +3.3V at VCC.

The user can also connect directly  to  a  +3.3V  supply, which  is  available  on  a  SATA  power  connector.  The shunt  should  be  removed  from  jumper  JU4  and  the +3.3V supply or SATA power can be connected to the +3.3V pad (see Table 2).

## Mode Control (JU8)

The MAX4952B device can be used to redrive SATA or SAS signals. The mode (M) pin configures the device to operate with one of these signal types. For SATA or SAS signals in a SAS application, configure the device with a low OOB threshold. See Table 3 for jumper JU8 function.

## Device Enable (JU1)

The  MAX4952B  (U1)  is  enabled/disabled  by  configuring  jumper  JU1  (see  Table  4).  When  disabled,  the MAX4952B is placed in a low-power mode.

## Output Boost Control (JU2, JU3)

The MAX4952B host and device can be evaluated with standard SATA output levels or with boosted SAS/SATA output  levels.  Configure  jumper  JU2  to  enable/disable the host output boost and jumper JU3 to enable/disable the device output boost (see Tables 5 and 6).

Table 6. Jumper JU3 Function

| SHUNT POSITION   | BA PIN (U1)        | DESCRIPTION                                                |
|------------------|--------------------|------------------------------------------------------------|
| 1-2              | Connected to +3.3V | Device output boost enabled                                |
| 2-3*             | Connected to GND   | Device output boost disabled (standard SATA output levels) |
| Not installed    | Not connected      | Device output boost disabled (standard SATA output levels) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX4952B Evaluation Kit

## Table 7. Jumper JU9 Function

| SHUNT POSITION   | M PIN (U2)         | DESCRIPTION                         |
|------------------|--------------------|-------------------------------------|
| 1-2              | Connected to +3.3V | OOB threshold high (120mV to 220mV) |
| 2-3*             | Connected to GND   | OOB threshold low (50mV to 150mV)   |
| Not installed    | Not connected      | OOB threshold low (50mV to 150mV)   |

## Table 8. Jumper JU5 Function

| SHUNT POSITION   | EN PIN (U2)        | DESCRIPTION                           |
|------------------|--------------------|---------------------------------------|
| 1-2*             | Connected to +3.3V | MAX4952B enabled for normal operation |
| 2-3              | Connected to GND   | MAX4952B in low-power mode            |
| Not installed    | Not connected      | MAX4952B in low-power mode            |

## Table 9. Jumper JU7 Function

| SHUNT POSITION   | BA PIN (U2)        | DESCRIPTION                                                   |
|------------------|--------------------|---------------------------------------------------------------|
| 1-2              | Connected to +3.3V | Channel A output boost enabled                                |
| 2-3*             | Connected to GND   | Channel A output boost disabled (standard SATA output levels) |
| Not installed    | Not connected      | Channel A output boost disabled (standard SATA output levels) |

## Characterization Circuit (U2)

The  characterization  circuit  is  provided  as  a  separate test circuit for eye diagram evaluation of the MAX4952B IC. This circuit provides differential SMA inputs and outputs with 50 I controlled-impedance traces. Channel B is not utilized in this section of the EV kit, but provides the same performance as channel A.

## Input Supply (VCC)

The  characterization  circuit  is  powered  by  an  external +3.3V power supply connected between the VCC and GND pads.

## Mode Control (JU9)

The  MAX4952B  device  (U2)  can  be  used  to  redrive SATA or SAS signals. The mode (M) pin configures the device  to  operate  with  one  of  these  signal  types.  For SATA or SAS signals in a SAS application, configure the device  with  a  high  OOB  threshold.  For  SATA  applications,  configure  the  device    with  a  low  OOB  threshold. See Table 7 for jumper JU9 functions.

## Device Enable (JU5)

The  MAX4952B  (U2)  is  enabled/disabled  by  configuring  jumper  JU5  (see  Table  8).  When  disabled,  the MAX4952B is placed in low-power mode.

## Output Boost Control (JU7)

The MAX4952B's channel A can be evaluated with standard SATA output levels or with boosted output levels. Configure jumper JU7 to enable/disable channel A output boost (see Table 9).

## Calibration Traces

The lower half of the MAX4952B EV kit provides two sets of calibration traces that can be used for further analysis. The lengths of the calibration traces are matched to the traces going from the SMA connector to MAX4952B (U2) of the characterization circuit. The first calibration trace includes a 50 I load termination and the second calibration trace is a through trace.

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4952B Evaluation Kit

<!-- image -->

Figure 1a. MAX4952B EV Kit Schematic-Application Circuit (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX4952B Evaluation Kit

Figure 1b. MAX4952B EV Kit Schematic-Characterization Circuit (Sheet 2 of 3)

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4952B Evaluation Kit

Figure 1c. MAX4952B EV Kit Schematic-Calibration Traces (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX4952B Evaluation Kit

Figure 2. MAX4952B EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX4952B EV Kit Component PCB LayoutComponent Side

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4952B Evaluation Kit

Figure 4. MAX4952B EV Kit PCB Layout-Inner Layer 2

<!-- image -->

<!-- image -->

Figure 5. MAX4952B EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX4952B Evaluation Kit

Figure 6. MAX4952B EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10