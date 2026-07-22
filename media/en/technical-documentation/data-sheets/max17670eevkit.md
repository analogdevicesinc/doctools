<!-- lastmod 2022-08-02 -->
## MAX17670EEVKIT# Evaluation Kit

## General Description

The MAX17670E evaluation kit (EV kit) is a fully assembled  and  tested  circuit  board  that  demonstrates  the performance  of  the  MAX17670E  dual-output  regulator integrating  a  high-efficiency,  high  voltage  fixed  output voltage,  synchronous  step-down  DC-DC  converter,  and a  high-PSRR,  low-noise,  fixed-output  linear  regulator. The  EV  kit  is  designed  for  a  high  efficiency  solution. The EV kit generates a 3.3V step-down converter output voltage and a fixed 3.0V linear regulator output voltage at  load  currents  up  to  150mA  and  20mA,  respectively. When  the  linear  regulator  output  is  loaded,  the  Stepdown converter output current is reduced by I LDO , where I LDO  is  the  load  current  on  the  linear  regulator  output. The EV kit draws only 70µA supply current under no-load conditions.  The  step-down  converter  is  programmed  to a  switching  frequency  of  200kHz  and  delivers  a  peak efficiency  of  90.6%  with  the  supplied  components.  The dual-output device is simple to use and easily configurable with  minimal  external  components.  The  EV  kit  features adjustable input undervoltage lockout, open-drain RESET signal, hysteretic peak current-limit protection and external frequency synchronization.

Ordering Information appears at end of data sheet.

## Evaluates: MAX17670 3.3V Step-Down Converter Output Voltage and 3.0V Linear Regulator Output Voltage Application

## Benefits and Features

- 4.5V to 60V Input-Voltage Range for the Step-Down Converter
- 3.3V Step-Down Converter Output Voltage, Up To 150mA Continuous Load Current
- 3.0V Linear Regulator Output Voltage, Up To 20mA Continuous Load Current
- Peak Efficiency of 90.6% for the Step-Down Converter
- 70µA No-Load Supply Current
- 200kHz Switching Frequency
- Internal Soft-Start
- EN/UVLO Input, Resistor-Programmable UVLO Threshold
- MODE/SYNC Pin to Select PWM or PFM Mode
- Open-Drain RESET Output to Monitor Dual Outputs
- External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

<!-- image -->

## MAX17670EEVKIT# Evaluation Kit

## Quick Start

## Required Equipment

- MAX17670EEVKIT#
- 4.5V to 60V, 200mA DC-input power supply
- Two loads capable of sinking 150mA and 20mA
- Two digital voltmeters (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Set the power supply at a voltage between 4.5V and 60V. Disable the power supply.
- 2) Connect  the  positive  terminal  of  the  power  sup -ply  to  the  VIN  PCB  pad  and  the  negative  terminal to  the  nearest GND PCB pad. Connect the positive terminal  of  the  150mA  load  to  the  VOUT  PCB  pad and the negative terminal to the nearest GND PCB pad. Connect the positive terminal of the 20mA load to the OUTL PCB pad and the negative terminal to the nearest GND PCB pad.

## Evaluates: MAX17670 3.3V Step-Down Converter Output Voltage and 3.0V Linear Regulator Output Voltage Application

connected to the output of the step-down converter. The EV kit is designed for a high efficiency solution. The EV kit generates a 3.3V step-down converter output voltage and a fixed 3.0V linear regulator output voltage, at load currents  up  to  150mA  and  20mA,  respectively.  When the linear regulator output is loaded, the step-down con -verter  output  current  is  reduced  by  I LDO ,  where  I LDO is  the  load  current  on  the  linear  regulator output.  The EV  kit  draws  only  70µA  supply  current  under  no-load conditions.  The step-down converter is programmed to a  switching  frequency  of  200kHz  and  delivers  a  peak efficiency  of  90.6%  with  the  supplied  components.  The dual-output  device  is  simple  to  use  and  easily  configurable  with  minimal  external  components. The  EV  kit features  adjustable-input  undervoltage  lockout,  opendrain RESET signal, hysteretic peak current-limit protec -tion and external frequency synchronization.

- 3) Connect the DVMs across the VOUT PCB pad and the  nearest  GND  PCB  pad,  and  across  the  OUTL PCB pad and the nearest GND PCB pad.
- 4) Verify that the jumper JU1 is open (see Table 1 ).
- 5) Select the shunt position on the jumper JU2 accord -ing to the intended mode of operation (see Table 2 ).
- 6) Turn on the DC power supply.
- 7) Enable the loads. If linear regulator output is not load -ed, step-down converter output can be loaded up to 150mA. Else, it can be loaded up to (150 - I LDO )mA, where I LDO is the load current on the linear regulator output in mA.
- 8) Verify that the DVMs display 3.3V and 3.0V.
- 9) Vary  the  input  voltage  from  4.5V  to  60V,  and  vary the load currents on step-down converter and linear regulator outputs, and verify that the output voltages of step-down converter and linear regulator are 3.3V and 3.0V, respectively.

## Detailed Description

The MAX17670E evaluation kit (EV kit) is a fully assembled  and  tested  circuit  board  that  demonstrates  the performance  of  the  MAX17670E  dual-output  regulators integrating  a  high-efficiency,  high  voltage  fixed  output voltage, synchronous step-down DC-DC converter, and a high-PSRR, low-noise, fixed output linear regulator. The step-down  converter  operates  over  a  wide  input  range of  4.5V  to  60V  and  the  input  of  the linear  regulator  is This EV kit includes an EN/UVLO PCB pad and JU1 to enable the step-down converter output at a desired input voltage.  The  MODE/SYNC  PCB  pad  and  JU2  are  pro -vided  for  selecting  the  intended  mode  of  operation  and to allow an external clock to synchronize the step-down converter. A RESET PCB pad is available for monitoring the RESET output.

## Setting the Input EN/UVLO Level

The device offers an adjustable-input undervoltage lock -out  level.  Set  the  voltage  at  which  the  device  turns  on with a resistive voltage-divider connected from IN to GND. Connect the center node of the divider to EN/UVLO as shown  in  Figure  1.  Choose  R1  to  be  3.3MΩ  and  then calculate R2 as follows:

<!-- formula-not-decoded -->

where  V INU   is  the  voltage  above  which  the  device  is required to turn on. The allowed minimum value of V INU is 4V. See Table 1 for proper jumper settings.

Figure 1. Setting the Input-Undervoltage Lockout

<!-- image -->

## MAX17670EEVKIT# Evaluation Kit

## Evaluates: MAX17670 3.3V Step-Down Converter Output Voltage and 3.0V Linear Regulator Output Voltage Application

## MODE Selection and External Clock Synchronization (MODE/SYNC)

The  device  features  a  MODE/SYNC  pin  for  selecting either  forced  PWM  or  PFM  mode  of  operation.  If  the MODE/SYNC pin is grounded, the device operates in a constant-frequency PWM mode at all loads. If the MODE/ SYNC pin is unconnected, the device operates in PFM mode  at  light  loads.  Refer  to  the  MAX17670  IC  data sheet for more information on PWM and PFM modes of operation.

Table 2 shows the EV kit jumper settings that can be used to configure the desired mode of operation.

The internal oscillator of the device can be synchronized to  an  external  clock  signal  on  the  MODE/SYNC  pin. The  external  synchronization  clock  frequency  must  be between 1.1 x f SW and 1.4 x f SW , where f SW is the fre- quency programmed by the resistor (R5) connected to the RT pin. The minimum external clock on-time and off-time pulse-widths  should  be  greater  than  100ns.The  jumper JU2 must be unconnected before applying  the  external clock at the MODE/SYNC pin.

## RESET Output

The EV kit provides a RESET PCB pad to monitor the stepdown converter output voltage and the linear regulator output voltage. RESET goes to high impedance 2.1ms after both step-down converter and linear regulator outputs rise above 95% of their nominal set value, if V INL is  above  V INL\_ UVLO (2.18V typ) during startup. Otherwise, RESET only considers step-down converter output voltage for its high impedance state. Refer to the MAX17670 IC data sheet for more information.

## Table 1. Step-down converter Converter Enable (EN/UVLO) Description (JU1)

| SHUNT POSITION   | EN/UVLO PIN                                                | OUTPUT                                                  |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| Not installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 1-2              | Connected to GND                                           | Disabled                                                |

## Table 2. MODE/SYNC Description (JU2)

| SHUNT POSITION   | MODE/SYNC PIN    | MODE                  |
|------------------|------------------|-----------------------|
| 1-2              | Connected to GND | PWM Mode of operation |
| Not installed*   | Unconnected      | PFM Mode of operation |

## MAX17670EEVKIT# Evaluation Kit

## MAX17670E EV Kit Performance Report

(V IN  = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17670 3.3V Step-Down Converter Output Voltage and 3.0V Linear Regulator Output Voltage Application

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17670EEVKIT# Evaluation Kit

## Evaluates: MAX17670 3.3V Step-Down Converter Output Voltage and 3.0V Linear Regulator Output Voltage Application

## MAX17670E EV Kit Performance Report (continued)

(V IN  = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17670EEVKIT# Evaluation Kit

## Evaluates: MAX17670 3.3V Step-Down Converter Output Voltage and 3.0V Linear Regulator Output Voltage Application

## MAX17670E EV Kit Performance Report (continued)

(V IN  = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: INL CONNECTED TO EXTERNAL SUPPLY

<!-- image -->

<!-- image -->

CONDITIONS: f SW = 200kHz, 150Ω RESISTIVE LOAD ON LINEAR REGULATOR, INL CONNECTED TO VOUT

<!-- image -->

<!-- image -->

## MAX17670EEVKIT# Evaluation Kit

## Component Suppliers

| SUPPLIER        | WEBSITE                |
|-----------------|------------------------|
| Coilcraft, Inc. | www.coilcraft.com      |
| Murata Americas | www.murataamericas.com |
| Panasonic Corp. | www.panasonic.com      |

Note: Indicate that you are using the MAX17670 when contacting these component suppliers.

Evaluates: MAX17670 3.3V Step-Down Converter Output Voltage and 3.0V Linear Regulator Output Voltage Application

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17670EEVKIT# | EVKIT  |

## MAX17670EEVKIT# Evaluation Kit

## MAX17670E EV System Bill of Materials

|   No. | Description                                                       |   Quantity | Designator   | Part Number              |
|-------|-------------------------------------------------------------------|------------|--------------|--------------------------|
|     1 | 1μF, 10%, 100V, X7R,Ceramic capacitor (1206)                      |          1 | C1           | TDK C3216X7R2A105K160    |
|     2 | 2.2μF, 10%, 10V, X7R,Ceramic capacitor (0603)                     |          1 | C2           | MURATA GRM188R71A225KE15 |
|     3 | 10μF, 10%, 25V, X7R,Ceramic capacitor (0805)                      |          1 | C4           | MURATA GRM21BZ71E106KE15 |
|     4 | 22μF, 20%, 100V, Electrolytic capacitor                           |          1 | C5           | PANASONIC EEE-TG2A220UP  |
|     5 | 2-pin header (36-pin header 0.1' centers)                         |          2 | JU1, JU2     | SULLINS PEC02SAAN        |
|     6 | INDUCTOR, 150μH, 0.73A                                            |          1 | L1           | COILCRAFT LPS6235-154MR  |
|     7 | 3.32MΩ, ±1%, 1/10W, resistor (0402)                               |          1 | R1           | Any                      |
|     8 | 1.27MΩ, ±1%, 1/10W, resistor (0402)                               |          1 | R2           | Any                      |
|     9 | 0Ω, ±5%, 1/16W, resistor (0402)                                   |          2 | R3, R7       | Any                      |
|    10 | 274kΩ, ±1%, 1/10W, resistor (0402)                                |          1 | R5           | Any                      |
|    11 | 10kΩ, ±1%, 1/16W, resistor (0402)                                 |          1 | R6           | Any                      |
|    12 | Integrated Step-down Converter with a Linear Regulator, MAX17670E |          1 | U1           | MAXIM MAX17670EATB+      |

| Jumper Table   | Jumper Table   |
|----------------|----------------|
| Jumper         | Shunt Position |
| JU1, JU2       | Open           |

## Evaluates: MAX17670 3.3V Step-Down Converter Output Voltage and 3.0V Linear Regulator Output Voltage Application

## MAX17670EEVKIT# Evaluation Kit

## MAX17670E EV System Schematics

<!-- image -->

## Evaluates: MAX17670 3.3V Step-Down Converter Output Voltage and 3.0V Linear Regulator Output Voltage Application

## MAX17670EEVKIT# Evaluation Kit

## MAX17670E EV System PCB Layouts

<!-- image -->

<!-- image -->

<!-- image -->

MAX17670E EV Kit-Top Silkscreen

MAX17670E EV Kit-Top Layer

Evaluates: MAX17670 3.3V Step-Down Converter Output Voltage and 3.0V Linear Regulator Output Voltage Application

## MAX17670EEVKIT# Evaluation Kit

Evaluates: MAX17670 3.3V Step-Down Converter Output Voltage and 3.0V Linear Regulator Output Voltage Application

## MAX17670E EV System PCB Layouts (continued)

<!-- image -->

MAX17670E EV Kit-Layer 2

MAX17670E EV Kit-Layer 3

<!-- image -->

## MAX17670EEVKIT# Evaluation Kit

Evaluates: MAX17670 3.3V Step-Down Converter Output Voltage and 3.0V Linear Regulator Output Voltage Application

## MAX17670E EV System PCB Layouts (continued)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

MAX17670E EV Kit-Bottom Layer

MAX17670E EV Kit-Bottom Silkscreen

## MAX17670EEVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/18           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

## Evaluates: MAX17670 3.3V Step-Down Converter Output Voltage and 3.0V Linear Regulator Output Voltage Application