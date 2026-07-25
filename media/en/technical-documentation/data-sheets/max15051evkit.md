<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

## Features

The MAX15051 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX15051  high-efficiency,  4A, step-down regulator with integrated switches. The EV kit is preset for 1.8V output at load currents up to 4A from a  2.9V  to  5.5V  input  supply.  The  IC  features  a  1MHz fixed  switching  frequency,  which  allows  the  EV  kit  to achieve an all-ceramic capacitor design and fast transient responses.

The EV kit PCB comes with a MAX15051EWE+ installed.

- S Operates from 2.9V to 5.5V Input Supply
- S All-Ceramic Capacitor Design
- S 1MHz Switching Frequency
- S Output Voltage Range from 0.6V to (0.9 x VIN)
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15051EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1, C4        |     2 | 22 F F Q 10%, 10V X7R ceramic capacitors (1206) Murata GRM31CR71A226K                     |
| C2, C6        |     2 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K TDK C1608X7R1H104K |
| C3            |     0 | Not installed, capacitor (0805)                                                           |
| C5            |     0 | Not Installed, capacitor (1206)                                                           |
| C7            |     1 | 820pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H821K                       |
| C8            |     1 | 33pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H330J                         |
| C9            |     1 | 680pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H681K                       |
| C10           |     1 | 2.2 F F Q 10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A225K                     |

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C11           |     1 | 0.033 F F Q 10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E333K |
| C12           |     0 | Not installed, capacitor (0603)                                         |
| JU1           |     1 | 2-pin header                                                            |
| L1            |     1 | 0.47 F H, 16A inductor Würth 744312047                                  |
| R1            |     1 | 8.06k I Q 1% resistor (0603)                                            |
| R2            |     1 | 4.02k I Q 1% resistor (0603)                                            |
| R3            |     1 | 6.19k I Q 1% resistor (0603)                                            |
| R4            |     1 | 20k I Q 5% resistor (0603)                                              |
| R5            |     1 | 48.7 I Q 1% resistor (0603)                                             |
| R6            |     1 | 100k I Q 5% resistor (0603)                                             |
| R8            |     0 | Not installed, resistor (0603)                                          |
| U1            |     1 | Synchronous buck regulator (16 WLP) Maxim MAX15051EWE+                  |
| -             |     1 | Shunt                                                                   |
| -             |     1 | PCB: MAX15051 EVALUATION KIT+                                           |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Würth Electronik GmbH & Co. KG         | 201-785-8800 | www.we-online.com           |

Note: Indicate that you are using the MAX15051 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15051 Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX15051	EV	kit
- 5V,	4A	DC	power	supply
- Load	capable	of	4A
- Digital	voltmeter

where tSS is the required soft-start time in seconds and C11 is in farads. C11 should be a 1nF (min) capacitor between REFIN/SS and GND.

When no external reference is applied at REFIN/SS, the device uses the internal 0.6V reference.

## Setting Output Voltage

The EV kit can be adjusted from 0.6V to (0.9 x VIN) by changing  the  values  of  R1  and  R2.  To  determine  the value of the resistor-divider, first select R1 between 2k I to 10k I , then use the following equation to calculate R2:

<!-- formula-not-decoded -->

where VFB is equal to the reference voltage at REFIN/SS and VOUT is the output. If no external reference  is  applied  at  REFIN/SS,  the  internal  reference  is automatically  selected  and  VFB  becomes  0.6V.  In  this case, R2 is not needed for VOUT = 0.6V.

When  R2  is  changed,  compensation  components  C7, C8, C9, R3, and R5 must be recalculated to ensure loop stability (refer to the Compensation Design section in the MAX15050/MAX15051 IC data sheet).

## Regulator Enable (EN)

To  shut  down  the  converter,  install  a  shunt  on  jumper JU1. For normal operation, remove the shunt from JU1. See Table 1 to configure JU1.

## Power Good (PWRGD)

PWRGD  is  an  open-drain output that goes high impedance when VFB is above 92.5% x VREFIN/SS and VREFIN/SS is above 0.54V. PWRGD becomes low when VFB is below 90% of VREFIN/SS for at least 48 clock cycles or VREFIN/SS is below 0.54V. PWRGD also becomes low during shutdown. On the EV kit, the PWRGD PCB pad is pulled up to VDD through resistor R4. Use the GND PCB pad as a ground reference for this signal.

## Table 1. Regulator Enable (EN) Jumper JU1 Description

| SHUNT POSITION   | DESCRIPTION      |
|------------------|------------------|
| Installed        | Disables the IC  |
| Not installed*   | Normal operation |

## Procedure

The  EV  kit is  fully  assembled  and  tested.  Follow the steps below to verify the board operation. Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1)  Connect the positive terminal of the 5V supply to the IN pad and the negative terminal to the nearest GND pad.
- 2)  Connect  the  positive  terminal  of  the  4A  load  to  the OUT  pad  and  the  negative  terminal  to  the  nearest GND pad.
- 3)  Connect  the  digital  voltmeter  across  the  OUT  pad and the nearest GND pad.
- 4)  Verify that a shunt is not installed on jumper JU1.
- 5)  Turn on the DC power supply.
- 6)  Enable the load.
- 7)  Verify that the voltmeter displays 1.8V.

## Detailed Description of Hardware

The  MAX15051  EV  kit  provides  a  proven  design  to evaluate the MAX15051 high-efficiency, 4A, step-down regulator  with  integrated  switches.  The  applications include server, point-of-load, ASIC/CPU/DSP, DDR, base stations,  telecom  and  networking,  and  RAID  control power supplies. The EV kit is preset for 1.8V output at load currents up to 4A from a 2.9V to 5.5V input supply. The IC features a 1MHz fixed switching frequency, which allows  the  EV  kit  to  achieve  an  all-ceramic  capacitor design and fast transient responses.

## Reference Input and Soft-Start (REFIN/SS)

The  IC  utilizes  an  adjustable  soft-start  function  to  limit inrush  current  during  startup.  The  soft-start  time  is adjusted by C11, the external capacitor from REFIN/SS to GND. By default, C11 is 0.033 F F, which gives a softstart time of approximately 2.5ms. To adjust the soft-start time, determine C11 using the following equation:

<!-- formula-not-decoded -->

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX15051 Evaluation Kit

<!-- image -->

Figure 1. MAX15051 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX15051 Evaluation Kit

<!-- image -->

Figure 2. MAX15051 EV Kit Component Placement GuideComponent Side

Figure 3. MAX15051 EV Kit Component PCB LayoutComponent Side

<!-- image -->

Figure 4. MAX15051 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX15051 Evaluation Kit

Figure 5. MAX15051 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

<!-- image -->

Figure 6. MAX15051 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## Evaluates:  MAX15051

## MAX15051 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6