<!-- lastmod 2022-08-03 -->
## General Description

The MAX9756 evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX9756. The MAX9756 is a Class AB amplifier designed to drive stereo bridge-tied-load (BTL) speakers and a stereo headphone in portable audio applications. The speaker amplifiers operate from a 4.5VDC to 5.5VDC power supply, and deliver 2 x 2.3W into a pair of 3 Ω speakers. The DirectDrive™ headphone amplifiers operate from a 3VDC to 5.5VDC power supply, and deliver 130mW continuous power into a 16 Ω stereo headphone.

The MAX9756 features an automatic level control (ALC) on the speaker amplifiers, a 31-step analog volume control,  an  audible  alert  input  (BEEP),  jumper-selectable gain, and a 150mA linear regulator.

The MAX9756 evaluation kit can be used to evaluate the features of the MAX9757 and MAX9758 only. A replacement of the MAX9757/MAX9758 IC is not possible. See the Evaluating the MAX9757/MAX9758 Features section.

| DESIGNATION         | QTY                 | DESCRIPTION                                                                                               |
|---------------------|---------------------|-----------------------------------------------------------------------------------------------------------|
| REQUIRED COMPONENTS | REQUIRED COMPONENTS | REQUIRED COMPONENTS                                                                                       |
| C1 †                | 1                   | 100µF ±20%, 6.3V X5R ceramic capacitor (1210) AVX 12106D107MAT Murata GRM32ER60J107M TDK C3225JB0J107M    |
| C2, C3              | 2                   | 0.47µF ±20%, 20V tantalum capacitors (R-case) AVX TAJR474M020                                             |
| C4                  | 1                   | 1µF ±10%, 10V X5R ceramic capacitor (0603) Kemet C0603C105K8PAC Murata GRM188R61A105K TDK C1608X5R1A105K  |
| C5, C9, C10, C11    | 4                   | 1µF ±10%, 10V X5R ceramic capacitors (0603) Kemet C0603C105K8PAC Murata GRM188R61A105K TDK C1608X5R1A105K |
| C6, C7, C8, C12-C16 | 8                   | 1µF ±10%, 6.3V X5R ceramic capacitors (0402) Kemet C0402C105K9PAC Murata GRM155R60J105K TDK C1005JB0J105K |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ♦ 4.5VDC to 5.5VDC Single-Supply Operation
- ♦ Drives 2 x 2.3W into a Pair of 3 Ω Speakers
- ♦ Drives 130mW into a 16 Ω Stereo Headphone
- ♦ Automatic Level Control on Speaker Amplifiers
- ♦ Analog Volume Control
- ♦ 150mA Linear Regulator
- ♦ Beep Input with Glitch Filter
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE    | IC PACKAGE       |
|--------------|---------------|------------------|
| MAX9756EVKIT | 0°C to +70°C* | 36 Thin QFN-EP** |

## Component List

| DESIGNATION         | QTY                 | DESCRIPTION                                                                                                 |
|---------------------|---------------------|-------------------------------------------------------------------------------------------------------------|
| REQUIRED COMPONENTS | REQUIRED COMPONENTS | REQUIRED COMPONENTS                                                                                         |
| C17 ††              | 1                   | 0.033µF ±10%, 16V X7R ceramic capacitor (0402) Kemet C0402C333K4RAC Murata GRM155R71C333K TDK C1005JB1C333K |
| J1                  | 1                   | 3.5mm switched stereo jack                                                                                  |
| R1                  | 1                   | 47k Ω ±5% resistor (0603)                                                                                   |
| R3                  | 0                   | Not installed, resistor (0603)                                                                              |
| U1                  | 1                   | MAX9756ETX (36-pin TQFN, 6mm x 6mm)                                                                         |
| -                   | 1                   | MAX9756 EV kit PC board                                                                                     |
| OPTIONAL COMPONENTS | OPTIONAL COMPONENTS | OPTIONAL COMPONENTS                                                                                         |
| C18                 | 1                   | 0.33µF ±10%, 10V X5R ceramic capacitor (0402) Murata GRM155R60J334K TDK C1005JB0J334K                       |
| C19                 | 1                   | 1µF ±10%, 6.3V X5R ceramic capacitor (0402) Kemet C0402C105K9PAC Murata GRM155R60J105K TDK C1005JB0J105K    |
| C20                 | 0                   | Not installed, capacitor (0603)                                                                             |

Maxim Integrated Products

## MAX9756 Evaluation Kit

| DESIGNATION                  | QTY                 | DESCRIPTION                     |
|------------------------------|---------------------|---------------------------------|
| OPTIONAL COMPONENTS          | OPTIONAL COMPONENTS | OPTIONAL COMPONENTS             |
| JU1, JU5, JU10, JU11, JU12   | 5                   | 2-pin headers                   |
| JU2, JU3, JU4, JU6, JU8, JU9 | 6                   | 3-pin headers                   |
| JU7                          | 1                   | 4-pin header                    |
| R2                           | 1                   | 10k Ω thumb-wheel potentiometer |

## Procedures

## Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed across pins 1 and 2 of jumper JU1 (HPVDD connected to VDD).
- 2) Verify that shunts are installed across pins 1 and 2 of  jumpers JU2, JU3, and JU4 (speaker gain = 25.5dB, headphone gain = 3dB).
- 3) Verify  that  a  shunt  is  installed  across  jumper  JU5 (speaker enable).
- 4) Verify that a shunt is installed across pins 1 and 2 of jumper JU6 (linear regulator enabled).
- 5) Verify that a shunt is installed across pins 2 and 3 of jumper JU9 (linear regulator output = 4.65V).
- 6) Verify that a shunt is installed across pins 1 and 2 of jumper JU8 (MAX9756 enabled).
- 7) Verify that a shunt is installed on jumper JU12 (ALC disabled).

## Component List (continued)

| DESIGNATION         | QTY                 | DESCRIPTION                      |
|---------------------|---------------------|----------------------------------|
| OPTIONAL COMPONENTS | OPTIONAL COMPONENTS | OPTIONAL COMPONENTS              |
| R4                  | 1                   | 100k Ω ±5% resistor (0603)       |
| R5                  | 1                   | 100k Ω potentiometer (multiturn) |
| R6                  | 1                   | 47.0k Ω ±1% resistor (0603)      |
| R7                  | 1                   | 82.0k Ω ±1% resistor (0603)      |
| -                   | 12                  | Shunts                           |

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| AVX        | 843-946-0238 | www.avxcorp.com       |
| Kemet      | 864-963-6300 | www.kemet.com         |
| Murata     | 770-436-1300 | www.murata.com        |
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9756 when contacting these manufacturers.

## Quick Start

## Recommended Equipment

- One 5V, 3A power supply
- One audio source
- Two speakers
- One headphone
- One DVM
- 8) Connect the first speaker to the OUTL+ and the OUTL- pads.
- 9) Connect the second speaker to the OUTR+ and the OUTR- pads.
- 10) Connect the +5V power supply to the VDD pad. Connect the ground terminal of the power supply to the SGND pad.
- 11) Connect the audio source to the IN\_L and the IN\_R pads. Connect the ground from the audio source to the GND pad.
- 12) Turn on the power supply and the audio source.
- 13) Adjust potentiometer R2 to change the speaker volume.
- 14) Connect the headphone to phone jack J1.
- 15) Adjust potentiometer R2 to adjust the headphone volume.
- 16) Verify the linear regulator output is approximately 4.65V.

## Detailed Description

The MAX9756 is a Class AB amplifier designed to drive stereo bridge-tied-load (BTL) speakers and a stereo headphone in portable audio applications. The speaker amplifiers operate from a 4.5VDC to 5.5VDC power supply, and deliver 2 x 2.3W power into a pair of 3 Ω speakers. The DirectDrive headphone amplifiers operate from a 3VDC to 5.5VDC power supply, and deliver 130mW continuous power into a 16 Ω stereo headphone.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

The volume of the speakers and the headphone are adjustable over 31 discrete steps by the thumb-wheel potentiometer (R2) connected to the analog volume control (VOL). The maximum gain of the MAX9756 is selectable by jumpers JU2, JU3, and JU4.

The MAX9756 features an ALC that automatically controls  output  power to the speaker preventing loudspeaker overload and provides optimized dynamic range. The MAX9756 also features an audible alert input (PC\_BEEP).

The MAX9756 has an internal low-dropout linear regulator  capable of delivering 150mA. The regulator is adjustable down to 1.23V and has a preset voltage of 4.65V. The speaker and headphone outputs on the EV kit can be selected by jumper JU5 and the headphone jack J1. See Table 3 in the Jumper Selection section.

## Table 1. JU1 Jumper Selection

| SHUNT POSITION   | FUNCTION                                                                              |
|------------------|---------------------------------------------------------------------------------------|
| Installed*       | The headphone power-supply input (HPVDD) is powered from the main power supply (VDD). |
| Not installed    | Connect a voltage source to the HPVDD and HPGND pads.                                 |

Table 2. JU2/JU3/JU4 Jumper Selection

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SPEAKER MODE GAIN, JU5 NOT INSTALLED (dB)   | HEADPHONE MODE GAIN, JU5 INSTALLED (dB)   |
|------------------|------------------|------------------|---------------------------------------------|-------------------------------------------|
| JU4 (GAIN3)      | JU3 (GAIN2)      | JU2 (GAIN1)      | SPEAKER MODE GAIN, JU5 NOT INSTALLED (dB)   | HEADPHONE MODE GAIN, JU5 INSTALLED (dB)   |
| 2-3              | 2-3              | 2-3              | +15                                         | 0                                         |
| 2-3              | 2-3              | 1-2              | +16.5                                       | 0                                         |
| 2-3              | 1-2              | 2-3              | +18                                         | +3                                        |
| 2-3              | 1-2              | 1-2              | +19.5                                       | +3                                        |
| 1-2              | 2-3              | 2-3              | +21                                         | 0                                         |
| 1-2              | 2-3              | 1-2              | +22.5                                       | 0                                         |
| 1-2              | 1-2              | 2-3              | +24                                         | +3                                        |
| 1-2*             | 1-2*             | 1-2*             | +25.5                                       | +3                                        |

Table 3. JU5 Jumper Selection

| SHUNT POSITION                            | FUNCTION              |
|-------------------------------------------|-----------------------|
| None                                      | Forced headphone mode |
| Installed* (No headphone plugged into J1) | Speaker mode          |
| Installed (Headphone plugged into J1)     | Headphone mode        |

<!-- image -->

## MAX9756 Evaluation Kit

## Jumper Selection

## Headphone Power Supply

Jumper JU1 connects the headphone power supply (HPVDD) to the main power supply (VDD). To use a different voltage for the headphone, remove the shunt from JU1 and connect the voltage source to the HPVDD and HPGND pads.

## Gain Selection

Jumpers JU2, JU3, and JU4 provide an option to set the maximum gain of the speakers and headphone amplifiers on the EV kit. See Table 2 for shunt positions.

## Speaker/Headphone Mode (HPS)

Jumper JU5 selects between the speaker mode and the headphone mode. See Table 3 for shunt positions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9756 Evaluation Kit

## Table 4. JU6 Jumper Selection

| SHUNT POSITION   | REGEN PIN   | FUNCTION           |
|------------------|-------------|--------------------|
| 1-2*             | High        | Regulator enabled  |
| 2-3              | Low         | Regulator disabled |

## Table 5. JU9 Jumper Selection

| SHUNT POSITION   | SET PIN   | FUNCTION                                                                                                                                                 |
|------------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2              | High      | The regulator's feedback input (SET) is connected to resistor-divider R6/R7. Note: The resistors installed on the EV kit set the output voltage to 3.3V. |
| 2-3*             | Low       | The regulator's feedback input (SET) is connected to GND. The output voltage is 4.65V.                                                                   |

* Default position.

## Automatic Level Control

The ALC feature limits amplifier power to protect the loudspeaker and makes dynamic inputs more intelligible by boosting low-level signals without distorting the high-level signals. Figure 1 illustrates the ALC circuitry in  action.  Refer  to  the Automatic Level Control (ALC) section of the MAX9756/MAX9757/MAX9758 data sheet and see the Designing with Maxim's Automatic Level Control (ALC) section for more information.

## Automatic Level-Control Timing

Jumpers JU7, JU10, and JU11 set the timing of the MAX9756's ALC feature. Jumper JU7 sets the voltage potential  at  the  DR  pin,  which  determines  the  release time. Jumpers JU10 and JU11 determine the attack time by setting the capacitance on the CT pin. Jumper JU12 shorts the CT pin to GND, disabling the ALC feature. See Tables 6 and 7 for shunt positions.

Figure 1. Full Cycle of the Automatic Level Control. (The hold time of a MAX9756 amplifier is set at a fixed 50ms while the attack time and attack to release time ratio can be adjusted by external components).

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 6. JU7/JU10/JU11 Jumper Selection

|                |                |          |             | RELEASE TIME   | RELEASE TIME   | RELEASE TIME   |
|----------------|----------------|----------|-------------|----------------|----------------|----------------|
| JU10           | JU11           | CCT (µF) | ATTACK TIME | 1-4            | JU7 1-3        | 1-2*           |
| Not installed* | Not installed* | 0.033    | 495µs       | 99ms           | 313ms          | 990ms          |
| Installed      | Not installed  | 0.363    | 5.45ms      | 1.09s          | 3.45s          | 10.9s          |
| Installed      | Installed      | 1.363    | 20.45ms     | 4.09s          | 12.9s          | 40.9s          |

Table 7. JU12 Jumper Selection

| SHUNT POSITION   | FUNCTION     |
|------------------|--------------|
| Not installed    | ALC enabled  |
| Installed*       | ALC disabled |

* Default position.

## Output Power Threshold

Resistor R4 in series with potentiometer R5 adjusts the output power threshold of the MAX9756. Resistor R3 is shipped uninstalled, but is made available for occasions where a single resistor is desired for evaluation. In this case, leave resistor R4 open.

## Shutdown Mode ( SHDN )

Jumper JU8 controls the shutdown pin ( SHDN )  of  the MAX9756 IC. See Table 8 for shunt positions.

## Table 8. JU8 Jumper Selection

| SHUNT POSITION   | SHDN PIN   | FUNCTION         |
|------------------|------------|------------------|
| 1-2*             | High       | MAX9756 enabled  |
| 2-3              | Low        | MAX9756 disabled |

## Analog Volume Control

The thumb-wheel potentiometer R2 adjusts the volume of the speakers and the headphone over 31 discrete steps.

## Low-Dropout Linear Regulator

Jumper JU6 enables/disables the regulator. Jumper JU9 connects the regulator's feedback input (SET) to either  GND or to resistor-divider R6/R7. See Tables 4

<!-- image -->

and 5 for shunt positions. The resistors installed on the MAX9756 EV kit set the output voltage to 3.3V. To change the voltage, replace R6 and R7. Use the following equation to select resistor values:

<!-- formula-not-decoded -->

where VSET = 1.23V. Choose resistor values between 10k Ω and 1M Ω .

## Evaluating the MAX9757/MAX9758 Features

To evaluate the features of the MAX9757, disable the LDO of the MAX9756 by installing a shunt across pins 2 and 3 of jumper JU6.

To evaluate the features of the MAX9758, disable the ALC of the MAX9756 by installing a shunt on jumper JU12.

## Designing with Maxim's Automatic Level Control

The power threshold and attack/release time constants of Maxim's automatic level control circuitry require optimization for each application. The MAX9756 EV kit is constructed to allow for quick and efficient evaluation of ALC settings.

When custom designing the MAX9756 ALC function for a specific application, follow these steps to ensure optimum performance:

Step 1. Define the output power threshold.

Step 2. Define the gain setting.

Step 3. Define the attack time.

Step 4. Define the attack to release time ratio.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9756 Evaluation Kit

## MAX9756 Evaluation Kit

## Step 1. Define the Output Power Threshold

The output power threshold is defined by the desired power rating (POUT) and the nominal impedance (RL) of  the  application's  speakers.  To  set  the  threshold  at which the speaker output is clamped, an external resistor must be connected from PREF to ground. The suggested external resistor range is from 100k Ω to 200k Ω (for best results use a 1% resistor). Leave PREF unconnected to disable the ALC function.

Use the following equation to select the value of PPREF for  the  desired maximum continuous output power level, POUT, assuming a sine-wave input signal:

<!-- formula-not-decoded -->

Note the MAX9756 ALC circuitry is based on a peak signal detection algorithm. If a heavily clipped signal is passed to the speaker, the resulting increased continuous output power can potentially damage the speaker. Take two waveforms with equal amplitude, for example (Figure 2). The RMS voltage of the square wave is 1.414 times the peak voltage of the sine wave. In terms of power, the total power of the square wave is double the power of the sine wave.

The MAX9756 EV kit provides resistor R4 in series with potentiometer R5 to adjust the output power threshold of the MAX9756. The series resistance of R4 and R5 is referred to as RPREF. Resistor R3 is shipped uninstalled, but is made available for occasions where a single resistor  is  desired for evaluation. If resistor R3 is installed, uninstall resistor R4.

## Step 2. Define the Gain Setting

Accurately defining the gain setting of the MAX9756 amplifier is key to obtaining optimum ALC performance. The overall gain structure must be set to ensure the ALC circuitry is fully limiting with full-scale signals. This gain structure will ensure the amplifier quickly responds to  an  overdriven output condition. The design of the MAX9756 limits ALC gain reduction to a maximum of 6dB, after which the output voltage will increase above the defined threshold.

Select the gain (AV) of the amplifier so that a full-scale input  signal  (VINFS)  produces a fully  compressed output at the output threshold defined in Step 1.

<!-- formula-not-decoded -->

where VINFS is an RMS value.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. RMS Voltage of a Sine Wave vs. RMS Voltage of a Square Wave

<!-- image -->

Figure 3. Amplifier Gain Selection

<!-- image -->

If  the  ideal  value  is  not  available  from  the  fixed-gain options of the MAX9756, choose the closest setting to the above.

Once a gain setting is selected, test the ALC threshold with a 0dBFS, 1kHz input signal. Monitor the CT pin of the MAX9756 to ensure the ALC circuitry is active. The voltage at CT should be more than 3.5V under these conditions. Increase the amplifier gain setting if the voltage at CT does not go above 3.5V with a 0dBFS input.

Jumpers JU2, JU3, and JU4 of the MAX9756 EV kit provide an option to set the maximum gain of the speakers and headphone amplifiers on the EV kit. See Table 2 for shunt positions.

<!-- image -->

## Step 3. Define the Attack Time

The attack time is the time it takes to reduce the gain after the input signal has exceeded the threshold level. The gain attenuation in attack is exponential and the attack time is defined as one time constant. The time constant of the attack is given by 15,000 x CCT seconds (where CCT is the external timing capacitor). Suggested attack time range is from 150µs to 50ms.

- Use a short attack time for the ALC to react quickly to  transient  signals,  such as snare drum beats (music) or gun shots (DVD). Short time constants will  cause the ALC to rapidly follow changing signal levels and minimize the time when the signal is large, but the gain has not yet been reduced. This ensures that large signals will not damage loudspeakers and will provide maximum speaker protection,  which  can  result  in  audible  artifacts  such as 'pumping' and 'breathing' as the gain is rapidly adjusted to follow the dynamics of the signal.
- Use a longer attack time to allow the ALC to ignore short-duration peaks and only reduce the gain when a sustained increase in loudness occurs. For movie soundtracks, where there is constantly changing signal level, longer attack times are better suited to maximize sound quality. In this case, the gain is held relatively fixed for rapid changes in signal level, and only adjusts when there is a longterm change that gives the amplifier sufficient time to  react.  This  will  maximize sound quality and still provides speaker protection as the duration of excessively large or clipped output signals is significantly  reduced in comparison to the uncompressed output waveform. Avoid selecting the attack time too long as it can result in some damage to the loudspeaker under harsh conditions.

<!-- image -->

## MAX9756 Evaluation Kit

The MAX9756 EV kit provides capacitors C17, C18, and C19 to set the attack time of the MAX9756 ALC circuitry. Jumpers JU10 and JU11 select the capacitance at CT. See Table 6 for shunt positions.

Note that the attack time is related to the release time by a ratio set by the DR pin. Understand this relationship when selecting the capacitance of the external timing capacitor (CCT).

## Step 4. Define the Attack to Release Time Ratio

The release time is how long it takes for the gain to return to its normal level after the input signal has fallen below the threshold level and the 50ms hold time has expired. Release time is defined as a release from 6dB gain compression to 10% of the nominal gain setting after  the  input  signal  has  fallen  below  PREF  threshold and the 50ms hold time has expired. Release time is linear  in  dB  with  time  and  is  inversely  proportional  to the magnitude of gain compression in dB. Release time is  adjustable between 99ms and 40.9s on this evaluation  kit.  Customer  optimized  values  of  CT  can  extend these limits further if desired.

Release and attack times are set by selecting the capacitance value between CT and GND, and by setting  the  logic  state  of  DR  (Table  9).  DR  is  a  tri-state logic input that sets the attack-to-release time ratio.

- Use a small ratio to maximize the speed of the ALC, providing best speaker protection.
- Use a large ratio to maximize the sound quality and prevent repeated excursions above the threshold from being independently adjusted by the ALC.

Table 9. Release to Attack Ratio

| DR     |   RELEASE/ATTACK RATIO |
|--------|------------------------|
| V DD   |                    200 |
| V BIAS |                    633 |
| GND    |                   2000 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9756 Evaluation Kit

The effect of long vs. short attack and release times is shown in Figure 4 by monitoring the gain reduction control voltage (CT pin) and the output signal waveform. To produce representative waveforms the input signal was a full-volume music signal. The short attack and release time clearly results in frequent adjustments to the gain during a passage that, overall, has relatively constant signal strength. The longer attack and release times prevent the amplifier from overreacting and help maintain a smooth gain response, thus preserving more of  the  dynamics of the signal while still keeping the overall signal level in check.

The MAX9756 EV kit provides jumper JU7 for setting the logic state of DR. See Table 6 for shunt positions.

## MAX9756 ALC Overview

Be careful to define each parameter based on the application's expected use (i.e., typical source material),  speaker impedance, and speaker power rating. See Table 2 for output power threshold calculations and attack/release time settings.

For notebook applications in which music CDs and DVDs are the typical audio source, Maxim recommends an attack time of 495µs and a release time of 990ms with an output power threshold of 1.2W (RL = 8 Ω ). Begin with this setting for your initial evaluation. If the sound quality is not satisfactory, alter the attack and release time scales to obtain optimum results. To hear or  measure the effect of the ALC settings chosen, a rapid comparison can be made by simply shorting the CT pin to GND, disabling ALC.

Figure 4. The first image illustrates the effect of designing short attack and release times. The gain makes frequent changes, which can result in undesirable sound. The second image shows the effect of longer attack and release times; showing a smoother gain response.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9756 Evaluation Kit

| STEP   | PIN     | NAME                | COMPONENT DESIGNATOR                                                                                      | DESCRIPTION                                                                                                                                                                                                                                    | EQUATIONS                                                         | EQUATIONS                                     |
|--------|---------|---------------------|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------|
| STEP 1 | 29      | PREF                | R PREF = R4 + R5                                                                                          | Power-Limiting Input Resistor. Connect a resistor from PREF to GND to set the speaker output clamping level. Leave PREF unconnected to disable ALC.                                                                                            | Sine-Wave Output P k P R PREF L =    ×       180 1 8 Ω . | OUT    166                                 |
| STEP 2 | 2, 3, 4 | GAIN1, GAIN2, GAIN3 | JU2, JU3, JU4                                                                                             | Gain Selection. GAIN1, GAIN2, and GAIN3 inputs set the maximum gain for the speaker and headphone amplifiers. Select the gain of the amplifier so that the full-scale output signal is fully compressed at the defined output power threshold. | A P R V V V V OUT L INFS = × [ ( ) ]/ [ / ] 2                     | A P R V V V V OUT L INFS = × [ ( ) ]/ [ / ] 2 |
| STEP 3 | 35      | CT                  | If JU10 and JU11 are installed: CCT = C17 + C18 + C19 If JU10 is installed: CCT = C17 + C18 or: CCT = C17 | Automatic Level Control Attack and Release-Timing Capacitor. Connect CT to GND to disable ALC.                                                                                                                                                 | CCT = t ATTACK / 15,000 [F]                                       | CCT = t ATTACK / 15,000 [F]                   |
| STEP 4 | 25      | DR                  | JU7                                                                                                       | Automatic Level Control Attack to Release Time Ratio Select. Hardwire to V DD , GND, or BIAS to set the attack to release ratio.                                                                                                               | DR                                                                | RELEASE/ ATTACK RATIO                         |
| STEP 4 | 25      | DR                  | JU7                                                                                                       | Automatic Level Control Attack to Release Time Ratio Select. Hardwire to V DD , GND, or BIAS to set the attack to release ratio.                                                                                                               | V DD                                                              | 200                                           |
| STEP 4 | 25      | DR                  | JU7                                                                                                       | Automatic Level Control Attack to Release Time Ratio Select. Hardwire to V DD , GND, or BIAS to set the attack to release ratio.                                                                                                               | GND                                                               | 633                                           |
| STEP 4 | 25      | DR                  | JU7                                                                                                       | Automatic Level Control Attack to Release Time Ratio Select. Hardwire to V DD , GND, or BIAS to set the attack to release ratio.                                                                                                               | BIAS                                                              | 2000                                          |

Table 10. Electrical Components Description for Automatic Level Control Design

<!-- image -->

Figure 5. Recommended Output Power Threshold, Attack, and Release Time Components

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9756 Evaluation Kit

Figure 6. MAX9756 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 7. MAX9756 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9756 Evaluation Kit

Figure 8. MAX9756 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9756 Evaluation Kit

Figure 9. MAX9756 EV Kit PC Board Layout-Layer 2

<!-- image -->

Figure 10. MAX9756 EV Kit PC Board Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 11. MAX9756 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9756 Evaluation Kit