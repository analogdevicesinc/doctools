<!-- lastmod 2023-04-20 -->
<!-- image -->

## MAX17554A Evaluation Kit

## General Description

The MAX17554A evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the performance of the MAX17554A, a 10V to 60V, 50mA, Ultra-Small, High Efficiency, Synchronous Step-Down DC-DC Converter in an  8-pin  TDFN  (2mm  x  2mm)  package.  The  EV  kit  is designed to operate over a 10V to 60V input and provides a  3.3V,  50mA  output.  The  MAX17554A  turns  ON  at 42.5V(max) and turns OFF at 10V(max). The step-down converter works at fixed 70kHz frequency and delivers a high light load efficiency of 76% with supplied components at 48V IN, 3.3V 10mA OUT.

The EV kit is simple to use and easily configurable with minimal external components. The MAX17554A features  fixed  turn  ON/OFF  input  voltage  and  fixed 70kHz  switching  frequency.  The  device  offers  built-in hiccup  mode  protection  for  overload  and  short  circuit conditions, as well as thermal shutdown. The EV kit is complaint with CISPR32 class B standard.

## EV Kit Photo

## Evaluates: MAX17554 (MAX17554A)

## Features

- 10V to 60V Input-Voltage Range for the Step-Down Converter
- 3.3V Output Voltage, Up to 50mA Continuous Load Current
- 85.7% Peak Efficiency
- 76%  Light  Load  Efficiency  at  48V  IN,  3.3V  10mA OUT
- Minimal Number of External Components
- 70kHz Fixed Switching Frequency
- Fixed Turn ON/OFF Input Voltage
- Internal Loop Compensation
- 0.8ms (typ) Internal Soft-Start Time
- Bootstrap from Output Voltage to Improve Efficiency
- Hiccup  Mode  Overcurrent  and  Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information at end of data sheet.

<!-- image -->

## MAX17554A Evaluation Kit

## Quick Start

## Configuration Diagram

Figure 1. MAX17554A EV Kit Setup Diagram

<!-- image -->

## Required Equipment

- MAX17554AEVKIT#
- 60V adjustable, 0.5A DC power supply
- Load resistors capable of sinking up to 50mA at 3.3V
- Digital multimeters (DMM)

## Evkit Setup and Procedure

A typical bench setup for the MAX17554A EV kit is shown in Figure 1 .

The EV kit is fully assembled and tested. Follow the steps to verify and test the operation of individual converters.

## Warning:

- Do not turn on the power supply until all connections are completed.
- Do not touch any part of the circuit with bare hands or conductive materials when powered up.
- Make sure all high-voltage capacitors are fully discharged before handling. Allow five minutes after disconnecting the input power source before touching circuit parts.

## Equipment Setup and Procedure

1.  Set the power supply to a voltage between 42.5V and 60V. Disable the power supply.
2.  Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest GND PCB pad. Connect the positive terminal of the 50mA load to the VOUT PCB pad and the negative terminal to the nearest GND PCB pad.
3.  Set the digital multimeter to voltage mode and connect across the VOUT PCB pad and the nearest GND PCB pad.
4.  Enable the power supply.
5. Verify that the output voltmeter displays 3.3V and, if required, measure the output current using a DMM in ammeter mode.
6.  If required, vary the input voltage from 10V to 60V, the load current from 0mA to 50mA, and verify that the output voltage is 3.3V with respect to GND.

Evaluates: MAX17554

(MAX17554A)

## MAX17554A Evaluation Kit

## Detailed Description

The MAX17554A EV kit provides a proven design to evaluate the MAX17554A, a 10V to 60V, 50mA ultra-small, high efficiency, synchronous step-down DC-DC converter. The EV kit comes with installed components for delivering 3.3V, 50mA (max) output current from a 10V to 60V input. The MAX17554A switch at a fixed frequency of 70kHz. The EV kit can also be used to verify the output overload or short circuit protection and thermal shutdown protection. Refer to the MAX17554A IC data sheet to change the EV kit configuration to a different specification.

## Hot Plug-In and Long Input Cables

The MAX17554AEVKIT# PCB layout provides an optional electrolytic capacitor (C5). This capacitor limits the peak voltage at the input of the converter when the DC input source is hot-plugged to the EV kit input terminals with long input cables. The  equivalent  series  resistance  (ESR)  of  the  electrolytic  capacitor  dampens  the  oscillations  caused  by  interaction between the inductance of the long input cables and the ceramic capacitors at the buck converter input.

## Electromagnetic Interference

Compliance to conducted emission (CE) standards requires an electromagnetic interference (EMI) filter at the input of a switching power converter. The EMI filter attenuates high-frequency currents drawn by the switching power converter and limits the noise injected back into the input power source.

The MAX17554AEVKIT# has designated footprints for the placement of conducted EMI filter components as per the bill of materials (BOM). Use of these filter components results in lower conducted EMI below CISPR32 Class B limits. Cut open the trace at L2 before installing conducted EMI filter components. The EV kit layout is also designed to limit radiated emissions from switching nodes of the power converter and complies with CISPR32 Class B RE limits.

## Evaluates: MAX17554 (MAX17554A)

## MAX17554A Evaluation Kit

## Typical Operating Characteristics

(V IN  = V EN  = 24V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17554 (MAX17554A)

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17554A Evaluation Kit

## MAX17554A EV Kit Bill of Materials

|   ITEM |   QTY | DESIGNATOR   | DESCRIPTION                                       | MANUFACTURER PART NUMBER   |
|--------|-------|--------------|---------------------------------------------------|----------------------------|
|      1 |     1 | C1           | 0.1 μ F, 10%, 100V, X7R,Ceramic capacitor (0603)  | MURATA GRM188R72A104KA35   |
|      2 |     1 | C4           | 1 μ F, 10%, 100V, X7R,Ceramic capacitor (1206)    | TDK C3216X7R2A105K160AA    |
|      3 |     1 | C5           | 22μF, 20%, 100V, Electrolytic capacitor           | PANASONIC EEE-TG2A220UP    |
|      4 |     1 | C6           | 22 μ F, 10%, 6.3V, X7R,Ceramic capacitor (0805)   | MURATA GRM21BZ70J226ME44   |
|      5 |     1 | C10          | 0.1 μ F, 10%, 16V, X7R, Ceramic capacitor (0402)  | MURATA GRM155R71C104KA88   |
|      6 |     1 | R6           | 0Ω, 1/10W, resistor (0402)                        | PANASONIC ERJ-2GE0R00      |
|      7 |     1 | L1           | INDUCTOR, 180μH, 0.27A                            | COILCRAFT LPS4018-184MR    |
|      8 |     1 | U1           | 10V to 60V, 50mA, Step-Down DC-DC Converter       | MAXIM MAX17554AATA+        |
|      9 |     0 | L2           | INDUCTOR, 15μH, 0.58A                             | COILCRAFT LPS3015-153MR    |
|     10 |     0 | C2           | 4.7 μ F, 10%, 100V, X7R, Ceramic capacitor (1206) | MURATA GRM31CZ72A475KE11   |
|     11 |     0 | C8           | Ceramic capacitor (1206)                          | NA                         |

Evaluates: MAX17554

(MAX17554A)

## MAX17554A Evaluation Kit

## MAX17554A EV Kit Schematic

<!-- image -->

Evaluates: MAX17554

(MAX17554A)

## MAX17554A Evaluation Kit

## MAX17554A EV Kit PCB Layout

MAX17554A EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX17554A EV Kit PCB Layout -Layer 2

<!-- image -->

## Evaluates: MAX17554 (MAX17554A)

MAX17554A EV Kit PCB Layout -Top Layer

<!-- image -->

MAX17554A EV Kit PCB Layout -Layer 3

<!-- image -->

## MAX17554A Evaluation Kit

## MAX17554A EV Kit PCB Layout (continued)

MAX17554A EV Kit PCB Layout -Bottom Layer

<!-- image -->

## Ordering Information

#Denotes RoHS compliance.

| PART NUMBER     | TYPE   |
|-----------------|--------|
| MAX17554AEVKIT# | EV Kit |

## Component Suppliers

| SUPPLIER               | WEBSITE           |
|------------------------|-------------------|
| Coilcraft Inc          | www.coilcraft.com |
| Murata Americas        | www.murata.com    |
| Vishay Intertechnology | www.vishay.com    |
| Panasonic Corp         | www.panasonic.com |

Evaluates: MAX17554

(MAX17554A)

MAX17554A EV Kit PCB Layout -Bottom Silkscreen

<!-- image -->

## MAX17554A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX17554

(MAX17554A)