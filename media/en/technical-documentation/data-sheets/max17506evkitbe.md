<!-- lastmod 2022-08-02 -->
## MAX17506EVKITBE# Evaluation Kit

## General Description

The  MAX17506EVKITBE#  (EV  kit)  provides  a  proven design  to  evaluate  the  MAX17506  high-voltage,  highefficiency, synchronous step-down DC-DC converter. The EV  kit  is  preset  for  a  5V  output  at  load  currents  up to  5A  and  features  a  450kHz  switching  frequency  for optimum  efficiency  and  component  size.  The  EV  kit features  adjustable-input,  undervoltage-lockout,  adjustable soft-start,  open-drain RESET signal,  and  external  clock synchronization. The EV kit also provides a good layout example, which is optimized for conducted, radiated EMI and thermal performance. For more details about the IC benefits and features, refer to the MAX17506 data sheet.

## Features

- Operates From a 6.5V to 60V Input Supply
- 5V Output Voltage
- Up to 5A Output Current
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

Ordering Information appears at end of data sheet.

## Evaluates: MAX17506 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17506EVKITBE#
- 6.5V to 60V, 10A DC input power supply
- Load capable of sinking 5A
- Digital voltmeter (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

## Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage between 6V and 60V. Disable the power supply.
- 2) Connect  the  positive  terminal  of  the  power  supply to  the  VIN  PCB  pad  and  the  negative  terminal  to the  nearest  PGND  PCB  pad.  Connect  the  positive terminal of the 5A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify  that  the  shunt  is  installed  across  pins  1-2  on jumper JU1 (see Table 1 for details).
- 5) Select  the  shunt  position  on  JU2  according  to  the intended mode of operation (see Table 2 for details).
- 6) Turn on the DC power supply.
- 7) Enable the load.
- 8) Verify that the DVM displays 5V.

<!-- image -->

## MAX17506EVKITBE# Evaluation Kit

## Detailed Description

The  MAX17506EVKITBE#  provides  a  proven  design  to evaluate  the  MAX17506  high-voltage,  high-efficiency, synchronous  step-down  DC-DC  converter.  The  EV  kit is  preset  for  a  5V  output  from  a  6.5V  to  60V  input  at load currents up to 5A and features a 450kHz switching frequency for optimum efficiency and component size.

The EV kit includes an EN/UVLO PCB pad and JU1 to enable the output at a desired input voltage. The SYNC PCB  pad  allows  an  external  clock  to  synchronize  the device. JU2 allows the selection of a particular mode of operation based on light-load performance requirements. An additional RESET PCB pad is available for monitoring when the converter output is in regulation.

## Soft-Start Input (SS)

The  EV  kit  offers  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time is  adjusted  by  the  value  of  external  soft  start  capacitor C7,  connected  between  SS  and  SGND.  The  selected output capacitance (C SEL ) and the output voltage (V OUT ) determine  the  minimum  value  of  C7,  as  shown  by  the following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS) is related to C7 by the following equation:

<!-- formula-not-decoded -->

For  example,  to  program  a  2.2ms  soft-start  time,  C7 should be 12nF.

## Evaluates: MAX17506 5V Output-Voltage Application

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAX17506  offers  an  Enable  and  adjustable  input undervoltage  lockout  feature.  In  this  EV  kit,  for  normal operation, leave EN/UVLO jumper (JU1) open. When JU1 is  left  open,  the  MAX17506  is  enabled  when  the  input voltage  rises  above  6.4V.  To  disable  MAX17506,  install a  jumper  across  pins  2-3  on  JU1.  See Table  1  for  JU1 settings. The EN/UVLO PCB pad on the EV kit supports external enable/disable control of the device.  Leave JU1 open  when  external  enable/disable  control  is  desired. A  potential  divider  formed  by  R1  and  R2  sets  the  input voltage  (V INU )  above  which  the  converter  is  enabled when JU1 is left open.

Choose R1 to be 3.32MΩ max, and then calculate R2 as follows:

<!-- formula-not-decoded -->

where,

V INU  is the voltage at which the device is required to turn on. R1 and R2 are in kΩ.

For more details about setting the undervoltage lockout level, refer to the MAX17506 data sheet.

## Mode Selection (MODE/SYNC)

The  EV  Kit  provides  a  jumper  (JU2)  that  allows  the MAX17506  to  operate  in  PWM,  PFM,  and  DCM  modes. Refer  to  MAX17506  data  sheet  for  more  details  on  the modes of operation.

Table 2 shows the Mode Selection (JU2) settings that can be used to configure the desired mode of operation.

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17506 OUTPUT                                         |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2*             | Connected to VIN                                           | Enabled                                                 |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

*Default position.

## Table 2. Mode Selection (JU2) Settings

| SHUNT POSITION   | MODE PIN          | MAX17506 MODE         |
|------------------|-------------------|-----------------------|
| Not installed*   | Unconnected       | PFM mode of operation |
| 1-2              | Connected to SGND | PWM mode of operation |
| 2-3              | Connected to VCC  | DCM mode of operation |

*Default position.

│

## External Clock Synchronization (MODE/SYNC)

The EV kit provides MODE/SYNC PCB pad, to synchronize the MAX17506 to an optional external clock. Leave jumper JU2 open when external clock signals are applied. In the presence  of  a  valid  external  clock  for  synchronization, the  MAX17506  operates  in  PWM  mode  only.  For  more details about external clock synchronization, refer to the MAX17506 data sheet.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit provides a RESET PCB pad to monitor the status of the converter. RESET goes high when V OUT rises above 95% (typ) of its nominal regulated voltage. RESET goes low when V OUT falls  below  92% (typ) of its nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The MAX17506EVKITBE# PCB layout provides an optional electrolytic capacitor (CIN7 = 47μF/80V). This capacitor lim -its the peak voltage at the input of the MAX17506 when the DC input source is 'hot-plugged' to the EV kit input terminals with  long  input  cables.  The  equivalent  series  resistance (ESR) of the electrolytic capacitor dampens the oscillations caused  by  interaction  of  the  inductance  of  the  long  input cables,  and  the  ceramic  capacitors  at  the  buck  converter input.

## Evaluates: MAX17506 5V Output-Voltage Application

## Electromagnetic Interference (EMI)

Compliance to conducted emissions (CE) standards requires an EMI filter at the input of a switching power converter. The EMI filter attenuates high-frequency currents drawn by the switching power converter, and limits the noise injected back into the input power source.

The  MAX17506EVKITBE#  has  designated  footprints  on the  EV  Kit  for  placement  of  EMI  filter  components.  Use of  these  filter  components  results  in  lower  conducted emissions,  below  CISPR22  Class  B  limits.  Cut  open the trace at L2  before  installing  conducted  EMI  filter components. The MAX17506EVKITBE# PCB layout is also designed to limit radiated emissions from switching nodes of the power converter, resulting in radiated emissions below CISPR22 Class B limits.

## MAX17506EVKITBE# Evaluation Kit

## EV Kit Performance Report

(V IN  = 24V, V OUT  = 5V, I OUT  = 5A, f SW = 450kHz, TA = +25°C, unless otherwise noted.)

<!-- image -->

│

Evaluates: MAX17506

## 5V Output-Voltage Application

## EV Kit Performance Report (continued)

(V IN  = 24V, V OUT  = 5V, I OUT  = 5A, f SW = 450kHz, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX17506EVKITBE# Evaluation Kit

## EV Kit Performance Report (continued)

(V IN  = 24V, V OUT  = 5V, I OUT  = 5A, f SW = 450kHz, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft, Inc. | www.coilcraft.com |
| TDK Corp.       | www.tdk.com       |
| MurataAmericas  | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |
| Vishay          | www.vishay.com    |
| Taiyo Yuden     | www.ty-top.com    |

Note: Indicate that you are using the MAX17506 when contacting these component suppliers.

CONDITIONS: 5V OUTPUT, 5A LOAD

<!-- image -->

TUV Rheinland

Maxim Ic\_MAX17506

RE 30MHz-1GHz\_0-360Deg\_90Deg Step\_1-4Mtr Height\_Quick Scan\_Test7.TIL

Final\_ScanV

<!-- image -->

12:38:54 PM, Monday, May 20, 2019

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17506EVKITBE# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX17506

│

## MAX17506EVKITBE# Evaluation Kit

## MAX17506EVKITBE# Bill of Materials

|   S.No | DESIGNATOR              | DESCRIPTION                                                                   |   QUANTITY | MANUFACTURER PART NUMBER         |
|--------|-------------------------|-------------------------------------------------------------------------------|------------|----------------------------------|
|      1 | C1                      | 2.2µF, 10%, 10V, X7R, Ceramic capacitor (0603)                                |          1 | MURATA GRM188R71A225KE15         |
|      2 | C2                      | 0.022µF, 10%, 50V, X7R, Ceramic capacitor (0402)                              |          1 | MURATA GCM155R71H223KA55         |
|      3 | C3, C4, CO1, CO5        | 0.1µF, 10%, 16V, X7R, Ceramic capacitor (0402)                                |          4 | TAIYO YUDEN EMK105B7104KV-F      |
|      4 | CIN1, CIN12, CIN13      | 0.1µF, 10%, 100V, X7R, Ceramic capacitor (0603)                               |          3 | TAIYO YUDEN HMK107B7104KA-T      |
|      5 | CIN2, CIN14, CIN15      | 220pF, 5%, 100V, COG, Ceramic capacitor (0603)                                |          3 | TDK C1608C0G2A221J080AA          |
|      6 | CIN7                    | ALUMINUM-ELECTROLYTIC; 47UF; 80V; TOL = 20%; MODEL=EEV SERIES                 |          1 | PANASONIC EEE-FK1K470P           |
|      7 | CIN8, CIN10             | 4.7μF, 10%, 100V, X7R, Ceramic capacitor (1206)                               |          2 | MURATA GRM31CZ72A475KE11         |
|      8 | CO2, CO3                | 47µF, 10%, 10V, X7R, Ceramic capacitor (1210)                                 |          2 | MURATA GRM32ER71A476KE15         |
|      9 | CO4                     | 22µF, 10%, 25V, X7R, Ceramic capacitor (1210)                                 |          1 | MURATA GRM32ER71E226ME15         |
|     10 | L1                      | INDUCTOR, 4.7µH, 17.4A (8mm x 8mm)                                            |          1 | COILCRAFT XAL8080-472ME          |
|     11 | N1                      | N-CHANNEL 80V MOSFET (3.3mm x 3.3mm)                                          |          1 | VISHAY SILICONIX SIS468DN-T1-GE3 |
|     12 | R1                      | RES+, 3.32MΩ, 1% (0603)                                                       |          1 | VISHAY DALE CRCW04023M32FK       |
|     13 | R2                      | RES+, 806KΩ, 1% (0603)                                                        |          1 | PANASONIC ERJ-3EKF8063           |
|     14 | R3                      | RES+, 158KΩ, 1% (0402)                                                        |          1 | PANASONIC ERJ-2RKF1583           |
|     15 | R4                      | RES+, 34.8KΩ, 1% (0402)                                                       |          1 | VISHAY DALE CRCW040234K8FK       |
|     16 | R6                      | RES+, 10KΩ, 1% (0402)                                                         |          1 | PANASONIC ERJ-2RKF1002Y          |
|     17 | R8, R9                  | RES+, 4.7Ω, 1% (0402)                                                         |          2 | VISHAY CRCW04024R70FK            |
|     18 | U1                      | HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; (TQFN20-EP 5mm x 5mm) |          1 | MAX17506ATP+                     |
|     19 | JU1, JU2                | 3-pin header (36-pin header 0.1' centers )                                    |          2 | Sullins: PEC03SAAN               |
|     20 | -                       | Shunts                                                                        |          2 | SULLINS STC02SYAN                |
|     21 | MH1-MH4                 | MACHINE SCREW; SLOTTED                                                        |          4 | EAGLE PLASTIC DEVICES P440.375   |
|     22 | MH1-MH4                 | HEX STANDOFF #4-40 NYLON 3/8"                                                 |          4 | KEYSTONE ELECTRONICS 1902B       |
|     23 | CIN4 , CIN9             | OPTIONAL: 4.7μF, 10%, 100V, X7R, Ceramic capacitor (1206)                     |          2 | MURATA GRM31CZ72A475KE11         |
|     24 | L2                      | OPTIONAL: INDUCTOR, 22µH, 3.4A (5mm x 5mm)                                    |          1 | COILCRAFT XAL5050-223ME          |
|     25 | CIN3, CIN5, CIN6, CIN11 | OPEN: Capacitor (1206)                                                        |          0 |                                  |
|     26 | CIN16                   | OPEN: Capacitor (0603)                                                        |          0 |                                  |
|     27 | C5                      | OPEN: Capacitor (0402)                                                        |          0 |                                  |
|     28 | CO6                     | OPEN: Capacitor (0402)                                                        |          0 |                                  |
|     29 | R5                      | OPEN: Resistor (0402)                                                         |          0 |                                  |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1                    | 1-2                    |
| JU2                    | 1                      |

Evaluates: MAX17506

## 5V Output-Voltage Application

## MAX17506EVKITBE# Schematic

<!-- image -->

│

## MAX17506EVKITBE# PCB Layout Diagrams

MAX17506EVKITBE# PCB Layout-Top Silkscreen

<!-- image -->

MAX17506EVKITBE# PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX17506

│

Evaluates: MAX17506

## MAX17506EVKITBE# PCB Layout Diagrams (continued)

MAX17506EVKITBE# PCB Layout-Layer 2 Ground

<!-- image -->

MAX17506EVKITBE# PCB Layout-Layer 3 Power

<!-- image -->

│

Evaluates: MAX17506

## MAX17506EVKITBE# PCB Layout Diagrams (continued)

MAX17506EVKITBE# PCB Layout-Bottom Layer

<!-- image -->

MAX17506EVKITBE# PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX17506EVKITBE# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17506

5V Output-Voltage Application