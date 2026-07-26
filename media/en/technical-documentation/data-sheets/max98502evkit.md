<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX98502 evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX98502 boosted  Class  D  amplifier  to  drive  a  mono  bridge-tied-load (BTL) speaker in portable audio applications. Designed to operate from a 2.5V to 5.5V DC power supply, the EV kit is capable of delivering 2.2W into an 8 I load or 4W into a 4 I load. The EV kit accepts differential or singleended input signals, features selectable gain, and separate speaker and boost shutdown inputs.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| C1            |     1 | 10 F F Q 10%, 6.3V X7R ceramic capacitor (0805) Murata GRM21BR70J106K TDK C2012X7R0J106K      |
| C2            |     1 | 22 F F Q 20%, 16V X5R ceramic capacitor (1206) Murata GRM31CR61C226M Taiyo Yuden EMK316BJ226M |
| C3, C4        |     2 | 1 F F Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E105K Murata GRM188R71E105M    |
| C5            |     1 | 22 F F Q 10%, 6.3V X5R ceramic capacitor (0805) Murata GRM21BR60J226M TDK C2012X5R0J226K      |
| C8            |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K TDK C1005X7R1C104K      |
| C12, C13      |     0 | Not installed, ceramic capacitors (0603)                                                      |
| C14-C18       |     5 | 0.22 F F Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E224K TDK C1608X7R1E224K    |

<!-- image -->

- S 2.5V to 5.5V Single-Supply Operation
- S 4W Mono Class D Output
- S Selectable Gain: +6dB, +15.5dB, and +20dB
- S Boosted Class D Output
- S Differential or Single-Ended Input
- S Boost Converter Shutdown
- S Speaker Output Shutdown
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION             | QTY                 | DESCRIPTION                                                         |
|-------------------------|---------------------|---------------------------------------------------------------------|
| FB2, FB3                | 0                   | Not installed, ferrite beads (0603)                                 |
| J1                      | 1                   | Phono jack, black (side-entry PCB mount)                            |
| JU1, JU2, JU3           | 3                   | 3-pin headers                                                       |
| JU4                     | 1                   | 2-pin header                                                        |
| L1                      | 1                   | 2.2 F H, 91m I , 1.5A inductor (3.2mm x 2.5mm) Murata LQH32PN2R2NN0 |
| L2, L3                  | 0                   | Not installed, inductors                                            |
| OUT-, OUT+, RKNEE, PGND | 4                   | Test points                                                         |
| R1                      | 1                   | 27.4k I Q 1% resistor (0603)                                        |
| R2, R3                  | 2                   | 22 I Q 5% resistors (0603)                                          |
| U1                      | 1                   | Boosted Class D audio amplifier (16 WLP) Maxim MAX98502EWE+         |
| VCCOUT                  | 0                   | Not installed, test point                                           |
| -                       | 4                   | Shunts                                                              |
| -                       | 1                   | PCB: MAX98502 EVALUATION KIT                                        |
| OPTIONAL COMPONENTS     | OPTIONAL COMPONENTS | OPTIONAL COMPONENTS                                                 |
| L2, L3                  | 2                   | 22 F H Q 20%, 2A inductors (D75LC) TOKO B1047AS-220M                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX98502 Evaluation Kit

## Evaluates: MAX98502

## Features

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Verify that shunts are installed as follows:

JU1: Open (+15.5dB gain)

JU2: Pins 1-2 (speaker enabled)

JU3: Pins 1-2 (boost enabled)

JU4: Short (single-ended/unbalanced input)

- 2)  Set the power-supply output to 3.6V.
- 3)  Disable the power-supply output.
- 4)  Connect the power-supply ground to the PGND PCB pad  and  the  power-supply  positive  output  to  the VBAT PCB pad on the EV kit. Keep VBAT lengths &lt; 8in  (and  twisted  to  minimize  inductance)  to  ensure proper device operation.
- 5)  Verify that the audio source output is disabled.
- 6)  Connect the mono audio source between the IN+ and IN- PCB pads or J1 on the EV kit.
- 7)  Connect the speaker across the OUT+ and OUT- test points.
- 8)  Enable the power-supply output.
- 9)  Enable the audio source.
- 10) Verify  that  the  speaker  is  playing  the  audio  source signal.

<!-- image -->

## Shutdown Inputs

The IC features two active-low shutdown inputs ( SDSPK and SDBST ).  Jumper  JU2  enables  or  disables  the speaker amplifier ( SDSPK ) and jumper JU3 controls the boost converter ( SDBST ). See Table 2 for JU2 and JU3 configuration. The boost must be enabled for the speaker amplifier to enable.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX98502 Evaluation Kit

## Evaluates: MAX98502

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX98502 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX98502 EV kit
- 2.5V	to	5.5V,	4A	DC	supply
- 8 I or 4 I speaker
- Mono	audio	signal	source

## Detailed Description of Hardware

The  MAX98502  EV  kit  features  the  MAX98502  boosted Class  D  amplifier  IC,  designed  to  drive  a  BTL  mono speaker in portable audio applications. The EV kit accepts a differential or single-ended audio input, features three selectable  gain  settings,  and  provides  two  active-low shutdown inputs for flexibility. The audio input source is amplified to drive 2.2W into an 8 I speaker or 4W into an 4 I speaker. The EV kit operates from a single DC power supply that can provide 2.5V to 5.5V.

The EV kit provides two sets of differential outputs. The device outputs (OUT+/OUT-) can be connected directly to a speaker load, without any filtering, with up to 24in of cable. However, a filter can be added to ease evaluation.

## Selectable Gain Setting

The  IC  features  three  internal  gain  settings  that  are selectable with the GAIN input. Jumper JU1 controls the amplifier's  gain  select  input.  See  Table  1  for  JU1  configuration.

## Table 1. GAIN Input (JU1)

| SHUNT POSITION   | GAIN PIN          |   GAIN SETTING (dB) |
|------------------|-------------------|---------------------|
| 2-3              | Connected to AGND |                  +6 |
| Not installed*   | Unconnected       |               +15.5 |
| 1-2              | Connected to VBAT |                 +20 |

*Default position.

## Input Mode

Jumper JU4 provides the option to select between a differential or single-ended input mode for the EV kit. See Table 3 for JU4 configuration.

## Optional Output Filtering

The  IC  is  designed  to  pass  FCC  emissions  standards without  any  filtering  when  using  up  to  24in  of  cable  to connect the speaker. When evaluating the IC without any filtering,  connect  the  speaker  to  the  output  test  points (OUT+/OUT-).

The EV kit also features PCB pads for a lowpass filter that can be added to ease evaluation. Audio analyzers typically cannot accept the Class D amplifier's pulse-widthmodulated (PWM) waveform at their inputs. The lowpass

## Table 2. Shutdown Configuration (JU2, JU3)

| SDBST PIN (JU3)   | SDSPK PIN (JU2)   | BOOST STATUS   | SPEAKER STATUS   |
|-------------------|-------------------|----------------|------------------|
| 2-3 (low)         | 2-3 (low)         | Off            | Off              |
| 2-3 (low)         | 1-2 (high)        | Off            | Off              |
| 1-2 (high)        | 2-3 (low)         | On             | Off              |
| 1-2* (high)       | 1-2* (high)       | On             | On               |

*Default position.

## Table 3. Input Mode (JU4)

| SHUNT POSITION   | IN- PIN                                                  | INPUT MODE                     |
|------------------|----------------------------------------------------------|--------------------------------|
| Installed*       | Connected to AGND                                        | Single-ended/ unbalanced input |
| Not installed    | Connected to user- supplied negative differential output | Differential input             |

*Default position.

<!-- image -->

## MAX98502 Evaluation Kit Evaluates: MAX98502

filter  extracts  the  audio  content  from  the  PWM  output signal  and  allows  the  device  to  be  connected  directly to  an  audio  analyzer.  The  PWM  output  signal  can  be lowpass-filtered by simply installing L2 and L3; all other components are populated. The filtered outputs should then be monitored at the FOUT+/FOUT- pads. See Table 4  for  suggested  filtering  components  for  an  8 I load. Contact  the  factory  for  suggested  filtering  components for a 4 I load.

## Optional Output Loading

The EV kit can be used to drive a 4 I or  8 I load. See tables 5 and 6 below for required components for each load.

## Table 4. Suggested Filtering Components for 8 I Load

| DESIGNATION   |   QTY | DESCRIPTION                                          |
|---------------|-------|------------------------------------------------------|
| L2, L3        |     2 | 22 F H Q 20%, 2A inductors (D75LC) TOKO B1047AS-220M |

## Table 5. Components Required for 4 I Speaker Drive

| DESIGNATION   |   QTY | DESCRIPTION                            |
|---------------|-------|----------------------------------------|
| C5            |     1 | 22 F F, 6.3V ceramic capacitor (0805)  |
| C8            |     1 | 0.1 F F, 6.3V ceramic capacitor (0402) |

## Table 6. Minimum Components Required for 8 I Speaker Drive

| DESIGNATION   |   QTY | DESCRIPTION                           |
|---------------|-------|---------------------------------------|
| C5            |     1 | 22 F F, 6.3V ceramic capacitor (0603) |
| C8            |     1 | Not installed, ceramic capacitor      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX98502 Evaluation Kit

## Evaluates: MAX98502

<!-- image -->

Figure 1. MAX98502 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX98502 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evalutes: MAX98502

Figure 3. MAX98502 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX98502 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX98502 Evalution Kit

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX98502EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX98502 Evaluation Kit

## Evaluates: MAX98502

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.