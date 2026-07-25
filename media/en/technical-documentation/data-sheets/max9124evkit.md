<!-- lastmod 2022-08-02 -->
## General Description

The MAX9124 evaluation kit (EV kit) contains a low-voltage differential signaling (LVDS) quad differential line driver  (MAX9124) and receiver (MAX9125). The differential line driver accepts LVTTL or LVCMOS inputs and translates them to LVDS output signals. The receiver accepts LVDS inputs and translates them to singleended LVCMOS outputs. Both circuits operate with high data rates and low power dissipation.

The MAX9124 EV kit is designed with 50 Ω controlledimpedance traces in a four-layer PC board. It is specially  designed for direct differential probing of the LVDS I/O. Connection points are provided for the attachment of a cable to carry the LVDS signals.

The EV kit operates from a single 3.3V supply. In addition, a 1.2V power-supply input is provided for testing the driver's high-impedance propagation delays. A separate supply option for the driver and receiver allows testing of the common-mode performance of the receiver.

The MAX9124 EV kit can also be used to evaluate the MAX9126, which is the same as the MAX9125 but with integrated 115 Ω (nominal) termination resistors. Additional pads on the board are provided for dynamically driving the enable and disable control signals with a pulse generator.

| DESIGNATION                                    |   QTY | DESCRIPTION                                                                           |
|------------------------------------------------|-------|---------------------------------------------------------------------------------------|
| C1, C4, C9                                     |     3 | 10µF ± 10%, 10V tantalum capacitors (case B) AVX TAJB106K010R or Kemet T494B106K010AS |
| C2, C11                                        |     2 | 1000pF ± 10%, 50V X7R ceramic chip capacitors (0402) Murata GRM36X7R102K050A          |
| C3, C5-C8, C10                                 |     6 | 0.1µF ± 10%, 16V X7R ceramic chip capacitors (0603) Murata GRM39X7R104K016A           |
| C12-C23                                        |    12 | 5.1pF ± 0.1pF, 50V ceramic chip capacitors (0402) Murata GRM36COG5R1B050A             |
| R1, R2, R3, R5-R10, R12-R16, R18-R21, R23, R24 |    20 | 49.9 Ω ± 1% resistors (0402)                                                          |
| R4, R11, R17, R22                              |     0 | Not installed, open resistor pads (0402)                                              |
| R25-R28                                        |     4 | 100 Ω ± 1% resistors (0402)                                                           |
| R29-R32                                        |     4 | 2.0k Ω ± 1% resistors (0603)                                                          |
| R33-R40                                        |     8 | 0 Ω resistors (0603)                                                                  |

<!-- image -->

## Features

- ♦ Independent Quad Driver (MAX9124) and Quad Receiver (MAX9125/MAX9126) Circuits
- ♦ &gt;500Mbps (250MHz) Switching Rate (MAX9125/MAX9126)
- &gt;800Mbps (400MHz) Switching Rate (MAX9124)
- ♦ Supports Testing of Twisted-Pair Cables
- ♦ 50 Ω Controlled-Impedance Signal Traces
- ♦ 16-Pin TSSOP Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX9124EVKIT | 0°C to +70°C | 16 TSSOP     |

Note: To evaluate the MAX9126, request a MAX9126EUE free sample with the MAX9124EVKIT.

## Component List

| DESIGNATION                               |   QTY | DESCRIPTION                                 |
|-------------------------------------------|-------|---------------------------------------------|
| R41-R48                                   |     0 | Not installed, open resistor pads (0603)    |
| R49, R50                                  |     0 | Not installed, shorted resistor pads (0603) |
| JU1-JU6, JU15-JU20                        |    12 | 3-pin headers                               |
| JU7-JU14                                  |     8 | 4-pin headers                               |
| JU21-JU28                                 |     8 | 2-pin headers                               |
| DEN, DEN , REN, REN                       |     0 | Not installed, SMA edge-mount connectors    |
| DIN1-DIN4, RIN1- to RIN4-, RIN1+ to RIN4+ |    12 | SMA edge-mount connectors                   |
| U1                                        |     1 | MAX9124EUE (16-pin TSSOP)                   |
| U2                                        |     1 | MAX9125EUE (16-pin TSSOP)                   |
| None                                      |     8 | Shunts                                      |
| None                                      |     1 | MAX9124 PC board                            |
| None                                      |     1 | MAX9124 EV kit data sheet                   |
| None                                      |     1 | MAX9124/MAX9125 data sheet                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX9124 Evaluation Kit

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-943-0690 | 803-626-3123 |
| Kemet      | 408-986-0424 | 408-986-1442 |
| Murata     | 814-237-1431 | 814-238-0490 |

Note: Please indicate that you are using the MAX9124/MAX9125/ MAX9126 when contacting these component suppliers.

## Quick Start

The MAX9124 EV kit is a fully assembled and tested surface-mount board. The EV kit contains an LVDS differential  line  driver  located  on  the  upper-half  circuit, and receiver located on the lower-half circuit.

Recommended equipment includes:

- DC power supplies: one 3.3V ±0.3V, 400mA (or two 3.3V ±0.3V, 200mA supplies for powering the driver and receiver independently with R49 and R50 shorts cut open)
- Signal generator for LVDS signal input (e.g., HP 8131A)
- Differential probe (e.g., Tektronix P6248)
- Digital sampling oscilloscope or logic analyzer (e.g., Tektronix 11801C)

Evaluating the Driver (MAX9124) Circuit Follow the steps below to verify driver circuit operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that a shunt is across pins 1 and 2 of JU2 (EN).
- 2) Connect a differential probe across pins 2 and 3 of JU7.
- 3) Connect a function generator that provides a square wave to the input of the driver circuit SMA connector DIN1 with the following settings:
- a) Frequency = 10MHz
- b) VIL = 0.00V, VIH = 3.00V
- c) Duty cycle = 50%
- 4)  Connect a 3.3V, 400mA power supply to the VCC1 pad. Connect the supply ground to the GND pad closest to VCC1.
- 5) Turn on the power supply, enable the function generator,  and  verify  the  differential  output  signal  VOD = (OUT1+ - OUT1-).

Note: For connections to verify every channel, see Table 2.

## Evaluating the Receiver (MAX9125) Circuit

Follow the steps below to verify receiver circuit operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that a shunt is across jumper JU16 (EN) pins 1 and 2.
- 2) Connect a scope probe across JU25 (OUT1) to observe the output signal.
- 3)  Connect a function generator that provides square waves to the input of the receiver circuit (connect the noninverting signal to SMA connector RIN1+ and the inverting signal to SMA connector RIN1-) with the following settings:
- a) Frequency = 10MHz
- b) VIL = 1.10V, VIH = 1.30V
- c) Duty cycle = 50%
- 4)  Connect a 3.3V, 400mA power supply to the VCC2 pad. Connect the supply ground to the GND pad closest to VCC2.
- 5)  Turn  on  the  power supply and enable the function generator, then verify the output signal (OUT1) on the scope.

Note: For connections to verify every channel, see Table 3.

## Detailed Description

The MAX9124 EV kit is a fully assembled and tested circuit board that includes a quad LVDS differential line driver and receiver. The EV kit has two independent circuits.  The  upper-half  circuit  is  a  driver  circuit  and  the lower-half circuit  is  a  receiver  circuit.  The  two  circuits can be operated together or separately. Both circuits' I/Os are specially designed for direct probing.

The EV kit is a four-layer PC board with 50 Ω controlledimpedance traces for all input signal traces with 49.9 Ω termination resistors. The two circuits can be linked by connecting an output signal from the driver circuit to the input of the receiver circuit. Each differential input pair traces are laid out with less than 100mil length difference.

## Using Separate Power Supplies

The MAX9124 EV kit contains two separate circuits that can be operated with independent supplies after cutting  open the shorts at R49 and R50. Independent power and ground planes allow measurements of the receivers' response to ground shift or other commonmode effects. Each circuit requires a 3.3V, 200mA power supply. In addition, if high-impedance delay testing is  to  be  performed, a 1.2V voltage supply is required.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Input Signal

The MAX9124 EV kit provides internal DC or external AC input signals to the driver circuit and two kinds of input media, SMA coax or twisted-pair cable, to the receiver circuit.

## Driver Circuit Input

The MAX9124 EV kit accepts both internal (DC) and external (AC) inputs to the driver circuit. Before driving AC external input signals to DIN1-DIN4 to the driver circuit, verify there are no shunts across JU1, JU3, JU4, and JU6 (Table 1). JU1, JU3, JU4, and JU6 can create DC internal input signals to the driver. To use JU1, JU3, JU4, and JU6 to create DC input signals, make sure termination resistors R1, R7, R8, and R14 are removed.

## Receiver Circuit Input

The MAX9124 EV kit also provides two interconnect options to the receiver circuit: coaxial cable and twist-

## Table 1. Using JU1, JU3, JU4, and JU6 to Provide Input Signals to the Driver Circuit

| JUMPER   | SHUNT LOCATION   | IN PIN            | DRIVER INPUT SIGNAL   |
|----------|------------------|-------------------|-----------------------|
| JU1      | 1 and 2          | Connected to V CC | IN1 = high            |
| JU1      | 2 and 3          | Connected to GND  | IN1 = low             |
| JU3      | 1 and 2          | Connected to V CC | IN2 = high            |
| JU3      | 2 and 3          | Connected to GND  | IN2 = low             |
| JU6      | 1 and 2          | Connected to V CC | IN3 = high            |
| JU6      | 2 and 3          | Connected to GND  | IN3 = low             |
| JU4      | 1 and 2          | Connected to V CC | IN4 = high            |
| JU4      | 2 and 3          | Connected to GND  | IN4 = low             |

Table 2. Driver Probing Connections

| CHANNEL NAME   | IC OUTPUT PIN NAME   | TESTING POINT   | PROBING HEADER (4 PIN), PIN NO.   | PROBING (OUT+ - OUT-)      |
|----------------|----------------------|-----------------|-----------------------------------|----------------------------|
| Channel 1      | OUT1+                | DOUT1+          | JU7, pins 2 (+) and 1 (-)         | JU7, pins 2 (+) and 3 (-)  |
| Channel 1      | OUT1-                | DOUT1-          | JU7, pins 3 (+) and 4 (-)         | JU7, pins 2 (+) and 3 (-)  |
| Channel 2      | OUT2+                | DOUT2+          | JU8, pins 2 (+) and 1 (-)         | JU8, pins 3 (+) and 2 (-)  |
| Channel 2      | OUT2-                | DOUT2-          | JU8, pins 3 (+) and 4 (-)         | JU8, pins 3 (+) and 2 (-)  |
| Channel 3      | OUT3+                | DOUT3+          | JU10, pins 2 (+) and 1 (-)        | JU10, pins 3 (+) and 2 (-) |
| Channel 3      | OUT3-                | DOUT3-          | JU10, pins 3 (+) and 4 (-)        | JU10, pins 3 (+) and 2 (-) |
| Channel 4      | OUT4+                | DOUT4+          | JU9, pins 2 (+) and 1 (-)         | JU9, pins 2 (+) and 3 (-)  |
| Channel 4      | OUT4-                | DOUT4-          | JU9, pins 3 (+) and 4 (-)         | JU9, pins 2 (+) and 3 (-)  |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9124 Evaluation Kit

ed-pair cable. When 49.9 Ω termination resistors R15, R16, R18-R21, and R23, R24 are installed, the fail-safe feature is disabled. To test the fail-safe feature, remove termination resistors R15, R16, R18-R21, and R23, R24. Additional paired testing points (IN1+, IN1-) (IN2+, IN2-) (IN3+, IN3-) (IN4+, IN4-) are provided for the twisted-pair cable connections. When twisted-pair cables are used as the input media (twisted-pair cables are soldered on testing points IN1-, IN1+, etc.), remove all 0 Ω resistors R33-R40 to avoid signal reflection from the traces that connect 0 Ω resistors to SMA connectors.

## Output Signal

The MAX9124 EV kit is designed for direct probing of all  output  signals.  Additional paired testing points (DOUT1-, DOUT1+), (DOUT2+, DOUT2-), (DOUT3+, DOUT3-), (DOUT4+, DOUT4-) are also provided for connection of twisted-pair cables and probing of the driver outputs.

## Probing Connections

The MAX9124 EV kit is designed for direct differential probing connections. Tables 2 and 3 list the direct probing connections on the respective pins for all input and output signals and their respective testing points.

## Enable/Disable

The MAX9124 EV kit has two enables and two disables. All  enables and disables can be controlled by either jumpers or external signals. Jumpers JU2, JU5, JU16, and JU19 provide a DC logic signal to driver's EN and EN and receiver's EN and EN ,  respectively  (Table  4). Table 5 is the enable/disable truth table.

The  EV  kit  can  also  be  controlled  by  external enable/disable signal(s). To use external signals to control enable and disable, SMA connectors need to

## MAX9124 Evaluation Kit

Table 3. Receiver Probing Connections

| CHANNEL NAME   | IC OUTPUT PIN NAME   | TESTING POINT   | PROBING HEADER (4 PIN), PIN NO.   | OUTPUT SIGNAL   | PROBING HEADER (2 PIN)   |
|----------------|----------------------|-----------------|-----------------------------------|-----------------|--------------------------|
| Channel 1      | IN1-                 | IN1-            | JU11, pins 2 (+) and 1 (-)        | OUT1            | JU25                     |
| Channel 1      | IN1+                 | IN1+            | JU11, pins 3 (+) and 4 (-)        | OUT1            | JU25                     |
| Channel 2      | IN2+                 | IN2+            | JU12, pins 2 (+) and 1 (-)        | OUT2            | JU26                     |
| Channel 2      | IN2-                 | IN2-            | JU12, pins 3 (+) and 4 (-)        | OUT2            | JU26                     |
| Channel 3      | IN3-                 | IN3-            | JU14, pins 3 (+) and 4 (-)        | OUT3            | JU28                     |
| Channel 3      | IN3+                 | IN3+            | JU14, pins 2 (+) and 1 (-)        | OUT3            | JU28                     |
| Channel 4      | IN4+                 | IN4+            | JU13, pins 3 (+) and 4 (-)        | OUT4            | JU27                     |
| Channel 4      | IN4-                 | IN4-            | JU13, pins 2 (+) and 1 (-)        | OUT4            | JU27                     |

be added on DEN, REN, DEN ,  and REN pads with 49.9 Ω termination resistors R4, R17, R11, and R22. Before connecting external signals to DEN, REN, DEN , REN ,  verify there are no shunts across jumpers JU4, JU17, JU11, and JU22.

## Evaluating Driver and Receiver Together

## Table 4. JU2, JU5, JU16, and JU19 Setting and Enable/Disable Logic Level

| JUMPER    | SHUNT LOCATION             | ENABLE/DISABLE LOGIC LEVEL   |
|-----------|----------------------------|------------------------------|
| JU2, JU5, | 1 and 2, connected to V CC | High                         |
| JU16,     | 2 and 3, connected to GND  | Low                          |
| JU19      | Open, no shunt             | Float                        |

## Table 5. Enable and Disable Truth Table

| DEN (REN)                                   | DEN ( REN )                                 | OPERATION FUNCTION   |
|---------------------------------------------|---------------------------------------------|----------------------|
| Low                                         | High                                        | U1 (U2) disable      |
| All other combinations (including floating) | All other combinations (including floating) | U1 (U2) enable       |

To evaluate the LVDS differential line driver (MAX9124) and receiver (MAX9125) together, remove 0 Ω resistors R33-R40 at the input of the receiver circuit, and remove capacitors C12-C19 and 49.9 Ω termination resistors R2, R3, R5, R6, R9, R10, R12, and R13 at the output of the driver. Use 100 Ω twisted-pair cable (such as CAT5) to connect the driver outputs to the receiver inputs. Connect one end of the twisted-pair cable to test point DOUT1- and another end to IN1-, etc. Connect function generator(s) to the driver input(s), and probe at receiver or driver I/Os.

Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1)  Verify  shunts  across  jumper JU2 (DEN) and JU16 (REN) pins 1 and 2.
- 2) Connect a function generator to the driver input DIN1 with the following settings:
- a) Frequency = 10MHz
- b) VIL = 0.00V, VIH = 3.00V
- c) Duty cycle = 50%
- 3) Connect a scope probe across jumper JU25 (OUT1). Use 100 Ω twisted-pair cable to connect the driver outputs to the receiver inputs as shown in Figure 1.
- 4)  Single power supply (for the normal operation): Connect a 3.3V, 400mA power supply to VCC1. Connect the supply ground to the GND pad closest to VCC1.

Optional separate power supplies (for testing receiver common-mode response): Connect 3.3V, 200mA power supplies to VCC1 and VCC2. Connect the supply grounds to the GND pads closest VCC1 and VCC2, respectively. Be sure R49 and R50 shorts are cut open.

- 5)  Turn  on  the  power supply (supplies), enable the function generator, and verify the output.

Note: For connections to verify every channel, see Tables 2 and 3.

## Evaluating MAX9126

The MAX9124 EV kit can also evaluate the MAX9126, a differential  line  receiver  with  115 Ω internal  termination

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9124 Evaluation Kit

Figure 1. Twisted-Pair Cable Interconnect Diagram

<!-- image -->

resistors.  To  evaluate  the  MAX9126,  replace MAX9125EUE with a MAX9126EUE and remove the external 100 Ω resistors R25 to R28.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9124 Evaluation Kit

Figure 2. MAX9124 EV Kit Schematic (Driver Circuit)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9124 Evaluation Kit

<!-- image -->

Figure 3. MAX9124 EV Kit Schematic (Receiver Circuit)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9124 Evaluation Kit

<!-- image -->

Figure 4. MAX9124 EV Kit PC Component Placement Guide-Component Side

Figure 5. MAX9124 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6. MAX9124 EV Kit PC Board Layout-Inner Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 7. MAX9124 EV Kit PC Board Layout-Inner Layer 3

<!-- image -->

## MAX9124 Evaluation Kit

Figure 8. MAX9124 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600