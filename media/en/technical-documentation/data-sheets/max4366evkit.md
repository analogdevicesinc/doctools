<!-- lastmod 2022-08-03 -->
## General Description

The MAX4366 evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX4366 bridged amplifier to drive speakers or headsets in portable audio applications. The MAX4366 EV kit operates from a 2.3V to 5.5V DC power supply and is capable of delivering 330mW into a 32 Ω load or 200mW into a 16 Ω load. The closed-loop gain of the MAX4366 is set to 2V/V with external resistors. The MAX4367/MAX4368 bridged amplifiers with internal fixed gains can be evaluated on the MAX4366 EV kit. Contact Maxim to obtain samples. The Selector Guide provides the complete part  numbers for the amplifiers that can be evaluated on the MAX4366 EV kit.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (1206) TDK C3216X5R0J106KT or Taiyo Yuden JMK316BJ106KL |
| C2            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C104KT or Taiyo Yuden EMK107BJ104KA |
| C3            |     1 | 1µF ±10%, 6.3V X5R ceramic capacitor (0603) Taiyo Yuden JMK107BJ105KA                         |
| C4            |     1 | 0.33µF ±10%, 35V tantalum capacitor (A) Kemet T494A334K035AS                                  |

<!-- image -->

## Features

- ♦ Small 8-Pin SOT23 Package
- ♦ No DC-Blocking Capacitor On Output
- ♦ 2.3V to 5.5V Single-Supply Operation
- ♦ Drives 330mW into 32 Ω Speakers or 200mW into 16 Ω Speakers
- ♦ Externally Adjustable Gain
- ♦ Clickless/Popless Power-Up and Shutdown
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX4366EVKIT | 0°C to +70°C | 8 SOT23      |

## Selector Guide

| PART    | GAIN     |
|---------|----------|
| MAX4366 | External |
| MAX4367 | 2V/V     |
| MAX4368 | 3V/V     |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                             |
|---------------|-------|-----------------------------------------|
| C5            |     0 | Not installed (0603)                    |
| R1, R2        |     2 | 20k Ω ±1% resistors (0603)              |
| R3            |     1 | 100k Ω ±5% resistor (0603)              |
| J1            |     1 | Right-angle PC-mount phono jack (white) |
| J2            |     1 | 2-position terminal block               |
| JU1           |     1 | 3-pin header                            |
| U1            |     1 | MAX4366, 8-pin SOT23                    |
| None          |     1 | Shunt (JU1)                             |
| None          |     1 | MAX4366 PC board                        |
| None          |     1 | MAX4366 data sheet                      |
| None          |     1 | MAX4366 EV kit data sheet               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX4366 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Kemet       | 864-963-6300 | 864-963-6322 | www.kemet.com         |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4498 | www.component.tdk.com |

Note: Please indicate you are using the MAX4366 when contacting these component suppliers.

## Quick Start

The MAX4366 EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment:

- 5V, 1A power supply
- 32 Ω or 16 Ω speaker
- Audio source (e.g., CD player, tape player)
- 1) Verify that a shunt is across pins 2 and 3 of jumper JU1 (SHDN).
- 2) Connect an audio source to phono jack J1.
- 3) Connect the speaker across the + and - outputs of terminal block J2.
- 4) Connect the 5V terminal of the power supply to the VCC pad and the ground terminal of the power supply to the GND pad.
- 5) Turn on the 5V power supply.
- 6) Turn on the audio source.

## Detailed Description

The MAX4366 EV kit contains the MAX4366 bridged amplifier designed to differentially drive speakers or headsets in portable audio applications. The advantage of driving speakers in a bridge-tied load (BTL) configuration is that no large output capacitor is required and the output voltage doubles compared to a single-ended amplifier under similar conditions. Thus, the differential gain of the device is twice the closed-loop gain of the input  amplifier.  The  MAX4366's input amplifier closedloop gain of 1V/V creates an effective gain of 2V/V across the speaker.

The MAX4366 EV kit is capable of delivering the following power when using the 5V power supply:

330mW to a 32 Ω

speaker and an input of 1.62VRMS 200mW to a 16 Ω speaker and an input of 0.894VRMS

The MAX4366 EV kit operates from a 2.3V to 5.5V DC power supply.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Output Signal

The MAX4366 EV kit produces a differential output signal that is used to drive 16 Ω or 32 Ω speakers. The positive  and  negative  signals  of  the  differential  output  are 180° out of phase and are both biased with a DC offset of  VCC/2. This bias voltage allows the voltage at the load to swing between 0 and VCC. The MAX4366 EV kit is configured for a gain of 2V/V. A feedback capacitor (C5) may be added to limit the bandwidth or to compensate for the parasitic capacitance at pin 4, especially at higher values of R2.

## Shutdown

Jumper JU1 controls the shutdown pin (SHDN) on the MAX4366. The shutdown function can also be controlled by removing the shunt from JU1 and connecting an external source to the SHDN pad. The SHDN pin is an active-high pin that requires a low signal to enable and a high signal to disable the MAX4366 EV kit (see Table 1 for JU1 configuration).

## Table 1. Jumper JU1 Configuration

| SHUNT POSITION   | SHDN PIN                               | FUNCTION                                                  |
|------------------|----------------------------------------|-----------------------------------------------------------|
| 1 and 2          | Connected to VCC                       | Shutdown mode                                             |
| 2 and 3          | Connected to GND                       | EV kit enabled                                            |
| None*            | Connect an external source to SHDN pad | SHDN driven by external source. (SHDN pin is active high) |

## Level Shifting

Jumper JU2 provides an option to use an external DC source to level shift the output of the MAX4366 EV kit. To use an external source for the DC component of the output, connect the DC source to JU2.

<!-- image -->

## Setting the Gain

The signal gain of the MAX4366 input amplifier is set to 1V/V (BTL gain of 2V/V) with resistors R1 and R2. R1 and R2 set the gain of the amplifier as follows:

<!-- formula-not-decoded -->

The gain of the device in a BTL configuration is twice the gain of the single-ended case. Choose R1 and R2 between 10k Ω and 50k Ω .  The  gains  of  the  MAX4367/ MAX4368 are set internally.

<!-- image -->

## Evaluating Other Amplifiers

The MAX4366 EV kit can be used to evaluate the MAX4367/MAX4368 bridge amplifiers with fixed internal gains. The MAX4367 has an internal gain of 2V/V and the MAX4368 has an internal gain of 3V/V. Order samples of these amplifiers and replace the MAX4366 (U1) on the board with the desired IC.

Note: Replace resistor R1 with a 0 resistor and remove R2 to evaluate the amplifiers with internal gains.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4366 Evaluation Kit

Figure 1. MAX4366 EV Kit Schematic

<!-- image -->

## MAX4366 Evaluation Kit

<!-- image -->

Figure 2. MAX4366 EV Kit Component Placement GuideComponent Side

Figure 3. MAX4366 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX4366 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4