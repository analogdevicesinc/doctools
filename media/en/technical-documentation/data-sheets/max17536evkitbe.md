<!-- lastmod 2022-08-02 -->
## MAX17536EVKITBE# Evaluation Kit

## General Description

The MAX17536EVKITBE# (EV kit) provides a proven design to  evaluate  this  high-voltage,  high-efficiency,  synchronous step-down DC-DC converter. The EV kit is preset for a 5V output  at  load  currents  up  to  4A  and  features  a  450kHz switching frequency for optimum efficiency and component size.  The  EV  kit  features  adjustable  input,  undervoltage lockout, adjustable soft-start, open-drain RESET signal, and external  clock  synchronization.  The  EV  kit  also  provides  a good layout example, which is optimized for conducted, radiated EMI,  and  thermal  performance.  For  more  details  about  the IC benefits and features, refer to the MAX17536 data sheet.

## Features

- Operates from a 6.5V to 60V Input Supply
- 5V Output Voltage
- Up to 4A Output Current
- 450kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- MODE Pin to Select Among PWM, PFM, or DCM Modes
- Open-Drain RESET Output
- External Clock Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

## Evaluates: MAX17536 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17536EVKITBE#
- 6.5V to 60V, 10A DC input power supply
- Load capable of sinking 4A
- Digital voltmeter (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Set the power supply at a voltage between 6V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 4A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify that shunt is installed across pins 1-2 on jumper JU1 (see T able 1 for details).
- 5) Select the shunt position on JU2 according to the intended mode of operation (see Table 2 for details).
- 6) Turn on the DC power supply.
- 7) Enable the load.
- 8) Verify that the DVM displays 5V.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17536EVKITBE# Evaluation Kit

## Detailed Description

The  MAX17536EVKITBE#  provides  a  proven  design  to evaluate the high-voltage, high-efficiency, synchronous stepdown DC-DC converter. The EV kit is preset for a 5V output from  a  6.5V  to  60V  input  at  load  currents  up  to  4A  and features a 450kHz  switching frequency for  optimum efficiency and component size.

The EV kit includes an EN/UVLO PCB pad and JU1 to enable the output at a desired input voltage. The SYNC PCB  pad  allows  an  external  clock  to  synchronize  the device. JU2 allows the selection of a particular mode of operation  based  on  light-load  performance  requirements. An additional RESET PCB pad is available for monitoring when the converter output is in regulation.

## Soft-Start Input (SS)

The  EV  kit  offers  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of external soft-start capacitor (C2) connected between SS and SGND. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the  minimum  value  of  C2,  as  shown  by  the  following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS ) is related to C2 by the following equation:

<!-- formula-not-decoded -->

For  example,  to  program  a  2.2ms  soft-start  time,  C2 should be 12nF.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The MAX17536 offers an enable and an adjustable input undervoltage  lockout  feature.  In  this  EV  kit,  for  normal operation, leave the EN/UVLO jumper (JU1) open. When JU1  is  left  open,  the  MAX17536  is  enabled  when  the input voltage rises above 6.4V. To disable the MAX17536, install  a  jumper  across  pins  2-3  on  JU1.  See  Table  1 for  JU1 settings. The EN/UVLO PCB pad on the EV kit supports  external  Enable/Disable  control  of  the  device. Leave JU1 open when external Enable/Disable control is desired. A potential divider formed by R1 and R2 sets the input voltage (V INU ) above which the converter is enabled when JU1 is left open.

## Evaluates: MAX17536 5V Output-Voltage Application

Choose R1 to be 3.32MΩ (max), and then calculate R2 as follows:

<!-- formula-not-decoded -->

where,

V INU  is the voltage at which the device is required to turn on.

R1 and R2 are in kΩ.

For more details about setting the undervoltage lockout level, refer to the MAX17536 data sheet.

## Mode Selection (MODE/SYNC)

The  EV  kit  provides  a  jumper  (JU2)  that  allows  the MAX17536 to operate in PWM, PFM, and DCM modes. Refer to the MAX17536 data sheet for more details on the modes of operation. Table  2  shows  the  mode  selection (JU2) settings that can be used to configure the desired mode of operation.

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17536 OUTPUT                                         |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2*             | Connected to V IN                                          | Enabled                                                 |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

*Default position.

## Table 2. Mode Selection (JU2) Settings

| SHUNT POSITION   | MODE PIN          | MAX17536 MODE         |
|------------------|-------------------|-----------------------|
| Not installed*   | Unconnected       | PFM mode of operation |
| 1-2              | Connected to SGND | PWM mode of operation |
| 2-3              | Connected to V CC | DCM mode of operation |

*Default position.

## MAX17536EVKITBE# Evaluation Kit

## External Clock Synchronization (MODE/SYNC)

The EV kit provides a MODE/SYNC PCB pad to synchronize the  MAX17536  to  an  optional  external  clock.  Leave the  jumper  (JU2)  open  when  external  clock  signals  are applied.  In  the  presence  of  a  valid  external  clock  for synchronization, the MAX17536 operates in PWM mode only. For more details about external clock synchronization, refer to the MAX17536 data sheet.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit  provides  a RESET PCB  pad  to  monitor  the status  of  the  converter. RESET goes  high  when  V OUT rises  above  95%  (typ)  of  its  nominal  regulated  voltage. RESET goes low when V OUT falls below 92% (typ) of its nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The MAX17536EVKITBE# PCB layout provides an optional electrolytic  capacitor  (CIN7  =  47μF/80V). This  capacitor limits the peak voltage at the input of the MAX17536 when the DC input source is 'hot-plugged' to the EV kit input terminals  with  long  input  cables.  The  equivalent  series resistance  (ESR)  of  the  electrolytic  capacitor  dampens the  oscillations  caused  by  interaction  of  the  inductance of the long input cables and the ceramic capacitors at the buck converter input.

## EV Kit Performance Report

(V IN  = 24V, V OUT  = 5V, I OUT = 4A, f SW  = 450kHz,T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

## Evaluates: MAX17536 5V Output-Voltage Application

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency currents  drawn  by  the  switching  power  converter  and limits the noise injected back into the input power source.

The MAX17536EVKITBE# has designated footprints on the  EV  kit  for  placement  of  the  EMI  filter  components. Use of these filter components results in lower conducted emissions  below  CISPR22  Class  B  limits.  Cut  open the  trace  at  L2  before  installing  conducted  EMI  filter components.  The  MAX17536EVKITBE#  PCB  layout  is also  designed  to  limit  radiated  emissions  from  switching nodes  of  the  power  converter  resulting  in  radiated emissions below CISPR22 Class B limits.

## MAX17536EVKITBE# Evaluation Kit

## EV Kit Performance Report (continued)

(V IN  = 24V, V OUT  = 5V, I OUT = 4A, f SW  = 450kHz,T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAX17536

## 5V Output-Voltage Application

## EV Kit Performance Report (continued)

(V IN  = 24V, V OUT  = 5V, I OUT = 4A, f SW  = 450kHz,T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17536EVKITBE# Evaluation Kit

## EV Kit Performance Report (continued)

(V IN  = 24V, V OUT  = 5V, I OUT = 4A, f SW  = 450kHz,T A = +25°C, unless otherwise noted.)

CONDUCTEDEMISSIONSPLOT 5VOUTPUT,4ALOADCURRENT

<!-- image -->

L2 = 15μH, CIN4 = CIN9 = 4.7μF/100V/X7R/1206

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft, Inc. | www.coilcraft.com |
| TDK Corp.       | www.tdk.com       |
| MurataAmericas  | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |
| Vishay          | www.vishay.com    |

Note: Indicate that you are using the MAX17536 when contacting these component suppliers.

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17536EVKITBE# | EV Kit |

#Denotes RoHS compliant.

<!-- image -->

TUV Rheinland

Maxim Ic\_MAX17536

RE 30MHz-1GHz\_0-360Deg\_90Deg Step\_1-4Mtr Height\_Quick Scan\_Test3.TIL

Final\_ScanV

<!-- image -->

10:33:28 AM, Monday, May 20, 2019

Evaluates: MAX17536

## 5V Output-Voltage Application

## MAX17536EVKITBE# Bill of Materials

|   S.No | DESIGNATOR              | DESCRIPTION                                                                   |   QUANTITY | MANUFACTURER PART NUMBER         |
|--------|-------------------------|-------------------------------------------------------------------------------|------------|----------------------------------|
|      1 | C1                      | 2.2µF, 10%, 10V, X7R, Ceramic capacitor (0603)                                |          1 | MURATA GRM188R71A225KE15         |
|      2 | C2                      | 0.022µF, 10%, 50V, X7R, Ceramic capacitor (0402)                              |          1 | MURATA GCM155R71H223KA55         |
|      3 | C3, C4, CO1, CO5        | 0.1µF, 10%, 16V, X7R, Ceramic capacitor (0402)                                |          4 | TAIYO YUDEN EMK105B7104KV-F      |
|      4 | CIN1, CIN12, CIN13      | 0.1µF, 10%, 100V, X7R, Ceramic capacitor (0603)                               |          3 | TAIYO YUDEN HMK107B7104KA-T      |
|      5 | CIN2, CIN14, CIN15      | 220pF, 5%, 100V, COG, Ceramic capacitor (0603)                                |          3 | TDK C1608C0G2A221J080AA          |
|      6 | CIN7                    | ALUMINUM-ELECTROLYTIC; 47UF; 80V; TOL=20%; MODEL=EEV SERIES                   |          1 | PANASONIC EEE-FK1K470P           |
|      7 | CIN8, CIN10             | 4.7μF, 10%, 100V, X7R, Ceramic capacitor (1206)                               |          2 | MURATA GRM31CZ72A475KE11         |
|      8 | CO2                     | 47µF, 10%, 10V, X7R, Ceramic capacitor (1210)                                 |          1 | MURATA GRM32ER71A476KE15         |
|      9 | CO3, CO4                | 22µF, 10%, 25V, X7R, Ceramic capacitor (1210)                                 |          2 | MURATA GRM32ER71E226ME15         |
|     10 | L1                      | INDUCTOR, 4.7µH, 11A (6mm x 6mm)                                              |          1 | COILCRAFT XAL6060-472ME          |
|     11 | N1                      | N-CHANNEL 80V MOSFET (3.3mm x 3.3mm)                                          |          1 | VISHAY SILICONIX SIS468DN-T1-GE3 |
|     12 | R1                      | RES+, 3.32MΩ, 1% (0603)                                                       |          1 | VISHAY DALE CRCW04023M32FK       |
|     13 | R2                      | RES+, 806KΩ, 1% (0603)                                                        |          1 | PANASONIC ERJ-3EKF8063           |
|     14 | R3                      | RES+, 158KΩ, 1% (0402)                                                        |          1 | PANASONIC ERJ-2RKF1583           |
|     15 | R4                      | RES+, 34.8KΩ, 1% (0402)                                                       |          1 | VISHAY DALE CRCW040234K8FK       |
|     16 | R6                      | RES+, 10KΩ, 1% (0402)                                                         |          1 | PANASONIC ERJ-2RKF1002           |
|     17 | R8, R9                  | RES+, 4.7Ω, 1% (0402)                                                         |          2 | VISHAY CRCW04024R70FK            |
|     18 | U1                      | HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; (TQFN20-EP 5mm x 5mm) |          1 | MAX17536ATP+                     |
|     19 | JU1, JU2                | 3-pin header (36-pin header 0.1' centers )                                    |          2 | Sullins: PEC03SAAN               |
|     20 | -                       | Shunts                                                                        |          2 | SULLINS STC02SYAN                |
|     21 | MH1-MH4                 | MACHINE SCREW; SLOTTED                                                        |          4 | EAGLE PLASTIC DEVICES P440.375   |
|     22 | MH1-MH4                 | HEX STANDOFF #4-40 NYLON 3/8"                                                 |          4 | KEYSTONE ELECTRONICS 1902B       |
|     23 | CIN4 , CIN9             | OPTIONAL: 4.7μF, 10%, 100V, X7R, Ceramic capacitor (1206)                     |          2 | MURATA GRM31CZ72A475KE11         |
|     24 | L2                      | OPTIONAL: INDUCTOR, 15µH, 2.8A (4mm x 4mm)                                    |          1 | COILCRAFT XAL4040-153ME          |
|     25 | CIN3, CIN5, CIN6, CIN11 | OPEN: Capacitor (1206)                                                        |          0 |                                  |
|     26 | CIN16                   | OPEN: Capacitor (0603)                                                        |          0 |                                  |
|     27 | C5                      | OPEN: Capacitor (0402)                                                        |          0 |                                  |
|     28 | CO6                     | OPEN: Capacitor (0402)                                                        |          0 |                                  |
|     29 | R5                      | OPEN: Resistor (0402)                                                         |          0 |                                  |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1                    | 1 - 2                  |
| JU2                    | 1                      |

Evaluates: MAX17536

## 5V Output-Voltage Application

## MAX17536EVKITBE# Schematic

<!-- image -->

## MAX17536EVKITBE# PCB Layout Diagrams

MAX17536EVKITBE# PCB Layout-Top Silkscreen

<!-- image -->

MAX17536EVKITBE# PCB Layout-Layer 2 Ground

<!-- image -->

Evaluates: MAX17536

MAX17536EVKITBE# PCB Layout-Top Layer

<!-- image -->

MAX17536EVKITBE# PCB Layout-Layer 3 Power

<!-- image -->

## MAX17536EVKITBE# PCB Layout Diagrams (continued)

MAX17536EVKITBE# PCB Layout-Bottom Layer

<!-- image -->

MAX17536EVKITBE# PCB Layout-Silk Bottom

<!-- image -->

## MAX17536EVKITBE# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17536

5V Output-Voltage Application