<!-- lastmod 2022-10-10 -->
<!-- image -->

## MAX98300 Evaluation Kit (TDFN)

## General Description

The MAX98300  evaluation kit (EV kit) is a fully assembled  and  tested  circuit  board  that  uses  the MAX98300 filterless Class D amplifier to drive a speaker  in  portable  audio  applications.  The  EV  kit  comes with  a  MAX98300  IC  in  an  8-pin  TDFN  package. Designed  to  operate  from  a  2.6V  to  5.5V  DC  power supply,  the  EV  kit  is  capable  of  delivering  2.6W  into  a 4 I load. The EV kit accepts differential or single-ended input signals.

## Features

- S Demonstrates Industry-Leading Quiescent Current

1.1mA (PVDD = 5V), 0.78mA (PVDD = 3.7V)

- S Filterless Operation Passes Radiated Emissions with Up to 60cm of Speaker Cable
- S 2.6V to 5.5V Single-Supply Operation
- S 2.6W Mono Class D Output
- S Selectable Gain Control
- S Differential or Single-Ended Input
- S Low-Power Shutdown Input
- S Fully Assembled and Tested

## Ordering Information

| PART               | TYPE   |
|--------------------|--------|
| MAX98300EVKIT+TDFN | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION                                 | QTY                                         | DESCRIPTION                                                             |
|---------------------------------------------|---------------------------------------------|-------------------------------------------------------------------------|
| MINIMAL COMPONENTS FOR CUSTOMER DESIGN      | MINIMAL COMPONENTS FOR CUSTOMER DESIGN      | MINIMAL COMPONENTS FOR CUSTOMER DESIGN                                  |
| C1                                          | 1                                           | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104K   |
| C2                                          | 1                                           | 10 F F Q 10%, 10V X5R ceramic capacitor (0805) Murata GRM219R61A106K    |
| C5, C6                                      | 2                                           | 1 F F Q 10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A105K    |
| U1                                          | 1                                           | Mono Class D amplifier (8 TDFN-EP*) Maxim MAX98300ETA+ (Top Mark: ADB)  |
| OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION                             |
| C3, C4                                      | 0                                           | Not installed, ceramic capacitors (0603)                                |
| C7-C11                                      | 5                                           | 0.22 F F Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E224K |

| DESIGNATION   |   QTY | DESCRIPTION                                             |
|---------------|-------|---------------------------------------------------------|
| FB1, FB2      |     2 | 0 I Q 5% resistors (0805)                               |
| JU1           |     1 | 3-pin header                                            |
| JU2           |     1 | 2-pin header                                            |
| JU3           |     1 | 4-way 5-pin header                                      |
| L1, L2        |     0 | Not installed, inductors Recommended: TOKO #A916CY-220M |
| OUT+          |     1 | Standard PCB test point, red                            |
| OUT-          |     1 | Standard PCB test point, white                          |
| R1, R2        |     2 | 22 I Q 1% resistors (0603)                              |
| R3, R4        |     2 | 100k I Q 5% resistors (0603)                            |
| -             |     3 | Shunts (JU1, JU2, JU3)                                  |
| -             |     1 | PCB: MAX98300 EVALUATION KIT+ (TDFN)                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX98300 Evaluation Kit (TDFN)

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX98300ETA + when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX98300	EV	kit	(TDFN)
- 2.6V	to	5.5V,	2A	DC	supply
- 4 I speaker
- Mono	audio	signal	source

## Detailed Description of Hardware

The MAX98300 EV kit features the MAX98300 filterless Class D amplifier IC, which is designed to drive a mono speaker in portable audio applications. The EV kit comes with a MAX98300 IC in an 8-pin TDFN package. The EV kit operates from a DC power supply that provides 2.6V to 5.5V and 2A of current. The EV kit accepts a differential or single-ended audio input. The audio input source is amplified to drive 2.6W into a 4 I speaker.

Jumper JU1 enables or disables the speaker amplifier. Jumper JU2 configures the EV kit inputs for single-ended or  differential  operation.  The  amplifier  overall  gain  can be set between 0dB and +12dB using jumper JU3. The EV kit provides a set of differential outputs. The device outputs  (OUT+,  OUT-)  can  be  connected  directly  to  a speaker  load  without  any  filtering  and  up  to  60cm  of cable. However, filter components can be added to ease evaluation. See the Output Filtering Options section for additional information.

## Shutdown

Jumper  JU1  enables  or  disables  the  audio  speaker amplifier. See Table 1 for jumper JU1 configuration.

## Table 1. Shutdown (JU1)

| SHUNT POSITION   | SHDN PIN          | AMPLIFIER   |
|------------------|-------------------|-------------|
| 1-2*             | Connected to PVDD | Enabled     |
| 2-3              | Connected to PGND | Disabled    |

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1) Verify that shunts are installed as follows:
- 2) Connect  the  power-supply  positive  and  negative outputs to the PVDD and PGND PCB pads on the EV kit, respectively.
- 3) Verify that the audio source output is disabled.
- 4) Connect  the  mono  audio  source  between  the INPUT+ and INPUT- pads on the EV kit.
- 5) Connect  the  speaker  across  the  OUT+  and  OUTtest points.
- 6) Set the power-supply output to 5V.
- 7) Enable the power-supply output.
- 8) Enable the audio source.
- 9) Verify that the speaker is playing the audio source signal.

JU1: Pins 1-2 (device enabled)

JU2: Installed (single-ended input)

- JU3: Pins 1-5 (0dB gain)

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX98300 Evaluation Kit (TDFN)

## Input Mode

Jumper JU2 provides the option to select between a differential or single-ended input mode for the EV kit. See Table 2 for jumper JU2 configuration.

## Gain Setting

The EV kit maximum signal gain can be configured to five different settings. Jumper JU3 selects the overall gain for the EV kit. See Table 3 for jumper JU3 configuration.

## Filtered Output

Audio  analyzers  typically  cannot  accept  pulse-widthmodulated (PWM) signals at their inputs. Therefore, the EV  kit  features  a  lowpass  filter  at  its  outputs  to  ease evaluation.  Install  inductors  L1  and  L2  (provided  with the  EV  kit)  and  use  the  filtering  output  posts  (FOUT+, FOUT-) to connect the filtered PWM outputs to the audio analyzer. The default lowpass filter at the EV kit outputs is optimized for an 8 I speaker.

## Table 2. Input Mode (JU2)

| SHUNT POSITION   | INPUT- PCB PAD                                           | INPUT MODE         |
|------------------|----------------------------------------------------------|--------------------|
| Installed*       | Connected to PGND                                        | Single-ended input |
| Not installed    | Connected to a user-supplied negative differential input | Differential input |

<!-- image -->

## Filterless Output

The  EV  kit's  filterless  outputs  (OUT+,  OUT-)  can  be connected  directly  to  a  speaker  load  without  any filtering. Use the OUT+ and OUT- test points to connect a  speaker  directly  to  the  device  outputs.  Inductors  L1 and L2 are not installed for maximum efficiency.

## Output Filtering Options

To ease evaluation, the EV kit is shipped with inductorbased output  filters.  To  use  the  inductor-based  output filters, install inductors L1 and L2 (provided with the EV kit).

The  device  passes  CE  EN55022B  regulations  with  up to  60cm  of  speaker  cable  and  no  filtering.  However, ferrite-bead  filters  can  be  used  to  achieve  further attenuation  of  radiated  emissions.  To  install  the  ferrite-bead filters,  verify  that  filter  inductors  L1  and  L2  are  not installed.  Next,  replace  shorting  resistors  FB1  and FB2 with 0805 or smaller ferrite beads and install filter capacitors  on  the  C3  and  C4  pads.  The  speaker  wire should be connected to the OUT+ and OUT- test points.

## Table 3. Gain Setting (JU3)

| SHUNT POSITION   | GAIN PIN                     |   MAXIMUM GAIN (dB) |
|------------------|------------------------------|---------------------|
| 1-2              | Connected to PVDD through R3 |                  +9 |
| 1-3              | Connected to PVDD            |                 +12 |
| 1-4              | Connected to PGND through R4 |                  +3 |
| 1-5*             | Connected to PGND            |                   0 |
| Open             | Not connected                |                  +6 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX98300 Evaluation Kit (TDFN)

Figure 1. MAX98300 Customer Design Schematic (TDFN)

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX98300 Evaluation Kit (TDFN)

<!-- image -->

Figure 2. MAX98300 EV Kit Schematic (TDFN)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX98300 Evaluation Kit (TDFN)

<!-- image -->

Figure 3. MAX98300 EV Kit (TDFN) Component Placement Guide-Component Side

Figure 4. MAX98300 EV Kit (TDFN) PCB Layout-Component Side

<!-- image -->

Figure 5. MAX98300 EV Kit (TDFN) PCB Layout-Solder Side

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX98300 Evaluation Kit (TDFN)

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.