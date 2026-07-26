<!-- lastmod 2022-08-02 -->
## MAX15062C5EVKITE# Evaluation Kit

## General Description

The MAX15062C5EVKITE# evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the performance of the MAX15062C 60V, 300mA ultra-small, high-efficiency,  synchronous  step-down  converter.  The EV kit operates over a wide input voltage range of 6.5V to  60V,  and  provides  up  to  300mA  load  current  at  5V output  voltage.  The  device  features  undervoltage  lockout,  overcurrent  protection,  and  thermal  shutdown.  The EV kit  switches  at  a  frequency  of  500kHz,  and  delivers a peak efficiency of 95% with the supplied components. The EV kit also provides a good layout example, which is  optimized  for  conducted,  radiated  EMI,  and  thermal performance. For more details about the IC benefits and features, refer to the MAX15062 data sheet.

The  EV  kit  comes  installed  with  the  MAX15062CATA+ in an 8-pin (2mm x 2mm) lead(Pb)-free/RoHS-compliant TDFN package.

## Features and Benefits

- 6.5V to 60V Input Voltage Range
- 5V Output, 300mA Continuous Current
- Internal Compensation
- EN/UVLO for On/Off Control and Programmable Input Undervoltage Lockout
- 95% Peak Efficiency
- 500kHz Switching Frequency
- PFM or Forced-PWM Mode of Operation
- Hiccup Mode Overcurrent Protection
- Open-Drain RESET Output
- Thermal Shutdown
- Lead-Free, 8-Pin, 2mm x 2mm TDFN Package
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

Evaluates: MAX15062 in

## 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX15062C5EVKITE# Evaluation Kit
- 60V adjustable, 0.5A DC power supply
- Electronic load up to 300mA
- Voltmeter

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that shunts are installed  on  jumper  JU1 (EN/UVLO).
- 2) Set  the  electronic  load  to  constant-current  mode, 300mA, and disable the electronic load.
- 3) Connect the electronic load's positive terminal to the VOUT PCB pad. Connect the negative terminal to the GND PCB pad.
- 4) Connect  the  voltmeter  across  the  VOUT  and  GND PCB pads.
- 5) Set the power-supply output to 24V. Disable the power supply.
- 6) Connect the 24V power-supply output to the VIN PCB pad. Connect the supply ground to the GND PCB pad.
- 7) Turn on the power supply.
- 8) Enable the electronic load and verify that output voltage is at 5V with respect to GND.
- 9) Vary the input voltage from 6.5V to 60V.
- 10)  Vary the load current from 1mA to 300mA and verify that output voltage is 5V.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX15062C5EVKITE# Evaluation Kit

## Detailed Description

The  MAX15062C5EVKITE# Evaluation  Kit  (EV  kit)  is  a fully assembled and tested circuit board that demonstrates the  performance  of  the  MAX15062C  60V,  300mA  ultrasmall, high-efficiency, synchronous step-down converter. The EV kit operates over a wide input voltage range of 6.5V to 60V, and provides up to 300mA load current at 5V output voltage. The device features undervoltage lockout, overcurrent protection, and thermal shutdown. The EV kit switches at a frequency of 500kHz, and delivers a peak efficiency of 95% with the supplied components.

The EV kit includes an EN/UVLO PCB pad and jumper JU1 to  enable  control  of  the  converter  output. An  additional RESET PCB  pad  is  available  for  monitoring  the open-drain logic output.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAX15062  offers  an  Enable  and  adjustable  input undervoltage  lockout  feature.  In  this  EV  kit,  for  normal operation, leave the EN/UVLO jumper (JU1) open. When JU1  is  left  open,  the  MAX15062  is  enabled  when  the input voltage rises above 6.4V. To disable the MAX15062, install  a  jumper  across  pins  2-3  on  JU1.  See  Table  1 for  JU1 settings. The EN/UVLO PCB pad on the EV kit supports  external  Enable/Disable  control  of  the  device. Leave  JU1  open  when  external  Enable/Disable  control is desired. A potential divider formed by R1 and R2 sets the  input  voltage  (VINU)  above  which  the  converter  is enabled when JU1 is left open.

## Evaluates: MAX15062 in 5V Output-Voltage Application

Choose R1 to be 3.3MΩ (max), and then calculate R2 as follows:

<!-- formula-not-decoded -->

where, V INU  is the voltage at which the device is required to turn on, and R1 and R2 are in kΩ,

Refer to the Enable Input (EN/UVLO), Soft-Start sections in the MAX15062 data sheet for additional information on setting the UVLO threshold voltage.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit provides a RESET PCB pad to monitor the status of the RESET output. RESET goes high when VOUT rises above 95% (typ) of its nominal regulated output voltage. RESET goes low when VOUT falls below 92% (typ) of its nominal regulated voltage.

## Mode of Operation

The EV kit features fixed frequency PWM mode and PFM mode of operation for higher efficiency at light-load conditions. The mode can be selected by programming resistor R3 on the  EV kit. Add a 0Ω resistor at R3 to operate in PWM mode, leave R3 open for PFM mode of operation. The EV kit is set to PWM mode of operation by default. Refer to the MAX15062 data sheet for more details on the modes of operation.

Table 1. Converter EN/UVLO Jumper (JU1) Settings

| JUMPER   | SHUNT POSITION   | EN/UVLO PIN                                             | MAX15062 OUTPUT                                                       |
|----------|------------------|---------------------------------------------------------|-----------------------------------------------------------------------|
| JU1      | 1-2*             | Connected to VIN                                        | Enabled                                                               |
| JU1      | Not installed    | Connected to the center node resistor-divider R1 and R2 | Programmed to startup at desired voltage level set by R1 and Disabled |
| JU1      | 2-3              | Connected to GND                                        |                                                                       |

* Default position.

│

## MAX15062C5EVKITE# Evaluation Kit

## Hot Plug-In and Long Input Cables

The  MAX15062C5EVKITE#  PCB  layout  provides  an optional  electrolytic  capacitor  (CIN4  =  22μF/100V). This capacitor  limits  the  peak  voltage  at  the  input  of  the MAX15062 when the DC input source is 'Hot-Plugged' to the EV kit input terminals with long input cables. The equivalent  series  resistance  (ESR)  of  the  electrolytic capacitor dampens the oscillations caused by interaction of the inductance of the long input cables and the ceramic capacitors at the buck converter input.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power

## Component Suppliers

| SUPPLIER        | WEBSITE               |
|-----------------|-----------------------|
| Coilcraft, Inc. | www.coilcraft.com     |
| Murata Americas | www.murata.com        |
| Panasonic Corp. | www.panasonic.com     |
| TDK Corp.       | www.component.tdk.com |
| SullinsCorp     | www.sullinscorp.com   |
| Kemet           | www.kemet.com         |
| Taiyo yuden     | www.ty-top.com        |

Note: Indicate that you are using the MAX15062 when contacting these component suppliers.

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX15062C5EVKITE# | EV Kit |

# Denotes RoHS compliant.

## Evaluates: MAX15062 in 5V Output-Voltage Application

converter.  The  EMI  filter  attenuates  high-frequency  currents drawn by the switching power converter and limits the noise injected back into the input power source.

The  MAX15062C5EVKITE#  PCB  has  designated  footprints on the bottom side for placement of EMI filter components. Use of these filter components results in lower conducted  emissions  below  CISPR22  Class  B  limits. Remove the 0Ω resistor, which is placed on the L1 foot -print  before  installing  conducted  EMI  filter  components. The  MAX15062C5EVKITE#    EV  kit  PCB  layout  is  also designed to limit radiated emissions from switching nodes of  the  power  converter  resulting  in  radiated  emissions below CISPR22 Class B limits.

│

## MAX15062C5EVKITE# Evaluation Kit

## EV Kit Performance Report

(V IN  = 24V, V OUT  = 5V, I OUT  = 300mA, f SW  = 500kHz, T A  = +25ºC, All voltages are referenced to GND, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## SOFT-START / SHUTDOWN THROUGH EN/UVLO

<!-- image -->

<!-- image -->

Evaluates: MAX15062 in

5V Output-Voltage Application

│

## EV Kit Performance Report (continued)

(V IN  = 24V, V OUT  = 5V, I OUT  = 300mA, f SW  = 500kHz, T A  = +25ºC, All voltages are referenced to GND, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: 5V OUTPUT, 300mA LOAD CURRENT

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAX15062 in

5V Output-Voltage Application

│

## MAX15062C5EVKITE# Bill of Materials

|   No. | DESIGNATOR   | DESCRIPTION                                                                            |   QUANTITY | PART NUMBER                    |
|-------|--------------|----------------------------------------------------------------------------------------|------------|--------------------------------|
|     1 | CIN1, CIN7   | 0.1µF, 10%, 100V, X7R, Ceramic capacitor (0603)                                        |          2 | TAIYO YUDEN HMK107B7104KA-T    |
|     2 | CIN2, CIN3   | 1µF, 10%, 100V, X7R, Ceramic capacitor (1206)                                          |          2 | TAIYO YUDEN HMK316B7105KLH-T   |
|     3 | CIN4         | ALUMINUM-ELECTROLYTIC; 22UF; 100V; TOL=20%; MODEL=EEV SERIES                           |          1 | PANASONIC EEE-FK2A220P         |
|     4 | CIN5         | 0.47µF, 10%, 100V, X7R, Ceramic capacitor (0805)                                       |          1 | MURATA GRM21BR72A474KA73       |
|     5 | CIN6         | 220pF, 5%, 100V, COG, Ceramic capacitor (0603)                                         |          1 | TDK C1608C0G2A221J080AA        |
|     6 | C8           | 1µF, 10%, 10V, X7R, Ceramic capacitor (0603)                                           |          1 | TDK C1608X7R1E105K080AE        |
|     7 | CO1          | 10µF, 10%, 16V, X7R, Ceramic capacitor (1206)                                          |          1 | TDK C3216X7R1C106K160AC        |
|     8 | CO6, CO7     | 0.1µF, 10%, 16V, X7R, Ceramic capacitor (0402)                                         |          2 | TAIYO YUDEN EMK105B7104KV-F    |
|     9 | CO9          | 2.2µF, 10%, 25V, X7R, Ceramic capacitor (0603)                                         |          1 | MURATA GRM188R61E225KA12       |
|    10 | L3           | INDUCTOR, 47µH, 0.68A (4mm x 4mm)                                                      |          1 | LPS4018-473MLB                 |
|    11 | R1           | RES+, 3.32MΩ, 1% (0402)                                                                |          1 | VISHAY DALE CRCW04023M32FK     |
|    12 | R2           | RES+, 787KΩ, 1% (0402)                                                                 |          1 | VISHAY DALE CRCW0402787KFK     |
|    13 | R3           | RES+, 0Ω (0402)                                                                        |          1 | PANASONIC ERJ-2GE0R00          |
|    14 | R4           | RES+, 187KΩ, 1% (0402)                                                                 |          1 | VISHAY DALE CRCW0402187KFK     |
|    15 | R5           | RES+, 10KΩ, 1% (0402)                                                                  |          1 | VISHAY DALE CRCW040210K0FK     |
|    16 | R6           | RES+, 41.2KΩ, 1% (0402)                                                                |          1 | PANASONIC ERJ-2RKF4122         |
|    17 | R7           | RES+, 0Ω, 0.5W (0805)                                                                  |          1 | VISHAY CRCW08050000Z0EAHP      |
|    18 | U1           | ULTRA-SMALL; HIGH EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; (TDFN8 2mm x 2mm) |          1 | MAX15062CATA+                  |
|    19 | JU1          | 3-pin header (36-pin header 0.1' centers )                                             |          1 | Sullins: PEC03SAAN             |
|    20 | -            | Shunts                                                                                 |          1 | SULLINS STC02SYAN              |
|    21 | MH1-MH4      | MACHINE SCREW; SLOTTED                                                                 |          4 | EAGLE PLASTIC DEVICES P440.375 |
|    22 | MH1-MH4      | HEX STANDOFF #4-40 NYLON 3/8"                                                          |          4 | KEYSTONE ELECTRONICS 1902B     |
|    23 | C1           | OPTIONAL: 1μF, 10%, 100V, X7R, Ceramic capacitor (1206)                                |          1 | TAIYO YUDEN HMK316B7105KLH-T   |
|    24 | L1           | OPTIONAL: INDUCTOR, 10µH, 0.66A ( 2mm x 2mm)                                           |          1 | COILCRAFT XPL2010-103ML        |
|    25 | CIN8, CIN9   | OPEN: Capacitor (0603)                                                                 |          0 |                                |
|    26 | CO3          | OPEN: Capacitor (0805)                                                                 |          0 |                                |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1                    | 1 - 2                  |

Evaluates: MAX15062 in

5V Output-Voltage Application

## MAX15062C5EVKITE# Schematic

<!-- image -->

│

## MAX15062C5EVKITE# PCB Layout

MAX15062C5EVKITE# PCB Layout-Top Silkscreen

<!-- image -->

MAX15062C5EVKITE# PCB Layout-Layer 2

<!-- image -->

## Evaluates: MAX15062 in 5V Output-Voltage Application

MAX15062C5EVKITE# PCB Layout-Top Layer

<!-- image -->

MAX15062C5EVKITE# PCB Layout-Layer 3

<!-- image -->

│

## MAX15062C5EVKITE# PCB Layout (continued)

MAX15062C5EVKITE# PCB Layout-Bottom Layer

<!-- image -->

MAX15062C5EVKITE# PCB Layout-Bottom Silkscreen

<!-- image -->

│

Evaluates: MAX15062 in

## MAX15062C5EVKITE# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                    | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------|-----------------|
|                 0 | 4/19            | Initial release                | -               |
|                 1 | 9/19            | Updated the title on all pages | 1-10            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim InteJrated reserves the riJht to chanJe the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX15062 in

5V Output-Voltage Application