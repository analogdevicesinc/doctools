<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX44264 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  contains  all  the  components necessary to evaluate the MAX44264 IC, offered in  a  space-saving 0.9mm x 1.3mm, 6-bump wafer-level package (WLP). The device is a rail-to-rail  micropower op amp, drawing only 750nA of supply current. The EV kit operates from a single 1.8V to 5.5V DC power supply.

## MAX44264 Evaluation Kit

## Evaluates: MAX44264

## Features

- S 1.8V to 5.5V Single-Supply Operation
- S Jumper Selectable for Inverting, Noninverting, Differential, and Buffer Op-Amp Configurations
- S Demonstrates Super-Capacitor Charge Balancing Using the Op-Amp Buffer Configuration
- S Evaluates the Device in a 6-Bump WLP
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1, C2        |     2 | 0.22F -20% to +80%, 3.3V super capacitors (6.8mm)                      |
| C3            |     1 | 1 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J105K   |
| C4            |     1 | 0.1 F F Q 10%, 16V X5R ceramic capacitor (0603) Murata GRM188R61C104K  |
| C5            |     1 | 0.01 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C103K |
| C6            |     0 | Not installed, ceramic capacitor (0603)                                |
| JU1, JU3      |     2 | 2-pin headers                                                          |

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| JU2           |     1 | 3-pin header                                                          |
| R1, R6        |     0 | Not installed, resistors (0603) R1 is short (PC trace) and R6 is open |
| R2            |     1 | 0 I Q 5% resistor (0603)                                              |
| R3, R4        |     2 | 2M I Q 5% resistors (0603)                                            |
| R5            |     1 | 10 I Q 5% resistor (0603)                                             |
| U1            |     1 | Rail-to-rail op amp (6 WLP) Maxim MAX44264EWT+ (Top Mark: +CB)        |
| -             |     3 | Shunts (JU1, JU2, JU3)                                                |
| -             |     1 | PCB: MAX44264 EVALUATION KIT                                          |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX44264 when contacting this component supplier.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## Quick Start

## Required Equipment

- MAX44264 EV kit
- 1.8V to 5.5V, 100mA DC power supply
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  To  configure  the  EV  kit  as  an  op-amp  buffer  to balance  super  capacitors  C1  and  C2  charge,  set jumpers JU1, JU2, and JU3 in their default positions, as shown in Table 1.
- 2)  Set the power supply to provide 5V and then disable the power supply.
- 3)  Connect  the  power-supply  positive  terminal  to  the VDD PCB pad.
- 4)  Connect the power-supply ground to the GND PCB pad (nearest the VDD PCB pad).
- 5)  Enable the power supply.
- 6)  Verify that the OUT PCB pad is at 2.5V.

## Detailed Description of Hardware

The MAX44264 EV kit contains the MAX44264 IC, which is  a  rail-to-rail  micropower  op  amp  with  an  ultra-low 750nA supply current designed in a 6-bump WLP. The EV  kit  operates  from  a  single  1.8V  to  5.5V  DC  power supply.

## Table 1. Default Shunt Positions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                     |
|----------|------------------|---------------------------------|
| JU1      | Not installed    | IN- = OUT (through resistor R2) |
| JU2      | 2-3              | IN+ = VDD/2                     |
| JU3      | Installed        | IN+ = VDD/2                     |

<!-- image -->

## MAX44264 Evaluation Kit Evaluates: MAX44264

## Default Application Circuit

The  EV  kit  comes  preconfigured  as  a  buffer  used  in  a super-capacitor  charge-balancing  circuit.  Super  capacitors  offer  exceptional  charge  storage  density  and  are widely  used  to  prolong  the  life  of  weak  batteries  subject  to  high  current-load  pulses,  or  to  buffer  a  weak energy source to a high-power load in energy-harvesting devices.  In  such  applications,  it  is  common  to  have  a stack of super capacitors connected in series to achieve the  desired  working  voltage.  The  EV  kit  demonstrates an  active,  super-capacitor  charge-balancing  circuit  that distributes the charge equally across two series-connected super capacitors (C1 and C2), ensuring identical voltage across each capacitor. This circuit prevents overvoltage conditions  from  occurring  across  either  of  the  super capacitors  due  to  a  difference  in  leakage  currents  and tolerance in the capacitor values. The IC's ultra-low power consumption of 750nA and CMOS inputs allow a powerefficient solution to the super-capacitor charge-balancing problem.

## Op-Amp Configurations

While super-capacitor charge balancing is the featured application,  the  EV  kit  also  provides  flexibility  to  easily reconfigure  the  op  amp  into  any  of  the  four  common circuit topologies: inverting amplifier, noninverting amplifier, differential amplifier, or buffer. Table 2 lists the JU1, JU2,  and  JU3  jumper  settings  for  the  various  op-amp configurations.  The  configurations  are  described  in  the next few sections.

Important  Note: Remove  super  capacitors  C1  and C2  when  not  demonstrating  super-capacitor  charge balancing  in  the  four  configurations  detailed  in  the Noninverting  Amplifier , Inverting  Amplifier , Differential Amplifier , and Buffer Amplifier sections.

## Table 2. JU1, JU2, JU3 Jumper Functions (IN-, IN+, REF)

| OP-AMP CONFIGURATION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   |
|------------------------|------------------|------------------|------------------|
| OP-AMP CONFIGURATION   | JU1              | JU2              | JU3              |
| Inverting              | Installed        | 1-2              | Not installed    |
| Differential           | Installed        | 1-2              | Not installed    |
| Noninverting           | Not installed    | 1-2              | Not installed    |
| Buffer                 | Not installed    | 1-2              | Not installed    |
| Super-capacitor buffer | Not installed    | 2-3              | Installed        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Noninverting Amplifier

To  configure  the  device  as  a  noninverting  amplifier, replace  R2  and  R6  with  suitable  resistors.  Replace R3 with a short and remove C5 (follow the jumper settings listed in Table 2). The output voltage (VOUT) for the noninverting configuration is given by the following equation:

<!-- formula-not-decoded -->

where:

VOS = Input-referred offset voltage.

VIN+ = Input voltage applied at the IN+ PCB pad.

## Inverting Amplifier

To configure the device as an inverting amplifier, cut open the shorted PCB trace on R1. Replace R3 with a short and remove C5. Replace R1 and R2 with suitable gain resistors (follow the jumper settings listed in Table 2). An appropriate DC voltage (VDC) should be applied to the IN+ PCB pad to level shift the output voltage of the op amp if the applied input voltage (VIN-) at the IN- PCB pad is positive:

<!-- formula-not-decoded -->

<!-- image -->

## Buffer Amplifier

To configure the device as a standard unity-gain buffer, replace R3 with a short and remove C5:

<!-- formula-not-decoded -->

Important  Note: Remove  super  capacitors  C1  and  C2 when not demonstrating super-capacitor charge balancing for the four configurations just listed.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX44264 Evaluation Kit

## Evaluates: MAX44264

## Differential Amplifier

To configure the device as a differential amplifier, cut open the shorting PCB trace on R1. Replace R1-R4 with appropriate  resistors.  Remove  C5  (follow  the  jumper settings  listed  in  Table  2).  Apply  a  reference  voltage (VREF) to the REF PCB pad to level shift the output voltage of the op amp, if required. When R1 = R3 and R2 = R4, the CMRR of the differential amplifier is determined by the matching of ratios R1/R2 and R3/R4:

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## MAX44264 Evaluation Kit

## Evaluates: MAX44264

<!-- image -->

Figure 1. MAX44264 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX44264 EV Kit Component Placement GuideComponent Guide

<!-- image -->

## MAX44264 Evaluation Kit

## Evaluates: MAX44264

Figure 3. MAX44264 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX44264 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44264EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX44264 Evaluation Kit

## Evaluates: MAX44264

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.