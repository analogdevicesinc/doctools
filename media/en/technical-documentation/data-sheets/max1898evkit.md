<!-- lastmod 2022-08-05 -->
## General Description

The MAX1898 evaluation kit (EV kit) is a complete, fully assembled and tested single-cell lithium-ion (Li+) battery charger. The EV kit charges a single Li+ battery to 4.2V using a power supply with an output voltage of 4.7V to 12V. At input voltages greater than 6V, the allowed charging current may be limited by the powerdissipation rating of the external MOSFET. Jumpers on the EV kit allow simple adjustment to the total charging time and charger restart voltage levels. An LED indicates the cell's charging status. To charge a Li+ battery to  4.1V,  replace  the  MAX1898 (U1) IC on the EV kit board with the MAX1898EUB41.

## Selector Guide

| PART NUMBER   | CHARGING VOLTAGE   | PACKAGE     |
|---------------|--------------------|-------------|
| MAX1898EUB42  | 4.2V               | 10-pin µMAX |
| MAX1898EUB41  | 4.1V               | 10-pin µMAX |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF, 10%, 16V tantalum capacitor (B) AVX TPSB106K016R0800                                     |
| C2, C3        |     2 | 0.1µF, 10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104KT or Taiyo Yuden EMK107BJ104KA |
| C4            |     0 | Not installed, capacitor (1206)                                                                |
| C5            |     1 | 1.0µF, 10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A105K                                |
| D1            |     1 | 1A 30V Schottky diode (SOT123) Nihon EP10QY03 or Toshiba CRS02                                 |
| D2            |     1 | Red light-emitting diode (LED)                                                                 |

<!-- image -->

## Features

- ♦ Simple Stand-Alone Li+ Charger
- ♦ Safely Pre-Charges Deeply-Discharged Cells
- ♦ Top-Off Charging to Achieve Full Battery Capacity
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1898EVKIT | 0 ° C to +70 ° C | 10 µMAX      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                    |
|---------------|-------|----------------------------------------------------------------|
| JU1, JU2, JU3 |     3 | 2-pin headers                                                  |
| P1            |     1 | 30V 5.7A 3W P-channel power MOSFET (SOT-223) Fairchild NDT454P |
| R1            |     1 | 1.74k Ω ±1% resistor (0603)                                    |
| R2            |     0 | Not Installed, resistor (0805)                                 |
| U1            |     1 | MAX1898EUB42 (10-pin µMAX)                                     |
| None          |     3 | Shunts (JU1, JU2, JU3)                                         |
| None          |     1 | MAX1898 PC board                                               |
| None          |     1 | MAX1898 data sheet                                             |
| None          |     1 | MAX1898 EV kit data sheet                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX1898 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE         | FAX           | WEBSITE               |
|-------------|---------------|---------------|-----------------------|
| AVX         | 843-946-0238  | 843-626-3123  | www.avxcorp.com       |
| Fairchild   | 888-522-5372  | 972-910-8036  | www.fairchildsemi.com |
| Nihon       | 81-33343-3411 | 81-33342-5407 | www.niec.co.jp        |
| Taiyo Yuden | 800-348-2496  | 847-925-0899  | www.t-yuden.com       |
| TDK         | 847-803-6100  | 847-390-4498  | www.component.tdk.com |
| Toshiba     | 949-455-2000  | 949-859-3963  | www.toshiba.com/taec/ |
| Zetex       | 852-543-7100  | 852-864-7630  | www.zetex.com         |

Note: Please indicate you are using the MAX1898 when contacting these component suppliers.

## Quick Start

The MAX1898 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until indicated.

- 1) Verify  that  a  shunt  is  not  installed  on  jumpers  JU1 (charger enabled), and JU2 (timer enabled).
- 2) Verify that a shunt is installed on jumper JU3 (automatic restart enabled).
- 3) Place a voltmeter across the BATT+ and BATT- terminals.
- 4) Connect the positive terminal of the 4.7V to 6V power supply to the VIN pad. Connect the ground terminal of the power supply to the GND pad.
- 5) Turn on the power supply.
- 6) Verify  that  the  no-load  voltage  across  BATT+  and BATT- is 4.2V ±0.75%.
- 7) Observe correct Li+ cell polarity. Connect a single-cell  Li+  battery  across  the  BATT+ and BATTterminals of the EV kit. The LED will turn on and charging will begin.
- 8) The LED will turn off once the charging current falls to  approximately 160mA (20% of the fast charge current) indicating that the Li+ cell has been charged.

## Detailed Description

The MAX1898 EV kit is a fully assembled and tested single-cell  Li+  battery  charger.  The  EV  kit  charges  a single Li+ battery using a power supply with an output voltage between 4.7V and 12V. The EV kit is set to charge a Li+ battery to 4.2V at a maximum charging time of 3 hours with a charging current of 800mA. Jumpers on the EV kit allow simple adjustments to the total  charging  time  and  charger  restart  voltage  levels.

Replacing components on the EV kit board can reconfigure the charging current, total charge time, and Li+ charging voltage. The EV kit can charge a Li+ battery to 4.1V by replacing the MAX1898EUB42 (U1) IC, installed on the board, with the MAX1898EUB41 IC. A red LED indicates the cell's charging status.

## Input Source

The MAX1898 EV kit requires a power supply that can supply at least 800mA with an output voltage of 4.7V to 6V. The input voltage can be increased up to 12V, however the EV kit maximum input voltage is limited by the power rating of the MOSFET P1 and the charging current. For higher input voltages, verify that the power dissipated by MOSFET P1 will not exceed the MOSFET's maximum ratings (3W for the NDT454P). Replace MOSFET P1 or reduce the charging current if necessary.

## Charge Current

The maximum cell-charging current is programmed by resistor  R1,  which  is  connected  between the ISET pin and GND. The EV kit's maximum charging current is set to  800mA with the 1.74k Ω resistor  installed  at  R1.  For other charging currents, refer to the Current-Limit Mode section in the MAX1898 data sheet. An output voltage proportional to the charging current is available at the ISET PC board pad.

## Transistors

The MAX1898 EV kit circuit utilizes a P-channel MOSFET (P1). However, the circuit can also utilize PNP transistors in place of the MOSFET. To evaluate a PNP transistor as the pass element, replace P1 with a Zetex FZT968 PNP transistor, which is pin-for-pin compatible with the installed MOSFET. Change capacitor C2 to 220nF if a FZT968 is utilized. Refer to the MAX1898 data sheet for details.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Jumper Settings

The MAX1898 EV kit features several jumpers to reconfigure  the  circuit's  charging  settings.  See  Table  1  for jumper JU1, JU2, and JU3 configurations.

A shunt on jumper 1 (JU1) disables the charger by connecting the enable pin (EN) to GND. Remove the shunt on JU1 to enable the charger.

A shunt on jumper 2 (JU2) bypasses capacitor C3 and disables the timer function by connecting the timer control  pin  (CT)  to  GND.  Removing the shunt from JU2 enables the timer. The 0.1µF capacitor on C3 sets the safety timeout interval to 3 hours. Refer to the Selecting Maximum Charge Time section in the MAX1898 data sheet to modify the timeout interval.

A shunt on jumper 3 (JU3) enables the preset restart battery threshold of 4V by connecting the automatic restart control pin (RSTRT) to GND. Removing the shunt from JU2 floats the RSTRT pin and disables the restart function. To adjust the restart voltage threshold, remove the shunt from JU2 and install a resistor on R2. Refer to the Controlling Automatic Restart section in the MAX1898 data sheet to select R2 values.

## Table 1.  Jumper Selection

| JUMPER   | SHUNT STATE   | FUNCTION                                                                    |
|----------|---------------|-----------------------------------------------------------------------------|
| JU1      | None          | Charger is enabled                                                          |
| JU1      | Installed     | Charger is disabled                                                         |
| JU2      | None          | Charger times out after 3hrs                                                |
| JU2      | Installed     | Timer function is disabled                                                  |
| JU3      | None          | Automatic Restart Control is disabled                                       |
| JU3      | Installed     | New charging cycle reinitiates automatically if the Li+ cell drops below 4V |

<!-- image -->

## MAX1898 Evaluation Kit

## Output Signal

The LED on the EV kit is driven by the CHG pin. Depending on the Li+ cell's charging status, the pin is low or high impedance, thus turning the LED ON or OFF. If the Li+ cell cannot be charged to 2.5V in less than 1/4 of the total programmed charge time, the charger will go into fault mode. During the fault mode the CHG pin  alternates  between low and high impedance at an average frequency of 1.5Hz causing the LED to blink. The LED turns OFF when charging is complete or total charge time has elapsed.

To drive logic circuits, remove the red LED and install a 100k Ω resistor across the D2 connection, and connect the external logic circuit to the CHG pin. A logic LOW signal is output during charging; otherwise CHG is HIGH. In fault mode, the output logic signal will alternate between LOW and HIGH at an average frequency of  1.5Hz.  See  Table  2  for  LED  and CHG states.  Also refer to the CHG Status Output section in the MAX1898 data sheet condition details.

Table 2.  Table 2. LED States

| LED              | CONDITION                                                                      | CHG STATE                           |
|------------------|--------------------------------------------------------------------------------|-------------------------------------|
| OFF              | No Li+ Battery, No Input Power, Charge Cycle Complete, or Safety Timer Expires | High Impedance                      |
| ON               | Battery Charging                                                               | Low Impedance                       |
| BLINKING (1.5Hz) | Fault Mode                                                                     | High-Low Impedance (50% duty cycle) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1898 Evaluation Kit

Figure 1. MAX1898 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX1898 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1898 Evaluation Kit

Figure 3. MAX1898 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1898 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5