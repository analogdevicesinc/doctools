<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX98309 Evaluation Kit

## Evaluates: MAX98309/MAX98310

## General Description

The MAX98309 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  evaluates  the  MAX98309 mono 1.4W Class AB audio amplifier. The amplifier gain can be set through external resistors. The EV kit operates from a single 2.5V to 5.5V power supply.

The  EV  kit  can  also  evaluate  the  MAX98310  internally fixed gain mono 1.4W Class AB audio amplifier.

| DESIGNATION          |   QTY | DESCRIPTION                                                           |
|----------------------|-------|-----------------------------------------------------------------------|
| C1, C2, C3           |     3 | 1 F F Q 10%, 16V X5R ceramic capacitors (0402) TDK C1005X5R1C105K     |
| C4                   |     1 | 10 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106K |
| C5                   |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K |
| GND, OUT+, OUT-, VDD |     4 | Binding posts                                                         |
| IN                   |     1 | White side-entry, PCB-mount phono jack                                |

- S 2.5V to 5.5V Single-Supply Operation
- S Differential or Single-Ended Input
- S Pin-Selectable Turn-On Time
- S 1.8V Logic-Compatible SHDN Input
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| JU1           |     1 | 3-pin header                                                  |
| JU2           |     1 | 4-pin header                                                  |
| JU3           |     1 | 2-pin header                                                  |
| R1-R4         |     4 | 10k I Q 1% resistors (0402)                                   |
| SHDN          |     1 | PCB miniature red test point                                  |
| U1            |     1 | Mono 1.4W Class AB audio amplifier (9 WLP) Maxim MAX98309EWL+ |
| -             |     3 | Shunts                                                        |
| -             |     1 | PCB: MAX98309 EVALUATION KIT                                  |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX98309 when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Features

1

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts are installed as follows:
- 2) Connect  the  positive  terminal  of  the  power  supply to  the  VDD  PCB  pad  on  the  EV  kit.  Connect  the negative  terminal  of  the  power  supply  to  the  GND PCB pad on the EV kit.
- 4)   Verify that the audio source output is disabled.
- 5) Connect the single-ended mono audio source to the IN phono jack or between the IN+ and IN- PCB pads on the EV kit.
- 6) Connect  the  speaker  across  the  OUT+  and  OUTtest pads.
- 7) Set the power-supply output to 3.7V.
- 8) Enable the power-supply output.
- 9) Enable the audio source.
- 10)  Verify  that  the  speaker  is  playing  the  audio  source signal.

JU1: Pins 2-3 (device enabled)

JU2: Pins 1-2 (turn-on time of 100ms)

JU3: Installed (single-ended input)

## Detailed Description of Hardware

The  MAX98309  EV  kit  is  a  fully  assembled  and  tested circuit  board  that  evaluates  the  MAX98309  mono  1.4W Class AB audio amplifier. The amplifier gain can be set through external resistors.

The EV kit can also evaluate the MAX98310 internally fixed gain  mono  1.4W  Class  AB  audio  amplifier.  To  evaluate the MAX98310, remove R2 and R4, and replace R1 and R3 with 0 I resistors.

<!-- image -->

## MAX98309 Evaluation Kit

## Evaluates: MAX98309/MAX98310

## Quick Start

## Recommended Equipment

- MAX98309 EV kit
- 2.5V to 5.5V DC supply
- 8 I speaker
- Mono audio signal source

## Shutdown Mode ( SHDN )

The EV kit features 2-pin jumper JU1 to control the activelow shutdown input of the IC. Drive SHDN high to place the device in normal operation; drive SHDN low to place the device in the low-power shutdown mode. See Table 1 for shunt positions.

## Turn-On Time

The MAX98309/MAX98310 have excellent click-and-pop performance  with  respect  to  the SHDN pin  activation/ deactivation.

Jumper  JU2  demonstrates  the  IC's  selectable  turn-ontime  feature  for  optimized  click-and-pop  performance. Connect TON to GND for a 10ms turn-on time. Connect TON to VDD for a 100ms turn-on time. See Table 2 for selectable turn-on times.

The MAX98310 has a preset 5ms turn-on time.

## Amplifier Gain

The EV kit provides resistors R1-R4 to externally set the differential gain. The default gain is 1V/V or 0dB. Set the gain of the amplifier as follows:

<!-- formula-not-decoded -->

where AV is the desired voltage gain, RF is the value of feedback resistors  R2  and  R4,  and  RIN  is  the  value  of input resistors R1 and R3.

When  evaluating  the  MAX98310,  jumper  JU2  controls the  GAIN input pin and selects the four internally fixed differential gain options. See Table 2 for selectable gain options.

## Input Mode

Jumper  JU3  provides  the  option  to  select  between  a differential or single-ended input mode for the EV kit. See Table 3 for jumper JU3 configurations.

## Table 1. Shutdown Mode (JU1)

| SHUNT POSITION   | SHDN PIN         | DEVICE OPERATION   |
|------------------|------------------|--------------------|
| 1-2              | Connected to GND | Disabled           |
| 2-3*             | Connected to VDD | Enabled            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 2. Turn-On Time (JU2)

| SHUNT POSITION   | TON PIN (MAX98309) GAIN PIN (MAX98310)   | MAX98309 TURN-ON TIME (ms)   |   MAX98310 GAIN (dB) |
|------------------|------------------------------------------|------------------------------|----------------------|
| 1-2*             | Connected to VDD                         | 100                          |                    0 |
| 1-3              | Connected to BIAS                        | N/A                          |                    9 |
| 1-4              | Connected to GND                         | 10                           |                    3 |
| Open             | Unconnected                              | N/A                          |                    6 |

* Default position.

## Table 3. Input Mode Setting (JU3)

| SHUNT POSITION   | IN- PCB PAD                                              | INPUT MODE         |
|------------------|----------------------------------------------------------|--------------------|
| Installed*       | Connected to GND                                         | Single-ended input |
| Not installed    | Connected to a user-supplied negative differential input | Differential input |

* Default position.

## MAX98309 Evaluation Kit

## Evaluates: MAX98309/MAX98310

<!-- image -->

Figure 1. MAX98309 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX98309 Evaluation Kit

## Evaluates: MAX98309/MAX98310

Figure 2. MAX98309 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3. MAX98309 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX98309 EV Kit PCB Layout-GND Layer 2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX98309 Evaluation Kit

## Evaluates: MAX98309/MAX98310

Figure 5. MAX98309 EV Kit PCB Layout-VDD Layer 3

<!-- image -->

<!-- image -->

Figure 6. MAX98309 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX98309EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX98309 Evaluation Kit

## Evaluates: MAX98309/MAX98310

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8