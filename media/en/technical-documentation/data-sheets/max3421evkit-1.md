<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX3421 evaluation kit-1 (EV kit-1) provides a proven design to evaluate the MAX3421E USB peripheral controller with SPI™ interface. The EV kit contains both a MAX3421E USB host &amp; peripheral controller and a MAX3420E USB peripheral controller for user evaluation  and  development. Connector J4 is wired to plug into a Keil MCB2130 development board that contains a Philips ARM controller (LPC2318). The design uses two separate SPI ports to provide independent operation of the two USB controllers (MAX3421E and MAX3420E).

The MAX3421 EV kit-1 adds USB functionality to any microcontroller, microprocessor, DSP, CPLD, FPGA, or ASIC with an SPI master interface, or five GPIO lines.

The EV kit-1 board comes with the MAX3421EEHJ+ and MAX3420EECJ+ installed.

| DESIGNATION            |   QTY | DESCRIPTION                                                                                                                                                          |
|------------------------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C1, C3, C5, C6, C8, C9 |     6 | 2.2µF ±10%, 10V X5R ceramic capacitors (0805) TDK C2012X5R1A225KB                                                                                                    |
| C2, C4, C7, C10        |     4 | 1µF ±10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105K                                                                                                       |
| C11-C14                |     0 | Not installed, 18pF ±5%, 50V C0G ceramic capacitors (0402) TDK C1005C0G1H180J                                                                                        |
| C15                    |     1 | 0.1µF, 5V (min) X7R ceramic capacitor (0603) TDK C1608X7R1C104K, C1608X7R1E104K, or C1608X7R1H104K Panasonic-ECG ECJ-1VB1C104K KEMET C0603C104K3RAC AVX 0603ZC104KAT |
| D1-D4                  |     4 | Green LEDs (0805) Lumex Opto SML-LX0805UPGC-TR                                                                                                                       |
| D5                     |     1 | 7-segment LED display, common-cathode LITE-ON LSHD-7503                                                                                                              |

SPI is a trademark of Motorola, Inc.

## Features

- ♦ Ideal USB Training and Debugging System
- ♦ Mates to Keil MCB2130 Development Board
- ♦ Can Be Wired into User Systems
- ♦ MAX3421E Can Be Used as a USB Host or Peripheral
- ♦ MAX3420E Provided On-Board as a Test Peripheral
- ♦ MAX3420E Can be Used to Develop USB Peripheral Code

## Ordering Information

| PART NUMBER     | TYPE   | PC INTERFACE   |
|-----------------|--------|----------------|
| MAX3421EVKIT-1+ | EV kit | USB            |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| J1            |     1 | USB type A right-angle receptacle Assmann Electronic AU-Y1006-R                          |
| J2, J5        |     2 | USB type B right-angle receptacles Assmann Electronic AU-Y1007-R                         |
| J3            |     1 | 3-pin header                                                                             |
| J4            |     1 | 2 x 18 right-angle female receptacle                                                     |
| PB1-PB8       |     8 | 6mm light-touch switches with GND (H = 7) Panasonic-ECG EVQ-PBC07K                       |
| R1-R4         |     4 | 33 Ω ±5% resistors (0603)                                                                |
| R5-R16        |    12 | 470 Ω ±5% resistors (0603)                                                               |
| R17, R18      |     2 | 2.2k Ω ±5% resistors (0603)                                                              |
| U1            |     1 | MAX3421EEHJ+ USB peripheral/host controller with SPI interface (32-pin, 5mm x 5mm, TQFP) |
| U2            |     1 | MAX3420EECJ+ USB peripheral controller with SPI interface (32-pin, 7mm x 7mm, TQFP)      |

## MAX3421 Evaluation Kit-1

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| U3            |     1 | MAX4793EUK+ 300mA current-limit switch (SOT23-5) Top mark "AEAG"                     |
| Y1, Y2        |     2 | 12MHz ceramic resonators Murata CSTCE12M0G15                                         |
| Y3, Y4        |     0 | Not installed, 12MHz crystal; 18pF load (HCM49 SMD case) Citizen HCM49-12.000MABJ-UT |

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| -             |     1 | MAX3421EVKIT-1+ PCB                                                     |
| -             |     1 | USB high-speed A-to-B cables, 5ft (1.5m) Assmann Electronic AU-Y1002A-R |
| -             |     1 | 36-pin, dual-row vertical header, with certain pins removed             |
| -             |     1 | Red power wire                                                          |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com        |
| Panasonic Corp.       | 800-344-2112 | www.panasonic.com     |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX3421E and MAX3420E when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3421 Evaluation Kit-1

Figure 1. Block Diagram

<!-- image -->

## Detailed Description of Hardware

The MAX3421 EV kit-1 has three USB connectors (Figure 1). The MAX3421E is wired to USB connectors J1 and J2. Plug a cable into USB Type A connector J1 when using the MAX3421E as a host. Plug a cable into USB Type B connector J2 when using the MAX3421E as a peripheral. Do not use J1 and J2 at the same time. Connectors J1 and J2 have their D+ and D- pins wired together, and are intended to be connected only one at a time. USB peripheral controller MAX3420E is wired to USB Type B connector J5.

When the MAX3421E (U1) operates as a host, the EV kit must supply VBUS power to USB Type A connector J1.  This  power  must in  turn  be  supplied  to  the  EV  kit through power connector J3, which is located in the middle of the board. When mated with a board such as the Keil MCB2130, a 'flying lead' can be attached between J3 and the Keil board's 5V IN test pad. Alternatively, a standard 5VDC lab supply can be used. The MAX4793 (U3) controls and current-limits the VBUS voltage. U1 can turn VBUS power on and off using one of  its  GP-OUT pins (GPOUT7), and can detect a

<!-- image -->

300mA overcurrent condition on GP-IN pin, (GPIN0). Refer to the MAX4793 data sheet for more information.

Buttons  and  lights  are  connected  to  both  the MAX3420E and MAX3421E controllers. U1 drives a 7-segment readout and connects to four pushbuttons (PB1-PB4). U2 drives four LEDS and connects to pushbuttons PB5-PB8.

The MAX3420E and MAX3421E connect to two separate SPI ports (see Table 1). This allows host and peripheral applications to run concurrently in the same code, when implemented on a dual-SPI microcontroller (such as the ARM LPC2318 used on the Keil MCB2130 board). This provides an ideal USB training and debugging system. The host can dispatch USB requests to the peripheral, the peripheral can respond, and the host can evaluate the results-all in the same C code.

## Stand-Alone Operation

Although the MAX3421 EV kit-1 is designed to plug into a Keil MCB2130 board, it also functions as a standalone board that can be wired into any customer system with an SPI interface. Table 1 shows the J4 pins that correspond to the MAX3420E and MAX3421E interfaces.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3421 Evaluation Kit-1

## Table 1. J4 Interface to the MAX3420E and MAX3421E

|   J4 PIN | MAX3420E   | MAX3421E   |
|----------|------------|------------|
|        1 | 3.3V (in)  | 3.3V (in)  |
|        2 | -          | -          |
|        3 | -          | -          |
|        4 | -          | SCK (in)   |
|        5 | -          | MISO (out) |
|        6 | SCK (in)   | -          |
|        7 | -          | -          |
|        8 | MISO (out) | -          |
|        9 | -          | -          |
|       10 | MOSI (in)  | -          |
|       11 | GPX (out)  | -          |
|       12 | SS (in)    | -          |
|       13 | -          | -          |
|       14 | -          | -          |
|       15 | -          | -          |
|       16 | RES (in)   | -          |
|       17 | -          | -          |
|       18 | -          | RES (in)   |

## User Notes:

- 1) The MAX3420E connects to USB Type B connector J5, while the MAX3421E connects both to USB Type A connector J1 and to USB Type B connector J2. The MAX3421E, therefore, can be connected as a host (J1) or a peripheral (J2).
- 2) The user system must supply 3.3V on J4 pins 1-2 to power the board. The 3.3V supply should be capable of providing 100mA.
- 3) The RES pins connect directly to the MAX3420E/ MAX3421E reset pins. It must be driven high for the chip to operate.
- 4) When operating the MAX3421E as a host controller, the user system must provide 5V power on J4 pins 33-34, or on J3 pin 3. This voltage connects to the VBUS pin of USB Type A connector J1 through a current-limiting switch. The user system must supply

|   J4 PIN | MAX3420E   | MAX3421E   |
|----------|------------|------------|
|       19 | -          | -          |
|       20 | -          | -          |
|       21 | -          | -          |
|       22 | -          | INT (out)  |
|       23 | -          | -          |
|       24 | -          | -          |
|       25 | INT (out)  | -          |
|       26 | -          | SS (in)    |
|       27 | -          | SCK (in)   |
|       28 | -          | -          |
|       29 | -          | MISO (out) |
|       30 | -          | GPX (out)  |
|       31 | -          | MOSI (in)  |
|       32 | -          | -          |
|       33 | -          | 5V (in)    |
|       34 | -          | 5V (in)    |
|       35 | GND        | GND        |
|       36 | GND        | GND        |

enough current to power any USB device plugged into J1. The current-limiting switch (a MAX4793) limits the VBUS current to 300mA.

- 5) Keep leads to the target system short (under 6in). Long leads and insufficient grounds can lead to signal ringing and erratic operation.
- 6) When using the MAX3421E as a host, the user program must set the MAX3421E GPO7 pin high to turn on the VBUS switch (U3) that supplies 5V to the  USB Type A connector J1. Note that the MAX3421E output port also drives the 7-segment readout using GPO[6:0]. Therefore, the code that updates the 7-segment readout must preserve the bit  7  setting,  and  the  code  that  turns  VBUS on and off must preserve the bits [6:0] settings. This is easily  accomplished by first reading the states of the output bits, changing only the needed bits, then writing them back.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3421 Evaluation Kit-1

<!-- image -->

Figure 2a. MAX3421 EV Kit-1 Schematic

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3421 Evaluation Kit-1

Figure 2b. MAX3421 EV Kit-1 Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3421 Evaluation Kit-1

<!-- image -->

Figure 3. MAX3421 EV Kit-1 Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3421 Evaluation Kit-1

Figure 4. MAX3421 EV Kit-1 PCB Layout-Component Side

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3421 Evaluation Kit-1

Figure 5. MAX3421 EV Kit-1 PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 9