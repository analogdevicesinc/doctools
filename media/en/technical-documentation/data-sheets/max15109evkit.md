<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX15109  evaluation kit (EV kit) provides a proven design to evaluate the MAX15109 high-efficiency, 8A,  step-down  regulator  with  integrated  switches  in  a 20-bump wafer-level package (WLP). The EV kit provides four output voltages at load currents up to 8A from a 2.7V to  5.5V  input  supply.  The  output  voltages  are  set  using two VID control inputs. The device features a 1MHz fixed switching frequency, which allows the EV kit to achieve an all-ceramic capacitor design and fast transient responses.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                       |
|---------------|-------|---------------------------------------------------------------------------------------------------|
| C1, C2, C19   |     3 | 10 F F Q 10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J106K TDK C1608X5R0J106K         |
| C3, C4, C21   |     0 | Not installed, ceramic capacitors (0603)                                                          |
| C6            |     1 | 2200pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H222K TDK C1608X7R1H222K           |
| C7-C10        |     4 | 47 F F Q 20%, 6.3V X5R ceramic capacitors (1206) Murata GRM31CR60J476M TDK C3216X5R0J476M         |
| C14           |     1 | 100pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H101J TDK C1608C0G1H101J             |
| C15           |     1 | 4700pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H472K TDK C1608X7R1H472K           |
| C16           |     1 | 0.033 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C333K Taiyo Yuden EMK107BJ333KA |

<!-- image -->

## MAX15109 Evaluation Kit

## Evaluates: MAX15109

## Features

- S Operates from a 2.7V to 5.5V Input Supply
- S All-Ceramic Capacitor Design
- S 1MHz Switching Frequency
- S VID Control Inputs for Selecting Output Voltage
- S Enable Input/Power-Good Output
- S Skip-Mode Operation
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------|
| C20           |     1 | 1 F F Q 10%, 6.3V X7R ceramic capacitor (0603) Murata GRM188R70J105K              |
| C22           |     0 | Not installed, 220 F F Q 20%, 10V aluminum electrolytic capacitor (6.3mm x 7.7mm) |
| C23           |     1 | 2.2 F F Q 10%,10V X7R ceramic capacitor (0603) Murata GRM188R71A225K              |
| JU1           |     1 | 2-pin header                                                                      |
| JU2, JU3      |     2 | 3-pin headers                                                                     |
| L1            |     1 | 0.33 F H, 18A inductor Vishay IHLP2525BD01R33M01                                  |
| R1            |     1 | 0 I Q 5% resistor (0603)                                                          |
| R2, R11, R12  |     0 | Not installed, resistors (0603)                                                   |
| R3            |     1 | 2.43k I Q 1% resistor (0603)                                                      |
| R4, R5        |     2 | 100k I Q 5% resistors (0603)                                                      |
| R6            |     1 | 10 I Q 5% resistor (0603)                                                         |
| R8            |     1 | 1 I Q 1% resistor (0805)                                                          |
| R9            |     1 | 1k I Q 5% resistor (0603)                                                         |
| R10, R13      |     2 | 10k I Q 5% resistors (0603)                                                       |
| U1            |     1 | 8A current-mode buck converter (20 WLP) Maxim MAX15109EWP+                        |
| -             |     3 | Shunts                                                                            |
| -             |     1 | PCB: MAX15109 EVALUATION KIT                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are completed.

- 1)  Connect the positive terminal of the 5V supply to the IN PCB pad and the negative terminal to the nearest PGND PCB pad.
- 2)  Connect  the  positive  terminal  of  the  8A  load  to  the OUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3)  Connect  the  digital  voltmeter  across  the  OUT  PCB pad and the nearest PGND PCB pad.
- 4)  Verify that a shunt is installed on jumper JU1.
- 5)  Verify that a shunt is installed on pins 2-3 on jumper JU2.
- 6)  Verify  that  a  shunt  is  installed  across  pins  2-3  on jumper JU3.
- 7)  Turn on the DC power supply.
- 8)  Enable the load.
- 9)  Verify that the voltmeter displays 0.9V.

<!-- image -->

## MAX15109 Evaluation Kit Evaluates: MAX15109

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX15109 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX15109	EV	kit
- 5V,	3A	DC	power	supply
- Load	capable	of	sinking	8A
- Digital	voltmeter

## Detailed Description of Hardware

The  MAX15109  EV  kit  provides  a  proven  design  to evaluate  the  MAX15109  high-efficiency,  8A,  step-down regulator  with  integrated  switches.  The  applications include  distributed  power  systems,  portable  devices, and preregulators. The EV kit output voltage is selected using the VID0 and VID1 control inputs at load currents up  to  8A  from  a  2.7V  to  5.5V  input  supply.  The  device automatically  operates  in  skip  mode  to  achieve  higher efficiency at light loads. The device features a 1MHz fixed switching frequency, which allows the EV kit to achieve an all-ceramic capacitor design and fast transient response. A placeholder for an input aluminum electrolytic capacitor (C22) is provided to damp the input if long wires are used; they are not required in a tight system design.

## Soft-Start (SS)

The  device  utilizes  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of C16, the external capacitor from SS to GND. By default, C16 is currently 0.033 F F,  which gives a soft-start time of approximately 2ms. To adjust the soft-start time, determine C16 using the following formula:

<!-- formula-not-decoded -->

where t SS is the required soft-start time in seconds and C16  is  in  farads.  This  capacitor  sets  the  slew  rate  to reduce input current at startup when the output changes state under VID control.

## Regulator Enable (EN)

The device features an enable input. For normal operation, a shunt should be installed across jumper JU1. To disable the  output,  remove  the  shunt  on  JU1  and  the  EN  pin  is pulled to PGND through resistor R4. See Table 1 for jumper JU1 settings.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Setting the Output Voltage

The  output  voltage  is  selected  by  using  the  VID0  and VID1 control  inputs.  The  3-pin  jumper  JU2  controls  the

Table 1. Regulator Enable (EN) Jumper JU1 Description

| SHUNT POSITION   | EN PIN                    | DEVICE OUTPUT   |
|------------------|---------------------------|-----------------|
| Installed*       | Connected to IN           | Enabled         |
| Not installed    | Pulled to PGND through R4 | Disabled        |

## MAX15109 Evaluation Kit

## Evaluates: MAX15109

VID1 logic input, while the 3-pin jumper JU3 controls the VID0 logic input. Table 2 summarizes the output voltages.

Table 2. Output Voltages Jumpers JU2 and JU3 Description

| SHUNT POSITION   | SHUNT POSITION   | VID0   | VID1   | OUT (V)   |
|------------------|------------------|--------|--------|-----------|
| JU3              | JU2              | VID0   | VID1   | OUT (V)   |
| 2-3*             | 2-3*             | 0      | 0      | 0.9       |
| 2-3              | 1-2              | 0      | 1      | 0.8       |
| 1-2              | 2-3              | 1      | 0      | 0.725     |
| 1-2              | 1-2              | 1      | 1      | 0.675     |

<!-- image -->

Figure 1. MAX15109 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX15109 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX15109 Evaluation Kit

## Evaluates: MAX15109

Figure 3. MAX15109 EV Kit Component PCB LayoutComponent Side

<!-- image -->

Figure 4. MAX15109 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 5. MAX15109 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

## MAX15109 Evaluation Kit

## Evaluates: MAX15109

Figure 6. MAX15109 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX15109 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15109EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX15109 Evaluation Kit

## Evaluates: MAX15109

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/11           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.