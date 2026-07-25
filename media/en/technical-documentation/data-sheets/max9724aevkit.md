<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX9724A evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that uses the MAX9724A IC to drive a stereo headphone in portable applications. The MAX9724A is a 60mW stereo headphone  amplifier  with  adjustable  gain  and DirectDrive™ outputs. Maxim's DirectDrive technology eliminates the need for bulky DC-blocking capacitors at the output of the amplifier.

The EV kit is configured for a -1.5V/V gain and is designed to operate from a 2.7V to 5.5V DC power supply. The EV kit is capable of delivering up to 60mW per channel into a 32 Ω load and achieving 0.02% THD+N.

The MAX9724A EV kit can also be used to evaluate the MAX9724B fixed-gain amplifier. Contact Maxim for a free sample of the MAX9724B IC.

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| C1, C2, C4    |     3 | 1µF ±10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A105K    |
| C3            |     1 | 0.1µF ±10%, 10V X5R ceramic capacitor (0402) Murata GRM155R61A104K   |
| C5, C6        |     2 | 0.47µF ±10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A474K |
| JU1           |     1 | 3-pin header                                                         |
| OUT           |     1 | Stereo headphone jack (3.5mm)                                        |

Features

- ♦ No DC-Blocking Output Capacitors Required
- ♦ 2.7V to 5.5V Operation
- ♦ Adjustable -1.5V/V Gain
- ♦ 60mW per Channel into a 32 Ω Load
- ♦ 0.02% THD+N
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX9724AEVKIT+ | EV Kit |

## Component List

*EP = Exposed paddle.

| DESIGNATION      |   QTY | DESCRIPTION                                                                        |
|------------------|-------|------------------------------------------------------------------------------------|
| OUTL, OUTR, SGND |     0 | Not installed, test points                                                         |
| R1, R3           |     2 | 10k Ω ±1% resistors (0603)                                                         |
| R2, R4           |     2 | 15k Ω ±1% resistors (0603)                                                         |
| U1               |     1 | 60mW, DirectDrive, stereo headphone amplifier (12-pin TQFN-EP*) Maxim MAX9724AETC+ |
| -                |     1 | Shunt (JU1)                                                                        |
| -                |     1 | PCB: MAX9724A Evaluation Kit+                                                      |

## Component Supplier

| SUPPLIER              | PHONE        | WEBSITE        |
|-----------------------|--------------|----------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com |

Note: Indicate that you are using the MAX9724A when contacting this component supplier.

1

## MAX9724A Evaluation Kit

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- 2.7V to 5.5V, 500mA power supply
- 32 Ω stereo headphones with a 3.5mm plug
- Audio signal source

Test points OUTR, OUTL, and SGND are provided to easily measure the output signals.

The MAX9724A EV kit can evaluate the fixed-gain MAX9724B IC, also in a 12-pin thin QFN package. The MAX9724B features a fixed gain of -1.5V/V. See the Evaluating the MAX9724B section for more information.

## Shutdown ( SHDN )

Jumper JU1 controls the shutdown pin ( SHDN )  of  the MAX9724A that enables and disables the MAX9724A IC. See Table 1 for jumper JU1 configurations.

## Table 1. Jumper JU1 Shutdown Selection

| SHUNT POSITION   | SHDN PIN         | MAX9724A FUNCTION   |
|------------------|------------------|---------------------|
| 1-2              | Connected to VDD | Enabled             |
| 2-3              | Connected to GND | Disabled            |

## Gain Setting

The default gain-setting resistors R1-R4 configure the gain for  both the left and right channels to -1.5V/V. The gain can be changed by replacing these resistors with other surface-mount 0603 resistors. Resistors with a tolerance of 1% or better are recommended for optimum performance. Use Table 2 and the following equation to select new gainsetting resistors for the corresponding channel.

## Table 2. Gain-Setting Resistors

| CHANNEL   | RIN   | RF   |
|-----------|-------|------|
| Right     | R1    | R2   |
| Left      | R3    | R4   |

<!-- formula-not-decoded -->

where RIN ≥ 10k Ω and A is the desired negative gain. Refer to the Output Dynamic Range and Maximum Output Swing sections in the MAX9724A/MAX9724B IC data sheet for limitations on setting the gain.

## Evaluating the MAX9724B

The MAX9724A EV kit can evaluate the fixed-gain MAX9724B IC after performing the following:

- 1) Replace U1 with the MAX9724B IC.
- 2) Remove resistors R2 and R4.
- 3) Replace resistors R1 and R3 with 0 Ω 0603 surfacemount resistors.

The MAX9724B features a fixed-gain of -1.5V/V. Contact Maxim for a free sample of the MAX9724BETC+.

## Procedure

The MAX9724A EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed on jumper JU1, pins 2-3 (IC disabled).
- 2) Set the power-supply output to 5V.
- 3) Disable the power-supply output.
- 4) Connect the power-supply ground to the PGND pad and the power-supply positive output to the VDD pad.
- 5) Verify that the audio source output is disabled.
- 6) Connect the audio source ground, left signal, and right signal to the SGND, INL, and INR pads, respectively.
- 7) Plug the headphone into the OUT headphone jack.
- 8) Enable the power-supply output.
- 9) Enable the audio source.
- 10) Install  a  shunt  on  jumper  JU1  across  pins  1-2  (IC enabled).
- 11) Verify  that  the  headphones are playing the audio source signal.

## Detailed Description

The MAX9724A EV kit features the MAX9724A IC stereo headphone  amplifier.  The  MAX9724A  features adjustable gain and 60mW DirectDrive outputs. DirectDrive generates an internal negative supply (-VDD) from the positive supply (VDD), thus biasing the amplifier output. Zero-voltage biasing eliminates the need for bulky DC-blocking capacitors at the amplifier output. The MAX9724A operates from a 2.7V to 5.5V supply with a low quiescent current of 3.5mA. The MAX9724A comes in a 12-pin thin QFN package suitable for portable applications.

The EV kit's gain for each channel is set to -1.5V/V. The left- and right-channel gain can be adjusted by modifying the ratio of the corresponding gain-setting resistors R1-R4. R1 and R2 set the right-channel gain and R3 and R4 set the left-channel gain. The IC delivers up to 60mW per channel into a 32 Ω load while achieving 0.02% THD+N.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9724A Evaluation Kit

<!-- image -->

Figure 1. MAX9724A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9724A Evaluation Kit

<!-- image -->

Figure 2. MAX9724A EV Kit Component Placement GuideComponent Side

Figure 3. MAX9724A EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9724A EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600