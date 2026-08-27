<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX1507/MAX1508 Evaluation Kit

## General Description

The MAX1507/MAX1508 evaluation kit (EV kit) is a complete,  fully  assembled, and tested circuit board that demonstrates the MAX1507 linear battery charger for a single-cell lithium-ion (Li+) battery. To evaluate the MAX1508, U1 must be removed and replaced with a MAX1508 device. The EV kit safely charges a single Li+ battery to 4.2V. The EV kit accepts a power-supply input of 4.25V to 13V, but disables charging when the input voltage exceeds 7V. Jumpers on the EV kit allow adjustments to the die-temperature regulation levels (MAX1507 only) and the ability to disable the charger. An LED on the board indicates the status of the charging cycle.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                            |
|---------------|-------|--------------------------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ±20%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J105MT or Taiyo Yuden JMK107BJ105MG           |
| C2            |     1 | 0.47µF ±20%, 6.3V or 10V X5R ceramic capacitor (0603) TDK C1608X5R0J474MT or Taiyo Yuden JMK107BJ474MG |
| C3            |     1 | 1µF ±20%, 16V X5R ceramic capacitor (0805) TDK C2012X5R1C105MT or Taiyo Yuden EMK212BJ105MG            |
| JU1           |     1 | 2-pin header                                                                                           |
| JU2           |     1 | 3-pin header                                                                                           |
| R1            |     1 | 2.80k Ω ±1% resistor (0603)                                                                            |
| U1            |     1 | MAX1507ETA (8-pin Thin DFN 3mm ✕ 3mm)                                                                  |
| CHARGING      |     1 | Red LED, T-1 3/4 (5mm)                                                                                 |
| None          |     2 | Shunts JU1 and JU2                                                                                     |
| None          |     1 | MAX1507EVKIT PC board                                                                                  |

## Features

- ♦ Simple, Stand-Alone Li+ Charger
- ♦ Safely Precharges Deeply Discharged Li+ Cells
- ♦ 4.25V to 13V Input Voltage Range
- ♦ 7V Overvoltage Protection Threshold
- ♦ Resistor-Programmable Charge Current Up to 0.8A
- ♦ Charge Current Monitored by a Resistor
- ♦ Programmable Die-Temperature Regulation Set Points (MAX1507 Only)
- ♦ ACOK Output (MAX1508 Only)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART                  | TEMP RANGE       | IC PACKAGE   |
|-----------------------|------------------|--------------|
| MAX1507/ MAX1508EVKIT | 0 ° C to +70 ° C | 8 TDFN       |

Note: The MAX1508ETA device must be ordered separately.

## Quick Start

The MAX1507/MAX1508 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until indicated:

- 1) MAX1507: Verify that a shunt is installed on JU2 (TEMP) to set the charger to a +95 ° C regulated maximum die temperature. MAX1508: Remove the shunt from JU2 and connect a 100k Ω resistor from the TEMP pad of the EV kit to the logic I/O voltage. The ACOK logic signal is present at the TEMP test point.
- 2) Verify the shunt is removed from JU1 ( EN ) to set the EV kit for charge default-enable mode.
- 3) Observe correct Li+ cell polarity. Connect a singlecell Li+ battery across the BATT+ and BATT- pads of the EV kit.

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Panasonic   | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4498 | www.component.tdk.com |

Note:

Please indicate you are using the MAX1507/MAX1508 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1507/MAX1508 Evaluation Kit

- 4) Connect a 4.25V to 7V power supply across the VIN and GND pads of the EV kit. The positive terminal connects to the VIN pad.
- 5) Turn on the power supply to begin charging.
- 6) Verify the red LED turns on.
- 7) The red LED turns on during prequalification and fast-charge conditions. The red LED turns off when the battery current drops to 10% of the fast-charging current.

## Detailed Description

The MAX1507/MAX1508 EV kit demonstrates the highly integrated, stand-alone MAX1507/MAX1508 linear battery chargers for single-cell Li+ batteries. The EV kit safely charges a single Li+ battery to 4.2V. The EV kit accepts a power-supply input of 4.25V to 13V, but disables charging when the input voltage exceeds 7V, protecting against unqualified or faulty AC adapters. Jumpers on the EV kit allow access to the input pins of the charger to configure  the  die-temperature  regulation  levels (MAX1507) and to disable the charger. The red LED on the board indicates the status of the charging cycle.

## Input Source

The MAX1507/MAX1508 EV kit requires a power supply with an output voltage between 4.25V and 6.5V for proper operation. The MAX1507/MAX1508 chargers are designed to handle a maximum input voltage of 13V, but disable charging when the input voltage exceeds the overvoltage protection threshold of 7V or when the input voltage minus the battery voltage is less than 30mV.

## VL

The MAX1507/MAX1508 linear chargers contain an internal linear regulator available on the VL output pin. This pin requires a 0.47µF ceramic bypass capacitor. The VL output pin is regulated to 3.3V whenever the input voltage is above 3.8V.

## Fast-Charge Current

The maximum battery charge current is programmed by R1 connected between the ISET pin and ground. The EV kit's fast-charging current is set to 520mA with the  2.80k Ω resistor  installed  at  R1.  To  reconfigure  the charging current, use the following equation to select a new value for R1:

R1 = 1044 x 1.4V / ICHARGE

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Temperature Regulation Setting

JU2 allows the user to set the maximum operating die temperature of the MAX1507. During charging, if the die approaches the programmed temperature setting, the charger reduces the charging current to keep the die temperature from exceeding the programmed die temperature. The MAX1508 has a fixed die-temperature regulation point of +100°C. Connect JU2 to +95°C (+90°C typ), or connect JU2 to +135°C (+130°C typ), or leave unconnected for a +100°C die-temperature regulation point.

## Charge Profile

The MAX1507/MAX1508 chargers use voltage, current, and thermal control loops to facilitate charging of a single Li+ cell and to protect the battery. When a Li+ battery with a cell voltage below 2.5V is inserted, the charger enters the prequalification stage where it precharges that cell with 10% of the user-programmed fast-charge current. Once the cell has passed 2.5V, the charger soft-starts before it enters the fast-charge stage. The fast-charge current level is programmed with a resistor from ISET to ground. A red LED indicates the charge status. As the battery voltage approaches 4.2V, the charging current is reduced. If the battery current  drops 10% of the fast-charging current, the red LED turns off, signaling the battery is fully charged. If at any point while charging the battery the die temperature  approaches the temperature-regulation set point, the MAX1507/MAX1508 reduces the charging current so the die temperature does not exceed the temperature-regulation set point.

## Disable the Charger

EN = high disables the charger and terminates the charging cycle. Connect a shunt on JU1 to disable the charger. However, the VL node is still valid at 3.3V. The red LED is off when EN = high.

## CHG

The red LED is a visual indicator of the charging status of a connected battery. Table 1 describes the state of the red LED during normal operation.

<!-- image -->

## Table 1. Charge States

| EN   | V IN              | V BATT   | I BATT        | LED   | STATE            |
|------|-------------------|----------|---------------|-------|------------------|
| X    | V BATT            | V IN     | 0             | Off   | Shutdown         |
| Low  | 4.25V ≤ V IN ≤ 7V | <2.5V    | 10% of I FAST | On    | Prequalification |
| Low  | 4.25V ≤ V IN ≤ 7V | ≥ 2.5V   | I FAST *      | On    | Fast-charge      |
| Low  | 4.25V ≤ V IN ≤ 7V | 4.2V     | 10% of I FAST | Off   | Full charge      |
| Low  | >7V               | X        | 0             | Off   | Overvoltage      |
| High | X                 | X        | 0             | Off   | Disabled         |

<!-- image -->

Figure 1. MAX1507/MAX1508 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1507/MAX1508 Evaluation Kit

## MAX1507/MAX1508 Evaluation Kit

<!-- image -->

Figure 2. MAX1507/MAX1508 EV Kit Component Placement Guide-Component Side

Figure 3. MAX1507/MAX1508 EV Kit PC Board LayoutComponent Side

<!-- image -->

Figure 4. MAX1507/MAX1508 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4