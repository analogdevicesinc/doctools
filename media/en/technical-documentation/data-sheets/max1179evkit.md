<!-- lastmod 2022-08-03 -->
## General Description

The MAX1179 evaluation kit (EV kit) is an assembled and tested circuit board that demonstrates the MAX1179 analog-to-digital converter. The EV kit can also be used to evaluate other Maxim devices in the same chip family. See Table 2 for more information. Free samples of alternate devices can be requested when ordering the MAX1179 EV kit.

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                |
|-------------------------|-------|------------------------------------------------------------|
| C1, C2                  |     2 | 10µF, 10V X7R ceramic capacitors Taiyo Yuden LMK325BJ106MN |
| C3, C4, C5, C8, C9, C10 |     6 | 0.1µF ceramic capacitors                                   |
| C6                      |     1 | 10µF, 6.3V ceramic capacitor Taiyo Yuden JMK212BJ106MG     |
| C7                      |     1 | 0.01µF ceramic capacitor                                   |
| C11, C12                |     2 | 10µF, 25V ceramic capacitors TDKC4532X7R1E106M             |
| C7, R2                  |     4 | Socket-pin receptacles                                     |
| H1                      |     1 | 2 × 16 dual-row vertical header                            |
| JU1-JU6                 |     6 | 2-pin headers                                              |
| R1                      |     1 | 100k Ω ±5% resistor                                        |
| R2                      |     1 | 10 Ω ±5% resistor                                          |
| U1                      |     1 | MAX1179BCUI                                                |
| U2                      |     1 | Hex Schmitt trigger buffer 74HC14                          |
| U3                      |     1 | MAX427CSA                                                  |
| None                    |     1 | MAX1179 EV kit PC board                                    |

## Component Supplier

| SUPPLIER    | PHONE        | FAX          | WEBSITE                |
|-------------|--------------|--------------|------------------------|
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com        |
| TDK         | 847-803-6100 | 847-390-4405 | www.component. tdk.com |

Note: Indicate that you are using the MAX1179 when contacting these component suppliers.

<!-- image -->

Features

- ♦ Proven PC Board Layout
- ♦ Convenient On-Board Test Points
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1179EVKIT | 0°C to +70°C | 28 TSSOP     |

## Quick Start

## Recommended Equipment

- MAX1179 EV kit
- Two DC power supplies, 5V at 10mA
- ±15V, 20mA power supply
- Programmable signal generator, such as Tektronix DG2020A
- Logic analyzer (optional)
- Reconstruction DAC (optional)

## Procedure

The MAX1179 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Ensure that JU1, JU2, and JU3 are open (see Table 1).
- 2) With the power off, connect the first 5VDC power supply between AVDD and AGND.
- 3) With the power off, connect the second 5VDC power supply between DVDD and DGND. Note: DGND and AGND are connected on the MAX1179 EV kit board. To avoid ground loops, do not connect AGND to DGND at any other location.
- 4) Configure the pattern generator to produce the appropriate read/convert (R/ C )  and conversion start ( CS )  waveforms. Refer to Figure 2 in the MAX1179 data sheet.
- 5) Connect the pattern generator CS output across jumper JU4.
- 6) Connect the pattern generator R/ C output across jumper JU5.
- 7) Connect the logic analyzer or other digital data capture system to header H1. The least significant bit, D0, appears on H1 pin 1, and the end-of-conversion output strobe ( EOC ) appears across jumper JU6 (see Table 2).
- 8) Turn on the power supplies and enable the pattern generator.
- 9) Apply -5V to +5V analog input signal between pads AIN and AGND. Capture digital data from header H1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1179 Evaluation Kit

## Detailed Description of Hardware

The MAX1179 (U1) is a single-channel, 16-bit dataacquisition system. Anti-alias filtering is performed by R2 and C7. The input signal can be applied directly to the AIN pad, or an optional MAX427 precision buffer (U3) can be used instead. Capacitors C4 and C6 bypass the reference. Schmitt trigger (U2) ensures proper system timing by keeping the CS rising  and falling edges clean.

## Analog Input Buffer

When powered from ±15V supplies, the analog input buffer (U3) has an input common-mode range of ±12.5V.

- 1) With the power off, connect the +15VDC power supply between BUF+15 and AGND.
- 2) With the power off, connect the -15VDC power supply between BUF-15 and AGND.
- 3) With the power off, connect the DC power-supply ground return to AGND.
- 4) Install a shunt across jumper JU3.
- 5) Apply the analog input signal to the BUFIN pad.

## Generating a Crossplot

To see a visual indication of relative LSB size and DNL performance, create a crossplot fixture using a function generator, a latch, a resistor network, and an oscilloscope. Latch the data on the falling edge of EOC . Connect the least significant bits together, using resistors of varying weights (for example, D0 = 75.0k Ω ±1%, D1 = 39.1k Ω ±1%, D2 = 20.0k Ω ±1%, D3 = 10.0k Ω ±1%, D4 = 4.99k Ω ±1%). Drive the analog inputs with a linear  ramping signal, such as a 100Hz triangle wave. Connect an oscilloscope in X-Y mode with X = analog input and Y = weighted sum of the latched digital outputs. The resulting staircase plot gives a visual indication of relative LSB sizes and DNL performance.

## Evaluating Other Parts

The MAX1179 EV kit can be used to evaluate all the devices in Table 2. They offer various combinations of resolution, input range, and controller interface. Devices with an 8-bit interface shipped in a 20-pin package are mounted on the MAX1179, leaving pins 1-4 and 25-28 open. Request a sample of the optional device and replace the MAX1179 mounted on the kit.

Table 2 lists the various combinations.

## Troubleshooting

## Problem: no output measurement. System seems to report zero voltage, or fails to make a measurement.

- Check AVDD and DVDD supply voltages. Check the 4.096V reference voltage using a digital voltmeter. Use an oscilloscope to verify the R/ C , CS , and EOC signals.
- Ensure that a resistor is installed in socket R2; otherwise, the analog input is unconnected.
- If  using  the  input  buffer  U3,  ensure  that  the  ±15V power supply is connected and JU3 is closed.

## Problem: measurements are erratic, unstable; poor accuracy.

- Check the reference voltage using a digital voltmeter. Use an oscilloscope to check for noise. When probing for noise, keep the oscilloscope ground return lead as short as possible, preferably less than 0.5in (10mm).
- Increase the C6 and C7 capacitance. Short JU1 and apply an external 4.096V reference at REF to improve accuracy.
- Check for ground loops in the system.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Table 1. Jumper Functions

| JUMPER   | FUNCTION                                                                                                                                                             |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Leave JU1 open to enable the internal reference. Short JU1 when applying an external reference at REF.                                                               |
| JU2      | Momentarily short JU2 to reset U1 (20-pin package units only). Leave JU2 open and apply high-byte enable signal (HBEN) at the RESET pad (20-pin package units only). |
| JU3      | Short JU3 to drive analog input from MAX427 buffer U3. Leave JU3 open when driving AIN directly through R2.                                                          |
| JU4      | Apply conversion start signal ( CS ) across JU4.                                                                                                                     |
| JU5      | Apply read/convert signal (R/ C ) across JU5.                                                                                                                        |
| JU6      | Obtain end-of-conversion ( EOC ) signal from JU6.                                                                                                                    |

## Table 2. Device Comparison

| DEVICE       | MAX1179      | MAX1187      | MAX1189      | MAX1175      | MAX1157      | MAX1159      | MAX1178      | MAX1177      | MAX1188      | MAX1174      | MAX1156      | MAX1158      |
|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|
| PACKAGE      | 28-Pin TSSOP | 28-Pin TSSOP | 28-Pin TSSOP | 28-Pin TSSOP | 28-Pin TSSOP | 28-Pin TSSOP | 20-Pin TSSOP | 20-Pin TSSOP | 20-Pin TSSOP | 20-Pin TSSOP | 20-Pin TSSOP | 20-Pin TSSOP |
| INTERFACE    | 16-Bit       | 16-Bit       | 16-Bit       | 16-Bit       | 16-Bit       | 16-Bit       | 8-Bit        | 8-Bit        | 8-Bit        | 8-Bit        | 8-Bit        | 8-Bit        |
| RESOLUTION   | 16-Bit       | 16-Bit       | 14-Bit       | 14-Bit       | 14-Bit       | 14-Bit       | 16-Bit       | 16-Bit       | 16-Bit       | 14-Bit       | 14-Bit       | 14-Bit       |
| INPUT RANGE  | ±5V          | 10V          | ±10V         | ±5V          | 10V          | ±10V         | ±5V          | 10V          | ±10V         | ±5V          | 10V          | ±10V         |
| H1-1 SIGNAL  | D0           | D0           |              | Not Used     | Not Used     | Not Used     | D0/D8        | D0/D8        | D0/D8        | D0/D8        | D0/D8        | D0/D8        |
| H1-3 SIGNAL  | D1           | D1           |              | Not Used     | Not Used     | Not Used     | D1/D9        | D1/D9        | D1/D9        | D1/D9        | D1/D9        | D1/D9        |
| H1-5 SIGNAL  | D2           | D2           |              | D0           | D0           | D0           | D2/D10       | D2/D10       | D2/D10       | D2/D10       | D2/D10       | D2/D10       |
| H1-7 SIGNAL  | D3           | D3           |              | D1           | D1           | D1           | D3/D11       | D3/D11       | D3/D11       | D3/D11       | D3/D11       | D3/D11       |
| H1-9 SIGNAL  | D4           | D4           |              | D2           | D2           | D2           | Not Used     | Not Used     | Not Used     | Not Used     | Not Used     | Not Used     |
| H1-11 SIGNAL | D5           | D5           |              | D3           | D3           | D3           | Not Used     | Not Used     | Not Used     | Not Used     | Not Used     | Not Used     |
| H1-13 SIGNAL | D6           | D6           |              | D4           | D4           | D4           | Not Used     | Not Used     | Not Used     |              | Not Used     |              |
| H1-15 SIGNAL | D7           | D7           |              | D5           | D5           | D5           | Not Used     | Not Used     | Not Used     |              | Not Used     |              |
| H1-17 SIGNAL | D8           | D8           |              | D6           | D6           | D6           | Not Used     | Not Used     | Not Used     |              | Not Used     |              |
| H1-19 SIGNAL | D9           | D9           |              | D7           | D7           | D7           | Not Used     | Not Used     | Not Used     | Not Used     | Not Used     | Not Used     |
| H1-21 SIGNAL | D10          | D10          |              | D8           | D8           | D8           | Not Used     | Not Used     | Not Used     | Not Used     | Not Used     | Not Used     |
| H1-23 SIGNAL | D11          | D11          |              | D9           | D9           | D9           | Not Used     | Not Used     | Not Used     | Not Used     | Not Used     | Not Used     |
| H1-25 SIGNAL | D12          | D12          |              | D10          | D10          | D10          | D4/D12       | D4/D12       | D4/D12       | D4/D12       | D4/D12       | D4/D12       |
| H1-27 SIGNAL | D13          | D13          |              | D11          | D11          | D11          | D5/D13       | D5/D13       | D5/D13       | D5/D13       | D5/D13       | D5/D13       |
| H1-29 SIGNAL | D14          | D14          |              | D12          | D12          | D12          | D6/D14       | D6/D14       | D6/D14       | D6/D0        | D6/D0        | D6/D0        |
| H1-31 SIGNAL | D15          | D15          |              | D13          | D13          | D13          | D7/D15       | D7/D15       | D7/D15       | D7/D0        | D7/D0        | D7/D0        |
| RESET/HBEN   | Reset        | Reset        | Reset        | Reset        | Reset        | Reset        | HBEN         | HBEN         | HBEN         | HBEN         | HBEN         | HBEN         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1179 Evaluation Kit

## MAX1179 Evaluation Kit

Figure 1. MAX1179 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX1179 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1179 Evaluation Kit

Figure 3. MAX1179 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1179 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5