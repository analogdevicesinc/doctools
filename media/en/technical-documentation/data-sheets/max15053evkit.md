<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX15053 Evaluation Kit

## General Description

## Features

The MAX15053 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX15053  high-efficiency,  2A, step-down regulator with integrated switches. The EV kit is preset for 1.8V output at load currents up to 2A from a  2.7V  to  5.5V  input  supply.  The  IC  features  a  1MHz fixed  switching  frequency,  which  allows  the  EV  kit  to achieve an all-ceramic capacitor design and fast transient responses.

- S Operates from a 2.7V to 5.5V Input Supply
- S All-Ceramic Capacitor Design
- S 1MHz Switching Frequency
- S Output Voltage Range: 0.6V up to (0.94 x VIN)
- S Enable Input/Power-Good Output
- S Selectable Skip-Mode/Forced PWM Functionality
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15053EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1, C8        |     0 | Not installed, ceramic capacitors (1206)                                                  |
| C2, C7        |     2 | 22 F F Q 20%, 6.3V X5R ceramic capacitors (1206) Murata GRM31CR60J226K TDK C3216X5R0J226M |
| C3            |     1 | 1000pF Q 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H102K Murata GRM188R71H102K   |
| C4            |     1 | 22000pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H223K TDK C1608X7R1H223K  |
| C5            |     0 | Not installed, ceramic capacitor (0603)                                                   |
| C6            |     1 | 3300pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H332K TDK C1608X7R1H332K   |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                           |
|---------------|-------|-------------------------------------------------------------------------------------------------------|
| C9            |     1 | 100pF Q 10%, 6.3V X7R ceramic capacitor (0603) TDK C1608X7R1H101K                                     |
| JU1, JU3      |     2 | 3-pin headers                                                                                         |
| JU2           |     1 | 2-pin header                                                                                          |
| L1            |     1 | 1 F H, 9A, 13.1m I inductor (5.2mm x 5.5mm x 3mm) Vishay IHLP2020CZER1R0M11 Vishay IHLP2020CZER1R0M01 |
| R1            |     1 | 8.06k I Q 1% resistor (0603)                                                                          |
| R2            |     1 | 4.02k I Q 1% resistor (0603)                                                                          |
| R3            |     1 | 2.32k I Q 1% resistor (0603)                                                                          |
| R4            |     1 | 20k I Q 5% resistor (0603)                                                                            |
| R5            |     1 | 1 I Q 1% resistor (0603)                                                                              |
| R6            |     1 | 1k I Q 5% resistor (0603)                                                                             |
| U1            |     1 | 2A step-down regulator (9 WLP) Maxim MAX15053EWL+                                                     |
| -             |     3 | Shunts                                                                                                |
| -             |     1 | PCB MAX15053 EVALUATION KIT+                                                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15053 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX15053 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX15053 EV kit
- 5V, 2A DC power supply
- Load capable of 2A
- Digital voltmeter

## Reference Input and Soft-Start (SS/REFIN)

The MAX15053 utilizes an adjustable soft-start function to limit inrush current during startup. The soft-start time is adjusted by the value of C4, the external capacitor from SS/REFIN to GND. By default, C4 is currently 22000pF, which gives a soft-start time of approximately 1.3ms. To adjust the soft-start time, determine C4 using the following formula:

<!-- formula-not-decoded -->

where tSS is the required soft-start time in seconds and C4 is in farads. C4 should be a minimum 1nF capacitor between SS/REFIN and GND.

When  no  external  reference  is  applied  at  SS/REFIN, the  device  uses  the  internal  0.6V  reference.  When  an external  reference  is  used,  soft-start  needs  to  be  provided externally.

## Setting the Output Voltage

The EV kit can be adjusted from 0.6V up to 0.94 x VIN by  changing  the  values  of  resistors  R1  and  R2.  To determine the value of the resistor-divider, first select R1 between 2k I and 10k I and then use the following equation to calculate R2:

<!-- formula-not-decoded -->

where VFB is equal to the reference voltage at SS/REFIN and VOUT is the output. If no external reference  is  applied  at  SS/REFIN,  the  internal  reference  is automatically  selected  and  VFB  becomes  0.6V.  In  this case, R2 is not needed for VOUT = 0.6V.

When  R2  is changed, compensation  components must  be  recalculated  to  ensure  loop  stability  (refer  to the Compensation  Design  Guidelines section  in  the MAX15053 IC data sheet).

## Regulator Enable (EN)

The IC features an enable input. For normal operation, a shunt should be installed on pins 1-2 of jumper JU1. To disable the output, install a shunt on pins 2-3 of JU1. See Table 1 for JU1 shunt positions.

## Procedure

The  EV  kit is  fully  assembled  and  tested.  Follow the steps below to verify the board operation. Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1)  Connect the positive terminal of the 5V supply to the IN pad and the negative terminal to the nearest PGND pad.
- 2)  Connect  the  positive  terminal  of  the  2A  load  to  the OUT  pad  and  the  negative  terminal  to  the  nearest PGND pad.
- 3)  Connect  the  digital  voltmeter  across  the  OUT  pad and the nearest PGND pad.
- 4)  Verify that a shunt is installed on pins 1-2 of jumper JU1.
- 5)  Verify that a shunt is installed on pins 2-3 of jumper JU3.
- 6)  Turn on the DC power supply.
- 7)  Enable the load.
- 8)  Verify that the voltmeter displays 1.8V.

## Detailed Description of Hardware

The  MAX15053  EV  kit  provides  a  proven  design  to evaluate the MAX15053 high-efficiency, 2A, step-down regulator  with  integrated  switches.  The  applications include  distributed  power  systems,  portable  devices, and  preregulators.  The  EV  kit  is  preset  for  1.8V  output  at  load  currents  up  to  2A  from  a  2.7V  to  5.5V input  supply.  The  IC  features  a  1MHz  fixed  switching frequency,  which  allows  the  EV  kit  to  achieve  an  allceramic capacitor design and fast transient responses.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX15053 Evaluation Kit

Table 1. Regulator Enable (EN) Jumper JU1 Description

| SHUNT POSITION   | MAX15053 OUTPUT   |
|------------------|-------------------|
| 1-2*             | Enabled           |
| 2-3              | Disabled          |

* Default position.

Table 2. Skip-Mode Input (SKIP) Jumper JU2 Description

| SHUNT POSITION   | SKIP PIN        | MODE                |
|------------------|-----------------|---------------------|
| Installed        | Connected to EN | Skip-mode operation |
| Not installed*   | Unconnected     | Forced PWM          |

* Default position.

Table 3. R4 Pullup Reference Jumper JU3 Description

| SHUNT POSITION   | R4 PULLUP REFERENCE            |
|------------------|--------------------------------|
| 1-2              | External user-supplied voltage |
| 2-3*             | On-board IN supply             |

<!-- image -->

## Skip-Mode Input (SKIP)

The  IC  offers  selectable  skip-mode  functionality  to reduce current consumption and achieve a higher efficiency at light loads. To operate in skip mode, install a shunt on jumper JU2. For normal operation, remove the shunt from JU2. See Table 2 for JU2 shunt positions.

## Power Good (PGOOD)

PGOOD  is  an  open-drain  output  that  asserts  when VFB  is  above  555mV  (typ),  and  asserts  low  if  VFB  is below  530mV  (typ).  On  the  EV  kit,  the  PGOOD  pad is  pulled  up  through  resistor  R4.  The  EV  kit  gives the  option  to  pull  up  PGOOD  to  the  IN  supply  or  a user-supplied external voltage through configuration of jumper JU3. See Table 3 for JU3 shunt positions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX15053 Evaluation Kit

Figure 1. MAX15053 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX15053 Evaluation Kit

<!-- image -->

Figure 2. MAX15053 EV Kit Component Placement GuideComponent Side

Figure 3. MAX15053 EV Kit Component PCB LayoutComponent Side

<!-- image -->

Figure 4. MAX15053 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX15053 Evaluation Kit

Figure 5. MAX15053 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

Figure 6. MAX15053 EV Kit PCB Layout-Solder Side

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX15053 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.