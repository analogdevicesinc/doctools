<!-- lastmod 2022-08-05 -->
## General Description

The MAX9710 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX9710 stereo, 3W, bridge-tied load (BTL) audio power amplifier. The MAX9710 evaluation kit is designed to  operate from a single 4.5V to 5.5V supply and features a 0.5µA shutdown mode and a MUTE function to quickly enable or disable the MAX9710 BTL outputs.

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE      |
|--------------|------------------|-----------------|
| MAX9710EVKIT | 0 ° C to +70 ° C | 20 Thin QFN-EP* |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| C1, C3, C5    |     3 | 0.1µF ± 10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K Taiyo Yuden EMK107BJ104KA  |
| C2, C4, C6    |     3 | 1.0µF ± 10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J105K Taiyo Yuden JMK107BJ105KA |
| C7            |     1 | 100µF ± 20%, 6.3V X5R ceramic capacitor (1210) TDK C3225X5R0J107M Taiyo Yuden JMK325BJ107M   |
| R1, R2        |     2 | 10k Ω ± 1% resistors (0603)                                                                  |
| R3, R4        |     2 | 20k Ω ± 1% resistors (0603)                                                                  |
| JU1, JU2      |     2 | 3-pin headers                                                                                |
| U1            |     1 | MAX9710ETP (20-pin TQFN, 5mm x 5mm x 0.8mm)                                                  |
| None          |     2 | Shunts                                                                                       |
| None          |     1 | MAX9710 EV kit PC board                                                                      |

<!-- image -->

## Features

- ♦ 4.5V to 5.5V Single-Supply Operation
- ♦ 3W into 3 Ω Load (1% THD+N)
- ♦ 4W into 4 Ω Load (10% THD+N)
- ♦ Low 0.005% THD+N at 1kHz
- ♦ Industry-Leading, Ultra-High 100dB PSRR
- ♦ 7mA Low Quiescent Current
- ♦ 0.5µA Low-Power Shutdown Mode
- ♦ Mute Function
- ♦ Click-and-Pop Suppression
- ♦ Fully Assembled and Tested Surface-Mount Board

## Quick Start

## Recommended Equipment

- One pair of 3 Ω , 4 Ω , or 8 Ω speakers
- One variable DC power supply capable of supplying between 4.5V and 5.5V at 3A
- One stereo audio source (i.e., CD player, cassette player)

## Procedure

The MAX9710 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Ensure MUTE is connected to SGND.
- 2) Ensure SHDN is connected to VDD.
- 3) Connect a 3 Ω , 4 Ω , or 8 Ω speaker between OUT\_+ and OUT\_-.
- 4) Ensure that the stereo audio source is turned off.
- 5) Connect the disabled audio source between IN\_ and GND.
- 6) Connect the 4.5V to 5.5V DC power supply to the VDD and GND pads.
- 7) Turn on the DC power supply.
- 8) Enable the stereo audio source.

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX9710 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX9710 Evaluation Kit

## Detailed Description

The MAX9710 is an adjustable-gain, stereo Class AB speaker amplifier featuring ultra-high 100dB PSRR and ultra-low 0.005% THD+N. The device is capable of delivering 2 x 3W into a 3 Ω load and features shutdown and mute control, comprehensive click-and-pop suppression circuitry, and thermal-overload protection. The MAX9710 EV kit has a gain of -2V/V and can be powered with a 4.5V to 5.5V single supply.

## Shutdown and Mute Control

The MAX9710 EV kit provides jumpers JU1 and JU2 to control the shutdown and mute functions of the MAX9710, respectively (see Table 1 for shutdown and mute shunt positions).

## Table 1. Shutdown Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                     |
|----------|------------------|---------------------------------|
| JU1      | MUTE-SGND        | Right and left channels unmuted |
| JU1      | MUTE-VDD         | Right and left channels muted   |
| JU2      | SHDN -VDD        | IC enabled                      |
| JU2      | SHDN -SGND       | IC disabled, power- saving mode |

## Layout Considerations

To optimize the audio performance of the MAX9710, it is  important to follow these layout guidelines. The MAX9710 EV kit uses two ground planes to minimize the amount of noise that is coupled into the audio signal.  The  two  planes are star-connected at one point (GND pad). Capacitors C2, C4, C5, and C6 should be placed close to the IC. Short, wide traces should be used for power-supply inputs and amplifier outputs.

The MAX9710 thin QFN package features an exposed thermal pad on its underside. This pad lowers the thermal resistance of the package by providing a directheat conduction path from the die to the PC board. Connect the exposed pad to the ground plane using multiple vias, if  required.  For  optimum performance, connect to the ground planes as shown in Figure 1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. MAX9710 Audio Ground Connection

<!-- image -->

<!-- image -->

Figure 2. MAX9710 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9710 Evaluation Kit

<!-- image -->

Figure 3. MAX9710 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX9710 EV Kit Component Placement GuideSolder Side

Figure 4. MAX9710 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6. MAX9710 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600