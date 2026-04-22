<!-- lastmod 2025-08-06 -->
<!-- image -->

## Evaluate: MAX20408/MAX20410/MAX20408E MAX20410E/MAX26408E/MAX26410E

## General Description

The  MAX20408/MAX20410  evaluation  kits  (EV  kits) provide  a  proven  design  to  evaluate  the  MAX20408/ MAX20410/MAX20408E/MAX20410E/MAX26408E/ MAX26410E  automotive  synchronous  buck  converters with  10µA  quiescent  current.  The  EV  kit  comes  with  a MAX20410AFOC/VY+  (400kHz)  or  MAX20408AFOD/ VY+  (2.1MHz)  installed,  as  well  as  various  test  points and  jumpers  for  evaluation.  The  EV  kit  output  voltage is fixed 5V or 3.3V and easily configured to 0.8V to 10V with  minimum  component  changes.  The  MAX20408E/ MAX20410E/MAX26408E/MAX26410E can be evaluated by replacing the installed IC (U1) in the EV kit.

The EV kit is designed to deliver up to 8A/10A with input voltage  3V  to  36V.  The  output  voltage  quality  can  be monitored by observing the PGOOD signal.

## Features

- Input Supply Range from 3V to 36V
- Output Voltage: 3.3V/5V Fixed and Adjustable from 0.8V to 10V
- Delivers up to 8A/10A
- Frequency-Synchronization Input
- Enable Input
- Spread Spectrum Available
- Voltage Monitoring PGOOD Output Available
- Proven PCB Layout

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- MAX20408/MAX20410 EV kit
- 36V, 10A DC power supply (PS)
- Appropriate resistive load, or an electronic load that can sink 10A
- Digital multimeter (DMM)
- Oscilloscope

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect the positive and negative terminals of the power supply to the VSUP and GND test pads, respectively.
- 3) Set the power-supply voltage to 14V.
- 4) Turn on the power supply.
- 5) Using the DMM, verify the OUT is approximately 5V on the MAX20410EVKIT# or 3.3V on the MAX20408EVKIT#.
- 6) Verify that the switching frequency is approximately either 2.1MHz on the MAX20408EVKIT# or 400kHz on the MAX20410EVKIT# by monitoring the inductor switching voltage with the oscilloscope.
- 7) Turn off the power supply.

## Additional Evaluation

- 1) Connect the positive and negative terminals of the electronic load to VOUT and GND2, respectively.
- 2) Set the electronic load to the desired current at or below 10A or use an equivalent resistive load with an appropriate power rating.
- 3) Adjust current limit on the power supply as necessary.
- 4) Turn on the power supply and electronic load.
- 5) Verify that voltage across the VOUT and GND2 PCB pads is 5V ± 2% on the MAX20410EVKIT# or 3.3V ± 2% on the MAX20408EVKIT#.

319-100580; Rev 6; 4/25

owners.

## MAX20408/MAX20410 Evaluation Kits

## MAX20408/MAX20410 Evaluation Kits

## Evaluate: MAX20408/MAX20410/MAX20408E/ MAX20410E/MAX26408E/MAX26410E

## Detailed Description of Hardware

## Buck Output Monitoring (PGOOD)

The  MAX20408/MAX20410  EV  kits  provide  a  proven  layout  for  the  MAX20408/MAX20410/MAX20408E/ MAX20410E/MAX26408E/MAX26410E synchronous buck regulator ICs. The IC accepts input voltages as high as 36V and delivers up to 10A. The EV kit can handle an input supply transient up to 42V. Various test points are included for evaluation.

## External Synchronization

The IC can operate in two modes: forced-PWM (FPWM) or  skip  mode.  Skip  mode  has  better  efficiency  for  light load conditions. When SYNC is pulled low, the IC operates in skip mode for light loads and PWM mode for larger loads.  When  SYNC  is  pulled  high,  the  IC  is  forced  to operate in PWM mode across all load conditions. SYNC can be used to synchronize with external clock if a clock source is present. The IC is forced to operate in FPWM mode when SYNC is connected to a clock source.

## Table 1. Default Jumper Settings

Figure 1. MAX20408 EV Kit Adjustable Output Voltage Setting

| JUMPER   | DEFAULT SHUNT POSITION   | FUNCTIONS               |
|----------|--------------------------|-------------------------|
| ENABLE   | 1-2                      | Buck enabled            |
| J1       | 1-2                      | Forced-PWM mode         |
| J2       | Installed                | PGOOD pulled up to bias |

<!-- image -->

The  EV  kit  provides  a  power-good  output  test  point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is pulled to high when the output is on regulation. It is pulled to ground when the output voltage drops below 7% (typ) of its nominal regulated voltage.

## Programming Buck Output Voltage

The EV kit comes installed with the MAX20410AFOC/VY+ or  MAX20408AFOD/VY+  (2.1MHz),  which  provides  an adjustable  0.8V  to  10V  output  voltage.  To  program  the VOUT voltage, remove R5 and place appropriate resistors in the positions R7 and R8 according to the following equation:

## Equation 1 :

<!-- formula-not-decoded -->

Where typically VFB = 0.8V and R8 = 10kΩ.

Refer to the IC data sheet for the C16 value.

## Evaluating Other Variants

The EV kit comes installed with either the 3.3V/2.1MHz, 8A variant (MAX20408AFOD/VY+ (2.1MHz)) or 5V/400kHz, 10A  variant  (MAX20410AFOC/VY+).  The  other  variants can be installed with minimal component changes.

To  use  the  2.1MHz  devices  on  the  MAX20410EVKIT#, change  inductor  L2  to  0.47μH,  and  output  capacitors C13  and  C14  can  be  removed.  For  evaluating  the MAX20408E/MAX26408E and MAX20410E/MAX26410E variants,  depopulate  the  output  capacitance  on  the  EV kit and use the inductor as recommended in the IC data sheet.

## Ordering Information

| PART           | TYPE               |
|----------------|--------------------|
| MAX20408EVKIT# | 3.3V/2.1MHz EV Kit |
| MAX20410EVKIT# | 5V/400kHz EV Kit   |

#Denotes RoHS compliance.

│

## MAX20408/MAX20410 Evaluation Kits

## MAX20408/MAX20410 EV Kit Bill of Materials

## MAX20408/MAX20410 EV Kit BOM-400kHz

| REF_DES                                                                  | MFG PART #           | MANUFACTURER      | DESCRIPTION                                     |
|--------------------------------------------------------------------------|----------------------|-------------------|-------------------------------------------------|
| BIAS, FBR, GND2, GNDS, GNDS1- GNDS3, PGOOD, SYNCOUT, VEA, VOUT_TP, VSUPS | 5012                 | KEYSTONE          | TEST POINT                                      |
| C0                                                                       | GCM32EC71H106KA03    | MURATA            | 10 µF ±10% 50V Ceramic Capacitor X7S 1210       |
| C1, C2, C7, C8, C10, C17                                                 | CGA3E2X7R1H104K080AE | TDK               | 0.1 µF ±10% 50V Ceramic Capacitor X7R 0603      |
| C3                                                                       | EEH-ZA1H101P         | PANASONIC         | 100UF ±20% 50V ALUMINUM-ELECTROLYTIC            |
| C4, C5                                                                   | C1206C475K5RACAUTO   | KEMET             | 4.7 µF ±10% 50V Ceramic Capacitor X7R 1206      |
| C6, C9                                                                   | C0603C105K9RACAUTO   | KEMET             | 1 µF ±10% 6.3V Ceramic Capacitor X7R 0603       |
| C11                                                                      | CGA3E3X7S1A225K080AE | TDK               | 2.2 µF ±10% 10V Ceramic Capacitor X7S 0603      |
| C12-C15                                                                  | CGA6P1X7S1A476M250AC | TDK               | 47 µF ±20% 10V Ceramic Capacitor X7S 1210       |
| ENABLE, J1                                                               | PEC03SAAN            | SULLINS           | Connector Header Through Hole 3 position 0.100" |
| GND, GND3, VOUT, VSUP_FILTER                                             | 575-4                | KEYSTONE          | Banana Jack Connector Standard Banana Solder    |
| J2                                                                       | PEC02SAAN            | SULLINS           | Connector Header Through Hole 2 position 0.100" |
| L0                                                                       | 74279226101          | WURTH ELECTRONICS | 100 Ohms @100 MHz 1 Ferrite Bead 1812 8A 6mOhm  |
| L1                                                                       | XEL5030-102ME        | COILCRAFT         | 1 µH Shielded Molded Inductor 17.8 A 5.8mOhm    |
| L2                                                                       | XGL6060-222ME        | COILCRAFT         | 2.2 µH Shielded Molded Inductor 12.5 A 4.9mOhm  |
| R2                                                                       | ERA-2AEB103          | PANASONIC         | 10 kOhms ±0.1% 0.063W, 1/16W Chip Resistor 0402 |
| R4, R5                                                                   | ERJ-2GE0R00          | PANASONIC         | 0 Ohms Jumper Chip Resistor 0402                |
| U1                                                                       | MAX20410AFOC/VY+     | ANALOG DEVICES    | IC STEP DOWNCONVERTER 17L-FC2QFN                |
| R6, R7, R8, C16                                                          | -                    | -                 | Do not Install                                  |

## MAX20408/MAX20410 EV Kit BOM-2.1MHz

| REF_DES                                                                  | MFG PART #           | MANUFACTURER      | DESCRIPTION                                     |
|--------------------------------------------------------------------------|----------------------|-------------------|-------------------------------------------------|
| BIAS, FBR, GND2, GNDS, GNDS1- GNDS3, PGOOD, SYNCOUT, VEA, VOUT_TP, VSUPS | 5012                 | KEYSTONE          | TEST POINT                                      |
| C0                                                                       | GCM32EC71H106KA03    | MURATA            | 10 µF ±10% 50V Ceramic Capacitor X7S 1210       |
| C1, C2, C7, C8, C10, C17                                                 | CGA3E2X7R1H104K080AE | TDK               | 0.1 µF ±10% 50V Ceramic Capacitor X7R 0603      |
| C3                                                                       | EEH-ZA1H101P         | PANASONIC         | 100UF ±20% 50V ALUMINUM-ELECTROLYTIC            |
| C4, C5                                                                   | C1206C475K5RACAUTO   | KEMET             | 4.7 µF ±10% 50V Ceramic Capacitor X7R 1206      |
| C6, C9                                                                   | C0603C105K9RACAUTO   | KEMET             | 1 µF ±10% 6.3V Ceramic Capacitor X7R 0603       |
| C11                                                                      | CGA3E3X7S1A225K080AE | TDK               | 2.2 µF ±10% 10V Ceramic Capacitor X7S 0603      |
| C12, C15                                                                 | CGA6P1X7S1A476M250AC | TDK               | 47 µF ±20% 10V Ceramic Capacitor X7S 1210       |
| ENABLE, J1                                                               | PEC03SAAN            | SULLINS           | Connector Header Through Hole 3 position 0.100" |
| GND, GND3, VOUT, VSUP_FILTER                                             | 575-4                | KEYSTONE          | Banana Jack Connector Standard Banana Solder    |
| J2                                                                       | PEC02SAAN            | SULLINS           | Connector Header Through Hole 2 position 0.100" |
| L0                                                                       | 74279226101          | WURTH ELECTRONICS | 100 Ohms @100 MHz 1 Ferrite Bead 1812 8A 6mOhm  |
| L1                                                                       | XEL5030-102ME        | COILCRAFT         | 1 µH Shielded Molded Inductor 17.8 A 5.8mOhm    |
| L2                                                                       | XGL6030-471ME        | COILCRAFT         | 470 nH Shielded Molded Inductor 25 A 2.7mOhm    |
| R2                                                                       | ERA-2AEB103          | PANASONIC         | 10 kOhms ±0.1% 0.063W, 1/16W Chip Resistor 0402 |
| R4, R5                                                                   | ERJ-2GE0R00          | PANASONIC         | 0 Ohms Jumper Chip Resistor 0402                |
| U1                                                                       | MAX20408AFOD/VY+     | ANALOG DEVICES    | IC STEP DOWNCONVERTER 17L-FC2QFN                |
| C13, C14                                                                 | -                    | -                 | Do not install                                  |
| R6, R7, R8, C16                                                          | -                    | -                 | Do not install                                  |

│

## MAX20408/MAX20410 Evaluation Kits

## MAX20408/MAX20410 EV Kit Schematic

<!-- image -->

│

## MAX20408/MAX20410 Evaluation Kits

## MAX20408/MAX20410 EV Kit PCB Layouts

<!-- image -->

MAX20408/MAX20410 EV Kit Component Placement GuideTop Silkscreen

<!-- image -->

MAX20408/MAX20410 EV Kit PCB Layout-Inner Layer 2

MAX20408/MAX20410 EV Kit PCB Layout-Top

<!-- image -->

MAX20408/MAX20410 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

## MAX20408/MAX20410 Evaluation Kits

## MAX20408/MAX20410 EV Kit PCB Layouts (continued)

MAX20408/MAX20410 EV Kit PCB Layout-Bottom

<!-- image -->

MAX20408/MAX20410 EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

│

## MAX20408/MAX20410 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                      | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/20            | Initial release                                                                                                                                                                                                  | -               |
|                 1 | 5/21            | Replaced part number MAX20408 with MAX20408/MAX20410, updated General Description , Quick Start , Detailed Description of Hardware sections, and MAX20408/MAX20410 EV Kit Bill of Materials                      | 1-7             |
|                 2 | 5/21            | Updated General Description , Quick Start , Detailed Description of Hardware sections, Table 1, Ordering Information table, MAX20408/MAX20410 EV Kit Bill of Materials, and MAX20408/MAX20410 EV Kit PCB Layouts | 1-3, 5, 6       |
|                 3 | 7/21            | Updated General Description , Detailed Description of Hardware sections, Ordering Information table, and MAX20408/MAX20410 EV Kit Bill of Materials                                                              | 1-3             |
|                 4 | 7/21            | Updated General Description , Features , Quick Start, and Detailed Description of Hardware sections                                                                                                              | 1-3             |
|                 5 | 7/24            | Added E variant to all sections and updated MAX20408/MAX20410 EV Kit Schematic and MAX20408/MAX20410 EV Kit PCB Layouts                                                                                          | All             |
|                 6 | 4/25            | Added MAX26408E/MAX26410E                                                                                                                                                                                        | All             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

## Evaluate: MAX20408/MAX20410/MAX20408E/

## MAX20410E/MAX26408E/MAX26410E