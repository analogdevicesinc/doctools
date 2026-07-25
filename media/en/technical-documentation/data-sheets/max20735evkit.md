<!-- lastmod 2022-08-02 -->
## MAX20735 Evaluation Kit

## General Description

The  MAX20735  Evaluation  Kit  (EV  kit)  serves  as  a reference platform for evaluating the MAX20735 voltage regulator IC. This single-chip, integrated switching regulator provides an extremely compact, low-cost, highly  efficient,  fast,  accurate  and  reliable  power  delivery solution for emerging low-output voltage applications up to  40A. Refer to the MAX20735 IC data sheet for more information.

The  EV  kit  consists  of  a  fully  assembled  and  tested PCB  implementation  of  the  MAX20735.  Jumper  pins, test points, and input/output connectors are included for flexibility and ease-of-use in a wide range of applications.

The evaluation board is configured with an 'edge strip' to allow high di/dt loading when evaluating the system. The +VOUT connection is on the top side, while the return (or -V OUT )  is  on  the  bottom side, directly mirroring the top-

- side strip.

Either  solder  directly  to  the  output  'strip'  or  use  the  J8 terminal block to interface to a load.

## Features

- High Efficiency and Power Density
- Low Component Count
- Small Solution Size
- 509mm 2  Including Inductor and Output Capacitors
- Optimized Performance
- Reduced Design-In Time
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX20735

## Getting Started

## Required Equipment

- MAX20735 EV kit
- 4.5V to 16V power supply
- 0A to 40A Load
- Oscillocope, probes, voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect a powered-off 4.5V to 16V input supply to J1.
- Optionally, connect supply sense leads to V DD1 and GND1 for best accuracy.
- 2) Connect the load to J3 or J8.
- 3) Connect  the  V OUT scope  probe/voltmeter  to  J4  or J11, as desired.
- J4 and J11 are connected to the sense point for best accuracy.
- 4) Position the SW1 toggle switch, pointing away from J1 to enable the IC (if desired).
- 5) Turn on the power supply and observe that V OUT = 1V.
- 6) For  efficiency  measurements,  J6  has  appropriate Kelvin sense points.

<!-- image -->

## Operation

The MAX20735 IC is a monolithic, high-frequency stepdown  switching  regulator  optimized  for applications requiring small-size, high-efficiency, and low-output voltages.  Detailed  product  and  application  information  is provided in the MAX20735 IC data sheet.

## Output Enable (OE)

OE  is  used  to  enable/disable  the  output  voltage.  The output voltage is enabled/disabled by SW1. Pointing SW1 in  the  direction  of  the  silkscreened  arrow  enables  the regulator.

## Output-Voltage Selection

The  EV  kit  is  setup  to  initially  boot  up  to  an  output voltage  of  1V.  This  has  been  accomplished  by  setting the  reference  to  come  up  to  a  V BOOT of  0.6484V  and placing  a  voltage-divider  in  the  feedback  path  with  a divide  ratio  of  0.6484.  For  different  V OUT  values,  the VBOOT and  feedback-divider  ratio  can  be  changed,  as described in the MAX20735 IC data sheet.

RGAIN  and  C OUT can  also be changed  to  affect performance. Refer to the MAX20735 IC data sheet for more details.

## Soft-Start and Switching Frequency

These are programmable parameters. For the EV kit, softstart is set to 3ms, and switching frequency to 400kHz.

## Status Monitoring

Whenever the part is actively regulating, and the output voltage  is  within  the  power-good  window,  the  STAT  pin is  high.  In  all  other  conditions,  including  enabled  but  in a  fault  state,  the  STAT  pin  is  pulled  low.  Refer  to  the MAX20735 IC data sheet for more details.

## Input-Voltage Monitoring

The V DD1  and GND1 sense points monitor the input  supply.

## Switching-Voltage Monitoring

The switching waveform can be monitored on VX1.

## Output-Voltage Monitoring

J4-1  and  J4-2  monitor  the  output  voltage  of  V OUT   and GND, re spectively. These test points should not be used for  loading. Alternatively,  scopejack  J11  can  be  used  to monitor the output voltage.

## Efficiency Testing

- J6 provides convenient access to the appropriate VIN  and V OUT  sense points.
- VIN\_EFF± are on J6 pins 1 and 2.
- VOUT\_EFF± are on J6 pins 3 and 4.
- Input and output currents should be measured with 0.1% lab shunts.
- For increased accuracy, shunt mismatch can be mea  sured and calibrated out by doing a test running the same current through both shunts .
- For increased accuracy, shunt mismatch can be measured and calibrated out by doing a test running the same current through both shunts.

## Ordering Information

| DEVICE TYPE    | TYPE   |
|----------------|--------|
| MAX20735EVKIT# | EV Kit |

#Denotes RoHS compliant .

## MAX20735 Bill of Materials

| Part Reference                              |   Quantity | Description                                |
|---------------------------------------------|------------|--------------------------------------------|
| C1, C74, C75                                |          3 | 100uF, 25V, 20%, TANTALUM                  |
| C24                                         |          1 | 0.01uF, 25V, 10%, X7R                      |
| C3                                          |          1 | 0.1uF, 25V, 10%, X7R                       |
| C32                                         |          1 | 1000pF, 50V, 10%, X7R                      |
| C5, C6, C10, C11                            |          4 | 47uF, 25V, 20%, X5R                        |
| C50                                         |          1 | 22uF, 6.3V, 20%, X6S                       |
| C60, C61                                    |          2 | 1.0uF, 25V, 20%, X5R                       |
| C62, C63, C66, C67, C69, C70, C71, C76, C77 |          9 | 100uf, 6.3V, 20%, X5R                      |
| C7                                          |          1 | 1uF, 25V, 10%, X7R                         |
| C8                                          |          1 | 0.22uF, 16V, 10%, X7R                      |
| C9, C36, C51                                |          3 | 10uF, 6.3V, 20%, X5R                       |
| GND1, GND2, GND3, LOOP, VDD1, VX1           |          6 | 1_PIN-1X1 Straight                         |
| J1, J8                                      |          2 | 2_PIN-2 Pin, Terminal Block w/Screws, Blue |
| J11                                         |          1 | Shielded Scope Probe Jack, Vertical        |
| J3                                          |          1 | 2_Pin-Edge Fingers                         |
| J4                                          |          1 | VOUT-DIF-1X2 Straight                      |
| J6                                          |          1 | 8_PIN-2X4 Straight                         |
| J7                                          |          1 | 6_PIN-2X3 Straight                         |
| L1                                          |          1 | 170nH, 10%, Isat= 66A                      |
| R1                                          |          1 | 1.78K Ω , 1%, 1/16W                        |
| R10, R20, R21, R22, R23                     |          5 | 1K Ω , 5%, 1/16W                           |
| R11, R14                                    |          2 | 0 Ω , 5%, 1/16W                            |
| R2                                          |          1 | 162K Ω , 1%, 1/16W                         |
| R3                                          |          1 | 2.67K Ω , 1%, 1/16W                        |
| R4                                          |          1 | 10 Ω , 1%, 1/16W                           |
| R5, R8                                      |          2 | 20K Ω , 5%, 1/16W                          |
| R6                                          |          1 | 1.87K Ω , 1%, 1/16W                        |
| R9                                          |          1 | 3.48K Ω , 1%, 1/16W                        |
| SW1                                         |          1 | DPDT-DPDT, 6pins, 1switch                  |
| U1                                          |          1 | MAX20735                                   |
|                                             |          1 | PCB# 35-900335-01-00                       |

Evaluates: MAX20735

## MAX20735 Schematics

<!-- image -->

│

## MAX20735 Schematics (continued)

<!-- image -->

│

## MAX20735 Schematics (continued)

<!-- image -->

## MAX20735 PCB Layer

Top Silkscreen

<!-- image -->

Bottom Silkscreen

<!-- image -->

│

## MAX20735 PCB Layer (continued)

Layer 1

<!-- image -->

Layer 2

<!-- image -->

│

## MAX20735 PCB Layer (continued)

Layer 3

<!-- image -->

<!-- image -->

Layer 4

│

## MAX20735 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX20735