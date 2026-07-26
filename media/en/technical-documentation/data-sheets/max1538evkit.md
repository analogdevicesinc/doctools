<!-- lastmod 2022-08-05 -->
## General Description

The MAX1538 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that routes charge and discharge currents between two battery packs, a battery charger, and an AC-adapter power source. The circuit uses a MAX1538 IC in a 28-pin thin QFN package and is configured for a 4.75VDC to 28VDC AC-adapter input range.

The EV kit uses eight P-channel MOSFETs to steer current between the power sources and the load. The battery minimum voltage level sets the threshold for battery undervoltage conditions and can be adjusted from 4.65V to 13.0V.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                 |
|---------------|-------|---------------------------------------------------------------------------------------------|
| C1            |     1 | 1.0µF ±20%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A105M                             |
| C2            |     1 | Not installed (2220)                                                                        |
| C3            |     1 | Not installed (D-case)                                                                      |
| C4, C5, C6    |     3 | 47µF, 35V low-ESR tantalum capacitors (E-case) AVX TPSE476M035R0250 or AVX TPSE476M035R0200 |
| C7, C11       |     2 | 0.1µF ±20%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104M                            |
| C8, C9        |     2 | 0.1µF ±20%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104M                            |
| C10           |     1 | 4.7µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J475M                            |
| C12, C13      |     0 | Not installed (0805)                                                                        |
| C14           |     1 | 1.0µF, 50V X7R ceramic capacitor (1206) TDK C3216X7R1H105M                                  |
| D1            |     1 | Dual diode (SOT23) Central Semiconductor CMPD3003C Top mark = LLC                           |
| D2, D3, D4    |     3 | Green surface-mount LEDs (SS) Panasonic LNJ308G8LRA                                         |
| J1            |     1 | Dual-row, 16-pin header                                                                     |

<!-- image -->

## Features

- ♦ 4.75V to 28V AC-Adapter Input Range
- ♦ Up to 10A Steering Capability
- ♦ P-Channel MOSFET Steering Switches
- ♦ Adjustable Battery Minimum Voltage Level
- ♦ Adjustable Airline/AC-Adapter Detection Voltages
- ♦ Manual-or Computer-Controlled Interface
- ♦ On-Board Status LEDs
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1538EVKIT | 0 ° C to +70 ° C | 28 Thin QFN  |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| JU1-JU5       |     5 | Not installed (SIP-2)                                                               |
| N1-N3         |     3 | Digital logic N-channel MOSFETs (SOT23) Central Semiconductor 2N7002 Top mark = 702 |
| P1-P8         |     8 | 30V P-channel MOSFETs (8-pin SO) Fairchild FDS6679                                  |
| R1            |     1 | 100k Ω ±5% resistor (0402)                                                          |
| R2, R3        |     2 | 10k Ω potentiometers, 12-turn, 1/4in                                                |
| R4, R5, R6    |     3 | 330k Ω ±5% resistors (0402)                                                         |
| R7            |     1 | 10m Ω ±2%, reverse-geometry sense resistor (1225) IRC LRC-LRF1225-01-R010-F         |
| R8, R9, R14   |     3 | 620 Ω ±5% resistors (1206)                                                          |
| R10-R13       |     4 | 160k Ω ±5% resistors (0402)                                                         |
| R15, R16      |     2 | 500k Ω potentiometers, 12-turn, 1/4in                                               |
| R17, R18      |     2 | Not installed (2010)                                                                |
| SW1-SW3       |     3 | 3-position, SPDT, slide switches                                                    |
| TB1-TB4       |     4 | 2-circuit terminal blocks                                                           |
| TP1-TP12      |    12 | Test points                                                                         |
| U1            |     1 | Maxim MAX1538ETI (28-pin QFN)                                                       |
| U2            |     1 | Maxim MAX1615EUK (5-pin SOT23) Top mark = ABZD                                      |
| U3, U4        |     2 | Maxim MAX6817EUT (6-pin SOT23) Top mark = AAAU                                      |
| None          |     1 | MAX1538 EV Kit PC board                                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1538 Evaluation Kit

## Procedure

The MAX1538 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Ensure that SW1 is in the down position (charge mode OFF).
- 2) Ensure that SW2 is in the down position (relearn mode OFF).
- 3) Ensure that SW3 is in the down position (battery A selected).
- 4) Set the DC power supply (used to emulate the battery charger) to 16.8V.
- 5) Set the DC power supply (used to emulate the AC adapter) to 20V.
- 6) Ensure that all DC power supplies are turned off.
- 7) Connect the first battery to the BATA and GND pads.
- 8) Connect the second battery to the BATB and GND pads.

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| AVX                   | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Fairchild             | 888-522-5372 | -            | www.fairchildsemi.com |
| IRC                   | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Panasonic             | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX1538 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- Two 16.8VDC Li+ battery packs
- One variable 16.8V, 1A current-limited DC source to emulate a battery charger
- One variable 20V, 10A DC source to emulate an AC adapter
- One 10A, 300W electronic load
- 9) Connect the AC-adapter power supply to the ADPIN and GND pads.
- 10) Connect the electronic load to the EXTLD and GND pads.

Note: Terminal blocks TB1-TB4 can be used instead of the pads for power-supply connections in steps 8-11.

- 11) Connect the positive terminal of the battery-charger power supply to the CHGIN pad. Connect the negative terminal of the battery-charger power supply to the GND pad (located by the BATB terminal block).
- 12) Turn on the AC-adapter power supply.
- 13) Turn on the battery-charger power supply.
- 14) Set the electronic load to draw 5A.
- 15) Enable the electronic load.
- 16) Verify that LED D3 is lit and that LEDs D2 and D4 are not lit (AC adapter present).

## Detailed Description

The MAX1538 EV kit circuit routes charge and discharge currents between two battery packs, a battery charger, and an AC adapter or DC power source. The circuit uses a MAX1538 in a 28-pin thin QFN package to  control  eight  steering  P-channel  MOSFET switches. Monitor the MOSFET control signals at test-points TP1-TP8. A MAX1615 low-power linear regulator provides the circuit board's 3.3V power for logic ICs and status LEDs. The EV kit's AC-adapter input (ADPIN) range is from 4.75VDC to 28VDC. Figure 1 depicts a typical  setup  with  batteries  and  battery  charger  connected to the EV kit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. MAX1538 EV Kit Connection Diagram

<!-- image -->

Potentiometers (R15, R16) allow easy adjustment of the minimum battery voltage threshold. Below this threshold,  the  battery  is  considered  undervoltage and is not selected. See the Battery-Minimum Voltage Level Adjustment section for more information on adjusting the level.

LEDs indicate the status of the AC adapter and batteries.  The  LEDs are driven by N-channel logic FETs. Jumpers are provided to disable the switches, CMOS switch debouncers, and LEDs used for evaluating power usage.

## Setting the Adapter Trip Thresholds

The MAX1538 EV kit allows for adjustable AC adapter and airline adapter trip thresholds. The airline adapter trip  threshold  must  be  set  before  the  AC  adapter  trip threshold.

<!-- image -->

## MAX1538 Evaluation Kit

To set the airline adapter trip threshold, apply the minimum airline adapter voltage to the ADPIN pad and measure the voltage at TP12. Adjust potentiometer R3 until the TP12 voltage measures 2.0V.

To set the AC adapter trip threshold, apply the minimum AC adapter voltage to the ADPIN pad and measure the voltage at TP11. Adjust potentiometer R2 until the TP11 voltage measures 2.0V.

A clockwise turn on either potentiometer increases the measured voltage, while a counterclockwise turn on the potentiometer decreases the measured voltage.

## Battery Charging

Charge the selected battery (see the Battery Selection section) by moving the CHRG switch (SW1) to the up position. Disable the charging path by moving the switch to the down position.

## Battery Relearning

The MAX1538 features battery relearning. Moving the RELRN switch (SW2) to the up position, places the MAX1538 into relearn mode. Moving the RELRN switch to the down position, places the MAX1538 into normal mode.

## Battery Selection

Adjusting the BATSEL switch (SW3) selects from which battery the EV kit powers the load. If the switch is in the up position, battery B powers the load. If the switch is in the down position, battery A powers the load. If the selected battery is not present or undervoltage, that battery is not connected to the load.

## Battery Minimum Voltage-Level Adjustment

Adjusting potentiometers R16 and R15, set the minimum A and B battery voltages, respectively. Turning the potentiometer clockwise increases the minimum battery voltage. Turning the potentiometer counterclockwise decreases the minimum battery voltage.

To adjust the minimum battery voltage to a predetermined value, monitor the voltage at TP10/TP9 (battery A/B).  Turn  the  respective  potentiometer  until  the  measured voltage is equal to 1/5 the desired minimum battery  voltage.  The  MAX1538 EV kit allows for minimum battery thresholds between 4.65V and 13.0V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1538 Evaluation Kit

## Output Indicators

The MAX1538 EV kit features LEDs that indicate the status of the MAX1538 output lines. A lit LED indicates an output state of 1, while an unlit LED indicates an output state of zero. Use Table 1 to decode the LED status.

Table 1. Output Indicator Status

| OUTPUT    | OUTPUT    | OUTPUT    | STATE           | STATE                           |
|-----------|-----------|-----------|-----------------|---------------------------------|
| OUT2 (D4) | OUT1 (D3) | OUT0 (D2) | SOURCE          | DESCRIPTION                     |
| 0         | 0         | 0         | Battery A       | Supplying EXTLD                 |
| 0         | 0         | 1         | Battery B       | Supplying EXTLD                 |
| 0         | 1         | 0         | AC adapter      | Supplying EXTLD                 |
| 0         | 1         | 1         | Airline adapter | Supplying EXTLD                 |
| 1         | 0         | 0         | Battery A       | Relearning mode supplying EXTLD |
| 1         | 0         | 1         | Battery B       | Relearning mode supplying EXTLD |
| 1         | 1         | 0         | Battery A       | Charging                        |
| 1         | 1         | 1         | Battery B       | Charging                        |

Table 2. External Controller Connections

| MAX1538 PIN CONNECTIONS   | MAX1538 PIN CONNECTIONS   | MAX1538 PIN CONNECTIONS   | MAX1538 PIN CONNECTIONS   | MAX1538 PIN CONNECTIONS   | MAX1538 PIN CONNECTIONS   | MAX1538 PIN CONNECTIONS   | MAX1538 PIN CONNECTIONS   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| HOSTVCC*                  | OUT0                      | OUT1                      | OUT2                      | CHRG                      | RELRN                     | BATSEL                    | GND                       |
| J1-1                      | J1-7                      | J1-5                      | J1-3                      | J1-9                      | J1-11                     | J1-13                     | J1-15**                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Using the Optional Parallel Interface

The MAX1538 EV kit features an additional header (J1) that can be connected to a user-provided computer interface. When using this interface, disable the manual interface (switches and LEDs) by cutting the traces at jumpers JU3, JU4, and JU5. Also disable the on-board MAX1615 power supply by cutting the traces at jumpers JU1 and JU2. See Table 2 for header pin connections.

## Reducing the Solution

Eight MOSFETs are not required if the application does not use specific features of the MAX1538. MOSFET P1, P4, or both, may be removed depending on what features are required.

## Relearning Mode Disabled

If the relearning mode of the MAX1538 is not required, remove MOSFET P1 and short the pads of resistor R17.

## Buck Charger

When using a buck-converter battery charger (i.e., the AC-adapter voltage is greater than the charge voltage of the charger), remove MOSFET P4 and short the pads of resistor R18.

<!-- image -->

## MAX1538 Evaluation Kit

Figure 2. MAX1538 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1538 Evaluation Kit

Figure 2. MAX1538 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1538 Evaluation Kit

<!-- image -->

Figure 3. MAX1538 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1538 Evaluation Kit

Figure 4. MAX1538 EV Kit PC Board Layout-Component Side

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1538 Evaluation Kit

Figure 5. MAX1538 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9