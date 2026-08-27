<!-- lastmod 2022-08-02 -->
## MAX17515 Evaluation Kit

## General Description

The MAX17515 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the typical 5A application circuit of the MAX17515. The MAX17515 is a fixedfrequency, integrated inductor, step-down power module for low-voltage, low-power applications.

The EV kit provides a 1.5V output voltage from a 2.4V to 5.5V input range and delivers up to 5A output current while achieving greater than 91.2% efficiency. The EV kit operates at 1MHz switching frequency and has superior line- and load-transient response. The EV kit also allows the  evaluation  of  other  adjustable  output  voltages  from 0.75V to 3.6V by changing resistors R1 and R2.

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                        |
|---------------|-------|----------------------------------------------------------------------------------------------------|
| C1            |     1 | 33µF ±20%, 10V X5R electrolytic capacitors (B case) Panasonic EEEFK1A330UR                         |
| C2            |     1 | 22µF ±20%, 10V X5R ceramic capacitors (1206) TDK C3216X5R1A226M160AC                               |
| C3            |     1 | 220µF, 2.5V, 13mΩ ESR POS capacitor (B2 case) Panasonic 2R5TPE220MFGB                              |
| C4            |     0 | Not installed, 1µF ±20%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C105K TDK C1608X7R1C105K |

## Component Suppliers

| SUPPLIER                   | PHONE        | WEBSITE                |
|----------------------------|--------------|------------------------|
| Keystone Electronics Corp. | 800-221-5510 | www.keyelco.com        |
| Lite-On, Inc.              | 408-946-4873 | www.liteon.com         |
| Murata Americas            | 800-241-6574 | www.murataamericas.com |
| Panasonic Corp.            | 800-344-2112 | www.panasonic.com      |
| TDK Corp.                  | 847-803-6100 | www.component.tdk.com  |

Note:

Indicate that you are using the MAX17515 when contacting these component suppliers.

## Features

- High Integration Solution/Integrated Shielded Inductor
- 2.4V to 5.5V Input Range
- Configured for 1.5V Output Voltage
- Adjustable Output Voltage Range (0.75V to 3.6V)
- 5A Output Current
- 91.2% Efficiency (V IN  = 3.3V, V OUT  = 1.5V at 1.5A)
- 1MHz Switching Frequency
- Enable Input
- Power-Good Output Indicator (POK)
- Low-Profile Surface-Mount Components
- Proven PCB Layout
- Fully Assembled and Tested

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| D1            |     1 | Green LED, clear (0805) Lite-On LTST-C170GKT                           |
| JU1           |     1 | 2-pin headers                                                          |
| R1, R2        |     2 | 47.5kΩ ±1% resistor (0603)                                             |
| R3            |     1 | 1kΩ ±5% resistor (0603)                                                |
| U1            |     1 | 5A, 2.4V to 5.5V input, high-efficiency power module Maxim MAX17515LI+ |
| -             |     1 | Shunt                                                                  |
| -             |     1 | PCB: MAX17515 EVKIT                                                    |

Evaluates: MAX17515,

5A Integrated Power Module

<!-- image -->

## MAX17515 Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX17515 EV kit
- 2.4V to 5.5V DC power supply (V IN )
- 5V DC power supply (V CC )
- Dummy load capable of sinking 5A
- Digital multimeter (DMM)
- 100MHz dual-trace oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Ensure  that  the  circuit  is  connected  correctly  to  the supplies and dummy load prior to applying any power.
- 2)  Verify that a shunt is installed across jumper JU1.
- 3)  Enable the power supply (V IN  = 5V)
- 4)  Observe  the  1.5V  output  with  the  DMM  and/or oscilloscope.  Look  at  the  EP2  switching  node  while varying the load current.

## Detailed Description of Hardware

## Input Supply Voltage

The  MAX17515  EV  kit  can  operate  from  a  minimum 4.5V  single  DC  power  supply  at  VIN  PCB  pad  with  a shunt installed across JU1. The EV kit is also configured to  power  a  lower  input  voltage  at  VIN  PCB  pad,  which requires an additional 5V power supply at VCC PCB pad, a  capacitor,  C4,  to  be  installed,  and  a  connecting  trace between V IN  and V CC  (next to R3's footprint) to be cut. Table 1 lists all operating configurations of the EV kit at different input voltage sources.

## Enable Input

The EV kit features a 2-pin jumper (JU1) that selects the enable/disable control input. The shunt is installed across JU1 to enable the device and vice versa.

## Evaluates: MAX17515, 5A Integrated Power Module

## Switching Frequency (FREQ)

The  EV  kit  features  a  PWM-mode  switching  frequency. The switching frequency is fixed at 1MHz.

## Programming the Output Voltage

The EV kit includes a default output programmed at 1.5V and  also  produces  an  adjustable  0.75V  to  3.6V  output voltage by connecting FB to a resistive divider. To obtain an  output  voltage  other  than  the  default  programmed output, simply modify the R1 and R2 resistors with values according to the following equation:

<!-- formula-not-decoded -->

where V FB   =  0.75V.  Output  capacitance  value  changes are required for an output voltage greater than 2V. Refer to  the    MAX17515  data  sheet  for  output  capacitance selection.

## Table 1. Jumper JU1 Functions

| SHUNT (JU1) POSITION   | V IN /V CC RANGE                                              | REGULATOR OUTPUT   |
|------------------------|---------------------------------------------------------------|--------------------|
| Installed              | V IN = 4.5V to 5.5V V CC = V IN                               | Enabled            |
| Installed              | V IN = 2.4V to 5.5V Require an additional V CC = 4.5V to 5.5V | Enabled            |
| Not installed*         | V IN = 2.4V to 5.5V V CC = V IN                               | Disabled           |

│

## MAX17515 Evaluation Kit

## Typical Operating Characteristics

(V CC  = 5V, V IN  = 3.3V to 5V, V OUT  = 0.9V to 3.3V, I OUT  = 0-5A, T A  = +25°C, unless otherwise noted.)

LOAD CURRENT TRANSIENT RESPONSE (VIN = 5V, VOUT = 1.5V, IOUT = 2.5A TO 5A)

<!-- image -->

MAX17515 toc03

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAX17515,

5A Integrated Power

Module

│

## Evaluates: MAX17515, 5A Integrated Power Module

Figure 1. MAX17515 EV Kit Schematic

<!-- image -->

│

## MAX17515 Evaluation Kit

Figure 2. MAX17515 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluates: MAX17515, 5A Integrated Power Module

Figure 3. MAX17515 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX17515 EV Kit PCB Layout-PGND Layer 2

<!-- image -->

## MAX17515 Evaluation Kit

Figure 5. MAX17515 EV Kit PCB Layout-PGND Layer 3

<!-- image -->

## Evaluates: MAX17515, 5A Integrated Power Module

Figure 6. MAX17515 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX17515 EV Kit PCB Layout-Bottom Silk Screen

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17515EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX17515,

5A Integrated Power

Module

## MAX17515 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                          | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 5/13            | Initial release                                                                                      | -               |
|                 1 | 9/13            | Various changes including EV kit layout with multiple outputs to compact layout with a single output | 1-6             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses Dre implied. 0D[im ,ntegrDted reserYes the right to chDnge the circuitry Dnd specificDtions without notice Dt Dny time.

│

Evaluates: MAX17515,

5A Integrated Power Module