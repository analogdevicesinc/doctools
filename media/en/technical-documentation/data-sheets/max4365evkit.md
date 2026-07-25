<!-- lastmod 2022-08-03 -->
## General Description

The MAX4365 evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX4365 highpower bridged amplifier to drive loudspeakers in portable audio applications. Designed to operate from a 2.7VDC to 5.5VDC power supply, the EV kit is capable of delivering 1W into an 8 Ω load.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| A1            |     1 | MAX4365EUA (8-pin µMAX)                                          |
| C1            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C104K  |
| C2            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (1206) TDK C3216X5R0J106M  |
| C3            |     1 | 1.0µF ±10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J105K |
| C4            |     1 | 0.033µF ±5%, 50V C0G ceramic capacitor (1206) TDK C3216C0G1H333J |
| C5            |     0 | Not installed (0603)                                             |
| IN            |     1 | Right-angle phono jack (red)                                     |
| JU1           |     1 | 2-pin header                                                     |
| R1, R2        |     2 | 20k Ω ±1% resistors (0805)                                       |
| R3-R6         |     4 | 100k Ω ±5% resistors (0603)                                      |
| None          |     1 | Shunt (JU1)                                                      |
| None          |     1 | MAX4365 PC board                                                 |
| U1            |     1 | MAX4365ETA (8-pin thin QFN)                                      |

<!-- image -->

## Features

- ♦ 2.7V to 5.5V Single-Supply Operation
- ♦ Drives 1W into an 8 Ω Speaker
- ♦ 0.1% THD+N at 1kHz
- ♦ Externally Adjustable Gain
- ♦ Clickless/Popless Operation
- ♦ 5mA Supply Current, 10nA Shutdown Current
- ♦ Tiny 8-Pin Thin QFN Package (3mm ✕ 3mm ✕ 0.8mm), Also Available in 8-Pin µMAX Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX4365EVKIT | 0°C to +70°C | 8 Thin QFN   |

## Quick Start

The MAX4365 EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Do not turn on the power supply until all connec-

tions are completed.

## Recommended Equipment

- 5V, 1A power supply
- 8 Ω speaker
- Audio source (e.g., CD player, tape player)

## Setup

- 1) Verify that jumper JU1 (SHDN) does not have a shunt installed.
- 2) Connect the 8 Ω speaker across the OUT+ and OUT- pads.
- 3) Connect an audio source to the input jack (IN).
- 4) Connect the 5V terminal of the power supply to the VCC pad and the ground terminal of the power supply to the GND pad.
- 5) Turn on the power supply.
- 6) Turn on the audio source.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4365 Evaluation Kit

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX4365 when contacting these component suppliers.

## Detailed Description

The MAX4365 EV kit contains the MAX4365 high-power bridged amplifier, designed to drive loudspeakers in portable audio applications. The EV kit is designed to operate with a 2.7V to 5.5V, 1A power supply. The EV kit  can  accept  audio  source  inputs  (IN)  with  peak-topeak amplitudes up to VCC. The audio source is amplified to drive 1W into an 8 Ω speaker.

The MAX4365 EV kit has positive and negative differential outputs that are 180° out of phase and are DC offset to  VCC/2.  This  allows  the  voltage  at  the  load  to  see  a peak voltage of almost VCC. The closed-loop gain of the EV kit is configured for 2V/V, but can be reconfigured to other gains. Refer to the Gain-Setting Resistors section  of  the  MAX4364/MAX4365  data  sheet. However, if the closed-loop gain is reconfigured to greater than 10, a feedback capacitor, C5, can be added to limit the bandwidth, or to compensate for stray capacitance at the inverting input.

The MAX4365 EV kit's component values have been chosen to minimize audible clicks and pops during power-up, power-down, and shutdown transitions. With these component values, the frequency response is tail ored  for  small  loudspeaker applications, where response below 300Hz is less critical (refer to the Bias Capacitor section of the MAX4364/MAX4365 data sheet for further details on component selection).

## Jumper Selection

## Shutdown

Jumper JU1 controls the MAX4365's shutdown pin (SHDN). The shutdown function can be activated on the MAX4365 EV kit by installing a shunt across the pins of JU1. The shutdown function can also be controlled by an external source connected to the SHDN pad and removing the shunt on JU1 (see Table 1 for shunt positions). Note: When measuring supply current in shutdown mode, the bias through resistor R3 and JU1 must be taken into account. The shutdown current can be calculated by the following equation:

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. JU1 Jumper Selection

| JUMPER   | SHUNT POSITION                                                    | EV KIT FUNCTION                                              |
|----------|-------------------------------------------------------------------|--------------------------------------------------------------|
| JU1      | Installed (SHDN = high)                                           | Shutdown mode                                                |
| JU1      | None (SHDN = low)                                                 | EV kit enabled                                               |
| JU1      | None. External controller connected to SHDN pad (TTL/CMOS input). | SHDN driven by external controller. Shutdown is active high. |

<!-- image -->

Figure 1. MAX4365 EV Kit Schematic

<!-- image -->

<!-- image -->

Figure 2. MAX4365 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX4365 Evaluation Kit

Figure 3. MAX4365 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4364 Evaluation Kit

Figure 4. MAX4365 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 5. MAX4365 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4