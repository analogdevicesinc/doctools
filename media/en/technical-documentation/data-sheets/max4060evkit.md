<!-- lastmod 2022-08-05 -->
## General Description

The MAX4060 evaluation kit (EV kit) is a fully assembled and tested circuit board used to evaluate the MAX4060 low-noise microphone amplifier. The MAX4060 contains a differential input amplifier typically used for an internal microphone and a single-ended auxiliary-input amplifier used for an external microphone. Both amplifiers have an internally set fixed gain of 10V/V. The MAX4060 EV kit also provides a bias voltage for powering microphones, compliant with the PC99/2001 specification.

The MAX4060 EV kit has low quiescent current and high power-supply rejection. The MAX4060 is available in 8-pin QFN and µMAX packages. The MAX4060 EV kit uses the smaller 8-pin QFN package.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C104K  |
| C2            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106MT |
| C3, C4, C5    |     3 | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105KT  |
| C6            |     1 | 1µF ±10%, 6.3V tantalum capacitor (0603) AVX TACL105K006R        |
| AUX_IN        |     1 | 3.5mm stereo jack                                                |
| OUT           |     1 | Non-switched, PC-mount jack, red                                 |
| R1            |     1 | 100k Ω ±5% resistor (0603)                                       |
| JU1           |     1 | 3-pin header                                                     |
| None          |     1 | Shunt (JU1)                                                      |
| None          |     1 | MAX4060 PC board                                                 |
| None          |     1 | MAX4060-MAX4063 data sheet                                       |
| None          |     1 | MAX4060 EV kit data sheet                                        |
| U1            |     1 | MAX4060EGA (8-pin QFN)                                           |

<!-- image -->

## Features

- ♦ 4.5V to 5.5V Single-Supply Operation
- ♦ Low 0.75mA Supply Current
- ♦ High 86dB PSRR at 1kHz
- ♦ Single-Ended and Differential Inputs
- ♦ PC99/2001 Compliant
- ♦ Low-Noise Microphone Bias Voltage
- ♦ Small 8-Pin QFN Package (3mm x 3mm)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX4060EVKIT | 0°C to +70°C | 8 QFN        |

## Quick Start

The MAX4060 EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Do not turn on the power supply until all connec-

tions are completed.

## Recommended Equipment

- 5V, 100mA power supply
- Function generator
- Oscilloscope
- 1) Set the power supply to 5V.
- 2) Set  the  function  generator's  output  for  a  sine  wave with 0.2VP-P, 100Hz frequency, and 0 Offset.
- 3) Turn off the power supply and function generator.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| AVX        | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note:

Please indicate that you are using the MAX4060 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## Equipment Setup

## MAX4060 Evaluation Kit

## Quick Test

- 1) Install  a  shunt  across  pins  1  and  2  of  jumper  JU1 ( INT/ AUX).
- 2) Connect the output of the function generator to the AUX\_IN pad on the MAX4060 EV kit and the ground lead of the function generator to the GND pad.
- 3) Connect the 5V terminal of the power supply to the VCC pad and the ground terminal of the power supply to the GND pad.
- 4) Turn on the power supply and then the function generator.
- 5) Using the oscilloscope, verify that the signal at the OUT pad is 2VP-P.
- 6) Move the shunt on JU1 to pins 2 and 3.
- 7) Move the output of the function generator to the IN+ pad on the MAX4060 EV kit and the ground lead of the function generator to the IN- pad.
- 8) Using the oscilloscope, verify that the signal at the OUT pad is 2VP-P.

Figure 1. MAX4060 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description

The MAX4060 EV kit evaluates the MAX4060 which contains two low-noise amplifiers: a differential amplifier typically  used for amplifying an internal microphone and an auxiliary single-ended amplifier typically used for amplifying an external microphone.

The MAX4060 EV kit operates from a 4.5V to 5.5V supply and provides a DC biasing voltage with an internal, 2.5k Ω resistor to power a microphone. This DC biasing voltage is  PC99/2001 compliant. The two amplifiers within the MAX4060 have an internally set fixed gain of 10V/V.

## Jumper Selection Input Mode

Jumper JU1 provides an option to select between single-ended mode (AUX) and differential mode ( INT ) inputs. The input mode ( INT /AUX) can also be controlled by an external controller connected to the ( INT /AUX) pad after removing the shunt on jumper JU1 (see Table 1 for shunt positions).

## Table 1. JU1 Jumper Selection

| SHUNT POSITION                                      | INT /AUX PIN              | EV KIT INPUT              |
|-----------------------------------------------------|---------------------------|---------------------------|
| 1-2 (AUX)                                           | Pulled up to V CC         | Single ended              |
| 2-3 ( INT )                                         | Pulled down to GND        | Differential              |
| None. External controller connected to INT /AUX pad | Driven by external source | Driven by external source |

<!-- image -->

Figure 2. MAX4060 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX4060 Evaluation Kit

Figure 3. MAX4060 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX4060 EV Kit PC Board Layout-Solder Side

<!-- image -->

Note: The AUX/ INT pad on the MAX4060 EV kit connects to the INT /AUX pin on the device.

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 3

## Evaluates:  MAX4060