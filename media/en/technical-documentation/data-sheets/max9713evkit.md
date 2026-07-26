<!-- lastmod 2022-08-03 -->
## General Description

The MAX9713 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that contains the MAX9713 filterless class D amplifier. The EV kit is capable of delivering 6W into an 8 Ω load and is designed to operate from a 10V to 25V DC power supply. The MAX9713 EV kit accepts differential or single-ended input signals and provides an option to select between different switching frequencies.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9713EVKIT+ | EV Kit |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                   |
|---------------|-------|---------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 25V X5R ceramic capacitor (0402) TDK C1005X5R1E104K                                               |
| C2, C3        |     2 | 33µF ±10%, 35V tantalum capacitors (D case) AVX TAJD336K035                                                   |
| C4, C5        |     2 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E104K TDK C1608X7R1E104K or equivalent          |
| C6, C7, C8    |     3 | 100pF ±5%, 50V C0G ceramic capacitors (0402) Murata GRP1555C1H101J Taiyo Yuden UMK105CG101JW TDK C1005C0G101J |
| C9, C10, C12  |     3 | 0.47µF ±10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J474K TDK C1005X5R0J474K                      |
| C11           |     1 | 0.01µF ±10%, 25V X7R ceramic capacitor (0402) Murata GRP155R71E103K TDK C1005X7R1E103M                        |

- ♦ 10V to 25V Single-Supply Operation
- ♦ Up to 85% Efficiency
- ♦ Drives 6W into 8 Ω or 8W into 16 Ω
- ♦ Differential or Single-Ended Input Modes
- ♦ Pin-Selectable Frequency Options
- ♦ Pin-Selectable Gain Options
- ♦ Low 0.1% THD+N
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Component List

| DESIGNATION                    |   QTY | DESCRIPTION                                                                             |
|--------------------------------|-------|-----------------------------------------------------------------------------------------|
| C13                            |     1 | 1µF ±10%, 25V X7R ceramic capacitor (0805) TDK C2012X7R1E105K or equivalent             |
| C14                            |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K TDK C1608X7R1H102KT |
| C15                            |     0 | Not installed, ceramic capacitor (0603)                                                 |
| C16-C22                        |     0 | Not installed, ceramic capacitors (0402)                                                |
| D1                             |     1 | 5.1V, 20mA zener diode (SOT-23) Central CMPZ5231B LEAD FREE (Top Mark: C8F)             |
| FB1                            |     1 | 100 Ω ±25%, 1.7A ferrite bead (0603) Murata BKP1608HS101-T                              |
| FB2, FB3                       |     2 | 1k Ω ±25%, 150mA ferrite beads (0402) Murata BK1005HM102-T                              |
| FOUT1+, FOUT1-, FOUT2+, FOUT2- |     0 | Not installed, test points                                                              |
| JU1-JU5                        |     5 | 3-pin headers                                                                           |
| JU6, JU7                       |     2 | 2-pin headers                                                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

<!-- image -->

## Features

## MAX9713 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                    |
|---------------|-------|------------------------------------------------|
| L4, L5        |     0 | Not installed, power inductors                 |
| R1            |     1 | 10k Ω ±5% resistor (0402)                      |
| R2, R3        |     0 | Not installed, resistors (0402)                |
| T1            |     0 | Not installed, common-mode choke               |
| U1            |     1 | 32-pinTQFN-EP*,5mmx5mmx0.8mm Maxim MAX9713ETJ+ |
| -             |     7 | Shunts                                         |
| -             |     1 | PCB: MAX9713 Evalution Kit+                    |

* EP = Exposed paddle.

## Component Suppliers

| SUPPLIER                    | PHONE        | WEBSITE               |
|-----------------------------|--------------|-----------------------|
| AVX Corp.                   | 843-946-0238 | www.avxcorp.com       |
| Central Semiconductor Corp. | 631-435-1110 | www.centralsemi.com   |
| Murata Mfg. Co., Ltd.       | 770-436-1300 | www.murata.com        |
| Taiyo Yuden                 | 800-348-2496 | www.t-yuden.com       |
| TDK Corp.                   | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9713 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 15V, 1A power supply
- Audio source (i.e., CD player, cassette player)
- 8 Ω /16 Ω speaker

## Procedure

The MAX9713 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that no shunt is across jumper JU6 (differential input mode).
- 2) Verify  shunt  across  pins  1-2  of  jumper  JU1.  Install shunt across jumper JU7 (EV kit is enabled).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 3) Verify  shunts  across pins 1-2 of jumpers JU2 and JU3 (Gain = 16dB).
- 4) Verify  shunts  across pins 1-2 of jumpers JU4 and JU5 (spread-spectrum mode, frequency centered at 335kHz).
- 5) Connect the speaker across the OUT+ and OUTpads.
- 6) Connect the positive terminal of the 15V power supply  to  the  V+  pad  and  the  ground  terminal  of  the power supply to the GND pad.
- 7) Connect the audio source across the VIN+ and VINpads.
- 8) Turn on the power supply, and then turn on the audio source.

## Detailed Description

The MAX9713 EV kit contains the MAX9713 filterless class D amplifier IC. The EV kit operates from a 10V to 25V DC power supply and accepts a differential or single-ended audio input source. The single-ended input mode accepts up to 2VP-P signals, and the differential mode accepts up to 4VP-P signals. The audio input source is amplified to drive 6W into an 8 Ω speaker.

The MAX9713 EV kit provides three sets of differential outputs. The device outputs (OUT+/-) can be connected directly to a speaker load without any filtering. However, a filter can be added to ease evaluation. The filtered  outputs  (FOUT1+/-) require installation  of  filtering components T1, C21, and C22. The LCR filtered outputs (FOUT2+/-) require installation of filtering components L4, L5, C15-C20, R2, and R3.

<!-- image -->

## Jumper Selection

## Shutdown Mode

Jumpers JU1 and JU7 control the shutdown pin ( SHDN )  of  the MAX9713. See Table 1 for the JU1 and JU7 functions.

Note: Contact your local Maxim representative for recommended MAX9713 filtering component values.

## Table 1. JU1 and JU7 Functions ( SHDN )

| JU1 SHUNT POSITION   | JU7 SHUNT POSITION                                        | EV KIT FUNCTION                                             |
|----------------------|-----------------------------------------------------------|-------------------------------------------------------------|
| Pins 1 and 2         | Installed ( SHDN = high)                                  | EV kit enabled (default)                                    |
| Pins 2 and 3         | Installed, without external signal ( SHDN = low)          | Shutdown mode                                               |
| Pins 1 and 2         | Not installed, with external signal connected to SHDN pad | SHDN pin driven by external signal. Shutdown is active low. |

## Table 2. JU2 and JU3 Functions (G1 and G2)

| JU2 SHUNT LOCATION       | JU3 SHUNT LOCATION   | MAX9713 OUTPUT GAIN (dB)   |
|--------------------------|----------------------|----------------------------|
| Pins 1 and 2 (G1 = high) | 1-2 (G2 = high)      | 16 (default)               |
| Pins 1 and 2 (G1 = high) | 2-3 (G2 = low)       | 13                         |
| Pins 2 and 3 (G1 = low)  | 1-2 (G2 = high)      | 19.1                       |
| Pins 2 and 3 (G1 = low)  | 2-3 (G2 = low)       | 22.1                       |

Note: Make sure a shunt is installed across pins 1-2 of jumper JU1.

## Table 3. JU4 and JU5 Functions (FS1 and FS2)

| JU4 SHUNT LOCATION        | JU5 SHUNT LOCATION   | MAX9713 SWITCHING FREQUENCY (kHz)   |
|---------------------------|----------------------|-------------------------------------|
| Pins 1 and 2 (FS1 = high) | 1-2 (FS2 = high)     | 335 ±10%, SSM (default)             |
| Pins 1 and 2 (FS1 = high) | 2-3 (FS2 = low)      | 236, FFM                            |
| Pins 2 and 3 (FS1 = low)  | 1-2 (FS2 = high)     | 460, FFM                            |
| Pins 2 and 3 (FS1 = low)  | 2-3 (FS2 = low)      | 335, FFM                            |

Note: Make sure a shunt is installed across pins 1-2 of jumper JU1.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9713 Evaluation Kit

## Gain Selection

Jumpers JU2 and JU3 provide an option to select the output voltage gain. See Table 2 for JU2 and JU3 functions. See Table 5 for power vs. gain and input levels.

## Switching Frequency

The MAX9713 has two operating modes, fixed-frequency modulation (FFM) mode and spread-spectrum modulation (SSM) mode. Jumpers JU4 and JU5 control pins FS1 and FS2. See Table 3 for JU4 and JU5 functions.

## MAX9713 Evaluation Kit

## Input Mode

Jumper JU6 provides an option to select between a differential  or  single-ended  input  mode of the EV kit. See Table 4 for JU6 functions.

## Table 4. JU6 Functions

| SHUNT POSITION                         | EV KIT INPUT MODE                 |
|----------------------------------------|-----------------------------------|
| Not installed                          | Differential input mode (default) |
| Installed (VIN- pad AC-coupled to GND) | Single-ended input mode           |

Table 5. MAX9713 Power vs. Gain and Input Levels at 10% THD+N

|   GAIN (dB) |   V IN DIFF RMS (V) |   RL ( Ω ) |   P OUT AT 10% THD+N (W) |
|-------------|---------------------|------------|--------------------------|
|        13.0 |                1.27 |         16 |                        8 |
|        16.1 |                0.89 |         16 |                        8 |
|        19.1 |                0.63 |         16 |                        8 |
|        22.1 |                0.45 |         16 |                        8 |
|        13.0 |                0.78 |          8 |                        6 |
|        16.1 |                0.54 |          8 |                        6 |
|        19.1 |                0.39 |          8 |                        6 |
|        22.1 |                0.27 |          8 |                        6 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9713 Evaluation Kit

Figure 1. MAX9713 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9713 Evaluation Kit

<!-- image -->

Figure 2. MAX9713 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX9713 EV Kit PCB-Layer 2 (GND)

Figure 3. MAX9713 EV Kit PCB-Component Side

<!-- image -->

Figure 5. MAX9713 EV Kit PCB-Layer 3 (VDD)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 6. MAX9713 EV Kit PCB-Solder Side

<!-- image -->

## MAX9713 Evaluation Kit

Figure 7. MAX9713 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9713 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | REVISION DESCRIPTION                                                         | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------|-----------------|
|                 0 | -               | Initial release                                                              | -               |
|                 1 | 4/05            | -                                                                            | -               |
|                 2 | 11/07           | Update to lead-free and RoHS-compliant; various edits; replaced Figures 1-7. | 1-7             |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8