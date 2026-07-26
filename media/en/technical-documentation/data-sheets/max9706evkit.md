<!-- lastmod 2022-08-03 -->
## General Description

The MAX9706 evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX9706 as well as the MAX9707 ICs. The MAX9706/MAX9707 contain three Class D amplifiers with an internal active crossover to provide stereo highpass outputs and a mono lowpass output. The IC does not require any external components for the active crossover filter. The MAX9706 also features a DirectDrive TM stereo headphone amplifier.

The MAX9706 speaker amplifier operates from a 4.5V to 5.5V DC power supply, and delivers 2.3W continuous power into each of three 4 Ω speakers. Three different speaker output filtering options are available for ease of evaluation (see the Output Filtering section).

The MAX9706 headphone amplifier operates from a 3V to 5.5V DC power supply, and delivers up to 95mW per channel into a 16 Ω stereo headphone. When the MAX9706 headphone sense detects the insertion of a headphone, the MAX9706 automatically enters the headphone mode.

The EV kit offers an option to select between fixed-frequency modulation (FFM) mode or spread-spectrum modulation (SSM) mode. The EV kit can be synchronized with an external clock, and the EV kit provides a synchronization output that allows multiple units to be cascaded in a system.

The MAX9706 EV kit gain is jumper selectable. The EV kit  also  features  an  option  to  select  the  crossover  frequency between the stereo highpass outputs and the mono lowpass output. The MAX9706 shutdown supply current is only 0.5µA (typ).

| DESIGNATION                    |   QTY | DESCRIPTION                                                       |
|--------------------------------|-------|-------------------------------------------------------------------|
| C3, C5                         |     2 | 0.1µF ±10%, 10V X7R ceramic capacitors (0402) TDK C1005X7R1A104K  |
| C4, C6, C7, C10, C12, C13, C14 |     7 | 1µF ±10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A105K    |
| C8, C9, C11                    |     3 | 0.47µF ±10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A474K |
| U1                             |     1 | MAX9706ETX (36-pin TQFN-EP, 6mm x 6mm)                            |

Component List continued on next page.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ♦ 4.5V to 5.5V Single DC Power-Supply Operation
- ♦ Drives 3 x 2.3W into Three 4 Ω Speakers (2.1 Speaker Solutions)
- ♦ Drives 2 x 95mW into a 16 Ω Stereo Headphone (MAX9706)
- ♦ Internal Active Crossover Filter with Selectable Crossover Frequency
- ♦ Selectable Gains
- ♦ Selectable Between Spread-Spectrum and FixedFrequency Modulation
- ♦ Input and Output Synchronization Signals
- ♦ 0.5µA (typ) Shutdown Current
- ♦ Space-Saving 36-Pin TQFN (6mm x 6mm x 0.8mm) Package
- ♦ Fully Assembled and Tested
- ♦ Evaluates MAX9707 (IC Replacement Required)

## Ordering Information

| PART         | TEMP RANGE    | IC PACKAGE                       |
|--------------|---------------|----------------------------------|
| MAX9706EVKIT | 0°C to +70°C* | 36-TQFN-EP** (6mm x 6mm x 0.8mm) |

## Component List

| DESIGNATION                                 | QTY                                         | DESCRIPTION                                                       |
|---------------------------------------------|---------------------------------------------|-------------------------------------------------------------------|
| OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION                       |
| C1, C36                                     | 2                                           | 1000pF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H102K |
| C2 †                                        | 1                                           | 100µF ±20%, 6.3V X5R ceramic capacitor (1210) TDK C3225X5R0J107M  |
| C15-C35                                     | 0                                           | Not installed, capacitors (0603)                                  |
| C37, C38                                    | 2                                           | 100pF ±10%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H101K  |

## MAX9706 Evaluation Kit

| DESIGNATION                                 | QTY                                         | DESCRIPTION                                                           |
|---------------------------------------------|---------------------------------------------|-----------------------------------------------------------------------|
| OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION                           |
| J1                                          | 1                                           | 3.5mm switched stereo jack                                            |
| JU1-JU7                                     | 7                                           | 3-pin headers                                                         |
| JU8                                         | 1                                           | 2-pin header                                                          |
| L1                                          | 1                                           | Ferrite bead, 30 Ω at 100MHz, 10m Ω DCR, 5A (0805) TDK MPZ2012S300A   |
| L2, L3, L10                                 | 3                                           | Ferrite beads, 100 Ω at 100MHz, 50m Ω DCR, 3A (0603) TDK MPZ1608S101A |

## Procedures

The MAX9706 EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Install  a  shunt  across  pins  1  and  2  of  jumper  JU1 (EV kit ON).
- 2) Install  a  shunt  across  pins  1  and  2  of  jumper  JU2 (mono speaker gain offset = -7.5dB).
- 3) Install a shunt across pins 1 and 2 of jumpers JU3 and JU4 (stereo speaker gain = +13.5dB, mono speaker gain = +12dB, headphone gain = +3dB).
- 4) Install a shunt across pins 1 and 2 of jumpers JU5 and JU6 (crossover frequency = 2133.3Hz).
- 5) Install  a  shunt  across  pins  1  and  2  of  jumper  JU7 (SSM mode with frequency = 1150kHz ±50kHz).
- 6) Install a shunt on jumper JU8 (speaker enable).

## Component List (continued)

| DESIGNATION                                 | QTY                                         | DESCRIPTION                                                                                       |
|---------------------------------------------|---------------------------------------------|---------------------------------------------------------------------------------------------------|
| OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION                                                       |
| L4-L9                                       | 0                                           | Not installed, inductors Sumida CDRH6D38 series recommended                                       |
| R1-R6                                       | 0                                           | Not installed, resistors (0603)                                                                   |
| T1, T2, T3                                  | 0                                           | Not installed, common-mode chokes 50VDC, 1.5ADC, 600 Ω at 100MHz TDK ACM4532-601-2P-X recommended |
| -                                           | 8                                           | Shunts                                                                                            |
| -                                           | 1                                           | MAX9706 EV kit PC board                                                                           |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| Sumida USA | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX9706 EV kit when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- One 5V, 2A DC power supply
- Optional 3V, 1A DC power supply
- Audio source
- Three 4 Ω to 8 Ω speakers
- Stereo headphone
- 7) Connect the first speaker to the OUTL+ and the OUTL- test points.
- 8) Connect the second speaker to the OUTR+ and the OUTR- test points.
- 9) Connect the third speaker to the OUTM+ and the OUTM- test points.
- 10) Connect the +5V DC power supply to the VDD pad. Connect the power-supply ground to the GND pad.
- 11) Connect the +3V DC power supply to the HPVDD pad. Connect the power-supply ground to the GND pad. If the optional +3V DC power supply is not available, connect the HPVDD pad to the VDD pad.
- 12) Connect the audio source to the IN\_L and the IN\_R pads. Connect the audio source ground to the GND pad.
- 13) Turn on both power supplies and the audio source.
- 14) To test the headphone, plug the headphone to the phone jack J1.

## Detailed Description

The MAX9706 EV kit is designed to evaluate the MAX9706 as well as the MAX9707 ICs. The MAX9706/ MAX9707 contain three Class D amplifiers with an internal active crossover to provide stereo highpass outputs and a mono lowpass output. The MAX9706 also features a DirectDrive stereo headphone amplifier. The EV kit comes with the MAX9706 IC installed.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The EV kit's speaker amplifiers operate from a 4.5V to 5.5V DC power supply, and deliver 3 x 2.3W continuous power into three 4 Ω speakers. Three different speaker output filtering options are available for ease of evaluation. See the Output Filtering section.

The EV kit's DirectDrive headphone amplifier operates from a 3V to 5.5V DC power supply, and delivers 95mW per channel into a 16 Ω stereo headphone. Both the speaker and headphone power supplies must be present to operate the EV kit. The EV kit can be powered by a single 4.5V to 5.5V DC power supply.

The EV kit offers an option to select between two frequencies when in fixed-frequency modulation (FFM) mode or a single-center frequency in spread-spectrum modulation (SSM) mode. The MAX9706 EV kit features a synchronization input (SYNCIN) PC board pad that allows the MAX9706 to synchronize with an external clock. The EV kit also provides a synchronization output (SYNCOUT) PC board pad to synchronize other devices to the MAX9706. Refer to the Operating Modes section in the MAX9706/ MAX9707 IC data sheet for additional information on FFM, SSM, SYNCIN, and SYNCOUT.

The MAX9706's speaker and headphone amplifier gain is configurable using jumpers JU3 and JU4. The mono output gain offset is configurable using jumper JU2. The MAX9706 EV kit also provides a line-level monooutput MONO\_OUT PC board pad.

The MAX9706 EV kit features an option to select the crossover frequency between the stereo highpass and mono lowpass frequencies. The crossover frequency is jumper selectable using jumpers JU5 and JU6. Refer to

## Table 1. Suggested Filtering Components for a 4 Ω Load with a 30kHz Cutoff Frequency

| COMPONENT     | DESCRIPTION                                                        |
|---------------|--------------------------------------------------------------------|
| C21-C26       | 0.033µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E333K |
| C27, C28, C29 | 0.15µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E154K  |
| C30-C35       | 0.068µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E683K |
| L4-L9         | 22µH ±20%, 1.3A inductors Sumida CDRH6D38-220                      |
| R1-R6         | 22 Ω ±5% resistors (0603)                                          |

## MAX9706 Evaluation Kit

the Crossover Frequency section in the MAX9706/ MAX9707 IC data sheet for additional information on the internal active crossover.

The speaker and headphone outputs on the EV kit can be selected by jumper JU8 and headphone jack J1. See Table 8 in the Jumper Selection section.

The EV kit can also evaluate the MAX9707. To evaluate the MAX9707, replace the MAX9706 with the MAX9707. See the Evaluating the MAX9707 section.

## Output Filtering

The speaker outputs (OUTL+/-, OUTR+/-, and OUTM+/-) can be connected directly to three speaker loads without any filtering. Use the OUTL+/-, OUTR+/-, and OUTM+/test points to connect the left, right, and mono speakers directly to the EV kit.

The MAX9706 EV kit features PC board pads for filters that can be added to ease evaluation. Audio analyzers typically  cannot  accept pulse-width-modulated (PWM) signals at their inputs. The PWM output signal can be lowpass-filtered by installing components: L4-L9, C21-C35, and R1-R6 to use the filtering output pads (FOUTL+/-, FOUTR+/-, and FOUTM+/-). See Table 1 for the suggested filtering component values to evaluate a 4 Ω load with a 30kHz cutoff frequency.

The MAX9706/MAX9707 are designed to pass FCC Class B RF emissions without additional filtering. In applications where a long cable is required, or the circuit  is  near  EMI-sensitive  devices,  output  capacitors C15-C20, and common-mode chokes T1-T3, can be added to reduce radiated emissions. Table 2 lists the recommended EMI filter components. Refer to the Applications Information, Filterless Class D Operation section in the MAX9706/MAX9707 IC data sheet for additional information.

## Table 2. Recommended EMI Filter Components

| COMPONENT   | DESCRIPTION                                                             |
|-------------|-------------------------------------------------------------------------|
| C15-C20     | 100pF ±10%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H101K        |
| T1, T2, T3  | Common-mode chokes, 50VDC, 1.5ADC, 600 Ω at 100MHz TDK ACM4532-601-2P-X |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9706 Evaluation Kit

## Jumper Selection

## Shutdown Mode ( SHDN )

Jumper JU1 controls the shutdown mode ( SHDN ) of the MAX9706/MAX9707 ICs. The shutdown mode can also be controlled by an external logic controller connected to  the  EV  kit SHDN PC board pad. Remove the shunt from jumper JU1 before connecting an external controller  to  the SHDN PC board pad. See Table 3 for shunt positions.

## Mono Gain Offset Selection (MGAIN)

The MAX9706/MAX9707's mono channel is the sum of the left and right channels. Therefore, the mono channel has a +6dB gain higher than that of the left or the right  channels. The MAX9706/MAX9707 provides an option to offset this +6dB gain. Jumper JU2 selects the mono amplifier gain offset on the EV kit. See Table 4 for shunt positions.

## Gain Selection (GAIN1, GAIN2)

Jumpers JU3 and JU4 provide an option to set the speaker and headphone amplifiers' gain on the EV kit.

## Table 3. JU1 Jumper Selection ( SHDN )

| SHUNT POSITION                                         | SHDN PIN                          | EV KIT FUNCTION                                                   |
|--------------------------------------------------------|-----------------------------------|-------------------------------------------------------------------|
| 1-2 (Default)                                          | High                              | Enabled                                                           |
| 2-3                                                    | Low                               | Disabled                                                          |
| None. External logic controller connected to SHDN pad. | Connected to external controller. | SHDN driven by external logic controller. Shutdown is active low. |

See Table 5 for shunt positions. Note that the stereo speaker outputs are highpass-filtered by the crossover circuitry.  The  mono  speaker output is lowpass-filtered by the crossover circuitry while the stereo headphone output has full bandwidth.

## Crossover Frequency Selection (FS0, FS1)

Jumpers JU5 and JU6 provide an option to set the crossover frequency between stereo highpass outputs and the mono lowpass output for the MAX9706 EV kit. See Table 6 for shunt positions.

## Synchronous Switching Input (SYNCIN)

The MAX9706 EV kit provides a SYNCIN PC board pad that allows the MAX9706/MAX9707 switching frequency to  synchronize to an external TTL clock. The external clock frequency can range from 1MHz to 1.5MHz and can have any duty cycle, but the minimum pulse width must be greater than 100ns. The SYNCIN input on the EV kit also selects between the FFM and SSM mode for the MAX9706. Jumper JU7 selects between the FFM and SSM mode options for the MAX9706/MAX9707 ICs. See Table 7 for shunt positions.

## Table 4. JU2 Jumper Selection (MGAIN Offset)

| SHUNT POSITION   | MGAIN PIN   |   MONO AMPLIFIER GAIN OFFSET (dB) |
|------------------|-------------|-----------------------------------|
| 1-2*             | High        |                              -7.5 |
| Not Installed*   | Unconnected |                              -6.0 |
| 2-3*             | Low         |                              -4.5 |

## Table 5. JU3 and JU4 Jumper Selection (GAIN)

| SHUNT POSITION   | SHUNT POSITION   | SPEAKER GAIN (dB) JU8 INSTALLED JU2 NOT INSTALLED   | HEADPHONE GAIN (dB) JU8 NOT INSTALLED   |
|------------------|------------------|-----------------------------------------------------|-----------------------------------------|
| JU3 (GAIN2)      | JU4 (GAIN1)      | SPEAKER GAIN (dB) JU8 INSTALLED JU2 NOT INSTALLED   | HEADPHONE GAIN (dB) JU8 NOT INSTALLED   |
| 2-3 (Low)        | 2-3 (Low)        | +9.0                                                | 0                                       |
| 2-3 (Low)        | 1-2 (High)       | +10.5                                               | 0                                       |
| 1-2 (High)       | 2-3 (Low)        | +12.0                                               | +3                                      |
| 1-2 (High)       | 1-2 (High)       | +13.5                                               | +3                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Speaker/Headphone Mode (HPS)

Jumper JU8 selects between the speaker mode and the headphone mode for the MAX9706 EV kit. See Table 8 for shunt positions.

## Table 6. JU5 and JU6 Jumper Selection (Crossover Frequency)

| SHUNT POSITION   | SHUNT POSITION   |                          |
|------------------|------------------|--------------------------|
| JU5 (FS0)        | JU6 (FS1)        | CROSSOVER FREQUENCY (Hz) |
| 2-3 (Low)        | 2-3 (Low)        | 800                      |
| 2-3 (Low)        | 1-2 (High)       | 1066.7                   |
| 1-2 (High)       | 2-3 (Low)        | 1600                     |
| 1-2 (High)       | 1-2 (High)       | 2133.3                   |

## Table 7. JU7 Jumper Selection (Switching Frequency)

| SHUNT POSITION                                                | SYNC_IN CONNECTED TO                       | OPERATING MODE                             |
|---------------------------------------------------------------|--------------------------------------------|--------------------------------------------|
| 1-2 (Default)                                                 | VDD                                        | SSM with f OSC = 1150kHz ± 50kHz           |
| Not Installed                                                 | Unconnected                                | FFM with f OSC = 1340kHz                   |
| 2-3                                                           | GND                                        | FFM with f OSC = 1100kHz                   |
| Not Installed. External clock source connected to SYNCIN pad. | External clock source from 1MHz to 1.5MHz. | FFM with f OSC = external clock frequency. |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9706 Evaluation Kit

## Evaluating the MAX9707

To evaluate the MAX9707, replace the MAX9706 IC with the MAX9707 IC. Refer to the MAX9706/MAX9707 IC data sheet for the pinout and function.

## Table 8. JU8 Jumper Selection (SPKR/HP)

| SHUNT POSITION                           | EV KIT FUNCTION       |
|------------------------------------------|-----------------------|
| Not Installed                            | Forced headphone mode |
| Installed (No headphone plugged into J1) | Speaker mode          |
| Installed (Headphone plugged into J1)    | Headphone mode        |

## MAX9706 Evaluation Kit

Figure 1. MAX9706 Customer Design Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9706 Evaluation Kit

<!-- image -->

Figure 2. MAX9706 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9706 Evaluation Kit

Figure 3. MAX9706 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9706 Evaluation Kit

Figure 4. MAX9706 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9706 Evaluation Kit

Figure 5. MAX9706 EV Kit PC Board Layout-GND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9706 Evaluation Kit

<!-- image -->

Figure 6. MAX9706 EV Kit PC Board Layout-VDD Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9706 Evaluation Kit

Figure 7. MAX9706 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9706 Evaluation Kit

Figure 8. MAX9706 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

13