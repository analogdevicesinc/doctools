<!-- lastmod 2022-08-02 -->
## General Description

The MAX1540 evaluation kit (EV kit) demonstrates the standard 5A application circuit of the MAX1540. This DC-DC converter steps down high-voltage batteries and/or AC adapters, generating precision low-voltage chipset, dynamic random access memory (DRAM), and input/output (I/O) power supplies for notebook computers.

The MAX1540 EV kit provides a fixed 1.8V output voltage (OUT1), a fixed 2.5V output voltage (OUT2), and a fixed 5V, 100mA linear regulator (LDOOUT) from the 7V to  24V battery input range. It delivers up to 5A output current for  each output voltage with greater than 90% efficiency. The EV kit operates at 355kHz/485kHz switching frequency (OUT2/OUT1, respectively) and has superior line- and load-transient response.

This EV kit is a fully assembled and tested circuit board. It  also allows the evaluation of other output voltages in the 0.7V to 5.5V range by changing resistors R21 and R22 for OUT1, and resistors R19 and R20 for OUT2.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                               |
|---------------|-------|-----------------------------------------------------------------------------------------------------------|
| C1            |     0 | Not installed (1812)                                                                                      |
| C2, C3        |     2 | 10µF, 25V ceramic capacitors (1812) Taiyo Yuden TMK432BJ106KM TDK C4532X7R1E106K                          |
| C4, C6        |     1 | 220µF, 4V, 25m Ω low-ESR capacitors Sanyo 4TPE220M                                                        |
| C5, C7        |     0 | Not installed (case D)                                                                                    |
| C9, C11, C18  |     3 | 1µF, 10V X7R ceramic capacitors (0603) Murata GRM188R61A105K Taiyo Yuden LMK107BJ105KA TDK C1608X5R1A105K |
| C10, C14, C17 |     3 | 0.1µF, 25V X7R ceramic capacitors (0603) Murata GRM188R71E104K TDK C1608X7R1E104K                         |
| C12           |     1 | 0.22µF, 16V X7R ceramic capacitor (0603) Taiyo Yuden EMK107BJ224KA TDK C1608X7R1C224K                     |
| C15           |     1 | 10µF, 10V tantalum capacitor (case B) AVX TAJB106M010 Kemet T491B106M010AS                                |

<!-- image -->

## Features

- ♦ 7V to 24V Input Voltage Range
- ♦ Fixed 2.5V and 1.8V Output Voltages (Adjustable from 0.7V to 5.5V)
- ♦ Fixed 5V/100mA Linear Regulator
- ♦ 5A Output Current for Each Output
- ♦ 355kHz (OUT2) and 485kHz (OUT1) Switching Frequency
- ♦ Selectable Inductor Saturation Protection
- ♦ Separate Power-Good Outputs
- ♦ Selectable Overvoltage/Undervoltage Protection
- ♦ Low-Profile Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE IC PACKAGE                  |
|--------------|----------------------------------------|
| MAX1540EVKIT | 0 ° C to +70 ° C 32 Thin QFN 5mm x 5mm |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C16           |     0 | Not installed (0805)                                                |
| C23           |     1 | 4.7µF, 25V X7R ceramic capacitor (1210) TDK C3325X7R1E475K          |
| C24, C25      |     0 | Not installed (0603)                                                |
| D1, D2        |     2 | 2A, 30V Schottky diodes Central Semiconductor CMSH2-40M             |
| D3            |     1 | 100mA, 30V, dual Schottky diode Central Semiconductor CMPSH-3A      |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                       |
| JU4, JU5      |     2 | 4-pin headers                                                       |
| L1            |     1 | 2.2µH, 7.5A power inductor Sumida CDRH105-2R2 Sumida CDEP104(L)-2R2 |
| L2            |     1 | 4µH, 6.2A power inductor Sumida CDEP105(S)-4R0                      |
| N1, N3        |     2 | n-channel MOSFETs (SO8) Fairchild FDS6612A                          |
| N2, N4        |     2 | n-channel MOSFETs (SO8) Fairchild FDS6670A                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX1540 Evaluation Kit

## Component List (continued)

| DESIGNATION                                           |   QTY | DESCRIPTION                                                                 |
|-------------------------------------------------------|-------|-----------------------------------------------------------------------------|
| R1, R2                                                |     2 | 0.010 Ω ±1%, 0.5W resistors (2010) IRC LR2010-01-R010-F Dale WSL-2010-R010F |
| R3                                                    |     1 | 20 Ω ±5% resistor (0603)                                                    |
| R4, R7, R10, R13, R16, R20, R22                       |     0 | Not installed (short PC trace) (0603)                                       |
| R5, R6, R8, R9, R11, R12, R17, R18, R19, R21, R23-R27 |     0 | Not installed (0603)                                                        |
| R14, R28                                              |     2 | 100k Ω ±5% resistors (0603)                                                 |
| R15                                                   |     0 | Not installed (short PC trace) (1206)                                       |
| U1                                                    |     1 | MAX1540ETJ (32-pin TQFN 5mm x 5mm)                                          |
| None                                                  |     1 | MAX1540 PC board                                                            |
| None                                                  |     5 | Shunts                                                                      |
| None                                                  |     4 | Rubber bumpers                                                              |

## Quick Start

## Equipment Needed

- 7V to 24V power supply, battery, or notebook AC adapter
- Dummy loads capable of sinking 5A
- Digital multimeters (DMMs)
- 100MHz dual-trace oscilloscope

## Procedure

- 1) Ensure that the circuit is connected correctly to the supplies and dummy load prior to applying any power.
- 1) Verify that the shunts are across:
- a) JU1 pins 1 and 2 (ON1 high), JU2 pins 1 and 2 (ON2 high)
- b) JU4 pins 1 and 2 ( SKIP high, forced PWM)
- c) JU5 pins 1 and 3 (TON = REF, 450kHz switching frequency)
- d) JU3 pins 1 and 2 (linear regulator enabled)
- 3) Turn on VIN, input/battery power supply.
- 4) Verify  that  the  output  voltages  are  VOUT1 = 1.8V, VOUT2 = 2.5V, and VLDOOUT = 5V.

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| AVX                   | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Central Semiconductor | 516-435-1110 | 516-435-1824 | www.centralsemi.com   |
| Dale-Vishay           | 402-564-3131 | 402-563-6296 | www.vishay.com        |
| Fairchild             | 408-721-2181 | 408-721-1635 | www.fairchildsemi.com |
| IRC                   | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Murata                | 770-436-1300 | 770-436-3636 | www.murata.com        |
| Nihon                 | 847-843-7500 | 847-843-2798 | www.niec.co.jp        |
| Sanyo                 | 619-661-6835 | 619-661-1055 | www.sanyovideo.com    |
| Sumida                | 708-956-0666 | 708-956-0702 | www.sumida.com        |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK                   | 847-390-4373 | 847-390-4428 | www.component.tdk.com |

Note: Indicate that you are using the MAX1540 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description

## Jumper Settings

## Table 1. Jumper JU1 Functions (Output-Voltage OUT1 Control)

| JU1               | ON1 PIN                                                            | OUT1                                                      |
|-------------------|--------------------------------------------------------------------|-----------------------------------------------------------|
| 1 and 2 (default) | Connected to LDOOUT.                                               | OUT1 enabled, V OUT1 = 1.8V.                              |
| 2 and 3           | Connected to GND.                                                  | OUT1 shutdown mode.                                       |
| Not installed     | ON1 must be driven by an external signal connected to the ON1 pad. | OUT1 operation depends on the external ON1 signal levels. |

## Table 2. Jumper JU2 Functions (Output-Voltage OUT2 Control)

| JU2               | ON2 PIN                                                            | OUT2                                                      |
|-------------------|--------------------------------------------------------------------|-----------------------------------------------------------|
| 1 and 2 (default) | Connected to LDOOUT.                                               | OUT2 enabled, V OUT2 = 2.5V.                              |
| 2 and 3           | Connected to GND.                                                  | OUT2 shutdown mode.                                       |
| Not installed     | ON2 must be driven by an external signal connected to the ON2 pad. | OUT2 operation depends on the external ON2 signal levels. |

Table 3. Jumper JU3 Functions (Linear-Regulator LDOOUT Control)

| JU3               | LDOON PIN                                   | LDOOUT                                                     |
|-------------------|---------------------------------------------|------------------------------------------------------------|
| 1 and 2 (default) | Connected to LDOIN through JU3.             | LDOOUT enabled, V LDOOUT = 5V.                             |
| 2 and 3           | Connected to GND.                           | LDOOUT shutdown mode.                                      |
| Not installed     | LDOON connected to voltage-divider R11/R12. | R11 and R12 set the LDOIN undervoltage- lockout threshold. |

<!-- image -->

## MAX1540 Evaluation Kit

## Table 4. Jumper JU4 Functions (Low-Noise Mode)

| JU4               | SKIP PIN             | OPERATIONAL MODE                                            |
|-------------------|----------------------|-------------------------------------------------------------|
| 1 and 2 (default) | Connected to LDOOUT. | Low-noise mode, OUT1 and OUT2 are in forced-PWM mode.       |
| 1 and 3           | Connected to REF.    | OUT1 is in pulse-skipping mode. OUT2 is in forced-PWM mode. |
| 1 and 4           | Connected to GND.    | OUT1 and OUT2 are in pulse- skipping mode.                  |
| Not installed     | Unconnected.         | OUT1 is in forced-PWM mode. OUT2 is in pulse-skipping mode. |

## Table 5. Jumper JU5 Functions (Switching-Frequency Selection)

| JU5               | TON PIN             | FREQUENCY (OUT1/OUT2) (kHz)   |
|-------------------|---------------------|-------------------------------|
| 1 and 2           | Connected to V CC . | 235/170                       |
| 1 and 3 (default) | Connected to REF.   | 485/355 (as shipped)          |
| 1 and 4           | Connected to GND.   | 620/460                       |
| Not installed     | Unconnected.        | 345/255                       |

Note: Do not change the operating frequency without first recalculating component values because the frequency has a significant effect on preferred inductor value, peak current-limit level, MOSFET heating, PFM/PWM switchover point, output noise, efficiency, and other critical parameters.

## Evaluating Other Fixed Output Voltages

The MAX1540 provides a fixed 1.8V output (OUT1) when FB1 is connected to GND (R21 = open, R22 = 0) and a fixed 2.5V output (OUT2) when FB2 is connected to GND (R19 = open, R20 = 0).

OUT1 and OUT2 can also be adjusted from 0.7V to 5.5V by using a resistive voltage-divider at FB1 and FB2. The MAX1540 regulates FB1 and FB2 to a fixed reference voltage (0.7V).

The adjusted output voltage is:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where: VFB1 = VFB2 = 0.7V.

Refer to the MAX1540/MAX1541 data sheet for selection of output capacitor and inductor values for various output voltages.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1540 Evaluation Kit

Figure 1. MAX1540 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX1540 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

## MAX1540 Evaluation Kit

Figure 3. MAX1540 EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1540 Evaluation Kit

Figure 4. MAX1540 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1540 EV Kit PC Board Layout-Ground Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 6. MAX1540 EV Kit PC Board Layout-Ground Layer 3

<!-- image -->

## MAX1540 Evaluation Kit

Figure 7. MAX1540 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7