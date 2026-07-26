<!-- lastmod 2022-08-03 -->
## General Description

The MAX4383 evaluation kit (EV kit) demonstrates the capability of the high-speed MAX4383 op amp configured in a 5-pole, lowpass, multiple feedback (Rauch) filter that provides a Butterworth response with a bandwidth of -3dB at 30MHz (typ). This circuit can be used for  video  anti-aliasing  and  reconstruction filtering  for HDTV, Progressive DVD, and XGA resolution graphics displays. The MAX4383 EV kit is designed to drive a 75 Ω back-terminated load, common in video applications, with an overall gain of 1. The MAX4383 EV kit is a fully  assembled and tested surface-mount board that operates from either a +5V single supply or ± 5V dual supplies.

<!-- image -->

## Features

- ♦ Video Filter Solution for ATSC and HighResolution Graphics Applications
- ♦ 5-Pole Active Multiple Feedback (Rauch) Video Filter
- ♦ 30MHz Bandwidth at -3dB (typ)
- ♦ &gt;40dB Attenuation at 74.25MHz
- ♦ +5V Single-Supply or ± 5V Dual-Supply Operation
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested
- ♦ Eliminates Costly Inductors with More Accurate R-C Components

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX4383EVKIT | 0°C to +70°C | 14 TSSOP     |

## Simplified Circuit

<!-- image -->

## Typical Application Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX4383 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Please indicate that you are using the MAX4383 when contacting these suppliers.

## Component List

| DESIGNATION            |   QTY | DESCRIPTION                                                                                   |
|------------------------|-------|-----------------------------------------------------------------------------------------------|
| C1, C4                 |     2 | 3.3pF ±0.25pF, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H3R3CT                          |
| C2                     |     1 | 68pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H680J or TDK C1608C0G1H680JT       |
| C3                     |     1 | 27pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H270J or TDK C1608C0G1H270JT       |
| C5                     |     1 | 33pF ±5%, 50V C0G ceramic capacitor (0603) Taiyo Yuden UMK107CG330JZ or TDK C1608C0G1H330JT   |
| C6                     |     1 | 100pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H101J TDK C1608C0G1H101JT         |
| C7, C9                 |     2 | 10µF ±20%, 6.3V X5R ceramic capacitors (0805) Taiyo Yuden JMK212BJ106MG or TDK C2012X5R0J106M |
| C8, C10                |     2 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K                              |
| R1, R2, R4, R5, R7-R13 |    11 | 210 Ω ±1% resistors (0805)                                                                    |
| R3                     |     1 | 100 Ω ±1% resistor (0805)                                                                     |
| R6                     |     1 | 121 Ω ±1% resistor (0805)                                                                     |
| R14, R15, R16          |     3 | 75 Ω ±1% resistors (0805)                                                                     |
| R17                    |     0 | Not installed, resistor (0805)                                                                |
| U1                     |     1 | MAX4383EUD (14-pin TSSOP)                                                                     |
| INPUT, OUTPUT          |     2 | BNC connectors                                                                                |
| None                   |     1 | MAX4383 PC board                                                                              |

## Required equipment:

- Dual ± 5.0V DC power supply
- Signal generation platform (e.g., Tektronix TG 2000)
- Video measurement set (e.g., Tektronix VM 700A)

The MAX4383 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not turn on the power supply until all connections are completed.

## Procedures

- 1) Connect the output from the 75 Ω video signal generator to the INPUT BNC connector on the EV kit.
- 2) Connect the input of the 75 Ω video measurement set to the OUTPUT BNC connector on the EV kit.
- 3) Connect the +5.0V supply to the VCC pad. Connect ground to the GND pad.
- 4) Connect the -5.0V supply to the VEE pad. For singlesupply (+5.0V) operation, connect VEE to ground and bias the input appropriately.
- 5) Set the signal generator for multiburst sweep.
- 6) Turn on the ± 5.0V DC power supply.
- 7) Analyze the filtered output signal with the VM700 video measurement set.

Note: The generator (signal source) and the video test set (load) must be 75 Ω terminated, and the signal source must also provide a DC return to ground. This is the function of R16 and R15, respectively. These resistors are set to 75W in the MAX4383 EV kit. If a 50 Ω system is used, R16 must be changed to 50 Ω .  If  a  50 Ω analyzer is used, R15 must be 50 Ω . The DAC must supply  a  DC  voltage to bias the input of the MAX4383. If your DAC has insufficient bias to do this, add a 5.6k Ω resistor between VCC and the junction of R16 and R14.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Quick Start

## Detailed Description

The MAX4383 EV kit is a fully assembled and tested surface-mount circuit board that demonstrates the capability of the high-speed MAX4383 op amp configured in a 5-pole, active lowpass multiple feedback filter circuit. The filter can be used for video anti-aliasing or as a reconstruction filter for ATSC (HDTV) or high-resolution (XGA) graphics. The circuit has a 75 Ω DAC load (R16), a gain of 2V/V, and a 75 Ω source (R15) for driving a 75 Ω back-terminated load to an overall gain of 1. The board operates from either a +5V single supply or ±5V dual supplies.

<!-- image -->

Figure 1. Gain vs. Frequency Response of the EV Kit Filter

<!-- image -->

## MAX4383 Evaluation Kit

The MAX4383 EV kit demonstrates a lower cost, but more accurate way to design video filters. Using R-C, rather than L-C components, it provides a 30MHz, -3dB bandwidth with &gt;40dB rejection at 74.25MHz (Figure 1), as well as group-delay compensation and buffering using a single MAX4383 quad op amp. The improved tolerance of R-C, versus L-C components, removes the need for production tuning. Some initial tuning may be required to account for the variation in the DAC load and parasitic components due to PC board layout differences. The MAX4383 EV kit uses dual supplies, but the MAX4383 can be run from a single supply.

The MAX4383 EV kit is a Rauch, or multiple feedback realization of a 5-pole modified Legendre characteristic using one 1st-order +6dB gain stage and two 2nd-order unity-gain stages. The final stage is a 1st-order group delay compensator, which drives the back-terminated 75 Ω load to an overall unity gain. There are three sensitive  points  in  the  circuit;  R14,  which  controls  the  real pole, C1 and C4, that control the high-frequency poles, and C5 that sets the group delay compensation.

The MAX4383 EV kit comes with a 75 Ω termination (R16) and a BNC connector (INPUT) in place of the DAC normally found at the input for measurement purposes, and this reduces the gain to -6dB overall. The values of R14 and R16 are based on the DAC with a typical load resistance of 25 Ω to  35 Ω .  To  accommodate different load resistors, adjust the value of the R14 and the C6 product accordingly. The values of C1 and C4 reflect a two-sided PC board with minimal ground plane around the op amps pins. C5 adjusts the group delay compensation. Adjust the value of C1 and C4 for bandwidth before adjusting C5 for group-delay variation compensation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4383 Evaluation Kit

Figure 2. MAX4383 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3. MAX4383 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX4383 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX4383 Evaluation Kit

Figure 4. MAX4383 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6. MAX4383 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5