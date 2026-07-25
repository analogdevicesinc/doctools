<!-- lastmod 2022-08-04 -->
## MAX17554B Evaluation Kit

## General Description

The  MAX17554B  evaluation  kit  (EV  kit)  is  a  fully assembled  and  tested  circuit  board  that  shows  the performance  of  the  MAX17554B,  10V  to  60V,  50mA, ultra-small, high efficiency, synchronous step-down DCDC converter in an 8-pin TDFN (2mm x 2mm) package. The EV kit is designed to operate over a 10V to 60V input and provides a 5V, 50mA output. The MAX17554B turns on  at  42.5V  (max)  and  turns  off  at  10V  (max)  input voltage. The step-down converter works at a fixed 70kHz switching  frequency  and  delivers  a  high  light  load efficiency of 78.3% with supplied components at 48V IN, 5V 10mA OUT.

The EV kit is simple to use and easily configurable with minimal external components. The MAX17554B features  fixed  turn  ON/OFF  input  voltage  and  70kHz switching  frequency.  The  device  offers  built-in  hiccup mode protection for overload and short-circuit conditions, and thermal shutdown. The EV  kit is complaint with CISPR32 Class B standard.

## EV Kit Top View

## Evaluates: MAX17554(MAX17554B)

## Features

- 10V to 60V Input-Voltage Range for the Step-Down Converter
- 5V Output Voltage, Up To 50mA Continuous Load Current
- 87.5% Peak Efficiency
- 78.3%  Light  Load  Efficiency  at  48V  IN,  5V  10mA OUT
- Minimum Number of External Components
- 70kHz Fixed Switching Frequency
- Fixed Turn ON/OFF Input Voltage
- Internal Loop Compensation
- 0.8ms (typ) Internal Soft-Start Time
- Boot-strap from output voltage to Improve Efficiency
- Hiccup-mode Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information at end of data sheet.

<!-- image -->

<!-- image -->

## Evaluates: MAX17554(MAX17554B)

## Quick Start

## Configuration Diagram

Figure 1. MAX17554B EV Kits Setup Diagram

<!-- image -->

## Required Equipment

- MAX17554BEVKIT#
- 60V adjustable, 0.5A DC power supply
- Load resistors capable of sinking up to 50mA at 5V
- Digital multimeters (DMM)

## EV Kit Setup and Procedure

A typical bench setup for the MAX17554B EV kit is shown in Figure 1 .

The EV kit is fully assembled and tested. Follow the steps below to verify and test individual converters operation.

## Warning:

- Do not turn on the power supply until all connections are completed.
- Do not touch any part of the circuit or conductive materials with bare hands when powered up.
- Make sure all high-voltage capacitors are fully discharged before handling. After disconnecting the input power source, wait for 5 minutes before touching the circuit parts.

## Equipment Setup and Procedure

1.  Set the power supply to a voltage between 42.5V and 60V. Disable the power supply.
2.  Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest GND PCB pad. Connect the positive terminal of the 50mA load to the VOUT PCB pad and the negative terminal to the nearest GND PCB pad.
3.  Set the digital multimeter to voltage mode and connect across the VOUT PCB pad and the nearest GND PCB pad.
4.  Enable the power supply.
5.  Verify that the output voltmeter displays 5V and, if required, measure the output current using a DMM in ammeter mode.
6.  If required, vary the input voltage from 10V to 60V, the load current from 0 to 50mA, and verify that the output voltage is 5V with respect to GND.

## Evaluates: MAX17554(MAX17554B)

## Detailed Description

The MAX17554B EV kit provides a proven design to evaluate the MAX17554B, 10V to 60V, 50mA ultra-small, high efficiency, synchronous step-down DC-DC converter. The EV kit comes with installed components to deliver 5V, 50mA (max) output current from 10V to 60V input. The MAX17554B works at a fixed 70kHz switching frequency. The EV kit can also  be  used  to  verify  the  output  overload  or  short-circuit  protection,  and  thermal  shutdown  protection.  For  more information on how to change the EV kit configuration to a different specification, refer to the MAX17554B IC data sheet.

## Hot Plug-in and Long Input Cables

The MAX17554BEVKIT# PCB layout provides an optional electrolytic capacitor (C5). This capacitor limits the peak voltage at the input of the converter when the DC input source is hot-plugged to the EV kit input terminals with long input cables. The  equivalent  series  resistance  (ESR)  of  the  electrolytic  capacitor  dampens  the  oscillations  caused  by  interaction between the inductance of the long input cables, and the ceramic capacitors at the buck converter input.

## Electromagnetic Interference

Compliance to conducted emission (CE) standards requires an electromagnetic interference (EMI) filter at the input of a switching power converter. The EMI filter attenuates high-frequency currents drawn by the switching power converter and limits the noise injected back into the input power source.

The MAX17554BEVKIT# has designated footprints for the placement of conducted EMI filter components as per the bill of material (BOM). Use of these filter components results in lower conducted EMI below CISPR32 Class B limits. Cut open the trace at L2 before installing the conducted EMI filter components. The EV kit layout is also designed to limit radiated emissions from switching nodes of the power converter and complies with CISPR32 Class B RE limits.

## MAX17554B Evaluation Kit

## Evaluates: MAX17554(MAX17554B)

## MAX17554B EV Kit Performance

(V IN  = V EN  = 24V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: 5V OUTPUT,100ΩQ LOAD,fsw=70KHz

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17554B Evaluation Kit

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17554(MAX17554B)

## MAX17554B EV Kit Performance(continued)

<!-- image -->

## MAX17554B Evaluation Kit

<!-- image -->

## Evaluates: MAX17554(MAX17554B)

## MAX17554B EV Kit Bill of Materials

|   ITEM |   QTY | DESIGNATOR   | DESCRIPTION                                     | MANUFACTURER PART NUMBER   |
|--------|-------|--------------|-------------------------------------------------|----------------------------|
|      1 |     1 | C1           | 0.1μF, 10%, 100V, X7R,Ceramic capacitor (0603)  | MURATA GRM188R72A104KA35   |
|      2 |     1 | C4           | 1μF, 10%, 100V, X7R,Ceramic capacitor (1206)    | TDK C3216X7R2A105K160AA    |
|      3 |     1 | C5           | 22μF, 20%, 100V, Electrolytic capacitor         | PANASONIC EEE-TG2A220UP    |
|      4 |     1 | C6           | 10μF, 10%, 25V, X7R,Ceramic capacitor (0805)    | MURATA GRM21BZ71E106KE15   |
|      5 |     1 | C10          | 0.1μF, 10%, 16V, X7R, Ceramic capacitor (0402)  | MURATA GRM155R71C104KA88   |
|      6 |     1 | R6           | 0Ω, 1/10W, resistor (0402)                      | PANASONIC ERJ-2GE0R00      |
|      7 |     1 | L1           | INDUCTOR, 220μH, 0.24A                          | COILCRAFT LPS4018-224MR    |
|      8 |     1 | U1           | 10V to 60V, 50mA, Step-Down DC-DC Converter     | MAXIM MAX17554BATA+        |
|      9 |     0 | L2           | INDUCTOR, 15μH, 0.58A                           | COILCRAFT LPS3015-153MR    |
|     10 |     0 | C2           | 4.7μF, 10%, 100V, X7R, Ceramic capacitor (1206) | MURATA GRM31CZ72A475KE11   |
|     11 |     0 | C8           | Ceramic capacitor (1206)                        | NA                         |

## Evaluates: MAX17554(MAX17554B)

## MAX17554B EV Kit Schematic Diagram

<!-- image -->

## MAX17554B Evaluation Kit

## Evaluates: MAX17554(MAX17554B)

## MAX17554B EV Kit PCB Layout

MAX17554B EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX17554B EV Kit PCB Layout-Layer 2

<!-- image -->

## MAX17554B Evaluation Kit

MAX17554B EV Kit PCB Layout-Top

<!-- image -->

MAX17554B EV Kit PCB Layout-Layer 3

<!-- image -->

## MAX17554B EV Kit PCB Layout (continued)

MAX17554B EV Kit PCB Layout-Bottom

<!-- image -->

## Ordering Information

| PART NUMBER     | TYPE   |
|-----------------|--------|
| MAX17554BEVKIT# | EV Kit |

# Denotes RoHS compliant.

## Component Suppliers

MAX17554B EV Kit Component Placement Guide-Bottom Silkscreen

| SUPPLIER               | WEBSITE           |
|------------------------|-------------------|
| Coilcraft Inc          | www.coilcraft.com |
| Murata Americas        | www.murata.com    |
| Vishay Intertechnology | www.vishay.com    |
| Panasonic Corp         | www.panasonic.com |

<!-- image -->

## Evaluates: MAX17554(MAX17554B)

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 04/22           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX17554B Evaluation Kit