<!-- lastmod 2022-08-04 -->
## General Description

The MAX5026 evaluation kit (EV kit) provides a +30V output voltage from a +3V to +11V input source. It delivers up to 6mA output current, depending on the input voltage. The MAX5026 is a constant-frequency, pulse-width-modulating (PWM), current-mode step-up voltage converter with an internal power switch that operates at 500kHz. This EV kit demonstrates the lownoise performance of the device.

The MAX5026 EV kit is a fully assembled and tested surface-mount circuit board. With modifications, this EV kit  can  also  be  used  to  evaluate  MAX5025/MAX5027/ MAX5028. The EV kit can be used to evaluate other output voltages by changing the feedback resistors.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                          |
|---------------|-------|------------------------------------------------------------------------------------------------------|
| C1            |     1 | 4.7µF, 16V, X5R, 20% ceramic capacitor (1206) Taiyo Yuden EMK316BJ475ML                              |
| C2, C3        |     2 | 1µF, 50V, X7R, 10% ceramic capacitors (1210) TDK C3216X7R1H105K (populates with 1206 case capacitor) |
| C4, C5        |     0 | Not installed, capacitor (1210)                                                                      |
| L1            |     1 | 47µH ± 20% power inductor Toko A915BY-470M Sumida CDRH4D28-470                                       |
| D1            |     1 | 0.5A, 40V Schottky diode (SOT23) Zetex ZHCS500                                                       |
| R1            |     1 | 147k Ω ± 1% resistor (0603)                                                                          |
| R2            |     1 | 6.34k Ω ± 1% resistor (0603)                                                                         |
| R3            |     1 | 100 Ω ± 5% resistor (0805)                                                                           |
| U1            |     1 | MAX5026EUT (6-Pin SOT23)                                                                             |
| JU1           |     1 | 3-pin header (JU1)                                                                                   |
| J1            |     1 | 5mm oscilloscope jack                                                                                |
| None          |     1 | Shunt                                                                                                |
| None          |     1 | MAX5026 PC board                                                                                     |

- ♦ +3V to +11V Input Voltage Range (MAX5026/MAX5028)
- ♦ +4.5V to +11V Input Voltage Range (MAX5025/MAX5027)
- ♦ Output Voltage: Adjustable Output Voltage Up to +36V (MAX5025/MAX5026) +30V Fixed Output Voltage (MAX5027/MAX5028)
- ♦ Low Switching Noise
- ♦ 500kHz Switching Frequency
- ♦ Less than 1mVp-p High-Frequency Output Switching Ripple at 2mA Load
- ♦ Up to 6mA Output Current with +5V Input
- ♦ 6-Pin SOT23 Package
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX5026EVKIT | 0 o C to +70 o C | 6 SOT23-6    |

Note: To evaluate the MAX5025/MAX5027/MAX5028, request a MAX5025EUT/MAX5027EUT/MAX5028EUT free sample with the MAX5026EVKIT.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

## MAX5026 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE         |
|-------------|--------------|--------------|-----------------|
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com  |
| Sumida      | 847-545-6700 | 847-545-6720 | www.sumida.com  |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com |
| TDK         | 847-803-6100 | 847-390-4405 | www.tdk.com     |
| Toko        | 847-297-0070 | 847-699-1194 | www.tokoam.com  |
| Zetex       | 631-543-7100 | 631-864-7630 | www.zetex.com   |

Note: Please indicate that you are using the MAX5025-MAX5028 when contacting these component suppliers.

## Quick Start

The MAX5026 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

## Evaluating MAX5026

- 1) Verify  that  there  is  a  shunt  across  JU1  ( SHDN ) pins 1 and 2.
- 2) Connect a voltmeter and load (if any) to the VOUT pad (and/or plug an oscilloscope probe into the oscilloscope jack).
- 3) Connect a +3V to +11V power supply to the VIN pad. Connect the power-supply ground to the GND pad closest to VIN.
- 4) Turn on the power supply and verify that the output voltage is approximately +30V.

To  evaluate  other  output  voltages,  refer  to  the Evaluating Other Output Voltages section.

## Detailed Description

## Shutdown Function

The MAX5026 EV kit contains a boost converter. The circuit provides a +30V output with less than 2mVp-p highfrequency ripple from a +3V to +11V input voltage, and delivers up to 6mA. The setting of jumper JU1 selects the circuit  operating modes. Table 1 shows the functions of jumper JU1.

## Noise Performance

The MAX5026 EV kit is specifically designed for lownoise performance. An RC filter at the regulator's output reduces its noise further. To observe this filtered output, monitor the signal at oscilloscope jack J1. The high-frequency output ripple voltage is less than 1mVp-p at 2mA load current. Extra capacitor pads (C4 and C5) are provided for further noise reduction. To reduce lowfrequency noise, add a 10µF electrolytic capacitor at the pads labeled C5. Without the 10µF capacitor, the peak-to-peak low-frequency noise is about 20mV. The peak-to-peak low-frequency noise drops to 3mV when the 10µF capacitor is included.

## Evaluating Other Output Voltages

The default output for the MAX5026 EV kit is +30V. To generate output voltages other than +30V with either the MAX5025EUT or MAX5026EUT, change feedback resistors R1 and R2. Limit the current through R1 and R2 to about 200µA. R1 = R2 [(VOUT /1.25V) - 1].

## Evaluating MAX5027/MAX5028

The MAX5026 EV kit can also be used to evaluate the MAX5027/MAX5028 boost converters with fixed +30V output.  To  evaluate  MAX5027/MAX5028, remove the feedback resistors R1 and R2, short the two pads of R1, and replace the MAX5026EUT with a MAX5027EUT/ MAX5028EUT.

Figure 1. Medium-Load Switching Waveform with RC Filter

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN              | MAX5026 OUTPUT                                                                |
|------------------|-----------------------|-------------------------------------------------------------------------------|
| 1 and 2          | Connected to VIN      | MAX5026 enabled, VOUT = +30V                                                  |
| 2 and 3          | Connected to GND      | Shutdown mode, VOUT = VIN - V D , where V D is the diode forward-voltage drop |
| Open             | Connected to SHDN pad | External logic signal enables or disables the MAX5026 output                  |

<!-- image -->

Figure 2. MAX5026 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5026 Evaluation Kit

## MAX5026 Evaluation Kit

<!-- image -->

Figure 3. MAX5026 EV Kit Component Placement Guide-Top Silkscreen

Figure 4. MAX5026 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX5026 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4