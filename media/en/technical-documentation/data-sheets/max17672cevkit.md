<!-- lastmod 2022-08-02 -->
## MAX17672CEVKIT# Evaluation Kit

## General Description

The MAX17672CEVKIT# evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the performance  of  the  MAX17672C  dual-output  regulator integrating a high-efficiency, high voltage, adjustable out -put  voltage,  synchronous  step-down  DC-DC  converter, and a high-PSRR, low-noise, fixed-output linear regulator. The EV kit is designed for a balanced size and efficiency solution and generates a 5V step-down converter output voltage and a fixed 1.8V linear regulator output voltage at load currents up to 150mA and 50mA, respectively. When the linear regulator output is loaded, the step-down con -verter output current is reduced by I LDO, where I LDO is the load current on the linear regulator output in mA. The EV  kit  draws  only  120µA  supply  current  under  no-load conditions. The step-down converter is programmed to a switching frequency of 600kHz and delivers a peak effi -ciency of 90.2% with the supplied components. The dualoutput device is simple to use and easily configurable with minimal external components. The EV kit features adjust -able input undervoltage lockout, open-drain RESET signal,  hysteretic peak current-limit protection and external clock  synchronization. The  EV  kit  also  provides  a  good layout  example,  which  is  optimized  for  conducted  and radiated EMI. For more details about the IC benefits and features, refer to the MAX17672 IC data sheet

Ordering Information appears at end of data sheet.

## Evaluates: MAX17672 5V Buck Output Voltage and 1.8V Linear Regulator Output Voltage

## Features

- 6.5V to 60V Input-Voltage Range for the Step-Down Converter
- 5V Step-Down Converter Output Voltage, Up To 150mA Continuous Load Current
- 1.8V Linear Regulator Output Voltage, Up To 50mA Continuous Load Current
- Peak Efficiency of 90.2% for the Step-Down Converter
- 120 µA No-Load Supply Current
- 600kHz Switching Frequency
- Internal Soft-Start
- EN/UVLO Input, Resistor-Programmable UVLO Threshold
- MODE/SYNC Pin to Select PWM or PFM Mode
- Open-Drain RESET Output to Monitor Dual Outputs
- External Clock Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

<!-- image -->

## MAX17672CEVKIT# Evaluation Kit

## Quick Start

## Required Equipment

- MAX17672CEVKIT#
- 6.5V to 60V, 200mA DC-input power supply
- Two loads capable of sinking 150mA and 50mA
- Two digital voltmeters (DVM)

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps below to verify board operation.

## Caution: Do not turn on the power supply until all connections are completed.

- 1) Set the power supply at a voltage between 6.5V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest GND PCB pad. Connect the positive terminal of the 150mA load to the VOUT PCB pad and the negative terminal to the nearest GND PCB pad. Connect the positive terminal of the 50mA load to the OUTL PCB pad and the negative terminal to the nearest GND PCB pad.
- 3) Connect the DVMs across the VOUT PCB pad and the nearest GND PCB pad, and across the OUTL PCB pad and the nearest GND PCB pad.
- 4) Verify that the jumper JU1 is open (see Table 1 ).
- 5) Select the shunt position on the jumper JU2 according to the intended mode of operation (see Table 2 ).
- 6) Turn on the DC power supply.
- 7) Enable the loads. If linear regulator output is not loaded, step-down converter output can be loaded up to 150mA. Else, it can be loaded up to (150 - I LDO)mA, where I LDO is the load current on the linear regulator output in mA.
- 8) Verify that the DVMs display 5V and 1.8V.
- 9) Vary the input voltage from 6.5V to 60V, and vary the load currents on step-down converter and linear regulator outputs, and verify that the output voltages of stepdown converter and linear regulator are 5V and 1.8V, respectively.
- 10) Connect the DVM across the RESET pad and GND. Verify that the DVM displays 5V.
- 11) Reduce the input voltage to 5V which is below the EN/UVLO falling threshold.
- 12) Connect the DVM across the VOUT pad and nearest GND. Verify that the DVM displays 0V.
- 13) Connect the DVM across the OUTL pad and nearest GND. Verify that the DVM displays 0V.

## Evaluates: MAX17672 5V Buck Output Voltage and 1.8V Linear Regulator Output Voltage

- 14) Connect the DVM across the RESET pad and GND. Verify that the DVM displays 0V.
- 15) Disable the input power supply.

## Detailed Description

The  MAX17672CEVKIT#  evaluation  kit  (EV  kit)  is  a  fully assembled and tested  circuit  board  that  demonstrates  the performance  of  the  MAX17672C  dual-output  regulators integrating a high-efficiency, high voltage, adjustable output voltage,  synchronous  step-down  DC-DC  converter,  and  a high-PSRR,  low-noise,  fixed  output  linear  regulator.  The step-down  converter  operates  over  a  wide  input  range  of 6.5V  to  60V  and  the  input  of  the  linear  regulator  is  con -nected to the output of the step-down converter. The EV kit is  designed for a balanced size and efficiency solution and generates  a  5V  step-down  converter  output  voltage  and  a fixed 1.8V linear regulator output voltage, at load currents up to 150mA and 50mA, respectively. When the linear regulator output is loaded, the step-down converter output current is reduced by I LDO, where I LDO is the load current on the linear regulator output in mA. The EV kit draws only 120µA supply current under no-load conditions. The step-down converter is programmed to a switching frequency of 600kHz and deliv -ers a peak efficiency of 90.2% with the supplied components. The dual-output device is simple to use and easily configu -rable with minimal external components. The EV kit features adjustable-input  undervoltage  lockout,  open-drain RESET signal,  hysteretic  peak  current-limit  protection  and  external frequency synchronization.

This  EV  kit  includes  an  EN/UVLO  PCB  pad  and  JU1  to enable  the  step-down  converter  output  at  a  desired  input voltage. The MODE/SYNC PCB pad and JU2 are provided for  selecting  the  intended  mode  of  operation  and  to  allow an  external  clock  to  synchronize  the  step-down  converter. A RESET PCB pad is available for monitoring the RESET output.

Figure 1. Setting the Input-Undervoltage Lockout

<!-- image -->

## MAX17672CEVKIT# Evaluation Kit

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The MAX17672C offers an Enable and adjustable input undervoltage  lockout  feature.  In  this  EV  kit,  for  nor -mal  operation,  leave  the  EN/UVLO  jumper  (JU1)  open. When  JU1  is  left  open,  the  MAX17672C  is  enabled when the input voltage rises above 6.4V.  To disable the MAX17672C,  install  a  jumper  across  pins  1-2  on  JU1. See Table 1 for JU1 settings. The EN/UVLO PCB pad on the EV kit supports external Enable/Disable control of the device.  Leave  jumper  JU1  open  when  external  Enable/ Disable control is desired. A potential divider formed by R1 and R2 sets the input voltage (V INU ) above which the converter is enabled when JU1 is left open.

Choose R1 to be 3.32MΩ (max), and then calculate R2 as follows:

<!-- formula-not-decoded -->

where  V INU   is  the  voltage  at  which  the  device  is  required to turn on, and R1 and R2 are in kΩ. The allowed minimum value of V INU  is 4V. For more details about setting the under -voltage lockout level, refer to the MAX17672 data sheet. .

## Mode Selection (MODE/SYNC)

The  EV  kit  provides  a  jumper  (JU2)  that  allows  the MAX17672C to operate in PWM and PFM modes. Refer to  the  MAX17672  data  sheet  for  more  details  on  the modes of operation. Table  2 shows  the  mode  selection jumper (JU2) settings that can be used to configure the desired mode of operation.

## External Clock Synchronization  (MODE/SYNC)

The  EV  kit  provides  a  MODE/SYNC  PCB  pad  to  syn -chronize  the  MAX17672C to an optional external clock. Leave  jumper  (JU2)  open  when  external  clock  signals are applied. In the presence of a valid external clock for synchronization, the MAX17672C operates in PWM mode only. For more details about external clock synchroniza -tion, refer to the MAX17672 data sheet.

## Table 1. Step-Down Converter Enable (EN/UVLO) Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | OUTPUT                                                  |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| Not installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 1-2              | Connected to GND                                           | Disabled                                                |

* Default position.

## Evaluates: MAX17672 5V Buck Output Voltage and 1.8V Linear Regulator Output Voltage

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit  provides  a RESET PCB  pad  to  monitor  the status of the step-down converter output voltage and the linear regulator output voltage. RESET goes high 2.1ms after  both  step-down converter and linear regulator out -puts rise above 95% of their nominal set value if V INL is above V INL\_UVLO  (2.18V typ) during startup. Otherwise, RESET only  considers  step-down converter output volt -age for its high-impedance state. RESET goes low when one of the either output voltages fall below 92% (typ) of their nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The MAX17672CEVKIT# PCB layout provides an optional electrolytic  capacitor  (C5  =  22μF/100V).  This  capacitor limits  the  peak  voltage  at  the  input  of  the  MAX17672C when  the  DC  input  source  is  'Hot-Plugged'  to  the  EV kit  input  terminals  with  long  input  cables.  The  equiva -lent  series  resistance (ESR) of the electrolytic capacitor dampens  the  oscillations  caused  by  interaction  of  the inductance  of  the  long  input  cables,  and  the  ceramic capacitors at the step-down converter input.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  cur -rents drawn by the switching power converter and limits the noise injected back into the input power source.

The MAX17672CEVKIT# PCB has designated footprints for  the  placement  of  conducted  EMI  filter  components. Use of these filter components results in lower conducted emissions below CISPR22 Class B limits. Cut open the trace  at  L2  before  installing  conducted  EMI  filter  components.  The  MAX17672CEVKIT#  PCB  layout  is  also designed to limit radiated emissions from switching nodes of  the  power  converter,  resulting  in  radiated  emissions below CISPR22 Class B limits.

## Table 2. MODE Selection (MODE/SYNC) Jumper (JU2) Settings

| SHUNT POSITION   | MODE/SYNC PIN    | MODE                  |
|------------------|------------------|-----------------------|
| 1-2              | Connected to GND | PWM Mode of operation |
| Not installed*   | Unconnected      | PFM Mode of operation |

* Default position.

## MAX17672CEVKIT# Evaluation Kit

## MAX17672CEVKIT# Performance Report

(V IN  = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

MAX17672C, 5V OUTPUT STEP-DOWN CONVERTER, LOAD AND LINE REGULATION

<!-- image -->

## Evaluates: MAX17672 5V Buck Output Voltage and

## 1.8V Linear Regulator Output Voltage

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17672CEVKIT# Evaluation Kit

Evaluates: MAX17672

## 5V Buck Output Voltage and

## 1.8V Linear Regulator Output Voltage

## MAX17672CEVKIT# Performance Report (continued)

(V IN  = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17672CEVKIT# Evaluation Kit

Evaluates: MAX17672

## 5V Buck Output Voltage and

## 1.8V Linear Regulator Output Voltage

## MAX17672C EV Kit Performance Report (continued)

(V IN  = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: INL CONNECTED TO EXTERNAL SUPPLY

<!-- image -->

CONDITIONS: PWM MODE, fSW = 600kHz, 33Ω RESISTIVE LOAD

<!-- image -->

MAX17672CCONDUCTEDEMISSIONSPLOT 5VOUTPUT,150mALOADCURRENT

<!-- image -->

## MAX17672CEVKIT# Evaluation Kit

## Component Suppliers

| SUPPLIER        | WEBSITE                |
|-----------------|------------------------|
| Coilcraft, Inc. | www.coilcraft.com      |
| MurataAmericas  | www.murataamericas.com |
| Panasonic Corp. | www.panasonic.com      |
| Vishay          | www.vishay.com         |
| TDK             | www.tdk.com            |
| Taiyo Yuden     | www.yuden.co.jp/eu/    |

Note: Indicate that you are using the MAX17672 when contacting these component suppliers.

## Evaluates: MAX17672

## 5V Buck Output Voltage and

## 1.8V Linear Regulator Output Voltage

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17672CEVKIT# | EVKIT  |

## MAX17672C EV System Bill of Materials

|   No. | Designator   | Description                                                       |   Quantity | Manufacturer Part Number    |
|-------|--------------|-------------------------------------------------------------------|------------|-----------------------------|
|     1 | C1           | 1μF, 10%, 100V, X7R,Ceramic capacitor (1206)                      |          1 | TAIYO YUDEN HMK316B7105KL-T |
|     2 | C2           | 2.2μF, 10%, 10V, X7R,Ceramic capacitor (0603)                     |          1 | MURATA GRM188R71A225KE15    |
|     3 | C4           | 4.7μF, 10%, 16V, X7R,Ceramic capacitor (0603)                     |          1 | MURATA GRM188Z71C475KE21    |
|     4 | C5           | 22μF, 20%, 100V, Electrolytic capacitor                           |          1 | PANASONIC EEE-TG2A220UP     |
|     5 | C7           | 0.1μF, 10%, 16V, X7R,Ceramic capacitor (0402)                     |          1 | TAIYO YUDEN EMK105B7104KV-F |
|     6 | C9           | 0.1μF, 10%, 100V, X7R,Ceramic capacitor (0603)                    |          1 | TAIYO YUDEN HMK107B7104KA-T |
|     7 | JU1, JU2     | 2-pin header (36-pin header 0.1' centers)                         |          2 | SULLINS PEC02SAAN           |
|     8 | L1           | INDUCTOR, 68μH, 0.29A                                             |          1 | COILCRAFT LPS3015-683MR     |
|     9 | R1           | 3.32MΩ, ±1%, 1/16W, resistor (0402)                               |          1 |                             |
|    10 | R2           | 787kΩ, ±1%, 1/16W, resistor (0402)                                |          1 |                             |
|    11 | R3           | 261kΩ, ±1%, 1/16W, resistor (0402)                                |          1 |                             |
|    12 | R4           | 49.9kΩ, ±1%, 1/16W, resistor (0402)                               |          1 |                             |
|    13 | R6           | 10kΩ, ±1%, 1/16W, resistor (0402)                                 |          1 |                             |
|    14 | R7           | 0Ω, ±5%, 1/16W, resistor (0402)                                   |          1 |                             |
|    15 | U1           | Integrated Step-down Converter with a Linear Regulator, MAX17672C |          1 | MAXIM MAX17672CATB+         |
|    16 | C10          | OPTIONAL: 1µF, 10%, 100V, X7R, Ceramic capacitor (1206)           |          1 | TAIYO YUDEN HMK316B7105KL-T |
|    17 | L2           | OPTIONAL: INDUCTOR, 8.2μH, 2.2A (3mm x 3mm)                       |          1 | COILCRAFT LPS3010-822ME     |

| Jumper Table   | Jumper Table   |
|----------------|----------------|
| Jumper         | Shunt Position |
| JU1, JU2       | Open           |

## Evaluates: MAX17672 5V Buck Output Voltage and 1.8V Linear Regulator Output Voltage

## MAX17672CEVKIT# Evaluation Kit

## MAX17672C EV System Schematic

<!-- image -->

## MAX17672CEVKIT# Evaluation Kit

## MAX17672C EV System PCB Layout

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

MAX17672C EV Kit-Top Silkscreen

MAX17672C EV Kit-Top Layer

## Evaluates: MAX17672

## 5V Buck Output Voltage and

## 1.8V Linear Regulator Output Voltage

## MAX17672CEVKIT# Evaluation Kit

## Evaluates: MAX17672 5V Buck Output Voltage and

## 1.8V Linear Regulator Output Voltage

## MAX17672C EV System PCB Layout (continued)

<!-- image -->

MAX17672C EV Kit-Layer 2

MAX17672C EV Kit-Layer 3

<!-- image -->

<!-- image -->

## MAX17672CEVKIT# Evaluation Kit

MAX17672C EV Kit-Bottom Layer

MAX17672C EV Kit-Bottom Silkscreen

## Evaluates: MAX17672 5V Buck Output Voltage and

## 1.8V Linear Regulator Output Voltage

## MAX17672C EV System PCB Layout (continued)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17672CEVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION          | PAGES CHANGED   |
|-------------------|-----------------|----------------------|-----------------|
|                 0 | 12/18           | Initial release      | -               |
|                 1 | 7/19            | Updated all sections | 1-12            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

## Evaluates: MAX17672

## 5V Buck Output Voltage and

## 1.8V Linear Regulator Output Voltage