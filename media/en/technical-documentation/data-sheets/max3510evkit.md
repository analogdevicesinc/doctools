<!-- lastmod 2022-08-02 -->
## General Description

The MAX3510 evaluation kit (EV kit) simplifies evaluation of  the  MAX3510 CATV upstream amplifier. The kit includes a serial data interface, which can be programmed via the parallel port of a standard PC. Software (DOS and Windows) is included to facilitate this  function.  This  software  allows  the  user  to  program both the gain and transmit modes through a simple user interface.

Access to the device input and output is provided through 50 Ω SMA connectors. The input is matched to 50 Ω , while the output circuit contains a series 24 Ω resistor that increases the load on the output transformer to 75 Ω nominal when using 50 Ω test equipment.

## Component List

| DESIGNATION                 |   QTY | DESCRIPTION                                         |
|-----------------------------|-------|-----------------------------------------------------|
| B1, B2, L1-L3               |     5 | Surface-mount bead cores Murata BLM11P 300SPT       |
| C1, C4, C6, C8, C9          |     5 | 0.1µF, 10% ceramic capacitors                       |
| C2, C3                      |     2 | 0.001µF, 10% ceramic capacitors                     |
| C5                          |     1 | 0.0033µF, 10% min, 10V ceramic capacitor            |
| C7                          |     1 | 10µF, ±10% capacitor AVX TAJB106K010                |
| IN1, IN2                    |     2 | Test points                                         |
| J1, J3                      |     2 | SMA connectors (edge mount)                         |
| J2                          |     1 | DB25 connector, right angle, female                 |
| JU1-JU4                     |     4 | 3-pin headers                                       |
| JU5-JU7                     |     3 | 2-pin headers                                       |
| None                        |     7 | Shunts (for JU1-JU7)                                |
| R1                          |     1 | 49.9 Ω , 1% resistor                                |
| R2-R4, R6-R13, R16, R17-R19 |       | Not installed                                       |
| R5                          |     1 | 24 Ω , 5% resistor                                  |
| R14, R15                    |     2 | 100k Ω , 5% resistors                               |
| T1                          |     1 | 4:1 transformer (2:1 voltage ratio) Toko 458PT-1087 |
| T2                          |     1 | 1:1 transformer M/A-COM ETC1-1T                     |
| U1                          |     1 | MAX3510EEP                                          |
| None                        |     1 | MAX3510 data sheet                                  |
| None                        |     1 | MAX3510 PC board                                    |
| None                        |     1 | MAX3510 software disk                               |
| None                        |     1 | MAX3510 EV kit data sheet                           |

- ' Single +5V Operation
- ' Output Level Range from &lt;8dBmV to 64dBmV
- ' Gain Programmable in 1dB Steps via Software
- ' Transmit-Disable Mode
- ' Two Shutdown Modes
- ' Control Software Included
- ' Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3510EVKIT | -40°C to +85°C | 20 SSOP      |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| M/A-COM    | 978-442-5000 | 978-442-4178 |
| Murata     | 814-237-1431 | 814-238-0490 |
| Toko       | 847-297-0076 | 847-297-7864 |

Note: Please indicate you are using the MAX3510 when contacting these suppliers.

## Quick Start

The MAX3510 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section.

Note: The output circuit contains a series 24 Ω resistor that  is  used  to  bring  the  load  impedance  up  to  75 Ω . This must be accounted for in all measurements (see Output Circuit section).

Note: The input transformer is supplied to allow differential input drive from a single-ended source. No transformer is required in the application.

## Test Equipment Required

- DC supply capable of delivering 5.5V and 150mA of continuous current.
- HP8648 or equivalent signal source capable of generating 40dBmV up to 200MHz.
- HP8561E or equivalent spectrum analyzer with a minimum 200MHz frequency range.
- Digital multimeter (DMM) to monitor VCC and ICC, if desired.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

<!-- image -->

## Features

## MAX3510 Evaluation Kit

- Lowpass filters to attenuate harmonic output of signal sources, if harmonic measurements are desired.
- Network analyzer, such as the HP8753D. (May be used to measure gain and harmonic levels if configured with this option; contact manufacturer.)
- IBM PC or compatible.
- Male-to-male 25-pin parallel cable, straight through.
- 0 to 5V pulse generator (transient measurement).
- Low-noise amplifier with 40dB gain from 5MHz to 100MHz (Noise Measurement).
- Oscilloscope with 200MHz bandwidth.

## Connections and Setup

- 1) Connect the +5V power supply to the pins labeled +5V and GND on the circuit board. Connect a 50 Ω signal source to INPUT and terminate OUTPUT with a  spectrum analyzer or network analyzer having a 50 Ω input impedance. If using a signal source with a source impedance other than 50 Ω , or if a different input impedance is required, be sure to replace resistor R1 with the appropriate value resistor.
- 2) Connect a 25-pin male-to-male cable between the parallel (printer) port of the PC and the 25-pin female connector on the EV kit board. Ensure that shunts are placed on jumpers JU5, JU6, and JU7. These shunts connect the appropriate pins of the DB25 connector to the serial data interface of the MAX3510. Also check that pins 2 and 3 of jumper JU3 and pins 1 and 2 of jumper JU1 are shunted.
- 3) Turn on the power supply. Turn on the PC and the test  equipment. Set the signal source for -13dBm (34dBmV across a 50 Ω load).
- 4) Run the software program.

## Detailed Description

## Using the Software

The MAX3510 uses a serial data interface (SDI) to set gain and to control software-shutdown mode. Some means of communicating with the SDI is required to use the MAX3510 EV kit. A microprocessor, pattern generator,  or  PC  can  be  used  for  this  function.  Software  is included in this EV kit to facilitate the use of a PC.

The disk included with the MAX3510 EV kit contains two programs. The first is a QuickBasic ® program that runs under DOS and the second is an EXE file that requires Windows 95 ® to run. The disk contains two directories (Table 1).

## Table 1. MAX3510 EV Kit Software

| DIRECTORY   | FILE NAME       | DESCRIPTION                       |
|-------------|-----------------|-----------------------------------|
| DOS         | MAX3510.BAS     | QuickBasic Source Code            |
| DOS         | READ3510.TXT    | 'Read Me' Text File               |
| Windows     | MAX3510.EXE     | Windows Executable                |
| Windows     | MAX3510.DLL     | DLL File for Printer Port Control |
| Windows     | READWIN3510.TXT | 'Read Me' Text File               |

If  your  PC  has  Windows 95 installed, read the file READWIN3510.TXT for instructions on operation of the MAX3510.EXE file. If your PC does not have Windows 95  installed,  use  the  program  MAX3510.BAS. Instructions for the QuickBasic program are found in READ3510.TXT.

## Gain Adjustment

Valid gain states range from 0 to 63. The nominal change in gain is 1dB per gain state. Gain states are set exclusively by programming the SDI. See the MAX3510 data sheet for details.

## Shutdown and Transmit Enable

Jumpers JU1 and JU3 determine how the shutdown and transmit-enable features are controlled. Pin 2 of each of these jumpers is connected directly to the device. If an external source (such as a modulator chip or  microprocessor) is used to control these features, simply make the connection to pin 2 of the appropriate jumper. Pads are provided on the bottom side of the board (R18 and R19, respectively) for placement of termination resistors, if needed.

If  manual control of shutdown and transmit-enable is desired, shunt pins 2 and 3 of jumper JU1 and pins 1 and 2 of jumper JU3. This will allow SHDN and TXEN to be controlled by JU2 and JU4, respectively. JU2 and JU4 are used to place either +5V or ground at SHDN or TXEN. Pin 3 of these jumpers is ground and pin 1 is +5V.

## Manual Control of Serial Data Interface

If using a source other than a PC to drive the serial data interface of the MAX3510 EV kit (such as a digital pattern  generator or microprocessor), remove the shunts on jumpers JU5, JU6, and JU7. Access to the serial data interface is available through these jumpers. See the MAX3510 data sheet for a description of the serial data interface.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Quick Basic and Windows 95 are registered trademarks of Microsoft Corp.

<!-- image -->

## Input Circuit

The input circuit of the MAX3510 EV kit is configured with a 1:1 transformer (T2) and a 49.9 Ω input resistor. This allows the input to be driven with single-ended 50 Ω test  equipment. The transformer (T2) is used to generate a differential signal, as rated performance is specified with a differential input drive (typically from a differential  lowpass  filter).  Pads  are  provided  to  allow connection of an external differential drive. Additionally, pads are provided for a pair of termination resistors, if needed (R16, R17).

If  the  MAX3510 is to be driven single-ended, the input transformer (T2) must be removed and the undriven input connected to ground through a 0.001µF blocking capacitor.

## Output Circuit

The MAX3510 features a differential open-collector output with an output impedance of approximately 300 Ω . This architecture aids in suppressing 2nd-order distortion  (harmonics).  To  convert  to  a  single-ended  output and to match to a 75 Ω load, a 2:1 (voltage ratio) transformer (T1) is used. Power is supplied to the output stage through the center tap of this transformer. This feature is essential in reducing transients when switching between transmit and transmit-disable mode.

Since most test equipment is supplied with a 50 Ω termination impedance, a series 24 Ω resistor is provided on the output of the transformer to increase the load impedance to a nominal 75 Ω . This places the proper load on the device, but will also reduce the measured output voltage level by 3.5dB .  It  is  essential  to  consider  this when making any measurements with the EV kit. 3.5dB must be added to all measurements of voltage gain and output voltage level (including noise) to arrive at the correct value for a 75 Ω system.

Use 75 Ω test  equipment if  it  is  available  and  take  the following steps:

- 1) Remove the 50 Ω output SMA connector and replace it with a 75 Ω connector.
- 2) Remove R5 (the 24 Ω series output resistor) and replace it with a 0 Ω resistor or some other type of shunt.
- 3) Be sure to use a 75 Ω cable.

## Analysis

## Harmonic Distortion

A filter will be needed to reject the harmonics generated by the signal source. For this example, a lowpass filter with approximately a 25MHz to 35MHz cutoff frequency will  be  required. This filter will need to reject at least 20dB of signal at 40MHz. Set the 50 Ω signal source for

<!-- image -->

## MAX3510 Evaluation Kit

20MHz and -13dBm. Adjust the amplitude to account for the insertion loss in the filter. Verify with the spectrum analyzer that the second and third harmonics generated by the source are suppressed by at least 70dBc. Connect the filter between the input of the EV kit and the output of the signal source, making sure the proper terminations are being used for this particular filter.

Connect a spectrum analyzer to OUTPUT. Set the center  frequency for 40MHz and the span for 50MHz or more. Adjust the reference level so that the fundamental  (20MHz tone) is within 10dB to 20dB of the reference level. If the fundamental is less than 10dB below the reference level, the harmonic distortion of the spectrum analyzer may prevent accurate measurement of the distortion.

Set the gain state to 50 (approximately 16dB of gain).

Measure the level of the fundamental, second, and third harmonics on the spectrum analyzer. These readings have units of dBm. To convert from dBm to dBmV in a 50 Ω system, use the following equation:

<!-- formula-not-decoded -->

Add 3.5dB to this value to account for the voltage drop in the series 24 Ω resistor (R5), in dBmV, for a 75 Ω load. The gain can now be calculated in dB, and the harmonic distortion can be calculated in dBc.

## Switching Transients

To measure the transmit to transmit-disable transient, the TXEN pin will be driven from an external source. No input signal is applied and the output is viewed on an oscilloscope.

Connect OUTPUT to the oscilloscope's 50 Ω input. Set the scope's time base to 5µs/div and the vertical scale to 5mV/division.

Set the pulse generator as follows:

| Amplitude      | 5V    |
|----------------|-------|
| Duty Cycle     | 50%   |
| Rise/Fall Time | 100ns |
| Pulse Width    | 25µs  |
| Offset         | 2.5V  |

Take care not to drive the MAX3510 TXEN pin below 0V or above VCC. Turn on the power supply. Remove the shunt from jumper JU3 (TXEN) and connect the output of  the  pulse  generator  to  pin  2  of  this  jumper.  Trigger the oscilloscope from the pulse generator using a convenient method.

Set the gain state to 50.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3510 Evaluation Kit

A rising and falling edge transient should appear on the scope's CRT. The peak amplitude of this transient should be less than 7mV. Multiply the value of the measured transient by 1.5, to account for the presence of the 24 Ω resistor (R5). The gain may now be changed to show the output transient's dependence on gain.

## Output Noise

To measure output noise, a spectrum analyzer is used. A postamplifier with less than 10dB noise figure and greater than 40dB gain within the band of interest is needed.

With the power supply off, place a 50 Ω termination on the input of the EV kit.

Turn on the power supply to the MAX3510 EV kit. Using the software, set the device to transmit mode with a gain state of 50 (approximately 16dB of gain).

Connect the output of the postamplifier to the spectrum analyzer and the input to the MAX3510 EV kit output. Set the spectrum analyzer as follows:

| Center Frequency   | 35MHz    |
|--------------------|----------|
| Span               | 60MHz    |
| Reference          | -50dBm   |
| Scale              | 10dB/div |
| IF Bandwidth       | 1kHz     |

Power up the postamplifier.

If the spectrum analyzer being used has a noise marker function, enable it. The output noise can now be read directly  from  the  spectrum analyzer. Move this marker to 42MHz. Read the value of the noise density from the spectrum analyzer.

This noise value is a combination of the output noise of the MAX3510, the gain of the postamp, and the noise figure of the postamp. With the specified noise figure of 10dB, the noise contribution of the postamp may be ignored. Also the series output resistor (R5) reduces the actual measured value by 3.5dB. Use the following equation to arrive at the MAX3510's output noise:

VNOISE = PNOISE + 47dB + 3.5dB + 10 · log (160,000) GAMP

where:

VNOISE = MAX3510 output noise in dBmV measured in a 160kHz bandwidth

PNOISE = Noise density in dBm/Hz read from the spectrum analyzer

GAMP = Gain of the postamplifier in dB

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

If  the  spectrum  analyzer  being  used  does not have a noise marker function, corrections must be made to account for the IF bandwidth used to make the measurement. Consult the user's manual for your spectrum analyzer for details. Once the correction is made, the value read from the spectrum analyzer can be converted to a noise density (dBm/Hz), and the above formula can be used.

Noise can now be measured at various gains. Output noise in transmit disable mode cannot be measured.

## Layout Considerations

The MAX3510 evaluation board can serve as a guide for your board layout. Particular attention has been paid to the output circuit prior to the transformer and to the DC supply trace to the transformer. The traces leading from output pins 15 and 16 must be as short as possible and symmetrical to reject second harmonics. Since the device can draw 120mA when swinging the maximum signal, the supply trace to the center tap of the transformer must be as wide as is practical to minimize voltage drop.

Ground inductance and supply decoupling loop inductance may degrade distortion performance. Returning supply decoupling capacitors for pins 2 and 19 directly to  pins  4  and  20,  respectively, is recommended. Otherwise, use multiple vias to the ground plane.

## MAX3510 Evaluation Kit

Figure 1.  MAX3510 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3510 Evaluation Kit

<!-- image -->

Figure 2.  MAX3510 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX3510 EV Kit PC Board Layout-Component Side

Figure 3.  MAX3510 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5.  MAX3510 EV Kit PC Board Layout-GND Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 6.  MAX3510 EV Kit PC Board Layout-Power Plane

<!-- image -->

## MAX3510 Evaluation Kit

Figure 7.  MAX3510 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3510 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1999 Maxim Integrated Products