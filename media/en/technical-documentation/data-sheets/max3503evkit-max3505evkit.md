<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX3503/MAX3505 Evaluation Kits

## General Description

The MAX3503/MAX3505 evaluation kits (EV kits) simplify evaluation of the MAX3503 and MAX3505 CATV upstream amplifiers. The kits include a data interface that can be programmed through the parallel port of a standard PC. Software (Windows 95/98® compatible) is available at www.maxim-ic.com/TechSupport/other.htm to facilitate this function. This software allows programming of all available features through a simple user interface.

Access to the device input and output is provided through 50 Ω SMA connectors. The input is terminated with 50 Ω .  The  output  circuit  includes  a  75 Ω to  50 Ω minimum-loss pad for use with 50 Ω equipment.

Windows 95/98 is a registered trademark of Microsoft Corp.

| DESIGNATION      |   QTY | DESCRIPTION                                                                                                               |
|------------------|-------|---------------------------------------------------------------------------------------------------------------------------|
| B1-B5            |     5 | 0 Ω resistors (0805)                                                                                                      |
| C1               |     1 | 10µF ± 10%, 16V min tantalum capacitor AVX TAJC106K016                                                                    |
| C2-C5, C9, C15   |     6 | 0.1µF ± 10% ceramic capacitors (0603) Murata GRM188R71C104K                                                               |
| C6, C7           |     2 | 1000pF ± 10% ceramic capacitors (0603) Murata GRM188R71H102K                                                              |
| C8               |     1 | Open                                                                                                                      |
| C10-C14, C16-C21 |    11 | 100pF ± 10% ceramic capacitors (0603) Murata GRM1885C1H101K                                                               |
| J1               |     1 | SMA connector, PC mount EFJohnson 142-0701-201 or Digi-Key J500-ND                                                        |
| J2               |     1 | DB25 connector, right angle, female Digi-Key A2102-ND AMP 745783-4                                                        |
| J3               |     1 | SMA connector, edge mount EFJohnson 142-0701-801 or Digi-Key J502-ND Note: Cut center pin to approximately 1/16in length. |
| JU1-JU8          |     8 | 3-pin headers, 0.1in centers Digi-Key S1012-36-ND                                                                         |
| JU1-JU8          |     8 | Shunts Digi-Key S9000-ND                                                                                                  |

- ♦ Single-Supply Operation
- ♦ Output Level Range Up to 64dBmV (MAX3505)
- ♦ Gain Programmable in 0.5dB Steps
- ♦ Transmit-Disable Mode
- ♦ Shutdown Mode
- ♦ Control Software Available for Download
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3503EVKIT | -40°C to +85°C | 20 QFN       |
| MAX3505EVKIT | -40°C to +85°C | 20 QFN       |

## Component List

| DESIGNATION                                             |   QTY | DESCRIPTION                                    |
|---------------------------------------------------------|-------|------------------------------------------------|
| L1                                                      |     1 | 0 Ω resistor (0805)                            |
| R1                                                      |     1 | 49.9 Ω _ ± 1% resistor (0402)                  |
| R2                                                      |     1 | 86.6 Ω ± 1% resistor (0805)                    |
| R3                                                      |     1 | 43.2 Ω ± 1% resistor (0805)                    |
| R4, R5, R6, R14, R16, R17, R19, R25, R26, R27, R29, R30 |    12 | Open                                           |
| R7-R13, R15, R20-R24                                    |    13 | 100 Ω ± 5% resistors (0603)                    |
| R18, R28                                                |     2 | 100k Ω ± 5% resistors (0603)                   |
| T1                                                      |     1 | Transformer, 1 to 1 M/A Com ETC1-1T            |
| T2                                                      |     1 | Transformer, 1 to 1 Toko 458PT-1457            |
| U1                                                      |     1 | MAX3503EGP QFN20 MAX3505EGP QFN20              |
| U2                                                      |     1 | Octal buffer Texas Instruments SN74LVTH244ADBR |
| VCC, GND, TP1, IN1, IN2                                 |     5 | Test points Digi-Key 5000K-ND                  |
| None                                                    |     1 | MAX3503/MAX3505 EV kit circuit board, rev 3    |
| None                                                    |     1 | MAX3503 data sheet MAX3505 data sheet          |
| None                                                    |     1 | MAX3503/MAX3505 EV kits data sheet             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## Features

## MAX3503/MAX3505 Evaluation Kits

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE         |
|------------|--------------|--------------|-----------------|
| AVX        | 843-448-9411 | 843-448-1943 | www.avxcorp.com |
| M/A-COM    | 978-442-5000 | 978-442-4178 | www.macom.com   |
| Murata     | 814-237-1431 | 814-238-0490 | www.murata.com  |
| Toko       | 800-745-8656 | -            | www.tokoam.com  |

## Table 1. Jumper Setting Functions

| JUMPER   | FUNCTION                              | SHORT PIN1 to PIN2    | SHORT PIN2 to PIN3         |
|----------|---------------------------------------|-----------------------|----------------------------|
| JU1      | PC port buffer                        | Disabled              | Enabled                    |
| JU2      | SDA input                             | PC port control       | N/A                        |
| JU3      | SCLK input                            | PC port control       | N/A                        |
| JU4      | CS input                              | PC port control       | N/A                        |
| JU5      | Sets the method of control for TXEN   | PC port control       | Manual control through JU6 |
| JU6      | Sets the manual control state of TXEN | Logic 1 state (V CC ) | Logic 0 state (GND)        |
| JU7      | Sets the method of control for SHDN   | PC port control       | Manual control through JU8 |
| JU8      | Sets the manual control state of SHDN | Logic 1 state (V CC ) | Logic 0 state (GND)        |

## Quick Start

The MAX3503/MAX3505 EV kits are fully assembled and factory tested. Follow the instructions in the Connections and Setup section. Note that the output circuit includes a minimum-loss pad used to bring the load impedance up to 75 Ω . This must be accounted for in  all  measurements (see the Output Circuit section). Also note that an input transformer is supplied to allow differential input drive from a single-ended source. This transformer is not required in the application.

## Test Equipment Required

- DC supply capable of delivering 5.25V and 400mA of continuous current
- HP 8648 (or equivalent) signal source capable of generating 40dBmV up to 200MHz
- HP 8561E (or equivalent) spectrum analyzer with a minimum 200MHz frequency range
- Two digital multimeters (DMMs) to monitor VCC and ICC, if desired
- Lowpass filters to attenuate harmonic output of signal sources, if harmonic measurements are desired
- IBM PC or compatible with Windows 95/98 installed
- Male-to-male 25-pin parallel cable, wired straight through
- 0V to 3.3V pulse generator for transient measurement

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Low-noise amplifier with 40dB gain from 5MHz to 100MHz for noise measurement
- Oscilloscope with 200MHz bandwidth
- Network analyzer, such as the HP 8753D, which can be used to measure gain vs. frequency.

## Connections and Setup

- 1) Connect the power supply (preset to 3.3V for MAX3503 and 5V for MAX3505) to the pins labeled VCC and GND on the circuit board. Connect the 50 Ω signal source to INPUT (preset the signal source for -13dBm (34dBmV across a 50 Ω load)), and terminate OUTPUT with a spectrum analyzer 50 Ω input impedance. If using a signal source with a source impedance other than 50 Ω , or if a different input  impedance is required, replace resistor (R1) with a resistor of the appropriate value.
- 2) Connect the 25-pin male-to-male cable between the parallel  port  of  the  PC  and  the  25-pin  female  connector on the EV kit board.
- 3) See Table 1 for board jumper settings. Set all jumpers to enable PC port control, unless otherwise stated.
- 4) Turn on the power supply. Turn on the PC and the test equipment.
- 5) Run the software program.

<!-- image -->

## MAX3503/MAX3505 Evaluation Kits

## Detailed Description

## Using the Software

The MAX3503/MAX3505 use a serial data interface (SDI) to set gain. Some method of communicating with the SDI is  required to use the MAX3503/MAX3505 EV kits. A microprocessor, pattern generator, or PC can be used. Software and supporting documentation for programming the part through the parallel port of a PC is available at www.maxim-ic.com/TechSupport/other.htm.

## Gain Adjustment

The valid gain codes are 0 to 127 (decimal). The nominal change in gain is 0.5dB per gain code. Gain codes are set exclusively by programming the SDI. Highpower (HP) mode and low-noise (LN) mode can be controlled only through the PC interface. Refer to the MAX3503 or MAX3505 data sheet for details.

## Shutdown and Transmit Enable

Jumpers JU5 through JU8 determine how shutdown and transmit-enable features are controlled. Pin 2 of JU5 and JU7 are connected directly to the device. If an external source, such as a modulator chip or microprocessor, is used to control these features, make the connection to pin 2 of JU5 and JU7.  If manual control of shutdown and transmit enable is desired, shunt pins 2 and 3 of jumper JU5 and pins 2 and 3 of jumper JU7. This allows TXEN and SHDN to  be  controlled  by  JU6 and JU8, respectively. JU6 and JU8 are used to place either VCC or ground at SHDN or TXEN. Pin 3 of JU6 and JU8 is ground, and pin 1 is VCC. To control the TXEN and SHDN features using the software, shunt pin 1 and pin 2 of JU5 and JU7.

## Manual Control of Serial Data Interface

If  using  a  source  other  than  a  PC  to  control  the  serial data interface (SDI) of the MAX3503/MAX3505 EV kits, such as a digital pattern generator or microprocessor, remove the shunts on jumpers JU2, JU3, and JU4. Access to the SDI is available through these jumpers. Termination pads are provided (R4, R5, R6). Solder an appropriate resistor to these pads, if desired. Refer to the MAX3503 or MAX3505 data sheet for a description of the SDI. To control the SDI using the software, shunt pin 1 and pin 2 of JU2, JU3, and JU4.

## Input Circuit

The input circuits of the MAX3503/MAX3505 EV kits are configured with a 1:1 balun, terminated with a 49.9 Ω

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

input resistor.  This  allows  the  input  to  be  driven  with single-ended 50 Ω test equipment. The balun generates a differential signal, because rated performance is specified with a differential input drive, typically from a differential  lowpass  filter.  If  the  MAX3503  or  MAX3505 is  to  be  driven  single  ended,  the  input  balun  must  be removed and the undriven input connected to ground through a 0.1µF blocking capacitor.

## Output Circuit

The MAX3503 and MAX3505 have differential outputs. This architecture helps suppress second-order distortion (harmonics). To convert to a single-ended output, a 1:1 transformer (T2) is used. Because most test equipment is supplied with a 50 Ω input impedance, a minimum-loss pad is provided on the output of the transformer to increase the load impedance to a nominal 75 Ω . This places the proper load on the device but reduces the measured output voltage level by 7.5dB.

Note: When making measurements with the EV kits, add 7.5dB to all measurements of voltage gain and output voltage level, including noise, to arrive at the correct value for a 75 Ω system.

For use with 75 Ω test equipment:

- 1) Remove the 50 Ω output SMA connector and replace it with a 75 Ω connector.
- 2) Remove R3 and replace it with a 0 Ω resistor or lowinductance short.
- 3) Remove R2.
- 4) Use a 75 Ω cable.

## Analysis

## Harmonic Distortion

A filter is needed to reject the harmonics generated by the signal source. For this example, a lowpass filter with an approximate 25MHz to 35MHz cutoff frequency is required. This filter must reject at least 20dB of signal at 40MHz.

- 1) Set the 50 Ω signal source for 20MHz and -13dBm.
- 2) Adjust the amplitude to account for the insertion loss in the filter.
- 3) With a spectrum analyzer, verify that the second and third harmonics generated by the source are suppressed by at least 70dBc.

## MAX3503/MAX3505 Evaluation Kits

- 4) Connect the filter between INPUT of the EV kit and the output of the signal source, ensuring that the proper terminations are being used for this filter.
- 5) Connect a spectrum analyzer to OUTPUT.
- 6) Set the center frequency for 40MHz and the span for 50MHz or greater.
- 7) Adjust the reference level so that the fundamental (20MHz tone) is within 10dB to 20dB of the reference level. If the fundamental is less than 10dB below the reference level, the harmonic distortion of the spectrum analyzer might prevent accurate measurement of the distortion.
- 8) Set the gain to 27dB. (Refer to the MAX3503 or MAX3505 data sheet for details.)
- 9) Measure the level of the fundamental, second, and third harmonics on the spectrum analyzer. These readings are measured in dBm. To convert from dBm to dBmV in a 50 Ω system, use the following equation:

X(dBmV) = Y(dBm) + 47dB (50 Ω system)

- 10) Add 7.5dB to this value to account for the attenuation of  the  minimum-loss pad, in dBmV, for a 75 Ω load. The gain now can be calculated in dB, and the harmonic distortion can be calculated in dBc.

## Switching Transients

To measure the transmit-enable and transmit-disable transients, the TXEN pin is driven from an external source. No input signal is applied, and the output is viewed on an oscilloscope.

- 1) Connect OUTPUT to the oscilloscope's 50 Ω input. Set the scope's time base to 5µs/div and the vertical scale to 5mV/div.
- 2) Set the pulse generator as follows:
-  Amplitude: 3.3V
-  Duty cycle: 50%
-  Rise/fall time: 100ns
-  Pulse width: 25µs
-  Offset: 1.65V

Do not drive the TXEN pin below 0V or above 3.6V.

- 3) Turn on the power supply.
- 4) Remove the shunt from jumper JU5 (TXEN), and connect the output of the pulse generator to pin 2 of this jumper.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 5) Using a convenient method, trigger the oscilloscope from the pulse generator
- 6) A rising-  and falling-edge transient should appear on the scope's CRT. Multiply the value of the measured transient by 2.37 to account for the presence of  the  minimum-loss pad. The gain can now be changed to show the output transient's dependence on gain.

## Output Noise

Use a spectrum analyzer to measure output noise. A postamplifier with less than 10dB noise figure and greater than 40dB gain within the band of interest is needed.

- 1) Turn on the power supply.
- 2) Terminate the input with 50 Ω .
- 3) Using the software, set the device to transmit mode with approximately 27dB of gain.
- 4) Connect the output of the postamplifier to the spectrum analyzer and the input to OUTPUT on the EV kits. Set the spectrum analyzer as follows:
-  Center frequency: 35MHz
-  Span: 60MHz
-  Reference: -50dBm
-  Scale: 10dB/div
-  IF bandwidth: 1kHz
- 5) Power up the postamplifier. If the spectrum analyzer being used has a noise-marker function, enable it. Otherwise, subtract 10log (RBW) from the measured power. Move this marker to 42MHz. Read the value of the noise density from the spectrum analyzer. This noise value is a combination of the output noise of the MAX3503 or MAX3505, the gain of the postamplifier, and the noise figure of the postamplifier.  With  the  specified  noise  figure  of  10dB, the noise contribution of the postamplifier can be ignored. The minimum-loss pad reduces the actual measured value by 7.5dB. Use the following equation to arrive at the output noise in a 160kHz bandwidth:

VNOISE = PNOISE + 47dB + 7.5dB + 10 ✕ log (160,000) - GAMP

<!-- image -->

where:

VNOISE = MAX3503/MAX3505 output noise in dBmV measured in a 160kHz bandwidth

PNOISE = Noise density in dBm/Hz read from the spectrum analyzer

GAMP = Gain of the postamplifier in dB

## Layout Considerations

The MAX3503/MAX3505 EV kits' PC board can be a guide for board layout. Pay close attention to thermal design and to the output network. The MAX3503/ MAX3505 package exposed paddle (EP) conducts heat out of the part and provides a low-impedance

## MAX3503/MAX3505 Evaluation Kits

electrical  connection. The EP must be attached to the PC board ground plane with a low thermal and electrical impedance contact. Ideally, this is provided by soldering the backside package contact directly to a top metal ground plane on the PC board. Alternatively, the EP can be connected to a ground plane using an array of plated vias directly below the EP.

The output circuit that connects OUT+ and OUT- (pins 14 and 12) to the output transformer (T2) should be as symmetrical as possible to reduce second-order distortion. In addition, keep the capacitance of this path low to minimize gain rolloff at high frequencies.

## Functional Diagram

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3503/MAX3505 Evaluation Kits

Figure 1. MAX3503/MAX3505 EV Kits Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3503/MAX3505 Evaluation Kits

<!-- image -->

Figure 2. MAX3503/MAX3505 EV Kits Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3503/MAX3505 Evaluation Kits

Figure 3. MAX3503/MAX3505 EV Kits PC Board LayoutSolder Side

<!-- image -->

Figure 4. MAX3503/MAX3505 EV Kits PC Board LayoutComponent Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8