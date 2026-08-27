<!-- lastmod 2022-08-04 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX2620 evaluation kit (EV kit) simplifies evaluation of the MAX2620 integrated oscillator with buffered outputs. It  includes  a  varactor-based tank circuit that allows the VCO to tune across an approximately 30MHz band in the 900MHz frequency range. Outputs utilize 50 Ω SMA connectors. The EV kit has a test port that facilitates  complete characterization of the MAX2620 tank port, enabling resonators to be designed for frequency ranges other than that supplied with the EV kit.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION          |   QTY | DESCRIPTION                                               |
|----------------------|-------|-----------------------------------------------------------|
| C1, C7-C10, C12      |     6 | 1000pF, 10% ceramic capacitors                            |
| C2, C11, C14         |     0 | Not installed                                             |
| C3                   |     1 | 2.7pF, 10% ceramic capacitor                              |
| C4, C6               |     2 | 1pF, 10% ceramic capacitors                               |
| C5, C13, C17         |     3 | 1.5pF, 10% ceramic capacitors                             |
| C15                  |     1 | 10µF, ±10%, 25V tantalum capacitor Sprague 293D106X9025D2 |
| D1                   |     1 | Varactor diode Alpha Industries SMV1204-34                |
| JU1, V CC , GND      |     3 | 2-pin headers                                             |
| L1                   |     1 | Ceramic coaxial resonator Trans-Tech SR8800LPQ1357BY      |
| L4                   |     0 | Not installed                                             |
| L3                   |     1 | 10nH inductor Coilcraft 0603HS-10NTJBC                    |
| OUT, OUT , TEST PORT |     3 | SMA connectors (edge mount)                               |
| R1, R3               |     2 | 10 Ω , 5% resistors                                       |
| R2                   |     1 | 1k Ω , 5% resistor                                        |
| R4                   |     0 | Not installed                                             |
| R5                   |     1 | 51 Ω , 5% resistor                                        |
| SHDN                 |     1 | 3-pin header                                              |
| U1                   |     1 | MAX2620EUA                                                |
| VCONT                |     1 | SMA connector (PC mount)                                  |
| None                 |     1 | Shunt                                                     |
| None                 |     1 | MAX2620 circuit board                                     |
| None                 |     1 | MAX2620 data sheet                                        |

NOTE:  All capacitors and resistors are size 0805 unless otherwise noted.

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Complete, Tunable VCO Test Board with Tank Circuit
- ' Tuning in 900MHz Frequency Range
- ' Low Phase Noise (-110dBc/Hz typical at 25kHz offset from carrier)
- ' Operates from Single +2.7V to +5.25V Supply
- ' Two Output Buffers with 50 Ω SMA Connectors
- ' Low-Power Shutdown Mode
- ' Test Port for Oscillator Tank Port Characterization
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP. RANGE    | BOARD TYPE    |
|--------------|----------------|---------------|
| MAX2620EVKIT | -40°C to +85°C | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER         | PHONE          | FAX            |
|------------------|----------------|----------------|
| Alpha Industries | (617) 935-5150 | (617) 824-4579 |
| Coilcraft        | (847) 639-6400 | (847) 639-1469 |
| Sprague          | (603) 224-1961 | (603) 224-1430 |
| Trans-Tech       | (301) 695-9400 | (301) 695-7065 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX2620 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section.

## \_\_\_\_\_\_\_\_\_\_Test Equipment Required

- Power supplies. Low-noise power supplies are recommended for oscillator-noise measurements. This is  especially  important  for  the  tuning  voltage  supplied to the varactor (VCONT). Noise or ripple on the tuning voltage frequency-modulates the oscillator and causes spectral spreading. Batteries can be used in place of power supplies, if necessary.
- -DC supply capable of supplying +2.7V to +5.25V at 20mA. Alternatively, use two or three 1.5V AA batteries.
- -DC supply capable of supplying 0V to +3V, continuously variable, for VCONT. Alternatively, use two or three 1.5V batteries with a resistive voltage divider or potentiometer.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX2620 Evaluation Kit

- HP8561E spectrum analyzer, or equivalent highsensitivity  spectrum analyzer with approximately 3GHz frequency range. Contact the instrument manufacturer for information regarding phase-noise measurement capabilities.
- Digital multimeter (DMM) to monitor DC supply and VCONT, if desired
- Male SMA 50 Ω terminator
- Network analyzer such as HP8753D (required only if  additional  device  characterization for  oscillator tank design at other frequencies is desired)

## \_\_\_\_\_\_\_\_\_\_\_\_Connections and Setup

- 1)  Verify  that  the  shunt  on  jumper SHDN is  installed between pins 1 and 2 ( SHDN = VCC). Placing the shunt between pins 2 and 3 ( SHDN = GND) puts the MAX2620 into low-current shutdown mode.
- 2)  Connect the spectrum analyzer to either OUT or OUT . Connect a 50 Ω terminator to the output ( OUT or OUT) not connected to the spectrum analyzer.
- 3)  Connect a +2.7V to +5.25V supply across VCC to GND. VCC should be the most positive terminal.
- 4)  Connect the tuning voltage supply to either VCONT or JU1. This supply should be positive when referenced to ground.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Analysis

- 1) Using the spectrum analyzer, observe the voltagecontrolled oscillator's  output.  With  1.5V  applied  to VCONT, the fundamental output frequency will be near 900MHz. The output power level will be approximately -2dBm at OUT, or -12.5dBm at OUT . Varying the voltage applied to VCONT between 0V and VCC changes the fundamental oscillation frequency. (Increasing the voltage applied to VCONT increases the frequency, and vice versa.) The typical  tuning  range  is  a  30MHz  band centered near 900MHz with VCONT between 0.5V and 3V. To avoid damaging the varactor, do not apply voltages greater than 15V to VCONT. (The varactor on the EV kit board has a 15V breakdown specification.)
- 2) Allow the oscillator to operate for about 5 minutes to  thermally  stabilize  the  frequency.  Since  the  frequency is not phase-locked to a reference, this minimizes frequency drift and measurement error.
- 3) Center the fundamental on the spectrum analyzer and set the frequency span to 100kHz.
- 4) Set the spectrum analyzer for single sweep. This minimizes errors due to oscillator frequency drift.
- 5) Set the marker on the waveform's peak.

2

- 6) Set another marker to measure the difference between this peak and the signal level at 25kHz offset from the peak. (Phase noise can be observed at frequencies other than 25kHz offset.)
- 7) Under the Marker function, select marker noise and turn it  on.  This  automatically scales the spectrum analyzer's output to take into account the resolution BW filter's non-ideal characteristics. If your spectrum analyzer does not offer this feature, contact the manufacturer for proper scaling for noise measurements.
- 8) Verify that the resolution bandwidth is 1kHz.
- 9) Verify that the video bandwidth is 1kHz.
- 10) Read the measurement directly from the screen. Phase noise will be about -110dBc/Hz. In some environments that have ambient pulse noise, this measurement may be difficult to achieve without additional shielding or the use of a shielded enclosure.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Outputs

The MAX2620 EV kit is assembled with OUT matched to  50 Ω (at  approximately 900MHz) using L3 and C13. OUT is  resistively  pulled  up  to  the  supply  with  a  51 Ω resistor, R5. R5 provides a simple broadband 50 Ω output match but offers less output power than OUT. The EV kit provides additional component pads at R4, C14, L4, and C11 to accommodate any output match configuration for OUT and OUT . Refer to the Output Matching Configuration  section in the MAX2620 data sheet for more information.

## \_\_\_\_\_\_\_\_\_\_\_Resonator and Varactor

The resonator tank circuit is critical in determining VCO performance. It typically contains a varactor (voltagevariable capacitance) for voltage-tuning the center frequency. For best performance, use high-Q components and choose values carefully.

The external resonant circuit on the MAX2620 EV kit has been designed to operate near 900MHz. To synthesize the component values for other frequency ranges, use the following procedure.

On the EV kit, C3 and C4 are feedback capacitors that set the oscillator's negative resistance and impedance. Their values have been chosen to provide adequate performance over a 650MHz to 1050MHz frequency range. To optimize the values of these components for a specific application, refer to the Feedback Capacitors section in the MAX2620 data sheet.

Measure the MAX2620 TANK pin's input impedance with feedback capacitors C3 and C4 but without the resonant circuit. This measurement takes into account parasitic circuit elements that are specific to board lay-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

out. Use the test port provided on the MAX2620 EV kit to facilitate measurement by installing a 1000pF capacitor at C2 and removing C5. (Remove C2 and install C5 to use the MAX2620 as an oscillator.) When using the test  port,  subtract  an  approximately 586ps electrical delay from the S11 measurement (this delay can be compensated for on most modern vector network analyzers) to account for the delay of the transmission line from the test port to the MAX2620 TANK pin. The test port should provide a negative input resistance and thus return gain when S11 is measured on a vector network analyzer. This return gain provides measurement data that is outside the unit circle of the Smith chart.

A useful technique is to configure the vector network analyzer  to  display  1/S11  for  this  measurement.  The  vector network analyzer displays the information inside the unit circle  of  the  Smith  chart.  Most  modern vector network analyzers perform this conversion. Input-impedance data presented in this format (1/S11) is the complement of the input impedance, which is the impedance desired to provide the MAX2620 with feedback to oscillate at a particular frequency. The Typical Operating Characteristics section of the MAX2620 data sheet contains a plot of 1/S11 for specific values of C3 and C4 provided in the MAX2620 EV kit. Also refer to the Tank Circuit Design section in the MAX2620 data sheet.

The MAX2620 EV kit uses a low-voltage varactor. With the coupling capacitor C17 kept small, the oscillator circuit is less affected by losses in the varactor. However, keeping C17 small also reduces overall tuning range.

L1 on the MAX2620 is a ceramic coaxial resonator, which provides the best phase-noise performance. For cost-sensitive applications, the layout for L1 on the MAX2620 EV kit is a dual pad that accepts either a spring coil or a ceramic coaxial resonator. When properly  specified,  coaxial  resonators  provide tight  tolerance inductance at very high Q for best circuit performance. Spring coils, such as Coilcraft mini-spring coils, provide a good cost/performance compromise for costsensitive applications.

## \_\_\_\_\_\_\_\_\_\_\_\_\_Layout Considerations

The MAX2620 EV kit can serve as a guide for your board layout. To minimize the effects of parasitic elements, which may alter circuit performance, remove the ground plane around and under the components that make up the resonant circuit (C3-C6, C17, D1, and L1). Keep PC board trace lengths as short as possible to minimize parasitic inductance. Also keep decoupling capacitors C1, C7, and C9 as close to the MAX2620 as possible, with direct connection to the ground plane.

Figure 1.  MAX2620 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2620 Evaluation Kit

<!-- image -->

1.0"

Figure 2.  MAX2620 EV Kit Component Placement GuideTop Silk Screen

<!-- image -->

Figure 3.  MAX2620 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5.  MAX2620 EV Kit PC Board Layout-Ground Plane

Figure 4.  MAX2620 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 6.  MAX2620 EV Kit PC Board Layout-Power Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

<!-- image -->

<!-- image -->