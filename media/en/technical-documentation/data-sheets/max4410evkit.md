<!-- lastmod 2022-08-03 -->
## General Description

The MAX4410 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX4410 DirectDrive stereo headphone amplifier. DirectDrive eliminates the two large DC-blocking capacitors typically required between the output of the amplifier and the headphones. The MAX4410 EV kit is designed to be driven by the lineout of a CD player or directly connected to any stereo audio source. The MAX4410 EV kit includes RCA jacks on the input and a 3.5mm headphone jack on the output to facilitate easy connections to the circuit board.

<!-- image -->

## Features

- ♦ No DC-Blocking Capacitors Required
- ♦ 1.8V to 3.6V Single-Supply Operation
- ♦ 80mW Per Channel into 16 Ω
- ♦ 0.003% THD + N at 1kHz
- ♦ Low-Profile (1.2mm max) Design
- ♦ Ultra-Compact Solution
- ♦ Fully Assembled and Tested Surface-Mount Board
- ♦ Independent Left/Right Shutdown Controls

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX4410EVKIT | 0°C to +70°C | 14 TSSOP     |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| AVX         | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX4410 when contacting these component suppliers.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                 |
|---------------|-------|---------------------------------------------------------------------------------------------|
| A1            |     1 | MAX4410EBE (16-pin UCSP)                                                                    |
| C1, C2        |     2 | 1.0µF ±20%, 10V tantalum capacitors (R-Case) AVX TAJR105M010R                               |
| C3, C4        |     2 | 100pF ±5%, 50V C0G ceramic capacitors (0402) TDK C1005C0G1H101J                             |
| C5, C6, C7    |     3 | 2.2µF ±10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J225K Taiyo Yuden JMK107BJ225KA |
| C8            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M Taiyo Yuden JMK212BJ106MG   |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                  |
|---------------|-------|----------------------------------------------|
| J1            |     1 | Phono jack (side-entry PC board mount) white |
| J2            |     1 | Phono jack (side-entry PC board mount) red   |
| J3            |     1 | Stereo headphone jack (3.5mm dia.)           |
| JU1, JU2      |     2 | 3-pin headers                                |
| R1-R4         |     4 | 10k Ω ±1% resistors (0402)                   |
| None          |     2 | Shunts                                       |
| None          |     1 | MAX4410 EV kit PC board                      |
| None          |     1 | MAX4410 EV kit data sheet                    |
| None          |     1 | MAX4410 data sheet                           |
| U1            |     1 | MAX4410EUD (14-pin TSSOP)                    |

Note: A1 is for display purposes only (not a functional component).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4410 Evaluation Kit

## Quick Start

## Recommended Equipment

- One pair of 16 Ω or 32 Ω headphones
- One variable DC power supply capable of supplying between 1.8V and 3.6V at 300mA
- One stereo audio source

## Procedure

The MAX4410 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Plug the headphones into the 3.5mm headphone jack.
- 2) Ensure that the stereo audio source is turned off.
- 3) Connect the disabled stereo audio source through the RCA phono jacks.
- 4) Ensure that shunts JU1 and JU2 are installed in position 1-2.
- 5) Connect the 1.8V to 3.6V DC power supply to the VCC and GND pads.
- 6) Turn on the DC power supply.
- 7) Enable the stereo audio source.

## Detailed Description

The MAX4410 EV kit is a stereo, single-supply headphone amplifier. The MAX4410 EV kit is designed to be driven by the stereo lineout of a CD player or directly connected to any stereo audio source. The input impedance is 10k Ω .  The  -3dB  corner  frequencies are approximately 16Hz and 159kHz and are dependent on components R1-R4 and C1-C4. The MAX4410 EV kit has a gain of -1 and can be powered with a 1.8V to 3.6V supply.

## Shutdown Control

The MAX4410 EV kit provides two shutdown pins ( SHDNL , SHDNR ) to disable the outputs. Jumpers JU1 and JU2 control the left and right channels, respectively (see Table 1 for shutdown shunt positions).

Shorting pin 2 of JU1 to pin 2 of JU2 allows the user to control both channels' shutdown pins simultaneously by driving the provided user pad SHDN with  an  external source (see Figure 1 for shunt configuration). SHDNL and SHDNR are CMOS logic-level inputs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. Shutdown Selection

Figure 1. Simultaneous Shutdown Control

| JUMPER   | SHUNT POSITION   | DESCRIPTION            |
|----------|------------------|------------------------|
| JU1      | 1-2              | Left channel enabled   |
| JU1      | 2-3              | Left channel disabled  |
| JU2      | 1-2              | Right channel enabled  |
| JU2      | 2-3              | Right channel disabled |

<!-- image -->

## Layout Considerations

To optimize the audio performance of the MAX4410, it is  important to follow these layout guidelines. The MAX4410 EV kit uses two ground planes to minimize switching noise from the charge pump coupling into the audio signal. The two planes are star-connected at one point (GND pad). Capacitors C5, C6, and C7 should be placed close to the IC and connected with wide traces. Short, wide traces should be used to connect the power pins of the IC to the power supply.

<!-- image -->

## MAX4410 Evaluation Kit

<!-- image -->

Figure 2. MAX4410 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4410 Evaluation Kit

<!-- image -->

Figure 3. MAX4410 EV Kit Component Placement GuideComponent Side

Figure 4. MAX4410 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX4410 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600