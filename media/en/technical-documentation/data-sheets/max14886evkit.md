<!-- lastmod 2022-08-04 -->
<!-- image -->

WIXVW

## MAX14886 Evaluation Kit

## General Description

Features

The MAX14886 evaluation kit (EV kit) provides a proven design to evaluate the MAX14886. This high-speed, lowskew,  active  redriver  multiplexer  is  ideal  for  switching between  outputs  of  dual-graphics  systems  and  signal conditioning to meet High-Definition Multimedia Interface (HDMI K ) v1.4 compliance up to 2.25Gbps at an external HDMI output connector. The EV kit contains three sections: an application circuit, characterization circuit, and calibration traces.

The  application  circuit  is  designed  to  demonstrate  the device  in  multiplexing  and  redriving  TMDS®  formatted dual-mode  DisplayPort K signals  into  an  HDMI  output connector. This section of the EV kit operates from a +5V USB supply that is regulated by an on-board +3.3V LDO regulator, which powers the U1 device and companioned DDC logic (U3). All signal traces in the application circuit are 100 I differential controlled-impedance traces.

The characterization circuit is provided for eye diagram evaluation using SMA connectors, controlled-impedance traces, and output bias-Ts to interface with standard 50 I test equipment. This section is powered by an external +3.3V power supply.

The calibration traces match the length and shape of the input traces in the characterization circuit (U4) for further high-frequency analysis.

- S One HDMI Output Connector
- S Two DisplayPort Input Connectors
- S Mini-USB Power Supply
- S Application Circuit with TMDS and DDC Sections
- S Characterization Circuit with SMA Inputs/Outputs and Output Bias-Ts
- S Calibration Traces (50 I Load Trace)
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14886EVKIT+ | EV Kit |

HDMI is a trademark of HDMI Licensing, LLC.

TMDS is a registered trademark of Silicon Image, Inc. DisplayPort is a trademark of the Video Electronics Standards

Association (VESA).

## Component List

| DESIGNATION                                     |   QTY | DESCRIPTION                                                           |
|-------------------------------------------------|-------|-----------------------------------------------------------------------|
| C1-C4, C9-C24, C26, C29, C30, C35, C36, C38-C44 |    32 | 0.1µF Q 10%, 16V X5R ceramic capacitors (0402) Murata GRM155R61C104K  |
| C5-C8, C31-C34                                  |     8 | 4.7µF Q 10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J475K |
| C25, C27, C37                                   |     3 | 10µF Q 10%, 16V X5R ceramic capacitors (0805) Murata GRM21BR61C106K   |
| C28                                             |     1 | 1µF Q 10%, 16V X5R ceramic capacitor (0603) Murata GRM188R61C105K     |
| D1                                              |     1 | 30V, 200mA Schottky diode (3 SOT23) Fairchild BAT54                   |

| DESIGNATION     |   QTY | DESCRIPTION                                       |
|-----------------|-------|---------------------------------------------------|
| D2              |     1 | Green LED (0603)                                  |
| D3              |     1 | 75V, 300mA diode (3 SOT23) Diodes Inc. BAS16-7-F  |
| JU1-JU5         |     5 | 3-pin headers                                     |
| L1, L2          |     2 | 470nH, 75mA inductors (0603) Murata LQW18ANR47J00 |
| P1, P2          |     2 | DisplayPort video connectors Molex 47272-0001     |
| P3              |     1 | HDMI type-A receptacle connector                  |
| P4-P9           |     6 | 50 I SMA edge-mount receptacles                   |
| R1, R4, R15     |     3 | 100k I Q 1% resistors (0402)                      |
| R2, R5          |     2 | 27k I Q 5% resistors (0402)                       |
| R3, R6, R29     |     0 | Not installed, resistors (0402)                   |
| R7, R9-R12, R18 |     6 | 3.3k I Q 1% resistors (0402)                      |

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14886 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| R8            |     1 | 1.5 I Q 5% resistor (0402)                                   |
| R13, R14      |     2 | 2k I Q 1% resistors (0402)                                   |
| R16           |     1 | 10k I Q 1% resistor (0402)                                   |
| R17           |     1 | 220 I Q 5% resistor (0402)                                   |
| R19-R28       |    10 | 49.9 I Q 1% resistors (0402)                                 |
| U1, U4        |     2 | DisplayPort to HDMI switches (40 TQFN-EP) Maxim MAX14886CTL+ |

| DESIGNATION   |   QTY | DESCRIPTION                                          |
|---------------|-------|------------------------------------------------------|
| U2            |     1 | 3.3V LDO (6 SOT23) Maxim MAX6329TPUT+                |
| U3            |     1 | Quad 2:1 multiplexer/ demultiplexer switch (16 VQFN) |
| USB1          |     1 | Mini-USB type-B receptacle connector                 |
| -             |     5 | Shunts (JU1-JU5)                                     |
| -             |     1 | PCB: MAX14886 EVALUATION KIT+                        |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX14886 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX14886 EV kit
- PC with dual-mode DisplayPort output
- Mini-USB cable
- DisplayPort cable
- HDMI cable
- HDMI capable monitor

## Detailed Description of Hardware

The  MAX14886  EV  kit  provides  a  proven  design  to evaluate the MAX14886 high-speed, low-skew, active redriver multiplexer. The device is ideal for switching between outputs of dual-graphics systems and signal conditioning  to  meet  HDMI  v1.4  compliance  up  to 2.25Gbps at an external HDMI output connector. The EV kit  contains  three  sections:  an  application  circuit, characterization circuit, and calibration traces.

The application circuit utilizes 100 I differential controlledimpedance  traces  and  provides  two  DisplayPort  input connectors (P1, P2) allowing for evaluation of the IC in a DisplayPort/HDMI environment.

The characterization circuit utilizes a combination of 100 I differential  and  50 I single-ended  controlled-impedance traces,  and  SMA  connectors  and  output  bias-Ts.  This allows evaluation of eye diagrams, return loss, and other frequency measurements. A separate +3.3V power supply needs to connect between the VCC1 and GND PCB pads.

The lower half of the EV kit provides a set of calibration traces, all of which are matched to the trace's length and shape of the characterization circuit input traces. These traces  provide  a  reference  for  determining  the  input return loss of only the U4 device, when evaluated in the characterization circuit.

<!-- image -->

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify  that  jumpers  JU1,  JU2,  JU3,  and  JU5  are  in their default positions, as shown in Table 1.
- 2) Connect the mini-USB cable from the PC to the miniUSB connector (USB1) on the EV kit.
- 3) Connect  the  DisplayPort  cable  from  the  PC  to  the DisplayPort connector (P2) on the EV kit.
- 4) Connect  the  HDMI  cable  from  the  monitor  to  the HDMI connector (P3) on the EV kit.
- 5) Turn on the monitor.
- 6) Turn on the PC.
- 7) Move the shunt on jumper JU2 to the 1-2 position.
- 8) Verify that the video is present on the monitor.

2    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14886 Evaluation Kit

Table 1. Jumper Descriptions (JU1-JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                          |
|----------|------------------|------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects the SEL pin of the U1 device to VCC, which selects the D_B_ and CKB_ signals of the device. |
| JU1      | 2-3              | Connects the SEL pin of the U1 device to GND, which selects the D_A_ and CKA_ signals of the device. |
| JU2      | 1-2              | Connects the EN1 pin of the U1 device to VCC for normal operation.                                   |
| JU2      | 2-3*             | Connects the EN1 pin of the U1 device to GND for shutdown.                                           |
| JU3      | 1-2*             | Uses the supply of the +3.3V LDO regulator (U2) to power the U1 device.                              |
| JU3      | 2-3              | Uses the supply applied at the VCC and GND PCB pads on the EV kit to power the U1 device.            |
| JU4      | 1-2              | Connects the EN1 pin of the U4 device to VCC1 for normal operation.                                  |
| JU4      | 2-3*             | Connects the EN1 pin of the U4 device to GND for shutdown.                                           |
| JU5      | 1-2*             | Uses the USB supply to power the LDO regulator (U2).                                                 |
| JU5      | 2-3              | Uses the supply applied at the VCC5V and GND PCB pads on the EV kit to power the LDO regulator (U2). |

## Application Circuit

The application circuit section provides an easy way to demonstrate the switching between the two dual-mode DisplayPort  sources  and  redriving  the  signals  to  an HDMI output connector. The application circuit consists of the TMDS and DDC sections.

## Application Supplies

The  TMDS  and  DDC  sections  must  be  powered  by +3.3V. There are two ways to get this voltage, through  the  on-board  LDO  regulator  (U2)  or  by  directly connecting  a  +3.3V  power  supply.  When  JU3  is  in  the 1-2  position,  the  application  circuit  is  powered  by  the on-board LDO regulator. If JU3 is in the 2-3 position, apply a +3.3V supply at the VCC and GND PCB pads on the EV kit.

The  LDO  regulator  and  DDC  sections  of  the  application circuit  can  be  powered  by  the  USB  when  JU5  is  in  the 1-2  position,  or  by  a  +5V  external  supply  connected  to the  VCC5V and GND PCB pads when JU5 is in the 2-3 position. When using the on-board LDO regulator to supply power, there is an LED (D2) to indicate that power is present.

The EV kit is fully assembled and factory tested. Follow the  instructions  in  the Quick  Start section  for  proper device evaluation.

## Switching DisplayPort

By  placing  jumper  JU1  in  the  1-2  position,  the  U1 device switches and redrives the TMDS signal, and the multiplexer/demultiplexer  (U3)  switches  the  DDC/HPD signals  from  the  DisplayPort  input  connector  (P2)  to the  HDMI  output  connector  (P3)  of  the  U1  device. By placing JU1 in the 2-3 position, the U1 device switches  and  redrives  the  TMDS  signal,  and  the  multiplexer/ demultiplexer (U3) switches the DDC/HPD signals from the DisplayPort input connector (P1) to the HDMI output connector (P3) of the U1 device.

<!-- image -->

## Enable

The U1 device is enabled when placing a shunt in the 1-2 position on jumper JU2. Place the shunt on JU2 in the 2-3 position to enter shutdown. Before enabling the device, always power up and connect the monitor.

## Characterization Circuit

The characterization circuit is provided as a separate  test  circuit  for  high-frequency  evaluation  of the  device.  The  characterization  circuit  section  allows for detailed analysis on a single channel pair of inputs. All channel inputs have similar performance by design. This circuit provides differential SMA inputs and outputs, with a combination of controlled-impedance traces and high-frequency output bias-Ts.

## Input Supply (VCC1)

The  characterization  circuit  is  powered  by  an  external +3.3V power supply connected between the VCC1 and GND PCB pads. The GND in the application circuit is not continuous with the GND in the characterization circuit section.

## Enable

The U4 device is enabled when placing a shunt in the 1-2 position on jumper JU4. Place the shunt on JU4 in the 2-3 position to enter shutdown.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX14886 Evaluation Kit

## Testing

The device outputs are open-collector differential switches, steering  currents  through  the  connector  and  cables  into a  50 I HDMI  load  biased  at  +3.3V.  A  high-bandwidth DC-coupled  probe  with  a  50 I load  biased  at  +3.3V (e.g., Tektronix P7313) is therefore best suited to evaluate the  device's  performance.  If  such  a  probe  is  not  available,  a  common  AC-coupled  50 I instrument  with  SMA connectors,  such  as  a  scope  or  vector  network  analyzer  (VNA),  can  still  be  used  to  evaluate  the  device's performance in the characterization circuit.

In the default configuration of the characterization circuit section,  a  high-frequency  bias-T  (250MHz  to  1GHz), consisting of RF inductors (L1, L2) and low-ESR capacitors (C38, C39), is connected to the U4 device outputs. The  bias-T  produces  a  50 I DC  impedance  biased at  VCC  and  high  impedance  in  the  250MHz  to  1GHz high-frequency  range.  When  a  50 I SMA  instrument is  AC-coupled,  the  device  load  closely  resembles  the HDMI monitor. In  practice,  frequencies  below  250MHz (e.g., HDMI clock) result in 'sloping top waveforms' due to  the  termination-impedance  frequency  dependence and cannot be evaluated here.

For  the  best  evaluation  results,  and  to  measure  the device's performance at HDMI clock frequencies below

250MHz, use a high-bandwidth DC-coupled probe with a 50 I load biased at +3.3V (e.g., Tektronix P7313). Start by removing L1 and L2 and replace C38 and C39 with 0 I 0402 resistors. Use the same DC-coupled probe to evaluate  the  device's  performance  with  double  HDMI termination.  Reconfigure  the  EV  kit  as  follows:  replace L1/L2 with 200 I 0603 resistors, R25/R26 and C38/C39 with 0 I 0402 resistors, and R18 with a 3k I 0402 resistor.

Always  bias  the  DC-coupled  probe  at  +3.3V  first  and then connect it to P6 and P7 on the EV kit with the SMA cables. Next apply a +3.3V supply to the VCC1 and GND PCB pads on the EV kit and enable the U4 device by positioning jumper JU4 in the 1-2 position. Consult the probe manual for proper measurement procedures.

## Calibration Traces

The bottom half of the EV kit provides a set of calibration  traces  that  can  be  used  for  further  analysis.  The lengths  and  shapes  of  the  calibration  traces  from  the SMA  connectors  (P8,  P9)  are  matched  to  the  traces going  from  the  SMA  connectors  (P4,  P5)  to  the  U4 device of the inputs of the characterization circuit. Each calibration  trace  includes  a  0.1 F F  0402  DC-blocking capacitor and a 50 I load termination exactly matching the characterization circuit section components.

4    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14886 Evaluation Kit

Figure 1a. MAX14886 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

WIXKW

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX14886 Evaluation Kit

Figure 1b. MAX14886 EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

6    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

XI

## MAX14886 Evaluation Kit

Figure 1c. MAX14886 EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX14886 Evaluation Kit

Figure 2. MAX14886 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX14886 EV Kit PCB Layout-Component Side

<!-- image -->

8    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14886 Evaluation Kit

Figure 4. MAX14886 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

<!-- image -->

Figure 5. MAX14886 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX14886 Evaluation Kit

Figure 6. MAX14886 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX14886 EV Kit Component Placement GuideSolder Side

<!-- image -->

10     �������������������������������������������������������������������������������������

<!-- image -->

## MAX14886 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.