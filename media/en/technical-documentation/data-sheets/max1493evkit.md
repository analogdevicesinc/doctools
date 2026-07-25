<!-- lastmod 2022-08-03 -->
## General Description

The MAX1493 is a low-power, 4.5-digit analog-to-digital converter (ADC) with integrated liquid-crystal display (LCD) drivers.

The MAX1493 evaluation kit (EV kit) provides a proven printed-circuit  board (PCB) layout to facilitate evaluation of the MAX1493 IC. Connect the 4V to 28V DC and ground return to terminal block TB1 (see Figure 1).

The EV kit is not a complete digital voltmeter (DVM); additional input scaling and protection circuitry might be required.

This EV kit can also evaluate the MAX1495CCJ+. Contact the factory for free samples. See the Evaluating the MAX1495 section for additional information.

| DESIGNATION                   |   QTY | DESCRIPTION                                                       |
|-------------------------------|-------|-------------------------------------------------------------------|
| C1, C2                        |     2 | 10µF ±20%, 10V X5R ceramic capacitors (1210) TDK C3225X7R1C106M   |
| C3-C6                         |     4 | 0.47µF ±10%, 16V X7R ceramic capacitors (0805) TDK C2012X7R1C474K |
| C7, C8, C9                    |     3 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K  |
| FB1                           |     1 | Ferrite bead (0805) Murata BLM21AH102SN1                          |
| JU1-JU4, JU7, JU8, JU10, JU11 |     8 | 3-pin headers                                                     |
| JU5, JU6, JU9                 |     3 | 2-pin headers                                                     |
| LCD1                          |     1 | Triplexed LCD, MAX1494 type DCI Inc. 04-0925-00                   |

<!-- image -->

Features

- ♦ Reference Design
- ♦ Proven PCB Layout
- ♦ Complete Evaluation System
- ♦ Convenient On-Board Test Points
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX1493EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| LCD1 (2 rows) |     2 | 15-pin socket headers                                                 |
| R1            |     1 | 133k Ω ±1% resistor (1206)                                            |
| R2            |     1 | 100k Ω ±1% resistor (1206)                                            |
| TB1           |     1 | 0.200in, 2-circuit screw terminal block                               |
| TP1-TP4       |     4 | 8-pin headers                                                         |
| U1            |     1 | Maxim 4.5-digit ADC MAX1493CCJ+ (32-pin TQFP, 7mm x 7mm)              |
| U2            |     1 | Maxim LDO linear regulator MAX1615EUK+ (5-pin SOT23) (Top Mark: ABZD) |
| U5            |     1 | Maxim voltage reference MAX6062AEUR+ (3-pin SOT23) (Top Mark: FZFY)   |
| -             |    12 | Shunts                                                                |
| -             |     1 | PCB: MAX1493 Evaluation Kit+                                          |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com        |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX1493 or MAX1495 when contacting these component suppliers.

1

## MAX1493 Evaluation Kit

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX1493 EV kit
- DC power supply, 4V to 28V DC @ 1mA

## Procedure

The MAX1493 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power until all connections are made.

- 1) Ensure that all jumpers are set to their factorydefault position (see Table 1 for jumper settings).
- 2) Turn on the power supply.
- 3) Apply an input signal in the range of -2V to +2V between AIN+ and AIN-. Observe the readout on the LCD display.
- 4) To configure the display for the +0.2V to -0.2V input range, move jumper JU3 to pins 2-3 and move jumper JU8 to pins 1-2.

## Detailed Description of Hardware

The MAX1493 device under test (U1) is a low-power, 4.5-digit analog-to-digital converter (ADC) with integrat- ed liquid-crystal display (LCD) drivers. The optional MAX6062 (U5) provides an improved-accuracy external reference voltage of 2.048V. See Figure 1 and refer to the MAX1491-MAX1495 IC data sheet.

The EV kit includes a MAX1615 3V/5V linear regulator (U2).

The EV kit is not a complete digital voltmeter (DVM); additional input scaling and protection circuitry might be required.

## Evaluating the MAX1495

The MAX1495 is similar to the MAX1493, but with the ability to enable offset calibration on demand. Refer to the MAX1491-MAX1495 IC data sheet. Request a free sample of MAX1495CCJ+ and follow the steps below to verify  board  operation. Caution: Do not turn on the power until all connections are made.

- 1) With power disconnected, replace U1 with the MAX1495.
- 2) Ensure that jumper JU1 selects 3V or 5V logic level, as desired.
- 3) Connect the DC power supply at terminal block TB1.
- 4) Turn on the power supply. The LCD display should begin indicating measurement data.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. Jumper Functions

| JUMPER   | SIGNAL   | SHUNT POSITION   | EV KIT FUNCTION                                           |
|----------|----------|------------------|-----------------------------------------------------------|
| JU1      | DVDD     | 1-2*             | DVDD = 5V                                                 |
| JU1      | DVDD     | 2-3              | DVDD = 3V                                                 |
| JU2      | DPON     | 1-2*             | DPON = DVDD: Enable decimal point                         |
| JU2      | DPON     | 2-3              | DPON = GND: Disable decimal point                         |
| JU3      | DPSET1   | 1-2*             | DPSET1 = DVDD. Controls the decimal point of the LCD**    |
| JU3      | DPSET1   | 2-3              | DPSET1 = GND. Controls the decimal point of the LCD**     |
| JU4      | DPSET2   | 1-2*             | DPSET2 = DVDD. Controls the decimal point of the LCD**    |
| JU4      | DPSET2   | 2-3              | DPSET2 = GND. Controls the decimal point of the LCD**     |
| JU5      | REF-     | 1-2*             | REF- = GND                                                |
| JU5      | REF-     | Open             | REF- must be provided by user                             |
| JU6      | REF+     | 1-2*             | REF+ = 2.048V from U5 (MAX6062)                           |
| JU6      | REF+     | Open             | REF+ must be provided by user                             |
| JU7      | INTREF   | 1-2*             | INTREF = DVDD: Internal reference enabled                 |
| JU7      | INTREF   | 2-3              | INTREF = GND: External reference must be provided by user |
| JU8      | RANGE    | 1-2              | RANGE = DVDD: ±200mV input range                          |
| JU8      | RANGE    | 2-3*             | RANGE = GND: ±2V input range                              |
| JU9      | LOWBATT  | 1-2*             | LOWBATT input divider connected to EV kit power supply    |
| JU9      | LOWBATT  | Open             | LOWBATT input is independent of EV kit power supply       |
| JU10     | HOLD     | 1-2              | HOLD = DVDD: Hold the current ADC value on the LCD        |
| JU10     | HOLD     | 2-3*             | HOLD = GND: Normal operation                              |
| JU11     | PEAK     | 1-2              | PEAK = DVDD: Display the highest ADC value on the LCD     |
| JU11     | PEAK     | 2-3*             | PEAK = GND: Normal operation                              |

Table 2. Decimal Point Control

|   DECIMAL POINT LOCATION | JU2 (DPON)   | JU3 (DPSET1)   | JU4 (DPSET2)   | JU8 (RANGE)   | RECOMMENDED INPUT SCALING   |
|--------------------------|--------------|----------------|----------------|---------------|-----------------------------|
|                    18888 | 2-3          | -              | -              | -             | -                           |
|                   1888.8 | 1-2          | 2-3            | 2-3            | -             | -                           |
|                   188.88 | 1-2          | 2-3            | 1-2            | 1-2           | 1:1, input range ±0.2V      |
|                   18.888 | 1-2          | 1-2            | 2-3            | 2-3           | 10:1, input range ±20V      |
|                   1.8888 | 1-2          | 1-2            | 1-2            | 2-3           | 1:1, input range ±2V        |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1493 Evaluation Kit

## MAX1493 Evaluation Kit

Figure 1. MAX1493 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1493 Evaluation Kit

Figure 2. MAX1493 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1493 Evaluation Kit

Figure 3. MAX1493 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1493 Evaluation Kit

Figure 4. MAX1493 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7