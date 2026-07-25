<!-- lastmod 2022-08-05 -->
## General Description

The MAX4447 evaluation kit (EV kit) simplifies evaluation of  the  MAX4447 high-speed differential line driver. The EV kit includes the MAX4447, which has a fixed gain of +2V/V,  but  it  can  also  be  used  to  evaluate  the adjustable-gain MAX4448 (stable with a minimum gain of +2V/V) or the MAX4449 (stable with a minimum gain of +5V/V). To evaluate the MAX4448 or MAX4449, order a free sample of the MAX4448ESE or MAX4449ESE along with the MAX4447 EV kit.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                          |
|----------------|-------|------------------------------------------------------|
| C1, C3         |     2 | 4.7µF ±20%, 10V tantalum capacitors AVX TAJA475M010R |
| C2, C4         |     2 | 0.1µF ceramic capacitors                             |
| R1, R2, R3     |     3 | 49.9 Ω ±1% resistors                                 |
| RG             |     0 | Not installed                                        |
| JU1            |     1 | 2-pin header                                         |
| None           |     1 | Shunt (JU1)                                          |
| IN, OUT-, OUT+ |     3 | SMA connectors                                       |
| U1             |     1 | MAX4447ESE                                           |
| None           |     1 | MAX4447 EV kit PC board                              |
| None           |     1 | MAX4447 EV kit data sheet                            |
| None           |     1 | MAX4447/MAX4448/MAX4449 data sheet                   |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |

Note: Please indicate that you are using the MAX4447, MAX4448, or MAX4449 when contacting the component supplier above.

<!-- image -->

Features

- ' 430MHz Full-Power Bandwidth (MAX4447)
- ' 6500V/µs Slew Rate
- ' Proven PC Board Layout
- ' Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX4447EVKIT | 0°C to +70°C  | 16 SO        |

## Quick Start

The MAX4447 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +5V power supply to the VCC pin and a -5V power supply to the VEE pin. Connect powersupply ground to the GND pads.
- 2) Ensure that the shunt is removed from jumper JU1.
- 3) Apply a signal of up to +1.5V peak to the SMA connector marked IN.
- 4) Connect the output marked OUT+ to a 50 Ω terminated oscilloscope input, and connect the output marked OUT- to another 50 Ω terminated oscilloscope input.
- 5) Turn on the power supply and verify the output signals on the oscilloscope. The output amplitude at either of the two outputs (VOUT+, VOUT-) observed on the oscilloscope will be the same as that on the input. This is due to the multiplication of the +2 gain with the voltage divider formed by the 49.9 Ω back-terminating resistor (R3) and the oscilloscope input termination. Note that the differential output (defined as VOUT+ - VOUT-) will be twice the amplitude of the input.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## Detailed Description

## Enable Control

The MAX4447 provides an enable pin (EN) to enable or disable the output. Table 1 lists the options available for the enable/disable control jumper, JU1. EN is a TTL/ CMOS-logic level input.

## Layout Considerations

The MAX4447 EV kit layout has been optimized for high-speed signals with careful attention given to grounding, power-supply bypassing, and signal-path layout. The small, surface-mount, ceramic bypass capacitors (C2, C4) have been placed as close to the MAX4447 supply pins as possible. Signal traces have been kept as short as possible by using 0805-sized termination and gain-set resistors.

## Evaluating the MAX4448 or MAX4449

To evaluate the MAX4448 or MAX4449, turn off the power to the EV kit. Replace the MAX4447 with a MAX4448ESE or MAX4449ESE, and install a gain-setting  resistor  RG (0805, 1%) according to the following formula:

<!-- formula-not-decoded -->

Note that the gain must be at least +2V/V for the MAX4448 and must be at least +5V/V for the MAX4449 for the amplifier to be stable.

Table 1.  Jumper JU1 Functions

| SHUNT         | MAX4447 ENABLE PIN              | MAX4447 OUTPUT      |
|---------------|---------------------------------|---------------------|
| Installed     | Connected to GND                | MAX4447 in shutdown |
| Not installed | Floating (internally pulled up) | MAX4447 enabled     |

Figure 1.  MAX4447 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4447 Evaluation Kit

<!-- image -->

Figure 2.  MAX4447 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX4447 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX4447 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4447 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600