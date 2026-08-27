<!-- lastmod 2022-08-03 -->
## MAX17651 Evaluation Kit

## General Description

The MAX17651  evaluation kit (EV kit) is a fully assembled  and  tested  circuit  board  that  demonstrates the performance of the MAX17651 high-voltage, ultra-low  quiescent  current  linear  regulator.  The  EV  kit operates over a wide input voltage range of 4V to 60V and provides  up  to  100mA  load  current.  It  draws  only  8µA supply  current  under  no-load  conditions.  The  device is  simple  to  use  and  easily  configurable  with  minimal external components. It features overload current protection and thermal shutdown. The EV kit comes installed with the MAX17651AZT+ in a 6-pin, compact TSOT package.

## Features

- Extremely Easy to Use
- Stable with Tiny 4.7μF, 0805 Output Capacitor
- Only Four External Components Required
- Reduces Number of Linear Regulators to Stock
- Wide 4V to 60V Input Voltage Range
- Adjustable 0.6V to 59V Output Voltage
- Up to 100mA Load Current Capability
- Operates Reliably in Adverse Industrial Environments
- Built-In Output Voltage Monitoring with PGOOD Pin
- High-Voltage ENABLE Input
- Low 8μA Quiescent Current
- Overload Protection
- Overtemperature Protection

Ordering Information appears at end of data sheet.

Evaluates: MAX17651

## Quick Start

## Required Equipment

- MAX17651 EV kit
- 60V, 0.2A DC power supply
- Electronic load up to 100mA
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts are installed between pins 1 and 2 of jumper JU1 (EN).
- 2) Place a shunt on JU2 or JU3, depending on the desired output voltage (see Table 3 for details).
- 3) Set the electronic load to constant-current mode, 100mA, and disable the electronic load.
- 4) Connect the electronic load's positive terminal to the VOUT PCB pad. Connect the negative terminal to the GND PCB pad.
- 5) Connect the voltmeter across the V OUT and GND PCB pads.
- 6) Set the power-supply output to greater than the selected output voltage. Disable the power supply.
- 7) Connect the power-supply output to the V IN  PCB pad. Connect the supply ground to the GND PCB pad.
- 8) Turn on the power supply.
- 9) Enable the electronic load and verify that output voltage is at 3.3V or 5V with respect to GND.
- 10)  Vary the input voltage from 4V to 60V.
- 11)  Vary the load current from 1mA to available maximum load current (from thermal dissipation calculation, see the Available Output Current Calculation section for more details) and verify that output voltage is 3.3V or 5V with respect to GND.

<!-- image -->

## MAX17651 Evaluation Kit

## Detailed Description of Hardware

The  MAX17651  EV  kit  is  a  fully  assembled  and  tested circuit  board  that  demonstrates  the  performance  of  the MAX17651 high-voltage, ultra-low quiescent current linear regulator.  The  EV  kit  operates  over  a  wide  input-voltage range of 4V to 60V and provides up to 100mA load current. It draws only 8µA supply current under no-load conditions. The MAX17651 is simple to use and easily configurable with  minimal  external  components.  It  features  overload current protection and thermal shutdown.

The EV kit includes an EN PCB pad and JU1 to enable control  of  the  converter  output.  Jumpers  JU2,  JU3,  and JU4 are provided for selecting the output voltage of the converter.  PGOOD PCB pad is available for monitoring the PGOOD output.

## Enable Control (JU1, JU2)

The EN PCB pad of the EV kit serves as an on/off control. See Table 1 to configure JU1.

## Active-Low, Open-Drain PGOOD Output (PGOOD)

The EV kit provides a PCB pad to monitor the status of the PGOOD output. PGOOD goes high when the output voltage  rises  above  92%  (typ)  of  its  nominal  regulated output voltage. PGOOD goes low when the output voltage falls  below 89.5% (typ) of its nominal regulated voltage. The voltage on the PGOOD pin should not exceed 5V. If the output voltage is greater than 5V, calculate the value of resistance R6 from the following equation:

<!-- formula-not-decoded -->

## Output Voltage Setting

The output voltage can be programmed from 0.6V to 59V. If  the  output voltage is neither 5V or 3.3V, calculate the value of R4 using the following equation. Place a shunt on one of JU2, JU3, and JU4, according to Table 2.

<!-- formula-not-decoded -->

## Output Capacitor Selection

The voltage rating of the output capacitor (C3) installed on  the  board  is  10V.  If  the  programmed  output  voltage is  greater  than  10V,  an  output  capacitor  with  a  higher voltage rating should be installed.

## Evaluates: MAX17651

## Available Output Current Calculation

Ensure  that  the  junction  temperature  of  the  MAX17651 does not exceed +125°C under the operating conditions specified for the power supply.

At a particular operating condition, the power loss that led to the temperature rise of the part is estimated as follows:

<!-- formula-not-decoded -->

where,  V IN is  the  input  voltage,  V OUT   is  the  output voltage, and I LOAD is the load current.

Package thermal  resistance  obtained  using  the  method described in JEDEC specification JESD51-7 is

<!-- formula-not-decoded -->

The  junction  temperature  of  the  MAX17651  can  be estimated  at  any  given  maximum  ambient  temperature (T A\_MAX ) from the equation below:

<!-- formula-not-decoded -->

Calculate  the  maximum  allowable  output  current  in  mA using the following formula:

<!-- formula-not-decoded -->

Example: T A\_MAX = +70°C, V IN  = 24V, V OUT = 5V.

<!-- formula-not-decoded -->

## Table 1. Enable Control (EN)

| JU1 SHUNT POSITION   | EN PIN           | OUTPUT   |
|----------------------|------------------|----------|
| 1-2*                 | Connected to VIN | Enabled  |
| 2-3                  | Connected to GND | Disabled |

*Default position.

## Table 2. Output Voltage

| OUTPUT VOLTAGE                 | PLACE SHUNT ON   |
|--------------------------------|------------------|
| V OUT = 5V                     | JU2*             |
| V OUT = 3.3V                   | JU3              |
| V OUT = Other than 5V and 3.3V | JU4              |

*Default position.

│

## EV Kit Performance

Figure 1. Startup Sequence at No-Load

<!-- image -->

Figure 3. Enable Turn-On Sequence at No-Load

<!-- image -->

Figure 2. Startup Sequence at Full-Load

<!-- image -->

Figure 4. Enable Turn-On Sequence at Full-Load

<!-- image -->

│

## EV Kit Performance (continued)

Figure 5. 1mA to 50mA Load Transient Response

<!-- image -->

Figure 6. 50mA to 100mA Load Transient Response

<!-- image -->

Figure 6. Input Voltage Step (6V to 14V) Response

<!-- image -->

## MAX17651 Evaluation Kit

## Component Suppliers

| SUPPLIER        | WEBSITE                      |
|-----------------|------------------------------|
| Murata Americas | www.murata.com               |
| Panasonic       | www.industrial.panasonic.com |

## MAX17651 EV Kit Bill of Materials

|   Serial No. | Description                                                            |   Quantity | Designator       | Part Number             |
|--------------|------------------------------------------------------------------------|------------|------------------|-------------------------|
|            1 | 10 μ F, 80V electroly�c capacitor (6.6mm x 6.6mm)                      |          1 | C1*              | PANASONIC EEE-FK1K100XP |
|            2 | 0.1 μ F ±10%, 100V X7R ceramic capacitor (0603)                        |          1 | C2               | MURATA GRM188R72A104K   |
|            3 | 4.7 μ F ±10%, 10V X7R ceramic capacitor (0805)                         |          1 | C3               | Murata GRM21BR71A475K   |
|            4 | Not installed, OPEN (0805)                                             |          0 | C4               |                         |
|            5 | 3-pin headers                                                          |          1 | JU1              | Sullins:GRPB031VWVN-RC  |
|            6 | 2-pin headers                                                          |          3 | JU2-JU4          | Sullins: GRPB021VWVN-RC |
|            7 | 432k ohm ±1%, resistor (0402)                                          |          1 | R1               |                         |
|            8 | 59k ohm ±1%, resistor (0402)                                           |          1 | R2               |                         |
|            9 | 267k ohm ±1%, resistor (0402)                                          |          1 | R3               |                         |
|           10 | Not installed                                                          |          1 | R4               |                         |
|           11 | 100k ohm ±1%, resistor (0402)                                          |          1 | R5               |                         |
|           12 | Not installed                                                          |          1 | R6               |                         |
|           13 | 60V, 100mA, ultra-low quiescent current, Linear regulator MAX17651AZT+ |          1 | U1               | MAX17651AZT+            |
|           14 | Shunt                                                                  |          4 | See Jumper Table | SULLINS NPB02SVAN-RC    |

| Jumper Table   | Jumper Table   |
|----------------|----------------|
| JUMPER         | SHUNT POSITION |
| JU1            | 1 -2           |
| JU2            | 1 -2           |
| JU3            | OPEN           |
| JU4            | OPEN           |

│

Evaluates: MAX17651

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17651EVKIT# | EV KIT |

#Denotes RoHS compliant.

## MAX17651 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX17651

## MAX17651 EV Kit PCB Layout

MAX17651 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX17651 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX17651 EV Kit PCB Layout-Bottom Layer

<!-- image -->

## MAX17651 Evaluation Kit

## MAX17651 EV Kit PCB Layout

MAX17651 EV Kit PCB Layout-Top Mask

<!-- image -->

Evaluates: MAX17651

MAX17651 EV Kit PCB Layout-Bottom Mask

<!-- image -->

│

## MAX17651 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                 | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 2/16            | Initial release                                                                                                             | -               |
|                 1 | 7/21            | Updated Available Output Current Calculation section and Table 2; added Bill of Materials, Schematic, and PCB layout images | 2, 5-8          |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX17651