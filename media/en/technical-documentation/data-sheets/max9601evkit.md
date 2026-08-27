<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The  MAX9601  evaluation  kit  (EV  kit)  is  a  fully  assembled and tested surface-mount PCB that evaluates the MAX9601  dual-channel  PECL  output  comparators.  It can be used to evaluate the MAX9601's performance in tracking high-fidelity narrow pulses, as well as conform its  low-propagation  delay  and  delay  dispersion.  The differential input stage accepts a wide range of signals in the common-mode range from (VEE + 3V) to (VCC 2V). The outputs are complementary digital signals with external  components  necessary  to  observe  the  PECL serial-data  output  on  a  50 I input  oscilloscope.  The board also provides layout options that allow the output termination  to  be  modified  easily  for  alternate  output terminations,  such  as  +5V  PECL  and  high  impedance or AC-coupled level translation. The EV kit features test points to control the complementary latch-enable control inputs.  The  EV  kit  also  provides  resistor  footprints  to evaluate the MAX9601's adjustable hysteresis feature.

## Evaluates:  MAX9601 MAX9601 Evaluation Kit

## Features

- S -2.2V to +3V Input Range with +5V/-5.2V Supplies
- S -1.2V to +4V Input Range with +6V/-4.2V Supplies
- S SMA Connectors to Access Differential Inputs and Outputs
- S Differential PECL Outputs
- S Latch Enable
- S Adjustable Hysteresis
- S Output Terminated for Interfacing with a 50 I Oscilloscope Input
- S Allows Alternate Output Terminations
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9601EVKIT+ | EV Kit |

## Component List

| DESIGNATION                             |   QTY | DESCRIPTION                                                                                |
|-----------------------------------------|-------|--------------------------------------------------------------------------------------------|
| C1, C13, C17, C22                       |     4 | 0 I Q 5% resistors (0603)                                                                  |
| C5, C8, C11, C20                        |     4 | 10 F F Q 10%, 10V X7R ceramic capacitors (1206) Murata GRM31CR71A106K TDK C3216X7R1A106K   |
| C6, C9, C12, C19                        |     4 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K TDK C1608X7R1H104K  |
| C7, C10, C18, C21                       |     4 | 0.01 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H103K TDK C1608X7R1H103K |
| INA+, INA-, INB+, INB-, QA, QA , QB, QB |     8 | Edge-mount receptacle SMA connectors                                                       |

| DESIGNATION               |   QTY | DESCRIPTION                                                  |
|---------------------------|-------|--------------------------------------------------------------|
| LEA, LEA , LEB, LEB       |     4 | Test points                                                  |
| R1, R4, R10, R13          |     4 | 4.53 I Q 1% resistors (0603)                                 |
| R2, R3, R11, R12          |     4 | 82.5 I Q 1% resistors (0603)                                 |
| R6, R8, R9, R15, R17, R18 |     6 | 49.9 I Q 1% resistors (0603)                                 |
| R7, R16                   |     2 | 16.5k I Q 1% resistors (0603)                                |
| R19-R22, R27-R30          |     8 | 90.9 I Q 1% resistors (0603)                                 |
| U1                        |     1 | Dual PECL high-speed comparator (20 TSSOP) Maxim MAX9601EUP+ |
| -                         |     1 | PCB: MAX9601 EVALUATION KIT+                                 |

## Evaluates:  MAX9601 MAX9601 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX9601 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- DC power supplies

+5V, 100mA positive power supply (VCC)

-5.2V, 100mA negative power supply (VEE)

- +5V, 100mA logic power supply (VCCO\_)
- +3V 1mA latch enable power supply (LE\_)
- RF signal generator (e.g., MAX8685A)
- High-bandwidth oscilloscope
- 12)  Monitor and verify outputs QA and QA with the oscilloscope.  The  oscilloscope  must  be  configured  for 50 I input termination.
- 13)  Monitor and verify outputs QB and QB with the oscilloscope.  The  oscilloscope  must  be  configured  for 50 I input termination.

## Detailed Description of Hardware

## Supply Voltages

The  MAX9601  EV  kit  operates  from  either  standard supply levels of -5.2V/+5V or shifted levels of -4.2V/+6V. Connect  the  positive  and  negative  supply  voltages  to the  VCC  and  VEE  pads,  respectively.  The  EV  kit  also requires an output driver positive supply for each channel.  Connect  the  logic  supply  voltages  to  the  VCCOA and VCCOB pads.

## Inputs

The  EV  kit  provides  INA+,  INA-,  INB+,  and  INB-  SMA connectors to access the MAX9601's differential inputs. The  differential  input  stage  accepts  a  wide  range  of signals  in  the  common-mode  range  from  (VEE  +  3V) to (VCC - 2V) with a CMRR of 70dB (typ). All the input traces  are  symmetrical  and  have  50 I of  characteristic impedance.  Each  input  trace  has  a  49.9 I termination resistor to avoid signal reflections.

## Outputs

The EV kit provides QA, QA , QB, and QB SMA connectors  to  access  the  MAX9601's  comparator  outputs.  All the output traces are symmetrical and have 50 I of characteristic impedance. The output signals are referenced to the logic supply voltage VCCO\_ and have the external components necessary to observe the PECL output. See the Output Termination section for more details.

## Hysteresis

Hysteresis  can  be  introduced  to  prevent  oscillation  or multiple  transitions  due  to  noise  on  low-slew  input  signals. The EV kit features resistors R7 and R16 to program the current-controlled hysteresis. Refer to the Hysteresis (MAX9600/MAX9601) section  in  the  MAX9601  IC  data sheet for a more detailed description.

## Procedure

The  MAX9601  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution: Do not turn on power supplies until all connections are completed.

- 1) Set the VCC power supply to +5V. Disable VCC.
- 2) Connect  the  negative  terminal  of  the  VCC  power supply to the GND pad. Connect the positive terminal of the VCC power supply to the VCC pad.
- 3) Set the VEE power supply to -5.2V. Disable VEE.
- 4) Connect  the  negative  terminal  of  the  VEE  power supply to the VEE pad. Connect the positive terminal of the VEE power supply to the GND pad.
- 5) Set  the  VCCO\_  power  supply  to  +5V.  Disable VCCO\_.
- 6) Connect the negative terminal of the VCCO\_ power supply to the GND pad. Connect the positive terminal of the VCCO\_ power supply to the VCCOA pad. Short the VCCOA pad to the VCCOB pad.
- 7) Set the LE\_ power supply to +3V. Disable LE\_.
- 8) Connect  the  negative  terminal  of  the  LE\_  power supply to the GND pad. Connect the positive terminal of the LE\_ power supply to the LEA pad. Short the LEA pad to the LEB pad.
- 9) Set the signal generator to produce an output sinewave signal of 100mVP-P at a frequency of 250MHz. Disable the signal generator.
- 10)  Connect  the  signal  generator  to  the  edge-mount SMA connector marked INA+.
- 11)  Enable all power  supplies. Enable the signal generator.

## Latch Enable

The complementary latch-enable control permits tracking,  track-hold,  or  sample-hold  modes  of  operation. The latch enables can be driven with PECL logic. See Table 1 for the latch-enable truth table. By default, the EV kit is  configured to operate in compare mode. LEA and LEB are connected to the VCCOA and VCCOB pads through  resistors  R6  and  R15  (LEA  and  LEB  signals need to be provided externally).

## Output Termination

## DC-Coupled Output to Oscilloscope

The EV kit's default output termination network provides the output with a Thevenin equivalent of 50 I to VCCO\_ - 2V, when connected to a 50 I load to ground. Hence, the  outputs  can  be  conveniently  connected  directly  to an  oscilloscope's  50 I input.  The  termination  network provides  a  4x  output  signal  attenuation.  If  only  one  of the serial-data outputs is connected to an oscilloscope, ensure  that  the  other  is  still  properly  terminated.  Keep in  mind  that  the  resistor  networks  at  each  output  provide  proper  termination  only  when  they  are  terminated through 50 I to ground.

## AC-Coupled Output to Oscilloscope

The output can also be AC-coupled to the next stage. While  AC-coupling  the  output,  remember  that  the  IC has  an  open-emitter  output.  Hence  the  output  must have  a  DC  path  provided  with  suitable  external  pulldown  resistors.  Also,  the  resultant  current  sourced  by the  output  stage  must  not  exceed  the  output  current capability of the part. For example, to AC-couple the QA output  to  a  50 I input  oscilloscope,  short  resistor  R19. Replace resistor R2 with 125 I and R27 with 187.5 I . This provides a DC Thevenin equivalent of 75 I to VCCO - 2V. Now replace resistor R1 with 49.9 I resistor and populate capacitor  C1  with  a  suitable  low-loss,  high-frequency capacitor.  With  good  coupling,  the  AC  load  adds  an additional 8mA of output current only, since capacitor C1 blocks the DC component of the PECL output.

## Table 1. Latch-Enable Truth Table

| LATCH-ENABLE INPUT   | LATCH-ENABLE INPUT   | OPERATION                                              |
|----------------------|----------------------|--------------------------------------------------------|
| LE_                  | LE_                  | OPERATION                                              |
| 0                    | 1                    | Compare mode (output follows input state)              |
| 1                    | 0                    | Latch mode (output latches to last known output state) |
| 0                    | 1                    | Invalid condition (output is in unknown state)         |
| 1                    | 0                    | Invalid condition (output is in unknown state)         |

## Evaluates:  MAX9601 MAX9601 Evaluation Kit

## Alternative PECL Output Termination

Alternative  PECL  output  termination  methods  can  be used for different  logic  interfaces  as  long  as  they  provide a DC Thevenin equivalent of 50 I to VCC - 2V. For example, to interface QA with a PECL or high-impedance input, short resistors R1 and R19, and replace R27 with a 124 I resistor. To interface QA with a PECL input test equipment,  which  is  internally  terminated  with  50 I to VCCO\_ - 2V, take the following steps:

- 1) Remove resistors R2 and R27.
- 2) Short resistors R1 and R19.
- 3) Place a bias-T in series between the MAX9601 and the test equipment. Connect the bias-T's RF and DC terminals  to  the  QA  output  and  the  RF  terminal  to the test equipment's PECL input. Then connect the DC  terminal  to  a  VCCO\_  -  2V  termination  voltage through a 50 I resistor.

## Layout

The EV kit uses a two-layer board for simplicity. However, special layout precautions have been taken due to the large  gain-bandwidth  characteristics  of  the  MAX9601. The  0.01 F F  power-supply  decoupling  capacitors  are mounted as close as possible to the power-supply input pins.  The  inductance  of  the  return  path  is  reduced  by flooding  the  ground  plane  with  multiple  vias.  Multiple ground  vias  are  also  present  besides  the  decoupling capacitors  and  signal  traces  to  shorten  the  ground return  path  and  maximize  isolation.  The  lead  lengths on  the  inputs  and  outputs  are  minimized  to  avoid unwanted  parasitic  feedback  around  the  comparators. Microstrip layout and terminations are used at both the inputs,  as  well  as  the  outputs,  to  reduce  signal  reflections.  Layer  2  is  a  continuous  ground  plane  with  no signal or power traces. Impedance discontinuities have been minimized by routing all the signal traces on the top layer only, with no interconnecting vias or sharp corners. Edge-mount SMA connectors are used to reduce the  capacitive  discontinuity  and  maximize  frequency response. The symmetric layout also minimizes the skew due to the traces.

## Test Setup

Note  that  a  test  setup  optimized  for  high-speed  measurement is essential to observe the true performance of the MAX9601 device. Use matched SMA cables for the differential inputs and outputs. Also, account for the time delay and skew of the test setup. For accurate measurement of the device's rise and fall times, an oscilloscope with a bandwidth several times larger than the maximum signal frequency must be used.

## Evaluates:  MAX9601 MAX9601 Evaluation Kit

Figure 1. MAX9601 EV Kit Schematic

<!-- image -->

Figure 2. MAX9601 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluates:  MAX9601 MAX9601 Evaluation Kit

Figure 3. MAX9601 EV Kit Component PCB LayoutComponent Side

<!-- image -->

Figure 4. MAX9601 EV Kit PCB Layout-Solder Side

<!-- image -->

## Evaluates:  MAX9601 MAX9601 Evaluation Kit

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.