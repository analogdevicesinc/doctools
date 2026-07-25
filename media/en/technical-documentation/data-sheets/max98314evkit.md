<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX98314 evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX98314 filterless Class  D  amplifier  to  drive  a  speaker  in  portable  audio applications. The EV kit comes with a MAX98314EWL+ in  a  9-bump,  0.3mm  pitch  wafer-level  package  (WLP). Designed  to  operate  from  a  2.5V  to  5.5V  DC  power supply,  the  EV  kit  is  capable  of  delivering  3.2W  into  a 4 I load. The EV kit accepts differential or single-ended input signals.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 10 F F Q 20%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106M                                                                      |
| C2            |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K                                                                      |
| C5, C6        |     0 | Not installed, ceramic capacitors (0603)                                                                                                   |
| C7-C11        |     0 | Not installed, ceramic capacitors (0603) Provided with the EV kit: 0.22 F F Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E224K |
| FB1, FB2      |     2 | 0 I Q 5% resistors (0603)                                                                                                                  |
| INPUT         |     1 | Black RCA jack                                                                                                                             |
| JU1           |     1 | 2-pin header                                                                                                                               |
| JU2           |     1 | 3-pin header                                                                                                                               |
| JU3           |     1 | 5-pin header                                                                                                                               |

## MAX98314 Evaluation Kit

## Evaluates: MAX98314

## Features

- S Integrated Audio Input Capacitors
- S Filterless Operation Passes Radiated Emissions with 60cm of Speaker Cable
- S 2.5V to 5.5V Single-Supply Operation
- S 3.2W Mono Class D Output
- S Selectable Gain Control
- S Differential or Single-Ended Input
- S Low-Power Shutdown Input
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                                                                                           |
|--------------------------|-------|-----------------------------------------------------------------------------------------------------------------------|
| L1, L2                   |     0 | Not installed, inductors- shorted with PC trace Provided with the EV kit: 22 F H Q 20%, 1A inductors TOKO A916CY-220M |
| FOUT+, FOUT-, PVDD, PGND |     4 | Binding posts                                                                                                         |
| OUT+, OUT-               |     2 | 1-pin headers                                                                                                         |
| R1, R2                   |     2 | 100k I Q 5% resistors (0402)                                                                                          |
| R3, R4                   |     0 | Not installed, resistors (0603) Provided with the EV kit: 22 I Q 5% resistors (0603)                                  |
| U1                       |     1 | Mono Class D amplifier (9 WLP) Maxim MAX98314EWL+ (Top Mark: +AKA)                                                    |
| -                        |     3 | Shunts                                                                                                                |
| -                        |     1 | PCB: MAX98314 EVALUATION KIT                                                                                          |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX98314EWL+ when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4 or visit Maxim's website at www.maxim-ic.com.

- MAX98314	EV	kit
- 5V,	2A	DC	supply
- 4 I speaker
- Mono	audio	signal	source

## Quick Start

## Recommended Equipment

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Verify that shunts are installed as follows:
- 2)  Connect  the  power-supply  positive  and  negative outputs to the PVDD and PGND PCB pads or binding posts on the EV kit, respectively.
- 3)  Verify that the audio source output is disabled.
- 4)  Connect the mono audio source to the INPUT RCA jack or between the IN+ and IN- PCB pads on the EV kit.
- 5)  Connect the speaker across the FOUT+ and FOUTtest points.
- 6)  Set the power-supply output to 5V.
- 7)  Enable the power-supply output.
- 8)  Enable the audio source.
- 9)  Verify that the speaker is playing the audio source signal.

JU1: Installed (single-ended input)

JU2: Pins 1-2 (device enabled)

JU3: Pins 1-5 (12dB gain)

## Table 1. Input Mode (JU1)

| SHUNT POSITION   | IN- PCB PAD                                              | INPUT MODE         |
|------------------|----------------------------------------------------------|--------------------|
| Installed*       | Connected to PGND                                        | Single-ended input |
| Not installed    | Connected to a user-supplied negative differential input | Differential input |

*Default position.

## Table 3. Gain Setting (JU3)

| SHUNT POSITION   | GAIN PIN                     |   MAXIMUM GAIN (dB) |
|------------------|------------------------------|---------------------|
| Open             | Not connected                |                   0 |
| 1-2              | Connected to PVDD through R1 |                  +3 |
| 1-3              | Connected to PVDD            |                  +6 |
| 1-4              | Connected to PGND through R2 |                  +9 |
| 1-5*             | Connected to PGND            |                 +12 |

*Default position.

<!-- image -->

## MAX98314 Evaluation Kit

## Evaluates: MAX98314

## Detailed Description of Hardware

The MAX98314 EV kit features the MAX98314 filterless Class  D  amplifier,  designed  to  drive  a  mono  speaker in portable audio applications. The EV kit comes with a MAX98314EWL+ in a 9-bump, 0.3mm pitch WLP. The EV kit operates from a DC power supply that provides 2.5V to 5.5V and 2A of current. The EV kit accepts a differential or  single-ended  audio  input.  The  audio  input  source  is amplified to drive 3.2W into a 4 I speaker.

Jumper JU1 configures the EV kit inputs for single-ended or differential operation. Jumper JU2 enables or disables the speaker amplifier. The amplifier overall gain can be set  between  0dB  and  +12dB  using  jumper  JU3.  The EV kit provides a set of differential outputs. The device outputs  (FOUT+,  FOUT-)  can  be  connected  directly  to a speaker load without any filtering with 60cm of cable. However,  filter  components  can  be  added  to  ease evaluation. See the Filtered Output section for additional information.

## Input Mode

Jumper  JU1  provides  the  option  to  select  between  a differential or single-ended input mode for the EV kit. See Table 1 for JU1 configuration.

## Shutdown

Jumper  JU2  enables  or  disables  the  audio  speaker amplifier. See Table 2 for JU2 configuration.

## Gain Setting

The EV kit maximum signal gain can be configured to five different settings. Jumper JU3 selects the overall gain for the EV kit. See Table 3 for JU3 configuration.

## Table 2. Shutdown (JU2)

| SHUNT POSITION   | SHDN PIN          | AMPLIFIER   |
|------------------|-------------------|-------------|
| 1-2*             | Connected to PVDD | Enabled     |
| 2-3              | Connected to PGND | Disabled    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Filtered Output

Audio  analyzers  typically  cannot  accept  pulse-widthmodulated (PWM) signals at their inputs. Therefore, the EV kit features the possibility to install a lowpass filter at its outputs to ease evaluation. OUT+ and OUT- are shorted to FOUT+ and FOUT-. The trace must be broken at L1 and L2 before installing inductors L1 and L2 (provided with the EV kit). The filter components (C7-C11, R3, and R4) are provided with the EV kit and must be installed prior to operation. Use FOUT+ and FOUT- to connect the filtered  PWM  outputs  to  an  audio  analyzer.  The  default lowpass filter at the EV kit outputs is optimized for an 8 I speaker. Contact the factory for the 4 I speaker filter.

The  IC  can  pass  CE  EN55022B  regulations  with  60cm of speaker cable and no filtering. However, ferrite-bead

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX98314 Evaluation Kit Evaluates: MAX98314

filters can be used to achieve further attenuation of radiated emissions. To install the ferrite-bead filters, replace shorting  resistors  FB1  and  FB2  with  0603  or  smaller ferrite  beads and install filter capacitors on the C5 and C6 pads. The speaker wire should be connected to the FOUT+ and FOUT- PCB pads.

## Filterless Output

The EV kit's filterless outputs (OUT+ and OUT-) can be connected directly to a speaker load without any filtering. Use the OUT+ and OUT- test points or the FOUT+ and FOUT- PCB pads to connect a speaker directly to the IC outputs. Inductors L1 and L2 are not installed for maximum efficiency.

## MAX98314 Evaluation Kit

## Evaluates: MAX98314

<!-- image -->

Figure 1. MAX98314 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX98314 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evalutes: MAX98314

Figure 3. MAX98314 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX98314 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX98314 Evalution Kit

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX98314EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX98314 Evaluation Kit

## Evaluates: MAX98314

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.