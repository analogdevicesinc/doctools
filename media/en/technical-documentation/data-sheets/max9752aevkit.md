<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX9752A evaluation kit (EV kit) is a fully assembled and tested PC board that evaluates the MAX9752A as well as the MAX9752B/MAX9752C/MAX9753/MAX9754 ICs. All of these Class D amplifiers drive stereo bridgetied-load (BTL) speakers and a stereo headphone. The ICs' high efficiency make them well suited for portable audio applications.

The speaker amplifiers operate from a 4.5V to 5.5V DC power supply, and deliver 2.2W continuous power into a pair of 4 Ω speakers. Three different speaker output configurations are available for ease of evaluation.

The headphone amplifiers operate from a 3V to 5.5V DC power supply, and deliver up to 63mW per channel into a 16 Ω stereo headphone. When the switch on the headphone jack detects the insertion of a headphone, the MAX9752A automatically enters the headphone mode from the speaker mode.

The MAX9752A EV kit maximum gain is jumper selectable. The EV kit features an analog volume control and an audible alert input for  evaluating  the  MAX9752A/ MAX9752B/MAX9752C. The volume control and audible alert input can be reconfigured to accept a second audio source when evaluating the MAX9753, which features a 2:1 multiplexer that allows two audio sources to feed the EV kit.

| DESIGNATION                                 | QTY                                         | DESCRIPTION                                                      |
|---------------------------------------------|---------------------------------------------|------------------------------------------------------------------|
| C1, C12, C14                                | 3                                           | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K |
| C2                                          | 1                                           | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M  |
| C4-C8, C10, C16                             | 7                                           | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K   |
| R1                                          | 1                                           | 47k Ω ±5% resistor (0603)                                        |
| U1                                          | 1                                           | MAX9752AETI (28-pin TQFN-EP, 5mm x 5mm)                          |
| OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION                      |
| C3                                          | 1                                           | 1000pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H102K |
| C9                                          | 1                                           | 1µF ±10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A105K    |
| C11                                         | 1                                           | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                     |
|---------------|-------|-------------------------------------------------------------------------------------------------|
| C13*, C15*    |     2 | 100µF ±20%, 6.3V X5R ceramic capacitors (1210) TDK C3225X5R0J107M                               |
| C17-C30       |     0 | Not installed, capacitors (0603)                                                                |
| J1            |     1 | 3.5mm switched stereo jack                                                                      |
| JU1-JU4       |     4 | 3-pin headers                                                                                   |
| JU5           |     1 | 2-pin header                                                                                    |
| L1-L5         |     5 | 100 Ω at 100MHz, 50m Ω DCR, 3A (0603) ferrite beads TDK MPZ1608S101A                            |
| L6-L9         |     0 | Not installed, inductors TOKO D53LC series recommended                                          |
| R2            |     1 | 10k Ω thumb-wheel potentiometer                                                                 |
| R3-R6         |     0 | Not installed, resistors (0603)                                                                 |
| T1, T2        |     0 | Not installed, common-mode chokes 50VDC, 1ADC, 800 Ω at 100MHz TDK ACM4532-801-2P-X recommended |
| -             |     5 | Shunts                                                                                          |
| -             |     1 | MAX9752A EV kit PC board                                                                        |

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## Features

- ♦ 4.5V to 5.5V Single-Supply Operation
- ♦ Drives 2 x 2.2W into a Pair of 4 Ω Speakers
- ♦ Drives 2 x 63mW into a 16 Ω Stereo Headphone
- ♦ Analog Volume Control
- ♦ Beep Input with Glitch Filter
- ♦ 100nA (typ) Shutdown Current
- ♦ Small 28-Pin TQFN Package (Also Available in 28-Pin TSSOP)
- ♦ Fully Assembled and Tested
- ♦ Evaluates MAX9752A/MAX9752B/MAX9752C/ MAX9753/MAX9754 (IC Replacement Required)

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX9752AEVKIT | 0°C to +70°C | 28 TQFN-EP*  |

## MAX9752A Evaluation Kit

## Component Suppliers

| SUPPLIER     | PHONE        | FAX          | WEBSITE               |
|--------------|--------------|--------------|-----------------------|
| TDK          | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| TOKO America | 847-297-0070 | 847-699-1194 | www.tokoam.com        |

Note: Indicate that you are using the MAX9752A EV kit when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- One 5V, 3A power supply
- Optional 3V, 1A power supply
- Audio source
- Two 4 Ω to 8 Ω speakers
- Stereo headphone

The MAX9752A EV kit is fully assembled and tested. Follow the steps listed below to verify board operation.

## Do not turn on the power supply until all connections are completed:

- 1) Install  a  shunt  across  pins  1  and  2  of  jumper  JU1 (IC enabled).
- 2) Install a shunt across pins 1 and 2 of jumpers JU2 and JU3 (speaker gain = 13.5dB, headphone gain = 3dB).
- 3) Install  a  shunt  across  pins  2  and  3  of  jumper  JU4 (volume control is selected).
- 4) Install a shunt on jumper JU5 (speaker enable).
- 5) Connect the first speaker to the OUTL+ and the OUTL- test points.
- 6) Connect the second speaker to the OUTR+ and the OUTR- test points.
- 7) Connect the 5V power supply to the VDD pad. Connect the ground terminal of the power supply to the GND pad.
- 8) Connect the 5V or optional 3V power supply to the HPVDD pad. Connect the ground terminal of the power supply to the GND pad.
- 9) Connect the audio source to the IN\_L and the IN\_R pads. Connect the ground from the audio source to the GND pad.
- 10) Turn on both power supplies and the audio source.
- 11) Adjust potentiometer R2 to change the speakers' volume.
- 12) Connect the headphone to the phone jack J1.
- 13) Adjust potentiometer R2 to adjust the headphone's volume.

## Detailed Description

The MAX9752A EV kit is designed to evaluate the MAX9752A, as well as the MAX9752B/MAX9752C/ MAX9753/MAX9754. All of these Class D amplifiers drive  stereo  BTL  speakers, and stereo headphones in portable audio applications. The EV kit comes with a MAX9752A IC installed.

The EV kit can operate from a 4.5V to 5.5V DC power supply, and deliver 2 x 2.2W continuous power into a pair of 4 Ω speakers. Three different speaker output configurations are available for ease of evaluation. The headphone amplifiers deliver 63mW per channel into a 16 Ω stereo headphone. Optionally, the headphone amplifier can operate from a 3V power supply.

The MAX9752A EV kit speaker and headphone volume is  adjustable  by  the  thumb-wheel potentiometer (R2) connected to the analog volume control (VOL) of U1. The MAX9752A's maximum gain is configurable using jumpers JU2 and JU3. The MAX9752A EV kit features an audible alert input, PC\_BEEP, on the PC board pad.

The  EV  kit  can  also  evaluate  the  MAX9752B/ MAX9752C/MAX9753/MAX9754. To evaluate these ICs, replace the MAX9752A with the desired IC. See the Evaluating the MAX9753 or the Evaluating the MAX9754 section for additional information.

The speaker and headphone outputs on the EV kit can be selected by jumper JU5 and headphone jack J1. See Table 6 in the Jumper Selection section.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9752A Evaluation Kit

## Output Filtering

The speaker outputs (OUTL+/- and OUTR+/-) can be connected directly to a pair of speaker loads without any filtering. Use the OUTL+/- and OUTR+/- test points to  connect the speakers directly to the EV kit outputs. This configuration is for a typical audio application.

The MAX9752A EV kit features PC board pads for filters that can be added to ease evaluation. Audio analyzers typically cannot accept pulse-width-modulated (PWM) signals at their inputs. The PWM output signal can be lowpass filtered by installing components L6-L9, C21-C30, and R3-R6. The filtered outputs should then be monitored at the FOUTL+/- and FOUTR+/- PC board pads. See Table 1 below for the suggested filtering component values to evaluate a 4 Ω load with a 30kHz cutoff frequency.

The MAX9752A/MAX9752B/MAX9752C/MAX9753/ MAX9754 are designed to pass FCC Class B radiated emissions without additional filtering. In applications where medium length cables are required, or the circuit is  near EMI-sensitive devices, output capacitors C17-C20 and common-mode chokes T1 and T2 can be added to reduce radiated emission. The EMI-filtered outputs should then be monitored at the TOUTL+/- and TOUTR+/- test points. Table 2 lists the recommended EMI filter components.

## Table 1. Suggested Filtering Components for a 4 Ω Load with a 30kHz Cutoff Frequency

| COMPONENT   | VALUE   |
|-------------|---------|
| L6-L9       | 15µH    |
| C21-C24     | 0.033µF |
| C25-C26     | 0.15µF  |
| C27-C30     | 0.068µF |
| R3-R6       | 22 Ω    |

## Table 3. JU1 Jumper Selection ( SHDN )

| SHUNT POSITION                                         | SHDN PIN                         | EV KIT FUNCTION                                                   |
|--------------------------------------------------------|----------------------------------|-------------------------------------------------------------------|
| 1-2 (default)                                          | High                             | Enabled                                                           |
| 2-3                                                    | Low                              | Disabled                                                          |
| None (external logic controller connected to SHDN pad) | Connected to external controller | SHDN driven by external logic controller. Shutdown is active low. |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Jumper Selection

## Shutdown Mode ( SHDN )

Jumper JU1 controls the shutdown mode ( SHDN )  of the MAX9752A/MAX9752B/MAX9752C/MAX9753/ MAX9754 ICs. The shutdown mode can also be controlled by an external logic controller connected to the EV kit SHDN pad. Remove the shunt from jumper JU1 before connecting an external controller to the SHDN PC board pad. See Table 3 for shunt positions.

Gain Selection (MAX9752A/MAX9752B/MAX9752C) For the MAX9752A/MAX9752B/MAX9752C, jumpers JU2 and JU3 provide an option to set the speaker and headphone amplifiers' maximum gain on the EV kit. See Table 4 for shunt positions.

## Analog Volume Control (MAX9752A/MAX9752B/MAX9752C)

Jumper JU4 selects between the analog volume control (VOL) for the MAX9752A/MAX9752B/MAX9752C ICs, and the right input channel when evaluating the MAX9753/MAX9754. See Table 5 for shunt positions.

## Speaker/Headphone Mode (HPS)

Jumper JU5 selects between the speaker mode and the headphone mode for the MAX9752A/MAX9752B/ MAX9752C/MAX9753/MAX9754 ICs. See Table 6 for shunt positions.

## Table 2. Recommended EMI Filter Components

| COMPONENT   | VALUE                                                                  |
|-------------|------------------------------------------------------------------------|
| C17-C20     | 100pF                                                                  |
| T1, T2      | Common-mode chokes 800 Ω at 100MHz, 50V DC, 1 ADC TDK ACM4532-801-2P-X |

## MAX9752A Evaluation Kit

## Table 4. JU2 and JU3 Jumper Selection (GAIN)

| SHUNT POSITION   | SHUNT POSITION   | SPEAKER MODE GAIN (dB) JU5 INSTALLED   | SPEAKER MODE GAIN (dB) JU5 INSTALLED   | SPEAKER MODE GAIN (dB) JU5 INSTALLED   | HEADPHONE MODE GAIN (dB) JU5 NOT INSTALLED   |
|------------------|------------------|----------------------------------------|----------------------------------------|----------------------------------------|----------------------------------------------|
| JU3 (GAIN2)      | JU2 (GAIN1)      | MAX9752A                               | MAX9752B                               | MAX9752C                               | MAX9752A or MAX9752B or MAX9752C             |
| 2-3 (Low)        | 2-3 (Low)        | 9                                      | 15                                     | 6                                      | 0                                            |
| 2-3 (Low)        | 1-2 (High)       | 10.5                                   | 16.5                                   | 7.5                                    | 0                                            |
| 1-2 (High)       | 2-3 (Low)        | 12                                     | 18                                     | 9                                      | 3                                            |
| 1-2 (High)       | 1-2 (High)       | 13.5                                   | 19.5                                   | 10.5                                   | 3                                            |

## Table 5. JU4 Jumper Selection (VOLUME)

| SHUNT POSITION   | MAX9752A/MAX9752B/MAX9752C PIN 28 (VOL)                    | EV KIT FUNCTION                                                |
|------------------|------------------------------------------------------------|----------------------------------------------------------------|
| 1-2              | Not allowed when evaluating the MAX9752A/MAX9752B/MAX9752C | See Evaluating the MAX9753 or Evaluating the MAX9754 section   |
| 2-3              | Connected to the thumb-wheel potentiometer R2              | MAX9752A/MAX9752B/MAX9752C's analog volume control is selected |

## Table 6. JU5 Jumper Selection (SPKR/HP)

| SHUNT POSITION                        | EV KIT FUNCTION       |
|---------------------------------------|-----------------------|
| Not Installed                         | Forced headphone mode |
| Installed (No headphone plug into J1) | Speaker mode          |
| Installed (Headphone plug into J1)    | Headphone mode        |

## Evaluating the MAX9753

## Required EV Kit Modification

- Replace U1 with the MAX9753 IC
- Replace R1 with a 0 Ω resistor
- Set jumper JU4 to pins 1 and 2

To evaluate the MAX9753, replace the MAX9752A with the MAX9753. The MAX9753 features a 2:1 multiplexer, allowing two sets of audio sources to be connected to the inputs of the MAX9753. The first set of audio input signals are connected to the IN\_L and IN\_R pads (same as the MAX9752A), while the second set of audio signals are connected to the PC\_BEEP (left channel) and INRB (right channel) pads. To utilize the PC\_BEEP and INRB pads for the second set of audio input signals, replace R1 with a 0 Ω resistor and install a shunt on pins 1 and 2 of jumper JU4. Either audio source is selectable by jumper JU3. The speaker and headphone amplifiers' maximum gain is set by jumper JU2. Refer to the MAX9752/MAX9753/MAX9754 IC data sheet for the correct pinout and function. The speaker and headphone outputs on the EV kit can be selected by jumper JU5 and headphone jack J1. See Table 6 in the Jumper Selection section for configuring JU5.

## MAX9753 Gain Selection

When evaluating the MAX9753, jumper JU2 provides an option to set the speaker and headphone amplifiers' maximum gain on the EV kit. See Table 7 for shunt positions.

## MAX9753 Stereo Input Selection

When evaluating the MAX9753, jumper JU3 provides an option to select between two stereo input sources. See Table 8 for shunt positions.

## MAX9753 Second Right Input Channel (INR2)

Jumper JU4 selects between the analog volume control (VOL) for the MAX9752A/MAX9752B/MAX9752C and the second right input channel (INR2) for the MAX9753. See Table 9 for shunt positions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9752A Evaluation Kit

Table 7. JU2 Jumper Selection (MAX9753 GAIN)

| SHUNT POSITION   | MAX9753 PIN 24 (GAIN) CONNECTED   |   SPEAKER MODE GAIN (dB) JU5 INSTALLED |   HEADPHONE MODE GAIN (dB) JU5 NOT INSTALLED |
|------------------|-----------------------------------|----------------------------------------|----------------------------------------------|
| 1-2              | VDD                               |                                      9 |                                            0 |
| 2-3              | GND                               |                                   10.5 |                                            3 |

Table 8. JU3 Jumper Selection (MAX9753 INPUT)

| SHUNT POSITION   | MAX9753 PIN 23 (IN1/ 2 ) CONNECTED   | STEREO INPUT SOURCE SELECTED                                               |
|------------------|--------------------------------------|----------------------------------------------------------------------------|
| 1-2              | VDD                                  | The stereo source that is connected to the IN_L and IN_R pads is selected. |
| 2-3              | GND                                  | The stereo source connected to the PC_BEEP and INRB pads is selected.*     |

Table 9. JU4 Jumper Selection (MAX9753 SECOND RIGHT INPUT)

| SHUNT POSITION   | MAX9753 PIN 28 (INR2)                              | EV KIT FUNCTION                                   |
|------------------|----------------------------------------------------|---------------------------------------------------|
| 1-2              | AC-coupled to the INRB PC board pad on the EV kit. | MAX9753's second right input channel is selected. |
| 2-3              | Not allowed when evaluating the MAX9753.           | See the Jumper Selection section.                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9752A Evaluation Kit

## Evaluating the MAX9754

## Required EV Kit Modification

- Replace U1 with the MAX9754 IC
- Replace R1 with a 0 Ω resistor
- Set jumper JU4 to pins 1 and 2
- Set jumper JU3 to pins 2 and 3

To evaluate the MAX9754, replace the MAX9752A with the MAX9754. The MAX9754's audio input signals INL and INR are connected to the PC\_BEEP and INRB PC board pads on the EV kit, respectively. To utilize the PC\_BEEP and INRB pads for audio input signals, replace resistor R1 with a 0 Ω resistor and install a shunt on pins 1 and 2 of jumper JU4. When evaluating the MAX9754, U1 pin 23 must be connected to ground for proper operation. Install a shunt on pins 2 and 3 of jumper JU3 to connect the MAX9754 pin 23 to ground. The speaker and headphone amplifiers' maximum gain is set by jumper JU2. Refer to the MAX9752/MAX9753/MAX9754 IC data sheet for  the  pinout.  The speaker and headphone outputs on the EV kit can be selected by jumper JU5 and headphone jack J1. See Table 6 in the Jumper Selection section for configuring JU5.

## MAX9754 Gain Selection

When evaluating the MAX9754, jumper JU2 provides an option to set the speaker and headphone amplifiers' maximum gain on the EV kit. See Table 10 for shunt positions.

## MAX9754 Jumper JU3

When evaluating the MAX9754, pin 23 must be connected to ground for proper operation. Install a shunt across pins 2 and 3 on jumper JU3 to connect the MAX9754 pin 23 to ground. See Table 11.

## MAX9754 Right Input Channel (INR)

Jumper JU4 selects between the analog volume control (VOL) for the MAX9752A/MAX9752B/MAX9752C and the right input channel (INR) for the MAX9754. See Table 12 for shunt positions.

Table 10. JU2 Jumper Selection (MAX9754 GAIN)

| SHUNT POSITION   | MAX9754 PIN 24 (GAIN) CONNECTED   |   SPEAKER MODE GAIN (dB) JU5 INSTALLED |   HEADPHONE MODE GAIN (dB) JU5 NOT INSTALLED |
|------------------|-----------------------------------|----------------------------------------|----------------------------------------------|
| 1-2              | VDD                               |                                      9 |                                            0 |
| 2-3              | GND                               |                                   10.5 |                                            3 |

## Table 11. JU3 Jumper Selection (MAX9754 PIN 23)

| SHUNT POSITION    | MAX9754 PIN 23 (GND) CONNECTED   | EV KIT FUNCTION   |
|-------------------|----------------------------------|-------------------|
| 1-2 (Not Allowed) | VDD (Not Allowed)                | Not Functional    |
| 2-3 (Required)    | GND                              | Normal Operation  |

## Table 12. JU4 Jumper Selection (MAX9754 INR)

| SHUNT POSITION   | MAX9754 PIN 28 (INR)                     | EV KIT FUNCTION                            |
|------------------|------------------------------------------|--------------------------------------------|
| 1-2              | AC coupled to the INRB pad on the EV kit | MAX9754's right input channel is selected. |
| 2-3              | Not allowed when evaluating the MAX9754  | See the Jumper Selection section.          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9752A Evaluation Kit

<!-- image -->

Figure 1. MAX9752A Customer Design Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9752A Evaluation Kit

Figure 2. MAX9752A EV Kit Schematic

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9752A Evaluation Kit

Figure 3. Evaluation Circuit for the MAX9753

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9

## MAX9752A Evaluation Kit

Figure 4. Evaluation Circuit for the MAX9754

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9752A Evaluation Kit

<!-- image -->

Figure 5. MAX9752A EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 6. MAX9752A EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9752A Evaluation Kit

Figure 7. MAX9752A EV Kit PC Board Layout-GND Layer 2

<!-- image -->

Figure 8. MAX9752A EV Kit PC Board Layout-VDD Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9752A Evaluation Kit

Figure 9. MAX9752A EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 10. MAX9752A EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_