<!-- lastmod 2022-08-05 -->
## General Description

The MAX8808 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the highly integrated MAX8808X/MAX8808Y/MAX8808Z linear battery  chargers for single-cell lithium-ion (Li+) batteries. The EV kit safely charges a single Li+ battery to 4.2V. The EV kit accepts power supply inputs of 4.25V to 15V, but disables charging when the input voltage exceeds 7V. An enable input to the EV kit allows the user to disable and enable the charger. An LED on the board indicates the status of the charging cycle.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C1            |     1 | 1µF, 16V X5R ceramic capacitor (0603) Murata GRM188R61C105KA93        |
| C2            |     1 | 0.47µF, 6.3V X5R ceramic capacitor (0402) Murata GRM155R60J474KE19    |
| C3            |     1 | 1µF, 6.3V X5R ceramic capacitor (0402) Murata GRM155R60J105KE19       |
| C4            |     0 | Not installed                                                         |
| D1            |     1 | Small SMD green LED (0805) Chicago Miniature 7012X5 Mouser 606-7012X5 |
| JU1           |     1 | 3-pin header                                                          |
| R1            |     1 | 2.8k Ω ±1% resistor (0402)                                            |
| R2            |     1 | 100k Ω resistor (0402)                                                |
| R3            |     1 | 300 Ω ±5% resistor (0402)                                             |
| R4            |     0 | Not installed, PC board trace short                                   |
| U1            |     1 | MAX8808XETA(8-pinTDFN2mmx2mm)                                         |
| -             |     1 | Shunt, installed on JU1 Digikey S9000-ND or equivalent                |
| -             |     1 | MAX8808 EV kit PC board                                               |

<!-- image -->

Features

- ♦ Simple Stand-Alone Li+ Charger
- ♦ Safely Precharges Deeply Discharged Li+ Cells (MAX8808X)
- ♦ 4.25V to 15V Input Voltage Range
- ♦ 7V Overvoltage-Protection Threshold
- ♦ Resistor-Programmable Charge Current Up to 1A
- ♦ Charge-Current Monitor by a Resistor
- ♦ +115°C Die Temperature Regulation
- ♦ ACOK Output
- ♦ No Prequalification (MAX8808Y/MAX8808Z)
- ♦ Soft-Start
- ♦ Tiny 2mm x 2mm, 8-Pin TDFN Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE         |
|--------------|--------------|--------------------|
| MAX8808EVKIT | 0°C to +70°C | 8 TDFN (2mm x 2mm) |

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE               |
|-------------|--------------|-----------------------|
| Murata      | 770-436-1300 | www.murata.com        |
| Panasonic   | 714-373-7366 | www.panasonic.com     |
| Taiyo Yuden | 800-348-2496 | www.t-yuden.com       |
| TDK         | 847-803-6100 | www.component.tdk.com |

Note: Indicate you are using the MAX8808X/Y/Z when contacting these manufacturers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX8808 Evaluation Kit

## Recommended Equipment

- Variable 6V power supply
- Digital multimeter
- One-cell lithium-ion battery

## Quick Start

The MAX8808 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation:

- 1) Preset the power supply to 5V. Turn off the power supply. Do not turn on the power supply until all connections are made.
- 2) Verify  that  the  shunt  is  between  pins  2  and  3  of jumper JU1 ( EN ) to set the EV kit for charge default enable mode.
- 3) Connect the positive lead of the power supply to the  VIN  pad  on  the  EV  kit.  Connect  the  negative lead of the power supply to the GND pad on the EV kit.
- 4) Connect the digital multimeter from BATT+ to BATT-.
- 5) Turn on the power supply. Verify that the voltage is 4.2V at BATT+.
- 6) Observe correct Li+ cell polarity. Connect a single-cell  Li+  battery  across  the  BATT+  and  BATTpads of the EV kit.
- 7) Verify that the green LED (D1) turns on. The green LED turns on during prequalification and fastcharge conditions. The green LED turns off when the  battery-charging current drops to 10% of the fast-charging current.

## Detailed Description

## Input Source

The MAX8808 EV kit requires a power supply with an output voltage between 4.25V and 6.5V for proper operation. The MAX8808\_ charger is designed to handle a maximum input voltage of 15V, but it disables charging when the input voltage exceeds the overvoltage-protection threshold of 7V or when the input voltage minus the battery voltage is less than 40mV.

## VL

The MAX8808\_ linear chargers contain an internal linear regulator (VL). The VL output is regulated to 3.0V whenever the input voltage is above 3V and 40mV greater than the battery voltage.

## Fast-Charge Current

The maximum battery-charge current is programmed by R1, which is connected between ISET and GND. The EV kit's fast-charging current is set to 465mA with the installed 2.8k Ω resistor. To reconfigure the charging current, use the following equation to select a new value for R1:

R1 = 930 x 1.4V / ICHARGE

where R1 is in ohms and ICHARGE is in amps.

## Temperature Self-Regulation

The MAX8808\_ has a fixed die-temperature-regulation point of +115°C. During charging, if the die temperature approaches +115°C, the charger reduces the charging current to keep the die temperature from exceeding +115°C.

## Charge Profile

The MAX8808\_ charger uses voltage, current, and thermal control loops to facilitate charging of a single Li+ cell and protect the battery. When a Li+ battery with a cell  voltage below 2.5V is inserted, the MAX8808X charger enters the prequalification stage where it precharges that cell with 10% of the user-programmed fast-charge current. Once the cell voltage has passed 2.5V, the charger soft-starts as it enters the fast-charge stage. The MAX8808Y and MAX8808Z do not have the prequalification stage, and therefore, soft-start to the fast-charge level immediately when enabled. The fastcharge current level is programmed using a resistor from ISET to GND (R1). The installed green LED indicates charging. As the battery voltage approaches 4.2V, charging current is reduced. When the battery current drops to 10% of the fast-charging current, the green LED turns off, signaling that the charging is done. If, at any point while charging the battery, the die temperature approaches +115°C, the MAX8808\_ reduces the charging current to limit the die temperature to +115°C.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Disabling the Charger

The EV kit contains JU1 to enable or disable the charger.  The  MAX8808X and MAX8808Z use an active-low enable input ( EN ). Install a shunt between pins 1 and 2 of  JU1  to  drive EN high and disable the charger and terminate the charging cycle. VL is active during shutdown. Install a shunt between positions 2 and 3 of JU1 to drive EN low to enable the IC. The MAX8808Y uses an active-high enable. Drive EN high to enable the charger. Drive EN low to disable the charger.

## CHG

The green LED (D1) is a visual indicator of the charging status of the EV kit. Table 1 describes the state of the green LED during normal operation.

<!-- image -->

Figure 1. MAX8808 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8808 Evaluation Kit

## Table 1. CHG States

| CHARGE MODE     | GREEN LED ( CHG )    | CONDITIONS                    |
|-----------------|----------------------|-------------------------------|
| Charging        | On (logic-low)       | Prequalification, fast-charge |
| Charge complete | Off (high impedance) | Top-off charge                |
| Disable mode    | Off (high impedance) | Charger is off                |

## MAX8808 Evaluation Kit

Figure 2. MAX8808 EV Kit Component Placement Guide-Component Side

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8808 Evaluation Kit

<!-- image -->

Figure 3. MAX8808 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8808 Evaluation Kit

Figure 4. MAX8808 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

Cardenas