<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

## Features

The MAX15040 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX15040  high-efficiency,  4A, step-down regulator with integrated switches. The EV kit is  preset  for  1.8V  output  at  load  currents  up  to  4A  from a  2.4V  to  3.6V  input  supply.  The  MAX15040  features  a 1MHz  switching  frequency,  which  allows  the  EV  kit  to achieve an all-ceramic capacitor design and fast-transient responses. The EV kit achieves up to 95% efficiency.

The MAX15040 EV kit PCB comes with a MAX15040EWE+ installed.

- S Operates from 2.4V to 3.6V Input Supply
- S All-Ceramic Capacitor Design
- S 1MHz Switching Frequency
- S Output-Voltage Range: 0.6V to (0.9 x VIN)
- S Lead(Pb)-Free and RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15040EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1            |     0 | Not installed, ceramic capacitor (0805)                                |
| C2, C9        |     2 | 22 F F Q 20%, 6.3V X5R ceramic capacitors (0805) Murata GRM21BR60J226M |
| C3, C8        |     2 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K    |
| C4            |     1 | 1 F F Q 10%, 16V X5R ceramic capacitor (0603) TDK C1608X5R1C105K       |
| C5            |     1 | 820pF Q 10%, 16V ceramic capaci- tor (0603) AVX 0603YC821KAT2A         |
| C6            |     1 | 33pF Q 5%, 16V COG ceramic capacitor (0603) TDK C1608C0G1H330J         |
| C7            |     1 | 0.033 F F Q 10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E333K   |
| C10           |     1 | 470pF Q 10%, 50V, X7R ceramic capacitor (0603) Murata GRM188R71H471K   |

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| C11           |     0 | Not installed, ceramic capacitor (0805)                                       |
| C12           |     0 | Not installed, ceramic capacitor (0603)                                       |
| JU1           |     1 | 2-pin header                                                                  |
| L1            |     1 | 0.47 F H, 17.5A inductor (6.86mm x 6.47mm x 3.00mm) Vishay IHLP2525CZERR47M06 |
| R1            |     1 | 10 I Q 5% resistor (0603)                                                     |
| R2            |     1 | 100k I Q 1% resistor (0603)                                                   |
| R3            |     1 | 20k I Q 5% resistor (0603)                                                    |
| R4            |     1 | 432 I Q 1% resistor (0603)                                                    |
| R5            |     1 | 8.06k I Q 1% resistor (0603)                                                  |
| R6            |     1 | 4.02k I Q 1% resistor (0603)                                                  |
| R7            |     1 | 4.99k I Q 1% resistor (0603)                                                  |
| R8            |     0 | Not installed, resistor (0603)                                                |
| U1            |     1 | Step-down regulator (16 WLP) Maxim MAX15040EWE+                               |
| -             |     1 | Shunt                                                                         |
| -             |     1 | PCB: MAX15040 EVALUATION KIT+                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15040 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX15040 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- U MAX15040 EV kit
- U 3.3V/4A DC power supply
- U One load capable of 4A
- U One digital voltmeter

## Soft-Start and Reference Input (REFIN/SS)

The MAX15040 utilizes an adjustable soft-start function to limit inrush current during startup. The soft-start time is adjusted by the value of C7, the external capacitor from REFIN/SS to GND. By default, C7 is currently 0.033µF, which gives a soft-start time of approximately 2.5ms. To adjust the soft-start time, determine the C7 using the following formula:

<!-- formula-not-decoded -->

where tSS is the required soft-start time in seconds and C7 is in farads. C7 should be a minimum of 1nF capacitor between REFIN/SS and GND.

When no external reference is applied at the REFIN/SS, the device uses the internal 0.6V reference. If a different reference voltage is needed, connect a reference up to (VDD - 1.85V) across the PCB pads of REFIN/SS and the nearest GND pad.

When an external reference is applied to REFIN/SS, softstart must be provided externally and the external reference source must be able to sink 8µA soft-start current.

## Setting Output Voltage

The  MAX15040  EV  kit  can  be  adjusted  from  0.6V  to 90% of VIN  by  changing  the  values  of  R5  and  R6.  To determine the value of the resistor-divider, first select R5 between 2k I to  10k I .  Then use the following equation to calculate R6:

<!-- formula-not-decoded -->

where VFB is equal to the reference voltage at REFIN/SS and VOUT is the output. If no external reference is applied at  REFIN/SS,  the  internal  reference  is  automatically selected and VFB becomes 0.6V. In this case, R6 is not needed for VOUT = 0.6V.

When  R5  is  changed,  compensation  components  R4, C10,  R7,  C5,  and  C6  must  be  recalculated  to  ensure loop stability (refer to the Compensation Design section in the MAX15040 IC data sheet).

## Procedure

The  MAX15040  EV  kit  is  fully  assembled  and  tested. Follow  the  steps  below  to  verify  the  board  operation. Caution: Do not turn on power supply until all connections are completed.

- 1)  Connect the positive terminal of the 3.3V supply to the VIN pad and the negative terminal to the nearest GND pad.
- 2)  Connect  the  positive  terminal  of  the  4A  load  to  the VOUT pad and the negative terminal to the nearest GND pad.
- 3)  Connect the digital  voltmeter  across  the  VOUT  pad and the nearest GND pad.
- 4)  Verify that a shunt is not installed on JU1.
- 5)  Turn on the DC power supply.
- 6)  Enable the load.
- 7)  Verify that the voltmeter displays 1.8V.

## Detailed Description of Hardware

The MAX15040 EV kit provides a proven design to evaluate the MAX15040 high-efficiency, 4A, step-down regulator with integrated switches. The applications include server, point-of-load, ASIC/CPU/DSP, DDR, base-station, telecom and networking, and RAID control power supplies.  The  EV  kit  is  preset  for  1.8V  output  at  load  currents  up  to  4A  from  a  2.4V  to  3.6V  input  supply.  The MAX15040 features a 1MHz fixed switching frequency, which allows the EV kit to achieve an all-ceramic capacitor design and fast-transient responses.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX15040 Evaluation Kit

## Regulator Enable (EN)

To  shut  down  the  converter,  install  a  shunt  on  jumper JU1. For normal operation, remove the shunt from JU1. See Table 1 to configure jumper JU1.

Table 1. Regulator Enable (EN) Jumper JU1 Description

| SHUNT POSITION   | DESCRIPTION           |
|------------------|-----------------------|
| 1-2              | Disables the MAX15040 |
| Open*            | Normal operation      |

<!-- image -->

Figure 1. MAX15040 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## Power Good (PWRGD)

PWRGD is an open-drain output that goes high impedance when  VFB  is  above  92.5%  x  VREFIN/SS  and  VREFIN/SS is  above  0.54V.  PWRGD  becomes  low  when  VFB  is below 90% of VREFIN/SS for at least 48 clock cycles or VREFIN/SS  is  below  0.54V.  PWRGD  also  becomes  low during shutdown. On the EV kit, the PWRGD PCB pad is pulled up to VDD through resistor R3. Use the GND PCB pad as a ground reference for this signal.

## MAX15040 Evaluation Kit

<!-- image -->

Figure 2. MAX15040 EV Kit Component Placement GuideComponent Side

Figure 3. MAX15040 EV Kit Component PCB LayoutComponent Side

<!-- image -->

Figure 4. MAX15040 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX15040 Evaluation Kit

Figure 5. MAX15040 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

Figure 6. MAX15040 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.