<!-- lastmod 2022-08-03 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX196 evaluation kit (EV kit) is an assembled and tested board for prototyping designs using the MAX196 12-bit,  multi-range  data-acquisition  system  (DAS).  The board includes voltage buffers for all six analog input channels, and is designed to be operated in a standalone demo mode using a binary LED readout. It can be adapted to a user-provided 16-bit microprocessor (µP) bus. The EV kit requires a +5V power supply for the MAX196 and ±15V power supplies for the op amps.

The MAX196 EV kit evaluates both the MAX196 and the MAX198. To evaluate the MAX198, order a free sample of the MAX198BCNI along with the MAX196 EV kit.

Maxim also offers a complete µP-based EV system for the  8-bit  interface  version  of  this  device,  the  MAX197. Refer to the MAX197 EV kit manual.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Stand-Alone Demo
- ' Proven PC Board Layout
- ' User Prototype Area
- ' Fully Assembled and Tested
- ' Jumper-Selectable Configuration

\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE   | BOARD TYPE   |
|-----------------|---------------|--------------|
| MAX196EVKIT-DIP | +25°C         | Through-Hole |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

## MAX196 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION         |   QTY | DESCRIPTION                  |
|---------------------|-------|------------------------------|
| C1                  |     1 | 100pF ceramic capacitor      |
| C2, C4, C9-C16      |    10 | 0.1µF ceramic capacitors     |
| C3, C5              |     2 | 10µF ceramic capacitors      |
| C6                  |     1 | 0.01µF ceramic capacitor     |
| C7                  |     1 | 0.22µF ceramic capacitor     |
| C8                  |     1 | 1µF ceramic capacitor        |
| H1                  |     1 | 18-pin header                |
| JU1, JU2, JU3, JU12 |     0 | Open                         |
| JU4, JU6-JU11       |     7 | 2-pin jumpers                |
| D0-D11              |    12 | LEDs                         |
| R1, R2              |     2 | 10k Ω , 5% resistors         |
| R3                  |     1 | 470k Ω , 5% resistor         |
| R4-R15              |    12 | 620 Ω , 5% resistors         |
| R16                 |     1 | 10k Ω , 9-pin SIP resistor   |
| R17                 |     1 | 100k Ω , 9-pin SIP resistor  |
| U1                  |     1 | Maxim MAX196BCNI             |
| U2                  |     1 | 74HC74 dual flip-flop        |
| U3, U8, U9          |     3 | 74HC04 hex inverter          |
| U4, U5              |     2 | Maxim MXL1014CN quad op amps |
| U6, U7              |     2 | 74HC574 octal latch          |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX196 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +5V supply to the pad labeled +5V, and connect the ground return to the pad labeled GND.
- 2) Connect ±15V supplies to the pads labeled, respectively, OPAMPV+ and OPAMPV-. Connect the power supply's common terminal to the EV kit's GND pad.
- 3) Set configuration jumpers as shown in Table 1. This selects channel 0 with a ±10V input range and puts the device in no power-down/internal clock mode.
- 4) Apply an input signal to the 'high-Z' channel 0 input pad located at the far-right side of the board.
- 5) Turn on the power supplies.
- 6) Observe binary readout on the twelve LEDs.

## Table 1.  Default Jumper Settings

| JUMPER    | SETTING               |
|-----------|-----------------------|
| JU1       | Short (default trace) |
| JU2       | Short (default trace) |
| JU3       | Short (default trace) |
| JU4 (PD1) | Short                 |
| JU5 (PD0) | Open                  |
| JU7 (RNG) | Open                  |
| JU8 (BIP) | Open                  |
| JU9 (A2)  | Short                 |
| JU10 (A1) | Short                 |
| JU11 (A0) | Short                 |
| JU12      | Short (default trace) |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Stand-Alone Demo Circuit Operation

The demo circuit is a state-machine driven by a 1kHz system clock that generates the RD, WR, and INT pulses. The circuit runs continuously, writing the command word programmed by the jumpers, and displaying the results on the LEDs.

At power-up, R3 and C8 reset flip-flop, U2, generating a WR pulse. On the rising edge of WR, the MAX196 latches the command word selected by JU4-JU11. The rising edge of the system clock sets WR high, initiating a conversion. When the MAX196 completes the conversion, the MAX196 drives INT low. After INT falls, RD goes low at the next rising edge of the system clock, placing the data onto the data bus. When RD goes low, INT goes high, so that the next system clock cycle drives RD high. RD's rising edge latches the data into U6 and U7. U8 and U9 drive the LED display. After RD returns high, WR goes low, and the cycle repeats (Figure 1).

Figure 1.  MAX196 Stand-Alone Demo Circuit Timing Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Optional Input Buffers

The op amp buffers are MXL1014 precision quad op amps, connected in voltage-follower configurations. These op amps should normally be powered from ±15V (±22V absolute maximum). Applications that use only 0V to 4V signals may power the MXL1014 from ±5V with good results.

The MAX196 should be driven from a low output impedance signal source (such as an op amp). To use the on-board op amps, drive the HI-Z CH0-CH5 input pads. When using an off-board low-impedance source, unplug the MXL1014s and drive the DIRECT CH0-CH5 input pads.

## Configuring the MAX196

Tables 2, 3, and 4 show the jumper connections for the different operating modes of the MAX196 EV kit. Refer to  Table  2  for  clock  and  power-down  modes, Table 3 for  input  range selection, and Table 4 for channel selection.

Table 2.  Clock and Power-Down Selection

| JU4 (PD1)   | JU5 (PD0)   | JU1   | FUNCTION                            |
|-------------|-------------|-------|-------------------------------------|
| Short       | Short       | Open  | No power-down, external clock mode  |
| Short       | Open        | Short | No power-down, internal clock mode  |
| Open        | Short       | X     | Standby power-down between readings |
| Open        | Open        | X     | Full power-down between readings    |

Table 3.  Range and Polarity Selection

| JU8 (BIP)   | JU7 (RNG)   | MAX196 INPUT RANGE (V)   | MAX198 INPUT RANGE (V)   |
|-------------|-------------|--------------------------|--------------------------|
| Short       | Short       | 0 to 5                   | 0 to V REF /2            |
| Short       | Open        | 0 to 10                  | 0 to V REF               |
| Open        | Short       | ±5                       | ±V REF /2                |
| Open        | Open        | ±10                      | ±V REF                   |

<!-- image -->

Table 4.  Channel Selection

| JU9 (A2)   | JU10 (A1)   | JU11 (A0)   | CHANNEL   |
|------------|-------------|-------------|-----------|
| Short      | Short       | Short       | CH0       |
| Short      | Short       | Open        | CH1       |
| Short      | Open        | Short       | CH2       |
| Short      | Open        | Open        | CH3       |
| Open       | Short       | Short       | CH4       |
| Open       | Short       | Open        | CH5       |

## Using an External Clock

As shipped from the factory, the MAX196 EV kit uses C1 as a timing capacitor for internal clock mode. To use an external clock, cut JU1 and apply the external clock source to the EXTCLK input pad. Start up the kit with JU4 (PD1) and JU5 (PD0) shorted.

## Evaluating the MAX198

To evaluate the MAX198, remove the MAX196 and replace it with a MAX198BCNI.

## Interfacing to a 16-Bit Bus

The MAX196/MAX198 are designed to connect directly to  a  16-bit  µP  bus  using  standard  chip-select (CS), read strobe (RD), and write strobe (WR) signals. JU2, JU3, and JU12 must be cut to disable the stand-alone circuit  (Table  5).  All  interface  signals  are  provided  on header  H1.  For  interface  details,  refer  to  the MAX196/MAX198 data sheet.

Table 5.  Demo Circuit Jumpers

| JU2   | JU3   | JU12   | MODE                               |
|-------|-------|--------|------------------------------------|
| Short | Short | Short  | Stand-alone demo                   |
| Open  | Open  | Open   | Connect to a user- provided system |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2.  MAX196 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 3.  MAX196 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX196 Evaluation Kit

Figure 4.  MAX196 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 5.  MAX196 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX196 Evaluation Kit

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

© 1996 Maxim Integrated Products