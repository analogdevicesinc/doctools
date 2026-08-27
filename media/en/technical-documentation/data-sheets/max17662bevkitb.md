<!-- lastmod 2022-08-02 -->
## MAX17662BEVKITB# Evaluation Kit

## General Description

The  MAX17662BEVKITB#  evaluation  kit  (EV  kit)  provides a proven design to evaluate the MAX17662B highefficiency, synchronous step-down DC-DC converter. The EV kit provides 5V/2A at the output from a 6.5V to 36V input  supply.  The  switching  frequency  of  the  EV  kit  is preset to 500kHz for optimum efficiency and component size.  The  EV  kit  features  adjustable  input  undervoltage lockout,  adjustable  soft-start,  open-drain RESET signal. The EV kit also provides a good layout example, which is  optimized  for  conducted,  radiated  EMI,  and  thermal performance. For more details about the IC benefits and features, refer to MAX17662B data sheet.

## Features

- Operates from a 6.5V to 36V Input Supply
- 5V Output Voltage
- Delivers Up to 2A Output Current
- 500kHz Switching Frequency
- Enable/Undervoltage Lockout Input, ResistorProgrammable UVLO Threshold
- Adjustable Soft-Start Time
- Open-Drain RESET Output
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Compliance with CISPR22(EN55022) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

Evaluates: MAX17662 in

## 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17662BEVKITB#
- 6.5V to 36V, 2A DC-input power supply
- Load capable of sinking 2A
- One digital voltmeter (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Set the power supply at a voltage between 6.5V and 36V. Then, disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 2A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify that shunts are installed across pins 1-2 on jumper JU1 (see Table 1 for details)
- 5) Select the shunt position on JU2 according to the intended mode of operation (see Table 2 for details)
- 6) Turn on the DC power supply.
- 7) Enable the load.
- 8) Verify that the DVM displays 5V.
- 9) Verify that the DVM displays at RESET PCB pad is 1.8V.

<!-- image -->

## MAX17662BEVKITB# Evaluation Kit

## Detailed Description

The MAX17662BEVKITB# EV kit is designed to deliver load current up to 2A at 5V output voltage from a 6.5V to 36V input supply. The switching frequency of the EV kit is configured at 500 kHz by leaving the RT resistor open.

The EV kit includes an EN/UVLO PCB pad and jumper JU1  to  enable  the  output  at  a  desired  minimum  input voltage. Jumper JU2 allows the selection of the mode of operation based on light load-performance requirements. An additional RESET PCB pad is available for monitoring whether the converter output is in regulation.

## Soft-Start Input (SS)

The EV kit offers an adjustable soft-start function to limit inrush  current  during  the  startup.  The  soft-start  time is  adjusted  by  the  value  of  C3,  the  external  capacitor connected between SS and SGND. The selected output capacitance  (C SEL )  and  the  output  voltage  (V OUT ) determine  the  minimum  value  of  C3,  as  shown  by  the following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS) is related to the soft-start capacitor C3 by the following equation:

<!-- formula-not-decoded -->

## Evaluates: MAX17662 in 5V Output-Voltage Application

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The MAX17662B offers an enable and an adjustable input undervoltage  lockout  feature.  In  this  EV  kit,  for  normal operation,  leave  EN/UVLO  jumper  (JU1)  open.  When JU1 is  left  open,  the  MAX17662B  is  enabled  when  the input voltage rises above 6.3V. To disable MAX17662B, install  a  jumper  across  pins  2-3  on  JU1.  See  Table  1 for  JU1 settings. The EN/UVLO PCB pad on the EV kit supports  external  enable/disable  control  of  the  device. Leave  jumper  JU1  open  when  external  enable/disable control is desired. A potential divider formed by R1 and R2 sets the input voltage (V INU ) above which the converter is enabled when JU1 is left open.

Choose R1 to be 3.32MΩ max, then calculate R2 as follows:

<!-- formula-not-decoded -->

where,

V INU  is the voltage at which the device is required to turn on. R1 and R2 are in kΩ,

For  more  details  about  setting  the  input  undervoltage lockout level, refer to the MAX17662B data sheet.

For  example,  to  program  a  0.82ms  soft-start  time,  C3 should be 6800pF.

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17662B OUTPUT                                                         |
|------------------|------------------------------------------------------------|--------------------------------------------------------------------------|
| 1-2              | Connected to V IN                                          | Always enabled                                                           |
| Not installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level is set by the resistor-divider between V IN and SGND |
| 2-3              | Connected to SGND                                          | Disabled                                                                 |

*Default position.

## MAX17662BEVKITB# Evaluation Kit

## Mode Selection (MODE)

The  EV  kit  provides  a  jumper  (JU2)  that  allows  the MAX17662B to operate in PWM and DCM modes. The EV kit also provides a MODE PCB pad to monitor MODE pin voltage of the converter in desired mode of operation. Refer to the MAX17662B data sheet for more details on the modes of operation.

Table 2 shows the mode selection (JU2) settings that can be used to configure the desired mode of operation.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit provides a RESET PCB pad to monitor the sta -tus of the converter. RESET goes high when V OUT rises above 95% (typ) of its nominal regulated voltage. RESET goes low when V OUT  falls below 92% (typ) of its nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The MAX17662BEVKITB# PCB layout provides an optional electrolytic capacitor (C6 = 47μF/50V). This capacitor limits the  peak  voltage  at  the  input  of  the  MAX17662B  when the DC input source is 'hot-plugged' to the EV kit input terminals  with  long  input  cables.  The  equivalent  series resistance  (ESR)  of  the  electrolytic  capacitor  dampens the oscillations caused by interaction of the inductance of the long input cables, and the ceramic capacitors at the buck converter input.

## Table 2. Mode Selection (JU2) Settings

| SHUNT POSITION   | MODE PIN          | MAX17662B OUTPUT      |
|------------------|-------------------|-----------------------|
| 1-2              | Connected to V CC | DCM mode of operation |
| 2-3*             | Connected to SGND | PWM mode of operation |

*Default position.

## Component Suppliers

| SUPPLIER       | WEBSITE             |
|----------------|---------------------|
| Coilcraft      | www.coilcraft.com   |
| MurataAmericas | www.murata.com      |
| Panasonic      | www.panasonic.com   |
| Vishay Dale    | www.vishay.com      |
| TDK Corp.      | www.tdk.com         |
| SullinsCorp    | www.sullinscorp.com |
| Taiyo yuden    | www.ty-top.com      |

Note: Indicate that you are using the MAX17662B when contacting these component suppliers.

## Evaluates: MAX17662 in 5V Output-Voltage Application

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency currents  drawn  by  the  switching  power  converter,  and limits the noise injected back into the input power source.

The MAX17662BEVKITB# has designated footprints on the  EV  kit  for  placement  of  EMI  filter  components.  Use of  these  filter  components  results  in  lower  conducted emissions,  below  CISPR22  Class  B  limits.  Cut  open the  trace  on  L2  before  installing  conducted  EMI  filter components.  The  MAX17662BEVKITB#  PCB  layout  is also designed to limit radiated emissions from switching nodes  of  the  power  converter,  resulting  in  radiated emissions below CISPR22 Class B limits.

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17662BEVKITB# | EV KIT |

Evaluates: MAX17662 in

5V Output-Voltage Application

## MAX17662BEVKITB# EV Kit Performance Report

(V IN = 24V, VOUT = 5V, IOUT = 2A, fSW = 500kHz, T A = +25ºC, unless otherwise noted.)

<!-- image -->

## MAX17662BEVKITB# EV Kit Performance Report (continued)

(V IN = 24V, VOUT = 5V, IOUT = 2A, fSW = 500kHz, T A = +25ºC, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

TUV Rheinland Final\_ScanV

<!-- image -->

08:55:44 AM, Monday, May 20, 2019

## MAX17662BEVKITB# Bill of Materials

|   S. No | Designator       | Description                                                                                          |   Quantity | Manufacturer Part Number   |
|---------|------------------|------------------------------------------------------------------------------------------------------|------------|----------------------------|
|       1 | C1               | 4.7µF, 10%, 50V, X7R, Ceramic capacitor (1206)                                                       |          1 | MURATA GRM31CR71H475KA12   |
|       2 | C2               | 2.2µF, 10%, 10V, X7R, Ceramic capacitor (0603)                                                       |          1 | MURATA GRM188R71A225KE15   |
|       3 | C3               | 6800pF, 10%, 50V, X7R, Ceramic capacitor (0402)                                                      |          1 | MURATA GCM155R71H682KA55   |
|       4 | C4               | 22µF, 10%, 25V, X7R, Ceramic capacitor (1210)                                                        |          1 | MURATA GRM32ER71E226ME15   |
|       5 | C5, C10, C17     | 0.1µF, 10%, 16V, X7R, Ceramic capacitor (0402)                                                       |          3 | TAIYO YUDEN EMK105B7104KV  |
|       6 | C6               | ALUMINUM-ELECTROLYTIC; 47UF; 50V; TOL=20%; MODEL=EEV SERIES                                          |          1 | PANASONIC EEE-TG1H470UP    |
|       7 | C9               | 0.1µF, 10%, 50V, X7R, Ceramic capacitor (0402)                                                       |          1 | TDK C1005X7R1H104K050BE    |
|       8 | C11, C15         | 150pF, 5%, 100V, COG, Ceramic capacitor (0402)                                                       |          2 | TDK C1005C0G2A151J050BA    |
|       9 | L1               | INDUCTOR, 8.2µH, 4.5A (5mm x 5mm)                                                                    |          1 | COILCRAFT XAL5050-822ME    |
|      10 | R1               | RES+, 3.32M Ω , 1% (0402)                                                                            |          1 | VISHAY DALE CRCW04023M32FK |
|      11 | R2               | RES+, 825K Ω , 1% (0402)                                                                             |          1 | VISHAY DALE CRCW0402825KFK |
|      12 | R3               | RES+, 232K Ω , 1% (0402)                                                                             |          1 | VISHAY DALE CRCW0402232KFK |
|      13 | R4               | RES+, 31.6K Ω , 1% (0402)                                                                            |          1 | VISHAY DALE CRCW040231K6FK |
|      14 | R6               | RES+, 10K Ω , 1% (0402)                                                                              |          1 | VISHAY DALE CRCW040210K0FK |
|      15 | R7               | RES+, 4.7 Ω , 1% (0402)                                                                              |          1 | VISHAY DALE CRCW04024R70FK |
|      16 | U1               | HIGH-EFFICIENCY SYNCHRONOUS STEP-DOWN DC-DC CONVERTER WITH INTERNAL COMPENSATION (TQFN16-EP 3mmx3mm) |          1 | MAX17662BATE+              |
|      17 | JU1-JU2          | 3-pin header (36-pin header 0.1' centers )                                                           |          2 | Sullins: PEC03SAAN         |
|      18 | -                | Shunts                                                                                               |          2 | SULLINS STC02SYAN          |
|      19 | MH1-MH4          | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                            |          4 | KEYSTONE 9032              |
|      20 | C13, C14         | OPTIONAL: 4.7μF, 10%, 50V, X7R, Ceramic capacitor (1206)                                             |          2 | MURATA GRM31CR71H475KA12   |
|      21 | L2               | OPTIONAL: INDUCTOR, 10µH, 3.1A (4mm x 4mm)                                                           |          1 | COILCRAFT XAL4040-103ME    |
|      22 | FB1              | OPEN: Ferrite Bead (0805)                                                                            |          0 |                            |
|      23 | C7, C8, C12, C16 | OPEN: Capacitor (0402)                                                                               |          0 |                            |
|      24 | R5               | OPEN: Resistor (0402)                                                                                |          0 |                            |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1                    | Open                   |
| JU2                    | 2-3                    |

Evaluates: MAX17662 in

5V Output-Voltage Application

## MAX17662BEVKITB# Schematic

<!-- image -->

## MAX17662BEVKITB# PCB Layout Diagrams

MAX17662BEVKITB# -Top Silkscreen

<!-- image -->

MAX17662BEVKITB# -Top Layer

<!-- image -->

## Evaluates: MAX17662 in 5V Output-Voltage Application

MAX17662BEVKITB# -Layer 2

<!-- image -->

MAX17662BEVKITB# -Layer 3

<!-- image -->

Evaluates: MAX17662 in

## MAX17662BEVKITB# PCB Layout Diagrams (continued)

MAX17662BEVKITB# -Bottom Layer

<!-- image -->

MAX17662BEVKITB# -Bottom Silkscreen

<!-- image -->

## MAX17662BEVKITB# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/19            | Initial release | -               |
|                 1 | 9/19            | Updated title   | 1 - 10          |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17662 in

5V Output-Voltage Application