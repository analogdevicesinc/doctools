<!-- lastmod 2022-08-03 -->
## General Description

The MAX6765 evaluation kit (EV kit) provides a proven printed-circuit board (PCB) layout that facilitates evaluation  of  the  MAX6765 low-quiescent-current, high-voltage linear regulator. This EV kit is a fully assembled and tested surface-mount board.

With a few simple changes detailed in a later section, this EV kit can also evaluate the MAX6766-MAX6774.

The MAX6765 EV kit includes connections to the regulator,  the  enable  signal,  the  watchdog  timer,  and  the microprocessor (µP) reset line. An LED indicates the status of the voltage regulator and jumpers provide control over all major features of the MAX6765. The MAX6765 EV kit withstands temperatures ranging from -40°C to +105°C and the MAX6765 IC withstands temperatures ranging from -40°C to +125°C.

The EV kit comes with the MAX6765TTLD2+ installed. To evaluate the pin-compatible MAX6766 or the MAX6767MAX6774, contact the factory for free samples.

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1, C5        |     0 | Not installed, capacitors                                                 |
| C2            |     1 | 1µF ±20%, 100V X7R ceramic capacitor TDK C3225X7R2A105M AVX 1210C105KAT9A |
| C3            |     1 | 10µF ±20%, 10V X7R ceramic capacitor TDK C3225X7R1C106M                   |
| C4            |     1 | 0.022µF ±10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1H223K         |
| LED1          |     1 | Green LED (1206)                                                          |

<!-- image -->

Features

- ♦ Wide Supply Voltage Range: 4V to 72V

- ♦ 100mA Regulator Output Current

- ♦ Can Also Evaluate MAX6766-MAX6774

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX6765EVKIT+ | EV Kit |

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                             |
|----------------|-------|---------------------------------------------------------|
| J1, J4, J6     |     3 | 2-pin headers                                           |
| J2, J3, J5     |     0 | Not installed, headers                                  |
| R1, R7         |     2 | 100k Ω ±1% resistors (0805)                             |
| R2, R3, R5, R6 |     0 | Not installed, resistors (0805)                         |
| R4             |     1 | 150 Ω ±1% resistor (0805)                               |
| U1             |     1 | MAX6765TTLD2+ (6-pin TDFN-EP) or MAX6766 (optional)     |
| U1a            |     0 | Not installed (optional), MAX6767-MAX6774(8-pinTDFN-EP) |
| -              |     3 | Shunts, 2-position (see Table 1 for jumper functions)   |
| -              |     1 | PCB: MAX6765 Evaluation Kit+                            |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| AVX Corp.  | 602-678-0384 | 602-678-0385 | www.avx.com           |
| TDK Corp.  | 847-390-4373 | 847-390-4428 | www.component.tdk.com |

Note: Indicate that you are using the MAX6765-MAX6774 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6765 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- An adjustable output power supply capable of supplying at least 12V at 100mA

## Procedure

The MAX6765 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Ensure that jumpers J1, J4, and J6 are shorted.
- 2) Connect the power supply to the IN and GND connections.
- 3) Set the power supply output to 12V and observe LED1.

## Detailed Description

The MAX6765 operates from 4V to 72V and provides a fixed or adjustable regulator output. The regulator can source 100mA, subject to thermal dissipation limits. Table 1 lists the function of each jumper on the EV kit.

## Voltage Regulator Output

OUT provides a regulated voltage at 5V.

## Reset Timeout

The reset output remains asserted for a certain minimum period, which is controlled by jumper J6. If J6 is shorted, the reset period is the default of 12.5ms. If J6 is open, capacitor C4 sets the timeout period to 26.8ms, but this can easily be changed using the following equation:

<!-- formula-not-decoded -->

where t RP is in seconds and C4 is in farads. Refer to the MAX6765-MAX6774 IC data sheet for more information on capacitor selection.

## Table 1. Jumper Functions (J1-J6)

| JUMPER                     | POSITION   | FUNCTION                           |
|----------------------------|------------|------------------------------------|
| J1                         | Open       | Regulator disabled                 |
| J1                         | Closed*    | Regulator enabled                  |
| J2 (MAX6767/ MAX6768 only) | Open       | Hold mode disabled                 |
| J2 (MAX6767/ MAX6768 only) | Closed     | Hold mode enabled                  |
| J3 (MAX6771/ MAX6772 only) | Open       | ENABLE2 low                        |
| J3 (MAX6771/ MAX6772 only) | Closed     | ENABLE2 high                       |
| J4                         | Open       | LED1 disabled                      |
| J4                         | Closed*    | LED1 enabled                       |
| J5 (MAX6767- MAX6774 only) | 1-2        | Regulator voltage set by R5 and R6 |
| J5 (MAX6767- MAX6774 only) | 2-3        | Regulator voltage fixed            |
| J6                         | Open       | Reset timeout set by C4 to 26.8ms  |
| J6                         | Closed*    | Reset timeout fixed at 12.5ms      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Evaluating the MAX6766-MAX6774

This EV kit can also be used to evaluate the MAX6766MAX6774. The MAX6766 uses the 6-pin TDFN footprint (U1) on the EV kit and the MAX6767-MAX6774 use the 8-pin TDFN footprint (U1a). Each of these parts shares the same pin connections except for pin 4. R2, R3, J2, and J3 work differently depending on the part. See Table 2 for the modifications needed for a particular part.

## RESETIN Comparator

The MAX6769/MAX6770 have a RESETIN comparator that asserts RESET if  the  voltage  falls  below  the  comparator threshold. The threshold voltage on IN can be set using the following formula:

<!-- formula-not-decoded -->

## Table 2. EV Kit Modifications

| PARTS           | DESCRIPTION                       | PARTS CHANGED                                         | PARTS CHANGED                                         | PARTS CHANGED              | PARTS CHANGED               | PARTS CHANGED                 |
|-----------------|-----------------------------------|-------------------------------------------------------|-------------------------------------------------------|----------------------------|-----------------------------|-------------------------------|
|                 |                                   | R2                                                    | R3                                                    | J2                         | J3                          | J5, R5, R6                    |
| MAX6765/MAX6766 | Unmodified EV kit                 | Open                                                  | Open                                                  | Open                       | Open                        | Open                          |
| MAX6767/MAX6768 | Pin 4 is the HOLD input           | Open                                                  | Open                                                  | Add jumper to control HOLD | Open                        | See Adjustable Output section |
| MAX6769/MAX6770 | Pin 4 is the RESETIN comparator   | Add resistive divider to set the comparator threshold | Add resistive divider to set the comparator threshold | Open                       | Open                        | See Adjustable Output section |
| MAX6771/MAX6772 | Pin 4 is the second enable        | Add 100k Ω pulldown resistor                          | Open                                                  | Open                       | Add jumper to second enable | See Adjustable Output section |
| MAX6773/MAX6774 | Pin 4 is the watchdog timer input | Add 100k Ω pulldown resistor                          | Open                                                  | Open                       | Open                        | See Adjustable Output section |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6765 Evaluation Kit

where V TH is either 1.085V (M/S/Y/V suffixes) or 1.147V (L/T/Z/W suffixes) and R3 and R2 are ≤ 200k Ω . Do not exceed the 12V absolute maximum rating for RESETIN.

## Adjustable Output

With the MAX6767-MAX6774, OUT provides regulated DC at a voltage set by jumper J5, which selects either the fixed output voltage or the output voltage set by resistive dividers R5 and R6. This can easily be changed according to the following equation:

<!-- formula-not-decoded -->

where V SET = 1.233V and R5 and R6 are ≤ 200k Ω .

## MAX6765 Evaluation Kit

Figure 1. MAX6765EV Kit Schematic

<!-- image -->

Figure 2. MAX6765 EV Kit Component Placement Guide-Components Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6765 Evaluation Kit

Figure 3. MAX6765 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX6765 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 5