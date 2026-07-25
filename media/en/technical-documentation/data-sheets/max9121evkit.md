<!-- lastmod 2022-08-04 -->
## General Description

The MAX9121 evaluation kit (EV kit) contains a flowthrough low-voltage differential signaling (LVDS) quad differential  line  driver  (MAX9123)  and  receiver (MAX9121). The differential line driver accepts LVTTL or LVCMOS inputs and translates them to LVDS output signals.  The  receiver  accepts LVDS inputs and translates them to single-ended LVCMOS outputs. Both circuits operate with high data rates and low power dissipation.

The MAX9121 EV kit is designed with 50 Ω controlledimpedance traces in a four-layer PC board. It is specially  designed for direct differential probing of the LVDS I/O. Connection points are provided for the attachment of a cable to carry the LVDS signals.

The EV kit operates from a single 3.3V supply. In addition, a 1.2V power-supply input is provided for testing the driver's high-impedance propagation delays. A separate supply option for the driver and receiver allows testing of the common-mode performance of the receiver.

The MAX9121 EV kit can also be used to evaluate the MAX9122, which is the same as the MAX9121 but with integrated 107 Ω (nominal) termination resistors. Additional pads on the board are provided for dynamically driving the enable and disable control signals with a pulse generator.

| DESIGNATION      |   QTY | DESCRIPTION                                                                           |
|------------------|-------|---------------------------------------------------------------------------------------|
| C1, C4, C9       |     3 | 10µF ± 10%, 10V tantalum capacitors (Case B) AVX TAJB106K010R or Kemet T494B106K010AS |
| C2, C11          |     2 | 1000pF ± 10%, 50V X7R ceramic chip capacitors (0402) Murata GRM36X7R102K050A          |
| C3, C5-C8, C10   |     6 | 0.1µF ± 10%, 16V X7R ceramic chip capacitors (0603) Murata GRM39X7R104K016A           |
| C12-C23          |    12 | 10pF ± 0.1pF, 50V ceramic chip capacitors (0402) Murata GRM36COG100B050A              |
| R1, R6, R23, R24 |     0 | Not installed, open resistor pads (0402)                                              |
| R2-R5, R7-R22    |    20 | 49.9 Ω ± 1% resistors (0402)                                                          |
| R25-R28          |     4 | 100 Ω ± 1% resistors (0402)                                                           |
| R29-R32          |     4 | 2.0k Ω ± 1% resistors (0603)                                                          |
| R33-R40          |     8 | 0 Ω resistors (0603)                                                                  |

<!-- image -->

## Features

- ♦ Independent Driver (MAX9123) and Quad Receiver (MAX9121/MAX9122) Circuits
- ♦ &gt;500Mbps (250MHz) Switching Rate (MAX9121/MAX9122)
- ♦ &gt;800Mbps (400MHz) Switching Rate (MAX9123)
- ♦ Supports Testing of Twisted-Pair Cables
- ♦ 50 Ω Controlled-Impedance Traces
- ♦ 16-Pin TSSOP Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX9121EVKIT | 0°C to +70°C | 16 TSSOP     |

Note: To evaluate the MAX9122, request a MAX9122EUE free sample with the MAX9121EVKIT.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-943-0690 | 803-626-3123 |
| Kemet      | 408-986-0424 | 408-986-1442 |
| Murata     | 814-237-1431 | 814-238-0490 |

Note: Please indicate that you are using the MAX9121/MAX9122/ MAX9123 when contacting these component suppliers.

## Component List

| DESIGNATION                                |   QTY | DESCRIPTION                                 |
|--------------------------------------------|-------|---------------------------------------------|
| R41-R48                                    |     0 | Not installed, open resistor pads (0603)    |
| R49, R50                                   |     0 | Not installed, shorted resistor pads (0603) |
| JU1-JU6, JU15-JU20                         |    12 | 3-pin headers                               |
| JU7-JU14                                   |     8 | 4-pin headers                               |
| JU21-JU28                                  |     8 | 2-pin headers                               |
| DEN, DEN , REN, REN                        |     0 | Not installed, SMA edge-mount connectors    |
| DIN1-DIN 4, RIN1- to RIN4-, RIN1+ to RIN4+ |    12 | SMA edge-mount connectors                   |
| U1                                         |     1 | MAX9123EUE (16-pin TSSOP)                   |
| U2                                         |     1 | MAX9121EUE (16-pin TSSOP)                   |
| None                                       |     8 | Shunts (JU1, JU6, JU15-JU20)                |
| None                                       |     1 | MAX9121 PC board                            |
| None                                       |     1 | MAX9121 EV kit data sheet                   |
| None                                       |     1 | MAX9121/MAX9122 data sheet                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX9121 Evaluation Kit

## Quick Start

The MAX9121 EV kit is a fully assembled and tested surface-mount board. The EV kit contains an LVDS differential  line  driver  located on the upper-half circuit, and receiver located on the lower-half circuit.

## Recommended Equipment

- DC power supplies: One 3.3V ±0.3V, 400mA or Two 3.3V ±0.3V, 200mA supplies for operating the driver and receiver with independent supplies (with R49 and R50 shorts cut open)
- Signal generator for LVDS signal input (e.g., HP 8131A)
- Differential probe (e.g., Tektronix P6248)
- Digital sampling oscilloscope or logic analyzer (e.g., Tektronix 11801C)

## Table 1. Input Signals to Driver Circuit Using JU2 to JU5

| JUMPER   | SHUNT LOCATION           | DRIVER INPUT SIGNAL   |
|----------|--------------------------|-----------------------|
| JU2      | 1 and 2 connected to VCC | IN1 = high            |
| JU2      | 2 and 3 connected to GND | IN1 = low             |
| JU3      | 1 and 2 connected to VCC | IN2 = high            |
| JU3      | 2 and 3 connected to GND | IN2 = low             |
| JU4      | 1 and 2 connected to VCC | IN3 = high            |
| JU4      | 2 and 3 connected to GND | IN3 = low             |
| JU5      | 1 and 2 connected to VCC | IN4 = high            |
| JU5      | 2 and 3 connected to GND | IN4 = low             |

## Table 2. Driver Probing Connections

| CHANNEL NAME   | IC OUTPUT PIN NAME   | TESTING POINT   | PROBING HEADER (4 PIN), PIN NO.   | PROBING (OUT+ - OUT-)      |
|----------------|----------------------|-----------------|-----------------------------------|----------------------------|
| Channel 1      | OUT1-                | DOUT1-          | JU7, pins 2 (+) and 1 (-)         | JU7, pins 3 (+) and 2 (-)  |
| Channel 1      | OUT1+                | DOUT1+          | JU7, pins 3 (+) and 4 (-)         | JU7, pins 3 (+) and 2 (-)  |
| Channel 2      | OUT2+                | DOUT2+          | JU8, pins 2 (+) and 1 (-)         | JU8, pins 2 (+) and 3 (-)  |
| Channel 2      | OUT2-                | DOUT2-          | JU8, pins 3 (+) and 4 (-)         | JU8, pins 2 (+) and 3 (-)  |
| Channel 3      | OUT3-                | DOUT3-          | JU9, pins 2 (+) and 1 (-)         | JU9, pins 3 (+) and 2 (-)  |
| Channel 3      | OUT3+                | DOUT3+          | JU9, pins 3 (+) and 4 (-)         | JU9, pins 3 (+) and 2 (-)  |
| Channel 4      | OUT4+                | DOUT4+          | JU10, pins 2 (+) and 1 (-)        | JU10, pins 2 (+) and 3 (-) |
| Channel 4      | OUT4-                | DOUT4-          | JU10, pins 3 (+) and 4 (-)        | JU10, pins 2 (+) and 3 (-) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Evaluating the Driver (MAX9123) Circuit

Follow the steps below to verify driver circuit operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that a shunt is across jumper JU1 (EN) pins 1 and 2.
- 2) Connect a differential probe across pins 2 and 3 of jumper JU7.
- 3) Connect a 3.3V, 400mA power supply to the VCC1 pad. Connect the supply ground to the GND pad closest to VCC1.
- 4) Connect a function generator that provides a square wave to the input of the driver circuit SMA connector DIN1 with the following setting:
- a) Frequency = 10MHz
- b) VIL = 0.00V, VIH = 3.00V
- c) Duty cycle = 50%
- 5) Turn on the power supply, enable the function generator, and verify the differential output signal VOD = (OUT1+ - OUT1-).

Note: For connections to verify every channel, see Table 2.

## Evaluating the Receiver (MAX9121) Circuit

Follow the steps below to verify receiver circuit operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that the shunt is across jumper JU15 (EN) pins 1 and 2.
- 2) Connect a scope probe across JU25 (OUT1) to observe the output signal.
- 3) Connect a 3.3V, 400mA power supply to the VCC2 pad. Connect the supply ground to the GND pad closest to VCC2.

Table 3. Receiver Probing Connections

| CHANNEL NAME   | IC OUTPUT PIN NAME   | TESTING POINT   | PROBING HEADER (4 PIN), PIN NO.   | OUTPUT SIGNAL   | PROBING HEADER (2 PIN)   |
|----------------|----------------------|-----------------|-----------------------------------|-----------------|--------------------------|
| Channel 1      | IN1-                 | IN1-            | JU11, pins 2 (+) and 1 (-)        | OUT1            | JU25                     |
| Channel 1      | IN1+                 | IN1+            | JU11, pins 3 (+) and 4 (-)        | OUT1            | JU25                     |
| Channel 2      | IN2+                 | IN2+            | JU12, pins 2 (+) and 1 (-)        | OUT2            | JU26                     |
| Channel 2      | IN2-                 | IN2-            | JU12, pins 3 (+) and 4 (-)        | OUT2            | JU26                     |
| Channel 3      | IN3-                 | IN3-            | JU13, pins 2 (+) and 1 (-)        | OUT3            | JU27                     |
| Channel 3      | IN3+                 | IN3+            | JU13, pins 3 (+) and 4 (-)        | OUT3            | JU27                     |
| Channel 4      | IN4+                 | IN4+            | JU14, pins 2 (+) and 1 (-)        | OUT4            | JU28                     |
| Channel 4      | IN4-                 | IN4-            | JU14, pins 3 (+) and 4 (-)        | OUT4            | JU28                     |

- 4) Connect a function generator that provides square waves to the input of the receiver circuit (connect the noninverting signal to SMA connector RIN1+ and the inverting signal to SMA connector RIN1-) with the following setting:
- a) Frequency = 10MHz
3. b VIL = 1.10V, VIH = 1.30V
- c) Duty cycle = 50%
- 5) Turn on the power supply and enable the function generator, then verify the output signal (OUT1) on the scope.

Note: For connections to verify every channel, see Table 3.

## Detailed Description

The MAX9121 EV kit is a fully assembled and tested circuit board that includes a quad LVDS differential line driver and receiver. The EV kit has two independent circuits.  The  upper-half  circuit  is  a  driver  circuit  and  the lower-half circuit  is  a  receiver  circuit.  The  two  circuits can be operated together or separately. Both circuits' I/Os are specially designed for direct probing.

The EV kit is a four-layer PC board with 50 Ω controlledimpedance traces for all input signal traces with 49.9 Ω termination resistors. The two circuits can be linked by connecting an output signal from the driver circuit to the input of the receiver circuit. Each differential input pair traces are laid out with less than 100mil length difference.

## Using Separate Power Supplies

The MAX9121 EV kit contains two separate circuits that can be operated with independent supplies after cutting open the shorts at R49 and R50. Independent power and  ground  planes  allow  measurements  of  the receivers' response to ground shift or other commonmode effects. Each circuit requires a 3.3V, 200mA

<!-- image -->

power supply. In addition, if high-impedance delay testing is to be performed, a 1.2V voltage supply is required.

## Input Signals

The MAX9121 EV kit provides internal DC or external AC input signals to the driver circuit and two kinds of input media, SMA coax or twisted-pair cable, to the receiver circuit.

## Driver Circuit Input

The MAX9121 EV kit accepts both internal (DC) and external (AC) inputs to the driver circuit. Before driving AC external input signals to DIN1-DIN4 to the driver circuit, verify there are no shunts across JU2-JU5 (Table 1). JU2-JU5 can create DC internal input signals to the driver. To use JU2-JU5 to create DC input signals, make sure termination resistors R2-R5 are removed.

## Receiver Circuit Inputs

The MAX9121 EV kit also provides two kinds of input media to the receiver circuit: SMA connector and twisted-pair cable. Additional paired testing points (IN1+, IN1-) (IN2+, IN2) (IN3+, IN3-) (IN4+, IN4-) are provided for  the  twisted-pair  cable  connections. When twistedpair cables are used as the input media (twisted-pair cables are soldered on testing points IN1-, IN1+…), remove all 0 Ω resistors R33-R40 to avoid signal reflection  from  the  traces  that  connect  0 Ω resistors to SMA connectors.

## Output Signals

The MAX9121 EV kit is designed for direct probing of all  output  signals.  Additional paired testing points (DOUT1-, DOUT1+), (DOUT2+, DOUT2-), (DOUT3+, DOUT3-), (DOUT4+, DOUT4-) are also provided for connection of twisted-pair cables and probing of the driver outputs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9121 Evaluation Kit

## MAX9121 Evaluation Kit

## Probing Connections

The MAX9121 EV kit is designed for direct differential probing connections. Table 2 lists the direct probing connections on the respective pins for all input and output signals and their respective testing points. Table 3 lists the receiver probing connections.

## Enable/Disable

The MAX9121 EV kit has two enables and two disables. All  enables and disables can be controlled by either jumpers or external signals. Jumpers JU1, JU6, JU15, and JU20 provide a DC logic signal to drivers EN, EN , and receivers EN and EN , respectively (Table 4).

The  EV  kit  can  also  be  controlled  by  external enable/disable signal(s). To use external signals to control enable and disable, SMA connectors need to be added on DEN, REN, DEN ,  and REN pads with 49.9 Ω termination resistors R1, R6, R23, and R24. Before connecting external signals to DEN, REN, DEN ,  and REN ,  verify  there  are  no  shunts  across jumpers JU1, JU6, JU15, and JU20.

## Evaluating Driver and Receiver Together

To evaluate LVDS differential line driver (MAX9123) and receiver (MAX9121) together, remove 0 Ω resistors R33-R40 at the input of the receiver circuit, and remove capacitors C16-C23 and 49.9 Ω termination resistors R7-R14 at the output of the driver. Use 100 Ω twistedpair  cable  (such  as  CAT-5)  to  connect  the  driver  outputs to the receiver inputs. Connect one end of the twisted-pair cable to test point DOUT1- and another end to IN1- together, etc. Connect function generator(s) to driver input(s), and probe at receiver or driver I/Os.

## Table 4. JU1, JU6, JU15, and JU20 Setting and Enable/Disable Logic Level

| JUMPER    | SHUNT LOCATION             | ENABLE/DISABLE LOGIC LEVEL   |
|-----------|----------------------------|------------------------------|
| JU1, JU6, | 1 and 2, connected to V CC | High                         |
| JU15,     | 2 and 3, connected to GND  | Low                          |
| JU20      | Open, no shunt             | Float                        |

Follow  these  steps  to  verify  board  operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that shunts are across JU1 and JU15 pins 1 and 2.
- 2) Connect function generator to the driver input DIN1 with the following setting:
- a) Frequency = 10MHz
- b) VIL = 0.00V, VIH = 3.00V
- c) Duty cycle = 50%
- 3) Connect a scope probe across jumper JU25 (OUT1). Use 100 Ω twisted-pair cable to connect the driver outputs to the receiver inputs as shown in Figure 1.
- 4) Single power supply (for the normal operation): Connect a 3.3V, 400mA power supply to VCC1. Connect the supply ground to the GND pad closest to VCC1.

Optional separate power supplies (for testing receiver common-mode response): Connect 3.3V, 200mA power supplies to VCC1 and VCC2. Connect the supply grounds to the GND pads closest VCC1 and VCC2, respectively. Be sure R49 and R50 shorts are cut open.

- 5) Turn on the power supply(ies), enable the function generator, and verify the output.

Note: For connections to verify every channel, see Tables 2 and 3.

## Evaluating the MAX9122

The MAX9121 EV kit can also evaluate the MAX9122, a differential  line  receiver  with  107 Ω internal  termination resistors.  To  evaluate  the  MAX9122,  replace MAX9121EUE with a MAX9122EUE and remove the external 100 Ω resistors R25-R28.

## Table 5. Enable and Disable Truth Table

| DEN (REN)              | DEN ( REN )            | OPERATION FUNCTION   |
|------------------------|------------------------|----------------------|
| High                   | Low                    | U1 (U2) enable       |
| High                   | Float                  | U1 (U2) enable       |
| All other combinations | All other combinations | U1 (U2) disable      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9121 Evaluation Kit

<!-- image -->

Figure 1. Twisted-Pair Cable Interconnect Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9121 Evaluation Kit

Figure 2. MAX9121 EV Kit Schematic (Driver Circuit)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3. MAX9121 EV Kit Schematic (Receiver Circuit)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9121 Evaluation Kit

<!-- image -->

Figure 4. MAX9121 EV Kit Component Placement GuideComponent Side

Figure 5. MAX9121 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6. MAX9121 EV Kit PC Board Layout-Inner Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 7. MAX9121 EV Kit PC Board Layout-Inner Layer 3

<!-- image -->

## MAX9121 Evaluation Kit

Figure 8. MAX9121 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9