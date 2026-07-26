<!-- lastmod 2022-08-03 -->
## Not Recommended for New Designs

This product was manufactured for Maxim by an outside wafer foundry using a process that is no longer available.  It is not recommended for new designs. The data sheet remains available for existing users.

A Maxim replacement or an industry second-source may be available. Please see the QuickView data sheet for this part or contact technical support for assistance.

[For further information, contact Maxim's Applications Tech Support.](http://www.maxim-ic.com/support/request/new.mvp)

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX459 evaluation kit (EV kit) simplifies the evaluation  of  the  MAX458 and MAX459 video crosspoint switches. The MAX459 is already installed and a sample MAX458 can be ordered from Maxim. Simply replace the MAX459 with the MAX458; no other changes are necessary.

The kit includes an assembled printed circuit board, a 5 1/4" program disk, and a data sheet. This manual provides easy instructions for using the EV kit. Separate sections describe driving coaxial cables, controlling serial/parallel address modes, and daisy chaining multiple EV kits.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| LABEL              |   QTY | COMPONENT DESCRIPTION           |
|--------------------|-------|---------------------------------|
| U1                 |     1 | Maxim MAX459CQH                 |
| C1, C2             |     2 | 10 m F, 10V tantalum capacitors |
| C3, C4             |     2 | 0.1 m F ceramic capacitors      |
| R1-R12             |    12 | 75 W , 5% resistors             |
| R13, R14           |     2 | 50k W , 5% SIP resistors        |
| R15, R16, R17      |     3 | 500 W , 5% SIP resistors        |
| SW1                |     1 | 12-position DIP switch          |
| J1                 |     1 | 26-pin male connector           |
| IN0-IN7, OUT0-OUT3 |    12 | BNC jacks                       |

## MAX459 Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 100MHz Bandwidth (MAX458) 90MHz Bandwidth (MAX459)
- ' Low Differential Gain/Phase Error
- ' 75 Output Impedance
- ' 300V/ s Slew Rate
- ' 70ns Channel Switching Time
- ' High-Z Amplifier Output Capability
- ' 16-Bit Serial and 6-Bit Parallel Address Modes
- ' PC-Compatible Software for Controlling Serial and Parallel Address Modes

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE   | BOARD TYPE    |
|-----------------|---------------|---------------|
| MAX459EVKIT-PLC | 0°C to +70°C  | Surface Mount |

Note: To evaluate the MAX458, request a MAX458CQH sample.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX459 EV kit is fully assembled and tested. To verify board functionality, follow these quick start instructions. Do not turn on the power supply until all connections are completed.

- 1) Connect a +5V supply to the pad marked V CC . Connect a -5V supply to the pad marked V EE . Connect power supply ground to the pad marked GND.
- 2) Connect the output marked OUT0 to an oscilloscope through a terminated 75 W cable.
- 3) Set all logic control switches on SW1 to logic low, except -C - S -, which should be set to logic high.
- 4) Turn on the power supply.
- 5) Apply a signal ( -1.25V max) to the BNC jack input marked IN0.
- 6) Verify the output signal on the oscilloscope.
- 7) Refer to the Controlling Parallel/Serial Modes section for changing address modes.

Call toll free 1-800-998-8800 for free samples or literature.

## MAX459 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX458/MAX459 operate on -5V, allowing output signal levels of -2.5V. BNC jacks are provided for all input and output signals. Design architecture ensures that no two inputs will be shorted together. And, a digitally controlled shutdown mode reduces power consumption.

The parallel address mode can be set manually or through software.  And, multiple EV boards can be daisy-chained to form larger switch arrays.

## Driving Coaxial Cables

High-speed performance, excellent output current, and an internally fixed gain of 2V/V make the MAX459 ideal for driving 50 Ω or 75 W back-terminated coaxial cables.

The EV kit is configured with 75 W terminating resistors on all inputs, and 75 W back-terminating resistors on all outputs for 75 W coaxial-cable matching.

Using the MAX459 results in an overall gain of one at the terminated cable's output. With the MAX458 installed,  the  overall  gain  is  reduced  to  one-half  the input signal when driving a terminated cable.

## Layout Considerations

The MAX459 EV kit layout is optimized for high-speed signals. Each signal trace is kept the same length and as short as possible to maintain phase relationship and minimize inductance. Separate AC grounds surround each signal trace to reduce coupling. Further layout recommendations can be found in the Grounding and Bypassing,  PC  Board  Layout section  of  the MAX458/MAX459 data sheet.

## Controlling Parallel/Serial Modes

A digital interface for parallel address modes can be established manually with dip switches or with PC-compatible software. Serial-interface control is established only through serial software (see the Software Control section). For details on the operation and for truth tables, refer to the Digital Section-Parallel/Serial Mode sections of the MAX458/MAX459 data sheet.

2

## Manual Control

Dip switch SW1 provides manual control of the logic inputs in parallel mode. All logic input lines have 50k W pull-up resistors to +5V.

- 1) Set all switches on SW1 to logic low, except CS, UPDATE, and WR, which should be set to logic high.
- 2) Select an output amplifier with switches A0 and A1. To disable an output amplifier, set D3 to logic high.
- 3) Select an input for the output selected in step 2 with switches D0-D2.
- 4) Pulse WR low to latch input registers.
- 5) Pulse UPDATE low to latch the switch registers and update the outputs.

Refer to text under Digital Section-Parallel Mode and Tables 1-3 of the MAX458/MAX459 data sheet for more details of operation and truth table. The EV kit will not respond properly to manual control if the interface cable (as described below) connects the board to the parallel port of the PC.

## Software Control

Applications software comes with the MAX459 EV kit for programming serial  or  parallel  address  modes. 459EVKIT.BAS is the source code written in Microsoft QuickBasic. 459EVKIT.EXE is the compiled program that is  executable from the DOS command line. It uses the computer's 'LPT1' output to interface to the EV board. Follow the instructions below for serial or parallel digital control:

- 1) Set all switches on SW1 high (except SHDN)  prior to starting the computer program.
- 2) Connect an interface cable from the computer's parallel port to the evaluation board. Recommended cable and connectors are:

26-conductor ribbon cable

D-subminiature 25-pin, male,

crimp-type connector

26-pin IDC crimp-type socket connector

The EV kit board and software are designed for a 'straight-through' cable configuration. Table 1 shows the pin assignments for the cables.

- 3) Load the disk and type the command 459EVKIT.
- 4) Select serial or parallel address mode.

Once the user selects a mode, the program displays a valid list of input commands. The program displays the current state of the input and switch registers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1.  Cable Pin Assignments

| Parallel Port (LPT1)   | Parallel Port (LPT1)   | EV Kit Board (J1)                  | EV Kit Board (J1)         |
|------------------------|------------------------|------------------------------------|---------------------------|
| Pin                    | Signal                 | Pin                                | Signal                    |
| 1                      | Strobe                 | 1                                  | - W - R -                 |
| 2                      | Data Bit 0             | 3                                  | D0                        |
| 3                      | Data Bit 1             | 5                                  | D1                        |
| 4                      | Data Bit 2             | 7                                  | D2                        |
| 5                      | Data Bit 3             | 9                                  | D3                        |
| 6                      | Data Bit 4             | 11                                 | A0                        |
| 7                      | Data Bit 5             | 13                                 | A1                        |
| 8                      | Data Bit 6             | 15                                 | DIN                       |
| 9                      | Data Bit 7             | 17                                 | SCLK                      |
| 14                     | Auto Feed              | 2                                  | - U - P - D - A - T - E - |
| 16                     | Init. Prt.             | 6                                  | - C - S -                 |
| 17                     | Select                 | 8                                  | - C - E -                 |
| 10                     | Ack                    | 19                                 | No Connect                |
| 11                     | Busy                   | 21                                 | No Connect                |
| 12                     | Paper End              | 23                                 | No Connect                |
| 13                     | Select In              | 25                                 | No Connect                |
| 15                     | Error                  | 4                                  | No Connect                |
| 18-25                  | Bit 0-7 GND            | 10, 12, 14, 16, 18, 20, 22, 24, 26 | GND                       |

## Parallel Address Mode

There are 4 amplifiers that can be configured individually as follows:

- 1) Select a valid amplifier (0-3) and a valid input (0-7).
2. With C - E -low and -W R -high, the program presents the input/output information to the chip at A0, A1 and D0-D3. The program pulses -W R -low as each input is selected, and the data is then latched into the input registers.
- 2) To latch the switch registers and update the outputs, select the latch command code L. This pulses the -U - P - D - A - T - E -line low.
- 3) To disable the selected amplifier, select D. The program places D3 high and pulses -W R -low. Select L to latch the data.

<!-- image -->

## MAX459 Evaluation Kit

During parallel mode, the program keeps -C - S -high and SCLK and DIN low.

Input Codes:

- 0-7 Sets the selected input channel and output amplifier (0-3 only).
- L Latches switch registers and updates outputs.
- D Disables specified output amplifier.
- E Exits program.

## Serial Address Mode

In  serial  address  mode,  amplifiers  0-3  are  configured with 16 bits of data in 4-bit blocks (D3-D0) as follows:

- 1) Enter four input settings to set up the amplifiers.
- 2) Update the outputs to the current input settings, by selecting latch command L. The program then pulses -C - S -high. Outputs remain unchanged until the rising edge of -C - S -.
- 3) To disable an output, select D.

Input Codes:

- 0-7 Sets the selected input channel.
- L Latches switch registers and update outputs.
- D Disables output amplifier.
- E Exits program.

During serial mode, the program keeps -W R -, -U - P - D - A - T - E -, and -C - E -high.

## Daisy-Chain Configuration

Multiple EV boards can be daisy-chained and separated in serial address mode to form larger switch arrays. To form a chain:

- 1) Connect DOUT of the first board to DIN of the second board.
- 2) Tie -C - S -from each board together and SCLK from each board together, as shown in Figure 12 of the MAX458/MAX459 data sheet.

The boards will be programmed in a first-in, first-out (FIFO) manner. For example, the second board in the chain will receive its first 4-bit block when the first board receives its fifth 4-bit block.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX459 Evaluation Kit

Figure  1. MAX459 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX459 Evaluation Kit

Figure  2. MAX459 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX459 Evaluation Kit

Figure  3. MAX459 EV Kit Component Placement Guide-Solder Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure  4. MAX459 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX459 Evaluation Kit

Figure  5. MAX459 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

- © 1994 Maxim Integrated Products