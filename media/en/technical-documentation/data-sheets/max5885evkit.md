<!-- lastmod 2022-08-05 -->
## General Description

The MAX5885 evaluation kit (EV kit) is a fully assembled and tested circuit board that contains all the components necessary to evaluate the performance of the MAX5885 16-bit parallel input, 200Msps, current-output, digital-to-analog converter (DAC). The EV kit operates with CMOS-compatible data inputs, a singleended clock input, and 3.3V power supplies for simple board operation.

The MAX5885 EV kit can also be used to evaluate the MAX5884 (14 bit) and the MAX5883 (12 bit).

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX5885EVKIT | 0°C to +70°C | 48 QFN-EP*   |

| DESIGNATION        |   QTY | DESCRIPTION                                                                                   |
|--------------------|-------|-----------------------------------------------------------------------------------------------|
| C1                 |     0 | Not installed, ceramic capacitor (0603)                                                       |
| C2-C13             |    12 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K or Taiyo Yuden LMK105BJ104KV |
| C14, C17, C20, C25 |     4 | 47µF ±10%, 6.3V tantalum capacitors (B) AVX TAJB476K006R or Kemet T494B476K006AS              |
| C15, C18, C21, C26 |     4 | 10µF ±10%, 10V tantalum capacitors (A) AVX TAJA106K010R or Kemet T494A106K010AS               |
| C16, C19, C22, C27 |     4 | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K                                |
| C23, C24           |     0 | Not installed, ceramic capacitor (0805)                                                       |
| CLK, OUT           |     2 | SMA PC-mount vertical connectors                                                              |
| IOUTP, IOUTN       |     2 | Scope probe jacks                                                                             |
| J1                 |     1 | 2 x 20 pin surface-mount header Samtec TSM-120-02-S-MT                                        |

<!-- image -->

## Features

- ♦ Fast Evaluation and Performance Testing
- ♦ CMOS Compatible
- ♦ SMA Coaxial Connectors for Clock Input and Analog Output
- ♦ 50 Ω Matched Clock Input and Analog Output Signal Lines
- ♦ Single-Ended to Differential Clock Signal Conversion Circuitry
- ♦ Differential Current Output to Single-Ended Voltage Signal Output Conversion Circuitry
- ♦ Full-Scale Current Output Configured for 20mA
- ♦ External 1.25V Reference Source Available
- ♦ Fully Assembled and Tested
- ♦ Also Evaluates the 14-Bit MAX5884 and 12-Bit MAX5883

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                            |
|---------------|-------|--------------------------------------------------------|
| JU1           |     1 | 3-pin header                                           |
| JU2-JU5       |     4 | 2-pin headers                                          |
| L1-L4         |     4 | Chip bead core inductors Panasonic EXC-CL-4532U1       |
| R1, R2        |     2 | 49.9 Ω ±0.1% resistors (0603) IRC PFC-W0603R-03-49R9-B |
| R3            |     1 | 100 Ω ±1% resistor (0603)                              |
| R4, R5, R6    |     0 | Not installed, resistors (0603)                        |
| R7            |     1 | 2k Ω ±1% resistor (0603)                               |
| R8-R26        |    19 | 0 Ω ±5% resistors (0402)                               |
| R27, R28      |     2 | 24.9 Ω ±1% resistors (0402)                            |
| R29-R45       |     0 | Not installed, resistors (0402)                        |
| T1, T3        |     2 | Transformers Mini-Circuits ADTL1-12                    |
| T2            |     1 | Transformer Coilcraft TTWB3010-1                       |
| TP1-TP4       |     4 | PC test points, black                                  |
| TP5           |     1 | PC test point, red                                     |
| U1            |     1 | MAX5885EGM (48-pin QFN-EP)                             |
| U2            |     1 | 1.25V voltage reference (8-pin SO) Maxim MAX6161AESA   |
| None          |     5 | Shunts (JU1-JU5)                                       |
| None          |     1 | MAX5885 PC board                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX5885 Evaluation Kit

- Three 3.3V power supplies

## Component Suppliers

| SUPPLIER      | PHONE         | FAX          | WEBSITE               |
|---------------|---------------|--------------|-----------------------|
| AVX           | 843-946-0238  | 843-626-3123 | www.avxcorp.com       |
| Coilcraft     | 847-639-6400  | 847-639-1469 | www.coilcraft.com     |
| IRC           | 361-992-7900  | 361-992-3377 | www.irctt.com         |
| Kemet         | 864-963-6300  | 864-963-6322 | www.kemet.com         |
| Mini-Circuits | 718-934-4500  | 718-934-7092 | www.minicircuits.com  |
| Panasonic     | 714-373-7366  | 714-737-7323 | www.panasonic.com     |
| Samtec        | 800-726-8329  | 812-948-5047 | www.samtec.com        |
| Taiyo Yuden   | 800-348-2496  | 847-925-0899 | www.t-yuden.com       |
| TDK           | 847- 803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX5885 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- Function generator with low phase noise and low jitter for clock input (e.g., HP 8662A)
- 16-bit digital pattern generator for data inputs (e.g., Tektronix DG2020A)
- Spectrum analyzer (e.g., HP 8560E)
- Voltmeter

The MAX5885 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not turn on power supplies or enable signal generators until all connections are completed.

## Procedure

- 1) Verify that a shunt is installed across pins 2 and 3 of jumper JU1 (DAC enabled).
- 2) Verify that shunts are not installed across jumpers JU2, JU4, and JU5 (DAC uses the 1.2V on-chip voltage reference).
- 3) Verify that a shunt is installed across jumper JU3.
- 4) Synchronize  the  digital  pattern  generator (DG2020A) with the clock function generator (HP 8662A).
- 5) Connect the clock function signal generator to the CLK SMA connectors on the EV kit.
- 6) Verify  that  the  16-bit  digital  pattern  generator  is programmed for valid CMOS output voltage levels.
- 7) Connect the digital signal generator output to the J1 input header connector on the EV kit board. The input header pins are labeled for proper connection with the digital pattern generator (i.e., connect bit 0 to the header pin labeled B0, connect bit 1 to the header pin labeled B1, etc.).
- 8) Connect the spectrum analyzer to the OUT SMA connector.
- 9) Connect a 3.3V power supply to the V\_CLK pad. Connect the ground terminal of this supply to the CLKGND pad.
- 10) Connect a 3.3V power supply to the D\_VDD pad. Connect the ground terminal of this supply to the DGND pad.
- 11) Connect a 3.3V power supply to the A\_VDD pad. Connect the ground terminal of this supply to the AGND pad.
- 12) Turn on the three power supplies.
- 13) With a voltmeter, verify that 1.2V is measured at the V\_REF PC board pad on the EV kit.
- 14) Enable the clock function generator (HP 8662A) and the digital pattern generator. Set the clock function generator output power to 10dBm and the frequency (fCLK) to less than or equal to 200MHz.
- 15) Use the spectrum analyzer to view the MAX5885 output spectrum or view the output waveform using an oscilloscope.

## Detailed Description

The MAX5885 EV kit is designed to simplify the evaluation  of  the  MAX5885 16-bit, 200Msps, current-output DAC. The MAX5885 operates with CMOS-compatible

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

data inputs, a differential clock input signal, an internal 1.2V reference voltage, and a 3.3V power supply for simple board operation.

The MAX5885 EV kit provides a header connector to easily  interface  with  a  pattern  generator,  circuitry  that converts the differential current output to a singleended voltage signal, and circuitry to convert a usersupplied single-ended clock signal to a differential clock signal required by the MAX5885. The EV kit circuit includes different options for supplying a reference voltage to the DAC. The EV kit can operate with a single 3.3V power supply but also supports the use of three separate 3.3V power supplies by dividing the circuit  into  digital,  analog,  and  digital  clock  planes  that improve dynamic performance.

## Power Supplies

The MAX5885 EV kit can operate from a single 3.3V power supply connected to the D\_VDD, A\_VDD, and V\_CLK input power pads and their respective ground pads for simple board operation. However, three separate 3.3V power supplies are recommended for optimum dynamic performance. The EV kit board layout is divided into three sections: digital, analog, and digital clock. Using separate power supplies for each section reduces crosstalk noise and improves the integrity of the output signal. When using separate power supplies, connect each power supply across the D\_VDD and DGND PC board pads (digital), across the V\_CLK and CLKGND PC board pads (digital clock), and across the A\_VDD and AGND PC board pads (analog) on the EV kit.

## CMOS Input Data

The MAX5885 EV kit provides a 0.1in 2 x 20 header (J1) to interface a 16-bit CMOS pattern generator to the EV kit. The header data pins are labeled on the board with their appropriate data bit designation. Use the labels on the EV kit to match the data bits from the pattern generator to the corresponding data pins on header J1.

## Clock Signal

The MAX5885 requires a differential clock input signal with minimal jitter.  The  EV  kit  circuit  provides  singleended to differential conversion circuitry. The user must supply a single-ended clock signal at the CLK SMA connector.

The clock signal can be either a sine wave or a square wave. For a sine wave, a minimum amplitude of 1.5VP-P

<!-- image -->

## MAX5885 Evaluation Kit

(7dBm) is recommended or for a square wave, a minimum amplitude signal of 0.5VP-P is recommended.

## Reference Voltage Options

The MAX5885 requires a reference voltage to set the full-scale  analog  signal  output  voltage.  The  DAC  contains a stable on-chip bandgap reference of 1.2V that is used by default. The internal reference can be overdriven by an external reference for gain control or to enhance accuracy and drift performance.

The MAX5885 EV kit features three ways to provide a reference voltage to the DAC: internal, on-board external, and user-supplied external reference. Verify that a shunt is not connected across jumper JU5 to use the internal reference. The reference voltage can be measured at the V\_REF pad on the EV kit. The EV kit circuit is designed with an on-board 1.25V temperature-stable external voltage reference source (U2, MAX6161) that can be used to overdrive the internal reference provided by the MAX5885. Install a shunt across jumpers JU4 and JU5 to use the on-board external reference. The user can also supply an external voltage reference in the 0.125V to 1.25V range by connecting a voltage source to the V\_REF pad and removing the shunts across jumpers JU4 and JU5. See Table 1 to configure the shunts across jumpers JU4 and JU5 and select the source of the reference voltage.

## Full-Scale Current

The MAX5885 requires an external resistor to set the full-scale output current. The MAX5885 EV kit full-scale current is set to 20mA with resistor R7. Replace R7 to adjust the full-scale output current. Refer to the Reference Architecture and Operation section in the MAX5885 data sheet to select different values for R7.

Table 1. Reference Voltage Selection

| JU4 AND JU5 SHUNT POSITIONS   | VOLTAGE REFERENCE MODE                                             |
|-------------------------------|--------------------------------------------------------------------|
| Installed                     | External 1.25V reference (U2) connected to MAX5885 REFIO pin       |
| Not installed                 | MAX5885 internal 1.2V bandgap reference                            |
| Not installed                 | User-supplied voltage reference at the V_REF pad (0.125V to 1.25V) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5885 Evaluation Kit

## Differential Output

The MAX5885 complementary current outputs are terminated into differential 50 Ω resistance to generate a voltage signal with an amplitude of 1VP-P differential. The positive and negative rails of the differential signal can be sampled at the IOUTP and IOUTN probe connectors. The differential signal is converted into a 50 Ω singled-ended signal with transformers T1 and T2 and can be sampled at the OUT SMA connector. A shunt on jumper JU3 connects the center tap of the transformer T2 to AGND to enhance the dynamic performance of the MAX5885. The single-ended output signal from the transformer generates a -2dBm full-scale output power when terminated into  50 Ω . A shunt should always be installed across jumper JU3 for optimum dynamic performance.

## Power-Down

The MAX5885 can be powered down or up by reconfiguring jumper JU1. In power-down mode, the total power dissipation of the DAC is reduced to less than 1mW. See Table 2 for the jumper JU1 configuration.

## Segment Shuffling

The segment shuffling function on the MAX5885 improves the dynamic performance at the cost of a slight increase in the DAC's noise floor. The MAX5885 EV kit provides jumper JU2, which allows the user to enable and disable the segment-shuffling function. See Table 3 to configure jumper JU2.

## XOR Input

The MAX5885 provides an XOR input pin that may be used to troubleshoot possible spurious or harmonic distortion  degradation due to digital data feedthrough on the PC board. The XOR pin can be accessed at pin 7 of header J1. Connect an external device to this pin to assert a logic signal on the XOR pin. Refer to the XOR Function ( XOR ) section in the MAX5885 data sheet for further details.

## Table 2. Jumper JU1 (Power-Down)

| SHUNT LOCATIONS   | MAX5885 FUNCTION   |
|-------------------|--------------------|
| 1 and 2           | Power-down mode    |
| 2 and 3           | Normal operation   |

## Table 3. Segment Shuffling Mode (Jumper JU2)

| SHUNT LOCATION   | SEL0 PIN (JU2)                                    | SEGMENT- SHUFFLING MODE   |
|------------------|---------------------------------------------------|---------------------------|
| Installed        | Connected to D_VDD                                | Enabled                   |
| Not installed    | Connected to DGND with internal pulldown resistor | Disabled                  |

## Evaluating the MAX5884 or MAX5883

The MAX5885 EV kit can be used to evaluate the MAX5884 or MAX5883. The MAX5884 is a 14-bit and the MAX5883 is a 12-bit DAC. Except for the input pins, these DACs are pin-for-pin compatible with the MAX5885. Replace the  MAX5885  (U1)  with  the MAX5884 or the MAX5883 and refer to the respective data sheet to compare the differences in input pins and how to modify the connections between the pattern generator and the EV kit's J1 input connector.

## Board Layout

The MAX5885 EV kit is a four-layer board design optimized for high-speed signals. All high-speed signal lines are routed through 50 Ω impedance-matched transmission lines. The length of these 50 Ω transmission lines  is  matched to within 40 mils (1mm) to minimize layout-dependent data skew. The board layout separates the digital, analog, and digital clock sections of the circuit for optimum performance.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5885 Evaluation Kit

Figure 1. MAX5885 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5885 Evaluation Kit

Figure 2. MAX5885 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5885 Evaluation Kit

<!-- image -->

Figure 3. MAX5885 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5885 Evaluation Kit

Figure 4. MAX5885 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5885 Evaluation Kit

Figure 5. MAX5885 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5885 Evaluation Kit

Figure 6. MAX5885 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

<!-- image -->