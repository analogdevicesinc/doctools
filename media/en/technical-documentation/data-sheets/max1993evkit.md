<!-- lastmod 2022-08-02 -->
## General Description

The MAX1993 evaluation kit (EV kit) demonstrates the MAX1993's standard 4A application circuit. This DC-toDC converter steps down high-voltage batteries and/or AC adapters, generating a precision, low-voltage rail for use as chipset, DRAM, and other low-voltage supplies.

The MAX1993 EV kit provides a dynamically adjustable 1.0V/1.5V output voltage from 7V to 24V battery input range. It  delivers  up  to  4A  output  current  with  greater than 90% efficiency. The EV kit operates at 300kHz switching frequency and has superior line- and loadtransient response.

This EV kit is a fully assembled and tested circuit board. It also allows the evaluation of other dynamically adjustable output voltages in the 0.7V to 5.5V range by changing R6, R7, and R8 resistors.

This EV kit can also be used to evaluate the MAX1992, which has preset 1.8V/2.5V output voltages.

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1            |     1 | 10µF, 25V ceramic capacitor (1812) Taiyo Yuden TMK432BJ106KM or TDK C4532X5R1E106M      |
| C2            |     1 | 270µF, 2.5V, 9m Ω low-ESR capacitor Sanyo 2R5TPE220M9                                   |
| C3, C7        |     2 | 1µF, 10V X5R ceramic capacitors (0805) Taiyo Yuden LMK212BJ105KG or TDK C2012X5R105M    |
| C4            |     1 | 0.1µF ceramic capacitor (0603)                                                          |
| C5            |     1 | 470pF ceramic capacitor (0603)                                                          |
| C6            |     1 | 0.22µF, 16V X5R ceramic capacitor (0805) Taiyo Yuden EMK212BJ224KG                      |
| C8            |     1 | 1000pF ceramic capacitor (0603)                                                         |
| C9            |     1 | 10µF, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M or Taiyo Yuden AMK212BJ106MG |
| C10, C11, C12 |     0 | Not installed (0603)                                                                    |
| D1            |     1 | 1A, 30V Schottky diode Nihon EP10QY03 or Nihon EC10QS03                                 |
| D2            |     1 | 100mA, 30V Schottky diode Central Semiconductor CMPSH-3                                 |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                                           |

<!-- image -->

## Features

- ♦ 7V to 24V Input Voltage Range
- ♦ Preset 1.8V/2.5V Output Voltages (Adjustable from 0.7V to 5.5V, MAX1992)
- ♦ Dynamically Selectable Output Voltages 1.0V/1.5V (Adjustable from 0.7V to 5.5V, MAX1993)
- ♦ 4A Output Current
- ♦ 300kHz Switching Frequency
- ♦ Selectable Inductor Saturation Protection
- ♦ Power-Good Output
- ♦ Selectable Overvoltage/Undervoltage Protection
- ♦ Low-Profile Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE            |
|--------------|--------------|-----------------------|
| MAX1993EVKIT | 0°C to +70°C | 24 Thin QFN 4mm × 4mm |

## Component List

| DESIGNATION               |   QTY | DESCRIPTION                                                                   |
|---------------------------|-------|-------------------------------------------------------------------------------|
| JU4                       |     1 | 4-pin header                                                                  |
| L1                        |     1 | 2.5µH, 7.5A power inductor Sumida CDRH104R-2R5                                |
| N1A, N1B                  |     2 | Dual N-channel MOSFETs Fairchild FDS6982A                                     |
| R1, R11, R12, R22         |     4 | 0 Ω resistors (0603)                                                          |
| R2, R3, R13-R17, R20, R21 |     0 | Not installed (0603)                                                          |
| R4                        |     1 | 100k Ω ±1% resistor (0603                                                     |
| R5                        |     1 | 49.9k Ω ±1% resistor (0603)                                                   |
| R6, R7                    |     2 | 75k Ω ±1% resistors (0603)                                                    |
| R8                        |     1 | 150k Ω ±1% resistor (0603)                                                    |
| R9                        |     1 | 100k Ω ±5% resistor (0603)                                                    |
| R10                       |     1 | 20 Ω ±5% resistor (0805)                                                      |
| R18                       |     1 | 0.015 Ω ±1%, 1/2W resistor (2010) IRC LR2010-01-R015-F or Dale WSL-2010-R015F |
| R19                       |     0 | Not installed (short PC trace) (0805)                                         |
| U1                        |     1 | MAX1993ETG (24-pin thin QFN)                                                  |
| None                      |     4 | Shunts                                                                        |
| None                      |     4 | Rubber feet                                                                   |
| None                      |     1 | MAX1993 PC board                                                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1993 Evaluation Kit

## Quick Start

- 1) Ensure that the circuit is connected correctly to the supplies and dummy load prior to applying any power.
- 2) Verify  that  the  shunts  are  across  JU1  pins  1  and  2 ( SHDN high), JU2 pins 1 and 2 (forced PWM), JU3 pins 2 and 3 (1.5V output), and JU4 pins 1 and 2 (OVP/UVP enabled).
- 3) Turn on battery power prior to +5V bias power; otherwise, the output UVLO timer times out and the FAULT latch is set, disabling the regulator until +5V power is cycled or shutdown is toggled.
- 4) Observe the 1.5V output with the DMM and/or oscilloscope. Look at the LX switching node and MOSFET gate-drive signals while varying the load current.

## Detailed Description

## Jumper Settings Evaluating Other Dynamic Output

## Voltages

The EV kit output is preset to 1.0V/1.5V. However, the output voltage can also be adjusted between 0.7V and 2V (FB = OUT) by selecting R6, R7, and R8 values. The

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 516-435-1110 | 516-435-1824 | www.centralsemi.com   |
| Dale-Vishay           | 402-564-3131 | 402-563-6296 | www.vishay.com        |
| IRC                   | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Fairchild             | 408-721-2181 | 408-721-1635 | www.fairchildsemi.com |
| Nihon                 | 847-843-7500 | 847-843-2798 | www.niec.co.jp        |
| Taiyo Yuden           | 408-573-4150 | 408-573-4159 | www.t-yuden.com       |
| TDK                   | 847-390-4373 | 847-390-4428 | www.component.tdk.com |
| Sanyo                 | 619-661-6835 | 619-661-1055 | www.sanyovideo.com    |
| Sumida                | 708-956-0666 | 708-956-0702 | www.sumida.com        |

Note: Please indicate that you are using the MAX1993 when contacting these component suppliers.

## Required Equipment

- 7V to 24V, power supply, battery, or notebook AC adapter
- DC bias power supply, 5V at 100mA
- Dummy load capable of sinking 4A
- Digital multimeter (DMM)
- 100MHz dual-trace oscilloscope

## Table 1. Jumper JU1 Functions (Shutdown Mode)

| JU1               | SHDN PIN                                                         | MAX1993 OUTPUT                                               |
|-------------------|------------------------------------------------------------------|--------------------------------------------------------------|
| 1 and 2 (default) | Connected to V CC                                                | MAX1993 enabled                                              |
| 2 and 3           | Connected to GND                                                 | Shutdown mode                                                |
| Not installed     | SHDN must be driven by an external signal; connected to SHDN pad | MAX1993 operation depends on the external SHDN signal levels |

## Table 2. Jumper JU2 Functions (Low-Noise Mode)

| JU2               | SKIP PIN          | OPERATIONAL MODE                                                                                                        |
|-------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------|
| 1 and 2 (default) | Connected to V CC | Low-noise mode, forced- PWM operation                                                                                   |
| 2 and 3           | Connected to GND  | Normal operation; allows automatic PWM/PFM switchover for pulse skipping at light load, resulting in highest efficiency |

MAX1993 regulates FB to the voltage set at REFIN. By changing the voltage at REFIN, the MAX1993 can be used in applications that require dynamic output-voltage changes between two set points. Using the GATE signal and open-drain output (OD), a resistor can be switched in and out of the REFIN resistor-divider, changing the voltage at REFIN. A logic high on GATE turns on the internal N-channel MOSFET, forcing OD to a low-impedance state. A low logic on GATE disables the N-channel MOSFET, so OD is high impedance. The

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 3. Jumper JU3 Functions (GATEMAX1993 Only)

| JU3               | GATE PIN                                                         | MAX1993 OUTPUT                                                                                          |
|-------------------|------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| 1 and 2           | Connected to V CC                                                | A logic high on GATE turns on the internal MOSFET, pulling OD to ground, V OUT = 1.0V.                  |
| 2 and 3 (default) | Connected to GND                                                 | A logic low on GATE turns off the internal MOSFET so that OD appears as a high impedance, V OUT = 1.5V. |
| Not installed     | GATE must be driven by an external signal; connected to GATE pad | V OUT depends on the external GATE signal levels.                                                       |

Table 4. Jumper JU4 Functions (Overvoltage/Undervoltage Protection Selection)

| JU4               | OVP/UVP PIN       | UVP                                              | OVP/DISCHARGE MODE                                |
|-------------------|-------------------|--------------------------------------------------|---------------------------------------------------|
| 1 and 2 (default) | Connected to V CC | UVP is enabled; UVP threshold is 70% of nominal. | OVP is enabled; OVP threshold is 116% of nominal. |
| 1 and 3           | Connected to REF  | UVP is enabled.                                  | OVP and discharge mode are disabled.              |
| 1 and 4           | Connected to GND  | UVP is disabled.                                 | OVP and discharge mode are disabled.              |
| Not installed     | Floating          | UVP is disabled.                                 | OVP and discharge mode are enabled.               |

Note: The MAX1993 detects and latches the discharge mode state set by OVP/UVP on startup.

two output voltages (FB = OUT) are determined by the following equations:

<!-- formula-not-decoded -->

VOUT(HIGH) = VREF (R7 + R8)/(R6 + R7 + R8) where VREF = 2.0V.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1993 Evaluation Kit

Table 5. Jumper JU5 Functions (Switching-Frequency Selection)

| JU5                     | TON PIN           | FREQUENCY (kHz)   |
|-------------------------|-------------------|-------------------|
| 1 and 2                 | Connected to V CC | 200               |
| 1 and 3                 | Connected to REF  | 450               |
| 1 and 4                 | Connected to GND  | 600               |
| Not installed (default) | Floating          | 300 (as shipped)  |

Note: Do not change the operating frequency without first recalculating component values, because the frequency has a significant effect on preferred inductor value, peak current-limit level, MOSFET heating, PFM/PWM switchover point, output noise, efficiency, and other critical parameters.

Refer to the MAX1993 data sheet for selection of output capacitor and inductor values for output voltages greater than 2V.

## Evaluating the MAX1992

This EV kit can also be used to evaluate the MAX1992 by following these steps:

- 1) Remove the MAX1993 and install the MAX1992.
- 2) Short pin 21 (AGND) to pin 20 (PGND) at the IC pins.
- 3) Remove the shunt from JU3 (GATE open).
- 4) Install resistors R1 and R2 for the desired output voltage.

The MAX1992 provides a fixed 1.8V output when FB is connected to VCC (R3 = short, R1 and R2 = open) or a fixed 2.5V output when FB is connected to GND (R2 = short, R1 and R3 = open).

The output voltage can also be adjusted from 0.7V to 5.5V using a resistive voltage-divider formed by R1 and R2. The MAX1992 regulates FB to a fixed reference voltage (0.7V).

The adjusted output voltage is:

<!-- formula-not-decoded -->

where VFB = 0.7V.

Refer to the MAX1992 data sheet for selection of output capacitor and inductor values for different output voltages.

## MAX1993 Evaluation Kit

Figure 1. MAX1993 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX1993 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1993 EV Kit PC Board Layout-GND Layer 2

<!-- image -->

## MAX1993 Evaluation Kit

Figure 3. MAX1993 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1993 EV Kit PC Board Layout-GND Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1993 Evaluation Kit

Figure 6. MAX1993 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 7. MAX1993 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

<!-- image -->