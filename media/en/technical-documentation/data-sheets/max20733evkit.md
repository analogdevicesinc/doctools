<!-- lastmod 2022-08-02 -->
## MAX20733 Evaluation Kit

## General Description

The  MAX20733  Evaluation  Kit  (EV  kit)  serves  as  a reference platform for evaluating the MAX20733 voltage regulator IC. This single-chip, integrated switching regulator provides an extremely compact, low-cost, highly  efficient,  fast,  accurate  and  reliable  power  delivery solution for emerging low-output voltage applications up to  35A. Refer to the MAX20733 IC data sheet for more information.

The  EV  kit  consists  of  a  fully  assembled  and  tested PCB  implementation  of  the  MAX20733.  Jumper  pins, test points, and input/output connectors are included for flexibility and ease-of-use in a wide range of applications.

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

Evaluates: MAX20733

## Getting Started

## Required Equipment

- MAX20733 EV kit
- 4.5V to 16V power supply
- 0A to 35A Load
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

Ordering Information appears at end of data sheet.

<!-- image -->

## Operation

The MAX20733 IC is a monolithic, high-frequency stepdown  switching  regulator  optimized  for applications requiring small-size, high-efficiency, and low-output voltages.  Detailed  product  and  application  information  is provided in the MAX20733 IC data sheet.

## Output Enable (OE)

OE  is  used  to  enable/disable  the  output  voltage.  The output voltage is enabled/disabled by SW1. Pointing SW1 in  the  direction  of  the  silkscreened  arrow  enables  the regulator.

## Output-Voltage Selection

The  EV  kit  is  setup  to  initially  boot  up  to  an  output voltage  of  1V.  This  has  been  accomplished  by  setting the  reference  to  come  up  to  a  V BOOT of  0.6484V  and placing  a  voltage-divider  in  the  feedback  path  with  a divide  ratio  of  0.6484.  For  different  V OUT  values,  the VBOOT and  feedback-divider  ratio  can  be  changed,  as described in the MAX20733 IC data sheet.

RGAIN  and  C OUT can  also be changed  to  affect performance. Refer to the MAX20733 IC data sheet for more details.

## Soft-Start and Switching Frequency

These are programmable parameters. For the EV kit, softstart is set to 3ms, and switching frequency to 400kHz.

## Status Monitoring

Whenever the part is actively regulating, and the output voltage  is  within  the  power-good  window,  the  STAT  pin is  high.  In  all  other  conditions,  including  enabled  but  in a  fault  state,  the  STAT  pin  is  pulled  low.  Refer  to  the MAX20733 IC data sheet for more details.

## Input-Voltage Monitoring

The V DD1  and GND1 sense points monitor the input  supply.

## Switching-Voltage Monitoring

The switching waveform can be monitored on VX1.

## Output-Voltage Monitoring

J4-1  and  J4-2  monitor  the  output  voltage  of  V OUT   and GND, re spectively. These test points should not be used for  loading. Alternatively,  scopejack  J11  can  be  used  to monitor the output voltage.

## Efficiency Testing

J6 provides convenient access to the appropriate V IN  and VOUT sense points.

- VIN\_EFF± are on J6 pins 1 and 2.
- VOUT\_EFF± are on J6 pins 3 and 4.
- Input and output currents should be measured with 0.1% lab shunts.
- For increased accuracy, shunt mismatch can be mea  sured and calibrated out by doing a test running the same current through both shunts.

## Ordering Information

| DEVICE TYPE    | TYPE   |
|----------------|--------|
| MAX20733EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX20733 Evaluation Kit

## MAX20733 BOM

| Reference Part                    |   Quantity | Description                                   |
|-----------------------------------|------------|-----------------------------------------------|
| C75 C74, 1, C                     |          3 | TANTALUM , 20% , 25V , 100uF                  |
| C24                               |          1 | X7R , 10% , 25V , 0.01uF                      |
| C29 C28,                          |          2 | SP-CAP , 20% 6.3, , 470uF                     |
| C3                                |          1 | X7R , 10% , 25V , 0.1uF                       |
| C32                               |          1 | X7R , 10% , 50V , 1000pF                      |
| C11 C10, 6, C 5, C                |          4 | X5R , 20% , 25V , 47uF                        |
| C61 C60,                          |          2 | X5R , 20% , 25V , 1.0uF                       |
| C77 C76, C71, C67, C65, C64,      |          6 | X5R , 20% , 6.3V 100uf,                       |
| C7                                |          1 | X7R , 10% , 25V , 1uF                         |
| C8                                |          1 | X7R , 10% , 16V , 0.22uF                      |
| C51 C36, 9, C                     |          3 | X5R , 20% , 6.3V , 10uF                       |
| GND1, GND2, GND3, LOOP, VDD1, VX1 |          6 | 1_PIN-1X1 Straight                            |
| J8 1, J                           |          2 | Blue , crews w/S Block Terminal in, P 2_PIN-2 |
| J11                               |          1 | Vertical Jack, Probe Scope hielded S          |
| J3                                |          1 | Fingers 2_Pin-Edge                            |
| J4                                |          1 | traight S VOUT-DIF-1X2                        |
| J6                                |          1 | traight S 8_PIN-2X4                           |
| J7                                |          1 | traight S 6_PIN-2X3                           |
| L1                                |          1 | 66A Isat= , 10% , 170nH                       |
| 1 R                               |          1 | 1.78K Ω, 1%, 1/16W                            |
| 23 R 22, R 21, R 20, R 10, R      |          5 | 1K Ω, 5%, 1/16W                               |
| 14 R 11, R                        |          2 | 0 Ω, 5%, 1/16W                                |
| 2 R                               |          1 | 162K Ω, 1%, 1/16W                             |
| 3 R                               |          1 | 2.67K Ω, 1%, 1/16W                            |
| 4 R                               |          1 | 10 Ω, 1%, 1/16W                               |
| 8 R 5, R                          |          2 | 20K Ω, 5%, 1/16W                              |
| 6 R                               |          1 | 1.87K Ω, 1%, 1/16W                            |
| 9 R                               |          1 | 3.48K Ω, 1%, 1/16W                            |
| SW1                               |          1 | 1switch , 6pins , DPDT-DPDT                   |
| U1                                |          1 | MAX20733                                      |
|                                   |          1 | PCB# 35-900356-01-00                          |

Evaluates: MAX20733

## MAX20733 Schematics

<!-- image -->

│

## MAX20733 Schematics (continued)

<!-- image -->

│

## MAX20733 Schematics (continued)

<!-- image -->

## MAX20733 PCB Layout

Top Silkscreen

<!-- image -->

Bottom Silkscreen

<!-- image -->

Evaluates: MAX20733

│

## MAX20733 PCB Layout (continued)

Layer 1

<!-- image -->

Layer 2

<!-- image -->

│

## MAX20733 PCB Layout (continued)

Layer 3

<!-- image -->

Layer 4

<!-- image -->

│

## MAX20733 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX20733