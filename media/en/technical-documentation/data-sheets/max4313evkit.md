<!-- lastmod 2022-08-05 -->
## General Description

The MAX4313 evaluation kit (EV kit) simplifies evaluation  of  the  MAX4313 low-power, single-supply video multiplexer/amplifier. The MAX4313 is fixed to a gain of +2V/V, ideal for driving back-terminated cables. SMA connectors and 50 Ω terminating resistors are included for  50 Ω test  equipment compatibility. Simply change the terminating resistors to 75 Ω for  video  test  equipment compatibility.

The EV kit comes with the MAX4313 installed. To evaluate the MAX4310, simply order a free sample (MAX4310ESA), replace the MAX4313 with the MAX4310 on the EV board, and change the gain-setting resistors for the desired gain.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| C1, C3        |     2 | 0.1µF, 10% ceramic capacitors                                               |
| C2, C4        |     2 | 10µF, 10V, 20% tantalum capacitors AVX TAJB106M010 or Sprague 293D106X0010B |
| R1-R3         |     3 | 49.9 Ω , 1% resistors                                                       |
| R G           |     1 | 0 Ω resistor                                                                |
| R F           |     0 | Not installed                                                               |
| IN0, IN1, OUT |     3 | SMA connectors                                                              |
| JU1, JU2      |     2 | 3-pin headers                                                               |
| U1            |     1 | MAX4313ESA                                                                  |
| None          |     2 | Shunts for JU1, JU2                                                         |
| None          |     1 | MAX4313 EV kit PC board                                                     |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Sprague    | 603-224-1961 | 603-224-1430 |

Note: Please indicate that you are using the MAX4313 when contacting these component suppliers.

<!-- image -->

Features

- ' Single-Supply Operation
- ' 150MHz -3dB Bandwidth (RL = 150 Ω )
- ' 540V/µs Slew Rate (RL = 150 Ω )
- ' 40MHz 0.1dB Gain Flatness (RL = 150 Ω )
- ' Low Switching Transient (20mVp-p)
- ' 0.06%/0.02° Gain/Phase Errors
- ' Outputs Extend to the Rails
- ' Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX4313EVKIT | -40°C to +85°C | 8 SO         |

Note: To evaluate the MAX4310, request a MAX4310ESA free sample.

## Quick Start

The MAX4313 EV kit is fully assembled and tested. Follow these steps to verify board operation.

- 1) The circuit requires supply voltages of +4.5V to +10.5V. For evaluation purposes, connect a +5V supply to the pad labeled VCC and connect the power-supply ground to the pads labeled VEE and GND.
- 2) Connect the output labeled OUT to an oscilloscope input. Set the shunt across the appropriate pins of jumper JU1 to select a multiplexer input (IN0 or IN1).
- 3) Place the shunt across pins 2 and 3 of jumper JU2 to enable the MAX4313's output.
- 4) Turn on the power supply. Apply a ±0.5V signal with VCM = +1.5V to the appropriate multiplexer input selected in Step 2. The 100 Ω load (chosen for ease of evaluation) limits the output voltage range. Wider output voltage swings are achievable with lighter  loads.  See the MAX4310/MAX4313 data sheet.
- 5) Verify the output signal on the oscilloscope.

1

## MAX4313 Evaluation Kit

## Detailed Description

Setting the Voltage Gain (MAX4310) The gain of the MAX4310's amplifier can be set by changing the feedback (RF) and gain-set (RG) resistors.  Refer  to  the  MAX4310/MAX4313 data sheet for recommended values.

## Control of Digital Inputs (A0, SHDN )

Jumpers JU1 and JU2 provide the user with manual control of the multiplexer input address (A0) and shutdown ( SHDN ),  respectively (Table 1). An external controller may also be used on either input by connecting the controller to the appropriate pad and removing the shunt from JU1 or JU2. The MAX4313's A0 and SHDN pins should not be left floating. For a single +5V supply,  A0  and SHDN are CMOS-logic compatible. The logic-high threshold is VCC -  1.2V,  and  the  logic-low threshold is VCC - 2.8V.

## Layout Considerations

The PC board layout has been optimized for high-speed signals and low distortion, with careful attention given to  grounding, power-supply bypassing, and signal- path layout. The small, surface-mount, ceramic bypass capacitors (C1, C3) have been placed as close as possible  to  the  amplifier's  supply  pins.  The  ground  plane has been removed around and under the amplifier to reduce stray capacitance. Capacitance at the feedback pin has been minimized by using 0805-size feedback and gain-set resistors and by removing the adjacent ground plane.

Table 1.  Jumper Selection

| JUMPER   | JUMPER POSITION   | FUNCTION                             |
|----------|-------------------|--------------------------------------|
| JU1      | 1-2               | Select IN1.                          |
| JU1      | 2-3               | Select IN0.                          |
| JU1      | Open              | Drive pad A0 with external signal.   |
| JU2      | 1-2               | Disable output.                      |
| JU2      | 2-3               | Enable output.                       |
| JU2      | Open              | Drive pad SHDN with external signal. |

Figure 1.  MAX4313 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4313 Evaluation Kit

<!-- image -->

Figure 2.  MAX4313 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX4313 EV Kit PC Board Layout GuideComponent Side

<!-- image -->

<!-- image -->

Figure 4.  MAX4313 EV Kit PC Board Layout Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4313 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1999 Maxim Integrated Products