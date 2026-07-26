<!-- lastmod 2022-08-03 -->
## General Description

The MAX9737 evaluation kit (EV kit) is a fully assembled and tested PCB that configures the MAX9737 mono 7W Class D amplifier to drive an 8 Ω speaker for audio applications. The EV kit operates from an 8V to 28V DC power supply and is configured for +13.6dB gain. The MAX9737 EV kit accepts a single-ended input signal and provides differential outputs for the speaker.

| DESIGNATION     |   QTY | DESCRIPTION                                                                             |
|-----------------|-------|-----------------------------------------------------------------------------------------|
| C1-C4           |     4 | 1µF ±10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H105K TDK C2012X7R1H105K    |
| C5              |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K TDK C1608X7R1H104K   |
| C6              |     1 | 0.47µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E474K TDK C1608X7R1E474K  |
| C7, C8, C9, C18 |     4 | 1µF ±10%, 10V X7R ceramic capacitors (0603) Murata GRM188R61A105K TDK C1608X7R1A105K    |
| C10, C11        |     0 | Not installed, capacitors (0603)                                                        |
| C12-C16         |     5 | 0.15µF ±10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H154K TDK C2012X7R1H154K |

<!-- image -->

## Features

- ♦ 8V to 28V Single DC Power-Supply Operation
- ♦ Differential Outputs
- ♦ Configured for +13.6dB Gain
- ♦ External Gain-Setting Resistors
- ♦ Class D Output Filter for Ease of Evaluation
- ♦ Delivers 7W into an 8 Ω Speaker
- ♦ Mute Control
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9737EVKIT+ | EV Kit |

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                                                         |
|-------------------------|-------|-----------------------------------------------------------------------------------------------------|
| C17                     |     1 | 100µF ±20%, 50V aluminum electrolytic capacitor (8mm x 11.5mm) Panasonic EEUFM1H101 SANYO 50ME100CA |
| D1                      |     1 | 4.3V, 20mA zener diode (SOT23) Central Semi CMPZ5229B (Top Mark: C8D)                               |
| FB1                     |     1 | Ferrite bead, 22 Ω at 100MHz, 10m Ω DCR, 6A (0805) Murata BLM21PG220SN1D                            |
| FOUT+, FOUT-, PGND, VDD |     4 | Binding posts Johnson 111-2223-001 Mouser 530-111-2223-001                                          |
| IN                      |     1 | Phono jack, side entry, PCB mount (white) CUI Inc. RCJ-043                                          |
| JU1                     |     1 | 2-pin header                                                                                        |
| JU2                     |     1 | 3-pin header                                                                                        |
| L1, L2                  |     2 | 15µH ±20%, 3.1A inductors Sumida CDRH104RNP-150NC                                                   |

1

## MAX9737 Evaluation Kit

| DESIGNATION    |   QTY | DESCRIPTION                              |
|----------------|-------|------------------------------------------|
| OUT+, OUT-, PC |     3 | PCB mini test points, 20mA Keystone 5000 |
| R1, R2         |     2 | 20k Ω ±1% resistors (0603)               |
| R3, R4         |     2 | 0 Ω ±5% resistors (0805)                 |
| R5, R6         |     2 | 15 Ω ±5% resistors (1206)                |
| R7             |     1 | 10k Ω ±5% resistor (0603)                |

## Procedure

The MAX9737 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Install  a  shunt  across pins 1-2 of jumper JU2 (DVDD = 5V).
- 2) Install  a  shunt  across  jumper  JU1  ( MUTE = high, output enabled).
- 3) Connect a speaker across the FOUT+ and FOUTPCB binding posts.
- 4) Connect the positive terminal of the power supply to  the  VDD binding post and the power-supply ground terminal to the PGND binding post.

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| SANYO Electric Co., Ltd.               | 619-661-6835 | www.sanyodevice.com         |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX9737 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 8V to 28V, 5A DC power supply
- Audio source with volume control (e.g., CD player, etc.)
- 8 Ω speaker
- 5) Connect the output terminal of the audio source to the IN RCA phono jack.
- 6) Turn on the audio source at minimum volume.
- 7) Turn on the power supply.
- 8) Gradually increase the audio source volume until audio is heard through the loud speaker.

## Detailed Description of Hardware

## Gain-Setting Resistors

The MAX9737 EV kit features adjustable gain setting through external resistors R1 and R2. The output stage provides a fixed internal gain in addition to the externally  set  input  stage gain. The fixed output stage gain is set at +13.6dB (4.8V/V). Set overall gain by using resistors R1 and R2 as follows:

<!-- formula-not-decoded -->

where AV is the desired voltage gain. Choose R2 between 10k Ω and 50k Ω . Choose R1 using the following equation:

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                               |
|---------------|-------|-----------------------------------------------------------|
| R8            |     1 | 100k Ω ±5% resistor (0603)                                |
| U1            |     1 | Mono 7W Class D amplifier (24 TQFN-EP*) Maxim MAX9737ETJ+ |
| -             |     1 | PCB: MAX9737 Evaluation Kit+                              |

*EP = Exposed pad.

<!-- image -->

## Filtered Output

Audio analyzers typically cannot accept pulse-width modulated (PWM) signals at their inputs. Therefore, the MAX9737 EV kit features a lowpass filter at the output to  ease evaluation. Use the filtering output posts (FOUT+, FOUT-) to connect the filtered PWM output to the audio analyzer. The default lowpass filter at the EV kit output is optimized for an 8 Ω speaker.

## Filterless Output

The MAX9737 EV kit's filterless outputs (OUT+, OUT-) can be connected directly to a speaker load without any filtering.  Use  the  OUT+ and OUT- test points to connect the speaker directly to the MAX9737 output using twisted-pair cable. Remove inductors L1 and L2 for maximum efficiency.

## Output Filtering Requirements

To ease evaluation, the MAX9737 EV kit is shipped with inductor-based output filters. However, the MAX9737 meets EN55022B EMC radiation limits with an inexpensive  ferrite  bead  and  capacitor  filter,  especially  when speaker-wire lengths are less than 1m.

To install  the  ferrite-bead  filters,  first  remove  the  large filter inductors (L1, L2). Next, replace resistors R3 and R4 with ferrite beads listed in Table 1, and install filter capacitors on C10 and C11 pads. The speaker wires should be connected to the OUT+ and OUT- test points using twisted-pair cable.

Although component selection for the output filter is dependent on speaker-wire length, the components in Table 1 are provided with the EV kit as a starting point. Final  component selection should be determined during EMC testing. Contact the factory if required.

<!-- image -->

## MAX9737 Evaluation Kit

Table 1. Recommended EMI Filter Components for 8 Ω Loads

| COMPONENT   | DESCRIPTION                                                                            |
|-------------|----------------------------------------------------------------------------------------|
| R3, R4      | Ferrite beads, 600 Ω at 100MHz, 150m Ω DCR, 2A (0805) Würth 742792040                  |
| C10, C11    | 330pF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H331K TDK C1608X7R1H331K |

## Jumper Selection

## Mute Function ( MUTE )

The MAX9737 features a mute function to mute the audio output of the EV kit. Place a shunt on JU1 for normal operation. Remove the shunt on JU1 to drive MUTE low and place the part in mute mode. See Table 2 for shunt positions.

## Table 2. JU1 Jumper Selection ( MUTE )

| SHUNT POSITION   | MAX9737 MUTE PIN CONNECTED TO   | AUDIO OUTPUT     |
|------------------|---------------------------------|------------------|
| Installed*       | DVDD                            | Normal operation |
| Not installed    | PGND (through resistor R8)      | Muted            |

## Digital Inputs Power Supply (DVDD)

The MAX9737 EV kit operates from a DC power supply between 8V and 28V. This power-supply range is too high for the digital input pins on the MAX9737 IC. The EV kit includes a circuit to regulate the input power supply to 5V for powering all the logic circuits on the EV kit. Jumper JU2 sets the DVDD voltage (see Table 3 for shunt positions).

Table 3. JU2 Jumper Selection (DVDD)

| SHUNT POSITION   | MAX9737 DVDD REGULATED TO   | EV KIT DIGITAL INPUT POWER   |
|------------------|-----------------------------|------------------------------|
| 1-2*             | 5V                          | On                           |
| 2-3              | 0V                          | Off                          |

*Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9737 Evaluation Kit

Figure 1. MAX9737 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9737 Evaluation Kit

<!-- image -->

Figure 2. MAX9737 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9737 Evaluation Kit

Figure 3. MAX9737 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9737 Evaluation Kit

Figure 4. MAX9737 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7

7