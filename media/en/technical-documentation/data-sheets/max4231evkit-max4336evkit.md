<!-- lastmod 2022-08-03 -->
## General Description

The MAX4336 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX4336 audio amplifier. The MAX4336 EV kit is designed to be directly connected to any mono audio source, such as a CD player. The MAX4336 EV kit includes an RCA jack on the input and a 3.5mm headphone jack on the output to facilitate easy connections to the circuit board.

The MAX4336 EV kit can also be used to evaluate the MAX4231 high-output-drive, Rail-to-Rail ® op amp.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| C1            |     1 | 0.47µF ±10%, 20V tantalum capacitor (R-Case) AVX TAJR474M020R                                |
| C2            |     1 | 100pF ±10% C0G, 50V ceramic capacitor (0402) TDK C1005C0G1H101K                              |
| C3            |     1 | 0.1µF ±10%, 10V X5R ceramic capacitor (0402) TDK C1005X5R1A104K                              |
| C4            |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A105K                                |
| C5, C7        |     2 | 220µF ±10%, 10V tantalum capacitors (Y-CASE) AVX TPSY227M010R0200 or Sprague 592D227X0010V2T |

Rail-to-Rail is a registered trademark of Nippon Motorola, Ltd.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ♦ Capable of Driving a Mono 32 Ω Load (POUT = 60mW, VCC = 5V, THD + N = 1%, RL = 32 Ω , fIN = 1kHz) (POUT = 20mW, VCC = 3V, THD + N = 1%, RL = 32 Ω , fIN = 1kHz)
- ♦ Single-Supply Operation
- ♦ Low 0.1% THD + N (20Hz to 20kHz)

(VCC = 5V, POUT = 40mW, RL = 32 Ω )

(VCC = 3V, POUT = 17mW, RL = 32 Ω )

- ♦ Low-Profile Design (2.0mm, max)
- ♦ Fully Assembled and Tested
- ♦ On-Board Shutdown

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX4336EVKIT | 0°C to +70°C | 6 SC70-6     |

Note: To evaluate the MAX4231, request a MAX4231AXT free sample with the MAX4336EVKIT.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                  |
|----------------|-------|----------------------------------------------|
| C6             |     0 | Through-hole capacitor (not installed)       |
| J1             |     1 | Phono jack (side-entry PC board mount) black |
| J2             |     1 | Stereo headphone jack (3.5mm dia)            |
| JU1, JU2       |     2 | 2-pin headers                                |
| R1             |     1 | 22.1k Ω ±1% resistor (0603)                  |
| R2             |     1 | 47.5k Ω ±1% resistor (0603)                  |
| R3, R4, R5, R7 |     4 | 100k Ω ±5% resistors (0603)                  |
| R6             |     1 | Through-hole resistor (not installed)        |
| U1             |     1 | MAX4336EXT, 6-pin SC70                       |
| None           |     2 | Shunts                                       |
| None           |     1 | MAX4336 EV kit PC board                      |
| None           |     1 | MAX4335-MAX4338 data sheet                   |

Maxim Integrated Products

1

## MAX4336 Evaluation Kit

Required Equipment:

- One pair of 32 Ω headphones
- One variable DC power supply capable of supplying between 2.7V and 5V at 100mA
- One mono audio source

The MAX4336 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Plug the headphones into the 3.5mm headphone jack.
- 2) Ensure that the audio source is turned off.
- 3) Connect the disabled audio source using the single RCA phono jack.
- 4) Ensure that the shunts are in the following positions:
5. JU1: not installed JU2: not installed
- 5) Connect the 2.7V to 5V DC power supply to the VCC and GND pads.
- 6) Turn on the 2.7V to 5V DC power supply.
- 7) Turn on the audio source.

## Detailed Description

The MAX4336 EV kit is a mono, single-supply audio amplifier designed to be directly connected to any mono audio source, such as a CD player. The input impedance is 22.1k Ω . The -3dB corner frequencies are approximately 30Hz and 34kHz with a 32 Ω load. The MAX4336 EV kit has a fixed gain of approximately 2.1. An input signal of 700mVRMS, while using a 5V supply, produces a full-range output with a 32 Ω load. An input signal of 400mVRMS, while using a 3V supply, produces a full-range output with a 32 Ω load.

## Shutdown Control

The MAX4336 EV kit provides a SHDN pin to disable the output. Table 1 lists the options available for shutdown control jumper JU1. An external controller can be used by removing the shunt on JU1 completely and connecting the external controller to the pad labeled SHDN . SHDN is  a  TTL/CMOS logic-level input (see Table 1 for shunt positions).

## Table 1. Shutdown Jumper Table

| JUMPER   | SHUNT POSITION   | FUNCTION               |
|----------|------------------|------------------------|
| JU1      | Installed        | Shutdown mode enabled  |
| JU1      | Not installed    | Shutdown mode disabled |

## Shutdown Current Measurement

The MAX4336 EV kit has an active-low shutdown and uses a pullup resistor (R5) to activate this shutdown. Any shutdown current measurements should take into account the current being drawn through R5, as well as the current drawn through the bias resistors R3 and R4. This current can be calculated using the following equation:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

The maximum shutdown current of the MAX4336 is 0.5µA.

## Output Capacitor Jumper Selection

Jumper JU2 removes the output DC-blocking capacitor (C5) from the circuit. Inserting JU2 produces an output with a DC component equal to midrail (VCC/2) and changes the -3dB highpass corner frequency of 30Hz (see Table 2 for shunt positions).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| AVX        | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Sprague    | 402-563-6866 | 402-563-6296 | www.vishay.com        |
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX4336 when contacting these component suppliers.

## Quick Start

## Table 2. DC-Blocking Capacitor Jumper

| JUMPER   | SHUNT POSITION   | FUNCTION                |
|----------|------------------|-------------------------|
| JU2      | Installed        | C5 removed from circuit |
| JU2      | Not Installed    | C5 remains in circuit   |

## MAX4336 Evaluation Kit

## Through-Hole Components

The MAX4336 EV kit also provides pads for the user to solder up to two through-hole components onto the PC board (R6 and C6). This allows access for the user to test the op amp's capacitive- and resistive-load driving capabilities, without having to access the output of the op amp through the headphone jack.

<!-- image -->

Figure 1. MAX4336 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4336 Evaluation Kit

<!-- image -->

Figure 2. MAX4336 EV Kit Component Placement GuideComponent Side

Figure 3. MAX4336 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX4336 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600