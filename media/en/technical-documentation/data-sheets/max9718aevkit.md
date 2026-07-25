<!-- lastmod 2022-08-05 -->
<!-- image -->

## General Description

The MAX9718A evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX9718A differential audio amplifier to drive a mono bridge-tied load (BTL) speaker in portable audio applications. Designed to operate from a 2.7VDC to 5.5VDC power supply, the EV kit is capable of delivering 1.1W into an 8 Ω load.

The MAX9718A inputs can tolerate a DC offset level of 0.5V through (VCC - 1.2V) from an input source, therefore eliminating the need for input-signal coupling capacitors. The EV kit provides an option to bypass the input-signal coupling capacitors when the DC offset level of the input signals are within the range of 0.5V to (VCC - 1.2V). The MAX9718A EV kit also evaluates the MAX9718B, MAX9718C, and MAX9718D.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| A1            |     0 | MAX9718AEUB (10-pin µMAX)                                            |
| A2            |     0 | MAX9718AEBL-T (9-bump UCSP)                                          |
| C1, C2        |     2 | 0.47µF ±20%, 16V, film chip capacitors (1206) Panasonic ECPU1C474MA5 |
| C3            |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A105K        |
| C4            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M      |
| C5            |     1 | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K      |
| C6, C7        |     0 | Not installed, capacitors (0603)                                     |
| R1-R4         |     4 | 10k Ω ±1% resistors (0603)                                           |
| U1            |     1 | MAX9718AETB (10-pin TDFN)                                            |
| JU1, JU2      |     2 | 3-pin headers                                                        |
| JU3, JU4      |     2 | 2-pin headers                                                        |
| None          |     4 | Shunts                                                               |
| None          |     1 | MAX9718A PC board                                                    |

µMAX is a registered and UCSP is a trademark of Maxim Integrated Products, Inc.

## Connection and Setup

- 1) Verify that a shunt is installed across pins 1 and 2 of jumper JU1 (EV kit on).
- 2) Verify that a shunt is installed across pins 2 and 3 of jumper JU2 (shutdown mode active low).
- 3) Verify  that  no  shunts  are  installed  on  jumpers  JU3 and JU4 (input-signal coupling capacitors are in circuit).
- 4) Connect the 8 Ω speaker across the OUT+ and OUT- PC board pads.
- 5) Connect the positive terminal of the power supply to the VCC pad and the power-supply ground terminal to the GND pad.
- 6) Connect the audio source across the INPUT+ and INPUT- pads.
- 7) Turn on the power supply.
- 8) Turn on the audio source.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

## Features

- ♦ Drives 1.1W into 8 Ω Speaker at 1% THD+N
- ♦ Differential Input
- ♦ 2.7V to 5.5V Single-Supply Operation
- ♦ 100nA Shutdown Current (typ)
- ♦ Small 10-Pin TDFN Package
- ♦ Also Available in 10-Pin µMAX ® and 9-Bump UCSP™ Packages
- ♦ Fully Assembled and Tested
- ♦ Evaluates MAX9718B/C/D (IC and Component Replacement Required)

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX9718AEVKIT | 0°C to +70°C | 10 TDFN-EP*  |

## Quick Start

The MAX9718A EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- 2.7V to 5.5V, 2A power supply
- Audio signal source
- 8 Ω speaker

1

## MAX9718A Evaluation Kit

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| Panasonic  | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX9718A when contacting these component suppliers.

## Detailed Description

The MAX9718A EV kit features the MAX9718A differential audio amplifier, designed to drive an 8 Ω mono speaker in portable audio applications. The EV kit operates from a DC power supply that can provide 2.7V to 5.5V and 2A of  current.  The amplifier is capable of delivering 1.1W into an 8 Ω speaker or 1.4W into a 4 Ω speaker.

As configured, the EV kit is set for a gain of 1V/V (0dB) by gain-setting resistors R1-R4. To set the EV kit to a different gain, select other gain-setting resistors. Refer to  the Applications  Information section  in  the MAX9718/MAX9719 data sheet for selecting the resistors. Capacitors C6 and C7 are used for optionally limiting the audio signal bandwidth.

## Jumper Selection

## Shutdown Mode (SHDM and SHDN)

The MAX9718A features a shutdown mode that reduces the MAX9718A quiescent current to 100nA (typ). The shutdown mode on the MAX9718A EV kit is controlled by the combination of the SHDM and SHDN pins of the MAX9718A IC. The SHDM pin determines whether the SHDN input pin is active high or active low, while the SHDN pin activates or deactivates the shutdown mode of the IC. Jumpers JU1 and JU2 configure the shutdown mode (SHDN and SHDM) of the MAX9718A IC. See Table 1 for the shunt positions.

Table 1. Shutdown Mode Configuration (JU1 and JU2)

| JU2 SHUNT POSITION SHDM (SHUTDOWN MODE)   | JU1 SHUNT POSITION SHDN (SHUTDOWN PIN)   | EV KIT FUNCTION   |
|-------------------------------------------|------------------------------------------|-------------------|
| 1-2 (SHDM = high)                         | 1-2 (SHDN = high)                        | Disabled          |
| 1-2 (SHDM = high)                         | 2-3 (SHDN = low)                         | Enabled           |
| 2-3 (SHDM = low)                          | 1-2 (SHDN = high)                        | Enabled           |
| 2-3 (SHDM = low)                          | 2-3 (SHDN = low)                         | Disabled          |

Note: The SHDM and SHDN pins can also be controlled by external sources connected to the SHDM and SHDN pads.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Limiting the Audio Signal Bandwidth

Capacitors C6 and C7 provide the option to implement a lowpass filter (LPF) with the MAX9718A EV kit. The -3dB point of the LPF can be set by component pairs C6 and R2 and C7 and R4 as follows:

<!-- formula-not-decoded -->

where RF = R2 = R4 and CF = C6 = C7.

If a lowpass filter (LPF) is not desired, leave C6 and C7 uninstalled.

## Bypassing the Input-Signal Coupling Capacitors (JU3 and JU4)

Jumpers JU3 and JU4 provide an option to bypass the input-signal coupling capacitors C1 and C2, respectively, on the MAX9718A EV kit. See Table 2 for the various shunt positions.

Table 2. JU3 and JU4 Jumper Selection

| SHUNT POSITION          | INPUT-SIGNAL COUPLING CAPACITORS   |
|-------------------------|------------------------------------|
| Not Installed (default) | In circuit                         |
| Installed               | DC-coupled inputs                  |

## Evaluating the MAX9718B/MAX9718C/MAX9718D

The MAX9718A EV kit can also evaluate the MAX9718B, MAX9718C, and MAX9718D. To evaluate a different IC, replace U1 with the desired part and replace the components as outlined in Table 3. Refer to the MAX9718/ MAX9719 data sheet for additional information.

<!-- image -->

## MAX9718A Evaluation Kit

Table 3. Component Values for Evaluating Different Versions of the MAX9718

| COMPONENT   | EVALUATING MAX9718A   | EVALUATING MAX9718B   | EVALUATING MAX9718C   | EVALUATING MAX9718D   |
|-------------|-----------------------|-----------------------|-----------------------|-----------------------|
| U1          | MAX9718A              | MAX9718B              | MAX9718C              | MAX9718D              |
| R1, R3      | 10k Ω                 | 0 Ω                   | 0 Ω                   | 0 Ω                   |
| R2, R4      | 10k Ω                 | Open                  | Open                  | Open                  |

<!-- image -->

Figure 1. MAX9718A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9718A Evaluation Kit

Figure 2. MAX9718A EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX9718A EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9718A Evaluation Kit

Figure 4. MAX9718A EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5