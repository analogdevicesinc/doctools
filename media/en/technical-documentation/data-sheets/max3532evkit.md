<!-- lastmod 2022-08-02 -->
## General Description

The MAX3532 evaluation kit (EV kit) simplifies evaluation of the MAX3532 CATV upstream driver amplifier. It includes a serial data interface, which can be programmed via the parallel port of a standard PC. A QuickBasic™ program is included to facilitate this function. This software allows the user to program both the gain and transmit modes via a simple user interface.

Access to the device input and output is provided through 50 Ω SMA connectors. The input is matched to 50 Ω ,  while  the  output  circuit  contains  a  series  24 Ω resistor  that  increases  the  load  on  the  output  trans former to 75 Ω when using 50 Ω test  equipment at the output.

## Component List

| DESIGNATION         |   QTY | DESCRIPTION                                                  |
|---------------------|-------|--------------------------------------------------------------|
| C1-C3, C6           |     4 | 0.1µF, 25V min, 10% ceramic capacitors                       |
| C4, C7              |     2 | 0.001µF, 25V min, 10%ceramic capacitors                      |
| C5                  |     1 | 10µF ±10%, 10V min tantalum capacitor AVX TAJB106K010        |
| R1                  |     1 | 51 Ω , 5% resistor                                           |
| R2, R6-R13, R16-R20 |    14 | Not installed.                                               |
| R3, R4              |     2 | 8.2 Ω 1% resistors                                           |
| R5                  |     1 | 24 Ω 5% resistor                                             |
| R14, R15            |     2 | 100k Ω 5% resistors                                          |
| J1, J4              |     2 | SMA connectors (edge mount)                                  |
| L1-L4               |     4 | 1.2µH inductors Coilcraft 1008LS-122XKBC                     |
| T1                  |     1 | 4-to-1 transformer (2:1 voltage ratio) Mini-Circuits T4-1-2W |
| JU5-JU8             |     4 | 3-pin headers (0.1' centers)                                 |
| JU1-JU3             |     3 | 2-pin headers (0.1' centers)                                 |
| J5                  |     1 | Female, right-angle DB25 connector                           |
| None                |     7 | Shunt                                                        |
| B1                  |     1 | Surface-mount bead core Panasonic EXC-CL3216U                |
| +5V, GND            |     2 | Test points                                                  |
| U1                  |     1 | MAX3532EAX                                                   |
| None                |     1 | MAX3532 data sheet                                           |
| None                |     1 | MAX3532 circuit board                                        |
| None                |     1 | MAX3532 software disk                                        |

QuickBasic is a trademark of Microsoft Corp.

P7

- ♦ Single +5V Operation
- ♦ Output Level Range from &lt; 8dBmV to 62dBmV
- ♦ Gain Programmable in 1dB Steps via Software
- ♦ 350mW Typical Power Dissipation
- ♦ Transmit-Disable Mode
- ♦ Two Shutdown Modes
- ♦ Control Software Included
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3532EVKIT | -40°C to +85°C | 36 SSOP      |

## Component Suppliers

| SUPPLIER      | PHONE        | FAX          |
|---------------|--------------|--------------|
| AVX           | 803-946-0690 | 803-626-3123 |
| Coilcraft     | 847-639-6400 | 847-639-1469 |
| Mini-Circuits | 718-834-4500 | 718-832-4961 |
| Panasonic     | 714-373-7939 | 714-373-7183 |

Note: Please indicate that your are using the MAX3532 when contacting these suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX3532 EV kit is fully assembled and factory tested.  Follow  the  instructions  in  the Connections  and Setup section.

Note: The output circuit contains a series 24 Ω resistor  that  is used to bring the load impedance up to 75 Ω .  This  must  be accounted for in all measurements (see Detailed Description).

## Test Equipment Required

- DC supply capable of delivering 5.5V and 200mA of continuous current.
- HP or equivalent signal source capable of generating 40dBmV up to 200MHz.
- HP8561E or equivalent spectrum analyzer with approximately 200MHz frequency range.
- Digital multimeter (DMM) to monitor VCC and ICC, if desired.
- Lowpass filters to control harmonic output of signal sources, if harmonic measurements are desired.

†

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

<!-- image -->

## Features

-

†

†

## MAX3532 Evaluation Kit

- Network analyzer such as HP8753D. (May be used to  measure gain and harmonic levels if configured with this option; contact manufacturer.)
- IBM PC or compatible.
- Male-to-male 25-pin parallel cable, straight through.

## Connections and Setup

- 1) Connect the +5V power supply to +5V and GND on the circuit  board.  Connect a 50 Ω signal source to VIN and terminate VOUT with a spectrum analyzer or network analyzer having a 50 Ω input impedance. If using a signal source with a source impedance other than 50 Ω ,  or  if  a  different  input  impedance  is required, be sure to replace resistor R1 with the appropriate value.
- 2) Connect a 25-pin male-to-male cable between the parallel (printer) port of the PC and the 25-pin female connector on the EV kit board. Ensure that shunts are placed on jumpers JU1, JU2, and JU3. These shunts connect the appropriate pins of the DB25 connector  to  the  serial  data  interface  of  the MAX3532. Also check that pins 1 and 2 of jumpers JU5 and JU6 are shunted. Additionally, ensure that pins 2 and 3 of JU7 and JU8 are shunted.

Note: Pin 1 of all jumpers is defined as the closest pin to the designator.

- 3) Turn on the power supply. Turn on the PC and the test equipment. Set the signal source for 36dBmV.
- 4) From the DOS prompt of the PC, enable QuickBasic by typing 'qbasic'. Open the file 'MAX3532.bas' from the appropriate directory. Run the program.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Using the Software

When the software is first enabled, it places the MAX3532 in low-noise mode with a gain state of 58approximately 10dB of gain. At this point the device will draw approximately 75mA. The software allows the user to do the following:

- Increment the gain state by 1 (add 1dB of gain)
- Decrement the gain state by 1 (decrease the gain by 1dB)
- Enable high-power mode
- Enable low-noise mode
- Place the device in transmit disable mode
- Place the device in software shutdown
- Input a new gain state

Test the software by typing the number '6' (then press Enter) to place the device in software-shutdown mode. The current being drawn by the device should drop to approximately 2mA. If this happens, the software is functioning. If this does not happen, check the appro priate  connections; in particular, ensure that jumpers JU1, JU2, and JU3 are shunted.

## Gain Adjustment

Valid gain states range from 0 to 63. The nominal change in gain is 1dB per gain state. The actual gain range of the MAX3532 is limited at high power levels by device saturation and is limited at low power levels by leakage through the device. This leakage is frequency dependent. See the MAX3532 data sheet for more detailed information.

## Shutdown and Transmit Enable

Jumpers JU5 and JU6 determine how the shutdown and transmit-enable features are controlled. Pin 2 of each of these jumpers is connected directly to the device. If an external source (such as a modulator chip or  microprocessor) is used to control these features, simply make the connection to pin 2 of the appropriate jumper. Otherwise, pins 1 and 2 of JU5 and JU6 must be shunted.

On-board control of SHDN (shutdown) and TXEN (transmit enable) is accomplished manually via jumpers JU7 and JU8. JU7 and JU8 are used to place either +5V or GND at TXEN or SHDN . Pin 1 of these jumpers is GND and pin 3 is +5V.

## Manual Control of Serial Data Interface

If using another source to drive the serial data interface of the MAX3532 EV kit (such as a digital pattern gener ator or microprocessor), remove the shunts on jumpers JU1, JU2, and JU3. Access to the serial data interface is available through pin 1 of these jumpers.

## Output Circuit

The MAX3532 uses a differential emitter-follower output to  suppress second-order distortion. In order to achieve a single-ended output and to attain higher out put voltages, a 1:2 (voltage ratio) transformer is used. Furthermore, the output impedance of the MAX3532 itself  is  less  than  2 Ω .  In  order  to  match  this  output  to 75 Ω , a pair of 8.2 Ω back-termination resistors is used.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

-

The output circuit is designed for a good match to 75 Ω , with the quality of the match largely determined by the value of the back-termination resistors. In general, in a 75 Ω system the large-signal performance of the device will improve as these resistor values are reduced; however, the output match will suffer. If a load impedance other than 75 Ω is  to  be  used,  the  value  of  R3  and  R4 can be approximated by the following equation:

<!-- formula-not-decoded -->

Since most test equipment is supplied with a 50 Ω termination impedance, a series 24 Ω resistor  is  provided with this  EV kit  to  increase  the  load  impedance to a nominal 75 Ω . This places the proper load on the device but will also reduce the measured output voltage level by 3.5dB. It is important to consider this when making any measurements with the EV kit. 3.5dB must be added to all measurements of voltage gain and output voltage level (including noise) to arrive at the correct value for a 75 Ω system.

If  75 Ω test  equipment is available, take the following steps:

- 1) Remove the 50 Ω output SMA connector and replace it with a 75 Ω connector.
- 2) Remove R5 (the 24 Ω series output resistor) and replace it with a 0 Ω resistor  or  some  other  type  of short.
- 3) Be sure to use a 75 Ω cable on the output.

## Analysis

The following is an example of a simple harmonic dis tortion  measurement. A filter will be needed to reject the harmonics generated by the signal source. For this example, a lowpass filter with approximately a 25MHz to  35MHz cutoff frequency will be required. This filter will  also  need to reject at least 20dB of signal at 40MHz. Set the signal source for 20MHz and 36dBmV. Adjust the amplitude to account for the insertion loss in the filter. Verify with the spectrum analyzer that the sec ond and third harmonics generated by the source are suppressed by at least 70dB. Place the filter between the input of the EV kit and the signal source, making sure that the proper terminations are being used for this particular filter.

Connect a spectrum analyzer to VOUT. Set the center frequency for 40MHz and the span for 50MHz or more. Adjust the reference level so that the fundamental

<!-- image -->

## MAX3532 Evaluation Kit

(20MHz tone) is within 5dB to 15dB of the reference level. If the fundamental is less than 5dB below the refer ence level, the harmonic distortion of the spectrum ana lyzer will prevent accurate measurement of the distortion.

-

To set the gain state, type the number '7' and press the Enter key on the PC. You will be prompted to enter the gain state. Type '30' and press Enter. Place the device in low-noise mode by typing '4' and pressing Enter.

Measure the level of the fundamental, second, and third harmonics on the spectrum analyzer. These read ings have units of dBm. To convert from dBm to dBmV in a 50 Ω system, use the following equation:

<!-- formula-not-decoded -->

Add 3.5dB to the converted value to arrive at the cor rect output voltage, in dBmV, for a 75 Ω load. The gain can now be calculated in dB, and the harmonic distor tion can be calculated in dBc.

Now place the device in high-power mode. Type '3' on the PC and press the Enter key. This will increase the gain by approximately 16dB. The steps taken above can be repeated to solve for gain and harmonic distor tion in high-power mode.

## Layout Considerations

The MAX3532 evaluation board can serve as a guide for your board layout. Particular attention has been paid to the output circuit prior to the transformer and the DC supply trace to pins 29 and 30. The traces leading from output pins 33 and 34 must be as short as possible and absolutely symmetrical to reject second harmonics. Additionally, keep the back-termination resistors as close to the device as possible to minimize the effects of  inductance on the device's low output impedance. Since the device can draw close to 100mA when swinging the maximum signal, the supply trace to pins 29 and 30 must be as wide as practical to minimize resistive loss.

Ground inductance and supply decoupling loop induc tance degrade distortion performance. Therefore, ground plane connections to VEE (pin 26) and VEE2 (pin 31) should be made with multiple vias if possible. Returning supply decoupling capacitors for pins 29 and 30 directly to pins 26 and 31, respectively, is recommended. Otherwise, use multiple vias to the ground plane.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

-

-

-

-

†

†

## MAX3532 Evaluation Kit

Figure 1.  MAX3532 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  MAX3532 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX3532 Evaluation Kit

Figure 3.  MAX3532 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

†

## MAX3532 Evaluation Kit

Figure 4.  MAX3532 EV Kit PC Board Layout-Component Side

<!-- image -->

6

oo

1.0"

Figure 5.  MAX3532 EV Kit PC Board Layout-Ground Plane

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

O

O

O

O

O

□oo

口oo

×】

口O

口o

8

<!-- image -->

Figure 6.  MAX3532 EV Kit PC Board Layout-Power Plane

<!-- image -->

## MAX3532 Evaluation Kit

Figure 7.  MAX3532 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

†

†

## MAX3532 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1998 Maxim Integrated Products