<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX8896 evaluation kit (EV kit) is a fully assembled and tested circuit for evaluating the MAX8896 dual stepdown converter with low-dropout (LDO) linear regulator. The MAX8896 EV kit operates from a 2.7V to 5.5V power supply or battery. The PA step-down output regulates to 2.5 times the voltage at REFIN (0.2V to 1.7V) and provides 700mA drive capability. RFOUT (step-down regulator  followed  by  LDO)  regulates  to  2.8V  and  provides 200mA drive capability.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                     |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0402) TDK C1005X7R1C104K Murata GRM155R71C104K                                                        |
| C2, C5        |     2 | 4.7 F F Q 20%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J475M or 4.7 F F Q 10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J475K |
| C3            |     1 | 1000pF Q 5%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H102J                                                                             |
| C4            |     1 | 0.22 F F Q 10%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J224K Murata GRM155R60J224K                                                      |
| C6, C8        |     0 | Not installed, 1 F F Q 10%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105K                                                               |
| C7            |     1 | 1 F F Q 10%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J105K Murata GRM155R60J105K                                                         |
| C9, C10       |     2 | 2.2 F F Q 20%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J225M Murata GRM185R60J225K                                                      |
| JU1, JU2, JU3 |     3 | 2-pin headers, 0.1in                                                                                                                            |
| L1            |     1 | 4.7 F H Q 20%, 0.95A, 72m I inductor (3.2mm x 3.0mm x 1.8mm max) TOKO 1072AS-4R7M (DE2818C)                                                     |

## Evaluates:  MAX8896 MAX8896 Evaluation Kit

Features

- S PA Step-Down Converter (OUT1)

7.5µs (typ) Settling Time for 0.5V to 1V Output Voltage Change

Dynamic Output-Voltage Setting from 0.5V to VBATT

140m I Bypass pFET and 100% Duty Cycle for Low Dropout

2MHz Switching Frequency

Low Output-Voltage Ripple

700mA (min) Output Drive Capability

2% Gain Accuracy

Tiny External Components

- S RF Step-Down Converter (OUT2) 2MHz Fixed Switching Frequency 94% Peak Efficiency 100% Duty Cycle 2% Output Accuracy Over Load, Line, and Temperature 200mA (min) Output Drive Capability Tiny External Components
- S Low-Noise LDO Guaranteed 200mA Output High 65dB (typ) PSRR Fixed Output Voltage Low Noise (16µVRMS, typ)
- S Simple Logic ON/OFF Controls
- S Low 0.1µA Shutdown Current
- S 2.7V to 5.5V Supply Voltage Range
- S Thermal Shutdown
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8896EVKIT+ | EV Kit |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maximintegrated.com.

## Evaluates:  MAX8896 MAX8896 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                           |
|---------------|-------|---------------------------------------------------------------------------------------|
| L2            |     1 | 2.2 F H Q 20%, 0.55A, 300m I inductor (0805) (1.0mm height) Taiyo Yuden BRL2012T 2R2M |
| L3            |     0 | Not installed, inductor                                                               |
| TP1           |     1 | Test point                                                                            |
| U1            |     1 | Dual PWM step-down converter (16 UCSP, 0.5mm pitch) Maxim MAX8896EREE+T               |
| -             |     3 | Shunts, 2-position                                                                    |
| -             |     1 | PCB: MAX8896 EVALUATION KIT+                                                          |

## Quick Start

## Recommended Equipment

- U 2.7V to 5.5V power supply or battery able to deliver 1A
- U Voltage reference (or power supply) capable of providing 0.2V to 1.7V
- U Voltmeter
- U Loads (resistors or electronic load):

Load 1 between 0 to 700mA or no less than 7 I

Load 2 between 0 to 200mA or no less than 14 I

## Procedure

The  MAX8896  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Preset the power supply to 3.6V.
- 2) Preset  the  voltage  reference  to  between  0.2V and 1.7V.
- 3) Turn off the power supply and voltage reference. Do not turn on until all connections are completed.

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX8896 when contacting these component suppliers.

- 4) Remove  the  shunts  from  jumpers  JU1,  JU2,  and JU3.
- 5) Connect  the  positive  power-supply  terminal  to  the EV kit pad labeled BATT+.
- 6) Connect the negative power-supply terminal to the EV kit pad labeled BATT-.
- 7) Connect  the  positive  voltage  reference  terminal  to the EV kit pad labeled REFIN.
- 8) Connect the negative voltage reference terminal to the EV kit pad labeled AGND.
- 9) If  desired, connect load 1 from PAOUT to PGND1, and connect load 2 from RFOUT to PGND2.
- 10)  Turn on the power supply and voltage reference.
- 11)  Install a shunt on jumper JU1.
- 12)  With  the  voltmeter,  verify  that  the  voltage  from PAOUT  to  PGND1  is  approximately  2.5  times  the reference voltage.
- 13)  Install a shunt on jumper JU2 or JU3.
- 14)  With  the  voltmeter,  verify  that  the  voltage  from RFOUT to PGND2 is 2.8V.

## Detailed Description of Hardware PAOUT

The  PA  step-down  output  regulates  to  2.5  times  the voltage at REFIN and provides 700mA drive capability. REFIN  must  connect  to  an  external  reference  supply between 0.2V and 1.7V. Connect the ground of the reference supply to the AGND pad. Do not use AGND as a power ground connection.

PAOUT is enabled when jumper JU1 is shorted.

## RFOUT

RFOUT is the output of a low-noise LDO regulator powered from the 3.1V output of step-down regulator OUT2. RFOUT regulates to 2.8V and provides 200mA drive current capability.

RFOUT  is  enabled  when  either  jumper  JU2  or  JU3  is shorted.

An optional Pi filter (C6, C8, and L3) can be installed to further  reduce noise on the RF output. Typical component values are 1 F F for C6 and C8 and 4.7 F H for L3. The RFOUTF pad is the filtered output.

## Evaluates:  MAX896 MAX896 Evaluation Kit

## Driving Enable Inputs from External Logic

To drive the enable inputs from an external logic source, remove the jumpers (JU1, JU2, and JU3). Connect the logic  signal  to  pin  2  (left)  of  the  corresponding  jumper (JU1  for  PAEN,  JU2  for  RFEN1,  or  JU3  for  RFEN2). Connect the signal ground to one of the PGND\_ pads. Refer  to  the Electrical  Characteristics section  in  the MAX8896 IC data sheet for the required logic levels.

## Table 1. Jumper Settings (JU1, JU2, JU3)

| JUMPER   | SHUNT POSITION                                                | SHUNT POSITION                                                       |
|----------|---------------------------------------------------------------|----------------------------------------------------------------------|
|          | OPEN                                                          | 1-2                                                                  |
| JU1      | PAOUT is disabled                                             | PAOUT is enabled                                                     |
| JU2      | When neither of these jumpers is installed, RFOUT is disabled | When either or both of these jumpers are installed, RFOUT is enabled |
| JU3      | When neither of these jumpers is installed, RFOUT is disabled |                                                                      |

## Evaluates:  MAX8896 MAX8896 Evaluation Kit

Figure 1. MAX8896 EV Kit Schematic

<!-- image -->

Figure 2. MAX8896 EV Kit Component Placement

<!-- image -->

## Evaluates:  MAX8896 MAX8896 Evaluation Kit

Figure 3. MAX8896 EV Kit Layout-Component Side

<!-- image -->

Figure 4. MAX8896 EV Kit Layout-Solder Side

<!-- image -->

## Evaluates:  MAX8896 MAX8896 Evaluation Kit

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.