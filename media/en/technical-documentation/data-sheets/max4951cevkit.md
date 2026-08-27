<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX4951C evaluation kit (EV kit) provides a proven design to  evaluate  the  MAX4951C  dual-channel  buffer. The EV kit contains four sections: an application circuit, characterization circuit, and two sets of calibration traces.

The  application  circuit  is  designed  to  demonstrate  the device's use in redriving serial-ATA (SATA) signals and SATA cable detection. This section of the EV kit operates from an external +5V supply that is regulated by an onboard LDO to +3.3V, which powers the device. All traces in the application circuit are 100 Ω differential controlledimpedance traces.

The characterization circuit is provided for eye diagram evaluation  using  SMA  connectors  and  50 I controlledimpedance traces. This section is powered by an external +3.3V power supply.

| DESIGNATION                       |   QTY | DESCRIPTION                                                                                 |
|-----------------------------------|-------|---------------------------------------------------------------------------------------------|
| C1-C8, C14-C17, C22-C25           |    16 | 0.01 F F Q 10%, 25V X7R ceramic capacitors (0402) Murata GRM155R71E103KA TDK C1005X7R1E103K |
| C9, C18, C26, C27                 |     4 | 1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K TDK C1608X7R1C105K     |
| C10-C13, C19, C20, C21            |     7 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K TDK C1005X7R1C104K   |
| C28                               |     1 | 4.7 F F Q 10%, 10V X7R ceramic capacitor (0805) Murata GRM21BR71A475K                       |
| D1                                |     1 | Green LED (0603)                                                                            |
| H1                                |     1 | Disk-drive power connector                                                                  |
| J1, J2                            |     2 | 7-position SATA vertical connectors                                                         |
| JU1, JU2, JU3, JU5, JU7, JU8, JU9 |     7 | 3-pin headers, 0.1in centers                                                                |

<!-- image -->

## MAX4951C Evaluation Kit

## Evaluates: MAX4951C

## Features

- S Application Circuit with SATA Input/Output
- S Eye Diagram Test Circuit with SMA Inputs/Outputs
- S Calibration Traces (50 I Load Trace and Through Trace)
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| JU4           |     1 | 2-pin header, 0.1in center                                                |
| JU6           |     0 | Not installed, 3-pin header                                               |
| P1-P10        |    10 | Edge-mount receptacle SMA connectors                                      |
| R1            |     1 | 200 I Q 5% resistor (0603)                                                |
| R2, R3        |     2 | 49.9 I Q 1% resistors (0603)                                              |
| R4, R5, R6    |     0 | Not installed, resistors (0603)                                           |
| R7, R8        |     0 | Not installed, resistors (0402)                                           |
| U1, U2        |     2 | SATA/eSATA bidirectional redrivers (20 TQFN-EP) Maxim MAX4951CCTP+        |
| U3            |     1 | 3.3V LDO linear regulator (6 SOT23) Maxim MAX6329TPUT-T+ (Top Mark: AAIP) |
| -             |     8 | Shunts                                                                    |
| -             |     1 | PCB: MAX4951C EVALUATION KIT                                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify that all jumpers are in their default position, as shown in Table 1.
- 2)  Connect the first SATA cable from the PC to the host connector (J1) on the EV kit.
- 3)  Connect  the  second  SATA  cable  from  the  device connector (J2) to the SATA device.
- 4)  Verify communication between the host PC and SATA device.

## Detailed Description of Hardware

The  MAX4951C  EV  kit  evaluates  the  MAX4951C  dualchannel buffer. The device is designed to redrive SATA and eSATA signals. The EV kit is divided into four sections: an application circuit, characterization circuit, and two sets of calibration traces.

The application circuit utilizes 100 I differential controlled-impedance  traces  and  provides  two  SATA connectors  (J1  and  J2),  allowing  for  evaluation  of  the device  in  a  SATA  environment.  The  characterization circuit  utilizes  50 I controlled-impedance  traces  and SMA input/output connectors, allowing for eye diagrams and input/output return-loss measurements.

The lower half of the EV kit provides two sets of calibration traces, all of which are matched to the trace lengths in  the  characterization  circuit.  These  traces  provide  a reference for determining the performance of the device only when evaluated in the characterization circuit.

The device has a cable-detect feature ( CAD ).

<!-- image -->

## Application Circuit (U1)

The application circuit provides the means for evaluating the device in a SATA application. This section of the EV kit  provides  two  SATA  connectors  (J1  and  J2),  one  for connection to a SATA host (e.g., a PC), and the other for connection to a SATA device (e.g., a hard drive).

## Input Supply (VIN)

The application circuit must be powered by +3.3V. There are two ways to get this voltage, either from the on-board LDO  linear  regulator  (U3),  or  directly  connected  to  a +3.3V power supply. When using the on-board voltage regulator, the LDO can be powered by the 4-pin Molex connector (H1), or by a +5V external supply connected to the VIN and GND PCB pads. When using the on-board LDO linear regulator to supply power, there is a power LED (D1) to indicate the presence of +3.3V at VCC.

The  user  can  also  connect  directly  to  a  +3.3V  supply, which  is  available  on  a  SATA  power  connector.  The shunt should be removed from jumper JU4 and a wire connected from the SATA power pin to pin 2 (right-most pin) of jumper JU4 (see Table 2).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4951C Evaluation Kit

## Evaluates: MAX4951C

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX4951C when contacting these component suppliers.

## Quick Start (Application Circuit)

## Recommended Equipment

- MAX4951C EV kit
- +5V power supply
- Two SATA cables
- SATA device (e.g., a hard drive)
- SATA host (e.g., a PC)

## Table 1. Default Shunt Positions

| JUMPER                  | SHUNT POSITION   |
|-------------------------|------------------|
| JU1, JU5                | 1-2              |
| JU2, JU3, JU7, JU8, JU9 | 2-3              |
| JU4                     | Installed        |

## Table 2. Jumper JU4 Function

| SHUNT POSITION   | VCC PIN (U1)                                          | DESCRIPTION                                                      |
|------------------|-------------------------------------------------------|------------------------------------------------------------------|
| Installed*       | Connected to the on-board LDO linear regulator output | U1 powered by the LDO linear regulator output (+3.3V)            |
| Not installed    | Connected to an external supply                       | Powered by +3.3V from an external supply or SATA power connector |

## Device Enable (JU1)

The application circuit is enabled/disabled by configuring jumper JU1 (see Table 3). When disabled, the device buffers  are  powered  down  and  the  part  is  placed  in  a low-power  mode.  When  enabled  and  no  SATA  device is  plugged in ( CAD is  unconnected), the device enters a low-power mode. Once a SATA device is plugged in ( CAD grounded), the device goes into active mode.

## Output Preemphasis (JU2, JU3)

The host  and  device  can  be  evaluated  with  or  without  output preemphasis. Configure jumper JU2 to enable/disable the host output (HAP, HAM) preemphasis and jumper JU3 to enable/disable  the  device  output  (DBM,  DBP)  preemphasis (see Tables 4 and 5).

## Out-of-Band (OOB) Mode Selection (JU8)

The application circuit provides full OOB signal support through high-speed OOB-detection circuitry. The SATA

## Table 3. Jumper JU1 Function (U1 EN)

| SHUNT POSITION   | EN PIN (U1)        | DESCRIPTION                                          |
|------------------|--------------------|------------------------------------------------------|
| 1-2*             | Connected to +3.3V | Buffers enabled for normal operation                 |
| 2-3              | Connected to GND   | Buffers disabled and the device is in low-power mode |

* Default position.

## Table 4. Jumper JU2 Function (U1 PB)

| SHUNT POSITION   | PB PIN (U1)        | DESCRIPTION                      |
|------------------|--------------------|----------------------------------|
| 1-2              | Connected to +3.3V | Host output preemphasis enabled  |
| 2-3*             | Connected to GND   | Host output preemphasis disabled |
| Not installed    | Not connected      | Host output preemphasis disabled |

<!-- image -->

## MAX4951C Evaluation Kit

## Evaluates: MAX4951C

range  used  can  be  selected  through  configuration  of jumper  JU8  (see  Table  6).  When  the  MODE  pin  is  set to GND, the SATA version 3.0 range is used. When the MODE pin is set to +3.3V, the SATA version 2.6 range is used.

## Characterization Circuit (U2)

The  characterization  circuit  is  provided  as  a  separate test  circuit  for  eye  diagram  evaluation  of  the  device. This circuit provides differential SMA inputs and outputs with 50 I controlled-impedance traces. Channel B is not utilized in this section of the EV kit, but provides the same performance as channel A.

## Input Supply (VCC)

The  characterization  circuit  is  powered  by  an  external +3.3V  power  supply  connected  between  the  VCC  and GND PCB pads.

## Table 5. Jumper JU3 Function (U1 PA)

| SHUNT POSITION   | PA PIN (U1)        | DESCRIPTION                        |
|------------------|--------------------|------------------------------------|
| 1-2              | Connected to +3.3V | Device output preemphasis enabled  |
| 2-3*             | Connected to GND   | Device output preemphasis disabled |
| Not installed    | Not connected      | Device output preemphasis disabled |

## Table 6. Jumper JU8 Function (U1 MODE)

| SHUNT POSITION   | MODE PIN (U1)      | DESCRIPTION                    |
|------------------|--------------------|--------------------------------|
| 1-2              | Connected to +3.3V | SATA version 2.6 range is used |
| 2-3*             | Connected to GND   | SATA version 3.0 range is used |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Device Enable (JU5)

The  characterization  circuit  is  enabled/disabled  by configuring  jumper  JU5  (see  Table  7).  When  disabled, the  device  buffers  are  powered  down  and  the  part  is placed in a low-power mode.

## Output Preemphasis (JU7)

The characterization circuit channel A can be evaluated with  or  without  output  preemphasis.  Configure  JU7  of the characterization circuit channel A to enable/disable output preemphasis (see Table 8).

Table 7. Jumper JU5 Function (U2 EN)

| SHUNT POSITION   | EN PIN (U2)        | DESCRIPTION                                                  |
|------------------|--------------------|--------------------------------------------------------------|
| 1-2*             | Connected to +3.3V | Buffers enabled for normal operation                         |
| 2-3              | Connected to GND   | Buffers disabled and the device is in low-power standby mode |

* Default position.

Table 8. Jumper JU7 Function (U2 PA)

| SHUNT POSITION   | PA PIN (U2)        | DESCRIPTION                           |
|------------------|--------------------|---------------------------------------|
| 1-2              | Connected to +3.3V | Channel A output preemphasis enabled  |
| 2-3*             | Connected to GND   | Channel A output preemphasis disabled |
| Not installed    | Not connected      | Channel A output preemphasis disabled |

<!-- image -->

## MAX4951C Evaluation Kit Evaluates: MAX4951C

## OOB Mode Selection (JU9)

The  characterization  circuit  provides  full  OOB  signal support through high-speed OOB-detection circuitry. The SATA range used can be selected through configuration of jumper JU8 (see Table 9). When the MODE pin is set to GND, the SATA version 3.0 range is used. When the MODE pin is set to VCC, the SATA version 2.6 range is used.

## Calibration Traces

The  bottom  half  of  the  EV  kit  provides  two  sets  of calibration traces that can be used for further analysis. The lengths of the calibration traces are matched to the traces going from the SMA connector to the characterization circuit. The first calibration trace includes a 50 I load termination and the second calibration trace is a through trace.

## Table 9. Jumper JU8 Function (U2 MODE)

| SHUNT POSITION   | MODE PIN (U2)    | DESCRIPTION                    |
|------------------|------------------|--------------------------------|
| 1-2              | Connected to VCC | SATA version 2.6 range is used |
| 2-3*             | Connected to GND | SATA version 3.0 range is used |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4951C Evaluation Kit

## Evaluates: MAX4951C

<!-- image -->

Figure 1a. MAX4951C EV Kit Schematic-Application Circuit (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4951C Evaluation Kit

## Evaluates: MAX4951C

<!-- image -->

Figure 1b. MAX4951C EV Kit Schematic-Characterization Circuit (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4951C Evaluation Kit

## Evaluates: MAX4951C

<!-- image -->

Figure 1c. MAX4951C EV Kit Schematic-Calibration Traces (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX4951C EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX4951C Evaluation Kit

## Evaluates: MAX4951C

Figure 3. MAX4951C EV Kit Component PCB LayoutComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 4. MAX4951C EV Kit PCB Layout-Inner Layer 2

<!-- image -->

## MAX4951C Evaluation Kit Evaluates: MAX4951C

Figure 5. MAX4951C EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX4951C EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX4951C Evaluation Kit Evaluates: MAX4951C

Figure 7. MAX4951C EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX4951CEVKIT# | EV Kit |

# Denotes RoHS compliant.

11

## MAX4951C Evaluation Kit Evaluates: MAX4951C

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.