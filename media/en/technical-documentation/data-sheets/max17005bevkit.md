<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX17005B Evaluation Kit

## General Description

The MAX17005B evaluation kit (EV kit) is a complete and fully assembled and tested surface-mount PCB that  features  the  MAX17005B highly integrated, multichemistry battery charger control IC. The MAX17005B EV kit utilizes two single-package n-channel MOSFETs for  high-side  and  low-side  switching  for  the MAX17005B internal synchronous step-down converter, and two n-channel MOSFETs and one p-channel MOSFET for the main power-source selection.

The MAX17005B EV kit is capable of supplying power to  a  system  load  while  simultaneously charging 3- or 4-cell  Li+  battery  packs.  During  normal  operation,  the EV kit circuit automatically selects the ADAPTER input or the battery as the main power source for supplying power to the system load. If the ADAPTER input is selected as the main source and the EV kit's inputcurrent limit is exceeded, the charge current is reduced automatically to give priority to the system load.

The EV kit's input-source-current limit is set to 4A while the maximum battery-charge voltage and chargecurrent thresholds can be configured up to 17.4V and 3.5A, respectively. The thresholds can be adjusted by using on-board circuitry or by connecting analog signals to the respective test points on the EV kit. A digital output signal ( ACOK ) indicates the presence of a valid AC adapter voltage at the ADAPTER input source. The MAX17005B EV kit PCB is rated for 0°C to +70°C; however, the MAX17005B IC is rated for -40°C to +85°C.

| DESIGNATION                |   QTY | DESCRIPTION                                                         |
|----------------------------|-------|---------------------------------------------------------------------|
| ACOK , IINP, ISET, TP1-TP4 |     7 | PC mini red test points                                             |
| ADAPTER, BATT+, SYS_LOAD   |     3 | PC large red test points                                            |
| AGND                       |     1 | PC black test point                                                 |
| BATT-, PGND (2)            |     3 | PC large black test points                                          |
| C1                         |     1 | 1µF ±10%, 25V X5R ceramic capacitor (0805) Murata GRM21BR61E105K    |
| C2, C5, C6                 |     3 | 4.7µF ±10%, 25V X5R ceramic capacitors (0805) Murata GRM21BR61E475K |

Features

- ♦ Analog/PWM Input Charge-Current Setting
- ♦ Up to 1.2MHz Switching Frequency
- ♦ Programmable Charge Current Up to 3.5A
- ♦ Monitors Input/Outputs Analog Input Charge-Current-Setting Voltage AC Adapter Input Current AC Adapter Presence
- ♦ Automatic System Power-Source Selection
- ♦ Up to 17.4V (max) Battery Voltage
- ♦ 10V to 25V Adapter-Input Operation
- ♦ Demonstrates the MAX17005B IC Internal Boost Diode
- ♦ Cycle-by-Cycle Current Limit
- ♦ Multichemistry Battery Charger
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17005BEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C3, C11       |     2 | 0.1µF ±10%, 25V X5R ceramic capacitors (0603) Murata GRM188R61E104K |
| C4            |     1 | 0.68µF ±10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61A684K |
| C7            |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61A105K    |
| C8            |     1 | 0.01µF ±10%, 16V X5R ceramic capacitor (0603) Murata GRM188R61C103K |
| C9            |     1 | 4.7µF ±10%, 25V X5R ceramic capacitor (1206) Murata GRM319R61E475K  |

## MAX17005B Evaluation Kit

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------|
| C10           |     0 | Not installed, ceramic capacitor (1206)                                           |
| C12           |     0 | Not installed, ceramic capacitor (0603)                                           |
| C13           |     1 | 1000pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H102T                |
| D1            |     1 | 200mA, 30V diode (SOD323) Diodes, Inc. BAT54WS (Top Mark: L9)                     |
| D2            |     0 | Not installed, diode (SOD323)                                                     |
| JU1, JU2, JU3 |     3 | 2-pin headers                                                                     |
| L1            |     1 | 2µH, 4.3A inductor Sumida CDR7D28MN-2R0NC                                         |
| N1            |     1 | 30V, 5.8A n-channel MOSFET (8 SO) International Rectifier IRF9410PBF              |
| N2            |     1 | 60V, 115mA n-channel MOSFET (3 SOT23) Vishay 2N7002K (Top Mark: 7K---)            |
| N3            |     1 | 30V, 8.5A n-channel MOSFET (8 SO) Fairchild Semi FDS8884                          |
| N4            |     1 | 30V, 10A n-channel MOSFET (8 SO) Fairchild Semi FDS6690AS                         |
| Q1            |     1 | 30V, 6.5A/-4.9A dual n/p-channel MOSFET (8 SO) International Rectifier IRF7319PBF |
| R1            |     1 | 0.015 Ω ±1%, 1/2W resistor (1206) IRC, Inc. LRC-LRF1206-LF-01- R015-F             |

| DESIGNATION                 |   QTY | DESCRIPTION                                                                                       |
|-----------------------------|-------|---------------------------------------------------------------------------------------------------|
| R2, R10, R17, R18, R22, R23 |     0 | Not installed, resistors (0603) R2, R10, and R18 are open; R17, R22, and R23 are short (PC trace) |
| R3                          |     1 | 1k Ω ±1% resistor (0603)                                                                          |
| R4, R13                     |     1 | 100k Ω ±1% resistors (0603)                                                                       |
| R5                          |     1 | 49.9k Ω ±1% resistor (0603)                                                                       |
| R6                          |     1 | 22.6k Ω ±1% resistor (0603)                                                                       |
| R7                          |     1 | 113k Ω ±1% resistor (0603)                                                                        |
| R8                          |     1 | 2M Ω ±5% resistor (0603)                                                                          |
| R9                          |     1 | 50k Ω single-turn potentiometer Murata PVG3A503C01                                                |
| R11, R14                    |     2 | 150k Ω ±1% resistors (0603)                                                                       |
| R12                         |     1 | 56.2k Ω ±1% resistor (0603)                                                                       |
| R15                         |     1 | 0 Ω ±5% resistor (0603)                                                                           |
| R16                         |     1 | 0.02 Ω ±1%, 1/2W resistor (1206) IRC, Inc. LRC-LRF1206-LF-01- R020-F                              |
| R19                         |     1 | 169k Ω ±1% resistor (0603)                                                                        |
| R20                         |     1 | 20k Ω ±1% resistor (0603)                                                                         |
| R21                         |     1 | 10k Ω ±5% resistor (0603)                                                                         |
| U1                          |     1 | Multichemistry battery charger (20 TQFN-EP*) Maxim MAX17005BETP+                                  |
| U2                          |     1 | Schmitt trigger logic inverter (5 SC70) Fairchild Semi NC7SZ14P5X (Top Mark: Z14)                 |
| -                           |     3 | Shunts (JU1, JU2, JU3)                                                                            |
| -                           |     1 | PCB: MAX17005B EVALUATION KIT+                                                                    |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes, Inc.                           | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| International Rectifier                | 310-322-3331 | www.irf.com                 |
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX17005B when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- MAX17005B EV kit
- One 10V to 25V, 5A variable power supply
- Four voltmeters

## MAX17005B Evaluation Kit

## Quick Start

## Detailed Description of Hardware

## Required Equipment

The MAX17005B is an evaluation kit for the MAX17005B that utilizes two single-package MOSFETs for the MAX17005B internal synchronous step-down converter.

The MAX17005B EV kit is a complete and fully assembled and tested surface-mount PCB that demonstrates the  MAX17005B highly integrated, multichemistry battery  charger controller. The MAX17005B integrates a high-efficiency, synchronous-rectified step-down DCDC converter to implement a precision constant-current and constant-voltage charger. The MAX17005B thermally optimized high-frequency architecture adjusts the EV kit's typical switching frequency to 1.2MHz to control  the  power  dissipation  in  the  high-side  MOSFET, reducing output capacitance and inductance.

The MAX17005B EV kit utilizes two single-package n-channel MOSFETs for high-side and low-side switching for  the  MAX17005B synchronous converter, and two n-channel MOSFETs and one p-channel MOSFET for main power-source selection. The EV kit is designed to operate from a single DC power supply that provides 10V to 25V and 5A of current.

The MAX17005B EV kit circuit is capable of supplying power to a load connected to the SYS\_LOAD output, while simultaneously charging the battery pack connected between BATT+ and BATT-. During normal operation, the EV kit circuit selects the ADAPTER or the BATT+ input, through MOSFET Q1, as the main power source for the load connected at SYS\_LOAD. Once the main AC adapter is selected as the power source, the EV kit circuit monitors the input current through the IINP connector. The input current is defined as the combined system-load current and battery-charge current when the ADAPTER input is the main power source. When the input current exceeds the EV kit input-current-limit threshold, the battery-charge current is reduced to give priority to the system load.

The EV kit's input-current-limit threshold is configured to 4A with resistor R1. The EV kit's cell count and maximum battery-charge-current thresholds are programmable with user-adjusted analog signals. The EV kit features on-board circuitry that allows the user to adjust or  set  the  voltage  thresholds  at  each  of  these  inputs. Jumper JU1 selects the MAX17005B EV kit for 3- or 4-cell charging operation. Jumper JU2 sets the batterycharge-voltage threshold to 4.2V or 4.35V per cell. The charge current can be configured from 0.14A to 4A by adjusting the analog DC voltage at the ISET test point connector using potentiometer R9, or by applying a PWM signal at ISET. The EV kit also features an ACOK output test point to monitor the presence of a valid input source connected at ADAPTER. See the Setting Charge

## Procedures

The MAX17005B EV kit is a fully assembled and tested surface-mount PCB. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  a  shunt  is  not  installed  across  jumper JU1 (3 cells charging).
- 2) Verify that shunts are installed across jumpers JU2 (cell-charge voltage configured to 4.2V/cell) and JU3 (battery charging disabled).
- 3) Connect the power supply across the ADAPTER and PGND test points.
- 4) Connect a voltmeter across the BATT+ and BATTPCB test points.
- 5) Connect a voltmeter across the SYS\_LOAD and PGND test points.
- 6) Connect a voltmeter across the ISET and AGND test points.
- 7) Connect a voltmeter across the ACOK and AGND test points.
- 8) Turn on the power supply.
- 9) Set the power-supply voltage to 20V.
- 10) Remove the shunt at jumper JU3 (battery charging enabled).
- 11) Adjust potentiometer R9 until the voltmeter connected to  the  ISET  pad  measures approximately 1.03V. This sets the charge current to 3A.
- 12) Verify the following:
- 13) The EV kit is ready for additional testing.

| PARAMETER      |   MEASURED OUTPUT (V) |
|----------------|-----------------------|
| BATT+ to BATT- |                  12.6 |
| SYS_LOAD       |                    20 |
| ISET           |                  1.03 |
| ACOK           |                     0 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17005B Evaluation Kit

Current section for additional information when using a PWM signal at ISET.

## Power-Source Selection for System Load

To provide power at SYS\_LOAD, the MAX17005B EV kit requires a 10V to 25V power source connected to the ADAPTER and PGND test points, or a power source with  a  6V  to  17.4V  output-voltage  range  connected to the BATT+ and BATT- test points.

In  a  typical  battery-charging  application,  the  battery pack is connected between the BATT+ and BATTterminals and an AC adapter power supply is connected between the ADAPTER and PGND terminals. When the voltage at the MAX17005B DCIN pin is greater than BATT+ by 420mV, the MAX17005B BST output drives the gates of n-channel MOSFETs N1 and Q1-A approximately 4.5V above the ADAPTER voltage, selecting ADAPTER as the main power source for supplying the load at SYS\_LOAD. As long as the ADAPTER power source is present, though the charger is off, there are forced BST refresh pulses at a 5ms (min) period at the MAX17005B BST pin to properly conduct the systemload current through N1 and Q1-A.

The MAX17005B EV kit charges the batteries connected between the BATT+ and BATT- terminals when the following conditions are met:

- 1) ADAPTER &gt; (BATT+) + 420mV (300mV falling hysteresis).
- 2) SYS\_LOAD current is less than the input-current limit.
- 3) Jumper JU3 is not installed and a DC analog voltage &gt; 26mV or a PWM signal is present at the ISET test point.

When the ADAPTER power source is removed, the MAX17005B stops generating BST refresh pulses and N2 forces N1 off. BATT+ is then selected as the SYS\_LOAD power source by conducting the systemload current through the p-channel MOSFET, Q1-B.

## ACOK Output Logic Signal

The EV kit features the ACOK output-logic signal that indicates the presence of a valid source connected to the ADAPTER terminal. ACOK is  pulled  low  when  the voltage at ADAPTER is &gt; 20V; otherwise, ACOK is pulled to the MAX17005B reference output voltage VAA (4.2V).

## Input-Current Limit

The EV kit input-source-current limit is set at 4A using resistor R1. The input current is the sum of the systemload current and battery-charge current when the ADAPTER input is the main power source. When the input current exceeds the input-current limit, the charging current is reduced to provide priority to the SYS\_LOAD current. As the SYS\_LOAD current approaches the current-limit threshold, the charge current drops linearly to zero.

The maximum input-source-current limit can be set by replacing sense resistor R1. Use the following equation to select a new sense-resistor value:

<!-- formula-not-decoded -->

where ILIMIT is the input-source-current limit in amperes and R1 is the value of the sense resistor in milliohms.

Refer to the Setting Input-Current Limit section in the MAX17005B/MAX17006B/MAX17015B IC data sheet for additional information on setting the input-current limit if populating resistors at the R2 and R3 PCB pads.

## Battery Charging

## Battery Cell-Count Setting

The MAX17005B EV kit supports 3- or 4-cell Li+ battery charging. Jumper JU1 configures the MAX17005B for 3- or 4-series-cell charging operation. Remove the shunt at  jumper JU1 for 3-cell charging operation. Install a shunt at jumper JU1 for 4-cell charging operation.

See Table 1 for proper jumper JU1 configuration when evaluating the MAX17005B.

## Setting Charge Voltage

The EV kit's battery-charge voltage can be configured between 4.2V to 4.4V per cell for the MAX17005B using on-board circuitry resistor R12 and U2. Jumper JU2 sets the EV kit's battery-cell voltage to 4.2V or 4.35V. Install the shunt at jumper JU2 to set the EV kit batterycell voltage to 4.2V. Remove the shunt at jumper JU2 to set the battery-cell voltage to 4.35V.

See Table 2 for proper jumper JU2 configuration when setting the battery cell voltage for the MAX17005B.

The MAX17005B battery-cell voltage can be configured from 4.2V/cell to 4.4V/cell by replacing resistor R12, which adjusts the voltage at the VCTL pin.

Use the following equations to first calculate the VCTL voltage for the desired cell voltage:

<!-- formula-not-decoded -->

## Table 1. Charge Cell Count (Jumper JU1)

| SHUNT POSITION   |   NUMBER OF SERIES CELLS CHARGED |
|------------------|----------------------------------|
| Not installed    |                                3 |
| Installed        |                                4 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17005B Evaluation Kit

Table 2. Battery-Voltage Cell Charge (Jumper JU2)

Table 3. Battery Charger Control (Jumper JU3)

| SHUNT POSITIONS   | BATTERY-VOLTAGE/CELL OPERATION              |
|-------------------|---------------------------------------------|
| Not installed     | 4.35V/cell or adjusted battery-cell voltage |
| Installed         | 4.2V/cell                                   |

- 1) For 3-cell selection of MAX17005B, 4.2V &gt; VVCTL &gt; 2.4V.

OR

<!-- formula-not-decoded -->

- 2) For 4-cell  selection  of  MAX17005B, 0V &lt; VVCTL &lt; 1.8V.

Using the VVCTL voltage calculated above in equations 1 and 2, use the respective equations below to calculate  the  total  high-  or  low-side  resistance  (RT)  needed at the VCTL parallel-resistor network, where RT is R11|| R12 or R14||R12:

<!-- formula-not-decoded -->

- 3) For 3-cell selection of MAX17005B:

<!-- formula-not-decoded -->

- 4) For 4-cell selection of MAX17005B.

Upon calculating RT, and using the EV kit's R11 or R14 default 150k Ω value, determine the new R12 resistor value.

The total BATT+ to BATT- battery regulation voltage can be calculated using the following equation:

<!-- formula-not-decoded -->

where VBATT+ is the battery regulation voltage, NCELLS is  the  total  number of cells, and VCELL is  the  cell  voltage setting.

## Setting Charge Current

The MAX17005B EV kit charge current can be set up to 3.5A or 3A when applying an analog DC voltage or PWM signal, respectively, at the ISET terminal.

Potentiometer R9 adjusts the battery-charge current by applying the proper analog DC voltage at the ISET pin. While monitoring the ISET voltage through the EV kit's ISET test point, use the following equation to adjust the maximum battery-charge current to the desired value:

<!-- image -->

| SHUNT POSITIONS   | EV KIT CHARGE MODE                                                 |
|-------------------|--------------------------------------------------------------------|
| Not installed     | Charger enabled and charge current set by R9 or PWM signal at ISET |
| Installed         | Charger disabled                                                   |

<!-- formula-not-decoded -->

where VISET is the voltage at the ISET test point, R16 is the 20m Ω battery current-sense resistor, and ICHARGE is the desired battery-charge current.

A digital PWM signal with a 128Hz to 500kHz frequency range can be applied at the ISET terminal to control the battery charging current. Refer to the Setting Charge Current section in the MAX17005B/MAX17006B/ MAX17015B IC data sheet for proper logic levels and charge-current setting when using a PWM signal at ISET. As the duty cycle increases/decreases, the charge current linearly increases/decreases.

The EV kit's actual battery-charge current depends on the input-source-current limit and the load connected at SYS\_LOAD. As the battery and SYS\_LOAD current exceeds the input-source-current limit, the charging current is reduced to provide priority to the SYS\_LOAD current.

## Charger Shutdown

Jumper JU3 places the charger in shutdown mode. To place the charger in shutdown mode, install a shunt across jumper JU3. To enable the charger, remove the shunt at jumper JU3 and apply the appropriate analog DC voltage or PWM signal at ISET. See Table 3 for proper jumper configuration to place the charger in shutdown mode.

## IINP Output Signal

The MAX17005B EV kit features an analog output test point (IINP) to monitor the adapter current through sense resistor R1. The measured current is the sum of the current applied at SYS\_LOAD and the batterycharge current. The system current can be estimated using the following equation:

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17005B Evaluation Kit

Figure 1. MAX17005B EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17005B Evaluation Kit

<!-- image -->

Figure 2. MAX17005B EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX17005B EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17005B Evaluation Kit

Figure 4. MAX17005B EV Kit PCB Layout-Ground Layer

<!-- image -->

Figure 5. MAX17005B EV Kit PCB Layout-Power Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17005B Evaluation Kit

Figure 6. MAX17005B EV Kit PCB Layout-Solder Side

<!-- image -->

<!-- image -->

Figure 7. MAX17005B EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17005B Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                         | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------|-----------------|
|                 0 | 5/08            | Initial release                                                                     | -               |
|                 1 | 12/08           | Updated Component List , schematic, and PCB layout diagrams                         | 2, 7-10         |
|                 2 | 7/09            | Changed part number and updated Component List , schematic, and PCB layout diagrams | 1-10            |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_