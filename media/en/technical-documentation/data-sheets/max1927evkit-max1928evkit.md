<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX1927/MAX1928 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board demonstrating the MAX1927/MAX1928 pulse-width modulated (PWM) step-down converters. The EV kit comes assembled with a MAX1928EUB18, which steps down a 2.6V to 5.5V input to a 1.8V output capable of sourcing 800mA. This EV kit can also be used to evaluate the MAX1927 with minor PC board modifications.

The MAX1927/MAX1928 optimize efficiency and battery life  by  skipping  pulses  at  low  loads.  They  feature  a forced-PWM mode for low output noise and contain internal MOSFETs for minimum cost and size. A 1MHz switching frequency allows the use of small external components.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1, C2        |     2 | 10µF ± 20%, 6.3V X5R ceramic capacitors Taiyo Yuden JMK212BJ106MG |
| C3            |     1 | 1200pF ± 10%, 50V X7R ceramic capacitor Murata GRM188R71H102K     |
| C4            |     1 | 0.1µF ± 10%, 16V X7R ceramic capacitor Taiyo Yuden EMK107BJ104KA  |
| C5            |     1 | 22pF ± 5%, 50V COG ceramic capacitor Murata GRM1885C1H270J        |
| JU1, JU2      |     2 | Jumpers, SIP3, 3-pin headers                                      |
| L1            |     1 | 4.7µH, 900mA power inductor Sumida CDRH4D18-4R7                   |
| R1            |     1 | 18k Ω ± 5% resistor                                               |
| R2, R3, R5    |     2 | Not installed                                                     |
| R4            |     1 | 1M Ω ± 5% resistor                                                |
| U1            |     1 | MAX1928EUB18                                                      |
| None          |     2 | Shunts                                                            |

## Features

- ♦ 2.6V to 5.5V Input Voltage Range
- ♦ 1.8V Output Voltage (MAX1928EUB18)
- ♦ Up to 800mA Output Current
- ♦ 1MHz PWM Operation
- ♦ 100% Duty-Cycle Operation for Low Dropout
- ♦ No Current-Sense Resistor Needed
- ♦ Power-OK Output
- ♦ 93% Efficiency
- ♦ Internal MOSFET Switch and Synchronous Rectifier
- ♦ Soft-Start
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX1928EVKIT | -40°C to +85°C | 10 µMAX      |

Note: To evaluate the MAX1927REUB, MAX1928EUB15, or MAX1928EUB25, request a MAX1927REUB or MAX1928EUBXX free sample with the MAX1927/MAX1928 EV kit.

## Required Equipment

Before beginning, the following equipment is required:

- 2.6V to 5.5V, 1A, variable-output power supply
- Dummy load capable of sinking 800mA
- Digital multimeter (DMM)

## Quick Start

The MAX1927/MAX1928 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Preset the power supply to 5V, and turn off the power supply.
- 2) Verify that the shunt is across JU2 pins 2 and 3 for normal-mode (not fixed-PWM) operation.

## Component Suppliers

| SUPPLIER    | COMPONENT   | PHONE           | WEBSITE         |
|-------------|-------------|-----------------|-----------------|
| Murata      | Capacitors  | 770-436-1300    | www.murata.com  |
| Sumida      | Inductors   | 81-03-3667-3381 | www.sumida.com  |
| Taiyo Yuden | Capacitors  | 408-573-4150    | www.t-yuden.com |

## MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1927/MAX1928 Evaluation Kit

- 3) Verify that the shunt is across JU1 pins 1 and 2 to enable the device.
- 4) Connect the positive lead of the power supply to VIN, and the negative lead of the power supply to GND.
- 5) Connect the positive input of the DMM to VOUT, and the negative input of the DMM to GND to measure the output voltage.
- 6) Turn on the power supply and sweep the input voltage from 2.6V to 5.5V.
- 7) Verify that the output voltage is 1.8V over the entire input range.
- 8) Connect the 800mA load between VOUT and GND.
- 9) Verify that the output voltage is 1.8V.

## Detailed Description

## Evaluating Other Output Voltages

The MAX1927R is used for an adjustable output voltage. To set the adjustable output, cut the trace that shorts R2 and place a 51k Ω ±1% resistor at R3. R2 is calculated as:

R2 = 51,000 ✕ ((VOUT / VFB) - 1)

where VFB is 0.75V and VOUT is the desired output voltage. VOUT can never exceed VIN. Compensation components R1, C3, and C5 may need to be optimized

## Jumper JU1 Functions ( SHDN Control)

| SHUNT LOCATION   | SHDN             | OPERATION        |
|------------------|------------------|------------------|
| 1 and 2          | Connected to VIN | Normal operation |
| 2 and 3          | Connected to GND | Shutdown         |

for  each output voltage. Refer to the Stability  and Compensation section in the MAX1927/MAX1928 data sheet for instructions on calculating compensation components.

## Operating Modes

The MAX1927/MAX1928 operate in one of two modes. Normal mode (PWM = GND) utilizes PWM at loads greater than 130mA. At lighter loads, pulses are skipped in order to maximize efficiency and battery life. ForcedPWM mode forces PWM operation, regardless of load, so that output ripple remains at a fixed frequency for easier noise filtering. Place a shunt between positions 1 and 2 of JU2 for forced-PWM operation, or place a shunt between positions 2 and 3 of JU2 for normal PFM/PWM operation.

## POK Output

The MAX1927/MAX1928 have an open-drain power-OK (POK) output that goes high impedance 20ms after the output is in regulation. On the EV kit, R4 pulls up POK to VIN. Alternately, POK can be pulled up to VOUT by moving the 1M Ω resistor at R4 to the R5 location.

## Shutdown

The MAX1927/MAX1928 feature a shutdown mode to power down the output and reduce input current. To shut down the device, place a shunt between positions 2 and 3 of JU1. To operate normally, place a shunt between positions 1 and 2 of JU1.

## Jumper Settings

## Jumper JU2 Functions (PWM Control)

| SHUNT LOCATION   | PWM              | OPERATION                                             |
|------------------|------------------|-------------------------------------------------------|
| Between 1 and 2  | Connected to VIN | Forced-PWM mode at all loads                          |
| Between 2 and 3  | Connected to GND | Skips pulses at light loads, PWM at loads above 130mA |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1927/MAX1928 Evaluation Kit

<!-- image -->

Figure 1. MAX1928 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1927/MAX1928 Evaluation Kit

<!-- image -->

Figure 2. MAX1928 EV Kit Component Placement Guide-Top Silkscreen

Figure 3. MAX1928 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1928 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4