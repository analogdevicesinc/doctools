<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX9725E evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that uses the MAX9725E IC to drive a stereo headphone in portable applications. The MAX9725E is a low-power stereo headphone amplifier with adjustable gain and DirectDrive™ outputs. Maxim's DirectDrive technology eliminates the need for bulky DC-blocking capacitors at the output of the amplifier.

The EV kit is configured for a -1.82V/V gain and is designed to operate from a 0.9V to 1.8V DC power supply. The EV kit is capable of delivering up to 20mW per channel into a 32 Ω load and achieves 0.006% THD+N.

The MAX9725E EV kit can also be used to evaluate the MAX9725A, MAX9725B, MAX9725C, or MAX9725D fixed-gain amplifiers. Contact Maxim for free samples of the MAX9725A, MAX9725B, MAX9725C, or MAX9725D. See the Part Selection Table for IC ordering information. The MAX9725\_ IC temperature range is -40°C to +85°C.

## Part Selection Table

| PART         | GAIN       |
|--------------|------------|
| MAX9725AEBC+ | -2         |
| MAX9725BEBC+ | -1.5       |
| MAX9725CEBC+ | -1         |
| MAX9725DEBC+ | -4         |
| MAX9725EEBC+ | Adjustable |

| DESIGNATION        |   QTY | DESCRIPTION                                                              |
|--------------------|-------|--------------------------------------------------------------------------|
| C1, C2, C3, C5, C6 |     5 | 1µF ±10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A105K        |
| C4                 |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J475K      |
| FB1, FB2, FB3      |     3 | 120 Ω at 100MHz, 25m Ω DCR, 3A ferrite beads (0603) Murata BLM18SG121TN1 |
| JU1                |     1 | 2-pin header                                                             |
| OUT                |     1 | Stereo headphone jack (3.5mm)                                            |

## Features

- ♦ No DC-Blocking Output Capacitors Required
- ♦ 0.9V to 1.8V Operation
- ♦ Adjustable -1.82V/V Gain
- ♦ 20mW per Channel into a 32 Ω Load
- ♦ Low 0.006% THD+N
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX9725EEVKIT+ | EV Kit |

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                                                        |
|------------------|-------|----------------------------------------------------------------------------------------------------|
| OUTL, OUTR, SGND |     0 | Not installed, test points                                                                         |
| R1, R2, R5       |     3 | 10k Ω ±1% resistors (0603)                                                                         |
| R3, R4           |     2 | 18.2k Ω ±1% resistors (0603)                                                                       |
| U1               |     1 | Fixed-gain, stereo headphone amplifier (12-bump UCSP™, 1.54mm x 2.02mm x 0.6mm) Maxim MAX9725EEBC+ |
| -                |     1 | Shunt (JU1)                                                                                        |
| -                |     1 | PCB: MAX9725E Evaluation Kit+                                                                      |

## Component Supplier

| SUPPLIER              | PHONE        | WEBSITE        |
|-----------------------|--------------|----------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com |

Note: Indicate that you are using the MAX9725E when contacting this component supplier.

UCSP is a trademark of Maxim Integrated Products, Inc.

1

## MAX9725E Evaluation Kit

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- 0.9V to 1.8V, 500mA power supply
- 32 Ω stereo headphones with a 3.5mm plug
- Audio signal source (e.g., MP3 player, CD player, etc.)

## Procedure

The MAX9725E EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is not installed on jumper JU1 (IC disabled).
- 2) Set the power-supply output to 1.8V.
- 3) Disable the power-supply output.
- 4) Connect the power-supply ground to the PGND pad and the power-supply positive output to the VDD pad.
- 5) Verify that the audio source output is disabled.
- 6) Connect the audio source ground, left signal, and right  signal  to  the  SGND,  VINL,  and VINR pads, respectively.
- 7) Plug the headphone into the OUT headphone jack.
- 8) Enable the power-supply output.
- 9) Enable the audio source.
- 10) Install a shunt on jumper JU1 (IC enabled).
- 11) Verify  that  the  headphones are playing the stereo audio source signal.

## Detailed Description of Hardware

The MAX9725E EV kit features the MAX9725E IC stereo headphone amplifier in a tiny (1.54mm x 2.02mm x 0.6mm) 12-bump UCSP package for portable applications.  The  MAX9725E IC features adjustable gain and low-power DirectDrive outputs. DirectDrive generates an internal negative supply (-VDD) from the positive supply (VDD), thus biasing the output signal at 0V DC. Zero-voltage biasing eliminates the need for bulky DCblocking capacitors at the output of the amplifier. The MAX9725E operates from a 0.9V to 1.8V supply with a low quiescent current of 2.3mA.

The EV kit's gain for each channel is set to -1.82V/V. The left-  and right-channel gain can be adjusted by modifying the ratio of the corresponding gain-setting resistors,  R1-R4.  R1  and  R4  set  the  left-channel  gain; R2 and R3 set the right-channel gain. The gain for either channel can be adjusted to a minimum of |-1V/V|. The IC delivers up to 20mW per channel into a 32 Ω load while achieving 0.006% THD+N.

Test points OUTL, OUTR, and SGND are provided to easily measure the output signals.

The MAX9725E EV kit can also evaluate the fixed-gain MAX9725A, MAX9725B, MAX9725C, or MAX9725D ICs. See the Evaluating the MAX9725A-MAX9725D section for more information.

## Shutdown ( SHDN )

Jumper JU1 controls the shutdown pin ( SHDN )  of  the MAX9725E that enables and disables the MAX9725E IC. See Table 1 for jumper JU1 configurations.

## Table 1. Jumper JU1 Shutdown Selection

| SHUNT POSITION   | SHDN PIN                    | MAX9725E FUNCTION   |
|------------------|-----------------------------|---------------------|
| Installed        | Connected to VDD            | Enabled             |
| Not installed    | Connected to GND through R5 | Disabled            |

## Gain Setting

The default gain-setting resistors (R1-R4) configure the gain for both left and right channels to -1.82V/V. The gain can be changed by replacing resistors R1-R4 with other surface-mount 0603 resistors. Resistors with a tolerance of  1% or better are recommended for optimum performance. Use Table 2 and the equations that follow to select new gain-setting resistors for the corresponding channel.

## Table 2. Component Function

| CHANNEL   | RIN   | RFB   | CIN   |
|-----------|-------|-------|-------|
| Right     | R2    | R3    | C6    |
| Left      | R1    | R4    | C5    |

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where A is the desired gain. The gain for either channel can be adjusted to a minimum of |-1V/V|. Refer to the MAX9725 IC data sheet for more details.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9725E Evaluation Kit

## Evaluating the MAX9725A-MAX9725D

The MAX9725E EV kit can also evaluate the fixed-gain MAX9725A, MAX9725B, MAX9725C, or MAX9725D ICs after performing the following:

- 1) Replace U1 with the alternate MAX9725 IC.
- 2) Replace resistors R1 and R2 with 0 Ω 0603 surfacemount resistors.
- 3) Remove resistors R3 and R4.

<!-- image -->

Figure 1. MAX9725E EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9725E Evaluation Kit

Figure 2. MAX9725E EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX9725E EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9725E Evaluation Kit

Figure 4. MAX9725E EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5