<!-- lastmod 2022-08-02 -->
## General Description

The MAX5072 evaluation kit (EV kit) is a fully assembled and tested circuit board that contains all the components necessary to evaluate the performance of the MAX5072. The MAX5072 is a dual-output DC-DC converter. One of the outputs is configured as a step-down converter (converter 1), while converter 2 is configured as a step-up converter. The EV kit is powered from a DC supply providing 5.5V to 16V. The EV kit can be reconfigured for an input voltage range between 4.5V to 5.5V.

The MAX5072 EV kit is capable of delivering 3.3V at 2A from the step-down converter output and 12V at up to 0.22A from the step-up converter output. The MAX5072 switching frequency is set to 2.2MHz and the two outputs switch 180° out of phase. A SYNC input facilitates external frequency synchronization. Moreover, a CLKOUT output provides a clock signal that is 90° out of phase with respect to the step-up converter, allowing four-phase operation using two MAX5072 ICs in master-slave configuration.

The MAX5072 includes a power-good output for converter  1,  a  reset  output,  and  a  manual  reset  input.  In addition, each output, can be shut down individually. The MAX5072 features a power-fail output, which provides a logic-low when the input voltage drops below a preprogrammed threshold.

The MAX5072 is available in a thermally enhanced 32-pin thin QFN package.

| DESIGNATION       |   QTY | DESCRIPTION                                                                 |
|-------------------|-------|-----------------------------------------------------------------------------|
| C1, C16           |     2 | 10µF ±20%, 16V X5R ceramic capacitors (1206) TDK C3216X5R1C106M             |
| C2                |     1 | 1µF ±10%, 25V X7R ceramic capacitor (0805) TDK C2012X7R1E105K               |
| C3, C13, C15, C17 |     4 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K            |
| C4                |     1 | 47µF ±20%, 10V aluminum electrolytic capacitor (6.3mmx6.0mm) Sanyo 10CV47EX |
| C5, C6            |     2 | 100pF ±5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H101J             |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C7, C12       |     2 | 560pF ±5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H561J   |
| C8            |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J475K  |
| C9, C20       |     2 | 0.22µF ±20%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C224M |
| C10           |     1 | 2200pF ±10%, 50V C0G ceramic capacitor (0603) TDK C1608X7R1H222K  |
| C11           |     1 | 22pF ±5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H220J     |

Component List continued on next page.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

<!-- image -->

## Features

- ♦ 5.5V to 16V Input Supply Voltage Range
- ♦ 4.5V to 5.5V Input Supply Voltage Range (Configurable)
- ♦ 3.3V at 2A Output (Step-Down Converter)
- ♦ 12V at 0.22A Output (Step-Up Converter)
- ♦ 180° Out-of-Phase Operation Reduces Input Capacitance
- ♦ Clock Output for Four-Phase Operation
- ♦ Programmable Switching Frequency (200kHz to 2.2MHz)
- ♦ Individual Enable Inputs, SYNC Input, and Manual Reset Input
- ♦ Power-On Reset Output and Power-Fail Output
- ♦ Low-Cost Solution
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX5072EVKIT | 0°C to +70°C | 32 TQFN-EP*  |

1

## MAX5072 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                                          |
|---------------|-------|------------------------------------------------------------------------------------------------------|
| C14           |     1 | 22µF ±10%, 16V X5R ceramic capacitor (1210) TDK 3225X5R1C226K                                        |
| C18           |     1 | 1µF ±10%, 10V X7R ceramic capacitor (0603) TDK C1608X7R1A105K                                        |
| C19           |     1 | 150µF ±20%, 25V aluminum electrolytic capacitor (case size F or 8.3mm x 8.3mm) Panasonic EEVFK1E151P |
| D1            |     1 | 200mA 30V Schottky diode (SOD-123) Diodes Inc. BAT42W                                                |
| D2            |     1 | 3A 40V Schottky rectifier (SMB) Diodes Inc. B340LB                                                   |
| D3            |     1 | 2A 40V Schottky rectifier (SMB) Diodes Inc. B240                                                     |
| JU1           |     0 | Not installed, 3-pin header                                                                          |
| JU2           |     0 | Not installed, 2-pin header                                                                          |
| JU3, JU4, JU5 |     3 | 2-pin headers                                                                                        |
| J1            |     1 | 6-pin header                                                                                         |
| L1            |     1 | 4.7µH, 4.8A, 18m Ω inductor Pulse P0751.472 Sumida CDR95NP-4R7MC                                     |

## Component List (continued)

| DESIGNATION            |   QTY | DESCRIPTION                                  |
|------------------------|-------|----------------------------------------------|
| L2                     |     1 | 4.7µH, 1.8A, 90m Ω inductor Pulse PG0063.472 |
| R1                     |     1 | 133k Ω ±1% resistor (0603)                   |
| R2                     |     1 | 42.2k Ω ±1% resistor (0603)                  |
| R3                     |     1 | 2.21k Ω ±1% resistor (0603)                  |
| R4, R11, R12, R13, R17 |     5 | 10.0k Ω ±1% resistors (0603)                 |
| R5                     |     1 | 5.62k Ω ±1% resistor (0603)                  |
| R6                     |     1 | 22.1k Ω ±1% resistor (0603)                  |
| R7                     |     1 | 1k Ω ±1% resistor (0603)                     |
| R8                     |     1 | 68.1k Ω ±1% resistor (0603)                  |
| R9                     |     1 | 4.87k Ω ±1% resistor (0603)                  |
| R10                    |     1 | 110k Ω ±1% resistor (0603)                   |
| R14, R15, R16          |     3 | 100k Ω ±5% resistors (0603)                  |
| R18                    |     1 | 4.7 Ω ±5% resistor (0603)                    |
| U1                     |     1 | MAX5072ETJ (32-pin TQFN, 5mm x 5mm)          |
| SW1                    |     1 | Pushbutton switch (normally open)            |
| None                   |     3 | Shunts                                       |
| None                   |     1 | MAX5072 PC board                             |

## Component Suppliers

| SUPPLIER                                    | PHONE        | FAX          | WEBSITE               |
|---------------------------------------------|--------------|--------------|-----------------------|
| Diodes, Inc.                                | 805-446-4800 | 805-446-4850 | www.diodes.com        |
| Panasonic                                   | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| Pulse Engineering                           | 858-674-8100 | 858-674-8262 | www.pulseeng.com      |
| Sanyo Electronic Device (U.S.A) Corporation | 619-661-6835 | 619-661-1055 | www.sanyodevice.com   |
| Sumida                                      | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| TDK                                         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note:

Indicate that you are using the MAX5072 EV kit when contacting these component suppliers.

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quick Start

## Recommended Equipment

- Adjustable 5.5V to 16V, 3A DC power supply
- Two electronic loads (e.g., HP6060B)
- Two voltmeters

## Procedure

The MAX5072 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a voltmeter to the VOUT1 and PGND pad s.
- 2) Verify  that  the  jumpers  JU3,  JU4,  and  JU5  do  not have a shunt installed.
- 3) Connect a voltmeter to the VOUT2 and PGND pads.
- 4) Connect a 2A electronic load to the VOUT1 and PGND pads.
- 5) Connect a 0.22A electronic load to the VOUT2 and PGND pads.
- 6) Connect a 5.5V to 16V DC power supply to the VIN and PGND pads, set the voltage in the range of 5.5V to 16V.
- 7) Turn on the power supply.
- 8) Verify  that  VOUT1 is 3.3V throughout the 5.5V to 16V input voltage range.
- 9) Verify that VOUT2 is 12V throughout the 5.5V to 16V input voltage range.
- 10) Turn on both electronic loads. Repeat steps 7 and 8.

## Detailed Description

The MAX5072 EV kit contains two switching DC-DC converters. Each converter can be configured as either a step-down or a step-up converter. The MAX5072's individual converter switching frequency can be set within the 200kHz to 2.2MHz range. The EV kit is designed to operate from a DC power supply that can provide 5.5V to 16V and 3A of current. The EV kit can be reconfigured for a 4.5V to 5.5V input voltage range by shorting jumper JU2.

Converter 1 (VOUT1) is configured as a step-down converter.  VOUT1 generates 3.3V and can provide up to 2A of current. Capacitors C5, C6, and C7 and resistors R3 and R4 provide a compensation network for VOUT1 on the MAX5072 EV kit.

<!-- image -->

## MAX5072 Evaluation Kit

Converter 2 (VOUT2) is configured as a step-up converter. Converter 1's output provides power to the converter 2 input. VOUT2 generates 12V and can provide up to 0.22A of current. Capacitors C10, C11, and C12 and resistors R6 and R7 provide a compensation network for VOUT2 on the MAX5072 EV kit.

The switching frequency for each converter is set to 2.2MHz by resistor R5. The internal oscillator switching frequency of the MAX5072 is two times the individual converter switching frequency. To set the individual converter switching frequency between 200kHz and 2.2MHz, select a different resistor value for R5. Refer to the Internal Oscillator section in the MAX5072 IC data sheet for instructions on calculating R5. Each converter is switching 180° out of phase with respect to the other converter.

## Enable (EN1 and EN2)

The MAX5072 EV kit provides separate enable inputs, EN1 and EN2, to individually control or sequence the output voltages. The enable signals EN1 and EN2 are pulled up to VL (5V) by resistors R14 and R15, respectively. The external enable input signal can be connected to pin 1 of header JU4 (JU4-1, EN1), and converter 2's  enable input signal can be connected to pin 1 of header JU5 (JU5-1, EN2). The MAX5072 enable pins are active-high and TTL compatible.

## Manual Reset Button (SW1)

The MAX5072 EV kit provides a manual reset pushbutton switch (SW1) that is connected to the MR pin of the MAX5072. Push and release the manual reset pushbutton switch to initiate a reset of the circuit.

## Reset Output Signal ( RST )

The MAX5072 EV kit provides a reset output signal on pin 1 of header J1 (J1-1). The reset pin is pulled up to VOUT1 by a 10k Ω resistor  (R13).  The  MAX5072 RST pin output is pulled low when either VOUT1 or VOUT2 falls  below  92.5% of their nominal regulation voltage. Once both outputs exceed 92.5% of their nominal regulated voltages, the RST output goes high after the active-reset timeout period (180ms).

## Power-Good Output (PGOOD1)

Converter 1 provides a power-good output signal. The PGOOD1 is pulled up to VOUT1 by a 10k Ω resistor R12. When VOUT1 drops below 92.5% of its nominal regulated  voltage,  PGOOD1  is  pulled  low.  The PGOOD1 output signal is available on pin 5 of header J1 (J1-5).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5072 Evaluation Kit

## Power-Fail Output (PFO)

The MAX5072 EV kit features a power-fail output (PFO) on pin 4 of header J1 (J1-4) to provide an advance signal  before  the  outputs  drop  out  of  regulation.  PFO  is pulled up to VL (5V) by a 10k Ω resistor (R17). The PFO output is pulled low when the input voltage VIN drops below 9.6V. The threshold voltage is set by resistors R10 and R11. To set a different threshold voltage for the PFO, select different values for resistors R10 and R11. Refer to the Dying Gasp Comparator section in the MAX5072 IC data sheet for selecting the values for R10 and R11.

## Synchronization Input (SYNC)

The MAX5072 EV kit provides a synchronization (SYNC) input that enables the MAX5072 to synchronize with external systems. The synchronization frequency is two times the individual converter switching frequency. To synchronize the MAX5072 EV kit with an external clock, connect a 4.4MHz TTL clock signal to pin 3 of header J1 (J1-3).

## Clock Output (CLKOUT)

The MAX5072 EV kit provides a clock output (CLKOUT) that enables two MAX5072 EV kits to be connected in a master-slave configuration operating in four-phase mode. The CLKOUT is 90° phase-shifted with respect to the internal switch turn-on edge. The CLKOUT is two times the individual converter switching frequency. Feed the CLKOUT output signal of the master EV kit to the SYNC input of the slave EV kit. The effective input ripple switching frequency will be four times the individual converter's switching frequency. The CLKOUT output is available on pin 6 of header J1 (J1-6).

## Frequency Select (FSEL1)

The MAX5072 EV kit provides an option to reduce the converter 1 switching frequency to one-half of converter 2. As configured, the MAX5072 FSEL1 pin is pulled up to  VL  (5V)  by  a  100k Ω resistor  (R16).  When FSEL1 is high, converter 1's switching frequency is the same as converter 2's switching frequency. To reduce converter 1's switching frequency to one-half of converter 2  install a shunt on jumper JU3.

## Jumper Selection

## Input Source for Converter 2 (JU1)

The MAX5072 EV kit features an option to select the input source for converter 2. Jumper JU1 selects the input source for converter 2 on the MAX5072 EV kit. Table 1 lists the selectable JU1 jumper options.

Note that jumper JU1 is not installed and is shorted between pin holes 1 and 2 by a PC board trace. To utilize jumper JU1, cut open the PC board trace between pin holes 1 and 2, and install a shorting wire between pin holes 2 and 3.

## Table 1. Jumper JU1 Functions

| SHORT LOCATION         | CONVERTER 2 INPUT SOURCE   |
|------------------------|----------------------------|
| 1-2 (Shorted, default) | VOUT1                      |
| 2-3                    | VIN                        |

## Input Voltage Range (JU2)

The MAX5072 EV kit can be reconfigured for an input voltage range between 4.5V to 5.5V by shorting jumper JU2. Jumper JU2 selects the input voltage range for the MAX5072 EV kit. Table 2 lists the selectable JU2 jumper options.

Note that jumper JU2 is not installed. To utilize jumper JU2, install a shorting wire between its pin holes.

Table 2. Jumper JU2 Functions

| SHORT LOCATION          | EV KIT INPUT VOLTAGE RANGE (V)   |
|-------------------------|----------------------------------|
| Not Installed (Default) | 5.5 to 16                        |
| Installed               | 4.5 to 5.5                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Converter 1 Frequency Selection, FSEL1 (JU3)

The MAX5072 EV kit provides an option to reduce the converter 1 switching frequency to one-half of converter 2. Jumper JU3 selects the switching frequency for converter 1 on the MAX5072 EV kit. Table 3 lists the selectable JU3 jumper options.

## Converter 1 Enable, EN1 (JU4)

The MAX5072 EV kit provides an option to disable converter 1. Use jumper JU4 to disable converter 1 on the MAX5072 EV kit (see Table 4).

## Table 3. Jumper JU3 Functions

| SHUNT LOCATION          | FSEL1 CONNECTED TO        | CONVERTER 1'S SWITCHING FREQUENCY   |
|-------------------------|---------------------------|-------------------------------------|
| Not Installed (Default) | VL (through resistor R16) | Same as Converter 2                 |
| Installed               | SGND                      | One-half of Converter 2             |

<!-- image -->

## MAX5072 Evaluation Kit

## Converter 2 Enable, EN2 (JU5)

The MAX5072 EV kit provides an option to disable converter 2. Use jumper JU5 to disable converter 2 on the MAX5072 EV kit (see Table 5).

## Table 4. Jumper JU4 Functions

| SHUNT LOCATION          | EN1 CONNECTED TO          | CONVERTER 1   |
|-------------------------|---------------------------|---------------|
| Not Installed (Default) | VL (through resistor R14) | Enabled       |
| Installed               | SGND                      | Disabled      |

## Table 5. Jumper JU5 Functions

| SHUNT LOCATION          | EN2 CONNECTED TO          | CONVERTER 2   |
|-------------------------|---------------------------|---------------|
| Not Installed (Default) | VL (through resistor R15) | Enabled       |
| Installed               | SGND                      | Disabled      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5072 Evaluation Kit

Figure 1. MAX5072 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX5072 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX5072 Evaluation Kit

Figure 3. MAX5072 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5072 Evaluation Kit

Figure 4. MAX5072 EV Kit PC Board Layout-GND Layer 2

<!-- image -->

8

Figure 5. MAX5072 EV Kit PC Board Layout-Inner Trace Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5072 Evaluation Kit

Figure 6. MAX5072 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9