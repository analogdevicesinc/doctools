<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX14885E Evaluation Kit

## General Description

## Features

The  MAX14885E  evaluation  kit  (EV  kit) is a fully assembled and tested surface-mount PCB that utilizes the MAX14885E device to implement a complete video graphics array (VGA) 2:2 crossover switch, which is  specifically applicable for switchable graphics in PC laptops.

VGA input/output connections are provided to easily interface the EV kit with VGA-compatible devices. Pushbuttons on the EV kit control all the device functions. This  EV  kit  powers  itself  from  either  a  VGA  source,  or optionally through a 5V power supply.

- S Complete VGA 2:2 Crossover Switch
- S Self-Powered or Single 5V Power Supply
- S VGA Inputs and Outputs
- S Jumper-Free Design
- S Can Be Wired into Existing Designs
- S Surface-Mount Construction
- S Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14885EEVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION                                                    |   QTY | DESCRIPTION                                                            |
|----------------------------------------------------------------|-------|------------------------------------------------------------------------|
| BA, BB, GA, GB, HA, HB, RA, RB, SCLA, SCLB, SDAA, SDAB, VA, VB |     0 | Not installed, test points                                             |
| C1, C9, C10                                                    |     3 | 10 F F Q 10%, 6.3V X7R ceramic capacitors (1206) Murata GRM31CR70J106K |
| C2-C8, C11-C14                                                 |    11 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| D1, D2, D3                                                     |     3 | 40V Schottky diodes (SOD123) Vishay SD103AW Diodes Inc. SD103AW        |
| D4-D7                                                          |     4 | Ultra-bright green LEDs (1206)                                         |
| D8-D11                                                         |     4 | Yellow LEDs (1206)                                                     |
| J1-J4                                                          |     4 | R/A, D-sub, HD 15-position female VGA ports                            |
| J5                                                             |     1 | 8-pin header, 0.1in centers                                            |
| P1, P3, P4                                                     |     3 | Red multipurpose test points                                           |
| P2                                                             |     1 | Black multipurpose test point                                          |

| DESIGNATION         |   QTY | DESCRIPTION                                                              |
|---------------------|-------|--------------------------------------------------------------------------|
| Q1                  |     1 | npn transistor (SOT23) Fairchild MMBT5088                                |
| R1, R15-R18         |     0 | Not installed, resistors (0603) R1 is short (PC trace); R15-R18 are open |
| R2-R9               |     8 | 1.5k I Q 5% resistors (0603)                                             |
| R10, R19-R22        |     5 | 4.7k I Q 5% resistors (0603)                                             |
| R11-R14             |     4 | 33 I Q 5% resistors (0603)                                               |
| SW1, SW2, SW3       |     3 | Pushbuttons, normally open                                               |
| U1                  |     1 | VGA 2:2 crossover switch (40 TQFN-EP*) Maxim MAX14885EETL+               |
| U2, U3, U6, U7, U10 |     5 | On/off controllers with debounce (6 SOT23) Maxim MAX16054AZT+            |
| U4, U5, U8, U9      |     4 | SPDT analog switches (6 SOT23) Maxim MAX4624EZT+                         |
| -                   |     1 | PCB: MAX14885E EVALUATION KIT+                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14885E Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX14885E when contacting these component suppliers.

## Quick Start (Application Circuit)

## Recommended Equipment

- MAX14885E	EV	kit
- Two	VGA	sources	(e.g.,	notebook	computer)
- Two	VGA-compatible	devices	(e.g.,	monitor)
- Four	VGA	cables

## Detailed Description of Hardware

The MAX14885E EV kit is a fully assembled and tested surface-mount PCB that utilizes the MAX14885E device to implement a complete video graphics array (VGA) 2:2 crossover switch.

VGA  input/output  connections  are  provided  to  easily interface  the  EV  kit  with  VGA-compatible  devices.  The standard option of the EV kit powers directly from either VGA source.

Three  pushbutton  switches  (SW1,  SW2,  and  SW3) provide all control for this EV kit.  Test points optionally allow powering the EV kit from an external source.

## Input Power Supply

The EV kit powers directly from either a VGA source, or optionally through an external power supply. This is all accomplished  automatically  with  Schottky  diodes  D1, D2, and D3.

The user can optionally power the EV kit from an external  power  supply.    In  this  case,  connect  a  5V  supply between P1 (EXT 5V) and P2 (GND).  The actual voltage reaching the circuitry can be monitored at P3 (VCC) to account for the drop across the diode.

## EV Kit Control

The  device  functionality  occurs  through  pushbutton switches  SW1,  SW2,  and  SW3,  with  state  indication through  eight  LEDs  (D4-D11).  SW1  and  SW2  control source-to-monitor signal connections RGBHV and DDC, respectively. SW3 enables/disables the device.

## Procedure

The  MAX14885E  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Connect the first VGA source to J1 (VGA SOURCE 'A').
- 2) Connect  the  second  VGA  source  to  J2  (VGA SOURCE 'B').
- 3) Connect  the  first  VGA-compatible  device  to  J3 (VGA MONITOR '1').
- 4) Connect the second VGA-compatible device to J4 (VGA MONITOR '2').
- 5) Enable both VGA sources.
- 6) Verify that LEDs D5, D7, D9, and D11 are all lit.
- 7) Verify that the monitor connected to VGA MONITOR '1'  displays  the  material  from  the  VGA  source  at VGA SOURCE 'A'.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14885E Evaluation Kit

## RGBHV Control (SW1)

Each depression of switch SW1 (RGBHV (GREEN)) alternates connecting one of the VGA sources to one of the VGA monitors.  One green LED on the source side and one on the monitor side light  to  indicate  which  source connects to which monitor for the R\_, G\_, B\_, H\_, and V\_ signals.

## DDC Control (SW2)

Each depression of switch SW2 (DDC (AMBER)) alternates connecting one of the VGA sources to one of the VGA monitors.  One yellow LED on the source side and one on the monitor side light  to  indicate  which  source connects  to  which  monitor  for  the  SCL\_  and  SDA\_ signals.

## Device Enable (SW3)

Each  depression  of  switch  SW3  (ENABLE)  alternates between enabling and disabling the device.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## External Connections

The EV kit can be modified to connect directly to a circuit that provides VGA signals, such as a graphics controller IC. To do this, perform the following steps:

- 1) Remove U2, U3, U6, U7, and U10.
- 2) Connect a supply at the same voltage as the I/O on the circuit, between P4 (VVL) and P2 (GND).
- 3) Wire the control signals as desired, through jumper J5.
- 4) Wire the VGA signals to seven or all 14 test points.
- 5) Connect a 5V supply between P1 (EXT 5V) and P2 (GND). Turn this supply on.
- 6) Turn on the supply to P4 (VVL).

## MAX14885E Evaluation Kit

Figure 1a. MAX14885E EV Kit Schematic-Application Circuit (Sheet 1 of 2)

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14885E Evaluation Kit

<!-- image -->

Figure 1b. MAX14885E EV Kit Schematic-Characterization Circuit (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX14885E Evaluation Kit

Figure 2. MAX14885E EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX14885E EV Kit PCB Layout-Component Side

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14885E Evaluation Kit

Figure 4. MAX14885E EV Kit PCB Layout-Internal Layer 2

<!-- image -->

<!-- image -->

Figure 5. MAX14885E EV Kit PCB Layout-Internal Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX14885E Evaluation Kit

Figure 6. MAX14885E EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX14885E EV Kit Component Placement GuideSolder Side

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14885E Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9