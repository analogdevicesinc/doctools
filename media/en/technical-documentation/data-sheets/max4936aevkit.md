<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX4936A Evaluation Kit

## Evaluates: MAX4936A/MAX4937A

## General Description

The MAX4936A evaluation kit (EV kit) provides a proven design to evaluate the MAX4936A high-voltage transmit/ receive (T/R) switch used in ultrasound applications.

The  EV  kit  provides  SMA  connectors  for  interfacing  to the application circuit transmitters and receivers' outputs and  inputs,  respectively.  Test  points  are  provided  for monitoring the channels' transmit/receive signals. The EV kit circuit also provides various PCB pads for configuring the load at the transmitters' outputs and receivers' inputs.

The  EV  kit  comes  with  the  MAX4936ACTO+  installed, but can also be used to evaluate the MAX4937A with IC replacement of U1.

Warning: The  EV  kit  is  designed  to  operate  with  high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit or the power sources connected to it must be careful to follow safety procedures appropriately to work with high-voltage electrical equipment.

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1-C16        |     0 | Not installed, ceramic capacitors (0603)                               |
| C17, C19, C21 |     3 | 10 F F Q 20%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J106M |
| C18, C20, C22 |     3 | 1 F F Q 10%, 16V, X7R ceramic capacitors (0603) Murata GRM188R71C105K  |
| D1-D8         |     0 | Not installed, diodes (3 SOT23)                                        |
| D9-D16        |     8 | Small-signal diodes (3 SOT23) Fairchild MMBD700                        |
| GND           |     8 | Black test points                                                      |
| JU1-JU8       |     8 | 2-pin headers                                                          |
| JU9-JU13      |     5 | 3-pin headers                                                          |
| L1-L8         |     0 | Not installed, inductors (0805)                                        |

## Features

- S SMA Connectors for Transmitter/Receiver Signals
- S Test Points for Monitoring Transmitter/Receiver Signals
- S Independent Enable Control for Two Banks of Four Channels
- S RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

* EP = Exposed pad.

| DESIGNATION                     |   QTY | DESCRIPTION                                              |
|---------------------------------|-------|----------------------------------------------------------|
| R1-R8                           |     0 | Not installed, resistors (2512)                          |
| R9-R16                          |     0 | Not installed, resistors (0603)                          |
| SWA1-SWA8, SWB1-SWB8, SWC1-SWC8 |    24 | SMA PC-mount connectors                                  |
| TP1-TP16                        |    16 | Yellow test points                                       |
| TP17-TP24, VCC, VDD             |    10 | Red test points                                          |
| U1                              |     1 | High-voltage T/R switch (42 TQFN-EP*) Maxim MAX4936ACTO+ |
| VEE                             |     1 | White test point                                         |
| -                               |    13 | Shunts                                                   |
| -                               |     1 | PCB: MAX4936A EVALUATION KIT                             |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX4936A when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4 or visit Maxim's website at www.maxim-ic.com.

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn on the power supplies until all connections are completed.

- 1) Verify that jumpers are in their default positions, as shown in Table 1.
- 2) Connect the +3.3V power-supply positive and negative terminals to the VDD and GND test points, respectively.
- 3) Connect the  +5V  power-supply  positive  and  negative terminals to the VCC and GND test points, respectively.
- 4) Connect  the  -5V  power-supply  ground  and  negative terminals to the GND and VEE test points, respectively.
- 5) Connect  the  oscilloscope  channel  1  to  test  point TP1. Connect the oscilloscope ground to the GND test point.

## Table 1. Jumper Descriptions (JU1-JU13)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                      |
|----------|------------------|------------------------------------------------------------------|
| JU1      | Installed        | SWC1 is connected to GND. Internal diodes are used for clamping. |
| JU1      | Not installed*   | SWC1 is open. Diodes can be used as grass-clipping diodes.       |
| JU2      | Installed        | SWC2 is connected to GND. Internal diodes are used for clamping. |
| JU2      | Not installed*   | SWC2 is open. Diodes can be used as grass-clipping diodes.       |
| JU3      | Installed        | SWC3 is connected to GND. Internal diodes are used for clamping. |
| JU3      | Not installed*   | SWC3 is open. Diodes can be used as grass-clipping diodes.       |
| JU4      | Installed        | SWC4 is connected to GND. Internal diodes are used for clamping. |
| JU4      | Not installed*   | SWC4 is open. Diodes can be used as grass-clipping diodes.       |
| JU5      | Installed        | SWC5 is connected to GND. Internal diodes are used for clamping. |
| JU5      | Not installed*   | SWC5 is open. Diodes can be used as grass-clipping diodes.       |
| JU6      | Installed        | SWC6 is connected to GND. Internal diodes are used for clamping. |
| JU6      | Not installed*   | SWC6 is open. Diodes can be used as grass-clipping diodes.       |
| JU7      | Installed        | SWC7 is connected to GND. Internal diodes are used for clamping. |
| JU7      | Not installed*   | SWC7 is open. Diodes can be used as grass-clipping diodes.       |
| JU8      | Installed        | SWC8 is connected to GND. Internal diodes are used for clamping. |
| JU8      | Not installed*   | SWC8 is open. Diodes can be used as grass-clipping diodes.       |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4936A Evaluation Kit

## Evaluates: MAX4936A/MAX4937A

## Quick Start

## Required Equipment

- MAX4936A	EV	kit
- +3.3V,	100mA	power	supply
- +5V,	100mA	power	supply
- -5V,	100mA	power	supply
- Four	SMA	cables
- 4-channel Q 100V pulse generator
- 4-channel	oscilloscope
- 6) Connect  the  oscilloscope  channel  2  to  test  point TP2. Connect the oscilloscope ground to the GND test point.
- 7) Connect  the  oscilloscope  channel  3  to  test  point TP3. Connect the oscilloscope ground to the GND test point.
- 8) Connect  the  oscilloscope  channel  4  to  test  point TP4. Connect the oscilloscope ground to the GND test point.
- 9) Configure the pulse generator's four outputs to the following settings:
- Set	the	signal	period	to	approx	20ns	with	a	50% duty cycle.
- Set	 the	 number	 of	 cycles	 at	 three.	 Set	 the	 bar repetition frequency at 5kHz.
- Set	the	pulse	amplitude	to Q 100V.
- 10)  Disable the pulse-generator outputs.
- 11)  Using the SMA cables, connect the pulse-generator outputs  to  the  EV  kit  board's  SWC1-SWC4  SMA connectors.
- 12)  Turn on the power supplies.
- 13) Place shunts across pins 1-2 on jumpers JU9 and JU10.
- 14)  Enable the pulse-generator outputs.
- 15)  Verify  the  high-voltage  signals  at  the  oscilloscope channels 1-4.

## MAX4936A Evaluation Kit

## Evaluates: MAX4936A/MAX4937A

## Table 1. Jumper Descriptions (JU1-JU13) (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                |
|----------|------------------|------------------------------------------------------------|
| JU9      | 1-2              | Channels I-4 (SW_1-SW_4) enabled.                          |
| JU9      | 2-3*             | Channels 1-4 (SW_1-SW_4) disabled.                         |
| JU10     | 1-2              | Channels 5-8 (SW_5-SW_8) enabled.                          |
| JU10     | 2-3*             | Channels 5-8 (SW_5-SW_8) disabled.                         |
| JU11     | 1-2              | See Table 4 for proper JU11, JU12, and JU13 configuration. |
| JU11     | 2-3*             | See Table 4 for proper JU11, JU12, and JU13 configuration. |
| JU12     | 1-2              | See Table 4 for proper JU11, JU12, and JU13 configuration. |
| JU12     | 2-3*             | See Table 4 for proper JU11, JU12, and JU13 configuration. |
| JU13     | 1-2              | See Table 4 for proper JU11, JU12, and JU13 configuration. |
| JU13     | 2-3*             | See Table 4 for proper JU11, JU12, and JU13 configuration. |

## Detailed Description of Hardware

The  MAX4936A  EV  kit  evaluates  the  MAX4936A  octal, high-voltage T/R switch used in ultrasound applications. The IC includes the T/R switch, grass-clipping diodes and is able to perform both transmit and receive operations. The IC features low on-impedance in the entire ultrasound frequency  range,  with  an  extremely  low  15mW  (typ) power dissipation  per  channel.  The  receive  path  is  low impedance during low-voltage receive and high impedance during high-voltage transmit, providing protection to the receive circuitry. The low-voltage receive path is high bandwidth, low noise, low distortion, and low jitter.

The EV kit circuit passes high-voltage pulses from SMA connectors  at  the  SWC\_  pins  to  corresponding  SMA connectors  at  the  SWA\_  pins.  Extra  resistors  (R1-R8, 2512  PCB  pads)  and  capacitors  (C1-C8,  0603  PCB pads) set the load at the SWA\_ outputs.

Low-voltage pulses are passed through from SWA\_ pins to the corresponding SMA connectors at the SWB\_ pins. The  EV  kit  provides  PCB  pads  for  resistors  R9-R16, capacitors  C9-C16  (0603  PCBs),  and  inductors  L1-L8 (0805 PCB pads) for setting the load at the SWB\_ outputs.

The  EV  kit  provides  yellow  test  points  TP1-TP16  and black GND test points to monitor high-voltage signals at the  transmitter  outputs/receiver  inputs.  Red  test  points TP17-TP24 and black GND test points are available to monitor the low-voltage signals at the SWB\_ terminals.

The IC features control inputs (EN1 and EN2) to enable/ disable  the  channels  and  digital  inputs  (S2,  S1,  and S0)  to  set  the  channel  diode  bias  current.  The  EV  kit utilizes  jumpers  to  set  these  inputs.  Jumpers  JU9  and JU10  enable/disable  channels  1-4  (SW\_1-SW\_4)  and channels 5-8 (SW\_5-SW\_8), respectively. See the Enable Inputs  (EN1,  EN2) section  for  additional  information.

<!-- image -->

Jumpers JU11, JU12, and JU13 are used to set the diode bridge  bias  current.  See  the Setting  the  Diode  Bridge Bias Current section for additional information.

The EV kit can also be used to evaluate the MAX4937A IC.  Refer  to  the Evaluating  the  MAX4937A section  for additional information.

## Power Supplies

The  EV  kit  requires  three  power  supplies  for  proper operation.  The  power  supplies  provide  digital  power  to the  IC's  digital  input  (VDD),  and  positive  and  negative supplies for the analog inputs (VCC and VEE), respectively.

The EV kit's digital supply is connected at the red VDD and black GND test points and has a +1.62V to +5.5V input  voltage  operating  range.  The  EV  kit's  analog positive supply is connected at the red VCC and black GND test points and has a +2.5V to +5.5V input voltage operating  range.  The  analog  negative  supply  VEE  is connected to the white VEE and black GND test points and has a -2.5V to -5.5V input voltage operating range.

## Enable Inputs (EN1, EN2)

Jumpers JU9 and JU10 are provided to enable/disable the  IC  channels.  JU9  (EN1)  enables/disables  channels  1-4  (SW\_1-SW\_4).  Place  a  shunt  across  pins  1-2 to enable channels 1-4. Install a shunt across pins 2-3 to  disable  channels  1-4.  JU10  (EN2)  enables/disables channels 5-8 (SW\_5-SW\_8). Place a shunt across pins 1-2 to enable channels 5-8. Install a shunt across pins 2-3  to  disable  channels  5-8.  See  Tables  2  and  3  for proper jumper configurations.

To  control  EN1  and  EN2  with  external  signals,  remove the shunts on JU9 and JU10 and apply a control signal and its ground connections at pins 2-3 of each jumper, respectively.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Anti-Parallel Diodes

The flexible  design  of  the  EV  kit  allows  the  use  of  the internal anti-parallel diodes between SWC\_ and SWA\_, as  either  grass  clippers  or  as  voltage  clamps.  To  use the  anti-parallel  diodes  between  SWC\_  and  SWA\_  as grass clippers, leave jumpers JU1-JU8 open and apply a  high-voltage  signal  to  SWC\_  (see  Table  1).  In  this configuration,  connect  SWA\_  to  an  appropriate  load and SWB\_ to a low-noise amplifier (LNA) or another lowvoltage receiver. Use PCB pads D9-D16 to connect the external diodes on SWB\_.

To  use  the  anti-parallel  diodes  as  clamps,  ground  the SWC\_ terminal by installing shunts on jumpers JU1-JU8 (see Table 1). Drive high-voltage signals through external glass-clipping diodes connected to SWB\_, and connect SWA\_ to an LNA or another low-voltage receiver.

<!-- image -->

## Setting the Diode Bridge Bias Current

The IC uses a diode bridge topology. On the EV kit, use jumpers JU11, JU12, and JU13 to set the amount of bias current into the diode bridge for enabled channels. See Table 4 for proper jumper settings for adjusting the diode bridge bias current.

## Evaluating the MAX4937A

The EV Kit PCB can also be used to evaluate the pincompatible MAX4937A IC. The MAX4937A includes only the T/R switch for each channel and performs the receive operation  only.  PCB  pads  D1-D8  are  available  for connecting  external  diodes  for  grass-clipping  when evaluating the MAX4937A.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4936A Evaluation Kit

## Evaluates: MAX4936A/MAX4937A

## Table 2. EN1 Enable Control (JU9)

| SHUNT POSITION   | EN1 PIN                                    | CHANNEL 1-4 STATUS                            |
|------------------|--------------------------------------------|-----------------------------------------------|
| 1-2              | Connected to VDD                           | Enabled                                       |
| 2-3*             | Connected to GND                           | Disabled                                      |
| Not installed    | Connected to an external signal controller | Dependent on the voltage level applied at EN1 |

## Table 3. EN2 Enable Control (JU10)

| SHUNT POSITION   | EN2 PIN                                    | CHANNEL 5-8 STATUS                            |
|------------------|--------------------------------------------|-----------------------------------------------|
| 1-2              | Connected to VDD                           | Enabled                                       |
| 2-3*             | Connected to GND                           | Disabled                                      |
| Not installed    | Connected to an external signal controller | Dependent on the voltage level applied at EN2 |

## Table 4. Diode Bridge Current Setting (JU11, JU12, JU13)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | TYPICAL DIODE BRIDGE CURRENT (mA)   | TYPICAL DIODE BRIDGE CURRENT (mA)   |
|------------------|------------------|------------------|-------------------------------------|-------------------------------------|
| JU11             | JU12             | JU13             | VCC = +3.3V                         | VCC = +5V                           |
| 2-3*             | 2-3*             | 2-3*             | 0                                   | 0                                   |
| 2-3              | 2-3              | 1-2              | 0.28                                | 0.47                                |
| 2-3              | 1-2              | 2-3              | 0.56                                | 0.94                                |
| 2-3              | 1-2              | 1-2              | 0.84                                | 1.41                                |
| 1-2              | 2-3              | 2-3              | 1.11                                | 1.89                                |
| 1-2              | 2-3              | 1-2              | 1.39                                | 2.36                                |
| 1-2              | 1-2              | 2-3              | 1.67                                | 2.83                                |
| 1-2              | 1-2              | 1-2              | 1.95                                | 3.30                                |

## MAX4936A Evaluation Kit

## Evaluates: MAX4936A/MAX4937A

<!-- image -->

Figure 1. MAX4936A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evalutes: MAX4936/7

<!-- image -->

Figure 2. MAX4936A EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4936 Evalution Kit

## Evalutes: MAX4936/7

<!-- image -->

Figure 3. MAX4936A EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4936 Evalution Kit

## Evalutes: MAX4936/7

<!-- image -->

Figure 4. MAX4936A EV Kit PCB Layout-Layer 2 (GND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4936 Evalution Kit

## Evalutes: MAX4936/7

<!-- image -->

Figure 5. MAX4936A EV Kit PCB Layout-Layer 3 (Power)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4936 Evalution Kit

## Evalutes: MAX4936/7

<!-- image -->

Figure 6. MAX4936A EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4936 Evalution Kit

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX4936AEVKIT# | EV Kit |

# Denotes RoHS compliant.

11

## MAX4936A Evaluation Kit

## Evaluates: MAX4936A/MAX4937A

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.