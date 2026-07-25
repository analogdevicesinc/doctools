<!-- lastmod 2022-08-04 -->
## MAX1556 Evaluation Kit

## General Description

The MAX1556 evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX1556 and MAX1557 PWM step-down DC-DC converters. The circuit operates from 2.6V to 5.5V. The MAX1556 delivers up to 1.2A and has pin-selectable 1.8V, 2.5V, 3.3V, and adjustable output. The MAX1557 delivers up to 600mA and has pin-selectable 1V, 1.3V, 1.5V, and adjustable output. Each circuit features an on-board shutdown control.

## Features

- Up to 97% Efficiency
- 95% Efficiency at 1mA Load Current
- 1MHz PWM Switching Frequency
- Tiny Inductors
- Pin-Selectable Output Voltages
- MAX1556: 3.3V, 2.5V, 1.8V, and Adjustable
- MAX1557: 1.5V, 1.3V, 1.0V, and Adjustable
- 1.2A Guaranteed Output Current (MAX1556)
- Voltage Positioning Optimizes Load-Transient Response
- Low 16μA Quiescent Current
- Low 27μA Quiescent Current in Dropout
- Low 0.1μA Shutdown Current
- Analog Soft-Start with Zero Overshoot Current
- Small, 10-Pin, 3mm x 3mm TDFN Package
- Fully Assembled and Tested

## Quick Start

## Recommended Equipment

- MAX1556 EV kit
- Variable DC power supply capable of supplying up to 5.5V at 1.2A
- Voltmeter (DMM)

## Procedure (MAX1556ETB)

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Select  the  desired  output  voltage  with  JU1-JU3  (see Table 1). The EV kit is preset to a 1.8V output.

Evaluates: MAX1556/MAX1557

- 2)  Connect the positive terminal of the voltmeter to the PCB pad labeled OUT. Connect the ground terminal of the voltmeter to the PCB pad labeled GND nearest the OUT PCB pad. Connect a load from OUT to the GND PCB pad closest to OUT.
- 3)  Preset  the  power  supply  to  between  2.6V  and  5.5V, and  turn  the  power  supply  off. Do  not  turn  on  the power supply until all connections are completed.
- 4)  Connect the positive power-supply terminal to the PCB pad labeled IN. Connect the power-supply ground to the PCB pad labeled GND nearest the IN PCB pad.
- 5)  Turn on the power supply and verify the output voltage is the desired voltage from setting JU1, JU2, and JU3 (the default is 1.8V).

## Procedure (MAX1557ETB)

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Select  the  desired  output  voltage  with  JU4-JU6  (see Table 2). The EV kit is preset to a 1.0V output.
- 2)  Connect the positive terminal of the voltmeter to the PCB pad labeled OUT2. Connect the ground terminal of the voltmeter to the PCB pad labeled GND2 nearest the OUT2 PCB pad. Connect a load from OUT2 to the GND2 C pad closest to OUT2.
- 3)  Preset  the  power  supply  to  between  2.6V  and  5.5V, and  turn  the  power  supply  off. Do  not  turn  on  the power supply until all connections are completed.
- 4)  Connect the positive power-supply terminal to the PCB pad labeled IN2. Connect the power-supply ground to the p PCB pad labeled GND2 nearest the IN2 PCB pad.
- 5)  Turn  on  the  power  supply  and  verify  that  the  output voltage is the desired voltage from setting JU4, JU5, and JU6 (the default is 1.0V).

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAX1556EVKIT | EV Kit |

<!-- image -->

## MAX1556 Evaluation Kit

## Detailed Description

The MAX1556 EV kit contains two separate PWM stepdown DC-DC converter circuits. Either circuit can be powered from a DC power supply with a 2.6V to 5.5V input range. The top and bottom circuit are separate from each other and do not share a common ground plane.

The top circuit (MAX1556) provides pin-selectable output voltages of 3.3V, 2.5V, 1.8V, and adjustable at 1.2A.

The  bottom  circuit  (MAX1557)  provides  pin-selectable output  voltages  of  1.5V,  1.3V,  1.0V,  and  adjustable  at 600mA.

## Pin-Selectable Output Voltages

The  MAX1556 output  voltage  is  selected  with  JU1  and JU2, as shown in Table 1.

The  MAX1557 output  voltage  is  selected  with  JU4  and JU5, as shown in Table 2.

## Evaluating Other Output Voltages

The  EV  kit  comes  with  the  MAX1556  preset  to  a  1.8V output and the MAX1557 preset to a 1V output. To evaluate other voltages besides the preset values, set the MAX1556

(or  MAX1557) to adjustable mode. The footprints for the feedback resistors are available on the backside of the EV kit.  Refer  to  the Adjusting  the  Output  Voltage section  in the MAX1556 IC data sheet for a detailed description on calculating these feedback resistor values for the desired output  voltage.  Resistor  R1  for  the  MAX1556  circuit  (R3 on  MAX1557)  is  shorted  on  the  EV  kit.  This  short  must be cut prior to the placement of a resistor on the footprint. Resistor R2 for the MAX1556 circuit (R4 for MAX1557) is open and requires no modification before placing a resistor on the footprint.

## External Shutdown Control

The EV kit comes preset with SHDN and SHDN2 pulled high  so  that  the  MAX1556  and  MAX1557  are  enabled when the input  voltage  is  applied.  To  operate  the  shutdown control from an external signal, remove the shunt on JU3 for the MAX1556 (JU6 for the MAX1557). Apply a logic high to SHDN to enable the MAX1556, or apply a logic low to shut down the MAX1556. Apply a logic high to SHDN2 to enable the MAX1557, or apply a logic low to shut down the MAX1557.

## Table 1. Output-Voltage Selection (MAX1556ETB)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | MAX1556 V   |
|------------------|------------------|------------------|-------------|
| VOUT             | JU2              | JU3              | OUT         |
| 1-2*             | 1-2*             | 1-2*             | 1.8V        |
| 1-2              | 2-3              | 1-2              | 2.5V        |
| 2-3              | 1-2              | 1-2              | 3.3V        |
| 2-3              | 2-3              | 1-2              | ADJ         |
| -                | -                | 2-3              | Shutdown    |

## Table 2. Output-Voltage Selection (MAX1557ETB)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | MAX1557 V OUT   |
|------------------|------------------|------------------|-----------------|
| JU4              | JU5              | JU6              |                 |
| 1-2*             | 1-2*             | 1-2*             | 1.0V            |
| 1-2              | 2-3              | 1-2              | 1.3V            |
| 2-3              | 1-2              | 1-2              | 1.5V            |
| 2-3              | 2-3              | 1-2              | ADJ             |
| -                | -                | 2-3              | Shutdown        |

│

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| C1, C6        |     2 | 10µF ±10%, 6.3V X5R ceramic capacitors (0805) Murata GRM21BR60J106K or equivalent   |
| C2, C7        |     2 | 22µF ±10%, 6.3V X5R ceramic capacitors (1206) Murata GRM31CR60J226K or equivalent   |
| C3, C8        |     0 | Not installed, capacitors (0805)                                                    |
| C4, C9        |     2 | 0.001µF ±10%, 50V X7R ceramic capacitors (0402) Murata GRP155R71H102K or equivalent |
| C5, C10       |     0 | Not installed, capacitors (0603)                                                    |
| C11           |     1 | 0.47µF ±10%, 6.3V X5R ceramic capacitor (0402) Murata GRM155R60J474K or equivalent  |

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| JU1-JU6       |     6 | 3-pin headers                                                                |
| L1            |     1 | 3.3µH inductor, 0.084Ω, 1.23A, 4.0mm x 4.0mm x 1.8mm Taiyo Yuden NR4018T3R3M |
| L2            |     1 | 4.7µH inductor, 0.108Ω, 1.2A, 4.0mm x 4.0mm x 1.8mm Taiyo Yuden NR4018T4R7M  |
| R1, R3        |     0 | Shorted on PCB, resistors (0603)                                             |
| R2, R4        |     0 | Not installed, resistors (0603)                                              |
| R5            |     1 | 100Ω ±1% resistor (0402)                                                     |
| U1            |     1 | PWM step-down DC-DC converter (10 TDFN-EP*) Maxim MAX1556ETB                 |
| U2            |     1 | PWM step-down DC-DC converter (10 TDFN-EP*) Maxim MAX1557ETB                 |
| -             |     6 | Shunts, position 2                                                           |
| -             |     1 | PCB: MAX1556 EVALUATION KIT                                                  |

Figure 1a. MAX1556 EV Kit Schematic (MAX1556)

<!-- image -->

│

Figure 1b. MAX1556 EV Kit Schematic (MAX1557)

<!-- image -->

Figure 2. MAX1556 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX1556 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Figure 4. MAX1556 EV Kit PCB-Component Side

<!-- image -->

Figure 5. MAX1556 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX1556 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                 | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------|-----------------|
|                 0 | 9/04            | Initial release                                                             | -               |
|                 1 | 11/14           | Updated components L1 and L2 in Component List table and moved it to page 3 | 1, 3            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses Dre implied. MD[im ,nteJrDted reserYes the riJht to chDnJe the circuitr\ Dnd speci¿cDtions without notice Dt Dn\ time.

│

Evaluates: MAX1556/MAX1557