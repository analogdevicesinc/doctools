<!-- lastmod 2022-08-02 -->
## MAX17634BEVKIT# Evaluation Kit

## General Description

The MAX17634BEVKIT# 5V output evaluation kit (EV kit) provides  a  proven  design  to  evaluate  the  MAX17634B high-voltage,  high-efficiency,  synchronous  step-down DC-DC converter. The EV kit is preset for 5V output at load currents of 4.25A and features a 400kHz switching frequency  for  optimum  efficiency  and  component  size. The  EV  kit  features  an  adjustable  input  undervoltage lockout,  adjustable  soft-start,  open-drain RESET signal, and external clock synchronization. EV kit specifications, settings,  features  and  benefits  are  highlighted.  The  EV kit layout is optimized for thermal performance. For more details  about  the  IC  benefits  and  features,  refer  to  the MAX17634 data sheet.

## Features

- Wide 6.5V to 36V Input Range
- Programmed 5V Output, 4.25A Load Current
- 400kHz Switching Frequency
- EN/UVLO Input, Resistor-Programmable UVLO Threshold
- Programmed 1ms Soft-Start Time
- Selectable PWM, PFM, and DCM Modes
- Open-Drain RESET Output Pulled Up To 5V of INTVCC
- Provision for External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX17634B 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- One MAX17634BEVKIT# EV kit
- One 0V to 36V DC, 5A power supply
- Load capable of sinking 4.25A current
- Digital voltmeter (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

Caution: Do not turn on power supply until all connections are complete.

- 1) Set the input power supply at a voltage between 6.5V and 36V. Disable the power supply.
- 2) Connect the positive terminal of the input power supply to the VIN PCB pad and the negative terminal to the nearest PGND pad. Connect the positive terminal of the 4.25A load to the VOUT pad and the negative terminal to the nearest PGND pad.
- 3) Connect a DVM across the VOUT pad and the nearest PGND pad.
- 4) Verify  that  shunts  are  not  installed  on  jumper  JU1 (see Table 1 for details).
- 5) Select  the  shunt  position  on  jumper  JU2  according to  the  intended  mode  of  operation  (see  Table  2  for details).
- 6) Turn on the input power supply.
- 7) Enable the load.
- 8) Verify that the DVM displays 5V.
- 9) Connect the DVM across the RESET pad and SGND. Verify that the DVM displays 5V.
- 10)  Reduce the input voltage to 5V which is below the EN/ UVLO falling threshold.
- 11)  Connect the DVM across the VOUT pad and nearest PGND. Verify that the DVM displays 0V.
- 12)  Connect the DVM across the RESET pad and SGND. Verify that the DVM displays 0V.
- 13)  Disable the input power supply.

<!-- image -->

## MAX17634BEVKIT# Evaluation Kit

## Detailed Description

The MAX17634BEVKIT# is designed to demonstrate the salient features of the MAX17634B. The EV kit includes an EN/UVLO pad and jumper JU1 to enable the output at a desired input voltage. The Jumper JU2 allows selection of a particular mode of operation based on light load performance requirements. The MODE/SYNC pin on jumper JU2 allows an external clock interface to synchronize the device. An additional RESET pad is available for monitoring the status of the output voltage.

## Soft-Start Programming

The  EV  kit  offers  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of external soft-start capacitor C3, connected between SS and SGND. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum value of C3, as shown by the following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS ) is related to the soft-start capacitor C3 by the following equation:

<!-- formula-not-decoded -->

For example, in order to program a 1ms soft-start time, C3 should be 5600pF.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAX17634  offers  an  Enable  and  adjustable  input undervoltage  lockout  feature.  In  this  EV  kit,  for  normal operation, leave EN/UVLO jumper (JU1) open. When JU1 is  left  open,  the  MAX17634  is  enabled  when  the  input voltage  rises  above  6.4V.  To  disable  MAX17634,  install a jumper across pins 2-3 on JU1. See Table 1 for JU1 settings. The EN/UVLO PCB pad on the EV kit supports external Enable/Disable control of the device. Leave JU1 open when external Enable/Disable control is desired. A potential divider formed by R1 and R2 sets the input voltage (V INU )  above  which  the  converter  is  enabled  when JU1 is left open.

## Evaluates: MAX17634B 5V Output-Voltage Application

Choose R1 to be 3.32MΩ (max), and then calculate R2 as follows:

<!-- formula-not-decoded -->

where V INU  is the voltage at which the device is required to turn on, and R1 and R2 are in kΩ .

For more details about setting the undervoltage lockout level, refer to the MAX17634 data sheet.

## Mode Selection (MODE)

The  EV  kit  provides  a  jumper  (JU2)  that  allows  the MAX17634 to operate in PWM, PFM, and DCM modes. Table 2 shows the MODE SELECTION (JU2) settings that can be used to configure the desired mode of operation. Refer to the MAX17634 data sheet for more details on the modes of operation.

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17634B EV KIT OUTPUT                                 |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2              | Connected to VIN                                           | Enabled                                                 |
| Not Installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

*Default position

## Table 2. Mode Selection Jumper (JU2) Settings

| SHUNT POSITION   | MODE/SYNC PIN       | MAX17634B EV KIT OUTPUT   |
|------------------|---------------------|---------------------------|
| 1-2              | Connected to INTVCC | DCM mode of operation     |
| 2-3*             | Connected to SGND   | PWM mode of operation     |
| Not Installed    | Unconnected         | PFM model of operation    |

*Default position

│

## MAX17634BEVKIT# Evaluation Kit

## External Clock Synchronization (SYNC)

The  EV  kit  provides  SYNC  pin  on  jumper  JU2  to  synchronize  the  MAX17634  to  an  optional  external  clock. Leave  Jumper  (JU2)  open  when  external  clock  signals are applied. In the presence of a valid external clock for synchronization, the MAX17634 operates in PWM mode only. For more details about external clock synchronization, refer to the MAX17634 data sheet.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit provides a RESET PCB pad to monitor the status of the converter. RESET goes high when VOUT rises above 95% (typ) of its nominal regulated output voltage. RESET goes low when VOUT falls below 92% (typ) of its nominal regulated voltage.

## Evaluates: MAX17634B 5V Output-Voltage Application

## Hot Plug-In and Long Input Cables

The MAX17634BEVKIT# PCB layout provides an optional electrolytic capacitor (C6, 47μF/50V). This capacitor limits the  peak  voltage  at  the  input  of  the  MAX17634B  when the DC input source is 'Hot-Plugged' to the EV kit input terminals  with  long  input  cables.  The  equivalent  series resistance  (ESR)  of  the  electrolytic  capacitor  dampens the oscillations caused by interaction of the inductance of the long input cables, and the ceramic capacitors at the buck converter input.

## MAX17634BEVKIT# Performance Report

(V IN = 24V, L = 8.2μH (XAL6060-822ME), f SW = 400kHz, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## 5V Output-Voltage Application

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX17634BEVKIT# Performance Report (continued)

(V IN = 24V, L = 8.2μH (XAL6060-822ME), f SW = 400kHz, unless otherwise noted.)

<!-- image -->

CONDITIONS: DCM MODE, 50mA LOAD

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: PWM MODE, 4.25A LOAD

│

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17634BEVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX17634B

5V Output-Voltage Application

## Component Suppliers

| SUPPLIER        | WEBSITE               |
|-----------------|-----------------------|
| Coilcraft, Inc. | www.coilcraft.com     |
| Murata Americas | www.murata.com        |
| Panasonic Corp. | www.panasonic.com     |
| TDK Corp.       | www.component.tdk.com |
| Venkel Ltd.     | www.venkel.com        |
| SullinsCorp     | www.sullinscorp.com   |
| Taiyo Yuden     | www.t-yuden.com       |
| Vishay Dale     | www.vishay.com        |

Note: Indicate that you are using the MAX17634B IC when contacting these component suppliers.

│

## MAX17634BEVKIT# Bill of Materials

|   S.No | DESIGNATOR        | DESCRIPTION                                                                  |   QUANTITY | MANUFACTURER PART NUMBER   |
|--------|-------------------|------------------------------------------------------------------------------|------------|----------------------------|
|      1 | C1, C10           | 4.7µF, 10%, 50V, X7R,Ceramic capacitor (1206)                                |          2 | MURATA GRM31CR71H475KA12   |
|      2 | C2                | 2.2µF, 10%, 10V, X7R, Ceramic capacitor (0603)                               |          1 | MURATA GRM188R71A225KE15   |
|      3 | C3                | 5600pF, 2%, 50V, COG, Ceramic capacitor (0402)                               |          1 | MURATA GRM1555C1H562GE01   |
|      4 | C4, C7            | 47µF, 20%, 10V, X7R,Ceramic capacitor (1210)                                 |          2 | MURATA GRM32ER71A476ME15   |
|      5 | C5                | 0.1µF, 10%, 16V, X7R,Ceramic capacitor (0402)                                |          1 | TAIYO YUDEN EMK105B7104KV  |
|      6 | C6                | 47uF, 20%, 50V, Electrolytic capacitor                                       |          1 | PANASONIC EEE-TG1H470UP    |
|      7 | C8, C11, C16, C17 | 150pF, 5%, 100V, X7R, Ceramic capacitor(0402)                                |          4 | TDK C1005C0G2A151J050BA    |
|      8 | C9                | 0.1μF, 10%, 50V, X7R, Ceramic capacitor (0402)                               |          1 | TDK C1005X7R1H104K050BE    |
|      9 | L1                | INDUCTOR, 8.2µH, 20%, 8A (6mm x 6mm)                                         |          1 | COILCRAFT XAL6060-822ME    |
|     10 | R1                | RESISTOR, 3.32MΩ, 1% (0402)                                                  |          1 | Any                        |
|     11 | R2                | RESISTOR, 787kΩ, 1% (0402)                                                   |          1 | Any                        |
|     12 | R3, R7            | RESISTOR, 0Ω (0402)                                                          |          2 | Any                        |
|     13 | R5                | RESISTOR, 51kΩ, 1% (0402)                                                    |          1 | Any                        |
|     14 | R6                | RESISTOR, 10kΩ, 1% (0402)                                                    |          1 | Any                        |
|     15 | U1                | HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER (TQFN20-EP 4mm x 4mm) |          1 | MAX17634BATP+              |
|     16 | JU1, JU2          | 3-pin header                                                                 |          2 | SULLINS GRPB031VWVN-RC     |
|     17 | -                 | Shunts                                                                       |          2 | SULLINS NPB02SVAN-RC       |
|     18 | C12, C13          | OPEN: Capacitor (1206)                                                       |          0 |                            |
|     19 | C14, C19          | OPEN: Capacitor (1210)                                                       |          0 |                            |
|     20 | FB1               | OPEN: Ferrite Bead (0805)                                                    |          0 |                            |
|     21 | L2                | OPEN: Inductor (5mm x 5mm)                                                   |          0 |                            |
|     22 | C15               | OPEN: Capacitor (0402)                                                       |          0 |                            |
|     23 | C18               | OPEN: Capacitor (0603)                                                       |          0 |                            |
|     24 | R4, R8            | OPEN: Resistor (0402)                                                        |          0 |                            |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1                    | 2                      |
| JU2                    | 2-3                    |

Evaluates: MAX17634B

5V Output-Voltage Application

## MAX17634BEVKIT# Evaluation Kit

## MAX17634BEVKIT# Schematic

<!-- image -->

## MAX17634BEVKIT# Evaluation Kit

## MAX17634BEVKIT# PCB Layout

MAX17634B EV Kit-Top Silkscreen

<!-- image -->

MAX17634B EV Kit-Top

<!-- image -->

## Evaluates: MAX17634B 5V Output-Voltage Application

MAX17634B EV Kit-Layer2 GND

<!-- image -->

MAX17634B EV Kit-Layer3 GND

<!-- image -->

│

## MAX17634BEVKIT# PCB Layout (continued)

MAX17634B EV Kit-Bottom

<!-- image -->

## Evaluates: MAX17634B 5V Output-Voltage Application

MAX17634B EV Kit-Bottom Silkcreen

<!-- image -->

│

## MAX17634BEVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                 | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------|-----------------|
|                 0 | 8/19            | Initial release             | -               |
|                 1 | 9/19            | Updated title of data sheet | 1-11            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,nteJrated reserYes the riJht to chanJe the circuitry and speci¿cations Zithout notice at any time.

│

Evaluates: MAX17634B

5V Output-Voltage Application