<!-- lastmod 2022-08-05 -->
## General Description

The MAX4444 evaluation kit (EV kit) simplifies evaluation of the MAX4444 ultra-fast differential line receiver. The EV kit includes the MAX4444, which has a fixed gain of +2V/V. This EV kit can also be used to evaluate the adjustable-gain MAX4445, which is stable with a minimum gain of +2V/V. To evaluate the MAX4445, order a free sample of the MAX4445ESE along with the MAX4444 EV kit.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                          |
|---------------|-------|------------------------------------------------------|
| C1, C3        |     2 | 4.7µF ±20%, 10V tantalum capacitors AVX TAJA475M010R |
| C2, C4        |     2 | 0.1µF ceramic capacitors                             |
| R1, R2, R3    |     3 | 49.9 Ω ±1% resistors                                 |
| R4            |     1 | 1M Ω ±5% resistor                                    |
| R G           |     0 | Not installed                                        |
| JU1           |     1 | 2-pin header                                         |
| None          |     1 | Shunt (JU1)                                          |
| IN-, IN+, OUT |     3 | SMA connectors                                       |
| U1            |     1 | MAX4444ESE (16-Pin SO)                               |
| None          |     1 | MAX4444 EV kit PC board                              |
| None          |     1 | MAX4444 EV kit data sheet                            |
| None          |     1 | MAX4444/MAX4445 data sheet                           |

## Component Supplier

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |

Note: Please indicate that you are using the MAX4444 or MAX4445 when contacting the above component supplier.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

<!-- image -->

Features

- ' 500MHz Full-Power Bandwidth
- ' 5000V/µs Slew Rate
- ' Proven PC Board Layout
- ' Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX4444EVKIT | 0°C to +70°C  | 16 SO        |

## Quick Start

The MAX4444 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +5V power supply to the VCC pin and a -5V power supply to the VEE pin. Connect power-supply ground to the GND pads.
- 2) Ensure that the shunt is installed on jumper JU1.
- 3) Apply signals to IN+ and IN- whose differential voltage does not exceed ±1.5V. These signals must not exceed the amplifier's input common-mode range of -2.9V to +2.9V.
- 4) Connect the output marked OUT to a 50 Ω terminated oscilloscope input.
- 5) Turn on the power supply and verify the output signal on the oscilloscope. The output amplitude observed on the oscilloscope will be the same as the amplitude of  the  differential  input.  This  is  due  to  the  multiplication of the gain of +2V/V with the voltage divider formed by the 49.9 Ω back-terminating resistor (R3) and the oscilloscope input termination.

## Detailed Description

## Enable Control

The MAX4444 provides an enable pin (EN) to enable or disable the output. Table 1 lists the options available for the enable/disable control jumper (JU1). EN is a TTL/CMOS-logic level input.

## Layout Considerations

The MAX4444 EV kit layout has been optimized for high-speed signals, with careful attention given to grounding, power-supply bypassing, and signal-path layout. The small, surface-mount, ceramic bypass capacitors (C2, C4) have been placed as close to the MAX4444 supply pins as possible. Signal traces have been kept as short as possible by using 0805-sized termination and gain-set resistors.

Table 1.  Jumper JU1 Functions

| SHUNT         | MAX4444 ENABLE PIN                       | MAX4444 OUTPUT        |
|---------------|------------------------------------------|-----------------------|
| Installed     | Connected to VCC                         | MAX4444 enabled       |
| Not installed | Pulled to GND through 1M Ω resistor (R4) | MAX4444 in shut- down |

## Evaluating the MAX4445

To evaluate the MAX4445, turn off the power to the EV kit. Replace the MAX4444 with a MAX4445ESE, and install gain-setting resistor RG (0805, 1%) according to the following formula:

<!-- formula-not-decoded -->

Note: The gain must be at least +2V/V (RG £ 600 Ω ) for the amplifier to be stable.

Figure 1.  MAX4444 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4444 Evaluation Kit

<!-- image -->

Figure 2.  MAX4444 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX4444 EV Kit PC Board Layout-Component Side

<!-- image -->

<!-- image -->

Figure 4.  MAX4444 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4444 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600