<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX15066 Evaluation Kit

## General Description

## Features

The MAX15066 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX15066  high-efficiency,  4A, step-down regulator with integrated switches. The EV kit is preset for 1.8V output at load currents up to 4A from a 4.5V to 16V input supply.

- S 4.5V to 16V Input Voltage Range
- S Fixed 500kHz Switching Frequency
- S Adjustable Output Voltage Range from 0.606V to (0.9 x VIN)
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15066EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1            |     1 | 47 F F Q 20%, 25V aluminum electrolytic capacitor (6.3mm x 5.8mm) Panasonic EEEFK1E470P |
| C2            |     1 | 10 F F Q 10%, 25V X5R ceramic capacitor (1206) Murata GRM31CR61E106K                    |
| C3            |     1 | 0.1 F F Q 10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E104K                   |
| C4            |     1 | 1 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C105K                     |
| C7, C8        |     2 | 0.01 F F Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E103K                 |
| C9            |     1 | 47 F F Q 10%, 10V X5R ceramic capacitor (1210) Murata GRM32ER61A476K                    |
| C11           |     0 | Not installed, ceramic capacitor (1210)                                                 |
| C12, C14      |     0 | Not installed, ceramic capacitors (0603)                                                |

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C13           |     1 | 2.7nF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H272K |
| C15           |     1 | 47pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H470J   |
| EN            |     1 | 2-pin header Sullins PEC36SAAN                                      |
| L1            |     1 | 2.2 F H, 15A inductor TOKO FDA1055-2R2M                             |
| R2, R6, R8    |     3 | 10k I Q 1% resistors (0603)                                         |
| R4            |     0 | Not installed, resistor (0603)                                      |
| R5            |     1 | 20k I Q 1% resistor (0603)                                          |
| R7            |     1 | 5.11k I Q 1% resistor (0603)                                        |
| R10           |     1 | 1 I Q 1% resistor (0603)                                            |
| U1            |     1 | Synchronous 4A buck converter (16 WLP) Maxim MAX15066EWE+           |
| -             |     1 | Shunt                                                               |
| -             |     1 | PCB: MAX15066 EVALUATION KIT+                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15066 Evaluation Kit

## Component suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Sullins Electronics Corp.              | 760-744-0125 | www.sullinselectronics.com  |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX15066 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX15066	EV	kit
- 12V,	4A	DC	power	supply
- Load	capable	of	4A
- Digital	voltmeter

## Detailed Description of Hardware

The MAX15066 EV kit evaluates the MAX15066 current-mode, synchronous, DC-DC buck converter. The EV kit is preset for 1.8V and delivers an output current up to 4A with high efficiency. The EV kit operates from an input voltage of 4.5V to 16V. The EV kit provides an adjustable  output  voltage  from  0.606V  to  90%  of  the input  voltage  through  resistor-dividers  R5  and  R6.  The EV kit features independent device-enable control (EN) and power-good (PGOOD) signals that allow for flexible power sequencing.

## Soft-Start (SS)

The  EV  kit  utilizes  an  adjustable  soft-start  function  to limit inrush current during startup. The soft-start time is adjusted by the value of C7, the external capacitor from SS  to  GND.  By  default,  C7  is  currently  0.01μF,  which gives a soft-start time of approximately 1.2ms. To adjust the  soft-start  time,  determine  C7  using  the  following formula:

<!-- formula-not-decoded -->

where tSS is the required soft-start time in seconds and C7 is in farads.

<!-- image -->

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supply until all connections are completed .

- 1) Connect the positive terminal of the 12V supply to the  IN  connector  and  the  negative  terminal  to  the nearest GND connector.
- 2) Connect the positive terminal of the 4A load to the VOUT  connector  and  the  negative  terminal  to  the nearest GND connector.
- 3) Connect  the  digital  voltmeter  across  the  VOUT connector and the nearest GND connector.
- 4) Verify that a shunt is not installed on the EN jumper.
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that the voltmeter displays 1.8V.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15066 Evaluation Kit

## Setting Output Voltage

The EV kit can be adjusted from 0.606V to (0.9 x VIN) by changing the values of R5 and R6. To determine the value of the resistor-divider, first select R6 from 5k I to 50k I and  then  use  the  following  equation  to  calculate R5:

<!-- formula-not-decoded -->

where  the  feedback  threshold  voltage  VFB  =  0.606V (typ). When regulating an output of 0.606V, short FB to OUT and keep R6 connected from FB to GND.

If a different output voltage is desired, revisit the feedback resistor-divider (R5), the inductor, and output-capacitor calculations (refer to the Inductor Selection and OutputCapacitor Selection sections  in  the  MAX15066  IC  data sheet).  The  compensation components (R7, C13, C14, and C15) must be recalculated to ensure loop stability (refer to the Compensation Design Guidelines section in the MAX15066 IC data sheet).

<!-- image -->

## Regulator Enable (EN)

To shut down the converter, install a shunt on jumper EN. For  normal  operation,  remove  the  shunt  from  EN.  See Table 1 to configure jumper EN.

## Power Good (PGOOD)

PGOOD  is  an  open-drain output that goes high impedance  when  VFB  exceeds  0.56V  (typ).  PGOOD is  internally  pulled  low  when  VFB  falls  below  0.545V (typ).  PGOOD also becomes low during shutdown. On the  EV  kit,  the  PGOOD  test  point  is  pulled  up  to  VDD through resistor R8. Use the GND PCB pad as a ground reference for this signal.

## Table 1. Regulator Enable (EN) Jumper EN Description

| SHUNT POSITION   | DESCRIPTION         |
|------------------|---------------------|
| Installed        | Disables the device |
| Not installed*   | Normal operation    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX15066 Evaluation Kit

Figure 1. MAX15066 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX15066 Evaluation Kit

<!-- image -->

<!-- image -->

Figure 2. MAX15066 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX15066 EV Kit PCB Layout-Component Side

Figure 4. MAX15066 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 5. MAX15066 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX15066 Evaluation Kit

Figure 6. MAX15066 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX15066 EV Kit Component Placement GuideSolder Side

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX15066 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/10           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.