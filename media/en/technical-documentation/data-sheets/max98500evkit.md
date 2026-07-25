<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX98500 Evaluation Kit

## General Description

## Features

The MAX98500 evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX98500 boosted  Class  D  amplifier  to  drive  a  mono  bridge-tied-load (BTL) speaker in portable audio applications. Designed to operate from a 2.5V to 5.5V DC power supply, the EV kit  delivers  2.2W  into  an  8 I load.  The  EV  kit  accepts differential or single-ended input signals, features three selectable gain settings (6dB, 15.5dB, and 20dB), and provides separate speaker and boost shutdown inputs.

- S 2.5V to 5.5V Single-Supply Operation
- S Output Power: 2.2W into 8 ω , 10% THD+N
- S Selectable Gain Settings (6dB, 15.5dB, and 20dB)
- S Boosted Class D Output
- S Differential or Single-Ended Input Signals
- S Boost Converter Shutdown
- S Speaker Output Shutdown
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX98500EVKIT+ | EV Kit |

## Component List

| DESIGNATION         | QTY                 | DESCRIPTION                                                                                  |
|---------------------|---------------------|----------------------------------------------------------------------------------------------|
| REQUIRED COMPONENTS | REQUIRED COMPONENTS | REQUIRED COMPONENTS                                                                          |
| C1                  | 1                   | 10 F F Q 10%, 6.3V X7R ceramic capacitor (0805) Murata GRM21BR70J106K TDK C2012X7R0J106K     |
| C2                  | 1                   | 22 F F Q 20%, 16V X5R ceramic capacitor (1206) Murata GRM31CR61226M Taiyo Yuden EMK316BJ226M |
| C3, C4              | 2                   | 1 F F Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E105K Murata GRM188R71E105M   |
| C5                  | 1                   | 22 F F Q 10%, 6.3V X5R ceramic capacitor (0805) Murata GRM21BR60J226M TDK C2012X5R0J226K     |
| C8                  | 1                   | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K TDK C1005X7R1C104K     |
| C9, C10             | 0                   | Not installed, ceramic capacitors (0402)                                                     |
| C12, C13            | 0                   | Not installed, ceramic capacitors (0603)                                                     |

| DESIGNATION             |   QTY | DESCRIPTION                                                                                                                                              |
|-------------------------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| C14-C18                 |     5 | 0.22 F F Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E224K TDK C1608X7R1E224K                                                               |
| FB1                     |     1 | 0 I resistor (0603)                                                                                                                                      |
| FB2, FB3                |     0 | Not installed, ferrite beads (0603)                                                                                                                      |
| J1                      |     1 | Phono jack, black (side-entry PCB mount)                                                                                                                 |
| JU1, JU2, JU3           |     3 | 3-pin headers                                                                                                                                            |
| JU4                     |     1 | 2-pin header                                                                                                                                             |
| L1                      |     1 | 2.2 F H, 34m I , 4.5A inductor TOKO FDV0530S-2R2M (5mm x 5mm x 3mm) TDK LTF5022T-2R2N3R2-LC (5mm x 5mm x 2.2mm) NEC MPLC0525L2R2 (5.2mm x 6.2mm x 2.5mm) |
| L2, L3                  |     0 | Not installed, inductors TOKO A916CY-220M (provided with EV kit)                                                                                         |
| OUT-, OUT+, PGND, RKNEE |     4 | Test points                                                                                                                                              |
| R1                      |     1 | 27.4kω Q 1% resistor (0603)                                                                                                                              |
| R2, R3                  |     2 | 22ω Q 5% resistors (0603)                                                                                                                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX98500 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                           |
|---------------|-------|-------------------------------------------------------|
| U1            |     1 | Boosted Class D amplifier (16 WLP) Maxim MAX98500EWE+ |
| VCCOUT        |     0 | Not installed, test point                             |
| -             |     4 | Shunts                                                |
| -             |     1 | PCB: MAX98500 EVALUATION KIT+                         |

| DESIGNATION         | QTY                 | DESCRIPTION                                           |
|---------------------|---------------------|-------------------------------------------------------|
| OPTIONAL COMPONENTS | OPTIONAL COMPONENTS | OPTIONAL COMPONENTS                                   |
| L2, L3              | 2                   | 22 F H Q 20%, 0.7A inductors (D63CB) TOKO A916CY-220M |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| NEC TOKIN America, Inc.                | 408-324-1790 | www.nec-tokinamerica.com    |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX98500 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 2.5V	to	5.5V,	4A	DC	power	supply
- 8 I speaker
- Mono	audio	signal	source
- 5) Verify that the audio source output is disabled.
- 6) Connect the mono audio source between the IN+ and IN- pads or J1 on the EV kit.
- 7) Connect  the  speaker  across  the  OUT+  and  OUTtest points.
- 8) Enable the power-supply output.
- 9) Enable the audio source.
- 10)  Verify that the speaker is playing the audio source signal.

## Detailed Description of Hardware

The MAX98500 EV kit features the MAX98500 boosted Class  D  amplifier  IC,  designed  to  drive  a  BTL  mono speaker  in  portable  audio  applications.  The  EV  kit accepts a differential or single-ended audio input, features  three  selectable  gain  settings  (6dB,  15.5dB,  and 20dB), and provides two active-low shutdown inputs for flexibility.  The  audio  input  source  is  amplified  to  drive 2.2W  into  an  8 I speaker.  The  EV  kit  operates  from  a single DC power supply that provides 2.5V to 5.5V.

The EV kit provides two sets of differential outputs. The device  outputs  (OUT+  and  OUT-)  can  be  connected directly to a speaker load without any filtering. However, a filter can be added to ease evaluation.

## Procedure

The  MAX98500  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that shunts are installed as follows:
- 2) Set the power-supply output to 3.6V.
- 3) Disable the power-supply output.
- 4) Connect the power-supply ground to the PGND pad and the power-supply positive output to the VBAT pad on the  EV  kit.  Keep  VBAT  lengths  &lt;  6in  and twisted  to  minimize  inductance,  to  ensure  proper device operation.

JU1: Open (15.5dB gain)

JU2: Pins 1-2 (speaker enabled)

JU3: Pins 1-2 (boost enabled)

JU4: Short (single-ended/unbalanced input)

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX98500 Evaluation Kit

## Selectable Gain Setting

The MAX98500 features three internal gain settings that are selectable with the GAIN input. Jumper JU1 controls the amplifier's gain select input. See Table 1 for jumper JU1 configuration.

## Shutdown Inputs

The MAX98500 features two active-low shutdown inputs ( SDSPK and SDBST ).  Jumper JU2 enables or disables the speaker amplifier ( SDSPK ) and jumper JU3 controls the  boost  converter  ( SDBST ).  See  Table  2  for  jumpers JU2 and JU3 configuration. Note that the boost must be enabled for the speaker amplifier to enable.

## Input Mode

Jumper JU4 provides the option to select between a differential or single-ended input mode for the EV kit. See Table 3 for JU4 configuration.

Table 1. Gain Input (JU1)

| SHUNT POSITION   | GAIN PIN          |   GAIN SETTING (dB) |
|------------------|-------------------|---------------------|
| 2-3              | Connected to AGND |                   6 |
| Not installed*   | Unconnected       |                15.5 |
| 1-2              | Connected to VBAT |                  20 |

* Default position.

Table 2. Shutdown Configuration (JU2, JU3)

| SDSPK PIN (JU2)   | SDBST PIN (JU3)   | BOOST STATUS   | SPEAKER STATUS   |
|-------------------|-------------------|----------------|------------------|
| 2-3 (low)         | 2-3 (low)         | Off            | Off              |
| 1-2 (high)        | 2-3 (high)        | Off            | Off              |
| 2-3 (low)         | 1-2 (low)         | On             | Off              |
| 1-2* (high)       | 1-2* (high)       | On             | On               |

<!-- image -->

## Optional Output Filtering

The  MAX98500  speaker  amplifier  is  designed  to  pass FCC  emissions  standards  without  any  filtering.  When evaluating the MAX98500 without any filtering, connect the speaker to the output test points (OUT+, OUT-).

The EV kit  also  features  PCB  pads  for  a  lowpass  filter that can be added to ease evaluation. Audio analyzers typically  cannot  accept  the  Class  D  amplifier's  pulsewidth-modulated  (PWM)  waveform  at  their  inputs.  The lowpass filter extracts the audio content from the PWM output  signal  and  allows  the  device  to  be  connected directly  to  an  audio  analyzer.  The  PWM  output  signal can be lowpass-filtered by simply installing L2 and L3; all other components are populated. The filtered outputs should  then  be  monitored  at  the  FOUT+/FOUT-  pads. See Table 4 for suggested filtering components for an 8 I load.

Table 3. Input Mode (JU4)

| SHUNT POSITION   | IN- PIN                                                  | INPUT MODE                     |
|------------------|----------------------------------------------------------|--------------------------------|
| Installed*       | Connected to AGND                                        | Single-ended/ unbalanced input |
| Not installed    | Connected to user- supplied negative differential output | Differential input             |

* Default position.

Table 4. Suggested Filtering Components for 8 I Load

| DESIGNATION   |   QTY | DESCRIPTION                                          |
|---------------|-------|------------------------------------------------------|
| L2, L3        |     2 | 22 F H Q 20%, 0.7A inductor (D63CB) TOKO A916CY-220M |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX98500 Evaluation Kit

Figure 1. MAX98500 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX98500 Evaluation Kit

<!-- image -->

Figure 2. MAX98500 EV Kit Component Placement GuideComponent Side

Figure 3. MAX98500 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX98500 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX98500 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

6

<!-- image -->