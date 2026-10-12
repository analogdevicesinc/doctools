<!-- lastmod 2022-08-04 -->
## General Description

The MAX6791 evaluation kit (EV kit) provides a proven PC board layout that facilitates evaluation of the MAX6791 high-voltage, low-quiescent-current dual linear regulator. The EV kit can also evaluate the MAX6792MAX6796. This EV kit is a fully assembled and tested surface-mount board.

This EV kit includes an on-board p-channel FET for reverse-battery protection, a button to allow testing of the regulator hold feature, and connections to both regulators, the windowed watchdog timer, and the µP reset line. Two LEDs indicate the status of both voltage regulators. Jumpers provide control over all major features of the MAX6791. The EV kit operates at temperatures ranging from -40°C to +105°C, although the MAX6791 itself can withstand temperatures up to +125°C.

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1**          |     0 | Optional switch debounce capacitor                                |
| C2**          |     0 | Optional OUT1 capacitor (1812)                                    |
| C3, C8        |     2 | 10µF ±20%,16V X7R ceramic capacitors (1210) TDK C3225X7R1C106M    |
| C4            |     1 | 1500pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H152K  |
| C5            |     1 | 0.022µF ±10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1H223K |
| C6            |     1 | 1µF ±20%, 100V X7R ceramic capacitor (1812) TDK C4532X7R2A105M    |
| C7**          |     0 | Optional input capacitor (10µF, 100V) Vishay 222215369109         |
| C9**          |     0 | Optional OUT2 capacitor (1812)                                    |
| D1**          |     0 | Optional transient voltage suppressor Vishay SMBJ51A              |

<!-- image -->

## Features

- ♦ Wide 5V to 72V Supply Voltage Range
- ♦ 100V Reverse-Battery Protection
- ♦ Dual 150mA Regulator Outputs
- ♦ Fixed or Adjustable Regulator Output
- ♦ Windowed Watchdog Timer
- ♦ ENABLE and HOLD Functions

## Ordering Information

* EP = Exposed pad.

| PART         | TEMP RANGE      | IC PACKAGE   |
|--------------|-----------------|--------------|
| MAX6791EVKIT | -40°C to +105°C | 20 TQFN-EP*  |

## Component List

| DESIGNATION            |   QTY | DESCRIPTION                                                 |
|------------------------|-------|-------------------------------------------------------------|
| LED1, LED2             |     2 | Green LEDs (1206)                                           |
| J1, J2, J4, J5, J8-J12 |     9 | 2-pin headers                                               |
| J3, J6, J7             |     3 | 3-pin headers                                               |
| Q1                     |     1 | p-channel FET IRF IRFR9110                                  |
| R1, R6                 |     2 | 150 Ω ±1% resistors (0805)                                  |
| R2                     |     1 | 39.2k Ω ±1% resistor (0805)                                 |
| R3                     |     1 | 64.9k Ω ±1% resistor (0805)                                 |
| R4                     |     1 | 76.8k Ω ±1% resistor (0805)                                 |
| R5                     |     1 | 301k Ω ±1% resistor (0805)                                  |
| R7, R8, R9             |     3 | 100k Ω ±1% resistors (0805)                                 |
| R10                    |     1 | 475 Ω ±1% resistor (1206)                                   |
| S1                     |     1 | Momentary tact switch, SPST                                 |
| U1                     |     1 | MAX6791TPLD2+                                               |
| -                      |    12 | Shunts, 2-position (see the Jumper Function Tables section) |
| -                      |     1 | MAX6791 EV kit PC board                                     |

** Optional; not installed.

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          | WEBSITE               |
|-------------------------|--------------|--------------|-----------------------|
| International Rectifier | 310-322-3331 | 310-322-3332 | www.irf.com           |
| TDK                     | 847-390-4373 | 847-390-4428 | www.component.tdk.com |
| Vishay                  | 402-563-6866 | 402-563-6296 | www.vishay.com        |

Note:

Indicate you are using the MAX6791-MAX6796 when contacting these manufacturers.

## MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6791 Evaluation Kit

## Quick Start

## Required Equipment

- Maxim MAX6791 EV kit
- An adjustable-output power supply capable of supplying at least 12V at 500mA

## Procedures

- 1) Make sure that jumpers J1, J2, J4, J5, and J8-J12 are shorted. Make sure jumpers J3, J6, and J7 are in the 2-3 position.
- 2) Connect the power supply to the IN1 and GND connections located at the top of the board.
- 3) Set the power-supply output to 12V and observe LED1 and LED2.

## Detailed Description

The MAX6791 EV kit operates from 5V to 72V and provides two regulator outputs, OUT1 and OUT2. OUT1 outputs 5.0V and can be adjusted, and OUT2 is fixed at 5.0V. Each regulator can source up to 150mA, subject  to  thermal  dissipation  limits.  Each  regulator  also has an individual enable input, and OUT1 has a HOLD input that allows the regulator to stay on even when its enable signal is deasserted.

Other features include a built-in watchdog timer that provides µP supervisory functions and a power-fail comparator that senses undervoltage conditions. An onboard p-channel FET provides reverse-battery protection.

## Reverse-Battery Protection

To prevent a reversed battery from damaging a circuit, a diode is sometimes inserted in series with the power supply. Since the diode adds an undesirable voltage drop to the circuit, a p-channel FET is often used instead. The MAX6791 EV kit includes a p-channel FET; to  use  this  feature,  connect  input  power to IN2. To bypass the reverse-battery protection, connect input power to IN1.

## Voltage Regulator Outputs

OUT1 provides regulated DC at a voltage set by jumper J3, which selects either the fixed output voltage (5.0V) or the output voltage set by resistive divider R2/R3. The default resistor values set the output voltage at  3.3V,  but  they  can  easily  be  changed  according to the following equation:

<!-- formula-not-decoded -->

where VSET = 1.2315V and both R3 and R2 ≤ 200k Ω . When changing the output voltage, ensure R1 is selected correctly to limit the current through LED1.

OUT2 provides a fixed voltage of 5V, which cannot be adjusted.

## Enable and Hold Function

Each regulator has an enable connection that can be used to shut off a regulator. OUT1 also has a HOLD input that is connected to button S1. When the button is held down and enable jumper J1 is subsequently removed, the regulator remains on. LED1 also remains on because it indicates the state of OUT1. Likewise, LED2 indicates the state of OUT2.

## Reset Timeout

The reset output remains asserted for a certain minimum period that is controlled by J5 and C5. If J5 is shorted, the reset period is the default of 12.5ms. If J5 is  open, capacitor C5 sets the timeout period to 26.8ms, but this can easily be changed using the following equation:

<!-- formula-not-decoded -->

where tRP is in seconds and C5 is in Farads. Refer to the MAX6791-MAX6796 data sheet for more information on capacitor selection.

## Watchdog Timer

The watchdog timer asserts RESET if  WDI  does not toggle within the watchdog timeout window. The watchdog timeout period defaults to 400ms, unless jumper J4 is removed, in which case the watchdog timeout period is  set  by  C4.  The  provided  capacitor  sets  the  timeout period at 233ms, but this can be changed by setting C4 according to the following equation:

<!-- formula-not-decoded -->

where tWD is in seconds and C4 is in Farads. The watchdog timer also provides a fast watchdog timeout; if  WDI  toggles  faster  than  the  fast  watchdog  timeout period, the watchdog timer asserts RESET .  The  fast watchdog timeout period is set as a ratio of the watchdog timeout period, and this ratio is selected using jumpers J6 and J7 (see Table 2). To calculate the fast watchdog period, divide the watchdog period by the ratio selected by the two jumpers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

For the watchdog timer to operate, the primary regulator must supply at least 13.8mA. When R10 and LED1 are enabled by J2, they draw enough current to enable the watchdog timer. For OUT1 voltages greater than 5V, resistor R1 will need to be replaced with a larger value to limit the power dissipation in LED1. Remove jumper J2 to disable the watchdog and LED1.

Another way to disable the watchdog timer is to set jumpers J6 and J7 to positions 2-3 and 1-2, respectively.

## Power-Fail Indicator

To indicate low input-voltage conditions, a resistive divider connects the input power to the PFI comparator inside the MAX6791. If the voltage drops below 6V, PFO asserts low. Remove jumper J8 to disable the power-fail feature. The threshold voltage may be changed by replacing R4 and R5 using the following equation:

<!-- formula-not-decoded -->

where VTHRESH = 1.231V. Refer to the MAX6791MAX6796 data sheet for more information.

<!-- image -->

## MAX6791 Evaluation Kit

## Jumper Function Tables

Table 1. Jumper Function Table (J1-J5, J8-J12)

| JUMPER   | POSITION   | FUNCTION                                                                              |
|----------|------------|---------------------------------------------------------------------------------------|
| J1       | Open       | OUT1 disabled                                                                         |
| J1       | Closed*    | OUT1 enabled                                                                          |
| J2       | Open       | OUT1 LED disabled (may also disable the watchdog timer-see text for more information) |
| J2       | Closed*    | OUT1 LED enabled                                                                      |
| J3       | 1-2        | OUT1 voltage set by R2 and R3 (3.3V)                                                  |
| J3       | 2-3*       | OUT1 is 5.0V                                                                          |
| J4       | Open       | Watchdog timeout set by C4 (233ms)                                                    |
| J4       | Closed*    | Watchdog timeout is 400ms                                                             |
| J5       | Open       | Reset timeout set by C5 (26.8ms)                                                      |
| J5       | Closed*    | Reset timeout is 12.5ms                                                               |
| J8       | Open       | PFI disabled                                                                          |
| J8       | Closed*    | PFI threshold set at 6V                                                               |
| J9       | Open       | RESET pullup resistor disconnected                                                    |
| J9       | Closed*    | RESET pullup resistor connected                                                       |
| J10      | Open       | PFO pullup resistor disconnected                                                      |
| J10      | Closed*    | PFO pullup resistor connected                                                         |
| J11      | Open       | OUT2 disabled                                                                         |
| J11      | Closed*    | OUT2 enabled                                                                          |
| J12      | Open       | OUT2 LED disabled                                                                     |
| J12      | Closed*    | OUT2 LED enabled                                                                      |

* Default configuration.

Table 2. Jumper Function Table (J6, J7)

| J7 SHUNT POSITION   | J6 SHUNT POSITION   | MIN/MAX WATCHDOG RATIO   |
|---------------------|---------------------|--------------------------|
| 2-3*                | 2-3*                | 8                        |
| 2-3                 | 1-2                 | 16                       |
| 1-2                 | 2-3                 | Watchdog disabled        |
| 1-2                 | 1-2                 | 64                       |

* Default configuration.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6791 Evaluation Kit

Figure 1. MAX6791 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6791 Evaluation Kit

<!-- image -->

Figure 2. MAX6791 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX6791 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6791 Evaluation Kit

Figure 4. MAX6791 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600