<!-- lastmod 2022-08-02 -->
## MAX17574EVKITBE# Evaluation Kit

## General Description

The MAX17574EVKITBE# evaluation kit (EV kit) provides a proven design to evaluate the MAX17574 high-voltage, high-efficiency, synchronous step-down DC-DC converter. The  EV  kit  is  preset  for  5V  output  at  load  currents  up to  3A  and  features  a  500kHz  switching  frequency  for optimum  efficiency  and  component  size.  The  EV  kit features adjustable input undervoltage lockout, adjustable soft-start,  open-drain RESET signal,  and  external  clock synchronization. The EV kit also provides a good layout example,  which  is  optimized  for  conducted,    radiated EMI,  and  thermal  performance.  For  more  details  about the IC benefits and features, refer to the MAX17574 IC data sheet.

Ordering Information appears at end of data sheet.

## Evaluates: MAX17574 5V Output-Voltage Application

## Features

- Operates from a 6.5V to 60V Input Supply
- Programmed 5V Output Voltage, 3A Load Current
- 500kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- MODE/SYNC Pin to Select Among PWM, PFM, or DCM Modes
- Open-Drain RESET Output
- External Clock Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

<!-- image -->

## Quick Start

## Recommended Equipment

- MAX17574EVKITBE#
- 6.5V to 60V, 5A DC input power supply
- Load capable of sinking 3A
- Digital voltmeter (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

## Caution: Do not turn on power supply until all connections are completed.

- 1)  Set the power supply at a voltage between 6.5V and 60V. Disable the power supply.
- 2)  Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 3A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3)  Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4)  Verify that shunts are installed across pins 1-2 on jumper JU1 (see Table 1 for details).
- 5)  Select the shunt position on jumper JU2 according to the intended mode of operation (see Table 2 for details).
- 6)  Turn on the DC power supply.
- 7)  Enable the load.
- 8)  Verify that the DVM displays 5V.

## Evaluates: MAX17574 5V Output-Voltage Application

## Detailed Description

The  MAX17574EVKITBE#  provides  a  proven  design  to evaluate  the  MAX17574  high-voltage,  high-efficiency, synchronous step-down DC-DC converter. The EV kit is preset for 5V output from 6.5V to 60V input at load currents up to 3A and features a 500kHz switching frequency for optimum efficiency and component size.

The EV kit includes an EN/UVLO PCB pad and jumper JU1 to enable the output at a desired input voltage. The SYNC PCB pad allows an external clock to synchronize the device. Jumper JU2 allows the selection of a particular MODE/SYNC of operation based on light-load performance requirements. An additional RESET PCB  pad  is available  for  monitoring  whether  the  converter  output  is in regulation.

## Soft-Start Input (SS)

The EV kit offers an adjustable soft-start function to limit inrush current during startup. The soft-start time is adjusted by the value of the soft-start capacitor (C10) connected between SS and SGND. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum value of C10, as shown by the following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS ) is related to C10 by the following equation:

<!-- formula-not-decoded -->

For  example,  to  program  a  1ms  soft-start  time,  C10 should be 5.6nF.

## MAX17574EVKITBE# Evaluation Kit

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAX17574  offers  an  Enable  and  adjustable  input undervoltage lockout feature. For normal operation in this EV kit, leave the EN/UVLO jumper (JU1) open. When JU1 is  left  open,  the  MAX17574  is  enabled  when  the  input voltage  rises  above  6.4V.  To  disable  MAX17574,  install a jumper across pins 2-3 on JU1. See Table 1 for JU1 settings. The EN/UVLO PCB pad on the EV kit supports external Enable/Disable control of the device. Leave JU1 open when external Enable/Disable control is desired. A potential divider formed by R1 and R2 sets the input voltage (V INU )  above  which  the  converter  is  enabled  when JU1 is left open.

Choose R1 to be 3.32MΩ (max), and then calculate R2 as follows:

<!-- formula-not-decoded -->

where,

VINU  is the voltage at which the device is required to turn on, and R1 and R2 are in kΩ.

For more details about setting the undervoltage lockout Level, refer to the MAX17574 data sheet.

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17574_ OUTPUT                                        |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2              | Connected to VIN                                           | Enabled                                                 |
| Not installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

* Default position.

## Evaluates: MAX17574 5V Output-Voltage Application

## Mode Selection (MODE/SYNC)

The  EV  kit  provides  a  jumper  (JU2)  that  allows  the MAX17574 to operate in PWM, PFM, and DCM modes. Refer  to  the  MAX17574  data  sheet  for  more  details about the modes of operation. Table 2 shows the Mode Selection (JU2) settings that can be used to configure the desired mode of operation.

## External Clock Synchronization (MODE/SYNC)

The  EV  kit  provides  a  MODE/SYNC  PCB  pad  to  synchronize  the  MAX17574  to  an  optional  external  clock. Leave  Jumper  (JU2)  open  when  external  clock  signals are applied. In the presence of a valid external clock for synchronization, the MAX17574 operates in PWM mode only. For more details about external clock synchronization, refer to the MAX17574 data sheet.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit provides a RESET PCB pad to monitor the status of the converter. RESET goes high when VOUT rises above 95% (typ) of its nominal regulated voltage. RESET goes low when VOUT falls below 92% (typ) of its nominal regulated voltage.

## Table 2. Mode Selection Jumper (JU2) Settings

| SHUNT POSITION   | MODE/SYNC PIN     | MAX17574_ MODE        |
|------------------|-------------------|-----------------------|
| Not installed    | Unconnected       | PFM mode of operation |
| 2-3*             | Connected to SGND | PWM mode of operation |
| 1-2              | Connected to VCC  | DCM mode of operation |

* Default position.

│

## MAX17574EVKITBE# Evaluation Kit

## Hot Plug-In and Long Input Cables

The MAX17574EVKITBE# PCB layout provides an optional electrolytic capacitor (CIN4 = 47μF/80V). This capacitor limits  the  peak  voltage  at  the  input  of  the  MAX17574C when  the  DC  input  source  is  'Hot-Plugged'  to  the  EV kit  input  terminals  with  long  input  cables.  The  equivalent series resistance (ESR) of the electrolytic capacitor dampens the oscillations caused by interaction of the inductance of the long input cables and the ceramic capacitors at the buck converter input.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires an electromagnetic interference (EMI) filter at the

## EV Kit Performance Report

(V IN  = 24V, V OUT  = 5V, f SW  = 500kHz, unless otherwise noted.)

<!-- image -->

<!-- image -->

## Evaluates: MAX17574 5V Output-Voltage Application

input of a switching power converter. The EMI filter attenuates high-frequency currents drawn by the switching power converter and limits the noise injected back into the input power source.

The  MAX17574EVKITBE#  has  designated  footprints  on the EV kit for placement of EMI filter components. Use of these filter  components results in  lower  conducted  emissions below CISPR22 Class B limits. Cut open the trace at  L1  before  installing  conducted  EMI  filter  components. The MAX17574EVKITBE# PCB layout is also designed to limit radiated emissions from switching nodes of the power converter resulting in radiated emissions below CISPR22 Class B limits.

<!-- image -->

<!-- image -->

│

## EV Kit Performance Report (continued)

(V IN  = 24V, V OUT  = 5V, f SW  = 500kHz, unless otherwise noted.)

<!-- image -->

## SOFT-START/SHUTDOWN THROUGH EN/UVLO

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## EV Kit Performance Report (continued)

(V IN  = 24V, V OUT  = 5V, f SW  = 500kHz, unless otherwise noted.)

<!-- image -->

## Evaluates: MAX17574 5V Output-Voltage Application

<!-- image -->

│

## MAX17574EVKITBE# Evaluation Kit

## EV Kit Performance Report (continued)

(V IN  = 24V, V OUT  = 5V, f SW  = 500kHz, unless otherwise noted.)

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft, Inc. | www.coilcraft.com |
| Vishay Dale     | www.vishay.com    |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |
| Taiyo Yuden     | www.t-yuden.com   |
| TDK Corp.       | www.tdk.com       |
| AVX corporation | www.avx.com       |

Note:

Indicate that you are using the MAX17574 when contacting these component suppliers.

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17574EVKITBE# | EV Kit |

## Evaluates: MAX17574 5V Output-Voltage Application

<!-- image -->

│

## MAX17574EVKITBE# EV Kit Bill of Materials

|   S. No | Designator    | Description                                                                                           |   Quantity | Manufacturer Part Number    |
|---------|---------------|-------------------------------------------------------------------------------------------------------|------------|-----------------------------|
|       1 | C1            | 4.7µF, 10%, 80V, X7R, Ceramic capacitor (1210)                                                        |          1 | MURATA GRM32ER71K475KE14    |
|       2 | CIN1, CIN7    | 0.1µF, 10%, 100V, X7R, Ceramic capacitor (0603)                                                       |          2 | TAIYO YUDEN HMK107B7104KA-T |
|       3 | CIN2, CIN3    | 2.2µF, 10%, 100V, X7R, Ceramic capacitor (1210)                                                       |          2 | TDK CGA6N3X7R2A225K230      |
|       4 | CIN4          | ALUMINUM-ELECTROLYTIC; 47UF; 80V; TOL=20%; MODEL=EEV SERIES                                           |          1 | PANASONIC EEE-FK1K470P      |
|       5 | CIN5          | 0.47µF, 10%, 100V, X7R, Ceramic capacitor (0805)                                                      |          1 | AVX 08051C474K4T2A          |
|       6 | CIN6          | 220pF, 5%, 100V, COG, Ceramic capacitor (0603)                                                        |          1 | TDK C1608C0G2A221J080AA     |
|       7 | C3, CO6, CO7  | 0.1µF, 10%, 50V, X7R, Ceramic capacitor (0402)                                                        |          3 | MURATA GCM155R71H104KE02    |
|       8 | C7            | 0.1µF, 10%, 16V, X7R, Ceramic capacitor (0402)                                                        |          1 | MURTA GCM155R71C104KA55D    |
|       9 | C8, CO9       | 2.2µF, 10%, 10V, X7R, Ceramic capacitor (0603)                                                        |          2 | MURATA GRM188R71A225KE15    |
|      10 | C10           | 22000pF, 20%, 25V, COG, Ceramic capacitor (0402)                                                      |          1 | TAIYO YUDEN TMK105B7223MVHF |
|      11 | CO1, CO2      | 22µF, 10%, 10V, X7R, Ceramic capacitor (1210)                                                         |          2 | MURATA GCM32ER71A226KE12L   |
|      12 | L3            | INDUCTOR, 10µH, 8.7A (8mm x 8mm)                                                                      |          1 | COILCRAFT XAL8080-103ME     |
|      13 | R1            | RES+, 3.32M Ω , 1% (0402)                                                                             |          1 | VISHAY DALE CRCW04023M32FK  |
|      14 | R2            | RES+, 604K Ω , 1% (0402)                                                                              |          1 | PANASONIC ERJ-2RKF6043X     |
|      15 | R4            | RES+, 105K Ω , 1% (0402)                                                                              |          1 | VISHAY DALE CRCW0402105KFK  |
|      16 | R5            | RES+, 10K Ω , 1% (0402)                                                                               |          1 | VISHAY DALE CRCW040210K0FK  |
|      17 | R6            | RES+, 22.6K Ω , 1% (0402)                                                                             |          1 | VISHAY DALE CRCW040222K6FK  |
|      18 | R7            | RES+, 4.7 Ω , 1% (0402)                                                                               |          1 | VISHAY DALE CRCW04024R70FK  |
|      19 | U1            | HIGH-EFFICIENCY SYNCHRONOUS STEP-DOWN DC-DC CONVERTER WITH INTERNAL COMPENSATION (TQFN24- EP 4mmx5mm) |          1 | MAX17574ATG+                |
|      20 | JU1-JU2       | 3-pin header (36-pin header 0.1' centers )                                                            |          2 | Sullins: PEC03SAAN          |
|      21 | -             | Shunts                                                                                                |          2 | SULLINS STC02SYAN           |
|      22 | MH1-MH4       | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                             |          4 | KEYSTONE 9032               |
|      23 | CIN8          | OPTIONAL: 4.7μF, 10%, 80V, X7R, Ceramic capacitor (1210)                                              |          1 | MURATA GRM32ER71K475KE14    |
|      24 | L1            | OPTIONAL: INDUCTOR, 10µH, 3.1A (4mm x 4mm)                                                            |          1 | COILCRAFT XAL4040-103ME     |
|      25 | C2, C11       | OPEN: Capacitor (0402)                                                                                |          0 |                             |
|      26 | CO3, CO4, CO5 | OPEN: Capacitor (0805)                                                                                |          0 |                             |
|      27 | CO8           | OPEN: Capacitor (0603)                                                                                |          0 |                             |
|      28 | R3            | OPEN: Resistor (0402)                                                                                 |          0 |                             |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1                    | OPEN                   |
| JU2                    | 2-3                    |

Evaluates: MAX17574

5V Output-Voltage Application

## MAX17574EVKITBE# EV Kit Schematic

<!-- image -->

│

## MAX17574EVKITBE# Evaluation Kit

## MAX17574EVKITBE# EV Kit PCB Layout

MAX17574EVKITBE# EV Kit-Top Silkscreen

<!-- image -->

MAX17574EVKITBE# EV Kit-Layer 2

<!-- image -->

## Evaluates: MAX17574 5V Output-Voltage Application

MAX17574EVKITBE# EV Kit-Top Layer

<!-- image -->

MAX17574EVKITBE# EV Kit-Layer 3

<!-- image -->

│

## MAX17574EVKITBE# EV Kit PCB Layout (continued)

MAX17574EVKITBE# EV Kit-Bottom Layer

<!-- image -->

MAX17574EVKITBE# EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX17574EVKITBE# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim InteJrated reserYes the riJht to chanJe the circuitry and speci¿cations Zithout notice at any time.

│

Evaluates: MAX17574

5V Output-Voltage Application