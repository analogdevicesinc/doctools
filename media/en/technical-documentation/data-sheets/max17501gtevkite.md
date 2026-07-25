<!-- lastmod 2022-08-02 -->
## MAX17501GTEVKITE# Evaluation Kit

## General Description

The MAX17501GTEVKITE# provides a proven design to evaluate  the  MAX17501G  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter  in  a  TDFN package.  The  EV  kit  generates  5V  at  load  currents up  to  500mA  from  a  6.5V  to  60V  input  supply.  The  EV kit  features  a  600kHz  fixed  switching  frequency  for optimum  efficiency  and  component  size.  The  EV  kit features  a  forced-PWM  control  scheme  that  provides constant  switching-frequency  operation  at  all  load  and line  conditions.  The  EV  kit  also  provides  a  good  layout example, which is optimized for conducted, radiated EMI, and thermal performance. For more details about the IC benefits and features, refer to the MAX17501 data sheet.

## Features

- Operates from a 6.5V to 60V Input Supply
- Programmed 5V Output Voltage, 500mA Load Current
- 600kHz Switching Frequency
- Enable/UVLO Input
- Resistor-Programmable UVLO Threshold
- Open-Drain RESET Output
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

Evaluates: MAX17501 in

TDFN Package

## Quick Start

## Recommended Equipment

- MAX17501GTEVKITE#
- 6.5V to 60V, 1A DC input power supply
- Load capable of sinking 500mA
- Digital voltmeter (DVM)
- Function generator

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

Caution: Do not turn on power supply until all connections are completed.

- 1)  Set the power supply at a voltage between 6.5V and 60V. Disable the power supply.
- 2)  Connect the positive terminal of the power supply to the  VIN  PCB  pad  and  the  negative  terminal  to  the nearest PGND PCB pad. Connect the positive terminal of the 500mA load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3)  Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4)  Turn on the DC power supply.
- 5)  Enable the load.
- 6)  Verify that the DVM displays 5V.

To turn-on/off the part through the EN/UVLO, follow the steps below:

- 1)  Remove resistors R1 and R2.
- 2)  Connect the power supply to the EV kit and turn on the power supply. Set the power supply at a voltage between 6.5V and 60V.
- 3)  Connect the function generator output to the EN/UVLO PCB pad.
- 4)  EN/UVLO rising threshold is 1.24V and falling threshold  is  1.11V.Make  sure  that  the  voltage-high  and voltage-low levels of the function generator output are greater than 1.24V and less than 1.11V, respectively.
- 5)  While powering down the EV kits, first disconnect the function generator output from the EN/UVLO PCB pad and then turn off the DC power supply.

<!-- image -->

## MAX17501GTEVKITE# Evaluation Kit

## Detailed Description of Hardware

The MAX17501GTEVKITE# provides a proven design to evaluate  the  MAX17501G  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter.  The  EV  kit generates  5V  at  load  currents  up  to  500mA  from  a 6.5V to 60V input supply. The EV kit features a 600kHz fixed  switching  frequency  for  optimum  efficiency  and component  size.  The  EV  kit  features  a  forced-PWM control scheme that provides constant switchingfrequency operation at all load and line conditions.

The  EV  kit  includes  an  EN/UVLO  PCB  pad  to  enable control  of  the  converter  output.  An  additional RESET PCB pad is available for monitoring the open-drain logic output.

## Soft-Start Input (SS)

The EV kit offers an adjustable soft-start function to limit inrush current during startup. The soft-start time is adjusted by the value of external soft-start capacitor (C10), connected between SS and SGND. To adjust the soft-start time, determine C10 using the following formula:

<!-- formula-not-decoded -->

where t SS  is  the  required  soft-start  time  in  milliseconds and C10 is in nanofarads.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAX17501  offers  an  Enable  and  adjustable  input undervoltage  lockout  feature.  In  this  EV  kit,  for  normal operation, leave the EN/UVLO jumper (JU1) open. When JU1 is left open, the MAX17501 is enabled when the input voltage rises above 6.4V. To disable the MAX17501, install a  jumper  across  pins  2-3  on  JU1.  See  Table  1  for  JU1 settings. The EN/UVLO PCB pad on the EV kit supports

## Evaluates: MAX17501 in TDFN Package

external Enable/Disable control of the device. Leave JU1 open  when  external  Enable/Disable  control  is  desired. A potential divider formed by R1 and R2 sets the input voltage  (VINU)  above  which  the  converter  is  enabled  when JU1 is left open.

Choose R1 to be 3.3MΩ (max), and then calculate R2 as follows:

<!-- formula-not-decoded -->

where, V INU  is the voltage at which the device is required to turn on, and R1 and R2 are in kΩ.

For  more  details  about  setting  the  undervoltage-lockout Level, refer to the MAX17501 data sheet.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit provides a RESET PCB pad to monitor the status of the converter. RESET goes high when VOUT rises above 95% (typ) of its nominal regulated output voltage. RESET goes low when VOUT falls below 92% (typ) of its nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The  MAX17501GTEVKITE#  PCB  layout  provides  an optional  electrolytic  capacitor  (CIN4  =  33μF/80V).  This capacitor  limits  the  peak  voltage  at  the  input  of  the MAX17501 when the DC input source is 'Hot-Plugged' to the EV kit input terminals with long input cables. The equivalent  series  resistance  (ESR)  of  the  electrolytic capacitor  dampens  the  oscillations  caused  by  interaction  of  the  inductance  of  the  long  input  cables,  and  the ceramic capacitors at the buck converter input.

Table 1. Converter EN/UVLO Jumper (JU1) Settings

| JUMPER   | SHUNT POSITION   | EN/UVLO PIN                                                | MAX17501 OUTPUT                                                       |
|----------|------------------|------------------------------------------------------------|-----------------------------------------------------------------------|
| JU1      | 1-2*             | Connected to VIN                                           | Enabled                                                               |
| JU1      | Not installed    | Connected to the center node of resistor-divider R1 and R2 | Programmed to startup at desired input voltage level set by R1 and R2 |
| JU1      | 2-3              | Connected to GND                                           | Disabled                                                              |

* Default position.

│

## MAX17501GTEVKITE# Evaluation Kit

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  currents drawn by the switching power converter and limits the noise injected back into the input power source.

The  MAX17501GTEVKITE#  PCB  has  designated  footprints on the bottom side for placement of EMI filter com-

## EV Kit Performance Report

(VIN = 24V, VOUT = 5V, IOUT = 500mA, TA = +25°C, All voltages are referenced to GND, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## Evaluates: MAX17501 in TDFN Package

ponents. Use of these filter components results in lower conducted  emissions  below  CISPR22  Class  B  limits. Remove the 0Ω resistor which is placed on the L1 foot -print  before  installing  conducted  EMI  filter  components. The  MAX17501GTEVKITE#  EV  kit  PCB  layout  is  also designed to limit radiated emissions from switching nodes of  the  power  converter,  resulting  in  radiated  emissions below CISPR22 Class B limits.

## EV Kit Performance Report (continued)

(VIN = 24V, VOUT = 5V, IOUT = 500mA, TA = +25°C, All voltages are referenced to GND, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAX17501 in

TDFN Package

│

## MAX17501GTEVKITE# Evaluation Kit

## Component Suppliers

| SUPPLIER        | WEBSITE               |
|-----------------|-----------------------|
| Coilcraft, Inc. | www.coilcraft.com     |
| Murata Americas | www.murata.com        |
| Panasonic Corp. | www.panasonic.com     |
| TDK Corp.       | www.component.tdk.com |
| SullinsCorp     | www.sullinscorp.com   |
| AVX             | www.avx.com           |
| Taiyo Yuden     | www.ty-top.com        |

Note:

Indicate that you are using the MAX17501 when contacting these component suppliers.

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX17501GTEVKITE# | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAX17501 in

TDFN Package

## MAX17501GTEVKITE# Evaluation Kit

## MAX17501GTEVKITE# Bill of Materials

| S.No                 | DESIGNATOR           | DESCRIPTION                                                                              | QUANTITY             | MANUFACTURER PART NUMBER       |
|----------------------|----------------------|------------------------------------------------------------------------------------------|----------------------|--------------------------------|
| 1                    | CIN1, CIN7           | 0.1µF, 10%, 100V, X7R, Ceramic capacitor (0603)                                          | 2                    | TAIYO YUDEN HMK107B7104KA-T    |
| 2                    | CIN2                 | 2.2µF, 10%, 100V, X7R, Ceramic capacitor (1210)                                          | 1                    | MURATA GRM32ER72A225KA35       |
| 3                    | CIN4                 | ALUMINUM-ELECTROLYTIC; 33UF; 80V; TOL=20%; MODEL=FK SERIES                               | 1                    | PANASONIC EEE-FK1K330P         |
| 4                    | CIN5                 | 0.47µF, 10%, 100V, X7R, Ceramic capacitor (0805)                                         | 1                    | MURATA GRM21BR72A474KA73       |
| 5                    | CIN6                 | 220pF, 5%, 100V, COG, Ceramic capacitor (0603)                                           | 1                    | TDK C1608C0G2A221J080AA        |
| 6                    | C8                   | 1µF, 10%, 25V, X7R, Ceramic capacitor (0603)                                             | 1                    | TDK C1608X7R1E105K080AE        |
| 7                    | C10                  | 3300pF, 2%, 50V, COG, Ceramic capacitor (0402)                                           | 1                    | MURATA GRM1555C1H332GE01       |
| 8                    | C11                  | 1500pF, 2%, 50V, COG, Ceramic capacitor (0402)                                           | 1                    | MURATA GRM1555C1H152JA01       |
| 9                    | C12                  | 27pF, 5%, 50V, X7R, Ceramic capacitor (0402)                                             | 1                    | TAIYO YUDEN TMK042CG270JC-W    |
| 10                   | CO1                  | 10µF, 10%, 10V, X7R, Ceramic capacitor (1210)                                            | 1                    | TAIYO YUDEN LMK325B7106KN-T    |
| 11                   | CO6, CO7             | 0.1µF, 10%, 16V, X7R, Ceramic capacitor (0402)                                           | 2                    | TAIYO YUDEN EMK105B7104KV-F    |
| 12                   | CO9                  | 2.2µF, 10%, 10V, X7R, Ceramic capacitor (0603)                                           | 1                    | MURATA GRM188R71A225KE15       |
| 13                   | L1                   | RES+, 0 ΩOHM , 1W, (0805)                                                                | 1                    | VISHAY CRCW08050000Z0EAHP      |
| 14                   | L3                   | INDUCTOR, 47µH, 1.2A (6mm x 6mm)                                                         | 1                    | COILCRAFT LPS6235-473ML        |
| 15                   | R1                   | RES+, 3.32M Ω , 1% (0402)                                                                | 1                    | VISHAY DALE CRCW04023M32FK     |
| 16                   | R2                   | RES+, 787K Ω, 1% (0402)                                                                  | 1                    | VISHAY DALE CRCW0402787KFK     |
| 17                   | R3                   | RES+, 17.4K Ω, 1% (0402)                                                                 | 1                    | PANASONIC ERA-2AEB1742X        |
| 18                   | R4                   | RES+, 68.1K Ω , 1% (0402)                                                                | 1                    | VISHAY DALE CRCW040268K1FK     |
| 19                   | R5                   | RES+, 10K Ω , 1% (0402)                                                                  | 1                    | VISHAY DALE CRCW040210K0FK     |
| 20                   | R6                   | RES+, 15K Ω , 1% (0402)                                                                  | 1                    | VISHAY DALE CRCW040215K0FK     |
| 21                   | U1                   | ULTRA-SMALL; HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; ( TDFN10-EP3mmx2mm) | 1                    | MAX17501GATB+                  |
| 22                   | JU1                  | 3-pin header (36-pin header 0.1' centers )                                               | 1                    | Sullins: PEC03SAAN             |
| 23                   | -                    | Shunts                                                                                   | 1                    | SULLINS STC02SYAN              |
| 24                   | MH1-MH4              | MACHINE SCREW; SLOTTED                                                                   | 4                    | EAGLE PLASTIC DEVICES P440.375 |
| 25                   | MH1-MH4              | HEX STANDOFF #4-40 NYLON 3/8"                                                            | 4                    | KEYSTONE ELECTRONICS 1902B     |
| 26                   | C1                   | OPTIONAL: 4.7μF, 10%, 80V, X7R, Ceramic capacitor (1210)                                 | 1                    | MURATA GRM32ER71K475KE14       |
| 27                   | L1                   | OPTIONAL: INDUCTOR, 10µH, 0.75A (2.95mm x 2.95mm)                                        | 1                    | COILCRAFT LPS3015-103MR        |
| 28                   | CIN3, CO2            | OPEN: Capacitor (1210)                                                                   | 0                    |                                |
| 29                   | CO3, CO4, CO5        | OPEN: Capacitor (0805)                                                                   | 0                    |                                |
| 30                   | CO8                  | OPEN: Capacitor (0603)                                                                   | 0                    |                                |
| DEFAULT JUMPER TABLE | DEFAULT JUMPER TABLE | DEFAULT JUMPER TABLE                                                                     | DEFAULT JUMPER TABLE | DEFAULT JUMPER TABLE           |
| JUMPER               | JUMPER               | JUMPER                                                                                   | SHUNT POSITION       | SHUNT POSITION                 |
| JU1                  | JU1                  | JU1                                                                                      |                      |                                |

Evaluates: MAX17501 in

TDFN Package

## MAX17501GTEVKITE# Schematic

<!-- image -->

│

## MAX17501GTEVKITE# Evaluation Kit

## MAX17501GTEVKITE# PCB Layout

MAX17501GTEVKITE# PCB Layout-Top Silkscreen

<!-- image -->

MAX17501GTEVKITE# PCB Layout-Layer 2

<!-- image -->

## Evaluates: MAX17501 in TDFN Package

MAX17501GTEVKITE# PCB Layout-Top Layer

<!-- image -->

MAX17501GTEVKITE# PCB Layout-Layer 3

<!-- image -->

│

## MAX17501GTEVKITE# Evaluation Kit

## MAX17501GTEVKITE# PCB Layout (Continued)

MAX17501GTEVKITE# PCB Layout-Bottom Layer

<!-- image -->

MAX17501GTEVKITE# PCB Layout-Bottom Silkscreen

<!-- image -->

│

Evaluates: MAX17501 in

TDFN Package

## MAX17501GTEVKITE# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                | PAGES CHANGED   |
|-------------------|-----------------|----------------------------|-----------------|
|                 0 | 4/19            | Initial release            | -               |
|                 1 | 9/19            | Updated title on all pages | 1-10            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim InteJrated reserves the riJht to chanJe the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX17501 in

TDFN Package