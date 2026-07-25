<!-- lastmod 2022-08-05 -->
## General Description

The MAX1553 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) with two complete circuits for evaluating the MAX1553 and MAX1554 white LED step-up converters. The MAX1553 circuit  operates from 2.7V to 5.5V and delivers an adjustable 0 to 20mA to drive up to six white LEDs connected in series. The MAX1554 circuit operates from 3.15V to 5.5V and delivers an adjustable 0 to 20mA for driving up to 10 white LEDs in series.

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1            |     1 | 4.7µF ± 10%, 6.3V X5R capacitor (0603) Panasonic ECJ1VB0J475K or equivalent               |
| C2, C7        |     2 | 0.47µF ± 20%, 50V X7R capacitors (1206) TDK C3216X7R1H474M or equivalent                  |
| C3, C6        |     2 | 0.1µF ± 10%, 50V X7R capacitors (0603) TDK C1608X7R1H104K or equivalent                   |
| C4, C5        |     0 | Not installed, ceramic capacitors                                                         |
| C8            |     1 | 10µF ± 20%, 6.3V X5R capacitor (0805) Panasonic ECJ2FB0J106M or Taiyo Yuden JMK212BJ106MG |
| C9            |     1 | 4700pF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H472K or equivalent           |
| C10           |     1 | 3300pF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H332K or equivalent           |

<!-- image -->

## Features

- ♦ Constant-Current Regulation for Even LED Illumination
- ♦ Up to 88% Efficiency Driving Six LEDs
- ♦ Analog or PWM Dimming Control of LED Intensity
- ♦ Small, Low-Profile Components
- ♦ 2.7V to 5.5V Input Range
- ♦ Tiny TDFN 3mm x 3mm IC Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE    | IC PACKAGE         |
|---------------|---------------|--------------------|
| MAX1553EVKIT+ | 0°C to +70°C* | 8 TDFN (3mm x 3mm) |

## Component List MAX1553 Circuit

| DESIGNATION   |   QTY | DESCRIPTION                                    |
|---------------|-------|------------------------------------------------|
| D1            |     1 | 30V Schottky diode (SOD-123) Toshiba CRS02     |
| D2-D17        |    16 | White LEDs Nichia NSCW215T                     |
| D18           |     1 | 60V, 1A Schottky diode (SMA) Central CMSH1-60M |
| JU1, JU9      |     2 | 2-pin headers                                  |
| JU2, JU8      |     2 | 3-pin headers                                  |
| JU3           |     0 | Not installed, PCB open                        |
| JU4-JU7       |     0 | Not installed, PCB short                       |
| L1            |     1 | 33µH inductor TOKO #A920CY-330M (D62CB)        |
| L2            |     1 | 15µH inductor TOKO #A920CY-150M (D62CB)        |
| R1, R6        |     2 | 10.0 Ω ± 1% resistors (0603)                   |
| R2            |     1 | 200k Ω ± 5% resistor (0603)                    |
| R3, R4        |     2 | 10k Ω ± 5% resistors (0603)                    |
| R5            |     1 | 330k Ω ± 5% resistor (0603)                    |
| U1            |     1 | MAX1553ETA+ (8-pin TDFN)                       |
| U2            |     1 | MAX1554ETA+ (8-pin TDFN)                       |
| -             |     4 | Shunts, 2-position                             |
| -             |     1 | PCB: MAX1553 Evaluation Kit+                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX1553 Evaluation Kit

## Component Suppliers

| SUPPLIER                      | PHONE        | WEBSITE               |
|-------------------------------|--------------|-----------------------|
| Central Semi- conductor Corp. | 631-435-1110 | www.centralsemi.com   |
| Kamaya, Inc.                  | 260-489-1533 | www.kamaya.com        |
| Murata Mfg. Co., Ltd.         | 770-436-1300 | www.murata.com        |
| Nichia Corp.                  | 248-352-6575 | www.nichia.com        |
| Panasonic Corp.               | 800-344-2112 | www.panasonic.com     |
| Sumida Corp.                  | 847-545-6700 | www.sumida.com        |
| Taiyo Yuden                   | 800-438-2496 | www.t-yuden.com       |
| TDK Corp.                     | 847-803-6100 | www.component.tdk.com |
| TOKO                          | 847-297-0070 | www.toko.com          |

Note: Indicate that you are using the MAX1553/MAX1554 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Power supply capable of providing 2.7V to 5.5V at up to 1A.

## Procedure-MAX1553 Circuit

The MAX1553 EV kit is fully assembled and tested. Follow the steps below to verify board operation of the MAX1553 circuit. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that the pins of JU1 are shorted.
- 2) Verify that the pins of JU2 are shorted across pins 2-3.
- 3) Preset the power supply to between 2.7V and 5.5V.
- 4) Turn off the power supply.
- 5) Connect positive power-supply terminal to the pad on the EV kit labeled IN1.
- 6) Connect power-supply ground terminal to the pad on the EV kit labeled GND1.
- 7) Turn on the power supply and verify that the LEDs are lit.

## Procedure-MAX1554 Circuit

Follow the steps below to verify board operation of the MAX1554 circuit. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that the pins of JU9 are shorted.
- 2) Verify that the pins of JU8 are shorted across pins 2-3.
- 3) Preset the power supply to between 3.15V and 5.5V.
- 4) Turn off the power supply.
- 5) Connect the positive power-supply terminal to the pad on the EV kit labeled IN2.
- 6) Connect the power-supply ground terminal to the pad on the EV kit labeled GND2.
- 7) Turn on the power supply and verify that the LEDs are lit.

## Detailed Description Evaluating the MAX1553

## Shutdown

To place the part in low-power shutdown mode, short pins 1-2 of JU2. For normal operation, short pins 2-3 of JU2.

## Controlling LED Intensity

LED intensity can be controlled using the BRT1 input. BRT1 can be used either as an analog or digital input. When using BRT1, remove the shunt from JU1. Connect a 0 to 1.72V voltage source to BRT1, where 0V corresponds to the dimmest setting and 1.72V is full brightness. Ground the voltage source to AGND1. A digital PWM signal (100Hz to 10kHz) can also be connected directly to BRT1. In this case, 0% duty cycle corresponds to the dimmest setting and 100% corresponds to the brightest.

## Changing the Number of LEDs

The MAX1553 can be used to drive two to six LEDs, and the MAX1553 EV kit comes configured for driving six LEDs. To evaluate the MAX1553 driving fewer than six LEDs, short the pads of the unused LEDs. For convenience, JU3 can be used to short LEDs D2 and D3 for four LED operation.

## Connecting External LEDs to the EV Kit

Surface-mount white LEDs come installed on the EV kit, but it can also be connected to an external LED string. To connect external LEDs, cut the trace shorting JU4. Then, connect the anode of the series string to OUT1+ and connect the cathode of the series string to OUT1-.

## Using Separate Supplies to Power the IC and Boost

In some applications, the MAX1553 IC and the boost inductor are powered from different supplies. For example, the IC can be powered with a 3.3V logic supply and the boost inductor can be connected to a battery. This is useful if the battery voltage is lower than the operating range of the MAX1553.

To use different supplies for the IC and boost, cut the trace shorting JU5 on the solder side of the EV kit, then install a 0.1µF ceramic capacitor in C4. Connect a 2.7V to 5.5V power supply to VCC1 to power the IC. Connect another power supply to IN1 (the voltage range is not limited to the IC supply range). Ground both power supplies at GND1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluating the MAX1554

## Shutdown

To place the part in low-power shutdown mode, short pins 1-2 of JU8. For normal operation, short pins 2-3 of JU8.

## Controlling LED Intensity

LED intensity can be controlled using the BRT2 input. BRT2 can be used either as an analog or digital input. When using BRT2, remove the shunt from JU9. Connect a 0 to 1.72V voltage source to BRT2, where 0V corresponds to the dimmest setting and 1.72V is full brightness. Ground the voltage source to AGND2. A digital PWM signal (100Hz to 10kHz) can also be connected directly to BRT2. In this case, 0% duty cycle corresponds to the dimmest setting and 100% corresponds to the brightest.

## Table 1. MAX1553 Circuit Jumper Functions

| JUMPER   | FUNCTION                                                                                                      | DEFAULT SETTING                      |
|----------|---------------------------------------------------------------------------------------------------------------|--------------------------------------|
| JU1      | Connects V CC to BRT when no separate BRT control signal is used.                                             | Shorted.                             |
| JU2      | EN Control. Jumper pin 1 to pin 2 for shutdown. Jumper pin 2 to pin 3 for enable.                             | Jumper 2 to 3. Enabled.              |
| JU3      | Bypasses two of the six LEDs for four LED testing.                                                            | Open. Six LED operation.             |
| JU4      | Connects on-board LEDs. Cut the PCB trace to power other LEDs.                                                | Shorted for on-board LEDs.           |
| JU5      | The PCB trace connects V CC to IN for single-supply operation. Cut the trace to separately power V CC and IN. | Shorted for single-supply operation. |

## Table 2. MAX1554 Circuit Jumper Functions

| JUMPER   | FUNCTION                                                                                                  | DEFAULT SETTING                      |
|----------|-----------------------------------------------------------------------------------------------------------|--------------------------------------|
| JU6      | PCB trace connects V CC to IN for single-supply operation. Cut the trace to separately power V CC and IN. | Shorted for single-supply operation. |
| JU7      | Connects on-board LEDs. Cut the PCB trace to power other LEDs.                                            | Shorted for on-board LEDs.           |
| JU8      | EN Control. Jumper pin 1 to pin 2 for shutdown. Jumper pin 2 to pin 3 for enable.                         | Jumper 2 to 3. Enabled.              |
| JU9      | Connects V CC to BRT when no separate BRT control signal is used.                                         | Shorted.                             |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1553 Evaluation Kit

## Changing the Number of LEDs

The MAX1554 can be used to drive up to 10 LEDs. If fewer than 10 LEDs are used, short the pads of the unused LEDs.

## Connecting External LEDs to the EV Kit

To connect external LEDs, cut the trace shorting JU7, then connect the anode of the series string to OUT2+ and connect the cathode of the series string to OUT2-.

## Using Separate Supplies to Power the IC and Boost

To use different supplies for the IC and boost, cut the trace shorting JU6 on the solder side of the EV kit; then, install a 0.1µF ceramic capacitor in C5. Connect a 2.7V to 5.5V power supply to VCC2 to power the IC. Connect another power supply to IN2 (voltage range is not limited to the IC supply range). Ground both power supplies at GND2.

## MAX1553 Evaluation Kit

Figure 1. MAX1553 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1553 Evaluation Kit

<!-- image -->

Figure 2. MAX1553 EV Kit Component Placement-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1553 Evaluation Kit

Figure 3. MAX1553 EV Kit Component Placement-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1553 Evaluation Kit

<!-- image -->

Figure 4. MAX1553 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1553 Evaluation Kit

Figure 5. MAX1553 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1, 2, 3, 5

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8