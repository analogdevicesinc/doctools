<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX9502G Dual-Package Evaluation Kit

## General Description

The MAX9502G dual-package evaluation kit (EV kit) is a convenient platform for evaluating the performance of the MAX9502G or MAX9502M video filter amplifiers in both µDFN and SC70 packages. The input and output (I/O)  signals  from  the  MAX9502G dual-package EV kit are DC-coupled. The MAX9502G dual-package EV kit's input terminal has a 75 Ω termination to ground, and the output has a 75 Ω back-termination resistor. The MAX9502G  has  a  gain  of  2V/V  (+6dB)  and  the MAX9502M has a gain of 4V/V (+12dB). The MAX9502G dual-package EV kit operates from a single 2.5V to 3.6V power supply.

The MAX9502G/MAX9502M is a small, low-power, video filter amplifier that operates from a supply voltage as low as 2.5V. The filter passband is set for standard definition video. The small size and low minimum supply  voltage  make the MAX9502G/MAX9502M ideal for portable applications such as mobile phones, digital still cameras, and camcorders.

The MAX9502G/MAX9502M does not require coupling capacitors or bias networks, resulting in an extremely small footprint solution. The MAX9502G/MAX9502M input can be directly connected to the output of a video digital-to-analog converter (DAC). The reconstruction filter is implemented as a 4th-order Chebyshev and has +1dB passband flatness to 5.5MHz, 3dB attenuation at 8MHz, and 55dB attenuation at 27MHz.

The output amplifier drives a 2VP-P video signal into a 150 Ω load to ground. The output signal is level-shifted so the sync tip is typically 110mV above ground.

The MAX9502G/MAX9502M consumes only 5.3mA quiescent supply current. An active-low shutdown mode reduces the supply current to 10nA. The MAX9502G dual-package EV kit is available in tiny 6-pin µDFN (1mm x 1.5mm x 0.72mm) and 5-pin SC70 (2mm x 2.2mm x 0.95mm) packages. The device is specified over the -40°C to +85°C extended temperature range and -40°C to +125°C automotive temperature range. The MAX9502G dual-package EV kit can also be used to evaluate the MAX9502M by replacing the IC.

## Component Supplier

| SUPPLIER   | PHONE        | FAX   | WEBSITE               |
|------------|--------------|-------|-----------------------|
| TDK Corp.  | 847-803-6100 | -     | www.component.tdk.com |

Note: Indicate that you are using the MAX9502G when contacting this component supplier.

## Features

- ♦ Tiny 5-Pin SC70 and 6-Pin µDFN Packages
- ♦ DC-Coupled I/O Saves Board Space
- ♦ 4-Pole Chebyshev Filter
- ♦ 5.5MHz Passband
- ♦ 55dB Attenuation at 27MHz
- ♦ 10nA Low-Current Shutdown Mode
- ♦ 2.5V to 3.6V Single-Supply Operation
- ♦ Preset Gains: +6dB (MAX9502G), +12dB (MAX9502M)
- ♦ Evaluates the MAX9502M (IC replacement required)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9502GEVKIT | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                     |
|---------------|-------|---------------------------------------------------------------------------------|
| C1, C3        |     2 | 0.1µF ±10%, 6.3V X7R ceramic capacitors (0603) TDK C1608X7R1E104K               |
| C2, C4        |     0 | Not installed, capacitor (0.01µF to 1µF, depending on application requirements) |
| C5            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M                 |
| J1, J2        |     2 | BNC connectors, vertical, PCBA                                                  |
| J3, J4        |     2 | Wire loops                                                                      |
| JU1-JU4       |     4 | 3-pin headers                                                                   |
| R1-R4         |     4 | 75 Ω ±1% resistors (R603)                                                       |
| U1            |     1 | MAX9502GELT+T (6-pin µDFN)                                                      |
| U2            |     1 | MAX9502GEXK+T (5-pin SC70)                                                      |
| -             |     1 | PCB: MAX9502G Dual Package Evaluation Kit                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX9502G Dual-Package Evaluation Kit

Figure 1. 100 IRE Multiburst Signal-Sync Tip at Ground

<!-- image -->

## Quick Start

## Recommended Equipment

- 2.5V to 3.6V, 500mA DC power supply for VCC
- Video signal generator (CVBS)
- Video measurement equipment (e.g., Tektronix VM700T)
- Two BNC/BNC 75 Ω cables

The MAX9502G dual-package EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) To test U1 (µDFN package), place a shunt across pins 1-2 of jumper JU2, pins 1-2 of jumper JU1, and

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

pins 1-2 of jumper JU4. To test U2 (SC70 package), place a shunt across pins 1-2 of jumper JU3, pins 2-3 of jumper JU1, and pins 2-3 of jumper JU4. JU2 sets the SHDN pin high to enable the µDFN part, and JU3 sets the SHDN pin high to enable the SC70 part. JU1 applies the input signal to the respective part, and JU4 selects the respective output signal (see Tables 1 and 2).

- 2) Connect the output of the video signal generator to the BNC IN connector (J1) using one of the BNC cables. Note the video signal generator should be biased so that the sync tip is at ground, not below ground.

<!-- image -->

## MAX9502G Dual-Package Evaluation Kit

Figure 2. 100 IRE Multiburst Signal-Sync Tip Below Ground

<!-- image -->

- 3) Connect the BNC OUT connector (J2) to the TV monitor.
- 4) Set the power supplies to 3V and then turn off power.
- 5) Connect the negative terminal of the power supply to the GND loop (J4) on the MAX9502G dual-package EV kit.
- 6) Connect the positive terminal to the VCC pad (J3) on the MAX9502G dual-package EV kit.
- 7) Turn on the power supply.
- 8) Turn on the video signal generator and the VM700T.

<!-- image -->

## Detailed Description

The MAX9502G dual-package EV kit is a fully assembled and tested surface-mount printed-circuit board (PCB) that contains a MAX9502GELT+T (µDFN package) and a MAX9502GEXK+T (SC70 package). The MAX9502G/MAX9502M is a complete solution to interface a video DAC to a TV monitor. The MAX9502G dual-package EV kit is self-contained, requiring only a 3V external power supply. The MAX9502G/MAX9502M drive  a  long  video  cable  without  loss  of  quality.  The MAX9502G dual-package EV kit provides a shutdown pin  that  reduces  current  consumption  to  a  minimum for  power-saving features. Two jumpers (JU1 and JU4) at the BNC IN and BNC OUT connectors allow switching between the different packages.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9502G Dual-Package Evaluation Kit

Jumper JU2 controls the shutdown pin ( SHDN )  of  the MAX9502GELT IC, and jumper JU3 controls the shutdown pin ( SHDN ) of the MAX9502GEXK IC. The ICs are also controlled by an external logic signal connected to the jumpers. Remove the shunt from the jumper before connecting the external logic signal. Connect the logic signal to the center pin of the jumper (pin 2) and the logic signal return pin to GND (pin 3). When the logic signal is  low,  the  MAX9502G/MAX9502M shuts down. When  the  logic  signal  is  high,  the  MAX9502G/ MAX9502M is in normal operation. Refer to the MAX9502 data sheet for additional information.

The MAX9502G/MAX9502M feature an internal reconstruction filter that has 3dB attenuation at 8MHz, 55dB attenuation at 27MHz, and ±1dB passband flatness to  5.5MHz. The MAX9502G has +6dB gain, while the MAX9502M has +12dB gain. The MAX9502G dualpackage EV kit's video input and output signals are DC-coupled, eliminating large DC-blocking capacitors. The EV kit's input terminal has a 75 Ω termination to ground, and the output has a 75 Ω back-termination resistor.

The MAX9502G dual-package EV kit also evaluates the MAX9502M by replacing the IC. See Evaluating the MAX9502M section for additional information.

## CVBS Signal Source

The input video signal to the MAX9502G must be approximately within the range of 0 to 1V for the MAX9502G and 0 to 0.6V for the MAX9502M, as the MAX9502G/MAX9502M were designed to interface to video DACs, which output a video signal in those ranges. If the video signal source used to evaluate the MAX9502G creates a signal with the sync pulse below ground, then the signal must be level-shifted up, such that the sync tip is at ground.

Note in the two CVBS waveforms shown in Figures 1 and 2 that one is correctly level-shifted and the other is not.  Figure 1 shows the correct input signal for the MAX9502G IC, typically from a video DAC. Marker 1 in the photograph indicates ground and the cursors indicate a 1VP-P signal. Figure 2 shows the incorrect input signal for the MAX9502G IC, as the signal swings below ground. Marker 1 in the photograph indicates ground and the cursors indicate a 1VP-P signal.

## Level-Shift Circuit

The level-shift  circuit,  as  shown  in  Figure  3,  changes the DC bias of a video signal. If the video source cannot  supply a video signal with the sync tip at ground, the following circuit level-shifts the video signal. Simply apply the video signal to J1 and adjust R10 so that the sync tip waveform at J2 is at ground.

## Evaluating the MAX9502M

To evaluate the MAX9502M 6-pin µDFN package, replace U1 with a MAX9502MELT+T. To evaluate the MAX9502M 5-pin SC70 package, replace U2 with a MAX9502MEXK+T.

The MAX9502M has identical pinout and internal features as the MAX9502G, except the amplifier gain is +12dB. Refer to the MAX9502 data sheet for additional information.

## JU1/JU4 Jumper Selection-I/O Signals

Jumpers JU1 and JU4 control the I/O signal selection. Only one MAX9502G/MAX9502M IC can be tested at a time. See Table 1 for shunt positions.

## Table 1. JU1/JU4 Jumper Selection

| JUMPER   | SHUNT POSITION   | FUNCTION                             |
|----------|------------------|--------------------------------------|
| JU1      | 1-2*             | Input signal applied to U1 (µDFN)    |
| JU1      | 2-3              | Input signal applied to U2 (SC70)    |
| JU4      | 1-2*             | Output signal sourced from U1 (µDFN) |
| JU4      | 2-3              | Output signal sourced from U2 (SC70) |

*Default position.

## JU2/JU3 Jumper Selection-Shutdown Mode ( SHDN )

Jumpers JU2 and JU3 control the shutdown mode ( SHDN ) of the MAX9502G/MAX9502M ICs. In the shutdown mode, the quiescent current of the IC is typically 10nA. See Table 2 for shunt positions.

## Table 2. JU2/JU3 Jumper Selection

| SHUNT POSITION                                           | SHDN PIN                 | FUNCTION                         |
|----------------------------------------------------------|--------------------------|----------------------------------|
| 1-2*                                                     | Logic level high (+3VDC) | Device enabled                   |
| 2-3                                                      | Logic level low (0VDC)   | Device disabled (low-power mode) |
| Logic controller connected to center pin (2) and GND (3) | Logic level high         | Device enabled                   |
| Logic controller connected to center pin (2) and GND (3) | Logic level low          | Device disabled                  |

*Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9502G Dual-Package Evaluation Kit

<!-- image -->

Figure 3. MAX9502G Dual-Package EV Kit Offset Circuit Using the MAX4381

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9502G Dual-Package Evaluation Kit

Figure 4. MAX9502G Dual-Package EV Kit Schematic Diagram

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9502G Dual-Package Evaluation Kit

Figure 5a. MAX9502G Dual-Package EV Kit PCB Layout(1 of 2)

<!-- image -->

## Revision History

Pages changed at Rev 1: 1, 3, 6, 7

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 7

Figure 5b. MAX9502G Dual-Package EV Kit PCB Layout(2 of 2)

<!-- image -->