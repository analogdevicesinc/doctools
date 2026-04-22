<!-- lastmod 2023-04-25 -->
<!-- image -->

## General Description

The  MAX17555A  evaluation  kit  (EV  kit)  is  a  fully assembled and tested circuit board that demonstrates the performance of the MAX17555A, a 4V to 60V, 50mA, Ultra-Small,  High  Efficiency,  Synchronous  Step-Down DC-DC  Converter  in  an  8-pin  TDFN  (2mm  x  2mm) package. The EV kit is designed to operate over a 7.5V to 60V input and provides a 3.3V, 50mA output. The EV kit is set up to turn ON at 10.1V (max) and turn OFF at 7.5V  (max)  using  the  EN/UV  and  HYST  pins.  The MAX17555A  works  at  a  fixed  70kHz  frequency  and delivers a peak efficiency of 87% with supplied components.

The EV kit is simple to use and easily configurable with minimal external components. The MAX17555A features  a  programmable  input  EN/UV  and  HYST threshold and an open-drain RESET signal. The device offers built-in hiccup mode protection for overload and short  circuit  conditions,  as  well  as  thermal  shutdown. The EV kit is complaint with CISPR32 class B standard.

## EV Kit Photo

## Evaluates: MAX17555 (MAX17555A)

## Features

- 7.5V to 60V Input-Voltage Range for the Step-Down Converter
- 3.3V Output Voltage, Up To 50mA Continuous Load Current
- 87% Peak Efficiency
- Minimal Number of External Components
- 70kHz Switching Frequency
- Resistor Programmable Input Enable-Undervoltage (EN/UV) and Hysteresis (HYST)
- Internal Loop Compensation
- 0.8ms (typ) Internal Soft-Start Time
- Open-Drain RESET Output to Monitor Output Voltage
- Bootstrap from Output Voltage to Improve Efficiency
- Hiccup-Mode Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17555A Evaluation Kit

## Quick Start

## Configuration Diagram

Figure 1. MAX17555A EV Kit Setup Diagram

<!-- image -->

## Required Equipment

- MAX17555AEVKIT#
- 60V adjustable, 0.5A DC power supply
- Load resistors capable of sinking up to 50mA at 3.3V
- Digital multimeters (DMM)

## EV Kit Setup and Procedure

A typical bench setup for the MAX17555A EV kit is shown in Figure 1 .

The EV kit is fully assembled and tested. Follow the steps to verify and test the operation of individual converters.

## Warning:

- Do not turn on the power supply until all connections are completed.
- Do not touch any part of the circuit with bare hands or conductive materials when powered up.
- Make sure all high-voltage capacitors are fully discharged before handling. Allow five minutes after disconnecting the input power source before touching circuit parts.

## Equipment Setup and Procedure

1. Set the power supply to a voltage between 7.5V and 60V. Disable the power supply.
2. Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest GND PCB pad. Connect the positive terminal of the 50mA load to the VOUT PCB pad and the negative terminal to the nearest GND PCB pad.
3. Set the digital multimeter to voltage mode and connect across the VOUT PCB pad and the nearest GND PCB pad.
4. Enable the power supply.
5. Verify  that  the  output  voltmeter  displays  3.3V  and,  if  required,  measure  the  output  current  using  a  DMM  in ammeter mode.
6. If required, vary the input voltage from 7.5V to 60V and the load current from 0mA to 50mA, then verify that the output voltage is 3.3V with respect to GND.

Evaluates: MAX17555

(MAX17555A)

## Detailed Description

The MAX17555A EV kit provides a proven design to evaluate the MAX17555A, a 4V to 60V, 50mA ultra-small, high efficiency, synchronous step-down DC-DC converter. The EV kit comes with installed components for delivering 3.3V, 50mA (max) output current from a 7.5V to 60V input. The EV kit can be used to verify the EN/UV and HYST features of the MAX17555A. The EV kit works at a fixed frequency of 70kHz. The EV kit can also be used to verify the output overload, short circuit, and thermal shutdown protection. Refer to the MAX17555 IC datasheet to change the EV kit configuration to a different specification.

## Setting the Input EN/UV Level with HYST

The device offers an adjustable input undervoltage and adjustable hysteresis levels. Set the voltage at which the device turns on and turns off with a resistor network connected between the IN, EN/UV, HYST, and GND pins (see Figure 2 ). Choose R1 to be 3.32MΩ (max) and then calculate R2 and R3 as follows:

<!-- formula-not-decoded -->

where V IN(ON)  and V IN(OFF)  are the voltages at which the device is required to turn on and turn off respectively. Refer to the MAX17555 IC data sheet for more information.

Figure 2. Setting the Input Undervoltage Level with Hysteresis

<!-- image -->

## RESET Output

The EV kit provides a RESET PCB pad to monitor the stepdown converter output. RESET goes to high impedance 30µs after the step-down converter outputs rise above 95% of the programmed output voltage. RESET goes low when the regulator output voltage drops below 92% (typ) of the programmed output voltage. RESET also goes low when EN/UV voltage falls below its threshold value. Refer to the MAX17555 IC data sheet for more information.

## Hot Plug-In and Long Input Cables

The MAX17555AEVKIT# PCB layout provides an optional electrolytic capacitor (C5). This capacitor limits the peak voltage at the input of the converter when the DC input source is hot-plugged to the EV kit input terminals with long input cables. The  equivalent  series  resistance  (ESR)  of  the  electrolytic  capacitor  dampens  the  oscillations  caused  by  interaction between the inductance of the long input cables and the ceramic capacitors at the buck converter input.

## Electromagnetic Interference

Compliance to conducted emission (CE) standards requires an electromagnetic interference (EMI) filter at the input of a switching power converter. The EMI filter attenuates high-frequency currents drawn by the switching power converter and limits the noise injected back into the input power source.

The MAX17555AEVKIT# has designated footprints for the placement of conducted EMI filter components as per the bill of materials (BOM). Use of these filter components results in lower conducted EMI below CISPR32 Class B limits. Cut open the trace at L2 before installing conducted EMI filter components. The EV kit layout is also designed to limit radiated emissions from switching nodes of the power converter and complies with CISPR32 Class B RE limits.

## Evaluates: MAX17555 (MAX17555A)

## Typical Operating Characteristics

(VIN  = V EN  = 24V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAX17555

(MAX17555A)

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17555A Evaluation Kit

## MAX17555A EV Kit Bill of Materials

|   ITEM |   QTY | DESIGNATOR   | DESCRIPTION                                      | MANUFACTURER PART NUMBER    |
|--------|-------|--------------|--------------------------------------------------|-----------------------------|
|      1 |     1 | C1           | 0.1 μ F, 10%, 100V, X7R,Ceramic capacitor (0603) | MURATA GRM188R72A104KA35    |
|      2 |     1 | C3           | 22 μ F, 20%, 6.3V, X7R,Ceramic capacitor (0805)  | MURATA GRM21BZ70J226ME44    |
|      3 |     1 | C4           | 1 μ F, 10%, 100V, X7R,Ceramic capacitor (1206)   | TDK C3216X7R2A105K160AA     |
|      4 |     1 | C5           | 22μF, 20%, 100V, Electrolytic capacitor          | PANASONIC EEE-TG2A220UP     |
|      5 |     1 | C10          | 0.1 μ F, 10%, 16V, X7R, Ceramic capacitor (0402) | MURATA GRM155R71C104KA88    |
|      6 |     1 | R1           | 3.32MΩ, ±1%, 1/16W, resistor (0402)              | VISHAY CRCW04023M32FK       |
|      7 |     1 | R2           | 576kΩ, ±1%, 1/16W, resistor (0402)               | VISHAY CRCW0402576KFK       |
|      8 |     1 | R3           | 2.4MΩ, ±1%, 1/16W, resistor (0402)               | PANASONIC ERJ-2GEJ245       |
|      9 |     1 | R5           | 100kΩ, ±1%, 1/16W, resistor (0402)               | VISHAY CRCW0402100KFK       |
|     10 |     1 | R6           | 0Ω, 1/10W, resistor (0402)                       | PANASONIC ERJ-2GE0R00       |
|     11 |     1 | L1           | INDUCTOR, 180μH, 0.27A                           | COILCRAFT LPS4018-184MR     |
|     12 |     1 | U1           | 4V to 60V, 50mA, Step-Down DC-DC Converter       | ANALOG DEVICE MAX17555AATA+ |
|     13 |     0 | L2           | INDUCTOR, 15μH, 0.58A                            | COILCRAFT LPS3015-153MR     |
|     14 |     0 | C2           | 4.7μF, 10%, 100V, X7R, Ceramic capacitor (1206)  | MURATA GRM31CZ72A475KE11    |
|     15 |     0 | C8           | Ceramic capacitor (1206)                         | NA                          |

Evaluates: MAX17555

(MAX17555A)

## MAX17555A Evaluation Kit

## MAX17555A EV Kit Schematic

<!-- image -->

Evaluates: MAX17555

(MAX17555A)

## MAX17555A Evaluation Kit

## MAX17555A EV Kit PCB Layout

MAX17555A EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX17555A EV Kit PCB Layout -Layer 2

<!-- image -->

Evaluates: MAX17555

(MAX17555A)

MAX17555A EV Kit PCB Layout -Top Layer

<!-- image -->

MAX17555A EV Kit PCB Layout -Layer 3

<!-- image -->

## MAX17555A Evaluation Kit

## MAX17555A EV Kit PCB Layout (continued)

MAX17555A EV Kit PCB Layout -Bottom Layer

<!-- image -->

## Ordering Information

| PART NUMBER     | TYPE   |
|-----------------|--------|
| MAX17555AEVKIT# | EV Kit |

#Denotes RoHS compliance.

## Component Suppliers

| SUPPLIER               | WEBSITE           |
|------------------------|-------------------|
| Coilcraft Inc          | www.coilcraft.com |
| Murata Americas        | www.murata.com    |
| Vishay Intertechnology | www.vishay.com    |
| Panasonic Corp         | www.panasonic.com |

Evaluates: MAX17555

(MAX17555A)

MAX17555A EV Kit PCB Layout -Bottom Silkscreen

<!-- image -->

## MAX17555A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX17555

(MAX17555A)