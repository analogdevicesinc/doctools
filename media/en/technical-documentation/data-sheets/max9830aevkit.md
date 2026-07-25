<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX9830A Evaluation Kit

## General Description

## Features

The MAX9830A evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX9830A filterless Class D amplifier to drive a mono bridge-tied-load (BTL) speaker in portable audio applications. Designed to operate from a 2.6V to 5.5V DC power supply, the EV kit  is  capable  of  delivering  2W  into  a  4 I load.  The  EV kit  accepts  differential  or  single-ended  input  signals. The  MAX9830A  EV  kit  also  evaluates  the  MAX9830BMAX9830E.

- S Industry-Leading Quiescent Current 1.6mA (VDD = 5V), 1.2mA (VDD = 3.6V)
- S Filterless Operation Passes EN55022B-Radiated Emissions with Up to 24in (61cm) of Speaker Cable
- S Evaluates the MAX9830B-MAX9830E (with IC Replacement)
- S 2.6V to 5.5V Single-Supply Operation
- S 2W Mono Class D Output
- S Differential or Single-Ended Input
- S Low-Power Shutdown Input
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX9830AEVKIT+ | EV Kit |

## Component List

| DESIGNATION         | QTY                 | DESCRIPTION                                                                                |
|---------------------|---------------------|--------------------------------------------------------------------------------------------|
| REQUIRED COMPONENTS | REQUIRED COMPONENTS | REQUIRED COMPONENTS                                                                        |
| C1                  | 1                   | 0.1 F F Q 10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E104K TDK C1608X7R1E104K   |
| C2                  | 1                   | 10 F F Q 20%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106M TDK C1608X5R0J106M   |
| C3, C4              | 0                   | Not installed, ceramic capacitors (0603)                                                   |
| C5, C6              | 2                   | 0.47 F F Q 10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A474K Murata GRM188R61A474K |
| C7-C11              | 5                   | 0.22 F F Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E224K TDK C1608X7R1E224K |

| DESIGNATION         | QTY                 | DESCRIPTION                                                          |
|---------------------|---------------------|----------------------------------------------------------------------|
| REQUIRED COMPONENTS | REQUIRED COMPONENTS | REQUIRED COMPONENTS                                                  |
| JU1                 | 1                   | 3-pin header                                                         |
| JU2                 | 1                   | 2-pin header                                                         |
| L1, L2              | 0                   | Not installed, inductors                                             |
| L3, L4              | 2                   | 0 I resistors (0805)                                                 |
| L5                  | 1                   | Ferrite bead, 100 I at 100MHz, 50m I DCR, 3A (0603) TDK MPZ16085101A |
| OUT-, OUT+,         | 2                   | Test points                                                          |
| R1, R2              | 2                   | 22 I Q 5% resistors (0603)                                           |
| U1                  | 1                   | Mono Class D amplifier (8 TDFN) Maxim MAX9830AETA+                   |
| -                   | 2                   | Shunts                                                               |
| -                   | 1                   | PCB: MAX9830A EVALUATION KIT+                                        |
| OPTIONAL COMPONENTS | OPTIONAL COMPONENTS | OPTIONAL COMPONENTS                                                  |
| L1, L2              | 2                   | 22 F H Q 20%, 0.7A inductors TOKO A915AY-220M                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9830A Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX9830A when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- U 2.6V to 5.5V, 1A DC supply
- U 4 I speaker
- U Mono audio signal source

## Detailed Description of Hardware

The MAX9830A EV kit features the MAX9830A filterless Class  D  amplifier  IC,  designed  to  drive  a  BTL  mono speaker in portable audio applications. The EV kit operates from a DC power supply that provides 2.6V to 5.5V and 1A of current.  The  EV  kit  accepts  a  differential  or single-ended  audio  input.  The  audio  input  source  is amplified to drive 2W into a 4 I speaker.

The  EV  kit  provides  two  sets  of  differential  outputs.  The device outputs (OUT+, OUT-) can be connected directly to a speaker load, without any filtering, with up to 24in (61cm) of cable. However, a filter can be added to ease evaluation.

## Speaker Amplifier Shutdown

Jumper JU1 enables or disables the speaker amplifier. See Table 1 for jumper JU1 configuration.

## Input Mode

Jumper JU2 provides the option to select between a differential or single-ended input mode for the EV kit. See Table 2 for JU2 configuration.

## Table 1. Shutdown Input (JU1)

| SHUNT POSITION   | SHDN PIN         | AMPLIFIER   |
|------------------|------------------|-------------|
| 1-2*             | Connected to VDD | Enabled     |
| 2-3              | Connected to GND | Disabled    |

* Default position.

## Table 2. JU2 Settings

| SHUNT POSITION   | IN- PIN                                                | INPUT MODE          |
|------------------|--------------------------------------------------------|---------------------|
| Installed*       | Connected to GND                                       | Single- ended input |
| Not installed    | Connected to user-supplied negative differential input | Differential input  |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Procedure

The  MAX9830A  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts are installed as follows: JU1: Pins 1-2 (device enabled) JU2: Installed (single-ended input)
- 2) Set the power-supply output to 5V.
- 3) Disable the power-supply output.
- 4) Connect the power-supply ground to the GND pad and  the  power-supply  positive  output  to  the  VDD pad on the EV kit.
- 5) Verify that the audio source output is disabled.
- 6) Connect  the  mono  audio  source  between  the INPUT+ and INPUT- pads on the EV kit.
- 7) Connect  the  speaker  across  the  OUT+  and  OUTtest points.
- 8) Enable the power-supply output.
- 9) Enable the audio source.
- 10)  Verify that the speaker is playing the audio source signal.

<!-- image -->

## MAX9830A Evaluation Kit

## Optional Output Filtering

The  MAX9830A  is  designed  to  pass  EN55022B  emissions  standards  without  any  filtering  when  using  up  to 61cm of cable to connect the speaker. When evaluating the MAX9830A without any filtering, connect the speaker to the outputs (OUT+, OUT-).

The MAX9830A EV kit also features PCB pads for a lowpass filter that can be added to ease evaluation. Audio analyzers typically cannot accept the Class D amplifier's pulse-width-modulated (PWM) waveform at their inputs. The  lowpass  filter  extracts  the  audio  content  from  the PWM  output  signal  and  allows  the  device  to  be  connected  directly  to  an  audio  analyzer.  The  PWM  output signal can be lowpass filtered by installing 22µH ±20%, 0.7A inductors (TOKO A915AY-220M) at L1 and L2. The filtered outputs should then be monitored at the FOUT+ and FOUT- pads.

<!-- image -->

Figure 1. MAX9830A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX9830A Evaluation Kit

<!-- image -->

Figure 2. MAX9830A EV Kit Component Placement GuideComponent Side

Figure 3. MAX9830A EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9830A EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

4

<!-- image -->