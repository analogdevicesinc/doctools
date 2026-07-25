<!-- lastmod 2022-08-02 -->
## MAX17503EVKITBE# Evaluation Kit

## General Description

The MAX17503EVKITBE# evaluation kit (EV kit) provides a proven design to evaluate the MAX17503 high-voltage, high-efficiency,  synchronous  step-down  DC-DC converter.  The  EV  kit  is  preset  for  5V  output  at  load  currents up  to  2.5A  and  features  a  500kHz  switching  frequency for  optimum efficiency and component size. The EV kit features adjustable input undervoltage lockout, adjustable soft-start,  open-drain RESET signal,  and  external  clock synchronization. The EV kit also provides a good layout example which is optimized for conducted, radiated EMI, and thermal performance. For more details about the IC benefits  and  features,  refer  to  the  MAX17503  IC  data sheet.

## Features

- Operates from a 6.5V to 60V Input Supply
- Programmed 5V Output Voltage, 2.5A Load Current
- 500kHz Switching Frequency
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

## Evaluates: MAX17503 in 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17503EVKITBE#
- 6.5V to 60V, 5A DC input power supply
- Load capable of sinking 2.5A
- Digital voltmeter (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Set the power supply at a voltage between 6.5V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 2.5A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify that shunts are installed across pins 1-2 on jumper JU1 and pins 2-3 on jumper JU3 (see Tables 1 and 3 for details).
- 5) Select the shunt position on jumper JU2 according to the intended mode of operation (see Table 2 for details).
- 6) Turn on the DC power supply.
- 7) Enable the load.
- 8) Verify that the DVM displays 5V.

<!-- image -->

## MAX17503EVKITBE# Evaluation Kit

## Detailed Description

The  MAX17503EVKITBE#  provides  a  proven  design  to evaluate  the  MAX17503  high-voltage,  high-efficiency, synchronous  step-down  DC-DC  converter.  The  EV  kit is  preset  for  5V  output  from  6.5V  to  60V  input  at  load currents  up  to  2.5A  and  features  a  500kHz  switching frequency for optimum efficiency and component size.

The EV kit includes an EN/UVLO PCB pad and jumper JU1  to  enable  the  output  at  a  desired  input  voltage. The SYNC PCB pad and jumper JU3 allow an external clock to synchronize the device. Jumper JU2 allows the selection of a particular mode of operation based on lightload  performance  requirements.  An  additional RESET PCB pad is available for monitoring whether the converter output is in regulation.

## Soft-Start Input (SS)

The  EV  kit  offers  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time is  adjusted  by  the  value  of  external  soft-start  capacitor (C10) connected between SS and SGND. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum value of C10, as shown by the following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS ) is related to C10 by the following equation:

<!-- formula-not-decoded -->

For  example,  to  program  a  1ms  soft-start  time,  C10 should be 5.6nF.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAX17503  offers  an  Enable  and  adjustable  input undervoltage  lockout  feature.  In  this  EV  kit,  for  normal operation, leave the EN/UVLO jumper (JU1) open. When JU1  is  left  open,  the  MAX17503  is  enabled  when  the input voltage rises above 6.4V. To disable the MAX17503, install  a  jumper  across  pins  2-3  on  JU1.  See  Table  1 for  JU1 settings. The EN/UVLO PCB pad on the EV kit supports  external  Enable/Disable  control  of  the  device. Leave JU1 open when external Enable/Disable control is desired. A potential divider formed by R1 and R2 sets the input voltage (V INU ) above which the converter is enabled when JU1 is left open.

## Evaluates: MAX17503 in 5V Output-Voltage Application

Choose R1 to be 3.32MΩ (max), and then calculate R2 as follows:

<!-- formula-not-decoded -->

where, V INU  is the voltage at which the device is required to turn on, and R1 and R2 are in kΩ.

For more details about setting the undervoltage lockout level, refer to the MAX17503 data sheet.

## Mode Selection (MODE)

The  EV  kit  provides  a  jumper  (JU2)  that  allows  the MAX17503 to operate in PWM, PFM, and DCM modes. Refer to the MAX17503 data sheet for more details on the modes of operation.

Table 2 shows the mode selection (JU2) settings that can be used to configure the desired mode of operation.

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17503 OUTPUT                                         |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2*             | Connected to VIN                                           | Enabled                                                 |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

* Default position.

## Table 2. Mode Selection (JU2) Settings

| SHUNT POSITION   | MODE PIN          | MAX17503 MODE         |
|------------------|-------------------|-----------------------|
| Not installed*   | Unconnected       | PFM mode of operation |
| 2-3              | Connected to SGND | PWM mode of operation |
| 1-2              | Connected to VCC  | DCM mode of operation |

│

## MAX17503EVKITBE# Evaluation Kit

## External Clock Synchronization (SYNC)

The EV kit provides a SYNC PCB pad to synchronize the MAX17503 to an optional external clock. Leave Jumper (JU3)  open  when  external  clock  signals  are  applied.  In the presence of a valid external clock for synchronization, the  MAX17503  operates  in  PWM  mode  only.  For  more details about external clock synchronization, refer to the MAX17503 data sheet.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit provides a RESET PCB pad to monitor the status of the converter. RESET goes high when VOUT rises above 95% (typ) of its nominal regulated output voltage. RESET goes low when VOUT falls below 92% (typ) of its nominal regulated voltage.

## Table 3. External Clock Synchronization (JU3) Settings

| SHUNT POSITION   | SYNC PIN                      | MAX17503 SYNC                                        |
|------------------|-------------------------------|------------------------------------------------------|
| 1-2              | Connected to test loop on PCB | Frequency can be synchronized with an external clock |
| 2-3*             | Connected to SGND             | SYNC feature unused                                  |

* Default position.

## Component Suppliers

| SUPPLIER        | WEBSITE             |
|-----------------|---------------------|
| Vishay Dale     | www.vishay.com      |
| Coilcraft, Inc. | www.coilcraft.com   |
| Murata Americas | www.murata.com      |
| Panasonic Corp. | www.panasonic.com   |
| SullinsCorp     | www.sullinscorp.com |
| Taiyo Yuden     | www.ty-top.com      |

Note: Indicate that you are using the MAX17503 when contacting these component suppliers.

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17503EVKITBE# | EV Kit |

# Denotes RoHS compliant.

## Evaluates: MAX17503 in 5V Output-Voltage Application

## Hot Plug-In and Long Input Cables

The  MAX17503EVKITBE#  PCB  layout  provides  an optional  electrolytic  capacitor  (CIN4  =  68μF/100V). This capacitor  limits  the  peak  voltage  at  the  input  of  the MAX17503 when the DC input source is 'Hot-Plugged' to the EV kit input terminals with long input cables. The equivalent  series  resistance  (ESR)  of  the  electrolytic capacitor  dampens  the  oscillations  caused  by  interaction  of  the  inductance  of  the  long  input  cables,  and  the ceramic capacitors at the buck converter input.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter. The  EMI  filter attenuates high-frequency currents  drawn  by  the  switching  power  converter  and limits the noise injected back into the input power source.

The MAX17503EVKITBE# PCB has designated footprints on  the  bottom  side  for  placement  of  EMI  filter  components.  Use  of  these  filter  components  results  in  lower conducted  emissions  below  CISPR22  Class  B  limits. Remove the 0Ω resistor which is placed on the L1 foot -print  before  installing  conducted  EMI  filter  components. The  MAX17503EVKITBE#  EV  kit  PCB  layout  is  also designed to limit radiated emissions from switching nodes of  the  power  converter,  resulting  in  radiated  emissions below CISPR22 Class B limits.

│

## MAX17503EVKITBE# Evaluation Kit

## EV Kit Test Report

(V IN  = 24V, V OUT  = 5V, I OUT  = 2.5A, f SW  = 500kHz,T A  = +25ºC, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17503 in 5V Output-Voltage Application

│

## EV Kit Test Report (continued)

(V IN  = 24V, V OUT  = 5V, I OUT  = 2.5A, f SW  = 500kHz,T A  = +25ºC, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## EV Kit Test Report (continued)

(V IN  = 24V, V OUT  = 5V, I OUT  = 2.5A, f SW  = 500kHz,T A  = +25ºC, unless otherwise noted.)

<!-- image -->

Evaluates: MAX17503 in

│

## MAX17503EVKITBE# Evaluation Kit

## MAX17503EVKITBE# Bill of Materials

|   S. No | DESIGNATOR    | DESCRIPTION                                                                   |   QUANTITY | MANUFACTURER PART NUMBER       |
|---------|---------------|-------------------------------------------------------------------------------|------------|--------------------------------|
|       1 | CIN1, CIN7    | 0.1µF, 10%, 100V, X7R, Ceramic capacitor (0603)                               |          2 | TAIYO YUDEN HMK107B7104KA-T    |
|       2 | CIN2, CIN3    | 4.7µF, 10%, 80V, X7R, Ceramic capacitor (1210)                                |          2 | MURATA GRM32ER71K475KE14       |
|       3 | CIN4          | ALUMINUM-ELECTROLYTIC; 68UF; 100V; TOL=20%; MODEL = EEV SERIES                |          1 | PANASONIC EEV-FK2A680Q         |
|       4 | CIN5          | 0.47µF, 10%, 100V, X7R, Ceramic capacitor (0805)                              |          1 | MURATA GRM21BR72A474KA73       |
|       5 | CIN6          | 220pF, 5%, 100V, COG, Ceramic capacitor (0603)                                |          1 | TDK C1608C0G2A221J080AA        |
|       6 | C8            | 2.2µF, 10%, 10V, X7R, Ceramic capacitor (0603)                                |          1 | MURATA GRM188R71A225KE15       |
|       7 | C10           | 5600pF, 2%, 50V, COG, Ceramic capacitor (0402)                                |          1 | MURTA GRM1555C1H562GE01        |
|       8 | CO1           | 22µF, 10%, 25V, X7R, Ceramic capacitor (1210)                                 |          1 | MURATA GRM32ER71E226ME15       |
|       9 | C7, CO6, CO7  | 0.1µF, 10%, 16V, X7R, Ceramic capacitor (0402)                                |          3 | TAIYO YUDEN EMK105B7104KV-F    |
|      10 | CO9           | 2.2µF, 10%, 10V, X7R, Ceramic capacitor (0603)                                |          1 | MURATA GRM188R71A225KE15       |
|      11 | L1            | RES+, 0 Ω , 1W (1812)                                                         |          1 | VISHAY RCA12180000Z0EKLS       |
|      12 | L3            | INDUCTOR, 10µH, 4.7A (10mm x 10mm)                                            |          1 | COILCRAFT MSS1048-103ML        |
|      13 | R1            | RES+, 3.32M Ω , 1% (0402)                                                     |          1 | VISHAY DALE CRCW04023M32FK     |
|      14 | R2            | RES+, 787K Ω , 1% (0402)                                                      |          1 | VISHAY DALE CRCW0402787KFK     |
|      15 | R4            | RES+, 178K Ω , 1% (0402)                                                      |          1 | BOURNS CR0402-FX-1783GLF       |
|      16 | R5            | RES+, 10K Ω , 1% (0402)                                                       |          1 | VISHAY DALE CRCW040210K0FK     |
|      17 | R6            | RES+, 39K Ω , 1% (0402)                                                       |          1 | VISHAY DALE CRCW040239K0FK     |
|      18 | U1            | HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; (TQFN20-EP 4mm x 4mm) |          1 | MAX17503ATP+                   |
|      19 | JU1-JU3       | 3-pin header (36-pin header 0.1' centers )                                    |          3 | Sullins: PEC03SAAN             |
|      20 | -             | Shunts                                                                        |          3 | SULLINS STC02SYAN              |
|      21 | MH1-MH4       | MACHINE SCREW; SLOTTED                                                        |          4 | EAGLE PLASTIC DEVICES P440.375 |
|      22 | MH1-MH4       | HEX STANDOFF #4-40 NYLON 3/8"                                                 |          4 | KEYSTONE ELECTRONICS 1902B     |
|      23 | C1            | OPTIONAL: 4.7 μ F, 10%, 80V, X7R, Ceramic capacitor (1210)                    |          1 | MURATA GRM32ER71K475KE14       |
|      24 | L1            | OPTIONAL: INDUCTOR, 10µH, 3.1A (4mm x 4mm)                                    |          1 | COILCRAFT XAL4040-103ME        |
|      25 | CO2           | OPEN: Capacitor (1210)                                                        |          0 |                                |
|      26 | CO3, CO4, CO5 | OPEN: Capacitor (0805)                                                        |          0 |                                |
|      27 | CO8           | OPEN: Capacitor (0603)                                                        |          0 |                                |
|      28 | C11           | OPEN: Capacitor (0402)                                                        |          0 |                                |
|      29 | R3            | OPEN: Resistor (0402)                                                         |          0 |                                |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1                    | 1- 2                   |
| JU2                    | 1                      |
| JU3                    | 2 - 3                  |

│

Evaluates: MAX17503 in

5V Output-Voltage Application

## MAX17503EVKITBE# Schematic

<!-- image -->

## MAX17503EVKITBE# PCB Layout

<!-- image -->

MAX17503EVKITBE# PCB Layout-Top Silkscreen

<!-- image -->

MAX17503EVKITBE# PCB Layout-Layer 2

MAX17503EVKITBE# PCB Layout-Top Layer

<!-- image -->

MAX17503EVKITBE# PCB Layout-Layer 3

<!-- image -->

│

## MAX17503EVKITBE# PCB Layout (Continued)

MAX17503EVKITBE# PCB Layout-Bottom Layer

<!-- image -->

MAX17503EVKITBE# PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX17503EVKITBE# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim InteJrated reserves the riJht to chanJe the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX17503 in

5V Output-Voltage Application