<!-- lastmod 2022-08-05 -->
## General Description

The MAX4063 evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX4063 lownoise microphone amplifier IC designed for a single 2.4V to 5.5V application. The MAX4063 IC contains two microphone amplifiers. The main amplifier is typically used to sense an internal (built-in) system microphone, and an auxiliary amplifier that can be used to sense an external (plug-in) microphone. The differential and single-ended gains of the amplifiers are adjustable with jumpers and resistors. The differential output allows the EV kit to drive a load at up to 6VP-P. The EV kit also features low quiescent current and a shutdown control to minimize power consumption.

The EV kit demonstrates how the MAX4063 can provide a complete microphone solution for a notebook PC. The MAX4063 is available in 14-pin TSSOP and 16-pin QFN (4mm x 4mm x 0.8mm) packages.

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) Taiyo Yuden EMK107BJ104KA   |
| C2, C3, C4    |     3 | 10µF ±10%, 10V tantalum capacitors (Case A) AVX TAJA106K010R             |
| C5, C6        |     2 | 1.0µF ±10%, 6.3V X5R ceramic capacitors (0603) Taiyo Yuden JMK107BJ105KA |
| C7, C8        |     2 | 1.0µF ±10%, 16V tantalum capacitors (Case A) AVX TAJA105K016R            |
| C9            |     1 | 10pF ±5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H100J            |

<!-- image -->

## Features

- ♦ 2.4V to 5.5V Single-Supply Operation
- ♦ High 95dB PSRR
- ♦ Low-Noise Integrated Microphone Bias
- ♦ Single-Ended and Differential Inputs
- ♦ Differential Output
- ♦ Externally Adjustable Gain
- ♦ 0.3µA Shutdown Current
- ♦ Small 14-Pin TSSOP Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX4063EVKIT | 0°C to +70°C | 14 TSSOP     |

## Component List

| DESIGNATION         |   QTY | DESCRIPTION                    |
|---------------------|-------|--------------------------------|
| J1                  |     1 | 3.5mm stereo jack              |
| J2                  |     1 | Nonswitched PC mount jack, red |
| R1, R6              |     2 | 2k Ω ±1% resistors (0805)      |
| R2                  |     1 | 4.75k Ω ±1% resistor (0805)    |
| R3                  |     1 | 18.2k Ω ±1% resistor (0805)    |
| R4, R5, R7, R9, R10 |     5 | 100k Ω ±5% resistors (0805)    |
| R8, R11             |     0 | Not installed resistors (0805) |
| JU1, JU2, JU3       |     3 | 2-pin headers                  |
| JU4, JU5            |     2 | 3-pin headers                  |
| U1                  |     1 | MAX4063EUD (14-pin TSSOP)      |
| None                |     3 | Shunts (JU1, JU4, JU5)         |
| None                |     1 | MAX4063 PC board               |

## Component List

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| AVX         | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX4063 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX4063 Evaluation Kit

## Quick Start

The MAX4063 EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- 5V power supply
- AC source - 100mVAC, 1kHz sine wave
- Oscilloscope

## Procedures

- 1) Install  a  shunt  across  pins  1  and  2  of  jumper  JU4 (EV kit ON).
- 2) Install  a  shunt  across  pins  1  and  2  of  jumper  JU5 ( INT mode).
- 3) Install a shunt across jumper JU1 (20dB gain).
- 4) Connect channel 1 of the oscilloscope to the OUT pad, and channel 2 of the oscilloscope to the OUT pad. Connect the oscilloscope ground leads to the EV kit GND connection.
- 5) Connect the 5V terminal of the power supply to the VCC pad and the ground terminal of the power supply to the GND pad. Turn on the power supply.
- 6) Connect the 100mV, 1kHz AC source sine wave across the IN+ and IN- pads.
- 7) Verify that the output across the OUT and OUT pads is a 1VAC, 1kHz sine wave.
- 8) Remove the shunt from pins 1 and 2 of JU5 and install  the  shunt  across  pins  2  and  3  of  JU5  (AUX mode).
- 9) Connect the 100mV, 1kHz AC source sine wave across the AUXIN jack (see Figure 1).
- 10) Verify that the output across the OUT and OUT pads is a 2VAC, 1kHz sine wave.

Figure 1. Typical Microphone Jack

<!-- image -->

## Detailed Description

The MAX4063 microphone preamplifier features two selectable inputs, differential outputs, adjustable gain, an integrated low-noise bias source, and a low-power shutdown mode. Two input paths provide both differential  and  single-ended microphone sensing. The high noise rejection of the differential input is ideally suited to  an  internal  microphone where system noise and long-run PC board traces can degrade low-level signals.  The  single-ended input provides a simple connection to an external microphone.

The differential and single-ended inputs have independent, adjustable gains. The Differential Gain Setting on the EV kit is controlled by jumpers JU1, JU2, and JU3 to  select  from  three  preset  gains  (20dB,  40dB, and 60dB); see Table 1. The single-ended (AUX) gain is set to  the  default  26dB.  This  can  by  changed  by  adding resistor R8:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

and AVAUX must be greater than 26dB. When R8 is opened, the gain AVAUX is 26dB.

Differential  outputs  provide a full-scale signal of up to 6VP-P from a single 3V, supply optimizing the dynamic range of the amplified signal. The EV kit operates from a single 2.4V to 5.5V supply.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Jumper Selection

## Differential Gain

JU1, JU2, and JU3 select the differential gain for the MAX4063 EV kit. JU1, JU2, and JU3 should all be left open or installed one at a time . See Table 1 for shunt positions.

Table 1. JU1, JU2, JU3 Jumper Selection

| JUMPER        | SHUNT POSITION               |   DIFFERENTIAL GAIN (dB) |
|---------------|------------------------------|--------------------------|
| JU1           | Installed (JU2 and JU3 open) |                      +20 |
| JU2           | Installed (JU1 and JU3 open) |                      +30 |
| JU3           | Installed (JU1 and JU2 open) |                      +40 |
| JU1, JU2, JU3 | None                         |                       +6 |

## Shutdown

Jumper JU4 controls the shutdown pin ( SHDN )  on the MAX4063 IC. The shutdown function may be activated on the EV kit by installing a shunt across pins 2 and 3 of JU4. The shutdown function may also be controlled by an external controller connected to the SHDN pad and removing the shunt on JU4. See Table 2 for shunt positions.

Table 2. JU4 Jumper Selection

| SHUNT POSITION                                   | SHDN PIN                     | EV KIT FUNCTION                                         |
|--------------------------------------------------|------------------------------|---------------------------------------------------------|
| 1-2 ( SHDN = high)                               | Pulled up to V CC            | EV kit ON.                                              |
| 2-3 ( SHDN = low)                                | Pulled down to GND           | EV kit OFF.                                             |
| None. External controller connected to SHDN pad. | External controller controls | SHDN driven by external source. Shutdown is active low. |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4063 Evaluation Kit

## Input Mode

Jumper JU5 provides an option to select between single-ended mode (AUX) and differential mode (INT) inputs. The input mode ( INT /AUX) may also be controlled by an external controller connected to the ( INT /AUX) pad and removing the shunt on JU5. See Table 3 for shunt positions.

Table 3. JU5 Jumper Selection

| SHUNT POSITION                                          | INT /AUX PIN                 | EV KIT INPUT MODE                     |
|---------------------------------------------------------|------------------------------|---------------------------------------|
| 1-2 ( INT )                                             | Pulled down to GND           | Differential                          |
| 2-3 (AUX)                                               | Pulled up to V CC            | Single ended                          |
| None. External controller connected to ( INT /AUX) pad. | External controller controls | ( INT /AUX) driven by external source |

## MAX4063 Evaluation Kit

Figure 2. MAX4063 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3. MAX4063 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX4063 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX4063 Evaluation Kit

Figure 4. MAX4063 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6. MAX4063 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## Evaluates:  MAX4063