<!-- lastmod 2022-08-02 -->
## General Description

The MAX4951 evaluation kit (EV kit) provides a proven design to evaluate the MAX4951 dual-channel buffer. The EV kit contains four sections: an application circuit, a characterization circuit, and two calibration traces.

The application circuit is designed to demonstrate the use of the MAX4951 in redriving serial-ATA (SATA) and eSATA Gen I and Gen II signals. This section of the EV kit operates from an external +5V supply that is regulated by an on-board LDO to +3.3V, which powers the MAX4951 (U1) device. All traces in the application circuit are 100 Ω differential controlled impedance.

The characterization circuit is provided for eye diagram evaluation using SMA connectors and 50 Ω controlled impedance traces. This section is powered by an external +3.3V supply.

| DESIGNATION             |   QTY | DESCRIPTION                                                                              |
|-------------------------|-------|------------------------------------------------------------------------------------------|
| C1-C8, C14-C17, C22-C25 |    16 | 0.01µF ±10%, 25V X7R ceramic capacitors (0402) Murata GRM155R71E103KA TDK C1005X7R1E103K |
| C9, C18, C26, C27       |     4 | 1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K TDK C1608X7R1C105K     |
| C10-C13, C19, C20, C21  |     7 | 0.1µF ±10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K TDK C1005X7R1C104K   |
| D1                      |     1 | Green LED (0603)                                                                         |
| H1                      |     1 | Disk drive power connector                                                               |
| J1, J2                  |     2 | 7-position SATA vertical connectors                                                      |
| JU1, JU2, JU3, JU5, JU7 |     5 | 3-pin headers, 0.1in centers                                                             |

<!-- image -->

## Features

- ♦ Application Circuit with SATA Input/Output
- ♦ Eye Diagram Test Circuit with SMA Inputs/Outputs
- ♦ Calibration Traces (50 Ω Load Trace and Through Trace)
- ♦ Lead-Free and RoHS Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX4951EVKIT+ | EV Kit |

## Component List

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                 |
|---------------|-------|-------------------------------------------------------------|
| JU4           |     1 | 2-pin header, 0.1in centers                                 |
| JU6           |     0 | Not installed, 3-pin header                                 |
| P1-P10        |    10 | Edge-mount receptacle SMA connectors Johnson 142-0701-851   |
| R1            |     1 | 200 Ω ±5% resistor (0603)                                   |
| R2, R3        |     2 | 49.9 Ω ±1% resistors (0603)                                 |
| U1, U2        |     2 | SATA I/II bidirectional redrivers (20 TQFN-EP*) MAX4951CTP+ |
| U3            |     1 | +3.3V regulator (6 SOT23) MAX6329TPUT-T+ (Top Mark: AAIP)   |
| -             |     6 | Shunts                                                      |
| -             |     1 | PCB: MAX4951 Evaluation Kit+                                |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX4951 when contacting these component suppliers.

## MAX4951 Evaluation Kit

## Quick Start (Application Circuit)

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX4951 EV kit
- +5V power supply
- Two SATA-to-SATA or eSATA-to-SATA cables
- SATA device (e.g., a hard drive)
- SATA host (e.g., a PC)

## Procedure

The MAX4951 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify  that  all  jumpers  are  in  their  default  position, as shown in Table 1.
- 2) Connect the first SATA-to-SATA/eSATA-to-SATA cable from the PC to the host (J1) connector on the EV kit.
- 3) Connect the second SATA-to-SATA/eSATA-toSATA cable from the device (J2) connector to the SATA device.
- 4) Verify communication between the host PC and SATA device.

## Table 1. Default Shunt Positions

| JUMPER        | SHUNT POSITION   |
|---------------|------------------|
| JU1, JU4, JU5 | 1-2              |
| JU2, JU3, JU7 | 2-3              |

## Detailed Description of Hardware

The MAX4951 evaluation kit (EV kit) evaluates the MAX4951 dual-channel buffer. The MAX4951 is designed to redrive serial-ATA (SATA) and eSATA Gen I and Gen II signals. The EV kit is divided into four sections: application circuit, characterization circuit, and two calibration traces.

The application circuit utilizes 100 Ω differential  controlled impedance traces and provides two SATA connectors (J1 and J2), allowing for evaluation of the MAX4951 in a SATA environment. The characterization circuit  utilizes  50 Ω controlled impedance traces and SMA input/output connectors, allowing for eye diagrams and input/output return loss measurements.

The lower half of the EV kit provides two sets of calibration  traces, all  of  which  are  matched to the trace lengths in the characterization circuit. These traces provide a reference for determining the performance of the MAX4951 device only, when evaluated in the characterization circuit.

## Device Enable (JU1)

The MAX4951 (U1) is enabled/disabled by configuring j umper  JU1  (see  Table  3).  When  disabled,  the MAX4951 buffers are disabled and the part is placed in a low-power standby mode.

## Table 3. Jumper JU1 Function

| SHUNT POSITION   | EN PIN (U1)        | DESCRIPTION                                              |
|------------------|--------------------|----------------------------------------------------------|
| 1-2*             | Connected to +3.3V | Buffers enabled for normal operation                     |
| 2-3              | Connected to GND   | Buffers disabled and device is in low-power standby mode |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Application Circuit (U1)

The application circuit (U1) provides the means for evaluating the MAX4951 in a SATA application. This section of the EV kit provides two SATA connectors (J1 and J2), one for connection to a SATA host (e.g., PC) and the other for connection to a SATA device (e.g., hard drive).

## Input Supply (VIN)

The application circuit must be powered by +3.3V. There are two ways to get this voltage, through the onboard LDO (U3) or connecting directly to a +3.3V supply.  When using the on-board voltage regulator, the LDO can be powered by the 4-pin Molex connector (H1) or by a +5V external supply connected to the VIN and GND pads. When using the on-board LDO to supply  power, there is a power LED (D1) to indicate the presence of +3.3V at VCC.

The user can also connect directly to a +3.3V supply, which is available on a SATA power connector. The shunt should be removed from jumper JU4 and a wire connected from the SATA power pin to pin 2 (rightmost pin) of jumper JU4 (see Table 2).

## Table 2. Jumper JU4 Function

| SHUNT POSITION   | VCC PIN (U1)                     | DESCRIPTION                                                      |
|------------------|----------------------------------|------------------------------------------------------------------|
| Installed*       | Connected to on-board LDO output | U1 powered by LDO output, +3.3V                                  |
| Not installed    | Connected to external supply     | Powered by +3.3V from an external supply or SATA power connector |

<!-- image -->

## Output Boost Control (JU2, JU3)

The MAX4951 host and device can be evaluated with standard SATA output levels or with boosted output levels. Configure JU2 to enable/disable the host output boost and JU3 to enable/disable the device output boost (see Tables 4 and 5, respectively).

## Table 4. Jumper JU2 Function

| SHUNT POSITION   | BB PIN (U1)        | DESCRIPTION                                             |
|------------------|--------------------|---------------------------------------------------------|
| 1-2              | Connected to +3.3V | Host output boost enabled                               |
| 2-3*             | Connected to GND   | Host output boost disabled; standard SATA output levels |
| Not installed    | Not connected      | Host output boost disabled; standard SATA output levels |

## Table 5. Jumper JU3 Function

| SHUNT POSITION   | BA PIN (U1)        | DESCRIPTION                                               |
|------------------|--------------------|-----------------------------------------------------------|
| 1-2              | Connected to +3.3V | Device output boost enabled                               |
| 2-3*             | Connected to GND   | Device output boost disabled; standard SATA output levels |
| Not Installed    | Not connected      | Device output boost disabled; standard SATA output levels |

## Characterization Circuit (U2)

The characterization circuit (U2) is provided as a separate test circuit for eye diagram evaluation of the MAX4951 IC. This circuit provides differential SMA inputs and outputs with 50 Ω controlled impedance traces. Channel B is not utilized in this section of the EV kit, but provides the same performance as channel A.

## Input Supply (VCC)

The characterization circuit is powered by an external +3.3V power supply connected between the VCC and GND pads.

<!-- image -->

## Calibration Traces

The lower half of the EV kit provides two sets of calibration  traces  that  can  be  used  for  further  analysis.  The lengths of the calibration traces are matched to the traces going from the SMA connector to MAX4951 (U2) of the characterization circuit. The first calibration trace includes a 50 Ω load termination and the second calibration trace is a through trace.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4951 Evaluation Kit

## Device Enable (JU5)

The MAX4951 (U2) is enabled/disabled by configuring j umper  JU5  (see  Table  6).  When  disabled,  the MAX4951 buffers are disabled and the part is placed in a low-power standby mode.

Table 6. Jumper JU5 Function

| SHUNT POSITION   | EN PIN (U2)        | DESCRIPTION                                              |
|------------------|--------------------|----------------------------------------------------------|
| 1-2*             | Connected to +3.3V | Buffers enabled for normal operation                     |
| 2-3              | Connected to GND   | Buffers disabled and device is in low-power standby mode |

## Output Boost Control (JU7)

The MAX4951 channel A can be evaluated with standard SATA output levels or with boosted output levels. Configure JU7 to enable/disable channel A's output boost (see Table 7).

## Table 7. Jumper JU7 Function

| SHUNT POSITION   | BA PIN (U2)        | DESCRIPTION                                                  |
|------------------|--------------------|--------------------------------------------------------------|
| 1-2              | Connected to +3.3V | Channel A output boost enabled                               |
| 2-3*             | Connected to GND   | Channel A output boost disabled; standard SATA output levels |
| Not installed    | Not connected      | Channel A output boost disabled; standard SATA output levels |

## MAX4951 Evaluation Kit

Figure 1a. MAX4951 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4951 Evaluation Kit

Figure 1b. MAX4951 EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4951 Evaluation Kit

Figure 1c. MAX4951 EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX4951 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX4951 Evaluation Kit

Figure 3. MAX4951 EV Kit Component PCB LayoutComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4951 Evaluation Kit

Figure 4. MAX4951 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 5. MAX4951 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4951 Evaluation Kit

Figure 6. MAX4951 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9