<!-- lastmod 2022-08-03 -->
## General Description

The MAX9714 evaluation kit (EV kit) is a fully assembled and tested circuit board that contains the MAX9714 filterless class D amplifier. The EV kit is capable of delivering 6W into an 8 Ω load and is designed to operate from a 10V to 25V DC power supply. The MAX9714 EV kit  accepts differential  or  single-ended input signals and provides an option to select between different switching frequencies.

The MAX9714 EV kit can also evaluate the MAX9704 15W, filterless, class D amplifier.

## Ordering Information

<!-- image -->

| PART         | TEMP RANGE   | IC PACKAGE              |
|--------------|--------------|-------------------------|
| MAX9714EVKIT | 0°C to +70°C | 32 TQFN-EP* (7mm x 7mm) |

Note: To evaluate the MAX9704, request a MAX9704ETJ free sample with the MAX9714EVKIT.

| DESIGNATION                |   QTY | DESCRIPTION                                                                                 |
|----------------------------|-------|---------------------------------------------------------------------------------------------|
| C1                         |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K TDK C1608X7R1H102KT     |
| C2, C3                     |     2 | 33µF ±10%, 35V tantalum capacitors (D case) AVX TAJD336K035                                 |
| C4, C5                     |     2 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E104K TDK C1608X7R1E104K      |
| C6-C9                      |     4 | 100pF ±5%, 50V C0G ceramic capacitors (0402) Murata GRP155C1H101J Taiyo Yuden UMK105CG101JW |
| C10, C11, C20-C25, C28-C31 |     0 | Not installed, ceramic capacitors (0402)                                                    |
| C12-C15, C17               |     5 | 0.47µF ±10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J474K TDK C1005X5R0J474K    |
| C16                        |     1 | 0.01µF ±10%, 25V X7R ceramic capacitor (0402) Murata GRP155R71E103K TDK C1005X7R1E103K      |

- ♦ 10V to 25V Single-Supply Operation
- ♦ Up to 85% Efficiency
- ♦ Drives 6W into 8 Ω /8W into 16 Ω Speaker
- ♦ Differential or Single-Ended Input Modes
- ♦ Pin-Selectable Switching Modulation and Switching Frequency Options
- ♦ Pin-Selectable Gain Options
- ♦ Low 0.04% THD+N
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Component List

| DESIGNATION                    |   QTY | DESCRIPTION                                                      |
|--------------------------------|-------|------------------------------------------------------------------|
| C18                            |     1 | 1µF ±10%, 25V X7R ceramic capacitor (0805) TDK C2012X7R1E105K    |
| C19                            |     1 | 0.1µF ±10%, 25V X5R ceramic capacitor (0402) TDK C1005X5R1E104K  |
| C26, C27                       |     0 | Not installed, ceramic capacitors (0603)                         |
| D1                             |     1 | 5.1V, 20mA zener diode (SO Central CMPZ5231B (top mark C8F)      |
| L1                             |     1 | 100 Ω at 1MHz, 1.7A ferrite bead (0603) Taiyo Yuden BKP1608HS101 |
| L2-L5                          |     4 | 0 Ω resistors (0402)                                             |
| L6-L9                          |     0 | Not installed, power inductor                                    |
| JU1, JU2, JU8                  |     3 | 2-pin headers                                                    |
| JU3-JU7                        |     5 | 3-pin headers                                                    |
| R1                             |     1 | 10k Ω ±5% resistor (0402)                                        |
| R2-R5                          |     0 | Not installed, resistors (0402)                                  |
| FOUTL+, FOUTL-, FOUTR+, FOUTR- |     0 | Not installed, test points                                       |
| U1                             |     1 | MAX9714EUB (32-pin thin QFN, 7mm x 7mm)                          |
| None                           |     8 | Shunts                                                           |
| None                           |     1 | MAX9714 PC board                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

## Features

## MAX9714 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE         | FAX          | WEBSITE               |
|-------------|---------------|--------------|-----------------------|
| AVX         | 843- 946-0238 | 843-626-3123 | www.avxcorp.com       |
| Central     | 631-435-1110  | 631-435-1824 | www.centralsemi.com   |
| Murata      | 770-436-1300  | 770-436-3030 | www.murata.com        |
| Taiyo Yuden | 800-348-2496  | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100  | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX9704/MAX9714 when contacting these suppliers.

## Quick Start

The MAX9714 EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment:

- 15V, 2A power supply
- Audio source (i.e., CD player, cassette player)
- 8 Ω /16 Ω speaker
- 1) Verify  that  no  shunts  are  across  jumpers  JU1  and JU2 (differential input mode).
- 2) Install  shunts  across  pins  2  and  3  of  jumper  JU3 and JU8 (EV kit ON).
- 3) Install  shunts  across  pins  1  and  2  of  jumpers  JU4 and JU5 (gain = 16dB).
- 4) Install  shunts  across  pins  1  and  2  of  jumpers  JU6 and JU7 (spectrum frequency mode, 335kHz).
- 5) Connect the speakers across the OUTL+, OUTLand OUTR+, OUTR- pads.
- 6) Connect the positive of the 15V power supply to the V+ pad and the ground terminal of the power supply to the GND pad.
- 7) Connect the audio source across the VINL+, VINLand VINR+, VINR- pads.
- 8) Turn on the power supply, and then turn on the audio sources.

## Detailed Description

The MAX9714 EV kit contains the MAX9714 filterless class D amplifier IC. The EV kit operates from a DC power supply that provides 10V to 25V and accepts a differential or single-ended audio input source. The single-ended input mode accepts a signal up to 2VP-P, and the differential mode accepts a signal up to 4VP-P. The audio input source is amplified to drive 6W into an 8 Ω speaker.

The EV kit provides two sets of differential outputs. The main outputs OUTL+/OUTL- and OUTR+/OUTR- are filterless. However, a filter can be added for ease of evaluation with resistive loads. The filtered outputs FOUTL+/FOUTLand FOUTR+/FOUTR- require installation of components L6-L9, C20-C31, and R2-R5. For a 16 Ω load and 35kHz cutoff, see Table 1 for the suggested values. All recommended components for a 16 Ω load are included in the MAX9714 EV kit. For outputs with an 8 Ω load, see Table 2.

## Jumper Selection

## Shutdown Mode

Jumpers JU3 and JU8 control the shutdown pin ( SHDN ) of the MAX9714. See Table 3 for JU3 and JU8 functions.

## Table 1. Recommended Filter Component for Outputs With a 16 Ω Load

| COMPONENT   | RECOMMENDED VALUE   |
|-------------|---------------------|
| C20-C25     | 0.022µF             |
| C26, C27    | 0.15µF              |
| C28-C31     | 0.01µF              |
| L6-L9       | 47µH                |
| R2-R5       | 100 Ω               |

## Table 2. Recommended Filter Component for Outputs With an 8 Ω Load

| COMPONENT   | RECOMMENDED VALUE   |
|-------------|---------------------|
| C20-C25     | 0.022µF             |
| C26, C27    | 0.1µF               |
| C28-C31     | 0.01µF              |
| L6-L9       | 22µH                |
| R2-R5       | 100 Ω               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Gain Selection

Jumpers JU4 and JU5 provide an option to select the output voltage gain. See Table 4 for JU4 and JU5 functions. See Tables 7 and 8 for suggested gain and input levels.

## Switching Frequency

The MAX9714 has two operating modes, fixed-frequency modulation (FFM) mode and spread-spectrum modulation  (SSM) mode. The EV kit incorporates jumpers JU6 and JU7 to control pins FS1 and FS2. See Table 5 for JU6 and JU7 functions.

## Table 3. JU3 and JU8 Functions ( SHDN )

| JU3 SHUNT POSITION   | JU8 SHUNT POSITION                                        | EV KIT FUNCTION                                             |
|----------------------|-----------------------------------------------------------|-------------------------------------------------------------|
| Pins 2 and 3         | Installed ( SHDN = high)                                  | EV kit enabled (default)                                    |
| Pins 1 and 2         | Installed, without external signal ( SHDN = low)          | MAX9714 in shutdown                                         |
| Pins 2 and 3         | Not installed, with external signal connected to SHDN pad | SHDN pin driven by external signal. Shutdown is active low. |

## Table 4. JU4 and JU5 Functions (G1 and G2)

| JU4 SHUNT POSITION       | JU5 SHUNT POSITION       | MAX9714 GAIN (dB)   |   MAX9704 GAIN (dB) |
|--------------------------|--------------------------|---------------------|---------------------|
| Pins 1 and 2 (G1 = high) | Pins 1 and 2 (G2 = high) | 16 (default)        |                  16 |
| Pins 1 and 2 (G1 = high) | Pins 2 and 3 (G2 = low)  | 13                  |                  13 |
| Pins 2 and 3 (G1 = low)  | Pins 1 and 3 (G2 = high) | 19.1                |                19.1 |
| Pins 2 and 3 (G1 = low)  | Pins 2 and 3 (G2 = low)  | 22.1                |                29.6 |

Note: Make sure a shunt is installed across pins 2 and 3 of jumper JU3.

## Table 5. JU6 and JU7 Functions (FS1 and FS2)

| JU6 SHUNT POSITION        | JU7 SHUNT POSITION        | MAX9714 SWITCHING FREQUENCY (kHz)   |
|---------------------------|---------------------------|-------------------------------------|
| Pins 1 and 2 (FS1 = high) | Pins 1 and 2 (FS2 = high) | 335 ±8%, SSM (default)              |
| Pins 1 and 2 (FS1 = high) | Pins 2 and 3 (FS2 = low)  | 236, FFM                            |
| Pins 2 and 3 (FS1 = low)  | Pins 1 and 3 (FS2 = high) | 460, FFM                            |
| Pins 2 and 3 (FS1 = low)  | Pins 2 and 3 (FS2 = low)  | 335, FFM                            |

Note:

Make sure a shunt is installed across pins 2 and 3 of jumper JU3.

## Table 6. JU1 and JU2 Functions

| SHUNT POSITION                               | EV KIT INPUT MODE                 |
|----------------------------------------------|-----------------------------------|
| Not installed                                | Differential input mode (default) |
| Installed (VINL-/VINR- pad connected to GND) | Single-ended input mode           |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9714 Evaluation Kit

## Input Mode

Jumpers JU1 and JU2 provide an option to select between a differential or single-ended input mode of the EV kit. See Table 6 for JU1 and JU2 functions.

## Evaluating the MAX9704

To evaluate the MAX9704, remove the MAX9714 from the EV kit and replace it with MAX9704. No other components on the EV kit need to be changed.

## MAX9714 Evaluation Kit

Table 7. MAX9714 Power vs. Gain and Input Levels

|   GAIN (dB) |   V IN DIFF RMS (V) |   RL ( Ω ) |   P OUT AT 10% THD+N (W) |
|-------------|---------------------|------------|--------------------------|
|        13.0 |                1.56 |          8 |                        6 |
|        16.1 |                1.08 |          8 |                        6 |
|        19.1 |                0.75 |          8 |                        6 |
|        22.1 |                0.54 |          8 |                        6 |
|        13.0 |                2.54 |         16 |                        8 |
|        16.1 |                1.78 |         16 |                        8 |
|        19.1 |                1.26 |         16 |                        8 |
|        22.1 |                0.90 |         16 |                        8 |

Table 8. MAX9704 Power vs. Gain and Input Levels

|   GAIN (dB) |   V IN DIFF RMS (V) |   RL ( Ω ) |   P OUT AT 10% THD+N (W) |
|-------------|---------------------|------------|--------------------------|
|        13.0 |                2.46 |          8 |                       15 |
|        16.1 |                1.72 |          8 |                       15 |
|        19.1 |                1.22 |          8 |                       15 |
|        29.6 |                0.38 |          8 |                       15 |
|        13.0 |                1.34 |          4 |                        9 |
|        16.1 |                0.94 |          4 |                        9 |
|        19.1 |                0.66 |          4 |                        9 |
|        29.6 |                0.20 |          4 |                        9 |

## MAX9714 Evaluation Kit

<!-- image -->

Figure 1. MAX9714 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX9714 Evaluation Kit

Figure 2. MAX9714 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX9714 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 4. MAX9714 EV Kit PC Board Layout-Layer 2 (GND)

<!-- image -->

## MAX9714 Evaluation Kit

Figure 5. MAX9714 EV Kit PC Board Layout-Layer 3 (VDD)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9714 Evaluation Kit

Figure 6. MAX9714 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 7. MAX9714 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8