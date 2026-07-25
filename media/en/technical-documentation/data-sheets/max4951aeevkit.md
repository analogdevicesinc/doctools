<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX4951AE Evaluation Kit

## General Description

## Features

The MAX4951AE evaluation kit (EV kit) provides a proven design to evaluate the MAX4951AE dual-channel buffer. The  EV  kit  contains  four  sections:  application  circuit, characterization  circuit,  and  two  sets  of  calibration traces.

The  application  circuit  is  designed  to  demonstrate  the MAX4951AE  IC's  use  in  redriving  Serial-ATA  (SATA) signals  and  SATA  cable  detection.  This  section  of  the EV kit operates from an external +5V supply that is regulated by an on-board LDO to +3.3V, which powers the MAX4951AE (U1) device. All traces in the application circuit are 100 I differential controlled-impedance traces.

The characterization circuit is provided for eye diagram evaluation  using  SMA  connectors  and  50 I controlledimpedance traces. This section is powered by an external +3.3V power supply.

- S Application Circuit with SATA Input/Output
- S Eye Diagram Test Circuit with SMA Inputs/ Outputs
- S Calibration Traces (50 I Load Trace and Through Trace)
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX4951AEEVKIT+ | EV Kit |

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                                                                 |
|--------------------------|-------|---------------------------------------------------------------------------------------------|
| C1-C8, C14- C17, C22-C25 |    16 | 0.01 F F Q 10%, 25V X7R ceramic capacitors (0402) Murata GRM155R71E103KA TDK C1005X7R1E103K |
| C9, C18, C26, C27        |     4 | 1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K TDK C1608X7R1C105K     |
| C10-C13, C19, C20, C21   |     7 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K TDK C1005X7R1C104K   |
| C28                      |     1 | 4.7 F F Q 10%, 10V X7R ceramic capacitor (0805) Murata GRM21BR71A475K                       |
| D1                       |     1 | Green LED (0603)                                                                            |
| H1                       |     1 | Disk-drive power connector                                                                  |
| J1, J2                   |     2 | 7-position SATA vertical connectors                                                         |
| JU1, JU2, JU3, JU5, JU7  |     5 | 3-pin headers, 0.1in centers                                                                |

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| JU4           |     1 | 2-pin header, 0.1in centers                                          |
| JU6           |     0 | Not installed, 3-pin header                                          |
| JU8, JU9      |     0 | Not installed, 3-pin headers                                         |
| P1-P10        |    10 | Edge-mount receptacle SMA connectors                                 |
| R1            |     1 | 200 I Q 5% resistor (0603)                                           |
| R2, R3        |     2 | 49.9 I Q 1% resistors (0603)                                         |
| R4, R6        |     2 | 0 I resistors (0603)                                                 |
| R5            |     0 | Not installed, resistor (0603)                                       |
| U1, U2        |     2 | SATA/eSATA bidirectional redrivers (20 TQFN-EP*) Maxim MAX4951AECTP+ |
| U3            |     1 | 3.3V regulator (6 SOT23) Maxim MAX6329TPUT-T+ (Top Mark: AAIP)       |
|               |     6 | Shunts                                                               |
|               |     1 | PCB: MAX4951AE EVALUATION KIT+                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4951AE Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX4951AE when contacting these component suppliers.

## Quick Start  (Application Circuit) Recommended Equipment

- MAX4951AE EV kit
- +5V power supply
- Two SATA cables
- SATA device (e.g., hard drive)
- SATA host (e.g., PC)

## Detailed Description of Hardware

The  MAX4951AE  evaluation  kit  (EV  kit)  evaluates  the MAX4951AE  dual-channel  buffer.  The  MAX4951AE  is designed  to  redrive  Serial-ATA  (SATA)  and  external Serial-ATA  (eSATA)  signals.  The  EV  kit  is  divided  into four sections: application circuit, characterization circuit, and two sets of calibration traces.

The  application  circuit  utilizes  100 I differential  controlled-impedance  traces  and  provides  two  SATA  connectors  (J1  and  J2),  allowing  for  evaluation  of  the MAX4951AE in a SATA environment. The characterization circuit utilizes 50 I controlled-impedance traces and SMA input/output connectors, allowing for eye diagrams and input/output return-loss measurements.

The  lower  half  of  the  MAX4951AE  EV  kit  provides  two sets of calibration traces, all of which are matched to the trace lengths in the characterization circuit. These traces provide a reference for determining the performance of only the MAX4951AE device when evaluated in the characterization circuit.

The MAX4951AE has a cable-detect feature ( CAD ) that reduces power consumption to &lt; 1mA when a drive is not connected, and permits normal functionality, when a cable and drive are connected to J2.

## Application Circuit (U1)

The application circuit provides the means for evaluating the MAX4951AE in a SATA application. This section of the EV kit provides two SATA connectors (J1 and J2), one  for  connection  to  a  SATA  host  (e.g.,  PC)  and  the other for connection to a SATA device (e.g., hard drive).

## Procedure

The  MAX4951AE EV kit is fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default position, as shown in Table 1.
- 2) Connect the first SATA cable from the PC to the host (J1) connector on the EV kit.
- 3) Connect  the  second  SATA  cable  from  the  device (J2) connector to the SATA device.
- 4) Verify  communication  between  the  host  PC  and SATA device.

Table 1. Default Shunt Positions

| JUMPER        | SHUNT POSITION   |
|---------------|------------------|
| JU1, JU5      | 1-2              |
| JU2, JU3, JU7 | 2-3              |
| JU4           | Installed        |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4951AE Evaluation Kit

## Input Supply (VIN)

The MAX4951AE must be powered by +3.3V. There are two ways to get this voltage, through the on-board LDO (U3) or by connecting directly to a +3.3V power supply. When using the on-board voltage regulator, the LDO can be  powered  by  the  4-pin  Molex  connector  (H1),  or  by a +5V external supply connected to the VIN and GND pads. When using the on-board LDO to supply power, there  is  a  power  LED  (D1)  to  indicate  the  presence  of +3.3V at VCC.

The user can also connect directly  to  a  +3.3V  supply, which  is  available  on  a  SATA  power  connector.  The shunt  should  be  removed  from  jumper  JU4  and  the +3.3V supply or SATA power can be connected to the +3.3V pad (see Table 2).

Table 2. Jumper JU4 Function

| SHUNT POSITION   | VCC PIN (U1)                      | DESCRIPTION                                                      |
|------------------|-----------------------------------|------------------------------------------------------------------|
| Installed*       | Connected to on- board LDO output | U1 powered by LDO output, +3.3V                                  |
| Not installed    | Connected to external supply      | Powered by +3.3V from an external supply or SATA power connector |

Table 3. Jumper JU1 Function

| SHUNT POSITION   | EN PIN (U1)        | DESCRIPTION                                      |
|------------------|--------------------|--------------------------------------------------|
| 1-2*             | Connected to +3.3V | Buffers enabled for normal operation             |
| 2-3              | Connected to GND   | Buffers disabled and device is in low-power mode |

<!-- image -->

## Device Enable (JU1)

The  MAX4951AE  (U1)  is  enabled/disabled  by  configuring  jumper  JU1  (see  Table  3).  When  disabled,  the MAX4951AE  buffers  are  powered  down  and  the  part is placed in a low-power mode. When enabled, and no SATA device is plugged in ( CAD is  unconnected),  the device enters a low-power mode. Once a SATA device is  plugged  in  ( CAD grounded),  the  device  goes  into active mode.

## Output Boost Control (JU2, JU3)

The MAX4951AE host and device can be evaluated with standard SATA output levels or with boosted output levels. Configure jumper JU2 to enable/disable the host output boost and jumper JU3 to enable/disable the device output boost (see Tables 4 and 5).

## Table 4. Jumper JU2 Function

| SHUNT POSITION   | BB PIN (U1)        | DESCRIPTION                                                |
|------------------|--------------------|------------------------------------------------------------|
| 1-2              | Connected to +3.3V | Host output boost enabled                                  |
| 2-3*             | Connected to GND   | Host output boost dis- abled (standard SATA output levels) |
| Not installed    | Not connected      | Host output boost dis- abled (standard SATA output levels) |

Table 5. Jumper JU3 Function

| SHUNT POSITION   | BA PIN (U1)        | DESCRIPTION                                                  |
|------------------|--------------------|--------------------------------------------------------------|
| 1-2              | Connected to +3.3V | Device output boost enabled                                  |
| 2-3*             | Connected to GND   | Device output boost dis- abled (standard SATA output levels) |
| Not installed    | Not connected      | Device output boost dis- abled (standard SATA output levels) |

* Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX4951AE Evaluation Kit

## Characterization Circuit (U2)

The  characterization  circuit  is  provided  as  a  separate test circuit for eye diagram evaluation of the MAX4951AE IC. This circuit provides differential SMA inputs and outputs with 50 I controlled-impedance traces. Channel B is not utilized in this section of the EV kit, but provides the same performance as channel A.

## Input Supply (VCC)

The  characterization  circuit  is  powered  by  an  external +3.3V power supply connected between the VCC and GND pads.

## Device Enable (JU5)

The  MAX4951AE  (U2)  is  enabled/disabled  by  configuring  jumper  JU5  (see  Table  6).  When  disabled,  the MAX4951AE buffers are powered down and the part is placed in low-power mode.

Table 6. Jumper JU5 Function

| SHUNT POSITION   | EN PIN (U2)        | DESCRIPTION                                              |
|------------------|--------------------|----------------------------------------------------------|
| 1-2*             | Connected to +3.3V | Buffers enabled for normal operation                     |
| 2-3              | Connected to GND   | Buffers disabled and device is in low-power standby mode |

## Output Boost Control (JU7)

The  MAX4951AE's  channel  A  can  be  evaluated  with standard SATA output levels or with boosted output levels. Configure jumper JU7 to enable/disable channel A output boost (see Table 7).

## Calibration Traces

The  lower  half  of  the  MAX4951AE  EV  kit  provides  two sets  of  calibration  traces  that  can  be  used  for  further analysis.  The  lengths  of  the  calibration  traces  are matched to the traces going from the SMA connector to MAX4951AE (U2) of the characterization circuit. The first calibration trace includes a 50 I load termination and the second calibration trace is a through trace.

Table 7. Jumper JU7 Function

| SHUNT POSITION   | BA PIN (U2)        | DESCRIPTION                                                   |
|------------------|--------------------|---------------------------------------------------------------|
| 1-2              | Connected to +3.3V | Channel A output boost enabled                                |
| 2-3*             | Connected to GND   | Channel A output boost disabled (standard SATA output levels) |
| Not installed    | Not connected      | Channel A output boost disabled (standard SATA output levels) |

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4951AE Evaluation Kit

<!-- image -->

Figure 1a. MAX4951AE EV Kit Schematic-Application Circuit (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX4951AE Evaluation Kit

Figure 1b. MAX4951AE EV Kit Schematic-Characterization Circuit (Sheet 2 of 3)

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4951AE Evaluation Kit

<!-- image -->

Figure 1c. MAX4951AE EV Kit Schematic-Calibration Traces (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX4951AE Evaluation Kit

Figure 2. MAX4951AE EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX4951AE EV Kit PCB Layout-Component Side

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4951AE Evaluation Kit

Figure 4. MAX4951AE EV Kit PCB Layout-Inner Layer 2

<!-- image -->

<!-- image -->

Figure 5. MAX4951AE EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX4951AE Evaluation Kit

Figure 6. MAX4951AE EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10