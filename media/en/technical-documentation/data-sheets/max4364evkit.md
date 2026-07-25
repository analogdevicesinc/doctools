<!-- lastmod 2022-08-03 -->
## General Description

The MAX4364 evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX4364 highpower bridged amplifier to drive loudspeakers in portable audio applications. Designed to operate from a 2.7VDC to 5.5VDC power supply, the MAX4364 EV kit is capable of delivering 1.4W into an 8 Ω load.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) Taiyo Yuden EMK107BJ104KA  |
| C2            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (1206) Taiyo Yuden JMK316BJ106ML  |
| C3            |     1 | 1.0µF ±10%, 6.3V X5R ceramic capacitor (0603) Taiyo Yuden JMK107BJ105KA |
| C4            |     1 | 0.47µF, 35V tantalum capacitor (case B) Kemet T491B474K035AS            |
| C5            |     0 | Not installed (0603)                                                    |
| IN            |     1 | Right-angle phono jack (red)                                            |
| JU1           |     1 | 2-pin header                                                            |
| R1, R2, R3    |     3 | 20k Ω ±1% resistors (0805)                                              |
| R4            |     1 | 100k Ω ±5% resistor (0805)                                              |
| None          |     1 | Shunt (JU1)                                                             |
| None          |     1 | MAX4364 PC board                                                        |
| None          |     1 | MAX4364 data sheet                                                      |
| None          |     1 | MAX4364 EV kit data sheet                                               |
| U1            |     1 | MAX4364ESA (8-pin SO)                                                   |

<!-- image -->

## Features

- ♦ 2.7V to 5.5V Single-Supply Operation
- ♦ Drives 1.4W into an 8 Ω Speaker
- ♦ 0.04% THD + N at 1kHz
- ♦ Externally Adjustable Gain
- ♦ Clickless/Popless Power-Up/Down, Shutdown
- ♦ 10nA Shutdown Current
- ♦ Small 8-Pin SO Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX4364EVKIT | 0°C to +70°C | 8 SO         |

## Quick Start

The MAX4364 EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Do not turn on the power supply until all connec-

tions are completed.

## Recommended Equipment

- 5V, 1A power supply
- 8 Ω speaker
- Audio source (e.g., CD player, tape player)

## Setup

- 1) Verify that jumper JU1 (SHDN) does not have a shunt installed.
- 2) Connect the 8 Ω speaker across the OUT+ and OUTpads.
- 3) Connect an audio source to Jack J1 (IN).
- 4) Connect the 5V terminal of the power supply to the VCC pad and the ground terminal of the power supply to the GND pad.
- 5) Turn on the power supply.
- 6) Turn on the audio source.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX4364 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE         |
|-------------|--------------|--------------|-----------------|
| Kemet       | 864-963-6300 | 864-963-6322 | www.kemet.com   |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com |

Note: Please indicate that you are using the MAX4364 when contacting these component suppliers.

## Detailed Description

The MAX4364 EV kit contains the MAX4364 high-power bridged amplifier, designed to drive loudspeakers in portable audio applications. The MAX4364 EV kit operates from a DC power supply that can provide 2.7V to 5.5V and 1A of current. The MAX4364 EV kit can accept audio source inputs (IN) with peak-to-peak amplitudes up to VCC. The audio source is amplified to drive 1.4W into an 8 Ω speaker.

The MAX4364 EV kit has positive and negative differential outputs that are 180° out of phase and are DC offset to  VCC/2.  This  allows  the  voltage  at  the  load  to  see  a peak voltage of almost VCC. The closed-loop gain of the MAX4364 EV kit is configured for 2V/V, but can be reconfigured to other gains. Refer to the Gain-Setting Resistors section of the MAX4364/MAX4365 data sheet. However, if the closed-loop gain is reconfigured to greater than 10, a feedback capacitor, C5, can be added to limit the bandwidth, or to compensate for stray capacitance at the inverting input.

## Jumper Selection

## Shutdown

Jumper JU1 controls the shutdown pin (SHDN) of the MAX4364. The shutdown function can be activated on the MAX4364 EV kit by installing a shunt across the pins of JU1. The shutdown function can also be controlled  by  an  external  source  connected to the SHDN pad and removing the shunt on JU1 (see Table 1 for shunt positions). Note: When measuring supply current in  shutdown mode, the bias through resistor R1 and JU1 must be taken into account. The shutdown current can be calculated by the following equation:

<!-- formula-not-decoded -->

## Table 1. JU1 Jumper Selection

Figure 1. MAX4364 EV Kit Schematic

| JUMPER   | SHUNT POSITION                                                    | EV KIT FUNCTION                                              |
|----------|-------------------------------------------------------------------|--------------------------------------------------------------|
| JU1      | Installed (SHDN = high)                                           | Shutdown mode                                                |
| JU1      | None (SHDN = low)                                                 | EV kit enabled                                               |
| JU1      | None. External controller connected to SHDN pad (TTL/CMOS input). | SHDN driven by external controller. Shutdown is active high. |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX4364 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX4364 Evaluation Kit

Figure 3. MAX4364 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX4364 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

3