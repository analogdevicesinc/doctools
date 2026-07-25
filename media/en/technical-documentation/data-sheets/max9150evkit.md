<!-- lastmod 2022-08-04 -->
## General Description

The MAX9150 evaluation kit (EV kit) is a fully assembled and tested circuit board that simplifies the evaluation of the MAX9150 400Mbps, 10-port low-voltage differential signaling (LVDS) repeater. The MAX9150 accepts an LVDS signal and repeats it on 10 outputs. Output levels are LVDS into a double-terminated bus (100 Ω at each end of the differential bus for a total 50 Ω load). The EV kit  contains two independent circuits, each with a MAX9150 repeater, that can be linked using various media or tested independently. The outputs can be sampled through SMA connectors or category-5 twisted-wire pair. The two circuits on the EV kit require +3.3V power supplies to operate.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Kemet      | 864-963-6300 | 864-963-6521 |
| TDK        | 847-803-6100 | 847-803-6296 |

Note: Please indicate that you are using the MAX9150 when contacting these component suppliers.

| DESIGNATION                               |   QTY | DESCRIPTION                                                                  |
|-------------------------------------------|-------|------------------------------------------------------------------------------|
| C1, C11                                   |     2 | 10 µ F, 10V tantalum capacitors (B) AVX TAJB106M010 or Kemet T494B106K010AS  |
| C2, C5, C6, C12, C15, C16                 |     6 | 0.1 µ F, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104KT or equivalent |
| C3, C4, C13, C14                          |     4 | 0.01 µ F, 50V X7R ceramic capacitors (0603) TDK C1608X7RH103KT or equivalent |
| R1, R2, R21, R22, R31, R32, R34, R37, R40 |     9 | 49.9 Ω ± 1% resistors (0402)                                                 |

- ♦ Two Independent Repeater Circuits
- ♦ Link Testing with LVDS Signals
- ♦ Supports Testing of Various Media Coax Cable with SMA Connectors Twisted-Wire Pair PC Board Trace
- ♦ Independent Supplies Allow Common-Mode Testing
- ♦ Low-Voltage, Low-Power Operation
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX9150EVKIT | 0 ° C to +70 ° C | 28 TSSOP     |

## Component List

| R11-R20, R33, R35, R36, R38, R39   |   15 | 100 Ω ± 1% resistors (0402)    |
|------------------------------------|------|--------------------------------|
| R41, R42, R43                      |    0 | Not installed (0805)           |
| U1, U2                             |    2 | MAX9150EUI (28-pin TSSOP)      |
| INA1, INB1, INA2, INB2             |    4 | SMA PC-mount edge connectors   |
| OUTA1, OUTB1, OUTA2, OUTB2         |    4 | SMA PC-mount connectors        |
| JU1, JU18                          |    2 | 3-pin headers                  |
| JU12-JU17, JU21-JU25               |   11 | 2-pin headers                  |
| None                               |    4 | Shunts (JU1, JU16, JU17, JU18) |
| None                               |    1 | MAX9150 PC board               |
| None                               |    1 | MAX9150 data sheet             |
| None                               |    1 | MAX9150 EV kit data sheet      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

## Features

## MAX9150 Evaluation Kit

## Recommended Equipment

- ·
- DC power supplies: +3.3V ±0.3V, 200mA +3.3V ±0.3V, 200mA
- Pulse generator for LVDS signal input (e.g., HP 8131A)
- Oscilloscope (e.g., Tektronix 11801C)

## Quick Start

The MAX9150 EV kit is a fully assembled and tested surface-mount board. The EV kit contains two test circuits. Circuit 1, located on the lower half of the board, as shipped, is optimized for connection of category-5 cable. Circuit 2, located on the upper half of the board, is  configured  for  direct  probing,  category-5,  and  coax cable connections.

## Circuit 1 (Bottom Circuit)

Follow the steps below for circuit 1 operation. Do not turn on power supplies or enable pulse generator until all connections are completed:

- 1) Connect one +3.3V power supply to VCC1. Connect the ground terminal of this supply to GND1.
- 2) Set the pulse generator to generate an LVDS signal (this requires a noninverting and an inverting signal output from the pulse generator). For a nominal LVDS output, program two complementary singleended signals that transition between 1.375V and 1.025V with approximately 1ns transition time. Transition times should be matched to within 100ps.
- 3) Install a shunt on jumper JU16.
- 4) Connect the signal from the pulse generator to the input of circuit 1 (connect the noninverting signal to SMA connector INA1 and the inverting signal to SMA connector INB1).
- 5) Set the oscilloscope for LVDS signal input.
- 6) An oscilloscope probe can be used to confirm the output  signals  at  JU2-JU11.  On  connectors JU2-JU11, pin 1 is the noninverting output and pin 2 is the inverting output. Pin 3 is a ground connection.
- 7) Turn on the power supply.
- 8) Enable the pulse generator.
- 9) Enable the MAX9150 (U1) by connecting a shunt across pins 1 and 2 of jumper JU1.
- 10) Begin evaluating the output signals.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Circuit 2 (Top Circuit)

Follow the steps below for circuit 2 operation. Do not turn on power supplies or enable pulse generator until all connections are completed:

- 1) Connect one +3.3V power supply to VCC2. Connect the ground terminal of this supply to GND2.
- 2) Set the pulse generator to generate an LVDS signal (this requires a noninverting and an inverting signal output from the pulse generator). For a nominal LVDS output, program two complementary singleended signals that transition between 1.375V and 1.025V with approximately 1ns transition time. Transition times should be matched to within approximately 100ps.
- 3) Connect the signal from the pulse generator to the input of circuit 2 (connect the noninverting signal to SMA connector INA2 and the inverting signal to SMA connector INB2).
- 4) Set the oscilloscope for LVDS signal input.
- 5) Connect the oscilloscope to the LVDS output signal at the following connectors:
- a. To  evaluate  the  signal  with  coax  cable,  connect to  SMA connectors OUTA1 (noninverting) and OUTB1 (inverting), or to OUTA2 (noninverting) and OUTB2 (inverting). Use coax cables with a characteristic impedance of 50 Ω and parallel terminate with a 100 Ω resistor  at  the  far  end,  for  a total load of 50 Ω (including the 100 Ω termination at the driver output, R33 or R38).
7. b.An oscilloscope probe can be used to confirm the  output  signals  at  JU19  and  JU20.  For  JU19, pin 2 is the noninverting and pin 1 is the inverting signal. For JU20, pin 1 is the noninverting and pin 2 is the inverting signal. Pin 3 of JU19 and JU20 is a ground connection.
- c. To evaluate with a differential probe, connect the probe across JU13.
- 6) Turn on the power supply.
- 7) Enable the pulse generator.
- 8) Enable the MAX9150 (U2) by connecting a shunt across pins 1 and 2 of jumper JU18.
- 9) Begin evaluating the output signals.

<!-- image -->

## Detailed Description

The MAX9150 EV kit is a fully assembled and tested circuit board that simplifies the evaluation of the MAX9150 LVDS repeater. The MAX9150 accepts an LVDS input and repeats it on 10 output ports at a maximum rate of 400Mbps. The EV kit contains two independent circuits, each with a MAX9150 repeater. One circuit is located on the upper portion (circuit 2, Figure 2) and the other circuit  on  the  lower  portion  (circuit  1,  Figure  1)  of  the board. The two circuits can be linked by connecting an output signal from one circuit to the input of the second circuit.  Individual  outputs  can  be  measured through coax cable with SMA connectors or 100 Ω -impedance twisted-wire pair.

## Power Supplies

The MAX9150 EV kit contains two separate circuits with dedicated power and ground planes that can be operated independently. Independent power and ground planes allow measurements of circuit response to ground shift or other common-mode effects. Each circuit requires a +3.3V power supply that must be able to supply 200mA to each circuit. The board can be operated with a single +3.3V power supply (400mA) when evaluating the board in driver/receiver mode with a common ground. See the Driver/Receiver Circuit section.

## Table 1. Jumper Settings

| JUMPER     | STATUS   | PIN CONNECTION                                                                             | EV KIT OPERATION                                                                         |
|------------|----------|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| JU1        | 1 & 2    | PWRDN to VCC1.                                                                             | U1 is enabled.                                                                           |
| JU1        | 2 & 3    | PWRDN to GND1.                                                                             | U1 is disabled.                                                                          |
| JU14, JU23 | Closed   | INA1, INB1, INA2, and INB2 SMA connectors are terminated to ground with a 49.9 Ω resistor. | U1 and U2 inputs are terminated for single-ended input signals.                          |
| JU14, JU23 | Open     | None.                                                                                      | U1 and U2 receivers are terminated with 100 Ω for an LVDS signal.                        |
| JU15, JU24 | Closed   | INA1, INB1, INA2, and INB2 SMA connectors are connected to a common-mode bypass network.   | Provides common-mode bypass to the input signal.                                         |
| JU15, JU24 | Open     | None.                                                                                      | Differential termination only.                                                           |
| JU16       | Open     | VCC not connected.                                                                         | U1 is not connected to the power source.                                                 |
| JU16       | Closed   | VCC to VCC1.                                                                               | Power is supplied to U1.                                                                 |
| JU17       | Closed   | VCC1 and VCC2 power planes are connected together.                                         | Operable with one power supply (a short is required at R41 pads to connect the grounds). |
| JU17       | Open     | VCC1 and VCC2 power planes are isolated.                                                   | Circuit 1 and circuit 2 require separate power supplies.                                 |
| JU18       | 1 & 2    | PWRDN to VCC2.                                                                             | U2 is enabled.                                                                           |
| JU18       | 2 & 3    | PWRDN to GND2.                                                                             | U2 is disabled.                                                                          |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9150 Evaluation Kit

## Input Signal

The MAX9150 accepts an LVDS input. The differential high threshold is +100mV and the differential low threshold is -100mV. The input connectors for circuit 2 are SMA connectors labeled INA2 (noninverting) and INB2 (inverting). The input connectors for circuit 1 are SMA connectors labeled INA1 (noninverting) and INB1 (inverting).

The input signal can be monitored with a differential signal probe placed across jumpers JU22 and JU25 (circuit 2) or across jumpers JU12 and JU21 (circuit 1). Placing a shunt on jumper JU24 or JU15 increases the stability  of  the  differential  signal  by  filtering  out  common-mode AC signals.

To monitor a single-ended input signal when operating circuit  2,  place  a  shunt  on  JU23  and  place  a  signal probe across jumper JU22 or jumper JU25. Similarly, when operating circuit 1, place a shunt on JU14 to monitor the single-ended input signal at jumper JU12 or JU21. See Table 1 for jumper settings.

## Output Signal

The MAX9150 accepts one LVDS signal at its input and repeats it  on  10  output  ports  with  LVDS  drivers.  Each driver's output signal is composed of noninverting and inverting signals. In circuit 2, five drivers can be accessed through different connectors-four drivers

## MAX9150 Evaluation Kit

are terminated with 50 Ω resistors,  and  one  driver  can be connected to circuit 1's receiver. Of the five accessible drivers, two connect to SMA connectors, two can connect to shielded twisted-wire pair, and the fifth driver can be monitored with a differential signal probe. See Table 2 for the location of output signals, their corresponding drivers, and the type of connection required.

The 10 drivers of circuit 1 can be accessed at connectors JU2-JU11 with shielded twisted-pair cable. Pin 1 is the  noninverting signal, pin 2 is the inverting signal of connectors JU2-JU11, and pin 3 can be used to connect the cable's shield to ground.

## Driver/Receiver Circuit

A circuit 2 driver can be used to drive the receiver of circuit  1.  In  this  mode,  the  two  circuits'  power  and ground planes can be joined to operate the entire board with a single power supply. Use a 400mA supply in  this  joined  mode.  To  join  the  two  power  and  two ground planes, install a shunt across jumper JU17 and solder a short, or low-value (&lt;1 Ω )  resistor  across  the R41 pads.

To drive the receiver of circuit 1, connect a differential output signal pair (OUTA1/OUTB1, OUTA2/OUTB2, JU19, or JU20) to the SMA input connectors of circuit 1 (INA1/INB1). See Table 2 to match the noninverting and inverting outputs and inputs. An alternate way of operating the board in driver/receiver mode is by bridging the  PC board traces from the driver in circuit 2 to the receiver in circuit 1. To bridge the PC board trace connections, solder a short across R42 and R43 pads. Note: Verify  that  a  shunt  is  not  placed  on  JU14  when circuit  1  is  receiving  an  LVDS  signal  from  circuit  2  to prevent overloading the LVDS driver.

## MAX9150 Enable/Disable

The MAX9150 is enabled by applying a logic high to the PWRDN pin and is disabled by applying a logic low. On the MAX9150 EV kit, this can be accomplished by configuring JU18 for circuit 2, or JU1 for circuit 1. To enable the respective circuit, install a shunt across pins 1 and 2 of the jumper. To disable the circuit, install the shunt across pins 2 and 3. See Table 1 for jumper settings. The circuits can also be enabled and disabled by applying a CMOS logic signal to the PWRDN1 pad or PWRDN2 pad. Note: If a CMOS logic signal is connected to the PWRDN1 or PWRDN2 pad , verify that shunts are not installed on the respective jumper.

## Terminations and Layout

All  signal  lines  are  50 Ω controlled-impedance traces. All of the differential output signal traces are terminated with 100 Ω resistors, except the output at JU13, which is terminated with a 50 Ω resistor. Each differential output pair  is  laid  out  with  equal  trace  length  having  a  maximum length difference of 13mils. To minimize noise interference, the EV kit is a four-layer board. When testing a twisted-wire pair, terminate with a 100 Ω resistor at the far end of the wire.

Table 2. Circuit 2 Output Signals and Connections

| DRIVER   | NONINVERTING SIGNAL   | INVERTING SIGNAL   | CONNECTOR                                   |
|----------|-----------------------|--------------------|---------------------------------------------|
| 1        | OUTA1                 | OUTB1              | SMA connector                               |
| 2*       | Pin 2, JU19           | Pin 1, JU19        | Plated through holes for twisted- wire pair |
| 3*       | Pin 1, JU20           | Pin 2, JU20        | Plated through holes for twisted- wire pair |
| 4        | OUTA2                 | OUTB2              | SMA connector                               |
| 5        | JU13                  | JU13               | Differential signal probe pins              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9150 Evaluation Kit

Figure 1. MAX9150 EV Kit Schematic (Circuit 1)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9150 Evaluation Kit

Figure 2. MAX9150 EV Kit Schematic (Circuit 2)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 3. MAX9150 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9150 Evaluation Kit

Figure 4. MAX9150 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9150 Evaluation Kit

Figure 5. MAX9150 EV Kit PC Board Layout-Ground Planes

<!-- image -->

8

Figure 6. MAX9150 EV Kit PC Board Layout-Power Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 7. MAX9150 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX9150 Evaluation Kit

Figure 8. MAX9150 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9