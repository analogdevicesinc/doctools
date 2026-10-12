<!-- lastmod 2022-08-04 -->
<!-- image -->

INNOVATIONDELIVERED

## General Description

The MAX14972 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX14972  dual  SuperSpeed USB 3.0 equalizer/redriver utilizing programmable input equalization  and  output  deemphasis  to  reduce  deterministic  jitter,  restore  output  levels,  and  meet  USB 3.0  compliance.  This  allows  optimal  placement  of  key SuperSpeed  USB  3.0  components  and  allows  longer circuit-board traces or cables. The EV kit PCB contains four sections: application circuit, characterization circuit, and two calibration traces.

The  application  circuit  is  designed  to  demonstrate  the IC's  use  in  equalizing/redriving  the  USB  signals.  This section of the EV kit operates from a +5.0V USB supply that  is  regulated  by  an  on-board  +3.3V  LDO  regulator powering  the  U1  device.  All  PCB  signal  traces  in  the application circuit are a combination of 100 I differential and 50 I single-ended controlled-impedance traces.

The characterization circuit is provided for eye diagram evaluation using SMA connectors and controlled-impedance  traces.  This  section  is  powered  by  an  external +3.0V to +3.6V power supply.

The calibration trace section is provided as a reference to  deembed the performance of the IC from the traces and SMA connectors.

The IC is available in a 24-pin (4.0mm x 4.0mm) TQFN package with an exposed pad.

| DESIGNATION                              |   QTY | DESCRIPTION                                                             |
|------------------------------------------|-------|-------------------------------------------------------------------------|
| C1, C4, C5-C8, C11-C16, C18-C23, C25-C28 |    22 | 0.1 F F Q 10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J104K |
| C2, C3, C17, C24                         |     4 | 4.7 F F Q 10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J475K |
| C9                                       |     1 | 22 F F Q 20%, 6.3V X5R ceramic capacitor (0805) Murata GRM21BR60J226M   |
| C29, C30                                 |     0 | Not installed, ceramic capacitors (0402)                                |
| D1                                       |     1 | Green LED (0603)                                                        |
| JU1-JU9, JU11-JU15                       |    14 | 3-pin headers                                                           |

<!-- image -->

## MAX14972 Evaluation Kit

## Evaluates: MAX14972

## Features

- S Application Circuit with USB 3.0 Input/Output Connectors
- S Eye Diagram Test Circuit with SMA Inputs/Outputs
- S Calibration Traces (50 I Load Trace and Through Trace)
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| JU10          |     1 | 2-pin header                                                                 |
| P1            |     1 | USB 3.0 type-B connector                                                     |
| P2            |     1 | USB 3.0 type-A connector                                                     |
| P3            |     1 | Mini-USB type-B connector                                                    |
| P4-P13        |    10 | Edge-mount SMA connectors                                                    |
| R1            |     1 | 220 I Q 5% resistor (0402)                                                   |
| R2-R5         |     4 | 49.9 I Q 1% resistors (0402)                                                 |
| U1, U3        |     2 | Dual super-speed USB 3.0 equalizer/redrivers (24 TQFN-EP) Maxim MAX14972CTG+ |
| U2            |     1 | 3.3V LDO (6 SOT23) Maxim MAX6329SLUT+                                        |
| -             |    15 | Shunts                                                                       |
| -             |     1 | PCB: MAX14972 EVALUATION KIT                                                 |

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

- MAX14972 EV kit
- User-supplied Windows M 7 PC with a spare USB 3.0 port
- USB 3.0 A-to-B cable
- USB 3.0 device (e.g., +4GB hard drive)

Note: In the following sections, text in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify  that  jumpers  JU1-JU10  are  in  their  default positions, as shown in Table 1.
- 2)  Connect the USB 3.0 A-to-B cable from the PC to the USB 3.0 type-B connector (P1) on the EV kit.
- 3)  Connect  the  USB  3.0  device  to  the  USB  3.0  type-A connector (P2) on the EV kit.
- 4)  Verify that the PC has detected the USB 3.0 device.
- 5)  Move the data from the PC to the USB 3.0 device.
- 6)  A popup window appears showing the data transferring  from  the  PC  to  the  USB  3.0  device.  Within  this window,  select  the More  details button  to  monitor the data transfer rate under the Speed listing (MB/s). After half the data is transferred, verify that the speed is  approximately  100MB/s.  The  speed  may  vary depending on the exact system configuration. If the speed is below 50MB/s, then the source has defaulted to USB 2.0.

## Detailed Description of Hardware

The MAX14972 EV kit provides a proven design to evaluate the MAX14972 dual SuperSpeed USB 3.0 equalizer/ redriver. The EV kit is divided into four sections: application  circuit,  characterization  circuit,  and  two  calibration traces.

The  application  circuit  on  the  top  of  the  EV  kit  utilizes both 100 I differential and 50 I single-ended controlledimpedance  traces  and  provides  connectors  for  a  USB

Windows is a registered trademark of Microsoft Corp.

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14972 Evaluation Kit

## Evaluates: MAX14972

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX14972 when contacting this component supplier.

## Quick Start

## Required Equipment

## Table 1. Application Circuit Default Shunt Positions

| JUMPER        | SHUNT POSITION   |
|---------------|------------------|
| JU1-JU4       | Not installed    |
| JU5, JU6, JU9 | 1-2              |
| JU7, JU8      | 2-3              |
| JU10          | Installed        |

3.0 host and device. These features demonstrate the IC in a USB 3.0 environment.

The characterization circuit utilizes both 100 I differential and 50 I single-ended controlled-impedance traces and SMA  connectors.  This  enables  evaluation  of  eye  diagrams, return loss, and other frequency measurements. A  separate  +3.3V  power  supply  must  be  connected between the VCC3\_U3 and GND PCB pads on the EV kit.

The lower half of the EV kit provides two sets of calibration  traces  that  are  matched  to  the  trace  lengths  in  the characterization circuit. These traces provide a reference for  determining  the  performance  of  the  MAX14972  (U3) device only, when evaluated in the characterization circuit.

## Application Circuit

The application circuit provides the means for evaluating the IC in a USB 3.0 application. This section of the EV kit provides USB 3.0 host and device connectors (P1 and P2).

## Input Supply (VCC3)

The application circuit must be powered by a +3.0V to +3.6V supply. Table 2 lists two ways to get this voltage, through the +3.3V on-board LDO (U2) or by connecting directly to a user-supplied +3.0V to +3.6V supply. When using the on-board regulator, the LDO can be powered by connecting a USB cable from the PC to the Mini-USB connector (P3) or USB 3.0 connector (P1). If the green LED (D1) is turned on, it indicates that power from the USB  is  present.  When  the  jumper  JU10  (see  Table  3) shunt is installed, power is taken from the USB. The other option is to remove the shunt from JU10 and apply +3.0V to +3.6V between the VCC3 and GND PCB pads on the EV kit.

## Compliance Mode (U1)

The  IC  features  a  compliance  mode  that  forces  the device to remain in the active state. Jumpers JU1 and JU2 utilize this feature. See Table 4 to select the desired mode of operation for the IC.

## Programmable Input Equalization (U1)

The  IC  features  flexible  compensation  for  varied  inputboard  trace,  connector,  or  cable  losses.  The  EQ1  and EQ2 pins of the IC are used to set the equalization for channels 1 and 2. See Table 5 to configure the desired equalization settings for the EQ1 and EQ2 pins.

Table 2. U2 Power Option (JU9)

| SHUNT POSITION   | IN PIN (U2)                                               | DESCRIPTION                                                                    |
|------------------|-----------------------------------------------------------|--------------------------------------------------------------------------------|
| Not installed    | Connected to an external supply                           | Apply a +5.0V external supply between the VCC5 and GND PCB pads on the EV kit. |
| 1-2*             | Connected to +5.0V from the USB 3.0 type-B connector (P1) | Connect a USB 3.0 A-to-B cable from the PC to the P1 connector on the EV kit.  |
| 2-3              | Connected to +5.0V from the USB mini-B connector (P3)     | Connect an A-to-mini-B cable from the PC to the P3 connector on the EV kit.    |

*Default position.

## Table 3. U1 Power Option (JU10)

| SHUNT POSITION   | VCC PIN (U1)                         | DESCRIPTION                                      |
|------------------|--------------------------------------|--------------------------------------------------|
| Installed*       | Connected to the on-board LDO output | U1 powered by the LDO output, +3.3V              |
| Not installed    | Connected to an external supply      | U1 powered by the external +3.0V to +3.6V supply |

*Default position.

Table 4. Compliance Mode Truth Table (JU1, JU2)

| SHUNT POSITION        | SHUNT POSITION        | DESCRIPTION      |
|-----------------------|-----------------------|------------------|
| JU1 (ENRXD)           | JU2 (CM)              | DESCRIPTION      |
| 2-3                   | 2-3                   | Power-down       |
| 2-3                   | 1-2                   | Power-down       |
| 1-2 or not installed* | 2-3 or not installed* | Normal operation |
| 1-2 or not installed* | 1-2                   | Compliance mode  |

*Default position.

<!-- image -->

## MAX14972 Evaluation Kit Evaluates: MAX14972

## Programmable Output Deemphasis (U1)

The OS1 and OS2 pins of the IC are used to set the transition bit amplitude for channels 1 and 2. See Table 6 to configure the desired nontransition bit amplitude for the OS1, OS2, DE1, and DE2 pins.

The DE1 and DE2 pins of the U1 device are used to set the nontransition bit amplitude for channels 1 and 2. See Table 7 to configure the desired nontransition bit amplitude for the DE1 and DE2 pins.

Table 5. Equalization Setting (JU3, JU4)

| SHUNT POSITION   | EQ1/EQ2 PIN (U1)   |   EQUALIZATION (dB) |
|------------------|--------------------|---------------------|
| Not installed*   | Not connected      |                   0 |
| 1-2              | Connected to VCC3  |                  10 |
| 2-3              | Connected to GND   |                   6 |

*Default position.

## Table 6. Transition Bit Output Amplitude Setting (JU5-JU8)

| SHUNT POSITION       | SHUNT POSITION    | AMPLITUDE (mVP-P )   |
|----------------------|-------------------|----------------------|
| JU7/JU8 (OS_ PIN)    | JU5/JU6 (DE_ PIN) | AMPLITUDE (mVP-P )   |
| 2-3*                 | 2-3               | 1120                 |
| 2-3*                 | Not installed     | 940                  |
| 2-3*                 | 1-2*              | 1210                 |
| 1-2 or not installed | 2-3               | 1180                 |
| 1-2 or not installed | Not installed     | 1010                 |
| 1-2 or not installed | 1-2*              | 1270                 |

*Default position.

## Table 7. Nontransition Bit Amplitude Setting (JU5, JU6)

| SHUNT POSITION   | DE_ PIN (U1)      |   AMPLITUDE (mVP-P ) |
|------------------|-------------------|----------------------|
| Not installed    | Not connected     |                  640 |
| 1-2*             | Connected to VCC3 |                  940 |
| 2-3              | Connected to GND  |                  840 |

*Default position.

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Characterization Circuit

The characterization circuit is provided as a separate test circuit  for  high-frequency  evaluation  of  the  MAX14972 (U3)  device.  The  characterization  circuit  section  allows for  detailed  analysis  on  a  pair  of  inputs  over  a  single channel,  since  all  channel  inputs  have  similar  performance by design. This circuit provides differential SMA inputs/outputs  with  a  combination  of  controlled-impedance traces.

The  redriver  output  settings  can  be  optimized  for  various  USB  3.0  loading  conditions  by  installing  optional output  loading  capacitors  C29  and  C30.  These  may represent additional ESD protection devices or USB 3.0 connector loading.

## Input Supply (VCC\_U3)

The  characterization  circuit  is  powered  by  an  external +3.0V  to  +3.6V  power  supply  connected  between  the

Table 8. Compliance Mode Truth Table (JU11, JU12)

| SHUNT POSITION        | SHUNT POSITION        | DESCRIPTION      |
|-----------------------|-----------------------|------------------|
| JU11 (ENRXD PIN)      | JU12 (CM PIN)         | DESCRIPTION      |
| 2-3                   | 2-3                   | Power-down       |
| 2-3                   | 1-2                   | Power-down       |
| 1-2 or not installed* | 2-3 or not installed* | Normal operation |
| 1-2 or not installed* | 1-2                   | Compliance mode  |

*Default position.

Table 9. Equalization Setting (JU13)

| SHUNT POSITION   | EQ1 PIN (U3)      |   EQUALIZATION (dB) |
|------------------|-------------------|---------------------|
| Not installed*   | Not connected     |                   0 |
| 1-2              | Connected to VCC3 |                  10 |
| 2-3              | Connected to GND  |                   6 |

*Default position.

<!-- image -->

## MAX14972 Evaluation Kit Evaluates: MAX14972

VCC\_U3 and GND PCB pads on the EV kit. The application  circuit  GND  is  not  electrically  continuous  with  the characterization circuit GND in this section.

## Characterization Circuit Settings

Since  only  channel  1  is  used  in  the  characterization circuit, use jumpers JU11-JU15  to configure the MAX14972 (U3) device properly (see Tables 8-11).

## Calibration Traces

The  bottom  section  of  the  EV  kit  provides  two  sets  of calibration  traces.  The  calibration  traces  are  lengthmatched to the traces going from the SMA connector to the MAX14972 (U3) device of the characterization circuit. The first calibration trace (load) includes 50 I load termination resistors (R2, R5) and the second calibration trace (Thru) is a through trace.

Table 10. Transition Bit Output Amplitude Setting (JU14, JU15)

| SHUNT POSITION       | SHUNT POSITION   | AMPLITUDE   |
|----------------------|------------------|-------------|
| JU15 (OS1 PIN)       | JU14 (DE1 PIN)   | (mVp-p)     |
| 2-3 *                | 2-3              | 1120        |
| 2-3*                 | Not installed    | 940         |
| 2-3*                 | 1-2*             | 1210        |
| 1-2 or not installed | 2-3              | 1180        |
| 1-2 or not installed | Not installed    | 1010        |
| 1-2 or not installed | 1-2*             | 1270        |

*Default position.

Table 11. Nontransition Bit Amplitude Setting (JU14)

| SHUNT POSITION   | DE1 PIN (U3)      |   AMPLITUDE (mVP-P ) |
|------------------|-------------------|----------------------|
| Not installed    | Not connected     |                  640 |
| 1-2*             | Connected to VCC3 |                  940 |
| 2-3              | Connected to GND  |                  840 |

*Default position.

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14972 Evaluation Kit

## Evaluates: MAX14972

<!-- image -->

Figure 1a. MAX14972 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14972 Evaluation Kit

## Evaluates: MAX14972

<!-- image -->

Figure 1b. MAX14972 EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14972 Evaluation Kit

## Evaluates: MAX14972

<!-- image -->

Figure 1c. MAX14972 EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX14972 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX14972 Evaluation Kit

## Evaluates: MAX14972

Figure 3. MAX14972 EV Kit PCB Layout-Component Side

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 4. MAX14972 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

## MAX14972 Evaluation Kit

## Evaluates: MAX14972

Figure 5. MAX14972 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX14972 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX14972 Evaluation Kit

## Evaluates: MAX14972

Figure 7. MAX14972 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14972EVKIT# | EV Kit |

# Denotes RoHS compliant.

11

## MAX14972 Evaluation Kit

## Evaluates: MAX14972

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/11           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.