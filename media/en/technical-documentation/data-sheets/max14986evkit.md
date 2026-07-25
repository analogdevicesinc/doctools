<!-- lastmod 2022-08-02 -->
## MAX14986 Evaluation Kit

## General Description

The MAX14986 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX14986  dual-channel  buffer. The EV kit contains four sections: an application circuit, characterization circuit, and two calibration traces.

The  application  circuit  (Figure  1a)  is  designed  to  demonstrate  the  IC's  use  in  redriving  Serial-Attached  SCSI (SAS)  and  Serial  ATA  (SATA)  signals.  This  section  of the EV kit operates from an external +5V supply that is regulated  by  an  on-board  LDO  to  +3.3V,  which  powers the MAX14986 (U1) device. All traces in the application circuit are 100Ω differential controlled-impedance traces.

The  characterization  circuit  (Figure  1b)  is  provided  for eye diagram evaluation using SMA connectors and 50Ω single-ended controlled-impedance traces. This section is powered by an external +3.3V supply.

## Features

- Application Circuit with SAS and SATA Input/Output
- Eye Diagram Test Circuit with SMA Inputs/Outputs
- Calibration Traces (50Ω Single-Ended Load Trace and 50Ω Single-Ended Through Trace)
- Lead(Pb)-Free and RoHS Compliant
- Proven PCB Layout
- Fully Assembled and Tested

Evaluates: MAX14986

## Quick Start (Application Circuit)

## Recommended Equipment

- MAX14986 EV kit
- +5V power supply
- Two SAS/SATA cables
- SAS/SATA device (e.g., a hard drive)
- SAS/SATA host (e.g., a PC)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify that all jumpers are in their default position, as shown in Table 1.
- 2)  If testing in a SATA environment, change the shunt on jumper JU6 to the 1-2 position.
- 3)  Connect the first SAS/SATA cable from the PC to the host connector (J1) on the EV kit.
- 4)    Connect the second SAS/SATA cable from the device connector (J2) to the SAS/SATA device.
- 5)  Verify communication between the host PC and SAS/ SATA device.

Ordering Information appears at end of data sheet.

<!-- image -->

## Detailed Description of Hardware

The  MAX14986  evaluation  kit  (EV  kit)  evaluates  the MAX14986 dual-channel buffer. The device is designed to  redrive  Serial-Attached  SCSI  (SAS)  or  Serial  ATA (SATA) signals. The EV kit is divided into four sections: application circuit, characterization circuit, and two calibration traces.

The application circuit utilizes 100Ω differential controlled impedance traces and provides two SAS connectors (J1 and J2),  allowing  for  evaluation  of  the  device  in  a  SAS environment.  The  characterization  circuit  utilizes  50Ω single-ended,  controlled-impedance  traces  and  SMA input/output  connectors,  allowing  for  eye  diagrams,  and input/output return-loss measurements.

The lower-half of the EV kit provides two sets of calibration  traces  (Figure  1c),  all  of  which  are  matched  to  the trace lengths in the characterization circuit. These traces provide  a  reference  for  determining  the  performance  of only  the  device  when  evaluated  in  the  characterization circuit.

## Table 1. Default Shunt Positions (JU1-JU11)

| JUMPER                  | SHUNT POSITION   |
|-------------------------|------------------|
| JU1-JU4, JU7, JU8, JU10 | 2-3              |
| JU5, JU9                | 1-2              |
| JU6                     | 2-3 (SAS)        |
| JU11                    | Installed        |

## Table 2. Jumper JU11 Function

| SHUNT POSITION   | VCC PIN (U1)                     | DESCRIPTION                                                     |
|------------------|----------------------------------|-----------------------------------------------------------------|
| Installed*       | Connected to on-board LDO output | U1 powered by LDO output (+3.3V)                                |
| Not installed    | Connected to external supply     | Powered by +3.3V from an external supply or SAS power connector |

* Default position.

## Table 3. Jumper JU6 Function

| SHUNT POSITION   | MODE PIN (U1)      | DESCRIPTION       |
|------------------|--------------------|-------------------|
| 1-2              | Connected to +3.3V | Signal type: SATA |
| 2-3*             | Connected to GND   | Signal type: SAS  |
| Not installed    | Not connected      | Signal type: SAS  |

* Default position.

Evaluates: MAX14986

## Application Circuit (U1)

The application circuit provides the means for evaluating the device in a SAS/SATA application. This section of the EV kit  provides  two  SAS/SATA  connectors  (J1  and  J2), one for connection to a SAS/SATA host (e.g., a PC) and the  other  for  connection  to  a  SAS/SATA  device  (e.g.,  a hard drive).

## Power Supply (VIN)

The application circuit must be powered by +3.3V. There are two ways to get this voltage, either the on-board LDO (U3) or an external +3.3V power supply. When using the on-board  voltage  regulator,  the  LDO  can  be  powered by the 4-pin Molex connector (H1) or by a +5V external supply connected to the VIN and GND PCB pads. When using the on-board LDO to supply power, there is a power LED (D1) to indicate the presence of +3.3V at VCC.

The  user  can  also  connect  directly  to  a  +3.3V  supply, which is available on a SAS power connector. The shunt should  be  removed  from  jumper  JU11  and  a  wire  connected from the SAS power pin to pin-2 (right-most pin) of jumper JU11 (see Table 2).

## Mode Control (JU6)

The device can also be used to redrive Serial ATA (SATA) signals. The MODE pin configures the device to operate with  SATA or SAS signals. See Table 3 for jumper JU6 functions.

│

## MAX14986 Evaluation Kit

## Device Enable (JU5)

The U1 device is enabled/disabled by configuring jumper JU5 (see Table 4). When disabled, the device buffers are disabled  and  the  part  is  placed  in  a  low-power  standby mode.

## Input Equalization (JU1, JU3)

The IC host and device can be evaluated with or without input  equalization.  Configure  JU1  to  enable/disable  the

## Table 4. Jumper JU5 Function

| SHUNT POSITION   | EN PIN (U1)        | DESCRIPTION                                         |
|------------------|--------------------|-----------------------------------------------------|
| 1-2*             | Connected to +3.3V | Buffers enabled for normal operation                |
| 2-3              | Connected to GND   | Buffers disabled and device is in low-power standby |
| Not installed    | Not connected      | mode                                                |

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

Evaluates: MAX14986

host input (IN0P, IN0M) equalization and JU3 to enable/ disable  the  device  input  (IN1P,  IN1M)  equalization  (see Tables 5 and 6).

## Output Preemphasis (JU2, JU4)

The IC host and device can be evaluated with or without output preemphasis. Configure JU2 to enable/disable the host output preemphasis and JU4 to enable/disable the device output preemphasis (see Tables 7 and 8).

│

## MAX14986 Evaluation Kit

## Characterization Circuit (U2)

The characterization circuit is provided as a separate test circuit  for  eye  diagram  evaluation  of  the  IC.  This  circuit provides  differential  SMA  inputs  and  outputs  with  50Ω single-ended, controlled-impedance traces. Channel 1 is not utilized in this section of the EV kit, but provides the same performance as Channel 0.

## Power Supply (VCC)

The  characterization  circuit  is  powered  by  an  external +3.3V  power  supply  connected  between  the  VCC  and GND pads.

## Mode Control (JU10)

The  U2  device  can  also  be  used  to  redrive  Serial ATA (SATA) signals. The MODE pin configures the device to operate with SATA or SAS signals (see Table 9 for jumper JU10 functions).

## Device Enable (JU9)

The U2 device is enabled/disabled by configuring jumper JU9 (see Table 10). When disabled, the device buffers are

## Table 9. Jumper JU10 Function

| SHUNT POSITION   | MODE PIN (U2)            | DESCRIPTION       |
|------------------|--------------------------|-------------------|
| 1-2              | Connected to VCC (+3.3V) | Signal type: SATA |
| 2-3*             | Connected to GND         | Signal type: SAS  |
| Not installed    | Not connected            | Signal type: SAS  |

## Table 10. Jumper JU9 Function

| SHUNT POSITION   | EN PIN (U2)              | DESCRIPTION                                         |
|------------------|--------------------------|-----------------------------------------------------|
| 1-2*             | Connected to VCC (+3.3V) | Buffers enabled for normal operation                |
| 2-3              | Connected to GND         | Buffers disabled and device is in low-power standby |
| Not installed    | Not connected            | mode                                                |

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

Evaluates: MAX14986

disabled  and  the  part  is  placed  in  a  low-power  standby mode.

## Input Equalization (JU7)

The IC's channel 0 can be evaluated with or without input equalization. Configure JU7 to enable/disable channel 0 equalization.

## Output Preemphasis (JU8)

The  IC's  channel  0  can  be  evaluated  with  or  without preemphasis. Configure JU8 to enable/disable channel 0 preemphasis.

## Calibration Traces

The  bottom-half  of  the  EV  kit  provides  two  sets  of calibration traces, which can be used for further analysis. The lengths of the calibration traces are matched to the traces  going  from  the  SMA  connector  to  the  U2  device of  the  characterization  circuit.  The  first  calibration  trace includes  a  50Ω  single-ended  load  termination  and  the second calibration trace is a through trace.

│

## MAX14986 Evaluation Kit

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                                                              |
|--------------------------|-------|------------------------------------------------------------------------------------------|
| C1-C12, C19-C26, C32-C35 |    24 | 0.01µF ±10%, 25V X7R ceramic capacitors (0402) Murata GRM155R71E103KA TDK C1005X7R1E103K |
| C13-C16, C27-C30         |     8 | 2.2µF ±10%, 10V X7R ceramic capacitors (0603) Murata GRM188R71A225K                      |
| C17, C31                 |     2 | 1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K TDK C1608X7R1C105K     |
| C18                      |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K TDK C1005X7R1C104K    |
| D1                       |     1 | Green LED (0603)                                                                         |
| H1                       |     1 | Disk-drive power connector                                                               |

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE                |
|-----------------|--------------|------------------------|
| Murata Americas | 770-436-1300 | www.murataamericas.com |
| TDK Corp.       | 847-803-6100 | www.component.tdk.com  |

Note: Indicate that you are using the MAX14986 when contacting these component suppliers.

Evaluates: MAX14986

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| J1, J2        |     2 | 7-position SAS vertical connectors                                  |
| JU1-JU10      |    10 | 3-pin headers, 0.1in centers                                        |
| JU11          |     1 | 2-pin header, 0.1in centers                                         |
| P1-P10        |    10 | Edge-mount receptacle SMA connectors                                |
| R1            |     1 | 200Ω ±5% resistor (0603)                                            |
| R2, R3        |     2 | 49.9Ω ±1% resistors (0603)                                          |
| U1, U2        |     2 | 1.5/3.0/6.0GT/s SAS/SATA redrivers (28 TQFN-EP*) Maxim MAX14986ETI+ |
| U3            |     1 | 3.3V regulator (6 SOT23) Maxim MAX6329TPUT-T+ (Top Mark: AAIP)      |
| -             |    11 | Shunts                                                              |
| -             |     1 | PCB: MAX14986 EVALUATION KIT                                        |

│

Figure 1a. MAX14986 EV Kit Schematic-Application Circuit (Sheet 1 of 3)

<!-- image -->

## Evaluates: MAX14986

Figure 1b. MAX14986 EV Kit Schematic-Characterization Circuit (Sheet 2 of 3)

<!-- image -->

Figure 1c. MAX14986 EV Kit Schematic-Calibration Traces (Sheet 3 of 3)

<!-- image -->

Figure 2. MAX14986 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluates: MAX14986

Figure 3. MAX14986 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX14986 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

## Evaluates: MAX14986

Figure 5. MAX14986 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

│

## Evaluates: MAX14986

Figure 6. MAX14986 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14986EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX14986

## MAX14986 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/13           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX14986