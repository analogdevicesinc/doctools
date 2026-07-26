<!-- lastmod 2022-08-03 -->
## General Description

The MAX4450 evaluation kit (EV kit) demonstrates the capability of the high-speed MAX4450 operational amplifier configured in a 3-pole, lowpass Sallen-Key filter which provides a Butterworth response with a bandwidth of -3dB at 5.25MHz. This circuit can be used for video anti-aliasing and reconstruction filtering. The circuit is designed to drive a 75 Ω termination, common in video applications, with an overall gain of 1. The MAX4450 EV kit board operates from a ±2.25V to ±5.5V dual-voltage supply or a +4.5V to +11V single-voltage supply. The MAX4450 EV kit is a fully assembled and tested surface-mount board.

## Simplified Circuit

<!-- image -->

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| C1            |     1 | 330pF ±2%, 50V COG ceramic capacitor (0603) Murata GRM1885C1H331GA01D                          |
| C2            |     1 | 100pF ±2%, 50V COG ceramic capacitor (0603) Murata GRM1885C1H101GA01D                          |
| C3            |     1 | 82pF ±2%, 50V COG ceramic capacitor (0603) Murata GRM1885C1H820GZ01D                           |
| C4, C5        |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603)                                                  |
| C6, C7        |     2 | 10µF ±10%, 6.3V X5R ceramic capacitors (1206) Taiyo Yuden JMK316BJ106KL or TDK C3216X5R0J106KT |

<!-- image -->

## Features

- ♦ 3-Pole, Active Lowpass, Sallen-Key Video Filter
- ♦ 5.25MHz -3dB Bandwidth
- ♦ &gt;20dB Attenuation at 13.5MHz
- ♦ &gt;40dB Attenuation at 27MHz
- ♦ 18dB/Octave Attenuation Rate
- ♦ Low-Cost Circuit Design
- ♦ Video-Filter Solution for NTCS and PAL Applications
- ♦ ±2.25V to ±5.5V Dual-Supply Voltage or +4.5V to +11V Single-Supply Voltage
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX4450EVKIT | 0°C to +70°C | 5 SOT23      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                     |
|---------------|-------|-------------------------------------------------|
| R1, R6, R11   |     3 | 75 Ω ±1% resistors (0603)                       |
| R2            |     1 | 221 Ω ±1% resistor (0603)                       |
| R3            |     1 | 332 Ω ±1% resistor (0603)                       |
| R4, R5        |     2 | 604 Ω ±1% resistors (0603)                      |
| R7-R10        |     0 | Not installed (0603)                            |
| U1            |     1 | MAX4450EUK, 5-pin SOT23                         |
| INPUT, OUTPUT |     2 | 75 Ω BNC connectors, A/D Electronics 580-072-10 |
| None          |     1 | MAX4450 PC board                                |
| None          |     1 | MAX4450 data sheet                              |
| None          |     1 | MAX4450 EV kit data sheet                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX4450 Evaluation Kit

## Required Equipment:

- Dual ±5.0V DC power supply
- Signal generation platform (e.g., Tektronix TG 2000)
- Video measurement set (e.g., Tektronix VM 700A)

The MAX4450 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect the output from the 75 Ω video-signal generator to the INPUT BNC connector on the EV kit.
- 2) Connect the input of the 75 Ω video measurement set to the OUTPUT BNC connector on the EV kit.
- 3) For dual-supply operation connect the +5V supply to the VCC pad. Connect ground to the GND pad. For single-voltage supply operation see note below.
- 4) Connect the -5.0V supply to the VEE pad.
- 5) Set the signal generator for the pattern desired.
- 6) Turn on the ±5.0V DC power supply.
- 7) Analyze the filtered-output signal with the video measurement set.

Note: The generator and the video test set must be 75 Ω terminated. The signal source must provide a DC return to ground. If it does not, place a 1k Ω resistor at R11 to provide this. If the measuring device is highimpedance, a 75 Ω resistor must be installed at R7. If a 50 Ω system is used, resistor R6 must be changed to 50 Ω .

For single-supply (5V) operation connect VEE to ground.

## Detailed Description

The MAX4450 EV kit is a fully assembled and tested surface-mount circuit board that demonstrates the capability of the high-speed MAX4450 configured in a 3-pole, active lowpass, Sallen-Key filter circuit shown in Figure 1. The filter can be used for video anti-aliasing or as a reconstruction filter. The circuit is a Sallen-Key realization with a gain of 2V/V for driving a 75 Ω termina-

## Component Suppliers

| SUPPLIER        | PHONE        | FAX          | WEBSITE               |
|-----------------|--------------|--------------|-----------------------|
| A/D Electronics | 253-851-8005 | 253-858-9869 | www.adelectronics.com |
| Murata          | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden     | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK             | 847-803-6100 | 847-390-4498 | www.component.tdk.com |

Note:

When contacting these suppliers, please indicate you are using the MAX4450.

## Quick Start

tion to an overall gain of 1. The board operates from a ±2.25V to ±5.5V dual-voltage supply or a +4.5V to +11V single-voltage supply.

## Test

The MAX4450 circuit has been evaluated using the Tektronix TG2000 generator and VM700 measurement test  setup  as  shown in Figure 2. The filter bandwidth and differential  gain  and  phase were measured using the industry-standard Tektronix TG2000 and VM700 set

Figure 1. Simplified Video Filter Circuit

<!-- image -->

Figure 2. MAX4450 EV Kit Measurement Setup

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 3. Multiburst Measurement of the EV Kit Circuit

<!-- image -->

for the NTSC Composite format. The results are shown in Figures 3 and 4 for multiburst and differential gain/differential  phase (DG/DP), respectively. The bandwidth was measured using the HP4195A spectrum analyzer to show the out-of-band insertion loss and the results are shown in Figure 5. The bandwidth of the filter is a function  of  the  components' value and their tolerances but the DG/DP is indicative of the excellent gain and phase linearity  of  the  MAX4450 itself.  The  linearity  combined with the 175MHz large-signal bandwidth, and the 50MHz, 0.1dB large-signal bandwidth, make the MAX4450 an excellent choice for all video applications.

## Output

The MAX4450 EV kit circuit's output bandwidth is 5.25MHz at -3dB point and has an insertion loss greater than 20dB at 13.5MHz and greater than 40dB at 27MHz. Figure 5 illustrates the Signal Gain vs. Input Signal Frequency of the EV kit's filtering circuit. The group delay variation across the bandwidth is 25ns or less and can be used for all of the video formats (RGB, Component, and Composite Video).

To preserve the quality of the video waveform it is important that the filter's group delay variation and the group delay differential between filters, be as low as possible. To accomplish that, some means of adjusting group delay without affecting bandwidth is required. The addition of R8 in series with C3 (see Figure 9) creates a lag-lead network. By keeping the sum of R3 and R8 approximately equal to the original R3 value, the dominant pole frequency is not affected, preserving the bandwidth. As the value of R3 increases, a 'lead' term is  introduced, reducing the rate of change of the phase, and consequentially, the group delay.

<!-- image -->

## MAX4450 Evaluation Kit

Figure 4. Differential Gain/Differential Phase Measurement of EV Kit Circuit

<!-- image -->

In  the  circuit  shown  in  Figure  9,  the  average  group delay variation across the filters bandwidth for R8 = 0, and R3 = 332 Ω is about 20ns at 4.5MHz (see Figure 6). Raising R8 to 31.6 Ω and lowering R3 to 301 Ω drops the group delay variation to about 10ns at 4.5MHz (see Figure 7), and to &lt;3ns at 4.5MHz for R3 = 274 Ω ,  and R8 = 59 Ω (see Figure 8). This slightly affects the bandedge selectivity, &lt;0.5dB, but the -3dB bandwidth remains unchanged, as shown in Table 1.

## Table 1. Group Delay Results with Varying Resistor Values

| RESISTOR CONFIGURATION   | RESISTOR CONFIGURATION   | SIGNAL FREQUENCY AT 4.5MHz   | SIGNAL FREQUENCY AT 4.5MHz   |
|--------------------------|--------------------------|------------------------------|------------------------------|
| R3 ( Ω )                 | R8 ( Ω )                 | AVERAGE GROUP DELAY (ns)     | SIGNAL LOSS (dB)             |
| 332                      | 0 (shorted)              | 25                           | -2.1                         |
| 301                      | 31.6                     | 15                           | -2.2                         |
| 274                      | 59                       | 7                            | -2.4                         |

## Termination

The MAX4450 EV kit circuit's input is DC-coupled and resistor R11 insures a path to ground for the input current.  When the circuit is driven from a low-impedance source, resistor R11 may be removed to make the circuit a high-impedance load for the preceding stage.

Resistor R7 is used to simulate a back-terminated coax and a 75 Ω resistor  should be installed if an external load is not applied.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4450 Evaluation Kit

<!-- image -->

Figure 5. Signal Gain vs. Frequency Response of the EV Kit Circuit

<!-- image -->

Figure 7. Group Delay for R3 = 301 Ω and R8 = 31.6 Ω in the EV Kit Circuit

Figure 6. Group Delay for R3 = 332 Ω and R8 = 0 in the EV Kit Circuit

<!-- image -->

Figure 8. Group Delay for R3 = 274 Ω and R8 = 59 Ω in the EV Kit Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4450 Evaluation Kit

<!-- image -->

Figure 9. MAX4450 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4450 Evaluation Kit

<!-- image -->

Figure 10. MAX4450 EV Kit Component Placement GuideComponent Side

Figure 11. MAX4450 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 12. MAX4450 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6