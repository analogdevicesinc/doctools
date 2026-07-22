<!-- lastmod 2022-08-02 -->
## MAX18066 Evaluation Kit

## General Description

The MAX18066 evaluation kit (EV kit) provides a proven design to evaluate the MAX18066 and MAX18166 highefficiency, 4A, step-down  regulators  with  integrated switches.  The  EV  kit  is  preset  with  the  MAX18066  for 1.8V output at load currents up to 4A from a 4.5V to 16V input  supply.  The  MAX18166  is  pin-compatible  with  the MAX18066 and can be ordered for evaluation  with  this EV kit.

## Features

- 4.5V to 16V Input Voltage Range
- Fixed 500kHz (MAX18066) and 350kHz (MAX18166) Switching Frequency
- Adjustable Output Voltage Range from 0.606V to (0.9 x V IN )
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX18066

MAX18166

## Quick Start

## Recommended Equipment

- MAX18066 EV kit
- 12V, 4A DC power supply
- Load capable of 4A
- Digital voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Connect the positive terminal of the 12V supply to the IN connector and the negative terminal to the nearest GND connector.
- 2) Connect the positive  terminal  of  the  4A  load  to  the VOUT  connector  and  the  negative  terminal  to  the nearest GND connector.
- 3) Connect  the digital  voltmeter  across  the  VOUT connector and the nearest GND connector
- 4) Verify that a shunt is not installed on the EN jumper.
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that the voltmeter displays 1.8V.

<!-- image -->

## Detailed Description of Hardware

The  MAX18066  EV  kit  evaluates  the  MAX18066  and MAX18166  current-mode,  synchronous,  DC-DC  buck converters. The EV kit is  preset  for  MAX18066  for  1.8V output and delivers an output current up to 4A with high efficiency.  The  EV  kit  operates  from  an  input  voltage  of 4.5V  to  16V.  The  EV  kit  provides  an  adjustable  output voltage from 0.606V to 90% of the input voltage through resistor-dividers  R5  and  R6.  The  EV  kit  features  inde -pendent  device-enable  control  (EN)  and  power-good (PGOOD) signals that allow for flexible power sequencing.

## Soft-Start (SS)

The EV kit utilizes an adjustable soft-start function to limit inrush current during startup. The soft-start time is adjusted by  the  value  of  C7,  the  external  capacitor  from  SS  to GND.  By  default,  C7  is  currently  0.01μF,  which  gives a  soft-start  time  of  approximately  1.2ms.  To  adjust  the soft-start time, determine C7 using the following formula:

<!-- formula-not-decoded -->

where t SS is  the  required soft-start time in seconds and C7 is in farads.

## Setting Output Voltage

The EV kit can be adjusted from 0.606V to (0.9 x V IN ) by changing the values of R5 and R6. To determine the value of  the  resistor-divider,  first  select  R6  from  5kΩ  to  50kΩ and then use the following equation to calculate R5:

<!-- formula-not-decoded -->

where the feedback threshold voltage V FB = 0.606V (typ). When regulating an output of 0.606V, short FB to OUT and keep R6 connected from FB to GND.

## Evaluates: MAX18066 MAX18166

If a different output voltage is desired, revisit the feedback resistor-divider  (R5),  the  inductor,  and  output  capacitor calculations  (refer  to  the Inductor  Selection  and  OutputCapacitor Selection sections in the MAX18066/MAX18166 IC data sheet ). The compensation components (R7, C13, C14, and C15) must be recalculated to ensure loop stability (refer to the Compensation Design Guidelines section in the MAX18066/MAX18166 IC data sheet ).

## Regulator Enable (EN)

To shut down the converter, install a shunt on jumper EN. For normal operation, remove the shunt from EN.

## Power Good (PGOOD)

PGOOD is an open-drain output that goes high impedance when V FB exceeds 0.56V (typ). PGOOD is internally pulled low  when  V FB falls  below  0.545V  (typ).  PGOOD  also becomes low during shutdown. On the EV kit, the PGOOD test point is pulled up to V DD through resistor R8. Use the GND PCB pad as a ground reference for this signal.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX18066EVKIT# | EV Kit |

#Denotes RoHS

## MAX18066 EV Kit Bill of Materials

| DESIGNATION        |   QTY | MFG & PART NUMBER       | DESCRIPTION                                                    |
|--------------------|-------|-------------------------|----------------------------------------------------------------|
| C1                 |     1 | Panasonic EEEFK1E470P   | 47μF ±20%, 25V aluminum electrolytic capacitor (6.3mm x 5.8mm) |
| C2                 |     1 | Murata GRM31CR61E106K   | 10uF ±10%, 25V X5R ceramic capacitor (1206)                    |
| C3                 |     1 | Murata GRM188R71E104K   | 0.1uF ±10%, 25V X7R ceramic capacitor (0603)                   |
| C4                 |     1 | Murata GRM188R71C105K   | 1uF ±10%, 16V X7R ceramic capacitor (0603)                     |
| C7, C8             |     2 | Murata GRM188R71E103K   | 0.01uF ±10%, 25V X7R ceramic capacitor (0603)                  |
| C9                 |     1 | TDK C2012X5R1A476M125AC | 47uF ±20%, 10V X5R ceramic capacitor (0805)                    |
| C13                |     1 | Murata GRM188R71H272K   | 2.7nF ±10%, 50V X7R ceramic capacitor (0603)                   |
| C15                |     1 | Murata GRM1885C1H470J   | 47pF ±5%, 50V C0G ceramic capacitor (0603)                     |
| EN                 |     1 | SULLINS PEC36SAAN       | 2-pin Header                                                   |
| GND, GND, IN, VOUT |     8 | WEICO WIRE 9020 Buss    | BUSS, 20G plated solid copper                                  |
| L1                 |     1 | Coilcraft XAL4020-222ME | 2.2uH, 5A Inductor , (4mmX4mm)                                 |
| R2, R6, R8         |     3 | Any                     | 10k ohm ±1%, resistor (0603)                                   |
| R5                 |     1 | Any                     | 20k ohm ±1%, resistor (0603)                                   |
| R7                 |     1 | Any                     | 5.11k ohm ±1%, resistor (0603)                                 |
| R10                |     1 | Any                     | 1 ohm ±1%, resistor (0402)                                     |
| U1                 |     1 | Maxim MAX18066          | MAX18066EWE+ 4A buck converter (16 WLP)                        |
| -                  |     1 | Any                     | Shunt                                                          |
| -                  |     1 | Maxim MAX18066 PCB      | PC Board: MAX18066 EV Kit                                      |

## Jumper Table

| JUMPER   | SHUNT POSITION   |
|----------|------------------|
| EN       | One pin          |

Evaluates: MAX18066

MAX18166

## MAX18066 EV Kit Schematic

<!-- image -->

## MAX18066 EV Kit PCB Layout Diagrams

MAX18066 EV Component Placement Guide-Top Silkscreen

<!-- image -->

MAX18066 EV Component Placement Guide-Top View

<!-- image -->

MAX18066 EV Component Placement Guide-Layer 2 GND

<!-- image -->

## MAX18066 EV Kit PCB Layout Diagrams (continued)

MAX18066 EV Component Placement Guide-Layer 3 GND

<!-- image -->

MAX18066 EV Component Placement Guide-Bottom View

<!-- image -->

## MAX18066 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

Evaluates: MAX18066

MAX18166