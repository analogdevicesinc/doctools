<!-- lastmod 2022-08-03 -->
## General Description

The MAX4374 evaluation kit (EV kit) provides a proven design to evaluate the MAX4374 low-cost, micropower, high-side current-sense supervisor that contains a highside current-sense amplifier, bandgap reference, and comparator with latching output. This EV kit demonstrates the MAX4374 in a 10-pin µMAX ® package. The MAX4374 is  also  available in 14-pin SO, but that package is not compatible with this EV kit.

The MAX4374 EV kit PCB comes with a MAX4374FEUB+ installed, which is the 50V/V gain version. The MAX4374 EV kit can also be used to evaluate the MAX4374T (20V/V gain version), MAX4374H (100V/V gain version), MAX4375T (20V/V gain version), MAX4375F (50V/V gain version), and MAX4375H (100V/V gain version). Contact the factory for free samples of the pin-compatible MAX4374TEUB+, MAX4374HEUB+, MAX4375TEUB+, MAX4375FEUB+, or MAX4375HEUB+ devices.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104K  |
| C2            |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J475K |
| C3            |     1 | 0.22µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C224K |
| C4            |     1 | 10µF ±20%, 25V X5R ceramic capacitor (1206) Murata GRM31CR61E106K   |
| C5            |     0 | Not installed, capacitor                                            |
| M1            |     1 | 30V, 12A p-channel MOSFET (6 SC70) Vishay SiA421DJ                  |
| M2            |     1 | 30V, 2.5A dual n-channel MOSFET (6 SuperSOT) Fairchild FDC6561AN    |

<!-- image -->

## Features

- ♦ Precision Real-Time Current Monitoring
- ♦ Overcurrent Protection and Reset Circuits
- ♦ Overvoltage Indicator Circuit
- ♦ 0 to 28V Input Common-Mode Range
- ♦ 50µA Supply Current
- ♦ 1mV (max) Input Offset Voltage
- ♦ 2% (max) Full-Scale Accuracy
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX4374EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| R SENSE       |     1 | 0.075 Ω ±1%, 1/2W sensing resistor (1206) IRC LRC-LR1206LF-01-R075-F |
| R1, R3        |     2 | 10k Ω ±5% resistors (0603)                                           |
| R2            |     1 | 100k Ω ±5% resistor (0603)                                           |
| R4            |     1 | 20k Ω ±5% resistor (0603)                                            |
| R5            |     1 | 470k Ω ±5% resistor (0603)                                           |
| R6            |     1 | 52.3k Ω ±1% resistor (0603)                                          |
| R8            |     1 | 205k Ω ±1% resistor (0603)                                           |
| R7, R9        |     2 | 10k Ω ±1% resistors (0603)                                           |
| S1            |     1 | Pushbutton switch                                                    |
| U1            |     1 | Current-sense amplifier (10 µMAX) Maxim MAX4374FEUB+                 |
| -             |     1 | PCB: MAX4374 Evaluation Kit+                                         |

1

## MAX4374 Evaluation Kit

## Procedure

The MAX4374 EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply or the electronic load until all connections are completed.

- 1) Connect the positive terminal of the 5V supply to the VCC pad. Connect the negative terminal of the 5V supply to the GND pad.
- 2) Connect the positive terminal of the 12V supply to the  VIN  pad.  Connect the negative terminal of the 12V supply to the GND pad.
- 3) Set the electronic load to sink 500mA.
- 4) Connect the electronic load's positive terminal to the LOAD pad and the negative terminal to the GND pad.
- 5) Connect the first voltmeter across the OUT and GND pads.
- 6) Connect the second voltmeter across the COUT2 and GND pads.
- 7) Turn on the power supplies.
- 8) Turn on the electronic load.
- 9) Verify that the OUT voltmeter reading is approximately 1.875V and the COUT2 voltmeter is approximately 0V.

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX4374 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX4374 EV kit
- 5V/10mA DC power supply
- 12V/1.5A DC power supply
- An electronic load capable of sinking 1.1A (e.g., HP 6060B)
- Two digital voltmeters
- 10) Slowly increase the sink current to above 1A. When the OUT voltage reaches approximately 3.75V, the comparator output of the part trips the PMOS switches and shuts off the load-current path.
- 11) Verify that the overcurrent circuitry shuts off the load current.
- 12) Reset the current path by pressing the S1 pushbutton after an overcurrent condition.

## Detailed Description of Hardware

The MAX4374 evaluation kit (EV kit) provides a proven design to evaluate the MAX4374 low-cost, micropower, high-side current-sense supervisor that contains a highside current-sense amplifier, bandgap reference, and comparator with latching output. This EV kit demonstrates  the  MAX4374 in a 10-pin µMAX package. The MAX4374 is also available in 14-pin SO, but that package is not compatible with this EV kit.

## Measuring the Load Current

The load current is measured as a voltage drop (VSENSE) across an external sense resistor. This voltage is then amplified by the current-sense amplifier and presented as a voltage at its output pin (OUT). Like all differential amplifiers, the output voltage has two components of error, an offset error and a gain error. The offset  error  affects  accuracy at low VSENSE and the gain error affects accuracy at large VSENSE. By minimizing both offset and gain errors, accuracy can be optimized over a wide dynamic range.

## Output-Voltage Calculation

The MAX4374 EV kit is installed with a MAX4374FEUB+, which has a gain of 50V/V. The current-sense resistor (RSENSE) value is 0.075 Ω with ±1% tolerance. The VOUT is given by:

## VOUT = ILOAD x RSENSE x AV

where AV is the gain and ILOAD is the current load applied to the device. Note that AV for the MAX4374FEUB+ is 50V/V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Overcurrent Protection Circuit

The MAX4374 evaluation kit (EV kit) has an on-board overcurrent protection circuit. The overcurrent protection circuit uses the latched output (COUT1) to control the external p-channel MOSFET (M1) through a level translator (M2). M1, controlled by the MAX4374, opens the current path during overload conditions. When the load current exceeds 1A, COUT1 turns M1 off. Reset the current path by pressing the pushbutton (S1) after an overcurrent condition.

<!-- image -->

## MAX4374 Evaluation Kit

## Overvoltage Indicator Circuit

The MAX4374 evaluation kit (EV kit) uses the opendrain comparator output (COUT2) as the overvoltage indicator.  The  COUT2 pin is at 0V when VIN is below 13V. When VIN is above 13V, COUT2 will be pulled high to VCC by the external pullup resistor.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4374 Evaluation Kit

Figure 1. MAX4374 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX4374 EV Kit Component Placement Guide

<!-- image -->

## MAX4374 Evaluation Kit

Figure 3. MAX4374 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX4374 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

SPRINGER

5