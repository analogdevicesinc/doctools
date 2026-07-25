<!-- lastmod 2022-08-05 -->
## General Description

The MAX4338 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX4338 audio amplifier. The MAX4338 EV kit is designed to be driven by the lineout of a CD player or directly connected to any stereo audio source. The MAX4338 EV kit includes RCA jacks on the input and a 3.5mm headphone jack on the output to facilitate easy connections to the circuit board.

This MAX4338 EV kit can also be used to evaluate the MAX4233 high-output-drive, Rail-to-Rail ® op amp.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| C1, C3        |     2 | 100pF ±10%, 10V ceramic capacitors (0402) TDK C1005C0G1H101K                                 |
| C2, C4        |     2 | Through-hole capacitors (not installed)                                                      |
| C5, C6        |     2 | 0.47µF ±10%, 20V tantalum capacitors (R-case) AVX TAJR474M020R                               |
| C7            |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A104K                                |
| C8            |     1 | 0.1µF ±10%, 10V X5R ceramic capacitor (0402) TDK C1005X5R1A104K                              |
| C9, C10, C11  |     3 | 220µF ±10%, 10V tantalum capacitors (Y-case) AVX TPSY227M010R0200 or Sprague 592D227X0010V2T |

Rail-to-Rail is a registered trademark of Nippon Motorola, Ltd.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

- ♦ Capable of Driving a Stereo 32 Ω Load

(POUT = 60mW, VCC = 5V, THD + N = 1%, RL = 32 Ω , fIN = 1kHz)

(POUT = 20mW, VCC = 3V, THD + N = 1%, RL = 32 Ω , fIN = 1kHz)

- ♦ Single-Supply Operation
- ♦ Low 0.1% THD + N (20Hz to 20kHz)

(VCC = 5V, POUT = 40mW, RL = 32 Ω )

(VCC = 3V, POUT = 17mW, RL = 32 Ω )

- ♦ Low-Profile Design (2.0mm, max)
- ♦ Fully Assembled and Tested Surface-Mount Board
- ♦ On-Board Shutdowns

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX4338EVKIT | 0°C to +70°C | 10 µMAX      |

Note: To evaluate the MAX4233, request a MAX4233AUB free sample with the MAX4338EVKIT.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                  |
|---------------|-------|----------------------------------------------|
| J1            |     1 | Phono jack (side-entry PC board mount) red   |
| J2            |     1 | Phono jack (side-entry PC board mount) white |
| J3            |     1 | Stereo headphone jack (3.5mm dia.)           |
| JU1-JU5       |     5 | 2-pin headers                                |
| R1, R2        |     2 | 22.1k Ω ±1% resistors (0603)                 |
| R3, R4,       |     6 | 100k Ω ±5% resistors (0603)                  |
| R5, R6        |     2 | 47.5k Ω ±1% resistors (0603)                 |
| R7, R8        |     2 | Through-hole resistors (not installed)       |
| U1            |     1 | MAX4338EUB (10-pin µMAX)                     |
| None          |     5 | Shunts                                       |
| None          |     1 | MAX4338 EV kit PC board                      |
| None          |     1 | MAX4335-MAX4338 data sheet                   |

## MAX4338 Evaluation Kit

Required Equipment:

- One pair of 32 Ω headphones
- One variable DC power supply capable of supplying between 2.7V and 5V at 200mA
- One stereo audio source

The MAX4338 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Plug the headphones into the 3.5mm headphone jack.
- 2) Ensure that the audio source is turned off.
- 3) Connect the disabled audio source through the RCA phono jacks.
- 4) Ensure that the shunts JU1-JU5 are not installed.
- 5) Connect the 2.7V to 5V DC power supply to the VCC and GND pads.
- 6) Turn on the 2.7V to 5V DC power supply.
- 7) Turn on the audio source.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| AVX        | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Sprague    | 402-563-6866 | 402-563-6296 | www.vishay.com        |
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX4338 when contacting these component suppliers.

## Quick Start

## Detailed Description

The MAX4338 EV kit is a stereo, single-supply audio amplifier. The MAX4338 EV kit is designed to be driven by the stereo lineout of a CD player or directly connected to any stereo audio source. The input impedance is 22.1k Ω . The -3dB corner frequencies are approximately 30Hz and 34kHz with a 32 Ω load. The MAX4338 EV kit has a gain of approximately 2.1. An input signal of 700mVRMS, while using a 5V supply, produces a fullrange output with a 32 Ω load. An input signal of 400mVRMS, while using a 3V supply, produces a fullrange output with a 32 Ω load.

## Shutdown Control

The MAX4338 EV kit provides two SHDN pins to disable the left  and  right  outputs  independently. Jumpers JU1 and JU2 control the left and right channels. Jumper JU3 connects both the left channel and right channel SHDN pins together so that both channels can be shut down simultaneously. Table 1 lists the options available for  shutdown control. An external controller can be used by removing the shunts on JU1, JU2, JU3 and connecting the external controller to the pads labeled SHDN1 and SHDN2 . SHDN1 and SHDN2 are TTL/CMOS logic-level inputs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. Shutdown Selection

| JUMPER        | JUMPER        | JUMPER        | DESCRIPTION                     |
|---------------|---------------|---------------|---------------------------------|
| JU1           | JU2           | JU3           |                                 |
| Not Installed | Not Installed | Don't Care    | Left and right channels enabled |
| Installed     | Not Installed | Not Installed | Right channel disabled          |
| Not Installed | Installed     | Not Installed | Left channel disabled           |
| Installed     | Installed     | Don't Care    | channels disabled               |
| Installed     | Not Installed | Installed     | channels disabled               |
| Not Installed | Installed     | Installed     | channels disabled               |

## Shutdown Current Measurements

The MAX4338 EV kit has active-low shutdowns and uses pullup resistors (R9 and R10) to activate these shutdowns. Any shutdown current measurements should take into account the current being drawn through R9 and R10, as well as the current drawn through the bias resistors R3 and R4. This current can be calculated using the following equations (assumes both shutdowns are active):

<!-- formula-not-decoded -->

The maximum shutdown current of the MAX4338 is 0.5µA.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4338 Evaluation Kit

## Table 2. DC-Blocking Capacitor Jumpers

| JUMPER   | SHUNT POSITION   | FUNCTION                 |
|----------|------------------|--------------------------|
| JU4      | Installed        | C9 removed from circuit  |
| JU4      | Not Installed    | C9 remains in circuit    |
| JU5      | Installed        | C10 removed from circuit |
| JU5      | Not Installed    | C10 remains in circuit   |

## Output Capacitor Jumper Selection

Jumpers JU4 and JU5 removes the output DC-blocking capacitors (C9 and C10) from the circuit. This allows the user to drive a pure resistive load if desired. Inserting JU4 or JU5 produces an output on the corresponding channel with a DC component equal to midrail (VCC/2) and changes the -3dB highpass corner frequency of 30Hz (see Table 2 for shunt positions).

## Through-Hole Components

The MAX4338 EV kit also provides pads for the user to solder up to two through-hole components per channel onto the PC board (R7, C2 and R8, C4). This allows the user access to test the op amps capacitive- and resistive-load driving capabilities, without having to access the output of the op amp through the headphone jack.

## MAX4338 Evaluation Kit

Figure 1. MAX4338 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX4338 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX4338 Evaluation Kit

Figure 3. MAX4338 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX4338 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5