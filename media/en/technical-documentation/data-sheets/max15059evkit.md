<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX15059 Evaluation Kit

## General Description

## Features

The  MAX15059  evaluation  kit  (EV  kit)  demonstrates the  MAX15059  APD  biasing  pulse-width  modulation (PWM) step-up DC-DC converter with an internal power switch, current monitor, and adjustable current limiting. The  step-up  converter  switches  at  400kHz.  The  EV  kit operates from a DC supply voltage of 2.8V to 5.5V and is  configured  to  deliver  approximately  70V,  and  0  to 4mA of current at the output. The output voltage can be configured from VIN + 5V to 76V by replacing a resistor  or  adjusting  the  CNTRL  voltage.  The  EV  kit  demonstrates  the  IC's  APD  fast  current-limit,  undervoltagelockout (UVLO), and thermal-shutdown features.

The  EV  kit  also  features  an  APD  input  load-simulator  circuit  for  current  monitoring  and  step-response measurements.

The  EV  kit  comes  with  the  MAX15059AETE+  installed, but can also be used to evaluate the MAX15059BETE+.

Warning: Voltages exceeding 42V may exist on the VOUT, APD, MOUT, and PGND PCB pads.

- S 2.8V to 5.5V Supply Voltage Range
- S 70V Output Voltage (Approximate)
- S 0 to 4mA Output Current
- S Demonstrates APD Fast Current Limit
- S Demonstrates Undervoltage Lockout
- S Demonstrates Thermal-Shutdown Feature
- S MOUT Output Overvoltage Protection Through Clamping Circuit
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15059EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1            |     1 | 1 F F Q 10%, 10V X5R ceramic capacitor (0402) Murata GRM155R61A105K       |
| C3            |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K     |
| C4, C5        |     2 | 0.1 F F Q 10%, 100V X7R ceramic capacitors (0805) AVX 08051C104KAT        |
| C6            |     1 | 0.01 F F Q 10%, 100V X7R ceramic capacitor (0805) Murata GRM21BR72A103K   |
| C7            |     0 | Not installed, ceramic capacitor (0402)                                   |
| C9            |     1 | 10 F F Q 10%, 10V X5R ceramic capacitor (0805) Murata GRM219R61A106K      |
| D1            |     1 | 100V, 150mA Schottky diode (SOD123) Diodes Inc. BAT46W-7-F (Top Mark: L6) |

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| JU1, JU3      |     2 | 2-pin headers                                                             |
| JU2           |     1 | 3-pin header                                                              |
| L1            |     1 | 4.7 F H, 1.5A inductor Coilcraft ME3220-472MLB                            |
| N1            |     1 | 100V, 1.5A n-channel MOSFET (SOT23) Vishay Si2328DS-T1-E3 (Top Mark: CHV) |
| R1            |     1 | 348k I Q 1% resistor (0603)                                               |
| R2            |     1 | 6.34k I Q 1% resistor (0402)                                              |
| R3            |     1 | 1k I Q 1% resistor (0402)                                                 |
| R5            |     1 | 2.87k I Q 1% resistor (0402)                                              |
| R6            |     1 | 10k I Q 1% resistor (0402)                                                |
| R7            |     1 | 10k I Q 1% resistor (0805)                                                |
| R8            |     1 | 20k I Q 1% resistor (1206)                                                |
| R9            |     1 | 3.3k I Q 1% resistor (0805)                                               |
| R10           |     1 | 100 I Q 1% resistor (0402)                                                |
| TP1, TP2, TP4 |     3 | PC mini red test points                                                   |
| TP3, TP6      |     2 | PC mini black test points                                                 |
| TP5           |     1 | PC mini yellow test point                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15059 Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                           |
|---------------|-------|-------------------------------------------------------|
| U1            |     1 | APD boost converter (16 TQFN-EP*) Maxim MAX15059AETE+ |

| DESIGNATION   |   QTY | DESCRIPTION                   |
|---------------|-------|-------------------------------|
| -             |     3 | Shunts                        |
| -             |     1 | PCB: MAX15059 EVALUATION KIT+ |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Diodes Inforporated                    | 805-446-4800 | www.diodes.com              |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX15059 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX15059 EV kit
- 2.8V to 5.5V, 1A DC power supply
- 0 to 5mA adjustable load rated for at least 76V
- Digital multimeter (DMM)

Warning: Voltages exceeding 42V may exist on the VOUT, APD, MOUT, and PGND PCB pads.

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1)  Verify that  a  shunt  is  installed  on  jumper  JU1 (70V output).
- 2)  Verify that a shunt is installed on pins 1-2 of jumper JU2 (enabled).
- 3)  Verify  that  a  shunt  is  not  installed  on  jumper  JU3 (APD current limit is programmed by R5).
- 4)  Connect the adjustable load to the APD and SGND PCB pads.
- 5)  Connect  the  power  supply  to  the  VIN  pad  and  the power-supply ground to the PGND pad.
- 6)  Connect  the  DMM  across  the  APD  and  SGND PCB pads.
- 7)  Turn on the power supply and set it to 3.3V.
- 8)  Verify that the DMM reads approximately 70V.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description of Hardware

The  MAX15059  EV  kit  demonstrates  the  MAX15059 in  a  small,  16-pin  TQFN  package  with  internal  power switch,  current  monitor,  and  adjustable  current-limiting circuit  features.  The  circuit's  PWM  step-up  DC-DC converter  is  designed  for  APD  biasing,  switches  at 400kHz,  and  is  configured  to  deliver  approximately 70V,  and  0  to  4mA  of  current  to  the  APD  output.  The output  voltage  can  be  reconfigured  from  VIN  +  5V  to 76V  by  replacing  resistor  R1,  or  adjusting  the  CNTRL voltage.  The  EV  kit  demonstrates  the  IC's  APD  fast current-limit, UVLO, and thermal-shutdown features.

The  converter  circuit's  PCB  footprint  is  8mm  x  18mm. The EV kit operates from a 2.8V to 5.5V DC supply voltage  and  provides  up  to  4mA  at  the  APD  output.  The EV  kit's  APD  load-simulator  circuit  is  used  for  current monitoring  and  step-response  measurements.  The  circuit is comprised of MOSFET N1, resistors R7, R8, R9, and test  points  TP1,  TP2,  and  TP3  (SGND).  Test  point TP4 provides access to the IC's BIAS signal. Voltages exceeding  42V  may  exist  on  TP4. Additionally,  bulk capacitor C9 is provided in case long connecting cables are  used  to  power  the  EV  kit  during  lab  evaluation. Capacitor C9 is not required in a typical design.

## SHDN and Enable

The  EV  kit  features  a  jumper  to  enable  and  disable U1. Jumper JU2 disables the EV kit when the shunt is installed  on  pins  2-3.  Installing  the  shunt  on  pins  1-2 enables the EV kit. Refer to the Shutdown section in the MAX15059 IC data sheet for more information. See Table 1 for jumper JU2 settings.

<!-- image -->

## MAX15059 Evaluation Kit

Table 1. SHDN and Enable (JU2)

| SHUNT POSITION   | SHDN PIN          | EV KIT OPERATION   |
|------------------|-------------------|--------------------|
| 1-2*             | Connected to VIN  | Enabled            |
| 2-3              | Connected to SGND | Disabled           |

* Default position.

## Table 2. Output-Voltage Programming (JU1)

| SHUNT POSITION   | CNTRL PIN                       | OUTPUT-VOLTAGE PROGRAMMING                                                                                              |
|------------------|---------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| Installed*       | Connected to VIN                | Fixed output voltage: Internal reference voltage used.                                                                  |
| Not installed    | Connected to external reference | Programmable output voltage: Apply an external reference voltage (< 1.2V) at CNTRL PCB pad.                             |
| Not installed    | Connected to external reference | Fixed output voltage: Apply an external reference voltage (> 1.3V)** at CNTRL PCB pad; internal reference voltage used. |

## Output-Voltage Programmability

The EV kit features a jumper to set the output voltage  (VOUT/APD)  programmability.  VOUT/APD  is programmed  by  connecting  an  external  reference voltage source to the CNTRL and SGND  PCB pads.  Remove  the  shunt  at  jumper  JU1  to  use  the programmability feature and apply a reference voltage &lt;  1.2V  to  the  CNTRL  PCB  pad.  When  the  voltage applied  to  the  CNTRL  pad  is  &gt;  1.3V,  the  IC's  internal reference is used. See Table 2 for jumper JU1 settings.

The output voltage at VOUT is set by resistors R1 and R2 to 70V when jumper JU1 is installed. To reconfigure the output for a different voltage (VIN + 5V to 76V), select a new surface-mount 0603 resistor for R1. Refer to the Setting the Output Voltage section in the MAX15059 IC data sheet for selecting the R1 value.

<!-- image -->

## Table 3. RLIM (JU3)

| SHUNT POSITION   | CURRENT-LIMIT THRESHOLD   |
|------------------|---------------------------|
| Installed        | Default setting of 4.6mA  |
| Not installed*   | Programmed by R5          |

## Current-Monitor Output (MOUT) and APD Load Simulator

The  MOUT  PCB  pad  provides  a  current-monitor  output  that  sources  a  current  equal  to  the  APD  current in  the  MAX15059A  and  1/5th  the  APD  current  in  the MAX15059B. An RC network comprised of  resistor  R3 and  capacitor  C7  provide  a  filter  to  the  MOUT  signal. Capacitor C7 is not required in a typical design.

Additionally,  resistors  R8  and  R9  set  the  APD  loadsimulator circuit's current for current-monitor  stepresponse measurements. Apply a 0 to 11V square-wave signal to the APD\_DRV PCB pad to simulate a 0 to 4mA load. Use test point TP1 or TP2 to measure the APD load current and TP3 as the SGND.

## Clamp Input (CLAMP)

CLAMP  provides  a  means  for  diode  clamping  the volt  age at MOUT; thus, VMOUT is limited to (VCLAMP + 0.6V).  CLAMP  can  be  connected  to  either  an  external supply  or  BIAS  (TP4).  Leave  CLAMP  unconnected  if voltage clamping is not required.

## Setting Fast Current-Limit Threshold  and ILIM

Resistor R5 sets the IC's APD  fast current-limit threshold  to  2.22mA.  To  reconfigure  the  circuit  for another current-limit threshold, replace resistor R5 and use the following equation to calculate a new value for the desired current:

<!-- formula-not-decoded -->

where ILIM is the desired DC load current in milliamps. Place a shunt on jumper JU3 to connect RLIM to SGND and set the current-limit threshold to 4.6mA. See Table 3 for jumper JU3 settings.

The ILIM open-drain signal is available at the ILIM PCB pad.  During  normal  EV  kit  operation,  resistor  R6  pulls up the ILIM pin to VIN. ILIM asserts low when the APD current limit has been exceeded.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX15059 Evaluation Kit

Figure 1. MAX15059 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX15059 Evaluation Kit

<!-- image -->

Figure 2. MAX15059 EV Kit Component Placement GuideComponent Side

Figure 3. MAX15059 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX15059 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX15059 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

6

<!-- image -->