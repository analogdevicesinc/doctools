<!-- lastmod 2022-08-02 -->
## MAX17630AEVKIT# Evaluation Kit

## General Description

The MAX17630AEVKIT# Evaluation Kit (EV kit) provides a  proven  design  to  evaluate  the  MAX17630A  high-effi -ciency,  synchronous  step-down  DC-DC  converter.  The EV kit provides 3.3V/1A at the output from a 4.5V to 36V input supply. The switching frequency of the EV kit is preset to 400kHz for optimum efficiency and component size. The EV kit features adjustable input undervoltage lockout, adjustable soft-start, open-drain RESET signal, and external clock synchronization. The EV kit layout is optimized for  thermal  performance.  For  more  details  about  the  IC benefits and features, refer to MAX17630 data sheet.

## Features

- Operates from a 4.5V to 36V Input Supply
- 3.3V Output Voltage
- Delivers Up to 1A Output Current
- 400kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- Open-Drain RESET Output
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX17630 3.3V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17630AEVKIT# Evaluation Kit
- 4.5V to 36V, 1A DC-input power supply
- Load capable of sinking 1A
- Digital voltmeter (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

## Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage between 4.5V and 36V. Then, disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 1A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify that shunts are installed across pins 1-2 on jumper JU1 (see Table 1 for details) and pins 2-3 on jumper JU2 (see Table 2 for details)
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that the DVM displays 3.3V.

<!-- image -->

## MAX17630AEVKIT# Evaluation Kit

## Detailed Description

The EV kit is designed to deliver 3.3V at load current up to 1A at the output from a 4.5V to 36V input supply. The switching frequency of the EV kit is configured at 400 kHz by leaving RT resistor open.

The EV kit includes an EN/UVLO PCB pad and jumper JU1 to enable the output at a desired input voltage. The MODE/SYNC PCB pad and jumper JU2 allow an external clock to synchronize the device. Jumper JU2 allows the selection  of  the  mode  of  operation  based  on  light  loadperformance  requirements.  An  additional RESET PCB pad  is  available  for  monitoring  whether  the  converter output is in regulation or not.

## Soft-Start Input (SS)

The EV kit offers an adjustable soft-start function to limit inrush  current  during  the  startup.  The  soft-start  time  is adjusted by the value of external soft start capacitor C3, connected between SS and SGND. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum value of C3, as shown by the following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS ) is related to the soft-start capacitor C3 by the following equation:

## Evaluates: MAX17630 3.3V Output-Voltage Application

For example, in order to program a 1ms soft-start time, C3 should be 5600pF.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAX17630  offers  an  Enable  and  adjustable  input undervoltage-lockout  feature.  In  this  EV  kit,  for  normal operation, leave the EN/UVLO jumper (JU1) open. When JU1 is left open, the MAX17630 is enabled when the input voltage rises above 4.4V. To disable the MAX17630, install a  jumper  across  pins  2-3  on  JU1.  See  Table  1  for  JU1 settings. The EN/UVLO PCB pad on the EV kit supports external Enable/Disable control of the device. Leave JU1 open  when  external  Enable/Disable  control  is  desired. A potential divider formed by R1 and R2 sets the input voltage  (V INU )  above  which  the  converter  is  enabled  when JU1 is left open.

Choose R1 to be 3.32MΩ (max), and then calculate R2 as follows:

<!-- formula-not-decoded -->

where, V INU  is the voltage at which the device is required to turn on, and R1 and R2 are in kΩ.

<!-- formula-not-decoded -->

For more details about setting the undervoltage lockout level, refer to the MAX17630 data sheet.

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17630A OUTPUT                                                        |
|------------------|------------------------------------------------------------|-------------------------------------------------------------------------|
| 1-2              | Connected to VIN                                           | Enabled                                                                 |
| Not installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level is set by the resistor-divider between VIN and SGND |
| 2-3              | Connected to SGND                                          | Disabled                                                                |

* Default position.

│

## MAX17630AEVKIT# Evaluation Kit

## Mode Selection (MODE/SYNC)

The  EV  kit  provides  a  jumper  (JU2)  that  allows  the MAX17630 to operate in PWM, PFM and DCM modes. Refer  to  the  MAX17630  data  sheet  for  more  details on  the  modes  of  operation.  Table  2  shows  the  MODE SELECTION (JU2) settings that can be used to configure the desired mode of operation.

## External Clock Synchronization (MODE/SYNC)

## Evaluates: MAX17630 3.3V Output-Voltage Application

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit provides a RESET PCB pad to monitor the status of the converter. RESET goes high when VOUT rises above 95% (typ) of its nominal regulated output voltage. RESET goes low when VOUT falls below 92% (typ) of its nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The  EV  kit  provides  a  MODE/SYNC  PCB  pad  to  synchronize  the  MAX17630  to  an  optional  external  clock. Leave  Jumper  (JU3)  open  when  external  clock  signals are applied. In the presence of a valid external clock for synchronization, the MAX17630 operates in PWM mode only. For more details about external clock synchronization, refer to the MAX17630 data sheet.

The MAX17630AEVKIT# PCB layout provides an optional electrolytic capacitor (C6 = 22μF/50V). This capacitor lim -its the peak voltage at the input of the MAX17630A when the DC input source is 'Hot-Plugged' to the EV kit input terminals  with  long  input  cables.  The  equivalent  series resistance  (ESR)  of  the  electrolytic  capacitor  dampens the oscillations caused by interaction of the inductance of the long input cables, and the ceramic capacitors at the buck converter input.

Table 2. Mode Selection Jumper (JU2) Settings

| SHUNT POSITION   | MODE/SYNC PIN     | MAX17630A OUTPUT      |
|------------------|-------------------|-----------------------|
| 1-2              | Connected to V CC | DCM mode of operation |
| 2-3*             | Connected to SGND | PWM mode of operation |
| Not installed    | OPEN              | PFM mode of operation |

* Default position.

│

## MAX17630AEVKIT# EV Kit Performance Report

(VIN  = 24V, V OUT  = 3.3V, f SW  = 400kHz, unless otherwise noted.)

<!-- image -->

<!-- image -->

CONDITIONS: PWM MODE, L1 = XAL4040 - 103ME

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: PFM MODE, L1 = XAL4040-103ME

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAX17630

## 3.3V Output-Voltage Application

│

## MAX17630AEVKIT# EV Kit Performance Report (continued)

(VIN  = 24V, V OUT  = 3.3V, f SW  = 400kHz, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX17630AEVKIT# EV Kit Performance Report (continued)

(VIN  = 24V, V OUT  = 3.3V, f SW  = 400kHz, unless otherwise noted.)

<!-- image -->

## Component Suppliers

| SUPPLIER       | WEBSITE             |
|----------------|---------------------|
| Coilcraft      | www.coilcraft.com   |
| MurataAmericas | www.murata.com      |
| Panasonic      | www.panasonic.com   |
| Taiyo Yuden    | www.ty-top.com      |
| TDK Corp.      | www.tdk.com         |
| SullinsCorp    | www.sullinscorp.com |

Note: Indicate that you are using the MAX17630A when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17630AEVKIT# | EVKIT  |

CONDITIONS: PWM MODE, 1A LOAD

│

## MAX17630AEVKIT# EV Kit Bill of Materials

|   S.No | Designator       | Description                                                                  |   Quantity | Manufacturer Part Number                              |
|--------|------------------|------------------------------------------------------------------------------|------------|-------------------------------------------------------|
|      1 | C1               | 2.2µF, 10%, 50V, X7R, Ceramic capacitor (1206)                               |          1 | TDK C3216X7R1H225K160AE                               |
|      2 | C2               | 2.2µF, 10%, 10V, X7R, Ceramic capacitor (0603)                               |          1 | MURATA GRM188R71A225KE15                              |
|      3 | C3               | 5600pF, 2%, 50V, COG, Ceramic capacitor (0402)                               |          1 | MURATA GRM1555C1H562GE01                              |
|      4 | C4               | 22µF, 20%, 25V, X7R, Ceramic capacitor (1210)                                |          1 | MURATA GRM32ER71E226ME15                              |
|      5 | C5, C10          | 0.1µF, 10%, 16V, X7R, Ceramic capacitor (0402)                               |          2 | TAIYO YUDEN EMK105B7104KV                             |
|      6 | C11, C15         | 150pF, 5%, 100V, X7R, Ceramic capacitor (0402)                               |          2 | TDK C1005C0G2A151J050BA                               |
|      7 | C9               | 0.1µF, 10%, 50V, X7R, Ceramic capacitor (0402)                               |          1 | TDK C1005X7R1H104K050BE                               |
|      8 | C6               | ALUMINUM-ELECTROLYTIC; 22UF; 50V; TOL = 20%; MODEL = FK SERIES               |          1 | PANASONIC EEE-FK1H220P                                |
|      9 | L1               | INDUCTOR, 10µH; 20%; 4.9A (5mm x 5mm) INDUCTOR, 10µH; 20%; 3A (4mm x 4mm)    |          1 | COILCRAFT XAL5050-103ME Alternate part: XAL4040-103ME |
|     10 | R1               | RESISTOR, 3.32MΩ, 1% (0402)                                                  |          1 | VISHAY DALE CRCW04023M32FK                            |
|     11 | R2               | RESISTOR, 1.3MΩ, 1% (0402)                                                   |          1 | VISHAY DALE CRCW04021M30FK                            |
|     12 | R3               | RESISTOR, 0Ω (0402)                                                          |          1 | PANASONIC ERJ-2GE0R00                                 |
|     13 | R6               | RESISTOR, 10KΩ, 1% (0402)                                                    |          1 | VISHAY DALE CRCW040210K0FK                            |
|     14 | U1               | HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER (TQFN16- EP 3mmx 3mm) |          1 | MAX17630AATE+                                         |
|     15 | JU1, JU2         | 3-pin header (36-pin header 0.1' centers)                                    |          2 | SULLINS PEC03SAAN                                     |
|     16 | -                | Shunts                                                                       |          2 | SULLINS STC02SYAN                                     |
|     17 | C13, C14         | OPEN: Capacitor (1210)                                                       |          0 | N/A                                                   |
|     18 | L2               | OPEN: Inductor (4mm x 4mm)                                                   |          0 | N/A                                                   |
|     19 | C7, C8, C12, C16 | OPEN: Capacitor (0402)                                                       |          0 | N/A                                                   |
|     20 | R4, R5, R7       | OPEN: Resistor ( 0402)                                                       |          0 | N/A                                                   |
|     21 | FB1              | OPEN: Ferrite Bead (0805)                                                    |          0 | N/A                                                   |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1                    | OPEN                   |
| JU2                    | 2 - 3 SHORT            |

│

Evaluates: MAX17630

3.3V Output-Voltage Application

## MAX17630AEVKIT# Evaluation Kit

## MAX17630AEVKIT# EV Kit Schematic

<!-- image -->

## MAX17630AEVKIT# Evaluation Kit

## MAX17630AEVKIT# EV Kit PCB Layout

MAX17630AEVKIT# EV Kit-Top Silkscreen

<!-- image -->

MAX17630AEVKIT# EV Kit-Top Layer

<!-- image -->

## Evaluates: MAX17630 3.3V Output-Voltage Application

MAX17630AEVKIT# EV Kit-Layer 2

<!-- image -->

MAX17630AEVKIT# EV Kit-Layer 3

<!-- image -->

│

## MAX17630AEVKIT# EV Kit PCB Layout (continued)

MAX17630AEVKIT# EV Kit-Bottom Layer

<!-- image -->

MAX17630AEVKIT# EV Kit-Silk Bottom

<!-- image -->

│

Evaluates: MAX17630

## MAX17630AEVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX17630

3.3V Output-Voltage Application