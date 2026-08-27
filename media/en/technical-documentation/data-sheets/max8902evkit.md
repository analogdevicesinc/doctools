<!-- lastmod 2022-08-03 -->
## General Description

The MAX8902 evaluation kit (EV kit) is a fully assembled and tested PCB for evaluating the MAX8902A lowdropout linear regulator (LDO). The EV kit operates from a 1.7V to 5.5V supply and provides a jumperselectable output voltage of 1.5V, 1.8V, 2.0V, 2.5V, 3.0V, 3.1V, 3.3V, 4.6V, or 4.7V, with loads up to 500mA. The MAX8902 EV kit comes with the MAX8902A i nstalled,  but  can  also  be  used  to  evaluate  the MAX8902B with an adjustable output voltage from 0.6V to 5.3V.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C1*, C3       |     2 | 10µF ±10%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J106K Murata GRM21BR60J106K |
| C2            |     1 | 0.01µF ±10%, 25V X7R ceramic capacitor (0402) TDK C1005X7R1E103K                       |
| C4            |     0 | Not installed, capacitor (0805)                                                        |
| C5            |     0 | Not installed, capacitor (0402)                                                        |
| JU1, JU2, JU3 |     3 | 3-pin headers, 0.1in                                                                   |
| R1            |     1 | 0 Ω resistor (0402)                                                                    |
| R2, R3        |     0 | Not installed, resistors (0402)                                                        |
| U1            |     1 | Low dropout linear regulator (8 TDFN-EP**) Maxim MAX8902AATA+                          |
| -             |     3 | Shunts, 2 position                                                                     |
| -             |     1 | PCB: MAX8902 Evaluation Kit+                                                           |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                      |
|----------------------------------------|--------------|------------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata- northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com        |

Note: Indicate that you are using the MAX8902A or MAX8902B when contacting these component suppliers.

<!-- image -->

## Features

- ♦ 1.7V to 5.5V Input-Voltage Range
- ♦ Guaranteed 500mA Output Current
- ♦ ±1.5% Output Accuracy over Load/Line/Temperature
- ♦ 100mV (max) Drop Out at 500mA Load
- ♦ &lt; 1 µ A Shutdown Supply Current
- ♦ 700mA Short-Circuit Protection
- ♦ Reverse-Current Protection
- ♦ Thermal-Overload Protection
- ♦ 2mm x 2mm x 0.8mm TDFN IC Package
- ♦ Lead-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8902EVKIT+ | EV Kit |

+Denotes lead-free and RoHS compliant.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 1.7V to 5.5V power supply or battery able to deliver 1A
- Voltmeter
- Load (up to 500mA)

## Procedure

The MAX8902 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Preset the power supply to between 1.7V and 5.5V.
- 2) Turn off the power supply. Caution: Do not turn on the power supply until all connections are completed.
- 3) Place the shunt of JU1 across pins 2-3 to enable the MAX8902A.
- 4) Select the output voltage using jumpers JU2 and JU3 (see Table 2).
- 5) Connect the positive power-supply lead to the IN pad of the EV kit.
- 6) Connect the power-supply ground to the GND pad next to IN.
- 7) Connect the voltmeter and load from the EV kit OUT pad to the GND pad next to OUT.
- 8) Turn on the power supply.
- 9) Verify  that  the  output  voltage  matches  the  values as shown in Table 2.

1

## MAX8902 Evaluation Kit

## Detailed Description of Hardware

The MAX8902 evaluation kit (EV kit) is a fully assembled and tested PCB for evaluating the MAX8902A low-dropout linear regulator (LDO). The EV kit operates from a 1.7V to 5.5V supply and provides a jumper-selectable output voltage of 1.5V, 1.8V, 2.0V, 2.5V, 3.0V, 3.1V, 3.3V, 4.6V, or 4.7V, with loads up to 500mA. The output-voltage setting set by jumpers JU2 and JU3 is fixed at startup. Changing these jumpers while the IC is operating has no effect. The MAX8902 EV kit comes with the MAX8902A installed, but can also be used to evaluate the MAX8902B.

## Evaluating the MAX8902B

To evaluate the MAX8902B, carefully remove the IC (U1) and replace it with the MAX8902B. Remove the shunt from jumper JU3. Install a shunt on JU2 in 1-2 position. Remove the 0 Ω resistor from R1 and install R1 and R2 to set the desired output voltage.

## Setting the MAX8902B Output Voltage

The MAX8902B uses external feedback resistors to set the output regulation voltage. The output can be set from 0.6V to 5.3V. Set the lower feedback resistor (R2) to ≤ 120k Ω to minimize FB input bias current error. Then calculate the value of the upper feedback resistor (R1) as follows:

<!-- formula-not-decoded -->

## Table 1. JU1 Settings (MAX8902A and MAX8902B)

| 1-2      | 2-3    |
|----------|--------|
| Shutdown | Enable |

where VFB is the feedback regulation voltage of 0.6V. When setting the output to 0.6V, short R1 and leave R2 open.

## POK Output (MAX8902B)

The MAX8902B has an open-drain power-OK output ( POK ). POK pulls low to indicate that the output voltage is in regulation. During startup, POK is high impedance until  the  output  voltage  rises  to  90%  of  its  regulation level. If an overload occurs at the output, or the output is shut down, POK is high impedance. To use POK as a logic-level output, install pullup resistor R3.

## Enable

Jumper JU1 is provided to enable or disable the IC by connecting EN to IN or GND. If an external enable signal  is  used,  remove  the  shunt  from  JU1  and  connect the external signal to pin 2 of JU1. Ensure that the signal does not exceed 5.5V.

## Table 2. JU2 and JU3 Settings (MAX8902A Only)

|   OUTPUT VOLTAGE (V) | JU2   | JU3   |
|----------------------|-------|-------|
|                  1.5 | 2-3   | Open  |
|                  1.8 | Open  | 1-2   |
|                  2.0 | Open  | 2-3   |
|                  2.5 | Open  | Open  |
|                  3.0 | 1-2   | 1-2   |
|                  3.1 | 1-2   | 2-3   |
|                  3.3 | 1-2   | Open  |
|                  4.6 | 2-3   | 1-2   |
|                  4.7 | 2-3   | 2-3   |

Figure 1. MAX8902 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2. MAX8902 EV Kit-Component Placement

<!-- image -->

## MAX8902 Evaluation Kit

Figure 3. MAX8902 EV Kit-Bottom Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8902 Evaluation Kit

Figure 4. MAX8902 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX8902 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8902 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                    | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------|-----------------|
|                 0 | 2/08            | Initial release                                | -               |
|                 1 | 9/08            | Matching EV kit data sheet with IC data sheet. | 2               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 5