<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX3654  evaluation kit (EV kit) is a factoryassembled  printed  circuit  board  (PCB)  that  provides  two circuit versions-optical input and electrical input.

The  optical  circuit  includes  the  photodiode  bias  circuitry, an op amp for feed-forward AGC operation, and a balun for single-ended  75 Ω output.  Through-hole  pads  are provided  to  attach  a  triplexer  analog  photodiode.  It  is important  to  select  a  photodiode  with  capacitance  and inductance  in  the  anode  and  cathode  connections  as symmetric as possible for optimum linearity.

The  electrical  circuit  is  normally  configured  with  a  50 Ω input  for  use  with  conventional  test  and  measurement equipment  and  a  75 Ω output.  The  75 Ω output  can  be connected to 50 Ω test and measurement equipment using a  minimum loss  pad.  If  desired,  the  MAX3654  input  can also provide a 75 Ω input by  replacing R12 and R13 with 25 Ω resistors.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- ♦ Fully Assembled and Tested
- ♦ Optical and Electrical Inputs
- ♦ Automatic Gain Control

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP RANGE     | IC-PACKAGE   |
|--------------|----------------|--------------|
| MAX3654EVKIT | -40°C to +85°C | 16 QFN       |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Evaluation Component List

| DESIGNATION                                       |   QTY | DESCRIPTION                               |
|---------------------------------------------------|-------|-------------------------------------------|
| C1, C2, C4, C5, C19-C22                           |     8 | 0.001 μ F ± 10% ceramic capacitors (0402) |
| C3, C7, C8, C9, C12, C16, C17, C23, C24, C27, C29 |    11 | 0.1 μ F ± 5% ceramic capacitors (0603)    |
| C6, C10, C11, C25, C26                            |     5 | 1 μ F 10V, ± 10% min ceramic capacitors   |
| C13, C14, C28                                     |     3 | 33 μ F 10V, ± 20% min tantalum capacitors |
| R6, R18                                           |     2 | 1.62k Ω ± 1% resistors (0402)             |
| R2                                                |     1 | 10 Ω ± 1% resistor (0402)                 |
| R3, R4, R5, R16, R17                              |     6 | 100k Ω ± 1% resistors (0402)              |
| R1, R21                                           |     2 | 1k Ω ± 1% resistors (0402)                |
| R7, R19                                           |     2 | 2.43k Ω ± 1% resistors (0402)             |
| R9, R15                                           |     2 | 20k Ω ± 1% resistors (0402)               |
| R12, R13                                          |     2 | 12.1 Ω ± 1% resistors (0402)              |
| R8, R20                                           |     2 | 6.04k Ω ± 1% resistors (0402)             |
| R22                                               |     1 | open (0402)                               |

| DESIGNATION       |   QTY | DESCRIPTION                                       |
|-------------------|-------|---------------------------------------------------|
| J2, J4            |     2 | BNC 75 Ω , Edge Mount Trompeter UCBJE20-1         |
| J3                |     1 | SMA connector, tab contact, Johnson, 142-0701-851 |
| TP1-TP13          |    13 | Test Points                                       |
| JU1-JU3, JU5, JU6 |     5 | 2-pin headers, 0.1in centers                      |
| L1, L5            |     2 | Bead, Murata BLM15HD182SN1 (0402)                 |
| L2, L6            |     2 | 10 μ H inductor, TDK MLF1608E100K (0603)          |
| U1, U3            |     2 | MAX3654ETE+                                       |
| U2, U4            |     2 | MAX4240EUK                                        |
| U5                |     0 | Photodiode not supplied                           |
| U6                |     1 | Balun Pulse Engineering CX2039                    |
| U7, U8            |     2 | Balun Pulse Engineering CX2038                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

Features

## \_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER          | PHONE        | WEBSITE          |
|-------------------|--------------|------------------|
| AVX               | 803-448-9411 | www.avxcorp.com  |
| Pulse Engineering | 858-674-8100 | www.pulseeng.com |
| Murata            | 770-436-1300 | www.murata.com   |

Note: Please indicate that you are using the MAX3654 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

## Optical Evaluation

- 1) Attach  triplexer  photodiode  to  IN+  and  IN-  of  the MAX3654. The cathode normally connects to IN+. The  photodiode  case  should  be  grounded  to  the most convenient ground via. Make certain that the anode and cathode leads are symmetric in length and  orientation,  lead  lengths  should  normally  be about 5mm.
- 2) Set JU2 to R4 to manually adjust the gain with an input from 0 to 1.4V on TP3.
- 3) Leave JU3 open for minimum hysteresis.
- 4) Set JU1 to R8 to enable the output signal.
- 5) Connect the signal output at J2 to a 75 Ω spectrum-analyser input. A minimum loss pad may also be used to connect J2 to 50 Ω test equipment.
- 6) Connect a +5V supply to the  VCC terminal,  TP1 and ground to the GND terminal, TP2.
- 7) Connect the photodiode bias supply to TP13. Typically use +12V bias supply, or as required by the photodiode.

## Electrical Evaluation

- 1) Connect a 50 Ω signal source to IN at J3. Set the input  signal  level  to  PIN  =  -18dBm,  so  that  the voltage  on  50 Ω produces  the  maximum  input level of 1.6mAP-P.
- 2) Connect the RF output at J4 to a 75 Ω spectrum analyser input. A minimum loss pad may also be used to connect J4 to 50 Ω test equipment.
- 3) Leave JU6 open for minimum hysteresis.
- 4) Set JU5 to R20 to enable output.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 5) Connect a +5V supply to the VCC terminal, TP7 and ground to the GND terminal, TP8.
- 6) Apply 1.4V to TP12 to set the MAX3654 gain to minimum,  43.5dB Ω .  A  voltage  from  0.175V  to 1.4V  at  TP12  adjusts  the  gain  from  62dB Ω to 43.5dB Ω

## Input and Output Signal Levels

When used in the electrical input configuration shown in  Figure  2,  the  MAX3654  is  intended  to  operate  with AC input signal current from 175 μ AP-P to 1.6mAP-P. The corresponding electrical input is -37dBm (0 &lt; VAGC &lt; 0.175V)  to  -18dBm  (VAGC  =  1.4V),  on  50 Ω .  The MAX3654  EV  Kit  can  also  be  configured  to  provide 75 Ω input  impedance  by  replacing  R12  and  R13  with 25 Ω resistors.

When used in the optical input configuration shown in Figure 2, JU2 may be connected to R3 to configure the MAX3654  for  AGC  operation  based  on  the  average optical power level. In this case, the  MAX3654 transimpedance  is  controlled  by  the  average  optical power level, as measured by the voltage across R21. The values of R1, R21 and R22 shown in Figure 1 will provide  an  output  level  of  15dBmV/ch  (+1dB)  for optical  input  signals  ranging  from  -6dBm  to  +2dBm, (OMI = 3.5%, N = 129) using a typical triplexer photodiode. The total output signal level in this case is 15dBmV/ch + 10 log(129 channels) = 36dBmV, which is the maximum operating level at which the specified linearity  will  be  achieved.  Operating  at  higher  outputs may reduce MAX3654 performance.

Operating conditions (OMI, number of channels, responsivity, etc) change the VAGC setting required for a given output voltage. EV Kit AGC circuit gain can be increased  by  adding  a  voltage-divider,  R22,  to  the op  amp.  To  reduce  gain  the  values  of  R1  and  R21 should both be increased. Remember to keep the total output  at  36dBmV  or  less  to  maintain  the  desired MAX3654 performance.

## Photodiode Lead Configuration

Photodiode lead parasitic impedances can significantly effect  performance  of  the  MAX3654.  It  is  especially important that the anode and cathode connections are electrically symmetric. Refer to Figure 1 in the MAX3654  data  sheet.  Note  that  the  EV  Kit  layout  is designed  to  minimize  capacitance  to  ground  in  the input signal path.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Adjustments and Control Descriptions

Figure 1. MAX3654 Optical EV Kit Schematic

| COMPONENT   | COMPONENT   | NAME       | FUNCTION                                                                                                                                                                     |
|-------------|-------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ELECTRICAL  | OPTICAL     | NAME       | FUNCTION                                                                                                                                                                     |
| JU5         | JU1         | MUTE       | MUTE. TTL high enables output. Low mutes output.                                                                                                                             |
| NA          | JU2         | VAGC       | Gain Control. Set JU2 to R4 for manual gain control. Set JU2 to R3 to allow feedforward AGC operation. The electrical circuit board is always set for manual gain control.   |
| JU6         | JU3         | Hysteresis | Hysteresis. Leave open for (minimum) ± 0.13dB hysteresis between gain switch points. Connect 20k Ω to ground for ± 0.3dB and short to GND for (maximum) ± 0.65dB hysteresis. |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX3654 Electrical EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3. MAX3654 EV Kit PC Component Placement GuideComponent Side

<!-- image -->

88

88

Figure 5. MAX3654 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 4. MAX3654 EV Kit PC Board Layout-Component Side

<!-- image -->

88

D

D

88

D

Figure 6. MAX3654 EV Kit PC Board Layout-Power Plane

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

00-0

?

5