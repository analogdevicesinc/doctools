<!-- lastmod 2022-08-03 -->
## General Description

The MAX9820 evaluation kit (EV kit) demonstrates the MAX9820 stereo headphone amplifier with external gain and DirectDrive ® outputs for portable applications. Maxim's DirectDrive technology eliminates the need for bulky DC-blocking capacitors at the output of the amplifier.

The MAX9820 EV kit is configured for a -1V/V gain and is  designed to operate from a 2.7V to 5.5V DC power supply. The EV kit is capable of delivering up to 95mW into a 32 Ω load and achieves 0.005% THD+N.

DirectDrive is a registered trademark of Maxim Integrated Products, Inc.

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C1, C2        |     2 | 1µF ±10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H105K  |
| C3            |     1 | 10µF ±10%, 10V X5R ceramic capacitor (0805) Murata GRM21BR61A106K  |
| C4            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104K |
| C5, C6        |     2 | 1µF ±10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A105K  |
| C1P, VSS      |     0 | Not installed, miniature PCB test points                           |
| HPOUT         |     1 | Stereo headphone jack (3.5mm)                                      |

<!-- image -->

## MAX9820 Evaluation Kit

## Features

- ♦ No DC-Blocking Output Capacitors Required
- ♦ 2.7V to 5.5V Operation
- ♦ Adjustable -1V/V Gain
- ♦ 95mW Into a 32 Ω Load
- ♦ 0.005% THD+N
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9820EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------|
| JU1           |     1 | 2-pin header                                                                      |
| OUTL          |     1 | White miniature PCB test point                                                    |
| OUTR          |     1 | Red miniature PCB test point                                                      |
| PGND          |     1 | Black miniature PCB test point                                                    |
| R1-R4         |     4 | 40.2k Ω ±1% resistors (0603)                                                      |
| R5            |     1 | 10k Ω ±5% resistor (0603)                                                         |
| U1            |     1 | External gain headphone amplifier (10 TDFN-EP*) Maxim MAX9820ETB+ (Top Mark: AAU) |
| -             |     1 | Shunt (JU1)                                                                       |
| -             |     1 | PCB: MAX9820 EVALUATION KIT+                                                      |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX9820 when contacting this component supplier.

1

## MAX9820 Evaluation Kit

## Quick Start

## Required Equipment

- 2.7V to 5.5V, 500mA power supply
- One set of stereo headphones
- Audio signal source

## Procedure

The MAX9820 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  a  shunt  is  installed  on  jumper  JU1  (IC disabled).
- 2) Set the power-supply output to 5V.
- 3) Disable the power-supply output.
- 4) Connect the power-supply ground to the PGND PCB pad and the power-supply positive output to the VDD PCB pad.
- 5) Verify that the audio source output is disabled.
- 6) Connect the audio source ground, left signal, and right signal to the GND, VINL, and VINR PCB pads, respectively.
- 7) Plug the headphone into the HPOUT headphone jack.
- 8) Enable the power-supply output.
- 9) Enable the audio source.
- 10) Remove the shunt from jumper JU1 (IC enabled).
- 11) Verify that the headphones are playing the audio source signal.

## Detailed Description of Hardware

The MAX9820 EV kit features the MAX9820 stereo headphone amplifier, in a 10-pin TDFN package with an exposed pad, for portable applications. The MAX9820 IC features adjustable gain and DirectDrive outputs. DirectDrive generates an internal negative supply (-VDD) from the external positive supply (VDD), thus biasing the output signal at 0V DC. Zero-voltage biasing  eliminates  the  need  for  bulky  DC-blocking  capacitors at the output of the amplifier. The MAX9820 operates from a 2.7V to 5.5V, 500mA power supply.

The EV kit's gain for each channel is set to -1V/V. The left- and right-channel gain can be adjusted by modifying the ratio of the corresponding gain-setting resistors (R1-R4). R1 and R4 set the left-channel gain, while R2 and R3 set the right-channel gain. The gain for either channel can be adjusted to a minimum of -1V/V. The IC delivers up to 95mW into a 32 Ω load,  while  achieving 0.005% THD+N.

Test points OUTR, OUTL, and PGND are provided to easily measure the output signals.

## Shutdown ( SHDN )

Jumper JU1 controls the shutdown pin ( SHDN )  of  the MAX9820, which enables and disables the MAX9820 IC. See Table 1 for jumper JU1 configuration.

## Gain Setting

The default gain-setting resistors (R1-R4) configure the gain for both the left and right channels to -1V/V. The gain can be changed by replacing these resistors with other surface-mount 0603 resistors. Resistors with a tolerance of 1% or better are recommended for optimum performance. Use Table 2 and the following equations to select new gain-setting resistors for the corresponding channel.

<!-- formula-not-decoded -->

where RIN is the respective input resistance, CIN is the respective input capacitance, RFB is the respective feedback resistance, A is the desired gain, and -3dB frequency is set at 20Hz. The gain for either channel can be adjusted to a minimum of -1V/V. Refer to the MAX9820 IC data sheet for more details.

## Table 1. Shutdown Selection (JU1)

| SHUNT POSITION   | SHDN PIN                             | MAX9820 FUNCTION   |
|------------------|--------------------------------------|--------------------|
| Installed        | Connected to PGND                    | Disabled           |
| Not installed    | Connected to VDD through resistor R5 | Enabled            |

## Table 2. Component Function

| CHANNEL   | RIN   | RFB   | CIN   |
|-----------|-------|-------|-------|
| Right     | R2    | R3    | C2    |
| Left      | R1    | R4    | C1    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9820 Evaluation Kit

Figure 1. MAX9820 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9820 Evaluation Kit

<!-- image -->

Figure 2. MAX9820 EV Kit Component Placement GuideComponent Side

Figure 3. MAX9820 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9820 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_