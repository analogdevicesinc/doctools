<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX9736D Evaluation Kit

## General Description

The MAX9736D evaluation kit (EV kit) is a fully assembled and tested PCB that configures the MAX9736D Class D amplifier to drive 2 x 6W into a pair of 8 Ω speakers in stereo mode, or 1 x 12W into a 4 Ω speaker in mono mode for audio applications. The EV kit operates from an 8V to 28V DC power supply and is configured for 17dB gain. The MAX9736D EV kit accepts a pair of single-ended input signals and provides two sets of differential outputs for speakers.

The MAX9736D EV kit provides an option to control the shutdown, mute, modulation scheme, and mono mode of the MAX9736D. The EV kit includes convenient audio input and output connectors and the required output filters to ease evaluation.

| DESIGNATION                            | QTY                                    | DESCRIPTION                                                                         |
|----------------------------------------|----------------------------------------|-------------------------------------------------------------------------------------|
| MINIMAL COMPONENTS FOR CUSTOMER DESIGN | MINIMAL COMPONENTS FOR CUSTOMER DESIGN | MINIMAL COMPONENTS FOR CUSTOMER DESIGN                                              |
| C1                                     | 1                                      | 150µF ±20%, 35V aluminum electrolytic capacitor (8mm x 11.5mm) Panasonic EEUFM1V151 |
| C3, C4, C5                             | 3                                      | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K                 |
| C6                                     | 1                                      | 1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C105K                    |
| C8, C9, C10                            | 3                                      | 1µF ±10%, 10V X7R ceramic capacitors (0603) Murata GRM188R71A105K                   |
| C11, C12                               | 2                                      | 1µF ±10%, 25V X7R ceramic capacitors (0805) Murata GRM21BR71E105K                   |
| R2-R5                                  | 4                                      | 20k Ω ±1% resistors (0603)                                                          |

## Features

- ♦ 8V to 28V Single DC Power-Supply Operation
- ♦ Fully Differential Outputs
- ♦ Drives 2 x 6W into 8 Ω Speakers in Stereo Mode
- ♦ Drives 1 x 12W into 4 Ω Speaker in Mono Mode
- ♦ Shutdown and Mute Control
- ♦ Selectable Modulation Scheme
- ♦ Evaluates the MAX9736D in 32-Pin TQFN-EP Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX9736DEVKIT+ | EV Kit |

## Component List

| DESIGNATION                                 | QTY                                         | DESCRIPTION                                                              |
|---------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------|
| OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION                              |
| C2                                          | 1                                           | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K       |
| C7                                          | 1                                           | 1µF ±10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A105K         |
| C13-C16                                     | 0                                           | Not installed, capacitors (0603)                                         |
| C17-C26                                     | 10                                          | 0.15µF ±10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H154K     |
| D1                                          | 1                                           | 4.3V, 20mA zener diode (SOT23) Central Semi CMPZ5229B (Top Mark: C8D)    |
| FB1                                         | 1                                           | Ferrite bead, 22 Ω at 100MHz, 10m Ω DCR, 6A (0805) Murata BLM21PG220SN1D |
| FOUTL-, FOUTL+, FOUTR-, FOUTR+, VDD, PGND   | 6                                           | Binding posts                                                            |
| JU1                                         | 1                                           | 3-pin header                                                             |
| JU2-JU5                                     | 4                                           | 2-pin headers                                                            |
| JU6                                         | 0                                           | Not installed, 2-pin header                                              |

1

## MAX9736D Evaluation Kit

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                       |
|---------------|-------|---------------------------------------------------|
| L-, L+        |     2 | PCB mini test points, 0.040in (white)             |
| LIN           |     1 | RCA phono jack, side entry, PCB mount (white)     |
| L1-L4         |     4 | 15µH ±20%, 3.1A inductors Sumida CDRH104RNP-150NC |
| R-, R+        |     2 | PCB mini test points, 0.040in (red)               |
| RIN           |     1 | RCA phono jack, side entry, PCB mount (red)       |
| R1            |     1 | 10k Ω ±5% resistor (0603)                         |
| R6-R9         |     4 | 0 Ω ±5% resistors (0805)                          |
| R10-R13       |     4 | 15 Ω ±5% resistors (1206)                         |

| DESIGNATION   |   QTY | DESCRIPTION                                             |
|---------------|-------|---------------------------------------------------------|
| R14-R18       |     5 | 100k Ω ±5% resistors (0603)                             |
| U1            |     1 | ClassD audio amplifier (32 TQFN-EP*) Maxim MAX9736DETJ+ |
| -             |     5 | Shunts                                                  |
| -             |     4 | 0.250in x 0.500in, 4-40 round nylon spacers             |
| -             |     4 | 4-40 x 0.375in nylon machine screws                     |
| -             |     1 | PCB: MAX9736D EVALUATION KIT+                           |

## Procedures

The MAX9736D EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Install a shunt across pins 1-2 of jumper JU1 (DVDD = 5V).
- 2) Install a shunt across jumper JU2 ( SHDN = high, EV kit enabled).
- 3) Install  a  shunt across jumper JU3 (REGEN = high, internal regulator enabled).

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Würth Electronik GmbH & Co. KG         | 201-785-8800 | www.we-online.com           |

Note: Indicate that you are using the MAX9736D when contacting these component suppliers.

## Quick Start

## Required Equipment

- 8V to 28V, 4A DC power supply
- Audio source with volume control (e.g., CD player, etc.)
- Two speakers
- 4) Install  a  shunt  across  jumper  JU4  ( MUTE = high, output enabled).
- 5) Install  a  shunt  across  jumper  JU5 (MOD = high, filterless modulation scheme).
- 6) Connect the first speaker across the FOUTL- and FOUTL+ PCB binding posts.
- 7) Connect the second speaker across the FOUTRand FOUTR+ PCB binding posts.
- 8) Connect the positive terminal of the power supply to the VDD binding post and the power-supply ground terminal to the PGND binding post.
- 9) Connect the left output terminal of the audio source to the LIN RCA phono jack.
- 10) Connect the right output terminal of the audio source to the RIN RCA phono jack.
- 11) Turn on the audio source at minimum volume.
- 12) Turn on the power supply.
- 13) Gradually increase the audio source volume until audio is heard through the loud speakers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9736D Evaluation Kit

## Detailed Description of Hardware

The MAX9736D EV kit is designed to evaluate the MAX9736D in  a  32-pin  TQFN-EP  package.  The MAX9736D is a Class D amplifier that can be configured to drive 2 x 6W into a pair of 8 Ω speakers, or 1 x 12W into a 4 Ω speaker. The EV kit operates from a DC power supply that provides 8V to 28V and 4A of current. The EV kit PCB is designed with two layers and only requires 1oz copper for power dissipation. The MAX9736D EV kit accepts a pair of single-ended input signals and provides two sets of amplified differential audio outputs.

## Optional External Preamplifier Power Supply (VS)

The MAX9736D EV kit provides an input pad to accept an optional 5V external power supply for powering the MAX9736D preamplifiers when the internal regulator is disabled. Disable the internal regulator by removing the shunt from jumper JU3 before connecting an external power supply between the VS and AGND pads on the MAX9736D EV kit (see Table 4). The external power supply for the preamplifiers must be in the 4.5V to 5.5V range. Refer to the Power Sequencing section in the MAX9736D IC data sheet before operating with optional external preamplifier power supply.

## Filtered Output

Audio analyzers typically cannot accept pulse-widthmodulated (PWM) signals at their inputs. Therefore, the MAX9736D EV kit features a pair of lowpass filters at each of the outputs to ease evaluation. Use the filtering output posts (FOUTL+/FOUTL- and FOUTR+/FOUTR-) to  connect the filtered PWM outputs to the audio analyzer.  The  default  lowpass  filters  at  the  EV  kit  outputs are optimized for a pair of 8 Ω speakers.

## Filterless Output

The MAX9736D EV kit's filterless outputs (L+/L- and R+/R-) can be connected directly to a pair of speaker loads without any filtering. Use the L+/L- and R+/R- test points to connect speakers directly to the MAX9736D outputs using twisted-pair cable. Remove inductors L1-L4 for maximum efficiency.

## Output Filtering Requirements

To ease evaluation, the MAX9736D EV kit is shipped with inductor-based output filters. However, the MAX9736D can pass EC EN55022 regulations with only ferrite-bead filters, especially when speaker-wire lengths are less than 1m.

To install  the  ferrite-bead  filters,  first  remove  the  large filter  inductors  (L1-L4).  Next,  replace  resistors  R6-R9 with ferrite beads listed in Table 1 (provided with the EV kit),  and  install  filter  capacitors  on  the  C13-C16  pads.

<!-- image -->

## Shutdown Mode ( SHDN )

The MAX9736D features a shutdown mode to reduce the quiescent current. Jumper JU2 controls the shutdown ( SHDN ) pin of the MAX9736D IC (see Table 3 for shunt positions).

## Table 3. JU2 Jumper Selection ( SHDN )

| SHUNT POSITION   | SHDN PIN CONNECTED TO       | EV KIT FUNCTION   |
|------------------|-----------------------------|-------------------|
| Installed*       | DVDD                        | EV kit enabled    |
| Not installed    | PGND (through resistor R14) | Shutdown mode     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The speaker wire should be connected to L+, L-, R+, and R- test points using twisted-pair cable.

Although component selection for the output filter is dependent on speaker-wire length, the components in Table 1 are provided with the EV kit as a starting point. Final component selection should be determined during EMC testing. Contact the factory if required.

## Table 1. Recommended EMI Filter Components for 8 Ω Loads

| COMPONENT   | DESCRIPTION                                                                               |
|-------------|-------------------------------------------------------------------------------------------|
| R6-R9*      | Ferrite beads, 600 Ω at 100MHz, 150m Ω DCR, 2A (0805) Würth 742792040                     |
| C13-C16     | 330pF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H331K or TDK C1608X7R1H331K |

*3A current-rating ferrite beads are recommended for 4 Ω load drive.

## Jumper Selection

## Digital Inputs Power Supply (DVDD)

The MAX9736D EV kit operates from a DC power supply between 8V and 28V. This power-supply range is too high for the digital input pins on the MAX9736D IC. The EV kit includes a circuit to regulate the input power supply to 3V for powering all the logic circuits on the EV kit. Jumper JU1 sets the DVDD voltage (see Table 2 for shunt positions).

## Table 2. JU1 Jumper Selection (DVDD)

| SHUNT POSITION   |   DVDD REGULATED TO (V) | EV KIT DIGITAL INPUT POWER   |
|------------------|-------------------------|------------------------------|
| 1-2*             |                       3 | On                           |
| 2-3              |                       0 | Off                          |

## MAX9736D Evaluation Kit

## Internal Regulator Enable (REGEN)

The MAX9736D provides an option to disable the internal regulator when an optional external power supply is connected to the VS and AGND pads on the EV kit to power the MAX9736D preamplifiers. Jumper JU3 controls the internal regulator enable (REGEN) pin on the MAX9736D IC (see Table 4 for shunt positions). See the Optional External Preamplifier Power Supply (VS) section.

## Mute Function ( MUTE )

The MAX9736D features a mute function to mute the audio output of the EV kit. Jumper JU4 controls the mute ( MUTE ) pin of the MAX9736D IC (see Table 5 for shunt positions).

## Table 4. JU3 Jumper Selection (REGEN)

| SHUNT POSITION   | REGEN PIN CONNECTED TO      | EV KIT INTERNAL REGULATOR   |
|------------------|-----------------------------|-----------------------------|
| Installed*       | DVDD                        | Enabled                     |
| Not installed    | PGND (through resistor R15) | Disabled                    |

## Table 6. JU5 Jumper Selection (MOD)

| SHUNT POSITION   | MOD PIN CONNECTED TO        | OUTPUT MODULATION SCHEME   |
|------------------|-----------------------------|----------------------------|
| Installed*       | DVDD                        | Filterless modulation      |
| Not installed    | PGND (through resistor R17) | Classic PWM                |

*Default position.

## Table 7. JU6 Jumper Selection (MONO)

| SHUNT POSITION          | MONO PIN CONNECTED TO       | OUTPUT SPEAKER MODE   | AUDIO INPUT SOURCE CONNECTED TO              |
|-------------------------|-----------------------------|-----------------------|----------------------------------------------|
| Not installed*          | PGND (through resistor R18) | Stereo mode           | LIN and RIN                                  |
| Install a shorting wire | DVDD                        | Mono mode             | LIN (RIN is an uncommitted inverting op amp) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Modulation Scheme (MOD)

The MAX9736D EV kit provides an option to select the modulation scheme for the MAX9736D output. Jumper JU5 controls the modulation-scheme pin (MOD) of the MAX9736D IC (see Table 6 for shunt positions).

## Mono Mode (MONO)

The MAX9736D EV kit is preconfigured to stereo mode from the factory. To change the MAX9736D EV kit to operate in mono mode, short jumper JU6 with a shorting wire, connect the FOUTL- to the FOUTR- with a short banana-lead cable and connect the FOUTL+ to the FOUTR+ with a short banana-lead cable. Connect the audio input source to the LIN RCA jack. In mono mode, the right input (RIN) becomes an uncommitted inverting op amp that can be used for filtering. Jumper JU6 controls the mono mode for the MAX9736D IC (see Table 7 for shunt positions).

## Table 5. JU4 Jumper Selection ( MUTE )

| SHUNT POSITION   | MUTE PIN CONNECTED TO       | AUDIO OUTPUT     |
|------------------|-----------------------------|------------------|
| Installed*       | DVDD                        | Normal operation |
| Not installed    | PGND (through resistor R16) | Muted            |

<!-- image -->

## MAX9736D Evaluation Kit

Figure 1. MAX9736D Customer Design Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9736D Evaluation Kit

Figure 2. MAX9736D EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9736D Evaluation Kit

<!-- image -->

Figure 3. MAX9736D EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9736D Evaluation Kit

Figure 4. MAX9736D EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9736D Evaluation Kit

Figure 5. MAX9736D EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9